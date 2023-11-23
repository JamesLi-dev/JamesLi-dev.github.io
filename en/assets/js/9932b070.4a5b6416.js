"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[3866],{8680:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var u=t(1527),i=t(4054);const s={sidebar_position:3},r="\u961f\u5217",o={id:"base/data/queue",title:"\u961f\u5217",description:"- \u961f\u5217\u662f\u4e00\u79cd\u7ebf\u6027\u6570\u636e\u7ed3\u6784\uff0c\u7528\u4e8e\u5b58\u50a8\u4e00\u7ec4\u6709\u5e8f\u7684\u5143\u7d20\u3002",source:"@site/docs/base/data/queue.md",sourceDirName:"base/data",slug:"/base/data/queue",permalink:"/en/docs/base/data/queue",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6808",permalink:"/en/docs/base/data/Set"},next:{title:"\u94fe\u8868",permalink:"/en/docs/base/data/linkList"}},a={},c=[{value:"\u961f\u5217\u7684\u5b9e\u73b0",id:"\u961f\u5217\u7684\u5b9e\u73b0",level:2},{value:"\u5e38\u7528\u7b97\u6cd5\uff1a\u51fb\u9f13\u4f20\u82b1",id:"\u5e38\u7528\u7b97\u6cd5\u51fb\u9f13\u4f20\u82b1",level:2},{value:"\u5e38\u7528\u7b97\u6cd5-\u6700\u8fd1\u8bf7\u6c42\u6b21\u6570",id:"\u5e38\u7528\u7b97\u6cd5-\u6700\u8fd1\u8bf7\u6c42\u6b21\u6570",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.h1,{id:"\u961f\u5217",children:"\u961f\u5217"}),"\n",(0,u.jsxs)(n.ul,{children:["\n",(0,u.jsx)(n.li,{children:"\u961f\u5217\u662f\u4e00\u79cd\u7ebf\u6027\u6570\u636e\u7ed3\u6784\uff0c\u7528\u4e8e\u5b58\u50a8\u4e00\u7ec4\u6709\u5e8f\u7684\u5143\u7d20\u3002"}),"\n",(0,u.jsx)(n.li,{children:"\u961f\u5217\u7684\u5143\u7d20\u9075\u5faa FIFO\uff08\u5148\u8fdb\u5148\u51fa\uff09\u7684\u539f\u5219\uff0c\u5373\u6700\u5148\u8fdb\u5165\u7684\u5143\u7d20\u6700\u5148\u51fa\u961f\u5217\u3002"}),"\n",(0,u.jsx)(n.li,{children:"\u961f\u5217\u6709\u4e24\u4e2a\u57fa\u672c\u64cd\u4f5c\uff1aenqueue\uff08\u5165\u961f\uff09\u548c dequeue\uff08\u51fa\u961f\uff09\u3002"}),"\n",(0,u.jsx)(n.li,{children:"\u961f\u5217\u8fd8\u6709\u4e00\u4e2a\u5e38\u7528\u7684\u64cd\u4f5c\uff1apeek\uff08\u67e5\u770b\u961f\u9996\u5143\u7d20\uff09/front\u3001 size(\u961f\u5217\u957f\u5ea6) \u3001isEmpty()\u3001toString()\u3002"}),"\n"]}),"\n",(0,u.jsx)(n.h2,{id:"\u961f\u5217\u7684\u5b9e\u73b0",children:"\u961f\u5217\u7684\u5b9e\u73b0"}),"\n",(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:"language-javascript",children:"\xa0function Queue() {\n\xa0 \xa0this.items = [];\n\xa0\u200b\n\xa0 \xa0// 1.\u5c06\u5143\u7d20\u52a0\u5165\u961f\u5217\n\xa0 \xa0Queue.prototype.enqueue = function (element) {\n\xa0 \xa0 \xa0return this.items.push(element);\n\xa0  };\n\xa0\u200b\n\xa0 \xa0// 2.\u4ece\u961f\u5217\u4e2d\u5220\u9664\u5143\u7d20\n\xa0 \xa0Queue.prototype.dequeue = function () {\n\xa0 \xa0 \xa0return this.items.shift();\n\xa0  };\n\xa0\u200b\n\xa0 \xa0// 3.\u67e5\u770b\u524d\u7aef\u7684\u5143\u7d20\n\xa0 \xa0Queue.prototype.peek = function () {\n\xa0 \xa0 \xa0return this.items[0];\n\xa0  };\n\xa0\u200b\n\xa0 \xa0// 4.\u67e5\u770b\u961f\u5217\u662f\u5426\u4e3a\u7a7a\n\xa0 \xa0Queue.prototype.isEmpty = function () {\n\xa0 \xa0 \xa0return this.items.length === 0;\n\xa0  };\n\xa0\u200b\n\xa0 \xa0// 5.\u67e5\u770b\u961f\u5217\u5143\u7d20\u4e2a\u6570\n\xa0 \xa0Queue.prototype.size = function () {\n\xa0 \xa0 \xa0return this.items.length;\n\xa0  };\n\xa0\u200b\n\xa0 \xa0// 6.toString\u65b9\u6cd5\n\xa0 \xa0Queue.prototype.toString = function () {\n\xa0 \xa0 \xa0// \u8fd4\u56de\u683c\u5f0f\u5982\uff1a 10 20 30 \u7b49\n\xa0 \xa0  let resString = this.items.join(\" \");\n\xa0 \xa0 \xa0return resString;\n\xa0  };\n\xa0}\n// test\nconst queue = new Queue();\nqueue.enqueue('10', '20', '30');\nqueue.size();  // 3\nqueue.dequeue(); //  ['20', '30']\nqueue.peek();  // 20\n"})}),"\n",(0,u.jsx)(n.h2,{id:"\u5e38\u7528\u7b97\u6cd5\u51fb\u9f13\u4f20\u82b1",children:"\u5e38\u7528\u7b97\u6cd5\uff1a\u51fb\u9f13\u4f20\u82b1"}),"\n",(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:"language-javascript",children:'\xa0const Queue = require("./queue");\n\xa0\u200b\n\xa0/**\n\xa0 * \u51fb\u9f13\u4f20\u82b1\u6e38\u620f\u89c4\u5219\uff1a\n\xa0 * \u51e0\u4e2a\u670b\u53cb\u4e00\u8d77\u73a9\u4e00\u4e2a\u6e38\u620f\uff0c\u56f4\u6210\u4e00\u5708\uff0c\u5f00\u59cb\u6570\u6570\uff0c\u6570\u5230\u67d0\u4e2a\u6570\u5b57\u7684\u4eba\u81ea\u52a8\u6dd8\u6c70\n\xa0 * \u6700\u540e\u5269\u4e0b\u7684\u8fd9\u4e2a\u4eba\u4f1a\u83b7\u5f97\u80dc\u5229\uff0c\u8bf7\u95ee\uff1a\u6700\u540e\u80dc\u5229\u8005\u539f\u6765\u5728\u54ea\u4e00\u4e2a\u4f4d\u7f6e\u4e0a\n\xa0 */\n\xa0let names = ["\u5c0f\u660e", "\u5c0f\u7ea2", "\u5c0f\u4eae"];\n\xa0function passGame(nameList, stopNum = 1) {\n\xa0 \xa0let q = new Queue();\n\xa0 \xa0for (const item of nameList) {\n\xa0 \xa0 \xa0q.enqueue(item);\n\xa0  }\n\xa0\u200b\n\xa0 \xa0while (q.size() > 1) {\n\xa0 \xa0 \xa0for (let i = 0; i < stopNum - 1; i++) {\n\xa0 \xa0 \xa0 \xa0q.enqueue(q.dequeue());\n\xa0 \xa0  }\n\xa0 \xa0 \xa0q.dequeue();\n\xa0  }\n\xa0 \xa0console.log("\u6700\u540e\u5269\u4e0b\u7684\u4eba\u662f:", q.front()); // \u6700\u540e\u5269\u4e0b\u7684\u4eba\u662f: \u5c0f\u7ea2\n\xa0 \xa0return nameList.indexOf(q.front()); //\u8fd4\u56de\u5bf9\u5e94\u7684\u4f4d\u7f6e\n\xa0}\n\xa0\u200b\n\xa0console.log(passGame(names, 3)); // 1\n\n'})}),"\n",(0,u.jsx)(n.h2,{id:"\u5e38\u7528\u7b97\u6cd5-\u6700\u8fd1\u8bf7\u6c42\u6b21\u6570",children:"\u5e38\u7528\u7b97\u6cd5-\u6700\u8fd1\u8bf7\u6c42\u6b21\u6570"}),"\n",(0,u.jsx)(n.pre,{children:(0,u.jsx)(n.code,{className:"language-javascript",children:"\xa0var RecentCounter = function () {\n\xa0 \xa0this.queue = [];\n\xa0};\n\xa0\u200b\n\xa0/**\n\xa0 * @param {number} t\n\xa0 * @return {number}\n\xa0 */\n\xa0RecentCounter.prototype.ping = function (t) {\n\xa0 \xa0this.queue.push(t)\n\xa0 \xa0// \u5c063000ms\u4e4b\u524d\u7684\u6570\u636e\uff0c\u8e22\u51fa\u961f\u5217\n\xa0 \xa0while (this.queue[0] < t - 3000) {\n\xa0 \xa0 \xa0this.queue.shift()\n\xa0  }\n\xa0 \xa0// \u961f\u5217\u4e2d\u5269\u4e0b\u7684\u5143\u7d20\u4e2a\u6570\u5c31\u662f\u6700\u8fd1\u7684\u8bf7\u6c42\u6b21\u6570\n\xa0 \xa0return this.queue.length\n\xa0};\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,u.jsx)(n,{...e,children:(0,u.jsx)(l,{...e})}):l(e)}},4054:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var u=t(959);const i={},s=u.createContext(i);function r(e){const n=u.useContext(s);return u.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),u.createElement(s.Provider,{value:n},e.children)}}}]);