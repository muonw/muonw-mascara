function p(){}function z(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function T(){return Object.create(null)}function g(t){t.forEach(L)}function A(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return p;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function st(t,e,n){t.$$.on_destroy.push(G(e,n))}function lt(t,e,n,i){if(t){const r=k(t,e,n,i);return t[0](r)}}function k(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function ut(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function ot(t,e,n,i,r,o){if(r){const c=k(e,n,i,o);t.p(c,r)}}function ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function at(t){return t&&A(t.destroy)?t.destroy:p}let w=!1;function I(){w=!0}function J(){w=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:K(1,r,x=>e[n[x]].claim_order,l))-1;i[s]=n[a]+1;const f=a+1;n[f]=s,r=Math.max(f,r)}const o=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);o.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<o.length&&c[s].claim_order>=o[l].claim_order;)l++;const a=l<o.length?o[l]:null;t.insertBefore(c[s],a)}}function W(t,e){if(w){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function dt(t,e,n){w&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Q(t){t.parentNode&&t.parentNode.removeChild(t)}function _t(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function ht(){return S(" ")}function mt(){return S("")}function pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,r=!1){X(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Y(t,e,n,i){return B(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function gt(t,e,n){return Y(t,e,n,U)}function Z(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function xt(t){return Z(t," ")}function bt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $t(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function wt(t,e,n){t.classList[n?"add":"remove"](e)}function Et(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function vt(t,e){return new t(e)}let y;function m(t){y=t}function H(){if(!y)throw new Error("Function called outside component initialization");return y}function Nt(t){H().$$.on_mount.push(t)}function At(t){H().$$.after_update.push(t)}const h=[],M=[],b=[],D=[],O=Promise.resolve();let v=!1;function P(){v||(v=!0,O.then(q))}function St(){return P(),O}function N(t){b.push(t)}const E=new Set;let _=0;function q(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,m(e),tt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(m(null),h.length=0,_=0;M.length;)M.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];E.has(n)||(E.add(n),n())}b.length=0}while(h.length);for(;D.length;)D.pop()();v=!1,E.clear(),m(t)}function tt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const $=new Set;let d;function jt(){d={r:0,c:[],p:d}}function Ct(){d.r||g(d.c),d=d.p}function et(t,e){t&&t.i&&($.delete(t),t.i(e))}function Tt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Mt(t){t&&t.c()}function Dt(t,e){t&&t.l(e)}function nt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||N(()=>{const c=t.$$.on_mount.map(L).filter(A);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),o.forEach(N)}function it(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){t.$$.dirty[0]===-1&&(h.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(t,e,n,i,r,o,c,u=[-1]){const s=y;m(t);const l=t.$$={fragment:null,ctx:[],props:o,update:p,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:T(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,x,...j)=>{const C=j.length?j[0]:x;return l.ctx&&r(l.ctx[f],l.ctx[f]=C)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](C),a&&rt(t,f)),x}):[],l.update(),a=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){I();const f=V(e.target);l.fragment&&l.fragment.l(f),f.forEach(Q)}else l.fragment&&l.fragment.c();e.intro&&et(t.$$.fragment),nt(t,e.target,e.anchor,e.customElement),J(),q()}m(s)}class kt{$destroy(){it(this,1),this.$destroy=p}$on(e,n){if(!A(n))return p;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!F(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Dt as A,nt as B,it as C,lt as D,Et as E,ot as F,ft as G,ut as H,W as I,st as J,wt as K,pt as L,at as M,A as N,g as O,_t as P,kt as S,ht as a,dt as b,xt as c,Tt as d,mt as e,Ct as f,et as g,Q as h,Lt as i,At as j,U as k,gt as l,V as m,p as n,Nt as o,yt as p,$t as q,S as r,ct as s,St as t,Z as u,bt as v,jt as w,M as x,vt as y,Mt as z};
