(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96574],{44629:(e,n,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-focus-return",function(){return o(56795)}])},56795:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>l});var t=o(31085),s=o(71184),r=o(28051),c=o(85954),u=o(38215);let i=(0,c.P)(u.XZ.useFocusReturn);function a(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use-focus-return"})," automatically returns focus to the last focused element when a given condition is met.\nFor example, it is used in ",(0,t.jsx)(n.a,{href:"/core/modal/",children:"Modal"})," component to restore focus after the modal was closed."]}),"\n",(0,t.jsxs)(n.p,{children:["Close the modal with the ",(0,t.jsx)(n.code,{children:"Escape"})," key and see how focus returns to the button after the modal closes:"]}),"\n",(0,t.jsx)(o,{data:r.C,demoProps:{toggle:!0}}),"\n",(0,t.jsxs)(n.p,{children:["In most cases, you should use this hook with ",(0,t.jsx)(n.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useFocusReturn } from '@mantine/hooks';\n\nuseFocusReturn({\n  // Is region with focus trap active?\n  // When it activates hook saves document.activeElement to the internal state\n  // and focuses this element once focus trap is deactivated\n  opened: false,\n\n  // Determines whether focus should be returned automatically, true by default\n  shouldReturnFocus: true,\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"shouldReturnFocus"})," option is set to ",(0,t.jsx)(n.code,{children:"false"})," you can call returned function to focus last active element:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useFocusReturn } from '@mantine/hooks';\n\nconst returnFocus = useFocusReturn({\n  opened: false,\n  shouldReturnFocus: false,\n});\n\n// ... later\nreturnFocus();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function useFocusReturn(options: {\n  opened: boolean;\n  shouldReturnFocus?: boolean;\n}): () => void;\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})})}},28051:(e,n,o)=>{"use strict";o.d(n,{C:()=>i});var t=o(31085),s=o(19042),r=o(52022),c=o(92051),u=o(86934);let i={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.j)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.a,{opened:e,onClose:o,title:"Authentication",children:(0,t.jsx)(u.d,{noShadow:!0,noPadding:!0})}),(0,t.jsx)(r.$,{variant:"default",onClick:n,children:"Open modal"})]})}}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,85954,23719,23427,90636,46593,38792],()=>n(44629)),_N_E=e.O()}]);