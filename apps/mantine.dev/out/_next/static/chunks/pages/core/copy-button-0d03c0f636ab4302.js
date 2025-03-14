(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74412],{30057:(o,e,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/copy-button",function(){return t(61476)}])},61476:(o,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>x});var n=t(31085),i=t(71184),c=t(8727),r=t(52022);let l={type:"code",component:function(){return(0,n.jsx)(c.i,{value:"https://mantine.dev",children:({copied:o,copy:e})=>(0,n.jsx)(r.$,{color:o?"teal":"blue",onClick:e,children:o?"Copied url":"Copy url"})})},centered:!0,code:`
import { CopyButton, Button } from '@mantine/core';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
`};var s=t(11466),d=t(59653),a=t(2912),p=t(22962);let u={type:"code",component:function(){return(0,n.jsx)(c.i,{value:"https://mantine.dev",timeout:2e3,children:({copied:o,copy:e})=>(0,n.jsx)(a.m,{label:o?"Copied":"Copy",withArrow:!0,position:"right",children:(0,n.jsx)(p.M,{color:o?"teal":"gray",variant:"subtle",onClick:e,children:o?(0,n.jsx)(s.A,{size:16}):(0,n.jsx)(d.A,{size:16})})})})},centered:!0,code:`
import { ActionIcon, CopyButton, Tooltip } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

`};var h=t(85954),m=t(38215);let y=(0,h.P)(m.XZ.CopyButton);function j(o){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...o.components},{Demo:t,ServerComponentsIncompatible:c}=e;return t||v("Demo",!0),c||v("ServerComponentsIncompatible",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"CopyButton"})," is based on ",(0,n.jsx)(e.a,{href:"/hooks/use-clipboard/",children:"use-clipboard"})," hook.\nIts children is a function that receives an object with the following properties:"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"copied"})," – boolean value that indicates that a given value was recently copied to the clipboard, it resets after a given timeout (defaults to 500ms)"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"copy"})," – function that should be called to copy given value to clipboard"]}),"\n"]}),"\n",(0,n.jsx)(t,{data:l}),"\n",(0,n.jsx)(e.h2,{id:"security",children:"Security"}),"\n",(0,n.jsxs)(e.p,{children:["Due to security reasons ",(0,n.jsx)(e.code,{children:"CopyButton"})," component will not work in iframes and may not work with local files opened with ",(0,n.jsx)(e.code,{children:"file://"})," protocol\n(component will work fine with local websites that are using ",(0,n.jsx)(e.code,{children:"http://"})," protocol). You can learn more about ",(0,n.jsx)(e.code,{children:"navigator.clipboard"})," ",(0,n.jsx)(e.a,{href:"https://web.dev/async-clipboard/",children:"here"}),"."]}),"\n",(0,n.jsx)(e.h2,{id:"timeout",children:"Timeout"}),"\n",(0,n.jsxs)(e.p,{children:["You can provide a custom ",(0,n.jsx)(e.code,{children:"copied"})," reset ",(0,n.jsx)(e.code,{children:"timeout"}),":"]}),"\n",(0,n.jsx)(t,{data:u}),"\n",(0,n.jsx)(c,{component:"CopyButton"})]})}function x(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(y,{...o,children:(0,n.jsx)(j,{...o})})}function v(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},59653:(o,e,t)=>{"use strict";t.d(e,{A:()=>n});var n=(0,t(73366).A)("outline","copy","IconCopy",[["path",{d:"M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",key:"svg-1"}]])}},o=>{var e=e=>o(o.s=e);o.O(0,[67456,85954,90636,46593,38792],()=>e(30057)),_N_E=o.O()}]);