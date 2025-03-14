"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82407],{17182:(e,t,a)=>{a.d(t,{Q:()=>g});var l=a(31085);let n=e=>`
import { ${e} } from '@mantine/dates';

function Demo() {
  return (
    <${e}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`,r=e=>`import { ${e} } from '@mantine/dates';


function Demo() {
  return (
    <${e}
      {{props}}
    />
  );
}
`;var i=a(14041),o=a(61584);let u=e=>`
import { useState } from 'react';
import { IconCalendar } from '@tabler/icons-react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  const icon = <IconCalendar size={18} stroke={1.5} />;
  return (
    <${e}
      leftSection={<IconCalendar size={18} stroke={1.5} />}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,s=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${e}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`,d=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <${e}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`,c=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${e}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`,m=e=>`
import { useState } from 'react';
import { ${e} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${e}
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`;var p=a(23464);let f=e=>`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ${e}, DateFormatter } from '@mantine/dates';

const formatter: DateFormatter = ({ type, date, locale, format }) => {
  if (type === 'multiple' && Array.isArray(date)) {
    if (date.length === 1) {
      return dayjs(date[0]).locale(locale).format(format);
    }

    if (date.length > 1) {
      return \`\${date.length} dates selected\`;
    }

    return '';
  }

  return '';
};

function Demo() {
  const [value, setValue] = useState<Date[]>([]);

  return (
    <${e}
      label="Pick 2 dates or more"
      placeholder="Pick 2 dates or more"
      value={value}
      onChange={setValue}
      type="multiple"
      valueFormatter={formatter}
    />
  );
}
`,y=({type:e,date:t,locale:a,format:l})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return p(t[0]).locale(a).format(l);if(t.length>1)return`${t.length} dates selected`}return""};function g(e){return{usage:{type:"code",centered:!0,maxWidth:400,code:m(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,i.useState)(null);return(0,l.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:t,onChange:a})}},multiple:{type:"code",centered:!0,maxWidth:400,code:d(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,i.useState)([]);return(0,l.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:t,onChange:a})}},range:{type:"code",centered:!0,maxWidth:400,code:c(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,i.useState)([null,null]);return(0,l.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:t,onChange:a})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:r(e.displayName.replace("@mantine/dates/","")),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:s(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,i.useState)(null);return(0,l.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:t,onChange:a})}},icon:{type:"code",centered:!0,maxWidth:400,code:u(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,i.useState)(null);return(0,l.jsx)(e,{leftSection:(0,l.jsx)(o.A,{size:18,stroke:1.5}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:t,onChange:a})}},clearable:{type:"code",centered:!0,maxWidth:400,code:n(e.displayName.replace("@mantine/dates/","")),component:()=>(0,l.jsx)(e,{clearable:!0,defaultValue:new Date,label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:f(e.displayName.replace("@mantine/dates/","")),component:()=>{let[t,a]=(0,i.useState)([]);return(0,l.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:t,onChange:a,type:"multiple",valueFormatter:y})}}}}},34456:(e,t,a)=>{a.d(t,{q:()=>l});function l(e){let{maxLevel:t,minLevel:a,defaultLevel:l,level:n,onLevelChange:r,nextIcon:i,previousIcon:o,date:u,defaultDate:s,onDateChange:d,numberOfColumns:c,columnsToScroll:m,ariaLabels:p,nextLabel:f,previousLabel:y,onYearSelect:g,onMonthSelect:h,onYearMouseEnter:b,onMonthMouseEnter:k,onNextMonth:v,onPreviousMonth:S,onNextYear:P,onPreviousYear:C,onNextDecade:V,onPreviousDecade:D,withCellSpacing:j,highlightToday:x,__updateDateOnYearSelect:$,__updateDateOnMonthSelect:A,withWeekNumbers:N,firstDayOfWeek:w,weekdayFormat:T,weekendDays:_,getDayProps:I,excludeDate:B,renderDay:E,hideOutsideDates:W,hideWeekdays:z,getDayAriaLabel:F,monthLabelFormat:O,monthsListFormat:R,getMonthControlProps:L,yearLabelFormat:q,yearsListFormat:H,getYearControlProps:Q,decadeLabelFormat:U,allowSingleDateInRange:G,allowDeselect:J,minDate:K,maxDate:M,locale:X,...Y}=e;return{calendarProps:{maxLevel:t,minLevel:a,defaultLevel:l,level:n,onLevelChange:r,nextIcon:i,previousIcon:o,date:u,defaultDate:s,onDateChange:d,numberOfColumns:c,columnsToScroll:m,ariaLabels:p,nextLabel:f,previousLabel:y,onYearSelect:g,onMonthSelect:h,onYearMouseEnter:b,onMonthMouseEnter:k,onNextMonth:v,onPreviousMonth:S,onNextYear:P,onPreviousYear:C,onNextDecade:V,onPreviousDecade:D,withCellSpacing:j,highlightToday:x,__updateDateOnYearSelect:$,__updateDateOnMonthSelect:A,withWeekNumbers:N,firstDayOfWeek:w,weekdayFormat:T,weekendDays:_,getDayProps:I,excludeDate:B,renderDay:E,hideOutsideDates:W,hideWeekdays:z,getDayAriaLabel:F,monthLabelFormat:O,monthsListFormat:R,getMonthControlProps:L,yearLabelFormat:q,yearsListFormat:H,getYearControlProps:Q,decadeLabelFormat:U,allowSingleDateInRange:G,allowDeselect:J,minDate:K,maxDate:M,locale:X},others:Y}}},95463:(e,t,a)=>{a.d(t,{E:()=>i});var l=a(31085);a(23464);var n=a(65695),r=a(16088);function i({value:e,type:t,name:a,form:i}){return(0,l.jsx)("input",{type:"hidden",value:function(e,t){let a=(0,r.E)(),l=e=>(0,n.C)("remove",e,a.getTimezone()).toISOString();if("range"===t&&Array.isArray(e)){let[t,a]=e;return t?a?`${l(t)} \u2013 ${l(a)}`:`${l(t)} \u2013`:""}return"multiple"===t&&Array.isArray(e)?e.map(e=>e&&l(e)).filter(Boolean).join(", "):!Array.isArray(e)&&e?l(e):""}(e,t),name:a,form:i})}i.displayName="@mantine/dates/HiddenDatesInput"},44741:(e,t,a)=>{a.d(t,{_:()=>p});var l=a(31085),n=a(54357),r=a(6754),i=a(21664),o=a(34452),u=a(19042),s=a(35764),d=a(95463),c={input:"m_6fa5e2aa"};let m={},p=(0,r.P9)((e,t)=>{let{inputProps:a,wrapperProps:r,placeholder:p,classNames:f,styles:y,unstyled:g,popoverProps:h,modalProps:b,dropdownType:k,children:v,formattedValue:S,dropdownHandlers:P,dropdownOpened:C,onClick:V,clearable:D,onClear:j,clearButtonProps:x,rightSection:$,shouldClear:A,readOnly:N,disabled:w,value:T,name:_,form:I,type:B,...E}=(0,i.I)("PickerInputBase",m,e),W=(0,l.jsx)(o.p.ClearButton,{onClick:j,unstyled:g,...x}),z=()=>{"range"===B&&Array.isArray(T)&&T[0]&&!T[1]&&j(),P.close()};return(0,l.jsxs)(l.Fragment,{children:["modal"===k&&!N&&(0,l.jsx)(u.a,{opened:C,onClose:z,withCloseButton:!1,size:"auto","data-dates-modal":!0,unstyled:g,...b,children:v}),(0,l.jsx)(o.p.Wrapper,{...r,children:(0,l.jsxs)(s.A,{position:"bottom-start",opened:C,trapFocus:!0,returnFocus:!1,unstyled:g,...h,disabled:h?.disabled||"modal"===k||N,onChange:e=>{e||(h?.onClose?.(),z())},children:[(0,l.jsx)(s.A.Target,{children:(0,l.jsx)(o.p,{"data-dates-input":!0,"data-read-only":N||void 0,disabled:w,component:"button",type:"button",multiline:!0,onClick:e=>{V?.(e),P.toggle()},__clearSection:W,__clearable:D&&A&&!N&&!w,rightSection:$,...a,ref:t,classNames:{...f,input:(0,n.A)(c.input,f?.input)},...E,children:S||(0,l.jsx)(o.p.Placeholder,{error:a.error,unstyled:g,className:f?.placeholder,style:y?.placeholder,children:p})})}),(0,l.jsx)(s.A.Dropdown,{"data-dates-dropdown":!0,children:v})]})}),(0,l.jsx)(d.E,{value:T,name:_,form:I,type:B})]})});p.classes=c,p.displayName="@mantine/dates/PickerInputBase"},10956:(e,t,a)=>{a.d(t,{j:()=>o});var l=a(92051),n=a(16088),r=a(23464),i=a(47117);function o({type:e,value:t,defaultValue:a,onChange:o,locale:u,format:s,closeOnChange:d,sortDates:c,labelSeparator:m,valueFormatter:p}){let f=(0,n.E)(),[y,g]=(0,l.j)(!1),[h,b]=(0,i.w)({type:e,value:t,defaultValue:a,onChange:o}),k=function({formatter:e,...t}){return(e||function({type:e,date:t,locale:a,format:l,labelSeparator:n}){let i=e=>r(e).locale(a).format(l);if("default"===e)return null===t?"":i(t);if("multiple"===e)return t.map(i).join(", ");if("range"===e&&Array.isArray(t)){if(t[0]&&t[1])return`${i(t[0])} ${n} ${i(t[1])}`;if(t[0])return`${i(t[0])} ${n} `}return""})(t)}({type:e,date:h,locale:f.getLocale(u),format:s,labelSeparator:f.getLabelSeparator(m),formatter:p}),v=t=>{d&&("default"===e&&g.close(),"range"===e&&t[0]&&t[1]&&g.close()),c&&"multiple"===e?b([...t].sort((e,t)=>e.getTime()-t.getTime())):b(t)},S="range"===e?!!h[0]:"multiple"===e?h.length>0:null!==h;return{_value:h,setValue:v,onClear:()=>v("range"===e?[null,null]:"multiple"===e?[]:null),shouldClear:S,formattedValue:k,dropdownOpened:y,dropdownHandlers:g}}},87704:(e,t,a)=>{a.d(t,{k:()=>o});var l=a(23464),n=a(14041),r=a(47117);function i(e,t){let a=[...t].sort((e,t)=>e.getTime()-t.getTime());return l(a[0]).startOf("day").subtract(1,"ms").isBefore(e)&&l(a[1]).endOf("day").add(1,"ms").isAfter(e)}function o({type:e,level:t,value:a,defaultValue:o,onChange:u,allowSingleDateInRange:s,allowDeselect:d,onMouseLeave:c,applyTimezone:m=!0}){let[p,f]=(0,r.w)({type:e,value:a,defaultValue:o,onChange:u,applyTimezone:m}),[y,g]=(0,n.useState)("range"===e&&p[0]&&!p[1]?p[0]:null),[h,b]=(0,n.useState)(null),k=e=>y instanceof Date&&h instanceof Date?i(e,[h,y]):p[0]instanceof Date&&p[1]instanceof Date&&i(e,p),v="range"===e?e=>{c?.(e),b(null)}:c,S=e=>p[0]instanceof Date&&!!l(e).isSame(p[0],t)&&!(h&&l(h).isBefore(p[0])),P=e=>p[1]instanceof Date?l(e).isSame(p[1],t):p[0]instanceof Date&&!!h&&l(h).isBefore(p[0])&&l(e).isSame(p[0],t),C="range"===e&&y?b:()=>{};return(0,n.useEffect)(()=>{if("range"===e){if(p[0]&&!p[1]&&y?.getTime()!==p[0].getTime())g(p[0]);else{let e=null==p[0]&&null==p[1],t=null!=p[0]&&null!=p[1];(e||t)&&(g(null),b(null))}}},[p]),{onDateChange:a=>{if("range"===e){if(y instanceof Date&&!p[1]){if(l(a).isSame(y,t)&&!s){g(null),b(null),f([null,null]);return}let e=[a,y];e.sort((e,t)=>e.getTime()-t.getTime()),f(e),b(null),g(null);return}if(p[0]&&!p[1]&&l(a).isSame(p[0],t)&&!s){g(null),b(null),f([null,null]);return}f([a,null]),b(null),g(a);return}if("multiple"===e){p.some(e=>l(e).isSame(a,t))?f(p.filter(e=>!l(e).isSame(a,t))):f([...p,a]);return}p&&d&&l(a).isSame(p,t)?f(null):f(a)},onRootMouseLeave:v,onHoveredDateChange:C,getControlProps:a=>{if("range"===e)return{selected:p.some(e=>e&&l(e).isSame(a,t)),inRange:k(a),firstInRange:S(a),lastInRange:P(a),"data-autofocus":!!p[0]&&l(p[0]).isSame(a,t)||void 0};if("multiple"===e)return{selected:p.some(e=>e&&l(e).isSame(a,t)),"data-autofocus":!!p[0]&&l(p[0]).isSame(a,t)||void 0};let n=l(p).isSame(a,t);return{selected:n,"data-autofocus":n||void 0}},_value:p,setValue:f}}},75295:(e,t,a)=>{a.d(t,{U:()=>r});var l=a(23464),n=a(65695);function r({minDate:e,maxDate:t,timezone:a}){let r=(0,n.C)("add",new Date,a);return e||t?e&&l(r).isBefore(e)?e:t&&l(r).isAfter(t)?t:r:r}},92051:(e,t,a)=>{a.d(t,{j:()=>n});var l=a(14041);function n(e=!1,t){let{onOpen:a,onClose:r}=t||{},[i,o]=(0,l.useState)(e),u=(0,l.useCallback)(()=>{o(e=>e||(a?.(),!0))},[a]),s=(0,l.useCallback)(()=>{o(e=>e?(r?.(),!1):e)},[r]),d=(0,l.useCallback)(()=>{i?s():u()},[s,u,i]);return[i,{open:u,close:s,toggle:d}]}}}]);