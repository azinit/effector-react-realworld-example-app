(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"38gM":function(e,t,r){"use strict";r.r(t);var n=r("oNR1"),c=r("dY8W"),a=r("UYjC"),i=r("6le1"),o=r("SugE"),s=r("7E9e"),u=r("eZyy"),l=["createdAt"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var f=Object(o.d)(),m=Object(o.c)((function(e){return u.a.get("articles/".concat(e)).then((function(e){return e.data.article})).then((function(e){var t=e.createdAt;return b(b({},O(e,l)),{},{createdAt:new Date(t).toDateString()})}))})),p=Object(o.c)((function(e){return u.a.delete("articles/".concat(e))})),h=Object(c.a)(),g=h.state.map((function(e){return e.slug})),v=Object(o.i)(m.doneData,{title:"",slug:"",body:"",createdAt:"",updatedAt:"",tagList:[],description:"",author:{username:"",bio:"",image:"",following:!1},favorited:!1,favoritesCount:0}),x=Object(o.b)(v,s.a.$user,(function(e,t){return e.author.username===t.username}));Object(o.j)({source:g,clock:h.open,target:m}),Object(o.j)({source:g,clock:f,target:p}),p.done.watch((function(){i.e.push("/")}));var y=r("xArF");function w(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=Object(o.d)(),S=Object(o.c)((function(e){return u.a.get("articles/".concat(e,"/comments")).then((function(e){return e.data.comments}))})),A=Object(o.c)((function(e){var t=e.slug,r=e.body;return u.a.post("articles/".concat(t,"/comments"),{body:r}).then((function(e){return e.data.comment}))})),D=Object(o.c)((function(e){var t=e.slug,r=e.id;return u.a.delete("articles/".concat(t,"/comments/").concat(r))})),k=Object(c.a)().state.map((function(e){return e.slug})),C=Object(o.i)(S.doneData,[]).on(A.doneData,(function(e,t){return[t].concat(w(e))})).on(D.done,(function(e,t){var r=t.params;return e.filter((function(e){return e.id!==r.id}))})),E=Object(y.a)({fields:{comment:{init:""}}});Object(o.j)({source:k,clock:k.updates,target:S}),Object(o.j)({source:{slug:k,body:E.fields.comment.$value},clock:E.submit,target:A}),Object(o.f)({from:A,to:E.reset}),Object(o.j)({source:k,clock:P,fn:function(e,t){return{slug:e,id:t}},target:D});var $=Object(o.e)({errors:{}}).on([A.failData,D.failData],(function(e,t){var r;return null===(r=t.response)||void 0===r?void 0:r.data})).reset(E.$touched),F=r("oYCi"),L=function(){var e=Object(c.d)(s.a.$user),t=e.image,r=e.username;return Object(F.jsxs)("div",{className:"card-footer",children:[Object(F.jsx)("img",{alt:r,className:"comment-author-img",src:t}),Object(F.jsx)(a.b,{className:"btn-sm btn-primary",type:"submit",children:"Post Comment"})]})},U=function(){var e=Object(y.c)(E),t=e.submit,r=e.fields;return Object(F.jsxs)(a.e,{className:"card comment-form",onSubmit:function(e){e.preventDefault(),t()},children:[Object(F.jsx)("div",{className:"card-block",children:Object(F.jsx)(a.s,{placeholder:"Write a comment...",rows:3,value:r.comment.value,onChange:function(e){return r.comment.onChange(e.target.value)}})}),Object(F.jsx)(L,{})]})},I=r("USb2"),Y=function(e){var t=e.author,r=e.onClick,n=Object(c.d)(s.a.$user).username===t.username;return Object(F.jsx)(i.a,{children:function(e){return e.isAuth&&n?Object(F.jsx)(a.b,{className:"mod-options btn-delete",onClick:r,children:Object(F.jsx)("i",{className:"ion-trash-a"})}):null}})},z=function(e){var t=e.author,r=e.createdAt,n=e.id;return Object(F.jsxs)("div",{className:"card-footer",children:[Object(F.jsx)(I.a,{className:"comment-author",to:"/@".concat(t.username),children:Object(F.jsx)("img",{alt:t.username,className:"comment-author-img",src:t.image})})," ",Object(F.jsx)(I.a,{className:"comment-author",to:"/@".concat(t.username),children:t.username}),Object(F.jsx)("span",{className:"date-posted",children:new Date(r).toDateString()}),Object(F.jsx)(Y,{author:t,onClick:function(){return P(n)}})]})};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){W(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var M=function(e){var t=e.comment;return Object(F.jsxs)("div",{className:"card",children:[Object(F.jsx)("div",{className:"card-block",children:Object(F.jsx)("p",{className:"card-text",children:t.body})}),Object(F.jsx)(z,T({},t))]})},q=function(){return Object(F.jsx)(a.i,{children:Object(c.c)(C,{getKey:function(e){return e.id},fn:function(e){return Object(F.jsx)(M,{comment:e})}})})},G=function(){var e=Object(c.d)($);return Object(F.jsx)(a.d,{errors:e})},H=function(e){var t=e.slug;return Object(c.b)(h,{slug:t}),Object(F.jsx)(i.a,{children:function(e){return e.isAuth?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(G,{}),Object(F.jsx)(U,{}),Object(F.jsx)(q,{})]}):null}})},J=r("nOdE"),Z=function(){var e=Object(c.d)(v).tagList;return Object(F.jsx)(a.q,{children:e.map((function(e){return Object(F.jsx)(a.p,{children:e.toLowerCase()},e)}))})},K=function(){var e=Object(c.d)(v).body;return Object(F.jsx)(a.n,{className:"article-content",children:Object(F.jsxs)("div",{className:"col-xs-12",children:[Object(F.jsx)(J.a,{children:e}),Object(F.jsx)(Z,{})]})})},B=r("rEH3"),Q=function(){var e=Object(c.d)(x),t=Object(c.d)(v).slug;return Object(F.jsx)(F.Fragment,{children:e&&Object(F.jsxs)("span",{children:[Object(F.jsx)(I.a,{to:"/editor/".concat(t),children:Object(F.jsxs)(a.b,{className:"btn-sm btn-outline-secondary",children:[Object(F.jsx)("i",{className:"ion-edit"})," Edit Article"]})}),Object(F.jsxs)(a.b,{className:"btn-sm btn-outline-danger",onClick:f,children:[Object(F.jsx)("i",{className:"ion-trash-a"})," Delete Article"]})]})})},V=function(){var e=Object(c.d)(v),t=e.title,r=e.author,n=e.createdAt;return Object(F.jsx)(a.a,{children:Object(F.jsxs)(a.c,{children:[Object(F.jsx)("h1",{children:t}),Object(F.jsx)(B.a,{author:r,createdAt:n,children:Object(F.jsx)(Q,{})})]})})},X=function(){return Object(F.jsx)(i.a,{children:function(e){return e.isAuth?null:Object(F.jsxs)("p",{children:[Object(F.jsx)(I.a,{to:"/login",children:"Sign in"})," or ",Object(F.jsx)(I.a,{to:"/register",children:"sign up"})," to add comments on this article."]})}})};t.default=function(){var e=Object(n.g)().slug;Object(c.b)(h,{slug:e});var t=Object(c.d)(m.pending);return Object(F.jsx)(F.Fragment,{children:!t&&Object(F.jsxs)("div",{className:"article-page",children:[Object(F.jsx)(V,{}),Object(F.jsxs)(a.l,{children:[Object(F.jsx)(K,{}),Object(F.jsx)("hr",{}),Object(F.jsx)("div",{className:"article-actions"}),Object(F.jsx)(a.n,{children:Object(F.jsxs)("div",{className:"col-xs-12 col-md-8 offset-md-2",children:[Object(F.jsx)(H,{slug:e}),Object(F.jsx)(X,{})]})})]})]})})}},kI28:function(e,t){},rEH3:function(e,t,r){"use strict";r.d(t,"e",(function(){return j})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return h})),r.d(t,"a",(function(){return f})),r.d(t,"d",(function(){return g}));var n=r("SugE"),c=r("dY8W"),a=r("eZyy"),i=r("6le1");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={currentPage:1,pageSize:10,status:Object(n.e)("initial")},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=s(s({},l),e),r=Object(n.d)(),o=Object(n.d)(),u=Object(n.c)((function(e){return a.a.post("articles/".concat(e,"/favorite")).then((function(e){return e.data}))})),j=Object(n.c)((function(e){return a.a.delete("articles/".concat(e,"/favorite")).then((function(e){return e.data}))})),b=Object(n.e)(t.pageSize),d=i.f.$search.map((function(e){var t;return null!==(t=new URLSearchParams(e).get("tag"))&&void 0!==t?t:""})),O=i.f.$search.map((function(e){var r,n=null!==(r=new URLSearchParams(e).get("page"))&&void 0!==r?r:t.currentPage;return Number(n)-1})),f=Object(n.e)({articles:[],articlesCount:0}).on([u.done,j.done],(function(e,t){var r=t.params,n=t.result;return s(s({},e),{},{articles:e.articles.map((function(e){return e.slug!==r?e:s(s({},e),{},{favorited:n.article.favorited,favoritesCount:n.article.favoritesCount})}))})})),m=f.map((function(e){return e.articles})),p=f.map((function(e){return e.articlesCount})),h=t.status,g=Object(n.b)(h,m,(function(e,t){return"done"===e&&0===t.length}));Object(n.j)({source:i.f.$pathname,clock:r,fn:function(e,t){return{path:e,page:t}}}).watch((function(e){var t=e.path,r=e.page;i.e.replace("".concat(t,"?page=").concat(r))})),Object(n.g)({source:o,filter:function(e){return!0===e.favorited},target:j.prepend((function(e){return e.slug}))}),Object(n.g)({source:o,filter:function(e){return!1===e.favorited},target:u.prepend((function(e){return e.slug}))}),Object(n.g)({source:u.failData,filter:function(e){var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)}}).watch((function(){i.e.push(i.d.LOGIN)}));var v=Object(n.b)({pageSize:b,currentPage:O,currentTag:d,totalPages:p,isEmptyFeed:g});return{Gate:Object(c.a)(),currentPageWasSet:r,favoriteToggled:o,setFavoriteArticleFx:u,setUnfavoriteArticleFx:j,$feed:f,$articles:m,$pageSize:b,$currentPage:O,$currentTag:d,$totalPages:p,$isEmptyFeed:g,useModel:function(){return Object(c.d)(v)}}},b=(r("kI28"),r("USb2")),d=r("UYjC"),O=r("oYCi"),f=function(e){var t=e.author,r=e.createdAt,n=e.children;return Object(O.jsxs)("div",{className:"article-meta",children:[Object(O.jsx)(b.a,{to:"/@".concat(t.username),children:Object(O.jsx)("img",{alt:t.username,src:t.image})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)(b.a,{className:"author",to:"/@".concat(t.username),children:t.username}),Object(O.jsx)("span",{className:"date",children:new Date(r).toDateString()})]}),n]})},m=function(e){var t=e.active,r=e.onClick,n=e.children;return Object(O.jsxs)(d.b,{className:"btn btn-sm btn-outline-primary","data-active":t,onClick:r,children:[Object(O.jsx)("i",{className:"ion-heart"})," ",n]})},p=function(e){var t=e.data,r=t.author,n=t.createdAt,c=t.slug,a=t.title,i=t.description,o=t.tagList,s=t.favorited,u=t.favoritesCount,l=e.onClick;return Object(O.jsxs)("article",{className:"article-preview",children:[Object(O.jsx)(f,{author:r,createdAt:n,children:Object(O.jsx)("div",{className:"pull-xs-right",children:Object(O.jsx)(m,{active:s,onClick:l,children:u})})}),Object(O.jsxs)(b.a,{className:"preview-link",to:"/article/".concat(c),children:[Object(O.jsx)("h1",{children:a}),Object(O.jsx)("p",{children:i}),Object(O.jsx)("span",{children:"Read more..."}),Object(O.jsx)(d.q,{children:o.map((function(e){return Object(O.jsx)(d.p,{children:e.toLowerCase()},e)}))})]})]})},h=function(e){var t=e.children;return Object(O.jsx)("ul",{className:"articles-wrapper list-unstyled",children:t})},g=function(e){return e.show?Object(O.jsx)("div",{className:"empty-articles article-preview",children:"No articles are here... yet."}):null}}}]);