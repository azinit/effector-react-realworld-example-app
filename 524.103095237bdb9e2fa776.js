"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[524],{3524:function(n,t,e){e.r(t),e.d(t,{HomePage:function(){return L},default:function(){return A}});var c=e(7459),r=e(9701),a=e(7378),s=e(8947),o=e(4246),u=(0,a.lazy)((function(){return Promise.all([e.e(216),e.e(916)]).then(e.bind(e,8916))})),l=(0,a.lazy)((function(){return Promise.all([e.e(216),e.e(759)]).then(e.bind(e,5759))})),i=(0,a.lazy)((function(){return Promise.all([e.e(216),e.e(593)]).then(e.bind(e,3593))})),d=(0,a.lazy)((function(){return e.e(74).then(e.bind(e,2074))})),h=function(){var n=(0,c.$B)().path,t=s.wl.useIsAuth();return(0,o.jsxs)(c.rs,{children:[(0,o.jsx)(c.AW,{exact:!0,path:"/home",children:t?(0,o.jsx)(c.l_,{to:"".concat(n).concat(c.ns.YOUR_FEED)}):(0,o.jsx)(c.l_,{to:"".concat(n).concat(c.ns.GLOBAL_FEED)})}),(0,o.jsx)(c.AW,{component:l,path:"".concat(n).concat(c.ns.GLOBAL_FEED)}),(0,o.jsx)(c.M8,{component:u,path:"".concat(n).concat(c.ns.YOUR_FEED)}),(0,o.jsx)(c.AW,{component:i,path:"".concat(n).concat(c.ns.FEED_BY_TAG)}),(0,o.jsx)(c.AW,{component:d,path:"*"})]})},x=e(9008),f=function(){return s.wl.useIsAuth()?null:(0,o.jsx)(r.jL,{children:(0,o.jsxs)(r.W2,{children:[(0,o.jsx)("h1",{className:"logo-font",children:x.i.toLowerCase()}),(0,o.jsx)("p",{children:"A place to share your Effector knowledge."})]})})},j=e(9041),g=e(98),m=function(){var n=(0,c.$B)().url;return(0,o.jsx)(r.PS,{children:(0,j.sm)(g.o.$tags,{getKey:function(n){return n},fn:function(t){return(0,o.jsx)(c.rU,{className:"tag-default tag-pill",to:"".concat(n).concat(c.ns.FEED_BY_TAG,"?tag=").concat(t),type:"button",onClick:function(){return g.o.tagSelected(t)},children:t.toLowerCase()})}})})},p=function(){(0,j.DD)(g.o.Gate);var n=g.w.useLoadTags();return(0,o.jsxs)("aside",{className:"sidebar",children:[(0,o.jsx)("p",{children:"Popular Tags"}),(0,o.jsx)(m,{}),(0,o.jsx)(r.$j,{show:n})]})},E=function(n){var t=n.url;return s.wl.useIsAuth()?(0,o.jsx)(r.LY,{children:(0,o.jsx)(c.OL,{exact:!0,className:"nav-link",to:"".concat(t).concat(c.ns.YOUR_FEED),children:"Your Feed"})}):null},v=function(){var n=g.w.useCurrentTag(),t=(0,c.$B)().url;return(0,o.jsxs)("ul",{className:"feed-toggle nav nav-pills outline-active",children:[(0,o.jsx)(E,{url:t}),(0,o.jsx)(r.LY,{children:(0,o.jsx)(c.OL,{exact:!0,className:"nav-link",to:"".concat(t).concat(c.ns.GLOBAL_FEED),children:"Global Feed"})}),n&&(0,o.jsx)(r.LY,{children:(0,o.jsxs)(c.OL,{exact:!0,className:"nav-link",to:"".concat(t).concat(c.ns.FEED_BY_TAG,"?tag=").concat(n),children:[(0,o.jsx)("i",{className:"ion-pound"}),n]})})]})},L=function(){return(0,o.jsxs)("div",{className:"home-page",children:[(0,o.jsx)(f,{}),(0,o.jsx)(r.T3,{children:(0,o.jsxs)(r.X2,{children:[(0,o.jsxs)("main",{className:"col-md-9",children:[(0,o.jsx)(v,{}),(0,o.jsx)(c.eC,{children:(0,o.jsx)(h,{})})]}),(0,o.jsx)("div",{className:"col-md-3",children:(0,o.jsx)(p,{})})]})})]})},A=L},98:function(n,t,e){e.d(t,{o:function(){return c},w:function(){return r}});var c={};e.r(c),e.d(c,{$currentTag:function(){return x},$tags:function(){return h},Gate:function(){return d},getTagsFx:function(){return i},tagSelected:function(){return l}});var r={};e.r(r),e.d(r,{useCurrentTag:function(){return j},useLoadTags:function(){return f}});var a=e(1549),s=e(9041),o=e(8737),u=e(6942),l=(0,a.yM)(),i=(0,a.GW)((function(){return u.U2("tags").then((function(n){return n.data.tags}))})),d=(0,s.Bq)(),h=(0,a.nu)(i.doneData,[]),x=(0,a.nu)(l,"");(0,o.tJ)({store:x,key:"tag"}),(0,a.eH)({from:d.open,to:i});var f=function(){return(0,s.oR)(i.pending)},j=function(){return(0,s.oR)(x)}}}]);