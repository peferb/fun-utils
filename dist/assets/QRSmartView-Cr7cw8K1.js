import{m as w,i as C,o as m,c as v,b as r,t as c,d as $,j as N,k,n as I,r as V,l as _,p as x,w as y,a as o,P as U,u as R,g,h as f,q as E}from"./index-BVZZ7y0F.js";import{a as b,_ as L,b as T,i as S}from"./FileTypeSelector-3MQKQ3d6.js";const q={class:"text-input"},F=["for"],D=["id","type"],s={__name:"Input",props:w({label:{type:String,default:"Label"},id:{type:String,required:!0},type:{type:String,default:"text"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(i){const t=C(i,"modelValue");return(d,e)=>(m(),v("div",q,[r("label",{for:i.id},c(i.label),9,F),$(r("input",{id:i.id,"onUpdate:modelValue":e[0]||(e[0]=p=>t.value=p),type:i.type},null,8,D),[[N,t.value]])]))}},h={__name:"Columns",props:{maxColumns:{validator(i){return["two","three"].includes(i)},default:"three"}},setup(i){return(t,d)=>(m(),v("div",{class:I(["columns-container",i.maxColumns==="three"?"columns-container-3":null])},[k(t.$slots,"default")],2))}},M={__name:"VCardForm",emits:["input"],setup(i,{emit:t}){const d=t,e=V({firstName:"peferb",lastName:"",organisation:"",title:"Developer",mobile:"",phoneWork:"",email:"",url:"",street:"",city:"",postalNumber:"",country:"Sweden"}),p=()=>`BEGIN:VCARD
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
END:VCARD`,u=()=>d("input",p());return _(u),(n,l)=>(m(),x(h,null,{default:y(()=>[o(s,{id:"fn",label:"Firstname",modelValue:e.value.firstName,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value.firstName=a),onInput:u},null,8,["modelValue"]),o(s,{id:"ln",label:"Lastname",modelValue:e.value.lastName,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value.lastName=a),onInput:u},null,8,["modelValue"]),o(s,{id:"org",label:"Organisation",modelValue:e.value.organisation,"onUpdate:modelValue":l[2]||(l[2]=a=>e.value.organisation=a),onInput:u},null,8,["modelValue"]),o(s,{id:"title",label:"Title",modelValue:e.value.title,"onUpdate:modelValue":l[3]||(l[3]=a=>e.value.title=a),onInput:u},null,8,["modelValue"]),o(s,{id:"mobile",type:"tel",label:"Phone",modelValue:e.value.mobile,"onUpdate:modelValue":l[4]||(l[4]=a=>e.value.mobile=a),onInput:u},null,8,["modelValue"]),o(s,{id:"phone-work",type:"tel",label:"Phone work",modelValue:e.value.phoneWork,"onUpdate:modelValue":l[5]||(l[5]=a=>e.value.phoneWork=a),onInput:u},null,8,["modelValue"]),o(s,{id:"email",label:"Email",type:"email",modelValue:e.value.email,"onUpdate:modelValue":l[6]||(l[6]=a=>e.value.email=a),onInput:u},null,8,["modelValue"]),o(s,{id:"url",type:"url",label:"Url",modelValue:e.value.url,"onUpdate:modelValue":l[7]||(l[7]=a=>e.value.url=a),onInput:u},null,8,["modelValue"]),o(s,{id:"street",label:"Street",modelValue:e.value.street,"onUpdate:modelValue":l[8]||(l[8]=a=>e.value.street=a),onInput:u},null,8,["modelValue"]),o(s,{id:"city",label:"City",modelValue:e.value.city,"onUpdate:modelValue":l[9]||(l[9]=a=>e.value.city=a),onInput:u},null,8,["modelValue"]),o(s,{id:"country",label:"Country",modelValue:e.value.country,"onUpdate:modelValue":l[10]||(l[10]=a=>e.value.country=a),onInput:u},null,8,["modelValue"])]),_:1}))}},P={class:"qr-automation"},W=r("p",null,[f(" Using rx-ts vue-qrcode: "),r("a",{href:"https://github.com/rx-ts/vue/tree/master/packages/vue-qrcode"},"Github"),f(", "),r("a",{href:"https://www.npmjs.com/package/vue-qrcode"},"NPM"),f(". ")],-1),O=r("p",null," Create a digital contact card. ",-1),Q=r("h2",null,"VCard settings",-1),B={class:"content-tab"},A=r("h2",null,"Visual settings",-1),G={class:"options-form"},j=r("hr",{style:{margin:"12px 0"}},null,-1),K={key:0,class:"data-url-output"},z=r("hr",{style:{margin:"12px 0"}},null,-1),H={key:1,class:"data-url-output"},J=r("hr",{style:{margin:"12px 0"}},null,-1),Z={__name:"QRSmartView",setup(i){const t=V({value:"",maskPattern:5,version:10,width:250,color:{light:"#FFFFFF",dark:"#000000"},errorCorrectionLevel:"low",fileType:"image/png",quality:1}),d=V({show:!1,data:null}),e=V(!1),p=u=>t.value.value=u;return(u,n)=>(m(),v("div",P,[o(U,null,{icon:y(()=>[o(E)]),default:y(()=>[f(" Smart QR codes ")]),_:1}),W,O,Q,r("div",B,[o(M,{onInput:p})]),A,r("div",G,[o(h,{"max-columns":"two"},{default:y(()=>[o(b,{id:"input-color-1",label:"Color 1",modelValue:t.value.color.light,"onUpdate:modelValue":n[0]||(n[0]=l=>t.value.color.light=l)},null,8,["modelValue"]),o(b,{id:"input-color-2",label:"Color 2",modelValue:t.value.color.dark,"onUpdate:modelValue":n[1]||(n[1]=l=>t.value.color.dark=l)},null,8,["modelValue"]),o(L,{id:"input-width",label:"Width",modelValue:t.value.width,"onUpdate:modelValue":n[2]||(n[2]=l=>t.value.width=l)},null,8,["modelValue"]),o(T,{id:"file-type-selector",label:"Filetype",modelValue:t.value.fileType,"onUpdate:modelValue":n[3]||(n[3]=l=>t.value.fileType=l)},null,8,["modelValue"])]),_:1})]),o(R(S),{value:t.value.value,"mask-pattern":t.value.maskPattern,errorCorrectionLevel:t.value.errorCorrectionLevel,version:t.value.version,width:t.value.width,color:t.value.color,margin:0,type:t.value.fileType,quality:t.value.quality,onChange:n[4]||(n[4]=l=>d.value.data=l),style:{"margin-top":"12px"}},null,8,["value","mask-pattern","errorCorrectionLevel","version","width","color","type","quality"]),j,r("button",{onClick:n[5]||(n[5]=l=>d.value.show=!d.value.show),style:{"margin-right":"8px"}}," Show QR data "),d.value.show?(m(),v("div",K,c(d.value.data),1)):g("",!0),z,r("button",{onClick:n[6]||(n[6]=l=>e.value=!e.value),style:{"margin-right":"8px"}}," Show QR content "),e.value?(m(),v("pre",H,c(t.value.value),1)):g("",!0),J]))}};export{Z as default};