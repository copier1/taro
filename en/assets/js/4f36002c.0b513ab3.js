"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[40275],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(n),u=r,g=k["".concat(o,".").concat(u)]||k[u]||c[u]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},58281:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],p={title:"Taro.navigateToMiniProgram(option)",sidebar_label:"navigateToMiniProgram"},o=void 0,d={unversionedId:"apis/navigate/navigateToMiniProgram",id:"apis/navigate/navigateToMiniProgram",isDocsHomePage:!1,title:"Taro.navigateToMiniProgram(option)",description:"\u6253\u5f00\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f",source:"@site/docs/apis/navigate/navigateToMiniProgram.md",sourceDirName:"apis/navigate",slug:"/apis/navigate/navigateToMiniProgram",permalink:"/taro/en/docs/next/apis/navigate/navigateToMiniProgram",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/navigate/navigateToMiniProgram.md",tags:[],version:"current",frontMatter:{title:"Taro.navigateToMiniProgram(option)",sidebar_label:"navigateToMiniProgram"},sidebar:"API",previous:{title:"openEmbeddedMiniProgram",permalink:"/taro/en/docs/next/apis/navigate/openEmbeddedMiniProgram"},next:{title:"navigateBackMiniProgram",permalink:"/taro/en/docs/next/apis/navigate/navigateBackMiniProgram"}},m=[{value:"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c",id:"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c",children:[],level:5},{value:"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c",id:"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c",children:[],level:5},{value:"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7 10 \u4e2a",id:"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7-10-\u4e2a",children:[],level:5},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"EnvVersion",id:"envversion",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],c={toc:m};function k(e){var t=e.components,p=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6253\u5f00\u53e6\u4e00\u4e2a\u5c0f\u7a0b\u5e8f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u9650\u5236")),(0,i.kt)("h5",{id:"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c"},"\u9700\u8981\u7528\u6237\u89e6\u53d1\u8df3\u8f6c"),(0,i.kt)("p",null,"\u4ece 2.3.0 \u7248\u672c\u5f00\u59cb\uff0c\u82e5\u7528\u6237\u672a\u70b9\u51fb\u5c0f\u7a0b\u5e8f\u9875\u9762\u4efb\u610f\u4f4d\u7f6e\uff0c\u5219\u5f00\u53d1\u8005\u5c06\u65e0\u6cd5\u8c03\u7528\u6b64\u63a5\u53e3\u81ea\u52a8\u8df3\u8f6c\u81f3\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u3002"),(0,i.kt)("h5",{id:"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c"},"\u9700\u8981\u7528\u6237\u786e\u8ba4\u8df3\u8f6c"),(0,i.kt)("p",null,"\u4ece 2.3.0 \u7248\u672c\u5f00\u59cb\uff0c\u5728\u8df3\u8f6c\u81f3\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u524d\uff0c\u5c06\u7edf\u4e00\u589e\u52a0\u5f39\u7a97\uff0c\u8be2\u95ee\u662f\u5426\u8df3\u8f6c\uff0c\u7528\u6237\u786e\u8ba4\u540e\u624d\u53ef\u4ee5\u8df3\u8f6c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u3002\u5982\u679c\u7528\u6237\u70b9\u51fb\u53d6\u6d88\uff0c\u5219\u56de\u8c03 ",(0,i.kt)("inlineCode",{parentName:"p"},"fail cancel"),"\u3002"),(0,i.kt)("h5",{id:"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7-10-\u4e2a"},"\u6bcf\u4e2a\u5c0f\u7a0b\u5e8f\u53ef\u8df3\u8f6c\u7684\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u6570\u91cf\u9650\u5236\u4e3a\u4e0d\u8d85\u8fc7 10 \u4e2a"),(0,i.kt)("p",null,"\u4ece 2.4.0 \u7248\u672c\u4ee5\u53ca\u6307\u5b9a\u65e5\u671f\uff08\u5177\u4f53\u5f85\u5b9a\uff09\u5f00\u59cb\uff0c\u5f00\u53d1\u8005\u63d0\u4ea4\u65b0\u7248\u5c0f\u7a0b\u5e8f\u4ee3\u7801\u65f6\uff0c\u5982\u4f7f\u7528\u4e86\u8df3\u8f6c\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u529f\u80fd\uff0c\u5219\u9700\u8981\u5728\u4ee3\u7801\u914d\u7f6e\u4e2d\u58f0\u660e\u5c06\u8981\u8df3\u8f6c\u7684\u5c0f\u7a0b\u5e8f\u540d\u5355\uff0c\u9650\u5b9a\u4e0d\u8d85\u8fc7 10 \u4e2a\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u901a\u8fc7\u5ba1\u6838\u3002\u8be5\u540d\u5355\u53ef\u5728\u53d1\u5e03\u65b0\u7248\u65f6\u66f4\u65b0\uff0c\u4e0d\u652f\u6301\u52a8\u6001\u4fee\u6539\u3002\u914d\u7f6e\u65b9\u6cd5\u8be6\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"},"\u5c0f\u7a0b\u5e8f\u5168\u5c40\u914d\u7f6e"),"\u3002\u8c03\u7528\u6b64\u63a5\u53e3\u65f6\uff0c\u6240\u8df3\u8f6c\u7684 appId \u5fc5\u987b\u5728\u914d\u7f6e\u5217\u8868\u4e2d\uff0c\u5426\u5219\u56de\u8c03 ",(0,i.kt)("inlineCode",{parentName:"p"},'fail appId "${appId}" is not in navigateToMiniProgramAppIdList'),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5173\u4e8e\u8c03\u8bd5")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u5f00\u53d1\u8005\u5de5\u5177\u4e0a\u8c03\u7528\u6b64 API \u5e76\u4e0d\u4f1a\u771f\u5b9e\u7684\u8df3\u8f6c\u5230\u53e6\u5916\u7684\u5c0f\u7a0b\u5e8f\uff0c\u4f46\u662f\u5f00\u53d1\u8005\u5de5\u5177\u4f1a\u6821\u9a8c\u672c\u6b21\u8c03\u7528\u8df3\u8f6c\u662f\u5426\u6210\u529f\u3002",(0,i.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#%E8%B7%B3%E8%BD%AC%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B0%83%E8%AF%95%E6%94%AF%E6%8C%81"},"\u8be6\u60c5")),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u5de5\u5177\u4e0a\u652f\u6301\u88ab\u8df3\u8f6c\u7684\u5c0f\u7a0b\u5e8f\u5904\u7406\u63a5\u6536\u53c2\u6570\u7684\u8c03\u8bd5\u3002",(0,i.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#%E8%B7%B3%E8%BD%AC%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B0%83%E8%AF%95%E6%94%AF%E6%8C%81"},"\u8be6\u60c5"))),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"option"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"appId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8981\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f appId")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6253\u5f00\u7684\u9875\u9762\u8def\u5f84\uff0c\u5982\u679c\u4e3a\u7a7a\u5219\u6253\u5f00\u9996\u9875\u3002path \u4e2d ? \u540e\u9762\u7684\u90e8\u5206\u4f1a\u6210\u4e3a query\uff0c\u5728\u5c0f\u7a0b\u5e8f\u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"App.onLaunch"),"\u3001",(0,i.kt)("inlineCode",{parentName:"td"},"App.onShow")," \u548c ",(0,i.kt)("inlineCode",{parentName:"td"},"Page.onLoad")," \u7684\u56de\u8c03\u51fd\u6570\u6216\u5c0f\u6e38\u620f\u7684 ",(0,i.kt)("a",{parentName:"td",href:"#"},"Taro.onShow")," \u56de\u8c03\u51fd\u6570\u3001",(0,i.kt)("a",{parentName:"td",href:"/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync"},"Taro.getLaunchOptionsSync"),' \u4e2d\u53ef\u4ee5\u83b7\u53d6\u5230 query \u6570\u636e\u3002\u5bf9\u4e8e\u5c0f\u6e38\u620f\uff0c\u53ef\u4ee5\u53ea\u4f20\u5165 query \u90e8\u5206\uff0c\u6765\u5b9e\u73b0\u4f20\u53c2\u6548\u679c\uff0c\u5982\uff1a\u4f20\u5165 "?foo=bar"\u3002')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"extraData"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u4f20\u9012\u7ed9\u76ee\u6807\u5c0f\u7a0b\u5e8f\u7684\u6570\u636e\uff0c\u76ee\u6807\u5c0f\u7a0b\u5e8f\u53ef\u5728 ",(0,i.kt)("inlineCode",{parentName:"td"},"App.onLaunch"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"td"},"App.onShow")," \u4e2d\u83b7\u53d6\u5230\u8fd9\u4efd\u6570\u636e\u3002\u5982\u679c\u8df3\u8f6c\u7684\u662f\u5c0f\u6e38\u620f\uff0c\u53ef\u4ee5\u5728 ",(0,i.kt)("a",{parentName:"td",href:"#"},"Taro.onShow"),"\u3001",(0,i.kt)("a",{parentName:"td",href:"/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync"},"Taro.getLaunchOptionsSync")," \u4e2d\u53ef\u4ee5\u83b7\u53d6\u5230\u8fd9\u4efd\u6570\u636e\u6570\u636e\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"envVersion"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyof EnvVersion")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8981\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f\u7248\u672c\u3002\u4ec5\u5728\u5f53\u524d\u5c0f\u7a0b\u5e8f\u4e3a\u5f00\u53d1\u7248\u6216\u4f53\u9a8c\u7248\u65f6\u6b64\u53c2\u6570\u6709\u6548\u3002\u5982\u679c\u5f53\u524d\u5c0f\u7a0b\u5e8f\u662f\u6b63\u5f0f\u7248\uff0c\u5219\u6253\u5f00\u7684\u5c0f\u7a0b\u5e8f\u5fc5\u5b9a\u662f\u6b63\u5f0f\u7248\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"shortLink"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5c0f\u7a0b\u5e8f\u94fe\u63a5\uff0c\u5f53\u4f20\u9012\u8be5\u53c2\u6570\u540e\uff0c\u53ef\u4ee5\u4e0d\u4f20 appId \u548c path\u3002\u94fe\u63a5\u53ef\u4ee5\u901a\u8fc7\u3010\u5c0f\u7a0b\u5e8f\u83dc\u5355\u3011->\u3010\u590d\u5236\u94fe\u63a5\u3011\u83b7\u53d6\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"success"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fail"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"complete"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,i.kt)("h3",{id:"envversion"},"EnvVersion"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"develop"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u7248")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"trial"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4f53\u9a8c\u7248")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"release"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6b63\u5f0f\u7248")))),(0,i.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.navigateToMiniProgram({\n  appId: '',\n  path: 'page/index/index?id=123',\n  extraData: {\n    foo: 'bar'\n  },\n  envVersion: 'develop',\n  success: function(res) {\n    // \u6253\u5f00\u6210\u529f\n  }\n})\n")))}k.isMDXComponent=!0},5030:function(e,t,n){t.Z=n.p+"assets/images/h5-ae5be0f8628571becb8a6f3127998977.png"},73555:function(e,t,n){t.Z=n.p+"assets/images/rn-4d55b8ea270355e8ec2284856cfc71e8.png"},16710:function(e,t){t.Z="data:image/png;base64,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"}}]);