"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[1555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>c,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=l,k=u["".concat(p,".").concat(b)]||u[b]||d[b]||a;return n?r.createElement(k,o(o({ref:t},i),{},{components:n})):r.createElement(k,o({ref:t},i))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_position:4},o="JS \u5c0f\u6280\u5de7",s={unversionedId:"base/js/jsSkill",id:"base/js/jsSkill",title:"JS \u5c0f\u6280\u5de7",description:"\u5173\u4e8eJS\u7684\u4e00\u4e9b\u603b\u7ed3, \u6301\u7eed\u66f4\u65b0\u4e2d\u2026\u2026",source:"@site/docs/base/js/jsSkill.md",sourceDirName:"base/js",slug:"/base/js/jsSkill",permalink:"/en/docs/base/js/jsSkill",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"JS \u5e38\u7528\u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/en/docs/base/js/jsRegx"},next:{title:"JS \u6570\u5b66\u77e5\u8bc6",permalink:"/en/docs/base/js/jsMath"}},p={},c=[{value:"1\u3001\u7528??\u4ee3\u66ff||\uff0c\u7528\u4e8e\u5224\u65ad\u8fd0\u7b97\u7b26\u5de6\u4fa7\u7684\u503c\u4e3a null \u6216 undefined \u65f6\uff0c\u624d\u8fd4\u56de\u53f3\u4fa7\u7684\u503c",id:"1\u7528\u4ee3\u66ff\u7528\u4e8e\u5224\u65ad\u8fd0\u7b97\u7b26\u5de6\u4fa7\u7684\u503c\u4e3a-null-\u6216-undefined-\u65f6\u624d\u8fd4\u56de\u53f3\u4fa7\u7684\u503c",level:3},{value:"2\u3001\u4f7f\u7528?.\u7b80\u5316&amp;&amp;\u548c\u4e09\u5143\u8fd0\u7b97\u7b26",id:"2\u4f7f\u7528\u7b80\u5316\u548c\u4e09\u5143\u8fd0\u7b97\u7b26",level:3},{value:"3\u3001\u4f7f\u7528 String.prototype.replaceAll()\u7b80\u5316 replace \u4e00\u6b21\u6027\u66ff\u6362\u6240\u6709\u5b50\u5b57\u7b26\u4e32",id:"3\u4f7f\u7528-stringprototypereplaceall\u7b80\u5316-replace-\u4e00\u6b21\u6027\u66ff\u6362\u6240\u6709\u5b50\u5b57\u7b26\u4e32",level:3},{value:"4\u3001\u4f7f\u7528 Array.prototype.at()\u7b80\u5316 arr.length",id:"4\u4f7f\u7528-arrayprototypeat\u7b80\u5316-arrlength",level:3},{value:"5\u3001\u4f7f\u7528\u54c8\u5e0c\u524d\u7f00#\u5c06\u7c7b\u5b57\u6bb5\u8bbe\u4e3a\u79c1\u6709",id:"5\u4f7f\u7528\u54c8\u5e0c\u524d\u7f00\u5c06\u7c7b\u5b57\u6bb5\u8bbe\u4e3a\u79c1\u6709",level:3},{value:"6\u3001\u51bb\u7ed3\u5bf9\u8c61",id:"6\u51bb\u7ed3\u5bf9\u8c61",level:3},{value:"7\u3001\u5c06Object\u5c5e\u6027\u8f6c\u6210\u5c5e\u6027\u6570\u7ec4",id:"7\u5c06object\u5c5e\u6027\u8f6c\u6210\u5c5e\u6027\u6570\u7ec4",level:3}],i={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"js-\u5c0f\u6280\u5de7"},"JS \u5c0f\u6280\u5de7"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5173\u4e8eJS\u7684\u4e00\u4e9b\u603b\u7ed3, \u6301\u7eed\u66f4\u65b0\u4e2d\u2026\u2026")),(0,l.kt)("h3",{id:"1\u7528\u4ee3\u66ff\u7528\u4e8e\u5224\u65ad\u8fd0\u7b97\u7b26\u5de6\u4fa7\u7684\u503c\u4e3a-null-\u6216-undefined-\u65f6\u624d\u8fd4\u56de\u53f3\u4fa7\u7684\u503c"},"1\u3001\u7528??\u4ee3\u66ff||\uff0c\u7528\u4e8e\u5224\u65ad\u8fd0\u7b97\u7b26\u5de6\u4fa7\u7684\u503c\u4e3a null \u6216 undefined \u65f6\uff0c\u624d\u8fd4\u56de\u53f3\u4fa7\u7684\u503c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"??\u8fd0\u7b97\u7b26\u662f ES2020 \u5f15\u5165\uff0c\u4e5f\u88ab\u79f0\u4e3a null \u5224\u65ad\u8fd0\u7b97\u7b26( Nullish coalescing operator)",(0,l.kt)("br",{parentName:"p"}),"\n","\u5b83\u7684\u884c\u4e3a\u7c7b\u4f3c||\uff0c\u4f46\u662f\u66f4\u4e25")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"||\u8fd0\u7b97\u7b26\u662f\u5de6\u8fb9\u662f\u7a7a\u5b57\u7b26\u4e32\u6216 false \u6216 0 \u7b49 falsy \u503c\uff0c\u90fd\u4f1a\u8fd4\u56de\u540e\u4fa7\u7684\u503c\u3002\u800c??\u5fc5\u987b\u8fd0\u7b97\u7b26\u5de6\u4fa7\u7684\u503c\u4e3a null \u6216 undefined \u65f6\uff0c\u624d\u4f1a\u8fd4\u56de\u53f3\u4fa7\u7684\u503c\u3002\u56e0\u6b64 0||1 \u7684\u7ed3\u679c\u4e3a 1\uff0c0??1 \u7684\u7ed3\u679c\u4e3a 0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const response = {\n  settings: {\n    nullValue: null,\n    height: 400,\n    animationDuration: 0,\n    headerText: "",\n    showSplashScreen: false,\n  },\n};\n\nconst undefinedValue = response.settings.undefinedValue ?? "some other default"; // result: \'some other default\'\nconst nullValue = response.settings.nullValue ?? "some other default"; // result: \'some other default\'\nconst headerText = response.settings.headerText ?? "Hello, world!"; // result: \'\'\nconst animationDuration = response.settings.animationDuration ?? 300; // result: 0\nconst showSplashScreen = response.settings.showSplashScreen ?? true; // result: false\n')),(0,l.kt)("h3",{id:"2\u4f7f\u7528\u7b80\u5316\u548c\u4e09\u5143\u8fd0\u7b97\u7b26"},"2\u3001\u4f7f\u7528?.\u7b80\u5316&&\u548c\u4e09\u5143\u8fd0\u7b97\u7b26"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"?.\u4e5f\u662f ES2020 \u5f15\u5165\uff0c\u6709\u4eba\u79f0\u4e3a\u94fe\u5224\u65ad\u8fd0\u7b97\u7b26\uff08optional chaining operator\uff09",(0,l.kt)("br",{parentName:"p"}),"\n","?.\u76f4\u63a5\u5728\u94fe\u5f0f\u8c03\u7528\u7684\u65f6\u5019\u5224\u65ad\uff0c\u5224\u65ad\u5de6\u4fa7\u7684\u5bf9\u8c61\u662f\u5426\u4e3a null \u6216 undefined\uff0c\u5982\u679c\u662f\u7684\uff0c\u5c31\u4e0d\u518d\u5f80\u4e0b\u8fd0\u7b97\uff0c\u8fd4\u56de undefined\uff0c\u5982\u679c\u4e0d\u662f\uff0c\u5219\u8fd4\u56de\u53f3\u4fa7\u7684\u503c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let street = user.address && user.address.street;\n\nlet fooInput = myForm.querySelector("input[name=foo]");\nlet fooValue = fooInput ? fooInput.value : undefined;\n\n// \u7b80\u5316\nlet street = user.address?.street;\nlet fooValue = myForm.querySelector("input[name=foo]")?.value;\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u5e38\u89c1\u5199\u6cd5",(0,l.kt)("br",{parentName:"p"}),"\n","obj?.prop \u5bf9\u8c61\u5c5e\u6027",(0,l.kt)("br",{parentName:"p"}),"\n","obj?.","[expr]"," \u5bf9\u8c61\u5c5e\u6027",(0,l.kt)("br",{parentName:"p"}),"\n","func?.(...args) \u51fd\u6570\u6216\u5bf9\u8c61\u65b9\u6cd5\u7684\u8c03\u7528")),(0,l.kt)("h3",{id:"3\u4f7f\u7528-stringprototypereplaceall\u7b80\u5316-replace-\u4e00\u6b21\u6027\u66ff\u6362\u6240\u6709\u5b50\u5b57\u7b26\u4e32"},"3\u3001\u4f7f\u7528 String.prototype.replaceAll()\u7b80\u5316 replace \u4e00\u6b21\u6027\u66ff\u6362\u6240\u6709\u5b50\u5b57\u7b26\u4e32"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"String.prototype.replaceAll()\u7528\u6cd5\u4e0e String.prototype.replace()\u7c7b\u4f3c",(0,l.kt)("br",{parentName:"p"}),"\n","\u4f46\u662f replace \u4ec5\u66ff\u6362\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u5b50\u5b57\u7b26\u4e32\uff0c\u800c replaceAll \u4f1a\u66ff\u6362\u6240\u6709")),(0,l.kt)("p",null,"\u4f8b\u5982\u9700\u8981\u66ff\u6362\u6240\u6709 a \u4e3a A\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// \u4ee5\u524d\nconsole.log("aaa".replace(/a/g, "A")); //AAA\n// \u7b80\u5316\u540e\nconsole.log("aaa".replaceAll("a", "A")); //AAA\n')),(0,l.kt)("h3",{id:"4\u4f7f\u7528-arrayprototypeat\u7b80\u5316-arrlength"},"4\u3001\u4f7f\u7528 Array.prototype.at()\u7b80\u5316 arr.length"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Array.prototype.at()\u63a5\u6536\u4e00\u4e2a\u6b63\u6574\u6570\u6216\u8005\u8d1f\u6574\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8868\u793a\u83b7\u53d6\u6307\u5b9a\u4f4d\u7f6e\u7684\u6210\u5458\n\u53c2\u6570\u6b63\u6570\u5c31\u8868\u793a\u987a\u6570\u7b2c\u51e0\u4e2a\uff0c\u8d1f\u6570\u8868\u793a\u5012\u6570\u7b2c\u51e0\u4e2a\uff0c\u8fd9\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u67d0\u4e2a\u6570\u7ec4\u672b\u5c3e\u7684\u5143\u7d20")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let arr = [1, 2, 3, 4, 5];\n// \u4ee5\u524d\u83b7\u53d6\u6700\u540e\u4e00\u4f4d\nconsole.log(arr[arr.length - 1]); //5\n// \u7b80\u5316\u540e\nconsole.log(arr.at(-1)); // 5\n")),(0,l.kt)("h3",{id:"5\u4f7f\u7528\u54c8\u5e0c\u524d\u7f00\u5c06\u7c7b\u5b57\u6bb5\u8bbe\u4e3a\u79c1\u6709"},"5\u3001\u4f7f\u7528\u54c8\u5e0c\u524d\u7f00#\u5c06\u7c7b\u5b57\u6bb5\u8bbe\u4e3a\u79c1\u6709"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u7c7b\u4e2d\u901a\u8fc7\u54c8\u5e0c\u524d\u7f00#\u6807\u8bb0\u7684\u5b57\u6bb5\u90fd\u5c06\u88ab\u79c1\u6709\uff0c\u5b50\u7c7b\u5b9e\u4f8b\u5c06\u65e0\u6cd5\u7ee7\u627f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'class ClassWithPrivateField {\n  #privateField;\n  #privateMethod() {\n    return "hello world";\n  }\n  constructor() {\n    this.#privateField = 42;\n  }\n}\n\nconst instance = new ClassWithPrivateField();\nconsole.log(instance.privateField); //undefined\nconsole.log(instance.privateMethod); //undefined\n')),(0,l.kt)("h3",{id:"6\u51bb\u7ed3\u5bf9\u8c61"},"6\u3001\u51bb\u7ed3\u5bf9\u8c61"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const oc = { key: 8, color: '#000' }\uff1b\nObject.freeze(oc);\n\noc.key = 10; // Error, \u4e0d\u4f1a\u6539\u53d8\nconnsole.log(oc); // { key: 8, color: '#000' }\n\n")),(0,l.kt)("h3",{id:"7\u5c06object\u5c5e\u6027\u8f6c\u6210\u5c5e\u6027\u6570\u7ec4"},"7\u3001\u5c06Object\u5c5e\u6027\u8f6c\u6210\u5c5e\u6027\u6570\u7ec4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const obj = { a: 1, b: 2, c: 3 };\n\nObject.entries(obj);\n// \u8f93\u51fa\n// (3) [Array(2), Array(2), Array(2)]\n// 0: (2) ["a", 1]\n// 1: (2) ["b", 2]\n// 2: (2) ["c", 3]\n// length: 3\n\nObject.keys(obj);\n// (3) ["a", "b", "c"]\n\nObject.values(obj);\n// (3) [1, 2, 3]\n\n')))}d.isMDXComponent=!0}}]);