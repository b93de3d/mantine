(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7769],{65221:(e,i,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/timeline",function(){return t(94459)}])},94459:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>Z});var n=t(31085),l=t(71184),r=t(34056),a=t(73366),o=(0,a.A)("outline","git-branch","IconGitBranch",[["path",{d:"M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M7 8l0 8",key:"svg-3"}],["path",{d:"M9 18h6a2 2 0 0 0 2 -2v-5",key:"svg-4"}],["path",{d:"M14 14l3 -3l3 3",key:"svg-5"}]]),s=(0,a.A)("outline","git-commit","IconGitCommit",[["path",{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M12 3l0 6",key:"svg-1"}],["path",{d:"M12 15l0 6",key:"svg-2"}]]),m=(0,a.A)("outline","git-pull-request","IconGitPullRequest",[["path",{d:"M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-2"}],["path",{d:"M6 8l0 8",key:"svg-3"}],["path",{d:"M11 6h5a2 2 0 0 1 2 2v8",key:"svg-4"}],["path",{d:"M14 9l-3 -3l3 -3",key:"svg-5"}]]),c=(0,a.A)("outline","message-dots","IconMessageDots",[["path",{d:"M12 11v.01",key:"svg-0"}],["path",{d:"M8 11v.01",key:"svg-1"}],["path",{d:"M16 11v.01",key:"svg-2"}],["path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z",key:"svg-3"}]]),d=t(14041),u=t(39735),h=t(33450),p=t(7098),x=t(51606),v=t(3702),g=t(62554),T=t(29686),b=t(69564),f=t(6754);let[j,I]=(0,t(59852).F)("Timeline component was not found in tree");var y=t(92408),z={root:"m_43657ece",itemTitle:"m_2ebe8099",item:"m_436178ff",itemBullet:"m_8affcee1",itemBody:"m_540e8f41"};let k={},w=(0,f.P9)((e,i)=>{let{classNames:t,className:l,style:a,styles:o,vars:s,__active:m,__align:c,__lineActive:d,__vars:u,bullet:p,radius:v,color:g,lineVariant:b,children:f,title:j,mod:z,...w}=(0,T.Y)("TimelineItem",k,e),C=I(),M=(0,y.xd)(),_={classNames:t,styles:o};return(0,n.jsxs)(r.a,{...C.getStyles("item",{..._,className:l,style:a}),mod:[{"line-active":d,active:m},z],ref:i,__vars:{"--tli-radius":v?(0,h.nJ)(v):void 0,"--tli-color":g?(0,x.r)(g,M):void 0,"--tli-border-style":b||void 0},...w,children:[(0,n.jsx)(r.a,{...C.getStyles("itemBullet",_),mod:{"with-child":!!p,align:c,active:m},children:p}),(0,n.jsxs)("div",{...C.getStyles("itemBody",_),children:[j&&(0,n.jsx)("div",{...C.getStyles("itemTitle",_),children:j}),(0,n.jsx)("div",{...C.getStyles("itemContent",_),children:f})]})]})});w.classes=z,w.displayName="@mantine/core/TimelineItem";let C={active:-1,align:"left",reverseActive:!1},M=(0,p.V)((e,{bulletSize:i,lineWidth:t,radius:n,color:l,autoContrast:r})=>({root:{"--tl-bullet-size":(0,u.D)(i),"--tl-line-width":(0,u.D)(t),"--tl-radius":void 0===n?void 0:(0,h.nJ)(n),"--tl-color":l?(0,x.r)(l,e):void 0,"--tl-icon-color":(0,g.v)(r,e)?(0,v.w)({color:l,theme:e,autoContrast:r}):void 0}})),_=(0,f.P9)((e,i)=>{let t=(0,T.Y)("Timeline",C,e),{classNames:l,className:a,style:o,styles:s,unstyled:m,vars:c,children:u,active:h,color:p,radius:x,bulletSize:v,align:g,lineWidth:f,reverseActive:I,mod:y,autoContrast:k,...w}=t,_=(0,b.I)({name:"Timeline",classes:z,props:t,className:a,style:o,classNames:l,styles:s,unstyled:m,vars:c,varsResolver:M}),E=d.Children.toArray(u),A=E.map((e,i)=>(0,d.cloneElement)(e,{unstyled:m,__align:g,__active:e.props?.active||(I?h>=E.length-i-1:h>=i),__lineActive:e.props?.lineActive||(I?h>=E.length-i-1:h-1>=i)}));return(0,n.jsx)(j,{value:{getStyles:_},children:(0,n.jsx)(r.a,{..._("root"),mod:[{align:g},y],ref:i,...w,children:A})})});_.classes=z,_.displayName="@mantine/core/Timeline",_.Item=w;var E=t(93065);function A({noIcon:e,...i}){let t=!e;return(0,n.jsxs)(_,{active:1,bulletSize:24,lineWidth:2,...i,children:[(0,n.jsxs)(_.Item,{bullet:t?(0,n.jsx)(o,{size:13}):null,title:"New branch",children:[(0,n.jsxs)(E.E,{c:"dimmed",size:"sm",children:["You've created new branch"," ",(0,n.jsx)(E.E,{variant:"link",component:"span",inherit:!0,children:"fix-notifications"})," ","from master"]}),(0,n.jsx)(E.E,{size:"xs",mt:4,children:"2 hours ago"})]}),(0,n.jsxs)(_.Item,{bullet:t?(0,n.jsx)(s,{size:13}):null,title:"Commits",children:[(0,n.jsxs)(E.E,{c:"dimmed",size:"sm",children:["You've pushed 23 commits to"," ",(0,n.jsx)(E.E,{variant:"link",component:"span",inherit:!0,children:"fix-notifications"})," ","branch"]}),(0,n.jsx)(E.E,{size:"xs",mt:4,children:"52 minutes ago"})]}),(0,n.jsxs)(_.Item,{title:"Pull request",bullet:t?(0,n.jsx)(m,{size:13}):null,lineVariant:"dashed",children:[(0,n.jsxs)(E.E,{c:"dimmed",size:"sm",children:["You've submitted a pull request"," ",(0,n.jsx)(E.E,{variant:"link",component:"span",inherit:!0,children:"Fix incorrect notification message (#187)"})," "]}),(0,n.jsx)(E.E,{size:"xs",mt:4,children:"34 minutes ago"})]}),(0,n.jsxs)(_.Item,{title:"Code review",bullet:t?(0,n.jsx)(c,{size:13}):null,children:[(0,n.jsxs)(E.E,{c:"dimmed",size:"sm",children:[(0,n.jsx)(E.E,{variant:"link",component:"span",inherit:!0,children:"Robert Gluesticker"})," ","left a code review on your pull request"]}),(0,n.jsx)(E.E,{size:"xs",mt:4,children:"12 minutes ago"})]})]})}let V={type:"code",component:function(){return(0,n.jsx)(r.a,{maw:320,mx:"auto",children:(0,n.jsx)(A,{})})},code:`
import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
        <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
        <Text size="xs" mt={4}>2 hours ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
        <Text size="xs" mt={4}>52 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Pull request" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
        <Text size="xs" mt={4}>34 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
        <Text size="xs" mt={4}>12 minutes ago</Text>
      </Timeline.Item>
    </Timeline>
  );
}
`},G={type:"configurator",component:function(e){return(0,n.jsx)(r.a,{maw:320,mx:"auto",children:(0,n.jsx)(A,{noIcon:!0,...e})})},code:`
import { Timeline } from '@mantine/core';

function Demo() {
  return (
    <Timeline{{props}}>
      {/* items */}
    </Timeline>
  );
}
`,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"active",type:"number",initialValue:1,libraryValue:null,min:-1,max:3},{prop:"reverseActive",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"lineWidth",type:"number",initialValue:4,libraryValue:4,min:1,max:6},{prop:"bulletSize",type:"number",initialValue:25,libraryValue:20,min:18,max:40,step:1},{prop:"align",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"left",libraryValue:"left"}]};var W=t(84032),N=(0,a.A)("outline","video","IconVideo",[["path",{d:"M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z",key:"svg-0"}],["path",{d:"M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z",key:"svg-1"}]]),S=t(86658),D=t(29225);let R={type:"code",centered:!0,maxWidth:320,component:function(){return(0,n.jsxs)(_,{bulletSize:24,children:[(0,n.jsx)(_.Item,{title:"Default bullet",children:(0,n.jsx)(E.E,{c:"dimmed",size:"sm",children:"Default bullet without anything"})}),(0,n.jsx)(_.Item,{title:"Avatar",bullet:(0,n.jsx)(S.e,{size:22,radius:"xl",src:"https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"}),children:(0,n.jsx)(E.E,{c:"dimmed",size:"sm",children:"Timeline bullet as avatar image"})}),(0,n.jsx)(_.Item,{title:"Icon",bullet:(0,n.jsx)(W.A,{size:13}),children:(0,n.jsx)(E.E,{c:"dimmed",size:"sm",children:"Timeline bullet as icon"})}),(0,n.jsx)(_.Item,{title:"ThemeIcon",bullet:(0,n.jsx)(D.L,{size:22,variant:"gradient",gradient:{from:"lime",to:"cyan"},radius:"xl",children:(0,n.jsx)(N,{size:13})}),children:(0,n.jsx)(E.E,{c:"dimmed",size:"sm",children:"Timeline bullet as ThemeIcon component"})})]})},code:`
import { ThemeIcon, Text, Avatar, Timeline } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline bulletSize={24}>
      <Timeline.Item title="Default bullet">
        <Text c="dimmed" size="sm">
          Default bullet without anything
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="Avatar"
        bullet={
          <Avatar
            size={22}
            radius="xl"
            src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          />
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as avatar image
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Icon" bullet={<IconSun size={13} />}>
        <Text c="dimmed" size="sm">
          Timeline bullet as icon
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="ThemeIcon"
        bullet={
          <ThemeIcon
            size={22}
            variant="gradient"
            gradient={{ from: 'lime', to: 'cyan' }}
            radius="xl"
          >
            <IconVideo size={13} />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as ThemeIcon component
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
`};var P=t(85954),Y=t(38215);let q=(0,P.P)(Y.XZ.Timeline);function B(e){let i={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t,{data:V}),"\n",(0,n.jsx)(i.h2,{id:"line-and-bullet-props",children:"Line and bullet props"}),"\n",(0,n.jsx)(i.p,{children:"Control timeline appearance with the following props:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"active"})," – index of current active element, all elements before this index will be highlighted with ",(0,n.jsx)(i.code,{children:"color"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"color"})," – color from theme that should be used to highlight active items, defaults to ",(0,n.jsx)(i.code,{children:"theme.primaryColor"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"lineWidth"})," – controls line width and bullet border"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"bulletSize"})," – bullet width, height and border-radius"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"align"})," – defines line and bullets position relative to content, also sets text-align"]}),"\n"]}),"\n",(0,n.jsx)(t,{data:G}),"\n",(0,n.jsx)(i.h2,{id:"bullet-as-react-node",children:"Bullet as React node"}),"\n",(0,n.jsx)(t,{data:R}),"\n",(0,n.jsx)(i.h2,{id:"wrap-timelineitem",children:"Wrap Timeline.Item"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Timeline"})," component relies on ",(0,n.jsx)(i.code,{children:"Timeline.Item"})," order. Wrapping ",(0,n.jsx)(i.code,{children:"Timeline.Item"})," is not supported,\nInstead you will need to use different approaches:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:'import { Timeline } from \'@mantine/core\';\n\n// This will not work, step children will not render\nfunction WillNotWork() {\n  return <Timeline.Item title="Nope">It will not work</Timeline.Item>;\n}\n\n// Create a separate component for children\nfunction WillWork() {\n  return <div>This will work as expected!</div>;\n}\n\nfunction Demo() {\n  return (\n    <Timeline active={1}>\n      <Timeline.Item title="Regular item">First item</Timeline.Item>\n      <WillNotWork />\n      <Timeline.Item title="Works as expected">\n        <WillWork />\n      </Timeline.Item>\n      <Timeline.Item title="Regular item">Third item</Timeline.Item>\n    </Timeline>\n  );\n}\n'})})]})}function Z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(q,{...e,children:(0,n.jsx)(B,{...e})})}},86658:(e,i,t)=>{"use strict";t.d(i,{e:()=>I});var n=t(31085),l=t(14041),r=t(33450),a=t(7098),o=t(29686),s=t(69564),m=t(34056),c=t(2453),d=t(6754);let u=(0,l.createContext)(null),h=u.Provider;var p={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let x={},v=(0,a.V)((e,{spacing:i})=>({group:{"--ag-spacing":(0,r.GY)(i)}})),g=(0,d.P9)((e,i)=>{let t=(0,o.Y)("AvatarGroup",x,e),{classNames:l,className:r,style:a,styles:c,unstyled:d,vars:u,spacing:g,...T}=t,b=(0,s.I)({name:"AvatarGroup",classes:p,props:t,className:r,style:a,classNames:l,styles:c,unstyled:d,vars:u,varsResolver:v,rootSelector:"group"});return(0,n.jsx)(h,{value:!0,children:(0,n.jsx)(m.a,{ref:i,...b("group"),...T})})});function T(e){return(0,n.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}g.classes=p,g.displayName="@mantine/core/AvatarGroup";let b=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],f={},j=(0,a.V)((e,{size:i,radius:t,variant:n,gradient:l,color:a,autoContrast:o,name:s,allowedInitialsColors:m})=>{let c="initials"===a&&"string"==typeof s?function(e,i=b){let t=Math.abs(function(e){let i=0;for(let t=0;t<e.length;t+=1)i=(i<<5)-i+e.charCodeAt(t)|0;return i}(e))%i.length;return i[t]}(s,m):a,d=e.variantColorResolver({color:c||"gray",theme:e,gradient:l,variant:n||"light",autoContrast:o});return{root:{"--avatar-size":(0,r.YC)(i,"avatar-size"),"--avatar-radius":void 0===t?void 0:(0,r.nJ)(t),"--avatar-bg":c||n?d.background:void 0,"--avatar-color":c||n?d.color:void 0,"--avatar-bd":c||n?d.border:void 0}}}),I=(0,c.v)((e,i)=>{let t=(0,o.Y)("Avatar",f,e),{classNames:r,className:a,style:c,styles:d,unstyled:h,vars:x,src:v,alt:g,radius:b,color:I,gradient:y,imageProps:z,children:k,autoContrast:w,mod:C,name:M,allowedInitialsColors:_,...E}=t,A={withinGroup:!!(0,l.useContext)(u)},[V,G]=(0,l.useState)(!v),W=(0,s.I)({name:"Avatar",props:t,classes:p,className:a,style:c,classNames:r,styles:d,unstyled:h,vars:x,varsResolver:j});return(0,l.useEffect)(()=>G(!v),[v]),(0,n.jsx)(m.a,{...W("root"),mod:[{"within-group":A.withinGroup},C],ref:i,...E,children:V?(0,n.jsx)("span",{...W("placeholder"),title:g,children:k||"string"==typeof M&&function(e,i=2){let t=e.split(" ");return 1===t.length?e.slice(0,i).toUpperCase():t.map(e=>e[0]).slice(0,i).join("").toUpperCase()}(M)||(0,n.jsx)(T,{})}):(0,n.jsx)("img",{...z,...W("image"),src:v,alt:g,onError:e=>{G(!0),z?.onError?.(e)}})})});I.classes=p,I.displayName="@mantine/core/Avatar",I.Group=g}},e=>{var i=i=>e(e.s=i);e.O(0,[67456,85954,90636,46593,38792],()=>i(65221)),_N_E=e.O()}]);