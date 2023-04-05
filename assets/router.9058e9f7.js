import{m as w,W as pe,X as K,Y as k,g as ge,Z as he,D as ye,$ as _e,a0 as N,s as c,c as _,S as U,p as C,G as Se,r as b,w as R,a1 as we,N as be,P as q,Q as Te,a2 as J,e as T,a3 as Ce,M as V,a4 as F,a5 as Ee,a6 as Le,O as xe,n as ze,a7 as $e,q as ke,a8 as Re,t as Q,a9 as Pe,aa as M,ab as Ie,ac as Y}from"./index.527f435e.js";import{h as Ne,i as Ve,j as Be,b as Ae,g as Oe}from"./border.081a13b8.js";function st(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return w()({name:n!=null?n:pe(K(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(s,o){let{slots:r}=o;return()=>{var i;return k(s.tag,{class:e},(i=r.default)==null?void 0:i.call(r))}}})}function B(e){const t=ge("useRender");t.render=e}const rt=w(!1)({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:s,reset:o,root:r,scoped:i}=he(e);return ye(s,{reset:o,root:r,scoped:i}),()=>{var a;return(a=n.default)==null?void 0:a.call(n)}}});function h(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return w()({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:t}},setup(s,o){let{slots:r}=o;return()=>{const i=s.group?_e:N;return k(i,{name:e,mode:s.mode,onBeforeEnter(a){a.style.transformOrigin=s.origin},onLeave(a){if(s.leaveAbsolute){const{offsetTop:m,offsetLeft:l,offsetWidth:d,offsetHeight:f}=a;a._transitionInitialStyles={position:a.style.position,top:a.style.top,left:a.style.left,width:a.style.width,height:a.style.height},a.style.position="absolute",a.style.top=`${m}px`,a.style.left=`${l}px`,a.style.width=`${d}px`,a.style.height=`${f}px`}s.hideOnLeave&&a.style.setProperty("display","none","important")},onAfterLeave(a){if(s.leaveAbsolute&&(a==null?void 0:a._transitionInitialStyles)){const{position:m,top:l,left:d,width:f,height:v}=a._transitionInitialStyles;delete a._transitionInitialStyles,a.style.position=m||"",a.style.top=l||"",a.style.left=d||"",a.style.width=f||"",a.style.height=v||""}}},r.default)}}})}function Z(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return w()({name:e,props:{mode:{type:String,default:n}},setup(s,o){let{slots:r}=o;return()=>k(N,{name:e,...t},r.default)}})}function ee(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=K(`offset-${n}`);return{onBeforeEnter(i){i._parent=i.parentNode,i._initialStyle={transition:i.style.transition,overflow:i.style.overflow,[n]:i.style[n]}},onEnter(i){const a=i._initialStyle;i.style.setProperty("transition","none","important"),i.style.overflow="hidden";const m=`${i[s]}px`;i.style[n]="0",i.offsetHeight,i.style.transition=a.transition,e&&i._parent&&i._parent.classList.add(e),requestAnimationFrame(()=>{i.style[n]=m})},onAfterEnter:r,onEnterCancelled:r,onLeave(i){i._initialStyle={transition:"",overflow:i.style.overflow,[n]:i.style[n]},i.style.overflow="hidden",i.style[n]=`${i[s]}px`,i.offsetHeight,requestAnimationFrame(()=>i.style[n]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(i){e&&i._parent&&i._parent.classList.remove(e),r(i)}function r(i){const a=i._initialStyle[n];i.style.overflow=i._initialStyle.overflow,a!=null&&(i.style[n]=a),delete i._initialStyle}}h("fab-transition","center center","out-in");h("dialog-bottom-transition");h("dialog-top-transition");h("fade-transition");h("scale-transition");h("scroll-x-transition");h("scroll-x-reverse-transition");h("scroll-y-transition");h("scroll-y-reverse-transition");h("slide-x-transition");h("slide-x-reverse-transition");h("slide-y-transition");h("slide-y-reverse-transition");const at=Z("expand-transition",ee());Z("expand-x-transition",ee("",!0));function De(e){return{aspectStyles:_(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const He=w()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Ne()},setup(e,t){let{slots:n}=t;const{aspectStyles:s}=De(e),{dimensionStyles:o}=Ve(e);return B(()=>{var r;return c("div",{class:"v-responsive",style:o.value},[c("div",{class:"v-responsive__sizer",style:s.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&c("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function je(e,t){if(!U)return;const n=t.modifiers||{},s=t.value,{handler:o,options:r}=typeof s=="object"?s:{handler:s,options:{}},i=new IntersectionObserver(function(){var f;let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],m=arguments.length>1?arguments[1]:void 0;const l=(f=e._observe)==null?void 0:f[t.instance.$.uid];if(!l)return;const d=a.some(v=>v.isIntersecting);o&&(!n.quiet||l.init)&&(!n.once||d||l.init)&&o(d,a,m),d&&n.once?te(e,t):l.init=!0},r);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function te(e,t){var s;const n=(s=e._observe)==null?void 0:s[t.instance.$.uid];!n||(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const We={mounted:je,unmounted:te},qe=We,Fe=C({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),z=(e,t)=>{let{slots:n}=t;const{transition:s,...o}=e,{component:r=N,...i}=typeof s=="object"?s:{};return k(r,Se(typeof s=="string"?{name:s}:i,o),n)},ot=w()({name:"VImg",directives:{intersect:qe},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...Fe()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:s}=t;const o=b(""),r=b(),i=b(e.eager?"loading":"idle"),a=b(),m=b(),l=_(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=_(()=>l.value.aspect||a.value/m.value||0);R(()=>e.src,()=>{f(i.value!=="idle")}),R(d,(u,p)=>{!u&&p&&r.value&&x(r.value)}),we(()=>f());function f(u){if(!(e.eager&&u)&&!(U&&!u&&!e.eager)){if(i.value="loading",l.value.lazySrc){const p=new Image;p.src=l.value.lazySrc,x(p,null)}!l.value.src||be(()=>{var p,S;if(n("loadstart",((p=r.value)==null?void 0:p.currentSrc)||l.value.src),(S=r.value)!=null&&S.complete){if(r.value.naturalWidth||y(),i.value==="error")return;d.value||x(r.value,null),v()}else d.value||x(r.value),A()})}}function v(){var u;A(),i.value="loaded",n("load",((u=r.value)==null?void 0:u.currentSrc)||l.value.src)}function y(){var u;i.value="error",n("error",((u=r.value)==null?void 0:u.currentSrc)||l.value.src)}function A(){const u=r.value;u&&(o.value=u.currentSrc||u.src)}let O=-1;function x(u){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{clearTimeout(O);const{naturalHeight:j,naturalWidth:W}=u;j||W?(a.value=W,m.value=j):!u.complete&&i.value==="loading"&&p!=null?O=window.setTimeout(S,p):(u.currentSrc.endsWith(".svg")||u.currentSrc.startsWith("data:image/svg+xml"))&&(a.value=1,m.value=1)};S()}const D=_(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),ce=()=>{var S;if(!l.value.src||i.value==="idle")return null;const u=c("img",{class:["v-img__img",D.value],src:l.value.src,srcset:l.value.srcset,alt:"",sizes:e.sizes,ref:r,onLoad:v,onError:y},null),p=(S=s.sources)==null?void 0:S.call(s);return c(z,{transition:e.transition,appear:!0},{default:()=>[q(p?c("picture",{class:"v-img__picture"},[p,u]):u,[[Ce,i.value==="loaded"]])]})},de=()=>c(z,{transition:e.transition},{default:()=>[l.value.lazySrc&&i.value!=="loaded"&&c("img",{class:["v-img__img","v-img__img--preload",D.value],src:l.value.lazySrc,alt:""},null)]}),me=()=>s.placeholder?c(z,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!s.error)&&c("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,fe=()=>s.error?c(z,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&c("div",{class:"v-img__error"},[s.error()])]}):null,ve=()=>e.gradient?c("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,H=b(!1);{const u=R(d,p=>{p&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),u())})}return B(()=>q(c(He,{class:["v-img",{"v-img--booting":!H.value}],style:{width:T(e.width==="auto"?a.value:e.width)},aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>c(J,null,[c(ce,null,null),c(de,null,null),c(ve,null,null),c(me,null,null),c(fe,null,null)]),default:s.default}),[[Te("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:o,image:r,state:i,naturalWidth:a,naturalHeight:m}}}),Me=[null,"default","comfortable","compact"],lt=C({density:{type:String,default:"default",validator:e=>Me.includes(e)}},"density");function ut(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{densityClasses:_(()=>`${t}--density-${e.density}`)}}const Ye=["elevated","flat","tonal","outlined","text","plain"];function ct(e,t){return c(J,null,[e&&c("span",{key:"overlay",class:`${t}__overlay`},null),c("span",{key:"underlay",class:`${t}__underlay`},null)])}const dt=C({color:String,variant:{type:String,default:"elevated",validator:e=>Ye.includes(e)}},"variant");function mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();const n=_(()=>{const{variant:r}=F(e);return`${t}--variant-${r}`}),{colorClasses:s,colorStyles:o}=Be(_(()=>{const{variant:r,color:i}=F(e);return{[["elevated","flat"].includes(r)?"background":"text"]:i}}));return{colorClasses:s,colorStyles:o,variantClasses:n}}const Xe=["x-small","small","default","large","x-large"],Ge=C({size:{type:[String,Number],default:"default"}},"size");function Ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return Ee(()=>{let n,s;return Le(Xe,e.size)?n=`${t}--size-${e.size}`:e.size&&(s={width:T(e.size),height:T(e.size)}),{sizeClasses:n,sizeStyles:s}})}const Ue=C({color:String,start:Boolean,end:Boolean,icon:xe,...Ge(),...Ae({tag:"i"}),...ze()},"v-icon"),ft=w()({name:"VIcon",props:Ue(),setup(e,t){let{attrs:n,slots:s}=t,o;s.default&&(o=_(()=>{var f,v;const d=(f=s.default)==null?void 0:f.call(s);if(!!d)return(v=d.filter(y=>y.type===$e&&y.children&&typeof y.children=="string")[0])==null?void 0:v.children}));const{themeClasses:r}=ke(e),{iconData:i}=Re(o||e),{sizeClasses:a}=Ke(e),{textColorClasses:m,textColorStyles:l}=Oe(Q(e,"color"));return B(()=>c(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",r.value,a.value,m.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[a.value?void 0:{fontSize:T(e.size),height:T(e.size),width:T(e.size)},l.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>{var d;return[(d=s.default)==null?void 0:d.call(s)]}})),{}}});const P=Symbol("rippleStop"),Je=80;function X(e,t){e.style.transform=t,e.style.webkitTransform=t}function I(e){return e.constructor.name==="TouchEvent"}function ne(e){return e.constructor.name==="KeyboardEvent"}const Qe=function(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,o=0;if(!ne(e)){const v=t.getBoundingClientRect(),y=I(e)?e.touches[e.touches.length-1]:e;s=y.clientX-v.left,o=y.clientY-v.top}let r=0,i=.3;(f=t._ripple)!=null&&f.circle?(i=.15,r=t.clientWidth/2,r=n.center?r:r+Math.sqrt((s-r)**2+(o-r)**2)/4):r=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const a=`${(t.clientWidth-r*2)/2}px`,m=`${(t.clientHeight-r*2)/2}px`,l=n.center?a:`${s-r}px`,d=n.center?m:`${o-r}px`;return{radius:r,scale:i,x:l,y:d,centerX:a,centerY:m}},$={show(e,t){var y;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((y=t==null?void 0:t._ripple)!=null&&y.enabled))return;const s=document.createElement("span"),o=document.createElement("span");s.appendChild(o),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:r,scale:i,x:a,y:m,centerX:l,centerY:d}=Qe(e,t,n),f=`${r*2}px`;o.className="v-ripple__animation",o.style.width=f,o.style.height=f,t.appendChild(s);const v=window.getComputedStyle(t);v&&v.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),X(o,`translate(${a}, ${m}) scale3d(${i},${i},${i})`),o.dataset.activated=String(performance.now()),setTimeout(()=>{o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),X(o,`translate(${l}, ${d}) scale3d(1,1,1)`)},0)},hide(e){var r;if(!((r=e==null?void 0:e._ripple)!=null&&r.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),o=Math.max(250-s,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var a;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((a=n.parentNode)==null?void 0:a.parentNode)===e&&e.removeChild(n.parentNode)},300)},o)}};function ie(e){return typeof e>"u"||!!e}function E(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[P])){if(e[P]=!0,I(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||ne(e),n._ripple.class&&(t.class=n._ripple.class),I(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{$.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var s;(s=n==null?void 0:n._ripple)!=null&&s.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Je)}else $.show(e,n,t)}}function G(e){e[P]=!0}function g(e){const t=e.currentTarget;if(!!(t!=null&&t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{g(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),$.hide(t)}}function se(e){const t=e.currentTarget;!(t!=null&&t._ripple)||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let L=!1;function re(e){!L&&(e.keyCode===M.enter||e.keyCode===M.space)&&(L=!0,E(e))}function ae(e){L=!1,g(e)}function oe(e){L&&(L=!1,g(e))}function le(e,t,n){var i;const{value:s,modifiers:o}=t,r=ie(s);if(r||$.hide(e),e._ripple=(i=e._ripple)!=null?i:{},e._ripple.enabled=r,e._ripple.centered=o.center,e._ripple.circle=o.circle,Pe(s)&&s.class&&(e._ripple.class=s.class),r&&!n){if(o.stop){e.addEventListener("touchstart",G,{passive:!0}),e.addEventListener("mousedown",G);return}e.addEventListener("touchstart",E,{passive:!0}),e.addEventListener("touchend",g,{passive:!0}),e.addEventListener("touchmove",se,{passive:!0}),e.addEventListener("touchcancel",g),e.addEventListener("mousedown",E),e.addEventListener("mouseup",g),e.addEventListener("mouseleave",g),e.addEventListener("keydown",re),e.addEventListener("keyup",ae),e.addEventListener("blur",oe),e.addEventListener("dragstart",g,{passive:!0})}else!r&&n&&ue(e)}function ue(e){e.removeEventListener("mousedown",E),e.removeEventListener("touchstart",E),e.removeEventListener("touchend",g),e.removeEventListener("touchmove",se),e.removeEventListener("touchcancel",g),e.removeEventListener("mouseup",g),e.removeEventListener("mouseleave",g),e.removeEventListener("keydown",re),e.removeEventListener("keyup",ae),e.removeEventListener("dragstart",g),e.removeEventListener("blur",oe)}function Ze(e,t){le(e,t,!1)}function et(e){delete e._ripple,ue(e)}function tt(e,t){if(t.value===t.oldValue)return;const n=ie(t.oldValue);le(e,t,n)}const vt={mounted:Ze,unmounted:et,updated:tt};function pt(e,t){const n=Ie("RouterLink"),s=_(()=>!!(e.href||e.to)),o=_(()=>(s==null?void 0:s.value)||Y(t,"click")||Y(e,"click"));if(typeof n=="string")return{isLink:s,isClickable:o,href:Q(e,"href")};const r=e.to?n.useLink(e):void 0;return{isLink:s,isClickable:o,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&_(()=>{var i,a;return e.exact?(i=r.isExactActive)==null?void 0:i.value:(a=r.isActive)==null?void 0:a.value}),href:_(()=>e.to?r==null?void 0:r.route.value.href:e.href)}}const gt=C({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");export{vt as R,rt as V,ot as a,at as b,st as c,dt as d,ut as e,Ge as f,Ke as g,gt as h,mt as i,pt as j,ct as k,ft as l,lt as m,B as u};