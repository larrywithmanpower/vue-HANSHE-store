(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9bb67c44"],{"1dde":function(e,t,r){var c=r("d039"),o=r("b622"),a=r("2d00"),n=o("species");e.exports=function(e){return a>=51||!c((function(){var t=[],r=t.constructor={};return r[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,r){"use strict";var c=r("c04e"),o=r("9bf2"),a=r("5c6c");e.exports=function(e,t,r){var n=c(t);n in e?o.f(e,n,a(0,r)):e[n]=r}},"99af":function(e,t,r){"use strict";var c=r("23e7"),o=r("d039"),a=r("e8b5"),n=r("861d"),i=r("7b0b"),d=r("50c4"),s=r("8418"),l=r("65f0"),u=r("1dde"),b=r("b622"),h=r("2d00"),p=b("isConcatSpreadable"),O=9007199254740991,j="Maximum allowed index exceeded",f=h>=51||!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),g=u("concat"),N=function(e){if(!n(e))return!1;var t=e[p];return void 0!==t?!!t:a(e)},V=!f||!g;c({target:"Array",proto:!0,forced:V},{concat:function(e){var t,r,c,o,a,n=i(this),u=l(n,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(a=-1===t?n:arguments[t],N(a)){if(o=d(a.length),b+o>O)throw TypeError(j);for(r=0;r<o;r++,b++)r in a&&s(u,b,a[r])}else{if(b>=O)throw TypeError(j);s(u,b++,a)}return u.length=b,u}})},b0c0:function(e,t,r){var c=r("83ab"),o=r("9bf2").f,a=Function.prototype,n=a.toString,i=/^\s*function ([^ (]*)/,d="name";c&&!(d in a)&&o(a,d,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(e){return""}}})},bd45:function(e,t,r){"use strict";r.r(t);r("b0c0");var c=r("7a23"),o={class:"container d-flex justify-content-center"},a={class:"card col-12 col-md-10 border-0 mt-3"},n={class:"card-body p-0"},i=Object(c["createVNode"])("h5",{class:"card-title text-center h3"},"確認付款",-1),d={class:"card-body"},s={class:"table-responsive"},l={class:"table table-borderless text-center"},u=Object(c["createVNode"])("thead",{class:"bg-primary thead-primary"},[Object(c["createVNode"])("tr",null,[Object(c["createVNode"])("th",{scope:"col"},"品名"),Object(c["createVNode"])("th",{scope:"col"},"數量"),Object(c["createVNode"])("th",{scope:"col"},"價格")])],-1),b={class:" border-top"},h=Object(c["createVNode"])("td",{colspan:"2",class:"text-center"},"總計",-1),p=Object(c["createVNode"])("hr",null,null,-1),O=Object(c["createVNode"])("h3",{class:"text-center"},"訂購者資訊",-1),j={class:"table-responsive"},f={class:"table table-borderless"},g=Object(c["createVNode"])("th",{width:"100"},"Email",-1),N=Object(c["createVNode"])("th",{width:"100"},"姓名",-1),V=Object(c["createVNode"])("th",{width:"100"},"電話",-1),y=Object(c["createVNode"])("th",{width:"100"},"地址",-1),v=Object(c["createVNode"])("th",{width:"100"},"付款狀態",-1),w=Object(c["createVNode"])("tfoot",{class:" border-top"},null,-1),m={class:"d-flex justify-content-end"};function x(e,t,r,x,$,S){return Object(c["openBlock"])(),Object(c["createBlock"])("div",o,[Object(c["createVNode"])("div",a,[Object(c["createVNode"])("div",n,[i,Object(c["createVNode"])("div",d,[Object(c["createVNode"])("div",s,[Object(c["createVNode"])("table",l,[u,Object(c["createVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])($.order.products,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:t.product.id},[Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(t.product.title),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(t.qty)+"/"+Object(c["toDisplayString"])(t.product.unit),1),Object(c["createVNode"])("td",null,"NT$ "+Object(c["toDisplayString"])(e.$toCurrency(Math.round(t.final_total))),1)])})),128))]),Object(c["createVNode"])("tfoot",b,[Object(c["createVNode"])("tr",null,[h,Object(c["createVNode"])("td",null,"NT$ "+Object(c["toDisplayString"])(e.$toCurrency(Math.round($.order.total))),1)])])])]),p,O,Object(c["createVNode"])("div",j,[Object(c["createVNode"])("table",f,[Object(c["createVNode"])("tbody",null,[Object(c["createVNode"])("tr",null,[g,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])($.order.user.email),1)]),Object(c["createVNode"])("tr",null,[N,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])($.order.user.name),1)]),Object(c["createVNode"])("tr",null,[V,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])($.order.user.tel),1)]),Object(c["createVNode"])("tr",null,[y,Object(c["createVNode"])("td",null,Object(c["toDisplayString"])($.order.user.address),1)]),Object(c["createVNode"])("tr",null,[v,Object(c["createVNode"])("td",{class:$.order.is_paid?"text-success":"text-danger"},Object(c["toDisplayString"])($.order.is_paid?"付款完成":"未付款"),3)])]),w])]),Object(c["createVNode"])("div",m,[Object(c["createVNode"])("button",{type:"submit",class:"btn btn-outline-primary",onClick:t[1]||(t[1]=function(){return S.payOrder&&S.payOrder.apply(S,arguments)})}," 完成付款 ")])])])])])}r("99af");var $={data:function(){return{orders:[],order:{user:{email:"",address:"",name:"",tes:""}},isLoading:!1,id:this.$route.params.id}},created:function(){this.getOrders(),this.getOrder()},methods:{getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var r="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/orders?page=").concat(t);this.$http.get(r).then((function(t){t.data.success?(e.orders=t.data.orders,e.isLoading=!1):(e.$swal({title:t.data.message,icon:"error"}),e.isLoading=!1)})).catch((function(t){e.$swal({icon:"error",title:"Oops...",text:"Something went wrong!",footer:t})}))},getOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/order/").concat(this.id);this.$http.get(t).then((function(t){t.data.success?(e.order=t.data.order,e.isLoading=!1):(e.$swal({title:t.data.message,icon:"error"}),e.isLoading=!1)})).catch((function(t){e.$swal({icon:"error",title:"Oops...",text:"Something went wrong!",footer:t})}))},payOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/pay/").concat(this.id);this.$http.post(t).then((function(t){t.data.success?(e.$swal({title:t.data.message,icon:"success"}),e.isLoading=!1,e.$router.push("/finished")):(e.$swal({title:t.data.message,icon:"error"}),e.isLoading=!1)})).catch((function(t){e.$swal({icon:"error",title:"Oops...",text:"Something went wrong!",footer:t})}))}}};$.render=x;t["default"]=$}}]);
//# sourceMappingURL=chunk-9bb67c44.b0f30fbe.js.map