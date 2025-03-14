(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84675],{41039:(e,i,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/divider",function(){return t(40479)}])},40479:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>_});var r=t(31085),n=t(71184),s=t(93065);t(14041);var a=t(33450),o=t(7098),d=t(51606),l=t(29686),c=t(69564),m=t(34056),u=t(6754),x={root:"m_3eebeb36",label:"m_9e365f20"};let h={orientation:"horizontal"},p=(0,o.V)((e,{color:i,variant:t,size:r})=>({root:{"--divider-color":i?(0,d.r)(i,e):void 0,"--divider-border-style":t,"--divider-size":(0,a.YC)(r,"divider-size")}})),v=(0,u.P9)((e,i)=>{let t=(0,l.Y)("Divider",h,e),{classNames:n,className:s,style:a,styles:o,unstyled:d,vars:u,color:v,orientation:f,label:j,labelPosition:b,mod:D,...y}=t,g=(0,c.I)({name:"Divider",classes:x,props:t,className:s,style:a,classNames:n,styles:o,unstyled:d,vars:u,varsResolver:p});return(0,r.jsx)(m.a,{ref:i,mod:[{orientation:f,"with-label":!!j},D],...g("root"),...y,role:"separator",children:j&&(0,r.jsx)(m.a,{component:"span",mod:{position:b},...g("label"),children:j})})});v.classes=x,v.displayName="@mantine/core/Divider";let f={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.E,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,r.jsx)(v,{my:"md"}),(0,r.jsx)(s.E,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,r.jsx)(v,{my:"md"}),(0,r.jsx)(s.E,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"})]})},code:`
import { Text, Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>

      <Divider my="md" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>

      <Divider my="md" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>
    </>
  );
}

`,centered:!0,maxWidth:500},j={type:"code",code:`
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{my:"sm"}),(0,r.jsx)(v,{my:"sm",variant:"dashed"}),(0,r.jsx)(v,{my:"sm",variant:"dotted"})]})}};var b=t(5310),D=t(12129);let y={type:"code",code:`
import { Divider, Box, Anchor } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Divider my="xs" label="Label on the left" labelPosition="left" />
      <Divider my="xs" label="Label in the center" labelPosition="center" />
      <Divider my="xs" label="Label on the right" labelPosition="right" />
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <IconSearch size={12} />
            <Box ml={5}>Search results</Box>
          </>
        }
      />
      <Divider
        my="xs"
        label={
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            Link label
          </Anchor>
        }
      />
    </>
  );
}
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{my:"xs",label:"Label on the left",labelPosition:"left"}),(0,r.jsx)(v,{my:"xs",label:"Label in the center",labelPosition:"center"}),(0,r.jsx)(v,{my:"xs",label:"Label on the right",labelPosition:"right"}),(0,r.jsx)(v,{my:"xs",variant:"dashed",labelPosition:"center",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.A,{size:12}),(0,r.jsx)(m.a,{ml:5,children:"Search results"})]})}),(0,r.jsx)(v,{my:"xs",label:(0,r.jsx)(D.M,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"Link label"})})]})}},g={type:"code",code:`
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider size="xs" />
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size={10} />
    </>
  );
}
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{my:"xs",size:"xs"}),(0,r.jsx)(v,{my:"xs",size:"sm"}),(0,r.jsx)(v,{my:"xs",size:"md"}),(0,r.jsx)(v,{my:"xs",size:"lg"}),(0,r.jsx)(v,{my:"xs",size:"xl"}),(0,r.jsx)(v,{my:"xs",size:10})]})}};var q=t(56051);let z={type:"code",code:`
import { Divider, Group, Text } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Text>Label</Text>
      <Divider orientation="vertical" />
      <Text>Label</Text>
      <Divider size="sm" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="md" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="lg" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="xl" orientation="vertical" />
      <Text>Label</Text>
    </Group>
  );
}
`,component:function(){return(0,r.jsxs)(q.Y,{children:[(0,r.jsx)(s.E,{children:"Label"}),(0,r.jsx)(v,{orientation:"vertical"}),(0,r.jsx)(s.E,{children:"Label"}),(0,r.jsx)(v,{size:"sm",orientation:"vertical"}),(0,r.jsx)(s.E,{children:"Label"}),(0,r.jsx)(v,{size:"md",orientation:"vertical"}),(0,r.jsx)(s.E,{children:"Label"}),(0,r.jsx)(v,{size:"lg",orientation:"vertical"}),(0,r.jsx)(s.E,{children:"Label"}),(0,r.jsx)(v,{size:"xl",orientation:"vertical"}),(0,r.jsx)(s.E,{children:"Label"})]})}};var L=t(85954),T=t(38215);let A=(0,L.P)(T.XZ.Divider);function E(e){let i={h2:"h2",...(0,n.R)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:f}),"\n",(0,r.jsx)(i.h2,{id:"variants",children:"Variants"}),"\n",(0,r.jsx)(t,{data:j}),"\n",(0,r.jsx)(i.h2,{id:"with-label",children:"With label"}),"\n",(0,r.jsx)(t,{data:y}),"\n",(0,r.jsx)(i.h2,{id:"sizes",children:"Sizes"}),"\n",(0,r.jsx)(t,{data:g}),"\n",(0,r.jsx)(i.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsx)(t,{data:z})]})}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(A,{...e,children:(0,r.jsx)(E,{...e})})}}},e=>{var i=i=>e(e.s=i);e.O(0,[67456,85954,90636,46593,38792],()=>i(41039)),_N_E=e.O()}]);