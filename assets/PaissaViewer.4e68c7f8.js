var De=Object.defineProperty;var Ie=(e,t,n)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var N=(e,t,n)=>(Ie(e,typeof t!="symbol"?t+"":t,n),n);import{c as Ne,d as B,r as K,w as ve,u as q,o as u,a as f,b as s,t as g,e as Me,n as ie,_ as le,P as Te,f as he,g as pe,h as H,i as ge,T as xe,D,j as Q,k as de,l as Oe,m as ue,p as m,q as S,F as J,s as ae,v as we,x as Se,y as oe,z as O,A as ce,B as ye,C as be,E as We,G as Ue}from"./index.8cb543f5.js";var Ee={exports:{}};(function(e,t){(function(n,l){e.exports=l()})(Ne,function(){var n="__v-click-outside",l=typeof window<"u",r=typeof navigator<"u",c=l&&("ontouchstart"in window||r&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],h=function(d){var p=d.event,v=d.handler;(0,d.middleware)(p)&&v(p)},C=function(d,p){var v=function(w){var E=typeof w=="function";if(!E&&typeof w!="object")throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:E?w:w.handler,middleware:w.middleware||function(k){return k},events:w.events||c,isActive:w.isActive!==!1,detectIframe:w.detectIframe!==!1,capture:Boolean(w.capture)}}(p.value),b=v.handler,P=v.middleware,L=v.detectIframe,T=v.capture;if(v.isActive){if(d[n]=v.events.map(function(w){return{event:w,srcTarget:document.documentElement,handler:function(E){return function(k){var a=k.el,o=k.event,_=k.handler,i=k.middleware,I=o.path||o.composedPath&&o.composedPath();(I?I.indexOf(a)<0:!a.contains(o.target))&&h({event:o,handler:_,middleware:i})}({el:d,event:E,handler:b,middleware:P})},capture:T}}),L){var re={event:"blur",srcTarget:window,handler:function(w){return function(E){var k=E.el,a=E.event,o=E.handler,_=E.middleware;setTimeout(function(){var i=document.activeElement;i&&i.tagName==="IFRAME"&&!k.contains(i)&&h({event:a,handler:o,middleware:_})},0)}({el:d,event:w,handler:b,middleware:P})},capture:T};d[n]=[].concat(d[n],[re])}d[n].forEach(function(w){var E=w.event,k=w.srcTarget,a=w.handler;return setTimeout(function(){d[n]&&k.addEventListener(E,a,T)},0)})}},y=function(d){(d[n]||[]).forEach(function(p){return p.srcTarget.removeEventListener(p.event,p.handler,p.capture)}),delete d[n]},A=l?{beforeMount:C,updated:function(d,p){var v=p.value,b=p.oldValue;JSON.stringify(v)!==JSON.stringify(b)&&(y(d),C(d,{value:v}))},unmounted:y}:{};return{install:function(d){d.directive("click-outside",A)},directive:A}})})(Ee);const Ce=Ee.exports,Fe={class:"dropdown-trigger"},Re={class:"button is-info","aria-haspopup":"true","aria-controls":"dropdown-menu"},Ve={class:"dropdown-menu",id:"dropdown-menu",role:"menu"},Be={class:"dropdown-content"},ze=B({__name:"Dropdown",props:{label:{}},setup(e){const t=Ce.directive,n=K(!1);function l(){n.value=!n.value}function r(){n.value=!1}return(c,h)=>ve((u(),f("div",{class:ie(["dropdown",{"is-active":n.value}]),onClick:l},[s("div",Fe,[s("button",Re,[s("span",null,g(c.label),1)])]),s("div",Ve,[s("div",Be,[Me(c.$slots,"default")])])],2)),[[q(t),r]])}}),Ye={},Ge={href:"https://ko-fi.com/U7U6I19EU",target:"_blank"},Xe=s("img",{height:"36",style:{border:"0px",height:"36px"},src:"https://storage.ko-fi.com/cdn/kofi4.png?v=3",border:"0",alt:"Buy Me a Coffee at ko-fi.com"},null,-1),je=[Xe];function qe(e,t){return u(),f("a",Ge,je)}const Qe=le(Ye,[["render",qe]]);class Ke{constructor(){N(this,"plotStates",new Map);N(this,"worlds",[]);N(this,"ws",null);N(this,"worldsLoaded",new Set);N(this,"worldMap",new Map);N(this,"districtNames",new Map);N(this,"isWSConnecting",!1);N(this,"isWSDisconnected",!1)}get isDisconnected(){return this.isWSDisconnected&&!this.isWSConnecting}init(){var t;(t=this.ws)==null||t.close(1e3),this.isWSConnecting=!0,this.ws=new WebSocket(Te),this.ws.addEventListener("open",()=>this.onWSOpen()),this.ws.addEventListener("close",n=>this.onWSClose(n)),this.ws.addEventListener("error",n=>console.warn("WebSocket error: ",n)),this.ws.addEventListener("message",n=>this.onRawMessage(n.data))}close(){var t;(t=this.ws)==null||t.close(1e3),this.worldsLoaded.clear()}async getWorlds(){try{const t=await he.get(`${pe}/worlds`);this.worlds=t.data;for(const n of t.data)this.worldMap.set(n.id,n);console.debug(`Loaded ${this.worlds.length} world defs.`)}catch(t){console.error("Failed to get world list:",t)}}async loadWorld(t,n=!1){if(console.debug(`Loading data for world ${t}...`),this.worldsLoaded.has(t)&&!n){console.debug(`World ID ${t} has been loaded - skipping loadWorld.`);return}this.worldsLoaded.add(t);let l;try{l=await he.get(`${pe}/worlds/${t}`)}catch(c){console.error("Failed to get world details:",c);return}const r=l.data;console.debug(`Got world detail for ${r.name} - ${r.num_open_plots} plots open.`);for(const c of r.districts){this.districtNames.set(c.id,c.name);for(const h of c.open_plots)this.plotStates.set(te(h),h)}}onRawMessage(t){let n;try{n=JSON.parse(t),console.debug("RECV",n)}catch(l){console.warn(l);return}switch(n.type){case"plot_open":return this.onPlotOpen(n.data);case"plot_update":return this.onPlotUpdate(n.data);case"plot_sold":return this.onPlotSold(n.data)}}onPlotOpen(t){this.plotStates.set(te(t),t)}onPlotUpdate(t){this.plotStates.set(te(t),t)}onPlotSold(t){this.plotStates.delete(te(t))}onWSOpen(){console.log("WS connected"),this.isWSDisconnected=!1,this.isWSConnecting=!1}onWSClose(t){console.log(`WS closed with ${t.code} (reason=${t.reason}; clean=${t.wasClean})`),this.isWSDisconnected=!0,t.wasClean&&t.code!==1012?this.isWSConnecting=!1:this.isWSConnecting||this.attemptReconnect(1)}attemptReconnect(t,n=5){if(!!this.isWSDisconnected){if(t>n){this.isWSDisconnected=!0,this.isWSConnecting=!1;return}console.log(`Attempting to reconnect (try ${t} of ${n})...`),this.init(),setTimeout(()=>this.attemptReconnect(t+1,n),t*1e3+Math.random()*1e3)}}worldName(t){var n,l;return(l=(n=this.worldMap.get(t))==null?void 0:n.name)!=null?l:t.toString()}districtName(t){var n;return(n=this.districtNames.get(t))!=null?n:t.toString()}nextOrLatestPhaseChange(){var r;const t=+new Date/1e3,n=Array.from(this.plotStates.values()).map(c=>{var h;return(h=c.lotto_phase_until)!=null?h:0}).sort((c,h)=>c-h),l=n.find(c=>c>t);return l||((r=n[n.length-1])!=null?r:0)}}function te(e){return`${e.world_id}-${e.district_id}-${e.ward_number}-${e.plot_number}`}const He=B({__name:"FlashOnChange",props:{value:{}},setup(e){return(t,n)=>(u(),H(xe,{mode:"out-in"},{default:ge(()=>[(u(),f("span",{key:t.value},g(t.value),1))]),_:1}))}});const X=le(He,[["__scopeId","data-v-34a89928"]]),ne=B({__name:"TimeDisplay",props:{time:{},format:{}},setup(e){const t=e,n=K(D.fromSeconds(t.time)),l=Q(()=>{switch(t.format){case"date":return n.value.toLocaleString(D.DATE_SHORT);case"dateDay":return n.value.toLocaleString(D.DATE_FULL);case"time":return n.value.toLocaleString(D.TIME_SIMPLE);case"timeSecs":return n.value.toLocaleString(D.TIME_WITH_SECONDS);case"datetime":return`${n.value.toLocaleString(D.DATE_FULL)} ${n.value.toLocaleString(D.TIME_SIMPLE)}`;case"datetimeWeekday":return`${n.value.toLocaleString(D.DATE_HUGE)} ${n.value.toLocaleString(D.TIME_SIMPLE)}`;case"relative":return n.value.toRelative();default:return n.value.toSeconds().toString()}});return de(()=>setInterval(()=>{var c;const r=Oe();(c=r==null?void 0:r.proxy)==null||c.$forceUpdate()},1e3)),(r,c)=>g(l.value)}}),Je={class:"dropdown-trigger"},Ze={class:"icon m-0 is-clickable","aria-haspopup":"true","aria-controls":"dropdown-menu"},et={class:"dropdown-menu",id:"dropdown-menu",role:"menu"},tt={class:"dropdown-content"},nt={class:"checkbox"},st=["checked","onChange"],se=B({__name:"FilterIcon",props:{options:{},selected:{}},emits:["selectionChanged"],setup(e,{emit:t}){const n=e,l=Ce.directive,r=K(!1);function c(y,A){const d=new Set(n.selected);y.currentTarget.checked?d.add(A):d.delete(A),t("selectionChanged",Array.from(d))}function h(){r.value=!0}function C(){r.value=!1}return(y,A)=>{const d=ue("font-awesome-icon");return ve((u(),f("div",{class:ie(["dropdown",{"is-active":r.value}]),onClick:h},[s("div",Je,[s("span",Ze,[m(d,{icon:["fas","filter"]}),S(" "+g(y.selected.length?y.selected.length:null),1)])]),s("div",et,[s("div",tt,[(u(!0),f(J,null,ae(y.options,p=>(u(),f("div",{class:"dropdown-item",key:p.value},[s("label",nt,[s("input",{type:"checkbox",checked:y.selected.includes(p.value),onChange:v=>c(v,p.value)},null,40,st),S(" "+g(p.label),1)])]))),128))])])],2)),[[q(l),C]])}}});var x=(e=>(e[e.LOTTERY=1]="LOTTERY",e[e.FREE_COMPANY=2]="FREE_COMPANY",e[e.INDIVIDUAL=4]="INDIVIDUAL",e))(x||{}),W=(e=>(e[e.ENTRY=1]="ENTRY",e[e.RESULTS=2]="RESULTS",e[e.UNAVAILABLE=3]="UNAVAILABLE",e))(W||{}),V=(e=>(e[e.SMALL=0]="SMALL",e[e.MEDIUM=1]="MEDIUM",e[e.LARGE=2]="LARGE",e))(V||{});function z(e){return(e.purchase_system&1)===1}function U(e){var n;const t=+new Date/1e3;return z(e)&&((n=e.lotto_phase_until)!=null?n:0)<t}function ot(e){return z(e)&&!U(e)&&e.lotto_phase===W.ENTRY}function Z(e){return z(e)&&(e.lotto_phase===null||U(e))}function _e(e){return!z(e)||Z(e)}function it(e){var t,n;return z(e)?e.lotto_phase===null||U(e)?"Missing Placard Data":(n=(t=e.lotto_entries)==null?void 0:t.toString())!=null?n:"0":"N/A"}function at(e){if(z(e)){if(e.lotto_phase===null||U(e))return"Missing Placard Data"}else return"FCFS";switch(e.lotto_phase){case W.ENTRY:return"Accepting Entries";case W.RESULTS:return"Results";case W.UNAVAILABLE:return"Unavailable";default:return`Unknown (${e.lotto_phase})`}}function lt(e){switch(e){case V.SMALL:return"Small";case V.MEDIUM:return"Medium";case V.LARGE:return"Large";default:return`Unknown (${e})`}}function rt(e){return(e&(x.FREE_COMPANY|x.INDIVIDUAL))==(x.FREE_COMPANY|x.INDIVIDUAL)?"Unrestricted":e&x.FREE_COMPANY?"Free Company":"Individual"}function fe(e){var n;return(n=D.fromSeconds(e).toRelative())!=null?n:"Unknown"}const R={districts:{options:[{label:"Mist",value:339},{label:"The Lavender Beds",value:340},{label:"The Goblet",value:341},{label:"Shirogane",value:641},{label:"Empyreum",value:979}],strategy(e){return t=>e.includes(t.district_id)}},sizes:{options:[{label:"Small",value:V.SMALL},{label:"Medium",value:V.MEDIUM},{label:"Large",value:V.LARGE}],strategy(e){return t=>e.includes(t.size)}},phases:{options:[{label:"Accepting Entries",value:W.ENTRY},{label:"Results",value:W.RESULTS},{label:"Unavailable",value:W.UNAVAILABLE},{label:"FCFS",value:-2},{label:"Missing/Outdated",value:-1}],strategy(e){return t=>{if(z(t)){if(Z(t))return e.includes(-1)}else return e.includes(-2);return e.includes(t.lotto_phase)}}},tenants:{options:[{label:"Free Company",value:x.FREE_COMPANY},{label:"Individual",value:x.INDIVIDUAL}],strategy(e){const t=e.reduce((n,l)=>n|l);return n=>(n.purchase_system&t)!==0}}},ee=e=>(t,n)=>-e(t,n);var $=(e=>(e[e.NONE=0]="NONE",e[e.ASC=1]="ASC",e[e.DESC=2]="DESC",e))($||{});const ct=(e,t)=>e.district_id-t.district_id||e.ward_number-t.ward_number||e.plot_number-t.plot_number,Le=(e,t)=>e.size-t.size,dt=ee(Le),ke=(e,t)=>e.price-t.price,ut=ee(ke),ht=(e,t)=>{var r,c;const n=U(e)||e.lotto_phase===null?Number.MAX_VALUE:(r=e.lotto_entries)!=null?r:0,l=U(t)||t.lotto_phase===null?Number.MAX_VALUE:(c=t.lotto_entries)!=null?c:0;return n-l},pt=(e,t)=>{var r,c;const n=U(e)||e.lotto_phase===null?Number.MIN_SAFE_INTEGER:(r=e.lotto_entries)!=null?r:0;return(U(t)||t.lotto_phase===null?Number.MIN_SAFE_INTEGER:(c=t.lotto_entries)!=null?c:0)-n},Ae=(e,t)=>{const n=Z(e)?Number.MAX_VALUE:e.lotto_phase,l=Z(t)?Number.MAX_VALUE:t.lotto_phase;return n-l},_t=ee(Ae),Pe=(e,t)=>t.last_updated_time-e.last_updated_time,ft=ee(Pe),$e=(e,t)=>t.first_seen_time-e.first_seen_time,mt=ee($e),me={size:{asc:Le,desc:dt},price:{asc:ke,desc:ut},entries:{asc:ht,desc:pt},phase:{asc:Ae,desc:_t},updateTime:{asc:Pe,desc:ft},firstSeen:{asc:$e,desc:mt}},j=B({__name:"SortIcon",props:{index:{},direction:{},disallowSortDesc:{type:Boolean}},emits:["directionChanged"],setup(e,{emit:t}){const n=e;function l(){n.direction===$.NONE?t("directionChanged",$.ASC):n.direction===$.ASC?n.disallowSortDesc?t("directionChanged",$.NONE):t("directionChanged",$.DESC):t("directionChanged",$.NONE)}return(r,c)=>{const h=ue("font-awesome-icon");return u(),f("span",{class:"icon m-0 is-clickable",onClick:l},[r.direction===0?(u(),H(h,{key:0,icon:["fas","sort"]})):r.direction===1?(u(),H(h,{key:1,icon:["fas","sort-up"]})):(u(),H(h,{key:2,icon:["fas","sort-down"]})),S(" "+g(r.index!==null?r.index+1:null),1)])}}}),M=e=>(ye("data-v-5164c0c6"),e=e(),be(),e),vt={key:0},gt=M(()=>s("a",{href:"https://github.com/zhudotexe/FFXIV_PaissaHouse#lottery-sweeps",target:"_blank"}," PaissaHouse XIVLauncher plugin ",-1)),wt={class:"level mt-2"},St={class:"level-left"},yt={key:0,class:"level-item"},bt={key:1,class:"level-item"},Et={key:2,class:"level-item"},Ct={class:"level-right"},Lt={class:"level-item"},kt={class:"level-item"},At={class:"table-container mt-4"},Pt={class:"table is-striped is-fullwidth is-hoverable"},$t={class:"icon-text"},Dt=M(()=>s("span",null,"Address",-1)),It={class:"icon-text"},Nt=M(()=>s("span",null,"Size",-1)),Mt={class:"icon-text"},Tt=M(()=>s("span",null,"Price",-1)),xt={class:"icon-text"},Ot=M(()=>s("span",null,"Entries",-1)),Wt={class:"icon-text"},Ut=M(()=>s("span",null,"Lottery Phase",-1)),Ft={class:"icon-text"},Rt=M(()=>s("span",null,"Allowed Tenants",-1)),Vt={class:"icon-text"},Bt=M(()=>s("span",null,"Last Updated",-1)),zt={class:"icon-text"},Yt=M(()=>s("span",null,"First Seen",-1)),Gt={key:0,class:"level"},Xt={class:"level-item"},jt={class:"icon is-small"},qt={class:"icon is-small"},Qt=B({__name:"WorldView",props:{client:{},worldId:{}},setup(e){const t=e,n=we(),l=Se(),r=oe({currentPage:0,numPerPage:50}),c=oe(new Map),h=oe(new Map),C=Q(()=>Array.from(t.client.plotStates.values()).filter(o=>o.world_id===t.worldId)),y=Q(()=>{let a=[...C.value];for(const[o,_]of c){const i=R[o];!i||(a=a.filter(i.strategy(Array.from(_))))}return a.sort((o,_)=>{for(const[i,I]of h){const F=me[i];if(!F)continue;let G=0;if(I===$.ASC?G=F.asc(o,_):I===$.DESC&&F.desc&&(G=F.desc(o,_)),G)return G}return ct(o,_)})}),A=Q(()=>y.value.slice(r.currentPage*r.numPerPage,(r.currentPage+1)*r.numPerPage)),d=Q(()=>Math.ceil(y.value.length/r.numPerPage));function p(a){const o=c.get(a);return o!==void 0?Array.from(o):[]}function v(a,o){o.length?c.set(a,new Set(o)):c.delete(a),T()}function b(a){const o=Array.from(h.keys()).indexOf(a);return o===-1?null:o}function P(a){var o;return(o=h.get(a))!=null?o:$.NONE}function L(a,o){o===$.NONE?h.delete(a):h.set(a,o),T()}function T(){const a={...l.query,sort:E()};for(const o of Object.keys(R)){const _=c.get(o);_?a[o]=Array.from(_):a[o]=void 0}n.replace({query:a})}function re(){for(const[a,o]of Object.entries(R)){let _=l.query[a];if(!_)continue;ce.exports.isArray(_)||(_=[_]);let i=[];for(const I of _){const F=o.options.find(G=>G.value===+(I!=null?I:0));F&&i.push(F.value)}i.length&&c.set(a,new Set(i))}}function w(){let a=l.query.sort;if(!!a){ce.exports.isArray(a)||(a=[a]);for(const o of a){if(!o)continue;const[_,i]=o.split(":",2);!(me[_]&&(+i==1||+i==2))||h.set(_,+i)}}}function E(){const a=[];for(const[o,_]of h)a.push(`${o}:${_}`);return a}function k(){c.clear(),h.clear(),T()}return de(()=>{re(),w()}),(a,o)=>{const _=ue("font-awesome-icon");return u(),f(J,null,[s("p",null,[S(g(a.client.worldName(a.worldId))+" has ",1),m(X,{value:C.value.length},null,8,["value"]),S(" open plots, at least "),m(X,{value:C.value.filter(ot).length},null,8,["value"]),S(" of which are available for bidding. ")]),C.value.filter(Z).length?(u(),f("p",vt,[s("strong",null,[m(X,{value:C.value.filter(Z).length},null,8,["value"])]),S(" plots have missing or outdated lottery data. You can contribute by installing the "),gt,S(" and clicking on the placard of any outdated plot in-game. This site will update in real time! ")])):O("",!0),s("div",wt,[s("div",St,[a.client.nextOrLatestPhaseChange()>+new Date/1e3?(u(),f("p",yt,[S(" The current lottery phase ends at "),m(ne,{time:a.client.nextOrLatestPhaseChange(),format:"datetimeWeekday"},null,8,["time"]),S(" ( "),m(ne,{time:a.client.nextOrLatestPhaseChange(),format:"relative"},null,8,["time"]),S(" ). ")])):a.client.nextOrLatestPhaseChange()>0?(u(),f("p",bt,[S(" The previous lottery phase ended at "),m(ne,{time:a.client.nextOrLatestPhaseChange(),format:"datetimeWeekday"},null,8,["time"]),S(" ( "),m(ne,{time:a.client.nextOrLatestPhaseChange(),format:"relative"},null,8,["time"]),S(" ). ")])):(u(),f("p",Et,"There is insufficient data to calculate when the next lottery phase ends."))]),s("div",Ct,[s("p",Lt,g(y.value.length)+" "+g(y.value.length===1?"plot matches":"plots match")+" your current filters. ",1),s("p",kt,[s("button",{class:"button",onClick:o[0]||(o[0]=i=>k())},"Clear Sort & Filters")])])]),s("div",At,[s("table",Pt,[s("thead",null,[s("tr",null,[s("th",null,[s("span",$t,[Dt,m(se,{class:"ml-1",options:q(R).districts.options,selected:p("districts"),onSelectionChanged:o[1]||(o[1]=i=>v("districts",i))},null,8,["options","selected"])])]),s("th",null,[s("span",It,[Nt,m(j,{class:"ml-1",index:b("size"),direction:P("size"),onDirectionChanged:o[2]||(o[2]=i=>L("size",i))},null,8,["index","direction"]),m(se,{options:q(R).sizes.options,selected:p("sizes"),onSelectionChanged:o[3]||(o[3]=i=>v("sizes",i))},null,8,["options","selected"])])]),s("th",null,[s("span",Mt,[Tt,m(j,{class:"ml-1",index:b("price"),direction:P("price"),onDirectionChanged:o[4]||(o[4]=i=>L("price",i))},null,8,["index","direction"])])]),s("th",null,[s("span",xt,[Ot,m(j,{class:"ml-1",index:b("entries"),direction:P("entries"),onDirectionChanged:o[5]||(o[5]=i=>L("entries",i))},null,8,["index","direction"])])]),s("th",null,[s("span",Wt,[Ut,m(j,{class:"ml-1",index:b("phase"),direction:P("phase"),onDirectionChanged:o[6]||(o[6]=i=>L("phase",i))},null,8,["index","direction"]),m(se,{options:q(R).phases.options,selected:p("phases"),onSelectionChanged:o[7]||(o[7]=i=>v("phases",i))},null,8,["options","selected"])])]),s("th",null,[s("span",Ft,[Rt,m(se,{class:"ml-1",options:q(R).tenants.options,selected:p("tenants"),onSelectionChanged:o[8]||(o[8]=i=>v("tenants",i))},null,8,["options","selected"])])]),s("th",null,[s("span",Vt,[Bt,m(j,{class:"ml-1",index:b("updateTime"),direction:P("updateTime"),onDirectionChanged:o[9]||(o[9]=i=>L("updateTime",i))},null,8,["index","direction"])])]),s("th",null,[s("span",zt,[Yt,m(j,{class:"ml-1",index:b("firstSeen"),direction:P("firstSeen"),onDirectionChanged:o[10]||(o[10]=i=>L("firstSeen",i))},null,8,["index","direction"])])])])]),s("tbody",null,[(u(!0),f(J,null,ae(A.value,i=>(u(),f("tr",{key:[i.world_id,i.district_id,i.ward_number,i.plot_number].toString()},[s("td",null,g(a.client.districtName(i.district_id))+", Ward "+g(i.ward_number+1)+", Plot "+g(i.plot_number+1),1),s("td",null,g(lt(i.size)),1),s("td",null,g(i.price.toLocaleString()),1),s("td",null,[m(X,{value:it(i),class:ie({"is-italic":_e(i)})},null,8,["value","class"])]),s("td",null,[m(X,{value:at(i),class:ie({"is-italic":_e(i)})},null,8,["value","class"])]),s("td",null,g(rt(i.purchase_system)),1),s("td",null,[m(X,{value:fe(i.last_updated_time)},null,8,["value"])]),s("td",null,g(fe(i.first_seen_time)),1)]))),128))])]),d.value>1?(u(),f("div",Gt,[s("p",Xt,[r.currentPage>0?(u(),f("button",{key:0,class:"button mr-2",onClick:o[11]||(o[11]=i=>r.currentPage--)},[s("span",jt,[m(_,{icon:["fas","angle-left"]})])])):O("",!0),s("span",null,"Page "+g(r.currentPage+1)+" / "+g(d.value),1),r.currentPage<d.value-1?(u(),f("button",{key:1,class:"button ml-2",onClick:o[12]||(o[12]=i=>r.currentPage++)},[s("span",qt,[m(_,{icon:["fas","angle-right"]})])])):O("",!0)])])):O("",!0)])],64)}}});const Kt=le(Qt,[["__scopeId","data-v-5164c0c6"]]),Y=e=>(ye("data-v-42b52bab"),e=e(),be(),e),Ht={class:"section"},Jt={class:"container"},Zt=Y(()=>s("h3",{class:"title"},[s("img",{src:Ue,alt:"PaissaHouse Logo",class:"paissa-logo"}),S(" PaissaDB ")],-1)),en=Y(()=>s("h5",{class:"subtitle"},[S(" A list of houses for sale in Final Fantasy XIV, how many lottery bids are on each, and where to contribute using the "),s("a",{href:"https://github.com/zhudotexe/FFXIV_PaissaHouse",target:"_blank"},"PaissaHouse XIVLauncher plugin"),S(". ")],-1)),tn={key:0,class:"notification is-warning"},nn=Y(()=>s("h4",{class:"title is-4 mt-4"},"Select a World",-1)),sn=Y(()=>s("h6",{class:"subtitle is-6"},"Select a world to view the houses available on the world.",-1)),on={key:1,class:"buttons"},an=["onClick"],ln={key:2},rn=Y(()=>s("span",{class:"loader is-inline-block"},null,-1)),cn={class:"title is-4 mt-4"},dn={key:0,class:"loader is-inline-block"},un=Y(()=>s("hr",null,null,-1)),hn=Y(()=>s("p",{class:"mb-2"},"Enjoy the site? Consider tipping to help me keep the servers alive!",-1)),pn=B({__name:"PaissaViewer",setup(e){const t=we(),n=Se(),l=oe(new Ke),r=K(!0),c=K(null),h=K(!1),C=Q(()=>{let d=l.worlds;return d.sort((p,v)=>p.datacenter_name.localeCompare(v.datacenter_name)||p.name.localeCompare(v.name)),Object.entries(ce.exports.groupBy(d,p=>p.datacenter_name))});async function y(d){await t.replace({query:{...n.query,world:d.id}}),await A(d.id)}async function A(d){c.value=d,h.value=!0,await l.loadWorld(d),h.value=!1}return de(async()=>{l.init(),await l.getWorlds(),r.value=!1;const d=n.query.world;if(d){const p=+d;l.worldMap.has(p)&&await A(p)}}),We(()=>l.close()),(d,p)=>(u(),f("section",Ht,[s("div",Jt,[Zt,en,l.isDisconnected?(u(),f("div",tn," Disconnected from the server! Please refresh the page to stay up-to-date with the latest data. ")):O("",!0),nn,sn,r.value?(u(),f("div",ln,[rn,S(" Loading worlds...")])):(u(),f("div",on,[(u(!0),f(J,null,ae(C.value,([v,b],P)=>(u(),H(ze,{class:"mr-2",key:P,label:v},{default:ge(()=>[(u(!0),f(J,null,ae(b,L=>(u(),f("a",{class:"dropdown-item",key:L.id,onClick:T=>y(L)},g(L.name),9,an))),128))]),_:2},1032,["label"]))),128))])),c.value?(u(),f(J,{key:3},[s("h4",cn,[S(g(l.worldName(c.value))+" ",1),h.value?(u(),f("span",dn)):O("",!0)]),h.value?O("",!0):(u(),H(Kt,{key:0,client:l,"world-id":c.value},null,8,["client","world-id"]))],64)):O("",!0),un,hn,m(Qe)])]))}});const mn=le(pn,[["__scopeId","data-v-42b52bab"]]);export{mn as default};