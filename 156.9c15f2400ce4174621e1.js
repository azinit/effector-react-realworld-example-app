"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[156],{2156:function(e,t,r){r.r(t),r.d(t,{default:function(){return Mt}});var n=r(9635),o=r(9041),i=r(797),a=r(2793),c=r(1549),s=r(8702),u=r(5599),l=["createdAt"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var h=(0,c.yM)(),g=(0,c.GW)((function(e){return u.h.get("articles/".concat(e)).then((function(e){return e.data.article})).then((function(e){var t=e.createdAt;return f(f({},p(e,l)),{},{createdAt:new Date(t).toDateString()})}))})),v=(0,c.GW)((function(e){return u.h.delete("articles/".concat(e))})),y=(0,o.Bq)(),x=y.state.map((function(e){return e.slug})),b=(0,c.nu)(g.doneData,{title:"",slug:"",body:"",createdAt:"",updatedAt:"",tagList:[],description:"",author:{username:"",bio:"",image:"",following:!1},favorited:!1,favoritesCount:0}),j=(0,c.$e)(b,s.o.bR,(function(e,t){return e.author.username===t.username}));(0,c.UP)({source:x,clock:y.open,target:g}),(0,c.UP)({source:x,clock:h,target:v}),v.done.watch((function(){a.m8.push("/")}));var k=r(8438);function O(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var $=(0,c.yM)(),E=(0,c.GW)((function(e){return u.h.get("articles/".concat(e,"/comments")).then((function(e){return e.data.comments}))})),P=(0,c.GW)((function(e){var t=e.slug,r=e.body;return u.h.post("articles/".concat(t,"/comments"),{body:r}).then((function(e){return e.data.comment}))})),S=(0,c.GW)((function(e){var t=e.slug,r=e.id;return u.h.delete("articles/".concat(t,"/comments/").concat(r))})),A=(0,o.Bq)(),N=A.state.map((function(e){return e.slug})),D=(0,c.nu)(E.doneData,[]).on(P.doneData,(function(e,t){return[t].concat(O(e))})).on(S.done,(function(e,t){var r=t.params;return e.filter((function(e){return e.id!==r.id}))})),T=(0,k.Np)({fields:{comment:{init:""}}});(0,c.UP)({source:N,clock:N.updates,target:E}),(0,c.UP)({source:{slug:N,body:T.fields.comment.$value},clock:T.submit,target:P}),(0,c.eH)({from:P,to:T.reset}),(0,c.UP)({source:N,clock:$,fn:function(e,t){return{slug:e,id:t}},target:S});var C=(0,c.MT)({errors:{}}).on([P.failData,S.failData],(function(e,t){var r;return null===(r=t.response)||void 0===r?void 0:r.data})).reset(T.$touched),M=r(4246),V=function(){var e=(0,o.oR)(s.o.bR),t=e.image,r=e.username;return(0,M.jsxs)("div",{className:"card-footer",children:[(0,M.jsx)("img",{alt:r,className:"comment-author-img",src:t}),(0,M.jsx)(i.zx,{className:"btn-sm btn-primary",type:"submit",children:"Post Comment"})]})},U=function(){var e=(0,k.cI)(T),t=e.submit,r=e.fields;return(0,M.jsxs)(i.l0,{className:"card comment-form",onSubmit:function(e){e.preventDefault(),t()},children:[(0,M.jsx)("div",{className:"card-block",children:(0,M.jsx)(i.gx,{placeholder:"Write a comment...",rows:3,value:r.comment.value,onChange:function(e){return r.comment.onChange(e.target.value)}})}),(0,M.jsx)(V,{})]})},H=r(4289),I=function(e){var t=e.author,r=e.onClick,n=(0,o.oR)(s.o.bR).username===t.username;return(0,M.jsx)(a.g,{children:function(e){return e.isAuth&&n?(0,M.jsx)(i.zx,{className:"mod-options btn-delete",onClick:r,children:(0,M.jsx)("i",{className:"ion-trash-a"})}):null}})},R=function(e){var t=e.author,r=e.createdAt,n=e.id;return(0,M.jsxs)("div",{className:"card-footer",children:[(0,M.jsx)(H.rU,{className:"comment-author",to:"/@".concat(t.username),children:(0,M.jsx)("img",{alt:t.username,className:"comment-author-img",src:t.image})})," ",(0,M.jsx)(H.rU,{className:"comment-author",to:"/@".concat(t.username),children:t.username}),(0,M.jsx)("span",{className:"date-posted",children:new Date(r).toDateString()}),(0,M.jsx)(I,{author:t,onClick:function(){return $(n)}})]})};function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var F=function(e){var t=e.comment;return(0,M.jsxs)("div",{className:"card",children:[(0,M.jsx)("div",{className:"card-block",children:(0,M.jsx)("p",{className:"card-text",children:t.body})}),(0,M.jsx)(R,L({},t))]})},W=function(){return(0,M.jsx)(i.aV,{children:(0,o.sm)(D,{getKey:function(e){return e.id},fn:function(e){return(0,M.jsx)(F,{comment:e})}})})},B=function(){var e=(0,o.oR)(C);return(0,M.jsx)(i.KM,{errors:e})},X=function(e){var t=e.slug;return(0,o.DD)(y,{slug:t}),(0,o.DD)(A,{slug:t}),(0,M.jsx)(a.g,{children:function(e){return e.isAuth?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(B,{}),(0,M.jsx)(U,{}),(0,M.jsx)(W,{})]}):null}})},_=r(7378);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Z=/[\'\"]/,K={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},J={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},Q=["style","script"],Y=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,ee=/mailto:/i,te=/\n{2,}$/,re=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,ne=/^ *> ?/gm,oe=/^ {2,}\n/,ie=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,ae=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,ce=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,se=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,ue=/^(?:\n *)*\n/,le=/\r\n?/g,de=/^\[\^([^\]]+)](:.*)\n/,fe=/^\[\^([^\]]+)]/,me=/\f/g,pe=/^\s*?\[(x|\s)\]/,he=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,ge=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,ve=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,ye=/&([a-z]+);/g,xe=/^<!--[\s\S]*?(?:-->)/,be=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,je=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,ke=/^\{.*\}$/,Oe=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,we=/^<([^ >]+@[^ >]+)>/,$e=/^<([^ >]+:\/[^ >]+)>/,Ee=/ *\n+$/,Pe=/(?:^|\n)( *)$/,Se=/-([a-z])?/gi,Ae=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,Ne=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,De=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,Te=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Ce=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Me=/(\[|\])/g,Ve=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Ue=/\t/g,He=/^ *\| */,Ie=/(^ *\||\| *$)/g,Re=/ *$/,Ge=/^ *:-+: *$/,Le=/^ *:-+ *$/,ze=/^ *-+: *$/,Fe=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,We=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,Be=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,Xe=/^\\([^0-9A-Za-z\s])/,_e=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,qe=/(^\n+|\n+$|\s+$)/g,Ze=/^([ \t]*)/,Ke=/\\([^0-9A-Z\s])/gi,Je=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),Qe=new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),Ye=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),et="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",tt=new RegExp("^\\[("+et+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),rt=new RegExp("^!\\[("+et+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),nt=[re,ce,ae,he,ge,ve,xe,je,Qe,Ye,Ae,Ne];function ot(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function it(e){return ze.test(e)?"right":Ge.test(e)?"center":Le.test(e)?"left":null}function at(e,t,r){var n=r.inTable;r.inTable=!0;var o=t(e.trim(),r);r.inTable=n;var i=[[]];return o.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==o.length-1&&i.push([]):("text"!==e.type||null!=o[t+1]&&"tableSeparator"!==o[t+1].type||(e.content=e.content.replace(Re,"")),i[i.length-1].push(e))})),i}function ct(e,t,r){r.inline=!0;var n=at(e[1],t,r),o=e[2].replace(Ie,"").split("|").map(it),i=function(e,t,r){return e.trim().split("\n").map((function(e){return at(e,t,r)}))}(e[3],t,r);return r.inline=!1,{align:o,cells:i,header:n,type:"table"}}function st(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function ut(e){return function(t,r){return r.inline?e.exec(t):null}}function lt(e){return function(t,r){return r.inline||r.simple?e.exec(t):null}}function dt(e){return function(t,r){return r.inline||r.simple?null:e.exec(t)}}function ft(e){return function(t){return e.exec(t)}}function mt(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function pt(e){return e.replace(Ke,"$1")}function ht(e,t,r){var n=r.inline||!1,o=r.simple||!1;r.inline=!0,r.simple=!0;var i=e(t,r);return r.inline=n,r.simple=o,i}function gt(e,t,r){var n=r.inline||!1,o=r.simple||!1;r.inline=!1,r.simple=!0;var i=e(t,r);return r.inline=n,r.simple=o,i}function vt(e,t,r){return r.inline=!1,e(t+"\n\n",r)}var yt,xt,bt=function(e,t,r){return{content:ht(t,e[1],r)}};function jt(){return{}}function kt(){return null}function Ot(){return[].slice.call(arguments).filter(Boolean).join(" ")}function wt(e,t,r){for(var n=e,o=t.split(".");o.length&&void 0!==(n=n[o[0]]);)o.shift();return n||r}function $t(e,t){var r=wt(t,e);return r?"function"==typeof r||"object"==typeof r&&"render"in r?r:wt(t,e+".component",e):e}function Et(e,t){void 0===t&&(t={}),t.overrides=t.overrides||{},t.slugify=t.slugify||ot,t.namedCodesToUnicode=t.namedCodesToUnicode?q({},J,t.namedCodesToUnicode):J;var r=t.createElement||_.createElement;function n(e,n){var o=wt(t.overrides,e+".props",{});return r.apply(void 0,[$t(e,t.overrides),q({},n,o,{className:Ot(null==n?void 0:n.className,o.className)||void 0})].concat([].slice.call(arguments,2)))}function o(e){var r=!1;t.forceInline?r=!0:t.forceBlock||(r=!1===Ve.test(e));var o=f(d(r?e:e.replace(qe,"")+"\n\n",{inline:r}));if(null===t.wrapper)return o;var i,a=t.wrapper||(r?"span":"div");if(o.length>1||t.forceWrapper)i=o;else{if(1===o.length)return"string"==typeof(i=o[0])?n("span",{key:"outer"},i):i;i=null}return _.createElement(a,{key:"outer"},i)}function i(e){var t=e.match(Y);return t?t.reduce((function(e,t,r){var n,i=t.indexOf("=");if(-1!==i){var a=(n=t.slice(0,i),-1!==n.indexOf("-")&&null===n.match(be)&&(n=n.replace(Se,(function(e,t){return t.toUpperCase()}))),n).trim(),c=function(e){return e?(Z.test(e.charAt(0))&&(e=e.substr(1)),Z.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}(t.slice(i+1).trim()),s=K[a]||a,u=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var r=t.slice(0,t.indexOf(":"));return e[r.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}))]=t.slice(r.length+1).trim(),e}),{}):"href"===e?mt(t):(t.match(ke)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(a,c);"string"==typeof u&&(ve.test(u)||je.test(u))&&(e[s]=_.cloneElement(o(u.trim()),{key:r}))}else"style"!==t&&(e[K[t]||t]=!0);return e}),{}):void 0}var a=[],c={},s={blockQuote:{match:dt(re),order:yt.HIGH,parse:function(e,t,r){return{content:t(e[0].replace(ne,""),r)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:ft(oe),order:yt.HIGH,parse:jt,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:dt(ie),order:yt.HIGH,parse:jt,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:dt(ce),order:yt.MAX,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:dt(ae),order:yt.MAX,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:lt(se),order:yt.LOW,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:dt(de),order:yt.MAX,parse:function(e){return a.push({footnote:e[2],identifier:e[1]}),{}},react:kt},footnoteReference:{match:ut(fe),order:yt.HIGH,parse:function(e){return{content:e[1],target:"#"+t.slugify(e[1])}},react:function(e,t,r){return n("a",{key:r.key,href:mt(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:ut(pe),order:yt.HIGH,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:dt(he),order:yt.HIGH,parse:function(e,r,n){return{content:ht(r,e[2],n),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return e.tag="h"+e.level,n(e.tag,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:dt(ge),order:yt.MAX,parse:function(e,t,r){return{content:ht(t,e[1],r),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:ft(xe),order:yt.HIGH,parse:function(){return{}},react:kt},image:{match:lt(rt),order:yt.HIGH,parse:function(e){return{alt:e[1],target:pt(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:mt(e.target)})}},link:{match:ut(tt),order:yt.LOW,parse:function(e,t,r){return{content:gt(t,e[1],r),target:pt(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:mt(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:ut($e),order:yt.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:function(e,t){return t.inAnchor?null:ut(Oe)(e,t)},order:yt.MAX,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:ut(we),order:yt.MAX,parse:function(e){var t=e[1],r=e[1];return ee.test(r)||(r="mailto:"+r),{content:[{content:t.replace("mailto:",""),type:"text"}],target:r,type:"link"}}},list:{match:function(e,t,r){var n=Pe.exec(r);return!n||!t._list&&t.inline?null:Ye.exec(e=n[1]+e)},order:yt.HIGH,parse:function(e,t,r){var n=e[2],o=n.length>1,i=o?+n:void 0,a=e[0].replace(te,"\n").match(Qe),c=!1;return{items:a.map((function(e,n){var o=Je.exec(e)[0].length,i=new RegExp("^ {1,"+o+"}","gm"),s=e.replace(i,"").replace(Je,""),u=n===a.length-1,l=-1!==s.indexOf("\n\n")||u&&c;c=l;var d,f=r.inline,m=r._list;r._list=!0,l?(r.inline=!1,d=s.replace(Ee,"\n\n")):(r.inline=!0,d=s.replace(Ee,""));var p=t(d,r);return r.inline=f,r._list=m,p})),ordered:o,start:i}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,o){return n("li",{key:o},t(e,r))})))}},newlineCoalescer:{match:dt(ue),order:yt.LOW,parse:jt,react:function(){return"\n"}},paragraph:{match:dt(Ne),order:yt.LOW,parse:bt,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:ut(De),order:yt.MAX,parse:function(e){return c[e[1]]={target:e[2],title:e[4]},{}},react:kt},refImage:{match:lt(Te),order:yt.MAX,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:mt(c[e.ref].target),title:c[e.ref].title})}},refLink:{match:ut(Ce),order:yt.MAX,parse:function(e,t,r){return{content:t(e[1],r),fallbackContent:t(e[0].replace(Me,"\\$1"),r),ref:e[2]}},react:function(e,t,r){return c[e.ref]?n("a",{key:r.key,href:mt(c[e.ref].target),title:c[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:dt(Ae),order:yt.HIGH,parse:ct,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(o,i){return n("th",{key:i,style:st(e,i)},t(o,r))})))),n("tbody",null,e.cells.map((function(o,i){return n("tr",{key:i},o.map((function(o,i){return n("td",{key:i,style:st(e,i)},t(o,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?He.exec(e):null},order:yt.HIGH,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:ft(_e),order:yt.MIN,parse:function(e){return{content:e[0].replace(ye,(function(e,r){return t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:e}))}},react:function(e){return e.content}},textBolded:{match:lt(Fe),order:yt.MED,parse:function(e,t,r){return{content:t(e[2],r)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:lt(We),order:yt.LOW,parse:function(e,t,r){return{content:t(e[2],r)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:lt(Xe),order:yt.HIGH,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:lt(Be),order:yt.LOW,parse:bt,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(s.htmlBlock={match:ft(ve),order:yt.HIGH,parse:function(e,t,r){var n,o=e[3].match(Ze),a=new RegExp("^"+o[1],"gm"),c=e[3].replace(a,""),s=(n=c,nt.some((function(e){return e.test(n)}))?vt:ht),u=e[1].toLowerCase(),l=-1!==Q.indexOf(u);r.inAnchor=r.inAnchor||"a"===u;var d=l?e[3]:s(t,c,r);return r.inAnchor=!1,{attrs:i(e[2]),content:d,noInnerParse:l,tag:l?u:e[1]}},react:function(e,t,r){return n(e.tag,Object.assign({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},s.htmlSelfClosing={match:ft(je),order:yt.HIGH,parse:function(e){return{attrs:i(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,Object.assign({},e.attrs,{key:r.key}))}});var u,l,d=function(e){var t=Object.keys(e);function r(n,o){for(var i=[],a="";n;)for(var c=0;c<t.length;){var s=t[c],u=e[s],l=u.match(n,o,a);if(l){var d=l[0];n=n.substring(d.length);var f=u.parse(l,r,o);null==f.type&&(f.type=s),i.push(f),a=d;break}c++}return i}return t.sort((function(t,r){var n=e[t].order,o=e[r].order;return n!==o?n-o:t<r?-1:1})),function(e,t){return r(function(e){return e.replace(le,"\n").replace(me,"").replace(Ue,"    ")}(e),t)}}(s),f=(l=s,u=function(e,t,r){return l[e.type].react(e,t,r)},function e(t,r){if(void 0===r&&(r={}),Array.isArray(t)){for(var n=r.key,o=[],i=!1,a=0;a<t.length;a++){r.key=a;var c=e(t[a],r),s="string"==typeof c;s&&i?o[o.length-1]+=c:o.push(c),i=s}return r.key=n,o}return u(t,e,r)}),m=o(e);return a.length&&m.props.children.push(n("footer",{key:"footer"},a.map((function(e){return n("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,f(d(e.footnote,{inline:!0})))})))),m}function Pt(e){var t=e.children,r=e.options,n=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}(e,["children","options"]);return _.cloneElement(Et(t,r),n)}(xt=yt||(yt={}))[xt.MAX=0]="MAX",xt[xt.HIGH=1]="HIGH",xt[xt.MED=2]="MED",xt[xt.LOW=3]="LOW",xt[xt.MIN=4]="MIN";var St=function(){var e=(0,o.oR)(b).tagList;return(0,M.jsx)(i.PS,{children:e.map((function(e){return(0,M.jsx)(i.Vp,{children:e.toLowerCase()},e)}))})},At=function(){var e=(0,o.oR)(b).body;return(0,M.jsx)(i.X2,{className:"article-content",children:(0,M.jsxs)("div",{className:"col-xs-12",children:[(0,M.jsx)(Pt,{children:e}),(0,M.jsx)(St,{})]})})},Nt=r(9792),Dt=function(){var e=(0,o.oR)(j),t=(0,o.oR)(b).slug;return(0,M.jsx)(M.Fragment,{children:e&&(0,M.jsxs)("span",{children:[(0,M.jsx)(H.rU,{to:"/editor/".concat(t),children:(0,M.jsxs)(i.zx,{className:"btn-sm btn-outline-secondary",children:[(0,M.jsx)("i",{className:"ion-edit"})," Edit Article"]})}),(0,M.jsxs)(i.zx,{className:"btn-sm btn-outline-danger",onClick:h,children:[(0,M.jsx)("i",{className:"ion-trash-a"})," Delete Article"]})]})})},Tt=function(){var e=(0,o.oR)(b),t=e.title,r=e.author,n=e.createdAt;return(0,M.jsx)(i.jL,{children:(0,M.jsxs)(i.W2,{children:[(0,M.jsx)("h1",{children:t}),(0,M.jsx)(Nt.qn,{author:r,createdAt:n,children:(0,M.jsx)(Dt,{})})]})})},Ct=function(){return(0,M.jsx)(a.g,{children:function(e){return e.isAuth?null:(0,M.jsxs)("p",{children:[(0,M.jsx)(H.rU,{to:"/login",children:"Sign in"})," or ",(0,M.jsx)(H.rU,{to:"/register",children:"sign up"})," to add comments on this article."]})}})},Mt=function(){var e=(0,n.UO)().slug;(0,o.DD)(y,{slug:e});var t=(0,o.oR)(g.pending);return(0,M.jsx)(M.Fragment,{children:!t&&(0,M.jsxs)("div",{className:"article-page",children:[(0,M.jsx)(Tt,{}),(0,M.jsxs)(i.T3,{children:[(0,M.jsx)(At,{}),(0,M.jsx)("hr",{}),(0,M.jsx)("div",{className:"article-actions"}),(0,M.jsx)(i.X2,{children:(0,M.jsxs)("div",{className:"col-xs-12 col-md-8 offset-md-2",children:[(0,M.jsx)(X,{slug:e}),(0,M.jsx)(Ct,{})]})})]})]})})}},9792:function(e,t,r){r.d(t,{qn:function(){return h},p2:function(){return v},WG:function(){return y},xZ:function(){return x},Aw:function(){return d}});var n=r(1549),o=r(9041),i=r(5599),a=r(2793);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={currentPage:1,pageSize:10,status:(0,n.MT)("initial")},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=s(s({},l),e),r=(0,n.yM)(),c=(0,n.yM)(),u=(0,n.GW)((function(e){return i.h.post("articles/".concat(e,"/favorite")).then((function(e){return e.data}))})),d=(0,n.GW)((function(e){return i.h.delete("articles/".concat(e,"/favorite")).then((function(e){return e.data}))})),f=(0,n.MT)(t.pageSize),m=a.o4.RJ.map((function(e){var t;return null!==(t=new URLSearchParams(e).get("tag"))&&void 0!==t?t:""})),p=a.o4.RJ.map((function(e){var r,n=null!==(r=new URLSearchParams(e).get("page"))&&void 0!==r?r:t.currentPage;return Number(n)-1})),h=(0,n.MT)({articles:[],articlesCount:0}).on([u.done,d.done],(function(e,t){var r=t.params,n=t.result;return s(s({},e),{},{articles:e.articles.map((function(e){return e.slug!==r?e:s(s({},e),{},{favorited:n.article.favorited,favoritesCount:n.article.favoritesCount})}))})})),g=h.map((function(e){return e.articles})),v=h.map((function(e){return e.articlesCount})),y=t.status,x=(0,n.$e)(y,g,(function(e,t){return"done"===e&&0===t.length}));(0,n.UP)({source:a.o4.y5,clock:r,fn:function(e,t){return{path:e,page:t}}}).watch((function(e){var t=e.path,r=e.page;a.m8.replace("".concat(t,"?page=").concat(r))})),(0,n.lo)({source:c,filter:function(e){return!0===e.favorited},target:d.prepend((function(e){return e.slug}))}),(0,n.lo)({source:c,filter:function(e){return!1===e.favorited},target:u.prepend((function(e){return e.slug}))}),(0,n.lo)({source:u.failData,filter:function(e){var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)}}).watch((function(){a.m8.push(a.nn.LOGIN)}));var b=(0,n.$e)({pageSize:f,currentPage:p,currentTag:m,totalPages:v,isEmptyFeed:x});return{Gate:(0,o.Bq)(),currentPageWasSet:r,favoriteToggled:c,setFavoriteArticleFx:u,setUnfavoriteArticleFx:d,$feed:h,$articles:g,$pageSize:f,$currentPage:p,$currentTag:m,$totalPages:v,$isEmptyFeed:x,useModel:function(){return(0,o.oR)(b)}}},f=r(4289),m=r(797),p=r(4246),h=function(e){var t=e.author,r=e.createdAt,n=e.children;return(0,p.jsxs)("div",{className:"article-meta",children:[(0,p.jsx)(f.rU,{to:"/@".concat(t.username),children:(0,p.jsx)("img",{alt:t.username,src:t.image})}),(0,p.jsxs)("div",{className:"info",children:[(0,p.jsx)(f.rU,{className:"author",to:"/@".concat(t.username),children:t.username}),(0,p.jsx)("span",{className:"date",children:new Date(r).toDateString()})]}),n]})},g=function(e){var t=e.active,r=e.onClick,n=e.children;return(0,p.jsxs)(m.zx,{className:"btn btn-sm btn-outline-primary","data-active":t,onClick:r,children:[(0,p.jsx)("i",{className:"ion-heart"})," ",n]})},v=function(e){var t=e.data,r=t.author,n=t.createdAt,o=t.slug,i=t.title,a=t.description,c=t.tagList,s=t.favorited,u=t.favoritesCount,l=e.onClick;return(0,p.jsxs)("article",{className:"article-preview",children:[(0,p.jsx)(h,{author:r,createdAt:n,children:(0,p.jsx)("div",{className:"pull-xs-right",children:(0,p.jsx)(g,{active:s,onClick:l,children:u})})}),(0,p.jsxs)(f.rU,{className:"preview-link",to:"/article/".concat(o),children:[(0,p.jsx)("h1",{children:i}),(0,p.jsx)("p",{children:a}),(0,p.jsx)("span",{children:"Read more..."}),(0,p.jsx)(m.PS,{children:c.map((function(e){return(0,p.jsx)(m.Vp,{children:e.toLowerCase()},e)}))})]})]})},y=function(e){var t=e.children;return(0,p.jsx)("ul",{className:"articles-wrapper list-unstyled",children:t})},x=function(e){return e.show?(0,p.jsx)("div",{className:"empty-articles article-preview",children:"No articles are here... yet."}):null}},8438:function(e,t,r){r.d(t,{Np:function(){return l},U$:function(){return d},cI:function(){return f}});var n=r(1549),o=r(9041);const i=function({init:e,domain:t,existing:r}){return r||(t?t.store(e):(0,n.MT)(e))},a=function({domain:e,existing:t}){return t||(e?e.event():(0,n.yM)())};function c(e,t,r){var o,c,s,u,l,d,f,m,p,h,g;const v="function"==typeof t.init?t.init():t.init,y=i({domain:r,existing:null===(o=t.units)||void 0===o?void 0:o.$value,init:v}),x=i({domain:r,existing:null===(c=t.units)||void 0===c?void 0:c.$errors,init:[]}),b=x.map((e=>e[0]?e[0]:null)),j=y.map((e=>e!==v)),k=i({domain:r,existing:null===(s=t.units)||void 0===s?void 0:s.$isTouched,init:!1}),O=a({domain:r,existing:null===(u=t.units)||void 0===u?void 0:u.onChange}),w=a({domain:r,existing:null===(l=t.units)||void 0===l?void 0:l.onBlur}),$=a({domain:r,existing:null===(d=t.units)||void 0===d?void 0:d.changed}),E=a({domain:r,existing:null===(f=t.units)||void 0===f?void 0:f.addError}),P=a({domain:r,existing:null===(m=t.units)||void 0===m?void 0:m.validate}),S=a({domain:r,existing:null===(p=t.units)||void 0===p?void 0:p.resetErrors}),A=a({domain:r,existing:null===(h=t.units)||void 0===h?void 0:h.resetValue}),N=a({domain:r,existing:null===(g=t.units)||void 0===g?void 0:g.reset}),D=b.map((e=>null===e));return{changed:$,name:e,$value:y,$errors:x,$firstError:b,$isValid:D,$isDirty:j,$isTouched:k,$touched:k,$field:(0,n.$e)({value:y,errors:x,firstError:b,isValid:D,isDirty:j,isTouched:k}),onChange:O,onBlur:w,addError:E,validate:P,set:O,reset:N,resetErrors:S,resetValue:A,filter:t.filter}}function s({$form:e,validateFormEvent:t,submitEvent:r,resetFormEvent:o,resetValues:i,field:a,rules:c,resetErrors:s,formValidationEvents:u,fieldValidationEvents:l}){const{$value:d,$errors:f,onBlur:m,changed:p,addError:h,validate:g,resetErrors:v,resetValue:y,reset:x}=a,b="function"==typeof c?(0,n.MT)([]):(0,n.$e)(c.map((({source:e})=>e||(0,n.MT)(null)))),j=(k=c,(e,t,r)=>{const n=[],o="function"==typeof k?k(e,t):k;for(let i=0;i<o.length;i++){const a=o[i],c=r?r[i]:null,s=a.validator(e,t,c);"boolean"!=typeof s||s||n.push({rule:a.name,errorText:a.errorText,value:e}),"object"!=typeof s||s.isValid||n.push({rule:a.name,errorText:s.errorText,value:e})}return n});var k;const O=[...u,...l],w=[];if(O.includes("submit")){const t=(0,n.UP)({source:(0,n.$e)({fieldValue:d,form:e,rulesSources:b}),clock:r});w.push(t)}O.includes("blur")&&w.push((0,n.UP)({source:(0,n.$e)({fieldValue:d,form:e,rulesSources:b}),clock:m})),O.includes("change")&&w.push((0,n.UP)({source:(0,n.$e)({fieldValue:d,form:e,rulesSources:b}),clock:(0,n.TS)([p,y,i])})),w.push((0,n.UP)({source:(0,n.$e)({fieldValue:d,form:e,rulesSources:b}),clock:g})),w.push((0,n.UP)({source:(0,n.$e)({fieldValue:d,form:e,rulesSources:b}),clock:t}));const $=(0,n.UP)({source:d,clock:h,fn:(e,{rule:t,errorText:r})=>({rule:t,value:e,errorText:r})});f.on(w,((e,{form:t,fieldValue:r,rulesSources:n})=>j(r,t,n))).on($,((e,t)=>[t,...e])).reset(v,o,x,s),O.includes("change")||f.reset(p)}function u({$value:e,$touched:t,onChange:r,changed:o,name:i,reset:a,resetValue:c,filter:s},u,l,d,f){t.on(o,(()=>!0)).reset(a,l,d),(0,n.lo)({source:r,filter:s||(()=>!0),target:o}),e.on(o,((e,t)=>t)).on(u,((e,t)=>t.hasOwnProperty(i)?t[i]:e)).reset(a,c,f,l)}function l(e){const{filter:t,domain:r,fields:o,validateOn:i,units:l}=e,d={},f=[],m=[];for(const e in o){if(!o.hasOwnProperty(e))continue;const t=c(e,o[e],r);d[e]=t,f.push(t.$isDirty),m.push(t.$touched)}const p=function(e){const t={};for(const r in e)e.hasOwnProperty(r)&&(t[r]=e[r].$value);return(0,n.$e)(t)}(d),h=function(e){const t=[];for(const r in e){if(!e.hasOwnProperty(r))continue;const{$firstError:n}=e[r];t.push(n)}return(0,n.$e)(t).map((e=>e.every((e=>null===e))))}(d),g=t?(0,n.$e)(h,t,((e,t)=>e&&t)):h,v=(0,n.$e)(f).map((e=>e.some(Boolean))),y=(0,n.$e)(m).map((e=>e.some(Boolean))),x=(0,n.$e)({isValid:h,isDirty:v,touched:y}),b=a({domain:r,existing:null==l?void 0:l.validate}),j=a({domain:r,existing:null==l?void 0:l.submit}),k=a({domain:r,existing:null==l?void 0:l.formValidated}),O=a({domain:r,existing:null==l?void 0:l.setForm}),w=a({domain:r,existing:null==l?void 0:l.reset}),$=a({domain:r,existing:null==l?void 0:l.resetValues}),E=a({domain:r,existing:null==l?void 0:l.resetErrors}),P=a({domain:r,existing:null==l?void 0:l.resetTouched}),S=(0,n.UP)(p,j),A=(0,n.UP)(p,b);for(const e in d){if(!d.hasOwnProperty(e))continue;const t=o[e],r=d[e];u(r,O,w,P,$),t.rules&&s({$form:p,rules:t.rules,submitEvent:j,resetFormEvent:w,resetValues:$,resetErrors:E,validateFormEvent:b,field:r,formValidationEvents:i||["submit"],fieldValidationEvents:t.validateOn?t.validateOn:[]})}return(0,n.lo)({source:S,filter:g,target:k}),(0,n.lo)({source:A,filter:g,target:k}),{fields:d,$values:p,$eachValid:h,$isValid:h,$isDirty:v,$touched:y,$meta:x,submit:j,validate:b,resetTouched:P,reset:w,resetValues:$,resetErrors:E,setForm:O,set:O,formValidated:k}}function d(e){const{value:t,errors:r,firstError:n,isValid:i,isDirty:a,isTouched:c}=(0,o.oR)(e.$field);return{name:e.name,value:t,errors:r,firstError:n,isValid:i,isDirty:a,touched:c,isTouched:c,onChange:e.onChange,onBlur:e.onBlur,addError:e.addError,validate:e.validate,reset:e.reset,set:e.onChange,resetErrors:e.resetErrors,hasError:()=>null!==n,errorText:e=>n?e&&e[n.rule]?e[n.rule]:n.errorText||"":""}}function f(e){const t={},r={};for(const n in e.fields){if(!e.fields.hasOwnProperty(n))continue;const o=d(e.fields[n]);t[n]=o,r[n]=o.value}const{isValid:n,isDirty:i,touched:a}=(0,o.oR)(e.$meta);return{fields:t,values:r,hasError:e=>e?!!t[e]&&Boolean(t[e].firstError):!n,eachValid:n,isValid:n,isDirty:i,isTouched:a,touched:a,errors:e=>t[e]?t[e].errors:[],error:e=>t[e]?t[e].firstError:null,reset:e.reset,errorText:(e,r)=>{const n=t[e];return n&&n.firstError?r&&r[n.firstError.rule]?r[n.firstError.rule]:n.firstError.errorText||"":""},submit:e.submit,setForm:e.setForm,set:e.setForm,formValidated:e.formValidated}}}}]);