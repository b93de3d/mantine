(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77528],{64053:(e,n,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/styles/style",function(){return s(97981)}])},97981:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>c});var t=s(31085),r=s(71184),o=s(85954),i=s(38215);let l=(0,o.P)(i.XZ.StyleProp);function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"style-prop",children:"Style prop"}),"\n",(0,t.jsxs)(n.p,{children:["All Mantine components that have root element support ",(0,t.jsx)(n.code,{children:"style"})," prop.\nIt works similar to React ",(0,t.jsx)(n.code,{children:"style"})," prop, but with some additional features."]}),"\n",(0,t.jsx)(n.h2,{id:"style-object",children:"Style object"}),"\n",(0,t.jsxs)(n.p,{children:["You can pass a style object to the ",(0,t.jsx)(n.code,{children:"style"})," prop – in this case it works the same way\nas React ",(0,t.jsx)(n.code,{children:"style"})," prop. You can use Mantine ",(0,t.jsx)(n.a,{href:"/styles/css-variables",children:"CSS variables"})," in style object\nthe same way as in ",(0,t.jsx)(n.a,{href:"/styles/css-modules",children:".css files"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Box, rem } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Box\n      style={{\n        color: 'var(--mantine-color-red-5)',\n        fontSize: rem(12),\n      }}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"define-css-variables-in-style-prop",children:"Define CSS variables in style prop"}),"\n",(0,t.jsx)(n.p,{children:"You can define CSS variables in the style prop. Note that it only works with Mantine components:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Box\n      style={{ '--radius': '0.5rem', borderRadius: 'var(--radius)' }}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"style-function",children:"Style function"}),"\n",(0,t.jsxs)(n.p,{children:["You can pass a style function to the ",(0,t.jsx)(n.code,{children:"style"})," prop – in this case it will be called with ",(0,t.jsx)(n.a,{href:"/theming/theme-object/",children:"theme"}),".\nIt is useful when you need to access ",(0,t.jsx)(n.a,{href:"/theming/theme-object/",children:"theme"})," properties that are not exposed as ",(0,t.jsx)(n.a,{href:"/styles/css-variables",children:"CSS variables"}),",\nfor example, properties from ",(0,t.jsx)(n.code,{children:"theme.other"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Box } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Box\n      style={(theme) => ({\n        color: theme.colors.red[5],\n        fontSize: theme.fontSizes.xs,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"styles-array",children:"Styles array"}),"\n",(0,t.jsxs)(n.p,{children:["You can pass an array of style objects and/or functions to ",(0,t.jsx)(n.code,{children:"style"})," prop – in this case, all styles will be merged into one object.\nIt is useful when you want to create a wrapper around Mantine component, add inline styles and keep the option to pass\n",(0,t.jsx)(n.code,{children:"style"})," prop to it."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Box, MantineStyleProp } from '@mantine/core';\n\ninterface DemoProps {\n  style?: MantineStyleProp;\n}\n\nfunction Demo({ style }: DemoProps) {\n  return <Box style={[{ color: 'red' }, style]} />;\n}\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(l,{...e,children:(0,t.jsx)(a,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,85954,90636,46593,38792],()=>n(64053)),_N_E=e.O()}]);