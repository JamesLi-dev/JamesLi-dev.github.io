"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[1784],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,ah:()=>c,kt:()=>k});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return t?r.createElement(k,a(a({ref:n},u),{},{components:t})):r.createElement(k,a({ref:n},u))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5369:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(1966),o=(t(9496),t(9613));const l={sidebar_position:8},a="JS \u6d4f\u89c8\u5668\u76f8\u5173\u65b9\u6cd5\u5c01\u88c5",i={unversionedId:"base/js/jsBrowser",id:"base/js/jsBrowser",title:"JS \u6d4f\u89c8\u5668\u76f8\u5173\u65b9\u6cd5\u5c01\u88c5",description:"1\u3001\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8",source:"@site/docs/base/js/jsBrowser.md",sourceDirName:"base/js",slug:"/base/js/jsBrowser",permalink:"/en/docs/base/js/jsBrowser",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"js \u5f52\u7eb3\u603b\u7ed3\u65b9\u6cd5\u5408\u96c6",permalink:"/en/docs/base/js/jsHighFuncs"},next:{title:"JS \u6570\u7ec4\u5e38\u7528\u65b9\u6cd5",permalink:"/en/docs/base/js/jsArray"}},s={},c=[{value:"1\u3001\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8",id:"1\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8",level:3},{value:"2\u3001\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8",id:"2\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8",level:3},{value:"3\u3001\u6eda\u52a8\u5143\u7d20\u5230\u53ef\u89c1\u533a\u57df",id:"3\u6eda\u52a8\u5143\u7d20\u5230\u53ef\u89c1\u533a\u57df",level:3},{value:"4\u3001\u5168\u5c4f\u663e\u793a\u5143\u7d20",id:"4\u5168\u5c4f\u663e\u793a\u5143\u7d20",level:3},{value:"5\u3001\u9000\u51fa\u6d4f\u89c8\u5668\u5168\u5c4f\u72b6\u6001",id:"5\u9000\u51fa\u6d4f\u89c8\u5668\u5168\u5c4f\u72b6\u6001",level:3},{value:"6\u3001\u786e\u5b9a\u8bbe\u5907\u7c7b\u578b",id:"6\u786e\u5b9a\u8bbe\u5907\u7c7b\u578b",level:3},{value:"7\u3001\u5224\u65ad\u8bbe\u5907\u662f\u5b89\u5353\u8fd8\u662fIOS",id:"7\u5224\u65ad\u8bbe\u5907\u662f\u5b89\u5353\u8fd8\u662fios",level:3},{value:"8\u3001\u83b7\u53d6\u6d4f\u89c8\u5668\u7c7b\u578b\u53ca\u5176\u7248\u672c",id:"8\u83b7\u53d6\u6d4f\u89c8\u5668\u7c7b\u578b\u53ca\u5176\u7248\u672c",level:3},{value:"9\u3001\u8bbe\u7f6ecookies",id:"9\u8bbe\u7f6ecookies",level:3},{value:"10\u3001\u83b7\u53d6 cookie",id:"10\u83b7\u53d6-cookie",level:3},{value:"11\u3001\u5220\u9664cookies",id:"11\u5220\u9664cookies",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"js-\u6d4f\u89c8\u5668\u76f8\u5173\u65b9\u6cd5\u5c01\u88c5"},"JS \u6d4f\u89c8\u5668\u76f8\u5173\u65b9\u6cd5\u5c01\u88c5"),(0,o.kt)("h3",{id:"1\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8"},"1\u3001\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 window.scrollTo() \u5e73\u6ed1\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const scrollToTop = () => {\n  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });\n};\n')),(0,o.kt)("h3",{id:"2\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8"},"2\u3001\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8"),(0,o.kt)("p",null,"\u5982\u679c\u77e5\u9053\u9875\u9762\u7684\u9ad8\u5ea6\uff0c\u4e5f\u53ef\u4ee5\u5e73\u6ed1\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const scrollToBottom = () => {\n  window.scrollTo({\n    top: document.documentElement.offsetHeight,\n    left: 0,\n    behavior: "smooth",\n  });\n};\n')),(0,o.kt)("h3",{id:"3\u6eda\u52a8\u5143\u7d20\u5230\u53ef\u89c1\u533a\u57df"},"3\u3001\u6eda\u52a8\u5143\u7d20\u5230\u53ef\u89c1\u533a\u57df"),(0,o.kt)("p",null,"\u6211\u4eec\u6709\u65f6\u9700\u8981\u5c06\u5143\u7d20\u6eda\u52a8\u5230\u53ef\u89c1\u533a\u57df\uff0c\u4f7f\u7528 scrollIntoView \u5c31\u8db3\u591f\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const smoothScroll = (element) => {\n  element.scrollIntoView({\n    behavior: "smooth",\n  });\n};\n')),(0,o.kt)("h3",{id:"4\u5168\u5c4f\u663e\u793a\u5143\u7d20"},"4\u3001\u5168\u5c4f\u663e\u793a\u5143\u7d20"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const goToFullScreen = (element) => {\n  element = element || document.body;\n  if (element.requestFullscreen) {\n    element.requestFullscreen();\n  } else if (element.mozRequestFullScreen) {\n    element.mozRequestFullScreen();\n  } else if (element.msRequestFullscreen) {\n    element.msRequestFullscreen();\n  } else if (element.webkitRequestFullscreen) {\n    element.webkitRequestFullScreen();\n  }\n};\n")),(0,o.kt)("h3",{id:"5\u9000\u51fa\u6d4f\u89c8\u5668\u5168\u5c4f\u72b6\u6001"},"5\u3001\u9000\u51fa\u6d4f\u89c8\u5668\u5168\u5c4f\u72b6\u6001"),(0,o.kt)("p",null,"\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"4. \u5168\u5c4f\u663e\u793a\u5143\u7d20")," \u4e00\u5757\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const goExitFullscreen = () => {\n  if (document.exitFullscreen) {\n    document.exitFullscreen();\n  } else if (document.msExitFullscreen) {\n    document.msExitFullscreen();\n  } else if (document.mozCancelFullScreen) {\n    document.mozCancelFullScreen();\n  } else if (document.webkitExitFullscreen) {\n    document.webkitExitFullscreen();\n  }\n};\n")),(0,o.kt)("h3",{id:"6\u786e\u5b9a\u8bbe\u5907\u7c7b\u578b"},"6\u3001\u786e\u5b9a\u8bbe\u5907\u7c7b\u578b"),(0,o.kt)("p",null,"\u5728\u591a\u8bbe\u5907\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u9700\u8981\u533a\u5206\u4e0d\u540c\u8bbe\u5907\u663e\u793a\u4e0d\u540c\u7684\u5185\u5bb9\uff0c\u6837\u5f0f\u7b49\u7b49\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const isMobile = () => {\n  return !!navigator.userAgent.match(\n    /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i\n  );\n};\n")),(0,o.kt)("h3",{id:"7\u5224\u65ad\u8bbe\u5907\u662f\u5b89\u5353\u8fd8\u662fios"},"7\u3001\u5224\u65ad\u8bbe\u5907\u662f\u5b89\u5353\u8fd8\u662fIOS"),(0,o.kt)("p",null,"\u540c\u4e0a\uff0c\u9700\u8981\u533a\u5206\u5b89\u5353\u8fd8\u662fIOS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const isAndroid = () => {\n  return /android/i.test(navigator.userAgent.toLowerCase());\n};\n\nconst isIOS = () => {\n  let reg = /iPhone|iPad|iPod|iOS|Macintosh/i;\n  return reg.test(navigator.userAgent.toLowerCase());\n};\n")),(0,o.kt)("h3",{id:"8\u83b7\u53d6\u6d4f\u89c8\u5668\u7c7b\u578b\u53ca\u5176\u7248\u672c"},"8\u3001\u83b7\u53d6\u6d4f\u89c8\u5668\u7c7b\u578b\u53ca\u5176\u7248\u672c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const getExplorerInfo = () => {\n  let t = navigator.userAgent.toLowerCase();\n  return 0 <= t.indexOf("msie")\n    ? {\n        //ie < 11\n        type: "IE",\n        version: Number(t.match(/msie ([\\d]+)/)[1]),\n      }\n    : !!t.match(/trident\\/.+?rv:(([\\d.]+))/)\n    ? {\n        // ie 11\n        type: "IE",\n        version: 11,\n      }\n    : 0 <= t.indexOf("edge")\n    ? {\n        type: "Edge",\n        version: Number(t.match(/edge\\/([\\d]+)/)[1]),\n      }\n    : 0 <= t.indexOf("firefox")\n    ? {\n        type: "Firefox",\n        version: Number(t.match(/firefox\\/([\\d]+)/)[1]),\n      }\n    : 0 <= t.indexOf("chrome")\n    ? {\n        type: "Chrome",\n        version: Number(t.match(/chrome\\/([\\d]+)/)[1]),\n      }\n    : 0 <= t.indexOf("opera")\n    ? {\n        type: "Opera",\n        version: Number(t.match(/opera.([\\d]+)/)[1]),\n      }\n    : 0 <= t.indexOf("Safari")\n    ? {\n        type: "Safari",\n        version: Number(t.match(/version\\/([\\d]+)/)[1]),\n      }\n    : {\n        type: t,\n        version: -1,\n      };\n};\n')),(0,o.kt)("h3",{id:"9\u8bbe\u7f6ecookies"},"9\u3001\u8bbe\u7f6ecookies"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cookie")," \u7684API\u771f\u5fc3\u6709\u70b9\u96be\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const setCookie = (key, value, expire) => {\n  const d = new Date();\n  d.setDate(d.getDate() + expire);\n  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;\n};\n")),(0,o.kt)("h3",{id:"10\u83b7\u53d6-cookie"},"10\u3001\u83b7\u53d6 cookie"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const getCookie = (key) => {\n  const cookieStr = unescape(document.cookie);\n  const arr = cookieStr.split("; ");\n  let cookieValue = "";\n  for (let i = 0; i < arr.length; i++) {\n    const temp = arr[i].split("=");\n    if (temp[0] === key) {\n      cookieValue = temp[1];\n      break;\n    }\n  }\n  return cookieValue;\n};\n')),(0,o.kt)("h3",{id:"11\u5220\u9664cookies"},"11\u3001\u5220\u9664cookies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const delCookie = (key) => {\n  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;\n};\n")))}m.isMDXComponent=!0}}]);