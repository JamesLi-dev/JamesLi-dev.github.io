"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[3574],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>c,kt:()=>g});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(2564),a=(n(9496),n(9613));const l={sidebar_position:1},i="LazyGit",o={unversionedId:"software/lazygit",id:"software/lazygit",title:"LazyGit",description:"lazygit \u662f\u4e00\u4e2a\u7528\u4e8e Git \u547d\u4ee4\u884c\u7684\u7b80\u5355\u7ec8\u7aef UI\uff0c\u4f7f\u7528 Go \u8bed\u8a00\u7f16\u5199\uff0c\u7528\u5230\u4e86 gocui \u5e93\uff0c\u76ee\u7684\u662f\u5728\u547d\u4ee4\u884c\u63d0\u4f9b Git \u7684\u56fe\u5f62\u754c\u9762\u3002\u529f\u80fd\u7279\u6027",source:"@site/docs/software/lazygit.md",sourceDirName:"software",slug:"/software/lazygit",permalink:"/docs/software/lazygit",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u8f6f\u4ef6",permalink:"/docs/category/\u8f6f\u4ef6"},next:{title:"npkill",permalink:"/docs/software/npkill"}},p={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u5feb\u6377\u547d\u4ee4",id:"\u5feb\u6377\u547d\u4ee4",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lazygit"},"LazyGit"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5473).Z,width:"1000",height:"616"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"lazygit \u662f\u4e00\u4e2a\u7528\u4e8e Git \u547d\u4ee4\u884c\u7684\u7b80\u5355\u7ec8\u7aef UI\uff0c\u4f7f\u7528 Go \u8bed\u8a00\u7f16\u5199\uff0c\u7528\u5230\u4e86 gocui \u5e93\uff0c\u76ee\u7684\u662f\u5728\u547d\u4ee4\u884c\u63d0\u4f9b Git \u7684\u56fe\u5f62\u754c\u9762\u3002\u529f\u80fd\u7279\u6027"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"\u8f7b\u677e\u6dfb\u52a0\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u5408\u5e76\u51b2\u7a81"),(0,a.kt)("li",{parentName:"ul"},"\u8f7b\u677e\u68c0\u51fa\u6700\u8fd1\u7684\u5206\u652f"),(0,a.kt)("li",{parentName:"ul"},"\u6eda\u52a8\u67e5\u770b branches/commits/stash \u7684\u65e5\u5fd7\u548c\u5dee\u5f02\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u5feb\u901f\u8fdb\u884c pushing/pulling \u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"\u538b\u7f29\u5e76\u91cd\u547d\u540d commits \u4fe1\u606f"))),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"macOS: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install lazygit\n")),(0,a.kt)("p",null,"Windows: "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u60a8\u53ef\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"lazygit")," \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"scoop")," \u5b89\u88c5\u3002\u5b83\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"extras")," \u6876\u91cc\uff1a"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  # Add the extras bucket\n  scoop bucket add extras\n  # Install lazygit\n  scoop install lazygit\n"))),(0,a.kt)("p",null,"\u5176\u4ed6\uff1a\u53ef\u5230\u8fd9\u91cc\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/scoop/lazygit#homebrew"},"lazygit")),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"lazygit\u5728 git \u5b58\u50a8\u5e93\u4e2d\u8c03\u7528\u60a8\u7684\u7ec8\u7aef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ lazygit\n")),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\uff0c\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528echo \"alias lg='lazygit'\" >> ~/.zshrc\uff08\u6216\u60a8\u6b63\u5728\u4f7f\u7528\u7684\u4efb\u4f55 rc \u6587\u4ef6\uff09\u4e3a\u6b64\u6dfb\u52a0\u522b\u540d\u3002\u914d\u7f6e\u4fdd\u5b58\u4e4b\u540e\uff0c\u5373\u53ef\u8f93\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ lg\n")),(0,a.kt)("h2",{id:"\u5feb\u6377\u547d\u4ee4"},"\u5feb\u6377\u547d\u4ee4"),(0,a.kt)("p",null,"\u8fd9\u91cc\u53ea\u5217\u4e3e\u6700\u5e38\u7528\u7684\u4e00\u4e9b\u5feb\u6377\u952e\uff0c\u5176\u4ed6\u7684\u53ef\u4ee5\u5230\u8fd9\u91cc\u67e5\u770b\uff1a\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jesseduffield/lazygit/blob/master/docs/keybindings/Keybindings_zh.md"},"lazygit \u5feb\u6377\u952e")),(0,a.kt)("p",null,"\u8fd9\u91cc\u7ecf\u5e38\u7528\u5230\u7684\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"p"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"P"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"R"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"::"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"c"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),", "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ctrl+r: \u5207\u6362\u5230\u6700\u8fd1\u7684\u4ed3\u5e93\npgup: \u5411\u4e0a\u6eda\u52a8\u4e3b\u9762\u677f (fn+up/shift+k)\npgdown: \u5411\u4e0b\u6eda\u52a8\u4e3b\u9762\u677f (fn+down/shift+j)\nm: \u67e5\u770b \u5408\u5e76/\u53d8\u57fa \u9009\u9879\nctrl+p: \u67e5\u770b\u81ea\u5b9a\u4e49\u8865\u4e01\u9009\u9879\nR: \u5237\u65b0\nx: \u6253\u5f00\u83dc\u5355\n+: \u4e0b\u4e00\u5c4f\u6a21\u5f0f\uff08\u6b63\u5e38/\u534a\u5c4f/\u5168\u5c4f\uff09\n_: \u4e0a\u4e00\u5c4f\u6a21\u5f0f\nctrl+s: \u67e5\u770b\u6309\u8def\u5f84\u8fc7\u6ee4\u9009\u9879\nW: \u6253\u5f00 diff \u83dc\u5355\nctrl+e: \u6253\u5f00 diff \u83dc\u5355\n@: \u6253\u5f00\u547d\u4ee4\u65e5\u5fd7\u83dc\u5355\n:: \u6267\u884c\u81ea\u5b9a\u4e49\u547d\u4ee4\nP: \u63a8\u9001\np: \u62c9\u53d6\n.: \u4e0b\u4e00\u9875\n,: \u4e0a\u4e00\u9875\nctrl+o: \u5c06\u63d0\u4ea4\u7684 SHA \u590d\u5236\u5230\u526a\u8d34\u677f\nspace: \u68c0\u51fa\u63d0\u4ea4\ny: copy commit attribute\no: \u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u63d0\u4ea4\nn: \u4ece\u63d0\u4ea4\u521b\u5efa\u65b0\u5206\u652f\ng: \u67e5\u770b\u91cd\u7f6e\u9009\u9879\nc: \u590d\u5236\u63d0\u4ea4\uff08\u62e3\u9009\uff09\nC: \u590d\u5236\u63d0\u4ea4\u8303\u56f4\uff08\u62e3\u9009\uff09\nctrl+r: \u91cd\u7f6e\u5df2\u62e3\u9009\uff08\u590d\u5236\uff09\u7684\u63d0\u4ea4\nenter: \u67e5\u770b\u63d0\u4ea4\nR: \u91cd\u547d\u540d\u5206\u652f\na: \u5207\u6362\u6240\u6709\u6587\u4ef6\u7684\u6682\u5b58\u72b6\u6001\n`: \u5207\u6362\u6587\u4ef6\u6811\u89c6\u56fe\nspace: \u5207\u6362\u6682\u5b58\u72b6\u6001\n\n")))}m.isMDXComponent=!0},5473:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lazygit-417d1b55fe141d6d1a65dc1acdf41dae.gif"}}]);