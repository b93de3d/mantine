(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68029],{60317:(i,o,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/x/notifications",function(){return n(26531)}])},26531:(i,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>C});var t=n(31085),e=n(71184),s=n(52022),c=n(48727);let a={type:"code",code:`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      onClick={() =>
        notifications.show({
          title: 'Default notification',
          message: 'Do not forget to star Mantine on GitHub! \u{1F31F}',
        })
      }
    >
      Show notification
    </Button>
  );
}`,centered:!0,component:function(){return(0,t.jsx)(s.$,{onClick:()=>c.$e.show({title:"Default notification",message:"Do not forget to star Mantine on GitHub! \uD83C\uDF1F"}),children:"Show notification"})}};var l=n(72041),r=n(56051),d={root:"m_45c99571",description:"m_436b008d",title:"m_73829fa9",closeButton:"m_979213db"};let u={type:"code",centered:!0,component:function(){return(0,t.jsxs)(r.Y,{justify:"center",children:[(0,t.jsx)(s.$,{onClick:()=>c.$e.show({title:"Notification with custom styles",message:"It is default blue",classNames:d}),children:"Default notification"}),(0,t.jsx)(s.$,{color:"red",onClick:()=>c.$e.show({color:"red",title:"Notification with custom styles",message:"It is red",classNames:d}),children:"Error notification"})]})},code:[{fileName:"Demo.tsx",code:`
import { Button, Group } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() =>
          notifications.show({
            title: 'Notification with custom styles',
            message: 'It is default blue',
            classNames: classes,
          })
        }
      >
        Default notification
      </Button>

      <Button
        color="red"
        onClick={() =>
          notifications.show({
            color: 'red',
            title: 'Notification with custom styles',
            message: 'It is red',
            classNames: classes,
          })
        }
      >
        Error notification
      </Button>
    </Group>
  );
}`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  background-color: var(--notification-color, var(--mantine-primary-color-filled));

  &::before {
    background-color: var(--mantine-color-white);
  }
}

.description,
.title {
  color: var(--mantine-color-white);
}

.closeButton {
  color: var(--mantine-color-white);

  @mixin hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
`,language:"scss"}]};var f=n(13643);let h={type:"code",code:`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Button
      onClick={() => {
        Array(10).fill(0).forEach((_, index) => {
          setTimeout(() => {
            notifications.show({
              title: \`Notification \${index + 1}\`,
              message: 'Most notifications are added to queue',
            });
          }, 200 * index);
        });
      }}
    >
      Show 10 notifications
    </Button>
  );
}`,centered:!0,component:function(){return(0,t.jsx)(s.$,{onClick:()=>{Array(10).fill(0).forEach((i,o)=>{setTimeout(()=>{c.$e.show({title:`Notification ${o+1}`,message:"Most notifications are added to queue"})},200*o)})},children:"Show 10 notifications"})}},m={type:"code",code:`
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() => {
          Array(10)
            .fill(0)
            .forEach((_, index) => {
              notifications.show({
                title: \`Notification \${index + 1}\`,
                message: 'Most notifications are added to queue',
                autoClose: false,
              });
            });
        }}
      >
        Show 10 notifications
      </Button>

      <Button variant="default" onClick={() => notifications.cleanQueue()}>
        Clean queue
      </Button>

      <Button variant="outline" color="red" onClick={() => notifications.clean()}>
        Clean all
      </Button>
    </Group>
  );
}`,component:function(){return(0,t.jsxs)(r.Y,{justify:"center",children:[(0,t.jsx)(s.$,{onClick:()=>{Array(10).fill(0).forEach((i,o)=>{c.$e.show({title:`Notification ${o+1}`,message:"Most notifications are added to queue",autoClose:!1})})},children:"Show 10 notifications"}),(0,t.jsx)(s.$,{variant:"default",onClick:()=>c.$e.cleanQueue(),children:"Clean queue"}),(0,t.jsx)(s.$,{variant:"outline",color:"red",onClick:()=>c.$e.clean(),children:"Clean all"})]})}};var p=n(11466);let x={type:"code",code:`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <Button
      onClick={() => {
        const id = notifications.show({
          loading: true,
          title: 'Loading your data',
          message: 'Data will be loaded in 3 seconds, you cannot close this yet',
          autoClose: false,
          withCloseButton: false,
        });

        setTimeout(() => {
          notifications.update({
            id,
            color: 'teal',
            title: 'Data was loaded',
            message: 'Notification will close in 2 seconds, you can close this notification now',
            icon: <IconCheck size={18} />,
            loading: false,
            autoClose: 2000,
          });
        }, 3000);
      }}
    >
      Show update notification
    </Button>
  );
}
`,centered:!0,component:function(){return(0,t.jsx)(s.$,{onClick:()=>{let i=c.$e.show({loading:!0,title:"Loading your data",message:"Data will be loaded in 3 seconds, you cannot close this yet",autoClose:!1,withCloseButton:!1});setTimeout(()=>{c.$e.update({id:i,color:"teal",title:"Data was loaded",message:"Notification will close in 2 seconds, you can close this notification now",icon:(0,t.jsx)(p.A,{size:18}),loading:!1,autoClose:2e3})},3e3)},children:"Show update notification"})}},j={type:"code",code:`
import { Group, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  return (
    <Group justify="center">
      <Button
        onClick={() => notifications.show({ message: 'I will close in 4 seconds' })}
      >
        Notifications Provider timeout
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            message: 'I will close in 500ms',
            autoClose: 500,
          })
        }
      >
        Closes in 500ms
      </Button>

      <Button
        onClick={() =>
          notifications.show({
            color: 'blue',
            title: 'I will never close',
            message: 'unless you click X',
            autoClose: false,
          })
        }
      >
        Never closes automatically
      </Button>
    </Group>
  );
}
`,component:function(){return(0,t.jsxs)(r.Y,{justify:"center",children:[(0,t.jsx)(s.$,{onClick:()=>c.$e.show({message:"I will close in 4 seconds"}),children:"Notifications Provider timeout"}),(0,t.jsx)(s.$,{onClick:()=>c.$e.show({message:"I will close in 500ms",autoClose:500}),children:"Closes in 500ms"}),(0,t.jsx)(s.$,{onClick:()=>c.$e.show({color:"blue",title:"I will never close",message:"unless you click X",autoClose:!1}),children:"Never closes automatically"})]})}};var g=n(11417),w=n(85954),y=n(38215);let b=(0,w.P)(y.XZ.Notifications);function N(i){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,e.R)(),...i.components},{Demo:n,InstallScript:s}=o;return n||v("Demo",!0),s||v("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(s,{packages:"@mantine/notifications"}),"\n",(0,t.jsx)(o.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import '@mantine/notifications/styles.css';\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Add ",(0,t.jsx)(o.code,{children:"Notifications"})," component anywhere in your application. Note that:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["It is required to render ",(0,t.jsx)(o.code,{children:"Notifications"})," component inside ",(0,t.jsx)(o.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})]}),"\n",(0,t.jsxs)(o.li,{children:["You do not need to wrap your application with ",(0,t.jsx)(o.code,{children:"Notifications"})," component – it is not a provider, it is a regular component"]}),"\n",(0,t.jsxs)(o.li,{children:["You should not render multiple ",(0,t.jsx)(o.code,{children:"Notifications"})," components – if you do that, your notifications will be duplicated"]}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\nimport { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return (\n    <MantineProvider>\n      <Notifications />\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.p,{children:"All set! You can now use all notifications system features."}),"\n",(0,t.jsx)(n,{data:a}),"\n",(0,t.jsx)(o.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"@mantine/notifications"})," package exports ",(0,t.jsx)(o.code,{children:"notifications"})," object with the following functions:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"notifications.show"})," – adds given notification to the notifications list or queue, depending on the current state and ",(0,t.jsx)(o.code,{children:"limit"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"notifications.hide"})," – removes notification with given ",(0,t.jsx)(o.code,{children:"id"})," from the notifications state and queue"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"notifications.update"})," – updates notification that was previously added to the state or queue"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"notifications.updateState"})," – executes given callback with current notifications state and queue as an argument and updates state with returned value"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"notifications.clean"})," – removes all notifications from the notifications state and queue"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"notifications.cleanQueue"})," – removes all notifications from the queue"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["All functions can be imported from ",(0,t.jsx)(o.code,{children:"@mantine/notifications"})," package and can be used in any part of your application:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n"})}),"\n",(0,t.jsx)(o.p,{children:"You can also import these functions separately:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"// alias functions\nimport {\n  cleanNotifications, // notifications.clean\n  cleanNotificationsQueue, // notifications.cleanQueue\n  hideNotification, // notifications.hide\n  showNotification, // notifications.show\n  updateNotification, // notifications.update\n  updateNotificationsState, // notifications.updateState\n} from '@mantine/notifications';\n"})}),"\n",(0,t.jsx)(o.h2,{id:"notification-props",children:"Notification props"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"notifications.show"})," and ",(0,t.jsx)(o.code,{children:"notification.update"})," functions can be called with an object that has the following properties:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"id"})," – notification id, it is used to update and remove notifications, by default ",(0,t.jsx)(o.code,{children:"id"})," is randomly generated"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"position"})," – notification position, by default the value from the ",(0,t.jsx)(o.code,{children:"position"})," prop of the ",(0,t.jsx)(o.code,{children:"Notifications"})," component is used"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"withBorder"})," – determines whether notification should have a border"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"withCloseButton"})," – determines whether the close button should be visible"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"onClose"})," – calls when notification is unmounted"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"onOpen"})," – calls when notification is mounted"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"autoClose"})," – defines timeout in ms on which notification will be automatically closed, use ",(0,t.jsx)(o.code,{children:"false"})," to disable auto close"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"message"})," – required notification body"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"color, icon, title, radius, className, style, loading"})," – props passed down to the ",(0,t.jsx)(o.a,{href:"/core/notification/",children:"Notification"})," component"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["All properties except ",(0,t.jsx)(o.code,{children:"message"})," are optional."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { IconX } from '@tabler/icons-react';\nimport { notifications } from '@mantine/notifications';\n\n// Bare minimum – message is required for all notifications\nnotifications.show({ message: 'Hello' });\n\n// Most used notification props\nnotifications.show({\n  id: 'hello-there',\n  position: 'bottom-center',\n  withCloseButton: true,\n  onClose: () => console.log('unmounted'),\n  onOpen: () => console.log('mounted'),\n  autoClose: 5000,\n  title: \"You've been compromised\",\n  message: 'Leave the building immediately',\n  color: 'red',\n  icon: <IconX />,\n  className: 'my-notification-class',\n  style: { backgroundColor: 'red' },\n  loading: false,\n});\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Notifications preview (",(0,t.jsx)(o.code,{children:"message"})," prop used as ",(0,t.jsx)(o.code,{children:"children"}),"):"]}),"\n",(0,t.jsx)(n,{data:l.c,configuratorProps:{includeCode:!1}}),"\n",(0,t.jsx)(o.h2,{id:"customize-notification-styles",children:"Customize notification styles"}),"\n",(0,t.jsxs)(o.p,{children:["You can use ",(0,t.jsx)(o.code,{children:"style"}),", ",(0,t.jsx)(o.code,{children:"className"})," or ",(0,t.jsx)(o.a,{href:"/styles/styles-api/",children:"Styles API"})," ",(0,t.jsx)(o.code,{children:"classNames"}),", ",(0,t.jsx)(o.code,{children:"styles"})," props to customize notification styles.\nUsually, it is better to override ",(0,t.jsx)(o.a,{href:"/core/notification",children:"Notification"})," styles with ",(0,t.jsx)(o.code,{children:"classNames"})," prop in the ",(0,t.jsx)(o.a,{href:"/theming/theme-object/",children:"theme object"}),"."]}),"\n",(0,t.jsx)(n,{data:u}),"\n",(0,t.jsx)(o.h2,{id:"notifications-container-position",children:"Notifications container position"}),"\n",(0,t.jsxs)(o.p,{children:["You can define notification position in ",(0,t.jsx)(o.code,{children:"notifications.show"})," function. Possible ",(0,t.jsx)(o.code,{children:"position"})," values:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.code,{children:"top-left"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.code,{children:"top-right"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.code,{children:"top-center"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.code,{children:"bottom-left"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.code,{children:"bottom-right"})}),"\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.code,{children:"bottom-center"})}),"\n"]}),"\n",(0,t.jsx)(n,{data:f.G}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"position"})," can be defined on the ",(0,t.jsx)(o.code,{children:"Notifications"})," component.\nIn the following example, notifications will be displayed in the top right corner of the screen\nif ",(0,t.jsx)(o.code,{children:"position"})," is not defined in ",(0,t.jsx)(o.code,{children:"notifications.show"})," function:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return <Notifications position=\"top-right\" zIndex={1000} />;\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"limit-and-queue",children:"Limit and queue"}),"\n",(0,t.jsxs)(o.p,{children:["You can limit maximum number of notifications that are displayed at a time by setting\n",(0,t.jsx)(o.code,{children:"limit"})," prop on ",(0,t.jsx)(o.code,{children:"Notifications"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\nfunction Demo() {\n  return <Notifications limit={5} />;\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["All notifications added after the ",(0,t.jsx)(o.code,{children:"limit"})," was reached are added to the queue\nand displayed when notification from current state is hidden."]}),"\n",(0,t.jsx)(n,{data:h}),"\n",(0,t.jsx)(o.h2,{id:"remove-notifications-from-state-and-queue",children:"Remove notifications from state and queue"}),"\n",(0,t.jsxs)(o.p,{children:["To remove specific notification from state or queue use ",(0,t.jsx)(o.code,{children:"notifications.hide"})," function:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n\nconst id = notifications.show({ message: 'Hello!' });\nnotifications.hide(id);\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"notifications.cleanQueue"})," function to remove all notifications from the queue and\n",(0,t.jsx)(o.code,{children:"notifications.clean"})," to remove all notifications both from the state and queue:"]}),"\n",(0,t.jsx)(n,{data:m}),"\n",(0,t.jsx)(o.h2,{id:"update-notification",children:"Update notification"}),"\n",(0,t.jsx)(n,{data:x}),"\n",(0,t.jsx)(o.h2,{id:"auto-close",children:"Auto close"}),"\n",(0,t.jsxs)(o.p,{children:["You can configure auto close timeout with ",(0,t.jsx)(o.code,{children:"Notifications"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Notifications } from '@mantine/notifications';\n\n// All notifications will be closed automatically in 4000ms\nfunction Demo() {\n  return <Notifications autoClose={4000} />;\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Or per notification in ",(0,t.jsx)(o.code,{children:"notifications.show"}),"/",(0,t.jsx)(o.code,{children:"notifications.update"})," functions:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { notifications } from '@mantine/notifications';\n\nnotifications.show({\n  message: 'I will close in 500ms seconds',\n  autoClose: 500,\n});\n\nnotifications.update({\n  id: 'hello',\n  message: 'I will never close',\n  autoClose: false,\n});\n"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"notifications.show"})," and ",(0,t.jsx)(o.code,{children:"notifications.update"})," functions ",(0,t.jsx)(o.code,{children:"autoClose"})," prop has higher priority."]}),"\n",(0,t.jsx)(n,{data:j}),"\n",(0,t.jsx)(o.h2,{id:"subscribe-to-notifications-state",children:"Subscribe to notifications state"}),"\n",(0,t.jsxs)(o.p,{children:["You can subscribe to notifications state changes with ",(0,t.jsx)(o.code,{children:"useNotifications"})," hook.\nThe hook returns an object with ",(0,t.jsx)(o.code,{children:"notifications"})," and ",(0,t.jsx)(o.code,{children:"queue"})," arrays. ",(0,t.jsx)(o.code,{children:"notifications"}),"\narray contains all notifications that are currently displayed, ",(0,t.jsx)(o.code,{children:"queue"})," contains\nnotifications that are waiting to be displayed."]}),"\n",(0,t.jsx)(n,{data:g.M})]})}function C(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(b,{...i,children:(0,t.jsx)(N,{...i})})}function v(i,o){throw Error("Expected "+(o?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}},72041:(i,o,n)=>{"use strict";n.d(o,{c:()=>c});var t=n(31085),e=n(34056),s=n(58265);let c={type:"configurator",component:function(i){return(0,t.jsx)(e.a,{maw:400,mx:"auto",children:(0,t.jsx)(s.E,{onClose:()=>{},...i})})},centered:!0,code:`
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
`,dimmed:!0,controls:[{prop:"loading",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withCloseButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"title",type:"string",initialValue:"We notify you that",libraryValue:""},{prop:"children",type:"string",initialValue:"You are now obligated to give a star to Mantine project on GitHub",libraryValue:""}]}},13643:(i,o,n)=>{"use strict";n.d(o,{G:()=>l});var t=n(31085),e=n(52022),s=n(56051),c=n(48727);let a=["top-left","top-right","bottom-left","bottom-right","top-center","bottom-center"],l={type:"code",code:`
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

const positions = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'top-center',
  'bottom-center',
] as const;

function Demo() {
  const buttons = positions.map((position) => (
    <Button
      key={position}
      onClick={() =>
        notifications.show({
          title: \`Notification at \${position}\`,
          message: \`Notification at \${position} message\`,
          position,
        })
      }
    >
      {position}
    </Button>
  ));

  return <Group>{buttons}</Group>;
}`,centered:!0,component:function(){let i=a.map(i=>(0,t.jsx)(e.$,{onClick:()=>c.$e.show({title:`Notification at ${i}`,message:`Notification at ${i} message`,position:i}),children:i},i));return(0,t.jsx)(s.Y,{children:i})}}},11417:(i,o,n)=>{"use strict";n.d(o,{M:()=>r});var t=n(31085),e=n(52022),s=n(93065),c=n(37905),a=n(89939),l=n(48727);let r={type:"code",code:`
function Demo() {
  const [counter, { increment }] = useCounter();
  const notificationsStore = useNotifications();

  const showNotification = () => {
    notifications.show({
      title: \`Notification \${counter}\`,
      message: 'Most notifications are added to queue',
    });

    increment();
  };

  return (
    <>
      <Button onClick={showNotification} mb="md">
        Show notification
      </Button>

      <Text>Notifications state</Text>
      <Code block>{JSON.stringify(notificationsStore.notifications, null, 2)}</Code>

      <Text mt="md">Notifications queue</Text>
      <Code block>{JSON.stringify(notificationsStore.queue, null, 2)}</Code>
    </>
  );
}`,component:function(){let[i,{increment:o}]=(0,a.I)(),n=(0,l.E$)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.$,{onClick:()=>{l.$e.show({title:`Notification ${i}`,message:"Most notifications are added to queue"}),o()},mb:"md",children:"Show notification"}),(0,t.jsx)(s.E,{children:"Notifications state"}),(0,t.jsx)(c.C,{block:!0,children:JSON.stringify(n.notifications,null,2)}),(0,t.jsx)(s.E,{mt:"md",children:"Notifications queue"}),(0,t.jsx)(c.C,{block:!0,children:JSON.stringify(n.queue,null,2)})]})}}},89939:(i,o,n)=>{"use strict";n.d(o,{I:()=>c});var t=n(14041),e=n(68193);let s={min:-1/0,max:1/0};function c(i=0,o){let{min:n,max:a}={...s,...o},[l,r]=(0,t.useState)((0,e.q)(i,n,a));return[l,{increment:()=>r(i=>(0,e.q)(i+1,n,a)),decrement:()=>r(i=>(0,e.q)(i-1,n,a)),set:i=>r((0,e.q)(i,n,a)),reset:()=>r((0,e.q)(i,n,a))}]}}},i=>{var o=o=>i(i.s=o);i.O(0,[67456,85954,90636,46593,38792],()=>o(60317)),_N_E=i.O()}]);