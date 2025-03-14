(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32536],{37029:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/list",function(){return i(17393)}])},17393:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>x});var s=i(31085),n=i(71184),r=i(17592);let o={type:"configurator",component:function(e){return(0,s.jsxs)(r.B,{...e,children:[(0,s.jsx)(r.B.Item,{children:"Clone or download repository from GitHub"}),(0,s.jsx)(r.B.Item,{children:"Install dependencies with yarn"}),(0,s.jsx)(r.B.Item,{children:"To start development server run npm start command"}),(0,s.jsx)(r.B.Item,{children:"Run tests to make sure your changes do not break the build"}),(0,s.jsx)(r.B.Item,{children:"Submit a pull request once you are done"})]})},code:`
import { List } from '@mantine/core';

function Demo() {
  return (
    <List{{props}}>
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
  );
}
`,controls:[{prop:"type",type:"segmented",data:[{value:"unordered",label:"Unordered"},{value:"ordered",label:"Ordered"}],initialValue:"unordered",libraryValue:"unordered"},{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"withPadding",type:"boolean",libraryValue:!1,initialValue:!1}]};var d=i(50662),l=i(79289),c=i(29225);let m={type:"code",centered:!0,maxWidth:500,component:function(){return(0,s.jsxs)(r.B,{spacing:"xs",size:"sm",center:!0,icon:(0,s.jsx)(c.L,{color:"teal",size:24,radius:"xl",children:(0,s.jsx)(d.A,{size:16})}),children:[(0,s.jsx)(r.B.Item,{children:"Clone or download repository from GitHub"}),(0,s.jsx)(r.B.Item,{children:"Install dependencies with yarn"}),(0,s.jsx)(r.B.Item,{children:"To start development server run npm start command"}),(0,s.jsx)(r.B.Item,{children:"Run tests to make sure your changes do not break the build"}),(0,s.jsx)(r.B.Item,{icon:(0,s.jsx)(c.L,{color:"blue",size:24,radius:"xl",children:(0,s.jsx)(l.A,{size:16})}),children:"Submit a pull request once you are done"})]})},code:`
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size={16} />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircleDashed size={16} />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
  );
}
`},a={type:"code",component:function(){return(0,s.jsxs)(r.B,{listStyleType:"disc",children:[(0,s.jsx)(r.B.Item,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"}),(0,s.jsx)(r.B.Item,{children:"First order item"}),(0,s.jsxs)(r.B.Item,{children:["First order item with list",(0,s.jsxs)(r.B,{withPadding:!0,listStyleType:"disc",children:[(0,s.jsx)(r.B.Item,{children:"Nested item"}),(0,s.jsx)(r.B.Item,{children:"Nested item"}),(0,s.jsxs)(r.B.Item,{children:["Nested item with list",(0,s.jsxs)(r.B,{withPadding:!0,listStyleType:"disc",children:[(0,s.jsx)(r.B.Item,{children:"Event more nested"}),(0,s.jsx)(r.B.Item,{children:"Event more nested"})]})]}),(0,s.jsx)(r.B.Item,{children:"Nested item"})]})]}),(0,s.jsx)(r.B.Item,{children:"First order item"})]})},code:`
import { List } from '@mantine/core';

function Demo() {
  return (
    <List listStyleType="disc">
      <List.Item>First order item</List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List withPadding listStyleType="disc">
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>
            Nested item with list
            <List withPadding listStyleType="disc">
              <List.Item>Event more nested</List.Item>
              <List.Item>Event more nested</List.Item>
            </List>
          </List.Item>
          <List.Item>Nested item</List.Item>
        </List>
      </List.Item>
      <List.Item>First order item</List.Item>
    </List>
  );
}
`};var u=i(85954),h=i(38215);let p=(0,u.P)(h.XZ.List);function I(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components},{Demo:i}=t;return i||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(i,{data:o}),"\n",(0,s.jsx)(t.h2,{id:"with-icons",children:"With icons"}),"\n",(0,s.jsx)(t.p,{children:"You can replace list bullets with icon. To do so provide following props:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"icon"})," on List component will be used as default icon for all list elements"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"icon"})," on List.Item component will override context icon from List"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"spacing"})," – spacing between list items from theme or any valid CSS value to set spacing, defaults to ",(0,s.jsx)(t.code,{children:"0"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"center"})," – center item content with icon"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"size"})," – set font size from theme"]}),"\n"]}),"\n",(0,s.jsx)(i,{data:m}),"\n",(0,s.jsx)(t.h2,{id:"nested-lists",children:"Nested lists"}),"\n",(0,s.jsxs)(t.p,{children:["Set ",(0,s.jsx)(t.code,{children:"withPadding"})," prop to offset nested lists and ",(0,s.jsx)(t.code,{children:"listStyleType"})," to control bullet type:"]}),"\n",(0,s.jsx)(i,{data:a})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(p,{...e,children:(0,s.jsx)(I,{...e})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,85954,90636,46593,38792],()=>t(37029)),_N_E=e.O()}]);