(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6faa7f9c"],{"1dde":function(t,e,c){var a=c("d039"),n=c("b622"),r=c("2d00"),o=n("species");t.exports=function(t){return r>=51||!a((function(){var e=[],c=e.constructor={};return c[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,c){var a=c("861d"),n=c("e8b5"),r=c("b622"),o=r("species");t.exports=function(t,e){var c;return n(t)&&(c=t.constructor,"function"!=typeof c||c!==Array&&!n(c.prototype)?a(c)&&(c=c[o],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===e?0:e)}},8418:function(t,e,c){"use strict";var a=c("c04e"),n=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var o=a(e);o in t?n.f(t,o,r(0,c)):t[o]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),n=c("d039"),r=c("e8b5"),o=c("861d"),i=c("7b0b"),s=c("50c4"),d=c("8418"),l=c("65f0"),u=c("1dde"),b=c("b622"),p=c("2d00"),h=b("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",v=p>=51||!n((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),j=u("concat"),O=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},m=!v||!j;a({target:"Array",proto:!0,forced:m},{concat:function(t){var e,c,a,n,r,o=i(this),u=l(o,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?o:arguments[e],O(r)){if(n=s(r.length),b+n>f)throw TypeError(g);for(c=0;c<n;c++,b++)c in r&&d(u,b,r[c])}else{if(b>=f)throw TypeError(g);d(u,b++,r)}return u.length=b,u}})},b0c0:function(t,e,c){var a=c("83ab"),n=c("9bf2").f,r=Function.prototype,o=r.toString,i=/^\s*function ([^ (]*)/,s="name";a&&!(s in r)&&n(r,s,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},e8b5:function(t,e,c){var a=c("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},eb78:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n=Object(a["createVNode"])("div",{class:"loadingio-spinner-ripple-i0ld0lo9l1"},[Object(a["createVNode"])("div",{class:"ldio-kc4k04s39o"},[Object(a["createVNode"])("div"),Object(a["createVNode"])("div")])],-1),r={class:"table-responsive col-10 mx-auto my-5"},o={class:"table table-sm text-center align-middle"},i=Object(a["createVNode"])("thead",{class:"bg-primary thead-primary"},[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th"),Object(a["createVNode"])("th"),Object(a["createVNode"])("th",null,"品名"),Object(a["createVNode"])("th",{width:"20%"},"數量"),Object(a["createVNode"])("th",{width:"20%"},"單價")])],-1),s=Object(a["createVNode"])("i",{class:"bi bi-x"},null,-1),d={class:"input-group input-group-sm"},l={class:"input-group-text"};function u(t,e,c,u,b,p){var h=Object(a["resolveComponent"])("Loading");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(h,{active:b.isLoading},{default:Object(a["withCtx"])((function(){return[n]})),_:1},8,["active"]),Object(a["createVNode"])("div",r,[Object(a["createVNode"])("table",o,[i,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(b.carts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t.id},[Object(a["createVNode"])("td",null,[Object(a["createVNode"])("button",{class:"btn btn-sm btn-danger",type:"button",onClick:function(e){return p.delCartItem(t.id)}},[s],8,["onClick"])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("img",{class:"img-fluid",src:t.product.imageUrl,alt:t.id,style:{width:"180px",heigth:"180px"}},null,8,["src","alt"])]),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.product.title),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",d,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"number",class:"form-control text-center",min:"1","onUpdate:modelValue":function(e){return t.qty=e},onChange:function(e){return p.updateCart(t)}},null,40,["onUpdate:modelValue","onChange"]),[[a["vModelText"],t.qty,void 0,{number:!0}]]),Object(a["createVNode"])("span",l,Object(a["toDisplayString"])(t.product.unit),1)])]),Object(a["createVNode"])("td",null,"$ "+Object(a["toDisplayString"])(t.product.price),1)])})),128))])]),Object(a["withDirectives"])(Object(a["createVNode"])("button",{class:"btn btn-outline-danger w-50",onClick:e[1]||(e[1]=function(t){return p.delAllCarts()})},"清空購物車",512),[[a["vShow"],0!==b.carts.length]])])],64)}c("b0c0"),c("99af");var b={data:function(){return{pageTitle:"",isLoading:!1,carts:[],finalTotal:""}},inject:["emitter"],created:function(){this.pageTitle=this.$route.name,this.emitter.emit("page-title",this.pageTitle),this.getCarts()},methods:{getCarts:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/cart");this.$http.get(e).then((function(e){t.carts=e.data.data.carts,t.finalTotal=e.data.data.final_total,t.isLoading=!1}))},updateCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/cart/").concat(t.id),a={product_id:t.id,qty:t.qty};this.isLoading=!0,this.$http.put(c,{data:a}).then((function(t){t.data.success&&(e.isLoading=!1,console.log(t.data.data.qty))})).catch((function(t){console.log(t)}))},delCartItem:function(t){var e=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/cart/").concat(t);this.$http.delete(c).then((function(c){c.data.success?(alert("成功刪除".concat(t,"商品")),e.isLoading=!1,e.emitter.emit("update-cart"),e.getCarts()):alert("刪除失敗")}))},delAllCarts:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/carts");this.$http.delete(e).then((function(e){e.data.success?(alert("成功清空物車"),t.isLoading=!1,t.getCarts()):(alert("清空失敗"),t.isLoading=!1)}))}}};b.render=u;e["default"]=b}}]);
//# sourceMappingURL=chunk-6faa7f9c.d9fcc2e5.js.map