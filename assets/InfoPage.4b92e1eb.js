import{m as x,s as c,n as j,q as z,t as I,c as y,e as ve,i as H,r as V,h as K,p as U,F as fe,o as ke,g as Ue,f as We,af as qe,O as B,P as Ce,a3 as Qe,E as Ve,ag as me,w as Ye,Q as Je,G as ge,D as Xe,ah as G,_ as Ze,x as Z,y as ye,z as ee,R as he,ai as et,aj as tt,a2 as nt,A as pe,C as Se}from"./index.527f435e.js";import{b as T,g as Ie,a as se,d as ie,e as Pe,h as Ae,m as we,f as _e,i as xe,c as Le,u as at}from"./border.081a13b8.js";import{u as O,V as te,b as lt,m as re,f as st,d as ue,i as Be,e as oe,g as it,a as rt,l as ne,k as Oe,c as Te,R as ut,h as ot,j as ct}from"./router.9058e9f7.js";const dt=x()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...T()},setup(e,s){let{slots:t}=s;return O(()=>c(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},t)),{}}});const vt=x()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...j()},setup(e,s){let{attrs:t}=s;const{themeClasses:n}=z(e),{textColorClasses:l,textColorStyles:a}=Ie(I(e,"color")),i=y(()=>{const u={};return e.length&&(u[e.vertical?"maxHeight":"maxWidth"]=ve(e.length)),e.thickness&&(u[e.vertical?"borderRightWidth":"borderTopWidth"]=ve(e.thickness)),u});return O(()=>c("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,l.value],style:[i.value,a.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),ae=Symbol.for("vuetify:list");function De(){const e=H(ae,{hasPrepend:V(!1),updateHasPrepend:()=>null}),s={hasPrepend:V(!1),updateHasPrepend:t=>{t&&(s.hasPrepend.value=t)}};return K(ae,s),e}function Ee(){return H(ae,null)}const ft={open:e=>{let{id:s,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(s);let i=l.get(s);for(;i!=null;)a.add(i),i=l.get(i);return a}else return n.delete(s),n},select:()=>null},Fe={open:e=>{let{id:s,value:t,opened:n,parents:l}=e;if(t){let a=l.get(s);for(n.add(s);a!=null&&a!==s;)n.add(a),a=l.get(a);return n}else n.delete(s);return n},select:()=>null},mt={open:Fe.open,select:e=>{let{id:s,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let i=l.get(s);for(;i!=null;)a.push(i),i=l.get(i);return new Set(a)}},ce=e=>{const s={select:t=>{let{id:n,value:l,selected:a}=t;if(e&&!l){const i=Array.from(a.entries()).reduce((u,v)=>{let[S,m]=v;return m==="on"?[...u,S]:u},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=s.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return s},Ge=e=>{const s=ce(e);return{select:n=>{let{selected:l,id:a,...i}=n;const u=l.has(a)?new Map([[a,l.get(a)]]):new Map;return s.select({...i,id:a,selected:u})},in:(n,l,a)=>{let i=new Map;return n!=null&&n.length&&(i=s.in(n.slice(0,1),l,a)),i},out:(n,l,a)=>s.out(n,l,a)}},gt=e=>{const s=ce(e);return{select:n=>{let{id:l,selected:a,children:i,...u}=n;return i.has(l)?a:s.select({id:l,selected:a,children:i,...u})},in:s.in,out:s.out}},yt=e=>{const s=Ge(e);return{select:n=>{let{id:l,selected:a,children:i,...u}=n;return i.has(l)?a:s.select({id:l,selected:a,children:i,...u})},in:s.in,out:s.out}},ht=e=>{const s={select:t=>{let{id:n,value:l,selected:a,children:i,parents:u}=t;const v=new Map(a),S=[n];for(;S.length;){const r=S.shift();a.set(r,l?"on":"off"),i.has(r)&&S.push(...i.get(r))}let m=u.get(n);for(;m;){const r=i.get(m),o=r.every(d=>a.get(d)==="on"),f=r.every(d=>!a.has(d)||a.get(d)==="off");a.set(m,o?"on":f?"off":"indeterminate"),m=u.get(m)}return e&&!l&&Array.from(a.entries()).reduce((o,f)=>{let[d,k]=f;return k==="on"?[...o,d]:o},[]).length===0?v:a},in:(t,n,l)=>{let a=new Map;for(const i of t||[])a=s.select({id:i,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&l.push(a);return l}};return s},M=Symbol.for("vuetify:nested"),Me={id:V(),root:{register:()=>null,unregister:()=>null,parents:V(new Map),children:V(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:V(new Set),selected:V(new Map),selectedValues:V([])}},pt=U({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),St=e=>{let s=!1;const t=V(new Map),n=V(new Map),l=fe(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return yt(e.mandatory);case"leaf":return gt(e.mandatory);case"independent":return ce(e.mandatory);case"single-independent":return Ge(e.mandatory);case"classic":default:return ht(e.mandatory)}}),i=y(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return mt;case"single":return ft;case"multiple":default:return Fe}}),u=fe(e,"selected",e.selected,r=>a.value.in(r,t.value,n.value),r=>a.value.out(r,t.value,n.value));ke(()=>{s=!0});function v(r){const o=[];let f=r;for(;f!=null;)o.unshift(f),f=n.value.get(f);return o}const S=Ue("nested"),m={id:V(),root:{opened:l,selected:u,selectedValues:y(()=>{const r=[];for(const[o,f]of u.value.entries())f==="on"&&r.push(o);return r}),register:(r,o,f)=>{o&&r!==o&&n.value.set(r,o),f&&t.value.set(r,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],r])},unregister:r=>{var f;if(s)return;t.value.delete(r);const o=n.value.get(r);if(o){const d=(f=t.value.get(o))!=null?f:[];t.value.set(o,d.filter(k=>k!==r))}n.value.delete(r),l.value.delete(r)},open:(r,o,f)=>{S.emit("click:open",{id:r,value:o,path:v(r),event:f});const d=i.value.open({id:r,value:o,opened:new Set(l.value),children:t.value,parents:n.value,event:f});d&&(l.value=d)},openOnSelect:(r,o,f)=>{const d=i.value.select({id:r,value:o,selected:new Map(u.value),opened:new Set(l.value),children:t.value,parents:n.value,event:f});d&&(l.value=d)},select:(r,o,f)=>{S.emit("click:select",{id:r,value:o,path:v(r),event:f});const d=a.value.select({id:r,value:o,selected:new Map(u.value),children:t.value,parents:n.value,event:f});d&&(u.value=d),m.root.openOnSelect(r,o,f)},children:t,parents:n}};return K(M,m),m.root},Ne=(e,s)=>{const t=H(M,Me),n=Symbol(We()),l=y(()=>{var i;return(i=e.value)!=null?i:n}),a={...t,id:l,open:(i,u)=>t.root.open(l.value,i,u),openOnSelect:(i,u)=>t.root.openOnSelect(l.value,i,u),isOpen:y(()=>t.root.opened.value.has(l.value)),parent:y(()=>t.root.parents.value.get(l.value)),select:(i,u)=>t.root.select(l.value,i,u),isSelected:y(()=>t.root.selected.value.get(l.value)==="on"),isIndeterminate:y(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:y(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,s),ke(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),s&&K(M,a),a},bt=()=>{const e=H(M,Me);K(M,{...e,isGroupActivator:!0})},kt=qe({name:"VListGroupActivator",setup(e,s){let{slots:t}=s;return bt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Ct=U({activeColor:String,color:String,collapseIcon:{type:B,default:"$collapse"},expandIcon:{type:B,default:"$expand"},prependIcon:B,appendIcon:B,fluid:Boolean,subgroup:Boolean,value:null,...T()},"v-list-group"),Re=x()({name:"VListGroup",props:{title:String,...Ct()},setup(e,s){let{slots:t}=s;const{isOpen:n,open:l,id:a}=Ne(I(e,"value"),!0),i=y(()=>`v-list-group--id-${String(a.value)}`),u=Ee();function v(r){l(!n.value,r)}const S=y(()=>({onClick:v,class:"v-list-group__header",id:i.value})),m=y(()=>n.value?e.collapseIcon:e.expandIcon);return O(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value}]},{default:()=>[t.activator&&c(te,{defaults:{VListItem:{active:n.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&m.value,appendIcon:e.appendIcon||!e.subgroup&&m.value,title:e.title,value:e.value}}},{default:()=>[c(kt,null,{default:()=>[t.activator({props:S.value,isOpen:n.value})]})]}),c(lt,null,{default:()=>{var r;return[Ce(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(r=t.default)==null?void 0:r.call(t)]),[[Qe,n.value]])]}})]})),{}}});function Vt(e){return Ve(e,Object.keys(Re.props))}const It=U({start:Boolean,end:Boolean,icon:B,image:String,...re(),...se(),...st(),...T(),...j(),...ue({variant:"flat"})},"v-avatar"),be=x()({name:"VAvatar",props:It(),setup(e,s){let{slots:t}=s;const{themeClasses:n}=z(e),{colorClasses:l,colorStyles:a,variantClasses:i}=Be(e),{densityClasses:u}=oe(e),{roundedClasses:v}=ie(e),{sizeClasses:S,sizeStyles:m}=it(e);return O(()=>c(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,l.value,u.value,v.value,S.value,i.value],style:[a.value,m.value]},{default:()=>{var r;return[e.image?c(rt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?c(ne,{key:"icon",icon:e.icon},null):(r=t.default)==null?void 0:r.call(t),Oe(!1,"v-avatar")]}})),{}}}),Pt=Te("v-list-item-subtitle"),At=Te("v-list-item-title"),le=x()({name:"VListItem",directives:{Ripple:ut},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:B,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:me,onClickOnce:me,...Pe(),...re(),...Ae(),...we(),...se(),...ot(),...T(),...j(),...ue({variant:"text"})},emits:{click:e=>!0},setup(e,s){let{attrs:t,slots:n,emit:l}=s;const a=ct(e,t),i=y(()=>{var g;return(g=e.value)!=null?g:a.href.value}),{select:u,isSelected:v,isIndeterminate:S,isGroupActivator:m,root:r,parent:o,openOnSelect:f}=Ne(i,!1),d=Ee(),k=y(()=>{var g;return e.active!==!1&&(e.active||((g=a.isActive)==null?void 0:g.value)||v.value)}),_=y(()=>e.link!==!1&&a.isLink.value),C=y(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!d)),p=y(()=>e.rounded||e.nav),h=y(()=>{var g;return{color:k.value&&(g=e.activeColor)!=null?g:e.color,variant:e.variant}});Ye(()=>{var g;return(g=a.isActive)==null?void 0:g.value},g=>{g&&o.value!=null&&r.open(o.value,!0),g&&f(g)},{immediate:!0});const{themeClasses:W}=z(e),{borderClasses:q}=_e(e),{colorClasses:Q,colorStyles:w,variantClasses:b}=Be(h),{densityClasses:P}=oe(e),{dimensionStyles:Y}=xe(e),{elevationClasses:N}=Le(e),{roundedClasses:R}=ie(p),$=y(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),A=y(()=>({isActive:k.value,select:u,isSelected:v.value,isIndeterminate:S.value}));function L(g){var D;l("click",g),!(m||!C.value)&&((D=a.navigate)==null||D.call(a,g),e.value!=null&&u(!v.value,g))}function J(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),L(g))}return O(()=>{const g=_.value?"a":e.tag,D=!d||v.value||k.value,ze=n.title||e.title,He=n.subtitle||e.subtitle,Ke=!!(n.append||e.appendAvatar||e.appendIcon),X=!!(n.prepend||e.prependAvatar||e.prependIcon);return d==null||d.updateHasPrepend(X),Ce(c(g,{class:["v-list-item",{"v-list-item--active":k.value,"v-list-item--disabled":e.disabled,"v-list-item--link":C.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!X&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&k.value},W.value,q.value,D?Q.value:void 0,P.value,N.value,$.value,R.value,b.value],style:[D?w.value:void 0,Y.value],href:a.href.value,tabindex:C.value?0:void 0,onClick:L,onKeydown:C.value&&!_.value&&J},{default:()=>{var de;return[Oe(C.value||k.value,"v-list-item"),X&&c("div",{key:"prepend",class:"v-list-item__prepend"},[e.prependAvatar&&c(be,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(ne,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null),n.prepend&&c(te,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[n.prepend(A.value)]})]),c("div",{class:"v-list-item__content","data-no-activator":""},[ze&&c(At,{key:"title"},{default:()=>{var E,F;return[(F=(E=n.title)==null?void 0:E.call(n,{title:e.title}))!=null?F:e.title]}}),He&&c(Pt,{key:"subtitle"},{default:()=>{var E,F;return[(F=(E=n.subtitle)==null?void 0:E.call(n,{subtitle:e.subtitle}))!=null?F:e.subtitle]}}),(de=n.default)==null?void 0:de.call(n,A.value)]),Ke&&c("div",{key:"append",class:"v-list-item__append"},[n.append&&c(te,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[n.append(A.value)]}),e.appendIcon&&c(ne,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(be,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])]}}),[[Je("ripple"),C.value&&e.ripple]])}),{}}}),wt=x()({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...T()},setup(e,s){let{slots:t}=s;const{textColorClasses:n,textColorStyles:l}=Ie(I(e,"color"));return O(()=>{const a=!!(t.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value],style:{textColorStyles:l}},{default:()=>{var i,u;return[a&&c("div",{class:"v-list-subheader__text"},[(u=(i=t.default)==null?void 0:i.call(t))!=null?u:e.title])]}})}),{}}}),$e=x()({name:"VListChildren",props:{items:Array},setup(e,s){let{slots:t}=s;return De(),()=>{var n,l,a;return(a=(n=t.default)==null?void 0:n.call(t))!=null?a:(l=e.items)==null?void 0:l.map(i=>{var d,k,_,C;let{children:u,props:v,type:S,raw:m}=i;if(S==="divider")return(k=(d=t.divider)==null?void 0:d.call(t,{props:v}))!=null?k:c(vt,v,null);if(S==="subheader")return(C=(_=t.subheader)==null?void 0:_.call(t,{props:v}))!=null?C:c(wt,v,{default:t.subheader});const r={subtitle:t.subtitle?p=>{var h;return(h=t.subtitle)==null?void 0:h.call(t,{...p,item:m})}:void 0,prepend:t.prepend?p=>{var h;return(h=t.prepend)==null?void 0:h.call(t,{...p,item:m})}:void 0,append:t.append?p=>{var h;return(h=t.append)==null?void 0:h.call(t,{...p,item:m})}:void 0,default:t.default?p=>{var h;return(h=t.default)==null?void 0:h.call(t,{...p,item:m})}:void 0,title:t.title?p=>{var h;return(h=t.title)==null?void 0:h.call(t,{...p,item:m})}:void 0},[o,f]=Vt(v);return u?c(Re,ge({value:v==null?void 0:v.value},o),{activator:p=>{let{props:h}=p;return t.header?t.header({props:{...v,...h}}):c(le,ge(v,h),r)},default:()=>c($e,{items:u},t)}):t.item?t.item(v):c(le,v,r)})}}}),_t=U({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function xt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Lt(e,s){const t=G(s,e.itemType,"item"),n=xt(s)?s:G(s,e.itemTitle),l=G(s,e.itemValue,void 0),a=G(s,e.itemChildren),i=e.itemProps===!0?Ve(s,["children"])[1]:G(s,e.itemProps),u={title:n,value:l,...i};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&a?je(e,a):void 0,raw:s}}function je(e,s){const t=[];for(const n of s)t.push(Lt(e,n));return t}function Bt(e){return{items:y(()=>je(e,e.items))}}const Ot=x()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...pt({selectStrategy:"single-leaf",openStrategy:"list"}),...Pe(),...re(),...Ae(),...we(),itemType:{type:String,default:"type"},..._t(),...se(),...T(),...j(),...ue({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,s){let{slots:t}=s;const{items:n}=Bt(e),{themeClasses:l}=z(e),{backgroundColorClasses:a,backgroundColorStyles:i}=at(I(e,"bgColor")),{borderClasses:u}=_e(e),{densityClasses:v}=oe(e),{dimensionStyles:S}=xe(e),{elevationClasses:m}=Le(e),{roundedClasses:r}=ie(e),{open:o,select:f}=St(e),d=y(()=>e.lines?`v-list--${e.lines}-line`:void 0),k=I(e,"activeColor"),_=I(e,"color");De(),Xe({VListGroup:{activeColor:k,color:_},VListItem:{activeClass:I(e,"activeClass"),activeColor:k,color:_,density:I(e,"density"),disabled:I(e,"disabled"),lines:I(e,"lines"),nav:I(e,"nav"),variant:I(e,"variant")}});const C=V(!1),p=V();function h(b){C.value=!0}function W(b){C.value=!1}function q(b){var P;!C.value&&!(b.relatedTarget&&((P=p.value)==null?void 0:P.contains(b.relatedTarget)))&&w()}function Q(b){if(!!p.value){if(b.key==="ArrowDown")w("next");else if(b.key==="ArrowUp")w("prev");else if(b.key==="Home")w("first");else if(b.key==="End")w("last");else return;b.preventDefault()}}function w(b){var N,R,$;if(!p.value)return;const P=[...p.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(A=>!A.hasAttribute("disabled")),Y=P.indexOf(document.activeElement);if(!b)p.value.contains(document.activeElement)||(N=P[0])==null||N.focus();else if(b==="first")(R=P[0])==null||R.focus();else if(b==="last")($=P.at(-1))==null||$.focus();else{let A,L=Y;const J=b==="next"?1:-1;do L+=J,A=P[L];while((!A||A.offsetParent==null)&&L<P.length&&L>=0);A?A.focus():w(b==="next"?"first":"last")}}return O(()=>c(e.tag,{ref:p,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},l.value,a.value,u.value,v.value,m.value,d.value,r.value],style:[i.value,S.value],role:"listbox","aria-activedescendant":void 0,onFocusin:h,onFocusout:W,onFocus:q,onKeydown:Q},{default:()=>[c($e,{items:n.value},t)]})),{open:o,select:f,focus:w}}}),Tt={name:"InfoPage",data(){return{env:{VITE_APP_TITLE:"template-vue3-dashboard",VITE_APP_DESCRIPTION:"Basic Vue3 Dashboard",VITE_APP_VERSION:"0.0.1",VITE_APP_REPOSITORY:"https://github.com/mi-sec/template-vue3-dashboard#readme"}}}},Dt={class:"font-weight-light"};function Et(e,s,t,n,l,a){return Z(),ye(dt,null,{default:ee(()=>[he(" env: "),(Z(!0),et(nt,null,tt(l.env,(i,u)=>(Z(),ye(Ot,{key:u},{default:ee(()=>[c(le,null,{default:ee(()=>[pe("code",null,Se(u),1),he(": "),pe("kbd",Dt,Se(i),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})}const Nt=Ze(Tt,[["render",Et]]);export{Nt as default};