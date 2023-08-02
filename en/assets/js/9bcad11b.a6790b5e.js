"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[1144],{9613:(n,e,t)=>{t.d(e,{Zo:()=>u,ah:()=>l,kt:()=>j});var r=t(9496);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,s=function(n,e){if(null==n)return{};var t,r,s={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var c=r.createContext({}),l=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=l(n.components);return r.createElement(c.Provider,{value:e},n.children)},p="mdxType",b={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,s=n.mdxType,o=n.originalType,c=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),p=l(t),f=s,j=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return t?r.createElement(j,a(a({ref:e},u),{},{components:t})):r.createElement(j,a({ref:e},u))}));function j(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=n,i[p]="string"==typeof n?n:s,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8099:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(1966),s=(t(9496),t(9613));const o={sidebar_position:7},a="js \u5f52\u7eb3\u603b\u7ed3 \u65b9\u6cd5\u5408\u96c6",i={unversionedId:"base/js/jsHighFuncs",id:"base/js/jsHighFuncs",title:"js \u5f52\u7eb3\u603b\u7ed3 \u65b9\u6cd5\u5408\u96c6",description:"1\u3001\u5e76\u53d1\u63a7\u5236",source:"@site/docs/base/js/jsHighFuncs.md",sourceDirName:"base/js",slug:"/base/js/jsHighFuncs",permalink:"/en/docs/base/js/jsHighFuncs",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"JS \u5e38\u7528\u65b9\u6cd5\u5c01\u88c5",permalink:"/en/docs/base/js/jsFuncs"},next:{title:"JS \u6d4f\u89c8\u5668\u76f8\u5173\u65b9\u6cd5\u5c01\u88c5",permalink:"/en/docs/base/js/jsBrowser"}},c={},l=[{value:"1\u3001\u5e76\u53d1\u63a7\u5236",id:"1\u5e76\u53d1\u63a7\u5236",level:3},{value:"\u5bf9\u8c61\u6570\u7ec4\u53bb\u91cd",id:"\u5bf9\u8c61\u6570\u7ec4\u53bb\u91cd",level:3}],u={toc:l},p="wrapper";function b(n){let{components:e,...t}=n;return(0,s.kt)(p,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"js-\u5f52\u7eb3\u603b\u7ed3-\u65b9\u6cd5\u5408\u96c6"},"js \u5f52\u7eb3\u603b\u7ed3 \u65b9\u6cd5\u5408\u96c6"),(0,s.kt)("h3",{id:"1\u5e76\u53d1\u63a7\u5236"},"1\u3001\u5e76\u53d1\u63a7\u5236"),(0,s.kt)("p",null,"\u5e9f\u8bdd\u4e0d\u8bf4\u76f4\u63a5\u4e0a\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"class TaskContral {\n  constructor(concurrentCount = 3) {\n    this.concurrentCount = concurrentCount; // \u5e76\u53d1\u6570\u91cf\n    this.tasks = []; // \u4efb\u52a1\u5217\u8868\n    this.runnningCount = 0; // \u6267\u884c\u4e2d\u7684\u4efb\u52a1\u6570\u91cf\n  }\n\n  // \u6dfb\u52a0\u4efb\u52a1\n  add(task) {\n    return new Promise((resolve, reject) => {\n      this.tasks.push({\n        task,\n        resolve,\n        reject,\n      });\n      this.run();\n    });\n  }\n\n  // \u4efb\u52a1\u6267\u884c\n  run() {\n    while (this.tasks.length > 0 && this.runnningCount < this.concurrentCount) {\n      // \u53d6\u51fa\u4efb\u52a1\u961f\u5217\u7b2c\u4e00\u9879\n      const { task, resolve, reject } = this.tasks.shift();\n      // \u6267\u884c\u6570\u91cf + 1\n      this.runnningCount++;\n      // \u4efb\u52a1\u6267\u884c then \u8fd4\u56de resolve, reject\n      task()\n        .then(resolve, reject)\n        .finally(() => {\n          // finally \u6267\u884c\u4e4b\u540e\u4efb\u52a1\u6570\u91cf -1\n          this.runnningCount--;\n          // \u7ee7\u7eed\u9012\u5f52\u6267\u884crun\u65b9\u6cd5\n          this.run();\n        });\n    }\n  }\n}\n\n// \u6d4b\u8bd5\nfunction timeout(time) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve();\n    }, time);\n  });\n}\nconst taskContral = new TaskContral(3);\nfunction addTask(time, name) {\n  taskContral\n    .add(() => timeout(time))\n    .then(() => {\n      console.log(`\u4efb\u52a1${name}\u6267\u884c\u5b8c\u6210`);\n    });\n}\n\naddTask(1000, 1); // 1000\u540e\u8f93\u51fa\uff0c\u4efb\u52a11\u6267\u884c\u5b8c\u6210\naddTask(1000, 2); // 1000\u540e\u8f93\u51fa\uff0c\u4efb\u52a12\u6267\u884c\u5b8c\u6210\naddTask(1000, 3); // 1000\u540e\u8f93\u51fa\uff0c\u4efb\u52a13\u6267\u884c\u5b8c\u6210\naddTask(1000, 4); // 2000\u540e\u8f93\u51fa\uff0c\u4efb\u52a14\u6267\u884c\u5b8c\u6210\naddTask(1000, 5); // 2000\u540e\u8f93\u51fa\uff0c\u4efb\u52a15\u6267\u884c\u5b8c\u6210\naddTask(1000, 6); // 2000\u540e\u8f93\u51fa\uff0c\u4efb\u52a16\u6267\u884c\u5b8c\u6210\n")),(0,s.kt)("h3",{id:"\u5bf9\u8c61\u6570\u7ec4\u53bb\u91cd"},"\u5bf9\u8c61\u6570\u7ec4\u53bb\u91cd"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const isObject = (val) => typeof val === "object" && val !== null;\n\nfunction equal(obj1, obj2) {\n  if (!isObject(obj1) || !isObject(obj2)) return Object.is(obj1, obj2);\n\n  if (obj1 === obj2) return true;\n\n  const keys1 = Object.keys(obj1);\n  const keys2 = Object.keys(obj2);\n\n  if (keys1.length !== keys2.length) {\n    return false;\n  }\n\n  for (const s of keys1) {\n    if (!keys2.includes(s)) return false;\n\n    let res = equal(keys1[s], keys2[s]);\n\n    if (!res) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\n// \u53bb\u91cd\nfunction objectEqul(arr) {\n  let newArr = [...arr];\n\n  for (let i = 0; i < newArr.length; i++) {\n    for (let j = i + 1; j < newArr.length; j++) {\n      if (equal(newArr[i], newArr[j])) {\n        newArr.splice(j, 1);\n        j--;\n      }\n    }\n  }\n\n  return newArr;\n}\n\nlet arrs = [\n  { a: 1, b: 2 },\n  { b: 2, a: 1 },\n  { a: 1, b: 2, c: { a: 1, b: 2 } },\n  { a: 1, b: 2, c: { b: 2, a: 1 } },\n];\n\nconsole.log("console", objectEqul(arrs));\n// [\n//   { a: 1, b: 2 },\n//   { a: 1, b: 2, c: { a: 1, b: 2 } },\n]\n')))}b.isMDXComponent=!0}}]);