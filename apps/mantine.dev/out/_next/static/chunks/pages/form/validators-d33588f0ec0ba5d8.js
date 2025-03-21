(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10220],{38792:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var r,o,i,a=i[o];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},27225:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/validators",function(){return n(94944)}])},94944:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var r=n(31085),o=n(71184),i=n(90275),a=n(1169),l=n(56051),s=n(52022),m=n(23719),u=n(41871),c=n(84097),d=n(28887),h=n(27351),p=n(15659);let f={type:"code",component:function(){let e=(0,m.m)({mode:"uncontrolled",initialValues:{name:"",job:"",email:"",favoriteColor:"",age:18},validate:{name:(0,u.J)({min:2,max:10},"Name must be 2-10 characters long"),job:(0,c.h)("Enter your current job"),email:(0,d.x)("Invalid email"),favoriteColor:(0,h.c)(/^#([0-9a-f]{3}){1,2}$/,"Enter a valid hex color"),age:(0,p.h)({min:18,max:99},"You must be 18-99 years old to register")}});return(0,r.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[(0,r.jsx)(i.k,{label:"Name",placeholder:"Name",withAsterisk:!0,...e.getInputProps("name")},e.key("name")),(0,r.jsx)(i.k,{label:"Your job",placeholder:"Your job",withAsterisk:!0,mt:"md",...e.getInputProps("job")},e.key("job")),(0,r.jsx)(i.k,{label:"Your email",placeholder:"Your email",withAsterisk:!0,mt:"md",...e.getInputProps("email")},e.key("email")),(0,r.jsx)(i.k,{label:"Your favorite color",placeholder:"Your favorite color",withAsterisk:!0,mt:"md",...e.getInputProps("favoriteColor")},e.key("favoriteColor")),(0,r.jsx)(a.Q,{label:"Your age",placeholder:"Your age",withAsterisk:!0,mt:"md",...e.getInputProps("age")},e.key("age")),(0,r.jsx)(l.Y,{justify:"flex-end",mt:"md",children:(0,r.jsx)(s.$,{type:"submit",children:"Submit"})})]})},code:`
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        key={form.key('job')}
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        key={form.key('favoriteColor')}
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        key={form.key('age')}
        {...form.getInputProps('age')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,centered:!0,maxWidth:340},g={type:"code",component:function(){let e=(0,m.m)({mode:"uncontrolled",initialValues:{name:"",job:"",email:"",favoriteColor:"",age:18},validate:{name:(0,u.J)({min:2,max:10}),job:(0,c.h)(),email:(0,d.x)(),favoriteColor:(0,h.c)(/^#([0-9a-f]{3}){1,2}$/),age:(0,p.h)({min:18,max:99})}});return(0,r.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[(0,r.jsx)(i.k,{label:"Name",placeholder:"Name",withAsterisk:!0,...e.getInputProps("name")},e.key("name")),(0,r.jsx)(i.k,{label:"Your job",placeholder:"Your job",withAsterisk:!0,mt:"md",...e.getInputProps("job")},e.key("job")),(0,r.jsx)(i.k,{label:"Your email",placeholder:"Your email",withAsterisk:!0,mt:"md",...e.getInputProps("email")},e.key("email")),(0,r.jsx)(i.k,{label:"Your favorite color",placeholder:"Your favorite color",withAsterisk:!0,mt:"md",...e.getInputProps("favoriteColor")},e.key("favoriteColor")),(0,r.jsx)(a.Q,{label:"Your age",placeholder:"Your age",withAsterisk:!0,mt:"md",...e.getInputProps("age")},e.key("age")),(0,r.jsx)(l.Y,{justify:"flex-end",mt:"md",children:(0,r.jsx)(s.$,{type:"submit",children:"Submit"})})]})},code:`
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }),
      job: isNotEmpty(),
      email: isEmail(),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/),
      age: isInRange({ min: 18, max: 99 }),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        key={form.key('job')}
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        key={form.key('favoriteColor')}
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        key={form.key('age')}
        {...form.getInputProps('age')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,centered:!0,maxWidth:340};var b=n(85954),x=n(38215);let v=(0,b.P)(x.XZ.formValidators);function j(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@mantine/form"})," package exports several functions that can be used in ",(0,r.jsx)(t.a,{href:"/form/validation/#validation-with-rules-object",children:"validation rules object"}),".\nValidation functions are tiny in size and provide basic validation, if you have complex validation requirements, use other types of ",(0,r.jsx)(t.a,{href:"/form/validation/",children:"validation"}),"."]}),"\n",(0,r.jsx)(n,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"optional-error",children:"Optional error"}),"\n",(0,r.jsx)(t.p,{children:"Last argument of all validator functions below is optional. If error is not set, then fields with failed validation will\nonly have invalid styles without error message:"}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"isnotempty",children:"isNotEmpty"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isNotEmpty"})," checks that form value is not empty. Empty string, empty array, ",(0,r.jsx)(t.code,{children:"false"}),", ",(0,r.jsx)(t.code,{children:"null"})," and ",(0,r.jsx)(t.code,{children:"undefined"}),"\nvalues are considered to be empty. Strings are trimmed before validation."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { isNotEmpty, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    name: '',\n    acceptTermsOfUse: false,\n    country: null,\n    previousJobs: [],\n  },\n\n  validate: {\n    // Empty strings are considered to be invalid\n    name: isNotEmpty('Name cannot be empty'),\n\n    // False value is considered to be invalid\n    acceptTermsOfUse: isNotEmpty('You must accept terms of use'),\n\n    // null is considered to be invalid\n    country: isNotEmpty('Pick your country'),\n\n    // Empty arrays are considered to be invalid\n    previousJobs: isNotEmpty('Enter at least one job'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"isemail",children:"isEmail"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isEmail"})," uses ",(0,r.jsx)(t.code,{children:"/^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,})+$/"})," regexp to determine whether form value is an email:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { isEmail, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    email: '',\n  },\n\n  validate: {\n    email: isEmail('Invalid email'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"matches",children:"matches"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"matches"})," checks whether form value matches given regexp. If form value is not a string, validation will be failed."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { matches, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    color: '',\n  },\n\n  validate: {\n    color: matches(/^#([0-9a-f]{3}){1,2}$/, 'Invalid color'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"isinrange",children:"isInRange"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isInRange"})," checks whether form value is within given ",(0,r.jsx)(t.code,{children:"min"}),"-",(0,r.jsx)(t.code,{children:"max"})," range. If form value is not a number, validation will be failed."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { isInRange, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    maxRange: 0,\n    minRange: 0,\n    minMaxRange: 0,\n  },\n\n  validate: {\n    maxRange: isInRange({ max: 20 }, 'Value must be 20 or less'),\n    minRange: isInRange({ min: 10 }, 'Value must be 10 or more'),\n    minMaxRange: isInRange(\n      { min: 10, max: 20 },\n      'Value must be between 10 and 20'\n    ),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"haslength",children:"hasLength"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"hasLength"})," check whether form value length is within given ",(0,r.jsx)(t.code,{children:"min"}),"-",(0,r.jsx)(t.code,{children:"max"})," range.\n",(0,r.jsx)(t.code,{children:"hasLength"})," will work correctly with strings, arrays and any other objects that have ",(0,r.jsx)(t.code,{children:"length"})," property.\nStrings are trimmed before validation."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { hasLength, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    exact: '',\n    maxLength: '',\n    minLength: '',\n    minMaxLength: '',\n  },\n\n  validate: {\n    exact: hasLength(5, 'Values must have exactly 5 characters'),\n    maxLength: hasLength(\n      { max: 20 },\n      'Value must have 20 or less characters'\n    ),\n    minLength: hasLength(\n      { min: 10 },\n      'Value must have 10  or more characters'\n    ),\n    minMaxLength: hasLength(\n      { min: 10, max: 20 },\n      'Value must have 10-20 characters'\n    ),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"matchesfield",children:"matchesField"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"matchesField"})," checks whether form value is the same as value in other form field.\nNote that ",(0,r.jsx)(t.code,{children:"matchesField"})," can only work with primitive values (arrays and objects cannot be compared)."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { matchesField, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    password: '',\n    confirmPassword: '',\n  },\n\n  validate: {\n    confirmPassword: matchesField(\n      'password',\n      'Passwords are not the same'\n    ),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"isjsonstring",children:"isJSONString"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isJSONString"})," checks whether form value is a valid JSON string."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { isJSONString, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    json: '',\n  },\n\n  validate: {\n    json: isJSONString('Invalid JSON string'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"isnotemptyhtml",children:"isNotEmptyHTML"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isNotEmptyHTML"})," checks that form value is not an empty HTML string. Empty string, string with only HTML tags and whitespace are considered to be empty."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { isNotEmptyHTML, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    html: '',\n  },\n\n  validate: {\n    html: isNotEmptyHTML('HTML cannot be empty'),\n  },\n});\n"})})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(v,{...e,children:(0,r.jsx)(j,{...e})})}},74015:(e,t,n)=>{"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,i,a=0,l=Object.prototype.toString.call(e);if("[object Object]"===l?i=Object.create(e.__proto__||null):"[object Array]"===l?i=Array(e.length):"[object Set]"===l?(i=new Set,e.forEach(function(e){i.add(o(e))})):"[object Map]"===l?(i=new Map,e.forEach(function(e,t){i.set(o(t),o(e))})):"[object Date]"===l?i=new Date(+e):"[object RegExp]"===l?i=new RegExp(e.source,e.flags):"[object DataView]"===l?i=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===l?i=e.slice(0):"Array]"===l.slice(-6)&&(i=new e.constructor(e)),i){for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r(i,n[a],Object.getOwnPropertyDescriptor(e,n[a]));for(a=0,n=Object.getOwnPropertyNames(e);a<n.length;a++)Object.hasOwnProperty.call(i,t=n[a])&&i[t]===e[t]||r(i,t,Object.getOwnPropertyDescriptor(e,t))}return i||e}n.d(t,{Q:()=>o})},1169:(e,t,n)=>{"use strict";n.d(t,{Q:()=>A});var r=n(31085),o=n(14041),i=n(54357),a=n(57715),l=n(82307),s=n(68193),m=n(34321),u=n(1962),c=n(33450),d=n(7098),h=n(36456),p=n(69564),f=n(29686),g=n(6754),b=n(87059),x=n(33970);function v({direction:e,style:t,...n}){return(0,r.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var j={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let y=/^(0\.0*|-0(\.0*)?)$/,w=/^-?0\d+(\.\d+)?\.?$/;function N(e){return"string"==typeof e&&""!==e&&!Number.isNaN(Number(e))}function k(e){return"number"==typeof e?e<Number.MAX_SAFE_INTEGER:""===e||N(e)&&Number(e)<Number.MAX_SAFE_INTEGER}function I(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let E={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},S=(0,d.V)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,c.YC)(t,"ni-chevron-size")}})),A=(0,g.P9)((e,t)=>{let n=(0,f.Y)("NumberInput",E,e),{className:c,classNames:d,styles:g,unstyled:A,vars:P,onChange:Y,onValueChange:F,value:O,defaultValue:_,max:L,min:R,step:T,hideControls:V,rightSection:M,isAllowed:C,clampBehavior:D,onBlur:$,allowDecimal:B,decimalScale:G,onKeyDown:J,onKeyDownCapture:z,handlersRef:H,startValue:Z,disabled:X,rightSectionPointerEvents:U,allowNegative:q,readOnly:Q,size:K,rightSectionWidth:W,stepHoldInterval:ee,stepHoldDelay:et,allowLeadingZeros:en,withKeyboardEvents:er,trimLeadingZeroesOnBlur:eo,...ei}=n,ea=(0,p.I)({name:"NumberInput",classes:j,props:n,classNames:d,styles:g,unstyled:A,vars:P,varsResolver:S}),{resolvedClassNames:el,resolvedStyles:es}=(0,h.Y)({classNames:d,styles:g,props:n}),[em,eu]=(0,l.Z)({value:O,defaultValue:_,finalValue:"",onChange:Y}),ec=void 0!==et&&void 0!==ee,ed=(0,o.useRef)(null),eh=(0,o.useRef)(null),ep=(0,o.useRef)(0),ef=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},eg=e=>{ed.current&&void 0!==e&&ed.current.setSelectionRange(e,e)},eb=(0,o.useRef)(u.l);eb.current=()=>{let e;if(!k(em))return;let t=Math.max(ef(em),ef(T)),n=10**t;if(!N(em)&&("number"!=typeof em||Number.isNaN(em)))e=(0,s.q)(Z,R,L);else if(void 0!==L){let t=(Math.round(Number(em)*n)+Math.round(T*n))/n;e=t<=L?t:L}else e=(Math.round(Number(em)*n)+Math.round(T*n))/n;let r=e.toFixed(t);eu(parseFloat(r)),F?.({floatValue:parseFloat(r),formattedValue:r,value:r},{source:"increment"}),setTimeout(()=>eg(ed.current?.value.length),0)};let ex=(0,o.useRef)(u.l);ex.current=()=>{let e;if(!k(em))return;let t=void 0!==R?R:q?Number.MIN_SAFE_INTEGER:0,n=Math.max(ef(em),ef(T)),r=10**n;if(!N(em)&&"number"!=typeof em||Number.isNaN(em))e=(0,s.q)(Z,t,L);else{let n=(Math.round(Number(em)*r)-Math.round(T*r))/r;e=void 0!==t&&n<t?t:n}let o=e.toFixed(n);eu(parseFloat(o)),F?.({floatValue:parseFloat(o),formattedValue:o,value:o},{source:"decrement"}),setTimeout(()=>eg(ed.current?.value.length),0)},(0,m.bl)(H,{increment:eb.current,decrement:ex.current});let ev=e=>{e?eb.current():ex.current(),ep.current+=1},ej=e=>{if(ev(e),ec){let t="number"==typeof ee?ee:ee(ep.current);eh.current=window.setTimeout(()=>ej(e),t)}},ey=(e,t)=>{e.preventDefault(),ed.current?.focus(),ev(t),ec&&(eh.current=window.setTimeout(()=>ej(t),et))},ew=()=>{eh.current&&window.clearTimeout(eh.current),eh.current=null,ep.current=0},eN=(0,r.jsxs)("div",{...ea("controls"),children:[(0,r.jsx)(x.N,{...ea("control"),tabIndex:-1,"aria-hidden":!0,disabled:X||"number"==typeof em&&void 0!==L&&em>=L,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ey(e,!0)},onPointerUp:ew,onPointerLeave:ew,children:(0,r.jsx)(v,{direction:"up"})}),(0,r.jsx)(x.N,{...ea("control"),tabIndex:-1,"aria-hidden":!0,disabled:X||"number"==typeof em&&void 0!==R&&em<=R,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ey(e,!1)},onPointerUp:ew,onPointerLeave:ew,children:(0,r.jsx)(v,{direction:"down"})})]});return(0,r.jsx)(b.O,{component:a.HG,allowNegative:q,className:(0,i.A)(j.root,c),size:K,...ei,readOnly:Q,disabled:X,value:em,getInputRef:(0,m.pc)(t,ed),onValueChange:(e,t)=>{"event"===t.source&&eu(!function(e,t){return("number"==typeof e?e<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(e)))&&!Number.isNaN(e)&&14>t.toString().replace(".","").length&&""!==t}(e.floatValue,e.value)||y.test(e.value)||en&&w.test(e.value)?e.value:e.floatValue),F?.(e,t)},rightSection:V||Q||!k(em)?M:M||eN,classNames:el,styles:es,unstyled:A,__staticSelector:"NumberInput",decimalScale:B?G:0,onKeyDown:e=>{J?.(e),!Q&&er&&("ArrowUp"===e.key&&(e.preventDefault(),eb.current()),"ArrowDown"===e.key&&(e.preventDefault(),ex.current()))},onKeyDownCapture:e=>{if(z?.(e),"Backspace"===e.key){let t=ed.current;0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>eg(0),0))}},rightSectionPointerEvents:U??(X?"none":void 0),rightSectionWidth:W??`var(--ni-right-section-width-${K||"sm"})`,allowLeadingZeros:en,onBlur:e=>{let t=em;if("blur"===D&&"number"==typeof t&&(t=(0,s.q)(t,R,L)),eo&&"string"==typeof t&&15>ef(t)){let e=t.toString().replace(/^0+/,""),n=parseFloat(e);t=Number.isNaN(n)||n>Number.MAX_SAFE_INTEGER?e:(0,s.q)(n,R,L)}em!==t&&eu(t),$?.(e)},isAllowed:e=>"strict"===D?C?C(e)&&I(e.floatValue,R,L):I(e.floatValue,R,L):!C||C(e)})});A.classes={...b.O.classes,...j},A.displayName="@mantine/core/NumberInput"},41871:(e,t,n)=>{"use strict";function r(e,t){if("number"==typeof e)return t.length===e;let{max:n,min:r}=e,o=!0;return"number"==typeof n&&t.length>n&&(o=!1),"number"==typeof r&&t.length<r&&(o=!1),o}function o(e,t){let n=t||!0;return t=>"string"==typeof t?r(e,t.trim())?null:n:"object"==typeof t&&null!==t&&"length"in t&&r(e,t)?null:n}n.d(t,{J:()=>o})},28887:(e,t,n)=>{"use strict";n.d(t,{x:()=>o});var r=n(27351);function o(e){return(0,r.c)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},15659:(e,t,n)=>{"use strict";function r({min:e,max:t},n){let r=n||!0;return n=>{if("number"!=typeof n)return r;let o=!0;return"number"==typeof e&&n<e&&(o=!1),"number"==typeof t&&n>t&&(o=!1),o?null:r}}n.d(t,{h:()=>r})},84097:(e,t,n)=>{"use strict";function r(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}n.d(t,{h:()=>r})},27351:(e,t,n)=>{"use strict";function r(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}n.d(t,{c:()=>r})}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,57715,85954,23719,90636,46593,38792],()=>t(27225)),_N_E=e.O()}]);