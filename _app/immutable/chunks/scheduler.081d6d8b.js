function j(){}const M=t=>t;function E(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function A(){return Object.create(null)}function v(t){t.forEach(q)}function C(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let f;function b(t,n){return t===n?!0:(f||(f=document.createElement("a")),f.href=n,t===f.href)}function y(t){return t.split(",").map(n=>n.trim().split(" ").filter(Boolean))}function S(t,n){const e=y(t.srcset),r=y(n||"");return r.length===e.length&&r.every(([s,c],o)=>c===e[o][1]&&(b(e[o][0],s)||b(s,e[o][0])))}function U(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const r of n)r(void 0);return j}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function G(t,n,e){t.$$.on_destroy.push(O(n,e))}function H(t,n,e,r){if(t){const s=k(t,n,e,r);return t[0](s)}}function k(t,n,e,r){return t[1]&&r?E(e.ctx.slice(),t[1](r(n))):e.ctx}function I(t,n,e,r){if(t[2]&&r){const s=t[2](r(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const c=[],o=Math.max(n.dirty.length,s.length);for(let i=0;i<o;i+=1)c[i]=n.dirty[i]|s[i];return c}return n.dirty|s}return n.dirty}function J(t,n,e,r,s,c){if(s){const o=k(n,e,r,c);t.p(o,s)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function L(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function N(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let _;function h(t){_=t}function g(){if(!_)throw new Error("Function called outside component initialization");return _}function Q(t){g().$$.on_mount.push(t)}function R(t){g().$$.after_update.push(t)}function T(t){g().$$.on_destroy.push(t)}const a=[],m=[];let l=[];const x=[],w=Promise.resolve();let p=!1;function z(){p||(p=!0,w.then(D))}function V(){return z(),w}function B(t){l.push(t)}const d=new Set;let u=0;function D(){if(u!==0)return;const t=_;do{try{for(;u<a.length;){const n=a[u];u++,h(n),F(n.$$)}}catch(n){throw a.length=0,u=0,n}for(h(null),a.length=0,u=0;m.length;)m.pop()();for(let n=0;n<l.length;n+=1){const e=l[n];d.has(e)||(d.add(e),e())}l.length=0}while(a.length);for(;x.length;)x.pop()();p=!1,d.clear(),h(t)}function F(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(B)}}function W(t){const n=[],e=[];l.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),l=n}export{h as A,q as B,a as C,z as D,R as a,m as b,B as c,H as d,I as e,G as f,K as g,T as h,E as i,L as j,b as k,S as l,N as m,j as n,Q as o,C as p,M as q,v as r,P as s,V as t,J as u,A as v,D as w,U as x,W as y,_ as z};
