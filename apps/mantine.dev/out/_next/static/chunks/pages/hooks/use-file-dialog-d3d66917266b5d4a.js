(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42172],{69061:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-file-dialog",function(){return t(41681)}])},41681:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var i=t(31085),l=t(71184),o=t(40691),r=t(85954),s=t(38215);let a=(0,r.P)(s.XZ.useFileDialog);function c(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"use-file-dialog"})," allows capturing one or more files from the user\nwithout file input element:"]}),"\n",(0,i.jsx)(t,{data:o.b}),"\n",(0,i.jsx)(n.h2,{id:"hook-options",children:"Hook options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"interface UseFileDialogOptions {\n  /** Determines whether multiple files are allowed, `true` by default */\n  multiple?: boolean;\n\n  /** `accept` attribute of the file input, '*' by default */\n  accept?: string;\n\n  /** `capture` attribute of the file input */\n  capture?: string;\n\n  /** Determines whether the user can pick a directory instead of file, `false` by default */\n  directory?: boolean;\n\n  /** Determines whether the file input state should be reset when the file dialog is opened, `false` by default */\n  resetOnOpen?: boolean;\n\n  /** Initial selected files */\n  initialFiles?: FileList | File[];\n\n  /** Called when files are selected */\n  onChange?: (files: FileList | null) => void;\n\n  /** Called when file dialog is canceled */\n  onCancel?: () => void;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function useFileDialog(input?: UseFileDialogOptions): {\n    files: FileList | null;\n    open: () => void;\n    reset: () => void;\n}\n"})})]})}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})})}},40691:(e,n,t)=>{"use strict";t.d(n,{b:()=>u});var i=t(31085),l=t(17592),o=t(56051),r=t(52022),s=t(14041),a=t(89571);let c={multiple:!0,accept:"*"},u={type:"code",component:function(){let e=function(e={}){let n={...c,...e},[t,i]=(0,s.useState)(function(e){if(!e)return null;if(e instanceof FileList)return e;let n=new DataTransfer;for(let t of e)n.items.add(t);return n.files}(n.initialFiles)),l=(0,s.useRef)(null),o=(0,s.useCallback)(e=>{let t=e.target;t?.files&&(i(t.files),n.onChange?.(t.files))},[n.onChange]),r=(0,s.useCallback)(()=>{l.current?.remove(),l.current=function(e){if("undefined"==typeof document)return null;let n=document.createElement("input");return n.type="file",e.accept&&(n.accept=e.accept),e.multiple&&(n.multiple=e.multiple),e.capture&&(n.capture=e.capture),e.directory&&(n.webkitdirectory=e.directory),n.style.display="none",n}(n),l.current&&(l.current.addEventListener("change",o,{once:!0}),document.body.appendChild(l.current))},[n,o]);(0,a.o)(()=>(r(),()=>l.current?.remove()),[]);let u=(0,s.useCallback)(()=>{i(null),n.onChange?.(null)},[n.onChange]);return{files:t,open:(0,s.useCallback)(()=>{n.resetOnOpen&&u(),r(),l.current?.click()},[n.resetOnOpen,u,r]),reset:u}}(),n=Array.from(e.files||[]).map(e=>(0,i.jsx)(l.B.Item,{children:e.name},e.name));return(0,i.jsxs)("div",{children:[(0,i.jsxs)(o.Y,{children:[(0,i.jsx)(r.$,{onClick:e.open,children:"Pick files"}),n.length>0&&(0,i.jsx)(r.$,{variant:"default",onClick:e.reset,children:"Reset"})]}),n.length>0&&(0,i.jsx)(l.B,{mt:"lg",children:n})]})},code:`
import { Button, Group, List } from '@mantine/core';
import { useFileDialog } from '@mantine/hooks';

function Demo() {
  const fileDialog = useFileDialog();

  const pickedFiles = Array.from(fileDialog.files || []).map((file) => (
    <List.Item key={file.name}>{file.name}</List.Item>
  ));

  return (
    <div>
      <Group>
        <Button onClick={fileDialog.open}>Pick files</Button>
        {pickedFiles.length > 0 && (
          <Button variant="default" onClick={fileDialog.reset}>
            Reset
          </Button>
        )}
      </Group>
      {pickedFiles.length > 0 && <List mt="lg">{pickedFiles}</List>}
    </div>
  );
}
`}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,85954,90636,46593,38792],()=>n(69061)),_N_E=e.O()}]);