(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11200],{76017:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/multi-select",function(){return o(54058)}])},54058:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>eS});var a=o(31085),r=o(71184),l=o(14041),n=o(97567),i=o(82307),s=o(36456),c=o(69564),d=o(29686),u=o(18315),p=o(6754),h=o(46395),m=o(35213),v=o(31791),b=o(65567),f=o(88559),x=o(87059),g=o(31778),j=o(42215),S=o(51513);let y={maxValues:1/0,withCheckIcon:!0,checkIconPosition:"left",hiddenInputValuesDivider:","},w=(0,p.P9)((e,t)=>{let o=(0,d.Y)("MultiSelect",y,e),{classNames:r,className:p,style:x,styles:w,unstyled:P,vars:M,size:V,value:A,defaultValue:k,onChange:C,onKeyDown:D,variant:R,data:Y,dropdownOpened:O,defaultDropdownOpened:I,onDropdownOpen:_,onDropdownClose:E,selectFirstOptionOnChange:W,onOptionSubmit:z,comboboxProps:F,filter:T,limit:B,withScrollArea:N,maxDropdownHeight:G,searchValue:L,defaultSearchValue:$,onSearchChange:Z,readOnly:H,disabled:U,onFocus:J,onBlur:q,onPaste:X,radius:K,rightSection:Q,rightSectionWidth:ee,rightSectionPointerEvents:et,rightSectionProps:eo,leftSection:ea,leftSectionWidth:er,leftSectionPointerEvents:el,leftSectionProps:en,inputContainer:ei,inputWrapperOrder:es,withAsterisk:ec,labelProps:ed,descriptionProps:eu,errorProps:ep,wrapperProps:eh,description:em,label:ev,error:eb,maxValues:ef,searchable:ex,nothingFoundMessage:eg,withCheckIcon:ej,checkIconPosition:eS,hidePickedOptions:ey,withErrorStyles:ew,name:eP,form:eM,id:eV,clearable:eA,clearButtonProps:ek,hiddenInputProps:eC,placeholder:eD,hiddenInputValuesDivider:eR,required:eY,mod:eO,renderOption:eI,onRemove:e_,onClear:eE,scrollAreaProps:eW,chevronColor:ez,...eF}=o,eT=(0,n.B)(eV),eB=(0,h.d)(Y),eN=(0,m.D)(eB),eG=(0,f.B)({opened:O,defaultOpened:I,onDropdownOpen:_,onDropdownClose:()=>{E?.(),eG.resetSelectedOption()}}),{styleProps:eL,rest:{type:e$,autoComplete:eZ,...eH}}=(0,u.j)(eF),[eU,eJ]=(0,i.Z)({value:A,defaultValue:k,finalValue:[],onChange:C}),[eq,eX]=(0,i.Z)({value:L,defaultValue:$,finalValue:"",onChange:Z}),eK=(0,c.I)({name:"MultiSelect",classes:{},props:o,classNames:r,styles:w,unstyled:P}),{resolvedClassNames:eQ,resolvedStyles:e0}=(0,s.Y)({props:o,styles:w,classNames:r}),e1=eU.map((e,t)=>(0,a.jsx)(g.a,{withRemoveButton:!H&&!eN[e]?.disabled,onRemove:()=>{eJ(eU.filter(t=>e!==t)),e_?.(e)},unstyled:P,disabled:U,...eK("pill"),children:eN[e]?.label||e},`${e}-${t}`));(0,l.useEffect)(()=>{W&&eG.selectFirstOption()},[W,eU]);let e9=(0,a.jsx)(v.G.ClearButton,{...ek,onClear:()=>{eE?.(),eJ([]),eX("")}}),e7=function({data:e,value:t}){let o=t.map(e=>e.trim().toLowerCase());return e.reduce((e,t)=>((0,S.c)(t)?e.push({group:t.group,items:t.items.filter(e=>-1===o.indexOf(e.value.toLowerCase().trim()))}):-1===o.indexOf(t.value.toLowerCase().trim())&&e.push(t),e),[])}({data:eB,value:eU}),e4=eA&&eU.length>0&&!U&&!H;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(v.G,{store:eG,classNames:eQ,styles:e0,unstyled:P,size:V,readOnly:H,__staticSelector:"MultiSelect",onOptionSubmit:e=>{z?.(e),eX(""),eG.updateSelectedOptionIndex("selected"),eU.includes(eN[e].value)?(eJ(eU.filter(t=>t!==eN[e].value)),e_?.(eN[e].value)):eU.length<ef&&eJ([...eU,eN[e].value])},...F,children:[(0,a.jsx)(v.G.DropdownTarget,{children:(0,a.jsx)(j.t,{...eL,__staticSelector:"MultiSelect",classNames:eQ,styles:e0,unstyled:P,size:V,className:p,style:x,variant:R,disabled:U,radius:K,__defaultRightSection:(0,a.jsx)(v.G.Chevron,{size:V,error:eb,unstyled:P,color:ez}),__clearSection:e9,__clearable:e4,rightSection:Q,rightSectionPointerEvents:et||(e9?"all":"none"),rightSectionWidth:ee,rightSectionProps:eo,leftSection:ea,leftSectionWidth:er,leftSectionPointerEvents:el,leftSectionProps:en,inputContainer:ei,inputWrapperOrder:es,withAsterisk:ec,labelProps:ed,descriptionProps:eu,errorProps:ep,wrapperProps:eh,description:em,label:ev,error:eb,multiline:!0,withErrorStyles:ew,__stylesApiProps:{...o,rightSectionPointerEvents:et||(e4?"all":"none"),multiline:!0},pointer:!ex,onClick:()=>ex?eG.openDropdown():eG.toggleDropdown(),"data-expanded":eG.dropdownOpened||void 0,id:eT,required:eY,mod:eO,children:(0,a.jsxs)(g.a.Group,{disabled:U,unstyled:P,...eK("pillsList"),children:[e1,(0,a.jsx)(v.G.EventsTarget,{autoComplete:eZ,children:(0,a.jsx)(j.t.Field,{...eH,ref:t,id:eT,placeholder:eD,type:ex||eD?"visible":"hidden",...eK("inputField"),unstyled:P,onFocus:e=>{J?.(e),ex&&eG.openDropdown()},onBlur:e=>{q?.(e),eG.closeDropdown(),eX("")},onKeyDown:e=>{D?.(e)," "!==e.key||ex||(e.preventDefault(),eG.toggleDropdown()),"Backspace"===e.key&&0===eq.length&&eU.length>0&&(e_?.(eU[eU.length-1]),eJ(eU.slice(0,eU.length-1)))},value:eq,onChange:e=>{eX(e.currentTarget.value),ex&&eG.openDropdown(),W&&eG.selectFirstOption()},disabled:U,readOnly:H||!ex,pointer:!ex})})]})})}),(0,a.jsx)(b.i,{data:ey?e7:eB,hidden:H||U,filter:T,search:eq,limit:B,hiddenWhenEmpty:!eg,withScrollArea:N,maxDropdownHeight:G,filterOptions:ex,value:eU,checkIconPosition:eS,withCheckIcon:ej,nothingFoundMessage:eg,unstyled:P,labelId:ev?`${eT}-label`:void 0,"aria-label":ev?void 0:eF["aria-label"],renderOption:eI,scrollAreaProps:eW})]}),(0,a.jsx)(v.G.HiddenInput,{name:eP,valuesDivider:eR,value:eU,form:eM,disabled:U,...eC})]})});w.classes={...x.O.classes,...v.G.classes},w.displayName="@mantine/core/MultiSelect";let P={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,maxWidth:340,centered:!0},M={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      defaultValue={['React']}
      clearable
    />
  );
}
`,maxWidth:340,centered:!0},V={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},A={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
`,maxWidth:340,centered:!0},k={type:"configurator",component:function(e){return(0,a.jsx)(w,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:["React"]})},code:`
import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue={["React"]}
    />
  );
}
`,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},C={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Select up to 2 libraries",data:["React","Angular","Vue","Svelte"],maxValues:2})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Select up to 2 libraries"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      maxValues={2}
    />
  );
}
`,maxWidth:340,centered:!0},D={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],hidePickedOptions:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      hidePickedOptions
    />
  );
}
`,maxWidth:340,centered:!0},R=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},Y={type:"code",component:function(){return(0,a.jsx)(w,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States"],filter:R,searchable:!0})},code:`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <MultiSelect
      label="What countries have you visited?"
      placeholder="Pick values"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},O=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},I={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick values",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:O,searchable:!0})},code:`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['4 \u2013 React', '1 \u2013 Angular', '3 \u2013 Vue', '2 \u2013 Svelte']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},_=`
import { MultiSelect } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <MultiSelect
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
`,E=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),W={type:"code",component:function(){return(0,a.jsx)(w,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:E,searchable:!0})},code:_,maxWidth:340,centered:!0};var z=o(56051),F=o(86658),T=o(93065);let B={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},N=({option:e})=>(0,a.jsxs)(z.Y,{gap:"sm",children:[(0,a.jsx)(F.e,{src:B[e.value].image,size:36,radius:"xl"}),(0,a.jsxs)("div",{children:[(0,a.jsx)(T.E,{size:"sm",children:e.value}),(0,a.jsx)(T.E,{size:"xs",opacity:.5,children:B[e.value].email})]})]}),G={type:"code",component:function(){return(0,a.jsx)(w,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:N,maxDropdownHeight:300,label:"Employees of the month",placeholder:"Search for employee",hidePickedOptions:!0,searchable:!0})},code:`
import { MultiSelect, MultiSelectProps, Avatar, Group, Text } from '@mantine/core';

const usersData: Record<string, { image: string; email: string }> = {
  'Emily Johnson': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    email: 'emily92@gmail.com',
  },
  'Ava Rodriguez': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    email: 'ava_rose@gmail.com',
  },
  'Olivia Chen': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    email: 'livvy_globe@gmail.com',
  },
  'Ethan Barnes': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    email: 'ethan_explorer@gmail.com',
  },
  'Mason Taylor': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    email: 'mason_musician@gmail.com',
  },
};

const renderMultiSelectOption: MultiSelectProps['renderOption'] = ({ option }) => (
  <Group gap="sm">
    <Avatar src={usersData[option.value].image} size={36} radius="xl" />
    <div>
      <Text size="sm">{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {usersData[option.value].email}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <MultiSelect
      data={['Emily Johnson', 'Ava Rodriguez', 'Olivia Chen', 'Ethan Barnes', 'Mason Taylor']}
      renderOption={renderMultiSelectOption}
      maxDropdownHeight={300}
      label="Employees of the month"
      placeholder="Search for employee"
    />
  );
}
`,centered:!0,maxWidth:340,defaultExpanded:!1},L=`
import { MultiSelect } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <MultiSelect
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <MultiSelect
        label="With native scroll"
        placeholder="Pick value"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
`,$=Array(100).fill(0).map((e,t)=>`Option ${t}`),Z={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w,{label:"With scroll area (default)",placeholder:"Pick value",data:$,maxDropdownHeight:200}),(0,a.jsx)(w,{label:"With native scroll",placeholder:"Pick value",data:$,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:L,maxWidth:340,centered:!0},H={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`,maxWidth:340,centered:!0},U={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`,maxWidth:340,centered:!0};var J=o(35764),q=o(52022);let X={type:"code",code:`
import { Popover, Button, MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <MultiSelect
          label="Your favorite libraries"
          placeholder="Pick values"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,a.jsxs)(J.A,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,a.jsx)(J.A.Target,{children:(0,a.jsx)(q.$,{children:"Toggle popover"})}),(0,a.jsx)(J.A.Dropdown,{children:(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}};var K=o(92051);let Q={type:"code",component:function(){let[e,{toggle:t}]=(0,K.j)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(q.$,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,a.jsx)(w,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
import { MultiSelect, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <MultiSelect
        label="Your favorite library"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},ee={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
`,maxWidth:340,centered:!0},et={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{width:200,position:"bottom-start"}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
`,maxWidth:340,centered:!0};var eo={dropdown:"m_a9824888",input:"m_f5487eb3"};let ea={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],classNames:eo,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:`
import { MultiSelect } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite library"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      classNames={classes}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.dropdown {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
  border-top: 0;
}

.input {
  transition: none;

  &[data-expanded] {
    border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
`,language:"scss"}],maxWidth:340,centered:!0},er={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
`,maxWidth:340,centered:!0},el={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,a.jsx)(w,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <MultiSelect
        mt="md"
        label="10px padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},en={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
`,maxWidth:340,centered:!0};var ei=o(30838);let es={type:"code",component:function(){let e=(0,a.jsx)(ei.A,{size:16});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"}),(0,a.jsx)(w,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"})]})},maxWidth:340,centered:!0,code:`
import { MultiSelect } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents size={16} />;
  return (
    <>
      <MultiSelect
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite libraries"
        placeholder="Your favorite libraries"
      />
      <MultiSelect
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite libraries"
        placeholder="Your favorite libraries"
      />
    </>
  );
}
`},ec={type:"configurator",component:function(e){return(0,a.jsx)(w,{...e,placeholder:"MultiSelect placeholder",data:["React","Angular","Vue","Svelte"]})},code:`
import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      placeholder="MultiSelect placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,centered:!0,maxWidth:340,controls:o(23232).$7},ed={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
`,maxWidth:340,centered:!0},eu={type:"code",component:function(){return(0,a.jsx)(w,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
`,maxWidth:340,centered:!0},ep={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,a.jsx)(w,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <MultiSelect
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`};var eh=o(32653),em=o(88825);let ev=`
import { IconAt } from '@tabler/icons-react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
     {{props}}
      leftSection={<IconAt size={18} stroke={1.5} />}
      label="MultiSelect"
      description="Description"
      error="Error"
      placeholder="MultiSelect"
      defaultValue={['React', 'Angular']}
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node', 'Django'] },
      ]}
    />
  );
}
`,eb={type:"styles-api",data:em.U,component:function(e){return(0,a.jsx)(w,{...e,dropdownOpened:!0,leftSection:(0,a.jsx)(eh.A,{size:18,stroke:1.5}),withAsterisk:!0,label:"MultiSelect",description:"Description",placeholder:"MultiSelect",defaultValue:["React","Angular"],data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:ev,centered:!0,maxWidth:340};var ef=o(85954),ex=o(38215);let eg=(0,ef.P)(ex.XZ.MultiSelect);function ej(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:l,ComboboxFiltering:n,ComboboxLargeData:i,ComboboxProps:s,Demo:c,GetElementRef:d,InputAccessibility:u,InputFeatures:p,InputSections:h,StylesApiSelectors:m}=t;return o||ey("ComboboxData",!0),l||ey("ComboboxDisclaimer",!0),n||ey("ComboboxFiltering",!0),i||ey("ComboboxLargeData",!0),s||ey("ComboboxProps",!0),c||ey("Demo",!0),d||ey("GetElementRef",!0),u||ey("InputAccessibility",!0),p||ey("InputFeatures",!0),h||ey("InputSections",!0),m||ey("StylesApiSelectors",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{component:"MultiSelect"}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"MultiSelect"})," provides a way to enter multiple values.\n",(0,a.jsx)(t.code,{children:"MultiSelect"})," is similar to ",(0,a.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"}),", but it does not allow entering custom values."]}),"\n",(0,a.jsx)(c,{data:P}),"\n",(0,a.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"MultiSelect"})," value must be an array of strings, other types are not supported.\n",(0,a.jsx)(t.code,{children:"onChange"})," function is called with an array of strings as a single argument."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n  return <MultiSelect data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,a.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,a.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,a.jsx)(c,{data:M}),"\n",(0,a.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,a.jsx)(c,{data:V}),"\n",(0,a.jsx)(t.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,a.jsxs)(t.p,{children:["You can control search value with ",(0,a.jsx)(t.code,{children:"searchValue"})," and ",(0,a.jsx)(t.code,{children:"onSearchChange"})," props:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [searchValue, setSearchValue] = useState('');\n  return (\n    <MultiSelect\n      searchable\n      searchValue={searchValue}\n      onSearchChange={setSearchValue}\n      data={[]}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,a.jsxs)(t.p,{children:["Set the ",(0,a.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display a given message when no options match the search query\nor there is no data available. If the ",(0,a.jsx)(t.code,{children:"nothingFoundMessage"})," prop is not set, the ",(0,a.jsx)(t.code,{children:"MultiSelect"})," dropdown will be hidden."]}),"\n",(0,a.jsx)(c,{data:A}),"\n",(0,a.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,a.jsx)(t.code,{children:"left"})," or ",(0,a.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,a.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,a.jsx)(c,{data:k}),"\n",(0,a.jsx)(t.h2,{id:"max-selected-values",children:"Max selected values"}),"\n",(0,a.jsxs)(t.p,{children:["You can limit the number of selected values with ",(0,a.jsx)(t.code,{children:"maxValues"})," prop. This will not allow adding more values\nonce the limit is reached."]}),"\n",(0,a.jsx)(c,{data:C}),"\n",(0,a.jsx)(t.h2,{id:"hide-selected-options",children:"Hide selected options"}),"\n",(0,a.jsxs)(t.p,{children:["To remove selected options from the list of available options, set ",(0,a.jsx)(t.code,{children:"hidePickedOptions"})," prop:"]}),"\n",(0,a.jsx)(c,{data:D}),"\n",(0,a.jsx)(o,{component:"MultiSelect"}),"\n",(0,a.jsx)(n,{component:"MultiSelect"}),"\n",(0,a.jsx)(c,{data:Y}),"\n",(0,a.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,a.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,a.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,a.jsx)(c,{data:I}),"\n",(0,a.jsx)(i,{component:"MultiSelect"}),"\n",(0,a.jsx)(c,{data:W}),"\n",(0,a.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object and\nchecked state. The function must return a React node."]}),"\n",(0,a.jsx)(c,{data:G}),"\n",(0,a.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,a.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,a.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,a.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,a.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,a.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,a.jsx)(c,{data:Z}),"\n",(0,a.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,a.jsx)(c,{data:H}),"\n",(0,a.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,a.jsxs)(t.p,{children:["When option is disabled, it cannot be selected and is ignored in keyboard navigation.\nNote that user can still enter disabled option as a value. If you want to prohibit certain values,\nuse controlled component and filter them out in ",(0,a.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,a.jsx)(c,{data:U}),"\n",(0,a.jsx)(s,{component:"MultiSelect"}),"\n",(0,a.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,a.jsxs)(t.p,{children:["To use ",(0,a.jsx)(t.code,{children:"MultiSelect"})," inside popover, you need to set ",(0,a.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,a.jsx)(c,{data:X}),"\n",(0,a.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,a.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,a.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,a.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,a.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,a.jsx)(c,{data:Q}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,a.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,a.jsx)(t.code,{children:"position"})," and ",(0,a.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,a.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,a.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,a.jsx)(c,{data:ee}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-width",children:"Dropdown width"}),"\n",(0,a.jsxs)(t.p,{children:["To change dropdown width, set ",(0,a.jsx)(t.code,{children:"width"})," prop in ",(0,a.jsx)(t.code,{children:"comboboxProps"}),". By default,\ndropdown width is equal to the input width."]}),"\n",(0,a.jsx)(c,{data:et}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-offset",children:"Dropdown offset"}),"\n",(0,a.jsxs)(t.p,{children:["To change dropdown offset, set ",(0,a.jsx)(t.code,{children:"offset"})," prop in ",(0,a.jsx)(t.code,{children:"comboboxProps"}),":"]}),"\n",(0,a.jsx)(c,{data:ea}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,a.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,a.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,a.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,a.jsx)(c,{data:er}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,a.jsx)(c,{data:el}),"\n",(0,a.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,a.jsx)(c,{data:en}),"\n",(0,a.jsx)(h,{component:"MultiSelect"}),"\n",(0,a.jsx)(c,{data:es}),"\n",(0,a.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,a.jsx)(p,{component:"MultiSelect",element:"input"}),"\n",(0,a.jsx)(c,{data:ec}),"\n",(0,a.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,a.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,a.jsx)(t.code,{children:"MultiSelect"})," will not show suggestions and will not call ",(0,a.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,a.jsx)(c,{data:ed}),"\n",(0,a.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,a.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,a.jsx)(t.code,{children:"MultiSelect"})," will not show suggestions."]}),"\n",(0,a.jsx)(c,{data:eu}),"\n",(0,a.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,a.jsx)(c,{data:ep}),"\n",(0,a.jsx)(m,{component:"MultiSelect"}),"\n",(0,a.jsx)(c,{data:eb}),"\n",(0,a.jsx)(d,{component:"MultiSelect",refType:"input"}),"\n",(0,a.jsx)(u,{component:"MultiSelect"}),"\n",(0,a.jsxs)(t.p,{children:["To set ",(0,a.jsx)(t.code,{children:"aria-label"})," on the clear button, use ",(0,a.jsx)(t.code,{children:"clearButtonProps"}),". Note that it is required\nonly when ",(0,a.jsx)(t.code,{children:"clearable"})," is set."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { MultiSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MultiSelect\n      data={[]}\n      clearable\n      clearButtonProps={{\n        'aria-label': 'Clear input',\n      }}\n    />\n  );\n}\n"})})]})}function eS(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(eg,{...e,children:(0,a.jsx)(ej,{...e})})}function ey(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32653:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},23232:(e,t,o)=>{"use strict";o.d(t,{$7:()=>l,l$:()=>a,wQ:()=>r});let a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],r=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},86658:(e,t,o)=>{"use strict";o.d(t,{e:()=>y});var a=o(31085),r=o(14041),l=o(33450),n=o(7098),i=o(29686),s=o(69564),c=o(34056),d=o(2453),u=o(6754);let p=(0,r.createContext)(null),h=p.Provider;var m={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"};let v={},b=(0,n.V)((e,{spacing:t})=>({group:{"--ag-spacing":(0,l.GY)(t)}})),f=(0,u.P9)((e,t)=>{let o=(0,i.Y)("AvatarGroup",v,e),{classNames:r,className:l,style:n,styles:d,unstyled:u,vars:p,spacing:f,...x}=o,g=(0,s.I)({name:"AvatarGroup",classes:m,props:o,className:l,style:n,classNames:r,styles:d,unstyled:u,vars:p,varsResolver:b,rootSelector:"group"});return(0,a.jsx)(h,{value:!0,children:(0,a.jsx)(c.a,{ref:t,...g("group"),...x})})});function x(e){return(0,a.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}f.classes=m,f.displayName="@mantine/core/AvatarGroup";let g=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],j={},S=(0,n.V)((e,{size:t,radius:o,variant:a,gradient:r,color:n,autoContrast:i,name:s,allowedInitialsColors:c})=>{let d="initials"===n&&"string"==typeof s?function(e,t=g){let o=Math.abs(function(e){let t=0;for(let o=0;o<e.length;o+=1)t=(t<<5)-t+e.charCodeAt(o)|0;return t}(e))%t.length;return t[o]}(s,c):n,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:r,variant:a||"light",autoContrast:i});return{root:{"--avatar-size":(0,l.YC)(t,"avatar-size"),"--avatar-radius":void 0===o?void 0:(0,l.nJ)(o),"--avatar-bg":d||a?u.background:void 0,"--avatar-color":d||a?u.color:void 0,"--avatar-bd":d||a?u.border:void 0}}}),y=(0,d.v)((e,t)=>{let o=(0,i.Y)("Avatar",j,e),{classNames:l,className:n,style:d,styles:u,unstyled:h,vars:v,src:b,alt:f,radius:g,color:y,gradient:w,imageProps:P,children:M,autoContrast:V,mod:A,name:k,allowedInitialsColors:C,...D}=o,R={withinGroup:!!(0,r.useContext)(p)},[Y,O]=(0,r.useState)(!b),I=(0,s.I)({name:"Avatar",props:o,classes:m,className:n,style:d,classNames:l,styles:u,unstyled:h,vars:v,varsResolver:S});return(0,r.useEffect)(()=>O(!b),[b]),(0,a.jsx)(c.a,{...I("root"),mod:[{"within-group":R.withinGroup},A],ref:t,...D,children:Y?(0,a.jsx)("span",{...I("placeholder"),title:f,children:M||"string"==typeof k&&function(e,t=2){let o=e.split(" ");return 1===o.length?e.slice(0,t).toUpperCase():o.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(k)||(0,a.jsx)(x,{})}):(0,a.jsx)("img",{...P,...I("image"),src:b,alt:f,onError:e=>{O(!0),P?.onError?.(e)}})})});y.classes=m,y.displayName="@mantine/core/Avatar",y.Group=f},65567:(e,t,o)=>{"use strict";o.d(t,{i:()=>u});var a=o(31085),r=o(54357),l=o(5583),n=o(37950),i=o(31791),s=o(51513),c=o(51200);function d({data:e,withCheckIcon:t,value:o,checkIconPosition:n,unstyled:u,renderOption:p}){if(!(0,s.c)(e)){var h;let s=(h=e.value,Array.isArray(o)?o.includes(h):o===h),d=t&&s&&(0,a.jsx)(l.S,{className:c.A.optionsDropdownCheckIcon}),m=(0,a.jsxs)(a.Fragment,{children:["left"===n&&d,(0,a.jsx)("span",{children:e.label}),"right"===n&&d]});return(0,a.jsx)(i.G.Option,{value:e.value,disabled:e.disabled,className:(0,r.A)({[c.A.optionsDropdownOption]:!u}),"data-reverse":"right"===n||void 0,"data-checked":s||void 0,"aria-selected":s,active:s,children:"function"==typeof p?p({option:e,checked:s}):m})}let m=e.items.map(e=>(0,a.jsx)(d,{data:e,value:o,unstyled:u,withCheckIcon:t,checkIconPosition:n,renderOption:p},e.value));return(0,a.jsx)(i.G.Group,{label:e.group,children:m})}function u({data:e,hidden:t,hiddenWhenEmpty:o,filter:r,search:l,limit:c,maxDropdownHeight:u,withScrollArea:p=!0,filterOptions:h=!0,withCheckIcon:m=!1,value:v,checkIconPosition:b,nothingFoundMessage:f,unstyled:x,labelId:g,renderOption:j,scrollAreaProps:S,"aria-label":y}){!function e(t,o=new Set){if(Array.isArray(t))for(let a of t)if((0,s.c)(a))e(a.items,o);else{if(void 0===a.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof a.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof a.value}`);if(o.has(a.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${a.value}" was provided more than once`);o.add(a.value)}}(e);let w="string"==typeof l?(r||function e({options:t,search:o,limit:a}){let r=o.trim().toLowerCase(),l=[];for(let n=0;n<t.length;n+=1){let i=t[n];if(l.length===a)break;(0,s.c)(i)&&l.push({group:i.group,items:e({options:i.items,search:o,limit:a-l.length})}),!(0,s.c)(i)&&i.label.toLowerCase().includes(r)&&l.push(i)}return l})({options:e,search:h?l:"",limit:c??1/0}):e,P=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(w),M=w.map(e=>(0,a.jsx)(d,{data:e,withCheckIcon:m,value:v,checkIconPosition:b,unstyled:x,renderOption:j},(0,s.c)(e)?e.group:e.value));return(0,a.jsx)(i.G.Dropdown,{hidden:t||o&&P,"data-composed":!0,children:(0,a.jsxs)(i.G.Options,{labelledBy:g,"aria-label":y,children:[p?(0,a.jsx)(n.F.Autosize,{mah:u??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...S,children:M}):M,P&&f&&(0,a.jsx)(i.G.Empty,{children:f})]})})}},51513:(e,t,o)=>{"use strict";function a(e){return"group"in e}o.d(t,{c:()=>a})},35213:(e,t,o)=>{"use strict";o.d(t,{D:()=>function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}})},31778:(e,t,o)=>{"use strict";o.d(t,{a:()=>j});var a=o(31085);o(14041);var r=o(33450),l=o(7098),n=o(29686),i=o(69564),s=o(34056),c=o(6754),d=o(94310),u=o(73418);let[p,h]=(0,o(49128).e)();var m={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let v={},b=(0,l.V)((e,{gap:t},{size:o})=>({group:{"--pg-gap":void 0!==t?(0,r.YC)(t):(0,r.YC)(o,"pg-gap")}})),f=(0,c.P9)((e,t)=>{let o=(0,n.Y)("PillGroup",v,e),{classNames:r,className:l,style:c,styles:d,unstyled:h,vars:f,size:x,disabled:g,...j}=o,S=(0,u.n)(),y=S?.size||x||void 0,w=(0,i.I)({name:"PillGroup",classes:m,props:o,className:l,style:c,classNames:r,styles:d,unstyled:h,vars:f,varsResolver:b,stylesCtx:{size:y},rootSelector:"group"});return(0,a.jsx)(p,{value:{size:y,disabled:g},children:(0,a.jsx)(s.a,{ref:t,size:y,...w("group"),...j})})});f.classes=m,f.displayName="@mantine/core/PillGroup";let x={variant:"default"},g=(0,l.V)((e,{radius:t},{size:o})=>({root:{"--pill-fz":(0,r.YC)(o,"pill-fz"),"--pill-height":(0,r.YC)(o,"pill-height"),"--pill-radius":void 0===t?void 0:(0,r.nJ)(t)}})),j=(0,c.P9)((e,t)=>{let o=(0,n.Y)("Pill",x,e),{classNames:r,className:l,style:c,styles:p,unstyled:v,vars:b,variant:f,children:j,withRemoveButton:S,onRemove:y,removeButtonProps:w,radius:P,size:M,disabled:V,mod:A,...k}=o,C=h(),D=(0,u.n)(),R=M||C?.size||void 0,Y=D?.variant==="filled"?"contrast":f||"default",O=(0,i.I)({name:"Pill",classes:m,props:o,className:l,style:c,classNames:r,styles:p,unstyled:v,vars:b,varsResolver:g,stylesCtx:{size:R}});return(0,a.jsxs)(s.a,{component:"span",ref:t,variant:Y,size:R,...O("root",{variant:Y}),mod:[{"with-remove":S&&!V,disabled:V||C?.disabled},A],...k,children:[(0,a.jsx)("span",{...O("label"),children:j}),S&&(0,a.jsx)(d.J,{variant:"transparent",radius:P,tabIndex:-1,"aria-hidden":!0,unstyled:v,...w,...O("remove",{className:w?.className,style:w?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),w?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),y?.(),w?.onClick?.(e)}})]})});j.classes=m,j.displayName="@mantine/core/Pill",j.Group=f},73418:(e,t,o)=>{"use strict";o.d(t,{n:()=>r,q:()=>a}),o(14041),o(31085);let[a,r]=(0,o(49128).e)()},42215:(e,t,o)=>{"use strict";o.d(t,{t:()=>f});var a=o(31085),r=o(14041),l=o(29686),n=o(6754),i=o(87059),s=o(73418),c=o(34321),d=o(69564),u=o(34056),p=o(62363),h={field:"m_45c4369d"};let m={type:"visible"},v=(0,n.P9)((e,t)=>{let o=(0,l.Y)("PillsInputField",m,e),{classNames:r,className:n,style:i,styles:v,unstyled:b,vars:f,type:x,disabled:g,id:j,pointer:S,mod:y,...w}=o,P=(0,s.n)(),M=(0,p.e)(),V=(0,d.I)({name:"PillsInputField",classes:h,props:o,className:n,style:i,classNames:r,styles:v,unstyled:b,rootSelector:"field"}),A=g||P?.disabled;return(0,a.jsx)(u.a,{component:"input",ref:(0,c.pc)(t,P?.fieldRef),"data-type":x,disabled:A,mod:[{disabled:A,pointer:S},y],...V("field"),...w,id:M?.inputId||j,"aria-invalid":P?.hasError,"aria-describedby":M?.describedBy,type:"text",onMouseDown:e=>!S&&e.stopPropagation()})});v.classes=h,v.displayName="@mantine/core/PillsInputField";let b={},f=(0,n.P9)((e,t)=>{let{children:o,onMouseDown:n,onClick:c,size:d,disabled:u,__staticSelector:p,error:h,variant:m,...v}=(0,l.Y)("PillsInput",b,e),f=(0,r.useRef)(null);return(0,a.jsx)(s.q,{value:{fieldRef:f,size:d,disabled:u,hasError:!!h,variant:m},children:(0,a.jsx)(i.O,{size:d,error:h,variant:m,component:"div",ref:t,onMouseDown:e=>{e.preventDefault(),n?.(e),f.current?.focus()},onClick:e=>{e.preventDefault();let t=e.currentTarget.closest("fieldset");t?.disabled||(f.current?.focus(),c?.(e))},...v,multiline:!0,disabled:u,__staticSelector:p||"PillsInput",withAria:!1,children:o})})});f.displayName="@mantine/core/PillsInput",f.Field=v},92051:(e,t,o)=>{"use strict";o.d(t,{j:()=>r});var a=o(14041);function r(e=!1,t){let{onOpen:o,onClose:l}=t||{},[n,i]=(0,a.useState)(e),s=(0,a.useCallback)(()=>{i(e=>e||(o?.(),!0))},[o]),c=(0,a.useCallback)(()=>{i(e=>e?(l?.(),!1):e)},[l]),d=(0,a.useCallback)(()=>{n?c():s()},[c,s,n]);return[n,{open:s,close:c,toggle:d}]}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,85954,31791,90636,46593,38792],()=>t(76017)),_N_E=e.O()}]);