(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26379],{1135:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/dates/date-time-picker",function(){return a(8738)}])},8738:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y});var i=a(31085),n=a(71184),r=a(76178);let l={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(r.K,{label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Pick date and time" placeholder="Pick date and time" />;
}
`},d={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(r.K,{withSeconds:!0,label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker withSeconds label="Pick date and time" placeholder="Pick date and time" />;
}
`},o={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(r.K,{valueFormat:"DD MMM YYYY hh:mm A",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`},c={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(r.K,{label:"Disabled",placeholder:"Pick date and time",disabled:!0})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker label="Disabled" placeholder="Pick date and time" disabled />;
}
`},p={type:"configurator",component:function(e){return(0,i.jsx)(r.K,{...e,placeholder:"Input placeholder"})},code:`
import { DateTimePicker } from '@mantine/dates';


function Demo() {
  return (
    <DateTimePicker
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:400,controls:a(23232).$7},s={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(r.K,{clearable:!0,defaultValue:new Date,label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      clearable
      defaultValue={new Date()}
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`},m={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(r.K,{dropdownType:"modal",label:"Pick date and time",placeholder:"Pick date and time"})},code:`
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
      dropdownType="modal"
      label="Pick date and time"
      placeholder="Pick date and time"
    />
  );
}
`};var u=a(85954),h=a(38215);let b=(0,u.P)(h.XZ.DateTimePicker);function k(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components},{Demo:a,GetElementRef:r,InputAccessibility:u,InputFeatures:h}=t;return a||f("Demo",!0),r||f("GetElementRef",!0),u||f("InputAccessibility",!0),h||f("InputFeatures",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"datepicker-props",children:"DatePicker props"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"DateTimePicker"})," supports most of the ",(0,i.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"})," props,\nread through ",(0,i.jsx)(t.a,{href:"/dates/date-picker/",children:"DatePicker"})," documentation to learn about all component features that are not listed on this page."]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(a,{data:l}),"\n",(0,i.jsx)(t.h2,{id:"with-seconds",children:"With seconds"}),"\n",(0,i.jsx)(a,{data:d}),"\n",(0,i.jsx)(t.h2,{id:"value-format",children:"Value format"}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"valueFormat"})," prop to change ",(0,i.jsx)(t.a,{href:"https://day.js.org/docs/en/display/format",children:"dayjs format"})," of value label:"]}),"\n",(0,i.jsx)(a,{data:o}),"\n",(0,i.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,i.jsx)(a,{data:c}),"\n",(0,i.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,i.jsx)(h,{component:"DateTimePicker",element:"button"}),"\n",(0,i.jsx)(a,{data:p}),"\n",(0,i.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"clearable"})," prop to display clear button in the right section. Note that if you set ",(0,i.jsx)(t.code,{children:"rightSection"}),"\nprop, clear button will not be displayed."]}),"\n",(0,i.jsx)(a,{data:s}),"\n",(0,i.jsx)(t.h2,{id:"open-picker-in-modal",children:"Open picker in modal"}),"\n",(0,i.jsxs)(t.p,{children:["By default, picker is rendered inside ",(0,i.jsx)(t.a,{href:"/core/popover/",children:"Popover"}),".\nYou can change that to ",(0,i.jsx)(t.a,{href:"/core/modal/",children:"Modal"})," by setting ",(0,i.jsx)(t.code,{children:'dropdownType="modal"'}),":"]}),"\n",(0,i.jsx)(a,{data:m}),"\n",(0,i.jsx)(r,{component:"DateTimePicker",refType:"button",package:"@mantine/dates"}),"\n",(0,i.jsx)(u,{component:"DateTimePicker",packageName:"@mantine/dates"})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(b,{...e,children:(0,i.jsx)(k,{...e})})}function f(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},23232:(e,t,a)=>{"use strict";a.d(t,{$7:()=>r,l$:()=>i,wQ:()=>n});let i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,85954,68213,16572,90636,46593,38792],()=>t(1135)),_N_E=e.O()}]);