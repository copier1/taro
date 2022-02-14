"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[58465],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),k=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=k(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),N=k(n),u=r,g=N["".concat(d,".").concat(u)]||N[u]||m[u]||l;return n?a.createElement(g,i(i({ref:e},o),{},{components:n})):a.createElement(g,i({ref:e},o))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=n[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},92991:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return k},toc:function(){return o},default:function(){return N}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],p={title:"Taro.request(option)",sidebar_label:"request"},d=void 0,k={unversionedId:"apis/network/request/request",id:"apis/network/request/request",isDocsHomePage:!1,title:"Taro.request(option)",description:"\u53d1\u8d77 HTTPS \u7f51\u7edc\u8bf7\u6c42\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/docs/apis/network/request/request.md",sourceDirName:"apis/network/request",slug:"/apis/network/request/request",permalink:"/taro/docs/next/apis/network/request/request",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/network/request/request.md",tags:[],version:"current",frontMatter:{title:"Taro.request(option)",sidebar_label:"request"},sidebar:"API",previous:{title:"offWindowResize",permalink:"/taro/docs/next/apis/ui/window/offWindowResize"},next:{title:"RequestTask",permalink:"/taro/docs/next/apis/network/request/RequestTask"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3},{value:"DataType",id:"datatype",children:[],level:3},{value:"Method",id:"method",children:[],level:3},{value:"ResponseType",id:"responsetype",children:[],level:3},{value:"CorsMode",id:"corsmode",children:[],level:3},{value:"Credentials",id:"credentials",children:[],level:3},{value:"Cache",id:"cache",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[],level:3},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[],level:3}],level:2}],m={toc:o};function N(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u53d1\u8d77 HTTPS \u7f51\u7edc\u8bf7\u6c42\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"},"\u76f8\u5173\u8bf4\u660e"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"data \u53c2\u6570\u8bf4\u660e"),"\n\u6700\u7ec8\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u7684\u6570\u636e\u662f String \u7c7b\u578b\uff0c\u5982\u679c\u4f20\u5165\u7684 data \u4e0d\u662f String \u7c7b\u578b\uff0c\u4f1a\u88ab\u8f6c\u6362\u6210 String \u3002\u8f6c\u6362\u89c4\u5219\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"GET")," \u65b9\u6cd5\u7684\u6570\u636e\uff0c\u4f1a\u5c06\u6570\u636e\u8f6c\u6362\u6210 query string\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)..."),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"POST")," \u65b9\u6cd5\u4e14 ",(0,l.kt)("inlineCode",{parentName:"li"},"header['content-type']")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"application/json")," \u7684\u6570\u636e\uff0c\u4f1a\u5bf9\u6570\u636e\u8fdb\u884c JSON \u5e8f\u5217\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"POST")," \u65b9\u6cd5\u4e14 ",(0,l.kt)("inlineCode",{parentName:"li"},"header['content-type']")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")," \u7684\u6570\u636e\uff0c\u4f1a\u5c06\u6570\u636e\u8f6c\u6362\u6210 query string ",(0,l.kt)("inlineCode",{parentName:"li"},"\uff08encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...\uff09"))),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(94882).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(44090).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(62286).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"QQ \u5c0f\u7a0b\u5e8f",src:n(82626).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"<T = any, U = any>(option: Option<U>) => RequestTask<T>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T"))))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"U")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u8bf7\u6c42\u7684 header\uff0cheader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"content-type")," \u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"application/json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"2000")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp, h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof Method")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"GET")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42\u65b9\u6cd5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataType"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"responseType"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof ResponseType")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u7684\u6570\u636e\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableHttp2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f http2",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableQuic"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f quic",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableCache"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f cache",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableHttpDNS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f HttpDNS \u670d\u52a1\u3002\u5982\u5f00\u542f\uff0c\u9700\u8981\u540c\u65f6\u586b\u5165 httpDNSServiceId \u3002 HttpDNS \u7528\u6cd5\u8be6\u89c1 \u79fb\u52a8\u89e3\u6790HttpDNS",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"httpDNSServiceId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"HttpDNS \u670d\u52a1\u5546 Id\u3002 HttpDNS \u7528\u6cd5\u8be6\u89c1 \u79fb\u52a8\u89e3\u6790HttpDNS",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enableChunked"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u542f transfer-encoding chunked\u3002",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: weapp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult<any>) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsonp"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u662f\u5426\u4f7f\u7528jsonp\u65b9\u5f0f\u83b7\u53d6\u6570\u636e",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsonpCache"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef jsonp \u8bf7\u6c42 url \u662f\u5426\u9700\u8981\u88ab\u7f13\u5b58",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof CorsMode")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"same-origin")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u662f\u5426\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"credentials"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof Credentials")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"omit")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u662f\u5426\u643a\u5e26 Cookie",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cache"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof Cache")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u7f13\u5b58\u6a21\u5f0f",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retryTimes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u91cd\u8bd5\u6b21\u6570",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backup"),(0,l.kt)("td",{parentName:"tr",align:null},"string or string[]"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u7684\u515c\u5e95\u63a5\u53e3",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataCheck"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u54cd\u5e94\u7684\u6570\u636e\u6821\u9a8c\u51fd\u6570\uff0c\u82e5\u8fd4\u56de false\uff0c\u5219\u8bf7\u6c42\u515c\u5e95\u63a5\u53e3\uff0c\u82e5\u65e0\u515c\u5e95\u63a5\u53e3\uff0c\u5219\u62a5\u8bf7\u6c42\u5931\u8d25",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useStore"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u662f\u5426\u4f7f\u7528\u7f13\u5b58",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storeCheckKey"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u7f13\u5b58\u6821\u9a8c\u7684 key",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storeSign"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u7f13\u5b58\u7b7e\u540d",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storeCheck"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"() => boolean")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e H5 \u7aef\u8bf7\u6c42\u6821\u9a8c\u51fd\u6570\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u8bbe\u7f6e",(0,l.kt)("br",null),"API \u652f\u6301\u5ea6: h5")))),(0,l.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"T")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TaroGeneral.IAnyObject")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP Response Header")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"statusCode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u7ed3\u679c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookies"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"cookies")))),(0,l.kt)("h3",{id:"datatype"},"DataType"),(0,l.kt)("p",null,"\u8fd4\u56de\u7684\u6570\u636e\u683c\u5f0f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7684\u6570\u636e\u4e3a JSON\uff0c\u8fd4\u56de\u540e\u4f1a\u5bf9\u8fd4\u56de\u7684\u6570\u636e\u8fdb\u884c\u4e00\u6b21 JSON.parse",(0,l.kt)("br",null),"\u5176\u4ed6: \u4e0d\u5bf9\u8fd4\u56de\u7684\u5185\u5bb9\u8fdb\u884c JSON.parse")))),(0,l.kt)("h3",{id:"method"},"Method"),(0,l.kt)("p",null,"HTTP \u8bf7\u6c42\u65b9\u6cd5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OPTIONS"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 OPTIONS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 GET")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEAD"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 HEAD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 POST")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PUT"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 PUT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 DELETE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TRACE"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 TRACE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECT"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP \u8bf7\u6c42 CONNECT")))),(0,l.kt)("h3",{id:"responsetype"},"ResponseType"),(0,l.kt)("p",null,"\u54cd\u5e94\u7684\u6570\u636e\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u7684\u6570\u636e\u4e3a\u6587\u672c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arraybuffer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u7684\u6570\u636e\u4e3a ArrayBuffer")))),(0,l.kt)("h3",{id:"corsmode"},"CorsMode"),(0,l.kt)("p",null,"\u8de8\u57df\u7b56\u7565"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-cors"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8de8\u57df\u8bf7\u6c42\u5c06\u83b7\u53d6\u4e0d\u900f\u660e\u7684\u54cd\u5e94")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cors"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"same-origin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u603b\u662f\u5411\u5f53\u524d\u7684\u6e90\u53d1\u8d77\u7684")))),(0,l.kt)("h3",{id:"credentials"},"Credentials"),(0,l.kt)("p",null,"\u8bc1\u4e66"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u8bba\u662f\u4e0d\u662f\u8de8\u57df\u7684\u8bf7\u6c42,\u603b\u662f\u53d1\u9001\u8bf7\u6c42\u8d44\u6e90\u57df\u5728\u672c\u5730\u7684 cookies\u3001 HTTP Basic authentication \u7b49\u9a8c\u8bc1\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"same-origin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ea\u6709\u5f53URL\u4e0e\u54cd\u5e94\u811a\u672c\u540c\u6e90\u624d\u53d1\u9001 cookies\u3001 HTTP Basic authentication \u7b49\u9a8c\u8bc1\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"omit"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece\u4e0d\u53d1\u9001cookies")))),(0,l.kt)("h3",{id:"cache"},"Cache"),(0,l.kt)("p",null,"\u7f13\u5b58\u7b56\u7565"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u4eceHTTP\u7f13\u5b58\u4e2d\u5bfb\u627e\u5339\u914d\u7684\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no-cache"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u5728\u5176HTTP\u7f13\u5b58\u4e2d\u5bfb\u627e\u5339\u914d\u7684\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reload"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u76f4\u63a5\u4ece\u8fdc\u7a0b\u670d\u52a1\u5668\u83b7\u53d6\u8d44\u6e90\uff0c\u4e0d\u67e5\u770b\u7f13\u5b58\uff0c\u7136\u540e\u4f7f\u7528\u4e0b\u8f7d\u7684\u8d44\u6e90\u66f4\u65b0\u7f13\u5b58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force-cache"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u5728\u5176HTTP\u7f13\u5b58\u4e2d\u5bfb\u627e\u5339\u914d\u7684\u8bf7\u6c42")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"only-if-cached"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d4f\u89c8\u5668\u5728\u5176HTTP\u7f13\u5b58\u4e2d\u5bfb\u627e\u5339\u914d\u7684\u8bf7\u6c42")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.request({\n  url: 'test.php', //\u4ec5\u4e3a\u793a\u4f8b\uff0c\u5e76\u975e\u771f\u5b9e\u7684\u63a5\u53e3\u5730\u5740\n  data: {\n    x: '',\n    y: ''\n  },\n  header: {\n    'content-type': 'application/json' // \u9ed8\u8ba4\u503c\n  },\n  success: function (res) {\n    console.log(res.data)\n  }\n})\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),(0,l.kt)("p",null,"async/await \u7528\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const res = await Taro.request(params)\n")))}N.isMDXComponent=!0},44090:function(t,e,n){e.Z=n.p+"assets/images/alipay-870045b8b2b5ca9bc1f440b1fce439c2.png"},5030:function(t,e,n){e.Z=n.p+"assets/images/h5-ae5be0f8628571becb8a6f3127998977.png"},82626:function(t,e){e.Z="data:image/png;base64,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"},73555:function(t,e,n){e.Z=n.p+"assets/images/rn-4d55b8ea270355e8ec2284856cfc71e8.png"},94882:function(t,e,n){e.Z=n.p+"assets/images/swan-02ea590f24bbb4ed187920dfb316ae6c.png"},62286:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABmJLR0QA/wD/AP+gvaeTAAACk0lEQVRIie2WS0hUYRTHf+dqk5abHpsga5UJ4thDGNMhpOwB0VIQEaRVENRCU6eHMpBBk1q7lhVJix6LFkaQRqCjzoSZXlOUdhlFEARNNakz97RRHO9cdRRX2X/3nf8553fPx+X7PvjXJStJzvOra0smUwmhwWCDHFxJD2MlyWuh9QYMD+UQHj6yJp1VDUIjVQwMbFocaBl3UHlFyOwk/L5g1bB+s4yw+Ra0nZjrkjMwbFYiHJ1dlaHWICHzMb1ju1MGvRnKI2R2IHSC7JuN1tNn5iYDlTO2cgMoJy02mliwqELDFViGCZyyOS4MKpOBnvwTiFYDn20FfRS7x5cFxjY+B77YomOInKbI3ZQMFLHwFDwgfXoPig/4gTBFmp5fFgbgzY2gUju7+gSc5eO4G09+R2JaelJhYeFvIEBo5D6W5cFTMDFn7dqKRKLzqWo/qQ7lPyI04sKKPKW4OIqDUj7aSgJaJNACeG1WhyHUdNfLh1T6LAssCehegWtA+RJpM8C9mRhN4SvydVXA0lbdHovTCJzDaeud9RNoi28g0F8jqW3p8RbdHFVqVakDshxqJhQui5AtSqPCNoecSYXG3ijt+MVyBvrV8GZQhXAD2OHQ5BvQ+j3K7VG/TAOU+jUrlslFoB7ITKpQxjDwB+vlSRLQG9CXwDEH0C+BWxa09DZIxMHncJtmWzM0I1ThdCEozUGfNJJoinLXlmYB7Qo5PQ3StBgMoLtWJoM+qZY08oEOmz0dt3iYNOHslC+AkyhdkkZtT52YC0pHR11E4vM3vvAOj/uA/QO8LVqmFjcF9gPXgw1ydc5b8PcZwoW4srPXJ68XmyYVBeukC78WejOoiP7hWaK3ojdNqhMupfX2xPivNdBf13zjb3IjrEwAAAAASUVORK5CYII="},16710:function(t,e){e.Z="data:image/png;base64,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"}}]);