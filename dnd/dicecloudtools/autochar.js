const API_BASE = "https://api.andrew-zhu.com";
const DATA_BASE = "https://andrew-zhu.com/dnd/dicecloudtools";

var races, classes, backgrounds;

const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');
if (error) {
    document.getElementById("error").style.visibility = "visible";
}

after_load_data = function (data) {
    console.log("Loading data");
    races = data.races;
    classes = data.classes;
    backgrounds = data.backgrounds;

    let raceSelect = document.getElementById("race");
    raceSelect.options.length = 0;
    for (let i = 0; i < races.length; i++) {
        raceSelect.options[raceSelect.options.length] = new Option(races[i], i + '');
    }

    let classSelect = document.getElementById("klass");
    classSelect.options.length = 0;
    for (let i = 0; i < classes.length; i++) {
        classSelect.options[classSelect.options.length] = new Option(classes[i].name, i + '');
    }

    let backgroundSelect = document.getElementById("background");
    backgroundSelect.options.length = 0;
    for (let i = 0; i < backgrounds.length; i++) {
        backgroundSelect.options[backgroundSelect.options.length] = new Option(backgrounds[i], i + '');
    }
};


$(function () {
    console.log("Getting data");
    $.getJSON(`${API_BASE}/autochar_options`, after_load_data);
});

document.getElementById("klass").onchange = function (e) {
    let select = document.getElementById("klass");
    let klass = classes[select.options[select.selectedIndex].value];
    let subclasses = klass.subclasses;

    let subclassForm = document.getElementById("subclass-group");
    let subclassSelect = document.getElementById("subclass");
    if (subclasses.length) {
        subclassForm.style.visibility = "visible";
        subclassSelect.options.length = 0;
        for (let i = 0; i < subclasses.length; i++) {
            subclassSelect.options[subclassSelect.options.length] = new Option(subclasses[i], i + '');
        }
    } else {
        subclassForm.style.visibility = "hidden";
        subclassSelect.options.length = 0;
    }
};