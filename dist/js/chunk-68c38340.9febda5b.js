(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68c38340"],{"1dde":function(e,t,o){var a=o("d039"),c=o("b622"),n=o("2d00"),r=c("species");e.exports=function(e){return n>=51||!a((function(){var t=[],o=t.constructor={};return o[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"21f9":function(e,t,o){},"55e9":function(e,t,o){"use strict";o("21f9")},6915:function(e,t,o){},8418:function(e,t,o){"use strict";var a=o("c04e"),c=o("9bf2"),n=o("5c6c");e.exports=function(e,t,o){var r=a(t);r in e?c.f(e,r,n(0,o)):e[r]=o}},"88ad":function(e,t,o){"use strict";o("f412")},"88e9":function(e,t,o){"use strict";o.r(t);var a=o("7a23"),c={class:"position-relative"},n=Object(a["createVNode"])("div",{id:"main"},null,-1);function r(e,t,o,r,i,s){var l=Object(a["resolveComponent"])("Navbar"),d=Object(a["resolveComponent"])("router-view"),b=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",c,[Object(a["createVNode"])(l,{carts:i.carts},null,8,["carts"])]),n,Object(a["createVNode"])(d),Object(a["createVNode"])(b)],64)}var i={class:"container d-flex justify-content-between align-items-center"},s=Object(a["createTextVNode"])("HanShe"),l=Object(a["createVNode"])("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#layoutNav","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),d={class:"\n          collapse\n          navbar-collapse\n          mx-lg-auto\n          d-lg-flex\n          justify-content-lg-end\n          align-items-center\n        ",id:"layoutNav"},b={class:"navbar-nav"},u=Object(a["createTextVNode"])("首頁"),p=Object(a["createTextVNode"])("關於寒舍"),f=Object(a["createTextVNode"])("寒舍商品"),h=Object(a["createVNode"])("i",{class:"bi bi-cart-plus me-2"},null,-1);function v(e,t,o,c,n,r){var v=Object(a["resolveComponent"])("router-link"),m=Object(a["resolveComponent"])("router-Link");return Object(a["openBlock"])(),Object(a["createBlock"])("nav",{class:["navbar navbar-expand-lg start-0 end-0",[n.classList.navbarTop,n.classList.navbarInner]],id:"nav-top"},[Object(a["createVNode"])("div",i,[Object(a["createVNode"])(v,{to:"/",class:"navbar-brand logoFont text-primary"},{default:Object(a["withCtx"])((function(){return[s]})),_:1}),l,Object(a["createVNode"])("div",d,[Object(a["createVNode"])("div",b,[Object(a["createVNode"])(v,{to:"/home",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[u]})),_:1}),Object(a["createVNode"])(v,{to:"/about",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[p]})),_:1}),Object(a["createVNode"])(v,{to:"/products/productList",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[f]})),_:1}),Object(a["createVNode"])(m,{to:"/cart/cartList",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[h,Object(a["createVNode"])("small",null,"[ "+Object(a["toDisplayString"])(n.carts.length)+" ]",1)]})),_:1})])])])],2)}o("99af");var m={inject:["emitter"],data:function(){return{classList:"",carts:[]}},methods:{navbarTransition:function(){var e=window.scrollY,t=document.querySelector("#main");e>t.offsetTop?this.classList={navbarTop:"bg-light",navbarInner:["navbar-light","shadow","fixed-top"]}:this.classList={navbarTop:["bg-transparent"],navbarInner:["navbar-dark","fw-bold","py-3","position-absolute","z-index-2","h5"]}},getCarts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/cart");this.$http.get(t).then((function(t){e.carts=t.data.data.carts,e.finalTotal=t.data.data.final_total}))}},mounted:function(){window.addEventListener("scroll",this.navbarTransition),this.emitter.on("update-cart",this.getCarts)},unmounted:function(){window.removeEventListener("scroll",this.navbarTransition)}};o("d8a0");m.render=v;var j=m,O={class:"bg-dark position-relative",id:"layoutFooter"},g={class:"container"},N={class:"row"},V=Object(a["createVNode"])("div",{class:"col-md-4 pt-5"},[Object(a["createVNode"])("h2",{class:"h2 text-primary pb-3 logoFont mb-0"},"HANSHE"),Object(a["createVNode"])("ul",{class:"text-white"},[Object(a["createVNode"])("li",null,"客戶至上"),Object(a["createVNode"])("li",null,"品質第一"),Object(a["createVNode"])("li",null,"服務迅速")])],-1),w={class:"col-md-4 pt-5"},x=Object(a["createVNode"])("h2",{class:"h3 text-light border-bottom pb-3 border-secondary"}," 寒舍資訊 ",-1),k={class:"list-unstyled text-light footer-link-list"},y={class:""},T=Object(a["createTextVNode"])("寒舍商品"),C={class:""},M=Object(a["createTextVNode"])("關於寒舍"),L=Object(a["createVNode"])("li",{class:""},[Object(a["createVNode"])("a",{class:"text-decoration-none link-light",href:"#"},"FAQs")],-1),B={class:"col-md-4 pt-5"},_=Object(a["createVNode"])("h2",{class:"h3 text-light border-bottom pb-3 border-secondary"}," 管理者資訊 ",-1),P={class:"list-unstyled text-light footer-link-list"},E=Object(a["createTextVNode"])(" 管理員後台 "),F=Object(a["createVNode"])("i",{class:"bi bi-person-fill"},null,-1),S=Object(a["createStaticVNode"])('<div class="row text-light mb-4"><div class="col-12 mb-3"><div class="w-100 my-3 border-top border-secondary"></div></div><div class="col-auto me-auto"><ul class="list-inline text-left fs-4 footer-icons"><li class="list-inline-item text-center rounded-circle"><a class="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i class="bi bi-facebook"></i></a></li><li class="list-inline-item text-center rounded-circle"><a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a></li><li class="list-inline-item text-center rounded-circle"><a class="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i class="bi bi-linkedin"></i></a></li><li class="list-inline-item text-center rounded-circle"><a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i class="bi bi-github"></i></a></li></ul></div><div class="col-auto"><div class="input-group mb-3"><input type="text" class="form-control" placeholder="輸入Email訂閱最新資訊吧!!" aria-label="Recipient&#39;s username" aria-describedby="button-addon2"><button class="btn btn-primary text-white" type="button" id="button-addon2"> 訂閱我們 </button></div></div></div>',1),$=Object(a["createStaticVNode"])('<div class="w-100 bg-black py-3"><div class="container"><div class="row pt-2"><div class="col-12"><p class="text-left text-light"> Copyright © 2021 made by LarryH | 個人作品無任何商業用途 </p></div></div></div></div>',1);function A(e,t,o,c,n,r){var i=Object(a["resolveComponent"])("router-link"),s=Object(a["resolveComponent"])("LoginModal");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("footer",O,[Object(a["createVNode"])("a",{href:"#",class:["to-top text-secondary",n.isTop?"goTopAfter":""],onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return r.goTop()}),["prevent"]))},null,2),Object(a["createVNode"])("div",g,[Object(a["createVNode"])("div",N,[V,Object(a["createVNode"])("div",w,[x,Object(a["createVNode"])("ul",k,[Object(a["createVNode"])("li",y,[Object(a["createVNode"])(i,{to:"/products/category",class:"text-decoration-none link-light",href:"#"},{default:Object(a["withCtx"])((function(){return[T]})),_:1})]),Object(a["createVNode"])("li",C,[Object(a["createVNode"])(i,{to:"/about",class:"text-decoration-none link-light",href:"#"},{default:Object(a["withCtx"])((function(){return[M]})),_:1})]),L])]),Object(a["createVNode"])("div",B,[_,Object(a["createVNode"])("ul",P,[Object(a["createVNode"])("li",null,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-primary text-white border-0","data-bs-toggle":"LoginModal","data-bs-target":"#LoginModal",onClick:t[2]||(t[2]=function(){return r.openModal&&r.openModal.apply(r,arguments)})},[E,F])])])])]),S]),$]),Object(a["createVNode"])(s,{ref:"LoginModal",id:"LoginModal"},null,512)],64)}var D={class:"modal fade",ref:"loginModal",id:"loginMoal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},I={class:"modal-dialog modal-dialog-centered"},H={class:"modal-content"},J=Object(a["createVNode"])("div",{class:"modal-header bg-primary text-white"},[Object(a["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["createVNode"])("i",{class:"bi bi-person-fill"}),Object(a["createTextVNode"])(" 管理者登入 ")]),Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},Y={class:"form-floating mb-3"},q=Object(a["createVNode"])("label",{for:"floatingInput"},[Object(a["createVNode"])("i",{class:"bi bi-person-circle"}),Object(a["createTextVNode"])(" 管理人員帳號 ")],-1),z={class:"form-floating position-relative"},Q=Object(a["createVNode"])("label",{for:"floatingPassword"},[Object(a["createVNode"])("i",{class:"bi bi-shield-lock"}),Object(a["createTextVNode"])(" 管理人員密碼 ")],-1),R=Object(a["createVNode"])("div",{class:"modal-footer"},[Object(a["createVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消"),Object(a["createVNode"])("button",{type:"submit",class:"btn btn-outline-primary"},"確認登入")],-1);function G(e,t,o,c,n,r){return Object(a["openBlock"])(),Object(a["createBlock"])("div",D,[Object(a["createVNode"])("div",I,[Object(a["createVNode"])("div",H,[J,Object(a["createVNode"])("form",{onSubmit:t[5]||(t[5]=Object(a["withModifiers"])((function(){return r.login&&r.login.apply(r,arguments)}),["prevent"]))},[Object(a["createVNode"])("div",U,[Object(a["createVNode"])("div",Y,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.user.username=e})},null,512),[[a["vModelText"],n.user.username]]),q]),Object(a["createVNode"])("div",z,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:n.isChecked?"text":"password",class:"form-control",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.user.password=e})},null,8,["type"]),[[a["vModelDynamic"],n.user.password]]),n.isChecked?(Object(a["openBlock"])(),Object(a["createBlock"])("i",{key:0,class:"bi bi-eye position-absolute top-50 end-0 translate-middle",onClick:t[3]||(t[3]=function(){return r.showPassword&&r.showPassword.apply(r,arguments)})})):Object(a["createCommentVNode"])("",!0),n.isChecked?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("i",{key:1,class:"bi bi-eye-slash position-absolute top-50 end-0 translate-middle",ref:"showPassword",onClick:t[4]||(t[4]=function(){return r.showPassword&&r.showPassword.apply(r,arguments)})},null,512)),Q])]),R],32)])])],512)}var K=o("7b17"),W={data:function(){return{loginModal:{},isChecked:!1,user:{username:"",password:""}}},mounted:function(){this.loginModal=new K["a"](this.$refs.loginModal)},methods:{showModal:function(){this.loginModal.show()},hideModal:function(){this.loginModal.hide()},showPassword:function(){this.isChecked?this.isChecked=!1:this.isChecked=!0},login:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/admin/signin");this.$http.post(t,this.user).then((function(t){if(t.data.success){e.$swal({title:t.data.message,icon:"success"});var o=t.data,a=o.token,c=o.expired;document.cookie="myToken=".concat(a,"; expires=").concat(new Date(c)),e.$router.push("/admin/adminProducts"),e.loginModal.hide()}else e.$swal({title:t.data.message,icon:"error"}),e.$router.push("/home")})).catch((function(e){console.log(e)}))}}};W.render=G;var X=W,Z={components:{LoginModal:X},data:function(){return{scrollNum:0,isTop:!1}},mounted:function(){var e=this;window.addEventListener("scroll",(function(){var t=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;e.scrollNum=t,e.isTop=t>=100}))},methods:{openModal:function(){this.$refs.LoginModal.showModal()},goTop:function(){document.documentElement.scrollTop=0}}};o("55e9");Z.render=A;var ee=Z,te=o("cfb9"),oe={components:{Navbar:j,Footer:ee},provide:function(){return{emitter:te["a"]}},data:function(){return{carts:[],isLoading:!1,finalTotal:""}}};o("88ad");oe.render=r;t["default"]=oe},"99af":function(e,t,o){"use strict";var a=o("23e7"),c=o("d039"),n=o("e8b5"),r=o("861d"),i=o("7b0b"),s=o("50c4"),l=o("8418"),d=o("65f0"),b=o("1dde"),u=o("b622"),p=o("2d00"),f=u("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",m=p>=51||!c((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),j=b("concat"),O=function(e){if(!r(e))return!1;var t=e[f];return void 0!==t?!!t:n(e)},g=!m||!j;a({target:"Array",proto:!0,forced:g},{concat:function(e){var t,o,a,c,n,r=i(this),b=d(r,0),u=0;for(t=-1,a=arguments.length;t<a;t++)if(n=-1===t?r:arguments[t],O(n)){if(c=s(n.length),u+c>h)throw TypeError(v);for(o=0;o<c;o++,u++)o in n&&l(b,u,n[o])}else{if(u>=h)throw TypeError(v);l(b,u++,n)}return b.length=u,b}})},cfb9:function(e,t,o){"use strict";var a=function(e){return{all:e=e||new Map,on:function(t,o){var a=e.get(t);a?a.push(o):e.set(t,[o])},off:function(t,o){var a=e.get(t);a&&(o?a.splice(a.indexOf(o)>>>0,1):e.set(t,[]))},emit:function(t,o){var a=e.get(t);a&&a.slice().map((function(e){e(o)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,o)}))}}},c=a();t["a"]=c},d8a0:function(e,t,o){"use strict";o("6915")},f412:function(e,t,o){}}]);
//# sourceMappingURL=chunk-68c38340.9febda5b.js.map