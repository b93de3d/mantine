"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23427],{38792:e=>{e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((o=t.length)!=r.length)return!1;for(s=o;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((o=(n=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(s=o;0!=s--;)if(!Object.prototype.hasOwnProperty.call(r,n[s]))return!1;for(s=o;0!=s--;){var o,s,n,a=n[s];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r}},32653:(e,t,r)=>{r.d(t,{A:()=>o});var o=(0,r(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},74015:(e,t,r)=>{function o(e,t,r){"object"==typeof r.value&&(r.value=s(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function s(e){if("object"!=typeof e)return e;var t,r,n,a=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?n=Object.create(e.__proto__||null):"[object Array]"===i?n=Array(e.length):"[object Set]"===i?(n=new Set,e.forEach(function(e){n.add(s(e))})):"[object Map]"===i?(n=new Map,e.forEach(function(e,t){n.set(s(t),s(e))})):"[object Date]"===i?n=new Date(+e):"[object RegExp]"===i?n=new RegExp(e.source,e.flags):"[object DataView]"===i?n=new e.constructor(s(e.buffer)):"[object ArrayBuffer]"===i?n=e.slice(0):"Array]"===i.slice(-6)&&(n=new e.constructor(e)),n){for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)o(n,r[a],Object.getOwnPropertyDescriptor(e,r[a]));for(a=0,r=Object.getOwnPropertyNames(e);a<r.length;a++)Object.hasOwnProperty.call(n,t=r[a])&&n[t]===e[t]||o(n,t,Object.getOwnPropertyDescriptor(e,t))}return n||e}r.d(t,{Q:()=>s})},86934:(e,t,r)=>{r.d(t,{d:()=>y});var o=r(31085),s=r(14041),n=r(32653),a=r(53223),i=r(58120),l=r(35395),c=r(56051),u=r(90275),d=r(52404),p=r(87858),f=r(93065),g=r(12129),m=r(52022),b=r(23719);function y({noShadow:e,noPadding:t,noSubmit:r,style:y}){let[h,v]=(0,s.useState)("register"),[j,w]=(0,s.useState)(!1),[C,x]=(0,s.useState)(null),O=(0,b.m)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",termsOfService:!0}});return(0,o.jsx)(i.t,{p:t?0:"lg",shadow:e?"none":"sm",style:{...y,position:"relative",backgroundColor:"var(--mantine-color-body)"},children:(0,o.jsxs)("form",{onSubmit:O.onSubmit(()=>{w(!0),x(null),setTimeout(()=>{w(!1),x("register"===h?"User with this email already exists":"User with this email does not exist")},3e3)}),children:[(0,o.jsx)(l.p,{visible:j}),"register"===h&&(0,o.jsxs)(c.Y,{grow:!0,children:[(0,o.jsx)(u.k,{"data-autofocus":!0,required:!0,placeholder:"Your first name",label:"First name",...O.getInputProps("firstName")}),(0,o.jsx)(u.k,{required:!0,placeholder:"Your last name",label:"Last name",...O.getInputProps("lastName")})]}),(0,o.jsx)(u.k,{mt:"md",required:!0,placeholder:"Your email",label:"Email",leftSection:(0,o.jsx)(n.A,{size:16,stroke:1.5}),...O.getInputProps("email")}),(0,o.jsx)(d.y,{mt:"md",required:!0,placeholder:"Password",label:"Password",leftSection:(0,o.jsx)(a.A,{size:16,stroke:1.5}),...O.getInputProps("password")}),"register"===h&&(0,o.jsx)(d.y,{mt:"md",required:!0,label:"Confirm Password",placeholder:"Confirm password",leftSection:(0,o.jsx)(a.A,{size:16,stroke:1.5}),...O.getInputProps("confirmPassword")}),"register"===h&&(0,o.jsx)(p.S,{mt:"xl",label:"I agree to sell my soul and privacy to this corporation",...O.getInputProps("termsOfService",{type:"checkbox"})}),C&&(0,o.jsx)(f.E,{c:"red",size:"sm",mt:"sm",children:C}),!r&&(0,o.jsxs)(c.Y,{justify:"space-between",mt:"xl",children:[(0,o.jsx)(g.M,{component:"button",type:"button",c:"dimmed",onClick:()=>{v(e=>"register"===e?"login":"register"),x(null)},size:"sm",children:"register"===h?"Have an account? Login":"Don't have an account? Register"}),(0,o.jsx)(m.$,{color:"blue",type:"submit",children:"register"===h?"Register":"Login"})]})]})})}},35395:(e,t,r)=>{r.d(t,{p:()=>y});var o=r(31085);r(14041);var s=r(81296),n=r(7098),a=r(92408),i=r(29686),l=r(69564),c=r(34056),u=r(6754),d=r(25810),p=r(51629),f=r(98523),g={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let m={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,s.I)("overlay")},b=(0,n.V)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),y=(0,u.P9)((e,t)=>{let r=(0,i.Y)("LoadingOverlay",m,e),{classNames:s,className:n,style:u,styles:y,unstyled:h,vars:v,transitionProps:j,loaderProps:w,overlayProps:C,visible:x,zIndex:O,...P}=r,S=(0,a.xd)(),k=(0,l.I)({name:"LoadingOverlay",classes:g,props:r,className:n,style:u,classNames:s,styles:y,unstyled:h,vars:v,varsResolver:b}),_={...m.overlayProps,...C};return(0,o.jsx)(f.e,{transition:"fade",...j,mounted:!!x,children:e=>(0,o.jsxs)(c.a,{...k("root",{style:e}),ref:t,...P,children:[(0,o.jsx)(d.a,{...k("loader"),unstyled:h,...w}),(0,o.jsx)(p.h,{..._,...k("overlay"),darkHidden:!0,unstyled:h,color:C?.color||S.white}),(0,o.jsx)(p.h,{..._,...k("overlay"),lightHidden:!0,unstyled:h,color:C?.color||S.colors.dark[5]})]})})});y.classes=g,y.displayName="@mantine/core/LoadingOverlay"},52404:(e,t,r)=>{r.d(t,{y:()=>j});var o=r(31085),s=r(54357),n=r(97567),a=r(82307);r(14041);var i=r(33450),l=r(7098),c=r(36456),u=r(69564),d=r(29686),p=r(18315),f=r(6754),g=r(22962),m=r(34452),b=r(87059),y={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let h={visibilityToggleIcon:({reveal:e})=>(0,o.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,o.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},v=(0,l.V)((e,{size:t})=>({root:{"--psi-icon-size":(0,i.YC)(t,"psi-icon-size"),"--psi-button-size":(0,i.YC)(t,"psi-button-size")}})),j=(0,f.P9)((e,t)=>{let r=(0,d.Y)("PasswordInput",h,e),{classNames:i,className:l,style:f,styles:b,unstyled:j,vars:w,required:C,error:x,leftSection:O,disabled:P,id:S,variant:k,inputContainer:_,description:I,label:A,size:M,errorProps:z,descriptionProps:D,labelProps:E,withAsterisk:L,inputWrapperOrder:N,wrapperProps:Y,radius:R,rightSection:Z,rightSectionWidth:T,rightSectionPointerEvents:V,leftSectionWidth:q,visible:B,defaultVisible:H,onVisibilityChange:F,visibilityToggleIcon:K,visibilityToggleButtonProps:U,rightSectionProps:Q,leftSectionProps:W,leftSectionPointerEvents:$,withErrorStyles:G,mod:J,...X}=r,ee=(0,n.B)(S),[et,er]=(0,a.Z)({value:B,defaultValue:H,finalValue:!1,onChange:F}),eo=()=>er(!et),es=(0,u.I)({name:"PasswordInput",classes:y,props:r,className:l,style:f,classNames:i,styles:b,unstyled:j,vars:w,varsResolver:v}),{resolvedClassNames:en,resolvedStyles:ea}=(0,c.Y)({classNames:i,styles:b,props:r}),{styleProps:ei,rest:el}=(0,p.j)(X),ec=(0,o.jsx)(g.M,{...es("visibilityToggle"),disabled:P,radius:R,"aria-hidden":!U,tabIndex:-1,...U,variant:U?.variant??"subtle",color:"gray",unstyled:j,onTouchEnd:e=>{e.preventDefault(),U?.onTouchEnd?.(e),eo()},onMouseDown:e=>{e.preventDefault(),U?.onMouseDown?.(e),eo()},onKeyDown:e=>{U?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),eo())},children:(0,o.jsx)(K,{reveal:et})});return(0,o.jsx)(m.p.Wrapper,{required:C,id:ee,label:A,error:x,description:I,size:M,classNames:en,styles:ea,__staticSelector:"PasswordInput",errorProps:z,descriptionProps:D,unstyled:j,withAsterisk:L,inputWrapperOrder:N,inputContainer:_,variant:k,labelProps:{...E,htmlFor:ee},mod:J,...es("root"),...ei,...Y,children:(0,o.jsx)(m.p,{component:"div",error:x,leftSection:O,size:M,classNames:{...en,input:(0,s.A)(y.input,en.input)},styles:ea,radius:R,disabled:P,__staticSelector:"PasswordInput",rightSectionWidth:T,rightSection:Z??ec,variant:k,unstyled:j,leftSectionWidth:q,rightSectionPointerEvents:V||"all",rightSectionProps:Q,leftSectionProps:W,leftSectionPointerEvents:$,withAria:!1,withErrorStyles:G,children:(0,o.jsx)("input",{required:C,"data-invalid":!!x||void 0,"data-with-left-section":!!O||void 0,...es("innerInput"),disabled:P,id:ee,ref:t,...el,autoComplete:el.autoComplete||"off",type:et?"text":"password"})})})});j.classes={...b.O.classes,...y},j.displayName="@mantine/core/PasswordInput"},92051:(e,t,r)=>{r.d(t,{j:()=>s});var o=r(14041);function s(e=!1,t){let{onOpen:r,onClose:n}=t||{},[a,i]=(0,o.useState)(e),l=(0,o.useCallback)(()=>{i(e=>e||(r?.(),!0))},[r]),c=(0,o.useCallback)(()=>{i(e=>e?(n?.(),!1):e)},[n]),u=(0,o.useCallback)(()=>{a?c():l()},[c,l,a]);return[a,{open:l,close:c,toggle:u}]}}}]);