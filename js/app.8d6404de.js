(function(t){function e(e){for(var o,a,s=e[0],i=e[1],u=e[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var i=n[s];0!==c[i]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},c={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/shopping_site_vue_js/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b13":function(t,e,n){},3157:function(t,e,n){"use strict";var o=n("5e2e"),c=n.n(o);c.a},"3f96":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=n("2877"),s={},i=Object(a["a"])(s,c,r,!1,null,null,null),u=i.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Footer",{on:{ckeckOut:t.ckeckOut}}),n("Products"),t.modalFlag?n("Modal",{attrs:{total_price:t.total_price},on:{close:t.close}}):t._e()],1)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Fragment",[n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-content"},[t._v(" Qty "+t._s(t.totalQuantity(t.$store.state.products))+" ")]),n("br"),n("br"),n("div",{staticClass:"footer-content"},[t._v(" Total "+t._s(t.totalPrice(t.$store.state.products))+" ")]),n("button",{staticClass:"checkout-btn",on:{click:function(e){t.ckeckOut(t.totalPrice(t.$store.state.products))}}},[t._v("CHECKOUT")])])])},m=[],_=(n("4160"),n("159b"),n("3f08")),v={data:function(){return{total:0,quantity:0}},components:{Fragment:_["a"]},methods:{totalQuantity:function(t){return this.calculate_val(t),this.quantity},totalPrice:function(t){return this.calculate_val(t),this.total},calculate_val:function(t){var e=0,n=0;return t.length>0&&t.forEach((function(t){e+=t["count"],n+=t["count"]*t["price"]})),this.total=n,this.quantity=e,!0},ckeckOut:function(t){this.$emit("ckeckOut",t)}}},b=v,h=(n("6b92"),Object(a["a"])(b,p,m,!1,null,"41b210da",null)),C=h.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.products,(function(e,o){return n("div",{key:o,staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"column side"},[n("img",{staticClass:"product-img",attrs:{src:e.image_url,width:"100"}}),n("div",[t._v(t._s(e.offer_text))])]),n("div",{staticClass:"column middle"},[n("div",{staticClass:"product-brand-name"},[t._v(t._s(e.brand_name))]),n("div",{staticClass:"product-name"},[t._v(t._s(e.product_name))]),n("div",{staticClass:"product-details"},[t._v(t._s(e.quantity))]),n("div",{staticClass:"product-details"},[t._v(t._s(e.MRF))]),n("div",{staticClass:"product-details"},[n("b",[t._v("RS "),n("span"),t._v(t._s(e.price))])]),n("div",{staticClass:"add-cart"},[n("button",{staticClass:"cart-button",on:{click:function(e){return t.incrementCount(o)}}},[t._v("Add To Cart")]),n("span",{staticStyle:{"padding-left":"30px"}},[0==e.count?n("button",{staticClass:"inc-dec-button",attrs:{disabled:""},on:{click:function(n){return t.decrementCount(o,e.count)}}},[t._v("-")]):n("button",{staticClass:"inc-dec-button",on:{click:function(e){return t.decrementCount(o)}}},[t._v("-")]),t._v(" "+t._s(e.count)+" "),n("button",{staticClass:"inc-dec-button",on:{click:function(e){return t.incrementCount(o)}}},[t._v("+")])])]),n("div")])]),n("hr")])})),0)},O=[],k=n("5530"),g="fetchProducts",j="increment_count",w="decrement_count",P="empty_cart",$=n("2f62"),x={name:"products",computed:Object(k["a"])({},Object($["b"])({products:"products"})),methods:{decrementCount:function(t){this.$store.dispatch(w,t)},incrementCount:function(t){this.$store.dispatch(j,t)}}},F=x,E=(n("8a50"),Object(a["a"])(F,y,O,!1,null,"45e585b0",null)),S=E.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-backdrop"},[n("div",{staticClass:"modal"},[n("header",{staticClass:"modal-header"},[t._t("header",[n("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:function(e){return t.close("close")}}},[t._v(" x ")])])],2),n("section",{staticClass:"modal-body"},[0!=t.total_price?t._t("body",[n("h3",[t._v("Transaction successful")]),n("h4",[n("b",[t._v("Total Price : "+t._s(t.total_price))])])]):t._t("body",[t._v(" Cart is empty ")])],2),n("footer",{staticClass:"modal-footer"},[t._t("footer",[n("button",{staticClass:"btn-green",attrs:{type:"button"},on:{click:function(e){return t.close("ok")}}},[t._v(" ok ")])])],2)])])},M=[],q={name:"modal",methods:{close:function(t){this.$emit("close",t)}},props:["total_price"]},D=q,H=(n("3157"),Object(a["a"])(D,T,M,!1,null,"0e370668",null)),Q=H.exports,J={name:"Home",data:function(){return{total_price:0,modalFlag:!1}},components:{Footer:C,Products:S,Modal:Q},mounted:function(){this.$store.dispatch(g)},methods:{ckeckOut:function(t){this.total_price=t,this.modalFlag=!0},close:function(t){this.modalFlag=!1,"ok"==t&&this.$store.dispatch(P)}}},R=J,A=Object(a["a"])(R,d,f,!1,null,null,null),K=A.exports;o["a"].use(l["a"]);var U,z=[{path:"/",name:"Home",component:K}],B=new l["a"]({mode:"history",base:"/shopping_site_vue_js/",routes:z}),G=B,I=(n("d3b7"),n("ade3"));o["a"].use($["a"]);var L=new $["a"].Store({state:{products:{}},mutations:{setProductsDetails:function(t,e){t.products=e},incrementCount:function(t,e){t.products[e].count=t.products[e].count+1},decrementCount:function(t,e){t.products[e].count=t.products[e].count-1},emptyCart:function(t){t.products.forEach((function(t){t["count"]=0}))}},actions:(U={},Object(I["a"])(U,g,(function(t){fetch("productsDetails.json").then((function(t){return t.json()})).then((function(e){t.commit("setProductsDetails",e.data)})).catch((function(){}))})),Object(I["a"])(U,j,(function(t,e){t.commit("incrementCount",e)})),Object(I["a"])(U,w,(function(t,e){t.commit("decrementCount",e)})),Object(I["a"])(U,P,(function(t){t.commit("emptyCart")})),U),modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:G,store:L,render:function(t){return t(u)}}).$mount("#app")},"5e2e":function(t,e,n){},"6b92":function(t,e,n){"use strict";var o=n("3f96"),c=n.n(o);c.a},"8a50":function(t,e,n){"use strict";var o=n("0b13"),c=n.n(o);c.a}});
//# sourceMappingURL=app.8d6404de.js.map