import{r as i,M as fe,j as e,b as $,g as R,i as Ne,k as Te,m as G,u as B,n as we,o as Be,f as me,p as ve,q as Ae,t as Ce,A as ue,v as ye,w as We,x as Se,y as De,N as le,z as U,O as Me,B as Pe,C as ke,D as Le}from"./index-b03df641.js";import{p as z}from"./parseDate-629c4fe8.js";import{L as Ie}from"./Logo-1e8b69c4.js";import{$ as Re,c as _e,a as xe,d as Y,u as he,o as pe,s as _,C as I,L as $e}from"./Loader-6dbeb0f7.js";import{s as Fe,a as Ve,b as He}from"./selectors-798b382f.js";const X=()=>i.useContext(fe),Q=({width:s,height:a})=>e.jsx(Re,{visible:!0,height:a,width:s,ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#9be1a0","#f0eff4","#ffffffea","#87d28d","#323f47"]}),Ee="_WaterForm_1jleh_1",qe="_FormHeader_1jleh_13",Oe="_AmountOfWater_1jleh_25",Ue="_TapAddWaterWrapper_1jleh_36",Ge="_TapAddWater_1jleh_36",ze="_TapAddWaterValue_1jleh_88",Je="_RecordingTimeLabel_1jleh_104",Ye="_RecordingTime_1jleh_104",Xe="_WaterValueLabel_1jleh_136",Qe="_WaterValue_1jleh_136",Ze="_SaveBtn_1jleh_177",x={WaterForm:Ee,FormHeader:qe,AmountOfWater:Oe,TapAddWaterWrapper:Ue,TapAddWater:Ge,TapAddWaterValue:ze,RecordingTimeLabel:Je,RecordingTime:Ye,WaterValueLabel:Xe,WaterValue:Qe,SaveBtn:Ze,Error:"_Error_1jleh_213"},Ke=({operationType:s="add",editTime:a,waterPortion:t,waterID:n,handleClose:c})=>{const[l,m]=i.useState(t),u=$(),[v,j]=i.useState(!1),b=new Date(a),d=b.getFullYear(),P=String(b.getMonth()+1).padStart(2,"0"),y=String(b.getDate()).padStart(2,"0"),M=s==="add"?new Date:b,F=String(M.getHours()).padStart(2,"0"),W=String(M.getMinutes()).padStart(2,"0"),[T,V]=i.useState(F),[o,A]=i.useState(W),g=_e().shape({recordingTime:xe().required("recordTimeRequired").matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,"invalidTimeFormat"),waterValue:Y().required("waterValueRequired").min(50,"waterValueGreater").max(5e3,"waterValueLess")}),{control:H,handleSubmit:Z,setValue:K,formState:{errors:N}}=he({resolver:pe(g),defaultValues:{recordingTime:`${T}:${o}`,waterValue:l.toString()}}),C=f=>{const J=new Date(`${d}-${P}-${y}T${T}:${o}:00`).getTime().toString(),te={amount:f.waterValue,date:J},be={amount:f.waterValue,date:J};switch(j(!0),s){case"add":u(Te(te)).then(({error:ae})=>{ae?j(!1):(j(!1),c())});break;case"edit":u(Ne({id:n,formData:be})).then(({error:ae})=>{ae?j(!1):(j(!1),c())});break;default:j(!1);break}},ee=f=>{switch(f){case"add":return e.jsx("p",{className:x.FormHeader,children:"Оберіть значення:"});case"edit":return e.jsx("p",{className:x.FormHeader,children:"Виправити дані:"});default:return e.jsx("p",{className:x.FormHeader,children:"Оберіть значення:"})}},se=f=>{m(f),K("waterValue",f.toString())},ge=l===50,je=l===5e3;return e.jsxs("form",{className:x.WaterForm,onSubmit:Z(C),children:[ee(s),e.jsx("p",{className:x.AmountOfWater,children:"Кількість води:"}),e.jsxs("div",{className:x.TapAddWaterWrapper,children:[e.jsx("button",{type:"button",className:x.TapAddWater,onClick:()=>se(Math.max(l-50,0)),disabled:ge,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:_+"#icon-minus"})})}),e.jsxs("p",{className:x.TapAddWaterValue,children:[l," ","ml"]}),e.jsx("button",{type:"button",className:x.TapAddWater,onClick:()=>se(l+50),disabled:je,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:_+"#icon-plus"})})})]}),e.jsxs("label",{className:x.RecordingTimeLabel,children:["Час запису:",e.jsx(I,{name:"recordingTime",control:H,render:({field:f})=>e.jsx("input",{...f,type:"text",className:R(x.RecordingTime),placeholder:"HH:MM",onChange:E=>{const[J,te]=E.target.value.split(":");V(J),A(te),f.onChange(E)}})}),N.recordingTime&&e.jsx("p",{className:x.Error,children:N.recordingTime.message})]}),e.jsxs("label",{className:x.WaterValueLabel,children:["Введіть обєм води:",e.jsx(I,{name:"waterValue",control:H,render:({field:f})=>e.jsx("input",{...f,type:"number",value:l||"",onChange:E=>se(Number(E.target.value)),className:x.WaterValue})}),N.waterValue&&e.jsx("p",{className:x.Error,children:N.waterValue.message})]}),e.jsx("button",{type:"submit",className:x.SaveBtn,disabled:v,children:v?e.jsx(Q,{height:44,width:44}):"Зберегти"})]})},es={DURATION:15},ss="_WaterModal_198kh_1",ts="_WaterModalCloseBtn_198kh_22",ie={WaterModal:ss,WaterModalCloseBtn:ts},ce=({operationType:s,onClose:a,water:t={},timestampFromUrl:n=""})=>{const c=()=>{const d=setTimeout(()=>{a(),clearTimeout(d)},es.DURATION)},l=d=>{switch(d){case"add":return"Додавання води";case"edit":return"Редагувати кількість води";default:return"Додавання води"}},m=Number(n),u=Number(t.date),v=d=>{switch(d){case"add":return m;case"edit":return u}},j=d=>{switch(d){case"add":return 50;case"edit":return t.amount;default:return 50}},b=d=>{switch(d){case"add":return null;case"edit":return t.id;default:return null}};return e.jsxs("div",{className:ie.WaterModal,children:[e.jsx("h1",{children:l(s)}),e.jsx(Ke,{operationType:s,editTime:v(s),waterPortion:j(s),waterID:b(s),handleClose:c}),e.jsx("button",{type:"button",onClick:c,"aria-label":"closeWaterModal",className:ie.WaterModalCloseBtn,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${_}#icon-x`})})})]})},as="_btnAdd_1xtnj_1",ns="_btnText_1xtnj_14",rs="_plus_1xtnj_15",ne={btnAdd:as,btnText:ns,plus:rs},os=()=>{const s=X(),{date:a}=G(),t=z(a),n=i.useCallback(()=>{s()},[s]),c=i.useCallback(()=>{s(e.jsx(ce,{onClose:n,operationType:"add",timestampFromUrl:t}))},[s,n,t]);return e.jsxs("button",{type:"button",className:ne.btnAdd,onClick:c,children:[e.jsx("svg",{className:ne.plus,children:e.jsx("use",{xlinkHref:_+"#icon-plus"})}),e.jsx("h2",{className:ne.btnText,children:"Додати воду"})]})},cs="_progressBarContainer_1c2ym_1",ls="_progressBarTitle_1c2ym_14",is="_progressBar_1c2ym_1",ds="_progressBarFill_1c2ym_29",ms="_belowAim_1c2ym_38",us="_aboveAim_1c2ym_44",_s="_belowAimRate_1c2ym_50",xs="_aboveAimRate_1c2ym_54",hs="_ball_1c2ym_58",ps="_percentNumber_1c2ym_69",gs="_percentContainer_1c2ym_79",js="_percent_1c2ym_69",h={progressBarContainer:cs,progressBarTitle:ls,progressBar:is,progressBarFill:ds,belowAim:ms,aboveAim:us,belowAimRate:_s,aboveAimRate:xs,ball:hs,percentNumber:ps,percentContainer:gs,percent:js},bs=()=>{const s=B(l=>l.water.todayAmount.value),a=B(we),t=Math.round(s/(a*1e3)*100),n=t>=100?100:t,c=s<a*1e3;return e.jsxs("div",{className:h.progressBarContainer,children:[e.jsx("h2",{className:h.progressBarTitle,children:"Сьогодні"}),e.jsx("div",{className:h.progressBar,children:e.jsxs("div",{className:R(h.progressBarFill,{[h.belowAim]:c,[h.aboveAim]:!c}),style:{width:`${n}%`},children:[e.jsx("p",{className:R(h.percentNumber,{[h.belowAimRate]:c,[h.aboveAimRate]:!c}),children:c?`${n.toFixed(0)}%`:"норма"}),e.jsx("div",{className:R(h.ball,{[h.belowAim]:c,[h.aboveAim]:!c})})]})}),e.jsxs("div",{className:h.percentContainer,children:[e.jsx("p",{className:h.percent,children:"0%"}),e.jsx("p",{className:h.percent,children:"50%"}),e.jsx("p",{className:h.percent,children:"100%"})]})]})},fs="_userSettingForm_f82ca_1",Ns="_boldText_f82ca_20",Ts="_genderContainer_f82ca_26",ws="_radioContainer_f82ca_31",Bs="_radioInput_f82ca_41",vs="_userPreferences_f82ca_66",As="_formNameEmail_f82ca_72",Cs="_formWeightTime_f82ca_77",ys="_formula_f82ca_90",Ws="_inputBox_f82ca_94",Ss="_formulaDescription_f82ca_118",Ds="_formulaExpression_f82ca_132",Ms="_ordinaryText_f82ca_137",Ps="_temporarySymbol_f82ca_146",ks="_formulaDescriptionText_f82ca_156",Ls="_submitBtn_f82ca_160",Is="_loaderWrapper_f82ca_184",Rs="_boldTextBtn_f82ca_191",$s="_consumeWater_f82ca_198",Fs="_userNorma_f82ca_205",Vs="_langButton_f82ca_213",Hs="_errorMessage_f82ca_223",Es="_userAvatar_f82ca_238",qs="_loader_f82ca_184",Os="_icon_f82ca_253",r={userSettingForm:fs,boldText:Ns,genderContainer:Ts,radioContainer:ws,radioInput:Bs,userPreferences:vs,formNameEmail:As,formWeightTime:Cs,formula:ys,inputBox:Ws,formulaDescription:Ss,formulaExpression:Ds,ordinaryText:Ms,temporarySymbol:Ps,formulaDescriptionText:ks,submitBtn:Ls,loaderWrapper:Is,boldTextBtn:Rs,consumeWater:$s,userNorma:Fs,langButton:Vs,errorMessage:Hs,userAvatar:Es,loader:qs,icon:Os},Us=({handleClose:s})=>{const a=$(),t=B(Be),[n,c]=i.useState(0),l=B(me),m=_e({name:xe().min(2,"Назва має містити не менше 2 символів").max(60,"Максимальна кількість символів імені 60").required("Імя обовязково"),weight:Y().min(0).max(300,"Вага значення менше 300").typeError("Має бути числом"),dailyActiveTime:Y().min(0).max(12,"Час активного спорту").typeError("Має бути числом"),dailyWaterConsumption:Y().min(0).max(8,"Добове споживання води максимум 8 л").typeError("Має бути числом")}),{control:u,register:v,handleSubmit:j,watch:b,formState:{errors:d}}=he({resolver:pe(m),defaultValues:{email:t.email,gender:t.gender,name:t.name,weight:t.weight,dailyActiveTime:t.dailyActiveTime,dailyWaterConsumption:t.dailyWaterConsumption},mode:"onChange"}),P=b("weight"),y=b("gender"),M=b("dailyActiveTime");i.useEffect(()=>{let o;const A=parseInt(P||0),g=parseInt(M||0);y==="woman"?o=A*.03+g*.4:o=A*.04+g*.6,c(Math.min(parseFloat(o),8).toFixed(2))},[M,y,P]);const F=o=>{const{photo:A,...g}=t;/\s$/.test(o.name)&&(o.name=o.name.trim());const Z=Object.keys(g).sort().reduce((N,C)=>(N[C]=g[C],N),{}),K=Object.keys(o).sort().reduce((N,C)=>(N[C]=o[C],N),{});if(JSON.stringify(Z)!==JSON.stringify(K)){const{email:N,...C}=o;a(ve(C)).then(({error:ee})=>{ee||s()})}else s()},W=o=>A=>{let g=A.target.value;(g===""||/^(\d+(\.\d{0,3})?|\.\d{1,3})$/.test(g))&&o.onChange(g)},T=o=>()=>{o.value===0&&o.onChange("")},V=o=>()=>{o.value===""?o.onChange(0):o.value.startsWith(".")&&o.onChange("0"+o.value)};return e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:j(F),className:r.userSettingForm,children:[e.jsx("div",{className:r.genderContainer,children:e.jsxs("label",{className:r.genderIdentity,children:[e.jsx("span",{className:r.boldText,children:"Налаштування"}),e.jsxs("div",{className:r.radioContainer,children:[e.jsx("input",{type:"radio",id:"woman",className:r.radioInput,...v("gender"),value:"woman",checked:y==="woman"}),e.jsx("label",{htmlFor:"woman",className:r.ordinaryText,children:"Жіноче"}),e.jsx("input",{type:"radio",id:"man",className:r.radioInput,...v("gender"),value:"man",checked:y==="man"}),e.jsx("label",{htmlFor:"man",className:r.ordinaryText,children:"Чоловіче"})]}),d.gender&&e.jsx("p",{className:r.errorMessage,children:d.gender.message})]})}),e.jsxs("div",{className:r.userPreferences,children:[e.jsxs("div",{className:r.formNameEmail,children:[e.jsxs("label",{children:[e.jsx("span",{className:r.boldText,children:"Ваше ім'я"}),e.jsx(I,{render:({field:o})=>e.jsx("input",{...o,className:r.inputBox,placeholder:"Користувач",onChange:A=>{let g=A.target.value;/^\s|\s{2}$/.test(g)||o.onChange(g)}}),name:"name",control:u}),d.name&&e.jsx("p",{className:r.errorMessage,children:d.name.message})]}),e.jsxs("label",{children:[e.jsx("span",{className:r.boldText,children:"Пошта"}),e.jsx("input",{disabled:!0,...v("email"),className:r.inputBox,placeholder:"placeholderEmail"})]}),e.jsxs("div",{className:r.formula,children:[e.jsx("p",{className:r.boldText,children:"Моя щоденна норма"}),e.jsxs("div",{className:r.formulaDescription,children:[e.jsxs("p",{className:r.ordinaryText,children:[e.jsx("span",{children:"Для жінок: "}),e.jsx("span",{className:r.formulaExpression,children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{className:r.ordinaryText,children:[e.jsx("span",{children:"Для чоловіків: "}),e.jsx("span",{className:r.formulaExpression,children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsxs("p",{className:r.ordinaryText,children:[e.jsx("span",{className:r.formulaExpression,children:"* "}),e.jsx("span",{className:r.formulaDescriptionText,children:"* V - об'єм водної норми в літрах на день, М - ваша вага, Т - час активних занять спортом або іншої активної діяльності (у разі відсутності встановіть 0)"})]}),e.jsxs("p",{className:r.ordinaryText,children:[e.jsx("span",{className:r.temporarySymbol,children:"! "}),"Активний час (години)"]})]})]}),e.jsxs("div",{className:r.formWeightTime,children:[e.jsxs("label",{children:[e.jsx("span",{className:r.ordinaryText,children:"Ваша вага (кг):"}),e.jsx(I,{name:"weight",control:u,render:({field:o})=>e.jsx("input",{...o,className:r.inputBox,onChange:W(o),onFocus:T(o),onBlur:V(o)})}),d.weight&&e.jsx("p",{className:r.errorMessage,children:d.weight.message})]}),e.jsxs("label",{children:[e.jsx("span",{className:r.ordinaryText,children:"Час активних занять спортом:"}),e.jsx(I,{name:"dailyActiveTime",control:u,render:({field:o})=>e.jsx("input",{...o,className:r.inputBox,onChange:W(o),onFocus:T(o),onBlur:V(o)})}),d.dailyActiveTime&&e.jsx("p",{className:r.errorMessage,children:d.dailyActiveTime.message})]}),e.jsxs("div",{className:r.consumeWater,children:[e.jsxs("p",{className:r.ordinaryText,children:["Потрібна кількість води в літрах на день:  ",e.jsxs("span",{className:r.userNorma,children:[isNaN(n)?0:n," L"]})]}),e.jsxs("label",{children:[e.jsx("span",{className:r.boldText,children:"Запишіть, скільки води ви вип'єте:"}),e.jsx(I,{name:"dailyWaterConsumption",control:u,render:({field:o})=>e.jsx("input",{...o,className:r.inputBox,onChange:W(o),onFocus:T(o),onBlur:V(o)})}),d.dailyWaterConsumption&&e.jsx("p",{className:r.errorMessage,children:d.dailyWaterConsumption.message})]})]})]})]}),e.jsxs("button",{disabled:l,type:"submit",className:`${r.submitBtn} ${r.boldTextBtn}`,children:["Зберегти",l&&e.jsx("div",{className:r.loaderWrapper,children:e.jsx(Q,{height:56,width:56})})]})]})})},Gs="_waterContainer_s8upg_1",zs="_normaContainer_s8upg_17",Js="_normaL_s8upg_29",Ys="_normaText_s8upg_36",Xs="_waterTitle_s8upg_57",q={waterContainer:Gs,normaContainer:zs,normaL:Js,normaText:Ys,waterTitle:Xs},Qs=()=>{const a="2 л";return e.jsxs("div",{children:[e.jsxs("div",{className:q.waterContainer,children:[e.jsx(Ie,{className:q.waterTitle}),e.jsxs("div",{className:q.normaContainer,children:[e.jsx("h2",{className:q.normaL,children:a}),e.jsx("p",{className:q.normaText,children:"Моя щоденна норма"})]}),e.jsx(bs,{}),e.jsx(os,{})]}),e.jsx(Us,{})]})},Zs="_btnLogout_1xwlm_1",Ks={btnLogout:Zs},et=({handleClose:s})=>{const a=$(),t=Ae(),n=()=>{a(Ce()).then(({error:c})=>{c||(t("/"),s())})};return e.jsx("button",{type:"button",onClick:n,className:Ks.btnLogout,children:"Вийти"})},st="_modal_1spmq_1",tt="_closeBtn_1spmq_16",at="_svg_1spmq_35",nt="_modalTextBox_1spmq_40",rt="_modalTitle_1spmq_50",ot="_modalText_1spmq_40",ct="_modalBtnBox_1spmq_70",lt="_btnCancel_1spmq_80",S={modal:st,closeBtn:tt,svg:at,modalTextBox:nt,modalTitle:rt,modalText:ot,modalBtnBox:ct,btnCancel:lt},it=({onClose:s})=>{const a=B(me),t=()=>{const n=setTimeout(()=>{s(),clearTimeout(n)},ue.DURATION)};return e.jsxs("div",{className:S.modal,children:[e.jsx("button",{type:"button","aria-label":"closeLogOutModal",onClick:t,className:S.closeBtn,children:e.jsx("svg",{className:S.svg,children:e.jsx("use",{xlinkHref:`${_}#icon-x`})})}),e.jsxs("div",{className:S.modalTextBox,children:[e.jsx("h2",{className:S.modalTitle,children:"Вийти"}),e.jsx("p",{className:S.modalText,children:"Ви дійсно хочете вийти?"})]}),e.jsx("div",{className:S.modalBtnBox,children:a?e.jsx(Q,{height:80,width:80}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:t,className:S.btnCancel,children:"Скасувати"}),e.jsx(et,{handleClose:t})]})})]})},dt="_userBarPopup_1ap7q_1",mt="_userBarPopupList_1ap7q_16",ut="_userBarPopupListItem_1ap7q_23",_t="_userBarPopupIcon_1ap7q_40",k={userBarPopup:dt,userBarPopupList:mt,userBarPopupListItem:ut,userBarPopupIcon:_t},xt=()=>{const s=X(),a=i.useCallback(()=>{s()},[s]),t=i.useCallback(()=>{s(e.jsx("div",{children:"ModalUserSetting"}))},[s]),n=i.useCallback(()=>{s(e.jsx(it,{onClose:a}))},[s,a]);return e.jsx("div",{className:k.userBarPopup,children:e.jsxs("ul",{className:k.userBarPopupList,children:[e.jsxs("li",{className:k.userBarPopupListItem,onClick:t,children:[e.jsx("svg",{className:k.userBarPopupIcon,children:e.jsx("use",{xlinkHref:`${_}#icon-settings`})}),"Профіль"]}),e.jsxs("li",{className:k.userBarPopupListItem,onClick:n,children:[e.jsx("svg",{className:k.userBarPopupIcon,children:e.jsx("use",{xlinkHref:`${_}#icon-log-out`})}),"Вийти"]})]})})},ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEVVYIDn7O3///9MWHvt8vJTXn9PW3ykq7lJVXnq7+9DUHWepbTz9PZfaYd7gppFUnaPlqnb3eOEjaBpco61ucWDiqC+wczQ09rn6OxueJHHytN0fZassr/g5efV29+Vna2U7++XAAAFvElEQVRogcWb67aqOgxGi6UVuQgsEBVv7/+Wp4C6Fdrkq9Zx8mePvQYySZqmSZuKlbfkdd9m1bYphJGi2VZZ29e5/3uEJ7XdFXIQrZQYRSk9/qHYtZ58D/ShM9jkyXwX8wWJwXeH8Oi826pS26Cvoku1bVHdMXRdSZ77oOuqDobujinIvdPTYxcE3arUOrqUmJ+0X6N7kXiDR3ii+q/Q9ekz8AQ/0mNOofNMe43xXLTOKG8n0Pvmc5Ufijf7T9Brf++ywNPMG50fy+/Bg5RHl9Ed6L38apRfRUuH0e3oVgYw9kNUYp/jVnSWhAMPktxQdBVomP9JWWHoKuXfpfS0Sg8rtwYGJ7Wwl2iWrGSSFqcqW5/b9rzOqlORJqxvWPReoDmyTJusj+I3ifqsSaWv3nP0jRxnlYjsGsebaCabOL5mzEJTzoPLDN2Svm2C8mXJfdAvTMifz7F39J4ky+Ya27mTxNeGtPostryhc9Jb5C5yaPzUPNpRbCVzJ/pIGUzuGPAIJ9n66EJnlIvpE0A2bPLzy7UdvSenlbpi6Cvp5unehs4b6kfJmfSwfxKvKVdVTW5B02tGccHIUXShXiOSbImuyVAsM1Bpo/aN9HJdL9AnMhyk2EgPsqF9Rp/m6J5eojWstFGbTnCSfoa2149P8tYHvSXZSryj6dgt9M0HfWPU7t7QtNJCrn3QGb1+PtSe/um4RdoLveaW7u4FfWSSDI+5xWst1PEfuuZyorBokdZPdMXl+4HRunqgIzapC4wWOr+jWzbvDo0uuzuaDgE/0Xo7oQ98Ch8aLcRhRHd8nRMcPVjcoHd8PRscrXcDOi/YB39g8CI36Bp4MDxa1gbNLFo/QptSRCBDjSeFI/oM1Of6z6ALfm7pnQfZsAFtVLESdLEzPQbm4A/ZXPlq3xRBAvAyr/RoVJuPj8bPRM+jvRKFEQ04muxFyz+VeKO5PGVAtwL4wA/Q/ISVmWDThB+hdSW2/Nz6CVptBVlf/hJ9FMDi8RM0Av4VGpL/Ee0fUoB5jYmufNHAjDVjDYy2KrxWD7N+AKuhAQOTy9fikL3N5AJCilBJ75Mq9MghlQkpyLAMuxCozTcXzMdMIEUSKWNy2NMuDTaxzPIBLJpi2GpDle6B44sR3SKpwiDo7hWSl03oHkmQxifBdPiKgccECUgLBwEtHqNHZENaiCTDg6SQj1/At43JMFQCiCEtBdDxGQ3eYwmAFD6DyD3AFuhZ6Fj4gH6GZONQtXVXpAaL3OlpfrTBOS3uRS462MYzGLWRouMuU2mPbGhMwixgMfyi54bGAX1elVRI28DRZJADunl1F32itMbN/dy8wi0uSrfJ45tHKvjcsstx7/hzo+nDk9l7cnh7FkH72LvCN6UDo182pVcnMP6FQb9uxa/Q1CIMOu1fj13AsB8E/X7ssuqwmREEPTtsAtUOgZ4fsXEHi3chMjSozhpkcbCIRVMiS4rBlGN5nLqqAbRqiOUDTMssh8hIu1VK5UjQrqz16JxpGBi+V7b0eg0sIPaGASacqrLZc1lKm7DnetY2iaGR0f2bsuhcLUAv7CjTpOau5hCiaSAR7QaqueJoLdxwd0vMKrceYyupsgveJXFZFw441Qi0ulrGSuuK7nqC4VT7kyWWa7nd84O8gGdiqQTd9GVc7W1yqqTpvcF3uJzBF320iwa/1x6opGg/Ao/w6B2eLho6l22Nt8cUS8QZc2snfK2e44e0NT7aC6XOuM42Hv50OKyZc7S5kp5u7YYPDre0tgNtfK34zLus8D+ZWDu17e3KfRCVJ9nEZ492ZSPByEYcCGdXfCB7G61dBHdDfh6G7L6IQN2ACKC4U2UG/b3i5E0j5rbLV4pTKvPob1ydu1zFXy/60Or8rS7kUlXubfYNcp0MvMXml6Zg74Tv7qGqQwr7oUc6h4997iz6XZY0eHep6XtV0xc98fM8flhgs4nNfz95y3/5olpPgi07CgAAAABJRU5ErkJggg==",pt="_userBarWrapper_1k17p_1",gt="_userBar_1k17p_1",jt="_userBarText_1k17p_24",bt="_userBarAvatar_1k17p_32",ft="_userBarIcon_1k17p_44",Nt="_rotate_1k17p_56",L={userBarWrapper:pt,userBar:gt,userBarText:jt,userBarAvatar:bt,userBarIcon:ft,rotate:Nt},Tt=({name:s})=>{const[a,t]=i.useState(!1),n=i.useRef(null),c=m=>{n.current&&!n.current.contains(m.target)&&m.target.name!=="openPopover"&&t(!1)};i.useEffect(()=>(a?document.addEventListener("mousedown",c):document.removeEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}),[a]);const l=()=>{t(m=>!m)};return e.jsxs("div",{className:L.userBarWrapper,children:[e.jsxs("button",{className:L.userBar,type:"button",name:"openPopover",onClick:l,"aria-label":"openCloseUserPanel",children:[e.jsx("div",{className:L.userBarText,children:s}),e.jsx("div",{className:L.userBarAvatar,style:{backgroundImage:`url(${ht})`}}),e.jsx("svg",{className:`${L.userBarIcon} ${a?L.rotate:""}`,children:e.jsx("use",{xlinkHref:`${_}#icon-chevron-down`})})]}),a&&e.jsx("div",{ref:n,children:e.jsx(xt,{})})]})},wt="_userPanel_iff7o_1",Bt="_userPanelTitle_iff7o_7",vt="_userPanelTitleName_iff7o_18",re={userPanel:wt,userPanelTitle:Bt,userPanelTitleName:vt},At=()=>{const s=B(ye),a=B(We),t=a?a.split("@")[0]:null,n=s==="User"?t:s;return e.jsxs("div",{className:re.userPanel,children:[e.jsxs("h1",{className:re.userPanelTitle,children:["Привіт,",e.jsx("span",{className:re.userPanelTitleName,children:n})]}),e.jsx(Tt,{name:s})]})},Ct=["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"],yt=s=>{const a=new Date;return{isToday:a.getFullYear()===s.getFullYear()&&a.getMonth()===s.getMonth()&&a.getDate()===s.getDate(),day:s.getDate(),month:Ct[s.getMonth()]}},Wt="_selectedDate_1knrw_1",St={selectedDate:Wt},Dt=()=>{const{date:s}=G(),{isToday:a,day:t,month:n}=yt(z(s)),c=a?"Сьогодні":`${t} ${n}`;return e.jsx("h3",{className:St.selectedDate,children:c})},Mt="_btnStyle_445u2_1",Pt="_iconStyle_445u2_15",kt="_btnStyleText_445u2_31",oe={btnStyle:Mt,iconStyle:Pt,btnStyleText:kt},Lt=()=>{const s=X(),a=i.useCallback(()=>{s()},[s]),{date:t}=G(),n=z(t).getTime(),c=i.useCallback(()=>{s(e.jsx(ce,{onClose:a,operationType:"add",timestampFromUrl:n}))},[s,a,n]);return e.jsxs("button",{className:oe.btnStyle,type:"button",onClick:c,children:[e.jsx("svg",{className:oe.iconStyle,children:e.jsx("use",{xlinkHref:_+"#icon-plus"})}),e.jsx("span",{className:oe.btnStyleText,children:"Додати воду"})]})},It=s=>{const a=new Date(Number(s));let t=a.getHours();const n=a.getMinutes(),c=t>=12?"PM":"AM";t>=12&&(t=t%12,t=t||12);const l=t.toString().padStart(2,"0"),m=n.toString().padStart(2,"0");return`${l}:${m} ${c}`},Rt=s=>s>=1e3?{value:s/1e3,text:"л"}:{value:s,text:"мл"},$t="_btnDelete_19mt5_1",Ft={btnDelete:$t},Vt=({isLoading:s,handleDelete:a})=>e.jsx("button",{type:"button",className:Ft.btnDelete,onClick:()=>a(),disabled:s,children:"Видалити"}),Ht="_modal_z4bq9_1",Et="_closeBtn_z4bq9_16",qt="_svg_z4bq9_35",Ot="_modalTextBox_z4bq9_40",Ut="_modalTitle_z4bq9_50",Gt="_modalText_z4bq9_40",zt="_modalBtnBox_z4bq9_70",Jt="_btnCancel_z4bq9_80",D={modal:Ht,closeBtn:Et,svg:qt,modalTextBox:Ot,modalTitle:Ut,modalText:Gt,modalBtnBox:zt,btnCancel:Jt},Yt=({id:s,onClose:a})=>{const t=$(),[n,c]=i.useState(!1),l=()=>{const u=setTimeout(()=>{a(),clearTimeout(u)},ue.DURATION)},m=()=>{c(()=>!0),t(Se(s)).then(({error:u})=>{u?console.error("Помилка видалення запису:",u):l(),c(!1)})};return e.jsxs("div",{className:D.modal,children:[e.jsx("button",{type:"button","aria-label":"closeDeleteEntryModal",onClick:l,className:D.closeBtn,children:e.jsx("svg",{className:D.svg,children:e.jsx("use",{xlinkHref:_+"#icon-x"})})}),e.jsxs("div",{className:D.modalTextBox,children:[e.jsx("h2",{className:D.modalTitle,children:"Видалити запис"}),e.jsx("p",{className:D.modalText,children:"Ви дійсно хочете видалити запис ?"})]}),e.jsx("div",{className:D.modalBtnBox,children:n?e.jsx(Q,{height:80,width:80}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:l,className:D.btnCancel,children:"Відміна"}),e.jsx(Vt,{handleDelete:m,id:s})]})})]})},Xt="_waterItemContent_1msly_1",Qt="_waterInfo_1msly_12",Zt="_waterAmount_1msly_15",Kt="_waterDate_1msly_22",ea="_iconWaterGlass_1msly_28",sa="_editButton_1msly_40",ta="_deleteButton_1msly_41",aa="_containerButtons_1msly_53",na="_iconAction_1msly_59",w={waterItemContent:Xt,waterInfo:Qt,waterAmount:Zt,waterDate:Kt,iconWaterGlass:ea,editButton:sa,deleteButton:ta,containerButtons:aa,iconAction:na},ra=({water:s})=>{const a=X(),t=i.useCallback(()=>{a()},[a]),n=i.useCallback(()=>{a(e.jsx(Yt,{id:s.id,onClose:t}))},[a,t,s]),c=i.useCallback(()=>{a(e.jsx(ce,{water:s,onClose:t,operationType:"edit"}))},[a,t,s]),l=Rt(s.amount);return e.jsxs("div",{className:w.waterItemContent,children:[e.jsx("svg",{className:w.iconWaterGlass,width:"44",height:"45",children:e.jsx("use",{xlinkHref:_+"#icon-glass"})}),e.jsxs("div",{className:w.waterInfo,children:[e.jsx("p",{className:w.waterAmount,children:`${l.value} ${l.text}`}),e.jsx("p",{className:w.waterDate,children:It(s.date)})]}),e.jsxs("div",{className:w.containerButtons,children:[e.jsx("button",{className:w.editButton,onClick:c,"aria-label":"Edit the entered amount of water",children:e.jsx("svg",{className:w.iconAction,width:"14",height:"14",children:e.jsx("use",{xlinkHref:_+"#icon-edit"})})}),e.jsx("button",{className:w.deleteButton,onClick:n,"aria-label":"Delete the entered amount of water",children:e.jsx("svg",{className:w.iconAction,width:"14",height:"14",children:e.jsx("use",{xlinkHref:_+"#icon-trash"})})})]})]})},oa="_waterList_nhslc_1",ca="_messageContainer_nhslc_12",la="_noWater_nhslc_21",ia="_skeleton_nhslc_68",da="_shimmer_nhslc_1",O={waterList:oa,messageContainer:ca,noWater:la,skeleton:ia,shimmer:da},ma=()=>{const s=B(Fe);return B(Ve)?e.jsx("div",{className:O.waterList,children:[1,2,3].map(t=>e.jsx("div",{className:O.skeleton},t))}):s.length?e.jsx("ul",{className:O.waterList,children:s.map(t=>e.jsx("li",{children:e.jsx(ra,{water:t})},t.id))}):e.jsx("div",{className:O.messageContainer,children:e.jsx("h2",{className:O.noWater,children:"Вода ще не додана"})})},ua="_info_1c4or_1",_a="_header_1c4or_13",xa="_title_1c4or_21",ha="_button_1c4or_36",pa="_icon_1c4or_60",ga="_iconBackground_1c4or_83",de={info:ua,header:_a,title:xa,button:ha,icon:pa,iconBackground:ga},ja=()=>e.jsxs("div",{className:de.info,children:[e.jsxs("div",{className:de.header,children:[e.jsx(Dt,{}),e.jsx(Lt,{})]}),e.jsx(ma,{})]}),ba=({title:s,styles:a})=>e.jsx("span",{className:a,children:s}),fa=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень"," Жовтень"," Листопад","Грудень"],Na="_btn_11ww4_1",Ta="_btnDisabled_11ww4_13",wa="_svgSchedule_11ww4_17",Ba="_svgPie_11ww4_18",va="_calendarTitle_11ww4_28",Aa="_month_11ww4_39",Ca="_monthInd_11ww4_46",ya="_monthYear_11ww4_69",Wa="_statisticBtn_11ww4_76",Sa="_svgArrowLeft_11ww4_86",Da="_svgArrowRight_11ww4_87",Ma="_isHidden_11ww4_98",p={btn:Na,btnDisabled:Ta,svgSchedule:wa,svgPie:Ba,calendarTitle:va,month:Aa,monthInd:Ca,monthYear:ya,statisticBtn:Wa,svgArrowLeft:Sa,svgArrowRight:Da,isHidden:Ma},Pa=()=>{const s=$(),{date:a}=G(),t=z(a),[n,c]=i.useState(new Date(t).getFullYear()),[l,m]=i.useState(new Date(t).getMonth()),u=B(He),j=De().pathname.split("/").pop(),b=()=>{if(l===11){s(U(new Date(n+1,0,4).getTime())),m(0),c(n+1);return}s(U(new Date(n,l+1,4).getTime())),m(l+1)},d=()=>{if(l===0){s(U(new Date(n-1,11,4).getTime())),m(11),c(n-1);return}s(U(new Date(n,l-1,4).getTime())),m(l-1)},P=fa[l],y=j==="schedule"?"Статистика":"Місяць",M=new Date(Date.now()).getFullYear(),F=new Date(Date.now()).getMonth(),W=new Date(M,F)<=new Date(n,l);return e.jsxs("div",{className:p.calendarTitle,children:[e.jsx(ba,{title:y,styles:p.month}),e.jsxs("div",{className:p.monthInd,children:[e.jsx("button",{onClick:d,className:p.btn,disabled:u,children:e.jsx("svg",{className:p.svgArrowLeft,children:e.jsx("use",{xlinkHref:`${_}#icon-arrow`})})}),e.jsx("span",{className:p.monthYear,children:`${P}, ${n}`}),e.jsx("button",{onClick:b,className:`${p.btn} ${W?p.btnDisabled:""} `,disabled:u||W,children:e.jsx("svg",{className:p.svgArrowRight,children:e.jsx("use",{xlinkHref:`${_}#icon-arrow`})})}),e.jsx(le,{to:"calendar",className:({isActive:T})=>R(p.statisticBtn,{[p.isHidden]:T}),children:e.jsx("svg",{className:p.svgSchedule,children:e.jsx("use",{xlinkHref:`${_}#icon-pie-chart`})})}),e.jsx(le,{to:"schedule",className:({isActive:T})=>R(p.statisticBtn,{[p.isHidden]:T}),children:e.jsx("svg",{className:p.svgPie,children:e.jsx("use",{xlinkHref:`${_}#icon-pie-chart`})})})]})]})},ka=()=>e.jsxs("div",{children:[e.jsx(Pa,{}),e.jsx(i.Suspense,{fallback:e.jsx($e,{}),children:e.jsx(Me,{})})]}),La="_waterDetailedInfo_1r75c_1",Ia={waterDetailedInfo:La},Ra=()=>e.jsxs("section",{className:Ia.waterDetailedInfo,children:[e.jsx(At,{}),e.jsx(ja,{}),e.jsx(ka,{})]}),$a="_waterPage_16oaj_1",Fa="_registerPageRight_16oaj_8",Va={waterPage:$a,registerPageRight:Fa},Ga=()=>{const{date:s}=G(),a=z(s).getTime(),t=$(),[n,c]=i.useState(!0);return i.useEffect(()=>{if(n){const l=Date.now();t(Pe()),t(ke(a)),t(U(a)),t(Le(l)),c(!1)}},[n,a,t]),e.jsxs("div",{className:Va.waterPage,children:[e.jsx(Qs,{}),e.jsx(Ra,{})]})};export{Ga as default};
