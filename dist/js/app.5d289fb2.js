(function(e){function n(n){for(var c,r,o=n[0],h=n[1],i=n[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&f.push(u[r][0]),u[r]=0;for(c in h)Object.prototype.hasOwnProperty.call(h,c)&&(e[c]=h[c]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==u[o]&&(c=!1)}c&&(a.splice(n--,1),e=h(h.s=t[0]))}return e}var c={},r={app:0},u={app:0},a=[];function o(e){return h.p+"js/"+({}[e]||e)+"."+{"chunk-026d8a9f":"429c953f","chunk-04aa846a":"b81502d5","chunk-06400239":"68b5feb3","chunk-2552e93a":"2ca70dbf","chunk-3529c430":"04771f1b","chunk-3849e816":"6b4b6dcf","chunk-400858c2":"ab64e0ff","chunk-49844e70":"e74408eb","chunk-498f345b":"33d42e77","chunk-595ea273":"e412c943","chunk-5e7fa0b4":"46032b3f","chunk-71819aa8":"c07c3ec8","chunk-81e9e784":"aee4f6fc","chunk-94802ce4":"3618a1a7","chunk-9bb67c44":"e259ee3c","chunk-d4f27c78":"f8e7dac6","chunk-db479a8a":"019834b3","chunk-e773be76":"94ebed99"}[e]+".js"}function h(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,h),t.l=!0,t.exports}h.e=function(e){var n=[],t={"chunk-04aa846a":1,"chunk-3529c430":1,"chunk-3849e816":1,"chunk-400858c2":1,"chunk-49844e70":1,"chunk-595ea273":1,"chunk-5e7fa0b4":1,"chunk-71819aa8":1,"chunk-81e9e784":1,"chunk-94802ce4":1,"chunk-d4f27c78":1,"chunk-db479a8a":1,"chunk-e773be76":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-026d8a9f":"31d6cfe0","chunk-04aa846a":"f88924bb","chunk-06400239":"31d6cfe0","chunk-2552e93a":"31d6cfe0","chunk-3529c430":"115970ce","chunk-3849e816":"9545ba87","chunk-400858c2":"6be88675","chunk-49844e70":"ce830e9a","chunk-498f345b":"31d6cfe0","chunk-595ea273":"08c20a21","chunk-5e7fa0b4":"882e11b1","chunk-71819aa8":"f88924bb","chunk-81e9e784":"1a692f42","chunk-94802ce4":"b8e7cf1e","chunk-9bb67c44":"31d6cfe0","chunk-d4f27c78":"d396cb19","chunk-db479a8a":"4ce47e39","chunk-e773be76":"f57e80a4"}[e]+".css",u=h.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var i=a[o],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===c||d===u))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){i=f[o],d=i.getAttribute("data-href");if(d===c||d===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],l.parentNode.removeChild(l),t(a)},l.href=u;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){r[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=a);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,h.nc&&d.setAttribute("nonce",h.nc),d.src=o(e);var f=new Error;i=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,t[1](f)}u[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},h.m=e,h.c=c,h.d=function(e,n,t){h.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},h.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(e,n){if(1&n&&(e=h(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(h.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)h.d(t,c,function(n){return e[n]}.bind(null,c));return t},h.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return h.d(n,"a",n),n},h.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},h.p="",h.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var l=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var c=t("7a23"),r=(t("7b17"),t("bc3a")),u=t.n(r),a=t("2106"),o=t.n(a),h=t("9062"),i=t.n(h),d=(t("e40d"),t("5f67"),t("3730")),f=t.n(d),l=t("825ae"),b=t("f9d5"),p=t.n(b),s=(t("4413"),t("7bb1")),m=t("3aa8"),k=t("cbdf"),v=t("9457");function g(e,n){var t=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(t)}t("804c");const y={};y.render=g;var O=y,j=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),w=[{path:"/",name:"Layout",component:function(){return t.e("chunk-81e9e784").then(t.bind(null,"88e9"))},redirect:{name:"Home"},children:[{path:"home",name:"Home",component:function(){return t.e("chunk-3849e816").then(t.bind(null,"c2f9"))}},{path:"about",name:"關於寒舍",component:function(){return t.e("chunk-595ea273").then(t.bind(null,"c7d9"))}},{path:"products",name:"Products",component:function(){return t.e("chunk-49844e70").then(t.bind(null,"bd5a"))},children:[{path:"category",name:"寒舍商品",component:function(){return t.e("chunk-400858c2").then(t.bind(null,"39e9"))}},{path:"product/:id",name:"商品細節",component:function(){return t.e("chunk-498f345b").then(t.bind(null,"c506"))}}]},{path:"cart",name:"購物車",component:function(){return t.e("chunk-d4f27c78").then(t.bind(null,"eb78"))},children:[{path:"cartList",name:"已選購商品",component:function(){return t.e("chunk-db479a8a").then(t.bind(null,"655a"))}},{path:"cartOrder",name:"訂單資訊",component:function(){return t.e("chunk-06400239").then(t.bind(null,"9986"))}},{path:"cartPayment/:id",name:"付款確認",component:function(){return t.e("chunk-9bb67c44").then(t.bind(null,"bd45"))}}]},{path:"finished",name:"付款完成",component:function(){return t.e("chunk-94802ce4").then(t.bind(null,"d0be"))}},{path:"blog/:id",name:"Blog",component:function(){return t.e("chunk-5e7fa0b4").then(t.bind(null,"f4ac"))}}]},{path:"/admin",name:"後台",component:function(){return t.e("chunk-e773be76").then(t.bind(null,"7277"))},children:[{path:"adminProducts",name:"AdminProducts",component:function(){return t.e("chunk-04aa846a").then(t.bind(null,"d416"))}},{path:"order",name:"Order",component:function(){return t.e("chunk-71819aa8").then(t.bind(null,"da25"))}},{path:"coupon",name:"Coupon",component:function(){return t.e("chunk-026d8a9f").then(t.bind(null,"b4bf"))}},{path:"article",name:"Article",component:function(){return t.e("chunk-2552e93a").then(t.bind(null,"f957"))}}]},{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-3529c430").then(t.bind(null,"9703"))}}],P=Object(j["a"])({history:Object(j["b"])(),routes:w,linkActiveClass:"active",scrollBehavior:function(){return{top:0}}}),C=P,E={showConfirmButton:!1,timer:1500,position:"top",toast:!0,width:"240px"};Object.keys(m["a"]).forEach((function(e){Object(s["e"])(e,m["a"][e])})),Object(s["d"])({generateMessage:Object(k["a"])({zh_TW:v}),validateOnInput:!0}),Object(k["b"])("zh_TW"),Object(c["createApp"])(O).use(C).use(o.a,u.a).use(f.a).use(p.a,E).use(l["a"]).component("Loading",i.a).component("Form",s["c"]).component("Field",s["b"]).component("ErrorMessage",s["a"]).mount("#app")},6413:function(e,n,t){},"804c":function(e,n,t){"use strict";t("6413")}});
//# sourceMappingURL=app.5d289fb2.js.map