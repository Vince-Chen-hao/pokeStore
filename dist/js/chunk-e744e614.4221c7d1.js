(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e744e614"],{"158c":function(t,e,a){},"21a8":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"shop"},[s("img",{attrs:{src:a("6d88"),alt:""}})]),s("div",{staticClass:"container"},[s("img",{attrs:{src:a("94d3"),alt:""}}),s("div",{staticClass:"info"},[s("p",[t._v("實體店面：真新鎮大木路一段6號")]),s("p",[t._v("營業時間：00:00-24:00")])]),s("div",[s("p",[t._v("作者：icguanyu "),s("a",{attrs:{href:"https://github.com/icguanyu",target:"_blank"}},[t._v("Github")]),t._v("｜"),s("a",{attrs:{href:"https://codepen.io/icguanyu/",target:"_blank"}},[t._v("Codepen")])]),s("p",[t._v("練習作品｜"),s("a",{attrs:{href:"https://www.pokemon.com/us/",target:"_blank"}},[t._v("圖片來源：https://www.pokemon.com/us/")])])])])])}],o=(a("1157"),{name:"bottom"}),i=o,n=(a("f8e8"),a("2877")),c=Object(n["a"])(i,s,r,!1,null,"a6310b40",null);c.options.__file="bottom.vue";e["a"]=c.exports},"67ae":function(t,e,a){},"6d88":function(t,e,a){t.exports=a.p+"img/shop.10d9bde9.png"},"94d3":function(t,e,a){t.exports=a.p+"img/pokemon_store.7524e985.png"},9837:function(t,e,a){t.exports=a.p+"img/1.bf6cea83.png"},"990b":function(t,e,a){},"9d8d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"navbar"},[s("div",{staticClass:"logo"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:a("94d3"),alt:""}})])],1),s("div",{staticClass:"top_right"},[s("ul",[s("router-link",{attrs:{to:"/signin"}},[t.status?t._e():s("li",{staticClass:"sign"},[t._v("管理員登入")])]),t.status?s("li",{staticClass:"sign",on:{click:t.signout}},[t._v("登出")]):t._e(),s("router-link",{attrs:{to:"/checkout"}},[t.status?t._e():s("li",{staticClass:"cart"},[t._v("購物車("+t._s(t.cart.carts.length)+")")])]),s("router-link",{attrs:{to:"/admin"}},[t.status?s("li",{staticClass:"sign"},[t._v("進入後台")]):t._e()])],1),s("div",{staticClass:"hamburgur",on:{click:function(e){e.stopPropagation(),t.hamburger=!t.hamburger,t.mm=!t.mm}}},[s("div",{staticClass:"nav_icon",class:{nav_open:t.hamburger}})])])]),s("div",{staticClass:"main_menu"},[s("ul",[s("router-link",{attrs:{to:"/"}},[s("li",[t._v("回首頁")])]),s("router-link",{attrs:{to:"/categories"}},[s("li",[t._v("精靈球")])]),s("router-link",{attrs:{to:"/categories"}},[s("li",[t._v("藥品補給")])]),s("router-link",{attrs:{to:"/categories"}},[s("li",[t._v("生活道具")])]),s("router-link",{attrs:{to:"/categories"}},[s("li",[t._v("購物商城")])])],1)]),s("div",{staticClass:"mobile_menu",class:{active:t.mm},on:{click:function(e){e.stopPropagation(),t.hamburger=!t.hamburger,t.mm=!t.mm}}},[s("ul",{staticClass:"option"},[s("router-link",{attrs:{to:"/admin"}},[t.status?s("li",{staticClass:"sign"},[t._v("進入後台管理")]):t._e()]),s("router-link",{attrs:{to:"/signin"}},[t.status?t._e():s("li",{staticClass:"sign"},[t._v("登入/註冊")])]),t.status?s("li",{staticClass:"sign",on:{click:t.signout}},[t._v("登出！")]):t._e()],1),s("ul",{staticClass:"menu"},[s("router-link",{attrs:{to:"/"}},[s("li",[t._v("回首頁")])]),s("router-link",{attrs:{to:"/categories"}},[s("li",[t._v("精靈球")])]),s("router-link",{attrs:{to:"/categories"}},[s("li",[t._v("藥品補給")])]),s("router-link",{attrs:{to:"/categories"}},[s("li",[t._v("生活道具")])]),s("router-link",{attrs:{to:"/categories"}},[s("li",[t._v("購物商城")])])],1)])])},r=[],o=a("c93e"),i=a("2f62"),n={name:"navbar",data:function(){return{hamburger:!1,mm:!1}},methods:{signout:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/logout");t.$store.dispatch("updateLoading",!0),this.$http.post(e).then(function(e){e.data.success&&(t.$router.push("/signin"),t.$store.dispatch("updateLoading",!1))})}},computed:Object(o["a"])({},Object(i["c"])(["cart","status"])),created:function(){this.$store.dispatch("check")}},c=n,l=(a("f627"),a("2877")),u=Object(l["a"])(c,s,r,!1,null,"aa58a8be",null);u.options.__file="navbar.vue";e["a"]=u.exports},b91e:function(t,e,a){"use strict";var s=a("67ae"),r=a.n(s);r.a},bf32:function(t,e,a){t.exports=a.p+"img/2.cea943ba.png"},e86f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),a("div",{staticClass:"checkout"},[t._m(0),t.cart.carts.length?a("div",{staticClass:"cartlist"},[a("div",{staticClass:"action"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],attrs:{type:"text",placeholder:"請輸入優惠碼 試試abc?"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),a("button",{on:{click:function(e){t.addCouponCode(t.coupon_code)}}},[t._v("套用優惠碼")]),a("button",[t._v("想要優惠碼?")])]),a("table",[t._m(1),a("tbody",t._l(t.cart.carts,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.product.title)+"\n              "),e.coupon?a("span",[t._v("｜已折價")]):t._e()]),a("td",[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),a("td",[a("p",[t._v("原價：NT"+t._s(t._f("currency")(e.total)))]),e.final_total!==e.total?a("span",[t._v("優惠價：NT"+t._s(t._f("currency")(e.final_total)))]):t._e()]),a("td",[a("i",{staticClass:"far fa-trash-alt",on:{click:function(a){t.removeCartItem(e.id)}}})])])})),a("tfoot",[a("tr",{staticClass:"total"},[a("td",{attrs:{colspan:"2"}},[t._v("總計")]),a("td",{attrs:{colspan:"2"}},[a("p",[t._v(" 原價NT"+t._s(t._f("currency")(t.cart.total)))]),t.cart.final_total!==t.cart.total?a("p",{staticClass:"onsale"},[t._v("\n                折扣價:NT"+t._s(t._f("currency")(t.cart.final_total))+"\n              ")]):t._e()])])])])]):a("p",{staticClass:"empty"},[t._v("購物車沒有東西哦！")]),t._m(2),a("label",{attrs:{for:"useremail"}},[t._v("Email\n      "),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("請輸入正確格式的信箱")]):t._e()]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{type:"email",name:"email",autocomplete:"on",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),a("label",{attrs:{for:"username"}},[t._v("收件人姓名\n      "),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("請輸入姓名")]):t._e()]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",autocomplete:"on",name:"name",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),a("label",{attrs:{for:"usertel"}},[t._v("收件人電話\n      "),t.errors.has("regex")?a("span",{staticClass:"text-danger"},[t._v("請輸入十碼正確手機號碼")]):t._e()]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^[09]{2}[0-9]{8}$/},expression:"{required:true,regex: /^[09]{2}[0-9]{8}$/}"}],staticClass:"form-control",attrs:{type:"text",autocomplete:"on",name:"regex",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),a("label",{attrs:{for:"useraddress"}},[t._v("收件人地址\n      "),t.errors.has("address")?a("span",{staticClass:"text-danger"},[t._v("地址欄位不得留空")]):t._e()]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"address",autocomplete:"on",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),a("label",{attrs:{for:"useraddress"}},[t._v("特殊需求")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"",cols:"10",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}}),a("button",{on:{click:t.createOrder}},[t._v("送出訂單")])]),a("bottom")],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("img",{attrs:{src:a("bf32"),alt:""}}),s("p",[t._v("購物車")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",{staticClass:"item_title"},[t._v("品名")]),a("td",{staticClass:"item_count"},[t._v("數量")]),a("td",{staticClass:"item_price"},[t._v("單價")]),a("td",{staticClass:"item_delete"},[t._v("刪除")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("img",{attrs:{src:a("9837"),alt:""}}),s("p",[t._v("帳單資訊")])])}],o=a("c93e"),i=a("2f62"),n=a("9d8d"),c=a("21a8"),l={name:"Home",data:function(){return{coupon_code:"",orderId:"",order:{user:{}},form:{user:{email:"",name:"",tel:"",address:""},message:""}}},components:{bottom:c["a"],navbar:n["a"]},methods:Object(o["a"])({createOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("icguanyu","/order");t.$validator.validate().then(function(a){a?(t.$store.dispatch("updateLoading",!0),t.$http.post(e,{data:t.form}).then(function(e){e.data.success&&(t.showalert(),setTimeout(function(){t.$router.push("/comfirm/".concat(e.data.orderId))},3e3)),t.$store.dispatch("updateLoading",!1)})):console.log("欄位不完整")})},showalert:function(t){var e={boolean:!0,title:"訂單已送出！"};this.$store.dispatch("showalert",e)}},Object(i["b"])(["getCart","removeCartItem","addCouponCode"])),computed:Object(o["a"])({},Object(i["c"])(["cart"])),created:function(){this.getCart()}},u=l,m=(a("b91e"),a("2877")),d=Object(m["a"])(u,s,r,!1,null,"6bbb5a0c",null);d.options.__file="checkout.vue";e["default"]=d.exports},f627:function(t,e,a){"use strict";var s=a("158c"),r=a.n(s);r.a},f8e8:function(t,e,a){"use strict";var s=a("990b"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-e744e614.4221c7d1.js.map