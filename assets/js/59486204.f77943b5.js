"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[16799],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),c=m(a),N=r,u=c["".concat(d,".").concat(N)]||c[N]||k[N]||l;return a?n.createElement(u,i(i({ref:e},o),{},{components:a})):n.createElement(u,i({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},51259:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return o},default:function(){return c}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],p={title:"Taro.canvasToTempFilePath(option, component)",sidebar_label:"canvasToTempFilePath"},d=void 0,m={unversionedId:"apis/canvas/canvasToTempFilePath",id:"apis/canvas/canvasToTempFilePath",isDocsHomePage:!1,title:"Taro.canvasToTempFilePath(option, component)",description:"\u628a\u5f53\u524d\u753b\u5e03\u6307\u5b9a\u533a\u57df\u7684\u5185\u5bb9\u5bfc\u51fa\u751f\u6210\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247\u3002\u5728 draw() \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002",source:"@site/docs/apis/canvas/canvasToTempFilePath.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/canvasToTempFilePath",permalink:"/taro/docs/next/apis/canvas/canvasToTempFilePath",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/canvas/canvasToTempFilePath.md",tags:[],version:"current",frontMatter:{title:"Taro.canvasToTempFilePath(option, component)",sidebar_label:"canvasToTempFilePath"},sidebar:"API",previous:{title:"createCanvasContext",permalink:"/taro/docs/next/apis/canvas/createCanvasContext"},next:{title:"canvasPutImageData",permalink:"/taro/docs/next/apis/canvas/canvasPutImageData"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3},{value:"FileType",id:"filetype",children:[],level:3},{value:"CanvasProps",id:"canvasprops",children:[{value:"onErrorEventDetail",id:"onerroreventdetail",children:[],level:4}],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],k={toc:o};function c(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u628a\u5f53\u524d\u753b\u5e03\u6307\u5b9a\u533a\u57df\u7684\u5185\u5bb9\u5bfc\u51fa\u751f\u6210\u6307\u5b9a\u5927\u5c0f\u7684\u56fe\u7247\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"draw()")," \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Bug & Tip\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"tip"),": \u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"draw")," \u56de\u8c03\u91cc\u8c03\u7528\u8be5\u65b9\u6cd5\u624d\u80fd\u4fdd\u8bc1\u56fe\u7247\u5bfc\u51fa\u6210\u529f\u3002")),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option, component?: TaroGeneral.IAnyObject) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"component"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\uff0c\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\u7684this\uff0c\u4ee5\u64cd\u4f5c\u7ec4\u4ef6\u5185 ",(0,l.kt)("a",{parentName:"td",href:"/docs/components/canvas/canvas"},"canvas")," \u7ec4\u4ef6")))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"canvas"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CanvasProps")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u753b\u5e03\u6807\u8bc6\uff0c\u4f20\u5165 ",(0,l.kt)("a",{parentName:"td",href:"/docs/components/canvas/canvas"},"canvas"),' \u7ec4\u4ef6\u5b9e\u4f8b \uff08canvas type="2d" \u65f6\u4f7f\u7528\u8be5\u5c5e\u6027\uff09\u3002')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"canvasId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u753b\u5e03\u6807\u8bc6\uff0c\u4f20\u5165 ",(0,l.kt)("a",{parentName:"td",href:"/docs/components/canvas/canvas"},"canvas")," \u7ec4\u4ef6\u7684 canvas-id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"quality"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684\u8d28\u91cf\uff0c\u76ee\u524d\u4ec5\u5bf9 jpg \u6709\u6548\u3002\u53d6\u503c\u8303\u56f4\u4e3a (0, 1]\uff0c\u4e0d\u5728\u8303\u56f4\u5185\u65f6\u5f53\u4f5c 1.0 \u5904\u7406\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destHeight"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u7684\u56fe\u7247\u7684\u9ad8\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destWidth"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u7684\u56fe\u7247\u7684\u5bbd\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileType"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof FileType")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},'"png"')),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u6587\u4ef6\u7684\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u9ad8\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5bbd\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5de6\u4e0a\u89d2\u6a2a\u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u7684\u753b\u5e03\u533a\u57df\u7684\u5de6\u4e0a\u89d2\u7eb5\u5750\u6807")))),(0,l.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tempFilePath"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u6587\u4ef6\u7684\u4e34\u65f6\u8def\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u7ed3\u679c")))),(0,l.kt)("h3",{id:"filetype"},"FileType"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jpg"),(0,l.kt)("td",{parentName:"tr",align:null},"jpg \u56fe\u7247")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"png"),(0,l.kt)("td",{parentName:"tr",align:null},"png \u56fe\u7247")))),(0,l.kt)("h3",{id:"canvasprops"},"CanvasProps"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a canvas \u7c7b\u578b\uff0c\u652f\u6301 2d \u548c webgl")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"canvasId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"canvas \u7ec4\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u82e5\u6307\u5b9a\u4e86 type \u5219\u65e0\u9700\u518d\u6307\u5b9a\u8be5\u5c5e\u6027")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableScroll"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u5728 canvas \u4e2d\u79fb\u52a8\u65f6\u4e14\u6709\u7ed1\u5b9a\u624b\u52bf\u4e8b\u4ef6\u65f6\uff0c\u7981\u6b62\u5c4f\u5e55\u6eda\u52a8\u4ee5\u53ca\u4e0b\u62c9\u5237\u65b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onTouchStart"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CommonEventFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u5f00\u59cb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onTouchMove"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CommonEventFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onTouchEnd"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CommonEventFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u7ed3\u675f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onTouchCancel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CommonEventFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u6307\u89e6\u6478\u52a8\u4f5c\u88ab\u6253\u65ad\uff0c\u5982\u6765\u7535\u63d0\u9192\uff0c\u5f39\u7a97")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onLongTap"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CommonEventFunction")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u624b\u6307\u957f\u6309 500ms \u4e4b\u540e\u89e6\u53d1\uff0c\u89e6\u53d1\u4e86\u957f\u6309\u4e8b\u4ef6\u540e\u8fdb\u884c\u79fb\u52a8\u4e0d\u4f1a\u89e6\u53d1\u5c4f\u5e55\u7684\u6eda\u52a8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onError"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.CommonEventFunction<onErrorEventDetail>")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u53d1\u751f\u9519\u8bef\u65f6\u89e6\u53d1 error \u4e8b\u4ef6\uff0cdetail = {errMsg: 'something wrong'}")))),(0,l.kt)("h4",{id:"onerroreventdetail"},"onErrorEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.canvasToTempFilePath({\n  x: 100,\n  y: 200,\n  width: 50,\n  height: 50,\n  destWidth: 100,\n  destHeight: 100,\n  canvasId: 'myCanvas',\n  success: function (res) {\n    console.log(res.tempFilePath)\n  }\n})\n")))}c.isMDXComponent=!0},5030:function(t,e,a){e.Z=a.p+"assets/images/h5-ae5be0f8628571becb8a6f3127998977.png"},73555:function(t,e,a){e.Z=a.p+"assets/images/rn-4d55b8ea270355e8ec2284856cfc71e8.png"},16710:function(t,e){e.Z="data:image/png;base64,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"}}]);