(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10538],{29621:(e,n,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/6x-to-7x",function(){return o(92255)}])},92255:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>d});var s=o(31085),r=o(71184),t=o(79145),l=o(85954),c=o(38215);let i=(0,l.P)(c.XZ.SixToSeven);function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"6x--7x-migration-guide",children:"6.x → 7.x migration guide"}),"\n",(0,s.jsxs)(n.p,{children:["This guide is intended to help you migrate your project styles from 6.x to 7.x.\nIt is not intended to be a comprehensive guide to all the changes in 7.x.\nFor that, please see the ",(0,s.jsx)(n.a,{href:"/changelog/7-0-0",children:"7.0.0 changelog"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"migration-to-mantineemotion",children:"Migration to @mantine/emotion"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@mantine/emotion"})," package is available starting from version 7.9. If you do not want\nto use CSS modules, have a lot of styles created with ",(0,s.jsx)(n.code,{children:"createStyles"}),", ",(0,s.jsx)(n.code,{children:"sx"})," and ",(0,s.jsx)(n.code,{children:"styles"}),"\nprops, or just prefer CSS-in-JS syntax, you can migrate to ",(0,s.jsx)(n.code,{children:"@mantine/emotion"}),". To view\nthe full documentation for ",(0,s.jsx)(n.code,{children:"@mantine/emotion"})," package, visit ",(0,s.jsx)(n.a,{href:"/styles/emotion",children:"this page"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"createstyles-and-global-component",children:"createStyles and Global component"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"createStyles"})," function and ",(0,s.jsx)(n.code,{children:"Global"})," component are no longer available in ",(0,s.jsx)(n.code,{children:"@mantine/core"})," package. Change imports\nto ",(0,s.jsx)(n.code,{children:"@mantine/emotion"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 6.x\nimport { createStyles, Global } from '@mantine/core';\n\n// 7.x\nimport { createStyles, Global } from '@mantine/emotion';\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sx-and-styles-props",children:"sx and styles props"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sx"})," and styles props available in 7.x the same way as in 6.x after ",(0,s.jsx)(n.a,{href:"/styles/emotion",children:"setup"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 6.x and 7.x, no changes\nimport { Box, Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <Box\n        sx={(theme) => ({ backgroundColor: theme.colors.red[5] })}\n      />\n      <Button styles={{ root: { height: 50 } }} />\n    </>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"themecolorscheme",children:"theme.colorScheme"}),"\n",(0,s.jsxs)(n.p,{children:["In v7 color scheme value is managed by ",(0,s.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),",\n",(0,s.jsx)(n.a,{href:"/theming/theme-object",children:"theme object"})," no longer includes ",(0,s.jsx)(n.code,{children:"colorScheme"})," property.\nAlthough it is still possible to access color scheme value in components with\n",(0,s.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme"})," hook,\nit is not recommended to base your styles on its value. Instead, use ",(0,s.jsx)(n.code,{children:"light"}),"/",(0,s.jsx)(n.code,{children:"dark"}),"\n",(0,s.jsx)(n.a,{href:"/styles/emotion#utilities",children:"utilities"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Example of 6.x ",(0,s.jsx)(n.code,{children:"createStyles"})," with ",(0,s.jsx)(n.code,{children:"theme.colorScheme"})," migration to 7.0:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 6.x\nimport { createStyles } from '@mantine/core';\n\nconst useStyles = createStyles((theme) => ({\n  root: {\n    backgroundColor:\n      theme.colorScheme === 'dark'\n        ? theme.colors.dark[6]\n        : theme.colors.gray[0],\n    color: theme.colorScheme === 'dark' ? theme.white : theme.black,\n  },\n}));\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 7.x\nimport { createStyles } from '@mantine/emotion';\n\nconst useStyles = createStyles((theme, _, u) => ({\n  root: {\n    [u.dark] {\n      backgroundColor: theme.colors.dark[6];\n      color: theme.white;\n    },\n\n    [u.light]: {\n      backgroundColor: theme.colors.gray[0];\n      color: theme.black;\n    },\n  },\n}));\n"})}),"\n",(0,s.jsx)(n.h2,{id:"migration-to-css-modules",children:"Migration to CSS modules"}),"\n",(0,s.jsxs)(n.p,{children:["Before getting started, it is recommended to go through ",(0,s.jsx)(n.a,{href:"/styles/css-modules",children:"styles"})," documentation.\nMost notable parts:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/styles/css-modules",children:"CSS Modules"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/styles/postcss-preset",children:"Mantine PostCSS preset"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/styles/css-variables",children:"CSS variables"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/styles/data-attributes",children:"data-* attributes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/styles/responsive",children:"Responsive styles"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Note that this guide assumes that you have ",(0,s.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," installed and configured\nin your project."]}),"\n",(0,s.jsx)(n.h3,{id:"createstyles",children:"createStyles"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"createStyles"})," function is no longer available in 7.0. Use ",(0,s.jsx)(n.a,{href:"/styles/css-modules",children:"CSS Modules"})," instead."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 6.x\nimport { createStyles } from '@mantine/core';\n\nconst useStyles = createStyles((theme) => ({\n  root: {\n    backgroundColor: theme.colors.red[5],\n  },\n}));\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scss",children:"/* 7.0 */\n.root {\n  background-color: var(--mantine-color-red-5);\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sx-prop",children:"sx prop"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"sx"})," and prop is no longer available in 7.0. Use ",(0,s.jsx)(n.code,{children:"className"})," or ",(0,s.jsx)(n.a,{href:"/styles/style",children:"style prop"})," instead."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 6.x\nimport { Box } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Box sx={(theme) => ({ backgroundColor: theme.colors.red[5] })} />\n  );\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 7.0\nimport { Box } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Box style={{ backgroundColor: 'var(--mantine-color-red-5)' }} />\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Nested selectors are not supported in ",(0,s.jsx)(n.a,{href:"/styles/style",children:"style prop"}),", use ",(0,s.jsx)(n.code,{children:"className"})," instead:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 6.x\nimport { Box } from '@mantine/core';\n\nfunction Demo() {\n  return <Box sx={{ '&:hover': { background: 'red' } }} />;\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scss",children:".box {\n  &:hover {\n    background: red;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"styles-prop",children:"styles prop"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"styles"})," prop no longer supports nested selectors. Use\n",(0,s.jsx)(n.code,{children:"classNames"})," instead to apply styles to nested elements."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 6.x – nested selectors\nimport { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TextInput\n      styles={{\n        input: {\n          '&:focus': {\n            color: 'red',\n          },\n        },\n      }}\n    />\n  );\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scss",children:"/* 7.0 */\n.input {\n  &:focus {\n    color: red;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Regular selectors are still supported:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Works both in 6.x and 7.x\nimport { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TextInput\n      styles={{\n        input: {\n          color: 'red',\n        },\n      }}\n    />\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"global-styles",children:"Global styles"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Global"})," component and global styles on theme are not available in 7.0. Instead,\ncreate a global stylesheet (",(0,s.jsx)(n.code,{children:".css"})," file) and import it in your application entry point."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 6.x\nimport { Global } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Global\n      styles={(theme) => ({\n        '*, *::before, *::after': {\n          boxSizing: 'border-box',\n        },\n\n        body: {\n          backgroundColor:\n            theme.colorScheme === 'dark'\n              ? theme.colors.dark[7]\n              : theme.white,\n          color:\n            theme.colorScheme === 'dark'\n              ? theme.colors.dark[0]\n              : theme.black,\n          lineHeight: theme.lineHeight,\n        },\n\n        '.your-class': {\n          backgroundColor: 'red',\n        },\n\n        '#your-id > [data-active]': {\n          backgroundColor: 'pink',\n        },\n      })}\n    />\n  );\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scss",children:"/* 7.0 */\n/* src/index.css */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: light-dark(\n    var(--mantine-color-white),\n    var(--mantine-color-dark-7)\n  );\n  color: light-dark(\n    var(--mantine-color-black),\n    var(--mantine-color-white)\n  );\n  line-height: var(--mantine-line-height);\n}\n\n.your-class {\n  background-color: red;\n}\n\n#your-id > [data-active] {\n  background-color: pink;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"theme-referencing",children:"theme referencing"}),"\n",(0,s.jsxs)(n.p,{children:["All ",(0,s.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," properties are now available as ",(0,s.jsx)(n.a,{href:"/styles/css-variables",children:"CSS variables"}),". It is recommended to use\n",(0,s.jsx)(n.a,{href:"/styles/css-variables",children:"CSS variables"})," instead of referencing theme object in styles."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 6.x\nimport { Box } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Box\n      sx={(theme) => ({\n        backgroundColor: theme.colors.red[6],\n        color: theme.white,\n        padding: `calc(${theme.spacing.xl} * 2)`,\n      })}\n    />\n  );\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scss",children:"/* 7.0 */\n.box {\n  background-color: var(--mantine-color-red-6);\n  color: var(--mantine-color-white);\n  padding: calc(var(--mantine-spacing-xl) * 2);\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"themecolorscheme-1",children:"theme.colorScheme"}),"\n",(0,s.jsxs)(n.p,{children:["Color scheme value is managed by ",(0,s.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),",\n",(0,s.jsx)(n.a,{href:"/theming/theme-object",children:"theme object"})," no longer includes ",(0,s.jsx)(n.code,{children:"colorScheme"})," property.\nAlthough it is still possible to access color scheme value in components with\n",(0,s.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme"})," hook,\nit is not recommended to base your styles on its value. Instead, use ",(0,s.jsx)(n.code,{children:"light"}),"/",(0,s.jsx)(n.code,{children:"dark"}),"\n",(0,s.jsx)(n.a,{href:"/styles/postcss-preset",children:"mixins"})," or ",(0,s.jsx)(n.code,{children:"light-dark"})," CSS ",(0,s.jsx)(n.a,{href:"/styles/postcss-preset#light-dark-function",children:"function"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Example of 6.x ",(0,s.jsx)(n.code,{children:"createStyles"})," with ",(0,s.jsx)(n.code,{children:"theme.colorScheme"})," migration to 7.0:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// 6.x\nimport { createStyles } from '@mantine/core';\n\nconst useStyles = createStyles((theme) => ({\n  root: {\n    backgroundColor:\n      theme.colorScheme === 'dark'\n        ? theme.colors.dark[6]\n        : theme.colors.gray[0],\n    color: theme.colorScheme === 'dark' ? theme.white : theme.black,\n  },\n}));\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scss",children:"/* 7.0 */\n\n/* With light-dark function */\n.root {\n  background-color: light-dark(\n    var(--mantine-color-gray-0),\n    var(--mantine-color-dark-6)\n  );\n  color: light-dark(\n    var(--mantine-color-black),\n    var(--mantine-color-white)\n  );\n}\n\n/* With light/dark mixins */\n.root {\n  background-color: var(--mantine-color-gray-0);\n  color: var(--mantine-color-black);\n\n  @mixin dark {\n    background-color: var(--mantine-color-dark-6);\n    color: var(--mantine-color-white);\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that if your application has server-side rendering, you should not render any\nelements based on its value (",(0,s.jsx)(n.a,{href:"/theming/color-schemes#color-scheme-value-caveats",children:"more info"}),").\nInstead, use ",(0,s.jsx)(n.code,{children:"light"}),"/",(0,s.jsx)(n.code,{children:"dark"})," mixins or ",(0,s.jsx)(n.code,{children:"light-dark"})," function to hide/display elements based\non color scheme value."]}),"\n",(0,s.jsx)(n.p,{children:"Color scheme toggle example:"}),"\n",(0,s.jsx)(o,{data:t.y})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})})}},79145:(e,n,o)=>{"use strict";o.d(n,{y:()=>h});var s=o(31085),r=o(84032),t=o(18905),l=o(54357),c=o(87004),i=o(92577),a=o(22962),d={icon:"m_42f1bae",dark:"m_42cceab",light:"m_81e13c81"};let h={type:"code",component:function(){let{setColorScheme:e}=(0,c.C)(),n=(0,i.l)("light",{getInitialValueInEffect:!0});return(0,s.jsxs)(a.M,{onClick:()=>e("light"===n?"dark":"light"),variant:"default",size:"xl","aria-label":"Toggle color scheme",children:[(0,s.jsx)(r.A,{className:(0,l.A)(d.icon,d.light),stroke:1.5}),(0,s.jsx)(t.A,{className:(0,l.A)(d.icon,d.dark),stroke:1.5})]})},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './Demo.module.css';

function Demo() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`
.icon {
  width: 22px;
  height: 22px;
}

.dark {
  @mixin dark {
    display: none;
  }

  @mixin light {
    display: block;
  }
}

.light {
  @mixin light {
    display: none;
  }

  @mixin dark {
    display: block;
  }
}
`}]}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,85954,90636,46593,38792],()=>n(29621)),_N_E=e.O()}]);