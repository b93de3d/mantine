(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96488],{95881:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/theming/theme-object",function(){return t(44085)}])},44085:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>S});var o=t(31085),r=t(71184),s=t(70685),i=t(94325),a=t(93065),l=t(37905),c=t(56051),d=t(52022),h=t(92408);let u={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.E,{children:["Focus ring: ",(0,o.jsx)(l.C,{children:"auto"})]}),(0,o.jsxs)(c.Y,{mt:"xs",children:[(0,o.jsx)(d.$,{size:"xs",children:"Button 1"}),(0,o.jsx)(d.$,{size:"xs",children:"Button 2"})]}),(0,o.jsxs)(h.nW,{inherit:!0,theme:{focusRing:"always"},children:[(0,o.jsxs)(a.E,{mt:"lg",children:["Focus ring: ",(0,o.jsx)(l.C,{children:"always"})]}),(0,o.jsxs)(c.Y,{mt:"xs",children:[(0,o.jsx)(d.$,{size:"xs",children:"Button 1"}),(0,o.jsx)(d.$,{size:"xs",children:"Button 2"})]})]}),(0,o.jsxs)(h.nW,{inherit:!0,theme:{focusRing:"never"},children:[(0,o.jsxs)(a.E,{mt:"lg",children:["Focus ring: ",(0,o.jsx)(l.C,{children:"never"})]}),(0,o.jsxs)(c.Y,{mt:"xs",children:[(0,o.jsx)(d.$,{size:"xs",children:"Button 1"}),(0,o.jsx)(d.$,{size:"xs",children:"Button 2"})]})]})]})}};var m={focus:"m_f1cdba19"};let f={type:"code",component:function(){return(0,o.jsx)(h.nW,{inherit:!0,theme:{focusClassName:m.focus},children:(0,o.jsx)(d.$,{children:"Click button to see custom focus ring"})})},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { MantineProvider, Button } from '@mantine/core';
import classes from './focus.module.css';

function Demo() {
  return (
    <MantineProvider theme={{ focusClassName: classes.focus }}>
      <Button>Click button to see custom focus ring</Button>
    </MantineProvider>
  );
}
`},{fileName:"focus.module.css",language:"scss",code:`
/* Use \`&:focus\` when you want focus ring to be visible when control is clicked */
.focus {
  &:focus {
    outline: 2px solid var(--mantine-color-red-filled);
    outline-offset: 3px;
  }
}

/* Use \`&:focus-visible\` when you want focus ring to be visible
   only when user navigates with keyboard, for example by pressing Tab key */
.focus-auto {
  &:focus-visible {
    outline: 2px solid var(--mantine-color-red-filled);
    outline-offset: 2px;
  }
}
`}]};var p={active:"m_32801db9"};let x={type:"code",component:function(){return(0,o.jsx)(h.nW,{theme:{activeClassName:p.active},children:(0,o.jsx)(d.$,{children:"Press me to see active styles"})})},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { MantineProvider, Button } from '@mantine/core';
import classes from './active.module.css';

function Demo() {
  return (
    <MantineProvider theme={{ activeClassName: classes.active }}>
      <Button>Press me to see active styles</Button>
    </MantineProvider>
  );
}
`},{fileName:"active.module.css",language:"scss",code:`
.active {
  transition: transform 50ms ease-in-out;

  &:active {
    transform: scale(0.97);
  }
}
`}]},j={type:"code",component:function(){return(0,o.jsx)(h.nW,{theme:{activeClassName:""},children:(0,o.jsx)(d.$,{children:"No active styles"})})},centered:!0,code:`
import { MantineProvider, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ activeClassName: '' }}>
      <Button>No active styles</Button>
    </MantineProvider>
  );
}
`};var v=t(90275);let g={type:"configurator",component:function(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.$,{radius:e.defaultRadius,fullWidth:!0,children:"Button with defaultRadius"}),(0,o.jsx)(v.k,{mt:"sm",radius:e.defaultRadius,label:"TextInput with defaultRadius",placeholder:"TextInput with default radius"})]})},code:e=>`
import { MantineProvider, TextInput, Button } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{ defaultRadius: '${e.defaultRadius}' }}>
      <Button fullWidth>Button with defaultRadius</Button>
      <TextInput mt="sm" label="TextInput with defaultRadius" placeholder="TextInput with default radius" />
    </MantineProvider>
  );
}
`,controls:[{type:"size",prop:"defaultRadius",initialValue:"sm",libraryValue:"__none__"}]};var b=t(70504),y=t(12616);let w=`
import { MantineProvider, createTheme, Button } from '@mantine/core';

const theme = createTheme({
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Button variant="gradient">Button with custom default gradient</Button>
    </MantineProvider>
  );
}
`,T=(0,y.a)({defaultGradient:{from:"orange",to:"red",deg:45}}),C={type:"code",component:function(){return(0,o.jsx)(h.nW,{theme:T,children:(0,o.jsx)(d.$,{variant:"gradient",children:"Button with custom default gradient"})})},centered:!0,code:w};var M=t(85954),B=t(38215);let k=(0,M.P)(B.XZ.ThemeObject);function P(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"theme-object",children:"Theme object"}),"\n",(0,o.jsx)(n.p,{children:"Mantine theme is an object where your application's colors, fonts, spacing, border-radius and other design tokens are stored."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"interface MantineTheme {\n  /** Controls focus ring styles. Supports the following options:\n   *  - `auto` – focus ring is displayed only when the user navigates with keyboard (default value)\n   *  - `always` – focus ring is displayed when the user navigates with keyboard and mouse\n   *  - `never` – focus ring is always hidden (not recommended)\n   */\n  focusRing: 'auto' | 'always' | 'never';\n\n  /** rem units scale, change if you customize font-size of `<html />` element\n   *  default value is `1` (for `100%`/`16px` font-size on `<html />`)\n   */\n  scale: number;\n\n  /** Determines whether `font-smoothing` property should be set on the body, `true` by default */\n  fontSmoothing: boolean;\n\n  /** White color */\n  white: string;\n\n  /** Black color */\n  black: string;\n\n  /** Object of colors, key is color name, value is an array of at least 10 strings (colors) */\n  colors: MantineThemeColors;\n\n  /** Index of theme.colors[color].\n   *  Primary shade is used in all components to determine which color from theme.colors[color] should be used.\n   *  Can be either a number (0–9) or an object to specify different color shades for light and dark color schemes.\n   *  Default value `{ light: 6, dark: 8 }`\n   *\n   *  For example,\n   *  { primaryShade: 6 } // shade 6 is used both for dark and light color schemes\n   *  { primaryShade: { light: 6, dark: 7 } } // different shades for dark and light color schemes\n   * */\n  primaryShade: MantineColorShade | MantinePrimaryShade;\n\n  /** Key of `theme.colors`, hex/rgb/hsl values are not supported.\n   *  Determines which color will be used in all components by default.\n   *  Default value – `blue`.\n   * */\n  primaryColor: string;\n\n  /** Function to resolve colors based on variant.\n   *  Can be used to deeply customize how colors are applied to `Button`, `ActionIcon`, `ThemeIcon`\n   *  and other components that use colors from theme.\n   * */\n  variantColorResolver: VariantColorsResolver;\n\n  /** Determines whether text color must be changed based on the given `color` prop in filled variant\n   *  For example, if you pass `color=\"blue.1\"` to Button component, text color will be changed to `var(--mantine-color-black)`\n   *  Default value – `false`\n   * */\n  autoContrast: boolean;\n\n  /** Determines which luminance value is used to determine if text color should be light or dark.\n   *  Used only if `theme.autoContrast` is set to `true`.\n   *  Default value is `0.3`\n   * */\n  luminanceThreshold: number;\n\n  /** font-family used in all components, system fonts by default */\n  fontFamily: string;\n\n  /** Monospace font-family, used in code and other similar components, system fonts by default  */\n  fontFamilyMonospace: string;\n\n  /** Controls various styles of h1-h6 elements, used in TypographyStylesProvider and Title components */\n  headings: {\n    fontFamily: string;\n    fontWeight: string;\n    textWrap: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable';\n    sizes: {\n      h1: HeadingStyle;\n      h2: HeadingStyle;\n      h3: HeadingStyle;\n      h4: HeadingStyle;\n      h5: HeadingStyle;\n      h6: HeadingStyle;\n    };\n  };\n\n  /** Object of values that are used to set `border-radius` in all components that support it */\n  radius: MantineRadiusValues;\n\n  /** Key of `theme.radius` or any valid CSS value. Default `border-radius` used by most components */\n  defaultRadius: MantineRadius;\n\n  /** Object of values that are used to set various CSS properties that control spacing between elements */\n  spacing: MantineSpacingValues;\n\n  /** Object of values that are used to control `font-size` property in all components */\n  fontSizes: MantineFontSizesValues;\n\n  /** Object of values that are used to control `line-height` property in `Text` component */\n  lineHeights: MantineLineHeightValues;\n\n  /** Object of values that are used to control breakpoints in all components,\n   *  values are expected to be defined in em\n   * */\n  breakpoints: MantineBreakpointsValues;\n\n  /** Object of values that are used to add `box-shadow` styles to components that support `shadow` prop */\n  shadows: MantineShadowsValues;\n\n  /** Determines whether user OS settings to reduce motion should be respected, `false` by default */\n  respectReducedMotion: boolean;\n\n  /** Determines which cursor type will be used for interactive elements\n   * - `default` – cursor that is used by native HTML elements, for example, `input[type=\"checkbox\"]` has `cursor: default` styles\n   * - `pointer` – sets `cursor: pointer` on interactive elements that do not have these styles by default\n   */\n  cursorType: 'default' | 'pointer';\n\n  /** Default gradient configuration for components that support `variant=\"gradient\"` */\n  defaultGradient: MantineGradient;\n\n  /** Class added to the elements that have active styles, for example, `Button` and `ActionIcon` */\n  activeClassName: string;\n\n  /** Class added to the elements that have focus styles, for example, `Button` or `ActionIcon`.\n   *  Overrides `theme.focusRing` property.\n   */\n  focusClassName: string;\n\n  /** Allows adding `classNames`, `styles` and `defaultProps` to any component */\n  components: MantineThemeComponents;\n\n  /** Any other properties that you want to access with the theme objects */\n  other: MantineThemeOther;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["To customize theme, pass theme override object to ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})," ",(0,o.jsx)(n.code,{children:"theme"})," prop.\nTheme override will be deeply merged with the default theme."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, rem } from '@mantine/core';\n\nconst theme = createTheme({\n  colors: {\n    // Add your color\n    deepBlue: [\n      '#eef3ff',\n      '#dce4f5',\n      '#b9c7e2',\n      '#94a8d0',\n      '#748dc1',\n      '#5f7cb8',\n      '#5474b4',\n      '#44639f',\n      '#39588f',\n      '#2d4b81',\n    ],\n    // or replace default theme color\n    blue: [\n      '#eef3ff',\n      '#dee2f2',\n      '#bdc2de',\n      '#98a0ca',\n      '#7a84ba',\n      '#6672b0',\n      '#5c68ac',\n      '#4c5897',\n      '#424e88',\n      '#364379',\n    ],\n  },\n\n  shadows: {\n    md: '1px 1px 3px rgba(0, 0, 0, .25)',\n    xl: '5px 5px 3px rgba(0, 0, 0, .25)',\n  },\n\n  headings: {\n    fontFamily: 'Roboto, sans-serif',\n    sizes: {\n      h1: { fontSize: rem(36) },\n    },\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"theme-properties",children:"Theme properties"}),"\n",(0,o.jsx)(n.h3,{id:"autocontrast",children:"autoContrast"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"autoContrast"})," controls whether text color should be changed based on the given ",(0,o.jsx)(n.code,{children:"color"})," prop\nin the following components:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"})," with ",(0,o.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/alert",children:"Alert"})," with ",(0,o.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/avatar",children:"Avatar"})," with ",(0,o.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/badge",children:"Badge"})," with ",(0,o.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," with ",(0,o.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/chip",children:"Chip"})," with ",(0,o.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/nav-link",children:"NavLink"})," with ",(0,o.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/theme-icon",children:"ThemeIcon"})," with ",(0,o.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/checkbox",children:"Checkbox"})," with ",(0,o.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/radio",children:"Radio"})," with ",(0,o.jsx)(n.code,{children:'variant="filled"'})," only"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/core/tabs",children:"Tabs"})," with ",(0,o.jsx)(n.code,{children:'variant="pills"'})," only"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/core/segmented-control",children:"SegmentedControl"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/core/stepper",children:"Stepper"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/core/pagination",children:"Pagination"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/core/progress",children:"Progress"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/core/indicator",children:"Indicator"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/core/timeline",children:"Timeline"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/x/spotlight",children:"Spotlight"})}),"\n",(0,o.jsxs)(n.li,{children:["All ",(0,o.jsx)(n.a,{href:"/dates/getting-started",children:"@mantine/dates"})," components that are based on ",(0,o.jsx)(n.a,{href:"/dates/calendar",children:"Calendar"})," component"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"autoContrast"})," checks whether the given color luminosity is above or below the ",(0,o.jsx)(n.code,{children:"luminanceThreshold"})," value\nand changes text color to either ",(0,o.jsx)(n.code,{children:"theme.white"})," or ",(0,o.jsx)(n.code,{children:"theme.black"})," accordingly."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"autoContrast"})," can be set globally on the theme level or individually for each component via ",(0,o.jsx)(n.code,{children:"autoContrast"})," prop,\nexcept for ",(0,o.jsx)(n.a,{href:"/x/spotlight",children:"Spotlight"})," and ",(0,o.jsx)(n.a,{href:"/dates/getting-started",children:"@mantine/dates"})," components which only support global theme setting."]}),"\n",(0,o.jsx)(t,{data:s.s}),"\n",(0,o.jsx)(n.h3,{id:"luminancethreshold",children:"luminanceThreshold"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"luminanceThreshold"})," controls which luminance value is used to determine if text color should be light or dark.\nIt is used only if ",(0,o.jsx)(n.code,{children:"theme.autoContrast"})," is set to ",(0,o.jsx)(n.code,{children:"true"}),". Default value is ",(0,o.jsx)(n.code,{children:"0.3"}),"."]}),"\n",(0,o.jsx)(t,{data:i.w}),"\n",(0,o.jsx)(n.h3,{id:"focusring",children:"focusRing"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.focusRing"})," controls focus ring styles, it supports the following values:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"auto"})," (default and recommended) – focus ring is visible only when the user navigates with keyboard, this is the default browser behavior for native interactive elements"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"always"})," – focus ring is visible when user navigates with keyboard and mouse, for example, the focus ring will be visible when user clicks on a button"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"never"})," – focus ring is always hidden, it is not recommended – users who navigate with keyboard will not have visual indication of the current focused element"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(n.h3,{id:"focusclassname",children:"focusClassName"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.focusClassName"})," is a CSS class that is added to elements that have focus styles, for example, ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," or ",(0,o.jsx)(n.a,{href:"/core/action-icon/",children:"ActionIcon"}),".\nIt can be used to customize focus ring styles of all interactive components except inputs. Note that when ",(0,o.jsx)(n.code,{children:"theme.focusClassName"})," is set, ",(0,o.jsx)(n.code,{children:"theme.focusRing"})," is ignored."]}),"\n",(0,o.jsx)(t,{data:f}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:":focus-visible selector"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:":focus-visible"})," selector is supported by more than ",(0,o.jsx)(n.a,{href:"https://caniuse.com/css-focus-visible",children:"91% of browsers"})," (data from April 2023).\nSafari browsers added support for it in version 15.4 (released in March 2022). If you need to support Safari 15.3 and older, you can use ",(0,o.jsx)(n.a,{href:"https://github.com/WICG/focus-visible",children:"focus-visible polyfill"}),"\nor provide a ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible#providing_a_focus_fallback",children:"fallback"})," with ",(0,o.jsx)(n.code,{children:":focus"})," pseudo-class."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"activeclassname",children:"activeClassName"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.activeClassName"})," is a CSS class that is added to elements that have active styles, for example, ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," or ",(0,o.jsx)(n.a,{href:"/core/action-icon/",children:"ActionIcon"}),".\nIt can be used to customize active styles of all interactive components."]}),"\n",(0,o.jsx)(t,{data:x}),"\n",(0,o.jsxs)(n.p,{children:["To disable active styles for all components, set ",(0,o.jsx)(n.code,{children:"theme.activeClassName"})," to an empty string:"]}),"\n",(0,o.jsx)(t,{data:j}),"\n",(0,o.jsx)(n.h3,{id:"defaultradius",children:"defaultRadius"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.defaultRadius"})," controls the default ",(0,o.jsx)(n.code,{children:"border-radius"})," property in most components, for example, ",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"})," or ",(0,o.jsx)(n.a,{href:"/core/text-input",children:"TextInput"}),".\nYou can set to either one of the values from ",(0,o.jsx)(n.code,{children:"theme.radius"})," or a number/string to use exact value. Note that numbers are treated as pixels, but\nconverted to rem. For example, ",(0,o.jsx)(n.code,{children:"theme.defaultRadius: 4"})," will be converted to ",(0,o.jsx)(n.code,{children:"0.25rem"}),".\nYou can learn more about rem conversion in the ",(0,o.jsx)(n.a,{href:"/styles/rem",children:"rem units guide"}),"."]}),"\n",(0,o.jsx)(t,{data:g}),"\n",(0,o.jsx)(n.h3,{id:"cursortype",children:"cursorType"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.cursorType"})," controls the default cursor type for interactive elements,\nthat do not have ",(0,o.jsx)(n.code,{children:"cursor: pointer"})," styles by default. For example, ",(0,o.jsx)(n.a,{href:"/core/checkbox",children:"Checkbox"})," and ",(0,o.jsx)(n.a,{href:"/core/native-select",children:"NativeSelect"}),"."]}),"\n",(0,o.jsx)(t,{data:b.l}),"\n",(0,o.jsx)(n.h3,{id:"defaultgradient",children:"defaultGradient"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.defaultGradient"})," controls the default gradient configuration for components that support ",(0,o.jsx)(n.code,{children:'variant="gradient"'}),"\n(",(0,o.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,o.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,o.jsx)(n.a,{href:"/core/badge",children:"Badge"}),", etc.)."]}),"\n",(0,o.jsx)(t,{data:C}),"\n",(0,o.jsx)(n.h3,{id:"components",children:"components"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.components"})," allows to override components ",(0,o.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," and styles with ",(0,o.jsx)(n.code,{children:"classNames"})," and ",(0,o.jsx)(n.code,{children:"styles"})," properties.\nYou can learn more about these features in ",(0,o.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," and ",(0,o.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," guides."]}),"\n",(0,o.jsx)(n.h3,{id:"other",children:"other"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"theme.other"})," is an object that can be used to store any other properties that you want to access with the theme objects."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  other: {\n    charcoal: '#333333',\n    primaryHeadingSize: 45,\n    fontWeights: {\n      bold: 700,\n      extraBold: 900,\n    },\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"store-theme-override-object-in-a-variable",children:"Store theme override object in a variable"}),"\n",(0,o.jsxs)(n.p,{children:["To store theme override object in a variable, use ",(0,o.jsx)(n.code,{children:"createTheme"})," function:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst myTheme = createTheme({\n  primaryColor: 'orange',\n  defaultRadius: 0,\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={myTheme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"merge-multiple-theme-overrides",children:"Merge multiple theme overrides"}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"mergeThemeOverrides"})," function to merge multiple themes into one theme override object:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import {\n  createTheme,\n  MantineProvider,\n  mergeThemeOverrides,\n} from '@mantine/core';\n\nconst theme1 = createTheme({\n  primaryColor: 'orange',\n  defaultRadius: 0,\n});\n\nconst theme2 = createTheme({\n  cursorType: 'pointer',\n});\n\n// Note: It is better to to store theme override outside of component body\n// to prevent unnecessary re-renders\nconst myTheme = mergeThemeOverrides(theme1, theme2);\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={myTheme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"use-mantine-theme-hook",children:"use-mantine-theme hook"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"useMantineTheme"})," hook returns theme object from ",(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," context:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useMantineTheme } from '@mantine/core';\n\nfunction Demo() {\n  const theme = useMantineTheme();\n  return <div style={{ background: theme.colors.blue[5] }} />;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"default-theme",children:"Default theme"}),"\n",(0,o.jsxs)(n.p,{children:["You can import default theme object from ",(0,o.jsx)(n.code,{children:"@mantine/core"})," package. It includes\nall theme properties with default values. When you pass theme override to\n",(0,o.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),", it will be deeply merged with\nthe default theme. You can find contents of ",(0,o.jsx)(n.code,{children:"DEFAULT_THEME"})," object\non ",(0,o.jsx)(n.a,{href:"/theming/default-theme",children:"this page"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { DEFAULT_THEME } from '@mantine/core';\n"})}),"\n",(0,o.jsx)(n.h2,{id:"access-theme-outside-of-components",children:"Access theme outside of components"}),"\n",(0,o.jsx)(n.p,{children:"To access theme outside of components, you need to create a full theme object\n(your theme override merged with the default theme)."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// theme.ts\nimport {\n  createTheme,\n  DEFAULT_THEME,\n  mergeMantineTheme,\n} from '@mantine/core';\n\nconst themeOverride = createTheme({\n  primaryColor: 'orange',\n  defaultRadius: 0,\n});\n\nexport const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then you will be able to import it anywhere in your application:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { theme } from './theme';\n"})})]})}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(k,{...e,children:(0,o.jsx)(P,{...e})})}},70685:(e,n,t)=>{"use strict";t.d(n,{s:()=>a});var o=t(31085),r=t(37905),s=t(56051),i=t(52022);let a={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.C,{children:"autoContrast: true"}),(0,o.jsxs)(s.Y,{mt:"xs",mb:"lg",children:[(0,o.jsx)(i.$,{color:"lime.4",autoContrast:!0,children:"Lime.4 button"}),(0,o.jsx)(i.$,{color:"blue.2",autoContrast:!0,children:"Blue.2 button"}),(0,o.jsx)(i.$,{color:"orange.3",autoContrast:!0,children:"Orange.3 button"})]}),(0,o.jsx)(r.C,{children:"autoContrast: false"}),(0,o.jsxs)(s.Y,{mt:"xs",children:[(0,o.jsx)(i.$,{color:"lime.4",children:"Lime.4 button"}),(0,o.jsx)(i.$,{color:"blue.2",children:"Blue.2 button"}),(0,o.jsx)(i.$,{color:"orange.3",children:"Orange.3 button"})]})]})},code:`
import { Button, Code, Group } from '@mantine/core';

function Demo() {
  return (
    <>
      <Code>autoContrast: true</Code>
      <Group mt="xs" mb="lg">
        <Button color="lime.4" autoContrast>
          Lime.4 button
        </Button>
        <Button color="blue.2" autoContrast>
          Blue.2 button
        </Button>
        <Button color="orange.3" autoContrast>
          Orange.3 button
        </Button>
      </Group>

      <Code>autoContrast: false</Code>
      <Group mt="xs">
        <Button color="lime.4">Lime.4 button</Button>
        <Button color="blue.2">Blue.2 button</Button>
        <Button color="orange.3">Orange.3 button</Button>
      </Group>
    </>
  );
}
`}},70504:(e,n,t)=>{"use strict";t.d(n,{l:()=>c});var o=t(31085),r=t(12616),s=t(87858),i=t(92408);let a=`
import { MantineProvider, createTheme, Checkbox } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <MantineProvider theme={theme}>
        <Checkbox label="Pointer cursor" mt="md" />
      </MantineProvider>
    </>
  );
}
`,l=(0,r.a)({cursorType:"pointer"}),c={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.S,{label:"Default cursor"}),(0,o.jsx)(i.nW,{theme:l,children:(0,o.jsx)(s.S,{label:"Pointer cursor",mt:"md",styles:{input:{cursor:"pointer"},label:{cursor:"pointer"}}})})]})},centered:!0,code:a}},94325:(e,n,t)=>{"use strict";t.d(n,{w:()=>c});var o=t(31085),r=t(81754),s=t(2242),i=t(92408),a=t(52022),l=t(75390);let c={type:"configurator",component:function(e){let n=(0,i.xd)(),t=Array(10).fill(0).map((t,s)=>(0,o.jsx)(a.$,{color:(0,r.g)({theme:n,color:e.color}).isThemeColor?`${e.color}.${s}`:e.color,children:"Button"},s));return(0,o.jsx)(i.nW,{inherit:!0,theme:{autoContrast:!0,luminanceThreshold:e.luminanceThreshold},children:(0,o.jsx)(l.B,{children:t})})},code:e=>`
import { Button, createTheme, MantineProvider, Stack } from '@mantine/core';

const theme = createTheme({
  autoContrast: true,
  luminanceThreshold: ${e.luminanceThreshold},
});

function Wrapper(props: any) {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Button
        key={index}
        color=${(0,r.g)({theme:s.S,color:e.color}).isThemeColor?`{\`${e.color}.\${index}\`}`:`"${e.color}"`}
      >
        Button
      </Button>
    ));

  return (
    <MantineProvider theme={theme}>
      <Stack>{buttons}</Stack>
    </MantineProvider>
  );
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"number",prop:"luminanceThreshold",initialValue:.3,min:0,max:1,step:.01,libraryValue:"__"}]}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,85954,90636,46593,38792],()=>n(95881)),_N_E=e.O()}]);