"use strict";(globalThis.webpackChunkwpgraphql_ide=globalThis.webpackChunkwpgraphql_ide||[]).push([[113,924],{924:(e,o,t)=>{t.r(o),t.d(o,{a:()=>l,d:()=>u});var n=t(90),r=Object.defineProperty,i=(e,o)=>r(e,"name",{value:o,configurable:!0});function a(e,o){for(var t=0;t<o.length;t++){const n=o[t];if("string"!=typeof n&&!Array.isArray(n))for(const o in n)if("default"!==o&&!(o in e)){const t=Object.getOwnPropertyDescriptor(n,o);t&&Object.defineProperty(e,o,t.get?t:{enumerable:!0,get:()=>n[o]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}i(a,"_mergeNamespaces"),function(e){function o(o,t,n){var r,i=o.getWrapperElement();return(r=i.appendChild(document.createElement("div"))).className=n?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof t?r.innerHTML=t:r.appendChild(t),e.addClass(i,"dialog-opened"),r}function t(e,o){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=o}i(o,"dialogDiv"),i(t,"closeNotification"),e.defineExtension("openDialog",(function(n,r,a){a||(a={}),t(this,null);var l=o(this,n,a.bottom),u=!1,s=this;function c(o){if("string"==typeof o)p.value=o;else{if(u)return;u=!0,e.rmClass(l.parentNode,"dialog-opened"),l.parentNode.removeChild(l),s.focus(),a.onClose&&a.onClose(l)}}i(c,"close");var f,p=l.getElementsByTagName("input")[0];return p?(p.focus(),a.value&&(p.value=a.value,!1!==a.selectValueOnOpen&&p.select()),a.onInput&&e.on(p,"input",(function(e){a.onInput(e,p.value,c)})),a.onKeyUp&&e.on(p,"keyup",(function(e){a.onKeyUp(e,p.value,c)})),e.on(p,"keydown",(function(o){a&&a.onKeyDown&&a.onKeyDown(o,p.value,c)||((27==o.keyCode||!1!==a.closeOnEnter&&13==o.keyCode)&&(p.blur(),e.e_stop(o),c()),13==o.keyCode&&r(p.value,o))})),!1!==a.closeOnBlur&&e.on(l,"focusout",(function(e){null!==e.relatedTarget&&c()}))):(f=l.getElementsByTagName("button")[0])&&(e.on(f,"click",(function(){c(),s.focus()})),!1!==a.closeOnBlur&&e.on(f,"blur",c),f.focus()),c})),e.defineExtension("openConfirm",(function(n,r,a){t(this,null);var l=o(this,n,a&&a.bottom),u=l.getElementsByTagName("button"),s=!1,c=this,f=1;function p(){s||(s=!0,e.rmClass(l.parentNode,"dialog-opened"),l.parentNode.removeChild(l),c.focus())}i(p,"close"),u[0].focus();for(var d=0;d<u.length;++d){var g=u[d];(function(o){e.on(g,"click",(function(t){e.e_preventDefault(t),p(),o&&o(c)}))})(r[d]),e.on(g,"blur",(function(){--f,setTimeout((function(){f<=0&&p()}),200)})),e.on(g,"focus",(function(){++f}))}})),e.defineExtension("openNotification",(function(n,r){t(this,c);var a,l=o(this,n,r&&r.bottom),u=!1,s=r&&typeof r.duration<"u"?r.duration:5e3;function c(){u||(u=!0,clearTimeout(a),e.rmClass(l.parentNode,"dialog-opened"),l.parentNode.removeChild(l))}return i(c,"close"),e.on(l,"click",(function(o){e.e_preventDefault(o),c()})),s&&(a=setTimeout(c,s)),c}))}((0,n.r)());var l={};const u=a({__proto__:null,default:(0,n.g)(l)},[l])},6113:(e,o,t)=>{t.r(o),t.d(o,{j:()=>s});var n=t(90),r=t(924),i=Object.defineProperty,a=(e,o)=>i(e,"name",{value:o,configurable:!0});function l(e,o){for(var t=0;t<o.length;t++){const n=o[t];if("string"!=typeof n&&!Array.isArray(n))for(const o in n)if("default"!==o&&!(o in e)){const t=Object.getOwnPropertyDescriptor(n,o);t&&Object.defineProperty(e,o,t.get?t:{enumerable:!0,get:()=>n[o]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}a(l,"_mergeNamespaces"),function(e){function o(e,o,t,n,r){e.openDialog?e.openDialog(o,r,{value:n,selectValueOnOpen:!0,bottom:e.options.search.bottom}):r(prompt(t,n))}function t(e){return e.phrase("Jump to line:")+' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use line:column or scroll% syntax)")+"</span>"}function n(e,o){var t=Number(o);return/^[-+]/.test(o)?e.getCursor().line+t:t-1}e.defineOption("search",{bottom:!1}),a(o,"dialog"),a(t,"getJumpDialog"),a(n,"interpretLine"),e.commands.jumpToLine=function(e){var r=e.getCursor();o(e,t(e),e.phrase("Jump to line:"),r.line+1+":"+r.ch,(function(o){var t;if(o)if(t=/^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(o))e.setCursor(n(e,t[1]),Number(t[2]));else if(t=/^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(o)){var i=Math.round(e.lineCount()*Number(t[1])/100);/^[-+]/.test(t[1])&&(i=r.line+i+1),e.setCursor(i-1,r.ch)}else(t=/^\s*\:?\s*([\+\-]?\d+)\s*/.exec(o))&&e.setCursor(n(e,t[1]),r.ch)}))},e.keyMap.default["Alt-G"]="jumpToLine"}((0,n.r)(),r.a);var u={};const s=l({__proto__:null,default:(0,n.g)(u)},[u])}}]);