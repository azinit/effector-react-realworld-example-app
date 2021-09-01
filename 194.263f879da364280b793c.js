"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[194],{2194:function(e,r,n){n.r(r),n.d(r,{default:function(){return j}});var o=n(8702),t=n(797),i=n(9041),s=n(1549),a=n(8438),l=n(5599),u=n(2793),d=(0,s.yM)();d.watch((function(e){return e.preventDefault()}));var c=(0,s.GW)((function(e){return l.h.put("user",{user:e})})),f=(0,i.Bq)(),m=o.o.bR.map((function(e){return e})),v=(0,a.Np)({fields:{image:{init:""},username:{init:""},bio:{init:""},email:{init:""},password:{init:""}}});(0,s.UP)({source:m,clock:(0,s.TS)([f.open,m.updates]),target:v.set}),(0,s.UP)({source:v.$values,clock:d,target:c}),c.done.watch((function(){window.location.reload()})),o.o.f1.watch((function(){u.m8.push("/")}));var h=(0,s.MT)({errors:{}}).on(c.failData,(function(e,r){var n;return null===(n=r.response)||void 0===n?void 0:n.data})).reset(v.$values,f.close),g=n(4246),p=function(){var e=(0,i.oR)(h);return(0,g.jsx)(t.KM,{errors:e})},x=function(){var e=(0,a.U$)(v.fields.bio),r=e.value,n=e.name,o=e.onChange;return(0,g.jsx)(t.nv,{className:"form-control-lg",name:n,placeholder:"Short bio about you",rows:8,value:r,onChange:function(e){return o(e.target.value)}})},$=function(){var e=(0,a.U$)(v.fields.email),r=e.value,n=e.name,o=e.onChange;return(0,g.jsx)(t.UP,{className:"form-control-lg",name:n,placeholder:"Email",type:"email",value:r,onChange:function(e){return o(e.target.value)}})},E=function(){var e=(0,a.U$)(v.fields.image),r=e.value,n=e.name,o=e.onChange;return(0,g.jsx)(t.UP,{name:n,placeholder:"URL of profile picture",value:r,onChange:function(e){return o(e.target.value)}})},V=function(){var e=(0,a.U$)(v.fields.password),r=e.value,n=e.name,o=e.onChange;return(0,g.jsx)(t.UP,{autoComplete:"current-password",className:"form-control-lg",name:n,placeholder:"New Password",type:"password",value:r,onChange:function(e){return o(e.target.value)}})},y=function(){var e=(0,i.oR)(c.pending);return(0,g.jsx)(t.zx,{className:"btn-lg btn-primary pull-xs-right",disabled:e,type:"submit",children:"Update Settings"})},T=function(){var e=(0,a.U$)(v.fields.username),r=e.value,n=e.name,o=e.onChange;return(0,g.jsx)(t.UP,{className:"form-control-lg",name:n,placeholder:"Username",value:r,onChange:function(e){return o(e.target.value)}})},b=function(){return(0,i.DD)(f),(0,g.jsxs)(t.l0,{onSubmit:d,children:[(0,g.jsx)(E,{}),(0,g.jsx)(T,{}),(0,g.jsx)(x,{}),(0,g.jsx)($,{}),(0,g.jsx)(V,{}),(0,g.jsx)(y,{})]})},j=function(){return(0,g.jsx)(t.T3,{children:(0,g.jsx)(t.X2,{children:(0,g.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[(0,g.jsx)("h1",{className:"text-xs-center",children:"Your Settings"}),(0,g.jsx)(p,{}),(0,g.jsx)(b,{}),(0,g.jsx)("hr",{}),(0,g.jsx)(t.zx,{className:"btn-outline-danger",onClick:o.o.f1,children:"Or click here to logout."})]})})})}},8438:function(e,r,n){n.d(r,{Np:function(){return d},U$:function(){return c},cI:function(){return f}});var o=n(1549),t=n(9041);const i=function({init:e,domain:r,existing:n}){return n||(r?r.store(e):(0,o.MT)(e))},s=function({domain:e,existing:r}){return r||(e?e.event():(0,o.yM)())};function a(e,r,n){var t,a,l,u,d,c,f,m,v,h,g;const p="function"==typeof r.init?r.init():r.init,x=i({domain:n,existing:null===(t=r.units)||void 0===t?void 0:t.$value,init:p}),$=i({domain:n,existing:null===(a=r.units)||void 0===a?void 0:a.$errors,init:[]}),E=$.map((e=>e[0]?e[0]:null)),V=x.map((e=>e!==p)),y=i({domain:n,existing:null===(l=r.units)||void 0===l?void 0:l.$isTouched,init:!1}),T=s({domain:n,existing:null===(u=r.units)||void 0===u?void 0:u.onChange}),b=s({domain:n,existing:null===(d=r.units)||void 0===d?void 0:d.onBlur}),j=s({domain:n,existing:null===(c=r.units)||void 0===c?void 0:c.changed}),U=s({domain:n,existing:null===(f=r.units)||void 0===f?void 0:f.addError}),P=s({domain:n,existing:null===(m=r.units)||void 0===m?void 0:m.validate}),w=s({domain:n,existing:null===(v=r.units)||void 0===v?void 0:v.resetErrors}),C=s({domain:n,existing:null===(h=r.units)||void 0===h?void 0:h.resetValue}),k=s({domain:n,existing:null===(g=r.units)||void 0===g?void 0:g.reset}),D=E.map((e=>null===e));return{changed:j,name:e,$value:x,$errors:$,$firstError:E,$isValid:D,$isDirty:V,$isTouched:y,$touched:y,$field:(0,o.$e)({value:x,errors:$,firstError:E,isValid:D,isDirty:V,isTouched:y}),onChange:T,onBlur:b,addError:U,validate:P,set:T,reset:k,resetErrors:w,resetValue:C,filter:r.filter}}function l({$form:e,validateFormEvent:r,submitEvent:n,resetFormEvent:t,resetValues:i,field:s,rules:a,resetErrors:l,formValidationEvents:u,fieldValidationEvents:d}){const{$value:c,$errors:f,onBlur:m,changed:v,addError:h,validate:g,resetErrors:p,resetValue:x,reset:$}=s,E="function"==typeof a?(0,o.MT)([]):(0,o.$e)(a.map((({source:e})=>e||(0,o.MT)(null)))),V=(y=a,(e,r,n)=>{const o=[],t="function"==typeof y?y(e,r):y;for(let i=0;i<t.length;i++){const s=t[i],a=n?n[i]:null,l=s.validator(e,r,a);"boolean"!=typeof l||l||o.push({rule:s.name,errorText:s.errorText,value:e}),"object"!=typeof l||l.isValid||o.push({rule:s.name,errorText:l.errorText,value:e})}return o});var y;const T=[...u,...d],b=[];if(T.includes("submit")){const r=(0,o.UP)({source:(0,o.$e)({fieldValue:c,form:e,rulesSources:E}),clock:n});b.push(r)}T.includes("blur")&&b.push((0,o.UP)({source:(0,o.$e)({fieldValue:c,form:e,rulesSources:E}),clock:m})),T.includes("change")&&b.push((0,o.UP)({source:(0,o.$e)({fieldValue:c,form:e,rulesSources:E}),clock:(0,o.TS)([v,x,i])})),b.push((0,o.UP)({source:(0,o.$e)({fieldValue:c,form:e,rulesSources:E}),clock:g})),b.push((0,o.UP)({source:(0,o.$e)({fieldValue:c,form:e,rulesSources:E}),clock:r}));const j=(0,o.UP)({source:c,clock:h,fn:(e,{rule:r,errorText:n})=>({rule:r,value:e,errorText:n})});f.on(b,((e,{form:r,fieldValue:n,rulesSources:o})=>V(n,r,o))).on(j,((e,r)=>[r,...e])).reset(p,t,$,l),T.includes("change")||f.reset(v)}function u({$value:e,$touched:r,onChange:n,changed:t,name:i,reset:s,resetValue:a,filter:l},u,d,c,f){r.on(t,(()=>!0)).reset(s,d,c),(0,o.lo)({source:n,filter:l||(()=>!0),target:t}),e.on(t,((e,r)=>r)).on(u,((e,r)=>r.hasOwnProperty(i)?r[i]:e)).reset(s,a,f,d)}function d(e){const{filter:r,domain:n,fields:t,validateOn:i,units:d}=e,c={},f=[],m=[];for(const e in t){if(!t.hasOwnProperty(e))continue;const r=a(e,t[e],n);c[e]=r,f.push(r.$isDirty),m.push(r.$touched)}const v=function(e){const r={};for(const n in e)e.hasOwnProperty(n)&&(r[n]=e[n].$value);return(0,o.$e)(r)}(c),h=function(e){const r=[];for(const n in e){if(!e.hasOwnProperty(n))continue;const{$firstError:o}=e[n];r.push(o)}return(0,o.$e)(r).map((e=>e.every((e=>null===e))))}(c),g=r?(0,o.$e)(h,r,((e,r)=>e&&r)):h,p=(0,o.$e)(f).map((e=>e.some(Boolean))),x=(0,o.$e)(m).map((e=>e.some(Boolean))),$=(0,o.$e)({isValid:h,isDirty:p,touched:x}),E=s({domain:n,existing:null==d?void 0:d.validate}),V=s({domain:n,existing:null==d?void 0:d.submit}),y=s({domain:n,existing:null==d?void 0:d.formValidated}),T=s({domain:n,existing:null==d?void 0:d.setForm}),b=s({domain:n,existing:null==d?void 0:d.reset}),j=s({domain:n,existing:null==d?void 0:d.resetValues}),U=s({domain:n,existing:null==d?void 0:d.resetErrors}),P=s({domain:n,existing:null==d?void 0:d.resetTouched}),w=(0,o.UP)(v,V),C=(0,o.UP)(v,E);for(const e in c){if(!c.hasOwnProperty(e))continue;const r=t[e],n=c[e];u(n,T,b,P,j),r.rules&&l({$form:v,rules:r.rules,submitEvent:V,resetFormEvent:b,resetValues:j,resetErrors:U,validateFormEvent:E,field:n,formValidationEvents:i||["submit"],fieldValidationEvents:r.validateOn?r.validateOn:[]})}return(0,o.lo)({source:w,filter:g,target:y}),(0,o.lo)({source:C,filter:g,target:y}),{fields:c,$values:v,$eachValid:h,$isValid:h,$isDirty:p,$touched:x,$meta:$,submit:V,validate:E,resetTouched:P,reset:b,resetValues:j,resetErrors:U,setForm:T,set:T,formValidated:y}}function c(e){const{value:r,errors:n,firstError:o,isValid:i,isDirty:s,isTouched:a}=(0,t.oR)(e.$field);return{name:e.name,value:r,errors:n,firstError:o,isValid:i,isDirty:s,touched:a,isTouched:a,onChange:e.onChange,onBlur:e.onBlur,addError:e.addError,validate:e.validate,reset:e.reset,set:e.onChange,resetErrors:e.resetErrors,hasError:()=>null!==o,errorText:e=>o?e&&e[o.rule]?e[o.rule]:o.errorText||"":""}}function f(e){const r={},n={};for(const o in e.fields){if(!e.fields.hasOwnProperty(o))continue;const t=c(e.fields[o]);r[o]=t,n[o]=t.value}const{isValid:o,isDirty:i,touched:s}=(0,t.oR)(e.$meta);return{fields:r,values:n,hasError:e=>e?!!r[e]&&Boolean(r[e].firstError):!o,eachValid:o,isValid:o,isDirty:i,isTouched:s,touched:s,errors:e=>r[e]?r[e].errors:[],error:e=>r[e]?r[e].firstError:null,reset:e.reset,errorText:(e,n)=>{const o=r[e];return o&&o.firstError?n&&n[o.firstError.rule]?n[o.firstError.rule]:o.firstError.errorText||"":""},submit:e.submit,setForm:e.setForm,set:e.setForm,formValidated:e.formValidated}}}}]);