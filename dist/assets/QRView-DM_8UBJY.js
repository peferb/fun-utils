import{d as rt,r as L,w as lt,h as it,m as D,u as $,o as N,c as S,a as v,t as U,b as Y,v as at,e as Re,n as _e,f as ut,g as O,i as J,j as E,k as ye,l as st,F as Ue,p as Fe,q as Ee,s as ke,x as dt,P as ct,y as Z,z as oe,I as ft}from"./index-ZL70mmXw.js";var W={},gt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},De={},A={};let Ve;const mt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];A.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};A.getSymbolTotalCodewords=function(t){return mt[t]};A.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};A.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Ve=t};A.isKanjiModeEnabled=function(){return typeof Ve<"u"};A.toSJIS=function(t){return Ve(t)};var ae={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(l){if(typeof l!="string")throw new Error("Param is not a string");switch(l.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+l)}}e.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},e.from=function(n,o){if(e.isValid(n))return n;try{return t(n)}catch{return o}}})(ae);function $e(){this.buffer=[],this.length=0}$e.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let l=0;l<t;l++)this.putBit((e>>>t-l-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var ht=$e;function X(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}X.prototype.set=function(e,t,l,n){const o=e*this.size+t;this.data[o]=l,n&&(this.reservedBit[o]=!0)};X.prototype.get=function(e,t){return this.data[e*this.size+t]};X.prototype.xor=function(e,t,l){this.data[e*this.size+t]^=l};X.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var pt=X,xe={};(function(e){const t=A.getSymbolSize;e.getRowColCoords=function(n){if(n===1)return[];const o=Math.floor(n/7)+2,r=t(n),a=r===145?26:Math.ceil((r-13)/(2*o-2))*2,u=[r-7];for(let i=1;i<o-1;i++)u[i]=u[i-1]-a;return u.push(6),u.reverse()},e.getPositions=function(n){const o=[],r=e.getRowColCoords(n),a=r.length;for(let u=0;u<a;u++)for(let i=0;i<a;i++)u===0&&i===0||u===0&&i===a-1||u===a-1&&i===0||o.push([r[u],r[i]]);return o}})(xe);var Oe={};const yt=A.getSymbolSize,Ae=7;Oe.getPositions=function(t){const l=yt(t);return[[0,0],[l-Ae,0],[0,l-Ae]]};var ze={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const r=o.size;let a=0,u=0,i=0,s=null,d=null;for(let C=0;C<r;C++){u=i=0,s=d=null;for(let f=0;f<r;f++){let c=o.get(C,f);c===s?u++:(u>=5&&(a+=t.N1+(u-5)),s=c,u=1),c=o.get(f,C),c===d?i++:(i>=5&&(a+=t.N1+(i-5)),d=c,i=1)}u>=5&&(a+=t.N1+(u-5)),i>=5&&(a+=t.N1+(i-5))}return a},e.getPenaltyN2=function(o){const r=o.size;let a=0;for(let u=0;u<r-1;u++)for(let i=0;i<r-1;i++){const s=o.get(u,i)+o.get(u,i+1)+o.get(u+1,i)+o.get(u+1,i+1);(s===4||s===0)&&a++}return a*t.N2},e.getPenaltyN3=function(o){const r=o.size;let a=0,u=0,i=0;for(let s=0;s<r;s++){u=i=0;for(let d=0;d<r;d++)u=u<<1&2047|o.get(s,d),d>=10&&(u===1488||u===93)&&a++,i=i<<1&2047|o.get(d,s),d>=10&&(i===1488||i===93)&&a++}return a*t.N3},e.getPenaltyN4=function(o){let r=0;const a=o.data.length;for(let i=0;i<a;i++)r+=o.data[i];return Math.abs(Math.ceil(r*100/a/5)-10)*t.N4};function l(n,o,r){switch(n){case e.Patterns.PATTERN000:return(o+r)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(o+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return o*r%2+o*r%3===0;case e.Patterns.PATTERN110:return(o*r%2+o*r%3)%2===0;case e.Patterns.PATTERN111:return(o*r%3+(o+r)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}e.applyMask=function(o,r){const a=r.size;for(let u=0;u<a;u++)for(let i=0;i<a;i++)r.isReserved(i,u)||r.xor(i,u,l(o,i,u))},e.getBestMask=function(o,r){const a=Object.keys(e.Patterns).length;let u=0,i=1/0;for(let s=0;s<a;s++){r(s),e.applyMask(s,o);const d=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(s,o),d<i&&(i=d,u=s)}return u}})(ze);var ue={};const k=ae,ee=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],te=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ue.getBlocksCount=function(t,l){switch(l){case k.L:return ee[(t-1)*4+0];case k.M:return ee[(t-1)*4+1];case k.Q:return ee[(t-1)*4+2];case k.H:return ee[(t-1)*4+3];default:return}};ue.getTotalCodewordsCount=function(t,l){switch(l){case k.L:return te[(t-1)*4+0];case k.M:return te[(t-1)*4+1];case k.Q:return te[(t-1)*4+2];case k.H:return te[(t-1)*4+3];default:return}};var qe={},se={};const Q=new Uint8Array(512),re=new Uint8Array(256);(function(){let t=1;for(let l=0;l<255;l++)Q[l]=t,re[t]=l,t<<=1,t&256&&(t^=285);for(let l=255;l<512;l++)Q[l]=Q[l-255]})();se.log=function(t){if(t<1)throw new Error("log("+t+")");return re[t]};se.exp=function(t){return Q[t]};se.mul=function(t,l){return t===0||l===0?0:Q[re[t]+re[l]]};(function(e){const t=se;e.mul=function(n,o){const r=new Uint8Array(n.length+o.length-1);for(let a=0;a<n.length;a++)for(let u=0;u<o.length;u++)r[a+u]^=t.mul(n[a],o[u]);return r},e.mod=function(n,o){let r=new Uint8Array(n);for(;r.length-o.length>=0;){const a=r[0];for(let i=0;i<o.length;i++)r[i]^=t.mul(o[i],a);let u=0;for(;u<r.length&&r[u]===0;)u++;r=r.slice(u)}return r},e.generateECPolynomial=function(n){let o=new Uint8Array([1]);for(let r=0;r<n;r++)o=e.mul(o,new Uint8Array([1,t.exp(r)]));return o}})(qe);const He=qe;function Ne(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Ne.prototype.initialize=function(t){this.degree=t,this.genPoly=He.generateECPolynomial(this.degree)};Ne.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const l=new Uint8Array(t.length+this.degree);l.set(t);const n=He.mod(l,this.genPoly),o=this.degree-n.length;if(o>0){const r=new Uint8Array(this.degree);return r.set(n,o),r}return n};var wt=Ne,Ke={},x={},Be={};Be.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var R={};const je="[0-9]+",vt="[A-Z $%*+\\-./:]+";let G="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";G=G.replace(/u/g,"\\u");const Ct="(?:(?![A-Z0-9 $%*+\\-./:]|"+G+`)(?:.|[\r
]))+`;R.KANJI=new RegExp(G,"g");R.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");R.BYTE=new RegExp(Ct,"g");R.NUMERIC=new RegExp(je,"g");R.ALPHANUMERIC=new RegExp(vt,"g");const bt=new RegExp("^"+G+"$"),Et=new RegExp("^"+je+"$"),Vt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");R.testKanji=function(t){return bt.test(t)};R.testNumeric=function(t){return Et.test(t)};R.testAlphanumeric=function(t){return Vt.test(t)};(function(e){const t=Be,l=R;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(r,a){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!t.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?r.ccBits[0]:a<27?r.ccBits[1]:r.ccBits[2]},e.getBestModeForData=function(r){return l.testNumeric(r)?e.NUMERIC:l.testAlphanumeric(r)?e.ALPHANUMERIC:l.testKanji(r)?e.KANJI:e.BYTE},e.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},e.isValid=function(r){return r&&r.bit&&r.ccBits};function n(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(r,a){if(e.isValid(r))return r;try{return n(r)}catch{return a}}})(x);(function(e){const t=A,l=ue,n=ae,o=x,r=Be,a=7973,u=t.getBCHDigit(a);function i(f,c,p){for(let y=1;y<=40;y++)if(c<=e.getCapacity(y,p,f))return y}function s(f,c){return o.getCharCountIndicator(f,c)+4}function d(f,c){let p=0;return f.forEach(function(y){const I=s(y.mode,c);p+=I+y.getBitsLength()}),p}function C(f,c){for(let p=1;p<=40;p++)if(d(f,p)<=e.getCapacity(p,c,o.MIXED))return p}e.from=function(c,p){return r.isValid(c)?parseInt(c,10):p},e.getCapacity=function(c,p,y){if(!r.isValid(c))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=o.BYTE);const I=t.getSymbolTotalCodewords(c),h=l.getTotalCodewordsCount(c,p),w=(I-h)*8;if(y===o.MIXED)return w;const m=w-s(y,c);switch(y){case o.NUMERIC:return Math.floor(m/10*3);case o.ALPHANUMERIC:return Math.floor(m/11*2);case o.KANJI:return Math.floor(m/13);case o.BYTE:default:return Math.floor(m/8)}},e.getBestVersionForData=function(c,p){let y;const I=n.from(p,n.M);if(Array.isArray(c)){if(c.length>1)return C(c,I);if(c.length===0)return 1;y=c[0]}else y=c;return i(y.mode,y.getLength(),I)},e.getEncodedBits=function(c){if(!r.isValid(c)||c<7)throw new Error("Invalid QR Code version");let p=c<<12;for(;t.getBCHDigit(p)-u>=0;)p^=a<<t.getBCHDigit(p)-u;return c<<12|p}})(Ke);var Je={};const we=A,Qe=1335,Nt=21522,Te=we.getBCHDigit(Qe);Je.getEncodedBits=function(t,l){const n=t.bit<<3|l;let o=n<<10;for(;we.getBCHDigit(o)-Te>=0;)o^=Qe<<we.getBCHDigit(o)-Te;return(n<<10|o)^Nt};var Ye={};const Bt=x;function z(e){this.mode=Bt.NUMERIC,this.data=e.toString()}z.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(t){let l,n,o;for(l=0;l+3<=this.data.length;l+=3)n=this.data.substr(l,3),o=parseInt(n,10),t.put(o,10);const r=this.data.length-l;r>0&&(n=this.data.substr(l),o=parseInt(n,10),t.put(o,r*3+1))};var It=z;const St=x,fe=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function q(e){this.mode=St.ALPHANUMERIC,this.data=e}q.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};q.prototype.getLength=function(){return this.data.length};q.prototype.getBitsLength=function(){return q.getBitsLength(this.data.length)};q.prototype.write=function(t){let l;for(l=0;l+2<=this.data.length;l+=2){let n=fe.indexOf(this.data[l])*45;n+=fe.indexOf(this.data[l+1]),t.put(n,11)}this.data.length%2&&t.put(fe.indexOf(this.data[l]),6)};var At=q,Tt=function(t){for(var l=[],n=t.length,o=0;o<n;o++){var r=t.charCodeAt(o);if(r>=55296&&r<=56319&&n>o+1){var a=t.charCodeAt(o+1);a>=56320&&a<=57343&&(r=(r-55296)*1024+a-56320+65536,o+=1)}if(r<128){l.push(r);continue}if(r<2048){l.push(r>>6|192),l.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){l.push(r>>12|224),l.push(r>>6&63|128),l.push(r&63|128);continue}if(r>=65536&&r<=1114111){l.push(r>>18|240),l.push(r>>12&63|128),l.push(r>>6&63|128),l.push(r&63|128);continue}l.push(239,191,189)}return new Uint8Array(l).buffer};const Mt=Tt,Pt=x;function H(e){this.mode=Pt.BYTE,typeof e=="string"&&(e=Mt(e)),this.data=new Uint8Array(e)}H.getBitsLength=function(t){return t*8};H.prototype.getLength=function(){return this.data.length};H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)};H.prototype.write=function(e){for(let t=0,l=this.data.length;t<l;t++)e.put(this.data[t],8)};var Lt=H;const Rt=x,_t=A;function K(e){this.mode=Rt.KANJI,this.data=e}K.getBitsLength=function(t){return t*13};K.prototype.getLength=function(){return this.data.length};K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)};K.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let l=_t.toSJIS(this.data[t]);if(l>=33088&&l<=40956)l-=33088;else if(l>=57408&&l<=60351)l-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);l=(l>>>8&255)*192+(l&255),e.put(l,13)}};var Ut=K,Ge={exports:{}};(function(e){var t={single_source_shortest_paths:function(l,n,o){var r={},a={};a[n]=0;var u=t.PriorityQueue.make();u.push(n,0);for(var i,s,d,C,f,c,p,y,I;!u.empty();){i=u.pop(),s=i.value,C=i.cost,f=l[s]||{};for(d in f)f.hasOwnProperty(d)&&(c=f[d],p=C+c,y=a[d],I=typeof a[d]>"u",(I||y>p)&&(a[d]=p,u.push(d,p),r[d]=s))}if(typeof o<"u"&&typeof a[o]>"u"){var h=["Could not find a path from ",n," to ",o,"."].join("");throw new Error(h)}return r},extract_shortest_path_from_predecessor_list:function(l,n){for(var o=[],r=n;r;)o.push(r),l[r],r=l[r];return o.reverse(),o},find_path:function(l,n,o){var r=t.single_source_shortest_paths(l,n,o);return t.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(l){var n=t.PriorityQueue,o={},r;l=l||{};for(r in n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=l.sorter||n.default_sorter,o},default_sorter:function(l,n){return l.cost-n.cost},push:function(l,n){var o={value:l,cost:n};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Ge);var Ft=Ge.exports;(function(e){const t=x,l=It,n=At,o=Lt,r=Ut,a=R,u=A,i=Ft;function s(h){return unescape(encodeURIComponent(h)).length}function d(h,w,m){const g=[];let b;for(;(b=h.exec(m))!==null;)g.push({data:b[0],index:b.index,mode:w,length:b[0].length});return g}function C(h){const w=d(a.NUMERIC,t.NUMERIC,h),m=d(a.ALPHANUMERIC,t.ALPHANUMERIC,h);let g,b;return u.isKanjiModeEnabled()?(g=d(a.BYTE,t.BYTE,h),b=d(a.KANJI,t.KANJI,h)):(g=d(a.BYTE_KANJI,t.BYTE,h),b=[]),w.concat(m,g,b).sort(function(B,T){return B.index-T.index}).map(function(B){return{data:B.data,mode:B.mode,length:B.length}})}function f(h,w){switch(w){case t.NUMERIC:return l.getBitsLength(h);case t.ALPHANUMERIC:return n.getBitsLength(h);case t.KANJI:return r.getBitsLength(h);case t.BYTE:return o.getBitsLength(h)}}function c(h){return h.reduce(function(w,m){const g=w.length-1>=0?w[w.length-1]:null;return g&&g.mode===m.mode?(w[w.length-1].data+=m.data,w):(w.push(m),w)},[])}function p(h){const w=[];for(let m=0;m<h.length;m++){const g=h[m];switch(g.mode){case t.NUMERIC:w.push([g,{data:g.data,mode:t.ALPHANUMERIC,length:g.length},{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.ALPHANUMERIC:w.push([g,{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.KANJI:w.push([g,{data:g.data,mode:t.BYTE,length:s(g.data)}]);break;case t.BYTE:w.push([{data:g.data,mode:t.BYTE,length:s(g.data)}])}}return w}function y(h,w){const m={},g={start:{}};let b=["start"];for(let V=0;V<h.length;V++){const B=h[V],T=[];for(let F=0;F<B.length;F++){const P=B[F],j=""+V+F;T.push(j),m[j]={node:P,lastCount:0},g[j]={};for(let ce=0;ce<b.length;ce++){const _=b[ce];m[_]&&m[_].node.mode===P.mode?(g[_][j]=f(m[_].lastCount+P.length,P.mode)-f(m[_].lastCount,P.mode),m[_].lastCount+=P.length):(m[_]&&(m[_].lastCount=P.length),g[_][j]=f(P.length,P.mode)+4+t.getCharCountIndicator(P.mode,w))}}b=T}for(let V=0;V<b.length;V++)g[b[V]].end=0;return{map:g,table:m}}function I(h,w){let m;const g=t.getBestModeForData(h);if(m=t.from(w,g),m!==t.BYTE&&m.bit<g.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(m)+`.
 Suggested mode is: `+t.toString(g));switch(m===t.KANJI&&!u.isKanjiModeEnabled()&&(m=t.BYTE),m){case t.NUMERIC:return new l(h);case t.ALPHANUMERIC:return new n(h);case t.KANJI:return new r(h);case t.BYTE:return new o(h)}}e.fromArray=function(w){return w.reduce(function(m,g){return typeof g=="string"?m.push(I(g,null)):g.data&&m.push(I(g.data,g.mode)),m},[])},e.fromString=function(w,m){const g=C(w,u.isKanjiModeEnabled()),b=p(g),V=y(b,m),B=i.find_path(V.map,"start","end"),T=[];for(let F=1;F<B.length-1;F++)T.push(V.table[B[F]].node);return e.fromArray(c(T))},e.rawSplit=function(w){return e.fromArray(C(w,u.isKanjiModeEnabled()))}})(Ye);const de=A,ge=ae,kt=ht,Dt=pt,$t=xe,xt=Oe,ve=ze,Ce=ue,Ot=wt,le=Ke,zt=Je,qt=x,me=Ye;function Ht(e,t){const l=e.size,n=xt.getPositions(t);for(let o=0;o<n.length;o++){const r=n[o][0],a=n[o][1];for(let u=-1;u<=7;u++)if(!(r+u<=-1||l<=r+u))for(let i=-1;i<=7;i++)a+i<=-1||l<=a+i||(u>=0&&u<=6&&(i===0||i===6)||i>=0&&i<=6&&(u===0||u===6)||u>=2&&u<=4&&i>=2&&i<=4?e.set(r+u,a+i,!0,!0):e.set(r+u,a+i,!1,!0))}}function Kt(e){const t=e.size;for(let l=8;l<t-8;l++){const n=l%2===0;e.set(l,6,n,!0),e.set(6,l,n,!0)}}function jt(e,t){const l=$t.getPositions(t);for(let n=0;n<l.length;n++){const o=l[n][0],r=l[n][1];for(let a=-2;a<=2;a++)for(let u=-2;u<=2;u++)a===-2||a===2||u===-2||u===2||a===0&&u===0?e.set(o+a,r+u,!0,!0):e.set(o+a,r+u,!1,!0)}}function Jt(e,t){const l=e.size,n=le.getEncodedBits(t);let o,r,a;for(let u=0;u<18;u++)o=Math.floor(u/3),r=u%3+l-8-3,a=(n>>u&1)===1,e.set(o,r,a,!0),e.set(r,o,a,!0)}function he(e,t,l){const n=e.size,o=zt.getEncodedBits(t,l);let r,a;for(r=0;r<15;r++)a=(o>>r&1)===1,r<6?e.set(r,8,a,!0):r<8?e.set(r+1,8,a,!0):e.set(n-15+r,8,a,!0),r<8?e.set(8,n-r-1,a,!0):r<9?e.set(8,15-r-1+1,a,!0):e.set(8,15-r-1,a,!0);e.set(n-8,8,1,!0)}function Qt(e,t){const l=e.size;let n=-1,o=l-1,r=7,a=0;for(let u=l-1;u>0;u-=2)for(u===6&&u--;;){for(let i=0;i<2;i++)if(!e.isReserved(o,u-i)){let s=!1;a<t.length&&(s=(t[a]>>>r&1)===1),e.set(o,u-i,s),r--,r===-1&&(a++,r=7)}if(o+=n,o<0||l<=o){o-=n,n=-n;break}}}function Yt(e,t,l){const n=new kt;l.forEach(function(i){n.put(i.mode.bit,4),n.put(i.getLength(),qt.getCharCountIndicator(i.mode,e)),i.write(n)});const o=de.getSymbolTotalCodewords(e),r=Ce.getTotalCodewordsCount(e,t),a=(o-r)*8;for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);const u=(a-n.getLengthInBits())/8;for(let i=0;i<u;i++)n.put(i%2?17:236,8);return Gt(n,e,t)}function Gt(e,t,l){const n=de.getSymbolTotalCodewords(t),o=Ce.getTotalCodewordsCount(t,l),r=n-o,a=Ce.getBlocksCount(t,l),u=n%a,i=a-u,s=Math.floor(n/a),d=Math.floor(r/a),C=d+1,f=s-d,c=new Ot(f);let p=0;const y=new Array(a),I=new Array(a);let h=0;const w=new Uint8Array(e.buffer);for(let B=0;B<a;B++){const T=B<i?d:C;y[B]=w.slice(p,p+T),I[B]=c.encode(y[B]),p+=T,h=Math.max(h,T)}const m=new Uint8Array(n);let g=0,b,V;for(b=0;b<h;b++)for(V=0;V<a;V++)b<y[V].length&&(m[g++]=y[V][b]);for(b=0;b<f;b++)for(V=0;V<a;V++)m[g++]=I[V][b];return m}function Wt(e,t,l,n){let o;if(Array.isArray(e))o=me.fromArray(e);else if(typeof e=="string"){let s=t;if(!s){const d=me.rawSplit(e);s=le.getBestVersionForData(d,l)}o=me.fromString(e,s||40)}else throw new Error("Invalid data");const r=le.getBestVersionForData(o,l);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=r;else if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const a=Yt(t,l,o),u=de.getSymbolSize(t),i=new Dt(u);return Ht(i,t),Kt(i),jt(i,t),he(i,l,0),t>=7&&Jt(i,t),Qt(i,a),isNaN(n)&&(n=ve.getBestMask(i,he.bind(null,i,l))),ve.applyMask(n,i),he(i,l,n),{modules:i,version:t,errorCorrectionLevel:l,maskPattern:n,segments:o}}De.create=function(t,l){if(typeof t>"u"||t==="")throw new Error("No input text");let n=ge.M,o,r;return typeof l<"u"&&(n=ge.from(l.errorCorrectionLevel,ge.M),o=le.from(l.version),r=ve.from(l.maskPattern),l.toSJISFunc&&de.setToSJISFunction(l.toSJISFunc)),Wt(t,o,n,r)};var We={},Ie={};(function(e){function t(l){if(typeof l=="number"&&(l=l.toString()),typeof l!="string")throw new Error("Color should be defined as hex string");let n=l.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+l);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(r){return[r,r]}))),n.length===6&&n.push("F","F");const o=parseInt(n.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+n.slice(0,6).join("")}}e.getOptions=function(n){n||(n={}),n.color||(n.color={});const o=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,r=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:r,scale:r?4:a,margin:o,color:{dark:t(n.color.dark||"#000000ff"),light:t(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},e.getScale=function(n,o){return o.width&&o.width>=n+o.margin*2?o.width/(n+o.margin*2):o.scale},e.getImageWidth=function(n,o){const r=e.getScale(n,o);return Math.floor((n+o.margin*2)*r)},e.qrToImageData=function(n,o,r){const a=o.modules.size,u=o.modules.data,i=e.getScale(a,r),s=Math.floor((a+r.margin*2)*i),d=r.margin*i,C=[r.color.light,r.color.dark];for(let f=0;f<s;f++)for(let c=0;c<s;c++){let p=(f*s+c)*4,y=r.color.light;if(f>=d&&c>=d&&f<s-d&&c<s-d){const I=Math.floor((f-d)/i),h=Math.floor((c-d)/i);y=C[u[I*a+h]?1:0]}n[p++]=y.r,n[p++]=y.g,n[p++]=y.b,n[p]=y.a}}})(Ie);(function(e){const t=Ie;function l(o,r,a){o.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=a,r.width=a,r.style.height=a+"px",r.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(r,a,u){let i=u,s=a;typeof i>"u"&&(!a||!a.getContext)&&(i=a,a=void 0),a||(s=n()),i=t.getOptions(i);const d=t.getImageWidth(r.modules.size,i),C=s.getContext("2d"),f=C.createImageData(d,d);return t.qrToImageData(f.data,r,i),l(C,s,d),C.putImageData(f,0,0),s},e.renderToDataURL=function(r,a,u){let i=u;typeof i>"u"&&(!a||!a.getContext)&&(i=a,a=void 0),i||(i={});const s=e.render(r,a,i),d=i.type||"image/png",C=i.rendererOpts||{};return s.toDataURL(d,C.quality)}})(We);var Xe={};const Xt=Ie;function Me(e,t){const l=e.a/255,n=t+'="'+e.hex+'"';return l<1?n+" "+t+'-opacity="'+l.toFixed(2).slice(1)+'"':n}function pe(e,t,l){let n=e+t;return typeof l<"u"&&(n+=" "+l),n}function Zt(e,t,l){let n="",o=0,r=!1,a=0;for(let u=0;u<e.length;u++){const i=Math.floor(u%t),s=Math.floor(u/t);!i&&!r&&(r=!0),e[u]?(a++,u>0&&i>0&&e[u-1]||(n+=r?pe("M",i+l,.5+s+l):pe("m",o,0),o=0,r=!1),i+1<t&&e[u+1]||(n+=pe("h",a),a=0)):o++}return n}Xe.render=function(t,l,n){const o=Xt.getOptions(l),r=t.modules.size,a=t.modules.data,u=r+o.margin*2,i=o.color.light.a?"<path "+Me(o.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",s="<path "+Me(o.color.dark,"stroke")+' d="'+Zt(a,r,o.margin)+'"/>',d='viewBox="0 0 '+u+" "+u+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+d+' shape-rendering="crispEdges">'+i+s+`</svg>
`;return typeof n=="function"&&n(null,f),f};const en=gt,be=De,Ze=We,tn=Xe;function Se(e,t,l,n,o){const r=[].slice.call(arguments,1),a=r.length,u=typeof r[a-1]=="function";if(!u&&!en())throw new Error("Callback required as last argument");if(u){if(a<2)throw new Error("Too few arguments provided");a===2?(o=l,l=t,t=n=void 0):a===3&&(t.getContext&&typeof o>"u"?(o=n,n=void 0):(o=n,n=l,l=t,t=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(l=t,t=n=void 0):a===2&&!t.getContext&&(n=l,l=t,t=void 0),new Promise(function(i,s){try{const d=be.create(l,n);i(e(d,t,n))}catch(d){s(d)}})}try{const i=be.create(l,n);o(null,e(i,t,n))}catch(i){o(i)}}W.create=be.create;W.toCanvas=Se.bind(null,Ze.render);W.toDataURL=Se.bind(null,Ze.renderToDataURL);W.toString=Se.bind(null,function(e,t,l){return tn.render(e,l)});var nn=Object.defineProperty,on=Object.defineProperties,rn=Object.getOwnPropertyDescriptors,ie=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,Pe=(e,t,l)=>t in e?nn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,ln=(e,t)=>{for(var l in t||(t={}))et.call(t,l)&&Pe(e,l,t[l]);if(ie)for(var l of ie(t))tt.call(t,l)&&Pe(e,l,t[l]);return e},an=(e,t)=>on(e,rn(t)),un=(e,t)=>{var l={};for(var n in e)et.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&ie)for(var n of ie(e))t.indexOf(n)<0&&tt.call(e,n)&&(l[n]=e[n]);return l};const sn=["low","medium","quartile","high","L","M","Q","H"],dn=[0,1,2,3,4,5,6,7],cn=["alphanumeric","numeric","kanji","byte"],fn=["image/png","image/jpeg","image/webp"],gn=40;var mn=rt({props:{version:{type:Number,validator:e=>e===Number.parseInt(String(e),10)&&e>=1&&e<=gn},errorCorrectionLevel:{type:String,validator:e=>sn.includes(e)},maskPattern:{type:Number,validator:e=>dn.includes(e)},toSJISFunc:Function,margin:Number,scale:Number,width:Number,color:{type:Object,validator:e=>["dark","light"].every(t=>["string","undefined"].includes(typeof e[t])),required:!0},type:{type:String,validator:e=>fn.includes(e),required:!0},quality:{type:Number,validator:e=>e===Number.parseFloat(String(e))&&e>=0&&e<=1,required:!1},value:{type:[String,Array],required:!0,validator(e){return typeof e=="string"?!0:e.every(t=>typeof t.data=="string"&&"mode"in t&&t.mode&&cn.includes(t.mode))}}},setup(e,{attrs:t,emit:l}){const n=L();return lt(e,()=>{const r=e,{quality:a,value:u}=r,i=un(r,["quality","value"]);W.toDataURL(u,Object.assign(i,a==null||{renderOptions:{quality:a}})).then(s=>{n.value=s,l("change",s)}).catch(s=>l("error",s))},{immediate:!0}),()=>it("img",an(ln({},t),{src:n.value}))}});const hn={class:"text-input half-box"},pn=["for"],yn=["id","type"],M={__name:"Input",props:D({label:{type:String,default:"Label"},id:{type:String,required:!0},type:{type:String,default:"text"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=$(e,"modelValue");return(l,n)=>(N(),S("div",hn,[v("label",{for:e.id},U(e.label),9,pn),Y(v("input",{id:e.id,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o),type:e.type},null,8,yn),[[at,t.value]])]))}},nt={__name:"Columns",props:{maxColumns:{validator(e){return["two","three"].includes(e)},default:"three"}},setup(e){return(t,l)=>(N(),S("div",{class:_e(["columns-container",e.maxColumns==="three"?"columns-container-3":null])},[Re(t.$slots,"default")],2))}},wn={__name:"VCardForm",emits:["input"],setup(e,{emit:t}){const l=t,n=L({firstName:"peferb",lastName:"",organisation:"",title:"Developer",mobile:"",phoneWork:"",email:"",url:"",street:"",city:"",postalNumber:"",country:"Sweden"}),o=()=>`BEGIN:VCARD
VERSION:3.0
N:${n.value.lastName};${n.value.firstName}
FN:${n.value.lastName} ${n.value.firstName}
ORG:${n.value.organisation}
TITLE:${n.value.title}
ADR:;;${n.value.street};${n.value.city};;${n.value.postalNumber};${n.value.country}
TEL;WORK;VOICE:${n.value.phoneWork}
TEL;CELL:${n.value.mobile}
EMAIL;WORK;INTERNET:${n.value.email}
URL:${n.value.url}
END:VCARD`,r=()=>l("input",o());return ut(r),(a,u)=>(N(),O(nt,null,{default:J(()=>[E(M,{id:"fn",label:"Firstname",modelValue:n.value.firstName,"onUpdate:modelValue":u[0]||(u[0]=i=>n.value.firstName=i),onInput:r},null,8,["modelValue"]),E(M,{id:"ln",label:"Lastname",modelValue:n.value.lastName,"onUpdate:modelValue":u[1]||(u[1]=i=>n.value.lastName=i),onInput:r},null,8,["modelValue"]),E(M,{id:"org",label:"Organisation",modelValue:n.value.organisation,"onUpdate:modelValue":u[2]||(u[2]=i=>n.value.organisation=i),onInput:r},null,8,["modelValue"]),E(M,{id:"title",label:"Title",modelValue:n.value.title,"onUpdate:modelValue":u[3]||(u[3]=i=>n.value.title=i),onInput:r},null,8,["modelValue"]),E(M,{id:"mobile",type:"tel",label:"Phone",modelValue:n.value.mobile,"onUpdate:modelValue":u[4]||(u[4]=i=>n.value.mobile=i),onInput:r},null,8,["modelValue"]),E(M,{id:"phone-work",type:"tel",label:"Phone work",modelValue:n.value.phoneWork,"onUpdate:modelValue":u[5]||(u[5]=i=>n.value.phoneWork=i),onInput:r},null,8,["modelValue"]),E(M,{id:"email",label:"Email",type:"email",modelValue:n.value.email,"onUpdate:modelValue":u[6]||(u[6]=i=>n.value.email=i),onInput:r},null,8,["modelValue"]),E(M,{id:"url",type:"url",label:"Url",modelValue:n.value.url,"onUpdate:modelValue":u[7]||(u[7]=i=>n.value.url=i),onInput:r},null,8,["modelValue"]),E(M,{id:"street",label:"Street",modelValue:n.value.street,"onUpdate:modelValue":u[8]||(u[8]=i=>n.value.street=i),onInput:r},null,8,["modelValue"]),E(M,{id:"city",label:"City",modelValue:n.value.city,"onUpdate:modelValue":u[9]||(u[9]=i=>n.value.city=i),onInput:r},null,8,["modelValue"]),E(M,{id:"country",label:"Country",modelValue:n.value.country,"onUpdate:modelValue":u[10]||(u[10]=i=>n.value.country=i),onInput:r},null,8,["modelValue"])]),_:1}))}},vn={class:"color-selector-container half-box"},Cn=["for"],bn={class:"row"},En=["id"],Le={__name:"ColorSelector",props:D({label:{type:String,default:"Label"},id:{type:String,required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=$(e,"modelValue");return(l,n)=>(N(),S("div",vn,[v("label",{for:e.id},U(e.label),9,Cn),v("div",bn,[Y(v("input",{id:e.id,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o),type:"color",style:{width:"50%"}},null,8,En),[[ye,t.value]]),Y(v("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=o=>t.value=o),style:{width:"50%"}},null,512),[[ye,t.value]])])]))}},Vn={class:"base-container half-box"},Nn=["for"],Bn=["id"],In=["value"],ot={__name:"BaseSelector",props:D({label:{type:String,default:"label"},items:{type:Array,default:[]},valueExtractor:{type:Function,default:e=>e},descriptionExtractor:{type:Function,default:e=>e},id:{type:String,required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=$(e,"modelValue");return(l,n)=>(N(),S("div",Vn,[v("label",{for:e.id},U(e.label),9,Nn),Y(v("select",{id:e.id,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o)},[(N(!0),S(Ue,null,Fe(e.items,o=>(N(),S("option",{value:e.valueExtractor(o)},U(e.descriptionExtractor(o)),9,In))),256))],8,Bn),[[st,t.value]])]))}},Sn={__name:"ErrorCorrectionLevelSelector",props:D({id:{type:String,required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=$(e,"modelValue"),l=Ee("errorCorrectionLevel"),n=L(Object.values(l));return(o,r)=>(N(),O(ot,{id:e.id,label:"Correction level",modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=a=>t.value=a),items:n.value,"value-extractor":a=>a.short,"description-extractor":a=>a.label},null,8,["id","modelValue","items","value-extractor","description-extractor"]))}},An={__name:"FileTypeSelector",props:D({id:{type:String,required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=$(e,"modelValue"),l=Ee("filetype");return(n,o)=>(N(),O(ot,{id:e.id,label:"Filetype",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),items:ke(l)},null,8,["id","modelValue","items"]))}},Tn={class:"number-range-container half-box"},Mn=["for"],Pn={class:"row"},Ln=["id","value","min","max","step"],Rn=["value","step"],ne={__name:"NumberRange",props:{modelValue:{},label:{type:String,default:"Label"},min:{type:Number,default:0},max:{type:Number,default:1e3},step:{default:void 0},id:{type:String,required:!0},type:{validator(e){return["float","int"].includes(e)},default:"int"}},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,n=t,o=r=>l.type==="int"?Number.parseInt(r):Number.parseFloat(Number.parseFloat(r).toFixed(2));return(r,a)=>(N(),S("div",Tn,[v("label",{for:e.id},U(e.label),9,Mn),v("div",Pn,[v("input",{id:e.id,value:l.modelValue,type:"range",min:e.min,max:e.max,step:e.step||"any",onInput:a[0]||(a[0]=u=>n("update:modelValue",o(u.target.value))),style:{width:"50%"}},null,40,Ln),v("input",{type:"number",value:l.modelValue,step:e.step||"any",onInput:a[1]||(a[1]=u=>n("update:modelValue",o(u.target.value))),style:{width:"50%"}},null,40,Rn)])]))}},_n={__name:"QrSettingsForm",props:{modelValue:{option:{color:{light:"#FFFFFF",dark:"#000000"},width:250,maskPattern:1,version:1,quality:1,errorCorrectionLevel:"H",filetype:"image/png"}},modelModifiers:{}},emits:["update:modelValue"],setup(e){const t=$(e,"modelValue");return(l,n)=>(N(),O(nt,{"max-columns":"two"},{default:J(()=>[E(Le,{id:"input-color-1",label:"Color 1",modelValue:t.value.color.light,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value.color.light=o)},null,8,["modelValue"]),E(Le,{id:"input-color-2",label:"Color 2",modelValue:t.value.color.dark,"onUpdate:modelValue":n[1]||(n[1]=o=>t.value.color.dark=o)},null,8,["modelValue"]),E(ne,{id:"input-width",label:"Width",modelValue:t.value.width,"onUpdate:modelValue":n[2]||(n[2]=o=>t.value.width=o)},null,8,["modelValue"]),E(ne,{id:"input-mask",label:"Mask",modelValue:t.value.maskPattern,"onUpdate:modelValue":n[3]||(n[3]=o=>t.value.maskPattern=o),min:1,max:7},null,8,["modelValue"]),E(ne,{id:"input-version",label:"Version",modelValue:t.value.version,"onUpdate:modelValue":n[4]||(n[4]=o=>t.value.version=o),min:1,max:40},null,8,["modelValue"]),E(ne,{id:"input-quality",label:"Quality",type:"float",modelValue:t.value.quality,"onUpdate:modelValue":n[5]||(n[5]=o=>t.value.quality=o),min:0,max:1},null,8,["modelValue"]),E(Sn,{id:"input-correction-level",modelValue:t.value.errorCorrectionLevel,"onUpdate:modelValue":n[6]||(n[6]=o=>t.value.errorCorrectionLevel=o)},null,8,["modelValue"]),E(An,{id:"file-type-selector",label:"Filetype",modelValue:t.value.filetype,"onUpdate:modelValue":n[7]||(n[7]=o=>t.value.filetype=o)},null,8,["modelValue"])]),_:1}))}},Un={class:"tabs-container"},Fn={class:"tabs"},kn=["onClick"],Dn={class:"slot-wrapper"},$n={__name:"Tabs",props:D({tabs:{type:Array,default:[{label:"label",value:"tab"}]}},{modelValue:{},modelModifiers:{}}),emits:D(["update:modelValue"],["update:modelValue"]),setup(e,{emit:t}){const l=o=>n("update:modelValue",o);$(e,"modelValue");const n=t;return(o,r)=>(N(),S("div",Un,[v("div",Fn,[(N(!0),S(Ue,null,Fe(e.tabs,a=>(N(),S("div",{onClick:u=>l(a.value),class:_e([a.value===e.modelValue?"active":null,"tab"])},U(a.label),11,kn))),256))]),v("div",Dn,[Re(o.$slots,"default")])]))}},xn={class:"text-field half-box"},On=["for"],zn=["id","rows"],qn={__name:"TextField",props:D({label:{type:String,default:"Label"},id:{type:String,required:!0},rows:{type:Number,default:1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=$(e,"modelValue");return(l,n)=>(N(),S("div",xn,[v("label",{for:e.id},U(e.label),9,On),Y(v("textarea",{id:e.id,"onUpdate:modelValue":n[0]||(n[0]=o=>t.value=o),rows:e.rows,style:{resize:"block"}},null,8,zn),[[ye,t.value]])]))}},Hn={class:"page qr-automation"},Kn=v("p",null,[oe(" Using rx-ts vue-qrcode: "),v("a",{href:"https://github.com/rx-ts/vue/tree/master/packages/vue-qrcode"},"Github"),oe(", "),v("a",{href:"https://www.npmjs.com/package/vue-qrcode"},"NPM"),oe(". ")],-1),jn=v("p",null," Create a digital contact card. ",-1),Jn=v("h2",null,"Content",-1),Qn=v("h2",null,"Visual settings",-1),Yn=v("h2",null,"QR Code",-1),Gn=v("h2",null,"See data",-1),Wn=v("hr",{style:{margin:"12px 0"}},null,-1),Xn={key:0,class:"data-url-output"},Zn=v("hr",{style:{margin:"12px 0"}},null,-1),eo={key:1,class:"data-url-output"},to=v("hr",{style:{margin:"12px 0"}},null,-1),oo={__name:"QRView",setup(e){const t=Ee("errorCorrectionLevel"),l=L("https://peferb.github.io/fun-utils/#/qr-smart"),n=L(""),o=L(!1),r=L("raw"),a=L([{label:"Raw",value:"raw"},{label:"VCard",value:"vcard"}]),u=dt(()=>r.value==="raw"?l.value:n.value),i=L({maskPattern:5,version:10,width:250,color:{light:"#FFFFFF",dark:"#000000"},errorCorrectionLevel:t.LOW.short,filetype:"image/png",quality:1}),s=L({show:!1,data:null}),d=C=>n.value=C;return(C,f)=>(N(),S("div",Hn,[E(ct,null,{icon:J(()=>[E(ft)]),default:J(()=>[oe(" Smart QR codes ")]),_:1}),Kn,jn,Jn,E($n,{modelValue:r.value,"onUpdate:modelValue":f[1]||(f[1]=c=>r.value=c),tabs:a.value},{default:J(()=>[r.value==="vcard"?(N(),O(wn,{key:0,onInput:d})):Z("",!0),r.value==="raw"?(N(),O(qn,{key:1,modelValue:l.value,"onUpdate:modelValue":f[0]||(f[0]=c=>l.value=c),id:"raw-content-input",rows:12,label:"Content"},null,8,["modelValue"])):Z("",!0)]),_:1},8,["modelValue","tabs"]),Qn,E(_n,{modelValue:i.value,"onUpdate:modelValue":f[2]||(f[2]=c=>i.value=c)},null,8,["modelValue"]),Yn,E(ke(mn),{value:u.value,"mask-pattern":i.value.maskPattern,errorCorrectionLevel:i.value.errorCorrectionLevel,version:i.value.version,width:i.value.width,color:i.value.color,margin:0,type:i.value.filetype,quality:i.value.quality,onChange:f[3]||(f[3]=c=>s.value.data=c),style:{"margin-top":"24px"}},null,8,["value","mask-pattern","errorCorrectionLevel","version","width","color","type","quality"]),Gn,Wn,v("button",{onClick:f[4]||(f[4]=c=>o.value=!o.value),style:{"margin-right":"8px"}}," Show QR content "),o.value?(N(),S("div",Xn,U(u.value),1)):Z("",!0),Zn,v("button",{onClick:f[5]||(f[5]=c=>s.value.show=!s.value.show),style:{"margin-right":"8px"}}," Show QR data "),s.value.show?(N(),S("div",eo,U(s.value.data),1)):Z("",!0),to]))}};export{oo as default};
