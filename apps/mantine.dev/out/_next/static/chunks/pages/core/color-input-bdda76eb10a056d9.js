(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76534],{45285:(e,o,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/color-input",function(){return r(63678)}])},63678:(e,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>er});var t=r(31085),n=r(71184),l=r(14041),a=r(82307),i=r(18351),c=r(68323),s=r(33450),p=r(7098),d=r(36456),u=r(69564),h=r(29686),m=r(6754),f=r(22962),x=r(3278),y=r(32709),b=r(38838),w=r(14318),j=r(34452),C=r(21664),v=r(87059),g=r(35764);function I({style:e,...o}){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--ci-eye-dropper-icon-size)",height:"var(--ci-eye-dropper-icon-size)",...e},viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...o,children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M11 7l6 6"}),(0,t.jsx)("path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z"})]})}var k={eyeDropperIcon:"m_b077c2bc",colorPreview:"m_c5ccdcab",dropdown:"m_5ece2cd7"};let E={format:"hex",fixOnBlur:!0,withPreview:!0,swatchesPerRow:7,withPicker:!0,popoverProps:{transitionProps:{transition:"fade",duration:0}},withEyeDropper:!0},D=(0,p.V)((e,{size:o})=>({eyeDropperIcon:{"--ci-eye-dropper-icon-size":(0,s.YC)(o,"ci-eye-dropper-icon-size")},colorPreview:{"--ci-preview-size":(0,s.YC)(o,"ci-preview-size")}})),V=(0,m.P9)((e,o)=>{let r=(0,h.Y)("ColorInput",E,e),{classNames:n,styles:s,unstyled:p,disallowInput:m,fixOnBlur:v,popoverProps:V,withPreview:F,withEyeDropper:S,eyeDropperIcon:P,closeOnColorSwatchClick:_,eyeDropperButtonProps:A,value:W,defaultValue:T,onChange:z,onChangeEnd:M,onClick:H,onFocus:N,onBlur:B,inputProps:O,format:R,wrapperProps:Y,readOnly:L,withPicker:U,swatches:X,disabled:$,leftSection:G,rightSection:Z,swatchesPerRow:q,...Q}=(0,C.I)("ColorInput",E,e),J=(0,u.I)({name:"ColorInput",props:r,classes:k,classNames:n,styles:s,unstyled:p,rootSelector:"wrapper",vars:r.vars,varsResolver:D}),{resolvedClassNames:K,resolvedStyles:ee}=(0,d.Y)({classNames:n,styles:s,props:r}),[eo,er]=(0,l.useState)(!1),[et,en]=(0,l.useState)(""),[el,ea]=(0,a.Z)({value:W,defaultValue:T,finalValue:"",onChange:z}),{supported:ei,open:ec}=(0,i.X)(),es=(0,t.jsx)(f.M,{...A,...J("eyeDropperButton",{className:A?.className,style:A?.style}),variant:"subtle",color:"gray",size:O.size,unstyled:p,onClick:()=>ec().then(e=>{if(e?.sRGBHex){let o=(0,y.Vm)(R,(0,b.H0)(e.sRGBHex));ea(o),M?.(o)}}).catch(()=>{}),children:P||(0,t.jsx)(I,{...J("eyeDropperIcon")})});return(0,l.useEffect)(()=>{((0,b.Yc)(el)||""===el.trim())&&en(el)},[el]),(0,c.C)(()=>{(0,b.Yc)(el)&&ea((0,y.Vm)(R,(0,b.H0)(el)))},[R]),(0,t.jsx)(j.p.Wrapper,{...Y,classNames:K,styles:ee,__staticSelector:"ColorInput",children:(0,t.jsxs)(g.A,{__staticSelector:"ColorInput",position:"bottom-start",offset:5,opened:eo,...V,classNames:K,styles:ee,unstyled:p,withRoles:!1,disabled:L||!1===U&&(!Array.isArray(X)||0===X.length),children:[(0,t.jsx)(g.A.Target,{children:(0,t.jsx)(j.p,{autoComplete:"off",...Q,...O,classNames:K,styles:ee,disabled:$,ref:o,__staticSelector:"ColorInput",onFocus:e=>{N?.(e),er(!0)},onBlur:e=>{v&&ea(et),B?.(e),er(!1)},onClick:e=>{H?.(e),er(!0)},spellCheck:!1,value:el,onChange:e=>{let o=e.currentTarget.value;ea(o),(0,b.Yc)(o)&&M?.(y.Vm(R,b.H0(o)))},leftSection:G||(F?(0,t.jsx)(w.q,{color:(0,b.Yc)(el)?el:"#fff",size:"var(--ci-preview-size)",...J("colorPreview")}):null),readOnly:m||L,pointer:m,unstyled:p,rightSection:Z||(S&&!$&&!L&&ei?es:null)})}),(0,t.jsx)(g.A.Dropdown,{onMouseDown:e=>e.preventDefault(),className:k.dropdown,children:(0,t.jsx)(x.s,{__staticSelector:"ColorInput",value:el,onChange:ea,onChangeEnd:M,format:R,swatches:X,swatchesPerRow:q,withPicker:U,size:O.size,focusable:!1,unstyled:p,styles:ee,classNames:K,onColorSwatchClick:()=>_&&er(!1)})})]})})});V.classes=v.O.classes,V.displayName="@mantine/core/ColorInput";let F={type:"configurator",component:function(e){return(0,t.jsx)(V,{...e,placeholder:"Input placeholder"})},code:`
import { ColorInput } from '@mantine/core';


function Demo() {
  return (
    <ColorInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:r(23232).$7},S={type:"configurator",component:function(e){return(0,t.jsx)(V,{maw:320,mx:"auto",label:"Choose color format",placeholder:e.format,defaultValue:"#C5D899",...e})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899"{{props}} />;
}
`,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]},P={type:"code",component:function(){return(0,t.jsx)(V,{fixOnBlur:!1,label:"Value is not fixed on blur",placeholder:"May contain invalid value"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput fixOnBlur={false} label="Value is not fixed on blur" placeholder="May contain invalid value" />;
}
`,centered:!0,maxWidth:340};var _=r(93065);let A={type:"code",component:function(){let[e,o]=(0,l.useState)("#FFFFFF");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(_.E,{mb:"md",children:["Change end value: ",(0,t.jsx)("b",{children:e})]}),(0,t.jsx)(V,{label:"Pick color",placeholder:"Pick color",defaultValue:"#FFFFFF",onChangeEnd:o})]})},code:`
import { useState } from 'react';
import { ColorInput, Text } from '@mantine/core';

function Demo() {
  const [changeEndValue, setChangeEndValue] = useState('#FFFFFF');

  return (
    <>
      <Text mb="md">
        Change end value: <b>{changeEndValue}</b>
      </Text>

      <ColorInput
        label="Pick color"
        placeholder="Pick color"
        defaultValue="#FFFFFF"
        onChangeEnd={setChangeEndValue}
      />
    </>
  );
}
`,centered:!0,maxWidth:340},W={type:"code",component:function(){return(0,t.jsx)(V,{maw:320,mx:"auto",disallowInput:!0,placeholder:"Pick color",label:"Your favorite color"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`};var T=r(2242);let z={type:"code",component:function(){return(0,t.jsx)(V,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",swatches:Object.keys(T.S.colors).map(e=>T.S.colors[e][6])})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={[${Object.keys(T.S.colors).map(e=>`'${T.S.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`};var M=r(54381);let H={type:"code",component:function(){return(0,t.jsx)(V,{maw:320,mx:"auto",placeholder:"Pick color",label:"Your favorite color",disallowInput:!0,withPicker:!1,swatches:[...T.S.colors.red,...T.S.colors.green,...T.S.colors.blue]})},code:`
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
`},N={type:"code",component:function(){return(0,t.jsx)(V,{closeOnColorSwatchClick:!0,label:"Dropdown is closed when color swatch is clicked",placeholder:"Click color swatch",swatches:[...T.S.colors.red,...T.S.colors.green,...T.S.colors.blue]})},code:`
import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      closeOnColorSwatchClick
      label="Dropdown is closed when color swatch is clicked"
      placeholder="Click color swatch"
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
`,centered:!0,maxWidth:340},B={type:"code",component:function(){return(0,t.jsx)(V,{withPicker:!1,pointer:!0,label:"Without dropdown",placeholder:"Enter value"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
`,centered:!0,maxWidth:340},O={type:"code",component:function(){return(0,t.jsx)(V,{withEyeDropper:!1,label:"Without eye dropper",placeholder:"Not fun"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
`,centered:!0,maxWidth:340};var R=(0,r(73366).A)("outline","focus-2","IconFocus2",[["circle",{cx:"12",cy:"12",r:".5",fill:"currentColor",key:"svg-0"}],["path",{d:"M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-1"}],["path",{d:"M12 3l0 2",key:"svg-2"}],["path",{d:"M3 12l2 0",key:"svg-3"}],["path",{d:"M12 19l0 2",key:"svg-4"}],["path",{d:"M19 12l2 0",key:"svg-5"}]]);let Y={type:"code",component:function(){return(0,t.jsx)(V,{eyeDropperIcon:(0,t.jsx)(R,{size:18,stroke:1.5}),label:"With custom eye dropper icon",placeholder:"Pick color"})},code:`
import { ColorInput } from '@mantine/core';
import { IconFocus2 } from '@tabler/icons-react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 size={18} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
`,centered:!0,maxWidth:340};var L=r(55090);let U={type:"code",component:function(){let e=(0,t.jsx)(L.A,{size:18,stroke:1.5});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V,{label:"With custom left section",placeholder:"Replaces color swatch",leftSection:e,withEyeDropper:!1}),(0,t.jsx)(V,{label:"With custom right section",placeholder:"Replaces eye dropper",rightSection:e,mt:"md"})]})},code:`
import { ColorInput } from '@mantine/core';
import { IconColorPicker } from '@tabler/icons-react';

function Demo() {
  const icon = <IconColorPicker size={18} stroke={1.5} />;

  return (
    <>
      <ColorInput
        label="With custom left section"
        placeholder="Replaces color swatch"
        leftSection={icon}
        withEyeDropper={false}
      />
      <ColorInput
        label="With custom right section"
        placeholder="Replaces eye dropper"
        rightSection={icon}
        mt="md"
      />
    </>
  );
}

`,centered:!0,maxWidth:340},X={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,t.jsx)(V,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <ColorInput label="Boolean error" placeholder="Boolean error" error />
      <ColorInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`},$={type:"code",component:function(){return(0,t.jsx)(V,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`},G={type:"code",component:function(){return(0,t.jsx)(V,{readOnly:!0,label:"Cannot modify value",defaultValue:"#F0FCFE"})},code:`
import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}
`,centered:!0,maxWidth:340};var Z=r(76971);let q=`
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={['#000', '#fff', '#f00', '#0f0', '#00f']}
      format="rgba"
      {{props}}
    />
  );
}
`,Q={type:"styles-api",data:Z.U,component:function(e){return(0,t.jsx)(V,{label:"Label",placeholder:"ColorInput",description:"Description",error:"Error",withAsterisk:!0,swatches:["#000","#fff","#f00","#0f0","#00f"],format:"rgba",classNames:e.classNames})},code:q,centered:!0,maxWidth:340};var J=r(85954),K=r(38215);let ee=(0,J.P)(K.XZ.ColorInput);function eo(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:r,GetElementRef:l,InputAccessibility:a,InputFeatures:i,InputSections:c,StylesApiSelectors:s}=o;return r||et("Demo",!0),l||et("GetElementRef",!0),a||et("InputAccessibility",!0),i||et("InputFeatures",!0),c||et("InputSections",!0),s||et("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i,{component:"ColorInput",element:"input"}),"\n",(0,t.jsx)(r,{data:F}),"\n",(0,t.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ColorInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <ColorInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"formats",children:"Formats"}),"\n",(0,t.jsx)(o.p,{children:"Component supports hex, hexa, rgb, rgba, hsl and hsla color formats.\nSlider to change opacity is displayed only for hexa, rgba and hsla formats:"}),"\n",(0,t.jsx)(r,{data:S}),"\n",(0,t.jsx)(o.h2,{id:"preserve-invalid-input",children:"Preserve invalid input"}),"\n",(0,t.jsxs)(o.p,{children:["By default, ",(0,t.jsx)(o.code,{children:"ColorInput"})," will revert the value on blur to the last known valid value.\nTo change this behavior and keep invalid value, set ",(0,t.jsx)(o.code,{children:"fixOnBlur={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:P}),"\n",(0,t.jsx)(o.h2,{id:"onchangeend",children:"onChangeEnd"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"onChangeEnd"})," is called when user stops dragging slider or changes input value.\nIt is useful when you need to update color only when user finished interaction with the component:"]}),"\n",(0,t.jsx)(r,{data:A}),"\n",(0,t.jsx)(o.h2,{id:"disable-free-input",children:"Disable free input"}),"\n",(0,t.jsxs)(o.p,{children:["To disable free input set ",(0,t.jsx)(o.code,{children:"disallowInput"})," prop:"]}),"\n",(0,t.jsx)(r,{data:W}),"\n",(0,t.jsx)(o.h2,{id:"with-swatches",children:"With swatches"}),"\n",(0,t.jsx)(o.p,{children:"You can add any amount of predefined color swatches:"}),"\n",(0,t.jsx)(r,{data:z}),"\n",(0,t.jsxs)(o.p,{children:["By default, there will be 7 swatches per row, you can change this with ",(0,t.jsx)(o.code,{children:"swatchesPerRow"})," prop,\nlike in ",(0,t.jsx)(o.a,{href:"/core/color-picker/",children:"ColorPicker"})," component:"]}),"\n",(0,t.jsx)(r,{data:M.M}),"\n",(0,t.jsx)(o.p,{children:"If you need to restrict color picking to certain colors – disable color picker and disallow free input:"}),"\n",(0,t.jsx)(r,{data:H}),"\n",(0,t.jsx)(o.h2,{id:"close-dropdown-on-color-swatch-click",children:"Close dropdown on color swatch click"}),"\n",(0,t.jsxs)(o.p,{children:["To close the dropdown when one of the color swatches is clicked, set ",(0,t.jsx)(o.code,{children:"closeOnColorSwatchClick"})," prop:"]}),"\n",(0,t.jsx)(r,{data:N}),"\n",(0,t.jsx)(o.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,t.jsxs)(o.p,{children:["To hide dropdown, set ",(0,t.jsx)(o.code,{children:"withPicker={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:B}),"\n",(0,t.jsx)(o.h2,{id:"eye-dropper",children:"Eye dropper"}),"\n",(0,t.jsxs)(o.p,{children:["By default, if ",(0,t.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API",children:"EyeDropper API"}),"\nis available, eye dropper icon will be displayed at the right section of the input.\nTo disable it, set ",(0,t.jsx)(o.code,{children:"withEyeDropper={false}"}),":"]}),"\n",(0,t.jsx)(r,{data:O}),"\n",(0,t.jsx)(o.h2,{id:"change-eye-dropper-icon",children:"Change eye dropper icon"}),"\n",(0,t.jsxs)(o.p,{children:["You can replace eye dropper icon with any React node using ",(0,t.jsx)(o.code,{children:"eyeDropperIcon"})," prop:"]}),"\n",(0,t.jsx)(r,{data:Y}),"\n",(0,t.jsx)(c,{component:"ColorInput"}),"\n",(0,t.jsxs)(o.p,{children:["Note that by default, ",(0,t.jsx)(o.code,{children:"ColorPicker"})," has color preview in the left section and eye dropper button\nin the right section. You can replace these elements with any React node using ",(0,t.jsx)(o.code,{children:"leftSection"}),"\nand ",(0,t.jsx)(o.code,{children:"rightSection"})," props:"]}),"\n",(0,t.jsx)(r,{data:U}),"\n",(0,t.jsx)(o.h2,{id:"error-state",children:"Error state"}),"\n",(0,t.jsx)(r,{data:X}),"\n",(0,t.jsx)(o.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsx)(r,{data:$}),"\n",(0,t.jsx)(o.h2,{id:"read-only",children:"Read only"}),"\n",(0,t.jsx)(r,{data:G}),"\n",(0,t.jsx)(s,{component:"ColorInput"}),"\n",(0,t.jsx)(r,{data:Q}),"\n",(0,t.jsx)(l,{component:"ColorInput",refType:"input"}),"\n",(0,t.jsx)(a,{component:"ColorInput"})]})}function er(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(ee,{...e,children:(0,t.jsx)(eo,{...e})})}function et(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},55090:(e,o,r)=>{"use strict";r.d(o,{A:()=>t});var t=(0,r(73366).A)("outline","color-picker","IconColorPicker",[["path",{d:"M11 7l6 6",key:"svg-0"}],["path",{d:"M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z",key:"svg-1"}]])},54381:(e,o,r)=>{"use strict";r.d(o,{M:()=>a});var t=r(31085),n=r(3278),l=r(2242);let a={type:"configurator",component:function(e){return(0,t.jsx)(n.s,{mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(l.S.colors).map(e=>l.S.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(l.S.colors).map(e=>`'${l.S.colors[e][6]}'`).join(", ")}]} />
  );
}
`,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]}},23232:(e,o,r)=>{"use strict";r.d(o,{$7:()=>l,l$:()=>t,wQ:()=>n});let t=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},18351:(e,o,r)=>{"use strict";r.d(o,{X:()=>l});var t=r(14041),n=r(89571);function l(){let[e,o]=(0,t.useState)(!1);(0,n.o)(()=>{o("undefined"!=typeof window&&!navigator.userAgent.includes("OPR")&&"EyeDropper"in window)},[]);let r=(0,t.useCallback)((o={})=>e?new window.EyeDropper().open(o):Promise.resolve(void 0),[e]);return{supported:e,open:r}}}},e=>{var o=o=>e(e.s=o);e.O(0,[67456,85954,90636,46593,38792],()=>o(45285)),_N_E=e.O()}]);