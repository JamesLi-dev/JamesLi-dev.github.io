"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[6740],{549:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var s=i(1527),l=i(4054);const t={sidebar_position:2},c="LazyGit",r={id:"plugin/lazygit",title:"LazyGit",description:"lazygit \u662f\u4e00\u4e2a\u7528\u4e8e Git \u547d\u4ee4\u884c\u7684\u7b80\u5355\u7ec8\u7aef UI\uff0c\u4f7f\u7528 Go \u8bed\u8a00\u7f16\u5199\uff0c\u7528\u5230\u4e86 gocui \u5e93\uff0c\u76ee\u7684\u662f\u5728\u547d\u4ee4\u884c\u63d0\u4f9b Git \u7684\u56fe\u5f62\u754c\u9762\u3002\u529f\u80fd\u7279\u6027",source:"@site/docs/plugin/lazygit.md",sourceDirName:"plugin",slug:"/plugin/lazygit",permalink:"/en/docs/plugin/lazygit",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"pnpm",permalink:"/en/docs/plugin/pnpm"},next:{title:"npkill",permalink:"/en/docs/plugin/npkill"}},d={},a=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u5feb\u6377\u547d\u4ee4",id:"\u5feb\u6377\u547d\u4ee4",level:2}];function o(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"lazygit",children:"LazyGit"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:i(9855).Z+"",width:"1000",height:"616"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"lazygit \u662f\u4e00\u4e2a\u7528\u4e8e Git \u547d\u4ee4\u884c\u7684\u7b80\u5355\u7ec8\u7aef UI\uff0c\u4f7f\u7528 Go \u8bed\u8a00\u7f16\u5199\uff0c\u7528\u5230\u4e86 gocui \u5e93\uff0c\u76ee\u7684\u662f\u5728\u547d\u4ee4\u884c\u63d0\u4f9b Git \u7684\u56fe\u5f62\u754c\u9762\u3002\u529f\u80fd\u7279\u6027"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8f7b\u677e\u6dfb\u52a0\u6587\u4ef6"}),"\n",(0,s.jsx)(e.li,{children:"\u89e3\u51b3\u5408\u5e76\u51b2\u7a81"}),"\n",(0,s.jsx)(e.li,{children:"\u8f7b\u677e\u68c0\u51fa\u6700\u8fd1\u7684\u5206\u652f"}),"\n",(0,s.jsx)(e.li,{children:"\u6eda\u52a8\u67e5\u770b branches/commits/stash \u7684\u65e5\u5fd7\u548c\u5dee\u5f02\u4fe1\u606f"}),"\n",(0,s.jsx)(e.li,{children:"\u5feb\u901f\u8fdb\u884c pushing/pulling \u64cd\u4f5c"}),"\n",(0,s.jsx)(e.li,{children:"\u538b\u7f29\u5e76\u91cd\u547d\u540d commits \u4fe1\u606f"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(e.p,{children:"macOS:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"brew install lazygit\n"})}),"\n",(0,s.jsx)(e.p,{children:"Windows:"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5 ",(0,s.jsx)(e.code,{children:"lazygit"})," \u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"scoop"})," \u5b89\u88c5\u3002\u5b83\u5728 ",(0,s.jsx)(e.code,{children:"extras"})," \u6876\u91cc\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"  # Add the extras bucket\n  scoop bucket add extras\n  # Install lazygit\n  scoop install lazygit\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u4ed6\uff1a\u53ef\u5230\u8fd9\u91cc\u67e5\u770b ",(0,s.jsx)(e.a,{href:"https://github.com/scoop/lazygit#homebrew",children:"lazygit"})]}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,s.jsx)(e.p,{children:"lazygit\u5728 git \u5b58\u50a8\u5e93\u4e2d\u8c03\u7528\u60a8\u7684\u7ec8\u7aef\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ lazygit\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u9700\u8981\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528echo \"alias lg='lazygit'\" >> ~/.zshrc\uff08\u6216\u60a8\u6b63\u5728\u4f7f\u7528\u7684\u4efb\u4f55 rc \u6587\u4ef6\uff09\u4e3a\u6b64\u6dfb\u52a0\u522b\u540d\u3002\u914d\u7f6e\u4fdd\u5b58\u4e4b\u540e\uff0c\u5373\u53ef\u8f93\u5165\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ lg\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5feb\u6377\u547d\u4ee4",children:"\u5feb\u6377\u547d\u4ee4"}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u91cc\u53ea\u5217\u4e3e\u6700\u5e38\u7528\u7684\u4e00\u4e9b\u5feb\u6377\u952e\uff0c\u5176\u4ed6\u7684\u53ef\u4ee5\u5230\u8fd9\u91cc\u67e5\u770b\uff1a\n",(0,s.jsx)(e.a,{href:"https://github.com/jesseduffield/lazygit/blob/master/docs/keybindings/Keybindings_zh.md",children:"lazygit \u5feb\u6377\u952e"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u91cc\u7ecf\u5e38\u7528\u5230\u7684\u5c31\u662f ",(0,s.jsx)(e.code,{children:"p"}),", ",(0,s.jsx)(e.code,{children:"P"}),", ",(0,s.jsx)(e.code,{children:"R"}),", ",(0,s.jsx)(e.code,{children:"::"}),", ",(0,s.jsx)(e.code,{children:"c"}),", ",(0,s.jsx)(e.code,{children:"C"}),", ",(0,s.jsx)(e.code,{children:"a"}),","]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"ctrl+r: \u5207\u6362\u5230\u6700\u8fd1\u7684\u4ed3\u5e93\npgup: \u5411\u4e0a\u6eda\u52a8\u4e3b\u9762\u677f (fn+up/shift+k)\npgdown: \u5411\u4e0b\u6eda\u52a8\u4e3b\u9762\u677f (fn+down/shift+j)\nm: \u67e5\u770b \u5408\u5e76/\u53d8\u57fa \u9009\u9879\nctrl+p: \u67e5\u770b\u81ea\u5b9a\u4e49\u8865\u4e01\u9009\u9879\nR: \u5237\u65b0\nx: \u6253\u5f00\u83dc\u5355\n+: \u4e0b\u4e00\u5c4f\u6a21\u5f0f\uff08\u6b63\u5e38/\u534a\u5c4f/\u5168\u5c4f\uff09\n_: \u4e0a\u4e00\u5c4f\u6a21\u5f0f\nctrl+s: \u67e5\u770b\u6309\u8def\u5f84\u8fc7\u6ee4\u9009\u9879\nW: \u6253\u5f00 diff \u83dc\u5355\nctrl+e: \u6253\u5f00 diff \u83dc\u5355\n@: \u6253\u5f00\u547d\u4ee4\u65e5\u5fd7\u83dc\u5355\n:: \u6267\u884c\u81ea\u5b9a\u4e49\u547d\u4ee4\nP: \u63a8\u9001\np: \u62c9\u53d6\n.: \u4e0b\u4e00\u9875\n,: \u4e0a\u4e00\u9875\nctrl+o: \u5c06\u63d0\u4ea4\u7684 SHA \u590d\u5236\u5230\u526a\u8d34\u677f\nspace: \u68c0\u51fa\u63d0\u4ea4\ny: copy commit attribute\no: \u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u63d0\u4ea4\nn: \u4ece\u63d0\u4ea4\u521b\u5efa\u65b0\u5206\u652f\ng: \u67e5\u770b\u91cd\u7f6e\u9009\u9879\nc: \u590d\u5236\u63d0\u4ea4\uff08\u62e3\u9009\uff09\nC: \u590d\u5236\u63d0\u4ea4\u8303\u56f4\uff08\u62e3\u9009\uff09\nctrl+r: \u91cd\u7f6e\u5df2\u62e3\u9009\uff08\u590d\u5236\uff09\u7684\u63d0\u4ea4\nenter: \u67e5\u770b\u63d0\u4ea4\nR: \u91cd\u547d\u540d\u5206\u652f\na: \u5207\u6362\u6240\u6709\u6587\u4ef6\u7684\u6682\u5b58\u72b6\u6001\n`: \u5207\u6362\u6587\u4ef6\u6811\u89c6\u56fe\nspace: \u5207\u6362\u6682\u5b58\u72b6\u6001\n\n"})})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},9855:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/lazygit-417d1b55fe141d6d1a65dc1acdf41dae.gif"},4054:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>c});var s=i(959);const l={},t=s.createContext(l);function c(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);