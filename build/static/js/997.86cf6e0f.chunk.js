(self.webpackChunkcubdefi_frontend=self.webpackChunkcubdefi_frontend||[]).push([[997],{23282:function(n,e,t){"use strict";var r=t(1413),i=(t(47313),t(90240)),s=t(11828),c=t(1760),o=t(46417);e.Z=function(n){var e=(0,c.Z)(),t=(0,s.Z)(),a=t.login,u=t.logout,l=(0,i.hB)(a,u).onPresentConnectModal;return(0,o.jsx)(i.zx,(0,r.Z)((0,r.Z)({onClick:l},n),{},{children:e(292,"Unlock Wallet")}))}},70668:function(n,e,t){"use strict";var r=t(74165),i=t(15861),s=t(70885),c=t(47313),o=t(82229),a=t(31881),u=t.n(a),l=t(1689);e.Z=function(){var n=(0,c.useState)(),e=(0,s.Z)(n,2),t=e[0],a=e[1],d=(0,o.Ge)().account,f=(0,l.Z)().fastRefresh;return(0,c.useEffect)((function(){var n=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("https://bnb.fbslo.net/?address=".concat(d),{timeout:7e3}).then((function(n){return n.data})).catch((function(){return{error:!0}}));case 2:e=n.sent,a(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();d&&n()}),[d,f]),t}},7374:function(n,e,t){"use strict";t.d(e,{z:function(){return d}});var r=t(74165),i=t(15861),s=t(47313),c=t(82229),o=t(20438),a=t(63199),u=t(66285),l=t(33866),d=function(n){var e=(0,o.T)(),t=(0,c.Ge)().account,d=(0,l.AH)(),f=n.user,m=void 0===f?"":f,x=n.amount,h=void 0===x?"":x,p=n.nonce,g=void 0===p?"":p,v=n.signature,Z=void 0===v?"":v;return{onClaim:(0,s.useCallback)((0,i.Z)((0,r.Z)().mark((function n(){var i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.QS)(d,t,m,h,g,Z);case 2:return i=n.sent,e((0,a.IV)(t)),n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)}))),[e,t,m,h,g,Z,d])}}},74451:function(n,e,t){"use strict";t.d(e,{ZP:function(){return p},rQ:function(){return h},A5:function(){return x}});var r=t(74165),i=t(15861),s=t(70885),c=t(47313),o=t(58704),a=t.n(o),u=t(82229),l=t(48574),d=t(38301),f=t(27163),m=t(1689),x=function(){var n=(0,m.Z)().slowRefresh,e=(0,c.useState)(),t=(0,s.Z)(e,2),o=t[0],u=t[1];return(0,c.useEffect)((function(){function n(){return(n=(0,i.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,l.XT)(),n.next=3,e.methods.totalSupply().call();case 3:t=n.sent,u(new(a())(t));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[n]),o},h=function(n){var e=(0,c.useState)(d.H),t=(0,s.Z)(e,2),o=t[0],u=t[1],x=(0,m.Z)().slowRefresh,h=(0,f.Z)();return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.jS)(n,h),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:i=e.sent,u(new(a())(i));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[h,n,x]),o},p=function(n){var e=(0,c.useState)(d.H),t=(0,s.Z)(e,2),o=t[0],x=t[1],h=(0,u.Ge)().account,p=(0,f.Z)(),g=(0,m.Z)().fastRefresh;return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.jS)(n,p),e.next=3,t.methods.balanceOf(h).call();case 3:i=e.sent,x(new(a())(i));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();h&&e()}),[h,n,p,g]),o}},81997:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return _n}});var r,i,s,c,o,a,u,l,d,f,m=t(30168),x=t(47313),h=t(49184),p=t(90240),g=t(1760),v=t(84485),Z=t(74165),j=t(15861),b=t(70885),w=t(82229),y=t(98059),k=t(42982),C=t(1413),S=t(58704),P=t.n(S),z=t(23935),B=t(30652),E=t(84951),N=t(6440),T=t(72731),L=t(1689),W=function(){var n=(0,x.useState)([]),e=(0,b.Z)(n,2),t=e[0],r=e[1],i=(0,w.Ge)().account,s=(0,L.Z)().fastRefresh;return(0,x.useEffect)((function(){var n=T.jt.filter((function(n){return!n.isKingdom})),e=T.jt.filter((function(n){return n.isKingdom})),t=function(){var t=(0,j.Z)((0,Z.Z)().mark((function t(){var s,c,o,a,u,l;return(0,Z.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.map((function(n){return{address:(0,B.Oc)(),name:"pendingCub",params:[n.pid,i]}})),t.next=3,(0,z.Z)(E,s);case 3:return c=t.sent,o=n.map((function(n,e){return(0,C.Z)((0,C.Z)({},n),{},{balance:new(P())(c[e])})})),a=e.map((function(n){return{address:(0,B.LB)(),name:"pendingCUB",params:[n.pid,i]}})),t.next=8,(0,z.Z)(N,a);case 8:u=t.sent,l=e.map((function(n,e){return(0,C.Z)((0,C.Z)({},n),{},{balance:new(P())(u[e])})})),r([].concat((0,k.Z)(o),(0,k.Z)(l)));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();i&&t()}),[i,s]),t},X=t(70668),U=t(7374),I=t(23282),O=function(){var n=(0,x.useState)([]),e=(0,b.Z)(n,2),t=e[0],r=e[1],i=(0,w.Ge)().account,s=(0,L.Z)().fastRefresh;return(0,x.useEffect)((function(){var n=T.jt.filter((function(n){return!n.isKingdom})),e=T.jt.filter((function(n){return n.isKingdom})),t=function(){var t=(0,j.Z)((0,Z.Z)().mark((function t(){var s,c,o,a;return(0,Z.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.map((function(n){return{address:(0,B.Oc)(),name:"pendingCub",params:[n.pid,i]}})),t.next=3,(0,z.Z)(E,s);case 3:return c=t.sent,o=e.map((function(n){return{address:(0,B.LB)(),name:"pendingCUB",params:[n.pid,i]}})),t.next=7,(0,z.Z)(N,o);case 7:a=t.sent,r([].concat((0,k.Z)(c),(0,k.Z)(a)));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();i&&t()}),[i,s]),t},Q=t(91903),D=t(18941),H=t(17910),R=t(54545),F=t(46417),A=h.ZP.div(r||(r=(0,m.Z)(["\n  margin-bottom: 24px;\n"]))),G=function(){var n=(0,g.Z)(),e=(0,w.Ge)().account,t=O().reduce((function(n,e){var t=new(P())(e);return t.eq(0)?n:n+t.div(D.o3).toNumber()}),0),r=(0,Q.Iu)(),i=new(P())(t).multipliedBy(r).toNumber();return e?(0,F.jsxs)(A,{children:[(0,F.jsx)(H.Z,{value:t,lineHeight:"1.5"}),!r.eq(0)&&(0,F.jsx)(R.Z,{value:i})]}):(0,F.jsx)(p.xv,{color:"textDisabled",style:{lineHeight:"76px"},children:n(298,"Locked")})},K=t(74451),q=t(64446),$=function(){var n=(0,g.Z)(),e=(0,K.ZP)((0,B.xn)()),t=(0,Q.Iu)(),r=new S.BigNumber((0,q.mW)(e)).multipliedBy(t).toNumber();return(0,w.Ge)().account?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(H.Z,{value:(0,q.mW)(e),decimals:4,fontSize:"24px",lineHeight:"36px"}),t.eq(0)?(0,F.jsx)("br",{}):(0,F.jsx)(R.Z,{value:r})]}):(0,F.jsx)(p.xv,{color:"textDisabled",style:{lineHeight:"54px"},children:n(298,"Locked")})},V=t(38301),M=h.ZP.div(i||(i=(0,m.Z)(["\n  margin-bottom: 24px;\n"]))),_=function(n){var e=n.bnbDividends,t=(0,w.Ge)().account,r=(0,Q.Pu)("BNB-BUSD LP"),i=e&&e.amount?new(P())(e.amount).div(D.o3):V.H,s=i?i.multipliedBy(r).toNumber():0;return t?(0,F.jsxs)(M,{children:[(0,F.jsx)(H.Z,{value:i.toNumber(),lineHeight:"1.5"}),!r.eq(0)&&(0,F.jsx)(R.Z,{value:s})]}):(0,F.jsx)(p.xv,{color:"textDisabled",style:{lineHeight:"76px"},children:"Locked"})},J=(0,h.ZP)(p.Zb)(s||(s=(0,m.Z)(["\n  background-image: url('/images/cub/cub-bg.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),Y=h.ZP.div(c||(c=(0,m.Z)(["\n  margin-bottom: 16px;\n"]))),nn=h.ZP.img(o||(o=(0,m.Z)(["\n  margin-bottom: 16px;\n"]))),en=h.ZP.div(a||(a=(0,m.Z)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(n){return n.theme.colors.textSubtle})),tn=h.ZP.div(u||(u=(0,m.Z)(["\n  margin-top: 24px;\n"]))),rn=function(){var n=(0,x.useState)(!1),e=(0,b.Z)(n,2),t=e[0],r=e[1],i=(0,x.useState)(!1),s=(0,b.Z)(i,2),c=s[0],o=s[1],a=(0,w.Ge)().account,u=(0,g.Z)(),l=W().filter((function(n){return n.balance.toNumber()>1e4})),d=(0,X.Z)(),f=(0,U.z)(d||{}).onClaim,m=d&&d.amount?d.amount:0,h=(0,y.us)(l.map((function(n){return{pid:n.pid,isKingdom:n.isKingdom}}))).onReward,v=(0,x.useCallback)((0,j.Z)((0,Z.Z)().mark((function n(){return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),n.prev=1,n.next=4,h();case 4:n.next=8;break;case 6:n.prev=6,n.t0=n.catch(1);case 8:return n.prev=8,r(!1),n.finish(8);case 11:case"end":return n.stop()}}),n,null,[[1,6,8,11]])}))),[h]);return(0,F.jsx)(J,{children:(0,F.jsxs)(p.eW,{children:[(0,F.jsx)(p.X6,{size:"xl",mb:"24px",children:u(542,"Farms & Staking")}),(0,F.jsx)(nn,{src:"/images/cub/token.svg",alt:"cub logo",width:64,height:64}),(0,F.jsxs)(p.kC,{justifyContent:"space-between",children:[(0,F.jsxs)("div",{children:[(0,F.jsxs)(Y,{children:[(0,F.jsxs)(en,{children:[u(544,"CUB to Harvest"),":"]}),(0,F.jsx)(G,{})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(en,{children:[u(546,"CUB in Wallet"),":"]}),(0,F.jsx)($,{})]}),(0,F.jsx)(tn,{children:a?(0,F.jsx)(p.zx,{id:"harvest-all",disabled:l.length<=0||t,onClick:v,width:"100%",children:t?u(548,"Collecting CUB"):u(532,"Harvest all (".concat(l.length,")"),{count:l.length})}):(0,F.jsx)(I.Z,{width:"100%"})})]}),(0,F.jsxs)("div",{children:[(0,F.jsxs)(Y,{children:[(0,F.jsxs)(en,{children:["BNB Dividends ",(0,F.jsx)("br",{}),"for Staking CUB:"]}),(0,F.jsx)(_,{bnbDividends:d})]}),(0,F.jsx)(tn,{children:a?(0,F.jsx)(p.zx,{disabled:0===m||c,onClick:(0,j.Z)((0,Z.Z)().mark((function n(){return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.next=3,f();case 3:o(!1);case 4:case"end":return n.stop()}}),n)}))),children:"Claim BNB"}):(0,F.jsx)(I.Z,{width:"100%"})})]})]})]})})},sn=t(52422),cn=(0,h.ZP)(p.Zb)(l||(l=(0,m.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),on=h.ZP.div(d||(d=(0,m.Z)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),an=function(){var n=(0,g.Z)(),e=(0,K.A5)(),t=(0,K.rQ)((0,B.xn)()),r=(0,Q.Iu)(),i=e?e.minus(t):new sn.Z(0),s=(0,q.mW)(i),c=r.times(i);return(0,F.jsx)(cn,{children:(0,F.jsxs)(p.eW,{children:[(0,F.jsx)(p.X6,{size:"xl",mb:"24px",children:n(534,"Cub Stats")}),(0,F.jsxs)(on,{children:[(0,F.jsx)(p.xv,{fontSize:"14px",children:n(536,"Total CUB Supply")}),s&&(0,F.jsx)(H.Z,{fontSize:"14px",value:s,decimals:0})]}),(0,F.jsxs)(on,{children:[(0,F.jsx)(p.xv,{fontSize:"14px",children:n(999,"Market Cap")}),(0,F.jsx)(H.Z,{fontSize:"14px",value:(0,q.mW)(c),decimals:0,prefix:"$"})]}),(0,F.jsxs)(on,{children:[(0,F.jsx)(p.xv,{fontSize:"14px",children:n(538,"Total CUB Burned")}),(0,F.jsx)(H.Z,{fontSize:"14px",value:(0,q.mW)(t),decimals:0})]}),(0,F.jsxs)(on,{children:[(0,F.jsx)(p.xv,{fontSize:"14px",children:n(540,"New CUB/block")}),(0,F.jsx)(H.Z,{fontSize:"14px",decimals:0,value:D.IO.toNumber()})]})]})})},un=(0,h.ZP)(p.Zb)(f||(f=(0,m.Z)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ln=function(){var n=(0,g.Z)(),e=(0,Q.Uv)();return(0,F.jsx)(un,{children:(0,F.jsxs)(p.eW,{children:[(0,F.jsx)(p.X6,{size:"lg",mb:"24px",children:n(762,"Total Value Locked (TVL)")}),e?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(p.X6,{size:"xl",children:(0,F.jsx)(H.Z,{value:e.toNumber(),prefix:"$",decimals:2})}),(0,F.jsx)(p.xv,{color:"textSubtle",children:n(764,"Across all Farms and Dens")})]}):(0,F.jsx)(p.Od,{height:66})]})})},dn=t(26214),fn=t.n(dn),mn="twttr",xn=mn,hn=!("undefined"===typeof window||!window.document||!window.document.createElement);function pn(){return new Promise((function(n,e){var t=function(){return e(new Error("Could not load remote twitter widgets js"))};fn().isDefined(xn)||fn()("https://platform.twitter.com/widgets.js",xn),fn().ready(xn,{success:function(){var e=window.twttr;e&&e.widgets||t(),n(e.widgets)},error:t})}))}function gn(n,e){return n===e?0!==n||0!==e||1/n===1/e:n!==n&&e!==e}function vn(n){var e=(0,x.useRef)();return function(n,e){if(gn(n,e))return!0;if("object"!==typeof n||null===n||"object"!==typeof e||null===e)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(var i=0;i<t.length;i++)if(!Object.prototype.hasOwnProperty.call(e,t[i])||!gn(n[t[i]],e[t[i]]))return!1;return!0}(n,e.current)||(e.current=n),e.current}function Zn(n){return"object"===typeof n?Object.assign({},n):n}var jn="twdiv";function bn(n,e,t,r){var i=(0,x.useState)(null),s=i[0],c=i[1],o=(0,x.useRef)(null);if(!hn)return{ref:o,error:s};var a=[n,vn(e),vn(t)];return(0,x.useEffect)((function(){c(null);var i,s,a=!1;if(o.current){if(i=o.current,s=jn,i&&i.querySelectorAll("*").forEach((function(n){n.hasAttribute(s)&&n.remove()})),!o||!o.current)return;var u=document.createElement("div");u.setAttribute(jn,"yes"),o.current.appendChild(u),pn().then((function(r){return r[n](Zn(e),u,Zn(t))})).then((function(n){if(!n&&!a)throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");o&&o.current&&(a?u&&u.remove():r&&r())})).catch((function(n){console.error(n),c(n)}))}return function(){a=!0}}),a),{ref:o,error:s}}var wn,yn,kn,Cn,Sn,Pn,zn,Bn,En,Nn,Tn=function(n){var e=n.dataSource,t=n.options,r=n.onLoad,i=n.renderError,s=bn("createTimeline",e,t,r),c=s.ref,o=s.error;return x.createElement("div",{ref:c},o&&i&&i(o))},Ln=(0,h.ZP)(p.Zb)(wn||(wn=(0,m.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),Wn=function(){var n=(0,g.Z)();return(0,F.jsx)(Ln,{children:(0,F.jsxs)(p.eW,{children:[(0,F.jsx)(p.X6,{size:"xl",mb:"24px",children:n(10003,"Announcements")}),(0,F.jsx)(Tn,{dataSource:{sourceType:"profile",screenName:"financeleo"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})},Xn=t(34402),Un=t.n(Xn),In=t(28303),On=t(44383),Qn=(0,h.ZP)(p.Zb)(yn||(yn=(0,m.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),Dn=(0,h.ZP)(p.X6).attrs({size:"xl"})(kn||(kn=(0,m.Z)(["\n  line-height: 44px;\n"]))),Hn=function(){var n=(0,g.Z)(),e=(0,Q.E2)().data,t=(0,Q.Iu)(),r=(0,x.useMemo)((function(){var n=e.filter((function(n){return"0X"!==n.multiplier})).map((function(n){if(n.lpTotalInQuoteToken){var e=n.quoteToken.busdPrice,r=new(P())(n.lpTotalInQuoteToken).times(e);return(0,On.yW)(n.poolWeight,t,r)}return null})),r=Un()(n);return null===r||void 0===r?void 0:r.toLocaleString("en-US",{maximumFractionDigits:2})}),[t,e]);return(0,F.jsx)(Qn,{children:(0,F.jsxs)(p.eW,{children:[(0,F.jsx)(p.X6,{color:"contrast",size:"lg",children:"Earn up to"}),(0,F.jsx)(Dn,{color:"#1993fb",children:r?"".concat(r,"% ").concat(n(736,"APR")):(0,F.jsx)(p.Od,{animation:"pulse",variant:"rect",height:"44px"})}),(0,F.jsxs)(p.kC,{justifyContent:"space-between",children:[(0,F.jsx)(p.X6,{color:"contrast",size:"lg",children:"in Farms"}),(0,F.jsx)(In.OL,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apr-cta",children:(0,F.jsx)(p.mr,{mt:30,color:"primary"})})]})]})})},Rn=(0,h.ZP)(p.Zb)(Cn||(Cn=(0,m.Z)(["\n  background: linear-gradient(#53dee9, #4576d9);\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),Fn=(0,h.ZP)(p.X6).attrs({size:"xl"})(Sn||(Sn=(0,m.Z)(["\n  line-height: 44px;\n"]))),An=function(){return(0,F.jsx)(Rn,{children:(0,F.jsxs)(p.eW,{children:[(0,F.jsx)(p.X6,{color:"contrast",size:"lg",children:"Instantly Swap"}),(0,F.jsx)(Fn,{color:"invertedContrast",children:"ERC20 for BEP20"}),(0,F.jsxs)(p.kC,{justifyContent:"space-between",children:[(0,F.jsx)(p.X6,{color:"contrast",size:"lg",children:"on LeoBridge"}),(0,F.jsx)(p.rU,{href:"https://bridge.cubdefi.com/",children:(0,F.jsx)(p.mr,{mt:30,color:"contrast"})})]})]})})},Gn=(0,h.ZP)(p.Zb)(Pn||(Pn=(0,m.Z)(["\n  /*background: linear-gradient(#53dee9, #4576d9);*/\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),Kn=(0,h.ZP)(p.X6).attrs({size:"xl"})(zn||(zn=(0,m.Z)(["\n  line-height: 44px;\n"]))),qn=function(){return(0,F.jsx)(Gn,{children:(0,F.jsxs)(p.eW,{children:[(0,F.jsx)(Kn,{color:"primary",children:"Kingdoms"}),(0,F.jsx)(p.X6,{color:"contrast",size:"lg",children:"CUB's First Composable Yield Farming Contract"}),(0,F.jsxs)(p.kC,{justifyContent:"space-between",children:[(0,F.jsx)(Kn,{color:"primary",children:"LIVE"}),(0,F.jsx)(In.OL,{exact:!0,activeClassName:"active",to:"/kingdoms",children:(0,F.jsx)(p.mr,{mt:30,color:"primary"})})]})]})})},$n=h.ZP.div(Bn||(Bn=(0,m.Z)(["\n  align-items: center;\n  background-image: url('/images/cub/wide.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/cub/2logos.png') ,url('/images/cub/wide.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(n){return n.theme.mediaQueries.lg})),Vn=(0,h.ZP)(p.IE)(En||(En=(0,m.Z)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.lg})),Mn=(0,h.ZP)(p.IE)(Nn||(Nn=(0,m.Z)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(n){return n.theme.mediaQueries.sm}),(function(n){return n.theme.mediaQueries.lg})),_n=function(){var n=(0,g.Z)();return(0,F.jsxs)(v.Z,{children:[(0,F.jsxs)($n,{children:[(0,F.jsx)(p.X6,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:n(576,"Cub Finance")}),(0,F.jsx)(p.xv,{children:n(578,"Cub Finance on Binance Smart Chain.")})]}),(0,F.jsxs)("div",{children:[(0,F.jsxs)(Vn,{children:[(0,F.jsx)(rn,{}),(0,F.jsx)(Wn,{})]}),(0,F.jsxs)(Mn,{children:[(0,F.jsx)(Hn,{}),(0,F.jsx)(An,{}),(0,F.jsx)(qn,{})]}),(0,F.jsxs)(Vn,{children:[(0,F.jsx)(an,{}),(0,F.jsx)(ln,{})]})]})]})}},26214:function(n,e){var t,r,i;r=[],void 0===(i="function"===typeof(t=function(){var n=function(){},e={},t={},r={};function i(n,e){n=n.push?n:[n];var i,s,c,o=[],a=n.length,u=a;for(i=function(n,t){t.length&&o.push(n),--u||e(o)};a--;)s=n[a],(c=t[s])?i(s,c):(r[s]=r[s]||[]).push(i)}function s(n,e){if(n){var i=r[n];if(t[n]=e,i)for(;i.length;)i[0](n,e),i.splice(0,1)}}function c(e,t){e.call&&(e={success:e}),t.length?(e.error||n)(t):(e.success||n)(e)}function o(e,t,r,i){var s,c,a=document,u=r.async,l=(r.numRetries||0)+1,d=r.before||n,f=e.replace(/[\?|#].*$/,""),m=e.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(f)?((c=a.createElement("link")).rel="stylesheet",c.href=m,(s="hideFocus"in c)&&c.relList&&(s=0,c.rel="preload",c.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(f)?(c=a.createElement("img")).src=m:((c=a.createElement("script")).src=e,c.async=void 0===u||u),c.onload=c.onerror=c.onbeforeload=function(n){var a=n.type[0];if(s)try{c.sheet.cssText.length||(a="e")}catch(u){18!=u.code&&(a="e")}if("e"==a){if((i+=1)<l)return o(e,t,r,i)}else if("preload"==c.rel&&"style"==c.as)return c.rel="stylesheet";t(e,a,n.defaultPrevented)},!1!==d(e,c)&&a.head.appendChild(c)}function a(n,e,t){var r,i,s=(n=n.push?n:[n]).length,c=s,a=[];for(r=function(n,t,r){if("e"==t&&a.push(n),"b"==t){if(!r)return;a.push(n)}--s||e(a)},i=0;i<c;i++)o(n[i],r,t)}function u(n,t,r){var i,o;if(t&&t.trim&&(i=t),o=(i?r:t)||{},i){if(i in e)throw"LoadJS";e[i]=!0}function u(e,t){a(n,(function(n){c(o,n),e&&c({success:e,error:t},n),s(i,n)}),o)}if(o.returnPromise)return new Promise(u);u()}return u.ready=function(n,e){return i(n,(function(n){c(e,n)})),u},u.done=function(n){s(n,[])},u.reset=function(){e={},t={},r={}},u.isDefined=function(n){return n in e},u})?t.apply(e,r):t)||(n.exports=i)},67022:function(n,e,t){var r=t(72060);n.exports=function(n,e,t){for(var i=-1,s=n.length;++i<s;){var c=n[i],o=e(c);if(null!=o&&(void 0===a?o===o&&!r(o):t(o,a)))var a=o,u=c}return u}},62174:function(n){n.exports=function(n,e){return n>e}},34402:function(n,e,t){var r=t(67022),i=t(62174),s=t(19908);n.exports=function(n){return n&&n.length?r(n,s,i):void 0}}}]);