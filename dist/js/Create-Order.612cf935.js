"use strict";(self["webpackChunkvue3_newbee"]=self["webpackChunkvue3_newbee"]||[]).push([[897],{8385:function(e,a,t){t.d(a,{Z:function(){return f}});var n=t(6252),s=t(3577),r=t(2201);const o=e=>((0,n.dD)("data-v-b560eeda"),e=e(),(0,n.Cn)(),e),d={class:"simple-header van-hairline--bottom"},c={key:1},i={class:"simple-header-name"},l=o((()=>(0,n._)("i",{class:"nbicon nbmore"},null,-1)));var u={__name:"SimpleHeader",props:{name:{type:String,default:""},back:{type:String,default:""},noback:{type:Boolean,default:!1}},setup(e){const a=(0,r.tv)(),t=()=>{a.go(-1)};return(a,r)=>((0,n.wg)(),(0,n.iD)("header",d,[a.isback?((0,n.wg)(),(0,n.iD)("i",c,"      ")):((0,n.wg)(),(0,n.iD)("i",{key:0,class:"nbicon nbfanhui",onClick:t})),(0,n._)("div",i,(0,s.zw)(e.name),1),l]))}},p=t(3744);const m=(0,p.Z)(u,[["__scopeId","data-v-b560eeda"]]);var f=m},9455:function(e,a,t){t.r(a),t.d(a,{default:function(){return L}});var n=t(6252),s=t(3577),r=t(2262),o=t(8385),d=t(4273),c=t(1302),i=t(8849),l=t(826),u=t(781),p=t(2201);const m=e=>((0,n.dD)("data-v-53c5da4f"),e=e(),(0,n.Cn)(),e),f={class:"create-order"},g={class:"address-wrap"},v={class:"address"},w={class:"good"},_={class:"good-img"},b=["src"],y={class:"good-desc"},k={class:"good-title"},I={class:"good-btn"},h={class:"price"},C={class:"pay-wrap"},S={class:"price"},N=m((()=>(0,n._)("span",null,"商品金额",-1))),Z={style:{width:"90%",margin:"0 auto",padding:"50px 0"}};var U={__name:"CreateOrder",setup(e){const a=(0,p.tv)(),t=(0,p.yj)(),m=(0,r.qj)({cartList:[],address:{},showPay:!1,orderNo:"",cartItemIds:[]});let{cartList:U,address:z,showPay:D,orderNo:L,cartItemIds:P}=(0,r.BK)(m);(0,n.bv)((()=>{W()}));const W=async()=>{u.F.loading({message:"加载中...",forbidClick:!0});const{addressId:e,cartItemIds:n}=t.query,s=n?JSON.parse(n):JSON.parse((0,l.tv)("cartItemIds"));(0,l.co)("cartItemIds",JSON.stringify(s));const{data:r}=await(0,d.or)({cartItemIds:s.join(",")});console.log(r);const{data:o}=e?await(0,c.HQ)(e):await(0,c.oX)();console.log(o),o?(m.cartList=r,m.address=o,u.F.clear()):a.push({path:"/address"})},F=async()=>{const e={addressId:m.address.addressId,cartItemIds:m.cartList.map((e=>e.cartItemId))},{data:a}=await(0,i.LV)(e);(0,l.co)("cartItemIds",""),m.orderNo=a,m.showPay=!0},H=async e=>{await(0,i._r)({orderNo:m.orderNo,payType:e}),(0,u.F)("支付成功"),setTimeout((()=>{a.push({path:"/order"})}),2e3)},O=(0,n.Fl)((()=>{let e=0;return m.cartList.forEach((a=>{e+=a.goodsCount*a.sellingPrice})),e}));return(e,a)=>{const t=(0,n.up)("van-icon"),d=(0,n.up)("van-button"),c=(0,n.up)("van-popup");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(o.Z,{name:"生成订单",onCallback:e.deleteLocal},null,8,["onCallback"]),(0,n._)("div",f,[(0,n._)("div",g,[(0,n._)("div",{class:"name",onClick:a[0]||(a[0]=(...a)=>e.goTo&&e.goTo(...a))},[(0,n._)("span",null,(0,s.zw)((0,r.SU)(z).userName),1),(0,n._)("span",null,(0,s.zw)((0,r.SU)(z).userPhone),1)]),(0,n._)("div",v,(0,s.zw)((0,r.SU)(z).provinceName)+" "+(0,s.zw)((0,r.SU)(z).cityName)+" "+(0,s.zw)((0,r.SU)(z).regionName)+" "+(0,s.zw)((0,r.SU)(z).detailAddress),1),(0,n.Wm)(t,{class:"arrow",name:"arrow"})]),(0,n._)("div",w,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,r.SU)(U),((a,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"good-item",key:t},[(0,n._)("div",_,[(0,n._)("img",{src:e.$filters.prefix(a.goodsCoverImg),alt:""},null,8,b)]),(0,n._)("div",y,[(0,n._)("div",k,[(0,n._)("span",null,(0,s.zw)(a.goodsName),1),(0,n._)("span",null,"x"+(0,s.zw)(a.goodsCount),1)]),(0,n._)("div",I,[(0,n._)("div",h,"¥"+(0,s.zw)(a.sellingPrice),1)])])])))),128))]),(0,n._)("div",C,[(0,n._)("div",S,[N,(0,n._)("span",null,"¥"+(0,s.zw)((0,r.SU)(O)),1)]),(0,n.Wm)(d,{onClick:F,class:"pay-btn",color:"#1baeae",type:"primary",block:""},{default:(0,n.w5)((()=>[(0,n.Uk)("生成订单")])),_:1})]),(0,n.Wm)(c,{closeable:"","close-on-click-overlay":!1,show:(0,r.SU)(D),"onUpdate:show":a[3]||(a[3]=e=>(0,r.dq)(D)?D.value=e:D=e),position:"bottom",style:{height:"30%"},onClose:e.close},{default:(0,n.w5)((()=>[(0,n._)("div",Z,[(0,n.Wm)(d,{style:{marginBottom:"10px"},color:"#1989fa",block:"",onClick:a[1]||(a[1]=e=>H(1))},{default:(0,n.w5)((()=>[(0,n.Uk)("支付宝支付")])),_:1}),(0,n.Wm)(d,{color:"#4fc08d",block:"",onClick:a[2]||(a[2]=e=>H(2))},{default:(0,n.w5)((()=>[(0,n.Uk)("微信支付")])),_:1})])])),_:1},8,["show","onClose"])])],64)}}},z=t(3744);const D=(0,z.Z)(U,[["__scopeId","data-v-53c5da4f"]]);var L=D},1302:function(e,a,t){t.d(a,{HQ:function(){return i},Ib:function(){return r},Je:function(){return o},mZ:function(){return c},oX:function(){return d},y$:function(){return s}});var n=t(8496);function s(e){return n.Z.post("/address",e)}function r(e){return n.Z.put("/address",e)}function o(e){return n.Z["delete"](`/address/${e}`)}function d(){return n.Z.get("/address/default")}function c(){return n.Z.get("/address",{pageNumber:1,pageSize:1e3})}function i(e){return n.Z.get(`/address/${e}`)}},8849:function(e,a,t){t.d(a,{Fw:function(){return r},LV:function(){return s},_r:function(){return o}});var n=t(8496);function s(e){return n.Z.post("/saveOrder",e)}function r(e){return n.Z.get("/order",{params:e})}function o(e){return n.Z.get("/paySuccess",{params:e})}}}]);
//# sourceMappingURL=Create-Order.612cf935.js.map