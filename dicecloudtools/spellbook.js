const API_BASE = "https://api.andrew-zhu.com";

// error and success messages
const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');
if (error) {
    document.getElementById("error").style.visibility = "visible";
}

// mode handling
var mode_is_single = true;
document.getElementById("mode-selector").onclick = function (e) {
    let select = document.getElementById("mode-selector");
    let single = document.getElementById("single-mode");
    let multi = document.getElementById("multi-mode");
    mode_is_single = !mode_is_single;


    if (mode_is_single) {
        select.innerText = "I want to add a few spells";
        single.style.height = "auto";
        single.style.visibility = "visible";
        multi.style.height = "0";
        multi.style.visibility = "hidden";
    } else {
        select.innerText = "I want to add a lot of spells";
        single.style.height = "0";
        single.style.visibility = "hidden";
        multi.style.height = "auto";
        multi.style.visibility = "visible";
    }
};

// actual spell stuff
var spells = Array();
var spellsToAdd = Array();

updateToAddList = function () {
    console.log("Updating list");
    let ul = document.getElementById("to-add-list");
    $(ul).empty();
    for (let spell of spellsToAdd) {
        $(`<button class="list-group-item list-group-item-action" id="selected-spell-${spell.index}">${spell.name}</button>`).appendTo(ul);
        document.getElementById(`selected-spell-${spell.index}`).onclick = () => {
            toggleSingleSpell(spell);
        };
    }
};

clearToAdd = function () {
    // set all search elements to active
    for (let spell of spellsToAdd) {
        let searchElem = document.getElementById(`spell-${spell.index}`);
        if (searchElem != null) {
            searchElem.classList.remove("active");
        }
    }

    spellsToAdd.length = 0; // Clear the array including all of its references
    updateToAddList();
};
document.getElementById("clear-list-button").onclick = clearToAdd;

// onload, load spell metadata
$(function () {
    console.log("Getting data");
    $.getJSON(`${API_BASE}/spell_options`, function (data) {
        console.log("Loading data");
        spells = data;
    });
});

// single mode handlers
toggleSingleSpell = function (spell) {
    console.log(spell);
    let searchElem = document.getElementById(`spell-${spell.index}`);
    if (spellsToAdd.includes(spell)) {
        let i = spellsToAdd.indexOf(spell);
        spellsToAdd.splice(i, 1);
        if (searchElem != null) {
            searchElem.classList.remove("active");
        }
    } else {
        spellsToAdd.push(spell);
        searchElem.classList.add("active");
    }
    updateToAddList();
};
var searchResults;
recalcSingleSearch = function () {
    let query = document.getElementById("single-search").value;
    searchResults = spells.filter(spell =>
        spell.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    let ul = document.getElementById("single-search-results");
    $(ul).empty();
    for (let spell of searchResults) {
        let spellClasses = "list-group-item list-group-item-action";
        if (spellsToAdd.includes(spell)) {
            spellClasses += " active"
        }
        $(`<button class="${spellClasses}" id="spell-${spell.index}">${spell.name}</button>`).appendTo(ul);
        document.getElementById(`spell-${spell.index}`).onclick = () => {
            toggleSingleSpell(spell);
        };
    }
};
document.getElementById("single-search").oninput = recalcSingleSearch;


// multi mode handlers
recalcMultiSpells = function () {
    let level = +document.getElementById("multi-level").value;
    let klass = document.getElementById("multi-class").value;
    spellsToAdd = spells.filter(spell =>
        +spell.level === level && spell.classes.indexOf(klass.toLowerCase()) !== -1
    );
    updateToAddList();
};
document.getElementById("multi-level").oninput = recalcMultiSpells;
document.getElementById("multi-class").oninput = recalcMultiSpells;

// actual posting
submitForm = function () {
    console.log("submit");
    let apiKey = document.getElementById("apiKey").value;
    let charURL = document.getElementById("url").value;
    let data = {apiKey: apiKey, charURL: charURL, spells: spellsToAdd};
    console.log(data);
    $.ajax({
        url: `${API_BASE}/spellbook`,
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
            let alert;
            if (data.success) {
                alert = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                  Successfully inserted ${data.inserted} spells.
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>`;
                clearToAdd();
            } else {
                alert = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                  Failed to insert: ${data.error}
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>`
            }
            $("body").prepend($(alert));
        }
    });
};
document.getElementById("add-spells-button").onclick = submitForm;
