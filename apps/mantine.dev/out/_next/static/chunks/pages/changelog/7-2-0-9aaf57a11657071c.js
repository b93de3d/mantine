(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8638],{46093:(e,n,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-2-0",function(){return o(7683)}])},7683:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>u});var t=o(31085),s=o(71184),r=o(79467),i=o(49750),a=o(15688),l=o(26260),c=o(48279),d=o(85954),h=o(38215);let m=(0,d.P)(h.XZ.Changelog720);function p(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"community-templates",children:"Community templates"}),"\n",(0,t.jsxs)(n.p,{children:["You are welcome to share your GitHub templates with the community. Community templates are\nfeatured on the ",(0,t.jsx)(n.a,{href:"/getting-started/",children:"getting started"})," page. You can find a guide on how to\ncreate and submit a template ",(0,t.jsx)(n.a,{href:"/submit-template/",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Examples of templates that you can submit:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Next.js pages router + MDX + Mantine blog template"}),"\n",(0,t.jsx)(n.li,{children:"Next.js app router + Mantine + styled-components template"}),"\n",(0,t.jsx)(n.li,{children:"Vite + Mantine + Emotion template"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"numberformatter-component",children:"NumberFormatter component"}),"\n",(0,t.jsxs)(n.p,{children:["New ",(0,t.jsx)(n.a,{href:"/core/number-formatter/",children:"NumberFormatter"})," component allows to format numbers\nwith thousands separators, decimal separators, and custom number of decimal places.\nIt supports the same formatting related props as ",(0,t.jsx)(n.a,{href:"/core/number-input/",children:"NumberInput"})," component."]}),"\n",(0,t.jsx)(o,{data:r.C}),"\n",(0,t.jsx)(n.h2,{id:"form-actions",children:"Form actions"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@mantine/form"})," package now exports ",(0,t.jsx)(n.code,{children:"createFormActions"})," function that\ncan be used to ",(0,t.jsx)(n.a,{href:"/form/actions/",children:"change form state"})," from anywhere in your application.\nThe mechanism of form actions is similar to ",(0,t.jsx)(n.a,{href:"/x/notifications/",children:"notifications system"}),",\n",(0,t.jsx)(n.a,{href:"/x/modals/",children:"modals manager"})," and other similar packages."]}),"\n",(0,t.jsxs)(n.p,{children:["To use form actions, set ",(0,t.jsx)(n.code,{children:"name"})," property in ",(0,t.jsx)(n.a,{href:"/form/use-form/",children:"use-form"})," settings:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nexport interface DemoFormValues {\n  name: string;\n  age: number;\n}\n\nfunction Demo() {\n  const form = useForm<DemoFormValues>({\n    name: 'demo-form',\n    initialValues: {\n      name: '',\n      age: 0,\n    },\n  });\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then call ",(0,t.jsx)(n.code,{children:"createFormActions"})," function with the same form name as specified in ",(0,t.jsx)(n.code,{children:"useForm"})," settings:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// Import type of form values from the file where you defined useForm\nimport { createFormActions } from '@mantine/form';\nimport type { DemoFormValues } from './DemoForm';\n\nexport const demoFormActions =\n  createFormActions<DemoFormValues>('demo-form');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After that, you can use ",(0,t.jsx)(n.code,{children:"demoFormActions"})," to change form state from anywhere in your application.\nFor example, after a fetch request or after a user interaction with a component that does not have access\nto the form state:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { Button } from '@mantine/core';\nimport { demoFormActions } from './demoFormActions';\n\nfunction ExternalComponent() {\n  useEffect(() => {\n    fetch('/api/user')\n      .then((res) => res.json())\n      .then((res) =>\n        demoFormActions.setValues({\n          name: res.name,\n          age: res.age,\n        })\n      );\n  }, []);\n\n  return (\n    <Button onClick={() => demoFormActions.reset()}>\n      Reset demo form\n    </Button>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"table-data-prop",children:"Table data prop"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/core/table/",children:"Table"})," component now supports ",(0,t.jsx)(n.code,{children:"data"})," prop which can be used to generate table rows\nfrom given data:"]}),"\n",(0,t.jsx)(o,{data:i.p}),"\n",(0,t.jsx)(n.h2,{id:"table-sticky-header",children:"Table sticky header"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/core/table/",children:"Table"})," component now supports ",(0,t.jsx)(n.code,{children:"stickyHeader"})," prop, which can be used to make the table header\nstick to the top of the table:"]}),"\n",(0,t.jsx)(o,{data:a.l}),"\n",(0,t.jsx)(n.h2,{id:"usage-with-sass",children:"Usage with Sass"}),"\n",(0,t.jsxs)(n.p,{children:["It is now possible to use Mantine with ",(0,t.jsx)(n.a,{href:"https://sass-lang.com/",children:"Sass"}),". You can find documentation\non ",(0,t.jsx)(n.a,{href:"/styles/sass/",children:"this page"}),". Note that it is still required to set up ",(0,t.jsx)(n.a,{href:"/styles/postcss-preset/",children:"postcss-preset-mantine"}),"\nin order for all functions to work properly. Sass can be used as a replacement for ",(0,t.jsx)(n.a,{href:"/styles/css-modules/",children:"CSS modules"}),"\n– it supports all features that CSS modules support."]}),"\n",(0,t.jsx)(n.p,{children:"You can find examples of Mantine + Sass usage in separate branches of templates:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/mantinedev/next-app-template/tree/sass",children:"Next.js app router + Sass example"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/mantinedev/vite-template/tree/sass",children:"Vite + Sass example"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"inline-loaders",children:"Inline loaders"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/core/loader/",children:"Loader"})," component now supports ",(0,t.jsx)(n.code,{children:"children"})," prop. The prop allows overriding the default\nloader with any React node. It is useful in components that support ",(0,t.jsx)(n.code,{children:"loaderProps"})," (",(0,t.jsx)(n.a,{href:"/core/button/",children:"Button"}),", ",(0,t.jsx)(n.a,{href:"/core/loading-overlay/",children:"LoadingOverlay"}),", ",(0,t.jsx)(n.a,{href:"/x/dropzone/",children:"Dropzone"}),", etc.)\n– with ",(0,t.jsx)(n.code,{children:"loaderProps.children"})," you can now display any React node instead of the loader."]}),"\n",(0,t.jsx)(o,{data:l.T}),"\n",(0,t.jsx)(n.h2,{id:"lighthidden-and-darkhidden-props",children:"lightHidden and darkHidden props"}),"\n",(0,t.jsxs)(n.p,{children:["All Mantine components now support ",(0,t.jsx)(n.code,{children:"lightHidden"})," and ",(0,t.jsx)(n.code,{children:"darkHidden"})," props that can be used to hide\ncomponents in a specific color scheme:"]}),"\n",(0,t.jsx)(o,{data:c.H}),"\n",(0,t.jsx)(n.h2,{id:"light-root-and-dark-root-mixins",children:"light-root and dark-root mixins"}),"\n",(0,t.jsxs)(n.p,{children:["New ",(0,t.jsx)(n.code,{children:"light-root"})," and ",(0,t.jsx)(n.code,{children:"dark-root"})," mixins were added to ",(0,t.jsx)(n.a,{href:"/styles/postcss-preset/",children:"postcss-preset-mantine"}),".\nThese mixins can be used to add color scheme specific styles to the ",(0,t.jsx)(n.code,{children:":root"}),"/",(0,t.jsx)(n.code,{children:"html"})," element.\nNote that to use these mixins, you need to update ",(0,t.jsx)(n.code,{children:"postcss-preset-mantine"})," to ",(0,t.jsx)(n.code,{children:"1.9.0"})," or higher."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scss",children:":root {\n  @mixin light-root {\n    --color: red;\n  }\n\n  @mixin dark-root {\n    --color: blue;\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["New ",(0,t.jsx)(n.a,{href:"/styles/styles-overview/",children:"Styles overview"})," guide"]}),"\n",(0,t.jsxs)(n.li,{children:["New ",(0,t.jsx)(n.a,{href:"/styles/sass/",children:"Usage with Sass"})," guide"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/guides/storybook/",children:"Storybook guide"})," was updated to use new ",(0,t.jsx)(n.a,{href:"https://storybook.js.org/addons/@storybook/addon-styling-webpack",children:"@storybook/addon-styling-webpack"})," with separate instructions for Vite and other frameworks"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/styles/css-modules/",children:"CSS modules"})," guide now includes new section about global class names reference with ",(0,t.jsx)(n.code,{children:":global"})," selector"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/getting-started/#set-up-vs-code",children:"Getting started"})," guide now includes new section about setting up VS Code with ",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=csstools.postcss",children:"PostCSS Language Support"})," and ",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables",children:"CSS Variable Autocomplete"})," extensions"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/popover/#nested-popovers",children:"Popover"})," documentation now includes a guide on how to use nested popovers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/aspect-ratio/",children:"AspectRatio"})," documentation now includes a guide on how to use it in flexbox containers"]}),"\n",(0,t.jsxs)(n.li,{children:["Additional ",(0,t.jsx)(n.a,{href:"/core/app-shell/",children:"AppShell.Section"})," documentation was added"]}),"\n",(0,t.jsxs)(n.li,{children:["8 new ",(0,t.jsx)(n.a,{href:"/core/checkbox/",children:"Checkbox"})," examples and demos were added"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/x/dropzone/",children:"Dropzone"})," now supports ",(0,t.jsx)(n.code,{children:"loaderProps"})," prop to pass props down to the ",(0,t.jsx)(n.a,{href:"/core/loader/",children:"Loader"})," component"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/theming/colors/#colors-variant-resolver",children:"theme.variantColorResolver"})," now supports ",(0,t.jsx)(n.code,{children:"hoverColor"})," prop, which allows controlling ",(0,t.jsx)(n.code,{children:"color"})," property when the component is hovered. New property is supported in ",(0,t.jsx)(n.a,{href:"/core/button/",children:"Button"})," and ",(0,t.jsx)(n.a,{href:"/core/action-icon/",children:"ActionIcon"})," components."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/flex/",children:"Flex"})," is now a ",(0,t.jsx)(n.a,{href:"/guides/polymorphic/",children:"polymorphic"})," component – it accepts ",(0,t.jsx)(n.code,{children:"renderRoot"})," and ",(0,t.jsx)(n.code,{children:"component"})," props"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/checkbox/",children:"Checkbox"})," root element now has ",(0,t.jsx)(n.code,{children:"data-checked"})," attribute when the checkbox is checked"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/core/checkbox/",children:"Checkbox"})," and ",(0,t.jsx)(n.a,{href:"/core/radio/",children:"Radio"})," components now support changing icon color with ",(0,t.jsx)(n.code,{children:"iconColor"})," prop"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/form/use-form/",children:"use-form"})," now supports ",(0,t.jsx)(n.code,{children:"onValuesChange"})," option which can be used to sync form values with external state"]}),"\n"]})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(m,{...e,children:(0,t.jsx)(p,{...e})})}},26260:(e,n,o)=>{"use strict";o.d(n,{T:()=>d});var t=o(31085),s=o(34056),r=o(35395),i=o(56051),a=o(52022),l=o(92051),c=o(86934);let d={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} loaderProps={{ children: 'Loading...' }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,component:function(){let[e,{toggle:n}]=(0,l.j)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.a,{pos:"relative",children:[(0,t.jsx)(r.p,{visible:e,loaderProps:{children:"Loading..."}}),(0,t.jsx)(c.d,{noSubmit:!0})]}),(0,t.jsx)(i.Y,{justify:"center",mt:"xl",children:(0,t.jsx)(a.$,{onClick:n,children:"Toggle overlay"})})]})}}},79467:(e,n,o)=>{"use strict";o.d(n,{C:()=>r});var t=o(31085),s=o(43523);let r={type:"code",component:function(){return(0,t.jsx)(s.K,{prefix:"$ ",value:1e6,thousandSeparator:!0})},code:`
import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
`,centered:!0}},49750:(e,n,o)=>{"use strict";o.d(n,{p:()=>i});var t=o(31085),s=o(75447);let r={caption:"Some elements from periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},i={type:"code",component:function(){return(0,t.jsx)(s.X,{data:r})},code:`
import { Table, TableData } from '@mantine/core';

const tableData: TableData = {
  caption: 'Some elements from periodic table',
  head: ['Element position', 'Atomic mass', 'Symbol', 'Element name'],
  body: [
    [6, 12.011, 'C', 'Carbon'],
    [7, 14.007, 'N', 'Nitrogen'],
    [39, 88.906, 'Y', 'Yttrium'],
    [56, 137.33, 'Ba', 'Barium'],
    [58, 140.12, 'Ce', 'Cerium'],
  ],
};

function Demo() {
  return <Table data={tableData} />;
}
`}},15688:(e,n,o)=>{"use strict";o.d(n,{l:()=>i});var t=o(31085),s=o(75447),r=o(15334);let i={type:"code",code:`
import { Table } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Caption>Scroll page to see sticky thead</Table.Caption>
    </Table>
  );
}
`,component:function(){let e=r.Y.map(e=>(0,t.jsxs)(s.X.Tr,{children:[(0,t.jsx)(s.X.Td,{children:e.position}),(0,t.jsx)(s.X.Td,{children:e.name}),(0,t.jsx)(s.X.Td,{children:e.symbol}),(0,t.jsx)(s.X.Td,{children:e.mass})]},e.name));return(0,t.jsxs)(s.X,{stickyHeader:!0,stickyHeaderOffset:60,children:[(0,t.jsx)(s.X.Thead,{children:(0,t.jsxs)(s.X.Tr,{children:[(0,t.jsx)(s.X.Th,{children:"Element position"}),(0,t.jsx)(s.X.Th,{children:"Element name"}),(0,t.jsx)(s.X.Th,{children:"Symbol"}),(0,t.jsx)(s.X.Th,{children:"Atomic mass"})]})}),(0,t.jsx)(s.X.Tbody,{children:e}),(0,t.jsx)(s.X.Caption,{children:"Scroll page to see sticky thead"})]})}}},15334:(e,n,o)=>{"use strict";o.d(n,{Y:()=>t});let t=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]},48279:(e,n,o)=>{"use strict";o.d(n,{H:()=>r});var t=o(31085),s=o(52022);let r={type:"code",centered:!0,component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.$,{color:"cyan",lightHidden:!0,children:"Visible in dark color scheme only"}),(0,t.jsx)(s.$,{color:"pink",darkHidden:!0,children:"Visible in light color scheme only"})]})},code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Button color="cyan" lightHidden>
        Visible in dark color scheme only
      </Button>

      <Button color="pink" darkHidden>
        Visible in light color scheme only
      </Button>
    </>
  );
}
`}},43523:(e,n,o)=>{"use strict";o.d(n,{K:()=>a});var t=o(31085),s=o(57715);o(14041);var r=o(29686);let i={};function a(e){let{value:n,defaultValue:o,...a}=(0,r.Y)("NumberFormatter",i,e);return void 0===n?null:(0,t.jsx)(s.HG,{displayType:"text",value:n,...a})}a.extend=e=>e,a.displayName="@mantine/core/NumberFormatter"}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,57715,85954,23719,23427,90636,46593,38792],()=>n(46093)),_N_E=e.O()}]);