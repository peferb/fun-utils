import{m as $,f as k,o as d,c,b as o,t as h,g as N,v as U,r as V,h as x,i as w,w as g,a as n,F as L,j as R,k as E,n as S,l as q,p as F,P as T,u as D,d as f,e as C,q as M}from"./index-CyLGHn5M.js";import{b as O,a as P,_ as Q,i as W}from"./QrSettingsForm-znPp1TSY.js";const A={class:"text-input half-box"},B=["for"],j=["id","type"],i={__name:"Input",props:$({label:{type:String,default:"Label"},id:{type:String,required:!0},type:{type:String,default:"text"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const v=k(s,"modelValue");return(p,e)=>(d(),c("div",A,[o("label",{for:s.id},h(s.label),9,B),N(o("input",{id:s.id,"onUpdate:modelValue":e[0]||(e[0]=r=>v.value=r),type:s.type},null,8,j),[[U,v.value]])]))}},G={__name:"VCardForm",emits:["input"],setup(s,{emit:v}){const p=v,e=V({firstName:"peferb",lastName:"",organisation:"",title:"Developer",mobile:"",phoneWork:"",email:"",url:"",street:"",city:"",postalNumber:"",country:"Sweden"}),r=()=>`BEGIN:VCARD
VERSION:3.0
N:${e.value.lastName};${e.value.firstName}
FN:${e.value.lastName} ${e.value.firstName}
ORG:${e.value.organisation}
TITLE:${e.value.title}
ADR:;;${e.value.street};${e.value.city};;${e.value.postalNumber};${e.value.country}
TEL;WORK;VOICE:${e.value.phoneWork}
TEL;CELL:${e.value.mobile}
EMAIL;WORK;INTERNET:${e.value.email}
URL:${e.value.url}
END:VCARD`,a=()=>p("input",r());return x(a),(b,t)=>(d(),w(O,null,{default:g(()=>[n(i,{id:"fn",label:"Firstname",modelValue:e.value.firstName,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value.firstName=l),onInput:a},null,8,["modelValue"]),n(i,{id:"ln",label:"Lastname",modelValue:e.value.lastName,"onUpdate:modelValue":t[1]||(t[1]=l=>e.value.lastName=l),onInput:a},null,8,["modelValue"]),n(i,{id:"org",label:"Organisation",modelValue:e.value.organisation,"onUpdate:modelValue":t[2]||(t[2]=l=>e.value.organisation=l),onInput:a},null,8,["modelValue"]),n(i,{id:"title",label:"Title",modelValue:e.value.title,"onUpdate:modelValue":t[3]||(t[3]=l=>e.value.title=l),onInput:a},null,8,["modelValue"]),n(i,{id:"mobile",type:"tel",label:"Phone",modelValue:e.value.mobile,"onUpdate:modelValue":t[4]||(t[4]=l=>e.value.mobile=l),onInput:a},null,8,["modelValue"]),n(i,{id:"phone-work",type:"tel",label:"Phone work",modelValue:e.value.phoneWork,"onUpdate:modelValue":t[5]||(t[5]=l=>e.value.phoneWork=l),onInput:a},null,8,["modelValue"]),n(i,{id:"email",label:"Email",type:"email",modelValue:e.value.email,"onUpdate:modelValue":t[6]||(t[6]=l=>e.value.email=l),onInput:a},null,8,["modelValue"]),n(i,{id:"url",type:"url",label:"Url",modelValue:e.value.url,"onUpdate:modelValue":t[7]||(t[7]=l=>e.value.url=l),onInput:a},null,8,["modelValue"]),n(i,{id:"street",label:"Street",modelValue:e.value.street,"onUpdate:modelValue":t[8]||(t[8]=l=>e.value.street=l),onInput:a},null,8,["modelValue"]),n(i,{id:"city",label:"City",modelValue:e.value.city,"onUpdate:modelValue":t[9]||(t[9]=l=>e.value.city=l),onInput:a},null,8,["modelValue"]),n(i,{id:"country",label:"Country",modelValue:e.value.country,"onUpdate:modelValue":t[10]||(t[10]=l=>e.value.country=l),onInput:a},null,8,["modelValue"])]),_:1}))}},K={class:"tabs-container"},z={class:"tabs"},H=["onClick"],J={class:"slot-wrapper"},X={__name:"Tabs",props:$({tabs:{type:Array,default:[{label:"label",value:"tab"}]}},{modelValue:{},modelModifiers:{}}),emits:$(["update:modelValue"],["update:modelValue"]),setup(s,{emit:v}){const p=r=>e("update:modelValue",r);k(s,"modelValue");const e=v;return(r,a)=>(d(),c("div",K,[o("div",z,[(d(!0),c(L,null,R(s.tabs,b=>(d(),c("div",{onClick:t=>p(b.value),class:S([b.value===s.modelValue?"active":null,"tab"])},h(b.label),11,H))),256))]),o("div",J,[E(r.$slots,"default")])]))}},Y={class:"page qr-automation"},Z=o("p",null,[C(" Using rx-ts vue-qrcode: "),o("a",{href:"https://github.com/rx-ts/vue/tree/master/packages/vue-qrcode"},"Github"),C(", "),o("a",{href:"https://www.npmjs.com/package/vue-qrcode"},"NPM"),C(". ")],-1),ee=o("p",null," Create a digital contact card. ",-1),le=o("h2",null,"Content",-1),te=o("h2",null,"Visual settings",-1),ae=o("h2",null,"QR Code",-1),oe=o("h2",null,"See data",-1),ne=o("hr",{style:{margin:"12px 0"}},null,-1),ue={key:0,class:"data-url-output"},se=o("hr",{style:{margin:"12px 0"}},null,-1),re={key:1,class:"data-url-output"},ie=o("hr",{style:{margin:"12px 0"}},null,-1),ve={__name:"QRSmartView",setup(s){const v=q("errorCorrectionLevel"),p=V("https://peferb.github.io/fun-utils/#/qr-smart"),e=V(""),r=V(!1),a=V("raw"),b=V([{label:"Raw",value:"raw"},{label:"VCard",value:"vcard"}]),t=F(()=>a.value==="raw"?p.value:e.value),l=V({maskPattern:5,version:10,width:250,color:{light:"#FFFFFF",dark:"#000000"},errorCorrectionLevel:v.LOW.short,filetype:"image/png",quality:1}),y=V({show:!1,data:null}),I=_=>e.value=_;return(_,u)=>(d(),c("div",Y,[n(T,null,{icon:g(()=>[n(M)]),default:g(()=>[C(" Smart QR codes ")]),_:1}),Z,ee,le,n(X,{modelValue:a.value,"onUpdate:modelValue":u[1]||(u[1]=m=>a.value=m),tabs:b.value},{default:g(()=>[a.value==="vcard"?(d(),w(G,{key:0,onInput:I})):f("",!0),a.value==="raw"?(d(),w(Q,{key:1,modelValue:p.value,"onUpdate:modelValue":u[0]||(u[0]=m=>p.value=m),id:"raw-content-input",rows:12,label:"Content"},null,8,["modelValue"])):f("",!0)]),_:1},8,["modelValue","tabs"]),te,n(P,{modelValue:l.value,"onUpdate:modelValue":u[2]||(u[2]=m=>l.value=m)},null,8,["modelValue"]),ae,n(D(W),{value:t.value,"mask-pattern":l.value.maskPattern,errorCorrectionLevel:l.value.errorCorrectionLevel,version:l.value.version,width:l.value.width,color:l.value.color,margin:0,type:l.value.filetype,quality:l.value.quality,onChange:u[3]||(u[3]=m=>y.value.data=m),style:{"margin-top":"24px"}},null,8,["value","mask-pattern","errorCorrectionLevel","version","width","color","type","quality"]),oe,ne,o("button",{onClick:u[4]||(u[4]=m=>r.value=!r.value),style:{"margin-right":"8px"}}," Show QR content "),r.value?(d(),c("div",ue,h(t.value),1)):f("",!0),se,o("button",{onClick:u[5]||(u[5]=m=>y.value.show=!y.value.show),style:{"margin-right":"8px"}}," Show QR data "),y.value.show?(d(),c("div",re,h(y.value.data),1)):f("",!0),ie]))}};export{ve as default};
