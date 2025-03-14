(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2057],{1805:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/json-input",function(){return n(82580)}])},82580:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(31085),i=n(71184),a=n(14041),o=n(82307),l=n(29686),u=n(6754),s=n(87059),p=n(71054);function d(e,t){if("string"==typeof e&&0===e.trim().length)return!0;try{return t(e),!0}catch(e){return!1}}let c={serialize:JSON.stringify,deserialize:JSON.parse},f=(0,u.P9)((e,t)=>{let{value:n,defaultValue:i,onChange:u,formatOnBlur:s,validationError:f,serialize:m,deserialize:h,onFocus:b,onBlur:y,readOnly:g,error:x,...v}=(0,l.Y)("JsonInput",c,e),[V,j]=(0,o.Z)({value:n,defaultValue:i,finalValue:"",onChange:u}),[I,z]=(0,a.useState)(d(V,h));return(0,r.jsx)(p.T,{value:V,onChange:e=>j(e.currentTarget.value),onFocus:e=>{b?.(e),z(!0)},onBlur:e=>{"function"==typeof y&&y(e);let t=d(e.currentTarget.value,h);s&&!g&&t&&""!==e.currentTarget.value.trim()&&j(m(h(e.currentTarget.value),null,2)),z(t)},ref:t,readOnly:g,...v,autoComplete:"off",__staticSelector:"JsonInput",error:I?x:f||!0,"data-monospace":!0})});f.classes=s.O.classes,f.displayName="@mantine/core/JsonInput";let m={type:"code",code:`
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
`,component:function(){return(0,r.jsx)(f,{maw:400,mx:"auto",label:"Your package.json",placeholder:"Textarea will autosize to fit the content",validationError:"Invalid JSON",formatOnBlur:!0,autosize:!0,minRows:4})}},h={type:"configurator",component:function(e){return(0,r.jsx)(f,{...e,placeholder:"Input placeholder"})},code:`
import { JsonInput } from '@mantine/core';


function Demo() {
  return (
    <JsonInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:n(23232).$7},b={type:"code",code:`
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput disabled defaultValue='{ "a": 1, "B": 2 }' label="Disabled" placeholder="Disabled" />
  );
}
`,component:function(){return(0,r.jsx)(f,{disabled:!0,defaultValue:'{ "a": 1, "B": 2 }',label:"Disabled",placeholder:"Disabled"})},centered:!0,maxWidth:340};var y=n(32653),g=n(77926);let x=`
import { IconAt } from '@tabler/icons-react';
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Label"
      placeholder="JsonInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      autosize
      {{props}}
    />
  );
}
`,v={type:"styles-api",data:g.P,component:function(e){return(0,r.jsx)(f,{label:"Label",placeholder:"JsonInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,r.jsx)(y.A,{size:18}),autosize:!0,...e})},code:x,centered:!0,maxWidth:340};var V=n(85954),j=n(38215);let I=(0,V.P)(j.XZ.JsonInput);function z(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Demo:n,GetElementRef:a,InputAccessibility:o,InputFeatures:l,StylesApiSelectors:u}=t;return n||S("Demo",!0),a||S("GetElementRef",!0),o||S("InputAccessibility",!0),l||S("InputFeatures",!0),u||S("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"JsonInput"})," is based on ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"})," component,\nit includes json validation logic and option to format input value on blur:"]}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { JsonInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <JsonInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,r.jsx)(l,{component:"JsonInput",element:"textarea"}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(u,{component:"JsonInput"}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(a,{component:"JsonInput",refType:"textarea"}),"\n",(0,r.jsx)(o,{component:"JsonInput"})]})}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(I,{...e,children:(0,r.jsx)(z,{...e})})}function S(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32653:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},23232:(e,t,n)=>{"use strict";n.d(t,{$7:()=>a,l$:()=>r,wQ:()=>i});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},71054:(e,t,n)=>{"use strict";n.d(t,{T:()=>E});var r=n(31085);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=n(14041),o=a.useLayoutEffect,l=function(e){var t=a.useRef(e);return o(function(){t.current=e}),t},u=function(e,t){if("function"==typeof e){e(t);return}e.current=t};let s=function(e,t){var n=(0,a.useRef)();return(0,a.useCallback)(function(r){e.current=r,n.current&&u(n.current,null),n.current=t,t&&u(t,r)},[t])};var p={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},d=function(e){Object.keys(p).forEach(function(t){e.style.setProperty(t,p[t],"important")})},c=null,f=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize},m=function(){},h=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],b=!!document.documentElement.currentStyle,y=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n=h.reduce(function(e,n){return e[n]=t[n],e},{}),r=n.boxSizing;if(""===r)return null;b&&"border-box"===r&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px");var i=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),a=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth);return{sizingStyle:n,paddingSize:i,borderSize:a}};function g(e,t,n){var r=l(n);a.useLayoutEffect(function(){var n=function(e){return r.current(e)};if(e)return e.addEventListener(t,n),function(){return e.removeEventListener(t,n)}},[])}var x=function(e){g(window,"resize",e)},v=function(e){g(document.fonts,"loadingdone",e)},V=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],j=a.forwardRef(function(e,t){var n=e.cacheMeasurements,r=e.maxRows,o=e.minRows,l=e.onChange,u=void 0===l?m:l,p=e.onHeightChange,h=void 0===p?m:p,b=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,V),g=void 0!==b.value,j=a.useRef(null),I=s(j,t),z=a.useRef(0),w=a.useRef(),S=function(){var e,t,i,a,l,u,s,p,m,b,g,x=j.current,v=n&&w.current?w.current:y(x);if(v){w.current=v;var V=(e=x.value||x.placeholder||"x",void 0===(t=o)&&(t=1),void 0===(i=r)&&(i=1/0),c||((c=document.createElement("textarea")).setAttribute("tabindex","-1"),c.setAttribute("aria-hidden","true"),d(c)),null===c.parentNode&&document.body.appendChild(c),a=v.paddingSize,l=v.borderSize,s=(u=v.sizingStyle).boxSizing,Object.keys(u).forEach(function(e){c.style[e]=u[e]}),d(c),c.value=e,p=f(c,v),c.value=e,p=f(c,v),c.value="x",b=(m=c.scrollHeight-a)*t,"border-box"===s&&(b=b+a+l),p=Math.max(b,p),g=m*i,"border-box"===s&&(g=g+a+l),[p=Math.min(g,p),m]),I=V[0],S=V[1];z.current!==I&&(z.current=I,x.style.setProperty("height",I+"px","important"),h(I,{rowHeight:S}))}};return a.useLayoutEffect(S),x(S),v(S),a.createElement("textarea",i({},b,{onChange:function(e){g||S(),u(e)},ref:I}))}),I=n(24808),z=n(29686),w=n(6754),S=n(87059);let J={},E=(0,w.P9)((e,t)=>{let{autosize:n,maxRows:i,minRows:a,__staticSelector:o,resize:l,...u}=(0,z.Y)("Textarea",J,e),s=n&&"test"!==(0,I._)();return(0,r.jsx)(S.O,{component:s?j:"textarea",ref:t,...u,__staticSelector:o||"Textarea",multiline:!0,"data-no-overflow":n&&void 0===i||void 0,__vars:{"--input-resize":l},...s?{maxRows:i,minRows:a}:{}})});E.classes=S.O.classes,E.displayName="@mantine/core/Textarea"}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,85954,90636,46593,38792],()=>t(1805)),_N_E=e.O()}]);