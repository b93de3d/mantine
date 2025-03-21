(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9584],{10949:(e,n,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-0-0",function(){return o(94629)}])},94629:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>A});var r=o(31085),t=o(71184),s=o(52022),i=o(66674),l=o(52591),a=o(21934),c=o(88506),d=o(21372),h=o(40975),p=o(88416),u=o(27197),m=o(49729),x=o(13760),j=o(64397),f=o(41699),g=o(72463),b=o(99518),v=o(44950),y=o(64564),w=o(90885),S=o(70360),C=o(71689),T=o(56217),k=o(57314),N=o(88906),P=o(30280),I=o(76382),B=o(85954),M=o(38215);let z=(0,B.P)(M.XZ.Changelog700);function D(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{DataTable:o,Demo:B}=n;return o||L("DataTable",!0),B||L("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"migration-to-native-css",children:"Migration to native CSS"}),"\n",(0,r.jsxs)(n.p,{children:["Mantine no longer depends on ",(0,r.jsx)(n.a,{href:"https://emotion.sh/",children:"Emotion"})," for styles generation. All ",(0,r.jsx)(n.code,{children:"@mantine/*"}),"\npackages are now shipped with native CSS files which can be imported from ",(0,r.jsx)(n.code,{children:"@mantine/{package}/styles.css"}),",\nfor example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import '@mantine/core/styles.css';\n"})}),"\n",(0,r.jsx)(n.p,{children:"This change improves performance, reduces bundle size of the library and allows using Mantine\nin environments where CSS-in-JS is not supported (or supported with limitations), for example,\nNext.js app directory."}),"\n",(0,r.jsx)(n.p,{children:"Important breaking changes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"createStyles"})," function is no longer available, use ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," or any other styling solution of your choice instead"]}),"\n",(0,r.jsxs)(n.li,{children:["Components no longer support ",(0,r.jsx)(n.code,{children:"sx"})," prop. You can use ",(0,r.jsx)(n.code,{children:"className"})," or ",(0,r.jsx)(n.code,{children:"style"})," props instead."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"styles"})," prop no longer supports nested selectors"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["It is now recommended to use ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to style Mantine components.\nTo update your project to ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"}),", follow the ",(0,r.jsx)(n.a,{href:"/guides/6x-to-7x",children:"6.x → 7.x migration guide"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"vanilla-extract-integration",children:"Vanilla extract integration"}),"\n",(0,r.jsxs)(n.p,{children:["If you prefer CSS-in-JS syntax for styling, you can use ",(0,r.jsx)(n.a,{href:"/styles/vanilla-extract",children:"Vanilla extract"}),"\nas a TypeScript CSS preprocessor. You will be able to use most of Mantine styling features\nwith ",(0,r.jsx)(n.a,{href:"/styles/vanilla-extract",children:"Vanilla extract"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"system-color-scheme-support",children:"System color scheme support"}),"\n",(0,r.jsxs)(n.p,{children:["All components now support system color scheme – when ",(0,r.jsx)(n.code,{children:"colorScheme"})," value is ",(0,r.jsx)(n.code,{children:"auto"}),",\ncomponents will use ",(0,r.jsx)(n.code,{children:"prefers-color-scheme"})," media query to determine if the user prefers light or dark color scheme."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that ",(0,r.jsx)(n.code,{children:"auto"})," is not the default value. You need to set it manually to enable system color scheme support\nboth on ",(0,r.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," and in ",(0,r.jsx)(n.a,{href:"/theming/color-schemes#colorschemescript",children:"ColorSchemeScript"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { ColorSchemeScript, MantineProvider } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <ColorSchemeScript defaultColorScheme="auto" />\n      <MantineProvider defaultColorScheme="auto">\n        {/* Your app here */}\n      </MantineProvider>\n    </>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"built-in-color-scheme-manager",children:"Built-in color scheme manager"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," now comes with a built-in color scheme manager.\nIt is no longer required to use any other components to set up color scheme logic.\nColor scheme can be changed with ",(0,r.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme hook"}),":"]}),"\n",(0,r.jsx)(B,{data:i.$}),"\n",(0,r.jsx)(n.h2,{id:"css-modules-and-postcss-preset",children:"CSS modules and PostCSS preset"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," is now the recommended way to style Mantine components,\nalthough it is not required – you can choose any other styling solution of your choice."]}),"\n",(0,r.jsxs)(n.p,{children:["It is also recommended to use ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),". It includes\nmixins and functions to simplify styling of Mantine components. ",(0,r.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),"\nis included in all templates."]}),"\n",(0,r.jsx)(n.h2,{id:"global-styles",children:"Global styles"}),"\n",(0,r.jsxs)(n.p,{children:["Mantine no longer includes normalize.css. Instead, it uses a bare minimum set of ",(0,r.jsx)(n.a,{href:"/styles/global-styles",children:"global styles"}),".\nThese styles are part of the ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package and are applied automatically when you import\n",(0,r.jsx)(n.code,{children:"@mantine/core/styles.css"})," in your application. Note that these styles cannot be decoupled from the\nrest of the library."]}),"\n",(0,r.jsx)(n.h2,{id:"mantine-as-a-headless-ui-library",children:"Mantine as a headless UI library"}),"\n",(0,r.jsxs)(n.p,{children:["You can now use Mantine as a ",(0,r.jsx)(n.a,{href:"/styles/unstyled",children:"headless"})," library. To achieve that, just do not import\n",(0,r.jsx)(n.code,{children:"@mantine/*/styles.css"})," in your application. Then you will be able to apply styles with\n",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"createtheme-function",children:"createTheme function"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"createTheme"})," function is a replacement for ",(0,r.jsx)(n.code,{children:"MantineThemeOverride"})," type. Use it to create a theme\noverride, it will give you autocomplete for all theme properties:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  fontFamily: 'sans-serif',\n  primaryColor: 'orange',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"components-extend-functions",children:"Components extend functions"}),"\n",(0,r.jsxs)(n.p,{children:["All components that support ",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," or ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," now have a static ",(0,r.jsx)(n.code,{children:"extend"})," function which allows getting autocomplete when customizing\n",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"defaultProps"}),", ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," of the component\non ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import {\n  createTheme,\n  MantineProvider,\n  TextInput,\n} from '@mantine/core';\nimport classes from './Demo.module.css';\n\nconst theme = createTheme({\n  components: {\n    TextInput: TextInput.extend({\n      styles: (t, props) => ({\n        input: {\n          fontSize:\n            props.size === 'compact' ? t.fontSizes.sm : undefined,\n        },\n      }),\n      classNames: {\n        root: classes.root,\n        input: classes.input,\n        label: classes.label,\n      },\n\n      defaultProps: {\n        size: 'compact',\n      },\n    }),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"classnames-based-on-component-props",children:"classNames based on component props"}),"\n",(0,r.jsxs)(n.p,{children:["You can now get component props in ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"classNames and styles"})," to conditionally apply styles.\nThis feature is a more powerful replacement for styles params."]}),"\n",(0,r.jsx)(B,{data:l.f}),"\n",(0,r.jsx)(n.h2,{id:"components-css-variables",children:"Components CSS variables"}),"\n",(0,r.jsxs)(n.p,{children:["You can now customize components ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to change component styles based on its props.\nFor example, it can be used to add new ",(0,r.jsx)(n.a,{href:"/styles/variants-sizes",children:"sizes"}),":"]}),"\n",(0,r.jsx)(B,{data:a.f}),"\n",(0,r.jsx)(n.h2,{id:"new-variants-system",children:"New variants system"}),"\n",(0,r.jsxs)(n.p,{children:["All components now have ",(0,r.jsx)(n.code,{children:"data-variant"})," attribute on the root element, even if the component does not have any predefined variants.\nYou can use it to apply styles to all components of the same type on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),":"]}),"\n",(0,r.jsx)(B,{data:c.d}),"\n",(0,r.jsx)(n.h2,{id:"new-sizes-system",children:"New sizes system"}),"\n",(0,r.jsx)(n.p,{children:"There are multiple ways to customize component sizes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["With ",(0,r.jsx)(n.code,{children:"data-size"})," attribute"]}),"\n",(0,r.jsxs)(n.li,{children:["With component ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})]}),"\n",(0,r.jsxs)(n.li,{children:["With ",(0,r.jsx)(n.a,{href:"/styles/variants-sizes#sizes-with-static-css-variables",children:"static CSS variables"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Example of customizing ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," size with ",(0,r.jsx)(n.code,{children:"data-size"})," attribute:"]}),"\n",(0,r.jsx)(B,{data:d.Q}),"\n",(0,r.jsx)(n.h2,{id:"themevariantcolorresolver",children:"theme.variantColorResolver"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,r.jsx)(n.a,{href:"/core/badge",children:"Badge"}),", ",(0,r.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,r.jsx)(n.a,{href:"/core/theme-icon",children:"ThemeIcon"})," and other\ncomponents now support custom variants with ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"}),"\n– it supports both changing colors of existing variants and adding new variants."]}),"\n",(0,r.jsx)(B,{data:h._}),"\n",(0,r.jsx)(n.h2,{id:"rem-units-scaling",children:"rem units scaling"}),"\n",(0,r.jsxs)(n.p,{children:["It is now possible to scale ",(0,r.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"rem"})," units. It is useful when you want to change\nfont-size of ",(0,r.jsx)(n.code,{children:"html"}),"/",(0,r.jsx)(n.code,{children:":root"})," element and preserve Mantine components sizes. For example, if you would like to set ",(0,r.jsx)(n.code,{children:"html"})," font-size to ",(0,r.jsx)(n.code,{children:"10px"})," and scale Mantine components accordingly, you need\nto set ",(0,r.jsx)(n.code,{children:"scale"})," to ",(0,r.jsx)(n.code,{children:"1 / (10 / 16)"})," (16 – default font-size) = ",(0,r.jsx)(n.code,{children:"1 / 0.625"})," = ",(0,r.jsx)(n.code,{children:"1.6"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:":root {\n  font-size: 10px;\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  scale: 1.6,\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"color-prop-improvements",children:"color prop improvements"}),"\n",(0,r.jsxs)(n.p,{children:["All components that support ",(0,r.jsx)(n.code,{children:"color"})," prop now support the following color values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Key of ",(0,r.jsx)(n.code,{children:"theme.colors"}),", for example, ",(0,r.jsx)(n.code,{children:"blue"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.colors"})," index reference, for example, ",(0,r.jsx)(n.code,{children:"blue.5"})]}),"\n",(0,r.jsxs)(n.li,{children:["Any valid CSS color value, for example, ",(0,r.jsx)(n.code,{children:"#fff"}),", ",(0,r.jsx)(n.code,{children:"rgba(0, 0, 0, 0.5)"}),", ",(0,r.jsx)(n.code,{children:"hsl(0, 0%, 100%)"})]}),"\n"]}),"\n",(0,r.jsx)(B,{data:p.h}),"\n",(0,r.jsx)(n.h2,{id:"components-classes",children:"Components classes"}),"\n",(0,r.jsxs)(n.p,{children:["Classes of each component are now available in ",(0,r.jsx)(n.code,{children:"Component.classes"})," object. For example, you can\nfind ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," classes in ",(0,r.jsx)(n.code,{children:"Button.classes"}),":"]}),"\n",(0,r.jsx)(o,{head:["Key","Class"],data:Object.keys(s.$.classes).map(e=>[e,s.$.classes[e]])}),"\n",(0,r.jsx)(n.p,{children:"You can use these classes to create components with the same styles as Mantine components:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return <button type=\"button\" className={Button.classes.root} />;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"theme-object-changes",children:"Theme object changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.lineHeight"})," is now ",(0,r.jsx)(n.code,{children:"theme.lineHeights"})," – it is now possible to specify multiple line heights. ",(0,r.jsx)(n.code,{children:"theme.lineHeights"})," values are used in the ",(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," component."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.colorScheme"})," is no longer available, use ",(0,r.jsx)(n.a,{href:"/theming/color-schemes#use-mantine-color-scheme-hook",children:"useMantineColorScheme"})," to get color scheme value"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.dir"})," is no longer needed, direction is now managed by ",(0,r.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.loader"})," was removed, you can now configure default loader with ",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"default props"})," of ",(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.transitionTimingFunction"})," was removed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.focusRingStyles"})," was replaced with ",(0,r.jsx)(n.code,{children:"theme.focusClassName"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.activeStyles"})," was replaced with ",(0,r.jsx)(n.code,{children:"theme.activeClassName"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.globalStyles"})," was removed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.fn"})," functions were removed, some of the functions are available as ",(0,r.jsx)(n.a,{href:"/styles/color-functions",children:"standalone utilities"})]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/styles/rem#rem-units-scaling",children:"theme.scale"})," property controls rem units scaling"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"theme.fontSmoothing"})," property determines whether font smoothing styles should be applied to the body element"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-variant-resolver",children:"theme.variantColorResolver"})," property allows customizing component colors per variant"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"colors-generator",children:"Colors generator"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/theming/colors#colors-generation",children:"@mantine/colors-generator"})," package is now available to generate\ncolor palettes based on single color value. It is also available as ",(0,r.jsx)(n.a,{href:"/colors-generator/",children:"online tool"}),".\nNote that it is usually better to generate colors in advance to avoid contrast issues."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { generateColors } from '@mantine/colors-generator';\nimport { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  colors: {\n    'pale-blue': generateColors('#375EAC'),\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"new-setup-for-rtl",children:"New setup for RTL"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/core"})," package now exports ",(0,r.jsx)(n.a,{href:"/styles/rtl",children:"DirectionProvider"})," component, which should be used to configure the direction of the application.\n",(0,r.jsx)(n.code,{children:"useDirection"})," hook can be used to toggle direction. All components now include RTL styles by default, it is no\nlonger required to set up additional plugins. See ",(0,r.jsx)(n.a,{href:"/styles/rtl",children:"RTL documentation"})," to learn more."]}),"\n",(0,r.jsx)(n.h2,{id:"react-18-only",children:"React 18+ only"}),"\n",(0,r.jsxs)(n.p,{children:["Starting from version 7.0 Mantine no longer supports older React versions. The minimum supported version is now React 18.\nIt is required because Mantine components now use ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useId",children:"useId"})," and ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useSyncExternalStore",children:"useSyncExternalStore"}),"\nhooks, which are available only in React 18."]}),"\n",(0,r.jsx)(n.h2,{id:"left-and-right-section",children:"left and right section"}),"\n",(0,r.jsxs)(n.p,{children:["Components that previously had ",(0,r.jsx)(n.code,{children:"rightSection"})," and ",(0,r.jsx)(n.code,{children:"icon"})," props, now use ",(0,r.jsx)(n.code,{children:"leftSection"})," instead of ",(0,r.jsx)(n.code,{children:"icon"}),".\nExample of ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"})," sections:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Button } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Button leftSection="left" rightSection="right">\n      Label\n    </Button>\n  );\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"numberinput-changes",children:"NumberInput changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/number-input",children:"NumberInput"})," was migrated to ",(0,r.jsx)(n.a,{href:"https://s-yadav.github.io/react-number-format/",children:"react-number-format"}),".\nIt now supports more features and has improvements in cursor position management.\nDue to migration, some of the props were renamed – follow the ",(0,r.jsx)(n.a,{href:"/core/number-input",children:"documentation"})," to learn about the changes."]}),"\n",(0,r.jsx)(B,{data:u.K}),"\n",(0,r.jsx)(n.h2,{id:"loader-changes",children:"Loader changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component is now built with CSS only. This change improves performance and reduces\nHTML output of the component."]}),"\n",(0,r.jsx)(B,{data:m.c}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"Theme"})," object no longer supports ",(0,r.jsx)(n.code,{children:"theme.loader"})," property –\nit is also now possible to add custom loaders on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," with ",(0,r.jsx)(n.a,{href:"/theming/default-props",children:"default props"}),".\nSpecified ",(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," will be used in all components that use it under the hood (",(0,r.jsx)(n.a,{href:"/core/loading-overlay",children:"LoadingOverlay"}),", ",(0,r.jsx)(n.a,{href:"/core/button",children:"Button"}),", ",(0,r.jsx)(n.a,{href:"/core/action-icon",children:"ActionIcon"}),", ",(0,r.jsx)(n.a,{href:"/core/stepper",children:"Stepper"}),", etc.)."]}),"\n",(0,r.jsx)(B,{data:x._}),"\n",(0,r.jsx)(n.h2,{id:"progress-changes",children:"Progress changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/progress",children:"Progress"})," component now supports compound components pattern.\nAdvanced features that were previously implemented in ",(0,r.jsx)(n.a,{href:"/core/progress",children:"Progress"})," are now supposed to be implemented with\ncompound components instead."]}),"\n",(0,r.jsx)(B,{data:j.W}),"\n",(0,r.jsx)(n.h2,{id:"table-changes",children:"Table changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/table",children:"Table"})," component changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"Styles API"})," support"]}),"\n",(0,r.jsxs)(n.li,{children:["It is now required to use compound components instead of elements: ",(0,r.jsx)(n.code,{children:"Table.Tr"}),", ",(0,r.jsx)(n.code,{children:"Table.Td"}),", etc."]}),"\n",(0,r.jsx)(n.li,{children:"It is now easier to override styles – all styles are added with classes instead of deeply nested selectors on root element"}),"\n",(0,r.jsxs)(n.li,{children:["New props: ",(0,r.jsx)(n.code,{children:"borderColor"}),", ",(0,r.jsx)(n.code,{children:"withRowBorders"}),", ",(0,r.jsx)(n.code,{children:"stripedColor"}),", ",(0,r.jsx)(n.code,{children:"highlightOnHoverColor"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"withBorder"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"withTableBorder"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"fontSize"})," prop was removed, use ",(0,r.jsx)(n.code,{children:"fz"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.code,{children:"Table.ScrollContainer"})," component to create scrollable table"]}),"\n"]}),"\n",(0,r.jsx)(B,{data:f.j}),"\n",(0,r.jsx)(n.h2,{id:"group-changes",children:"Group changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/group",children:"Group"})," component changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"justify"})," – it now supports all ",(0,r.jsx)(n.code,{children:"justify-content"})," values"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"noWrap"})," prop was replaced with ",(0,r.jsx)(n.code,{children:'wrap="nowrap"'}),", ",(0,r.jsx)(n.code,{children:"wrap"})," prop now supports all ",(0,r.jsx)(n.code,{children:"flex-wrap"})," values"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"spacing"})," prop was replaced with ",(0,r.jsx)(n.code,{children:"gap"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Group"})," now supports new ",(0,r.jsx)(n.code,{children:"preventGrowOverflow"})," prop which allows customizing how group items will behave when they grow larger than their dedicated space"]}),"\n"]}),"\n",(0,r.jsx)(B,{data:g.C}),"\n",(0,r.jsx)(n.h2,{id:"tabs-changes",children:"Tabs changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Styles API selector ",(0,r.jsx)(n.code,{children:"tabsList"})," renamed to ",(0,r.jsx)(n.code,{children:"list"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TabProps"})," type was renamed to ",(0,r.jsx)(n.code,{children:"TabsTabProps"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onTabChange"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"onChange"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Tabs.List"})," ",(0,r.jsx)(n.code,{children:"position"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"justify"}),", it now supports all ",(0,r.jsx)(n.code,{children:"justify-content"})," values"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"button-changes",children:"Button changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"compact"})," prop was removed, use ",(0,r.jsx)(n.code,{children:'size="compact-XXX"'})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"leftIcon"})," and ",(0,r.jsx)(n.code,{children:"rightIcon"})," props were renamed to ",(0,r.jsx)(n.code,{children:"leftSection"})," and ",(0,r.jsx)(n.code,{children:"rightSection"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"uppercase"})," prop was removed, use ",(0,r.jsx)(n.code,{children:"tt"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"loaderPosition"})," prop was removed, ",(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," is now always rendered in the center to prevent layout shifts"]}),"\n",(0,r.jsxs)(n.li,{children:["Styles API selectors were changed, see ",(0,r.jsx)(n.a,{href:"/core/button?t=styles-api",children:"Button Styles API"})," documentation for more details"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"appshell-changes",children:"AppShell changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/app-shell",children:"AppShell"})," component was completely rewritten, it now supports more features:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AppShell"})," now uses compound components pattern: ",(0,r.jsx)(n.code,{children:"Navbar"}),", ",(0,r.jsx)(n.code,{children:"Aside"}),", ",(0,r.jsx)(n.code,{children:"Header"})," and ",(0,r.jsx)(n.code,{children:"Footer"})," are no longer exported from ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package. Instead, use ",(0,r.jsx)(n.code,{children:"AppShell.Navbar"}),", ",(0,r.jsx)(n.code,{children:"AppShell.Aside"}),", etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AppShell"})," now supports animations when navbar/aside are opened/closed"]}),"\n",(0,r.jsx)(n.li,{children:"Navbar/aside can now be collapsed on desktop – state is handled separately for mobile and desktop"}),"\n",(0,r.jsx)(n.li,{children:"Header/footer can now be collapsed the same way as navbar/aside. For example, the header can be collapsed based on scroll position or direction."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AppShell"})," no longer supports ",(0,r.jsx)(n.code,{children:"fixed"})," prop – all components have ",(0,r.jsx)(n.code,{children:"position: fixed"})," styles, static positioning is no longer supported"]}),"\n",(0,r.jsxs)(n.li,{children:["The documentation was updated, it now includes ",(0,r.jsx)(n.a,{href:"/app-shell?e=BasicAppShell",children:"10+ examples on a separate page"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"simplegrid-changes",children:"SimpleGrid changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/simple-grid",children:"SimpleGrid"})," now uses object format to define grid breakpoints and spacing,\nit works the same way as ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,r.jsx)(B,{data:b.n}),"\n",(0,r.jsx)(n.h2,{id:"grid-changes",children:"Grid changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/grid",children:"Grid"})," now uses object format in ",(0,r.jsx)(n.code,{children:"gutter"}),", ",(0,r.jsx)(n.code,{children:"offset"}),", ",(0,r.jsx)(n.code,{children:"span"})," and order props,\nall props now work the same way as ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,r.jsx)(B,{data:v.n}),"\n",(0,r.jsx)(n.h2,{id:"image-changes",children:"Image changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/image",children:"Image"})," component changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Image"})," component no longer includes ",(0,r.jsx)(n.code,{children:"figure"})," and other associated elements"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"caption"})," prop is no longer available"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"width"})," and ",(0,r.jsx)(n.code,{children:"height"})," props are replaced with ",(0,r.jsx)(n.code,{children:"w"})," and ",(0,r.jsx)(n.code,{children:"h"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"})]}),"\n",(0,r.jsx)(n.li,{children:"Placeholder functionality was replaced with fallback image"}),"\n"]}),"\n",(0,r.jsx)(B,{data:y.N}),"\n",(0,r.jsx)(n.h2,{id:"spotlight-changes",children:"Spotlight changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/x/spotlight",children:"Spotlight"})," changes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The logic is no longer based on React context"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"SpotlightProvider"})," was renamed to ",(0,r.jsx)(n.code,{children:"Spotlight"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useSpotlight"})," hook was removed, use ",(0,r.jsx)(n.code,{children:"spotlight"})," object instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"actions"})," prop now uses a different data format"]}),"\n",(0,r.jsx)(n.li,{children:"It is now possible to have multiple spotlights in the same app"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Spotlight"})," component now uses compound components pattern for advanced customization"]}),"\n"]}),"\n",(0,r.jsx)(B,{data:w.W}),"\n",(0,r.jsx)(n.h2,{id:"carousel-changes",children:"Carousel changes"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/x/carousel",children:"Carousel"})," now uses object format for responsive values in\n",(0,r.jsx)(n.code,{children:"slideSize"})," and ",(0,r.jsx)(n.code,{children:"slideGap"})," props instead of ",(0,r.jsx)(n.code,{children:"breakpoints"})," prop:"]}),"\n",(0,r.jsx)(B,{data:S.f}),"\n",(0,r.jsx)(n.h2,{id:"mantineprism-deprecation",children:"@mantine/prism deprecation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@mantine/prism"})," package was deprecated in favor of ",(0,r.jsx)(n.code,{children:"@mantine/code-highlight"})," package. ",(0,r.jsx)(n.a,{href:"/x/code-highlight",children:"The new package"})," uses ",(0,r.jsx)(n.a,{href:"https://highlightjs.org/",children:"highlight.js"})," instead of ",(0,r.jsx)(n.a,{href:"https://prismjs.com/",children:"Prism"}),"."]}),"\n",(0,r.jsx)(B,{data:C.l}),"\n",(0,r.jsx)(n.h2,{id:"fieldset-component",children:"Fieldset component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/core/fieldset",children:"Fieldset"})," component:"]}),"\n",(0,r.jsx)(B,{data:T.C}),"\n",(0,r.jsx)(n.h2,{id:"combobox-component",children:"Combobox component"}),"\n",(0,r.jsxs)(n.p,{children:["The new ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component allows building custom select, autocomplete, tags input, multiselect and other\nsimilar components. It is used as a base for updated ",(0,r.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,r.jsx)(n.a,{href:"/core/select",children:"Select"}),",\n",(0,r.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," and ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," components."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," is very flexible and allows you to have full control over the component rendering and logic.\nAdvanced features that were previously implemented in ",(0,r.jsx)(n.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,r.jsx)(n.a,{href:"/core/select",children:"Select"}),"\nand ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," are now supposed to be implemented with ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," instead."]}),"\n",(0,r.jsxs)(n.p,{children:["You can find 50+ ",(0,r.jsx)(n.code,{children:"Combobox"})," examples on ",(0,r.jsx)(n.a,{href:"/combobox",children:"this page"}),"."]}),"\n",(0,r.jsx)(B,{data:k.L}),"\n",(0,r.jsx)(n.h2,{id:"tagsinput-component",children:"TagsInput component"}),"\n",(0,r.jsxs)(n.p,{children:["New ",(0,r.jsx)(n.a,{href:"/core/tags-input",children:"TagsInput"})," component based on ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component.\nThe component is similar to ",(0,r.jsx)(n.a,{href:"/core/multi-select",children:"MultiSelect"})," but allows entering custom values."]}),"\n",(0,r.jsx)(B,{data:N.p}),"\n",(0,r.jsx)(n.h2,{id:"witherrorstyles-prop",children:"withErrorStyles prop"}),"\n",(0,r.jsxs)(n.p,{children:["All inputs now support ",(0,r.jsx)(n.code,{children:"withErrorStyles"})," prop, which allows removing error styles from the input.\nIt can be used to apply custom error styles without override, or use other techniques to\nindicate error state. For example, it can be used to render an icon in the right section:"]}),"\n",(0,r.jsx)(B,{data:P.z}),"\n",(0,r.jsx)(n.h2,{id:"hiddenfrom-and-visiblefrom-props",children:"hiddenFrom and visibleFrom props"}),"\n",(0,r.jsxs)(n.p,{children:["All Mantine components now support ",(0,r.jsx)(n.code,{children:"hiddenFrom"})," and ",(0,r.jsx)(n.code,{children:"visibleFrom"})," props.\nThese props accept breakpoint (",(0,r.jsx)(n.code,{children:"xs"}),", ",(0,r.jsx)(n.code,{children:"sm"}),", ",(0,r.jsx)(n.code,{children:"md"}),", ",(0,r.jsx)(n.code,{children:"lg"}),", ",(0,r.jsx)(n.code,{children:"xl"}),") and hide the component when\nviewport width is less than or greater than the specified breakpoint:"]}),"\n",(0,r.jsx)(B,{data:I.B}),"\n",(0,r.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component"]}),"\n",(0,r.jsxs)(n.li,{children:["New ",(0,r.jsx)(n.a,{href:"/core/action-icon#actionicongroup",children:"ActionIcon.Group"})," component"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/dates/dates-provider",children:"DatesProvider"})," now supports setting timezone"]}),"\n",(0,r.jsx)(n.li,{children:"All transitions are now disabled during color scheme change"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"theme.respectReducedMotion"})," is now set to ",(0,r.jsx)(n.code,{children:"false"})," by default – it caused a lot of confusion for users who did not know about it"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/x/notifications",children:"Notifications system"})," now exports ",(0,r.jsx)(n.code,{children:"notifications.updateState"})," function to update notifications state with a given callback"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/blockquote",children:"Blockquote"})," component has new design"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/breadcrumbs",children:"Breadcrumbs"})," component now supports ",(0,r.jsx)(n.code,{children:"separatorMargin"})," prop"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," component now supports ",(0,r.jsx)(n.code,{children:"mainAxis"})," and ",(0,r.jsx)(n.code,{children:"crossAxis"})," offset configuration"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/slider",children:"Slider and RangeSlider"})," components ",(0,r.jsx)(n.code,{children:"radius"})," prop now affects thumb as well as track"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/native-select/",children:"NativeSelect"})," component now supports setting options as ",(0,r.jsx)(n.code,{children:"children"})," and options groups"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/anchor",children:"Anchor"})," component now supports ",(0,r.jsx)(n.code,{children:"underline"})," prop which lets you configure how link will be underlined: ",(0,r.jsx)(n.code,{children:"hover"})," (default), ",(0,r.jsx)(n.code,{children:"always"})," or ",(0,r.jsx)(n.code,{children:"never"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/affix",children:"Affix"})," component no longer supports ",(0,r.jsx)(n.code,{children:"target"})," prop, use ",(0,r.jsx)(n.code,{children:"portalProps"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/drawer",children:"Drawer"})," component no longer supports ",(0,r.jsx)(n.code,{children:"target"})," prop, use ",(0,r.jsx)(n.code,{children:"portalProps"})," instead: ",(0,r.jsx)(n.code,{children:"portalProps={{ target: '.your-selector' }}"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/container",children:"Container"})," component no longer supports ",(0,r.jsx)(n.code,{children:"sizes"})," prop, use ",(0,r.jsx)(n.a,{href:"/styles/styles-api",children:"CSS variables"})," to customize sizes on ",(0,r.jsx)(n.a,{href:"/theming/theme-object",children:"theme"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useComponentDefaultProps"})," hook was renamed to ",(0,r.jsx)(n.a,{href:"/theming/default-props#useprops-hook",children:"useProps"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"withinPortal"})," prop is now true by default in all overlay components (",(0,r.jsx)(n.a,{href:"/core/popover",children:"Popover"}),", ",(0,r.jsx)(n.a,{href:"/core/hover-card",children:"HoverCard"}),", ",(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"}),", etc.)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AlphaSlider"})," and ",(0,r.jsx)(n.code,{children:"HueSlider"})," components are no longer available, they can be used only as a part of ",(0,r.jsx)(n.a,{href:"/core/color-picker",children:"ColorPicker"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," default root element is now ",(0,r.jsx)(n.code,{children:"<p />"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/title",children:"Title"})," no longer supports all ",(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," props, only ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," are available"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MediaQuery"})," component was removed – use ",(0,r.jsx)(n.a,{href:"/styles/css-modules",children:"CSS modules"})," to apply responsive styles"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/highlight",children:"Highlight"})," component prop ",(0,r.jsx)(n.code,{children:"highlightColor"})," was renamed to ",(0,r.jsx)(n.code,{children:"color"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip and Tooltip.Floating"})," components no longer support ",(0,r.jsx)(n.code,{children:"width"})," prop, use ",(0,r.jsx)(n.code,{children:"w"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/stack",children:"Stack"})," component ",(0,r.jsx)(n.code,{children:"spacing"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"gap"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/input",children:"Input"})," and other ",(0,r.jsx)(n.code,{children:"Input"})," based components ",(0,r.jsx)(n.code,{children:"icon"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"leftSection"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component ",(0,r.jsx)(n.code,{children:"variant"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"type"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@mantine/core"})," package no longer depends on ",(0,r.jsx)(n.a,{href:"https://www.radix-ui.com/docs/primitives/components/scroll-area#scroll-area",children:"Radix UI ScrollArea"}),", ",(0,r.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," component is now a native Mantine component – it reduces bundle size, allows setting CSP for styles and improves performance (all styles are now applied with classes instead of inline ",(0,r.jsx)(n.code,{children:"<style />"})," tags)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/overlay",children:"Overlay"})," ",(0,r.jsx)(n.code,{children:"opacity"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"backgroundOpacity"})," to avoid collision with ",(0,r.jsx)(n.code,{children:"opacity"})," ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style prop"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/badge",children:"Badge"})," Styles API selectors were changed, see ",(0,r.jsx)(n.a,{href:"/core/badge?t=styles-api",children:"Badge Styles API"})," documentation for more details"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/slider",children:"Slider"})," Styles API selectors were changed, see ",(0,r.jsx)(n.a,{href:"/core/slider?t=styles-api",children:"Slider Styles API"})," documentation for more details"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/text",children:"Text"})," component no longer supports ",(0,r.jsx)(n.code,{children:"underline"}),", ",(0,r.jsx)(n.code,{children:"color"}),", ",(0,r.jsx)(n.code,{children:"strikethrough"}),", ",(0,r.jsx)(n.code,{children:"italic"}),", ",(0,r.jsx)(n.code,{children:"transform"}),", ",(0,r.jsx)(n.code,{children:"align"})," and ",(0,r.jsx)(n.code,{children:"weight"})," prop – use ",(0,r.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/portal",children:"Portal"})," component ",(0,r.jsx)(n.code,{children:"innerRef"})," prop was renamed to ",(0,r.jsx)(n.code,{children:"ref"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/scroll-area",children:"ScrollArea"})," now supports ",(0,r.jsx)(n.code,{children:"x"})," and ",(0,r.jsx)(n.code,{children:"y"})," values in ",(0,r.jsx)(n.code,{children:"offsetScrollbars"})," prop"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TransferList"})," component is no longer available as a part of ",(0,r.jsx)(n.code,{children:"@mantine/core"})," package, instead you can implement it with ",(0,r.jsx)(n.a,{href:"/core/combobox",children:"Combobox"})," component (",(0,r.jsx)(n.a,{href:"/combobox?e=TransferList",children:"example"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/chip",children:"Chip"})," component now supports custom check icon"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/password-input",children:"PasswordInput"})," no longer supports ",(0,r.jsx)(n.code,{children:"visibilityToggleLabel"})," and ",(0,r.jsx)(n.code,{children:"toggleTabIndex"})," props, use ",(0,r.jsx)(n.code,{children:"visibilityToggleButtonProps"})," prop instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/stepper",children:"Stepper"})," no longer supports ",(0,r.jsx)(n.code,{children:"breakpoint"})," prop, you can apply responsive styles with Styles API"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/color-input",children:"ColorInput"})," no longer supports ",(0,r.jsx)(n.code,{children:"dropdownZIndex"}),", ",(0,r.jsx)(n.code,{children:"transitionProps"}),", ",(0,r.jsx)(n.code,{children:"withinPortal"}),", ",(0,r.jsx)(n.code,{children:"portalProps"})," and ",(0,r.jsx)(n.code,{children:"shadow"})," props, you can now pass these props with ",(0,r.jsx)(n.code,{children:"popoverProps"})," prop"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/loading-overlay",children:"LoadingOverlay"})," props are now grouped by the component they are passed down to: ",(0,r.jsx)(n.code,{children:"overlayProps"}),", ",(0,r.jsx)(n.code,{children:"loaderProps"})," and ",(0,r.jsx)(n.code,{children:"transitionProps"})," now replace props that were previously passed to ",(0,r.jsx)(n.code,{children:"LoadingOverlay"})," directly"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/x/dropzone",children:"Dropzone"})," component no longer supports ",(0,r.jsx)(n.code,{children:"padding"})," prop, use ",(0,r.jsx)(n.code,{children:"p"})," style prop instead"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/dialog",children:"Dialog"})," component now supports all ",(0,r.jsx)(n.a,{href:"/core/paper",children:"Paper"})," and ",(0,r.jsx)(n.a,{href:"/core/affix",children:"Affix"})," props, ",(0,r.jsx)(n.code,{children:"transitionDuration"}),", ",(0,r.jsx)(n.code,{children:"transition"})," and other transition related props were replaced with ",(0,r.jsx)(n.code,{children:"transitionProps"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/checkbox",children:"Checkbox"}),", ",(0,r.jsx)(n.a,{href:"/core/radio",children:"Radio"}),", ",(0,r.jsx)(n.a,{href:"/core/chip",children:"Chip"})," and ",(0,r.jsx)(n.a,{href:"/core/switch",children:"Switch"})," components now support ",(0,r.jsx)(n.code,{children:"rootRef"})," prop which allows using them with ",(0,r.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," and other similar components"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/core/grid",children:"Grid"})," no longer has ",(0,r.jsx)(n.code,{children:"overflow: hidden"})," styles by default, you can enable it by setting ",(0,r.jsx)(n.code,{children:"overflow"})," prop to ",(0,r.jsx)(n.code,{children:"hidden"})]}),"\n"]})]})}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(z,{...e,children:(0,r.jsx)(D,{...e})})}function L(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},94701:(e,n,o)=>{"use strict";o.d(n,{A:()=>r});var r=(0,o(73366).A)("outline","exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]])},71689:(e,n,o)=>{"use strict";o.d(n,{l:()=>d});var r=o(31085),t=o(82306),s=o(6464),i=o(54948);let l=`
function Button() {
  return <button>Click me</button>;
}
`,a=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;function c(e){return e.endsWith(".ts")||e.endsWith(".tsx")?(0,r.jsx)(s.$,{size:18}):e.endsWith(".css")?(0,r.jsx)(i.R,{size:18}):null}let d={type:"code",component:function(){return(0,r.jsx)(t.o,{getFileIcon:c,code:[{fileName:"Button.tsx",code:l,language:"tsx"},{fileName:"Button.module.css",code:a,language:"scss"}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${l}\`;

const cssCode = \`${a}\`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={18} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={18} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}
`}},57314:(e,n,o)=>{"use strict";o.d(n,{L:()=>d});var r=o(31085),t=o(14041),s=o(88559),i=o(31791),l=o(87059),a=o(34452);let c=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let e=(0,s.B)({onDropdownClose:()=>e.resetSelectedOption()}),[n,o]=(0,t.useState)(null),d=c.map(e=>(0,r.jsx)(i.G.Option,{value:e,children:e},e));return(0,r.jsxs)(i.G,{store:e,onOptionSubmit:n=>{o(n),e.closeDropdown()},children:[(0,r.jsx)(i.G.Target,{children:(0,r.jsx)(l.O,{component:"button",type:"button",pointer:!0,rightSection:(0,r.jsx)(i.G.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>e.toggleDropdown(),children:n||(0,r.jsx)(a.p.Placeholder,{children:"Pick value"})})}),(0,r.jsx)(i.G.Dropdown,{children:(0,r.jsx)(i.G.Options,{children:d})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`}},56217:(e,n,o)=>{"use strict";o.d(n,{C:()=>i});var r=o(31085),t=o(37173),s=o(90275);let i={type:"configurator",component:function(e){return(0,r.jsxs)(t.L,{legend:"Personal information",...e,children:[(0,r.jsx)(s.k,{label:"Your name",placeholder:"Your name"}),(0,r.jsx)(s.k,{label:"Email",placeholder:"Email",mt:"md"})]})},code:`
import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},44950:(e,n,o)=>{"use strict";o.d(n,{n:()=>i});var r=o(31085),t=o(23489),s=o(19788);let i={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,r.jsxs)(t.x,{children:[(0,r.jsx)(s.I,{span:{base:12,md:6,lg:3},children:"1"}),(0,r.jsx)(s.I,{span:{base:12,md:6,lg:3},children:"2"}),(0,r.jsx)(s.I,{span:{base:12,md:6,lg:3},children:"3"}),(0,r.jsx)(s.I,{span:{base:12,md:6,lg:3},children:"4"})]})}}},19788:(e,n,o)=>{"use strict";o.d(n,{I:()=>i});var r=o(31085),t=o(23489),s={col:"m_548ba23a",label:"m_60a4592e"};function i({children:e,...n}){return(0,r.jsx)(t.x.Col,{...n,children:(0,r.jsx)("div",{className:s.col,children:(0,r.jsx)("div",{className:s.label,children:e})})})}},72463:(e,n,o)=>{"use strict";o.d(n,{C:()=>i});var r=o(31085),t=o(56051),s=o(52022);let i={type:"configurator",component:function(e){return(0,r.jsxs)(t.Y,{...e,children:[(0,r.jsx)(s.$,{variant:"default",children:"First"}),(0,r.jsx)(s.$,{variant:"default",children:"Second"}),(0,r.jsx)(s.$,{variant:"default",children:"Third"})]})},code:`
import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
`,controls:[{type:"select",prop:"justify",data:["flex-start","center","space-between","flex-end"],initialValue:"flex-start",libraryValue:"flex-start"},{type:"size",prop:"gap",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"grow",initialValue:!1,libraryValue:!1}]}},64564:(e,n,o)=>{"use strict";o.d(n,{N:()=>s});var r=o(31085),t=o(38621);let s={type:"code",component:function(){return(0,r.jsx)(t._,{radius:"md",src:null,h:200,fallbackSrc:"https://placehold.co/600x400?text=Placeholder"})},code:`
import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
`}},30280:(e,n,o)=>{"use strict";o.d(n,{z:()=>i});var r=o(31085),t=o(94701),s=o(90275);let i={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.k,{placeholder:"Error as boolean",label:"Error as boolean",error:!0}),(0,r.jsx)(s.k,{mt:"md",placeholder:"Error as react node",label:"Error as react node",error:"Something went wrong"}),(0,r.jsx)(s.k,{mt:"md",placeholder:"Without error styles on input",label:"Without error styles on input",error:"Something went wrong",withErrorStyles:!1,rightSectionPointerEvents:"none",rightSection:(0,r.jsx)(t.A,{size:20,color:"var(--mantine-color-error)"})})]})},code:`
import { TextInput } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <IconExclamationCircle
            size={20}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
`,maxWidth:340,centered:!0}},49729:(e,n,o)=>{"use strict";o.d(n,{c:()=>s});var r=o(25810);let t=`
import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
`,s={type:"configurator",component:r.a,code:t,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"size",initialValue:"md",libraryValue:"md"},{type:"segmented",prop:"type",data:["oval","bars","dots"],initialValue:"oval",libraryValue:"oval"}]}},13760:(e,n,o)=>{"use strict";o.d(n,{_:()=>h});var r=o(31085),t=o(12616),s=o(25810),i=o(92408);let l=(0,o(14041).forwardRef)(({style:e,...n},o)=>(0,r.jsx)("svg",{...n,ref:o,style:{width:"var(--loader-size)",height:"var(--loader-size)",stroke:"var(--loader-color)",...e},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff",children:(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[(0,r.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,r.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,r.jsxs)("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0",children:[(0,r.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),(0,r.jsx)("circle",{cx:"22",cy:"22",r:"8",children:(0,r.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})),a=`
import { forwardRef } from 'react';
import { MantineLoaderComponent } from '@mantine/core';

export const RingLoader: MantineLoaderComponent = forwardRef(({ style, ...others }, ref) => (
  <svg
    {...others}
    ref={ref}
    style={{
      width: 'var(--loader-size)',
      height: 'var(--loader-size)',
      stroke: 'var(--loader-color)',
      ...style,
    }}
    viewBox="0 0 45 45"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
  >
    <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="1.5s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="1.5s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="1.5s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="6" strokeOpacity="0">
        <animate
          attributeName="r"
          begin="3s"
          dur="3s"
          values="6;22"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="3s"
          dur="3s"
          values="1;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-width"
          begin="3s"
          dur="3s"
          values="2;0"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="22" cy="22" r="8">
        <animate
          attributeName="r"
          begin="0s"
          dur="1.5s"
          values="6;1;2;3;4;5;6"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
));`,c=`
import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: 'ring',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
`,d=(0,t.a)({components:{Loader:s.a.extend({defaultProps:{loaders:{...s.a.defaultLoaders,ring:l},type:"ring"}})}}),h={type:"code",component:function(){return(0,r.jsx)(i.nW,{theme:d,children:(0,r.jsx)(s.a,{})})},centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:c},{fileName:"RingLoader.tsx",language:"tsx",code:a}]}},27197:(e,n,o)=>{"use strict";o.d(n,{K:()=>s});var r=o(31085),t=o(1169);let s={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Q,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),(0,r.jsx)(t.Q,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"})]})},code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
`,centered:!0,maxWidth:340}},64397:(e,n,o)=>{"use strict";o.d(n,{W:()=>s});var r=o(31085),t=o(44419);let s={type:"code",component:function(){return(0,r.jsxs)(t.k.Root,{size:"xl",children:[(0,r.jsx)(t.k.Section,{value:35,color:"cyan",children:(0,r.jsx)(t.k.Label,{children:"Documents"})}),(0,r.jsx)(t.k.Section,{value:28,color:"pink",children:(0,r.jsx)(t.k.Label,{children:"Photos"})}),(0,r.jsx)(t.k.Section,{value:15,color:"orange",children:(0,r.jsx)(t.k.Label,{children:"Other"})})]})},code:`
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
`}},99518:(e,n,o)=>{"use strict";o.d(n,{n:()=>i});var r=o(31085),t=o(96172),s=o(41624);let i={type:"code",component:function(){return(0,r.jsx)(t.r,{cols:{base:1,sm:2,lg:5},spacing:{base:10,sm:"xl"},verticalSpacing:{base:"md",sm:"xl"},children:s.A})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`}},41624:(e,n,o)=>{"use strict";o.d(n,{A:()=>c});var r=o(31085),t=o(54357),s=o(34056),i=o(93065),l={item:"m_a4dc100e",label:"m_f6c78959"};function a({className:e,children:n,...o}){return(0,r.jsx)(s.a,{className:(0,t.A)(l.item,e),...o,children:(0,r.jsx)(i.E,{className:l.label,children:n})})}let c=[,,,,,].fill(0).map((e,n)=>(0,r.jsx)(a,{children:n+1},n))},41699:(e,n,o)=>{"use strict";o.d(n,{j:()=>i});var r=o(31085),t=o(75447),s=o(15334);let i={type:"code",code:`
import { Table } from '@mantine/core';

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
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,component:function(){let e=s.Y.map(e=>(0,r.jsxs)(t.X.Tr,{children:[(0,r.jsx)(t.X.Td,{children:e.position}),(0,r.jsx)(t.X.Td,{children:e.name}),(0,r.jsx)(t.X.Td,{children:e.symbol}),(0,r.jsx)(t.X.Td,{children:e.mass})]},e.name));return(0,r.jsxs)(t.X,{children:[(0,r.jsx)(t.X.Thead,{children:(0,r.jsxs)(t.X.Tr,{children:[(0,r.jsx)(t.X.Th,{children:"Element position"}),(0,r.jsx)(t.X.Th,{children:"Element name"}),(0,r.jsx)(t.X.Th,{children:"Symbol"}),(0,r.jsx)(t.X.Th,{children:"Atomic mass"})]})}),(0,r.jsx)(t.X.Tbody,{children:e})]})}}},15334:(e,n,o)=>{"use strict";o.d(n,{Y:()=>r});let r=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}]},88906:(e,n,o)=>{"use strict";o.d(n,{p:()=>s});var r=o(31085),t=o(66732);let s={type:"code",component:function(){return(0,r.jsx)(t.u,{label:"Press Enter to submit a tag",placeholder:"Pick tag from list",data:["React","Angular","Svelte"]})},code:`
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Pick tag from list"
      data={['React', 'Angular', 'Svelte']}
    />
  );
}
`,maxWidth:340,centered:!0}},90885:(e,n,o)=>{"use strict";o.d(n,{W:()=>d});var r=o(31085),t=o(14041),s=o(5310),i=o(52022),l=o(84551),a=o(98939);let c=["Home","About us","Contacts","Blog","Careers","Terms of service"],d={type:"code",component:function(){let[e,n]=(0,t.useMemo)(l.Z3,[]),[o,d]=(0,t.useState)(""),h=c.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())).map(e=>(0,r.jsx)(a.L.Action,{label:e},e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.$,{onClick:n.open,children:"Open spotlight"}),(0,r.jsxs)(a.L.Root,{store:e,query:o,onQueryChange:d,shortcut:null,children:[(0,r.jsx)(a.L.Search,{placeholder:"Search...",leftSection:(0,r.jsx)(s.A,{stroke:1.5})}),(0,r.jsx)(a.L.ActionsList,{children:h.length>0?h:(0,r.jsx)(a.L.Empty,{children:"Nothing found..."})})]})]})},code:`
import { useState } from 'react';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const data = ['Home', 'About us', 'Contacts', 'Blog', 'Careers', 'Terms of service'];

function Demo() {
  const [query, setQuery] = useState('');

  const items = data
    .filter((item) => item.toLowerCase().includes(query.toLowerCase().trim()))
    .map((item) => <Spotlight.Action key={item} label={item} />);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
        <Spotlight.ActionsList>
          {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
`,centered:!0}},52591:(e,n,o)=>{"use strict";o.d(n,{f:()=>p});var r=o(31085),t=o(54357),s=o(12616),i=o(90275),l=o(92408),a={labelRequired:"m_686577e7",inputError:"m_933d67aa"};let c=`
import cx from 'clsx';
import { MantineProvider, createTheme, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      classNames: (_theme, props) => ({
        label: cx({ [classes.labelRequired]: props.required }),
        input: cx({ [classes.inputError]: props.error }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput required label="Required input" placeholder="Required input" />
      <TextInput error label="Input with error" placeholder="Input with error" mt="md" />
    </MantineProvider>
  );
}
`,d=`
.labelRequired {
  color: var(--mantine-color-red-filled);
}

.inputError {
  background-color: var(--mantine-color-red-light);
}
`,h=(0,s.a)({components:{TextInput:i.k.extend({classNames:(e,n)=>({label:(0,t.A)({[a.labelRequired]:n.required}),input:(0,t.A)({[a.inputError]:n.error})})})}}),p={type:"code",component:function(){return(0,r.jsxs)(l.nW,{theme:h,children:[(0,r.jsx)(i.k,{required:!0,label:"Required input",placeholder:"Required input"}),(0,r.jsx)(i.k,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:c,language:"tsx"},{fileName:"Demo.module.css",code:d,language:"scss"}]}},88506:(e,n,o)=>{"use strict";o.d(n,{d:()=>i});var r=o(31085),t=o(34452),s={input:"m_93131372"};let i={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{classNames:s,variant:"underline",placeholder:"Underline input"}),(0,r.jsx)(t.p,{classNames:s,variant:"filled",placeholder:"Filled input",mt:"md"})]})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:`
import { Input, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

// It is better to add new variants in theme.components
// This way you will be able to use them in anywhere in the app
const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </MantineProvider>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.input {
  &[data-variant='underline'] {
    border-bottom: 2px solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--mantine-color-gray-3);
    }

    @mixin dark {
      border-color: var(--mantine-color-dark-3);
    }

    &:focus {
      border-color: var(--mantine-color-blue-filled);
    }
  }
}
`,language:"scss"}]}},21372:(e,n,o)=>{"use strict";o.d(n,{Q:()=>d});var r=o(31085),t=o(12616),s=o(34452),i=o(92408);let l=`
import { Input, createTheme, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </MantineProvider>
  );
}
`,a=`
.wrapper {
  &[data-size='xxl'] {
    & .input {
      padding-left: 28px;
      padding-right: 28px;
      height: 68px;
      font-size: 28px;
    }
  }

  &[data-size='xxs'] {
    & .input {
      padding-left: 10px;
      padding-right: 10px;
      height: 28px;
      font-size: 10px;
    }
  }
}
`,c=(0,t.a)({components:{Input:s.p.extend({classNames:{wrapper:"m_b4c95450",input:"m_2be5f2c7"}})}}),d={type:"code",component:function(){return(0,r.jsxs)(i.nW,{theme:c,children:[(0,r.jsx)(s.p,{placeholder:"Size XXL",size:"xxl"}),(0,r.jsx)(s.p,{placeholder:"Size XXS",size:"xxs",mt:"md"})]})},maxWidth:360,centered:!0,code:[{language:"tsx",code:l,fileName:"Demo.tsx"},{language:"scss",code:a,fileName:"Demo.module.css"}]}},76382:(e,n,o)=>{"use strict";o.d(n,{B:()=>i});var r=o(31085),t=o(56051),s=o(52022);let i={type:"code",component:function(){return(0,r.jsxs)(t.Y,{justify:"center",children:[(0,r.jsx)(s.$,{hiddenFrom:"sm",color:"orange",children:"Hidden from sm"}),(0,r.jsx)(s.$,{visibleFrom:"sm",color:"cyan",children:"Visible from sm"}),(0,r.jsx)(s.$,{visibleFrom:"md",color:"pink",children:"Visible from md"})]})},code:`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button hiddenFrom="sm" color="orange">
        Hidden from sm
      </Button>
      <Button visibleFrom="sm" color="cyan">
        Visible from sm
      </Button>
      <Button visibleFrom="md" color="pink">
        Visible from md
      </Button>
    </Group>
  );
}
`}},21934:(e,n,o)=>{"use strict";o.d(n,{f:()=>c});var r=o(31085),t=o(52022),s=o(56051);let i=`
import { Button, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': '60px',
        '--button-padding-x': '30px',
        '--button-fz': '24px',
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': '24px',
        '--button-padding-x': '10px',
        '--button-fz': '10px',
      },
    };
  }

  return { root: {} };
};

function Demo() {
  return (
    <Group>
      <Button vars={varsResolver} size="xxl">
        XXL Button
      </Button>
      <Button vars={varsResolver} size="xxs">
        XXS Button
      </Button>
    </Group>
  );
}
`,l=`
import { Button, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--button-height': '60px',
              '--button-padding-x': '30px',
              '--button-fz': '24px',
            },
          };
        }

        if (props.size === 'xxs') {
          return {
            root: {
              '--button-height': '24px',
              '--button-padding-x': '10px',
              '--button-fz': '10px',
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button size="xxl">XXL Button</Button>
        <Button size="xxs">XXS Button</Button>
      </Group>
    </MantineProvider>
  );
}
`,a=(e,n)=>"xxl"===n.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===n.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}};t.$.extend({vars:(e,n)=>"xxl"===n.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===n.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}}});let c={type:"code",component:function(){return(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(t.$,{vars:a,size:"xxl",children:"XXL Button"}),(0,r.jsx)(t.$,{vars:a,size:"xxs",children:"XXS Button"})]})},centered:!0,code:[{code:l,language:"tsx",fileName:"MantineProvider.tsx"},{code:i,language:"tsx",fileName:"Inline.tsx"}]}},88416:(e,n,o)=>{"use strict";o.d(n,{h:()=>l});var r=o(31085),t=o(93065),s=o(56051),i=o(52022);let l={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.E,{size:"sm",mb:5,fw:500,children:"Filled variant"}),(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(i.$,{color:"cyan",children:"Theme color"}),(0,r.jsx)(i.$,{color:"#1D72FE",children:"Hex color"})]}),(0,r.jsx)(t.E,{size:"sm",mb:5,mt:"md",fw:500,children:"Light variant"}),(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(i.$,{variant:"light",color:"cyan",children:"Theme color"}),(0,r.jsx)(i.$,{variant:"light",color:"#1D72FE",children:"Hex color"})]}),(0,r.jsx)(t.E,{size:"sm",mb:5,mt:"md",fw:500,children:"Outline variant"}),(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(i.$,{variant:"outline",color:"cyan",children:"Theme color"}),(0,r.jsx)(i.$,{variant:"outline",color:"#1D72FE",children:"Hex color"})]})]})},defaultExpanded:!1,code:`
import { Group, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" mb={5} fw={500}>
        Filled variant
      </Text>
      <Group>
        <Button color="cyan">Theme color</Button>
        <Button color="#1D72FE">Hex color</Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Light variant
      </Text>
      <Group>
        <Button variant="light" color="cyan">
          Theme color
        </Button>
        <Button variant="light" color="#1D72FE">
          Hex color
        </Button>
      </Group>

      <Text size="sm" mb={5} mt="md" fw={500}>
        Outline variant
      </Text>
      <Group>
        <Button variant="outline" color="cyan">
          Theme color
        </Button>
        <Button variant="outline" color="#1D72FE">
          Hex color
        </Button>
      </Group>
    </>
  );
}

`}},66674:(e,n,o)=>{"use strict";o.d(n,{$:()=>l});var r=o(31085),t=o(87004),s=o(56051),i=o(52022);let l={type:"code",component:function(){let{setColorScheme:e,clearColorScheme:n}=(0,t.C)();return(0,r.jsxs)(s.Y,{children:[(0,r.jsx)(i.$,{onClick:()=>e("light"),children:"Light"}),(0,r.jsx)(i.$,{onClick:()=>e("dark"),children:"Dark"}),(0,r.jsx)(i.$,{onClick:()=>e("auto"),children:"Auto"}),(0,r.jsx)(i.$,{onClick:n,children:"Clear"})]})},centered:!0,code:`
import { useMantineColorScheme, Button, Group } from '@mantine/core';

function Demo() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
  );
}
`}},40975:(e,n,o)=>{"use strict";o.d(n,{_:()=>p});var r=o(31085),t=o(26762),s=o(81754),i=o(16560),l=o(69842),a=o(92408),c=o(56051),d=o(52022);let h=e=>{let n=(0,t.v)(e),o=(0,s.g)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...n,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,i.B)(o.value,.1),hover:(0,i.B)(o.value,.15),border:`1px solid ${o.value}`,color:(0,l.e)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:n},p={type:"code",component:function(){return(0,r.jsx)(a.nW,{theme:{variantColorResolver:h},children:(0,r.jsxs)(c.Y,{children:[(0,r.jsx)(d.$,{color:"lime.4",variant:"filled",children:"Lime filled button"}),(0,r.jsx)(d.$,{color:"orange",variant:"light",children:"Orange light button"}),(0,r.jsx)(d.$,{variant:"danger",children:"Danger button"})]})})},centered:!0,code:`
import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`1px solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Button color="lime.4" variant="filled">
          Lime filled button
        </Button>

        <Button color="orange" variant="light">
          Orange light button
        </Button>

        <Button variant="danger">Danger button</Button>
      </Group>
    </MantineProvider>
  );
}
`}},82306:(e,n,o)=>{"use strict";o.d(n,{o:()=>N});var r=o(31085),t=o(14041),s=o(54357),i=o(30127),l=o(39735),a=o(7098),c=o(6754),d=o(29686),h=o(69564),p=o(33970),u=o(34056),m=o(37950),x=o(2912),j=o(22962),f=o(8727),g=o(82307),b=o(22376);function v({expanded:e,style:n,...o}){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,l.D)(18),height:(0,l.D)(18),...n},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...o,children:e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M12 13v-8l-3 3m6 0l-3 -3"}),(0,r.jsx)("path",{d:"M9 17l1 0"}),(0,r.jsx)("path",{d:"M14 17l1 0"}),(0,r.jsx)("path",{d:"M19 17l1 0"}),(0,r.jsx)("path",{d:"M4 17l1 0"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M12 11v8l3 -3m-6 0l3 3"}),(0,r.jsx)("path",{d:"M9 7l1 0"}),(0,r.jsx)("path",{d:"M14 7l1 0"}),(0,r.jsx)("path",{d:"M19 7l1 0"}),(0,r.jsx)("path",{d:"M4 7l1 0"})]})})}function y({fileIcon:e,fileName:n,getFileIcon:o,className:t,style:s}){return e?(0,r.jsx)("span",{className:t,style:s,children:e}):o&&n?(0,r.jsx)("span",{className:t,style:s,children:o(n)}):null}var w=o(17386),S=o(30569);let C={...w.A,root:(0,s.A)(w.A.root,S.A.theme)},T={withHeader:!0,copyLabel:"Copy code",copiedLabel:"Copied",maxCollapsedHeight:(0,l.D)("8rem"),expandCodeLabel:"Expand code",collapseCodeLabel:"Collapse code",withCopyButton:!0},k=(0,a.V)((e,{maxCollapsedHeight:n})=>({root:{"--ch-max-collapsed-height":(0,l.D)(n)}})),N=(0,c.P9)((e,n)=>{let o=(0,d.Y)("CodeHighlightTabs",T,e),{classNames:s,className:l,style:a,styles:c,unstyled:w,vars:S,children:N,code:P,defaultActiveTab:I,activeTab:B,onTabChange:M,withHeader:z,copiedLabel:D,copyLabel:A,getFileIcon:L,maxCollapsedHeight:E,expanded:G,defaultExpanded:F,onExpandedChange:R,expandCodeLabel:_,collapseCodeLabel:V,withExpandButton:$,withCopyButton:Y,mod:H,...X}=o,O=(0,h.I)({name:"CodeHighlightTabs",props:o,classes:C,className:l,style:a,classNames:s,styles:c,unstyled:w,vars:S,varsResolver:k}),[W,q]=(0,g.Z)({defaultValue:I,value:B,finalValue:0,onChange:M}),[K,Q]=(0,g.Z)({defaultValue:F,value:G,finalValue:!0,onChange:R}),Z=Array.isArray(P)?P:[P],U=Z[W],J=null!=U.language&&i.A.getLanguage(U.language??"")?U.language:"plaintext",ee=i.A.highlight(U.code.trim(),{language:J}).value,en=Z.map((e,n)=>(0,t.createElement)(p.N,{...O("file"),key:e.fileName,mod:{active:n===W},onClick:()=>q(n)},(0,r.jsx)(y,{fileIcon:e.icon,getFileIcon:L,fileName:e.fileName,...O("fileIcon")}),(0,r.jsx)("span",{children:e.fileName})));return(0,r.jsxs)(u.a,{...O("root"),mod:[{collapsed:!K},H],ref:n,...X,dir:"ltr",children:[z&&(0,r.jsxs)("div",{...O("header"),children:[(0,r.jsx)(m.F,{type:"never",dir:"ltr",offsetScrollbars:!1,children:(0,r.jsx)("div",{...O("files"),children:en})}),(0,r.jsxs)("div",{...O("controls"),children:[$&&(0,r.jsx)(x.m,{label:K?V:_,fz:"sm",position:"left",children:(0,r.jsx)(j.M,{onClick:()=>Q(!K),variant:"none","aria-label":K?V:_,...O("control"),children:(0,r.jsx)(v,{expanded:K})})}),Y&&(0,r.jsx)(f.i,{value:U.code.trim(),children:({copied:e,copy:n})=>(0,r.jsx)(x.m,{label:e?D:A,fz:"sm",position:"left",children:(0,r.jsx)(j.M,{onClick:n,variant:"none",...O("control"),"aria-label":e?D:A,children:(0,r.jsx)(b.T,{copied:e})})})})]})]}),(0,r.jsx)(m.F,{type:"auto",dir:"ltr",offsetScrollbars:!1,children:(0,r.jsx)(u.a,{...O("codeWrapper"),mod:{expanded:K},children:(0,r.jsx)("pre",{...O("pre"),children:(0,r.jsx)("code",{...O("code"),dangerouslySetInnerHTML:{__html:ee}})})})}),(0,r.jsx)(p.N,{...O("showCodeButton"),mod:{hidden:K},onClick:()=>Q(!0),children:_})]})});N.displayName="@mantine/core/CodeHighlightTabs",N.classes=C},22376:(e,n,o)=>{"use strict";o.d(n,{T:()=>s});var r=o(31085),t=o(39735);function s({copied:e,style:n,...o}){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,t.D)(18),height:(0,t.D)(18),...n},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...o,children:e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M5 12l5 5l10 -10"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,r.jsx)("path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"}),(0,r.jsx)("path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"})]})})}s.displayName="@mantine/code-highlight/CopyIcon"},37173:(e,n,o)=>{"use strict";o.d(n,{L:()=>u});var r=o(31085);o(14041);var t=o(33450),s=o(7098),i=o(29686),l=o(69564),a=o(34056),c=o(6754),d={root:"m_e9408a47","root--default":"m_84c9523a","root--filled":"m_ef274e49","root--unstyled":"m_eda993d3",legend:"m_90794832","legend--unstyled":"m_74ca27fe"};let h={variant:"default"},p=(0,s.V)((e,{radius:n})=>({root:{"--fieldset-radius":void 0===n?void 0:(0,t.nJ)(n)}})),u=(0,c.P9)((e,n)=>{let o=(0,i.Y)("Fieldset",h,e),{classNames:t,className:s,style:c,styles:u,unstyled:m,vars:x,legend:j,variant:f,children:g,...b}=o,v=(0,l.I)({name:"Fieldset",classes:d,props:o,className:s,style:c,classNames:t,styles:u,unstyled:m,vars:x,varsResolver:p});return(0,r.jsxs)(a.a,{component:"fieldset",ref:n,variant:f,...v("root",{variant:f}),...b,children:[j&&(0,r.jsx)("legend",{...v("legend",{variant:f}),children:j}),g]})});u.classes=d,u.displayName="@mantine/core/Fieldset"},23489:(e,n,o)=>{"use strict";o.d(n,{x:()=>M});var r=o(31085);o(14041);var t=o(7098),s=o(29686),i=o(69564),l=o(22448),a=o(34056),c=o(6754);let[d,h]=(0,o(59852).F)("Grid component was not found in tree");var p=o(54357),u=o(93698),m=o(41280),x=o(1300),j=o(2306),f=o(92408),g=o(54212);let b=(e,n)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(n/e)}%`:void 0,v=(e,n,o)=>o||"auto"===e?"100%":"content"===e?"unset":b(e,n),y=(e,n)=>{if(e)return"auto"===e||n?"1":"auto"},w=(e,n)=>0===e?"0":e?`${100/(n/e)}%`:void 0;function S({span:e,order:n,offset:o,selector:t}){let s=(0,f.xd)(),i=h(),l=i.breakpoints||s.breakpoints,a=void 0===(0,j.D)(e)?12:(0,j.D)(e),c=(0,m.J)({"--col-order":j.D(n)?.toString(),"--col-flex-grow":y(a,i.grow),"--col-flex-basis":b(a,i.columns),"--col-width":"content"===a?"auto":void 0,"--col-max-width":v(a,i.columns,i.grow),"--col-offset":w((0,j.D)(o),i.columns)}),d=(0,u.H)(l).reduce((r,t)=>(r[t]||(r[t]={}),"object"==typeof n&&void 0!==n[t]&&(r[t]["--col-order"]=n[t]?.toString()),"object"==typeof e&&void 0!==e[t]&&(r[t]["--col-flex-grow"]=y(e[t],i.grow),r[t]["--col-flex-basis"]=b(e[t],i.columns),r[t]["--col-width"]="content"===e[t]?"auto":void 0,r[t]["--col-max-width"]=v(e[t],i.columns,i.grow)),"object"==typeof o&&void 0!==o[t]&&(r[t]["--col-offset"]=w(o[t],i.columns)),r),{}),p=(0,x.q)((0,u.H)(d),l).filter(e=>(0,u.H)(d[e.value]).length>0).map(e=>({query:"container"===i.type?`mantine-grid (min-width: ${l[e.value]})`:`(min-width: ${l[e.value]})`,styles:d[e.value]}));return(0,r.jsx)(g.K,{styles:c,media:"container"===i.type?void 0:p,container:"container"===i.type?p:void 0,selector:t})}var C={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"};let T={span:12},k=(0,c.P9)((e,n)=>{let{classNames:o,className:t,style:i,styles:c,vars:d,span:u,order:m,offset:x,...j}=(0,s.Y)("GridCol",T,e),f=h(),g=(0,l.C)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S,{selector:`.${g}`,span:u,order:m,offset:x}),(0,r.jsx)(a.a,{ref:n,...f.getStyles("col",{className:(0,p.A)(t,g),style:i,classNames:o,styles:c}),...j})]})});k.classes=C,k.displayName="@mantine/core/GridCol";var N=o(33450);function P({gutter:e,selector:n,breakpoints:o,type:t}){let s=(0,f.xd)(),i=o||s.breakpoints,l=(0,m.J)({"--grid-gutter":(0,N.GY)((0,j.D)(e))}),a=(0,u.H)(i).reduce((n,o)=>(n[o]||(n[o]={}),"object"==typeof e&&void 0!==e[o]&&(n[o]["--grid-gutter"]=(0,N.GY)(e[o])),n),{}),c=(0,x.q)((0,u.H)(a),i).filter(e=>(0,u.H)(a[e.value]).length>0).map(e=>({query:"container"===t?`mantine-grid (min-width: ${i[e.value]})`:`(min-width: ${i[e.value]})`,styles:a[e.value]}));return(0,r.jsx)(g.K,{styles:l,media:"container"===t?void 0:c,container:"container"===t?c:void 0,selector:n})}let I={gutter:"md",grow:!1,columns:12},B=(0,t.V)((e,{justify:n,align:o,overflow:r})=>({root:{"--grid-justify":n,"--grid-align":o,"--grid-overflow":r}})),M=(0,c.P9)((e,n)=>{let o=(0,s.Y)("Grid",I,e),{classNames:t,className:c,style:h,styles:p,unstyled:u,vars:m,grow:x,gutter:j,columns:f,align:g,justify:b,children:v,breakpoints:y,type:w,...S}=o,T=(0,i.I)({name:"Grid",classes:C,props:o,className:c,style:h,classNames:t,styles:p,unstyled:u,vars:m,varsResolver:B}),k=(0,l.C)();return"container"===w&&y?(0,r.jsxs)(d,{value:{getStyles:T,grow:x,columns:f||12,breakpoints:y,type:w},children:[(0,r.jsx)(P,{selector:`.${k}`,...o}),(0,r.jsx)("div",{...T("container"),children:(0,r.jsx)(a.a,{ref:n,...T("root",{className:k}),...S,children:(0,r.jsx)("div",{...T("inner"),children:v})})})]}):(0,r.jsxs)(d,{value:{getStyles:T,grow:x,columns:f||12,breakpoints:y,type:w},children:[(0,r.jsx)(P,{selector:`.${k}`,...o}),(0,r.jsx)(a.a,{ref:n,...T("root",{className:k}),...S,children:(0,r.jsx)("div",{...T("inner"),children:v})})]})});M.classes=C,M.displayName="@mantine/core/Grid",M.Col=k},1169:(e,n,o)=>{"use strict";o.d(n,{Q:()=>P});var r=o(31085),t=o(14041),s=o(54357),i=o(57715),l=o(82307),a=o(68193),c=o(34321),d=o(1962),h=o(33450),p=o(7098),u=o(36456),m=o(69564),x=o(29686),j=o(6754),f=o(87059),g=o(33970);function b({direction:e,style:n,...o}){return(0,r.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...n},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var v={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let y=/^(0\.0*|-0(\.0*)?)$/,w=/^-?0\d+(\.\d+)?\.?$/;function S(e){return"string"==typeof e&&""!==e&&!Number.isNaN(Number(e))}function C(e){return"number"==typeof e?e<Number.MAX_SAFE_INTEGER:""===e||S(e)&&Number(e)<Number.MAX_SAFE_INTEGER}function T(e,n,o){return void 0===e||(void 0===n||e>=n)&&(void 0===o||e<=o)}let k={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},N=(0,p.V)((e,{size:n})=>({controls:{"--ni-chevron-size":(0,h.YC)(n,"ni-chevron-size")}})),P=(0,j.P9)((e,n)=>{let o=(0,x.Y)("NumberInput",k,e),{className:h,classNames:p,styles:j,unstyled:P,vars:I,onChange:B,onValueChange:M,value:z,defaultValue:D,max:A,min:L,step:E,hideControls:G,rightSection:F,isAllowed:R,clampBehavior:_,onBlur:V,allowDecimal:$,decimalScale:Y,onKeyDown:H,onKeyDownCapture:X,handlersRef:O,startValue:W,disabled:q,rightSectionPointerEvents:K,allowNegative:Q,readOnly:Z,size:U,rightSectionWidth:J,stepHoldInterval:ee,stepHoldDelay:en,allowLeadingZeros:eo,withKeyboardEvents:er,trimLeadingZeroesOnBlur:et,...es}=o,ei=(0,m.I)({name:"NumberInput",classes:v,props:o,classNames:p,styles:j,unstyled:P,vars:I,varsResolver:N}),{resolvedClassNames:el,resolvedStyles:ea}=(0,u.Y)({classNames:p,styles:j,props:o}),[ec,ed]=(0,l.Z)({value:z,defaultValue:D,finalValue:"",onChange:B}),eh=void 0!==en&&void 0!==ee,ep=(0,t.useRef)(null),eu=(0,t.useRef)(null),em=(0,t.useRef)(0),ex=e=>{let n=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return n?Math.max(0,(n[1]?n[1].length:0)-(n[2]?+n[2]:0)):0},ej=e=>{ep.current&&void 0!==e&&ep.current.setSelectionRange(e,e)},ef=(0,t.useRef)(d.l);ef.current=()=>{let e;if(!C(ec))return;let n=Math.max(ex(ec),ex(E)),o=10**n;if(!S(ec)&&("number"!=typeof ec||Number.isNaN(ec)))e=(0,a.q)(W,L,A);else if(void 0!==A){let n=(Math.round(Number(ec)*o)+Math.round(E*o))/o;e=n<=A?n:A}else e=(Math.round(Number(ec)*o)+Math.round(E*o))/o;let r=e.toFixed(n);ed(parseFloat(r)),M?.({floatValue:parseFloat(r),formattedValue:r,value:r},{source:"increment"}),setTimeout(()=>ej(ep.current?.value.length),0)};let eg=(0,t.useRef)(d.l);eg.current=()=>{let e;if(!C(ec))return;let n=void 0!==L?L:Q?Number.MIN_SAFE_INTEGER:0,o=Math.max(ex(ec),ex(E)),r=10**o;if(!S(ec)&&"number"!=typeof ec||Number.isNaN(ec))e=(0,a.q)(W,n,A);else{let o=(Math.round(Number(ec)*r)-Math.round(E*r))/r;e=void 0!==n&&o<n?n:o}let t=e.toFixed(o);ed(parseFloat(t)),M?.({floatValue:parseFloat(t),formattedValue:t,value:t},{source:"decrement"}),setTimeout(()=>ej(ep.current?.value.length),0)},(0,c.bl)(O,{increment:ef.current,decrement:eg.current});let eb=e=>{e?ef.current():eg.current(),em.current+=1},ev=e=>{if(eb(e),eh){let n="number"==typeof ee?ee:ee(em.current);eu.current=window.setTimeout(()=>ev(e),n)}},ey=(e,n)=>{e.preventDefault(),ep.current?.focus(),eb(n),eh&&(eu.current=window.setTimeout(()=>ev(n),en))},ew=()=>{eu.current&&window.clearTimeout(eu.current),eu.current=null,em.current=0},eS=(0,r.jsxs)("div",{...ei("controls"),children:[(0,r.jsx)(g.N,{...ei("control"),tabIndex:-1,"aria-hidden":!0,disabled:q||"number"==typeof ec&&void 0!==A&&ec>=A,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ey(e,!0)},onPointerUp:ew,onPointerLeave:ew,children:(0,r.jsx)(b,{direction:"up"})}),(0,r.jsx)(g.N,{...ei("control"),tabIndex:-1,"aria-hidden":!0,disabled:q||"number"==typeof ec&&void 0!==L&&ec<=L,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ey(e,!1)},onPointerUp:ew,onPointerLeave:ew,children:(0,r.jsx)(b,{direction:"down"})})]});return(0,r.jsx)(f.O,{component:i.HG,allowNegative:Q,className:(0,s.A)(v.root,h),size:U,...es,readOnly:Z,disabled:q,value:ec,getInputRef:(0,c.pc)(n,ep),onValueChange:(e,n)=>{"event"===n.source&&ed(!function(e,n){return("number"==typeof e?e<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(e)))&&!Number.isNaN(e)&&14>n.toString().replace(".","").length&&""!==n}(e.floatValue,e.value)||y.test(e.value)||eo&&w.test(e.value)?e.value:e.floatValue),M?.(e,n)},rightSection:G||Z||!C(ec)?F:F||eS,classNames:el,styles:ea,unstyled:P,__staticSelector:"NumberInput",decimalScale:$?Y:0,onKeyDown:e=>{H?.(e),!Z&&er&&("ArrowUp"===e.key&&(e.preventDefault(),ef.current()),"ArrowDown"===e.key&&(e.preventDefault(),eg.current()))},onKeyDownCapture:e=>{if(X?.(e),"Backspace"===e.key){let n=ep.current;0===n.selectionStart&&n.selectionStart===n.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>ej(0),0))}},rightSectionPointerEvents:K??(q?"none":void 0),rightSectionWidth:J??`var(--ni-right-section-width-${U||"sm"})`,allowLeadingZeros:eo,onBlur:e=>{let n=ec;if("blur"===_&&"number"==typeof n&&(n=(0,a.q)(n,L,A)),et&&"string"==typeof n&&15>ex(n)){let e=n.toString().replace(/^0+/,""),o=parseFloat(e);n=Number.isNaN(o)||o>Number.MAX_SAFE_INTEGER?e:(0,a.q)(o,L,A)}ec!==n&&ed(n),V?.(e)},isAllowed:e=>"strict"===_?R?R(e)&&T(e.floatValue,L,A):T(e.floatValue,L,A):!R||R(e)})});P.classes={...f.O.classes,...v},P.displayName="@mantine/core/NumberInput"},96172:(e,n,o)=>{"use strict";o.d(n,{r:()=>w});var r=o(31085);o(14041);var t=o(29686),s=o(69564),i=o(22448),l=o(34056),a=o(6754),c=o(93698),d=o(4749),h=o(41280),p=o(33450),u=o(1300),m=o(2306),x=o(92408),j=o(54212);function f({spacing:e,verticalSpacing:n,cols:o,selector:t}){let s=(0,x.xd)(),i=void 0===n?e:n,l=(0,h.J)({"--sg-spacing-x":(0,p.GY)((0,m.D)(e)),"--sg-spacing-y":(0,p.GY)((0,m.D)(i)),"--sg-cols":m.D(o)?.toString()}),a=(0,c.H)(s.breakpoints).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--sg-spacing-x"]=(0,p.GY)(e[r])),"object"==typeof i&&void 0!==i[r]&&(n[r]["--sg-spacing-y"]=(0,p.GY)(i[r])),"object"==typeof o&&void 0!==o[r]&&(n[r]["--sg-cols"]=o[r]),n),{}),d=(0,u.q)((0,c.H)(a),s.breakpoints).filter(e=>(0,c.H)(a[e.value]).length>0).map(e=>({query:`(min-width: ${s.breakpoints[e.value]})`,styles:a[e.value]}));return(0,r.jsx)(j.K,{styles:l,media:d,selector:t})}function g(e){return"object"==typeof e&&null!==e?(0,c.H)(e):[]}function b({spacing:e,verticalSpacing:n,cols:o,selector:t}){let s=void 0===n?e:n,i=(0,h.J)({"--sg-spacing-x":(0,p.GY)((0,m.D)(e)),"--sg-spacing-y":(0,p.GY)((0,m.D)(s)),"--sg-cols":m.D(o)?.toString()}),l=function({spacing:e,verticalSpacing:n,cols:o}){return Array.from(new Set([...g(e),...g(n),...g(o)])).sort((e,n)=>(0,d.px)(e)-(0,d.px)(n))}({spacing:e,verticalSpacing:n,cols:o}),a=l.reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--sg-spacing-x"]=(0,p.GY)(e[r])),"object"==typeof s&&void 0!==s[r]&&(n[r]["--sg-spacing-y"]=(0,p.GY)(s[r])),"object"==typeof o&&void 0!==o[r]&&(n[r]["--sg-cols"]=o[r]),n),{}),c=l.map(e=>({query:`simple-grid (min-width: ${e})`,styles:a[e]}));return(0,r.jsx)(j.K,{styles:i,container:c,selector:t})}var v={container:"m_925c2d2c",root:"m_2415a157"};let y={cols:1,spacing:"md",type:"media"},w=(0,a.P9)((e,n)=>{let o=(0,t.Y)("SimpleGrid",y,e),{classNames:a,className:c,style:d,styles:h,unstyled:p,vars:u,cols:m,verticalSpacing:x,spacing:j,type:g,...w}=o,S=(0,s.I)({name:"SimpleGrid",classes:v,props:o,className:c,style:d,classNames:a,styles:h,unstyled:p,vars:u}),C=(0,i.C)();return"container"===g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{...o,selector:`.${C}`}),(0,r.jsx)("div",{...S("container"),children:(0,r.jsx)(l.a,{ref:n,...S("root",{className:C}),...w})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{...o,selector:`.${C}`}),(0,r.jsx)(l.a,{ref:n,...S("root",{className:C}),...w})]})});w.classes=v,w.displayName="@mantine/core/SimpleGrid"}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,57715,98149,85954,31791,66732,86230,90636,46593,38792],()=>n(10949)),_N_E=e.O()}]);