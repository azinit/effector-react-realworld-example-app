"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[524],{3524:function(n,t,e){e.r(t),e.d(t,{HomePage:function(){return A},default:function(){return _}});var c=e(2636),r=e(7378),a=e(6017),s=e(1288),o=e(303),u=e(4246),l=(0,r.lazy)((function(){return Promise.all([e.e(216),e.e(916)]).then(e.bind(e,8916))})),i=(0,r.lazy)((function(){return Promise.all([e.e(216),e.e(759)]).then(e.bind(e,5759))})),d=(0,r.lazy)((function(){return Promise.all([e.e(216),e.e(593)]).then(e.bind(e,3593))})),h=(0,r.lazy)((function(){return e.e(74).then(e.bind(e,2074))})),x=function(){var n=(0,a.$B)().path,t=s.wl.useIsAuth();return(0,u.jsxs)(a.rs,{children:[(0,u.jsx)(a.AW,{exact:!0,path:"/home",children:t?(0,u.jsx)(a.l_,{to:"".concat(n).concat(o.ns.YOUR_FEED)}):(0,u.jsx)(a.l_,{to:"".concat(n).concat(o.ns.GLOBAL_FEED)})}),(0,u.jsx)(a.AW,{component:i,path:"".concat(n).concat(o.ns.GLOBAL_FEED)}),(0,u.jsx)(o.M8,{component:l,path:"".concat(n).concat(o.ns.YOUR_FEED)}),(0,u.jsx)(a.AW,{component:d,path:"".concat(n).concat(o.ns.FEED_BY_TAG)}),(0,u.jsx)(a.AW,{component:h,path:"*"})]})},f=e(4703),j=function(){var n=s.wl.useIsAuth();return(0,u.jsx)(u.Fragment,{children:n?null:(0,u.jsx)(c.jL,{children:(0,u.jsxs)(c.W2,{children:[(0,u.jsx)("h1",{className:"logo-font",children:f.i.toLowerCase()}),(0,u.jsx)("p",{children:"A place to share your Effector knowledge."})]})})})},g=e(98),m=e(382),p=e(9041),E=function(){var n=(0,a.$B)().url;return(0,u.jsx)(c.PS,{children:(0,p.sm)(g.o.$tags,{getKey:function(n){return n},fn:function(t){return(0,u.jsx)(m.rU,{className:"tag-default tag-pill",to:"".concat(n).concat(o.ns.FEED_BY_TAG,"?tag=").concat(t),type:"button",onClick:function(){return g.o.tagSelected(t)},children:t.toLowerCase()})}})})},v=function(){var n=g.w.useLoadTags();return(0,r.useEffect)((function(){g.o.getTagsFx()}),[]),(0,u.jsxs)("aside",{className:"sidebar",children:[(0,u.jsx)("p",{children:"Popular Tags"}),(0,u.jsx)(E,{}),(0,u.jsx)(c.$j,{loading:n})]})},L=function(n){var t=n.url,e=s.wl.useIsAuth();return(0,u.jsx)(u.Fragment,{children:e?(0,u.jsx)(c.LY,{children:(0,u.jsx)(o.OL,{exact:!0,className:"nav-link",to:"".concat(t).concat(o.ns.YOUR_FEED),children:"Your Feed"})}):null})},F=function(){var n=g.w.useCurrentTag(),t=(0,o.$B)().url;return(0,u.jsxs)("ul",{className:"feed-toggle nav nav-pills outline-active",children:[(0,u.jsx)(L,{url:t}),(0,u.jsx)(c.LY,{children:(0,u.jsx)(o.OL,{exact:!0,className:"nav-link",to:"".concat(t).concat(o.ns.GLOBAL_FEED),children:"Global Feed"})}),n&&(0,u.jsx)(c.LY,{children:(0,u.jsxs)(o.OL,{exact:!0,className:"nav-link",to:"".concat(t).concat(o.ns.FEED_BY_TAG,"?tag=").concat(n),children:[(0,u.jsx)("i",{className:"ion-pound"}),n]})})]})},A=function(){return(0,u.jsxs)("div",{className:"home-page",children:[(0,u.jsx)(j,{}),(0,u.jsx)(c.T3,{children:(0,u.jsxs)(c.X2,{children:[(0,u.jsxs)("main",{className:"col-md-9",children:[(0,u.jsx)(F,{}),(0,u.jsx)(x,{})]}),(0,u.jsx)("div",{className:"col-md-3",children:(0,u.jsx)(v,{})})]})})]})},_=A},98:function(n,t,e){e.d(t,{o:function(){return c},w:function(){return r}});var c={};e.r(c),e.d(c,{$currentTag:function(){return d},$tags:function(){return i},getTagsFx:function(){return l},tagSelected:function(){return u}});var r={};e.r(r),e.d(r,{useCurrentTag:function(){return f},useLoadTags:function(){return x}});var a=e(1549),s=e(8737),o=e(6942),u=(0,a.yM)(),l=(0,a.GW)((function(){return o.U2("tags").then((function(n){return n.data.tags}))})),i=(0,a.nu)(l.doneData,[]),d=(0,a.nu)(u,"");(0,s.tJ)({store:d,key:"tag"});var h=e(9041),x=function(){return(0,h.oR)(l.pending)},f=function(){return(0,h.oR)(d)}}}]);