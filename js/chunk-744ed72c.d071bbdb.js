(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-744ed72c"],{"54ab":function(e,t,c){"use strict";c("9380")},"744b":function(e,t,c){e.exports=c.p+"img/paid.584a2bb8.svg"},9380:function(e,t,c){},d0be:function(e,t,c){"use strict";c.r(t);var r=c("7a23"),a=c("744b"),o=c.n(a),n=Object(r["withScopeId"])("data-v-5b0a8e2f");Object(r["pushScopeId"])("data-v-5b0a8e2f");var i=Object(r["createVNode"])("div",{class:"banner d-flex justify-content-center align-items-center position-relative"},null,-1),s={class:"container-fluid bg-light"},d={class:"row"},l=Object(r["createVNode"])("div",{class:"col-md-5"},[Object(r["createVNode"])("img",{src:o.a,alt:"paid",class:"paid-img"})],-1),p={class:"col-md-7 mt-5"},u=Object(r["createVNode"])("h3",{class:"text-primary fw-bold"},"恭喜完成付款",-1),b=Object(r["createVNode"])("p",null," 付款完成後，商品預計3~5天內寄出，還請耐心等待!! ",-1),j=Object(r["createTextVNode"])("繼續購物"),O={class:"mt-5 pb-5"},f=Object(r["createVNode"])("h3",{class:"text-danger"},"熱銷商品",-1);Object(r["popScopeId"])();var m=n((function(e,t,c,a,o,m){var h=Object(r["resolveComponent"])("router-link"),w=Object(r["resolveComponent"])("HotProducts");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[i,Object(r["createVNode"])("section",s,[Object(r["createVNode"])("div",d,[l,Object(r["createVNode"])("div",p,[u,b,Object(r["createVNode"])(h,{to:"/products/productList",class:"btn btn-outline-primary"},{default:n((function(){return[j]})),_:1}),Object(r["createVNode"])("div",O,[f,Object(r["createVNode"])(w)])])])])],64)})),h={class:"card card-product"},w={class:"card-product__img"},v={class:"card-body text-center"},g={class:"card-text mb-0"},V={class:"text-muted"},N={class:"card-title"};function k(e,t,c,a,o,n){var i=Object(r["resolveComponent"])("SwiperSlide"),s=Object(r["resolveComponent"])("Swiper");return Object(r["openBlock"])(),Object(r["createBlock"])(s,{spaceBetween:10,breakpoints:{640:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:2,spaceBetween:10},1024:{slidesPerView:3,spaceBetween:15}},autoplay:{delay:4e3,disableOnInteraction:!1},class:"mySwiper pb-6 pb-md-1 pt-1"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(n.filterHot,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(i,{key:e.id},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",h,[Object(r["createVNode"])("div",w,[Object(r["createVNode"])("img",{src:e.imageUrl,class:"card-img-top",alt:e.title},null,8,["src","alt"])]),Object(r["createVNode"])("div",v,[Object(r["createVNode"])("p",g,[Object(r["createVNode"])("small",V,Object(r["toDisplayString"])(e.category),1)]),Object(r["createVNode"])("h5",N,Object(r["toDisplayString"])(e.title),1),Object(r["createVNode"])("a",{href:"#",class:"text-primary stretched-link fw-bold",onClick:Object(r["withModifiers"])((function(t){return n.goDetail(e)}),["prevent"])}," 去看看... ",8,["onClick"])])])]})),_:2},1024)})),128))]})),_:1})}c("4de4"),c("99af");var y=c("90ea"),x=c("a16a"),S=c("6d3b"),B=c("d17a"),C=c("5dc8");S["a"].use([B["a"],C["a"]]);var _={inject:["emitter"],components:{Swiper:y["a"],SwiperSlide:x["a"]},data:function(){return{products:[],product:{},qty:1}},created:function(){this.getProducts()},computed:{filterHot:function(){return this.products.filter((function(e){return e.is_hot}))}},methods:{getProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/products");this.$http.get(t).then((function(t){t.data.success?e.products=t.data.products:e.$swal({title:t.data.message,icon:"error"})})).catch((function(t){e.$swal({icon:"error",title:"Oops...",text:"Something went wrong!",footer:t})}))},goDetail:function(e){this.$router.push({path:"/products/product/".concat(e.id)})}}};_.render=k;var P=_,I={components:{HotProducts:P}};c("54ab");I.render=m,I.__scopeId="data-v-5b0a8e2f";t["default"]=I}}]);
//# sourceMappingURL=chunk-744ed72c.d071bbdb.js.map