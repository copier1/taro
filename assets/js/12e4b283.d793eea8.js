"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[725],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(n),k=r,c=s["".concat(o,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},52211:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return d},default:function(){return s}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],p={title:"Taro.requestOrderPayment(option)",sidebar_label:"requestOrderPayment"},o=void 0,m={unversionedId:"apis/payment/requestOrderPayment",id:"version-3.x/apis/payment/requestOrderPayment",isDocsHomePage:!1,title:"Taro.requestOrderPayment(option)",description:"\u521b\u5efa\u81ea\u5b9a\u4e49\u7248\u4ea4\u6613\u7ec4\u4ef6\u8ba2\u5355\uff0c\u5e76\u53d1\u8d77\u652f\u4ed8\u3002 \u4ec5\u63a5\u5165\u4e86\u81ea\u5b9a\u4e49\u7248\u4ea4\u6613\u7ec4\u4ef6\u7684\u5c0f\u7a0b\u5e8f\u9700\u8981\u4f7f\u7528\uff0c\u666e\u901a\u5c0f\u7a0b\u5e8f\u53ef\u76f4\u63a5\u4f7f\u7528 Taro.requestPayment\u3002",source:"@site/versioned_docs/version-3.x/apis/payment/requestOrderPayment.md",sourceDirName:"apis/payment",slug:"/apis/payment/requestOrderPayment",permalink:"/taro/docs/apis/payment/requestOrderPayment",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/payment/requestOrderPayment.md",tags:[],version:"3.x",frontMatter:{title:"Taro.requestOrderPayment(option)",sidebar_label:"requestOrderPayment"},sidebar:"version-3.x/API",previous:{title:"requestPayment",permalink:"/taro/docs/apis/payment/requestPayment"},next:{title:"faceVerifyForPay",permalink:"/taro/docs/apis/payment/faceVerifyForPay"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SignType",id:"signtype",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],u={toc:d};function s(e){var t=e.components,p=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u521b\u5efa\u81ea\u5b9a\u4e49\u7248\u4ea4\u6613\u7ec4\u4ef6\u8ba2\u5355\uff0c\u5e76\u53d1\u8d77\u652f\u4ed8\u3002 \u4ec5\u63a5\u5165\u4e86",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ministore/minishopopencomponent2/Introduction2"},"\u81ea\u5b9a\u4e49\u7248\u4ea4\u6613\u7ec4\u4ef6"),"\u7684\u5c0f\u7a0b\u5e8f\u9700\u8981\u4f7f\u7528\uff0c\u666e\u901a\u5c0f\u7a0b\u5e8f\u53ef\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.requestPayment"),"\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestOrderPayment.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeStamp"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u6233\uff0c\u4ece 1970 \u5e74 1 \u6708 1 \u65e5 00:00:00 \u81f3\u4eca\u7684\u79d2\u6570\uff0c\u5373\u5f53\u524d\u7684\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nonceStr"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u957f\u5ea6\u4e3a32\u4e2a\u5b57\u7b26\u4ee5\u4e0b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"package"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7edf\u4e00\u4e0b\u5355\u63a5\u53e3\u8fd4\u56de\u7684 prepay_id \u53c2\u6570\u503c\uff0c\u63d0\u4ea4\u683c\u5f0f\u5982\uff1aprepay_id=***")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"orderInfo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8ba2\u5355\u4fe1\u606f\uff0c\u4ec5\u5728\u9700\u8981\u6821\u9a8c\u7684\u573a\u666f\u4e0b\u9700\u8981\u4f20\u9012\uff0c\u5177\u4f53\u89c1",(0,l.kt)("a",{parentName:"td",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ministore/minishopopencomponent2/API/order/requestOrderPayment"},"\u63a5\u53e3\u8bf4\u660e"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extUserUin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8 APP \u7528\u6237 ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signType"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyof SignType")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b7e\u540d\u7b97\u6cd5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"paySign"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b7e\u540d\uff0c\u5177\u4f53\u7b7e\u540d\u65b9\u6848\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3"},"\u5c0f\u7a0b\u5e8f\u652f\u4ed8\u63a5\u53e3\u6587\u6863"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"signtype"},"SignType"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MD5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u5728\u5fae\u4fe1\u652f\u4ed8 v2 \u7248\u672c\u63a5\u53e3\u9002\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HMAC-SHA256"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u5728\u5fae\u4fe1\u652f\u4ed8 v2 \u7248\u672c\u63a5\u53e3\u9002\u7528")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RSA"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u5728\u5fae\u4fe1\u652f\u4ed8 v3 \u7248\u672c\u63a5\u53e3\u9002\u7528")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("p",null,"\u9664 orderInfo \u4ee5\u5916\uff0c\u5176\u4f59\u5b57\u6bb5\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"./requestPayment"},"Taro.requestPayment")," \u4e00\u81f4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.requestOrderPayment({\n  orderInfo: {},\n  timeStamp: '',\n  nonceStr: '',\n  package: '',\n  signType: 'MD5',\n  paySign: '',\n  success (res) { },\n  fail (res) { }\n})\n")))}s.isMDXComponent=!0},5030:function(e,t,n){t.Z=n.p+"assets/images/h5-ae5be0f8628571becb8a6f3127998977.png"},73555:function(e,t,n){t.Z=n.p+"assets/images/rn-4d55b8ea270355e8ec2284856cfc71e8.png"},16710:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAilBMVEUAAAAjpU0jpU0jpU0ipU0jpU0jpU0jpU0jpU0hpEwjpU0ipEwjpU0jpU0ipU0jpU0ipU0jpUwjpUwjpU0jpEwjpk4ipk4jpU0jpk0ipU0jpU0jpU4jpU0jpU0jpU0jpk0jpUwjpU0lqE8jpksfp0sipE0jpU0ipU0jpU0jpU0jpk0jpkwjpk0jpU3vCafdAAAALXRSTlMAf4julY/5ascm0S3Vg29eTzPbm0EpIrat37MX9HbmR7uhCxMIHTlZzajBY+l7EkryAAAH0klEQVR42u3daZOiMBAG4FfuSxQUBfFAHa+d7f//9/aucivjmDQEo7vP96mpHgbSSTodaFKMV5azLZsgqWzPs6skaMqtY63GBZ7EYeq785w+kc9df3qAycL3i02S7Mt7CBMdTk5OihLnZNiT2bgBMQXuBoY4WhG1EllHPFw8CKgDwSrGAx3ShjrTpDUeYzZcU6fWwxn6F1o2dc62QvQrdpekxdIt0J/M8Ugbz8nQj71Fmll79GCUkHbJCLplJfWizKDTbuhRT7zhDtqcIupRdIIebw71zHmDBtkX6t2XDJ0bfaUH+DpCxyx6EAtdChf0MIsQnRlX9EDVGB3x6cF8dGJIDzdEByZkgAlam5MR5mjpTIY4o5U1GWONFsgoYMvJKAmYFmSYBVhcMo4LhhUZaPWEeUlH2cqIDDWCkjEZawwFYUXGqsJn/vBeWzzBvFaO9fQvuuILn30lw33NIOHtCxnvyxvuc6gndjSfDCbzyCZ1Du46UQ8Sazp7wx9v4VR5h/uEO3YR6dasYohCv1ySvGj34CUTexjiltrPO1tYyTzSygnxmf1wSZK8DJ8pSafLEffEW5JUPmwoPG8gY3NuPyzuE9JnsYecekFSkv1DciwH8iYtc66M9HnXMT3N+h/TZ1Aza/OUY490qaGqJgle0fPyzxTqpuzloXBJmqTgSOm+ZdjnJ2sCngnvwzWzSY9gB55dQHfZs/6yxQ24NpzcsV4TD/8fq96c0kE6+qRafkt3rWvGq8WxjPGhzTC4mmbdeGrxUv1L0pAeQ7kcdxtzZ0cN/hKTHvkeHxgsxSc3wAf2Od0V49qA9PDl1zEXzKRrgGsBaeHVEK0Vdjtrj+4JcOVIesyVNoor3jb/sYdRfQXBhW67QLBSG90j0kMcIhzFQSemu6I7Q6iW/eTCU82TE5XcwSU9XOXM9MKZXLjaC06m6onQhjEvCe7MKzVMcFP1hxgq/J530kRY/A/onlxI5hVWNrakhy286nSfkHTZdNcWv1SkRyRsenN2nyOSfYwFaTLnrMiOOCV8hd5ijQlnPSHlTN19vSvwAyF91/VD5V9vkxmB+Jz1TxvfHegPIwIZs6owDtdDpxmBZOLYI2F6/a6bEYgwiFYkwb/OyowIRCzv9UiCe/2dNiIQi7fBML+uiTUikIxXApdfFymbEEgJ8Wek/JWgPD4QO+ZumBcYE5+3sN6ng7ndWSApuxp8jBVxra0CP4VNR4FsIZhKr9dYxBOle2Eq3jKQqOYfw7HgdLI4PeogkKSAYLYkOQ5vepiIGVHrQM4FRAOStGUl8RPxf+DYMpDlYIcPJCSpRNNRpX3VJpDKyloeNGgQdLTb3PAD8dIdPnRYk6wASUe7/w47kKDu4ARLoryEssPHJtxALoziB1EFm7W+LoqYgXi7Tir0bXjdVCsdiBmI300Bsgevm+qxFTeQGW4YkFogNsmL9rih9piBJLjhqLo8W3VS/hxwU5QtPvZGaiqVz+8WN+wu7KTRhYC1jJsoDIh2cSMM3+On8fOOjngFaFqeAYytqs0MMWfVnIkalO1OyqZ2y6mumCjUE1JXYtvqZFPZes4+F/6tImLYyg87R4i+dLD4kHZSAOdIT3W/QDSnVoGIY3u9iojHwoqfvA+oTSDiJ7iw1sS1kv7SiStOfmfrWuvFYOq7C4/4xrJDTy6miRUjEG0KgKRcPkhOTQpEeikvFRdqTAokl95WiMW83aRA5rITY0/Md40KxJXdequENNszKhBfdoofiKd/jApkCuDAOgw/NiuQA76zOZN136hAbPxwMaoaQyA/yr0bVR/T4kxdaFTFEkuIn3KDashYEvklPZtVM8mo6mt16vTEKRFp6J6GUWfJc8IvM85f9139FQlJkwN+Cxi7Ivs1fW69Z2wTsAT4w+WsoViMn9DDVSnyj1Tr9b0QfX20Nkq/IlScIjro6xWJ1B66D6UpSdBfDzVLbTOihMiWHXe0luUe1eZ7yxqiRGGduF6SFoFqXurLbyC7fXbnW+FabMTZSJYYf2kMOK3K0gjzC/75YTenP3KXd36YL2UcA5/glng8+nmiO+69j/O6Fh79w8/YswxZrRLOe/DUZ9LDnvGaVyxMa7hrcduJTMxqdL4M2dVRvlEN9N0WLXdmUDUjXby4TV1RDTU1aeO0a0s1hYop6ZO1bBSWQl5K+litW7dNdpCzm5A+yb59M71Asi9eQBqN8Imyw06FxwvpVDIaTnJ6RxYOaeVl+NSwm26e4dAmvYadNmX9MsggOg6+kG7Rrus2ubn7V8fb2dTNqQcn3OX014OYz/mXWkm/THPv12m3/joN8F/nSoLXuSTiZa7tMPZCGCL/Ca+q+8jQoDWcNiZPfF3dtfmTX1j3x/kFrqz7Yf3/0jqjrq1L8NPTX1x3lZg89dV1Lv7ytJfXrV7iWt2becnTXWA3+n9l86teov0615q/0EXzr3P1P/DmUM+cN+hxiqhH0Qna7IYe9cQb7qBTVlIvygy6jRLSLhmhB3uLNLP26EfmeKSN52ToT+wuSYulG6NfoWVT52wrRP9mwzV1aj2c4TEOaUOdadIaDxQPAupAMIjxcEcrolYi6whDbNwzMZ3dDYwye99WpCjfvs9gosIvbZJkl34Bkx2mvjvP6RP53PWnBzyJYryynG3ZBElle55dJUFTbh1rNS6gxzcXDSGbOpE70AAAAABJRU5ErkJggg=="}}]);