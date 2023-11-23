"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[2204],{3640:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var c=n(1527),r=n(4054);const t={sidebar_position:2},l="JS \u5b57\u7b26\u4e32\u5e38\u7528\u65b9\u6cd5",o={id:"base/js/jsString",title:"JS \u5b57\u7b26\u4e32\u5e38\u7528\u65b9\u6cd5",description:"\u5173\u4e8eJS\u7684\u4e00\u4e9b\u603b\u7ed3, \u6301\u7eed\u66f4\u65b0\u4e2d\u2026\u2026",source:"@site/docs/base/js/jsString.md",sourceDirName:"base/js",slug:"/base/js/jsString",permalink:"/en/docs/base/js/jsString",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"JS \u57fa\u7840\u77e5\u8bc6",permalink:"/en/docs/base/js/jsBasic"},next:{title:"JS \u5e38\u7528\u904d\u5386\u65b9\u6cd5&\u9ad8\u9636\u51fd\u6570",permalink:"/en/docs/base/js/jsHoc"}},i={},d=[{value:"1.charAt()",id:"1charat",level:3},{value:"2.concat()",id:"2concat",level:3},{value:"3.indexOf()\u3001lastIndexOf()",id:"3indexoflastindexof",level:3},{value:"4.slice()",id:"4slice",level:3},{value:"5.split()",id:"5split",level:3},{value:"6.substr(), substring()",id:"6substr-substring",level:3},{value:"7.match()",id:"7match",level:3},{value:"8.replace()",id:"8replace",level:3},{value:"9.search()",id:"9search",level:3},{value:"10.toLowerCase(),toUpperCase()",id:"10tolowercasetouppercase",level:3},{value:"11.includes(), startsWith(), endsWith()",id:"11includes-startswith-endswith",level:3},{value:"12.repeat()",id:"12repeat",level:3}];function a(e){const s={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"js-\u5b57\u7b26\u4e32\u5e38\u7528\u65b9\u6cd5",children:"JS \u5b57\u7b26\u4e32\u5e38\u7528\u65b9\u6cd5"}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"\u5173\u4e8eJS\u7684\u4e00\u4e9b\u603b\u7ed3, \u6301\u7eed\u66f4\u65b0\u4e2d\u2026\u2026"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"1charat",children:"1.charAt()"}),"\n",(0,c.jsx)(s.p,{children:"\u8fd4\u56de\u6307\u5b9a\u7d22\u5f15\u4f4d\u7f6e\u5904\u7684\u5b57\u7b26\u3002\u7c7b\u4f3c\u4e8e\u6570\u7ec4\u7528\u4e2d\u62ec\u53f7\u83b7\u53d6\u76f8\u5e94\u4e0b\u6807\u4f4d\u7f6e\u7684\u6570\u636e\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:"let str = \"abcdefg\";\nconsole.log(str.charAt(2)); // \u8f93\u51fa 'c'\nconsole.log(str[2]); // \u8f93\u51fa 'c'\n"})}),"\n",(0,c.jsx)(s.h3,{id:"2concat",children:"2.concat()"}),"\n",(0,c.jsx)(s.p,{children:"\u7c7b\u4f3c\u6570\u7ec4\u7684 concat()\uff0c\u7528\u6765\u8fd4\u56de\u4e00\u4e2a\u5408\u5e76\u62fc\u63a5\u4e24\u4e2a\u6216\u4e24\u4e2a\u4ee5\u4e0a\u5b57\u7b26\u4e32\u3002\u539f\u5b57\u7b26\u4e32\u4e0d\u53d8\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:'const str1 = "abcdefg";\nconst str2 = "1234567";\nconst str3 = str1.concat(str2);\nconsole.log(str3); // \u8f93\u51fa \'abcdefg1234567\'\n'})}),"\n",(0,c.jsx)(s.h3,{id:"3indexoflastindexof",children:"3.indexOf()\u3001lastIndexOf()"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"indexOf"}),",\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u5728\u5b57\u7b26\u4e32\u4e2d\u9996\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e,",(0,c.jsx)(s.code,{children:"lastIndexOf"}),"\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u5728\u5b57\u7b26\u4e32\u4e2d\u6700\u540e\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:'const str = "abcdcefcg";\nconsole.log(str.indexOf("c")); // \u8f93\u51fa \'2\'\nconsole.log(str.lastIndexOf("c")); // \u8f93\u51fa \'7\'\n'})}),"\n",(0,c.jsx)(s.h3,{id:"4slice",children:"4.slice()"}),"\n",(0,c.jsx)(s.p,{children:"\u63d0\u53d6\u5b57\u7b26\u4e32\u7684\u7247\u65ad\uff0c\u5e76\u628a\u63d0\u53d6\u7684\u5b57\u7b26\u4e32\u4f5c\u4e3a\u65b0\u7684\u5b57\u7b26\u4e32\u8fd4\u56de\u51fa\u6765\u3002\u539f\u5b57\u7b26\u4e32\u4e0d\u53d8\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:"const str = \"abcdefg\";\nconsole.log(str.slice()); // \u8f93\u51fa 'abcdefg', \u4e0d\u4f20\u9012\u53c2\u6570\u9ed8\u8ba4\u590d\u5236\u6574\u4e2a\u5b57\u7b26\u4e32\nconsole.log(str.slice(1)); // \u8f93\u51fa 'bcdefg',\u4f20\u9012\u4e00\u4e2a\uff0c\u5219\u4e3a\u63d0\u53d6\u7684\u8d77\u70b9\uff0c\u7136\u540e\u5230\u5b57\u7b26\u4e32\u7ed3\u5c3e\nconsole.log(str.slice(2, str.length - 1)); // \u8f93\u51fa'cdef',\u4f20\u9012\u4e24\u4e2a\uff0c\u4e3a\u63d0\u53d6\u7684\u8d77\u59cb\u70b9\u548c\u7ed3\u675f\u70b9\n"})}),"\n",(0,c.jsx)(s.h3,{id:"5split",children:"5.split()"}),"\n",(0,c.jsx)(s.p,{children:"\u4f7f\u7528\u6307\u5b9a\u7684\u5206\u9694\u7b26\u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u591a\u4e2a\u5b50\u5b57\u7b26\u4e32\u6570\u7ec4\u5e76\u8fd4\u56de\uff0c\u539f\u5b57\u7b26\u4e32\u4e0d\u53d8\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:'const str = "A*B*C*D*E*F*G";\nconsole.log(str.split("*")); // \u8f93\u51fa ["A", "B", "C", "D", "E", "F", "G"]\n'})}),"\n",(0,c.jsx)(s.h3,{id:"6substr-substring",children:"6.substr(), substring()"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u7684\u529f\u80fd\u90fd\u662f\u622a\u53d6\u4e00\u4e2a\u5b57\u7b26\u4e32\u7684\u7247\u6bb5\uff0c\u5e76\u8fd4\u56de\u622a\u53d6\u7684\u5b57\u7b26\u4e32\u3002"}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"substr"}),"\u548c",(0,c.jsx)(s.code,{children:"substring"}),"\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u4e0d\u540c\u7684\u5730\u65b9\u5c31\u5728\u4e8e\u53c2\u6570\u4e8c\uff0c",(0,c.jsx)(s.code,{children:"substr"}),"\u7684\u53c2\u6570\u4e8c\u662f\u622a\u53d6\u8fd4\u56de\u51fa\u6765\u7684\u8fd9\u4e2a\u5b57\u7b26\u4e32\u6307\u5b9a\u7684\u957f\u5ea6\uff0c",(0,c.jsx)(s.code,{children:"substring"}),"\u7684\u53c2\u6570\u4e8c\u662f\u622a\u53d6\u8fd4\u56de\u8fd9\u4e2a\u5b57\u7b26\u4e32\u7684\u7ed3\u675f\u70b9\uff0c\u5e76\u4e14\u4e0d\u5305\u542b\u8fd9\u4e2a\u7ed3\u675f\u70b9\u3002\u800c\u5b83\u4eec\u7684\u53c2\u6570\u4e00\uff0c\u90fd\u662f\u4e00\u6837\u7684\u529f\u80fd\uff0c\u622a\u53d6\u7684\u8d77\u59cb\u4f4d\u7f6e\u3002"]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"\u6ce8\u610f\u4e8b\u9879"}),"\uff1a",(0,c.jsx)(s.code,{children:"substr"}),"\u7684\u53c2\u6570\u4e8c\u5982\u679c\u4e3a",(0,c.jsx)(s.code,{children:"0"}),"\u6216\u8005\u8d1f\u6570\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u672a\u586b\u5165\uff0c\u5219\u4f1a\u622a\u53d6\u5230\u5b57\u7b26\u4e32\u7684\u7ed3\u5c3e\u53bb\u3002",(0,c.jsx)(s.code,{children:"substring"}),"\u7684\u53c2\u6570\u4e00\u548c\u53c2\u6570\u4e8c\u4e3a",(0,c.jsx)(s.code,{children:"NAN"}),"\u6216\u8005\u8d1f\u6570\uff0c\u90a3\u4e48\u5b83\u5c06\u88ab\u66ff\u6362\u4e3a",(0,c.jsx)(s.code,{children:"0"}),"\u3002"]}),"\n"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:"const str = \"ABCDEFGHIJKLMN\";\nconsole.log(str.substr(2)); // \u8f93\u51fa 'CDEFGHIJKLMN'\nconsole.log(str.substring(2)); // \u8f93\u51fa 'CDEFGHIJKLMN'\n\nconsole.log(str.substr(2, 9)); // \u8f93\u51fa 'CDEFGHIJK'\nconsole.log(str.substring(2, 9)); // \u8f93\u51fa 'CDEFGHI'\n"})}),"\n",(0,c.jsx)(s.h3,{id:"7match",children:"7.match()"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"match()"}),"\u65b9\u6cd5\u53ef\u5728\u5b57\u7b26\u4e32\u5185\u68c0\u7d22\u6307\u5b9a\u7684\u503c\uff0c\u6216\u627e\u5230\u4e00\u4e2a\u6216\u591a\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5339\u914d\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u8be5\u641c\u7d22\u7ed3\u679c\u7684\u6570\u7ec4\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:'const str = "2018\u5e74\u7ed3\u675f\u4e86\uff0c2019\u5e74\u5f00\u59cb\u4e86\uff0c2020\u5e74\u5c31\u4e5f\u4e0d\u8fdc\u4e86";\nconst reg = /\\d+/g; // \u8fd9\u91cc\u662f\u5b9a\u4e49\u5339\u914d\u89c4\u5219\uff0c\u5339\u914d\u5b57\u7b26\u4e32\u91cc\u76841\u5230\u591a\u4e2a\u6570\u5b57\nconsole.log(str.match(reg)); // \u8f93\u51fa\u7b26\u5408\u5339\u914d\u89c4\u5219\u7684\u5185\u5bb9\uff0c\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de [\'2018\', \'2019\', \'2020\']\nconsole.log(str.match("20")); // \u4e0d\u4f7f\u7528\u6b63\u5219 ["20", index: 0, input: "2018\u5e74\u7ed3\u675f\u4e86\uff0c2019\u5e74\u5f00\u59cb\u4e86"]\n'})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.strong,{children:"\u6ce8\u610f\u4e8b\u9879"}),":\u5982\u679c",(0,c.jsx)(s.code,{children:"match"}),"\u65b9\u6cd5\u6ca1\u6709\u627e\u5230\u5339\u914d\uff0c\u5c06\u8fd4\u56de",(0,c.jsx)(s.code,{children:"null"}),"\u3002\u5982\u679c\u627e\u5230\u5339\u914d\uff0c\u5219 ",(0,c.jsx)(s.code,{children:"match"}),"\u65b9\u6cd5\u4f1a\u628a\u5339\u914d\u5230\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\uff0c\u5982\u679c\u6b63\u5219\u89c4\u5219\u672a\u8bbe\u7f6e\u5168\u5c40\u4fee\u9970\u7b26",(0,c.jsx)(s.code,{children:"g"}),"\uff0c\u5219 ",(0,c.jsx)(s.code,{children:"match"}),"\u65b9\u6cd5\u8fd4\u56de\u7684\u6570\u7ec4\u6709\u4e24\u4e2a\u7279\u6027\uff1a",(0,c.jsx)(s.code,{children:"input"}),"\u548c",(0,c.jsx)(s.code,{children:"index"}),"\u3002",(0,c.jsx)(s.code,{children:"input"}),"\u5c5e\u6027\u5305\u542b\u6574\u4e2a\u88ab\u641c\u7d22\u7684\u5b57\u7b26\u4e32\u3002",(0,c.jsx)(s.code,{children:"index"}),"\u5c5e\u6027\u5305\u542b\u4e86\u5728\u6574\u4e2a\u88ab\u641c\u7d22\u5b57\u7b26\u4e32\u4e2d\u5339\u914d\u7684\u5b50\u5b57\u7b26\u4e32\u7684\u4f4d\u7f6e\u3002"]}),"\n",(0,c.jsx)(s.h3,{id:"8replace",children:"8.replace()"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"replace"}),"\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u53c2\u6570\u4e00\u662f\u9700\u8981\u66ff\u6362\u6389\u7684\u5b57\u7b26\u6216\u8005\u4e00\u4e2a\u6b63\u5219\u7684\u5339\u914d\u89c4\u5219\uff0c\u53c2\u6570\u4e8c\uff0c\u9700\u8981\u66ff\u6362\u8fdb\u53bb\u7684\u5b57\u7b26\uff0c\u4ed4\u5b9e\u9645\u7684\u539f\u7406\u5f53\u4e2d\uff0c\u53c2\u6570\u4e8c\uff0c\u4f60\u53ef\u4ee5\u6362\u6210\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:'const str = "2018\u5e74\u7ed3\u675f\u4e86\uff0c2019\u5e74\u5f00\u59cb\u4e86\uff0c2020\u5e74\u5c31\u4e5f\u4e0d\u8fdc\u4e86";\nconst rex = /\\d+/g; // \u8fd9\u91cc\u662f\u5b9a\u4e49\u5339\u914d\u89c4\u5219\uff0c\u5339\u914d\u5b57\u7b26\u4e32\u91cc\u76841\u5230\u591a\u4e2a\u6570\u5b57\nconst str1 = str.replace(rex, "****");\nconsole.log(str1); // \u8f93\u51fa\uff1a"****\u5e74\u7ed3\u675f\u4e86\uff0c****\u5e74\u5f00\u59cb\u4e86,****\u5e74\u4e5f\u4e0d\u8fdc\u4e86"\nconst str2 = str.replace(rex, function (item) {\n  console.log(arguments); // \u770b\u4e0b\u9762\u7684\u56fe\u7247\n  const arr = ["\u96f6", "\u58f9", "\u8d30", "\u53c1", "\u8086", "\u4f0d", "\u9646", "\u67d2", "\u634c", "\u7396"];\n  let newStr = "";\n  item.split("").map(function (i) {\n    newStr += arr[i];\n  });\n  return newStr;\n});\nconsole.log(str2); // \u8f93\u51fa\uff1a\u8d30\u96f6\u58f9\u634c\u5e74\u7ed3\u675f\u4e86\uff0c\u8d30\u96f6\u58f9\u7396\u5e74\u5f00\u59cb\u4e86,\u8d30\u96f6\u8d30\u96f6\u5e74\u4e5f\u4e0d\u8fdc\u4e86\n'})}),"\n",(0,c.jsx)(s.h3,{id:"9search",children:"9.search()"}),"\n",(0,c.jsxs)(s.p,{children:["\u5728\u76ee\u6807\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22\u4e0e\u6b63\u5219\u89c4\u5219\u76f8\u5339\u914d\u7684\u5b57\u7b26\uff0c\u641c\u7d22\u5230\uff0c\u5219\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5339\u914d\u9879\u5728\u76ee\u6807\u5b57\u7b26\u4e32\u5f53\u4e2d\u7684\u4f4d\u7f6e\uff0c\u6ca1\u6709\u641c\u7d22\u5230\u5219\u8fd4\u56de\u4e00\u4e2a",(0,c.jsx)(s.code,{children:"-1"}),"\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:'const str = "2018\u5e74\u7ed3\u675f\u4e86\uff0c2019\u5e74\u5f00\u59cb\u4e86\uff0c2020\u5e74\u5c31\u4e5f\u4e0d\u8fdc\u4e86";\nconst reg = /\\d+/i; // \u8fd9\u91cc\u662f\u5b9a\u4e49\u5339\u914d\u89c4\u5219,\u5339\u914d\u5b57\u7b26\u4e32\u91cc\u76841\u5230\u591a\u4e2a\u6570\u5b57\nconsole.log(str.search(reg)); // \u8f93\u51fa 0  \u8fd9\u91cc\u641c\u7d22\u5230\u7684\u7b2c\u4e00\u9879\u662f\u4ece\u4f4d\u7f6e0\u5f00\u59cb\u7684\n'})}),"\n",(0,c.jsx)(s.h3,{id:"10tolowercasetouppercase",children:"10.toLowerCase(),toUpperCase()"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"toLowerCase"}),"\u628a\u5b57\u6bcd\u8f6c\u6362\u6210\u5c0f\u5199\uff0c",(0,c.jsx)(s.code,{children:"toUpperCase()"}),"\u5219\u662f\u628a\u5b57\u6bcd\u8f6c\u6362\u6210\u5927\u5199\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:"const str1 = \"abcdefg\";\nconst str2 = \"ABCDEFG\";\nconsole.log(str2.toLowerCase()); // \u8f93\u51fa\uff1a'abcdefg'\nconsole.log(str1.toUpperCase()); // \u8f93\u51fa\uff1a'ABCDEFG'\n"})}),"\n",(0,c.jsx)(s.h3,{id:"11includes-startswith-endswith",children:"11.includes(), startsWith(), endsWith()"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"includes"}),"\u3001",(0,c.jsx)(s.code,{children:"startsWith"}),"\u3001",(0,c.jsx)(s.code,{children:"endsWith"}),"\uff0c",(0,c.jsx)(s.code,{children:"es6"}),"\u7684\u65b0\u589e\u65b9\u6cd5\uff0c",(0,c.jsx)(s.code,{children:"includes"})," \u7528\u6765\u68c0\u6d4b\u76ee\u6807\u5b57\u7b26\u4e32\u5bf9\u8c61\u662f\u5426\u5305\u542b\u67d0\u4e2a\u5b57\u7b26\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c",(0,c.jsx)(s.code,{children:"startsWith"}),"\u7528\u6765\u68c0\u6d4b\u5f53\u524d\u5b57\u7b26\u662f\u5426\u662f\u76ee\u6807\u5b57\u7b26\u4e32\u7684\u8d77\u59cb\u90e8\u5206\uff0c\u76f8\u5bf9\u7684",(0,c.jsx)(s.code,{children:"endwith"}),"\u662f\u7528\u6765\u68c0\u6d4b\u662f\u5426\u662f\u76ee\u6807\u5b57\u7b26\u4e32\u7684\u7ed3\u5c3e\u90e8\u5206\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:'const str = "Excuse me, how do I get to park road?";\nconsole.log(str.includes("how")); // \u8f93\u51fa\uff1atrue\nconsole.log(str.startsWith("Excuse")); // \u8f93\u51fa\uff1atrue\nconsole.log(str.endsWith("?")); // \u8f93\u51fa\uff1atrue\n'})}),"\n",(0,c.jsx)(s.h3,{id:"12repeat",children:"12.repeat()"}),"\n",(0,c.jsx)(s.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\u5bf9\u8c61\uff0c\u65b0\u5b57\u7b26\u4e32\u7b49\u4e8e\u91cd\u590d\u4e86\u6307\u5b9a\u6b21\u6570\u7684\u539f\u59cb\u5b57\u7b26\u4e32\u3002\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u5c31\u662f\u6307\u5b9a\u91cd\u590d\u7684\u6b21\u6570\u3002\u539f\u5b57\u7b26\u4e32\u4e0d\u53d8\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-js",children:"const str = \"http\";\nconst str2 = str.repeat(3);\nconsole.log(str); // \u8f93\u51fa\uff1a'http'\nconsole.log(str2); // \u8f93\u51fa\uff1a'httphttphttp'\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},4054:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>l});var c=n(959);const r={},t=c.createContext(r);function l(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);