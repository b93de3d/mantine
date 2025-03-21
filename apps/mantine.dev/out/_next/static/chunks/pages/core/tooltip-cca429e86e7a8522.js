(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89521],{64975:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/tooltip",function(){return t(11044)}])},11044:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>O});var n=t(31085),i=t(71184),r=t(2912),l=t(52022);let s={type:"code",component:function(){return(0,n.jsx)(r.m,{label:"Tooltip",children:(0,n.jsx)(l.$,{children:"Button with tooltip"})})},centered:!0,code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`},a={type:"configurator",component:function(e){return(0,n.jsx)(r.m,{label:"Tooltip",...e,children:(0,n.jsx)(l.$,{children:"With tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button>With tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"}]};var c=t(73368);let d={type:"configurator",component:function(e){return(0,n.jsx)(r.m,{label:"Tooltip",opened:!0,...e,children:(0,n.jsx)(l.$,{children:"Button with tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip" opened{{props}}>
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:c.K,libraryValue:null},{type:"number",prop:"offset",initialValue:5,libraryValue:null,min:-50,max:50}]},p={type:"configurator",component:function(e){return(0,n.jsx)(r.m,{position:e.position,opened:!0,label:"Tooltip",offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis},children:(0,n.jsx)(l.$,{children:"Button with tooltip"})})},code:e=>`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      position="${e.position}"
      opened
      label="Tooltip"
      offset={{ mainAxis: ${e.mainAxis}, crossAxis: ${e.crossAxis} }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:c.K,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:5,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},h={type:"configurator",component:function(e){return(0,n.jsx)(r.m,{label:"Tooltip",withArrow:!0,opened:!0,position:"top-start",...e,children:(0,n.jsx)(l.$,{children:"Button with tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip{{props}} label="Tooltip" withArrow opened position="top-start">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:null,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:4,libraryValue:null,min:2,max:8},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]};var u=t(14041);let m={type:"code",centered:!0,code:`
import { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`,component:function(){let[e,o]=(0,u.useState)(!1);return(0,n.jsx)(r.m,{label:"Ctrl + J",opened:e,children:(0,n.jsx)(l.$,{onClick:()=>o(e=>!e),children:"Toggle color scheme"})})}},f={type:"code",code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      multiline
      w={220}
      withArrow
      transitionProps={{ duration: 200 }}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button>Multiline tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,component:function(){return(0,n.jsx)(r.m,{multiline:!0,w:220,withArrow:!0,transitionProps:{duration:200},label:"Use this button to save this information in your profile, after that you will be able to access it any time and share it via email.",children:(0,n.jsx)(l.$,{children:"Multiline tooltip"})})}};var x=t(93065),b=t(75995);let j={type:"code",component:function(){return(0,n.jsxs)(x.E,{children:["Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers."," ",(0,n.jsx)(r.m,{inline:!0,label:"Inline tooltip",children:(0,n.jsx)(b.C,{children:"When visiting a junkyard"})}),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot of a rainbow."]})},code:`
import { Tooltip, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler\u2019s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Tooltip inline label="Inline tooltip">
        <Mark>When visiting a junkyard</Mark>
      </Tooltip>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh\u2019s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`};var g=t(354),T=t(56051);let w={type:"code",code:`
import { Button, Tooltip, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button>Delay open - 500ms</Button>
      </Tooltip>
      <Tooltip label="Closes after 500ms" closeDelay={500}>
        <Button>Delay close - 500ms</Button>
      </Tooltip>
    </Group>
  );
}
`,component:function(){return(0,n.jsxs)(T.Y,{justify:"center",children:[(0,n.jsx)(r.m,{label:"Opened after 500ms",openDelay:500,children:(0,n.jsx)(l.$,{children:"Delay open - 500ms"})}),(0,n.jsx)(r.m,{label:"Closes after 500ms",closeDelay:500,children:(0,n.jsx)(l.$,{children:"Delay close - 500ms"})})]})}},y={type:"code",component:function(){return(0,n.jsx)(r.m.Group,{openDelay:500,closeDelay:100,children:(0,n.jsxs)(T.Y,{justify:"center",children:[(0,n.jsx)(r.m,{label:"Tooltip 1",children:(0,n.jsx)(l.$,{children:"Button 1"})}),(0,n.jsx)(r.m,{label:"Tooltip 2",children:(0,n.jsx)(l.$,{children:"Button 2"})}),(0,n.jsx)(r.m,{label:"Tooltip 3",children:(0,n.jsx)(l.$,{children:"Button 3"})})]})})},code:`
import { Tooltip, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <Tooltip label="Tooltip 1">
          <Button>Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button>Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button>Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}
`};var v=t(34056);let B={type:"code",component:function(){return(0,n.jsx)(r.m.Floating,{label:"Floating tooltip",children:(0,n.jsx)(v.a,{p:"xl",bg:"var(--mantine-color-blue-light)",style:{cursor:"default"},children:"Hover over the box to see tooltip"})})},code:`
import { Box, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
`,centered:!0};var D=t(85954),k=t(38215);let C=(0,D.P)(k.XZ.Tooltip);function A(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:s}),"\n",(0,n.jsx)(o.h2,{id:"tooltip-children",children:"Tooltip children"}),"\n",(0,n.jsxs)(o.p,{children:["Tooltip requires an element or a component as a single child –\nstrings, fragments, numbers and multiple elements/components are not supported and ",(0,n.jsx)(o.strong,{children:"will throw error"}),".\nCustom components must provide a prop to get root element ref,\nall Mantine components support ref out of the box."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:'import { Badge, Tooltip } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <>\n      <Tooltip label="OK">\n        <button>Native button – ok</button>\n      </Tooltip>\n\n      <Tooltip label="OK">\n        <Badge>Mantine component – ok</Badge>\n      </Tooltip>\n\n      <Tooltip label="Throws">\n        Raw string, NOT OK – will throw error\n      </Tooltip>\n\n      {/* Number, NOT OK – will throw error */}\n      <Tooltip label="Throws">{2}</Tooltip>\n\n      <Tooltip label="Throws">\n        <>Fragment, NOT OK, will throw error</>\n      </Tooltip>\n\n      <Tooltip label="Throws">\n        <div>More that one node</div>\n        <div>NOT OK, will throw error</div>\n      </Tooltip>\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(o.h2,{id:"required-ref-prop",children:"Required ref prop"}),"\n",(0,n.jsxs)(o.p,{children:["Custom components that are rendered inside ",(0,n.jsx)(o.code,{children:"Tooltip"})," are required to support ",(0,n.jsx)(o.code,{children:"ref"})," prop:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"// Example of code that WILL NOT WORK\nimport { Tooltip } from '@mantine/core';\n\nfunction MyComponent() {\n  return <div>My component</div>;\n}\n\n// This will not work – MyComponent does not support ref\nfunction Demo() {\n  return (\n    <Tooltip label=\"Does not work\">\n      <MyComponent />\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"forwardRef"})," function to forward ref to root element:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"// Example of code that will work\nimport { forwardRef } from 'react';\nimport { Tooltip } from '@mantine/core';\n\nconst MyComponent = forwardRef<HTMLDivElement>((props, ref) => (\n  <div ref={ref} {...props}>\n    My component\n  </div>\n));\n\n// Works correctly – ref is forwarded\nfunction Demo() {\n  return (\n    <Tooltip label=\"Works fine\">\n      <MyComponent />\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"color",children:"Color"}),"\n",(0,n.jsx)(t,{data:a}),"\n",(0,n.jsx)(o.h2,{id:"offset",children:"Offset"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"offset"})," prop to a number to change tooltip position relative to the target element.\nThis way you can control tooltip offset on main axis only."]}),"\n",(0,n.jsx)(t,{data:d}),"\n",(0,n.jsxs)(o.p,{children:["To control offset on both axis, pass object with ",(0,n.jsx)(o.code,{children:"mainAxis"})," and ",(0,n.jsx)(o.code,{children:"crossAxis"})," properties:"]}),"\n",(0,n.jsx)(t,{data:p}),"\n",(0,n.jsx)(o.h2,{id:"arrow",children:"Arrow"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"withArrow"})," prop to add an arrow to the tooltip. Arrow is a ",(0,n.jsx)(o.code,{children:"div"})," element rotated with ",(0,n.jsx)(o.code,{children:"transform: rotate(45deg)"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"arrowPosition"})," prop determines how arrow is position relative to the target element when ",(0,n.jsx)(o.code,{children:"position"})," is set to ",(0,n.jsx)(o.code,{children:"*-start"})," and ",(0,n.jsx)(o.code,{children:"*-end"})," values on ",(0,n.jsx)(o.code,{children:"Popover"})," component.\nBy default, the value is ",(0,n.jsx)(o.code,{children:"center"})," – the arrow is positioned in the center of the target element if it is possible."]}),"\n",(0,n.jsxs)(o.p,{children:["If you change ",(0,n.jsx)(o.code,{children:"arrowPosition"})," to ",(0,n.jsx)(o.code,{children:"side"}),", then the arrow will be positioned on the side of the target element,\nand you will be able to control arrow offset with ",(0,n.jsx)(o.code,{children:"arrowOffset"})," prop. Note that when ",(0,n.jsx)(o.code,{children:"arrowPosition"})," is set to ",(0,n.jsx)(o.code,{children:"center"}),",\n",(0,n.jsx)(o.code,{children:"arrowOffset"})," prop is ignored."]}),"\n",(0,n.jsx)(t,{data:h}),"\n",(0,n.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t,{data:m}),"\n",(0,n.jsx)(o.h2,{id:"change-events",children:"Change events"}),"\n",(0,n.jsxs)(o.p,{children:["Events that trigger tooltip can be changed with ",(0,n.jsx)(o.code,{children:"events"})," prop, it accepts an object\nwith the following properties that determine which events will trigger tooltip:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"hover"})," – mouse hover event, ",(0,n.jsx)(o.code,{children:"true"})," by default"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"focus"})," – focus/blur events excluding clicks on the target element, ",(0,n.jsx)(o.code,{children:"false"})," by default"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"touch"})," – events for touchscreen devices, ",(0,n.jsx)(o.code,{children:"false"})," by default"]}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { Tooltip } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Tooltip\n      label=\"Tooltip\"\n      events={{ hover: true, focus: true, touch: false }}\n    >\n      <button>target</button>\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"multiline",children:"Multiline"}),"\n",(0,n.jsxs)(o.p,{children:["To enable multiline mode, set ",(0,n.jsx)(o.code,{children:"multiline"})," prop to enable line breaks and ",(0,n.jsx)(o.code,{children:"w"})," ",(0,n.jsx)(o.a,{href:"/styles/style-props",children:"style prop"})," to set tooltip width:"]}),"\n",(0,n.jsx)(t,{data:f}),"\n",(0,n.jsx)(o.h2,{id:"inline",children:"Inline"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"inline"})," prop to use ",(0,n.jsx)(o.code,{children:"Tooltip"})," with inline elements:"]}),"\n",(0,n.jsx)(t,{data:j}),"\n",(0,n.jsx)(o.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,n.jsxs)(o.p,{children:["Tooltip is built with ",(0,n.jsx)(o.a,{href:"/core/transition/",children:"Transition"})," component, it supports ",(0,n.jsx)(o.code,{children:"transitionProps"})," props:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { Button, Tooltip } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Tooltip\n      label=\"Tooltip with custom transition\"\n      transitionProps={{ transition: 'skew-up', duration: 300 }}\n    >\n      <Button>Button with tooltip</Button>\n    </Tooltip>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.p,{children:"All available premade transitions:"}),"\n",(0,n.jsx)(t,{data:g.b}),"\n",(0,n.jsx)(o.h2,{id:"close-and-open-delay",children:"Close and open delay"}),"\n",(0,n.jsxs)(o.p,{children:["You can delay tooltip open/close events by setting ",(0,n.jsx)(o.code,{children:"openDelay"})," and ",(0,n.jsx)(o.code,{children:"closeDelay"})," props in ms:"]}),"\n",(0,n.jsx)(t,{data:w}),"\n",(0,n.jsx)(o.h2,{id:"tooltip-delay-group",children:"Tooltip delay group"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Tooltip.Group"})," component can be used to sync open and close delays for multiple tooltips:"]}),"\n",(0,n.jsx)(t,{data:y}),"\n",(0,n.jsx)(o.h2,{id:"floating-tooltip",children:"Floating tooltip"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Tooltip.Floating"})," component has the same API as Tooltip component but tooltip will follow mouse:"]}),"\n",(0,n.jsx)(t,{data:B}),"\n",(0,n.jsx)(o.h2,{id:"custom-components-with-tooltip",children:"Custom components with Tooltip"}),"\n",(0,n.jsxs)(o.p,{children:["If you want to build a component that can be used with Tooltip use\n",(0,n.jsx)(o.a,{href:"https://reactjs.org/docs/forwarding-refs.html",children:"forwardRef"})," or other prop that will allow to get root element ref.\nThis logic is applied to Tooltip and Tooltip.Floating components:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:'import { forwardRef } from \'react\';\nimport { Tooltip } from \'@mantine/core\';\n\n// forwardRef function will allow to get root element ref\nconst MyBadge = forwardRef<HTMLDivElement, { color: string }>(\n  ({ color }, ref) => (\n    <div ref={ref} color={color}>\n      Badge\n    </div>\n  )\n);\n\n// other props can also be used\nfunction MyOtherBadge({\n  color,\n  innerRef,\n}: {\n  color: string;\n  innerRef?: React.ForwardedRef<HTMLDivElement>;\n}) {\n  return (\n    <div ref={innerRef} color={color}>\n      Badge\n    </div>\n  );\n}\n\nfunction Demo() {\n  return (\n    <>\n      <Tooltip label="Can be used as is">\n        <MyBadge color="red" />\n      </Tooltip>\n\n      <Tooltip label="refProp is required" refProp="innerRef">\n        <MyOtherBadge color="orange" />\n      </Tooltip>\n    </>\n  );\n}\n'})}),"\n",(0,n.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(o.p,{children:["Tooltip follows ",(0,n.jsx)(o.a,{href:"https://www.w3.org/TR/wai-aria-practices/#tooltip",children:"WAI-ARIA recommendations"}),":"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["Tooltip body has ",(0,n.jsx)(o.code,{children:'role="tooltip"'})," attribute"]}),"\n",(0,n.jsxs)(o.li,{children:["Target element has ",(0,n.jsx)(o.code,{children:"aria-describedby"})," attribute"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"Tooltip.Floating"})," is ignored by screen readers"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["By default, Tooltip is not triggered by focus events and thus users who use a screen reader\nor navigate with keyboard will not be able to get tooltip content. Set ",(0,n.jsx)(o.code,{children:"events"})," prop to enable\nfocus/blur tooltip events:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { Button, Tooltip } from '@mantine/core';\n\n// Tooltip will be visible for screen readers\nfunction Demo() {\n  return (\n    <Tooltip\n      label=\"Tooltip\"\n      events={{ hover: true, focus: true, touch: false }}\n    >\n      <Button>Button with tooltip</Button>\n    </Tooltip>\n  );\n}\n"})})]})}function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(C,{...e,children:(0,n.jsx)(A,{...e})})}},354:(e,o,t)=>{"use strict";t.d(o,{b:()=>c});var n=t(31085),i=t(93698),r=t(20942),l=t(2912),s=t(76644),a=t(56051);let c={type:"code",component:function(){let e=(0,i.H)(r.b).map(e=>(0,n.jsx)(l.m,{label:e,transitionProps:{transition:e,duration:300},children:(0,n.jsx)(s.E,{variant:"light",children:e})},e));return(0,n.jsx)(a.Y,{justify:"center",style:{cursor:"default"},children:e})}}},73368:(e,o,t)=>{"use strict";t.d(o,{K:()=>n,s:()=>i});let n=[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}],i=[{label:"side",value:"side"},{label:"center",value:"center"}]},76644:(e,o,t)=>{"use strict";t.d(o,{E:()=>m});var n=t(31085);t(14041);var i=t(33450),r=t(7098),l=t(51606),s=t(29686),a=t(69564),c=t(34056),d=t(2453),p={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let h={},u=(0,r.V)((e,{radius:o,color:t,gradient:n,variant:r,size:s,autoContrast:a})=>{let c=e.variantColorResolver({color:t||e.primaryColor,theme:e,gradient:n,variant:r||"filled",autoContrast:a});return{root:{"--badge-height":(0,i.YC)(s,"badge-height"),"--badge-padding-x":(0,i.YC)(s,"badge-padding-x"),"--badge-fz":(0,i.YC)(s,"badge-fz"),"--badge-radius":void 0===o?void 0:(0,i.nJ)(o),"--badge-bg":t||r?c.background:void 0,"--badge-color":t||r?c.color:void 0,"--badge-bd":t||r?c.border:void 0,"--badge-dot-color":"dot"===r?(0,l.r)(t,e):void 0}}}),m=(0,d.v)((e,o)=>{let t=(0,s.Y)("Badge",h,e),{classNames:i,className:r,style:l,styles:d,unstyled:m,vars:f,radius:x,color:b,gradient:j,leftSection:g,rightSection:T,children:w,variant:y,fullWidth:v,autoContrast:B,circle:D,mod:k,...C}=t,A=(0,a.I)({name:"Badge",props:t,classes:p,className:r,style:l,classNames:i,styles:d,unstyled:m,vars:f,varsResolver:u});return(0,n.jsxs)(c.a,{variant:y,mod:[{block:v,circle:D,"with-right-section":!!T,"with-left-section":!!g},k],...A("root",{variant:y}),ref:o,...C,children:[g&&(0,n.jsx)("span",{...A("section"),"data-position":"left",children:g}),(0,n.jsx)("span",{...A("label"),children:w}),T&&(0,n.jsx)("span",{...A("section"),"data-position":"right",children:T})]})});m.classes=p,m.displayName="@mantine/core/Badge"}},e=>{var o=o=>e(e.s=o);e.O(0,[67456,85954,90636,46593,38792],()=>o(64975)),_N_E=e.O()}]);