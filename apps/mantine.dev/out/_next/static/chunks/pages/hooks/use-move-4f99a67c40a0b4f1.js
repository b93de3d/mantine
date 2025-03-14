(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65938],{76869:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-move",function(){return o(30534)}])},30534:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>b});var a=o(31085),n=o(71184),i=o(14041),r=o(56051),l=o(93065),s=o(37905),d=o(7235);let c={type:"code",code:`
import { useState } from 'react';
import { Group, Text, Code } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 400,
            height: 120,
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value.x * 100}% - 8px)\`,
              top: \`calc(\${value.y * 100}% - 8px)\`,
              width: 16,
              height: 16,
              backgroundColor: active ? 'var(--mantine-color-teal-7)' : 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>
      <Text ta="center" mt="sm">
        Values <Code>{\`{ x: \${Math.round(value.x * 100)}, y: \${Math.round(value.y * 100)} }\`}</Code>
      </Text>
    </>
  );
}`,component:function(){let[e,t]=(0,i.useState)({x:.2,y:.6}),{ref:o,active:n}=(0,d.f)(t);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Y,{justify:"center",children:(0,a.jsx)("div",{ref:o,style:{width:400,height:120,backgroundColor:"var(--mantine-color-blue-light)",position:"relative"},children:(0,a.jsx)("div",{style:{position:"absolute",left:`calc(${100*e.x}% - 8px)`,top:`calc(${100*e.y}% - 8px)`,width:16,height:16,backgroundColor:n?"var(--mantine-color-teal-7)":"var(--mantine-color-blue-7)"}})})}),(0,a.jsxs)(l.E,{ta:"center",mt:"sm",children:["Values ",(0,a.jsx)(s.C,{children:`{ x: ${Math.round(100*e.x)}, y: ${Math.round(100*e.y)} }`})]})]})}},u={type:"code",code:`
import { useState } from 'react';
import { Group, Text } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 400,
            height: 16,
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: \`\${value * 100}%\`,
              height: 16,
              backgroundColor: 'var(--mantine-color-blue-filled)',
              opacity: 0.7,
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value * 100}% - 8px)\`,
              top: 0,
              width: 16,
              height: 16,
              backgroundColor: 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>

      <Text ta="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}
`,component:function(){let[e,t]=(0,i.useState)(.2),{ref:o}=(0,d.f)(({x:e})=>t(e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Y,{justify:"center",children:(0,a.jsxs)("div",{ref:o,style:{width:400,height:16,backgroundColor:"var(--mantine-color-blue-light)",position:"relative"},children:[(0,a.jsx)("div",{style:{width:`${100*e}%`,height:16,backgroundColor:"var(--mantine-color-blue-filled)",opacity:.7}}),(0,a.jsx)("div",{style:{position:"absolute",left:`calc(${100*e}% - 8px)`,top:0,width:16,height:16,backgroundColor:"var(--mantine-color-blue-7)"}})]})}),(0,a.jsxs)(l.E,{ta:"center",mt:"sm",children:["Value: ",Math.round(100*e)]})]})}};var h=o(61914);let m={type:"code",code:`
import { useState } from 'react';
import { Group, Text } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ y }) => setValue(1 - y));

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 16,
            height: 120,
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              height: \`\${value * 100}%\`,
              width: 16,
              backgroundColor: 'var(--mantine-color-blue-filled)',
              opacity: 0.7,
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              bottom: \`calc(\${value * 100}% - 8px)\`,
              left: 0,
              width: 16,
              height: 16,
              backgroundColor: 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>

      <Text ta="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}`,component:function(){let[e,t]=(0,i.useState)(.2),{ref:o}=(0,d.f)(({y:e})=>t(1-e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Y,{justify:"center",children:(0,a.jsxs)("div",{ref:o,style:{width:16,height:120,backgroundColor:"var(--mantine-color-blue-light)",position:"relative"},children:[(0,a.jsx)("div",{style:{position:"absolute",bottom:0,height:`${100*e}%`,width:16,backgroundColor:"var(--mantine-color-blue-filled)",opacity:.7}}),(0,a.jsx)("div",{style:{position:"absolute",bottom:`calc(${100*e}% - 8px)`,left:0,width:16,height:16,backgroundColor:"var(--mantine-color-blue-7)"}})]})}),(0,a.jsxs)(l.E,{ta:"center",mt:"sm",children:["Value: ",Math.round(100*e)]})]})}},v={type:"code",code:`
import { useState } from 'react';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref } = useMove(setValue);

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: 300,
          height: 150,
          backgroundColor: 'red',
          position: 'relative',
        }}
      >
        {/* Gradient overlays */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(90deg, #fff, transparent)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(0deg, #000, transparent)',
          }}
        />

        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            left: \`calc(\${value.x * 100}% - 8px)\`,
            top: \`calc(\${value.y * 100}% - 8px)\`,
            width: 16,
            height: 16,
            border: '2px solid #fff',
            borderRadius: 16,
          }}
        />
      </div>
    </div>
  );
}`,component:function(){let[e,t]=(0,i.useState)({x:.2,y:.6}),{ref:o}=(0,d.f)(t);return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{ref:o,style:{width:300,height:150,backgroundColor:"red",position:"relative"},children:[(0,a.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"linear-gradient(90deg, #fff, transparent)"}}),(0,a.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"linear-gradient(0deg, #000, transparent)"}}),(0,a.jsx)("div",{style:{position:"absolute",left:`calc(${100*e.x}% - 8px)`,top:`calc(${100*e.y}% - 8px)`,width:16,height:16,border:"2px solid #fff",borderRadius:16}})]})})},centered:!0};var p=o(85954),x=o(38215);let f=(0,p.P)(x.XZ.useMove);function g(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"use-move"})," handles move behavior over any element:"]}),"\n",(0,a.jsx)(o,{data:c}),"\n",(0,a.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,a.jsxs)(t.p,{children:["The hook accepts a callback that is called when user moves pressed mouse over the given element\nand returns an object with ",(0,a.jsx)(t.code,{children:"ref"})," and active state:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useMove } from '@mantine/hooks';\n\nconst {\n  ref, // -> pass ref to target element\n  active, // -> is user changing something right now?\n} = useMove(({ x, y }) => console.log({ x, y }));\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"x"})," and ",(0,a.jsx)(t.code,{children:"y"})," values are always between ",(0,a.jsx)(t.code,{children:"0"})," and ",(0,a.jsx)(t.code,{children:"1"}),", you can use them to calculate value in your boundaries."]}),"\n",(0,a.jsx)(t.h2,{id:"horizontal-slider",children:"Horizontal slider"}),"\n",(0,a.jsx)(t.p,{children:"You can ignore changes for one of the axis:"}),"\n",(0,a.jsx)(o,{data:u,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"horizontal-slider-with-styles",children:"Horizontal slider with styles"}),"\n",(0,a.jsx)(o,{data:h.x}),"\n",(0,a.jsx)(t.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,a.jsxs)(t.p,{children:["Moving the slider down increases the value, to reverse that set value to ",(0,a.jsx)(t.code,{children:"1 - y"})," in your ",(0,a.jsx)(t.code,{children:"setValue"})," function:"]}),"\n",(0,a.jsx)(o,{data:m,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"color-picker",children:"Color picker"}),"\n",(0,a.jsx)(o,{data:v,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"clampusemoveposition",children:"clampUseMovePosition"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"clampUseMovePosition"})," function can be used to clamp ",(0,a.jsx)(t.code,{children:"x"})," and ",(0,a.jsx)(t.code,{children:"y"})," values to ",(0,a.jsx)(t.code,{children:"0-1"})," range.\nIt is useful when you want to use external events to change the value, for example changing value with keyboard arrows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { clampUseMovePosition } from '@mantine/hooks';\n\nclampUseMovePosition({ x: 0.5, y: 0.5 }); // -> { x: 0.5, y: 0.5 }\nclampUseMovePosition({ x: 1.5, y: 0.5 }); // -> { x: 1, y: 0.5 }\nclampUseMovePosition({ x: -0.5, y: 0.5 }); // -> { x: 0, y: 0.5 }\n"})}),"\n",(0,a.jsx)(t.h2,{id:"usemoveposition",children:"UseMovePosition"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"@mantine/hooks"})," exports ",(0,a.jsx)(t.code,{children:"UseMovePosition"})," type, it can be used as a type parameter for ",(0,a.jsx)(t.code,{children:"useState"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { UseMovePosition } from '@mantine/hooks';\n\nconst [value, setValue] = useState<UseMovePosition>({\n  x: 0.5,\n  y: 0.5,\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"interface UseMovePosition {\n  x: number;\n  y: number;\n}\n\ninterface useMoveHandlers {\n  onScrubStart?: () => void;\n  onScrubEnd?: () => void;\n}\n\nfunction useMove<T extends HTMLElement = HTMLDivElement>(\n  onChange: (value: UseMovePosition) => void,\n  handlers?: useMoveHandlers,\n  dir?: 'ltr' | 'rtl'\n): {\n  ref: React.RefObject<T>;\n  active: boolean;\n};\n"})})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(f,{...e,children:(0,a.jsx)(g,{...e})})}},21848:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","grip-vertical","IconGripVertical",[["path",{d:"M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]])},61914:(e,t,o)=>{"use strict";o.d(t,{x:()=>d});var a=o(31085),n=o(14041),i=o(21848),r=o(7235),l=o(68193),s={root:"m_1e8dea5f",track:"m_b34cb76e",filled:"m_9decab9f",empty:"m_b2774b70",thumb:"m_b34877f9",label:"m_b2d44517"};let d={type:"code",component:function(){let[e,t]=(0,n.useState)(.3),{ref:o}=(0,r.f)(({x:e})=>t((0,l.q)(e,.1,.9))),d=e<.2||e>.8;return(0,a.jsx)("div",{className:s.root,children:(0,a.jsxs)("div",{className:s.track,ref:o,children:[(0,a.jsx)("div",{className:s.filled,style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,a.jsx)("span",{className:s.label,"data-floating":d||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,a.jsx)("div",{className:s.empty,style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,a.jsx)("span",{className:s.label,"data-floating":d||void 0,children:((1-e)*100).toFixed(0)})}),(0,a.jsx)("div",{className:s.thumb,style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,a.jsx)(i.A,{stroke:1.5})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { IconGripVertical } from '@tabler/icons-react';
import { clamp, useMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(0.3);
  const { ref } = useMove(({ x }) => setValue(clamp(x, 0.1, 0.9)));
  const labelFloating = value < 0.2 || value > 0.8;

  return (
    <div className={classes.root}>
      <div className={classes.track} ref={ref}>
        <div
          className={classes.filled}
          style={{
            width: \`calc(\${value * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined} data-filled>
            {(value * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.empty}
          style={{
            width: \`calc(\${(1 - value) * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined}>
            {((1 - value) * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.thumb}
          style={{ left: \`calc(\${value * 100}% - var(--thumb-width) / 2)\` }}
        >
          <IconGripVertical stroke={1.5} />
        </div>
      </div>
    </div>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  padding-top: 20px;
}

.track {
  --thumb-width: 20px;
  --thumb-offset: 10px;

  position: relative;
  height: 60px;
  display: flex;
}

.filled {
  height: 100%;
  margin-right: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-blue-filled);
  display: flex;
  align-items: center;
  padding-inline: 10px;
}

.empty {
  height: 100%;
  margin-left: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-gray-1);
  display: flex;
  align-items: center;
  padding-inline: 10px;
  justify-content: flex-end;

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
  }
}

.thumb {
  position: absolute;
  background-color: var(--mantine-color-white);
  border: 1px solid var(--mantine-color-gray-2);
  border-radius: var(--mantine-radius-md);
  height: 100%;
  width: var(--thumb-width);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-gray-5);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
    color: var(--mantine-color-dark-0);
  }
}

.label {
  font-size: var(--mantine-font-size-xl);
  font-weight: 700;
  transition:
    transform 100ms ease,
    color 100ms ease;

  &[data-filled] {
    color: var(--mantine-color-white);
  }

  &[data-floating] {
    transform: translateY(-44px) translateX(-10px);
    color: var(--mantine-color-black);

    &:not([data-filled]) {
      transform: translateY(-44px) translateX(10px);
    }

    @mixin dark {
      color: var(--mantine-color-white);
    }
  }
}
`,language:"scss"}],maxWidth:500,centered:!0}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,85954,90636,46593,38792],()=>t(76869)),_N_E=e.O()}]);