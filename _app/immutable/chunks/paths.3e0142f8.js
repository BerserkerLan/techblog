import{n as b,s as h}from"./scheduler.081d6d8b.js";const e=[];function d(n,l=b){let i;const o=new Set;function c(t){if(h(n,t)&&(n=t,i)){const r=!e.length;for(const s of o)s[1](),e.push(s,n);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){c(t(n))}function _(t,r=b){const s=[t,r];return o.add(s),o.size===1&&(i=l(c,f)||b),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:c,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_1cc91zn)==null?void 0:u.base)??"";var a;const z=((a=globalThis.__sveltekit_1cc91zn)==null?void 0:a.assets)??p;export{z as a,p as b,d as w};
