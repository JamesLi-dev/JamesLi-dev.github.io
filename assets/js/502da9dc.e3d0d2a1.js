"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[1555],{6441:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var l=r(1527),s=r(4054);const t={sidebar_position:9},o="JS \u5c0f\u6280\u5de7",a={id:"base/js/jsSkill",title:"JS \u5c0f\u6280\u5de7",description:"\u5173\u4e8e JS \u7684\u4e00\u4e9b\u603b\u7ed3, \u6301\u7eed\u66f4\u65b0\u4e2d\u2026\u2026",source:"@site/docs/base/js/jsSkill.md",sourceDirName:"base/js",slug:"/base/js/jsSkill",permalink:"/docs/base/js/jsSkill",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"JS \u6d4f\u89c8\u5668\u76f8\u5173\u65b9\u6cd5\u5c01\u88c5",permalink:"/docs/base/js/jsBrowser"},next:{title:"TS",permalink:"/docs/category/ts"}},c={},i=[{value:"1\u3001\u7528??\u4ee3\u66ff||\uff0c\u7528\u4e8e\u5224\u65ad\u8fd0\u7b97\u7b26\u5de6\u4fa7\u7684\u503c\u4e3a null \u6216 undefined \u65f6\uff0c\u624d\u8fd4\u56de\u53f3\u4fa7\u7684\u503c",id:"1\u7528\u4ee3\u66ff\u7528\u4e8e\u5224\u65ad\u8fd0\u7b97\u7b26\u5de6\u4fa7\u7684\u503c\u4e3a-null-\u6216-undefined-\u65f6\u624d\u8fd4\u56de\u53f3\u4fa7\u7684\u503c",level:3},{value:"2\u3001\u4f7f\u7528?.\u7b80\u5316&amp;&amp;\u548c\u4e09\u5143\u8fd0\u7b97\u7b26",id:"2\u4f7f\u7528\u7b80\u5316\u548c\u4e09\u5143\u8fd0\u7b97\u7b26",level:3},{value:"3\u3001\u4f7f\u7528 String.prototype.replaceAll()\u7b80\u5316 replace \u4e00\u6b21\u6027\u66ff\u6362\u6240\u6709\u5b50\u5b57\u7b26\u4e32",id:"3\u4f7f\u7528-stringprototypereplaceall\u7b80\u5316-replace-\u4e00\u6b21\u6027\u66ff\u6362\u6240\u6709\u5b50\u5b57\u7b26\u4e32",level:3},{value:"4\u3001\u4f7f\u7528 Array.prototype.at()\u7b80\u5316 arr.length",id:"4\u4f7f\u7528-arrayprototypeat\u7b80\u5316-arrlength",level:3},{value:"5\u3001\u4f7f\u7528\u54c8\u5e0c\u524d\u7f00#\u5c06\u7c7b\u5b57\u6bb5\u8bbe\u4e3a\u79c1\u6709",id:"5\u4f7f\u7528\u54c8\u5e0c\u524d\u7f00\u5c06\u7c7b\u5b57\u6bb5\u8bbe\u4e3a\u79c1\u6709",level:3},{value:"6\u3001\u51bb\u7ed3\u5bf9\u8c61",id:"6\u51bb\u7ed3\u5bf9\u8c61",level:3},{value:"7\u3001\u5c06 Object \u5c5e\u6027\u8f6c\u6210\u5c5e\u6027\u6570\u7ec4",id:"7\u5c06-object-\u5c5e\u6027\u8f6c\u6210\u5c5e\u6027\u6570\u7ec4",level:3}];function d(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"js-\u5c0f\u6280\u5de7",children:"JS \u5c0f\u6280\u5de7"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5173\u4e8e JS \u7684\u4e00\u4e9b\u603b\u7ed3, \u6301\u7eed\u66f4\u65b0\u4e2d\u2026\u2026"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"1\u7528\u4ee3\u66ff\u7528\u4e8e\u5224\u65ad\u8fd0\u7b97\u7b26\u5de6\u4fa7\u7684\u503c\u4e3a-null-\u6216-undefined-\u65f6\u624d\u8fd4\u56de\u53f3\u4fa7\u7684\u503c",children:"1\u3001\u7528??\u4ee3\u66ff||\uff0c\u7528\u4e8e\u5224\u65ad\u8fd0\u7b97\u7b26\u5de6\u4fa7\u7684\u503c\u4e3a null \u6216 undefined \u65f6\uff0c\u624d\u8fd4\u56de\u53f3\u4fa7\u7684\u503c"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["??\u8fd0\u7b97\u7b26\u662f ES2020 \u5f15\u5165\uff0c\u4e5f\u88ab\u79f0\u4e3a null \u5224\u65ad\u8fd0\u7b97\u7b26( Nullish coalescing operator)",(0,l.jsx)(n.br,{}),"\n","\u5b83\u7684\u884c\u4e3a\u7c7b\u4f3c||\uff0c\u4f46\u662f\u66f4\u4e25"]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"||\u8fd0\u7b97\u7b26\u662f\u5de6\u8fb9\u662f\u7a7a\u5b57\u7b26\u4e32\u6216 false \u6216 0 \u7b49 falsy \u503c\uff0c\u90fd\u4f1a\u8fd4\u56de\u540e\u4fa7\u7684\u503c\u3002\u800c??\u5fc5\u987b\u8fd0\u7b97\u7b26\u5de6\u4fa7\u7684\u503c\u4e3a null \u6216 undefined \u65f6\uff0c\u624d\u4f1a\u8fd4\u56de\u53f3\u4fa7\u7684\u503c\u3002\u56e0\u6b64 0||1 \u7684\u7ed3\u679c\u4e3a 1\uff0c0??1 \u7684\u7ed3\u679c\u4e3a 0"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'const response = {\n  settings: {\n    nullValue: null,\n    height: 400,\n    animationDuration: 0,\n    headerText: "",\n    showSplashScreen: false,\n  },\n};\n\nconst undefinedValue = response.settings.undefinedValue ?? "some other default"; // result: \'some other default\'\nconst nullValue = response.settings.nullValue ?? "some other default"; // result: \'some other default\'\nconst headerText = response.settings.headerText ?? "Hello, world!"; // result: \'\'\nconst animationDuration = response.settings.animationDuration ?? 300; // result: 0\nconst showSplashScreen = response.settings.showSplashScreen ?? true; // result: false\n'})}),"\n",(0,l.jsx)(n.h3,{id:"2\u4f7f\u7528\u7b80\u5316\u548c\u4e09\u5143\u8fd0\u7b97\u7b26",children:"2\u3001\u4f7f\u7528?.\u7b80\u5316&&\u548c\u4e09\u5143\u8fd0\u7b97\u7b26"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["?.\u4e5f\u662f ES2020 \u5f15\u5165\uff0c\u6709\u4eba\u79f0\u4e3a\u94fe\u5224\u65ad\u8fd0\u7b97\u7b26\uff08optional chaining operator\uff09",(0,l.jsx)(n.br,{}),"\n","?.\u76f4\u63a5\u5728\u94fe\u5f0f\u8c03\u7528\u7684\u65f6\u5019\u5224\u65ad\uff0c\u5224\u65ad\u5de6\u4fa7\u7684\u5bf9\u8c61\u662f\u5426\u4e3a null \u6216 undefined\uff0c\u5982\u679c\u662f\u7684\uff0c\u5c31\u4e0d\u518d\u5f80\u4e0b\u8fd0\u7b97\uff0c\u8fd4\u56de undefined\uff0c\u5982\u679c\u4e0d\u662f\uff0c\u5219\u8fd4\u56de\u53f3\u4fa7\u7684\u503c"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'let street = user.address && user.address.street;\n\nlet fooInput = myForm.querySelector("input[name=foo]");\nlet fooValue = fooInput ? fooInput.value : undefined;\n\n// \u7b80\u5316\nlet street = user.address?.street;\nlet fooValue = myForm.querySelector("input[name=foo]")?.value;\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u6ce8\uff1a\u5e38\u89c1\u5199\u6cd5",(0,l.jsx)(n.br,{}),"\n","obj?.prop \u5bf9\u8c61\u5c5e\u6027",(0,l.jsx)(n.br,{}),"\n","obj?.[expr] \u5bf9\u8c61\u5c5e\u6027",(0,l.jsx)(n.br,{}),"\n","func?.(...args) \u51fd\u6570\u6216\u5bf9\u8c61\u65b9\u6cd5\u7684\u8c03\u7528"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"3\u4f7f\u7528-stringprototypereplaceall\u7b80\u5316-replace-\u4e00\u6b21\u6027\u66ff\u6362\u6240\u6709\u5b50\u5b57\u7b26\u4e32",children:"3\u3001\u4f7f\u7528 String.prototype.replaceAll()\u7b80\u5316 replace \u4e00\u6b21\u6027\u66ff\u6362\u6240\u6709\u5b50\u5b57\u7b26\u4e32"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["String.prototype.replaceAll()\u7528\u6cd5\u4e0e String.prototype.replace()\u7c7b\u4f3c",(0,l.jsx)(n.br,{}),"\n","\u4f46\u662f replace \u4ec5\u66ff\u6362\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u5b50\u5b57\u7b26\u4e32\uff0c\u800c replaceAll \u4f1a\u66ff\u6362\u6240\u6709"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u4f8b\u5982\u9700\u8981\u66ff\u6362\u6240\u6709 a \u4e3a A\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'// \u4ee5\u524d\nconsole.log("aaa".replace(/a/g, "A")); //AAA\n// \u7b80\u5316\u540e\nconsole.log("aaa".replaceAll("a", "A")); //AAA\n'})}),"\n",(0,l.jsx)(n.h3,{id:"4\u4f7f\u7528-arrayprototypeat\u7b80\u5316-arrlength",children:"4\u3001\u4f7f\u7528 Array.prototype.at()\u7b80\u5316 arr.length"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Array.prototype.at()\u63a5\u6536\u4e00\u4e2a\u6b63\u6574\u6570\u6216\u8005\u8d1f\u6574\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8868\u793a\u83b7\u53d6\u6307\u5b9a\u4f4d\u7f6e\u7684\u6210\u5458\n\u53c2\u6570\u6b63\u6570\u5c31\u8868\u793a\u987a\u6570\u7b2c\u51e0\u4e2a\uff0c\u8d1f\u6570\u8868\u793a\u5012\u6570\u7b2c\u51e0\u4e2a\uff0c\u8fd9\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u67d0\u4e2a\u6570\u7ec4\u672b\u5c3e\u7684\u5143\u7d20"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"let arr = [1, 2, 3, 4, 5];\n// \u4ee5\u524d\u83b7\u53d6\u6700\u540e\u4e00\u4f4d\nconsole.log(arr[arr.length - 1]); //5\n// \u7b80\u5316\u540e\nconsole.log(arr.at(-1)); // 5\n"})}),"\n",(0,l.jsx)(n.h3,{id:"5\u4f7f\u7528\u54c8\u5e0c\u524d\u7f00\u5c06\u7c7b\u5b57\u6bb5\u8bbe\u4e3a\u79c1\u6709",children:"5\u3001\u4f7f\u7528\u54c8\u5e0c\u524d\u7f00#\u5c06\u7c7b\u5b57\u6bb5\u8bbe\u4e3a\u79c1\u6709"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u7c7b\u4e2d\u901a\u8fc7\u54c8\u5e0c\u524d\u7f00#\u6807\u8bb0\u7684\u5b57\u6bb5\u90fd\u5c06\u88ab\u79c1\u6709\uff0c\u5b50\u7c7b\u5b9e\u4f8b\u5c06\u65e0\u6cd5\u7ee7\u627f"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'class ClassWithPrivateField {\n  #privateField;\n  #privateMethod() {\n    return "hello world";\n  }\n  constructor() {\n    this.#privateField = 42;\n  }\n}\n\nconst instance = new ClassWithPrivateField();\nconsole.log(instance.privateField); //undefined\nconsole.log(instance.privateMethod); //undefined\n'})}),"\n",(0,l.jsx)(n.h3,{id:"6\u51bb\u7ed3\u5bf9\u8c61",children:"6\u3001\u51bb\u7ed3\u5bf9\u8c61"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const oc = { key: 8, color: '#000' }\uff1b\nObject.freeze(oc);\n\noc.key = 10; // Error, \u4e0d\u4f1a\u6539\u53d8\nconnsole.log(oc); // { key: 8, color: '#000' }\n\n"})}),"\n",(0,l.jsx)(n.h3,{id:"7\u5c06-object-\u5c5e\u6027\u8f6c\u6210\u5c5e\u6027\u6570\u7ec4",children:"7\u3001\u5c06 Object \u5c5e\u6027\u8f6c\u6210\u5c5e\u6027\u6570\u7ec4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'const obj = { a: 1, b: 2, c: 3 };\n\nObject.entries(obj);\n// \u8f93\u51fa\n// (3) [Array(2), Array(2), Array(2)]\n// 0: (2) ["a", 1]\n// 1: (2) ["b", 2]\n// 2: (2) ["c", 3]\n// length: 3\n\nObject.keys(obj);\n// (3) ["a", "b", "c"]\n\nObject.values(obj);\n// (3) [1, 2, 3]\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},4054:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var l=r(959);const s={},t=l.createContext(s);function o(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);