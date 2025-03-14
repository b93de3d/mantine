(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19968],{91065:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/password-input",function(){return r(25744)}])},25744:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>M});var s=r(31085),o=r(71184),n=r(52404);let i={type:"configurator",component:function(e){return(0,s.jsx)(n.y,{...e,placeholder:"Input placeholder"})},code:`
import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:r(23232).$7};var l=r(75390),a=r(92051);let c={type:"code",component:function(){let[e,{toggle:t}]=(0,a.j)(!1);return(0,s.jsxs)(l.B,{children:[(0,s.jsx)(n.y,{label:"Password",defaultValue:"secret",visible:e,onVisibilityChange:t}),(0,s.jsx)(n.y,{label:"Confirm password",defaultValue:"secret",visible:e,onVisibilityChange:t})]})},code:`
import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}
`,centered:!0,maxWidth:340};var p=r(73366),d=(0,p.A)("outline","eye-off","IconEyeOff",[["path",{d:"M10.585 10.587a2 2 0 0 0 2.829 2.828",key:"svg-0"}],["path",{d:"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",key:"svg-1"}],["path",{d:"M3 3l18 18",key:"svg-2"}]]),u=(0,p.A)("outline","eye-check","IconEyeCheck",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M11.102 17.957c-3.204 -.307 -5.904 -2.294 -8.102 -5.957c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a19.5 19.5 0 0 1 -.663 1.032",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]);let h=({reveal:e})=>e?(0,s.jsx)(d,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}}):(0,s.jsx)(u,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}}),m={type:"code",component:function(){return(0,s.jsx)(n.y,{maw:320,mx:"auto",label:"Change visibility toggle icon",placeholder:"Change visibility toggle icon",defaultValue:"secret",visibilityToggleIcon:h})},code:`
import { PasswordInput } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';

const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
  reveal ? (
    <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  ) : (
    <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  );

function Demo() {
  return (
    <PasswordInput
      maw={320}
      mx="auto"
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={VisibilityToggleIcon}
    />
  );
}
`};var g=r(14041),b=r(11466),y=r(3650),v=r(93065),x=r(34056),f=r(35764),w=r(44419);function j({meets:e,label:t}){return(0,s.jsxs)(v.E,{c:e?"teal":"red",style:{display:"flex",alignItems:"center"},mt:7,size:"sm",children:[e?(0,s.jsx)(b.A,{size:14}):(0,s.jsx)(y.A,{size:14}),(0,s.jsx)(x.a,{ml:10,children:t})]})}let I=[{re:/[0-9]/,label:"Includes number"},{re:/[a-z]/,label:"Includes lowercase letter"},{re:/[A-Z]/,label:"Includes uppercase letter"},{re:/[$&+,:;=?@#|'<>.^*()%!-]/,label:"Includes special symbol"}],P={type:"code",code:`
import { useState } from 'react';
import { IconX, IconCheck } from '@tabler/icons-react';
import { PasswordInput, Progress, Text, Popover, Box } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      c={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size={14} /> : <IconX size={14} />}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function Demo() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <PasswordInput
            withAsterisk
            label="Your password"
            placeholder="Your password"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb="xs" />
        <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
}
`,component:function(){let e;let[t,r]=(0,g.useState)(!1),[o,i]=(0,g.useState)(""),l=I.map((e,t)=>(0,s.jsx)(j,{label:e.label,meets:e.re.test(o)},t)),a=(e=o.length>5?0:1,I.forEach(t=>{t.re.test(o)||(e+=1)}),Math.max(100-100/(I.length+1)*e,10));return(0,s.jsxs)(f.A,{opened:t,position:"bottom",width:"target",transitionProps:{transition:"pop"},children:[(0,s.jsx)(f.A.Target,{children:(0,s.jsx)("div",{onFocusCapture:()=>r(!0),onBlurCapture:()=>r(!1),children:(0,s.jsx)(n.y,{withAsterisk:!0,label:"Your password",placeholder:"Your password",value:o,onChange:e=>i(e.currentTarget.value)})})}),(0,s.jsxs)(f.A.Dropdown,{children:[(0,s.jsx)(w.k,{color:100===a?"teal":a>50?"yellow":"red",value:a,size:5,mb:"xs"}),(0,s.jsx)(j,{label:"Includes at least 6 characters",meets:o.length>5}),l]})]})},centered:!0,maxWidth:340};var C=r(53223);let V={type:"code",component:function(){let e=(0,s.jsx)(C.A,{size:18,stroke:1.5});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.y,{leftSection:e,leftSectionPointerEvents:"none",label:"With left section",placeholder:"With left section"}),(0,s.jsx)(n.y,{rightSection:e,label:"With right section",placeholder:"With right section",rightSectionPointerEvents:"none",mt:"md"})]})},code:`
import { PasswordInput } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

function Demo() {
  const icon = <IconLock size={18} stroke={1.5} />;

  return (
    <>
      <PasswordInput leftSection={icon} label="With left section" placeholder="With left section" />
      <PasswordInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340},k={type:"code",component:function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.y,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,s.jsx)(n.y,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <PasswordInput label="Boolean error" placeholder="Boolean error" error />
      <PasswordInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`},z={type:"code",component:function(){return(0,s.jsx)(n.y,{disabled:!0,label:"Disabled password input",placeholder:"Disabled password input"})},code:`
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
`,centered:!0,maxWidth:340};var S=r(89419);let D=`
import { IconLock } from '@tabler/icons-react';
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconLock size={18} />}
      {{props}}
    />
  );
}
`,T={type:"styles-api",data:S.o,component:function(e){return(0,s.jsx)(n.y,{label:"Label",placeholder:"PasswordInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,s.jsx)(C.A,{size:18}),...e})},code:D,centered:!0,maxWidth:340};var _=r(85954),E=r(38215);let A=(0,_.P)(E.XZ.PasswordInput);function W(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:r,GetElementRef:n,InputAccessibility:l,InputFeatures:a,InputSections:p,StylesApiSelectors:d}=t;return r||N("Demo",!0),n||N("GetElementRef",!0),l||N("InputAccessibility",!0),a||N("InputFeatures",!0),p||N("InputSections",!0),d||N("StylesApiSelectors",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(a,{component:"PasswordInput",element:"input"}),"\n",(0,s.jsx)(r,{data:i}),"\n",(0,s.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <PasswordInput\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"controlled-visibility-toggle",children:"Controlled visibility toggle"}),"\n",(0,s.jsxs)(t.p,{children:["Control visibility state with ",(0,s.jsx)(t.code,{children:"visible"})," and ",(0,s.jsx)(t.code,{children:"onVisibilityChange"})," props,\nfor example, the props can be used to sync visibility state between two inputs:"]}),"\n",(0,s.jsx)(r,{data:c}),"\n",(0,s.jsx)(t.h2,{id:"change-visibility-toggle-icon",children:"Change visibility toggle icon"}),"\n",(0,s.jsxs)(t.p,{children:["To change visibility toggle icon, pass a React component that accepts ",(0,s.jsx)(t.code,{children:"reveal"})," prop to ",(0,s.jsx)(t.code,{children:"visibilityToggleIcon"}),":"]}),"\n",(0,s.jsx)(r,{data:m}),"\n",(0,s.jsx)(t.h2,{id:"strength-meter-example",children:"Strength meter example"}),"\n",(0,s.jsxs)(t.p,{children:["Password strength meter example with ",(0,s.jsx)(t.a,{href:"/core/progress/",children:"Progress"})," and ",(0,s.jsx)(t.a,{href:"/core/popover/",children:"Popover"})," components:"]}),"\n",(0,s.jsx)(r,{data:P,demoProps:{zIndex:4}}),"\n",(0,s.jsx)(t.h2,{id:"usage-without-visibility-toggle",children:"Usage without visibility toggle"}),"\n",(0,s.jsxs)(t.p,{children:["If you do not need visibility toggle button, use ",(0,s.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," component instead:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  return <TextInput type=\"password\" />;\n}\n"})}),"\n",(0,s.jsx)(p,{component:"PasswordInput"}),"\n",(0,s.jsxs)(t.p,{children:["Note that when ",(0,s.jsx)(t.code,{children:"rightSection"})," prop is used, visibility toggle button is not rendered."]}),"\n",(0,s.jsx)(r,{data:V}),"\n",(0,s.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,s.jsx)(r,{data:k}),"\n",(0,s.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,s.jsxs)(t.p,{children:["When ",(0,s.jsx)(t.code,{children:"disabled"})," prop is set, visibility toggle button is hidden:"]}),"\n",(0,s.jsx)(r,{data:z}),"\n",(0,s.jsx)(d,{component:"PasswordInput"}),"\n",(0,s.jsx)(r,{data:T}),"\n",(0,s.jsx)(n,{component:"PasswordInput",refType:"input"}),"\n",(0,s.jsx)(l,{component:"PasswordInput"}),"\n",(0,s.jsxs)(t.p,{children:["To set ",(0,s.jsx)(t.code,{children:"aria-label"})," on the visibility toggle button, use ",(0,s.jsx)(t.code,{children:"visibilityToggleButtonProps"})," prop:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <PasswordInput\n      label=\"Password\"\n      visibilityToggleButtonProps={{\n        'aria-label': 'Toggle password visibility',\n      }}\n    />\n  );\n}\n"})})]})}function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(A,{...e,children:(0,s.jsx)(W,{...e})})}function N(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3650:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var s=(0,r(73366).A)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},23232:(e,t,r)=>{"use strict";r.d(t,{$7:()=>n,l$:()=>s,wQ:()=>o});let s=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},52404:(e,t,r)=>{"use strict";r.d(t,{y:()=>f});var s=r(31085),o=r(54357),n=r(97567),i=r(82307);r(14041);var l=r(33450),a=r(7098),c=r(36456),p=r(69564),d=r(29686),u=r(18315),h=r(6754),m=r(22962),g=r(34452),b=r(87059),y={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let v={visibilityToggleIcon:({reveal:e})=>(0,s.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,s.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},x=(0,a.V)((e,{size:t})=>({root:{"--psi-icon-size":(0,l.YC)(t,"psi-icon-size"),"--psi-button-size":(0,l.YC)(t,"psi-button-size")}})),f=(0,h.P9)((e,t)=>{let r=(0,d.Y)("PasswordInput",v,e),{classNames:l,className:a,style:h,styles:b,unstyled:f,vars:w,required:j,error:I,leftSection:P,disabled:C,id:V,variant:k,inputContainer:z,description:S,label:D,size:T,errorProps:_,descriptionProps:E,labelProps:A,withAsterisk:W,inputWrapperOrder:M,wrapperProps:N,radius:L,rightSection:B,rightSectionWidth:Y,rightSectionPointerEvents:q,leftSectionWidth:R,visible:O,defaultVisible:Z,onVisibilityChange:F,visibilityToggleIcon:$,visibilityToggleButtonProps:X,rightSectionProps:K,leftSectionProps:U,leftSectionPointerEvents:G,withErrorStyles:J,mod:Q,...H}=r,ee=(0,n.B)(V),[et,er]=(0,i.Z)({value:O,defaultValue:Z,finalValue:!1,onChange:F}),es=()=>er(!et),eo=(0,p.I)({name:"PasswordInput",classes:y,props:r,className:a,style:h,classNames:l,styles:b,unstyled:f,vars:w,varsResolver:x}),{resolvedClassNames:en,resolvedStyles:ei}=(0,c.Y)({classNames:l,styles:b,props:r}),{styleProps:el,rest:ea}=(0,u.j)(H),ec=(0,s.jsx)(m.M,{...eo("visibilityToggle"),disabled:C,radius:L,"aria-hidden":!X,tabIndex:-1,...X,variant:X?.variant??"subtle",color:"gray",unstyled:f,onTouchEnd:e=>{e.preventDefault(),X?.onTouchEnd?.(e),es()},onMouseDown:e=>{e.preventDefault(),X?.onMouseDown?.(e),es()},onKeyDown:e=>{X?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),es())},children:(0,s.jsx)($,{reveal:et})});return(0,s.jsx)(g.p.Wrapper,{required:j,id:ee,label:D,error:I,description:S,size:T,classNames:en,styles:ei,__staticSelector:"PasswordInput",errorProps:_,descriptionProps:E,unstyled:f,withAsterisk:W,inputWrapperOrder:M,inputContainer:z,variant:k,labelProps:{...A,htmlFor:ee},mod:Q,...eo("root"),...el,...N,children:(0,s.jsx)(g.p,{component:"div",error:I,leftSection:P,size:T,classNames:{...en,input:(0,o.A)(y.input,en.input)},styles:ei,radius:L,disabled:C,__staticSelector:"PasswordInput",rightSectionWidth:Y,rightSection:B??ec,variant:k,unstyled:f,leftSectionWidth:R,rightSectionPointerEvents:q||"all",rightSectionProps:K,leftSectionProps:U,leftSectionPointerEvents:G,withAria:!1,withErrorStyles:J,children:(0,s.jsx)("input",{required:j,"data-invalid":!!I||void 0,"data-with-left-section":!!P||void 0,...eo("innerInput"),disabled:C,id:ee,ref:t,...ea,autoComplete:ea.autoComplete||"off",type:et?"text":"password"})})})});f.classes={...b.O.classes,...y},f.displayName="@mantine/core/PasswordInput"},44419:(e,t,r)=>{"use strict";r.d(t,{k:()=>V});var s=r(31085);r(14041);var o=r(36456),n=r(29686),i=r(6754),l=r(34056);let[a,c]=(0,r(59852).F)("Progress.Root component was not found in tree");var p={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd",label:"m_91e40b74"};let d={},u=(0,i.P9)((e,t)=>{let{classNames:r,className:o,style:i,styles:a,vars:p,...u}=(0,n.Y)("ProgressLabel",d,e),h=c();return(0,s.jsx)(l.a,{ref:t,...h.getStyles("label",{className:o,style:i,classNames:r,styles:a}),...u})});u.classes=p,u.displayName="@mantine/core/ProgressLabel";var h=r(33450),m=r(7098),g=r(69564);let b={},y=(0,m.V)((e,{size:t,radius:r,transitionDuration:s})=>({root:{"--progress-size":(0,h.YC)(t,"progress-size"),"--progress-radius":void 0===r?void 0:(0,h.nJ)(r),"--progress-transition-duration":"number"==typeof s?`${s}ms`:void 0}})),v=(0,i.P9)((e,t)=>{let r=(0,n.Y)("ProgressRoot",b,e),{classNames:o,className:i,style:c,styles:d,unstyled:u,vars:h,autoContrast:m,transitionDuration:v,...x}=r,f=(0,g.I)({name:"Progress",classes:p,props:r,className:i,style:c,classNames:o,styles:d,unstyled:u,vars:h,varsResolver:y});return(0,s.jsx)(a,{value:{getStyles:f,autoContrast:m},children:(0,s.jsx)(l.a,{ref:t,...f("root"),...x})})});v.classes=p,v.displayName="@mantine/core/ProgressRoot";var x=r(51606),f=r(3702),w=r(62554),j=r(92408);let I={withAria:!0},P=(0,i.P9)((e,t)=>{let{classNames:r,className:o,style:i,styles:a,vars:p,value:d,withAria:u,color:h,striped:m,animated:g,mod:b,...y}=(0,n.Y)("ProgressSection",I,e),v=c(),P=(0,j.xd)(),C=u?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,"aria-valuetext":`${d}%`}:{};return(0,s.jsx)(l.a,{ref:t,...v.getStyles("section",{className:o,classNames:r,styles:a,style:i}),...y,...C,mod:[{striped:m||g,animated:g},b],__vars:{"--progress-section-width":`${d}%`,"--progress-section-color":(0,x.r)(h,P),"--progress-label-color":(0,w.v)(v.autoContrast,P)?(0,f.w)({color:h,theme:P,autoContrast:v.autoContrast}):void 0}})});P.classes=p,P.displayName="@mantine/core/ProgressSection";let C={},V=(0,i.P9)((e,t)=>{let r=(0,n.Y)("Progress",C,e),{value:i,classNames:l,styles:a,vars:c,color:p,striped:d,animated:u,"aria-label":h,...m}=r,{resolvedClassNames:g,resolvedStyles:b}=(0,o.Y)({classNames:l,styles:a,props:r});return(0,s.jsx)(v,{ref:t,classNames:g,styles:b,vars:c,...m,children:(0,s.jsx)(P,{value:i,color:p,striped:d,animated:u,"aria-label":h})})});V.classes=p,V.displayName="@mantine/core/Progress",V.Section=P,V.Root=v,V.Label=u},92051:(e,t,r)=>{"use strict";r.d(t,{j:()=>o});var s=r(14041);function o(e=!1,t){let{onOpen:r,onClose:n}=t||{},[i,l]=(0,s.useState)(e),a=(0,s.useCallback)(()=>{l(e=>e||(r?.(),!0))},[r]),c=(0,s.useCallback)(()=>{l(e=>e?(n?.(),!1):e)},[n]),p=(0,s.useCallback)(()=>{i?c():a()},[c,a,i]);return[i,{open:a,close:c,toggle:p}]}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,85954,90636,46593,38792],()=>t(91065)),_N_E=e.O()}]);