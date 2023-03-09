"use strict";(self.webpackChunktorli_website=self.webpackChunktorli_website||[]).push([[6553],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,ah:()=>c,kt:()=>b});var g=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(t);e&&(g=g.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,g)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,g,i=function(t,e){if(null==t)return{};var n,g,i={},r=Object.keys(t);for(g=0;g<r.length;g++)n=r[g],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(g=0;g<r.length;g++)n=r[g],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=g.createContext({}),c=function(t){var e=g.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=c(t.components);return g.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return g.createElement(g.Fragment,{},e)}},u=g.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,l=o(t,["components","mdxType","originalType","parentName"]),p=c(n),u=i,b=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return n?g.createElement(b,a(a({ref:e},l),{},{components:n})):g.createElement(b,a({ref:e},l))}));function b(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:i,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return g.createElement.apply(null,a)}return g.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7822:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var g=n(7462),i=(n(7294),n(3905));const r={sidebar_position:5},a="Git",o={unversionedId:"base/git",id:"base/git",title:"Git",description:"\u5173\u4e8eGit\u7684\u4e00\u4e9b\u603b\u7ed3, \u6301\u7eed\u66f4\u65b0\u4e2d\u2026\u2026",source:"@site/docs/base/git.md",sourceDirName:"base",slug:"/base/git",permalink:"/en/docs/base/git",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"TS \u6cdb\u578b",permalink:"/en/docs/base/TS/tsGenerics"},next:{title:"\u6846\u67b6",permalink:"/en/docs/category/\u6846\u67b6"}},s={},c=[{value:"git \u914d\u7f6e",id:"git-\u914d\u7f6e",level:2},{value:"git \u5e38\u7528\u547d\u4ee4",id:"git-\u5e38\u7528\u547d\u4ee4",level:2},{value:"git \u5feb\u6377\u6307\u4ee4\u8bbe\u7f6e",id:"git-\u5feb\u6377\u6307\u4ee4\u8bbe\u7f6e",level:2}],l={toc:c},p="wrapper";function m(t){let{components:e,...n}=t;return(0,i.kt)(p,(0,g.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git"},"Git"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5173\u4e8eGit\u7684\u4e00\u4e9b\u603b\u7ed3, \u6301\u7eed\u66f4\u65b0\u4e2d\u2026\u2026")),(0,i.kt)("h2",{id:"git-\u914d\u7f6e"},"git \u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git"},'\u914d\u7f6eGit\n# \u914d\u7f6e\u5168\u5c40\u7528\u6237\n$ git config --global user.name "\u7528\u6237\u540d"\n$ git config --global user.email "git\u8d26\u53f7"\n\n# \u5220\u9664\u5168\u5c40\u914d\u7f6e\n$ git config --global --unset alias.xxx\n$ git config --global --unset user.xxx\n\n\u67e5\u770bGit\n# \u67e5\u770b\u7cfb\u7edf\u914d\u7f6e\n$ git config --list\n\n# \u67e5\u770b\u7528\u6237\u914d\u7f6e\n$ cat ~/.gitconfig\n\n# \u67e5\u770b\u5f53\u524d\u9879\u76ee\u7684 git \u914d\u7f6e\n$ cat .git/config\n\n# \u67e5\u770b\u672c\u5730 git \u547d\u4ee4\u5386\u53f2\n$ git reflog\n\n# git \u4e2d D \u5411\u4e0b\u7ffb\u4e00\u884c  F \u5411\u4e0b\u7ffb\u9875  B \u5411\u4e0a\u7ffb\u9875  Q \u9000\u51fa\n\n')),(0,i.kt)("h2",{id:"git-\u5e38\u7528\u547d\u4ee4"},"git \u5e38\u7528\u547d\u4ee4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git"},'\nGit \u5e38\u7528\u547d\u4ee4\n# \u67e5\u770b\u5de5\u4f5c\u533a\u548c\u6682\u5b58\u533a\u7684\u72b6\u6001\n$ git status\n\n# \u5c06\u5de5\u4f5c\u533a\u7684\u6587\u4ef6\u63d0\u4ea4\u5230\u6682\u5b58\u533a\n$ git add fileName OR git add *\n\n# \u63d0\u4ea4\u5230\u672c\u5730\u4ed3\u5e93\n$ git commit -m "\u672c\u6b21\u63d0\u4ea4\u8bf4\u660e"\n\n\n# \u5c06\u672c\u5730\u5206\u652f\u548c\u8fdc\u7a0b\u5206\u652f\u8fdb\u884c\u5173\u8054\n$ git push -u origin branchName\n\n# \u5c06\u672c\u5730\u4ed3\u5e93\u7684\u6587\u4ef6\u63a8\u9001\u5230\u8fdc\u7a0b\u5206\u652f\n$ git push\n\n# \u62c9\u53d6\u8fdc\u7a0b\u5206\u652f\u7684\u4ee3\u7801\n$ git pull origin branchName\n\n# \u5408\u5e76\u5206\u652f\n$ git merge branchName\n\n# \u67e5\u770b\u672c\u5730\u62e5\u6709\u54ea\u4e9b\u5206\u652f\n$ git branch\n\n# \u67e5\u770b\u6240\u6709\u5206\u652f\uff08\u5305\u62ec\u8fdc\u7a0b\u5206\u652f\u548c\u672c\u5730\u5206\u652f\uff09\n$ git branch -a\n\n# \u5207\u6362\u5206\u652f\n$ git checkout branchName\n\n# \u4e34\u65f6\u5c06\u5de5\u4f5c\u533a\u6587\u4ef6\u7684\u4fee\u6539\u4fdd\u5b58\u81f3\u5806\u6808\u4e2d\n$ git stash\n\n# \u5c06\u4e4b\u524d\u4fdd\u5b58\u81f3\u5806\u6808\u4e2d\u7684\u6587\u4ef6\u53d6\u51fa\u6765\n$ git stash pop\n\n# \u5206\u652f\u521b\u5efa\u540c\u6b65\n$ git push --set-upstream origin branch_name \n\n# \u8fdc\u7a0b\u521b\u5efa \u4e0e \u672c\u5730\u5bf9\u7740\n$ git checkout --track origin/branch_name\n$ git checkout --track origin/20200710-pre\n\n# \u521b\u5efa\u672c\u5730\u5206\u652f \u5e76\u5207\u6362\n$ git checkout -b branch__name\n\n# \u63d0\u4ea4\u672c\u5730\u5206\u652f\u5230\u8fdc\u7a0b\u5206\u652f\u4e0a\n$ git push origin branch__name\n\n\n--soft \u53c2\u6570\u7528\u4e8e\u56de\u9000\u5230\u67d0\u4e2a\u7248\u672c\n\ngit reset --soft HEAD\n\n--hard \u53c2\u6570\u64a4\u9500\u5de5\u4f5c\u533a\u4e2d\u6240\u6709\u672a\u63d0\u4ea4\u7684\u4fee\u6539\u5185\u5bb9\uff0c\u5c06\u6682\u5b58\u533a\u4e0e\u5de5\u4f5c\u533a\u90fd\u56de\u5230\u4e0a\u4e00\u6b21\u7248\u672c\uff0c\u5e76\u5220\u9664\u4e4b\u524d\u7684\u6240\u6709\u4fe1\u606f\u63d0\u4ea4\n\ngit reset --hard HEAD\n\n$ git reset \u2013hard HEAD~3  # \u56de\u9000\u4e0a\u4e0a\u4e0a\u4e00\u4e2a\u7248\u672c  \n$ git reset \u2013hard bae128  # \u56de\u9000\u5230\u67d0\u4e2a\u7248\u672c\u56de\u9000\u70b9\u4e4b\u524d\u7684\u6240\u6709\u4fe1\u606f\u3002 \n$ git reset --hard origin/master    # \u5c06\u672c\u5730\u7684\u72b6\u6001\u56de\u9000\u5230\u548c\u8fdc\u7a0b\u7684\u4e00\u6837 \n\n')),(0,i.kt)("h2",{id:"git-\u5feb\u6377\u6307\u4ee4\u8bbe\u7f6e"},"git \u5feb\u6377\u6307\u4ee4\u8bbe\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-git"},"git config --global -e \u6216\u8005 cd ~ \u7136\u540e vi ./.gitconfig \u8fdb\u884c\u7f16\u8f91\uff0c\u5c06\u4e00\u4e0b\u7f29\u5199\u653e\u5230\u3010user\u3011\u4e0b\n\n\u7c98\u8d34\u4e4b\u540e\u4fdd\u5b58\uff0c\u5f00\u542f\u65b0\u7684\u547d\u4ee4\u884c\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\uff0c\u4f8b\u5982\uff1a\n\n`gst` \u547d\u4ee4\u884c\u8f93\u5165\u4e4b\u540e\uff0c\u5c31\u4f1a\u51fa\u73b0\u5f53\u524d\u9879\u76ee\u4e0b\u7684git status\u3002\n\n\n- \u4ee5\u4e0b\u4e3a\u7c98\u8d34\u5185\u5bb9\uff1a\ng = 'git'\nga = 'git add'\ngaa='git add --all'\ngapa='git add --patch'\ngb='git branch'\ngba='git branch -a'\ngbl='git blame -b -w'\ngbnm='git branch --no-merged'\ngbr='git branch --remote'\ngbs='git bisect'\ngbsb='git bisect bad'\ngbsg='git bisect good'\ngbsr='git bisect reset'\ngbss='git bisect start'\ngc='git commit -v'\ngca='git commit -v -a'\ngcam='git commit -a -m'\ngcb='git checkout -b'\ngcf='git config --list'\ngcl='git clone --recursive'\ngclean='git clean -fd'\ngpristine='git reset --hard && git clean -dfx'\ngcm='git checkout master'\ngcmsg='git commit -m'\ngco='git checkout'\ngcp='git cherry-pick'\ngcs='git commit -S'\ngd='git diff'\ngdca='git diff --cached'\ngdct='git describe --tags `git rev-list --tags --max-count=1`'\ngdt='git diff-tree --no-commit-id --name-only -r'\ngdw='git diff --word-diff'\ngf='git fetch'\ngfa='git fetch --all --prune'\ngl='git pull'\nglg='git log --stat'\nglgp='git log --stat -p'\nglgg='git log --graph'\nglgga='git log --graph --decorate --all'\nglgm='git log --graph --max-count=10'\nglo='git log --oneline --decorate'\nglol=\"git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit\"\nglola=\"git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --all\"\nglog='git log --oneline --decorate --graph'\ngloga='git log --oneline --decorate --graph --all'\ngm='git merge'\ngmom='git merge origin/master'\ngmt='git mergetool --no-prompt'\ngmtvim='git mergetool --no-prompt --tool=vimdiff'\ngmum='git merge upstream/master'\ngp='git push'\ngpd='git push --dry-run'\ngpoat='git push origin --all && git push origin --tags'\ngpu='git push upstream'\ngpv='git push -v'\ngr='git remote'\ngra='git remote add'\ngrb='git rebase'\ngrba='git rebase --abort'\ngrbc='git rebase --continue'\ngrbi='git rebase -i'\ngrbm='git rebase master'\ngrbs='git rebase --skip'\ngrh='git reset HEAD'\ngrhh='git reset HEAD --hard'\ngrmv='git remote rename'\ngrrm='git remote remove'\ngrset='git remote set-url'\ngrt='cd $(git rev-parse --show-toplevel || echo \".\")'\ngru='git reset --'\ngrup='git remote update'\ngrv='git remote -v'\ngsb='git status -sb'\ngsd='git svn dcommit'\ngsi='git submodule init'\ngsps='git show --pretty=short --show-signature'\ngsr='git svn rebase'\ngss='git status -s'\ngst='git status'\ngsta='git stash save'\ngstaa='git stash apply'\ngstd='git stash drop'\ngstl='git stash list'\ngstp='git stash pop'\ngsts='git stash show --text'\ngsu='git submodule update'\ngup='git pull --rebase'\n")))}m.isMDXComponent=!0}}]);