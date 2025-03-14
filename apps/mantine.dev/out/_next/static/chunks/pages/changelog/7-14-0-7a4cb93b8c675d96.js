(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11965],{79871:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-14-0",function(){return t(76632)}])},76632:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>v});var a=t(31085),r=t(71184),l=t(31460),o=t(65823),i=t(55781),s=t(96182),c=t(24377),d=t(92718),u=t(85954),h=t(38215);let m=(0,u.P)(h.XZ.Changelog7140);function p(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"angleslider-component",children:"AngleSlider component"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/core/angle-slider/",children:"AngleSlider"})," component:"]}),"\n",(0,a.jsx)(t,{data:l.Z}),"\n",(0,a.jsx)(n.h2,{id:"radialbarchart-component",children:"RadialBarChart component"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/charts/radial-bar-chart/",children:"RadialBarChart"})," component:"]}),"\n",(0,a.jsx)(t,{data:o.W}),"\n",(0,a.jsx)(n.h2,{id:"funnelchart-component",children:"FunnelChart component"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/charts/funnel-chart/",children:"FunnelChart"})," component:"]}),"\n",(0,a.jsx)(t,{data:i.C}),"\n",(0,a.jsx)(n.h2,{id:"modalstack-and-drawerstack-components",children:"Modal.Stack and Drawer.Stack components"}),"\n",(0,a.jsxs)(n.p,{children:["New ",(0,a.jsx)(n.a,{href:"/core/modal/",children:"Modal.Stack"})," and ",(0,a.jsx)(n.a,{href:"/core/drawer",children:"Drawer.Stack"})," components simplify usage of multiple modals/drawers at the same time."]}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"Modal.Stack"})," component to render multiple modals at the same time.\n",(0,a.jsx)(n.code,{children:"Modal.Stack"})," keeps track of opened modals, manages z-index values, focus trapping\nand ",(0,a.jsx)(n.code,{children:"closeOnEscape"})," behavior. ",(0,a.jsx)(n.code,{children:"Modal.Stack"})," is designed to be used with ",(0,a.jsx)(n.code,{children:"useModalsStack"})," hook."]}),"\n",(0,a.jsxs)(n.p,{children:["Differences from using multiple ",(0,a.jsx)(n.code,{children:"Modal"})," components:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Modal.Stack"})," manages z-index values – modals that are opened later will always have higher z-index value disregarding their order in the DOM"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Modal.Stack"})," disables focus trap and ",(0,a.jsx)(n.code,{children:"Escape"})," key handling for all modals except the one that is currently opened"]}),"\n",(0,a.jsxs)(n.li,{children:["Modals that are not currently opened are present in the DOM but are hidden with ",(0,a.jsx)(n.code,{children:"opacity: 0"})," and ",(0,a.jsx)(n.code,{children:"pointer-events: none"})]}),"\n",(0,a.jsx)(n.li,{children:"Only one overlay is rendered at a time"}),"\n"]}),"\n",(0,a.jsx)(t,{data:s.t}),"\n",(0,a.jsx)(n.h2,{id:"usemodalsstackusedrawersstack-hooks",children:"useModalsStack/useDrawersStack hooks"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"useModalsStack"})," hook provides an easy way to control multiple modals at the same time.\nIt accepts an array of unique modals ids and returns an object with the following properties:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"interface ModalStackReturnType<T extends string> {\n  // Current opened state of each modal\n  state: Record<T, boolean>;\n\n  // Opens modal with the given id\n  open: (id: T) => void;\n\n  // Closes modal with the given id\n  close: (id: T) => void;\n\n  // Toggles modal with the given id\n  toggle: (id: T) => void;\n\n  // Closes all modals within the stack\n  closeAll: () => void;\n\n  // Returns props for modal with the given id\n  register: (id: T) => {\n    opened: boolean;\n    onClose: () => void;\n    stackId: T;\n  };\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example of using ",(0,a.jsx)(n.code,{children:"useModalsStack"})," with ",(0,a.jsx)(n.code,{children:"Modal"})," component:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { Modal, useModalsStack } from '@mantine/core';\n\nfunction Demo() {\n  const stack = useModalsStack(['first', 'second']);\n\n  return (\n    <>\n      <Modal {...stack.register('first')}>First</Modal>\n      <Modal {...stack.register('second')}>Second</Modal>\n      <Button onClick={() => stack.open('first')}>Open first</Button>\n    </>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"restrict-slider-selection-to-marks",children:"Restrict Slider selection to marks"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/core/slider",children:"Slider"})," component now supports ",(0,a.jsx)(n.code,{children:"restrictToMarks"})," prop that restricts slider value to marks only.\nNote that in this case ",(0,a.jsx)(n.code,{children:"step"})," prop is ignored:"]}),"\n",(0,a.jsx)(t,{data:c.A}),"\n",(0,a.jsx)(n.h2,{id:"barchart-svg-pattern-fill",children:"BarChart SVG pattern fill"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/charts/bar-chart",children:"BarChart"})," now can be used with SVG pattern fill:"]}),"\n",(0,a.jsx)(t,{data:d.R}),"\n",(0,a.jsx)(n.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/nested-inline-styles",children:"Can I use nested inline styles with Mantine components?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/postcss-fns-inline",children:"Can I use PostCSS function in inline styles?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/carousel-missing-styles",children:"Why my Carousel slides are in vertical orientation?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/transparent-buttons",children:"My buttons are transparent and the background is visible only on hover, what is wrong?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/primary-virtual-color",children:"Can I have different primary color for light and dark color schemes?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/body-background",children:"How can I change body background color?"})," question"]}),"\n",(0,a.jsxs)(n.li,{children:["New ",(0,a.jsx)(n.a,{href:"https://help.mantine.dev/q/nested-popover-closes",children:"My Popover dropdown closes when I click on the dropdown of nested Popover"})," question"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/core/tree/",children:"useTree"})," hook now accepts ",(0,a.jsx)(n.code,{children:"onNodeExpand"})," and ",(0,a.jsx)(n.code,{children:"onNodeCollapse"})," callbacks"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/core/tree/",children:"useTree"})," hook now returns additional ",(0,a.jsx)(n.code,{children:"checkAllNodes"}),", ",(0,a.jsx)(n.code,{children:"uncheckAllNodes"})," and ",(0,a.jsx)(n.code,{children:"setCheckedState"})," handlers"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/core/tree",children:"Tree"})," component now includes ",(0,a.jsx)(n.code,{children:"getTreeExpandedState"})," to generate expanded state based on the tree data"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/form/use-form",children:"use-form"})," now supports ",(0,a.jsx)(n.code,{children:"form.replaceListItem"})," handler to replace list item at given index"]}),"\n"]})]})}function v(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(m,{...e,children:(0,a.jsx)(p,{...e})})}},55781:(e,n,t)=>{"use strict";t.d(n,{C:()=>o});var a=t(31085),r=t(68694),l=t(67984);let o={type:"code",component:function(){return(0,a.jsx)(r.v,{data:l.p})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:l.k,language:"tsx",fileName:"data.ts"}],centered:!0}},67984:(e,n,t)=>{"use strict";t.d(n,{k:()=>r,p:()=>a});let a=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],r=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`},65823:(e,n,t)=>{"use strict";t.d(n,{W:()=>o});var a=t(31085),r=t(16664),l=t(13232);let o={type:"code",component:function(){return(0,a.jsx)(r.D,{data:l.p,dataKey:"value",h:280,withLabels:!0})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={280} withLabels />;
}
`,language:"tsx"},{fileName:"data.ts",code:l.k,language:"tsx"}]}},13232:(e,n,t)=>{"use strict";t.d(n,{k:()=>r,p:()=>a});let a=[{name:"18-24",value:31.47,color:"blue.7"},{name:"25-29",value:26.69,color:"orange.6"},{name:"30-34",value:15.69,color:"yellow.7"},{name:"35-39",value:8.22,color:"cyan.6"},{name:"40-49",value:8.63,color:"green"},{name:"50+",value:2.63,color:"pink"},{name:"unknown",value:6.67,color:"gray"}],r=`
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
`},31460:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var a=t(31085),r=t(56051),l=t(91401);let o={type:"code",component:function(){return(0,a.jsxs)(r.Y,{p:"lg",gap:50,children:[(0,a.jsx)(l.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,a.jsx)(l.P,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0\xb0"},{value:45,label:"45\xb0"},{value:90,label:"90\xb0"},{value:135,label:"135\xb0"},{value:180,label:"180\xb0"},{value:225,label:"225\xb0"},{value:270,label:"270\xb0"},{value:315,label:"315\xb0"}]})]})},code:`
import { AngleSlider, Group } from '@mantine/core';

function Demo() {
  return (
    <Group p="lg" gap={50}>
      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => \`\${value}\xb0\`}
        size={100}
        restrictToMarks
        marks={[
          { value: 0 },
          { value: 45 },
          { value: 90 },
          { value: 135 },
          { value: 180 },
          { value: 225 },
          { value: 270 },
          { value: 315 },
        ]}
      />

      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => \`\${value}\xb0\`}
        size={100}
        marks={[
          { value: 0, label: '0\xb0' },
          { value: 45, label: '45\xb0' },
          { value: 90, label: '90\xb0' },
          { value: 135, label: '135\xb0' },
          { value: 180, label: '180\xb0' },
          { value: 225, label: '225\xb0' },
          { value: 270, label: '270\xb0' },
          { value: 315, label: '315\xb0' },
        ]}
      />
    </Group>
  );
}
`,centered:!0}},96182:(e,n,t)=>{"use strict";t.d(n,{t:()=>s});var a=t(31085),r=t(97915),l=t(19042),o=t(56051),i=t(52022);let s={type:"code",code:`
import { Button, Group, Modal, useModalsStack } from '@mantine/core';

function Demo() {
  const stack = useModalsStack(['delete-page', 'confirm-action', 'really-confirm-action']);

  return (
    <>
      <Modal.Stack>
        <Modal {...stack.register('delete-page')} title="Delete this page?">
          Are you sure you want to delete this page? This action cannot be undone.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('confirm-action')} color="red">
              Delete
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('confirm-action')} title="Confirm action">
          Are you sure you want to perform this action? This action cannot be undone. If you are
          sure, press confirm button below.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('really-confirm-action')} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('really-confirm-action')} title="Really confirm action">
          Jokes aside. You have confirmed this action. This is your last chance to cancel it. After
          you press confirm button below, action will be performed and cannot be undone. For real
          this time. Are you sure you want to proceed?
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={stack.closeAll} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>
      </Modal.Stack>

      <Button variant="default" onClick={() => stack.open('delete-page')}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let e=(0,r.e)(["delete-page","confirm-action","really-confirm-action"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.a.Stack,{children:[(0,a.jsxs)(l.a,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,a.jsxs)(o.Y,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(i.$,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(i.$,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,a.jsxs)(l.a,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,a.jsxs)(o.Y,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(i.$,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(i.$,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,a.jsxs)(l.a,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,a.jsxs)(o.Y,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(i.$,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(i.$,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,a.jsx)(i.$,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open modal"})]})}}},24377:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});var a=t(31085),r=t(75390),l=t(84281),o=t(1784);let i={type:"code",component:function(){return(0,a.jsxs)(r.B,{children:[(0,a.jsx)(l.A,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,n)=>({value:25*n}))}),(0,a.jsx)(o.F,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Slider
        restrictToMarks
        defaultValue={25}
        marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
      />

      <RangeSlider
        restrictToMarks
        defaultValue={[5, 15]}
        marks={[
          { value: 5 },
          { value: 15 },
          { value: 25 },
          { value: 35 },
          { value: 70 },
          { value: 80 },
          { value: 90 },
        ]}
      />
    </Stack>
  );
}
`,centered:!0,maxWidth:400}},68694:(e,n,t)=>{"use strict";t.d(n,{v:()=>w});var a=t(31085),r=t(79874),l=t(6328),o=t(7768),i=t(73001),s=t(87183),c=t(37662),d=t(7098),u=t(51606),h=t(39735),m=t(6754),p=t(29686),v=t(92408),f=t(69564),x=t(36456),j=t(34056),g=t(93581),k={root:"m_80d531e7"};let b={withTooltip:!0,size:300,strokeWidth:1,withLabels:!1,labelsPosition:"right",tooltipDataSource:"all"},y=(0,d.V)((e,{strokeColor:n,labelColor:t,size:a})=>({root:{"--chart-stroke-color":n?(0,u.r)(n,e):void 0,"--chart-labels-color":t?(0,u.r)(t,e):void 0,"--chart-size":(0,h.D)(a)}})),w=(0,m.P9)((e,n)=>{let t=(0,p.Y)("FunnelChart",b,e),{classNames:d,className:h,style:m,styles:w,unstyled:C,vars:M,data:A,withTooltip:S,tooltipAnimationDuration:D,tooltipProps:E,strokeWidth:T,withLabels:N,size:R,valueFormatter:B,children:L,funnelChartProps:q,funnelProps:_,labelsPosition:z,tooltipDataSource:I,...F}=t,P=(0,v.xd)(),O=(0,f.I)({name:"FunnelChart",classes:k,props:t,className:h,style:m,classNames:d,styles:w,unstyled:C,vars:M,varsResolver:y}),{resolvedClassNames:Y,resolvedStyles:$}=(0,x.Y)({classNames:d,styles:w,props:t});return(0,a.jsx)(j.a,{ref:n,size:R,...O("root"),...F,children:(0,a.jsx)(r.u,{children:(0,a.jsxs)(l.v,{...q,children:[(0,a.jsxs)(o.r,{data:A,dataKey:"value",isAnimationActive:!1,stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:T,..._,children:[N&&(0,a.jsx)(i.Z,{position:z,fill:"inside"===z?"var(--chart-labels-color, var(--mantine-color-white))":"var(--chart-labels-color, var(--mantine-color-dimmed))",stroke:"none",fontFamily:"var(--mantine-font-family)",fontSize:14,dataKey:e=>"function"==typeof B?B(e.value):e.value}),A.map((e,n)=>(0,a.jsx)(s.f,{fill:(0,u.r)(e.color,P),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:T},n))]}),S&&(0,a.jsx)(c.m,{animationDuration:D,isAnimationActive:!1,content:({payload:e})=>(0,a.jsx)(g.I,{payload:A,classNames:Y,styles:$,type:"radial",segmentId:"segment"===I?e?.[0]?.name:void 0,valueFormatter:B}),...E}),L]})})})});w.displayName="@mantine/charts/FunnelChart",w.classes=k},16664:(e,n,t)=>{"use strict";t.d(n,{D:()=>M});var a=t(31085),r=t(14041),l=t(79874),o=t(17766),i=t(4703),s=t(23361),c=t(37662),d=t(7098),u=t(51606),h=t(6754),m=t(29686),p=t(69564),v=t(92408),f=t(36456),x=t(34056),j=t(58120),g=t(56051),k=t(14318),b=t(50571),y={root:"m_cd2bd9e5",tooltip:"m_6bcc3420"};let w={barSize:20,startAngle:90,endAngle:-270,withBackground:!0,withTooltip:!0},C=(0,d.V)((e,{emptyBackgroundColor:n})=>({root:{"--chart-empty-background":n?(0,u.r)(n,e):void 0}})),M=(0,h.P9)((e,n)=>{let t=(0,m.Y)("RadialBarChart",w,e),{classNames:d,className:h,style:M,styles:A,unstyled:S,vars:D,data:E,barSize:T,withBackground:N,dataKey:R,radialBarProps:B,radialBarChartProps:L,withLabels:q,withLegend:_,legendProps:z,withTooltip:I,tooltipProps:F,startAngle:P,endAngle:O,...Y}=t,[$,G]=(0,r.useState)(null),V=(0,p.I)({name:"RadialBarChart",classes:y,props:t,className:h,style:M,classNames:d,styles:A,unstyled:S,vars:D,varsResolver:C}),H=(0,v.xd)(),K=E.map(({color:e,...n})=>{let t=(0,u.r)(e,H);return{...n,fill:t,fillOpacity:$?$===n.name?n.opacity||1:.05:n.opacity||1}}),{resolvedClassNames:X,resolvedStyles:Z}=(0,f.Y)({classNames:d,styles:A,props:t});return(0,a.jsx)(x.a,{ref:n,...V("root"),...Y,children:(0,a.jsx)(l.u,{children:(0,a.jsxs)(o.D,{margin:{top:0,bottom:0,left:0,right:0},innerRadius:"10%",outerRadius:"100%",cx:"50%",cy:"50%",barSize:T,startAngle:P,endAngle:O,data:K,...L,children:[(0,a.jsx)(i.Z,{label:q?{position:"insideStart",fill:"var(--mantine-color-white)",fontSize:12}:void 0,background:N?{fill:"var(--chart-empty-background)"}:void 0,dataKey:R,isAnimationActive:!1,...B}),_&&(0,a.jsx)(s.s,{verticalAlign:"bottom",content:e=>(0,a.jsx)(b._,{payload:e.payload?.map(e=>({...e,dataKey:e.payload?.name})),onHighlight:G,legendPosition:z?.verticalAlign||"bottom",classNames:X,styles:Z,centered:!0}),...z}),I&&(0,a.jsx)(c.m,{animationDuration:0,isAnimationActive:!1,cursor:{stroke:"var(--chart-cursor-color)"},content:({payload:e})=>(0,a.jsxs)(j.t,{...V("tooltip"),children:[(0,a.jsxs)(g.Y,{gap:"sm",children:[(0,a.jsx)(k.q,{color:e?.[0]?.payload.fill,size:12,withShadow:!1}),(0,a.jsx)("span",{children:e?.[0]?.payload.name})]}),(0,a.jsx)("span",{children:e?.[0]?.payload[R]})]}),...F})]})})})});M.displayName="@mantine/core/RadialBarChart",M.classes=y},91401:(e,n,t)=>{"use strict";t.d(n,{P:()=>j});var a=t(31085),r=t(14041),l=t(82307),o=t(4235),i=t(34321),s=t(39735),c=t(96532),d=t(7098),u=t(29686),h=t(69564),m=t(34056),p=t(6754),v={root:"m_48204f9b",marks:"m_bb9cdbad",mark:"m_481dd586",thumb:"m_bc02ba3d",label:"m_bb8e875b"};let f={step:1,withLabel:!0},x=(0,d.V)((e,{size:n,thumbSize:t})=>({root:{"--slider-size":(0,s.D)(n),"--thumb-size":(0,s.D)(t)}})),j=(0,p.P9)((e,n)=>{let t=(0,u.Y)("AngleSlider",f,e),{classNames:s,className:d,style:p,styles:j,unstyled:g,vars:k,step:b,value:y,defaultValue:w,onChange:C,onMouseDown:M,withLabel:A,marks:S,thumbSize:D,restrictToMarks:E,formatLabel:T,onChangeEnd:N,disabled:R,onTouchStart:B,name:L,hiddenInputProps:q,"aria-label":_,tabIndex:z,onScrubStart:I,onScrubEnd:F,...P}=t,[O,Y]=(0,l.Z)({value:y,defaultValue:w,finalValue:0,onChange:C}),{ref:$}=(0,o.R)(e=>{$.current&&Y(E&&Array.isArray(S)?(0,c.k)(e,S.map(e=>e.value)):e)},{step:b,onChangeEnd:N,onScrubStart:I,onScrubEnd:F}),G=(0,h.I)({name:"AngleSlider",classes:v,props:t,className:d,style:p,classNames:s,styles:j,unstyled:g,vars:k,varsResolver:x}),V=S?.map((e,n)=>r.createElement("div",{...G("mark",{style:{"--angle":`${e.value}deg`}}),"data-label":e.label||void 0,key:n}));return(0,a.jsxs)(m.a,{ref:(0,i.pc)(n,$),...G("root",{focusable:!0}),...P,children:[V&&V.length>0&&(0,a.jsx)("div",{...G("marks"),children:V}),A&&(0,a.jsx)("div",{...G("label"),children:"function"==typeof T?T(O):O}),(0,a.jsx)("div",{tabIndex:z??(R?-1:0),role:"slider","aria-valuemax":360,"aria-valuemin":0,"aria-valuenow":O,onKeyDown:e=>{if(!R){if("ArrowLeft"===e.key||"ArrowDown"===e.key){let e=(0,o.i)(O-b,b);Y(e),N?.(e)}if("ArrowRight"===e.key||"ArrowUp"===e.key){let e=(0,o.i)(O+b,b);Y(e),N?.(e)}"Home"===e.key&&(Y(0),N?.(0)),"End"===e.key&&(Y(359),N?.(359))}},"aria-label":_,...G("thumb",{style:{transform:`rotate(${O}deg)`}})}),(0,a.jsx)("input",{type:"hidden",name:L,value:O,...q})]})});j.displayName="@mantine/core/AngleSlider",j.classes=v},97915:(e,n,t)=>{"use strict";t.d(n,{Q:()=>l,e:()=>r});var a=t(14041);function r(e){let n=e.reduce((e,n)=>({...e,[n]:!1}),{}),[t,r]=(0,a.useState)(n),l=(0,a.useCallback)(e=>{r(n=>({...n,[e]:!0}))},[]),o=(0,a.useCallback)(e=>r(n=>({...n,[e]:!1})),[]),i=(0,a.useCallback)(e=>r(n=>({...n,[e]:!n[e]})),[]),s=(0,a.useCallback)(()=>r(n),[]),c=(0,a.useCallback)(e=>({opened:t[e],onClose:()=>o(e),stackId:e}),[t]);return{state:t,open:l,close:o,closeAll:s,toggle:i,register:c}}let l=r},1784:(e,n,t)=>{"use strict";t.d(n,{F:()=>D});var a=t(31085),r=t(14041),l=t(82307),o=t(7235),i=t(39735),s=t(33450),c=t(96532),d=t(7098),u=t(51606),h=t(29686),m=t(69564),p=t(6754),v=t(46746),f=t(96448),x=t(5861),j=t(60881),g=t(36247),k=t(7139),b=t(27064),y=t(48093),w=t(46315),C=t(94023),M=t(85212);let A=(0,d.V)((e,{size:n,color:t,thumbSize:a,radius:r})=>({root:{"--slider-size":(0,s.YC)(n,"slider-size"),"--slider-color":t?(0,u.r)(t,e):void 0,"--slider-radius":void 0===r?void 0:(0,s.nJ)(r),"--slider-thumb-size":void 0!==a?(0,i.D)(a):"calc(var(--slider-size) * 2)"}})),S={min:0,max:100,minRange:10,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},labelAlwaysOn:!1,showLabelOnHover:!0,disabled:!1,scale:e=>e},D=(0,p.P9)((e,n)=>{let t=(0,h.Y)("RangeSlider",S,e),{classNames:i,styles:s,value:d,onChange:u,onChangeEnd:p,size:D,min:E,max:T,minRange:N,maxRange:R,step:B,precision:L,defaultValue:q,name:_,marks:z,label:I,labelTransitionProps:F,labelAlwaysOn:P,thumbFromLabel:O,thumbToLabel:Y,showLabelOnHover:$,thumbChildren:G,disabled:V,unstyled:H,scale:K,inverted:X,className:Z,style:U,vars:W,hiddenInputProps:J,restrictToMarks:Q,thumbProps:ee,...en}=t,et=(0,m.I)({name:"Slider",props:t,classes:M.A,classNames:i,className:Z,styles:s,style:U,vars:W,varsResolver:A,unstyled:H}),{dir:ea}=(0,v.jH)(),[er,el]=(0,r.useState)(-1),[eo,ei]=(0,r.useState)(!1),[es,ec]=(0,l.Z)({value:d,defaultValue:q,finalValue:[E,T],onChange:u}),ed=(0,r.useRef)(es),eu=(0,r.useRef)([]),eh=(0,r.useRef)(void 0),em=[(0,y.E)({value:es[0],min:E,max:T}),(0,y.E)({value:es[1],min:E,max:T})],ep=L??(0,w.X)(B),ev=e=>{ec(e),ed.current=e};(0,r.useEffect)(()=>{Array.isArray(d)&&(ed.current=d)},Array.isArray(d)?[d[0],d[1]]:[null,null]);let ef=(e,n,t)=>{if(-1===n)return;let a=[...ed.current];if(Q&&z){let t=(0,c.k)(e,z.map(e=>e.value)),r=a[n];a[n]=t;let l=0===n?1:0,o=(0,C.rq)(z),i=(0,C.HE)(z);t===o&&a[l]===o?a[n]=r:t===i&&a[l]===i?a[n]=r:t===a[l]&&(r>a[l]?a[l]=(0,C.Mh)(t,z):a[l]=(0,C.C8)(t,z))}else a[n]=e,0===n&&(e>a[1]-(N-1e-9)&&(a[1]=Math.min(e+N,T)),e>(T-(N-1e-9)||E)&&(a[n]=ed.current[n]),a[1]-e>R&&(a[1]=e+R)),1===n&&(e<a[0]+N&&(a[0]=Math.max(e-N,E)),e<a[0]+N&&(a[n]=ed.current[n]),e-a[0]>R&&(a[0]=e-R));if(a[0]=(0,b.q)(a[0],ep),a[1]=(0,b.q)(a[1],ep),a[0]>a[1]){let e=a[0];a[0]=a[1],a[1]=e}ev(a),t&&p?.(ed.current)},ex=e=>{V||ef((0,k.c)({value:e,min:E,max:T,step:B,precision:ep}),eh.current,!1)},{ref:ej,active:eg}=(0,o.f)(({x:e})=>ex(e),{onScrubEnd:()=>!V&&p?.(ed.current)},ea),ek=e=>{ej.current.focus();let n=ej.current.getBoundingClientRect(),t=function(e){return"TouchEvent"in window&&e instanceof window.TouchEvent?e.touches[0].clientX:e.clientX}(e.nativeEvent),a=(0,k.c)({value:t-n.left,max:T,min:E,step:B,containerWidth:n.width}),r=Math.abs(es[0]-a)>Math.abs(es[1]-a)?1:0,l="ltr"===ea?r:1===r?0:1;eh.current=l},eb=()=>1!==er&&0!==er?(el(0),0):er,ey={max:T,min:E,size:D,labelTransitionProps:F,labelAlwaysOn:P,onBlur:()=>el(-1)},ew=Array.isArray(G);return(0,a.jsx)(f.h,{value:{getStyles:et},children:(0,a.jsxs)(x.g,{...en,size:D,ref:n,disabled:V,children:[(0,a.jsxs)(g.C,{offset:em[0],marksOffset:es[0],filled:em[1]-em[0],marks:z,inverted:X,min:E,max:T,value:es[1],disabled:V,containerProps:{ref:ej,onMouseEnter:$?()=>ei(!0):void 0,onMouseLeave:$?()=>ei(!1):void 0,onTouchStartCapture:ek,onTouchEndCapture:()=>{eh.current=-1},onMouseDownCapture:ek,onMouseUpCapture:()=>{eh.current=-1},onKeyDownCapture:e=>{if(!V)switch(e.key){case"ArrowUp":{e.preventDefault();let n=eb();eu.current[n].focus();let t=Q&&z?(0,C.C8)(ed.current[n],z):Math.min(Math.max(ed.current[n]+B,E),T);ef((0,b.q)(t,ep),n,!0);break}case"ArrowRight":{e.preventDefault();let n=eb();eu.current[n].focus();let t=Q&&z?("rtl"===ea?C.Mh:C.C8)(ed.current[n],z):Math.min(Math.max("rtl"===ea?ed.current[n]-B:ed.current[n]+B,E),T);ef((0,b.q)(t,ep),n,!0);break}case"ArrowDown":{e.preventDefault();let n=eb();eu.current[n].focus();let t=Q&&z?(0,C.Mh)(ed.current[n],z):Math.min(Math.max(ed.current[n]-B,E),T);ef((0,b.q)(t,ep),n,!0);break}case"ArrowLeft":{e.preventDefault();let n=eb();eu.current[n].focus();let t=Q&&z?("rtl"===ea?C.C8:C.Mh)(ed.current[n],z):Math.min(Math.max("rtl"===ea?ed.current[n]+B:ed.current[n]-B,E),T);ef((0,b.q)(t,ep),n,!0)}}}},children:[(0,a.jsx)(j.z,{...ey,value:K(es[0]),position:em[0],dragging:eg,label:"function"==typeof I?I((0,b.q)(K(es[0]),ep)):I,ref:e=>{eu.current[0]=e},thumbLabel:O,onMouseDown:()=>void(eh.current=0),onFocus:()=>el(0),showLabelOnHover:$,isHovered:eo,disabled:V,...ee?.(0),children:ew?G[0]:G}),(0,a.jsx)(j.z,{...ey,thumbLabel:Y,value:K(es[1]),position:em[1],dragging:eg,label:"function"==typeof I?I((0,b.q)(K(es[1]),ep)):I,ref:e=>{eu.current[1]=e},onMouseDown:()=>void(eh.current=1),onFocus:()=>el(1),showLabelOnHover:$,isHovered:eo,disabled:V,...ee?.(1),children:ew?G[1]:G})]}),(0,a.jsx)("input",{type:"hidden",name:`${_}_from`,value:es[0],...J}),(0,a.jsx)("input",{type:"hidden",name:`${_}_to`,value:es[1],...J})]})})});D.classes=M.A,D.displayName="@mantine/core/RangeSlider"},4235:(e,n,t)=>{"use strict";t.d(n,{R:()=>o,i:()=>l});var a=t(14041),r=t(68193);function l(e,n){var t,a;let l=(0,r.q)(e,0,360),o=Math.ceil(l/n),i=Math.round(l/n);return t=o>=l/n?o*n==360?0:o*n:i*n,a=n.toString().split(".")[1]?.length||0,parseFloat(t.toFixed(a))}function o(e,{step:n=.01,onChangeEnd:t,onScrubStart:r,onScrubEnd:i}={}){let s=(0,a.useRef)(null),c=(0,a.useRef)(!1),[d,u]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{c.current=!0},[]),(0,a.useEffect)(()=>{let a=s.current,o=(r,o=!1)=>{if(a){a.style.userSelect="none";let i=l(function(e,n){let t=function(e){let n=e.getBoundingClientRect();return[n.left+n.width/2,n.top+n.height/2]}(n);return 360-(180/Math.PI*Math.atan2(e[0]-t[0],e[1]-t[1])+180)}([r.clientX,r.clientY],a),n||1);e(i),o&&t?.(i)}},c=()=>{r?.(),u(!0),document.addEventListener("mousemove",m,!1),document.addEventListener("mouseup",p,!1),document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",f,!1)},d=()=>{i?.(),u(!1),document.removeEventListener("mousemove",m,!1),document.removeEventListener("mouseup",p,!1),document.removeEventListener("touchmove",v,!1),document.removeEventListener("touchend",f,!1)},h=e=>{c(),o(e)},m=e=>{o(e)},p=e=>{o(e,!0),d()},v=e=>{e.preventDefault(),o(e.touches[0])},f=e=>{o(e.changedTouches[0],!0),d()},x=e=>{e.preventDefault(),c(),o(e.touches[0])};return a?.addEventListener("mousedown",h),a?.addEventListener("touchstart",x,{passive:!1}),()=>{a&&(a.removeEventListener("mousedown",h),a.removeEventListener("touchstart",x))}},[e]),{ref:s,active:d}}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,53417,28054,46828,6328,17766,85954,17650,25883,90636,46593,38792],()=>n(79871)),_N_E=e.O()}]);