(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54136],{8217:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/select",function(){return o(11375)}])},11375:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>X});var l=o(31085),n=o(71184),r=o(78501);let a={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,maxWidth:340,centered:!0},i={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",clearable:!0})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      defaultValue="React"
      clearable
    />
  );
}
`,maxWidth:340,centered:!0},c={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.l,{label:"Option can NOT be deselected",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!1}),(0,l.jsx)(r.l,{label:"Option can be deselected",description:"This is default behavior, click 'React' in the dropdown",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:"React",allowDeselect:!0,mt:"md"})]})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Option can NOT be deselected"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        allowDeselect={false}
      />

      <Select
        label="Option can be deselected"
        description="This is default behavior, click 'React' in the dropdown"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        allowDeselect
        mt="md"
      />
    </>
  );
}
`,maxWidth:340,centered:!0},d={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},s={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
`,maxWidth:340,centered:!0},u={type:"configurator",component:function(e){return(0,l.jsx)(r.l,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:"React"})},code:`
import { Select } from '@mantine/core';


function Demo() {
  return (
    <Select
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue="React"
    />
  );
}
`,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},p=({options:e,search:t})=>{let o=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return o.every(e=>t.some(t=>t.includes(e)))})},h={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your country",placeholder:"Pick value",data:["Great Britain","Russian Federation","United States"],filter:p,searchable:!0})},code:`
import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Pick value"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},m=({options:e,search:t})=>{let o=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return o.sort((e,t)=>e.label.localeCompare(t.label)),o},b={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:m,nothingFoundMessage:"Nothing found...",searchable:!0})},code:`
import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['4 \u2013 React', '1 \u2013 Angular', '3 \u2013 Vue', '2 \u2013 Svelte']}
      filter={optionsFilter}
      nothingFoundMessage="Nothing found..."
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},f=`
import { Select } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <Select
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
`,x=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),v={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:x,searchable:!0})},code:f,maxWidth:340,centered:!0};var g=o(31019);let j=`
import { Select } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <Select
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <Select
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
`,y=Array(100).fill(0).map((e,t)=>`Option ${t}`),S={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.l,{label:"With scroll area (default)",placeholder:"Pick value",data:y,maxDropdownHeight:200}),(0,l.jsx)(r.l,{label:"With native scroll",placeholder:"Pick value",data:y,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:j,maxWidth:340,centered:!0},w={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`,maxWidth:340,centered:!0},A={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
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
`,maxWidth:340,centered:!0};var k=o(35764),V=o(52022);let P={type:"code",code:`
import { Popover, Button, Select } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Select
          label="Your favorite library"
          placeholder="Pick value"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,l.jsxs)(k.A,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,l.jsx)(k.A.Target,{children:(0,l.jsx)(V.$,{children:"Toggle popover"})}),(0,l.jsx)(k.A.Dropdown,{children:(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}};var D=o(92051);let R={type:"code",component:function(){let[e,{toggle:t}]=(0,D.j)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(V.$,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
import { Select, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},C={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
`,maxWidth:340,centered:!0},I={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{width:200,position:"bottom-start"}})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
`,maxWidth:340,centered:!0};var O={dropdown:"m_f33bcc41",input:"m_37973d9a"};let Y={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],classNames:O,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:`
import { Select } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
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
`,language:"scss"}],maxWidth:340,centered:!0},W={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
`,maxWidth:340,centered:!0},F={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.l,{label:"Zero padding",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,l.jsx)(r.l,{mt:"md",label:"10px padding",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Zero padding"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <Select
        mt="md"
        label="10px padding"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},N={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
`,maxWidth:340,centered:!0};var T=o(30838);let B={type:"code",component:function(){let e=(0,l.jsx)(T.A,{size:16});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.l,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite library",placeholder:"Your favorite library"}),(0,l.jsx)(r.l,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite library",placeholder:"Your favorite library"})]})},maxWidth:340,centered:!0,code:`
import { Select } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents size={16} />;
  return (
    <>
      <Select
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <Select
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
    </>
  );
}
`},E={type:"configurator",component:function(e){return(0,l.jsx)(r.l,{...e,placeholder:"Select placeholder",data:["React","Angular","Vue","Svelte"]})},code:`
import { Select } from '@mantine/core';


function Demo() {
  return (
    <Select
      {{props}}
      placeholder="Select placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,centered:!0,maxWidth:340,controls:o(23232).$7},_={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
`,maxWidth:340,centered:!0},M={type:"code",component:function(){return(0,l.jsx)(r.l,{label:"Your favorite library",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
`,maxWidth:340,centered:!0},z={type:"code",component:function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.l,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,l.jsx)(r.l,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Select
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`};var G=o(32653),L=o(58090);let $=`
import { IconAt } from '@tabler/icons-react';
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
     {{props}}
      leftSection={<IconAt size={18} stroke={1.5} />}
      label="Select"
      description="Description"
      error="Error"
      placeholder="Select"
      data={['React', 'Angular']}
    />
  );
}
`,Z={type:"styles-api",data:L.R,component:function(e){return(0,l.jsx)(r.l,{...e,dropdownOpened:!0,leftSection:(0,l.jsx)(G.A,{size:18,stroke:1.5}),withAsterisk:!0,label:"Select",description:"Description",placeholder:"Select",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:$,centered:!0,maxWidth:340};var H=o(85954),U=o(38215);let J=(0,H.P)(U.XZ.Select);function q(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{ComboboxData:o,ComboboxDisclaimer:r,ComboboxFiltering:p,ComboboxLargeData:m,ComboboxProps:f,Demo:x,GetElementRef:j,InputAccessibility:y,InputFeatures:k,InputSections:V,StylesApiSelectors:D}=t;return o||Q("ComboboxData",!0),r||Q("ComboboxDisclaimer",!0),p||Q("ComboboxFiltering",!0),m||Q("ComboboxLargeData",!0),f||Q("ComboboxProps",!0),x||Q("Demo",!0),j||Q("GetElementRef",!0),y||Q("InputAccessibility",!0),k||Q("InputFeatures",!0),V||Q("InputSections",!0),D||Q("StylesApiSelectors",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{component:"Select"}),"\n",(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"Select"})," allows capturing user input based on suggestions from the list.\nUnlike ",(0,l.jsx)(t.a,{href:"/core/autocomplete/",children:"Autocomplete"}),", ",(0,l.jsx)(t.code,{children:"Select"})," does not allow entering custom values."]}),"\n",(0,l.jsx)(x,{data:a}),"\n",(0,l.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"Select"})," value must be a string, other types are not supported.\n",(0,l.jsx)(t.code,{children:"onChange"})," function is called with a string value as a single argument."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | null>('');\n  return <Select data={[]} value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"onchange-handler",children:"onChange handler"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"onChange"})," is called with two arguments:"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"value"})," - string value of the selected option"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"option"})," – selected option object"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"If you prefer object format in state, use second argument of onChange handler:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { ComboboxItem, Select } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<ComboboxItem | null>(null);\n  return (\n    <Select\n      data={[{ value: 'react', label: 'React library' }]}\n      value={value ? value.value : null}\n      onChange={(_value, option) => setValue(option)}\n    />\n  );\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"clearable",children:"Clearable"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"clearable"})," prop to display the clear button in the right section. The button is not displayed\nwhen:"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"The component does not have a value"}),"\n",(0,l.jsx)(t.li,{children:"The component is disabled"}),"\n",(0,l.jsx)(t.li,{children:"The component is read only"}),"\n"]}),"\n",(0,l.jsx)(x,{data:i}),"\n",(0,l.jsx)(t.h2,{id:"allow-deselect",children:"Allow deselect"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"allowDeselect"})," prop determines whether the value should be deselected when user clicks on the selected option.\nBy default, ",(0,l.jsx)(t.code,{children:"allowDeselect"})," is ",(0,l.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,l.jsx)(x,{data:c}),"\n",(0,l.jsx)(t.h2,{id:"searchable",children:"Searchable"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"searchable"})," prop to allow filtering options by user input:"]}),"\n",(0,l.jsx)(x,{data:d}),"\n",(0,l.jsx)(t.h2,{id:"controlled-search-value",children:"Controlled search value"}),"\n",(0,l.jsxs)(t.p,{children:["You can control search value with ",(0,l.jsx)(t.code,{children:"searchValue"})," and ",(0,l.jsx)(t.code,{children:"onSearchChange"})," props:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@mantine/core';\n\nfunction Demo() {\n  const [searchValue, setSearchValue] = useState('');\n  return (\n    <Select\n      searchable\n      searchValue={searchValue}\n      onSearchChange={setSearchValue}\n      data={[]}\n    />\n  );\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"nothing-found",children:"Nothing found"}),"\n",(0,l.jsxs)(t.p,{children:["Set the ",(0,l.jsx)(t.code,{children:"nothingFoundMessage"})," prop to display a given message when no options match the search query\nor there is no data available. If the ",(0,l.jsx)(t.code,{children:"nothingFoundMessage"})," prop is not set, the ",(0,l.jsx)(t.code,{children:"Select"})," dropdown will be hidden."]}),"\n",(0,l.jsx)(x,{data:s}),"\n",(0,l.jsx)(t.h2,{id:"checked-option-icon",children:"Checked option icon"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"checkIconPosition"})," prop to ",(0,l.jsx)(t.code,{children:"left"})," or ",(0,l.jsx)(t.code,{children:"right"})," to control position of check icon in active option.\nTo remove the check icon, set ",(0,l.jsx)(t.code,{children:"withCheckIcon={false}"}),"."]}),"\n",(0,l.jsx)(x,{data:u}),"\n",(0,l.jsx)(o,{component:"Select"}),"\n",(0,l.jsx)(p,{component:"Select"}),"\n",(0,l.jsx)(x,{data:h}),"\n",(0,l.jsx)(t.h2,{id:"sort-options",children:"Sort options"}),"\n",(0,l.jsxs)(t.p,{children:["By default, options are sorted by their position in the data array. You can change this behavior\nwith ",(0,l.jsx)(t.code,{children:"filter"})," function:"]}),"\n",(0,l.jsx)(x,{data:b}),"\n",(0,l.jsx)(m,{component:"Select"}),"\n",(0,l.jsx)(x,{data:v}),"\n",(0,l.jsx)(t.h2,{id:"renderoption",children:"renderOption"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.code,{children:"renderOption"})," callback allows you to customize option rendering. It is called with option object and\nchecked state. The function must return a React node."]}),"\n",(0,l.jsx)(x,{data:g.w}),"\n",(0,l.jsx)(t.h2,{id:"scrollable-dropdown",children:"Scrollable dropdown"}),"\n",(0,l.jsxs)(t.p,{children:["By default, the options list is wrapped with ",(0,l.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea.Autosize"}),".\nYou can control dropdown max-height with ",(0,l.jsx)(t.code,{children:"maxDropdownHeight"})," prop if you do not change the default settings."]}),"\n",(0,l.jsxs)(t.p,{children:["If you want to use native scrollbars, set ",(0,l.jsx)(t.code,{children:"withScrollArea={false}"}),". Note that in this case,\nyou will need to change dropdown styles with ",(0,l.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"}),"."]}),"\n",(0,l.jsx)(x,{data:S}),"\n",(0,l.jsx)(t.h2,{id:"group-options",children:"Group options"}),"\n",(0,l.jsx)(x,{data:w}),"\n",(0,l.jsx)(t.h2,{id:"disabled-options",children:"Disabled options"}),"\n",(0,l.jsx)(t.p,{children:"When option is disabled, it cannot be selected and is ignored in keyboard navigation."}),"\n",(0,l.jsx)(x,{data:A}),"\n",(0,l.jsx)(f,{component:"Select"}),"\n",(0,l.jsx)(t.h2,{id:"inside-popover",children:"Inside Popover"}),"\n",(0,l.jsxs)(t.p,{children:["To use ",(0,l.jsx)(t.code,{children:"Select"})," inside popover, you need to set ",(0,l.jsx)(t.code,{children:"withinPortal: false"}),":"]}),"\n",(0,l.jsx)(x,{data:P}),"\n",(0,l.jsx)(t.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,l.jsxs)(t.p,{children:["You can control dropdown opened state with ",(0,l.jsx)(t.code,{children:"dropdownOpened"})," prop. Additionally,\nyou can use ",(0,l.jsx)(t.code,{children:"onDropdownClose"})," and ",(0,l.jsx)(t.code,{children:"onDropdownOpen"})," to listen to dropdown opened state changes."]}),"\n",(0,l.jsx)(x,{data:R}),"\n",(0,l.jsx)(t.h2,{id:"dropdown-position",children:"Dropdown position"}),"\n",(0,l.jsxs)(t.p,{children:["By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input.\nYou can change this behavior by setting ",(0,l.jsx)(t.code,{children:"position"})," and ",(0,l.jsx)(t.code,{children:"middlewares"})," props, which are passed down to the\nunderlying ",(0,l.jsx)(t.a,{href:"/core/popover",children:"Popover"})," component."]}),"\n",(0,l.jsx)(t.p,{children:"Example of dropdown that is always displayed above the input:"}),"\n",(0,l.jsx)(x,{data:C}),"\n",(0,l.jsx)(t.h2,{id:"dropdown-width",children:"Dropdown width"}),"\n",(0,l.jsxs)(t.p,{children:["To change dropdown width, set ",(0,l.jsx)(t.code,{children:"width"})," prop in ",(0,l.jsx)(t.code,{children:"comboboxProps"}),". By default,\ndropdown width is equal to the input width."]}),"\n",(0,l.jsx)(x,{data:I}),"\n",(0,l.jsx)(t.h2,{id:"dropdown-offset",children:"Dropdown offset"}),"\n",(0,l.jsxs)(t.p,{children:["To change dropdown offset, set ",(0,l.jsx)(t.code,{children:"offset"})," prop in ",(0,l.jsx)(t.code,{children:"comboboxProps"}),":"]}),"\n",(0,l.jsx)(x,{data:Y}),"\n",(0,l.jsx)(t.h2,{id:"dropdown-animation",children:"Dropdown animation"}),"\n",(0,l.jsxs)(t.p,{children:["By default, dropdown animations are disabled. To enable them, you can set ",(0,l.jsx)(t.code,{children:"transitionProps"}),",\nwhich will be passed down to the underlying ",(0,l.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component."]}),"\n",(0,l.jsx)(x,{data:W}),"\n",(0,l.jsx)(t.h2,{id:"dropdown-padding",children:"Dropdown padding"}),"\n",(0,l.jsx)(x,{data:F}),"\n",(0,l.jsx)(t.h2,{id:"dropdown-shadow",children:"Dropdown shadow"}),"\n",(0,l.jsx)(x,{data:N}),"\n",(0,l.jsx)(V,{component:"Select"}),"\n",(0,l.jsx)(x,{data:B}),"\n",(0,l.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,l.jsx)(k,{component:"Select",element:"input"}),"\n",(0,l.jsx)(x,{data:E}),"\n",(0,l.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"readOnly"})," to make the input read only. When ",(0,l.jsx)(t.code,{children:"readOnly"})," is set,\n",(0,l.jsx)(t.code,{children:"Select"})," will not show suggestions and will not call ",(0,l.jsx)(t.code,{children:"onChange"})," function."]}),"\n",(0,l.jsx)(x,{data:_}),"\n",(0,l.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"disabled"})," to disable the input. When ",(0,l.jsx)(t.code,{children:"disabled"})," is set,\nuser cannot interact with the input and ",(0,l.jsx)(t.code,{children:"Select"})," will not show suggestions."]}),"\n",(0,l.jsx)(x,{data:M}),"\n",(0,l.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,l.jsx)(x,{data:z}),"\n",(0,l.jsx)(D,{component:"Select"}),"\n",(0,l.jsx)(x,{data:Z}),"\n",(0,l.jsx)(j,{component:"Select",refType:"input"}),"\n",(0,l.jsx)(y,{component:"Select"}),"\n",(0,l.jsxs)(t.p,{children:["To set ",(0,l.jsx)(t.code,{children:"aria-label"})," on the clear button, use ",(0,l.jsx)(t.code,{children:"clearButtonProps"}),". Note that it is required\nonly when ",(0,l.jsx)(t.code,{children:"clearable"})," is set."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { Select } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Select\n      data={[]}\n      clearable\n      clearButtonProps={{\n        'aria-label': 'Clear input',\n      }}\n    />\n  );\n}\n"})})]})}function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(J,{...e,children:(0,l.jsx)(q,{...e})})}function Q(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},94630:(e,t,o)=>{"use strict";o.d(t,{A:()=>l});var l=(0,o(73366).A)("outline","align-center","IconAlignCenter",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M8 12l8 0",key:"svg-1"}],["path",{d:"M6 18l12 0",key:"svg-2"}]])},19392:(e,t,o)=>{"use strict";o.d(t,{A:()=>l});var l=(0,o(73366).A)("outline","align-justified","IconAlignJustified",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l16 0",key:"svg-1"}],["path",{d:"M4 18l12 0",key:"svg-2"}]])},54586:(e,t,o)=>{"use strict";o.d(t,{A:()=>l});var l=(0,o(73366).A)("outline","align-left","IconAlignLeft",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l10 0",key:"svg-1"}],["path",{d:"M4 18l14 0",key:"svg-2"}]])},51189:(e,t,o)=>{"use strict";o.d(t,{A:()=>l});var l=(0,o(73366).A)("outline","align-right","IconAlignRight",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M10 12l10 0",key:"svg-1"}],["path",{d:"M6 18l14 0",key:"svg-2"}]])},32653:(e,t,o)=>{"use strict";o.d(t,{A:()=>l});var l=(0,o(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},31019:(e,t,o)=>{"use strict";o.d(t,{w:()=>b});var l=o(31085),n=o(54586),r=o(94630),a=o(51189),i=o(19392),c=o(11466),d=o(56051),s=o(78501);let u=`
import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconCheck,
} from '@tabler/icons-react';
import { Group, Select, SelectProps } from '@mantine/core';

const iconProps = {
  stroke: 1.5,
  color: 'currentColor',
  opacity: 0.6,
  size: 18,
};

const icons: Record<string, React.ReactNode> = {
  left: <IconAlignLeft {...iconProps} />,
  center: <IconAlignCenter {...iconProps} />,
  right: <IconAlignRight {...iconProps} />,
  justify: <IconAlignJustified {...iconProps} />,
};

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => (
  <Group flex="1" gap="xs">
    {icons[option.value]}
    {option.label}
    {checked && <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />}
  </Group>
);

function Demo() {
  return (
    <Select
      label="Select with renderOption"
      placeholder="Select text align"
      data={[
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
        { value: 'justify', label: 'Justify' },
      ]}
      renderOption={renderSelectOption}
    />
  );
}
`,p={stroke:1.5,color:"currentColor",opacity:.6,size:18},h={left:(0,l.jsx)(n.A,{...p}),center:(0,l.jsx)(r.A,{...p}),right:(0,l.jsx)(a.A,{...p}),justify:(0,l.jsx)(i.A,{...p})},m=({option:e,checked:t})=>(0,l.jsxs)(d.Y,{flex:"1",gap:"xs",children:[h[e.value],e.label,t&&(0,l.jsx)(c.A,{style:{marginInlineStart:"auto"},...p})]}),b={type:"code",component:function(){return(0,l.jsx)(s.l,{label:"Select with renderOption",placeholder:"Select text align",data:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"justify",label:"Justify"}],renderOption:m})},code:u,centered:!0,maxWidth:340,defaultExpanded:!1}},23232:(e,t,o)=>{"use strict";o.d(t,{$7:()=>r,l$:()=>l,wQ:()=>n});let l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],n=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},65567:(e,t,o)=>{"use strict";o.d(t,{i:()=>u});var l=o(31085),n=o(54357),r=o(5583),a=o(37950),i=o(31791),c=o(51513),d=o(51200);function s({data:e,withCheckIcon:t,value:o,checkIconPosition:a,unstyled:u,renderOption:p}){if(!(0,c.c)(e)){var h;let c=(h=e.value,Array.isArray(o)?o.includes(h):o===h),s=t&&c&&(0,l.jsx)(r.S,{className:d.A.optionsDropdownCheckIcon}),m=(0,l.jsxs)(l.Fragment,{children:["left"===a&&s,(0,l.jsx)("span",{children:e.label}),"right"===a&&s]});return(0,l.jsx)(i.G.Option,{value:e.value,disabled:e.disabled,className:(0,n.A)({[d.A.optionsDropdownOption]:!u}),"data-reverse":"right"===a||void 0,"data-checked":c||void 0,"aria-selected":c,active:c,children:"function"==typeof p?p({option:e,checked:c}):m})}let m=e.items.map(e=>(0,l.jsx)(s,{data:e,value:o,unstyled:u,withCheckIcon:t,checkIconPosition:a,renderOption:p},e.value));return(0,l.jsx)(i.G.Group,{label:e.group,children:m})}function u({data:e,hidden:t,hiddenWhenEmpty:o,filter:n,search:r,limit:d,maxDropdownHeight:u,withScrollArea:p=!0,filterOptions:h=!0,withCheckIcon:m=!1,value:b,checkIconPosition:f,nothingFoundMessage:x,unstyled:v,labelId:g,renderOption:j,scrollAreaProps:y,"aria-label":S}){!function e(t,o=new Set){if(Array.isArray(t))for(let l of t)if((0,c.c)(l))e(l.items,o);else{if(void 0===l.value)throw Error("[@mantine/core] Each option must have value property");if("string"!=typeof l.value)throw Error(`[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof l.value}`);if(o.has(l.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${l.value}" was provided more than once`);o.add(l.value)}}(e);let w="string"==typeof r?(n||function e({options:t,search:o,limit:l}){let n=o.trim().toLowerCase(),r=[];for(let a=0;a<t.length;a+=1){let i=t[a];if(r.length===l)break;(0,c.c)(i)&&r.push({group:i.group,items:e({options:i.items,search:o,limit:l-r.length})}),!(0,c.c)(i)&&i.label.toLowerCase().includes(n)&&r.push(i)}return r})({options:e,search:h?r:"",limit:d??1/0}):e,A=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(w),k=w.map(e=>(0,l.jsx)(s,{data:e,withCheckIcon:m,value:b,checkIconPosition:f,unstyled:v,renderOption:j},(0,c.c)(e)?e.group:e.value));return(0,l.jsx)(i.G.Dropdown,{hidden:t||o&&A,"data-composed":!0,children:(0,l.jsxs)(i.G.Options,{labelledBy:g,"aria-label":S,children:[p?(0,l.jsx)(a.F.Autosize,{mah:u??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...y,children:k}):k,A&&x&&(0,l.jsx)(i.G.Empty,{children:x})]})})}},51513:(e,t,o)=>{"use strict";function l(e){return"group"in e}o.d(t,{c:()=>l})},35213:(e,t,o)=>{"use strict";o.d(t,{D:()=>function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[o.value]=o,t),{})}})},78501:(e,t,o)=>{"use strict";o.d(t,{l:()=>v});var l=o(31085),n=o(14041),r=o(97567),a=o(82307),i=o(34211),c=o(36456),d=o(29686),s=o(6754),u=o(46395),p=o(35213),h=o(31791),m=o(65567),b=o(88559),f=o(87059);let x={searchable:!1,withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left"},v=(0,s.P9)((e,t)=>{let o=(0,d.Y)("Select",x,e),{classNames:s,styles:v,unstyled:g,vars:j,dropdownOpened:y,defaultDropdownOpened:S,onDropdownClose:w,onDropdownOpen:A,onFocus:k,onBlur:V,onClick:P,onChange:D,data:R,value:C,defaultValue:I,selectFirstOptionOnChange:O,onOptionSubmit:Y,comboboxProps:W,readOnly:F,disabled:N,filter:T,limit:B,withScrollArea:E,maxDropdownHeight:_,size:M,searchable:z,rightSection:G,checkIconPosition:L,withCheckIcon:$,nothingFoundMessage:Z,name:H,form:U,searchValue:J,defaultSearchValue:q,onSearchChange:X,allowDeselect:Q,error:K,rightSectionPointerEvents:ee,id:et,clearable:eo,clearButtonProps:el,hiddenInputProps:en,renderOption:er,onClear:ea,autoComplete:ei,scrollAreaProps:ec,__defaultRightSection:ed,__clearSection:es,__clearable:eu,chevronColor:ep,...eh}=o,em=(0,n.useMemo)(()=>(0,u.d)(R),[R]),eb=(0,n.useMemo)(()=>(0,p.D)(em),[em]),ef=(0,r.B)(et),[ex,ev,eg]=(0,a.Z)({value:C,defaultValue:I,finalValue:null,onChange:D}),ej="string"==typeof ex?eb[ex]:void 0,ey=(0,i.Z)(ej),[eS,ew]=(0,a.Z)({value:J,defaultValue:q,finalValue:ej?ej.label:"",onChange:X}),eA=(0,b.B)({opened:y,defaultOpened:S,onDropdownOpen:()=>{A?.(),eA.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{w?.(),eA.resetSelectedOption()}}),{resolvedClassNames:ek,resolvedStyles:eV}=(0,c.Y)({props:o,styles:v,classNames:s});(0,n.useEffect)(()=>{O&&eA.selectFirstOption()},[O,ex]),(0,n.useEffect)(()=>{null===C&&ew(""),"string"==typeof C&&ej&&(ey?.value!==ej.value||ey?.label!==ej.label)&&ew(ej.label)},[C,ej]);let eP=(0,l.jsx)(h.G.ClearButton,{...el,onClear:()=>{ev(null,null),ew(""),ea?.()}}),eD=eo&&!!ex&&!N&&!F;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(h.G,{store:eA,__staticSelector:"Select",classNames:ek,styles:eV,unstyled:g,readOnly:F,onOptionSubmit:e=>{Y?.(e);let t=Q&&eb[e].value===ex?null:eb[e],o=t?t.value:null;o!==ex&&ev(o,t),eg||ew("string"==typeof o&&t?.label||""),eA.closeDropdown()},size:M,...W,children:[(0,l.jsx)(h.G.Target,{targetType:z?"input":"button",autoComplete:ei,children:(0,l.jsx)(f.O,{id:ef,ref:t,__defaultRightSection:(0,l.jsx)(h.G.Chevron,{size:M,error:K,unstyled:g,color:ep}),__clearSection:eP,__clearable:eD,rightSection:G,rightSectionPointerEvents:ee||(eD?"all":"none"),...eh,size:M,__staticSelector:"Select",disabled:N,readOnly:F||!z,value:eS,onChange:e=>{ew(e.currentTarget.value),eA.openDropdown(),O&&eA.selectFirstOption()},onFocus:e=>{z&&eA.openDropdown(),k?.(e)},onBlur:e=>{z&&eA.closeDropdown(),ew(null!=ex&&eb[ex]?.label||""),V?.(e)},onClick:e=>{z?eA.openDropdown():eA.toggleDropdown(),P?.(e)},classNames:ek,styles:eV,unstyled:g,pointer:!z,error:K})}),(0,l.jsx)(m.i,{data:em,hidden:F||N,filter:T,search:eS,limit:B,hiddenWhenEmpty:!Z,withScrollArea:E,maxDropdownHeight:_,filterOptions:z&&ej?.label!==eS,value:ex,checkIconPosition:L,withCheckIcon:$,nothingFoundMessage:Z,unstyled:g,labelId:eh.label?`${ef}-label`:void 0,"aria-label":eh.label?void 0:eh["aria-label"],renderOption:er,scrollAreaProps:ec})]}),(0,l.jsx)(h.G.HiddenInput,{value:ex,name:H,form:U,disabled:N,...en})]})});v.classes={...f.O.classes,...h.G.classes},v.displayName="@mantine/core/Select"},92051:(e,t,o)=>{"use strict";o.d(t,{j:()=>n});var l=o(14041);function n(e=!1,t){let{onOpen:o,onClose:r}=t||{},[a,i]=(0,l.useState)(e),c=(0,l.useCallback)(()=>{i(e=>e||(o?.(),!0))},[o]),d=(0,l.useCallback)(()=>{i(e=>e?(r?.(),!1):e)},[r]),s=(0,l.useCallback)(()=>{a?d():c()},[d,c,a]);return[a,{open:c,close:d,toggle:s}]}},34211:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});var l=o(14041);function n(e){let t=(0,l.useRef)(void 0);return(0,l.useEffect)(()=>{t.current=e},[e]),t.current}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,85954,31791,90636,46593,38792],()=>t(8217)),_N_E=e.O()}]);