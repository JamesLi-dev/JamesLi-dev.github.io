"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[5261],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,ah:()=>s,kt:()=>k});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(1966),r=(n(9496),n(9613));const i={sidebar_position:6,sidebar_label:"\u5c0f\u7a0b\u5e8f"},l="\u5c0f\u7a0b\u5e8f",p={unversionedId:"framework/miniprogram",id:"framework/miniprogram",title:"\u5c0f\u7a0b\u5e8f",description:"\u6838\u5fc3-\u53cc\u7ebf\u7a0b\u67b6\u6784",source:"@site/docs/framework/miniprogram.md",sourceDirName:"framework",slug:"/framework/miniprogram",permalink:"/docs/framework/miniprogram",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"\u5c0f\u7a0b\u5e8f"},sidebar:"tutorialSidebar",previous:{title:"UniApp",permalink:"/docs/framework/UniApp"},next:{title:"\u5176\u4ed6",permalink:"/docs/framework/other"}},o={},s=[{value:"\u6838\u5fc3-\u53cc\u7ebf\u7a0b\u67b6\u6784",id:"\u6838\u5fc3-\u53cc\u7ebf\u7a0b\u67b6\u6784",level:2},{value:"<code>WXML</code>",id:"wxml",level:3},{value:"<code>WXSS</code>",id:"wxss",level:3},{value:"\u6e32\u67d3\u5c42",id:"\u6e32\u67d3\u5c42",level:3},{value:"\u903b\u8f91\u5c42",id:"\u903b\u8f91\u5c42",level:3},{value:"\u8fd0\u884c\u673a\u5236",id:"\u8fd0\u884c\u673a\u5236",level:3},{value:"\u901a\u77e5\u66f4\u65b0",id:"\u901a\u77e5\u66f4\u65b0",level:3}],u={toc:s},m="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5c0f\u7a0b\u5e8f"},"\u5c0f\u7a0b\u5e8f"),(0,r.kt)("h2",{id:"\u6838\u5fc3-\u53cc\u7ebf\u7a0b\u67b6\u6784"},"\u6838\u5fc3-\u53cc\u7ebf\u7a0b\u67b6\u6784"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7653).Z,width:"1009",height:"750"})),(0,r.kt)("p",null,"\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u5230\uff0c\u5c0f\u7a0b\u5e8f\u5206\u4e3a\u4e86 \u6e32\u67d3\u5c42\uff08Webview\uff09\u548c\u903b\u8f91\u5c42\uff08App service\uff09\uff0c\u7136\u540e\u4e2d\u95f4\u662f\u7cfb\u7edf\u5c42\uff08Native\uff09\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"JsBridge"),"\u8fde\u63a5\uff0c\u90a3\u4e48\u4e3a\u4ec0\u4e48\u8981\u5206\u6210\u4e24\u5757\u5462\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d0\u9ad8\u7528\u6237\u4f53\u9a8c\uff08ui \u548c\u903b\u8f91\u5206\u79bb\uff0c\u907f\u514d\u9875\u9762\u957f\u65f6\u95f4\u963b\u585e\u548c\u5361\u987f\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u4f18\u5316\u5e94\u7528\u6027\u80fd\uff08\u8fd0\u884c\u5728\u4e0d\u540c\u7684\u7ebf\u7a0b\u4e2d\uff0c\u53ef\u4ee5\u540c\u65f6\u6e32\u67d3\u6216\u8005\u8ba1\u7b97\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u6548\u7387\u66f4\u9ad8\uff08\u89e3\u8026\u548c\u677e\u6563\u8026\u5408\uff09")),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u672c\u7701\u662f\u4e00\u4e2a\u5355\u7ebf\u7a0b\u67b6\u6784\uff0c\u4e3b\u8981\u539f\u56e0\u662f js \u5141\u8bb8\u64cd\u4f5c Dom\uff0c\u6240\u4ee5 js \u7ebf\u7a0b\u548c\u6e32\u67d3\u7ebf\u7a0b\u53ea\u80fd\u4e92\u65a5\u8fd0\u884c\n\u90a3\u4e48\u95ee\u9898\u53c8\u6765\u4e86\uff0c\u600e\u4e48\u505a\u5230\u7684\u5462\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6839\u672c\u539f\u56e0\u5c31\u662f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7981\u6b62 js \u64cd\u4f5c DOM\u3002")),(0,r.kt)("h3",{id:"wxml"},(0,r.kt)("inlineCode",{parentName:"h3"},"WXML")),(0,r.kt)("p",null,"\u8bf4\u5230\u5c0f\u7a0b\u5e8f\uff0c\u90a3\u5fc5\u4e0d\u53ef\u5c11\u7684\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"WXML")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"WXSS"),"\uff0c\u5148\u8bf4\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"WXML"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"WXML")," \u5168\u79f0\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"WeiXin Markup Language"),"\uff0c\u662f\u5c0f\u7a0b\u5e8f\u6846\u67b6\u8bbe\u8ba1\u7684\u4e00\u5957\u6807\u7b7e\u8bed\u8a00\uff0c\u7ed3\u5408\u5c0f\u7a0b\u5e8f\u7684\u57fa\u7840\u7ec4\u4ef6\u3001\u4e8b\u4ef6\u7cfb\u7edf\uff0c\u53ef\u4ee5\u6784\u5efa\u51fa\u9875\u9762\u7684\u7ed3\u6784\u3002\n\u5176\u5b9e\u6839\u672c\u8fd8\u662f\u7c7b\u4f3c Vue \u7684\u865a\u62df DOM \u7ed3\u6784\uff0c\u5c0f\u7a0b\u5e8f\u4f1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"WXML")," \u89e3\u6790\u4e3a \u865a\u62df DOM \u7684\u5bf9\u8c61\u7ed3\u6784\uff0c\u5305\u62ec\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"tag"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"children"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"attr"),"\u7b49\uff0c\u7136\u540e\u518d\u901a\u8fc7\u865a\u62df DOM \u7f16\u8bd1\u4e3a js \u6587\u4ef6\uff0c\u6700\u540e\u518d\u63d2\u5165\u5230\u6e32\u67d3\u5c42\u7684 script \u6807\u7b7e\u4e2d\u3002"),(0,r.kt)("h3",{id:"wxss"},(0,r.kt)("inlineCode",{parentName:"h3"},"WXSS")),(0,r.kt)("p",null,"WXSS \u662f\u5c0f\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u7684\u6837\u5f0f\u8bed\u8a00\uff0cWXSS \u5177\u6709 CSS \u7684\u5927\u90e8\u5206\u7279\u6027\uff0c\u540c\u65f6\u5b83\u5bf9 CSS \u8fdb\u884c\u4e86\u6269\u5145\u4ee5\u53ca\u4fee\u6539\u3002\n\u5c0f\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u7684\u5c3a\u5bf8\u5355\u4f4d\u4e3a rpx\uff08Responsive px\uff09\uff0c\u4e0d\u540c\u4e8e h5 \u4e2d\u5bf9\u4e8e px \u7684\u5904\u7406\uff0c\u9700\u8981\u4f7f\u7528 postcss \u8fdb\u884c\u7edf\u4e00\u7684\u8f6c\u6362\uff0c\u5c0f\u7a0b\u5e8f\u5e95\u5c42\u5df2\u7ecf\u4e3a\u5f00\u53d1\u8005\u505a\u597d\u4e86\u8fd9\u5c42\u8f6c\u6362\uff0c\u90a3\u5177\u4f53\u5b83\u662f\u600e\u4e48\u505a\u5230\u7684\u5462\uff1f\u770b\u4e0b\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2033).Z,width:"715",height:"313"})),(0,r.kt)("p",null,"WXSS \u540c\u6837\u4f1a\u7ecf\u8fc7\u7f16\u8bd1\uff0c\u6700\u7ec8\u7684\u7f16\u8bd1\u4ea7\u7269\u4e3a wxss.js\uff0c\u4e0d\u540c\u4e8e WXML \u901a\u8fc7 script \u6807\u7b7e\u7684\u5f62\u5f0f\u63d2\u5165\u5230\u6e32\u67d3\u5c42\uff0cwxss.js \u5219\u662f\u901a\u8fc7 eval \u7684\u65b9\u5f0f\u6ce8\u5165\u5230\u6e32\u67d3\u5c42\u4ee3\u7801\u4e2d\u3002"),(0,r.kt)("h3",{id:"\u6e32\u67d3\u5c42"},"\u6e32\u67d3\u5c42"),(0,r.kt)("p",null,"\u6e32\u67d3\u5c42\u7528\u6765\u6e32\u67d3\u9875\u9762\u7ed3\u6784\uff0c\u4e3b\u8981\u7531 WebView \u8fdb\u884c\u6e32\u67d3\uff0c\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u4ee5\u5b58\u5728\u591a\u4e2a\u754c\u9762\uff0c\u6240\u4ee5\u6e32\u67d3\u5c42\u53ef\u80fd\u5b58\u5728\u591a\u4e2a WebView \u7ebf\u7a0b\u3002"),(0,r.kt)("p",null,"\u6e32\u67d3\u7ebf\u7a0b\u4e2d\u5b58\u5728\u7740\u4ee5\u4e0b\u5168\u5c40\u53d8\u91cf:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"webviewId\uff1awebview \u7684\u552f\u4e00\u6807\u8bc6\uff0c\u5f53\u7528\u6237\u6253\u5f00\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u7684\u65f6\u5019\uff0c\u76f8\u5f53\u4e8e\u6253\u5f00\u4e86\u4e00\u4e2a webview\uff0c\u4e0d\u540c\u7684 webview \u7528 webviewid \u6765\u533a\u5206;"),(0,r.kt)("li",{parentName:"ul"},"wxAppCode\uff1a\u6574\u4e2a\u9875\u9762\u7684 json wxss wxml \u7f16\u8bd1\u4e4b\u540e\u90fd\u5b58\u50a8\u5728\u8fd9\u91cc;"),(0,r.kt)("li",{parentName:"ul"},"Vd_version_info\uff1a\u7248\u672c\u4fe1\u606f;"),(0,r.kt)("li",{parentName:"ul"},"./dev/wxconfig.js\uff1a\u5c0f\u7a0b\u5e8f\u9ed8\u8ba4\u603b\u914d\u7f6e\u9879\uff0c\u5305\u62ec\u7528\u6237\u81ea\u5b9a\u4e49\u4e0e\u7cfb\u7edf\u9ed8\u8ba4\u7684\u6574\u5408\u7ed3\u679c\u3002\u5728\u63a7\u5236\u53f0\u8f93\u5165","_","_","wxConfig \u53ef\u4ee5\u770b\u51fa\u6253\u5370\u7ed3\u679c;"),(0,r.kt)("li",{parentName:"ul"},"./dev/devtoolsconfig.js\uff1a\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u914d\u7f6e\uff0c\u5305\u62ec navigationBarHeight,\u6807\u9898\u680f\u7684\u9ad8\u5ea6\uff0c\u72b6\u6001\u680f\u9ad8\u5ea6\uff0c\u7b49\u7b49\uff0c\u63a7\u5236\u53f0\u8f93\u5165","_","_","devtoolsConfig \u53ef\u4ee5\u770b\u5230\u5176\u5bf9\u5e94\u7684\u4fe1\u606f;"),(0,r.kt)("li",{parentName:"ul"},"./dev/deviceinfo.js\uff1a\u8bbe\u5907\u4fe1\u606f\uff0c\u5305\u542b\u5c3a\u5bf8/\u50cf\u7d20\u70b9 pixelRatio;"),(0,r.kt)("li",{parentName:"ul"},"./dev/jsdebug.js\uff1adebug \u5de5\u5177;"),(0,r.kt)("li",{parentName:"ul"},"./dev/WAWebview.js\uff1a\u6e32\u67d3\u5c42\u5e95\u5c42\u57fa\u7840\u5e93;"),(0,r.kt)("li",{parentName:"ul"},"./dev/hls.js\uff1a\u4f18\u79c0\u7684\u89c6\u9891\u6d41\u5904\u7406\u5de5\u5177;"),(0,r.kt)("li",{parentName:"ul"},"./dev/WARemoteDebug.js\uff1a\u5e95\u5c42\u57fa\u7840\u5e93\u8c03\u8bd5\u5de5\u5177;")),(0,r.kt)("h3",{id:"\u903b\u8f91\u5c42"},"\u903b\u8f91\u5c42"),(0,r.kt)("p",null,"\u903b\u8f91\u5c42\u91c7\u7528 JSCore \u7ebf\u7a0b\u8fd0\u884c JS \u811a\u672c\u3002\u903b\u8f91\u5c42\u4e3b\u8981\u7528\u6765\u903b\u8f91\u5904\u7406\u3001\u6570\u636e\u8bf7\u6c42\u3001\u63a5\u53e3\u8c03\u7528\u7b49\u3002"),(0,r.kt)("p",null,"\u5728\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u903b\u8f91\u5c42\u53ea\u6709\u4e00\u4e2a\uff0c\u4f46\u662f\u6e32\u67d3\u5c42\u6709\u591a\u4e2a\uff0c\u6e32\u67d3\u5c42\u548c\u903b\u8f91\u5c42\u4e4b\u95f4\u662f\u901a\u8fc7\u5fae\u4fe1\u5ba2\u6237\u7aef\u8fdb\u884c\u6865\u63a5\u901a\u4fe1\u7684\u3002\u90a3\u5177\u4f53\u662f\u600e\u4e48\u5b9e\u73b0\u7684\u5462\uff1f"),(0,r.kt)("p",null,"\u5176\u5b9e\u5b83\u4f7f\u7528\u7684\u5c31\u662f WeixinJSBridge \u901a\u4fe1\u673a\u5236\u3002\u4e3b\u8981\u65b9\u5f0f\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"invoke\uff1a\u8c03\u7528 native API;"),(0,r.kt)("li",{parentName:"ul"},"invokeCallbackHandler\uff1aNative \u4f20\u9012 invoke \u65b9\u6cd5\u56de\u8c03\u7ed3\u679c;"),(0,r.kt)("li",{parentName:"ul"},"publish\uff1a\u6e32\u67d3\u5c42\u7528\u6765\u5411\u903b\u8f91\u4e1a\u52a1\u5c42\u53d1\u9001\u6d88\u606f\uff0c\u4e5f\u5c31\u662f\u8bf4\u8981\u8c03\u7528\u903b\u8f91\u5c42\u7684\u4e8b\u4ef6\u65b9\u6cd5;"),(0,r.kt)("li",{parentName:"ul"},"subscribe\uff1a\u8ba2\u9605\u903b\u8f91\u5c42\u6d88\u606f;"),(0,r.kt)("li",{parentName:"ul"},"subscribeHandler\uff1a\u89c6\u56fe\u5c42\u548c\u903b\u8f91\u5c42\u6d88\u606f\u8ba2\u9605\u8f6c\u53d1;"),(0,r.kt)("li",{parentName:"ul"},"setCustomPublishHandler\uff1a\u81ea\u5b9a\u4e49\u6d88\u606f\u8f6c\u53d1;")),(0,r.kt)("p",null,"\u90a3\u4e48\u6e32\u67d3\u5c42\u5982\u4f55\u5411\u903b\u8f91\u5c42\u901a\u4fe1\uff1f\u8fd9\u91cc\u5c31\u662f\u5c0f\u7a0b\u5e8f\u7684\u4e8b\u4ef6\u7cfb\u7edf\u6d41\u7a0b\u4e86\u3002\n",(0,r.kt)("img",{src:n(5743).Z,width:"1535",height:"444"}),"\n",(0,r.kt)("img",{src:n(6325).Z,width:"1440",height:"462"})),(0,r.kt)("p",null,"\u5f00\u53d1\u8005\u5728 DOM \u4e0a\u901a\u8fc7@click \u7ed1\u5b9a\u4e8b\u4ef6\uff0cWXML \u6587\u4ef6\u88ab\u7f16\u8bd1\u7684\u65f6\u5019\uff0c\u4f1a\u901a\u8fc7$gwx \u51fd\u6570\u751f\u6210\u865a\u62df DOM\uff0c\u7136\u540e\u5c0f\u7a0b\u5e8f\u6267\u884c\u7684\u65f6\u5019\u6e32\u67d3\u5c42\u5e95\u5c42\u57fa\u7840\u5e93\u4f1a\u5bf9\u865a\u62df DOM \u8fdb\u884c\u89e3\u6790\uff0c\u4e8b\u4ef6\u7ed1\u5b9a\u6700\u7ec8\u4f1a\u4ee5 attr \u5c5e\u6027\u7684\u5f62\u5f0f\u751f\u6210\u5230\u865a\u62df DOM \u4e2d\uff0c\u6240\u4ee5\u5e95\u5c42\u57fa\u7840\u5e93\u901a\u8fc7 applyPropeties \u89e3\u6790\u4e8b\u4ef6\u5e76\u901a\u8fc7 addEventListener \u7ed1\u5b9a\u5230\u76f8\u5e94 DOM \u5e76\u58f0\u660e\u56de\u8c03\u3002"),(0,r.kt)("p",null,"\u7528\u6237\u70b9\u51fb\u76f8\u5e94 DOM \u65f6\uff0cExparser \u7ec4\u4ef6\u7cfb\u7edf\u63a5\u6536\u5230\u8fd9\u4e2a\u4e8b\u4ef6\uff0c\u7136\u540e\u5f00\u59cb\u6267\u884c\u56de\u8c03\u3002\u56de\u8c03\u51fd\u6570\u5728\u903b\u8f91\u5c42\uff0c\u4e8b\u4ef6\u7684\u89e6\u53d1\u5728\u6e32\u67d3\u5c42\uff0c\u6b64\u65f6\uff0c\u5c0f\u7a0b\u5e8f\u4f1a\u901a\u8fc7 setData \u53d1\u9001\u6570\u636e\u5230\u903b\u8f91\u5c42\uff0c\u8fd9\u4e2a\u65f6\u5019 WeixinJSBridge \u5c31\u6d3e\u4e0a\u7528\u573a\u4e86\uff0c\u6e32\u67d3\u5c42\u8c03\u7528 publish \u65b9\u6cd5\u53d1\u9001\u6570\u636e\uff0c\u903b\u8f91\u5c42\u901a\u8fc7 registercallback \u8fdb\u884c\u76d1\u542c\uff0c\u5e76\u6267\u884c\u76f8\u5e94\u7684\u56de\u8c03\u3002\u6b64\u65f6\uff0c\u6e32\u67d3\u5c42\u5230\u903b\u8f91\u5c42\u7684\u901a\u4fe1\u6d41\u7a0b\u7ed3\u675f\u3002"),(0,r.kt)("p",null,"\u90a3\u903b\u8f91\u5c42\u53c8\u662f\u5982\u4f55\u5c06\u6539\u53d8\u540e\u7684\u6570\u636e\u56de\u4f20\u7ed9\u6e32\u67d3\u5c42\u7684\u5462\uff1f\u903b\u8f91\u5c42\u6539\u53d8\u6570\u636e\u4e4b\u540e\uff0c\u540c\u6837\u662f\u89e6\u53d1 setData \u65b9\u6cd5\uff0c\u7136\u540e\u6e32\u67d3\u5c42\u901a\u8fc7 subscribe \u8fdb\u884c\u76d1\u542c\uff0c\u4ece eventname \u548c\u89e6\u53d1\u4e8b\u4ef6\u65f6\u5019\u8bb0\u5f55\u7684\u56de\u8c03\u51fd\u6570\u6765\u5224\u65ad\u662f\u54ea\u4e2a\u4e8b\u4ef6\u88ab\u89e6\u53d1\u4e86\uff0c\u4ece\u800c\u83b7\u53d6\u52a8\u6001\u6570\u636e\u3002"),(0,r.kt)("h3",{id:"\u8fd0\u884c\u673a\u5236"},"\u8fd0\u884c\u673a\u5236"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u542f\u52a8\u8fd0\u884c\u4e24\u79cd\u60c5\u51b5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u51b7\u542f\u52a8:"),"\n\u7528\u6237\u9996\u6b21\u6253\u5f00\u6216\u8005\u5c0f\u7a0b\u5e8f\u88ab\u5fae\u4fe1\u4e3b\u52a8\u9500\u6bc1\u540e\u518d\u6b21\u6253\u5f00\u7684\u60c5\u51b5\uff0c\u6b64\u65f6\u5c0f\u7a0b\u5e8f\u9700\u8981\u91cd\u65b0\u52a0\u8f7d\u542f\u52a8\uff0c\u5373\u4e3a\u51b7\u542f\u52a8\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u70ed\u542f\u52a8:"),"\n\u7528\u6237\u5df2\u7ecf\u6253\u5f00\u8fc7\u5c0f\u7a0b\u5e8f\uff0c\u7136\u540e\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u518d\u6b21\u6253\u5f00\u8be5\u5c0f\u7a0b\u5e8f\uff0c\u6b64\u65f6\u65e0\u9700\u91cd\u65b0\u542f\u52a8\uff0c\u53ea\u9700\u8981\u5c06\u540e\u53f0\u6001\u7684\u5c0f\u7a0b\u5e8f\u5207\u6362\u5230\u524d\u53f0\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5c31\u662f\u70ed\u542f\u52a8\u3002"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5c0f\u7a0b\u5e8f\u6bcf\u4e2a\u89c6\u56fe\u5c42\u9875\u9762\u5185\u5bb9\u90fd\u662f\u901a\u8fc7 pageframe.html \u6a21\u677f\u6765\u751f\u6210\u7684\uff0c\u5305\u62ec\u5c0f\u7a0b\u5e8f\u542f\u52a8\u7684\u9996\u9875\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9996\u9875\u542f\u52a8\u65f6\uff0c\u5373\u7b2c\u4e00\u6b21\u901a\u8fc7 pageframe.html \u751f\u6210\u5185\u5bb9\u540e\uff0c\u540e\u53f0\u670d\u52a1\u4f1a\u7f13\u5b58 pageframe.html \u6a21\u677f\u9996\u6b21\u751f\u6210\u7684 html \u5185\u5bb9;"),(0,r.kt)("li",{parentName:"ul"},"\u975e\u9996\u6b21\u65b0\u6253\u5f00\u9875\u9762\u65f6\uff0c\u9875\u9762\u8bf7\u6c42\u7684 pageframe.html \u5185\u5bb9\u76f4\u63a5\u8d70\u540e\u53f0\u7f13\u5b58;"),(0,r.kt)("li",{parentName:"ul"},"\u975e\u9996\u6b21\u65b0\u6253\u5f00\u9875\u9762\u65f6\uff0cpageframe.html \u9875\u9762\u5f15\u5165\u7684\u5916\u94fe js \u8d44\u6e90\u8d70\u672c\u5730\u7f13\u5b58; \u8fd9\u6837\u5728\u540e\u7eed\u65b0\u6253\u5f00\u9875\u9762\u65f6\uff0c\u90fd\u4f1a\u8d70\u7f13\u5b58\u7684 pageframe \u7684\u5185\u5bb9\uff0c\u907f\u514d\u91cd\u590d\u751f\u6210\uff0c\u5feb\u901f\u6253\u5f00\u4e00\u4e2a\u65b0\u9875\u9762\u3002")),(0,r.kt)("h3",{id:"\u901a\u77e5\u66f4\u65b0"},"\u901a\u77e5\u66f4\u65b0"),(0,r.kt)("p",null,"\u4e3b\u8981\u662f\u5728\u5f00\u53d1\u4eba\u5458\u63d0\u4ea4\u5ba1\u6838\u901a\u8fc7\u53d1\u5e03\u5c0f\u7a0b\u5e8f\u4e4b\u540e\uff0c\u63d0\u9192\u7528\u6237\u91cd\u542f\u66f4\u65b0\u5c0f\u7a0b\u5e8f\n\u76f4\u63a5\u4e0a\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const updateManager = wx.getUpdateManager();\n\nupdateManager.onCheckForUpdate(function (res) {\n  // \u8bf7\u6c42\u5b8c\u65b0\u7248\u672c\u4fe1\u606f\u7684\u56de\u8c03\n  console.log(res.hasUpdate);\n});\n\nupdateManager.onUpdateReady(function () {\n  wx.showModal({\n    title: "\u66f4\u65b0\u63d0\u793a",\n    content: "\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f",\n    success(res) {\n      if (res.confirm) {\n        // \u65b0\u7684\u7248\u672c\u5df2\u7ecf\u4e0b\u8f7d\u597d\uff0c\u8c03\u7528 applyUpdate \u5e94\u7528\u65b0\u7248\u672c\u5e76\u91cd\u542f\n        updateManager.applyUpdate();\n      }\n    },\n  });\n});\n\nupdateManager.onUpdateFailed(function () {\n  // \u65b0\u7248\u672c\u4e0b\u8f7d\u5931\u8d25\n});\n')))}c.isMDXComponent=!0},7653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/miniapp1-ecbe3ec5e09b8dca7c76c470998f2f34.png"},2033:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/miniapp2-cecf19027ddcee674ca3eeb711b240df.png"},5743:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/miniapp3-7e23913b2c5996cf987326e8ae36eb98.png"},6325:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/miniapp4-0b774857b36c4acbe871370c2552d9bb.png"}}]);