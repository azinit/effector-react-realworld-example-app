"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[749],{2749:function(n,e,r){r.r(e),r.d(e,{default:function(){return p}});var t=r(9041),s=r(7459),o=r(9701),u=r(9895),i=r(7378),c=r(4246),l=(0,i.lazy)((function(){return Promise.all([r.e(216),r.e(411)]).then(r.bind(r,3411))})),a=(0,i.lazy)((function(){return Promise.all([r.e(216),r.e(28)]).then(r.bind(r,7028))})),f=(0,i.lazy)((function(){return r.e(74).then(r.bind(r,2074))})),d=function(){var n=(0,s.$B)().path;return(0,c.jsxs)(s.rs,{children:[(0,c.jsx)(s.M8,{exact:!0,component:l,path:n}),(0,c.jsx)(s.M8,{component:a,path:"".concat(n,"/favorites")}),(0,c.jsx)(s.AW,{component:f,path:"*"})]})},x=function(n){var e=n.children,r=(0,s.$B)().url;return(0,c.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[(0,c.jsxs)("ul",{className:"nav nav-pills outline-active articles-toggle",children:[(0,c.jsx)(o.LY,{children:(0,c.jsx)(s.OL,{exact:!0,className:"nav-link",to:"".concat(r),children:"My Articles"})}),(0,c.jsx)(o.LY,{children:(0,c.jsx)(s.OL,{exact:!0,className:"nav-link",to:"".concat(r,"/favorites"),children:"Favorited Articles"})})]}),e]})},m=function(){return u.wl.useIsCurrentUser()?(0,c.jsx)(s.rU,{to:"/settings",children:(0,c.jsxs)(o.zx,{className:"btn-outline-secondary action-btn",size:"sm",children:[(0,c.jsx)("i",{className:"ion-gear-a"})," Edit Profile Settings"]})}):null},h=function(n){var e=n.username,r=u.wl.useCanFollow();return u.wl.useIsNotCurrentUser()?(0,c.jsxs)(o.zx,{className:"action-btn btn-secondary",size:"sm",onClick:function(){r?u.o4.unsubscribeFx(e):u.o4.subscribeFx(e)},children:[(0,c.jsx)("i",{className:"ion-plus-round"})," ",r?"Unfollow":"Follow"," ",e]}):null},j=function(){var n=u.wl.useProfile(),e=n.image,r=n.username,t=n.bio;return(0,c.jsx)("div",{className:"user-info",children:(0,c.jsx)(o.W2,{children:(0,c.jsx)(o.X2,{children:(0,c.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[(0,c.jsx)("img",{alt:r,className:"user-img",src:e}),(0,c.jsx)("h4",{children:r}),t&&(0,c.jsx)("p",{children:t}),(0,c.jsx)(m,{}),(0,c.jsx)(h,{username:r})]})})})})},p=function(){var n=(0,s.UO)().username;return(0,t.DD)(u.o4.Gate,{username:n}),(0,c.jsxs)("div",{className:"profile-page",children:[(0,c.jsx)(j,{}),(0,c.jsx)(o.W2,{children:(0,c.jsx)(o.X2,{children:(0,c.jsx)(x,{children:(0,c.jsx)(s.eC,{children:(0,c.jsx)(d,{})})})})})]})}},9895:function(n,e,r){r.d(e,{o4:function(){return t},wl:function(){return s}});var t={};r.r(t),r.d(t,{$following:function(){return h},$isCurrentUser:function(){return j},$isNotCurrentUser:function(){return p},$profile:function(){return m},$username:function(){return x},Gate:function(){return d},getProfileFx:function(){return l},subscribeFx:function(){return a},unsubscribeFx:function(){return f}});var s={};r.r(s),r.d(s,{useCanFollow:function(){return b},useIsCurrentUser:function(){return v},useIsNotCurrentUser:function(){return w},useProfile:function(){return g}});var o=r(1549),u=r(9041),i=r(8947),c=r(6942),l=(0,o.GW)((function(n){return c.U2("profiles/".concat(n)).then((function(n){return n.data.profile}))})),a=(0,o.GW)((function(n){return c.v_("profiles/".concat(n,"/follow")).then((function(n){return n.data.profile}))})),f=(0,o.GW)((function(n){return c.IV("profiles/".concat(n,"/follow")).then((function(n){return n.data.profile}))})),d=(0,u.Bq)(),x=d.state.map((function(n){return null==n?void 0:n.username}));(0,o.lo)({source:x,filter:Boolean,target:l});var m=(0,o.nu)((0,o.TS)([l.doneData,a.doneData,f.doneData]),{bio:"",following:!1,image:"",username:""}),h=m.map((function(n){return n.following})),j=(0,o.$e)(m,i.o4.Sj,(function(n,e){return n.username===e.username})),p=j.map((function(n){return!n})),v=function(){return(0,u.oR)(j)},b=function(){return(0,u.oR)(h)},w=function(){return(0,u.oR)(p)},g=function(){return(0,u.oR)(m)}}}]);