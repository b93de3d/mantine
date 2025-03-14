(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16881],{78927:(n,e,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-pagination",function(){return t(95780)}])},95780:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>m});var a=t(31085),i=t(71184),o=t(48895);let s={type:"code",component:function(){return(0,a.jsx)(o.d,{total:10})},centered:!0};var l=t(7925),r=t(70506),d=t(85954),g=t(38215);let u=(0,d.P)(g.XZ.usePagination);function c(n){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components},{Demo:t}=e;return t||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"use-pagination"})," is a state management hook for ",(0,a.jsx)(e.a,{href:"/core/pagination/",children:"Pagination"})," component,\nit manages pagination with controlled and uncontrolled state:"]}),"\n",(0,a.jsx)(t,{data:s}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"import { usePagination } from '@mantine/hooks';\n\nconst pagination = usePagination({ total: 10, initialPage: 1 });\n\npagination.range; // -> [1, 2, 3, 4, 5, 'dots', 10];\n\npagination.setPage(5);\npagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];\n\npagination.next();\npagination.range; // -> [1, 'dots', 5, 6, 7, 'dots', 10];\n\npagination.previous();\npagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];\n\npagination.last();\npagination.range; // -> [1, 'dots', 6, 7, 8, 9, 10];\n\npagination.first();\npagination.range; // -> [1, 2, 3, 4, 5, 'dots', 10];\n"})}),"\n",(0,a.jsx)(e.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsxs)(e.p,{children:["The hook supports controlled mode, provide ",(0,a.jsx)(e.code,{children:"page"})," and ",(0,a.jsx)(e.code,{children:"onChange"})," props to manage state from outside:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { usePagination } from '@mantine/hooks';\n\nconst [page, onChange] = useState(1);\nconst pagination = usePagination({ total: 10, page, onChange });\n\n// Will call onChange with 5\npagination.setPage(5);\npagination.range; // -> [1, 'dots', 4, 5, 6, 'dots', 10];\n\n// ... All other examples work the same\n"})}),"\n",(0,a.jsx)(e.h2,{id:"siblings",children:"Siblings"}),"\n",(0,a.jsxs)(e.p,{children:["Control number of active item siblings with ",(0,a.jsx)(e.code,{children:"siblings"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"import { usePagination } from '@mantine/hooks';\n\nconst pagination = usePagination({ total: 20, siblings: 3 });\n"})}),"\n",(0,a.jsx)(t,{data:l.w,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(e.h2,{id:"boundaries",children:"Boundaries"}),"\n",(0,a.jsxs)(e.p,{children:["Control number of items on each boundary with ",(0,a.jsx)(e.code,{children:"boundaries"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"import { usePagination } from '@mantine/hooks';\n\nconst pagination = usePagination({ total: 20, boundaries: 3 });\n"})}),"\n",(0,a.jsx)(t,{data:r.l,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(e.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"interface PaginationParams {\n  /** Page selected on initial render, defaults to 1 */\n  initialPage?: number;\n\n  /** Controlled active page number */\n  page?: number;\n\n  /** Total amount of pages */\n  total: number;\n\n  /** Siblings amount on left/right side of selected page, defaults to 1 */\n  siblings?: number;\n\n  /** Amount of elements visible on left/right edges, defaults to 1  */\n  boundaries?: number;\n\n  /** Callback fired after change of each page */\n  onChange?: (page: number) => void;\n}\n\nfunction usePagination(settings: PaginationParams): {\n  range: (number | 'dots')[];\n  active: number;\n  setPage: (pageNumber: number) => void;\n  next: () => void;\n  previous: () => void;\n  first: () => void;\n  last: () => void;\n};\n"})})]})}function m(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(u,{...n,children:(0,a.jsx)(c,{...n})})}},70506:(n,e,t)=>{"use strict";t.d(e,{l:()=>s});var a=t(31085),i=t(93065),o=t(48895);let s={type:"code",code:`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
`,component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.E,{mb:"xs",children:"1 boundary (default)"}),(0,a.jsx)(o.d,{total:20,boundaries:1,defaultValue:10}),(0,a.jsx)(i.E,{mt:"xl",mb:"xs",children:"2 boundaries"}),(0,a.jsx)(o.d,{total:20,boundaries:2,defaultValue:10}),(0,a.jsx)(i.E,{mt:"xl",mb:"xs",children:"3 boundaries"}),(0,a.jsx)(o.d,{total:20,boundaries:3,defaultValue:10})]})}}},7925:(n,e,t)=>{"use strict";t.d(e,{w:()=>s});var a=t(31085),i=t(93065),o=t(48895);let s={type:"code",code:`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
`,component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.E,{mb:"xs",children:"1 sibling (default)"}),(0,a.jsx)(o.d,{total:20,siblings:1,defaultValue:10}),(0,a.jsx)(i.E,{mb:"xs",mt:"xl",children:"2 siblings"}),(0,a.jsx)(o.d,{total:20,siblings:2,defaultValue:10}),(0,a.jsx)(i.E,{mb:"xs",mt:"xl",children:"3 siblings"}),(0,a.jsx)(o.d,{total:20,siblings:3,defaultValue:10})]})}}}},n=>{var e=e=>n(n.s=e);n.O(0,[67456,85954,48895,90636,46593,38792],()=>e(78927)),_N_E=n.O()}]);