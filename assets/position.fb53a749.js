import{a5 as l,p as f,U as m,c as p,D as d}from"./index.70c16e5b.js";const h=["top","bottom"],b=["start","end","left","right"];function y(t,e){let[o,i]=t.split(" ");return i||(i=l(h,o)?"start":l(b,o)?"top":"center"),{side:c(o,e),align:c(i,e)}}function c(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}const u={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},x=f({location:String},"location");function S(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=arguments.length>2?arguments[2]:void 0;const{isRtl:i}=m();return{locationStyles:p(()=>{if(!t.location)return{};const{side:s,align:a}=y(t.location.split(" ").length>1?t.location:`${t.location} center`,i.value);function r(g){return o?o(g):0}const n={};return s!=="center"&&(e?n[u[s]]=`calc(100% - ${r(s)}px)`:n[s]=0),a!=="center"?e?n[u[a]]=`calc(100% - ${r(a)}px)`:n[a]=0:(s==="center"?n.top=n.left="50%":n[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",n.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),n})}}const P=["static","relative","fixed","absolute","sticky"],v=f({position:{type:String,validator:t=>P.includes(t)}},"position");function C(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:d();return{positionClasses:p(()=>t.position?`${e}--${t.position}`:void 0)}}export{v as a,C as b,x as m,S as u};
