(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46251],{16409:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-in-viewport",function(){return n(95319)}])},95319:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var o=n(31085),r=n(71184),i=n(93065),s=n(34056),c=n(14041);let l={type:"code",code:`
import { Box, Text } from '@mantine/core';
import { useInViewport } from '@mantine/hooks';

function Demo() {
  const { ref, inViewport } = useInViewport();
  return (
    <>
      <Text ta="center">{inViewport ? 'Box is visible' : 'Scroll to see box'}</Text>
      <Box h={64} style={{ overflow: 'scroll' }}>
        <Box h={128}></Box>
        <Box ref={ref} bg="blue" h={32} p={8}>
          <Text ta="center" c="white">
            A box
          </Text>
        </Box>
      </Box>
    </>
  );
}
`,component:function(){let{ref:e,inViewport:t}=function(){let e=(0,c.useRef)(null),[t,n]=(0,c.useState)(!1);return{ref:(0,c.useCallback)(t=>{"undefined"!=typeof IntersectionObserver&&(t&&!e.current?e.current=new IntersectionObserver(e=>n(e.some(e=>e.isIntersecting))):e.current?.disconnect(),t?e.current?.observe(t):n(!1))},[]),inViewport:t}}();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.E,{ta:"center",children:t?"Box is visible":"Scroll to see box"}),(0,o.jsxs)(s.a,{h:64,style:{overflow:"scroll"},children:[(0,o.jsx)(s.a,{h:128}),(0,o.jsx)(s.a,{ref:e,bg:"blue",h:32,p:8,children:(0,o.jsx)(i.E,{ta:"center",c:"white",children:"A box"})})]})]})}};var u=n(85954),h=n(38215);let x=(0,u.P)(h.XZ.useInViewport);function a(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"use-in-viewport"})," is a simpler alternative to ",(0,o.jsx)(t.a,{href:"/hooks/use-intersection",children:"use-intersection"})," that only checks if the element\nis visible in the viewport:"]}),"\n",(0,o.jsx)(n,{data:l})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(x,{...e,children:(0,o.jsx)(a,{...e})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,85954,90636,46593,38792],()=>t(16409)),_N_E=e.O()}]);