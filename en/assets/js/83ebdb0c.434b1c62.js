"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[20653],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),k=l,h=d["".concat(c,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57353:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),o=["components"],i={title:"Taro.getShareInfo(option)",sidebar_label:"getShareInfo"},c=void 0,u={unversionedId:"apis/share/getShareInfo",id:"apis/share/getShareInfo",isDocsHomePage:!1,title:"Taro.getShareInfo(option)",description:"Gets forwarding details.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/share/getShareInfo.md",sourceDirName:"apis/share",slug:"/apis/share/getShareInfo",permalink:"/taro/en/docs/next/apis/share/getShareInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/share/getShareInfo.md",tags:[],version:"current",frontMatter:{title:"Taro.getShareInfo(option)",sidebar_label:"getShareInfo"},sidebar:"API",previous:{title:"hideShareMenu",permalink:"/taro/en/docs/next/apis/share/hideShareMenu"},next:{title:"authPrivateMessage",permalink:"/taro/en/docs/next/apis/share/authPrivateMessage"}},s=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gets forwarding details."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tips")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To display the group name, use ",(0,a.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/open-data.html"},"open data components"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/share/wx.getShareInfo.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"shareTicket"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"shareTicket")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"timeout"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Timeout (in ms)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a failed API call")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: Result) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a successful API call")))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"cloudID"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"The Cloud ID corresponding to sensitive data. It is returned only in Mini Programs for which Cloud Base is enabled. The open data can be directly obtained via cloud call. See ",(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#method-cloud"},"Detail"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"encryptedData"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"The complete encrypted forwarding data, including sensitive data. For details, see",(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html"},"Decryption Algorithm for Encrypted Data"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Error message")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"iv"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"The initial vector of the encryption algorithm. For details, see ",(0,a.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html"},"Decryption Algorithm for Encrypted Data"))))),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("p",null,"There are two ways to get sensitive data. One is to use the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#decryption-algorithm-for-encrypted-data"},"Decryption Algorithm for Encrypted Data"),". The acquired open data has the following json structure (in which, openGId is the unique identifier of the current group):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n "openGId": "OPENGID"\n}\n')),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.getShareInfo"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);