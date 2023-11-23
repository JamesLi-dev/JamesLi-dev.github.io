"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[1784],{9073:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var o=s(1527),t=s(4054);const i={sidebar_position:8},r="JS \u6d4f\u89c8\u5668\u76f8\u5173\u65b9\u6cd5\u5c01\u88c5",l={id:"base/js/jsBrowser",title:"JS \u6d4f\u89c8\u5668\u76f8\u5173\u65b9\u6cd5\u5c01\u88c5",description:"1\u3001\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8",source:"@site/docs/base/js/jsBrowser.md",sourceDirName:"base/js",slug:"/base/js/jsBrowser",permalink:"/docs/base/js/jsBrowser",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"js \u5f52\u7eb3\u603b\u7ed3 \u65b9\u6cd5\u5408\u96c6",permalink:"/docs/base/js/jsHighFuncs"},next:{title:"JS \u5c0f\u6280\u5de7",permalink:"/docs/base/js/jsSkill"}},c={},a=[{value:"1\u3001\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8",id:"1\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8",level:3},{value:"2\u3001\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8",id:"2\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8",level:3},{value:"3\u3001\u6eda\u52a8\u5143\u7d20\u5230\u53ef\u89c1\u533a\u57df",id:"3\u6eda\u52a8\u5143\u7d20\u5230\u53ef\u89c1\u533a\u57df",level:3},{value:"4\u3001\u5168\u5c4f\u663e\u793a\u5143\u7d20",id:"4\u5168\u5c4f\u663e\u793a\u5143\u7d20",level:3},{value:"5\u3001\u9000\u51fa\u6d4f\u89c8\u5668\u5168\u5c4f\u72b6\u6001",id:"5\u9000\u51fa\u6d4f\u89c8\u5668\u5168\u5c4f\u72b6\u6001",level:3},{value:"6\u3001\u786e\u5b9a\u8bbe\u5907\u7c7b\u578b",id:"6\u786e\u5b9a\u8bbe\u5907\u7c7b\u578b",level:3},{value:"7\u3001\u5224\u65ad\u8bbe\u5907\u662f\u5b89\u5353\u8fd8\u662fIOS",id:"7\u5224\u65ad\u8bbe\u5907\u662f\u5b89\u5353\u8fd8\u662fios",level:3},{value:"8\u3001\u83b7\u53d6\u6d4f\u89c8\u5668\u7c7b\u578b\u53ca\u5176\u7248\u672c",id:"8\u83b7\u53d6\u6d4f\u89c8\u5668\u7c7b\u578b\u53ca\u5176\u7248\u672c",level:3},{value:"9\u3001\u8bbe\u7f6ecookies",id:"9\u8bbe\u7f6ecookies",level:3},{value:"10\u3001\u83b7\u53d6 cookie",id:"10\u83b7\u53d6-cookie",level:3},{value:"11\u3001\u5220\u9664cookies",id:"11\u5220\u9664cookies",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"js-\u6d4f\u89c8\u5668\u76f8\u5173\u65b9\u6cd5\u5c01\u88c5",children:"JS \u6d4f\u89c8\u5668\u76f8\u5173\u65b9\u6cd5\u5c01\u88c5"}),"\n",(0,o.jsx)(n.h3,{id:"1\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8",children:"1\u3001\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8"}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 window.scrollTo() \u5e73\u6ed1\u6eda\u52a8\u5230\u9875\u9762\u9876\u90e8\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'const scrollToTop = () => {\n  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"2\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8",children:"2\u3001\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8"}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679c\u77e5\u9053\u9875\u9762\u7684\u9ad8\u5ea6\uff0c\u4e5f\u53ef\u4ee5\u5e73\u6ed1\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'const scrollToBottom = () => {\n  window.scrollTo({\n    top: document.documentElement.offsetHeight,\n    left: 0,\n    behavior: "smooth",\n  });\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"3\u6eda\u52a8\u5143\u7d20\u5230\u53ef\u89c1\u533a\u57df",children:"3\u3001\u6eda\u52a8\u5143\u7d20\u5230\u53ef\u89c1\u533a\u57df"}),"\n",(0,o.jsx)(n.p,{children:"\u6211\u4eec\u6709\u65f6\u9700\u8981\u5c06\u5143\u7d20\u6eda\u52a8\u5230\u53ef\u89c1\u533a\u57df\uff0c\u4f7f\u7528 scrollIntoView \u5c31\u8db3\u591f\u4e86\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'const smoothScroll = (element) => {\n  element.scrollIntoView({\n    behavior: "smooth",\n  });\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"4\u5168\u5c4f\u663e\u793a\u5143\u7d20",children:"4\u3001\u5168\u5c4f\u663e\u793a\u5143\u7d20"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const goToFullScreen = (element) => {\n  element = element || document.body;\n  if (element.requestFullscreen) {\n    element.requestFullscreen();\n  } else if (element.mozRequestFullScreen) {\n    element.mozRequestFullScreen();\n  } else if (element.msRequestFullscreen) {\n    element.msRequestFullscreen();\n  } else if (element.webkitRequestFullscreen) {\n    element.webkitRequestFullScreen();\n  }\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"5\u9000\u51fa\u6d4f\u89c8\u5668\u5168\u5c4f\u72b6\u6001",children:"5\u3001\u9000\u51fa\u6d4f\u89c8\u5668\u5168\u5c4f\u72b6\u6001"}),"\n",(0,o.jsxs)(n.p,{children:["\u548c ",(0,o.jsx)(n.code,{children:"4. \u5168\u5c4f\u663e\u793a\u5143\u7d20"})," \u4e00\u5757\u4f7f\u7528"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const goExitFullscreen = () => {\n  if (document.exitFullscreen) {\n    document.exitFullscreen();\n  } else if (document.msExitFullscreen) {\n    document.msExitFullscreen();\n  } else if (document.mozCancelFullScreen) {\n    document.mozCancelFullScreen();\n  } else if (document.webkitExitFullscreen) {\n    document.webkitExitFullscreen();\n  }\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"6\u786e\u5b9a\u8bbe\u5907\u7c7b\u578b",children:"6\u3001\u786e\u5b9a\u8bbe\u5907\u7c7b\u578b"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u591a\u8bbe\u5907\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u9700\u8981\u533a\u5206\u4e0d\u540c\u8bbe\u5907\u663e\u793a\u4e0d\u540c\u7684\u5185\u5bb9\uff0c\u6837\u5f0f\u7b49\u7b49\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const isMobile = () => {\n  return !!navigator.userAgent.match(\n    /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i\n  );\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"7\u5224\u65ad\u8bbe\u5907\u662f\u5b89\u5353\u8fd8\u662fios",children:"7\u3001\u5224\u65ad\u8bbe\u5907\u662f\u5b89\u5353\u8fd8\u662fIOS"}),"\n",(0,o.jsx)(n.p,{children:"\u540c\u4e0a\uff0c\u9700\u8981\u533a\u5206\u5b89\u5353\u8fd8\u662fIOS"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const isAndroid = () => {\n  return /android/i.test(navigator.userAgent.toLowerCase());\n};\n\nconst isIOS = () => {\n  let reg = /iPhone|iPad|iPod|iOS|Macintosh/i;\n  return reg.test(navigator.userAgent.toLowerCase());\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"8\u83b7\u53d6\u6d4f\u89c8\u5668\u7c7b\u578b\u53ca\u5176\u7248\u672c",children:"8\u3001\u83b7\u53d6\u6d4f\u89c8\u5668\u7c7b\u578b\u53ca\u5176\u7248\u672c"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'const getExplorerInfo = () => {\n  let t = navigator.userAgent.toLowerCase();\n  return 0 <= t.indexOf("msie")\n    ? {\n        //ie < 11\n        type: "IE",\n        version: Number(t.match(/msie ([\\d]+)/)[1]),\n      }\n    : !!t.match(/trident\\/.+?rv:(([\\d.]+))/)\n    ? {\n        // ie 11\n        type: "IE",\n        version: 11,\n      }\n    : 0 <= t.indexOf("edge")\n    ? {\n        type: "Edge",\n        version: Number(t.match(/edge\\/([\\d]+)/)[1]),\n      }\n    : 0 <= t.indexOf("firefox")\n    ? {\n        type: "Firefox",\n        version: Number(t.match(/firefox\\/([\\d]+)/)[1]),\n      }\n    : 0 <= t.indexOf("chrome")\n    ? {\n        type: "Chrome",\n        version: Number(t.match(/chrome\\/([\\d]+)/)[1]),\n      }\n    : 0 <= t.indexOf("opera")\n    ? {\n        type: "Opera",\n        version: Number(t.match(/opera.([\\d]+)/)[1]),\n      }\n    : 0 <= t.indexOf("Safari")\n    ? {\n        type: "Safari",\n        version: Number(t.match(/version\\/([\\d]+)/)[1]),\n      }\n    : {\n        type: t,\n        version: -1,\n      };\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"9\u8bbe\u7f6ecookies",children:"9\u3001\u8bbe\u7f6ecookies"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"cookie"})," \u7684API\u771f\u5fc3\u6709\u70b9\u96be\u7528"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const setCookie = (key, value, expire) => {\n  const d = new Date();\n  d.setDate(d.getDate() + expire);\n  document.cookie = `${key}=${value};expires=${d.toUTCString()}`;\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"10\u83b7\u53d6-cookie",children:"10\u3001\u83b7\u53d6 cookie"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'const getCookie = (key) => {\n  const cookieStr = unescape(document.cookie);\n  const arr = cookieStr.split("; ");\n  let cookieValue = "";\n  for (let i = 0; i < arr.length; i++) {\n    const temp = arr[i].split("=");\n    if (temp[0] === key) {\n      cookieValue = temp[1];\n      break;\n    }\n  }\n  return cookieValue;\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"11\u5220\u9664cookies",children:"11\u3001\u5220\u9664cookies"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const delCookie = (key) => {\n  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4054:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var o=s(959);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);