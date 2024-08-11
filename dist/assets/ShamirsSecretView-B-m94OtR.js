import{r as O,w as j,c as U,a as E,g as S,f as B,e as V,P as J,y as W,x as Z,i as N,F as $,k as z,t as q,j as H,p as K}from"./index-BGIZyYLW.js";import{c as Q,a as X,b as D,_ as Y}from"./Tabs-CPqimg6L.js";function ee(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}function te(p){if(p.__esModule)return p;var m=p.default;if(typeof m=="function"){var f=function l(){return this instanceof l?Reflect.construct(m,arguments,this.constructor):m.apply(this,arguments)};f.prototype=m.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(p).forEach(function(l){var r=Object.getOwnPropertyDescriptor(p,l);Object.defineProperty(f,l,r.get?r:{enumerable:!0,get:function(){return p[l]}})}),f}function re(p){throw new Error('Could not dynamically require "'+p+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var L={exports:{}};const ne={},ae=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"})),ie=te(ae);(function(p){(function(m,f){var l={bits:8,radix:16,minBits:3,maxBits:20,bytesPerChar:2,maxBytesPerChar:6,primitivePolynomials:[null,null,1,3,3,5,3,3,29,17,9,5,83,27,43,3,45,9,39,39,9,5,3,33,27,9,71,39,9,5,83],warning:`WARNING:
A secure random number generator was not found.
Using Math.random(), which is NOT cryptographically strong!`},r={};m.getConfig=function(){return{bits:r.bits,unsafePRNG:r.unsafePRNG}};function y(e){if(e&&(typeof e!="number"||e%1!==0||e<l.minBits||e>l.maxBits))throw new Error("Number of bits must be an integer between "+l.minBits+" and "+l.maxBits+", inclusive.");r.radix=l.radix,r.bits=e||l.bits,r.size=Math.pow(2,r.bits),r.max=r.size-1;for(var t=[],a=[],n=1,o=l.primitivePolynomials[r.bits],i=0;i<r.size;i++)a[i]=n,t[n]=i,n<<=1,n>=r.size&&(n^=o,n&=r.max);r.logs=t,r.exps=a}m.init=y;function R(){return!(!r.bits||!r.size||!r.max||!r.logs||!r.exps||r.logs.length!==r.size||r.exps.length!==r.size)}function G(){var e,t;function a(i,s,c,u){for(var d="",w=0,b=s.length-1;w<b||d.length<i;)d+=x(parseInt(s[w],c).toString(2),u),w++;return d=d.substr(-i),(d.match(/0/g)||[]).length===d.length?null:d}if(typeof re=="function"&&(t=ie)&&(e=t.randomBytes))return function(i){for(var s=Math.ceil(i/8),c=null;c===null;)c=a(i,e(s).toString("hex"),16,4);return c};if(f.crypto&&typeof f.crypto.getRandomValues=="function"&&typeof f.Uint32Array=="function")return t=f.crypto,function(i){for(var s=Math.ceil(i/32),c=null,u=new f.Uint32Array(s);c===null;)t.getRandomValues(u),c=a(i,u,10,32);return c};r.unsafePRNG=!0,M();var n=32,o=Math.pow(2,n)-1;return function(i){for(var s=Math.ceil(i/n),c=[],u=null;u===null;){for(var d=0;d<s;d++)c[d]=Math.floor(Math.random()*o+1);u=a(i,c,10,n)}return u}}function M(){f.console.warn(l.warning),typeof f.alert=="function"&&r.alert&&f.alert(l.warning)}m.setRNG=function(e,t){if(R()||this.init(),r.unsafePRNG=!1,e=e||G(),typeof e!="function"||typeof e(r.bits)!="string"||!parseInt(e(r.bits),2)||e(r.bits).length>r.bits||e(r.bits).length<r.bits)throw new Error("Random number generator is invalid. Supply an RNG of the form function(bits){} that returns a string containing 'bits' number of random 1's and 0's.");return r.rng=e,r.alert=!!t,!!r.unsafePRNG};function h(){return typeof r.rng=="function"}m.random=function(e){if(h()||this.setRNG(),typeof e!="number"||e%1!==0||e<2)throw new Error("Number of bits must be an integer greater than 1.");return r.unsafePRNG&&M(),P(r.rng(e))},m.share=function(e,t,a,n,o){if(R()||this.init(),h()||this.setRNG(),n=n||0,typeof e!="string")throw new Error("Secret must be a string.");if(typeof t!="number"||t%1!==0||t<2)throw new Error("Number of shares must be an integer between 2 and 2^bits-1 ("+r.max+"), inclusive.");if(t>r.max){var i=Math.ceil(Math.log(t+1)/Math.LN2);throw new Error("Number of shares must be an integer between 2 and 2^bits-1 ("+r.max+"), inclusive. To create "+t+" shares, use at least "+i+" bits.")}if(typeof a!="number"||a%1!==0||a<2)throw new Error("Threshold number of shares must be an integer between 2 and 2^bits-1 ("+r.max+"), inclusive.");if(a>r.max){var i=Math.ceil(Math.log(a+1)/Math.LN2);throw new Error("Threshold number of shares must be an integer between 2 and 2^bits-1 ("+r.max+"), inclusive.  To use a threshold of "+a+", use at least "+i+" bits.")}if(typeof n!="number"||n%1!==0)throw new Error("Zero-pad length must be an integer greater than 1.");r.unsafePRNG&&M(),e="1"+k(e),e=T(e,n);for(var s=new Array(t),c=new Array(t),u=0,d=e.length;u<d;u++)for(var w=this._getShares(e[u],t,a),b=0;b<t;b++)s[b]=s[b]||w[b].x.toString(r.radix),c[b]=x(w[b].y.toString(2))+(c[b]?c[b]:"");var F=r.max.toString(r.radix).length;if(o)for(var u=0;u<t;u++)s[u]=P(c[u]);else for(var u=0;u<t;u++)s[u]=r.bits.toString(36).toUpperCase()+x(s[u],F)+P(c[u]);return s},m._getShares=function(e,t,a){for(var n=[],o=[e],i=1;i<a;i++)o[i]=parseInt(r.rng(r.bits),2);for(var i=1,s=t+1;i<s;i++)n[i-1]={x:i,y:v(i,o)};return n};function v(e,t){for(var a=r.logs[e],n=0,o=t.length-1;o>=0;o--){if(n===0){n=t[o];continue}n=r.exps[(a+r.logs[n])%r.max]^t[o]}return n}function g(e,t){for(var a=0,n=e.length;a<n;a++)if(e[a]===t)return!0;return!1}function _(e){var t=parseInt(e[0],36);if(t&&(typeof t!="number"||t%1!==0||t<l.minBits||t>l.maxBits))throw new Error("Number of bits must be an integer between "+l.minBits+" and "+l.maxBits+", inclusive.");var a=Math.pow(2,t)-1,n=a.toString(r.radix).length,o=parseInt(e.substr(1,n),r.radix);if(typeof o!="number"||o%1!==0||o<1||o>a)throw new Error("Share id must be an integer between 1 and "+r.max+", inclusive.");if(e=e.substr(n+1),!e.length)throw new Error("Invalid share: zero-length share.");return{bits:t,id:o,value:e}}m._processShare=_;function I(e,t){for(var a,n,o=[],i=[],s="",c,u=0,d=t.length;u<d;u++){if(n=_(t[u]),typeof a>"u")a=n.bits;else if(n.bits!==a)throw new Error("Mismatched shares: Different bit settings.");if(r.bits!==a&&y(a),!g(o,n.id)){c=o.push(n.id)-1,n=T(k(n.value));for(var w=0,b=n.length;w<b;w++)i[w]=i[w]||[],i[w][c]=n[w]}}for(var u=0,d=i.length;u<d;u++)s=x(A(e,o,i[u]).toString(2))+s;if(e===0){var c=s.indexOf("1");return P(s.slice(c+1))}else return P(s)}m.combine=function(e){return I(0,e)},m.newShare=function(e,t){typeof e=="string"&&(e=parseInt(e,r.radix));var a=_(t[0]),n=Math.pow(2,a.bits)-1;if(typeof e!="number"||e%1!==0||e<1||e>n)throw new Error("Share id must be an integer between 1 and "+r.max+", inclusive.");var o=n.toString(r.radix).length;return r.bits.toString(36).toUpperCase()+x(e.toString(r.radix),o)+I(e,t)};function A(e,t,a){for(var n=0,o,i,s,i=0,c=t.length;i<c;i++)if(a[i]){o=r.logs[a[i]];for(var s=0;s<c;s++)if(i!==s){if(e===t[s]){o=-1;break}o=(o+r.logs[e^t[s]]-r.logs[t[i]^t[s]]+r.max)%r.max}n=o===-1?n:n^r.exps[o]}return n}m._lagrange=A;function T(e,t){t&&(e=x(e,t));for(var a=[],n=e.length;n>r.bits;n-=r.bits)a.push(parseInt(e.slice(n-r.bits,n),2));return a.push(parseInt(e.slice(0,n),2)),a}function x(e,t){t=t||r.bits;var a=e.length%t;return(a?new Array(t-a+1).join("0"):"")+e}function k(e){for(var t="",a,n=e.length-1;n>=0;n--){if(a=parseInt(e[n],16),isNaN(a))throw new Error("Invalid hex character.");t=x(a.toString(2),4)+t}return t}function P(e){var t="",a;e=x(e,4);for(var n=e.length;n>=4;n-=4){if(a=parseInt(e.slice(n-4,n),2),isNaN(a))throw new Error("Invalid binary character.");t=a.toString(16)+t}return t}m.str2hex=function(e,t){if(typeof e!="string")throw new Error("Input must be a character string.");if(t=t||l.bytesPerChar,typeof t!="number"||t%1!==0||t<1||t>l.maxBytesPerChar)throw new Error("Bytes per character must be an integer between 1 and "+l.maxBytesPerChar+", inclusive.");for(var a=2*t,n=Math.pow(16,a)-1,o="",i,s=0,c=e.length;s<c;s++){if(i=e[s].charCodeAt(),isNaN(i))throw new Error("Invalid character: "+e[s]);if(i>n){var u=Math.ceil(Math.log(i+1)/Math.log(256));throw new Error("Invalid character code ("+i+"). Maximum allowable is 256^bytes-1 ("+n+"). To convert this character, use at least "+u+" bytes.")}else o=x(i.toString(16),a)+o}return o},m.hex2str=function(e,t){if(typeof e!="string")throw new Error("Input must be a hexadecimal string.");if(t=t||l.bytesPerChar,typeof t!="number"||t%1!==0||t<1||t>l.maxBytesPerChar)throw new Error("Bytes per character must be an integer between 1 and "+l.maxBytesPerChar+", inclusive.");var a=2*t,n="";e=x(e,a);for(var o=0,i=e.length;o<i;o+=a)n=String.fromCharCode(parseInt(e.slice(o,o+a),16))+n;return n},m.init()})(p.exports?p.exports:window.secrets={},typeof GLOBAL<"u"?GLOBAL:window)})(L);var oe=L.exports;const C=ee(oe),se={class:"page page-shamirs-secret-sharing"},ue={key:0},le=N("h2",null,"Secret parts",-1),ce={class:"list-row"},fe={key:1},me=["onUpdate:modelValue","id"],pe=["onClick"],de=N("h2",null,"Restored secret",-1),he={class:"list-row"},we={__name:"ShamirsSecretView",setup(p){const m=O({available:["Split secret","Combine parts"],selected:"Split secret"}),f=O({secret:"My secret",parts:3,requiredParts:2});j(f,h=>{h.requiredParts>h.parts&&(f.value.requiredParts=h.parts)},{deep:!0});const l=U(()=>{const h=C.str2hex(f.value.secret);return C.share(h,f.value.parts,f.value.requiredParts)}),r=()=>{y.value=JSON.parse(JSON.stringify(l.value)),m.value.selected="Combine parts"},y=O(["","",""]),R=U(()=>G()),G=()=>{try{const h=C.combine(y.value.filter(v=>!!v));return C.hex2str(h)}catch(h){return console.error("cannot combine parts",h),"Error! See console log."}};function M(h){y.value.splice(h,1)}return(h,v)=>(E(),S("div",se,[B(J,null,{icon:V(()=>[B(W)]),default:V(()=>[Z(" Shamir's secret sharing ")]),_:1}),B(Q,{modelValue:m.value.selected,"onUpdate:modelValue":v[4]||(v[4]=g=>m.value.selected=g),tabs:m.value.available},{default:V(()=>[m.value.selected==="Split secret"?(E(),S("div",ue,[B(X,{"max-columns":"two"},{default:V(()=>[B(D,{id:"parts-input",label:"Parts",modelValue:f.value.parts,"onUpdate:modelValue":v[0]||(v[0]=g=>f.value.parts=g),min:2,max:100},null,8,["modelValue"]),B(D,{id:"required-parts-input",label:"Required parts",modelValue:f.value.requiredParts,"onUpdate:modelValue":v[1]||(v[1]=g=>f.value.requiredParts=g),min:2,max:f.value.parts},null,8,["modelValue","max"]),B(Y,{id:"secret-input",label:"Secret",modelValue:f.value.secret,"onUpdate:modelValue":v[2]||(v[2]=g=>f.value.secret=g)},null,8,["modelValue"]),N("div",{style:{"justify-content":"center","align-items":"center"}},[N("button",{onClick:r,style:{width:"max-content"}},"Copy parts to 'Combine parts'")])]),_:1}),le,(E(!0),S($,null,z(l.value,g=>(E(),S("div",ce,q(g),1))),256))])):(E(),S("div",fe,[N("div",null,"Part: "+q(y.value.length),1),N("button",{onClick:v[3]||(v[3]=()=>y.value.push("")),style:{width:"max-content"}},"Add part"),(E(!0),S($,null,z(y.value,(g,_)=>(E(),S("div",{ref_for:!0,ref:`combine-part-${_}`,key:g,style:{display:"flex",margin:"4px 0"}},[H(N("input",{"onUpdate:modelValue":I=>y.value[_]=I,id:`parts-input-${_}`,type:"text",style:{width:"100%"}},null,8,me),[[K,y.value[_]]]),N("div",{onClick:I=>M(_),class:"delete-action",title:"Delete this row"}," ✖ ",8,pe)]))),128)),de,N("div",he,q(R.value),1)]))]),_:1},8,["modelValue","tabs"])]))}};export{we as default};
