"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[1972],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,ah:()=>p,kt:()=>b});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,b=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(b,i(i({ref:t},l),{},{components:r})):n.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(1163),a=(r(9496),r(9613));const o={sidebar_position:3},i="TS \u9ad8\u7ea7",c={unversionedId:"base/TS/tsadvanced",id:"base/TS/tsadvanced",title:"TS \u9ad8\u7ea7",description:"TypeScript \u9ad8\u7ea7\u7c7b\u578b\u7684\u4f7f\u7528\u573a\u666f, \u5bf9\u65e5\u5e38 TypeScript \u7684\u4f7f\u7528\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e9b\u5e2e\u52a9\u3002",source:"@site/docs/base/TS/tsadvanced.md",sourceDirName:"base/TS",slug:"/base/TS/tsadvanced",permalink:"/en/docs/base/TS/tsadvanced",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"TS \u6cdb\u578b",permalink:"/en/docs/base/TS/tsGenerics"},next:{title:"Git",permalink:"/en/docs/base/git"}},s={},p=[{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:2},{value:"\u7c7b\u578b\u7ea6\u675f(extends)",id:"\u7c7b\u578b\u7ea6\u675fextends",level:3}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ts-\u9ad8\u7ea7"},"TS \u9ad8\u7ea7"),(0,a.kt)("p",null,"TypeScript \u9ad8\u7ea7\u7c7b\u578b\u7684\u4f7f\u7528\u573a\u666f, \u5bf9\u65e5\u5e38 TypeScript \u7684\u4f7f\u7528\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e9b\u5e2e\u52a9\u3002 "),(0,a.kt)("h2",{id:"\u5173\u952e\u5b57"},"\u5173\u952e\u5b57"),(0,a.kt)("h3",{id:"\u7c7b\u578b\u7ea6\u675fextends"},"\u7c7b\u578b\u7ea6\u675f(extends)"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"T extemds K"))),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684 extends \u4e0d\u662f\u7c7b\u3001\u63a5\u53e3\u7684\u7ee7\u627f\uff0c\u800c\u662f\u5bf9\u4e8e\u7c7b\u578b\u7684\u5224\u65ad\u548c\u7ea6\u675f\uff0c\u610f\u601d\u662f\u5224\u65ad T \u80fd\u5426\u8d4b\u503c\u7ed9 K"))}d.isMDXComponent=!0}}]);