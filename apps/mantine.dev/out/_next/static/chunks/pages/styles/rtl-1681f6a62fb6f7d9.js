(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27717],{22839:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/rtl",function(){return n(27131)}])},27131:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var i=n(31085),o=n(71184),r=n(14041),c=n(73366),d=(0,c.A)("outline","text-direction-ltr","IconTextDirectionLtr",[["path",{d:"M5 19h14",key:"svg-0"}],["path",{d:"M17 21l2 -2l-2 -2",key:"svg-1"}],["path",{d:"M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5",key:"svg-2"}],["path",{d:"M14 15v-11",key:"svg-3"}],["path",{d:"M10 15v-11",key:"svg-4"}]]),s=(0,c.A)("outline","text-direction-rtl","IconTextDirectionRtl",[["path",{d:"M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5",key:"svg-0"}],["path",{d:"M14 15v-11",key:"svg-1"}],["path",{d:"M10 15v-11",key:"svg-2"}],["path",{d:"M5 19h14",key:"svg-3"}],["path",{d:"M7 21l-2 -2l2 -2",key:"svg-4"}]]),l=n(46746),a=n(22962);let h={type:"code",component:function(){let{toggleDirection:e,dir:t,setDirection:n}=(0,l.jH)();return(0,r.useEffect)(()=>()=>n("ltr"),[]),(0,i.jsx)(a.M,{onClick:()=>e(),variant:"default",radius:"md",size:"lg",children:"rtl"===t?(0,i.jsx)(d,{stroke:1.5}):(0,i.jsx)(s,{stroke:1.5})})},centered:!0,code:`
import { ActionIcon, useDirection } from '@mantine/core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';

function Demo() {
  const { toggleDirection, dir } = useDirection();
  return (
    <ActionIcon onClick={() => toggleDirection()} variant="default" radius="md" size="lg">
      {dir === 'rtl' ? (
        <IconTextDirectionLtr stroke={1.5} />
      ) : (
        <IconTextDirectionRtl stroke={1.5} />
      )}
    </ActionIcon>
  );
}
`};var u={demo:"m_7bd29d5a"};let p={type:"code",component:function(){return(0,i.jsx)("div",{className:u.demo,children:"Demo"})},code:[{fileName:"Demo.module.css",code:`
.demo {
  text-align: center;
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  /* LTR styles */
  background-color: var(--mantine-color-blue-filled);

  @mixin rtl {
    /* RTL styles override LTR styles */
    background-color: var(--mantine-color-red-filled);
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`,language:"tsx"}]};var m=n(85954),x=n(38215);let j=(0,m.P)(x.XZ.Rtl);function f(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"right-to-left-direction",children:"Right-to-left direction"}),"\n",(0,i.jsxs)(t.p,{children:["All Mantine components support right-to-left direction out of the box.\nYou can preview how components work with RTL direction by clicking direction control\nin the top right corner or pressing ",(0,i.jsx)(t.code,{children:"Ctrl + Shift + L"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"directionprovider",children:"DirectionProvider"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"DirectionProvider"})," component is used to set direction for all components inside it.\nIt is required to wrap your application with ",(0,i.jsx)(t.code,{children:"DirectionProvider"})," if you are planning to\neither use RTL direction or change direction dynamically."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"DirectionProvider"})," supports the following props:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"export interface DirectionProviderProps {\n  /** Your application */\n  children: React.ReactNode;\n\n  /** Direction set as a default value, `ltr` by default */\n  initialDirection?: 'rtl' | 'ltr';\n\n  /** Determines whether direction should be updated on mount based on `dir` attribute set on root element (usually html element), `true` by default  */\n  detectDirection?: boolean;\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Setup ",(0,i.jsx)(t.code,{children:"DirectionProvider"})," in your application:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { DirectionProvider, MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <DirectionProvider>\n      <MantineProvider>{/* Your app here */}</MantineProvider>\n    </DirectionProvider>\n  );\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"dir-attribute",children:"dir attribute"}),"\n",(0,i.jsxs)(t.p,{children:["It is required to set ",(0,i.jsx)(t.code,{children:"dir"})," attribute on the root element of your application, usually it is ",(0,i.jsx)(t.code,{children:"html"})," element.\n",(0,i.jsx)(t.code,{children:"DirectionProvider"})," will use its value to set direction on mount if ",(0,i.jsx)(t.code,{children:"detectDirection"})," prop is set to ",(0,i.jsx)(t.code,{children:"true"}),".\nNote that this guide does not cover setting ",(0,i.jsx)(t.code,{children:"dir"})," attribute for different frameworks – follow your framework\ndocumentation to learn how to do it."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!doctype html>\n\x3c!-- Set direction attribute on html element --\x3e\n<html dir="rtl">\n  <head></head>\n  <body></body>\n</html>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"usedirection-hook",children:"useDirection hook"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"useDirection"})," returns an object with the following properties:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"dir"})," – current direction"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"setDirection"})," – function to set direction"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"toggleDirection"})," – function to change direction to the opposite value"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You can use it to create direction control in your application:"}),"\n",(0,i.jsx)(n,{data:h}),"\n",(0,i.jsx)(t.h2,{id:"rtl-mixin",children:"rtl mixin"}),"\n",(0,i.jsxs)(t.p,{children:["If you have ",(0,i.jsx)(t.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," installed then you can use ",(0,i.jsx)(t.code,{children:"rtl"})," mixin in ",(0,i.jsx)(t.code,{children:".css"})," files:"]}),"\n",(0,i.jsx)(n,{data:p})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(j,{...e,children:(0,i.jsx)(f,{...e})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,85954,90636,46593,38792],()=>t(22839)),_N_E=e.O()}]);