(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3045],{21297:(e,r,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/hover-card",function(){return o(84282)}])},84282:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>Y});var t=o(31085),n=o(71184),a=o(56051),s=o(92051),i=o(14041),d=o(29686),l=o(26424),c=o(35764);let[u,h]=(0,o(59852).F)("HoverCard component was not found in the tree");var p=o(82050);let v={};function m(e){let{children:r,onMouseEnter:o,onMouseLeave:n,...a}=(0,d.Y)("HoverCardDropdown",v,e),s=h(),i=(0,p.T)(o,s.openDropdown),l=(0,p.T)(n,s.closeDropdown);return(0,t.jsx)(c.A.Dropdown,{onMouseEnter:i,onMouseLeave:l,...a,children:r})}m.displayName="@mantine/core/HoverCardDropdown";var x=o(40880);let w={refProp:"ref"},C=(0,i.forwardRef)((e,r)=>{let{children:o,refProp:n,eventPropsWrapperName:a,...s}=(0,d.Y)("HoverCardTarget",w,e);if(!(0,x.v)(o))throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let l=h(),u={onMouseEnter:(0,p.T)(o.props.onMouseEnter,l.openDropdown),onMouseLeave:(0,p.T)(o.props.onMouseLeave,l.closeDropdown)};return(0,t.jsx)(c.A.Target,{refProp:n,ref:r,...s,children:(0,i.cloneElement)(o,a?{[a]:u}:u)})});C.displayName="@mantine/core/HoverCardTarget";let j={openDelay:0,closeDelay:150,initiallyOpened:!1};function g(e){let{children:r,onOpen:o,onClose:n,openDelay:a,closeDelay:i,initiallyOpened:h,...p}=(0,d.Y)("HoverCard",j,e),[v,{open:m,close:x}]=(0,s.j)(h,{onClose:n,onOpen:o}),{openDropdown:w,closeDropdown:C}=(0,l.K)({open:m,close:x,openDelay:a,closeDelay:i});return(0,t.jsx)(u,{value:{openDropdown:w,closeDropdown:C},children:(0,t.jsx)(c.A,{...p,opened:v,__staticSelector:"HoverCard",children:r})})}g.displayName="@mantine/core/HoverCard",g.Target=C,g.Dropdown=m,g.extend=e=>e;var y=o(52022),f=o(93065);let H={type:"code",component:function(){return(0,t.jsx)(a.Y,{justify:"center",children:(0,t.jsxs)(g,{width:280,shadow:"md",children:[(0,t.jsx)(g.Target,{children:(0,t.jsx)(y.$,{children:"Hover to reveal the card"})}),(0,t.jsx)(g.Dropdown,{children:(0,t.jsx)(f.E,{size:"sm",children:"Hover card is revealed when user hovers over target element, it will be hidden once mouse is not over both target and dropdown elements"})})]})})},code:`
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will be hidden once
            mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

`},b={type:"code",component:function(){return(0,t.jsxs)(a.Y,{justify:"center",children:[(0,t.jsxs)(g,{shadow:"md",openDelay:1e3,children:[(0,t.jsx)(g.Target,{children:(0,t.jsx)(y.$,{children:"1000ms open delay"})}),(0,t.jsx)(g.Dropdown,{children:(0,t.jsx)(f.E,{size:"sm",children:"Opened with 1000ms delay"})})]}),(0,t.jsxs)(g,{shadow:"md",closeDelay:1e3,children:[(0,t.jsx)(g.Target,{children:(0,t.jsx)(y.$,{children:"1000ms close delay"})}),(0,t.jsx)(g.Dropdown,{children:(0,t.jsx)(f.E,{size:"sm",children:"Will close with 1000ms delay"})})]})]})},code:`
import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard shadow="md" openDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms open delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Opened with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard shadow="md" closeDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms close delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Will close with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`};var T=o(86658),D=o(75390),E=o(12129);function z({children:e}){return(0,t.jsxs)(g,{width:320,shadow:"md",withArrow:!0,openDelay:200,closeDelay:400,children:[(0,t.jsx)(g.Target,{children:e}),(0,t.jsxs)(g.Dropdown,{children:[(0,t.jsxs)(a.Y,{children:[(0,t.jsx)(T.e,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),(0,t.jsxs)(D.B,{gap:5,children:[(0,t.jsx)(f.E,{size:"sm",fw:700,style:{lineHeight:1},children:"Mantine"}),(0,t.jsx)(E.M,{href:"https://x.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1},children:"@mantinedev"})]})]}),(0,t.jsx)(f.E,{size:"sm",mt:"md",children:"Customizable React components and hooks library with focus on usability, accessibility and developer experience"}),(0,t.jsxs)(a.Y,{mt:"md",gap:"xl",children:[(0,t.jsxs)(f.E,{size:"sm",children:[(0,t.jsx)("b",{children:"0"})," Following"]}),(0,t.jsxs)(f.E,{size:"sm",children:[(0,t.jsx)("b",{children:"1,174"})," Followers"]})]})]})]})}let G={type:"code",component:function(){return(0,t.jsx)(a.Y,{justify:"center",children:(0,t.jsx)(z,{children:(0,t.jsx)(T.e,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})})})},code:`
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
        <HoverCard.Target>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
            <Stack gap={5}>
              <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
                Mantine
              </Text>
              <Anchor
                href="https://x.com/mantinedev"
                c="dimmed"
                size="xs"
                style={{ lineHeight: 1 }}
              >
                @mantinedev
              </Anchor>
            </Stack>
          </Group>

          <Text size="sm" mt="md">
            Customizable React components and hooks library with focus on usability, accessibility
            and developer experience
          </Text>

          <Group mt="md" gap="xl">
            <Text size="sm">
              <b>0</b> Following
            </Text>
            <Text size="sm">
              <b>1,174</b> Followers
            </Text>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`};var A=o(85954),_=o(38215);let k=(0,A.P)(_.XZ.HoverCard);function M(e){let r={code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components},{Demo:o,TargetComponent:a}=r;return o||B("Demo",!0),a||B("TargetComponent",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o,{data:H}),"\n",(0,t.jsx)(r.h2,{id:"delays",children:"Delays"}),"\n",(0,t.jsxs)(r.p,{children:["Set open and close delays in ms with ",(0,t.jsx)(r.code,{children:"openDelay"})," and ",(0,t.jsx)(r.code,{children:"closeDelay"})," props:"]}),"\n",(0,t.jsx)(o,{data:b}),"\n",(0,t.jsx)(r.h2,{id:"with-interactive-elements",children:"With interactive elements"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"HoverCard"})," is displayed only when the mouse is over the target element or dropdown,\nyou can use anchors and buttons within dropdowns, using inputs is not recommended:"]}),"\n",(0,t.jsx)(o,{data:G}),"\n",(0,t.jsx)(a,{component:"HoverCard"}),"\n",(0,t.jsx)(r.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"HoverCard"})," is ignored by screen readers and cannot be activated with keyboard, use it to display only additional information\nthat is not required to understand the context."]})]})}function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(k,{...e,children:(0,t.jsx)(M,{...e})})}function B(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},86658:(e,r,o)=>{"use strict";o.d(r,{e:()=>f});var t=o(31085),n=o(14041),a=o(33450),s=o(7098),i=o(29686),d=o(69564),l=o(34056),c=o(2453),u=o(6754);let h=(0,n.createContext)(null),p=h.Provider;var v={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let m={},x=(0,s.V)((e,{spacing:r})=>({group:{"--ag-spacing":(0,a.GY)(r)}})),w=(0,u.P9)((e,r)=>{let o=(0,i.Y)("AvatarGroup",m,e),{classNames:n,className:a,style:s,styles:c,unstyled:u,vars:h,spacing:w,...C}=o,j=(0,d.I)({name:"AvatarGroup",classes:v,props:o,className:a,style:s,classNames:n,styles:c,unstyled:u,vars:h,varsResolver:x,rootSelector:"group"});return(0,t.jsx)(p,{value:!0,children:(0,t.jsx)(l.a,{ref:r,...j("group"),...C})})});function C(e){return(0,t.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}w.classes=v,w.displayName="@mantine/core/AvatarGroup";let j=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],g={},y=(0,s.V)((e,{size:r,radius:o,variant:t,gradient:n,color:s,autoContrast:i,name:d,allowedInitialsColors:l})=>{let c="initials"===s&&"string"==typeof d?function(e,r=j){let o=Math.abs(function(e){let r=0;for(let o=0;o<e.length;o+=1)r=(r<<5)-r+e.charCodeAt(o)|0;return r}(e))%r.length;return r[o]}(d,l):s,u=e.variantColorResolver({color:c||"gray",theme:e,gradient:n,variant:t||"light",autoContrast:i});return{root:{"--avatar-size":(0,a.YC)(r,"avatar-size"),"--avatar-radius":void 0===o?void 0:(0,a.nJ)(o),"--avatar-bg":c||t?u.background:void 0,"--avatar-color":c||t?u.color:void 0,"--avatar-bd":c||t?u.border:void 0}}}),f=(0,c.v)((e,r)=>{let o=(0,i.Y)("Avatar",g,e),{classNames:a,className:s,style:c,styles:u,unstyled:p,vars:m,src:x,alt:w,radius:j,color:f,gradient:H,imageProps:b,children:T,autoContrast:D,mod:E,name:z,allowedInitialsColors:G,...A}=o,_={withinGroup:!!(0,n.useContext)(h)},[k,M]=(0,n.useState)(!x),Y=(0,d.I)({name:"Avatar",props:o,classes:v,className:s,style:c,classNames:a,styles:u,unstyled:p,vars:m,varsResolver:y});return(0,n.useEffect)(()=>M(!x),[x]),(0,t.jsx)(l.a,{...Y("root"),mod:[{"within-group":_.withinGroup},E],ref:r,...A,children:k?(0,t.jsx)("span",{...Y("placeholder"),title:w,children:T||"string"==typeof z&&function(e,r=2){let o=e.split(" ");return 1===o.length?e.slice(0,r).toUpperCase():o.map(e=>e[0]).slice(0,r).join("").toUpperCase()}(z)||(0,t.jsx)(C,{})}):(0,t.jsx)("img",{...b,...Y("image"),src:x,alt:w,onError:e=>{M(!0),b?.onError?.(e)}})})});f.classes=v,f.displayName="@mantine/core/Avatar",f.Group=w},92051:(e,r,o)=>{"use strict";o.d(r,{j:()=>n});var t=o(14041);function n(e=!1,r){let{onOpen:o,onClose:a}=r||{},[s,i]=(0,t.useState)(e),d=(0,t.useCallback)(()=>{i(e=>e||(o?.(),!0))},[o]),l=(0,t.useCallback)(()=>{i(e=>e?(a?.(),!1):e)},[a]),c=(0,t.useCallback)(()=>{s?l():d()},[l,d,s]);return[s,{open:d,close:l,toggle:c}]}}},e=>{var r=r=>e(e.s=r);e.O(0,[67456,85954,90636,46593,38792],()=>r(21297)),_N_E=e.O()}]);