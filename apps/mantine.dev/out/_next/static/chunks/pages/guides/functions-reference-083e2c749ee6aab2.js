(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44049],{67699:(n,e,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/functions-reference",function(){return r(28408)}])},28408:(n,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>t});var s=r(31085),i=r(71184),o=r(85954),a=r(38215);let c=(0,o.P)(a.XZ.FunctionsReference);function d(n){let e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"functions-reference",children:"Functions reference"}),"\n",(0,s.jsx)(e.p,{children:"This guides contains a list of functions exported from Mantine packages that\nare not documented anywhere else."}),"\n",(0,s.jsx)(e.h2,{id:"clamp",children:"clamp"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"clamp"})," function is exported from ",(0,s.jsx)(e.code,{children:"@mantine/hooks"}),".\nIt clamps number within the inclusive lower and upper bounds."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { clamp } from '@mantine/hooks';\n\n// With both min and max boundaries\nclamp(10, 0, 5); // 5\nclamp(100, 0, 5); // 5\nclamp(-100, 0, 5); // 0\n\n// With only min boundary\nclamp(10, 0, undefined); // 10\nclamp(-100, 0, undefined); // 0\n\n// With only max boundary\nclamp(0, undefined, 5); // 0\nclamp(10, undefined, 5); // 5\n"})}),"\n",(0,s.jsx)(e.h2,{id:"lowerfirst",children:"lowerFirst"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"lowerFirst"})," function is exported from ",(0,s.jsx)(e.code,{children:"@mantine/hooks"}),".\nIt converts first character of a string to lower case."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { lowerFirst } from '@mantine/hooks';\n\nlowerFirst('Mantine'); // mantine\nlowerFirst('mantine'); // mantine\n"})}),"\n",(0,s.jsx)(e.h2,{id:"upperfirst",children:"upperFirst"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"upperFirst"})," function is exported from ",(0,s.jsx)(e.code,{children:"@mantine/hooks"}),".\nIt converts first character of a string to upper case."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { upperFirst } from '@mantine/hooks';\n\nupperFirst('Mantine'); // Mantine\nupperFirst('mantine'); // Mantine\n"})}),"\n",(0,s.jsx)(e.h2,{id:"randomid",children:"randomId"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"randomId"})," function is exported from ",(0,s.jsx)(e.code,{children:"@mantine/hooks"}),".\nIt generates random id with ",(0,s.jsx)(e.code,{children:"mantine-"})," prefix."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { randomId } from '@mantine/hooks';\n\nrandomId(); // mantine-d7h137oav\nrandomId(); // mantine-1q2j3j4j5\n"})}),"\n",(0,s.jsx)(e.h2,{id:"range",children:"range"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"range"})," function is exported from ",(0,s.jsx)(e.code,{children:"@mantine/hooks"}),".\nIt generates array of numbers from ",(0,s.jsx)(e.code,{children:"start"})," to ",(0,s.jsx)(e.code,{children:"end"})," (inclusive)."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { range } from '@mantine/hooks';\n\nrange(0, 5); // [0, 1, 2, 3, 4, 5]\nrange(5, 0); // [5, 4, 3, 2, 1, 0]\n"})}),"\n",(0,s.jsx)(e.h2,{id:"shallowequal",children:"shallowEqual"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"shallowEqual"})," function is exported from ",(0,s.jsx)(e.code,{children:"@mantine/hooks"}),".\nIt performs shallow equal check of two objects."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { shallowEqual } from '@mantine/hooks';\n\nshallowEqual({ a: 1 }, { a: 1 }); // true\nshallowEqual({ a: 1 }, { a: 2 }); // false\n"})})]})}function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(c,{...n,children:(0,s.jsx)(d,{...n})})}}},n=>{var e=e=>n(n.s=e);n.O(0,[67456,85954,90636,46593,38792],()=>e(67699)),_N_E=n.O()}]);