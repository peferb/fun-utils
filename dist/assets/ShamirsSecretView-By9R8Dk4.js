import{_ as J,r as q,w as W,c as $,a as S,g as E,f as B,e as V,P as Z,i as y,s as G,y as H,F as z,k as D,t as A,j as K,p as Q}from"./index-YF0U2M6y.js";import{_ as X}from"./Tabs-BqLVM_uw.js";import{_ as Y,a as ee,b as j}from"./NumberRange-B7cPe0qE.js";function te(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}function re(d){if(d.__esModule)return d;var m=d.default;if(typeof m=="function"){var c=function l(){return this instanceof l?Reflect.construct(m,arguments,this.constructor):m.apply(this,arguments)};c.prototype=m.prototype}else c={};return Object.defineProperty(c,"__esModule",{value:!0}),Object.keys(d).forEach(function(l){var r=Object.getOwnPropertyDescriptor(d,l);Object.defineProperty(c,l,r.get?r:{enumerable:!0,get:function(){return d[l]}})}),c}function ne(d){throw new Error('Could not dynamically require "'+d+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var L={exports:{}};const ae={},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),oe=re(ie);(function(d){(function(m,c){var l={bits:8,radix:16,minBits:3,maxBits:20,bytesPerChar:2,maxBytesPerChar:6,primitivePolynomials:[null,null,1,3,3,5,3,3,29,17,9,5,83,27,43,3,45,9,39,39,9,5,3,33,27,9,71,39,9,5,83],warning:`WARNING:
A secure random number generator was not found.
Using Math.random(), which is NOT cryptographically strong!`},r={};m.getConfig=function(){return{bits:r.bits,unsafePRNG:r.unsafePRNG}};function x(e){if(e&&(typeof e!="number"||e%1!==0||e<l.minBits||e>l.maxBits))throw new Error("Number of bits must be an integer between "+l.minBits+" and "+l.maxBits+", inclusive.");r.radix=l.radix,r.bits=e||l.bits,r.size=Math.pow(2,r.bits),r.max=r.size-1;for(var t=[],a=[],n=1,o=l.primitivePolynomials[r.bits],i=0;i<r.size;i++)a[i]=n,t[n]=i,n<<=1,n>=r.size&&(n^=o,n&=r.max);r.logs=t,r.exps=a}m.init=x;function R(){return!(!r.bits||!r.size||!r.max||!r.logs||!r.exps||r.logs.length!==r.size||r.exps.length!==r.size)}function O(){var e,t;function a(i,s,f,u){for(var v="",w=0,b=s.length-1;w<b||v.length<i;)v+=_(parseInt(s[w],f).toString(2),u),w++;return v=v.substr(-i),(v.match(/0/g)||[]).length===v.length?null:v}if(typeof ne=="function"&&(t=oe)&&(e=t.randomBytes))return function(i){for(var s=Math.ceil(i/8),f=null;f===null;)f=a(i,e(s).toString("hex"),16,4);return f};if(c.crypto&&typeof c.crypto.getRandomValues=="function"&&typeof c.Uint32Array=="function")return t=c.crypto,function(i){for(var s=Math.ceil(i/32),f=null,u=new c.Uint32Array(s);f===null;)t.getRandomValues(u),f=a(i,u,10,32);return f};r.unsafePRNG=!0,M();var n=32,o=Math.pow(2,n)-1;return function(i){for(var s=Math.ceil(i/n),f=[],u=null;u===null;){for(var v=0;v<s;v++)f[v]=Math.floor(Math.random()*o+1);u=a(i,f,10,n)}return u}}function M(){c.console.warn(l.warning),typeof c.alert=="function"&&r.alert&&c.alert(l.warning)}m.setRNG=function(e,t){if(R()||this.init(),r.unsafePRNG=!1,e=e||O(),typeof e!="function"||typeof e(r.bits)!="string"||!parseInt(e(r.bits),2)||e(r.bits).length>r.bits||e(r.bits).length<r.bits)throw new Error("Random number generator is invalid. Supply an RNG of the form function(bits){} that returns a string containing 'bits' number of random 1's and 0's.");return r.rng=e,r.alert=!!t,!!r.unsafePRNG};function h(){return typeof r.rng=="function"}m.random=function(e){if(h()||this.setRNG(),typeof e!="number"||e%1!==0||e<2)throw new Error("Number of bits must be an integer greater than 1.");return r.unsafePRNG&&M(),P(r.rng(e))},m.share=function(e,t,a,n,o){if(R()||this.init(),h()||this.setRNG(),n=n||0,typeof e!="string")throw new Error("Secret must be a string.");if(typeof t!="number"||t%1!==0||t<2)throw new Error("Number of shares must be an integer between 2 and 2^bits-1 ("+r.max+"), inclusive.");if(t>r.max){var i=Math.ceil(Math.log(t+1)/Math.LN2);throw new Error("Number of shares must be an integer between 2 and 2^bits-1 ("+r.max+"), inclusive. To create "+t+" shares, use at least "+i+" bits.")}if(typeof a!="number"||a%1!==0||a<2)throw new Error("Threshold number of shares must be an integer between 2 and 2^bits-1 ("+r.max+"), inclusive.");if(a>r.max){var i=Math.ceil(Math.log(a+1)/Math.LN2);throw new Error("Threshold number of shares must be an integer between 2 and 2^bits-1 ("+r.max+"), inclusive.  To use a threshold of "+a+", use at least "+i+" bits.")}if(typeof n!="number"||n%1!==0)throw new Error("Zero-pad length must be an integer greater than 1.");r.unsafePRNG&&M(),e="1"+U(e),e=T(e,n);for(var s=new Array(t),f=new Array(t),u=0,v=e.length;u<v;u++)for(var w=this._getShares(e[u],t,a),b=0;b<t;b++)s[b]=s[b]||w[b].x.toString(r.radix),f[b]=_(w[b].y.toString(2))+(f[b]?f[b]:"");var F=r.max.toString(r.radix).length;if(o)for(var u=0;u<t;u++)s[u]=P(f[u]);else for(var u=0;u<t;u++)s[u]=r.bits.toString(36).toUpperCase()+_(s[u],F)+P(f[u]);return s},m._getShares=function(e,t,a){for(var n=[],o=[e],i=1;i<a;i++)o[i]=parseInt(r.rng(r.bits),2);for(var i=1,s=t+1;i<s;i++)n[i-1]={x:i,y:p(i,o)};return n};function p(e,t){for(var a=r.logs[e],n=0,o=t.length-1;o>=0;o--){if(n===0){n=t[o];continue}n=r.exps[(a+r.logs[n])%r.max]^t[o]}return n}function g(e,t){for(var a=0,n=e.length;a<n;a++)if(e[a]===t)return!0;return!1}function N(e){var t=parseInt(e[0],36);if(t&&(typeof t!="number"||t%1!==0||t<l.minBits||t>l.maxBits))throw new Error("Number of bits must be an integer between "+l.minBits+" and "+l.maxBits+", inclusive.");var a=Math.pow(2,t)-1,n=a.toString(r.radix).length,o=parseInt(e.substr(1,n),r.radix);if(typeof o!="number"||o%1!==0||o<1||o>a)throw new Error("Share id must be an integer between 1 and "+r.max+", inclusive.");if(e=e.substr(n+1),!e.length)throw new Error("Invalid share: zero-length share.");return{bits:t,id:o,value:e}}m._processShare=N;function I(e,t){for(var a,n,o=[],i=[],s="",f,u=0,v=t.length;u<v;u++){if(n=N(t[u]),typeof a>"u")a=n.bits;else if(n.bits!==a)throw new Error("Mismatched shares: Different bit settings.");if(r.bits!==a&&x(a),!g(o,n.id)){f=o.push(n.id)-1,n=T(U(n.value));for(var w=0,b=n.length;w<b;w++)i[w]=i[w]||[],i[w][f]=n[w]}}for(var u=0,v=i.length;u<v;u++)s=_(k(e,o,i[u]).toString(2))+s;if(e===0){var f=s.indexOf("1");return P(s.slice(f+1))}else return P(s)}m.combine=function(e){return I(0,e)},m.newShare=function(e,t){typeof e=="string"&&(e=parseInt(e,r.radix));var a=N(t[0]),n=Math.pow(2,a.bits)-1;if(typeof e!="number"||e%1!==0||e<1||e>n)throw new Error("Share id must be an integer between 1 and "+r.max+", inclusive.");var o=n.toString(r.radix).length;return r.bits.toString(36).toUpperCase()+_(e.toString(r.radix),o)+I(e,t)};function k(e,t,a){for(var n=0,o,i,s,i=0,f=t.length;i<f;i++)if(a[i]){o=r.logs[a[i]];for(var s=0;s<f;s++)if(i!==s){if(e===t[s]){o=-1;break}o=(o+r.logs[e^t[s]]-r.logs[t[i]^t[s]]+r.max)%r.max}n=o===-1?n:n^r.exps[o]}return n}m._lagrange=k;function T(e,t){t&&(e=_(e,t));for(var a=[],n=e.length;n>r.bits;n-=r.bits)a.push(parseInt(e.slice(n-r.bits,n),2));return a.push(parseInt(e.slice(0,n),2)),a}function _(e,t){t=t||r.bits;var a=e.length%t;return(a?new Array(t-a+1).join("0"):"")+e}function U(e){for(var t="",a,n=e.length-1;n>=0;n--){if(a=parseInt(e[n],16),isNaN(a))throw new Error("Invalid hex character.");t=_(a.toString(2),4)+t}return t}function P(e){var t="",a;e=_(e,4);for(var n=e.length;n>=4;n-=4){if(a=parseInt(e.slice(n-4,n),2),isNaN(a))throw new Error("Invalid binary character.");t=a.toString(16)+t}return t}m.str2hex=function(e,t){if(typeof e!="string")throw new Error("Input must be a character string.");if(t=t||l.bytesPerChar,typeof t!="number"||t%1!==0||t<1||t>l.maxBytesPerChar)throw new Error("Bytes per character must be an integer between 1 and "+l.maxBytesPerChar+", inclusive.");for(var a=2*t,n=Math.pow(16,a)-1,o="",i,s=0,f=e.length;s<f;s++){if(i=e[s].charCodeAt(),isNaN(i))throw new Error("Invalid character: "+e[s]);if(i>n){var u=Math.ceil(Math.log(i+1)/Math.log(256));throw new Error("Invalid character code ("+i+"). Maximum allowable is 256^bytes-1 ("+n+"). To convert this character, use at least "+u+" bytes.")}else o=_(i.toString(16),a)+o}return o},m.hex2str=function(e,t){if(typeof e!="string")throw new Error("Input must be a hexadecimal string.");if(t=t||l.bytesPerChar,typeof t!="number"||t%1!==0||t<1||t>l.maxBytesPerChar)throw new Error("Bytes per character must be an integer between 1 and "+l.maxBytesPerChar+", inclusive.");var a=2*t,n="";e=_(e,a);for(var o=0,i=e.length;o<i;o+=a)n=String.fromCharCode(parseInt(e.slice(o,o+a),16))+n;return n},m.init()})(d.exports?d.exports:window.secrets={},typeof GLOBAL<"u"?GLOBAL:window)})(L);var se=L.exports;const C=te(se),ue={class:"page page-shamirs-secret-sharing"},le={key:0},fe={class:"list-row"},ce={key:1},me={style:{display:"flex","margin-bottom":"12px"}},pe={style:{"margin-right":"12px"}},de=["onUpdate:modelValue","id"],ve=["onClick"],he={class:"list-row"},ge={__name:"ShamirsSecretView",setup(d){const m=q({available:["Split secret","Combine parts"],selected:"Split secret"}),c=q({secret:"My secret",parts:3,requiredParts:2});W(c,h=>{h.requiredParts>h.parts&&(c.value.requiredParts=h.parts)},{deep:!0});const l=$(()=>{const h=C.str2hex(c.value.secret);return C.share(h,c.value.parts,c.value.requiredParts)}),r=()=>{x.value=JSON.parse(JSON.stringify(l.value)),m.value.selected="Combine parts"},x=q(["","",""]),R=$(()=>O()),O=()=>{try{const h=C.combine(x.value.filter(p=>!!p));return C.hex2str(h)}catch(h){return console.error("cannot combine parts",h),"Error! See console log."}};function M(h){x.value.splice(h,1)}return(h,p)=>(S(),E("div",ue,[B(Z,null,{icon:V(()=>[B(H)]),default:V(()=>[p[5]||(p[5]=G(" Shamir's secret sharing "))]),_:1}),p[8]||(p[8]=y("p",null,[G(" Using secrets.js: "),y("a",{href:"https://github.com/scrtlabs/secret.js"},"Github"),G(", "),y("a",{href:"https://www.npmjs.com/package/secretjs"},"NPM"),G(". ")],-1)),B(X,{modelValue:m.value.selected,"onUpdate:modelValue":p[4]||(p[4]=g=>m.value.selected=g),tabs:m.value.available,style:{"margin-top":"24px"}},{default:V(()=>[m.value.selected==="Split secret"?(S(),E("div",le,[B(Y,{id:"secret-input",label:"Secret",modelValue:c.value.secret,"onUpdate:modelValue":p[0]||(p[0]=g=>c.value.secret=g)},null,8,["modelValue"]),B(ee,{"max-columns":"two"},{default:V(()=>[B(j,{id:"parts-input",label:"Parts",modelValue:c.value.parts,"onUpdate:modelValue":p[1]||(p[1]=g=>c.value.parts=g),min:2,max:100},null,8,["modelValue"]),B(j,{id:"required-parts-input",label:"Required parts",modelValue:c.value.requiredParts,"onUpdate:modelValue":p[2]||(p[2]=g=>c.value.requiredParts=g),min:2,max:c.value.parts},null,8,["modelValue","max"])]),_:1}),y("div",{style:{display:"flex","justify-content":"center","align-items":"center","margin-top":"8px"}},[y("button",{onClick:r,style:{width:"max-content"}},"Copy parts to 'Combine parts'   →")]),p[6]||(p[6]=y("h2",null,"Secret parts",-1)),(S(!0),E(z,null,D(l.value,g=>(S(),E("div",fe,A(g),1))),256))])):(S(),E("div",ce,[y("div",me,[y("div",pe,"Parts #"+A(x.value.length),1),y("button",{onClick:p[3]||(p[3]=()=>x.value.push("")),style:{width:"max-content"}},"Add part")]),(S(!0),E(z,null,D(x.value,(g,N)=>(S(),E("div",{ref_for:!0,ref:`combine-part-${N}`,key:g,style:{display:"flex",margin:"4px 0"}},[K(y("input",{"onUpdate:modelValue":I=>x.value[N]=I,id:`parts-input-${N}`,type:"text",style:{width:"100%"}},null,8,de),[[Q,x.value[N]]]),y("div",{onClick:I=>M(N),class:"delete-action",title:"Delete this row"}," ✖ ",8,ve)]))),128)),p[7]||(p[7]=y("h2",null,"Restored secret",-1)),y("div",he,A(R.value),1)]))]),_:1},8,["modelValue","tabs"])]))}},xe=J(ge,[["__scopeId","data-v-9f4c38f5"]]);export{xe as default};
