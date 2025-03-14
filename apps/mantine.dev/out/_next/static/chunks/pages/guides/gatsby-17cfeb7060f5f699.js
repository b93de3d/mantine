(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12170],{18133:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/gatsby",function(){return t(15183)}])},15183:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var s=t(31085),r=t(71184),o=t(85954),i=t(38215);let a=(0,o.P)(i.XZ.Gatsby);function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{GetTemplates:t,InstallScript:o,NpmScript:i,PackagesInstallation:a}=n;return t||p("GetTemplates",!0),o||p("InstallScript",!0),i||p("NpmScript",!0),a||p("PackagesInstallation",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"usage-with-gatsby",children:"Usage with Gatsby"}),"\n",(0,s.jsx)(t,{type:"gatsby"}),"\n",(0,s.jsx)(n.h2,{id:"generate-new-application",children:"Generate new application"}),"\n",(0,s.jsxs)(n.p,{children:["Follow ",(0,s.jsx)(n.a,{href:"https://www.gatsbyjs.com/docs/quick-start/",children:"Gatsby quick start"})," guide to\ncreate new Gatsby application:"]}),"\n",(0,s.jsx)(i,{yarnScript:"yarn create gatsby",npmScript:"npm init gatsby"}),"\n",(0,s.jsxs)(n.p,{children:['When asked "Would you like to install a styling system?", select ',(0,s.jsx)(n.code,{children:"PostCSS"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(n.h2,{id:"postcss-setup",children:"PostCSS setup"}),"\n",(0,s.jsxs)(n.p,{children:["Install PostCSS plugins and ",(0,s.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),":"]}),"\n",(0,s.jsx)(o,{packages:"postcss postcss-preset-mantine postcss-simple-vars",dev:!0}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"postcss.config.cjs"})," file at the root of your application with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"src/theme.ts"})," file with your theme override:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// src/theme.ts\nimport { createTheme } from '@mantine/core';\n\nexport const theme = createTheme({\n  fontFamily: 'serif',\n  // ... other theme override properties\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"gatsby-ssr.tsx"})," with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { ColorSchemeScript, MantineProvider } from '@mantine/core';\nimport { theme } from './src/theme';\n\nexport const onPreRenderHTML = ({\n  getHeadComponents,\n  replaceHeadComponents,\n}) => {\n  const headComponents = getHeadComponents();\n  replaceHeadComponents([\n    ...headComponents,\n    <ColorSchemeScript key=\"color-scheme-script\" />,\n  ]);\n};\n\nexport const wrapPageElement = ({ element }) => {\n  return <MantineProvider theme={theme}>{element}</MantineProvider>;\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"gatsby-browser.tsx"})," with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Import styles of packages that you've installed.\n// All packages except `@mantine/hooks` require styles imports\nimport '@mantine/core/styles.css';\n\nimport { MantineProvider } from '@mantine/core';\nimport { theme } from './src/theme';\n\nexport const wrapPageElement = ({ element }) => {\n  return <MantineProvider theme={theme}>{element}</MantineProvider>;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"All set! Start development server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run develop\n"})}),"\n",(0,s.jsx)(n.h2,{id:"css-modules",children:"CSS modules"}),"\n",(0,s.jsx)(n.p,{children:"By default, Gatsby has different syntax for importing CSS modules:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Default syntax – will not work in Gatsby\nimport classes from './Demo.module.css';\n\n// Gatsby syntax\nimport * as classes from './Demo.module.css';\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})})}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,85954,90636,46593,38792],()=>n(18133)),_N_E=e.O()}]);