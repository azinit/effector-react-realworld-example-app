"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[415],{6415:function(e,r,n){n.r(r),n.d(r,{default:function(){return R}});var t=n(4931),o=n(9261),i=n(7378),s=n(8039),u=n(1549),a=n(9041),c=n(9721),l=n(6942);function p(e,r,n,t,o,i,s){try{var u=e[i](s),a=u.value}catch(e){return void n(e)}u.done?r(a):Promise.resolve(a).then(t,o)}var f=function(){var e,r=(e=regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.gz("user",{user:r});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function s(e){p(i,t,o,s,u,"next",e)}function u(e){p(i,t,o,s,u,"throw",e)}s(void 0)}))});return function(e){return r.apply(this,arguments)}}(),d=(0,u.GW)(f),h=t.Sj.map((function(e){return{image:e.image,username:e.username,bio:e.bio,email:e.email,password:""}}));d.done.watch((function(){window.location.reload()})),t.f1.watch((function(){c.m8.push("/")}));var j=(0,u.MT)({errors:{}}).on(d.failData,(function(e,r){var n;return null===(n=r.response)||void 0===n?void 0:n.data})),b=j.map((function(e){return Object.keys(Object(e)).length>0})),m=j.map((function(e){return Object.entries(Object(null==e?void 0:e.errors))})),x=function(){return(0,a.oR)(d.pending)},v=function(){return(0,a.oR)(h)},g=function(){return(0,a.oR)(b)},w=function(){return(0,a.oR)(m)},O=n(4246),y=function(){var e=x();return(0,O.jsx)(o.zx,{className:"btn-primary pull-xs-right",disabled:e,size:"lg",type:"submit",children:"Update Settings"})};function P(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function S(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?P(Object(n),!0).forEach((function(r){k(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function k(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var C=function(){var e=function(){var e=v(),r=(0,s.cI)({defaultValues:e}),n=r.handleSubmit,t=r.register,o=r.reset;return(0,i.useEffect)((function(){o(e)}),[o,e]),{register:t,handleSubmit:n((function(e){e.password?d(e):d(S(S({},e),{},{password:void 0}))}))}}(),r=e.handleSubmit,n=e.register;return(0,O.jsxs)(o.l0,{onSubmit:r,children:[(0,O.jsx)(o.l0.Group,{children:(0,O.jsx)(o.l0.Control,S({placeholder:"URL of profile picture"},n("image")))}),(0,O.jsx)(o.l0.Group,{children:(0,O.jsx)(o.l0.Control,S({placeholder:"Username",size:"lg"},n("username")))}),(0,O.jsx)(o.l0.Group,{children:(0,O.jsx)(o.l0.Control,S({as:"textarea",placeholder:"Short bio about you",rows:8,size:"lg"},n("bio")))}),(0,O.jsx)(o.l0.Group,{children:(0,O.jsx)(o.l0.Control,S({placeholder:"Email",size:"lg",type:"email"},n("email")))}),(0,O.jsx)(o.l0.Group,{children:(0,O.jsx)(o.l0.Control,S({autoComplete:"current-password",placeholder:"New Password",size:"lg",type:"password"},n("password")))}),(0,O.jsx)(y,{})]})};var z=function(){var e=g(),r=w();return e?(0,O.jsx)(o.KM,{errors:r}):null},R=function(){return(0,O.jsx)(o.T3,{children:(0,O.jsx)(o.X2,{children:(0,O.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[(0,O.jsx)("h1",{className:"text-xs-center",children:"Your Settings"}),(0,O.jsx)(z,{}),(0,O.jsx)(C,{}),(0,O.jsx)("hr",{}),(0,O.jsx)(o.zx,{className:"btn-outline-danger",onClick:t.f1,children:"Or click here to logout."})]})})})}}}]);