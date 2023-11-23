"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[174],{705:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=e(1527),r=e(4054);const i={sidebar_position:2},a="\u6808",o={id:"base/data/Set",title:"\u6808",description:"- \u6808\u662f\u4e00\u79cd\u7ebf\u6027\u6570\u636e\u7ed3\u6784\uff0c\u7528\u4e8e\u5b58\u50a8\u4e00\u7ec4\u6709\u5e8f\u7684\u5143\u7d20\u3002",source:"@site/docs/base/data/Set.md",sourceDirName:"base/data",slug:"/base/data/Set",permalink:"/en/docs/base/data/Set",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b57\u5178 Map",permalink:"/en/docs/base/data/Map"},next:{title:"\u961f\u5217",permalink:"/en/docs/base/data/queue"}},c={},l=[{value:"\u6808\u7684\u5b9e\u73b0",id:"\u6808\u7684\u5b9e\u73b0",level:2},{value:"\u5e38\u7528\u7b97\u6cd5\uff1a\u6709\u6548\u62ec\u53f7",id:"\u5e38\u7528\u7b97\u6cd5\u6709\u6548\u62ec\u53f7",level:2}];function p(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u6808",children:"\u6808"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u6808\u662f\u4e00\u79cd\u7ebf\u6027\u6570\u636e\u7ed3\u6784\uff0c\u7528\u4e8e\u5b58\u50a8\u4e00\u7ec4\u6709\u5e8f\u7684\u5143\u7d20\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u6808\u7684\u5143\u7d20\u9075\u5faa LIFO\uff08\u540e\u8fdb\u5148\u51fa\uff09\u7684\u539f\u5219\uff0c\u5373\u6700\u540e\u8fdb\u5165\u7684\u5143\u7d20\u6700\u5148\u51fa\u6808\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u6808\u6709\u4e24\u4e2a\u57fa\u672c\u64cd\u4f5c\uff1apush\uff08\u5165\u6808\uff09\u548c pop\uff08\u51fa\u6808\uff09\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u6808\u8fd8\u6709\u4e00\u4e2a\u5e38\u7528\u7684\u64cd\u4f5c\uff1apeek\uff08\u67e5\u770b\u6808\u9876\u5143\u7d20\uff09\u3002"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u6808\u7684\u5b9e\u73b0",children:"\u6808\u7684\u5b9e\u73b0"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'\xa0function Stack() {\n\xa0 \xa0this.items = [];\n\xa0\u200b\n\xa0 \xa0// 1.\u5165\u6808\n\xa0 \xa0Stack.prototype.push = function (element) {\n\xa0 \xa0 \xa0return this.items.push(element);\n\xa0  };\n\xa0\u200b\n\xa0 \xa0// 2.\u51fa\u6808\n\xa0 \xa0Stack.prototype.pop = function () {\n\xa0 \xa0 \xa0return this.items.pop();\n\xa0  };\n\xa0\u200b\n\xa0 \xa0// 3.\u67e5\u770b\u6808\u9876\u5143\u7d20\n\xa0 \xa0Stack.prototype.peek = function () {\n\xa0 \xa0 \xa0return this.items[this.items.length - 1];\n\xa0  };\n\xa0\u200b\n\xa0 \xa0// 4.\u5224\u65ad\u6808\u662f\u5426\u4e3a\u7a7a\n\xa0 \xa0Stack.prototype.isEmpty = function () {\n\xa0 \xa0 \xa0return this.items.length === 0;\n\xa0  };\n\xa0\u200b\n\xa0 \xa0// 5.\u8fd4\u56de\u6808\u7684\u957f\u5ea6\n\xa0 \xa0Stack.prototype.size = function () {\n      return this.items.length;\n\xa0  };\n\xa0\u200b\n\xa0 \xa0// 6.toString\u65b9\u6cd5\n\xa0 \xa0Stack.prototype.toString = function () {\n      // \u8fd4\u56de\u683c\u5f0f\u5982\uff1a 10 20 30 \u7b49\n      let resString = this.items.join(" ");\n      return resString;\n\xa0  };\n\xa0}\n\n'})}),"\n",(0,s.jsx)(t.h2,{id:"\u5e38\u7528\u7b97\u6cd5\u6709\u6548\u62ec\u53f7",children:"\u5e38\u7528\u7b97\u6cd5\uff1a\u6709\u6548\u62ec\u53f7"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'const isValid = (str) => {\n  // \u4e0d\u662f\u6210\u5bf9\u7684\u4e4b\u540e\u8fd4\u56de false\n  if (str.length % 2 === 1) return false;\n  // \u521b\u5efa\u6808 \u5b58\u50a8\n  let stack = [];\n  let length = str.length;\n  let map = new Map();\n  map.set("(", ")");\n  map.set("{", "}");\n  map.set("[", "]");\n\n  for (let i = 0; i < length; i++) {\n    let currentStr = str[i];\n\n    if (map.has(currentStr)) {\n      // \u5165\u6808\n      stack.push(currentStr);\n    } else {\n      // \u6808\u6700\u9876\u5c42\n      let stackTop = stack[stack.length - 1];\n      if (map.get(stackTop) === currentStr) {\n        // \u5982\u679c\u76f8\u7b49\u5219\u8868\u793a\u6210\u5bf9\uff0c\u51fa\u6808\n        stack.pop();\n      } else {\n        return false;\n      }\n    }\n  }\n  return stack.length === 0;\n};\n'})})]})}function u(n={}){const{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},4054:(n,t,e)=>{e.d(t,{Z:()=>o,a:()=>a});var s=e(959);const r={},i=s.createContext(r);function a(n){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(i.Provider,{value:t},n.children)}}}]);