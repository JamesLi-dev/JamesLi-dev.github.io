"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[655],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,ah:()=>l,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),b=a,d=p["".concat(s,".").concat(b)]||p[b]||f[b]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(1966),a=(r(9496),r(9613));const o={sidebar_position:5},i="JS \u6570\u5b66\u77e5\u8bc6",c={unversionedId:"base/js/jsMath",id:"base/js/jsMath",title:"JS \u6570\u5b66\u77e5\u8bc6",description:"\u5173\u4e8eJS\u7684\u4e00\u4e9b\u603b\u7ed3, \u6301\u7eed\u66f4\u65b0\u4e2d\u2026\u2026",source:"@site/docs/base/js/jsMath.md",sourceDirName:"base/js",slug:"/base/js/jsMath",permalink:"/docs/base/js/jsMath",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"JS \u6570\u7ec4\u5e38\u7528\u65b9\u6cd5",permalink:"/docs/base/js/jsArray"},next:{title:"JS \u5e38\u7528\u65b9\u6cd5\u5c01\u88c5",permalink:"/docs/base/js/jsFuncs"}},s={},l=[{value:"1.\u8d28\u6570",id:"1\u8d28\u6570",level:3},{value:"2.\u6590\u6ce2\u90a3\u5951\u6570\u5217",id:"2\u6590\u6ce2\u90a3\u5951\u6570\u5217",level:3}],u={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"js-\u6570\u5b66\u77e5\u8bc6"},"JS \u6570\u5b66\u77e5\u8bc6"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5173\u4e8eJS\u7684\u4e00\u4e9b\u603b\u7ed3, \u6301\u7eed\u66f4\u65b0\u4e2d\u2026\u2026")),(0,a.kt)("h3",{id:"1\u8d28\u6570"},"1.\u8d28\u6570"),(0,a.kt)("p",null,"\u82e5\u4e00\u4e2a\u6b63\u6574\u6570\u65e0\u6cd5\u88ab\u9664\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u548c\u5b83\u81ea\u8eab\u4e4b\u5916\u7684\u4efb\u4f55\u81ea\u7136\u6570\u6574\u9664\uff0c\u5219\u79f0\u8be5\u6570\u4e3a\u8d28\u6570\uff08\u6216\u7d20\u6570\uff09\uff0c\u5426\u5219\u79f0\u8be5\u6b63\u6574\u6570\u4e3a\u5408\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function judgePrime(n) {\n  for (let i = 2; i * i <= n; i++) {\n    if (n % i == 0) return false;\n  }\n  return true;\n}\n")),(0,a.kt)("h3",{id:"2\u6590\u6ce2\u90a3\u5951\u6570\u5217"},"2.\u6590\u6ce2\u90a3\u5951\u6570\u5217"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Fibonacci(n) {\n  if (n <= 1) return n;\n  return Fibonacci(n - 1) + Fibonacci(n - 2);\n}\n")))}f.isMDXComponent=!0}}]);