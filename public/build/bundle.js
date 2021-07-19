var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,i=!1;function a(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function u(t,e){i?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const c=a(1,o+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;r[t]=n[c]+1;const l=c+1;n[l]=t,o=Math.max(l,o)}const c=[],l=[];let i=e.length-1;for(let t=n[o]+1;0!=t;t=r[t-1]){for(c.push(e[t-1]);i>=t;i--)l.push(e[i]);i--}for(;i>=0;i--)l.push(e[i]);c.reverse(),l.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<l.length;e++){for(;n<c.length&&l[e].claim_order>=c[n].claim_order;)n++;const r=n<c.length?c[n]:null;t.insertBefore(l[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function s(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){l=t}const m=[],p=[],_=[],g=[],$=Promise.resolve();let x=!1;function y(t){_.push(t)}let b=!1;const v=new Set;function w(){if(!b){b=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];h(e),k(e.$$)}for(h(null),m.length=0;p.length;)p.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];v.has(e)||(v.add(e),e())}_.length=0}while(m.length);for(;g.length;)g.pop()();x=!1,b=!1,v.clear()}}function k(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const A=new Set;function E(t,e){-1===t.$$.dirty[0]&&(m.push(t),x||(x=!0,$.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(c,a,u,f,d,m,p=[-1]){const _=l;h(c);const g=c.$$={fragment:null,ctx:null,props:m,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(_?_.$$.context:a.context||[]),callbacks:n(),dirty:p,skip_bound:!1};let $=!1;if(g.ctx=u?u(c,a.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return g.ctx&&d(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),$&&E(c,t)),e})):[],g.update(),$=!0,r(g.before_update),g.fragment=!!f&&f(g.ctx),a.target){if(a.hydrate){i=!0;const t=function(t){return Array.from(t.childNodes)}(a.target);g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();a.intro&&((x=c.$$.fragment)&&x.i&&(A.delete(x),x.i(b))),function(t,n,c,l){const{fragment:i,on_mount:a,on_destroy:u,after_update:s}=t.$$;i&&i.m(n,c),l||y((()=>{const n=a.map(e).filter(o);u?u.push(...n):r(n),t.$$.on_mount=[]})),s.forEach(y)}(c,a.target,a.anchor,a.customElement),i=!1,w()}var x,b;h(_)}function j(e){let n,r,o;return{c(){var t;n=f("main"),r=f("div"),t=e[0],o=document.createTextNode(t),d(r,"class","text-green-300 text-9xl max-w-md text-center"),d(n,"class","flex items-center justify-center h-screen")},m(t,e){!function(t,e,n){i&&!n?u(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}(t,n,e),u(n,r),u(r,o)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,t[0])},i:t,o:t,d(t){t&&s(n)}}}function S(t,e,n){let{name:r}=e;return t.$$set=t=>{"name"in t&&n(0,r=t.name)},[r]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),N(this,t,S,j,c,{name:0})}}({target:document.body,props:{name:"A51"}})}();
//# sourceMappingURL=bundle.js.map
