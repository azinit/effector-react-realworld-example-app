!function(){"use strict";var e,t,n,r,o={},i={};function u(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,u),n.exports}u.m=o,e=[],u.O=function(t,n,r,o){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var f=!0,a=0;a<n.length;a++)(!1&o||i>=o)&&Object.keys(u.O).every((function(e){return u.O[e](n[a])}))?n.splice(a--,1):(f=!1,o<i&&(i=o));if(f){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return e+"."+{28:"15ac344c07f83a14d0d4",55:"7ff3100a23a7571f4f7b",169:"df1d88ee41c2633190a3",411:"83f8422f533b923fb859",415:"b6bc84f6dff313d3c61e",578:"7480502f8f996d813bb3",771:"ff38f61a3e0824da5f10",779:"de2da9fc6a42491ca8d8",837:"c48f36512cd4a5c08555",851:"e4a3e05d668c44a1cd12",874:"38d763b2b307375c7d7b",899:"d254fc217d5982a29182"}[e]+".js"},u.miniCssF=function(e){return e+"."+{28:"05c3f4a5def647644ee4",55:"4473006215c0cc7eb422",411:"05c3f4a5def647644ee4",578:"05c3f4a5def647644ee4",837:"c4ea58533d566e7e85d2",851:"e0bd71557bb71e2267d1",874:"05c3f4a5def647644ee4"}[e]+".css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},u.l=function(e,n,r,o){if(t[e])t[e].push(n);else{var i,f;if(void 0!==r)for(var a=document.getElementsByTagName("script"),c=0;c<a.length;c++){var d=a[c];if(d.getAttribute("src")==e){i=d;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=e),t[e]=[n];var l=function(n,r){i.onerror=i.onload=null,clearTimeout(s);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),n)return n(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),f&&document.head.appendChild(i)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/effector-react-realworld-example-app/",n=function(e){return new Promise((function(t,n){var r=u.miniCssF(e),o=u.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(u=n[r]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(o===e||o===t))return u}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var u;if((o=(u=i[r]).getAttribute("data-href"))===e||o===t)return u}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),f=i&&i.target&&i.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=u,a.request=f,o.parentNode.removeChild(o),r(a)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},r={666:0},u.f.miniCss=function(e,t){r[e]?t.push(r[e]):0!==r[e]&&{28:1,55:1,411:1,578:1,837:1,851:1,874:1}[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))},function(){var e={666:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(666!=t){var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=u.p+u.u(t),f=new Error;u.l(i,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,r[1](f)}}),"chunk-"+t,t)}else e[t]=0},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],f=n[1],a=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in f)u.o(f,r)&&(u.m[r]=f[r]);if(a)var d=a(u)}for(t&&t(n);c<i.length;c++)o=i[c],u.o(e,o)&&e[o]&&e[o][0](),e[i[c]]=0;return u.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();