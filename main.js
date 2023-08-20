(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>f});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),u=n(667),c=n.n(u),s=new URL(n(513),n.b),l=i()(a()),d=c()(s);l.push([t.id,`:root {\n    --main-font: 'Montserrat', sans-serif;;\n    --dark-font-color: #333333;\n}\n\n* {\n    color: var(--dark-font-color);\n    font-family: var(--main-font);\n}\n\nbody {\n    background-image: url(${d});\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    margin: 0px;\n    padding: 0px;\n    height: 100vh;\n    overflow: hidden;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    min-height: calc(100% - 6rem);\n    min-width: calc(100% - 6rem);\n    margin: 1rem;\n    margin-left: 2rem;\n    margin-right: 2rem;\n}\n\nheader {\n    height: clamp(80px, 15vw, 120px);\n    display: flex;\n    align-items: center;\n}\n\nh1 {\n    font-weight: 700;\n    margin-right: auto;\n}\n\nbutton {\n    height: 30px;\n    width: 40px;\n    margin-left: 30px;\n    background-color: transparent;\n    appearance: none;\n    cursor: pointer;\n    border: 1.5px solid var(--dark-font-color);\n    border-radius: 6px;\n    text-align: center;\n    font-weight: 600;\n}\n\nbutton:hover {\n    background-color: #338dcc;\n    color: #f5f5f5;\n    transition: 0.3s;\n}\n\n.search-area {\n    display: flex;\n    align-items: center;\n    position: relative;\n}\n\n.error-msg {\n    font-size: 12px;\n    font-weight: 600;\n    position: absolute;\n    top: 120%;\n    left: 0;\n    display: none;\n}\n\n.search-bar {\n    height: 20px;\n    border: none;\n    background: transparent;\n    border-bottom: 2px solid var(--dark-font-color);\n    font-size: 13px;\n    font-weight: 600;\n    outline: none;\n}\n\n.search-bar::placeholder {\n    color: var(--dark-font-color);\n    font-weight: 600;\n}\n\n.material-symbols-outlined {\n    cursor: pointer;\n}\n\nmain {\n    height: clamp(350px, 40vh, 600px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-weight: 600;\n    align-self: center;\n    width: 100%;\n}\n\n.forecast {\n    height: clamp(150px, 20vh, 300px);\n}\n\nmain .weather-main {\n    height: 70%;\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: calc(5px + 0.2vw);\n}\n\nmain .weather-details {\n    height: 30%;\n    width: 70%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.location {\n    font-size: calc(15px + 0.5vw);\n}\n\n.temperature {\n    font-size: calc(35px + 0.5vw);\n}\n\n.condition {\n    font-size: calc(15px + 0.5vw);\n}\n\n.date {\n    font-size: calc(10px + 0.3vw);\n}\n\n.detail-container {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.detail-title {\n    font-size: calc(8px + 0.3vw);\n}\n\n.detail-value {\n    font-size: calc(15px + 0.5vw);\n}\n\n.uv-index-value span {\n    font-size: calc(8px + 0.5vw);\n    margin-left: 6px;\n}`,""]);const f=l},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(i[c]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],u=0;u<t.length;u++){var c=t[u],s=r.base?c[0]+r.base:c[0],l=o[s]||0,d="".concat(s," ").concat(l);o[s]=l+1;var f=n(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var m=a(h,r);r.byIndex=u,e.splice(u,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var u=n(o[i]);e[u].references--}for(var c=r(t,a),s=0;s<o.length;s++){var l=n(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},513:(t,e,n)=>{t.exports=n.p+"6e9ff88b54c6babe9ae8.jpg"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!t;)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),c=n.n(u),s=n(216),l=n.n(s),d=n(589),f=n.n(d),h=n(426),m={};async function g(t){const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f37b33f5508a4559baa174644231708&q=${t}`,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});return await e.json()}function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function w(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function p(t){w(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===v(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function y(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function b(t){w(1,arguments);var e=p(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function x(t){w(1,arguments);var e=p(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=b(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=b(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}m.styleTagTransform=f(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var C={};function T(){return C}function M(t,e){var n,r,a,o,i,u,c,s;w(1,arguments);var l=T(),d=y(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:l.weekStartsOn)&&void 0!==r?r:null===(c=l.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=p(t),h=f.getUTCDay(),m=(h<d?7:0)+h-d;return f.setUTCDate(f.getUTCDate()-m),f.setUTCHours(0,0,0,0),f}function k(t,e){var n,r,a,o,i,u,c,s;w(1,arguments);var l=p(t),d=l.getUTCFullYear(),f=T(),h=y(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(c=f.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(d+1,0,h),m.setUTCHours(0,0,0,0);var g=M(m,e),v=new Date(0);v.setUTCFullYear(d,0,h),v.setUTCHours(0,0,0,0);var b=M(v,e);return l.getTime()>=g.getTime()?d+1:l.getTime()>=b.getTime()?d:d-1}function S(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const D=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return S("yy"===e?r%100:r,e.length)},P=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):S(n+1,2)},U=function(t,e){return S(t.getUTCDate(),e.length)},q=function(t,e){return S(t.getUTCHours()%12||12,e.length)},E=function(t,e){return S(t.getUTCHours(),e.length)},W=function(t,e){return S(t.getUTCMinutes(),e.length)},Y=function(t,e){return S(t.getUTCSeconds(),e.length)},O=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return S(Math.floor(r*Math.pow(10,n-3)),e.length)};var j={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return D(t,e)},Y:function(t,e,n,r){var a=k(t,r),o=a>0?a:1-a;return"YY"===e?S(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):S(o,e.length)},R:function(t,e){return S(x(t),e.length)},u:function(t,e){return S(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return S(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return S(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return P(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return S(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){w(1,arguments);var n=p(t),r=M(n,e).getTime()-function(t,e){var n,r,a,o,i,u,c,s;w(1,arguments);var l=T(),d=y(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:l.firstWeekContainsDate)&&void 0!==r?r:null===(c=l.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1),f=k(t,e),h=new Date(0);return h.setUTCFullYear(f,0,d),h.setUTCHours(0,0,0,0),M(h,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):S(a,e.length)},I:function(t,e,n){var r=function(t){w(1,arguments);var e=p(t),n=b(e).getTime()-function(t){w(1,arguments);var e=x(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),b(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):S(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):U(t,e)},D:function(t,e,n){var r=function(t){w(1,arguments);var e=p(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):S(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return S(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return S(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return S(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return q(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):E(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):S(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):S(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):W(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Y(t,e)},S:function(t,e){return O(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return F(a);case"XXXX":case"XX":return z(a);default:return z(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return F(a);case"xxxx":case"xx":return z(a);default:return z(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+N(a,":");default:return"GMT"+z(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+N(a,":");default:return"GMT"+z(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return S(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return S((r._originalDate||t).getTime(),e.length)}};function N(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+S(o,2)}function F(t,e){return t%60==0?(t>0?"-":"+")+S(Math.abs(t)/60,2):z(t,e)}function z(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+S(Math.floor(a/60),2)+n+S(a%60,2)}const A=j;var L=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},H=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const _={p:H,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return L(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",L(a,e)).replace("{{time}}",H(o,e))}};var Q=["D","DD"],$=["YY","YYYY"];function R(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var G={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function B(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const X={date:B({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:B({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:B({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var I={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function J(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const Z={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:J({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:J({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:J({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:J({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:J({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function V(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(c):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(c);return i=t.valueCallback?t.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}var K,tt={ordinalNumber:(K={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(K.matchPattern);if(!n)return null;var r=n[0],a=t.match(K.parsePattern);if(!a)return null;var o=K.valueCallback?K.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:V({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:V({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:V({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:V({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:V({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const et={code:"en-US",formatDistance:function(t,e,n){var r,a=G[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:X,formatRelative:function(t,e,n,r){return I[t]},localize:Z,match:tt,options:{weekStartsOn:0,firstWeekContainsDate:1}};var nt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,rt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,at=/^'([^]*?)'?$/,ot=/''/g,it=/[a-zA-Z]/;function ut(t,e,n){var r,a,o,i,u,c,s,l,d,f,h,m,g,b,x,C,M,k;w(2,arguments);var S=String(e),D=T(),P=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:D.locale)&&void 0!==r?r:et,U=y(null!==(o=null!==(i=null!==(u=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n||null===(s=n.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:D.firstWeekContainsDate)&&void 0!==i?i:null===(d=D.locale)||void 0===d||null===(f=d.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var q=y(null!==(h=null!==(m=null!==(g=null!==(b=null==n?void 0:n.weekStartsOn)&&void 0!==b?b:null==n||null===(x=n.locale)||void 0===x||null===(C=x.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==g?g:D.weekStartsOn)&&void 0!==m?m:null===(M=D.locale)||void 0===M||null===(k=M.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==h?h:0);if(!(q>=0&&q<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var E=p(t);if(!function(t){if(w(1,arguments),!function(t){return w(1,arguments),t instanceof Date||"object"===v(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=p(t);return!isNaN(Number(e))}(E))throw new RangeError("Invalid time value");var W=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(E),Y=function(t,e){return w(2,arguments),function(t,e){w(2,arguments);var n=p(t).getTime(),r=y(e);return new Date(n+r)}(t,-y(e))}(E,W),O={firstWeekContainsDate:U,weekStartsOn:q,locale:P,_originalDate:E};return S.match(rt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,_[e])(t,P.formatLong):t})).join("").match(nt).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(at))?o[1].replace(ot,"'"):a;var u,c=A[i];if(c)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===$.indexOf(u))||R(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==Q.indexOf(t)}(r)||R(r,e,String(t)),c(Y,r,P.localize,O);if(i.match(it))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}const ct=document.querySelector(".weather-main"),st=document.querySelector(".weather-details"),lt=document.querySelector("input"),dt=document.querySelector(".material-symbols-outlined"),ft=document.querySelector("button"),ht=document.querySelector(".error-msg");let mt="°C";async function gt(t){try{ht.style.display="none",await async function(t){const e=await async function(t){return(await g(t)).location.name}(t);ct.querySelector(".location").textContent=e}(t),await async function(t){const e=await async function(t){return(await g(t)).current.condition.text}(t);ct.querySelector(".condition").textContent=e}(t),await async function(t){const e=await async function(t){return(await g(t)).current.condition.icon}(t);ct.querySelector(".condition-icon img").setAttribute("src",e)}(t),await async function(t){if("°C"===mt){const e=await async function(t){return(await g(t)).current.temp_c}(t);ct.querySelector(".temperature").textContent=`${Math.round(e)} °C`}else{const e=await async function(t){return(await g(t)).current.temp_f}(t);ct.querySelector(".temperature").textContent=`${Math.round(e)} °F`}}(t),await async function(t){const e=await async function(t){const e=await g(t);return ut(new Date(e.location.localtime),"EEEE, do MMM yy")}(t);ct.querySelector(".date").textContent=e}(t)}catch{ht.style.display="block"}}async function vt(t){try{ht.style.display="none",await async function(t){if("°C"===mt){const e=await async function(t){return(await g(t)).current.feelslike_c}(t);st.querySelector(".feels-like-value").textContent=`${Math.round(e)} °C`}else{const e=await async function(t){return(await g(t)).current.feelslike_f}(t);st.querySelector(".feels-like-value").textContent=`${Math.round(e)} °F`}}(t),await async function(t){const e=await async function(t){return(await g(t)).current.humidity}(t);st.querySelector(".humidity-value").textContent=`${e}%`}(t),await async function(t){const e=await async function(t){return(await g(t)).forecast.forecastday[0].day.daily_chance_of_rain}(t);st.querySelector(".chance-rain-value").textContent=`${e}%`}(t),await async function(t){if("°C"===mt){const e=await async function(t){return(await g(t)).current.wind_kph}(t);st.querySelector(".wind-speed-value").textContent=`${e} km/h`}else{const e=await async function(t){return(await g(t)).current.wind_mph}(t);st.querySelector(".wind-speed-value").textContent=`${e} mph`}}(t),await async function(t){const e=await async function(t){return(await g(t)).current.uv}(t),n=st.querySelector(".uv-index-value"),r=document.createElement("span");r.textContent=function(t){return t>=0&&t<=2?"Low":t>=3&&t<=5?"Moderate":t>=6&&t<=7?"High":t>=8&&t<=10?"Very High":"Extreme"}(e),n.textContent=e,n.appendChild(r)}(t)}catch{ht.style.display="block"}}!async function(){const t=await async function(){try{const t=await async function(){const t=await fetch("https://api.weatherapi.com/v1/ip.json?key=f37b33f5508a4559baa174644231708&q=auto:ip",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});return await t.json()}(),e=t.ip,n=await fetch(`https://ipapi.co/${e}/json/`);if(429===n.status){const t=await fetch(`http://ip-api.com/json/${e}`);return(await t.json()).city}return(await n.json()).city}catch(t){return console.error("An error occurred:",t),"London"}}();gt(t),vt(t),lt.addEventListener("keydown",(t=>{if("Enter"===t.key){const t=lt.value;gt(t),vt(t)}})),dt.addEventListener("click",(()=>{const t=lt.value;gt(t),vt(t)})),ft.addEventListener("click",(t=>{const e=document.querySelector(".location").textContent;"°F"===t.target.textContent?(mt="°F",t.target.textContent="°C",gt(e),vt(e)):(mt="°C",t.target.textContent="°F",gt(e),vt(e))}))}()})()})();