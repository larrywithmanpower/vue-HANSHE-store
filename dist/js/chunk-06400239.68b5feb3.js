(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06400239"],{"1dde":function(e,t,a){var r=a("d039"),o=a("b622"),c=a("2d00"),n=o("species");e.exports=function(e){return c>=51||!r((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,a){"use strict";var r=a("c04e"),o=a("9bf2"),c=a("5c6c");e.exports=function(e,t,a){var n=r(t);n in e?o.f(e,n,c(0,a)):e[n]=a}},9986:function(e,t,a){"use strict";a.r(t);a("b0c0");var r=a("7a23"),o={class:"d-flex justify-content-center"},c={class:"mb-3"},n=Object(r["createVNode"])("label",{for:"email",class:"form-label"},"Email",-1),s={class:"mb-3"},l=Object(r["createVNode"])("label",{for:"username",class:"form-label"},"收件人姓名",-1),i={class:"mb-3"},d=Object(r["createVNode"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),u={class:"mb-3"},m=Object(r["createVNode"])("label",{for:"address",class:"form-label"},"收件人地址",-1),f={class:"mb-3"},b=Object(r["createVNode"])("label",{for:"leaveMsg",class:"form-label"},"留言",-1),p={class:"d-flex justify-content-between"};function h(e,t,a,h,v,V){var j=Object(r["resolveComponent"])("Field"),O=Object(r["resolveComponent"])("Error-message"),g=Object(r["resolveComponent"])("Form");return Object(r["openBlock"])(),Object(r["createBlock"])("section",o,[Object(r["createVNode"])(g,{class:"col-6",onSubmit:V.createOrder,ref:"form"},{default:Object(r["withCtx"])((function(a){var o=a.errors;return[Object(r["createVNode"])("div",c,[n,Object(r["createVNode"])(j,{type:"email",class:["form-control",{"is-invalid":o["email"]}],id:"email",placeholder:"請輸入Email",modelValue:v.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return v.form.user.email=e}),name:"email",rules:"email|required"},null,8,["modelValue","class"]),Object(r["createVNode"])(O,{name:"email",class:"invalid-feedback"})]),Object(r["createVNode"])("div",s,[l,Object(r["createVNode"])(j,{type:"text",class:["form-control",{"is-invalid":o["姓名"]}],id:"username",placeholder:"請輸入姓名",modelValue:v.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return v.form.user.name=e}),name:"姓名",rules:"required"},null,8,["modelValue","class"]),Object(r["createVNode"])(O,{name:"姓名",class:"invalid-feedback"})]),Object(r["createVNode"])("div",i,[d,Object(r["createVNode"])(j,{type:"tel",class:["form-control",{"is-invalid":o["電話"]}],id:"tel",placeholder:"請輸入電話",modelValue:v.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return v.form.user.tel=e}),name:"電話",rules:V.isPhone},null,8,["modelValue","rules","class"]),Object(r["createVNode"])(O,{name:"電話",class:"invalid-feedback"})]),Object(r["createVNode"])("div",u,[m,Object(r["createVNode"])(j,{type:"text",class:["form-control",{"is-invalid":o["地址"]}],id:"address",placeholder:"請輸入地址",modelValue:v.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return v.form.user.address=e}),name:"地址",rules:"required"},null,8,["modelValue","class"]),Object(r["createVNode"])(O,{name:"地址",class:"invalid-feedback"})]),Object(r["createVNode"])("div",f,[b,Object(r["withDirectives"])(Object(r["createVNode"])("textarea",{type:"text",class:"form-control",id:"leaveMsg",placeholder:"你想說什麼??",rows:"5","onUpdate:modelValue":t[5]||(t[5]=function(e){return v.form.message=e})},null,512),[[r["vModelText"],v.form.message]])]),Object(r["createVNode"])("div",p,[Object(r["createVNode"])("button",{type:"submit",class:"btn btn-outline-primary",onClick:t[6]||(t[6]=function(t){return e.$router.go(-1)})}," 回上一步 "),Object(r["createVNode"])("button",{type:"submit",class:"btn btn-danger",disabled:0===v.carts.length}," 送出訂單 ",8,["disabled"])])]})),_:1},8,["onSubmit"])])}a("99af");var v={inject:["emitter"],data:function(){return{carts:[],form:{user:{name:"",email:"",tel:"",address:""},message:""}}},created:function(){this.getCarts()},methods:{getCarts:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/cart");this.$http.get(t).then((function(t){e.emitter.emit("update-cart"),e.carts=t.data.data.carts,e.finalTotal=t.data.data.final_total,e.isLoading=!1}))},createOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/order"),a=this.form.user,r=this.form.message.message;this.$http.post(t,{data:{user:a,message:r}}).then((function(t){if(t.data.success){console.log(t);var a=t.data.orderId;alert(t.data.message),//! VeeValidate內建函式
e.$refs.form.resetForm(),e.form.message="",e.carts=[],e.finalTotal="",e.isLoading=!1,e.emitter.emit("update-cart"),e.$router.push("/cart/cartPayment/".concat(a))}else alert(t.data.message)})).catch((function(e){console.log(e)}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的手機號碼"}}};v.render=h;t["default"]=v},"99af":function(e,t,a){"use strict";var r=a("23e7"),o=a("d039"),c=a("e8b5"),n=a("861d"),s=a("7b0b"),l=a("50c4"),i=a("8418"),d=a("65f0"),u=a("1dde"),m=a("b622"),f=a("2d00"),b=m("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",v=f>=51||!o((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),V=u("concat"),j=function(e){if(!n(e))return!1;var t=e[b];return void 0!==t?!!t:c(e)},O=!v||!V;r({target:"Array",proto:!0,forced:O},{concat:function(e){var t,a,r,o,c,n=s(this),u=d(n,0),m=0;for(t=-1,r=arguments.length;t<r;t++)if(c=-1===t?n:arguments[t],j(c)){if(o=l(c.length),m+o>p)throw TypeError(h);for(a=0;a<o;a++,m++)a in c&&i(u,m,c[a])}else{if(m>=p)throw TypeError(h);i(u,m++,c)}return u.length=m,u}})},b0c0:function(e,t,a){var r=a("83ab"),o=a("9bf2").f,c=Function.prototype,n=c.toString,s=/^\s*function ([^ (]*)/,l="name";r&&!(l in c)&&o(c,l,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-06400239.68b5feb3.js.map