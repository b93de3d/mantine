(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7833],{1841:(e,n,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/vitest",function(){return t(23272)}])},23272:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var r=t(31085),i=t(71184),s=t(85954),o=t(38215);let d=(0,s.P)(o.XZ.Vitest);function a(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{InstallScript:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("InstallScript",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"testing-with-vitest",children:"Testing with Vitest"}),"\n",(0,r.jsxs)(n.p,{children:["This guide will help you setup ",(0,r.jsx)(n.a,{href:"https://vitest.dev/",children:"Vitest"})," and ",(0,r.jsx)(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro",children:"React Testing Library"})," for your project.\nNote that this guide intended for projects that use ",(0,r.jsx)(n.a,{href:"https://vitejs.dev/",children:"Vite"})," as a bundler, if you are using\nother frameworks/bundlers, it is recommended to use ",(0,r.jsx)(n.a,{href:"/guides/jest/",children:"Jest"})," instead."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"Install vitest and react testing library:"}),"\n",(0,r.jsx)(t,{dev:!0,packages:"vitest jsdom @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event"}),"\n",(0,r.jsxs)(n.p,{children:["If you want to run tests from your IDE, install one of the ",(0,r.jsx)(n.a,{href:"https://vitest.dev/guide/ide",children:"extensions"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Add vitest configuration to your Vite config file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { defineConfig } from 'vite';\n\nexport default defineConfig({\n  // ... rest of your config\n  test: {\n    globals: true,\n    environment: 'jsdom',\n    setupFiles: './vitest.setup.mjs',\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then create ",(0,r.jsx)(n.code,{children:"vitest.setup.mjs"})," file in your project root and add the following code to it:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import '@testing-library/jest-dom/vitest';\n\nimport { vi } from 'vitest';\n\nconst { getComputedStyle } = window;\nwindow.getComputedStyle = (elt) => getComputedStyle(elt);\nwindow.HTMLElement.prototype.scrollIntoView = () => {};\n\nObject.defineProperty(window, 'matchMedia', {\n  writable: true,\n  value: vi.fn().mockImplementation((query) => ({\n    matches: false,\n    media: query,\n    onchange: null,\n    addListener: vi.fn(),\n    removeListener: vi.fn(),\n    addEventListener: vi.fn(),\n    removeEventListener: vi.fn(),\n    dispatchEvent: vi.fn(),\n  })),\n});\n\nclass ResizeObserver {\n  observe() {}\n  unobserve() {}\n  disconnect() {}\n}\n\nwindow.ResizeObserver = ResizeObserver;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The code above mocks ",(0,r.jsx)(n.code,{children:"window.matchMedia"})," and ",(0,r.jsx)(n.code,{children:"ResizeObserver"})," APIs that are not available\nin ",(0,r.jsx)(n.code,{children:"jsdom"})," environment but are required by some Mantine components."]}),"\n",(0,r.jsxs)(n.p,{children:["Optionally you can add vitest scripts to your ",(0,r.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "vitest": "vitest run",\n    "vitest:watch": "vitest"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"custom-render",children:"Custom render"}),"\n",(0,r.jsxs)(n.p,{children:["All Mantine components require ",(0,r.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})," to be present in the component tree.\nTo add ",(0,r.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})," to the component tree in your tests, create a ",(0,r.jsx)(n.a,{href:"https://testing-library.com/docs/react-testing-library/setup/#custom-render",children:"custom render"}),"\nfunction:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"// ./test-utils/render.tsx\nimport { render as testingLibraryRender } from '@testing-library/react';\nimport { MantineProvider } from '@mantine/core';\n// Import your theme object\nimport { theme } from '../src/theme';\n\nexport function render(ui: React.ReactNode) {\n  return testingLibraryRender(<>{ui}</>, {\n    wrapper: ({ children }: { children: React.ReactNode }) => (\n      <MantineProvider theme={theme}>{children}</MantineProvider>\n    ),\n  });\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It is usually more convenient to export all ",(0,r.jsx)(n.code,{children:"@testing-library/*"})," functions that you are planning to use\nfrom ",(0,r.jsx)(n.code,{children:"./testing-utils/index.ts"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import userEvent from '@testing-library/user-event';\n\nexport * from '@testing-library/react';\nexport { render } from './render';\nexport { userEvent };\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then you should import all testing utilities from ",(0,r.jsx)(n.code,{children:"./testing-utils"})," instead of ",(0,r.jsx)(n.code,{children:"@testing-library/react"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { render, screen } from '../test-utils';\nimport { Welcome } from './Welcome';\n\ndescribe('Welcome component', () => {\n  it('has correct Next.js theming section link', () => {\n    render(<Welcome />);\n    expect(screen.getByText('this guide')).toHaveAttribute(\n      'href',\n      'https://mantine.dev/guides/next/'\n    );\n  });\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-of-a-full-setup",children:"Example of a full setup"}),"\n",(0,r.jsxs)(n.p,{children:["You can find an example with a full Vitest setup in ",(0,r.jsx)(n.a,{href:"https://github.com/mantinedev/vite-template",children:"mantine-vite-template"}),"."]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(d,{...e,children:(0,r.jsx)(a,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,85954,90636,46593,38792],()=>n(1841)),_N_E=e.O()}]);