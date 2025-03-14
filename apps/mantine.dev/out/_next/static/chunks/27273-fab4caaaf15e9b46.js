"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27273],{12012:(t,r,e)=>{e.d(r,{d:()=>C});var i=e(14041),n=e(93655),a=e.n(n),o=e(13157),l=e(81649),c=e(41762),s=e(68706),h=e(47915),u=e(50241),f=e(51732),y=["x1","y1","x2","y2","key"],v=["offset"];function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,i)}return e}function g(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?d(Object(e),!0).forEach(function(r){var i,n;i=r,n=e[r],(i=function(t){var r=function(t,r){if("object"!=p(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=p(i))return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==p(r)?r:r+""}(i))in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function m(){return(m=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}function x(t,r){if(null==t)return{};var e,i,n=function(t,r){if(null==t)return{};var e={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(r.indexOf(i)>=0)continue;e[i]=t[i]}return e}(t,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)e=a[i],!(r.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var w=function(t){var r=t.fill;if(!r||"none"===r)return null;var e=t.fillOpacity,n=t.x,a=t.y,o=t.width,l=t.height,c=t.ry;return i.createElement("rect",{x:n,y:a,ry:c,width:o,height:l,stroke:"none",fill:r,fillOpacity:e,className:"recharts-cartesian-grid-bg"})};function A(t,r){var e;if(i.isValidElement(t))e=i.cloneElement(t,r);else if(a()(t))e=t(r);else{var n=r.x1,o=r.y1,l=r.x2,s=r.y2,h=r.key,u=x(r,y),f=(0,c.J9)(u,!1),p=(f.offset,x(f,v));e=i.createElement("line",m({},p,{x1:n,y1:o,x2:l,y2:s,fill:"none",key:h}))}return e}function b(t){var r=t.x,e=t.width,n=t.horizontal,a=void 0===n||n,o=t.horizontalPoints;if(!a||!o||!o.length)return null;var l=o.map(function(i,n){return A(a,g(g({},t),{},{x1:r,y1:i,x2:r+e,y2:i,key:"line-".concat(n),index:n}))});return i.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}function k(t){var r=t.y,e=t.height,n=t.vertical,a=void 0===n||n,o=t.verticalPoints;if(!a||!o||!o.length)return null;var l=o.map(function(i,n){return A(a,g(g({},t),{},{x1:i,y1:r,x2:i,y2:r+e,key:"line-".concat(n),index:n}))});return i.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}function O(t){var r=t.horizontalFill,e=t.fillOpacity,n=t.x,a=t.y,o=t.width,l=t.height,c=t.horizontalPoints,s=t.horizontal;if(!(void 0===s||s)||!r||!r.length)return null;var h=c.map(function(t){return Math.round(t+a-a)}).sort(function(t,r){return t-r});a!==h[0]&&h.unshift(0);var u=h.map(function(t,c){var s=h[c+1]?h[c+1]-t:a+l-t;if(s<=0)return null;var u=c%r.length;return i.createElement("rect",{key:"react-".concat(c),y:t,x:n,height:s,width:o,stroke:"none",fill:r[u],fillOpacity:e,className:"recharts-cartesian-grid-bg"})});return i.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},u)}function E(t){var r=t.vertical,e=t.verticalFill,n=t.fillOpacity,a=t.x,o=t.y,l=t.width,c=t.height,s=t.verticalPoints;if(!(void 0===r||r)||!e||!e.length)return null;var h=s.map(function(t){return Math.round(t+a-a)}).sort(function(t,r){return t-r});a!==h[0]&&h.unshift(0);var u=h.map(function(t,r){var s=h[r+1]?h[r+1]-t:a+l-t;if(s<=0)return null;var u=r%e.length;return i.createElement("rect",{key:"react-".concat(r),x:t,y:o,width:s,height:c,stroke:"none",fill:e[u],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return i.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},u)}var P=function(t,r){var e=t.xAxis,i=t.width,n=t.height,a=t.offset;return(0,s.PW)((0,h.f)(g(g(g({},u.u.defaultProps),e),{},{ticks:(0,s.Rh)(e,!0),viewBox:{x:0,y:0,width:i,height:n}})),a.left,a.left+a.width,r)},j=function(t,r){var e=t.yAxis,i=t.width,n=t.height,a=t.offset;return(0,s.PW)((0,h.f)(g(g(g({},u.u.defaultProps),e),{},{ticks:(0,s.Rh)(e,!0),viewBox:{x:0,y:0,width:i,height:n}})),a.top,a.top+a.height,r)},z={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function C(t){var r,e,n,c,s,h,u=(0,f.yi)(),y=(0,f.rY)(),v=(0,f.hj)(),d=g(g({},t),{},{stroke:null!==(r=t.stroke)&&void 0!==r?r:z.stroke,fill:null!==(e=t.fill)&&void 0!==e?e:z.fill,horizontal:null!==(n=t.horizontal)&&void 0!==n?n:z.horizontal,horizontalFill:null!==(c=t.horizontalFill)&&void 0!==c?c:z.horizontalFill,vertical:null!==(s=t.vertical)&&void 0!==s?s:z.vertical,verticalFill:null!==(h=t.verticalFill)&&void 0!==h?h:z.verticalFill,x:(0,l.Et)(t.x)?t.x:v.left,y:(0,l.Et)(t.y)?t.y:v.top,width:(0,l.Et)(t.width)?t.width:v.width,height:(0,l.Et)(t.height)?t.height:v.height}),x=d.x,A=d.y,C=d.width,M=d.height,N=d.syncWithTicks,S=d.horizontalValues,T=d.verticalValues,F=(0,f.pj)(),G=(0,f.$G)();if(!(0,l.Et)(C)||C<=0||!(0,l.Et)(M)||M<=0||!(0,l.Et)(x)||x!==+x||!(0,l.Et)(A)||A!==+A)return null;var I=d.verticalCoordinatesGenerator||P,D=d.horizontalCoordinatesGenerator||j,R=d.horizontalPoints,W=d.verticalPoints;if((!R||!R.length)&&a()(D)){var _=S&&S.length,U=D({yAxis:G?g(g({},G),{},{ticks:_?S:G.ticks}):void 0,width:u,height:y,offset:v},!!_||N);(0,o.R)(Array.isArray(U),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(p(U),"]")),Array.isArray(U)&&(R=U)}if((!W||!W.length)&&a()(I)){var V=T&&T.length,B=I({xAxis:F?g(g({},F),{},{ticks:V?T:F.ticks}):void 0,width:u,height:y,offset:v},!!V||N);(0,o.R)(Array.isArray(B),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(p(B),"]")),Array.isArray(B)&&(W=B)}return i.createElement("g",{className:"recharts-cartesian-grid"},i.createElement(w,{fill:d.fill,fillOpacity:d.fillOpacity,x:d.x,y:d.y,width:d.width,height:d.height,ry:d.ry}),i.createElement(b,m({},d,{offset:v,horizontalPoints:R,xAxis:F,yAxis:G})),i.createElement(k,m({},d,{offset:v,verticalPoints:W,xAxis:F,yAxis:G})),i.createElement(O,m({},d,{horizontalPoints:R})),i.createElement(E,m({},d,{verticalPoints:W})))}C.displayName="CartesianGrid"},28255:(t,r,e)=>{e.d(r,{Q:()=>c});var i=e(20904),n=e(22821),a=e(98331),o=e(51492),l=e(14713),c=(0,i.gu)({chartName:"AreaChart",GraphicalChild:n.G,axisComponents:[{axisType:"xAxis",AxisComp:a.W},{axisType:"yAxis",AxisComp:o.h}],formatAxisMap:l.pr})},65344:(t,r,e)=>{e.d(r,{t:()=>s});var i=e(20904),n=e(69928),a=e(98331),o=e(51492),l=e(1693),c=e(14713),s=(0,i.gu)({chartName:"ScatterChart",GraphicalChild:n.X,defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],axisComponents:[{axisType:"xAxis",AxisComp:a.W},{axisType:"yAxis",AxisComp:o.h},{axisType:"zAxis",AxisComp:l.K}],formatAxisMap:c.pr})},3257:(t,r,e)=>{e.d(r,{A:()=>i});var i=(0,e(73366).A)("outline","arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]])},34310:(t,r,e)=>{e.d(r,{A:()=>i});var i=(0,e(73366).A)("outline","arrow-down-left","IconArrowDownLeft",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M16 17l-9 0l0 -9",key:"svg-1"}]])},56265:(t,r,e)=>{e.d(r,{A:()=>i});var i=(0,e(73366).A)("outline","arrow-down-right","IconArrowDownRight",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M17 8l0 9l-9 0",key:"svg-1"}]])},41590:(t,r,e)=>{e.d(r,{A:()=>i});var i=(0,e(73366).A)("outline","arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]])},75021:(t,r,e)=>{e.d(r,{A:()=>i});var i=(0,e(73366).A)("outline","arrow-up-left","IconArrowUpLeft",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M16 7l-9 0l0 9",key:"svg-1"}]])},94088:(t,r,e)=>{e.d(r,{A:()=>i});var i=(0,e(73366).A)("outline","arrow-up-right","IconArrowUpRight",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M8 7l9 0l0 9",key:"svg-1"}]])},10670:(t,r,e)=>{e.d(r,{A:()=>i});var i=(0,e(73366).A)("outline","circle","IconCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}]])}}]);