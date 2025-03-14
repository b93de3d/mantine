(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22923],{67601:(e,r,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/theme-icon",function(){return o(81181)}])},81181:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>T});var n=o(31085),t=o(71184),a=o(33102),i=o(29225);let l={type:"configurator",component:function(e){return(0,n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)(i.L,{...e,children:(0,n.jsx)(a.A,{style:{width:"70%",height:"70%"}})})})},code:`
import { ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon{{props}}>
      <IconPhoto style={{ width: '70%', height: '70%' }} />
    </ThemeIcon>
  );
}
`,centered:!0,controls:[{prop:"variant",type:"select",initialValue:"filled",libraryValue:"filled",data:[{label:"filled",value:"filled"},{label:"light",value:"light"},{label:"outline",value:"outline"},{label:"default",value:"default"},{label:"white",value:"white"}]},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"}]};var c=o(45854);let s={type:"configurator",component:function(e){return(0,n.jsx)(i.L,{variant:"gradient",size:"xl","aria-label":"Gradient action icon",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:(0,n.jsx)(c.A,{})})},code:e=>`
import { ThemeIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      <IconHeart />
    </ThemeIcon>
  );
}
`,centered:!0,controls:o(61866).n};var d=o(92854),h=o(20132),u=o(26762),p=o(81754),m=o(16560),v=o(69842),g=o(92408),f=o(56051);let y=e=>{let r=(0,u.v)(e),o=(0,p.g)({color:e.color||e.theme.primaryColor,theme:e.theme});return o.isThemeColor&&"lime"===o.color&&"filled"===e.variant?{...r,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,m.B)(o.value,.1),hover:(0,m.B)(o.value,.15),border:`1px solid ${o.value}`,color:(0,v.e)(o.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:r},b={type:"code",component:function(){return(0,n.jsx)(g.nW,{theme:{variantColorResolver:y},children:(0,n.jsxs)(f.Y,{children:[(0,n.jsx)(i.L,{color:"lime.4",variant:"filled",size:"lg",children:(0,n.jsx)(a.A,{size:20,stroke:1.5})}),(0,n.jsx)(i.L,{color:"orange",variant:"light",size:"lg",children:(0,n.jsx)(d.A,{size:20,stroke:1.5})}),(0,n.jsx)(i.L,{variant:"danger",size:"lg",children:(0,n.jsx)(h.A,{size:20,stroke:1.5})})]})})},centered:!0,defaultExpanded:!1,code:`
import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  ThemeIcon,
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
        <ThemeIcon color="lime.4" variant="filled">
          <IconPhoto size={20} />
        </ThemeIcon>

        <ThemeIcon color="orange" variant="light">
          <IconFingerprint size={20} />
        </ThemeIcon>

        <ThemeIcon variant="danger">
          <IconError404 size={20} />
        </ThemeIcon>
      </Group>
    </MantineProvider>
  );
}
`},x={type:"code",component:function(){return(0,n.jsxs)(f.Y,{children:[(0,n.jsx)(i.L,{size:"lg",color:"lime.4",children:(0,n.jsx)(d.A,{size:20})}),(0,n.jsx)(i.L,{size:"lg",color:"lime.4",autoContrast:!0,children:(0,n.jsx)(d.A,{size:20})})]})},code:`
import { IconFingerprint } from '@tabler/icons-react';
import { ThemeIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ThemeIcon size="lg" color="lime.4">
        <IconFingerprint size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" color="lime.4" autoContrast>
        <IconFingerprint size={20} />
      </ThemeIcon>
    </Group>
  );
}
`,centered:!0};var I=o(85954),j=o(38215);let k=(0,I.P)(j.XZ.ThemeIcon);function C(e){let r={a:"a",code:"code",h2:"h2",p:"p",...(0,t.R)(),...e.components},{AutoContrast:o,Demo:a,Gradient:i}=r;return o||z("AutoContrast",!0),a||z("Demo",!0),i||z("Gradient",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a,{data:l}),"\n",(0,n.jsx)(i,{component:"ThemeIcon"}),"\n",(0,n.jsx)(a,{data:s}),"\n",(0,n.jsx)(r.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,n.jsxs)(r.p,{children:["You can customize colors for ",(0,n.jsx)(r.code,{children:"ThemeIcon"})," and other components variants by adding\n",(0,n.jsx)(r.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,n.jsx)(a,{data:b}),"\n",(0,n.jsx)(o,{component:"ThemeIcon"}),"\n",(0,n.jsx)(a,{data:x})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(k,{...e,children:(0,n.jsx)(C,{...e})})}function z(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},20132:(e,r,o)=>{"use strict";o.d(r,{A:()=>n});var n=(0,o(73366).A)("outline","error-404","IconError404",[["path",{d:"M3 7v4a1 1 0 0 0 1 1h3",key:"svg-0"}],["path",{d:"M7 7v10",key:"svg-1"}],["path",{d:"M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z",key:"svg-2"}],["path",{d:"M17 7v4a1 1 0 0 0 1 1h3",key:"svg-3"}],["path",{d:"M21 7v10",key:"svg-4"}]])},92854:(e,r,o)=>{"use strict";o.d(r,{A:()=>n});var n=(0,o(73366).A)("outline","fingerprint","IconFingerprint",[["path",{d:"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3",key:"svg-0"}],["path",{d:"M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6",key:"svg-1"}],["path",{d:"M12 11v2a14 14 0 0 0 2.5 8",key:"svg-2"}],["path",{d:"M8 15a18 18 0 0 0 1.8 6",key:"svg-3"}],["path",{d:"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95",key:"svg-4"}]])},45854:(e,r,o)=>{"use strict";o.d(r,{A:()=>n});var n=(0,o(73366).A)("outline","heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},33102:(e,r,o)=>{"use strict";o.d(r,{A:()=>n});var n=(0,o(73366).A)("outline","photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},61866:(e,r,o)=>{"use strict";o.d(r,{n:()=>n});let n=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]}},e=>{var r=r=>e(e.s=r);e.O(0,[67456,85954,90636,46593,38792],()=>r(67601)),_N_E=e.O()}]);