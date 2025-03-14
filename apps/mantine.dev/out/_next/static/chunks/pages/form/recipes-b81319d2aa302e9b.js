(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31574],{73493:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/recipes",function(){return o(2753)}])},2753:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>P});var r=o(31085),n=o(71184),a=o(14041),l=o(90275),i=o(87858),s=o(23719);let m={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",initialValues:{email:"",terms:!1}});return(0,a.useEffect)(()=>{new Promise(e=>{setTimeout(()=>e({email:"test@email",terms:!0}),2e3)}).then(t=>{e.setValues(t),e.resetDirty(t)})},[]),(0,r.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,r.jsx)(l.k,{label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,r.jsx)(i.S,{mt:"sm",label:"I accept terms and conditions",...e.getInputProps("terms",{type:"checkbox"})},e.key("terms"))]})},code:`
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Checkbox } from '@mantine/core';

interface FormValues {
  email: string;
  terms: boolean;
}

function loadInitialValues(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ email: 'test@email', terms: true }), 2000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { email: '', terms: false },
  });

  useEffect(() => {
    loadInitialValues().then((values) => {
      form.setValues(values);
      form.resetDirty(values);
    });
  }, []);

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <Checkbox
        mt="sm"
        label="I accept terms and conditions"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </form>
  );
}
`,centered:!0,maxWidth:340};var d=o(34056);let p={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",initialValues:{name:"",occupation:""},onValuesChange:e=>{window.localStorage.setItem("user-form",JSON.stringify(e))}});return(0,a.useEffect)(()=>{if(window.localStorage.getItem("user-form"))try{e.setValues(JSON.parse(window.localStorage.getItem("user-form")))}catch(e){console.log("Failed to parse stored value")}},[]),(0,r.jsxs)(d.a,{maw:340,mx:"auto",children:[(0,r.jsx)(l.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,r.jsx)(l.k,{mt:"md",label:"Occupation",placeholder:"Occupation",...e.getInputProps("occupation")},e.key("occupation"))]})},code:`
import { useEffect } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', occupation: '' },
    onValuesChange: (values) => {
      window.localStorage.setItem('user-form', JSON.stringify(values));
    },
  });

  useEffect(() => {
    const storedValue = window.localStorage.getItem('user-form');
    if (storedValue) {
      try {
        form.setValues(JSON.parse(window.localStorage.getItem('user-form')!));
      } catch (e) {
        console.log('Failed to parse stored value');
      }
    }
  }, []);

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Occupation"
        placeholder="Occupation"
        key={form.key('occupation')}
        {...form.getInputProps('occupation')}
      />
    </Box>
  );
}
`};var u=o(44956),c=o(21848),f=o(56051),h=o(73687),x=o(52022),y=o(63297);let g={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",initialValues:{employees:[{name:"John Doe",email:"john@mantine.dev",key:(0,y.z)()},{name:"Bill Love",email:"bill@mantine.dev",key:(0,y.z)()},{name:"Nancy Eagle",email:"nanacy@mantine.dev",key:(0,y.z)()},{name:"Lim Notch",email:"lim@mantine.dev",key:(0,y.z)()},{name:"Susan Seven",email:"susan@mantine.dev",key:(0,y.z)()}]}}),t=e.getValues().employees.map((t,o)=>(0,r.jsx)(u.sx,{index:o,draggableId:t.key,children:t=>(0,r.jsxs)(f.Y,{ref:t.innerRef,mt:"xs",...t.draggableProps,children:[(0,r.jsx)(h.o,{...t.dragHandleProps,children:(0,r.jsx)(c.A,{size:18})}),(0,r.jsx)(l.k,{placeholder:"John Doe",...e.getInputProps(`employees.${o}.name`)},e.key(`employees.${o}.name`)),(0,r.jsx)(l.k,{placeholder:"example@mail.com",...e.getInputProps(`employees.${o}.email`)},e.key(`employees.${o}.email`))]})},t.key));return(0,r.jsxs)("div",{children:[(0,r.jsx)(u.JY,{onDragEnd:({destination:t,source:o})=>t?.index!==void 0&&e.reorderListItem("employees",{from:o.index,to:t?.index}),children:(0,r.jsx)(u.gL,{droppableId:"dnd-list",direction:"vertical",children:e=>(0,r.jsxs)("div",{...e.droppableProps,ref:e.innerRef,children:[t,e.placeholder]})})}),(0,r.jsx)(f.Y,{justify:"center",mt:"md",children:(0,r.jsx)(x.$,{onClick:()=>e.insertListItem("employees",{name:"",email:"",key:(0,y.z)()}),children:"Add employee"})})]})},code:`
import { Group, TextInput, Button, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [
        { name: 'John Doe', email: 'john@mantine.dev', key: randomId() },
        { name: 'Bill Love', email: 'bill@mantine.dev', key: randomId() },
        { name: 'Nancy Eagle', email: 'nanacy@mantine.dev', key: randomId() },
        { name: 'Lim Notch', email: 'lim@mantine.dev', key: randomId() },
        { name: 'Susan Seven', email: 'susan@mantine.dev', key: randomId() },
      ],
    },
  });

  const fields = form.getValues().employees.map((item, index) => (
    <Draggable key={item.key} index={index} draggableId={item.key}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <IconGripVertical size={18} />
          </Center>
          <TextInput
            placeholder="John Doe"
            key={form.key(\`employees.\${index}.name\`)}
            {...form.getInputProps(\`employees.\${index}.name\`)}
          />
          <TextInput
            placeholder="example@mail.com"
            key={form.key(\`employees.\${index}.email\`)}
            {...form.getInputProps(\`employees.\${index}.email\`)}
          />
        </Group>
      )}
    </Draggable>
  ));

  return (
    <div>
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          destination?.index !== undefined && form.reorderListItem('employees', { from: source.index, to: destination.index })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Group justify="center" mt="md">
        <Button onClick={() => form.insertListItem('employees', { name: '', email: '', key: randomId() })}>
          Add employee
        </Button>
      </Group>
    </div>
  );
}
`,centered:!0,maxWidth:440};var v=o(70967),b=o(52404),k=o(37905);let I={type:"code",component:function(){let[e,t]=(0,a.useState)(0),o=(0,s.m)({mode:"uncontrolled",initialValues:{username:"",password:"",name:"",email:"",website:"",github:""},validate:t=>0===e?{username:t.username.trim().length<6?"Username must include at least 6 characters":null,password:t.password.length<6?"Password must include at least 6 characters":null}:1===e?{name:t.name.trim().length<2?"Name must include at least 2 characters":null,email:/^\S+@\S+$/.test(t.email)?null:"Invalid email"}:{}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(v.C,{active:e,children:[(0,r.jsxs)(v.C.Step,{label:"First step",description:"Profile settings",children:[(0,r.jsx)(l.k,{label:"Username",placeholder:"Username",...o.getInputProps("username")},o.key("username")),(0,r.jsx)(b.y,{mt:"md",label:"Password",placeholder:"Password",...o.getInputProps("password")},o.key("password"))]}),(0,r.jsxs)(v.C.Step,{label:"Second step",description:"Personal information",children:[(0,r.jsx)(l.k,{label:"Name",placeholder:"Name",...o.getInputProps("name")},o.key("name")),(0,r.jsx)(l.k,{mt:"md",label:"Email",placeholder:"Email",...o.getInputProps("email")},o.key("email"))]}),(0,r.jsxs)(v.C.Step,{label:"Final step",description:"Social media",children:[(0,r.jsx)(l.k,{label:"Website",placeholder:"Website",...o.getInputProps("website")},o.key("website")),(0,r.jsx)(l.k,{mt:"md",label:"GitHub",placeholder:"GitHub",...o.getInputProps("github")},o.key("github"))]}),(0,r.jsxs)(v.C.Completed,{children:["Completed! Form values:",(0,r.jsx)(k.C,{block:!0,mt:"xl",children:JSON.stringify(o.getValues(),null,2)})]})]}),(0,r.jsxs)(f.Y,{justify:"flex-end",mt:"xl",children:[0!==e&&(0,r.jsx)(x.$,{variant:"default",onClick:()=>t(e=>e>0?e-1:e),children:"Back"}),3!==e&&(0,r.jsx)(x.$,{onClick:()=>t(e=>o.validate().hasErrors?e:e<3?e+1:e),children:"Next step"})]})]})},code:`
import { useState } from 'react';
import { Stepper, Button, Group, TextInput, PasswordInput, Code } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const [active, setActive] = useState(0);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
      name: '',
      email: '',
      website: '',
      github: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          username:
            values.username.trim().length < 6
              ? 'Username must include at least 6 characters'
              : null,
          password:
            values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        };
      }

      if (active === 1) {
        return {
          name: values.name.trim().length < 2 ? 'Name must include at least 2 characters' : null,
          email: /^\\S+@\\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }

      return {};
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active}>
        <Stepper.Step label="First step" description="Profile settings">
          <TextInput
            label="Username"
            placeholder="Username"
            key={form.key('username')}
            {...form.getInputProps('username')}
          />
          <PasswordInput
            mt="md"
            label="Password"
            placeholder="Password"
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Personal information">
          <TextInput
            label="Name"
            placeholder="Name"
            key={form.key('name')}
            {...form.getInputProps('name')}
          />
          <TextInput
            mt="md"
            label="Email"
            placeholder="Email"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
        </Stepper.Step>

        <Stepper.Step label="Final step" description="Social media">
          <TextInput
            label="Website"
            placeholder="Website"
            key={form.key('website')}
            {...form.getInputProps('website')}
          />
          <TextInput
            mt="md"
            label="GitHub"
            placeholder="GitHub"
            key={form.key('github')}
            {...form.getInputProps('github')}
          />
        </Stepper.Step>
        <Stepper.Completed>
          Completed! Form values:
          <Code block mt="xl">
            {JSON.stringify(form.getValues(), null, 2)}
          </Code>
        </Stepper.Completed>
      </Stepper>

      <Group justify="flex-end" mt="xl">
        {active !== 0 && (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        {active !== 3 && <Button onClick={nextStep}>Next step</Button>}
      </Group>
    </>
  );
}
`};var C=o(85954),w=o(38215);let S=(0,C.P)(w.XZ.formRecipes);function j(e){let t={h2:"h2",...(0,n.R)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"set-initial-values-with-async-request",children:"Set initial values with async request"}),"\n",(0,r.jsx)(o,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"save-form-values-to-local-storage",children:"Save form values to local storage"}),"\n",(0,r.jsx)(o,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"list-items-reordering",children:"List items reordering"}),"\n",(0,r.jsx)(o,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"form-with-multiple-steps",children:"Form with multiple steps"}),"\n",(0,r.jsx)(o,{data:I})]})}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(S,{...e,children:(0,r.jsx)(j,{...e})})}},52404:(e,t,o)=>{"use strict";o.d(t,{y:()=>b});var r=o(31085),n=o(54357),a=o(97567),l=o(82307);o(14041);var i=o(33450),s=o(7098),m=o(36456),d=o(69564),p=o(29686),u=o(18315),c=o(6754),f=o(22962),h=o(34452),x=o(87059),y={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let g={visibilityToggleIcon:({reveal:e})=>(0,r.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,r.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},v=(0,s.V)((e,{size:t})=>({root:{"--psi-icon-size":(0,i.YC)(t,"psi-icon-size"),"--psi-button-size":(0,i.YC)(t,"psi-button-size")}})),b=(0,c.P9)((e,t)=>{let o=(0,p.Y)("PasswordInput",g,e),{classNames:i,className:s,style:c,styles:x,unstyled:b,vars:k,required:I,error:C,leftSection:w,disabled:S,id:j,variant:P,inputContainer:D,description:E,label:N,size:V,errorProps:F,descriptionProps:T,labelProps:_,withAsterisk:B,inputWrapperOrder:L,wrapperProps:z,radius:G,rightSection:O,rightSectionWidth:$,rightSectionPointerEvents:J,leftSectionWidth:M,visible:A,defaultVisible:R,onVisibilityChange:Y,visibilityToggleIcon:Z,visibilityToggleButtonProps:W,rightSectionProps:H,leftSectionProps:U,leftSectionPointerEvents:X,withErrorStyles:q,mod:K,...Q}=o,ee=(0,a.B)(j),[et,eo]=(0,l.Z)({value:A,defaultValue:R,finalValue:!1,onChange:Y}),er=()=>eo(!et),en=(0,d.I)({name:"PasswordInput",classes:y,props:o,className:s,style:c,classNames:i,styles:x,unstyled:b,vars:k,varsResolver:v}),{resolvedClassNames:ea,resolvedStyles:el}=(0,m.Y)({classNames:i,styles:x,props:o}),{styleProps:ei,rest:es}=(0,u.j)(Q),em=(0,r.jsx)(f.M,{...en("visibilityToggle"),disabled:S,radius:G,"aria-hidden":!W,tabIndex:-1,...W,variant:W?.variant??"subtle",color:"gray",unstyled:b,onTouchEnd:e=>{e.preventDefault(),W?.onTouchEnd?.(e),er()},onMouseDown:e=>{e.preventDefault(),W?.onMouseDown?.(e),er()},onKeyDown:e=>{W?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),er())},children:(0,r.jsx)(Z,{reveal:et})});return(0,r.jsx)(h.p.Wrapper,{required:I,id:ee,label:N,error:C,description:E,size:V,classNames:ea,styles:el,__staticSelector:"PasswordInput",errorProps:F,descriptionProps:T,unstyled:b,withAsterisk:B,inputWrapperOrder:L,inputContainer:D,variant:P,labelProps:{..._,htmlFor:ee},mod:K,...en("root"),...ei,...z,children:(0,r.jsx)(h.p,{component:"div",error:C,leftSection:w,size:V,classNames:{...ea,input:(0,n.A)(y.input,ea.input)},styles:el,radius:G,disabled:S,__staticSelector:"PasswordInput",rightSectionWidth:$,rightSection:O??em,variant:P,unstyled:b,leftSectionWidth:M,rightSectionPointerEvents:J||"all",rightSectionProps:H,leftSectionProps:U,leftSectionPointerEvents:X,withAria:!1,withErrorStyles:q,children:(0,r.jsx)("input",{required:I,"data-invalid":!!C||void 0,"data-with-left-section":!!w||void 0,...en("innerInput"),disabled:S,id:ee,ref:t,...es,autoComplete:es.autoComplete||"off",type:et?"text":"password"})})})});b.classes={...x.O.classes,...y},b.displayName="@mantine/core/PasswordInput"}},e=>{var t=t=>e(e.s=t);e.O(0,[56796,67456,11011,85954,23719,90636,46593,38792],()=>t(73493)),_N_E=e.O()}]);