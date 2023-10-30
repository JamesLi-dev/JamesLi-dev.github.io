"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[6132],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>s,kt:()=>m});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(1966),n=(r(9496),r(9613));const i={sidebar_position:2,title:"Warp"},o=void 0,l={unversionedId:"software/Warp",id:"software/Warp",title:"Warp",description:"Warp",source:"@site/docs/software/Warp.md",sourceDirName:"software",slug:"/software/Warp",permalink:"/en/docs/software/Warp",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Warp"},sidebar:"tutorialSidebar",previous:{title:"Keyboard Maestro",permalink:"/en/docs/software/KeyboardMaestro"},next:{title:"\u5176\u4ed6",permalink:"/en/docs/software/"}},p={},s=[{value:"Warp",id:"warp",level:2},{value:"\u5b98\u7f51",id:"\u5b98\u7f51",level:3},{value:"AI",id:"ai",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4e3b\u9898",id:"\u4e3b\u9898",level:3},{value:"\u6837\u5f0f\u8bbe\u7f6e",id:"\u6837\u5f0f\u8bbe\u7f6e",level:3},{value:"Team \u4e2a\u4eba\u5e38\u7528\u547d\u4ee4",id:"team-\u4e2a\u4eba\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u6ed1\u52a8\u9009\u62e9",id:"\u6ed1\u52a8\u9009\u62e9",level:3},{value:"\u5386\u53f2\u8bb0\u5f55\u7559\u5b58",id:"\u5386\u53f2\u8bb0\u5f55\u7559\u5b58",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"warp"},"Warp"),(0,n.kt)("h3",{id:"\u5b98\u7f51"},(0,n.kt)("a",{parentName:"h3",href:"https://www.warp.dev/"},"\u5b98\u7f51")),(0,n.kt)("p",null,"Warp \u662f\u4e00\u6b3e\u7ec8\u7aef\u7684\u66ff\u4ee3\u54c1\uff0c\u5185\u7f6e\u4e86 Warp AI, Warp \u662f\u4e00\u4e2a\u901f\u5ea6\u6781\u5feb\u3001\u57fa\u4e8e Rust \u7684\u7ec8\u7aef\uff0c\u4ece\u5934\u5f00\u59cb\u91cd\u65b0\u8bbe\u8ba1\uff0c\u50cf\u73b0\u4ee3\u5e94\u7528\u7a0b\u5e8f\u4e00\u6837\u5de5\u4f5c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://848020679-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MbqIgTw17KQvq_DQuRr%2Fuploads%2F5xTRTXvr4jV3U1jWqNLt%2FWarp_Essentials.gif?alt=media&token=424f40a6-d525-44df-9890-6fb74fb7a2aa",alt:null})),(0,n.kt)("h2",{id:"ai"},"AI"),(0,n.kt)("p",null,"\u53f3\u4e0a\u89d2\u7684\u26a1\ufe0f \u56fe\u6807\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u548cAI \u7545\u804a\u4e86\uff0c\u76ee\u524d\u662f\u6bcf\u5929 100\u6761\u9650\u5236"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(7913).Z,width:"1101",height:"1055"})),(0,n.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,n.kt)("h3",{id:"\u4e3b\u9898"},"\u4e3b\u9898"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5185\u7f6e\u4e86\u5f88\u591a\u4e3b\u9898\u4f9b\u9009\u62e9\u4f7f\u7528")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(7461).Z,width:"1101",height:"1055"})),(0,n.kt)("h3",{id:"\u6837\u5f0f\u8bbe\u7f6e"},"\u6837\u5f0f\u8bbe\u7f6e"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(606).Z,width:"832",height:"811"})),(0,n.kt)("h3",{id:"team-\u4e2a\u4eba\u5e38\u7528\u547d\u4ee4"},"Team \u4e2a\u4eba\u5e38\u7528\u547d\u4ee4"),(0,n.kt)("p",null,"\u65b0\u7248\u672c\u4e0a\u7ebf\u4e86\uff0c\u5de6\u4e0a\u89d2\u56fe\u6807\u70b9\u51fb\u4e4b\u540e\u4f1a\u6709Team \u548c\u5e38\u7528\u547d\u4ee4\u7ba1\u7406\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684\u5e38\u7528\u547d\u4ee4, \u4e5f\u53ef\u4ee5\u641c\u7d22\u5e38\u7528\u7684\u547d\u4ee4\uff0c\u5176\u5b9e\u5e94\u8be5\u4e0d\u53eb\u547d\u4ee4\uff0c\u5e94\u8be5\u53eb workflow \u5de5\u4f5c\u6d41"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(3177).Z,width:"1101",height:"1055"})),(0,n.kt)("h3",{id:"\u6ed1\u52a8\u9009\u62e9"},"\u6ed1\u52a8\u9009\u62e9"),(0,n.kt)("p",null,"\u5728\u7c7b\u4f3c\u8df3\u8f6c\u6587\u4ef6\u5939\u65f6\uff0c\u4f1a\u81ea\u52a8\u51fa\u73b0\u53ef\u4f9b\u9009\u62e9\u7684\u76ee\u5f55\u7ed3\u6784"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(8455).Z,width:"770",height:"230"})),(0,n.kt)("h3",{id:"\u5386\u53f2\u8bb0\u5f55\u7559\u5b58"},"\u5386\u53f2\u8bb0\u5f55\u7559\u5b58"),(0,n.kt)("p",null,"\u64cd\u4f5c\u547d\u4ee4\u5386\u53f2\u8bb0\u5f55\u4f1a\u7559\u5b58\uff0c\u53ef\u4ee5\u8fdb\u884c\u6807\u8bb0, \u4fdd\u5b58\u547d\u4ee4\u5230 workflow\uff0c\u8be2\u95eeAI\u7b49\u7b49\n\u6bcf\u6761\u5386\u53f2\u8bb0\u5f55\u4e4b\u95f4\u4f1a\u6709\u5206\u5272\uff0c\u70b9\u51fb\u4e4b\u540e\u4e5f\u4f1a\u51fa\u73b0\u8fb9\u6846\uff0c\u4eba\u6027\u5316\u70b9\u8d5e"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(5611).Z,width:"1088",height:"536"})),(0,n.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,n.kt)("p",null,"\u5f88\u4e0d\u9519\u7684\u7ec8\u7aef\u9009\u62e9\uff0c\u5f3a\u70c8\u63a8\u8350\uff01\uff01\uff01"))}u.isMDXComponent=!0},7913:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/warp1-7f3b5009e55007bc81159e3277ceab1a.png"},7461:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/warp2-ab63bec243167a0d4519328064449452.png"},606:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/warp3-2825d4a67c3e86b3aefc518758a292d0.png"},3177:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/warp4-4e2bc3f1f4917f07583aee9f583a3467.png"},8455:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/warp5-55d8f3a9d9b329750764ac7d7174a5dc.png"},5611:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/warp6-05d0a69694d323696926ab7d11d6a987.png"}}]);