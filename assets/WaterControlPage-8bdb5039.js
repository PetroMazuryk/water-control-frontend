import{r as i,M as Ne,j as e,b as R,g as $,i as Te,k as Be,m as G,u as w,n as we,o as ve,p as Ce,f as ue,A as _e,q as ye,t as Ae,v as We,w as Se,x as De,y as Me,N as ie,z as U,O as Pe,B as ke,C as Le,D as Ie}from"./index-e982f8cd.js";import{p as z}from"./parseDate-629c4fe8.js";import{L as $e}from"./Logo-3b147bf8.js";import{$ as Re,c as xe,a as he,d as X,u as pe,o as ge,s as u,C as I,L as Fe}from"./Loader-be19df4b.js";import{s as He,a as Ve,b as Ee}from"./selectors-798b382f.js";const Q=()=>i.useContext(Ne),Z=({width:s,height:a})=>e.jsx(Re,{visible:!0,height:a,width:s,ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#9be1a0","#f0eff4","#ffffffea","#87d28d","#323f47"]}),qe="_WaterForm_1jleh_1",Oe="_FormHeader_1jleh_13",Ue="_AmountOfWater_1jleh_25",Ge="_TapAddWaterWrapper_1jleh_36",ze="_TapAddWater_1jleh_36",Je="_TapAddWaterValue_1jleh_88",Ye="_RecordingTimeLabel_1jleh_104",Xe="_RecordingTime_1jleh_104",Qe="_WaterValueLabel_1jleh_136",Ze="_WaterValue_1jleh_136",Ke="_SaveBtn_1jleh_177",x={WaterForm:qe,FormHeader:Oe,AmountOfWater:Ue,TapAddWaterWrapper:Ge,TapAddWater:ze,TapAddWaterValue:Je,RecordingTimeLabel:Ye,RecordingTime:Xe,WaterValueLabel:Qe,WaterValue:Ze,SaveBtn:Ke,Error:"_Error_1jleh_213"},es=({operationType:s="add",editTime:a,waterPortion:t,waterID:n,handleClose:c})=>{const[l,m]=i.useState(t),_=R(),[v,j]=i.useState(!1),b=new Date(a),d=b.getFullYear(),P=String(b.getMonth()+1).padStart(2,"0"),A=String(b.getDate()).padStart(2,"0"),M=s==="add"?new Date:b,F=String(M.getHours()).padStart(2,"0"),W=String(M.getMinutes()).padStart(2,"0"),[T,H]=i.useState(F),[o,C]=i.useState(W),g=xe().shape({recordingTime:he().required("recordTimeRequired").matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,"invalidTimeFormat"),waterValue:X().required("waterValueRequired").min(50,"waterValueGreater").max(5e3,"waterValueLess")}),{control:V,handleSubmit:K,setValue:ee,formState:{errors:N}}=pe({resolver:ge(g),defaultValues:{recordingTime:`${T}:${o}`,waterValue:l.toString()}}),y=f=>{const J=new Date(`${d}-${P}-${A}T${T}:${o}:00`).getTime().toString(),ae={amount:f.waterValue,date:J},fe={amount:f.waterValue,date:J};switch(j(!0),s){case"add":_(Be(ae)).then(({error:ne})=>{ne?j(!1):(j(!1),c())});break;case"edit":_(Te({id:n,formData:fe})).then(({error:ne})=>{ne?j(!1):(j(!1),c())});break;default:j(!1);break}},se=f=>{switch(f){case"add":return e.jsx("p",{className:x.FormHeader,children:"Оберіть значення:"});case"edit":return e.jsx("p",{className:x.FormHeader,children:"Виправити дані:"});default:return e.jsx("p",{className:x.FormHeader,children:"Оберіть значення:"})}},te=f=>{m(f),ee("waterValue",f.toString())},je=l===50,be=l===5e3;return e.jsxs("form",{className:x.WaterForm,onSubmit:K(y),children:[se(s),e.jsx("p",{className:x.AmountOfWater,children:"Кількість води:"}),e.jsxs("div",{className:x.TapAddWaterWrapper,children:[e.jsx("button",{type:"button",className:x.TapAddWater,onClick:()=>te(Math.max(l-50,0)),disabled:je,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:u+"#icon-minus"})})}),e.jsxs("p",{className:x.TapAddWaterValue,children:[l," ","ml"]}),e.jsx("button",{type:"button",className:x.TapAddWater,onClick:()=>te(l+50),disabled:be,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:u+"#icon-plus"})})})]}),e.jsxs("label",{className:x.RecordingTimeLabel,children:["Час запису:",e.jsx(I,{name:"recordingTime",control:V,render:({field:f})=>e.jsx("input",{...f,type:"text",className:$(x.RecordingTime),placeholder:"HH:MM",onChange:E=>{const[J,ae]=E.target.value.split(":");H(J),C(ae),f.onChange(E)}})}),N.recordingTime&&e.jsx("p",{className:x.Error,children:N.recordingTime.message})]}),e.jsxs("label",{className:x.WaterValueLabel,children:["Введіть обєм води:",e.jsx(I,{name:"waterValue",control:V,render:({field:f})=>e.jsx("input",{...f,type:"number",value:l||"",onChange:E=>te(Number(E.target.value)),className:x.WaterValue})}),N.waterValue&&e.jsx("p",{className:x.Error,children:N.waterValue.message})]}),e.jsx("button",{type:"submit",className:x.SaveBtn,disabled:v,children:v?e.jsx(Z,{height:44,width:44}):"Зберегти"})]})},ss={DURATION:15},ts="_WaterModal_198kh_1",as="_WaterModalCloseBtn_198kh_22",de={WaterModal:ts,WaterModalCloseBtn:as},le=({operationType:s,onClose:a,water:t={},timestampFromUrl:n=""})=>{const c=()=>{const d=setTimeout(()=>{a(),clearTimeout(d)},ss.DURATION)},l=d=>{switch(d){case"add":return"Додавання води";case"edit":return"Редагувати кількість води";default:return"Додавання води"}},m=Number(n),_=Number(t.date),v=d=>{switch(d){case"add":return m;case"edit":return _}},j=d=>{switch(d){case"add":return 50;case"edit":return t.amount;default:return 50}},b=d=>{switch(d){case"add":return null;case"edit":return t.id;default:return null}};return e.jsxs("div",{className:de.WaterModal,children:[e.jsx("h1",{children:l(s)}),e.jsx(es,{operationType:s,editTime:v(s),waterPortion:j(s),waterID:b(s),handleClose:c}),e.jsx("button",{type:"button",onClick:c,"aria-label":"closeWaterModal",className:de.WaterModalCloseBtn,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${u}#icon-x`})})})]})},ns="_btnAdd_1xtnj_1",rs="_btnText_1xtnj_14",os="_plus_1xtnj_15",re={btnAdd:ns,btnText:rs,plus:os},cs=()=>{const s=Q(),{date:a}=G(),t=z(a),n=i.useCallback(()=>{s()},[s]),c=i.useCallback(()=>{s(e.jsx(le,{onClose:n,operationType:"add",timestampFromUrl:t}))},[s,n,t]);return e.jsxs("button",{type:"button",className:re.btnAdd,onClick:c,children:[e.jsx("svg",{className:re.plus,children:e.jsx("use",{xlinkHref:u+"#icon-plus"})}),e.jsx("h2",{className:re.btnText,children:"Додати воду"})]})},ls="_progressBarContainer_1c2ym_1",is="_progressBarTitle_1c2ym_14",ds="_progressBar_1c2ym_1",ms="_progressBarFill_1c2ym_29",us="_belowAim_1c2ym_38",_s="_aboveAim_1c2ym_44",xs="_belowAimRate_1c2ym_50",hs="_aboveAimRate_1c2ym_54",ps="_ball_1c2ym_58",gs="_percentNumber_1c2ym_69",js="_percentContainer_1c2ym_79",bs="_percent_1c2ym_69",h={progressBarContainer:ls,progressBarTitle:is,progressBar:ds,progressBarFill:ms,belowAim:us,aboveAim:_s,belowAimRate:xs,aboveAimRate:hs,ball:ps,percentNumber:gs,percentContainer:js,percent:bs},fs=()=>{const s=w(l=>l.water.todayAmount.value),a=w(we),t=Math.round(s/(a*1e3)*100),n=t>=100?100:t,c=s<a*1e3;return e.jsxs("div",{className:h.progressBarContainer,children:[e.jsx("h2",{className:h.progressBarTitle,children:"Сьогодні"}),e.jsx("div",{className:h.progressBar,children:e.jsxs("div",{className:$(h.progressBarFill,{[h.belowAim]:c,[h.aboveAim]:!c}),style:{width:`${n}%`},children:[e.jsx("p",{className:$(h.percentNumber,{[h.belowAimRate]:c,[h.aboveAimRate]:!c}),children:c?`${n.toFixed(0)}%`:"норма"}),e.jsx("div",{className:$(h.ball,{[h.belowAim]:c,[h.aboveAim]:!c})})]})}),e.jsxs("div",{className:h.percentContainer,children:[e.jsx("p",{className:h.percent,children:"0%"}),e.jsx("p",{className:h.percent,children:"50%"}),e.jsx("p",{className:h.percent,children:"100%"})]})]})},Ns="_waterContainer_s8upg_1",Ts="_normaContainer_s8upg_17",Bs="_normaL_s8upg_29",ws="_normaText_s8upg_36",vs="_waterTitle_s8upg_57",q={waterContainer:Ns,normaContainer:Ts,normaL:Bs,normaText:ws,waterTitle:vs},Cs=()=>{const a="2 л";return e.jsxs("div",{className:q.waterContainer,children:[e.jsx($e,{className:q.waterTitle}),e.jsxs("div",{className:q.normaContainer,children:[e.jsx("h2",{className:q.normaL,children:a}),e.jsx("p",{className:q.normaText,children:"Моя щоденна норма"})]}),e.jsx(fs,{}),e.jsx(cs,{})]})},ys="_btnLogout_1xwlm_1",As={btnLogout:ys},Ws=({handleClose:s})=>{const a=R(),t=ve(),n=()=>{a(Ce()).then(({error:c})=>{c||(t("/"),s())})};return e.jsx("button",{type:"button",onClick:n,className:As.btnLogout,children:"Вийти"})},Ss="_modal_1spmq_1",Ds="_closeBtn_1spmq_16",Ms="_svg_1spmq_35",Ps="_modalTextBox_1spmq_40",ks="_modalTitle_1spmq_50",Ls="_modalText_1spmq_40",Is="_modalBtnBox_1spmq_70",$s="_btnCancel_1spmq_80",S={modal:Ss,closeBtn:Ds,svg:Ms,modalTextBox:Ps,modalTitle:ks,modalText:Ls,modalBtnBox:Is,btnCancel:$s},Rs=({onClose:s})=>{const a=w(ue),t=()=>{const n=setTimeout(()=>{s(),clearTimeout(n)},_e.DURATION)};return e.jsxs("div",{className:S.modal,children:[e.jsx("button",{type:"button","aria-label":"closeLogOutModal",onClick:t,className:S.closeBtn,children:e.jsx("svg",{className:S.svg,children:e.jsx("use",{xlinkHref:`${u}#icon-x`})})}),e.jsxs("div",{className:S.modalTextBox,children:[e.jsx("h2",{className:S.modalTitle,children:"Вийти"}),e.jsx("p",{className:S.modalText,children:"Ви дійсно хочете вийти?"})]}),e.jsx("div",{className:S.modalBtnBox,children:a?e.jsx(Z,{height:80,width:80}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:t,className:S.btnCancel,children:"Скасувати"}),e.jsx(Ws,{handleClose:t})]})})]})},Fs="_userSettingForm_f82ca_1",Hs="_boldText_f82ca_20",Vs="_genderContainer_f82ca_26",Es="_radioContainer_f82ca_31",qs="_radioInput_f82ca_41",Os="_userPreferences_f82ca_66",Us="_formNameEmail_f82ca_72",Gs="_formWeightTime_f82ca_77",zs="_formula_f82ca_90",Js="_inputBox_f82ca_94",Ys="_formulaDescription_f82ca_118",Xs="_formulaExpression_f82ca_132",Qs="_ordinaryText_f82ca_137",Zs="_temporarySymbol_f82ca_146",Ks="_formulaDescriptionText_f82ca_156",et="_submitBtn_f82ca_160",st="_loaderWrapper_f82ca_184",tt="_boldTextBtn_f82ca_191",at="_consumeWater_f82ca_198",nt="_userNorma_f82ca_205",rt="_langButton_f82ca_213",ot="_errorMessage_f82ca_223",ct="_userAvatar_f82ca_238",lt="_loader_f82ca_184",it="_icon_f82ca_253",r={userSettingForm:Fs,boldText:Hs,genderContainer:Vs,radioContainer:Es,radioInput:qs,userPreferences:Os,formNameEmail:Us,formWeightTime:Gs,formula:zs,inputBox:Js,formulaDescription:Ys,formulaExpression:Xs,ordinaryText:Qs,temporarySymbol:Zs,formulaDescriptionText:Ks,submitBtn:et,loaderWrapper:st,boldTextBtn:tt,consumeWater:at,userNorma:nt,langButton:rt,errorMessage:ot,userAvatar:ct,loader:lt,icon:it},dt=({handleClose:s})=>{const a=R(),t=w(ye),[n,c]=i.useState(0),l=w(ue),m=xe({name:he().min(2,"Назва має містити не менше 2 символів").max(60,"Максимальна кількість символів імені 60").required("Імя обовязково"),weight:X().min(0).max(300,"Вага значення менше 300").typeError("Має бути числом"),dailyActiveTime:X().min(0).max(12,"Час активного спорту").typeError("Має бути числом"),dailyWaterConsumption:X().min(0).max(8,"Добове споживання води максимум 8 л").typeError("Має бути числом")}),{control:_,register:v,handleSubmit:j,watch:b,formState:{errors:d}}=pe({resolver:ge(m),defaultValues:{email:t.email,gender:t.gender,name:t.name,weight:t.weight,dailyActiveTime:t.dailyActiveTime,dailyWaterConsumption:t.dailyWaterConsumption},mode:"onChange"}),P=b("weight"),A=b("gender"),M=b("dailyActiveTime");i.useEffect(()=>{let o;const C=parseInt(P||0),g=parseInt(M||0);A==="woman"?o=C*.03+g*.4:o=C*.04+g*.6,c(Math.min(parseFloat(o),8).toFixed(2))},[M,A,P]);const F=o=>{const{photo:C,...g}=t;/\s$/.test(o.name)&&(o.name=o.name.trim());const K=Object.keys(g).sort().reduce((N,y)=>(N[y]=g[y],N),{}),ee=Object.keys(o).sort().reduce((N,y)=>(N[y]=o[y],N),{});if(JSON.stringify(K)!==JSON.stringify(ee)){const{email:N,...y}=o;a(Ae(y)).then(({error:se})=>{se||s()})}else s()},W=o=>C=>{let g=C.target.value;(g===""||/^(\d+(\.\d{0,3})?|\.\d{1,3})$/.test(g))&&o.onChange(g)},T=o=>()=>{o.value===0&&o.onChange("")},H=o=>()=>{o.value===""?o.onChange(0):o.value.startsWith(".")&&o.onChange("0"+o.value)};return e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:j(F),className:r.userSettingForm,children:[e.jsx("div",{className:r.genderContainer,children:e.jsxs("label",{className:r.genderIdentity,children:[e.jsx("span",{className:r.boldText,children:"Ваша стать"}),e.jsxs("div",{className:r.radioContainer,children:[e.jsx("input",{type:"radio",id:"woman",className:r.radioInput,...v("gender"),value:"woman",checked:A==="woman"}),e.jsx("label",{htmlFor:"woman",className:r.ordinaryText,children:"Жіноче"}),e.jsx("input",{type:"radio",id:"man",className:r.radioInput,...v("gender"),value:"man",checked:A==="man"}),e.jsx("label",{htmlFor:"man",className:r.ordinaryText,children:"Чоловіче"})]}),d.gender&&e.jsx("p",{className:r.errorMessage,children:d.gender.message})]})}),e.jsxs("div",{className:r.userPreferences,children:[e.jsxs("div",{className:r.formNameEmail,children:[e.jsxs("label",{children:[e.jsx("span",{className:r.boldText,children:"Ваше ім'я"}),e.jsx(I,{render:({field:o})=>e.jsx("input",{...o,className:r.inputBox,placeholder:"Користувач",onChange:C=>{let g=C.target.value;/^\s|\s{2}$/.test(g)||o.onChange(g)}}),name:"name",control:_}),d.name&&e.jsx("p",{className:r.errorMessage,children:d.name.message})]}),e.jsxs("label",{children:[e.jsx("span",{className:r.boldText,children:"Пошта"}),e.jsx("input",{disabled:!0,...v("email"),className:r.inputBox,placeholder:"placeholderEmail"})]}),e.jsxs("div",{className:r.formula,children:[e.jsx("p",{className:r.boldText,children:"Моя щоденна норма"}),e.jsxs("div",{className:r.formulaDescription,children:[e.jsxs("p",{className:r.ordinaryText,children:[e.jsx("span",{children:"Для жінок: "}),e.jsx("span",{className:r.formulaExpression,children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{className:r.ordinaryText,children:[e.jsx("span",{children:"Для чоловіків: "}),e.jsx("span",{className:r.formulaExpression,children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsxs("p",{className:r.ordinaryText,children:[e.jsx("span",{className:r.formulaExpression,children:"* "}),e.jsx("span",{className:r.formulaDescriptionText,children:"* V - об'єм водної норми в літрах на день, М - ваша вага, Т - час активних занять спортом або іншої активної діяльності (у разі відсутності встановіть 0)"})]}),e.jsxs("p",{className:r.ordinaryText,children:[e.jsx("span",{className:r.temporarySymbol,children:"! "}),"Активний час (години)"]})]})]}),e.jsxs("div",{className:r.formWeightTime,children:[e.jsxs("label",{children:[e.jsx("span",{className:r.ordinaryText,children:"Ваша вага (кг):"}),e.jsx(I,{name:"weight",control:_,render:({field:o})=>e.jsx("input",{...o,className:r.inputBox,onChange:W(o),onFocus:T(o),onBlur:H(o)})}),d.weight&&e.jsx("p",{className:r.errorMessage,children:d.weight.message})]}),e.jsxs("label",{children:[e.jsx("span",{className:r.ordinaryText,children:"Час активних занять спортом:"}),e.jsx(I,{name:"dailyActiveTime",control:_,render:({field:o})=>e.jsx("input",{...o,className:r.inputBox,onChange:W(o),onFocus:T(o),onBlur:H(o)})}),d.dailyActiveTime&&e.jsx("p",{className:r.errorMessage,children:d.dailyActiveTime.message})]}),e.jsxs("div",{className:r.consumeWater,children:[e.jsxs("p",{className:r.ordinaryText,children:["Потрібна кількість води в літрах на день:  ",e.jsxs("span",{className:r.userNorma,children:[isNaN(n)?0:n," L"]})]}),e.jsxs("label",{children:[e.jsx("span",{className:r.boldText,children:"Запишіть, скільки води ви вип'єте:"}),e.jsx(I,{name:"dailyWaterConsumption",control:_,render:({field:o})=>e.jsx("input",{...o,className:r.inputBox,onChange:W(o),onFocus:T(o),onBlur:H(o)})}),d.dailyWaterConsumption&&e.jsx("p",{className:r.errorMessage,children:d.dailyWaterConsumption.message})]})]})]})]}),e.jsxs("button",{disabled:l,type:"submit",className:`${r.submitBtn} ${r.boldTextBtn}`,children:["Зберегти",l&&e.jsx("div",{className:r.loaderWrapper,children:e.jsx(Z,{height:56,width:56})})]})]})})},mt="_modalSettingContainer_1md4x_1",ut="_modalHeader_1md4x_14",_t="_closeBtn_1md4x_29",xt="_icon_1md4x_44",Y={modalSettingContainer:mt,modalHeader:ut,closeBtn:_t,icon:xt},ht=({onClose:s})=>e.jsxs("div",{className:Y.modalSettingContainer,children:[e.jsxs("div",{className:Y.modalHeader,children:[e.jsx("h2",{children:"Налаштування"}),e.jsx("button",{type:"button","aria-label":"closeSettingModal",className:Y.closeBtn,onClick:s,children:e.jsx("svg",{className:Y.icon,children:e.jsx("use",{xlinkHref:u+"#icon-x"})})})]}),e.jsx(dt,{handleClose:s})]}),pt="_userBarPopup_1ap7q_1",gt="_userBarPopupList_1ap7q_16",jt="_userBarPopupListItem_1ap7q_23",bt="_userBarPopupIcon_1ap7q_40",k={userBarPopup:pt,userBarPopupList:gt,userBarPopupListItem:jt,userBarPopupIcon:bt},ft=()=>{const s=Q(),a=i.useCallback(()=>{s()},[s]),t=i.useCallback(()=>{s(e.jsx(ht,{onClose:a}))},[s,a]),n=i.useCallback(()=>{s(e.jsx(Rs,{onClose:a}))},[s,a]);return e.jsx("div",{className:k.userBarPopup,children:e.jsxs("ul",{className:k.userBarPopupList,children:[e.jsxs("li",{className:k.userBarPopupListItem,onClick:t,children:[e.jsx("svg",{className:k.userBarPopupIcon,children:e.jsx("use",{xlinkHref:`${u}#icon-settings`})}),"Профіль"]}),e.jsxs("li",{className:k.userBarPopupListItem,onClick:n,children:[e.jsx("svg",{className:k.userBarPopupIcon,children:e.jsx("use",{xlinkHref:`${u}#icon-log-out`})}),"Вийти"]})]})})},Nt="data:image/png;base64,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",Tt="_userBarWrapper_1k17p_1",Bt="_userBar_1k17p_1",wt="_userBarText_1k17p_24",vt="_userBarAvatar_1k17p_32",Ct="_userBarIcon_1k17p_44",yt="_rotate_1k17p_56",L={userBarWrapper:Tt,userBar:Bt,userBarText:wt,userBarAvatar:vt,userBarIcon:Ct,rotate:yt},At=({name:s})=>{const[a,t]=i.useState(!1),n=i.useRef(null),c=m=>{n.current&&!n.current.contains(m.target)&&m.target.name!=="openPopover"&&t(!1)};i.useEffect(()=>(a?document.addEventListener("mousedown",c):document.removeEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}),[a]);const l=()=>{t(m=>!m)};return e.jsxs("div",{className:L.userBarWrapper,children:[e.jsxs("button",{className:L.userBar,type:"button",name:"openPopover",onClick:l,"aria-label":"openCloseUserPanel",children:[e.jsx("div",{className:L.userBarText,children:s}),e.jsx("div",{className:L.userBarAvatar,style:{backgroundImage:`url(${Nt})`}}),e.jsx("svg",{className:`${L.userBarIcon} ${a?L.rotate:""}`,children:e.jsx("use",{xlinkHref:`${u}#icon-chevron-down`})})]}),a&&e.jsx("div",{ref:n,children:e.jsx(ft,{})})]})},Wt="_userPanel_iff7o_1",St="_userPanelTitle_iff7o_7",Dt="_userPanelTitleName_iff7o_18",oe={userPanel:Wt,userPanelTitle:St,userPanelTitleName:Dt},Mt=()=>{const s=w(We),a=w(Se),t=a?a.split("@")[0]:null,n=s==="User"?t:s;return e.jsxs("div",{className:oe.userPanel,children:[e.jsxs("h1",{className:oe.userPanelTitle,children:["Привіт,",e.jsx("span",{className:oe.userPanelTitleName,children:n})]}),e.jsx(At,{name:s})]})},Pt=["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"],kt=s=>{const a=new Date;return{isToday:a.getFullYear()===s.getFullYear()&&a.getMonth()===s.getMonth()&&a.getDate()===s.getDate(),day:s.getDate(),month:Pt[s.getMonth()]}},Lt="_selectedDate_1knrw_1",It={selectedDate:Lt},$t=()=>{const{date:s}=G(),{isToday:a,day:t,month:n}=kt(z(s)),c=a?"Сьогодні":`${t} ${n}`;return e.jsx("h3",{className:It.selectedDate,children:c})},Rt="_btnStyle_445u2_1",Ft="_iconStyle_445u2_15",Ht="_btnStyleText_445u2_31",ce={btnStyle:Rt,iconStyle:Ft,btnStyleText:Ht},Vt=()=>{const s=Q(),a=i.useCallback(()=>{s()},[s]),{date:t}=G(),n=z(t).getTime(),c=i.useCallback(()=>{s(e.jsx(le,{onClose:a,operationType:"add",timestampFromUrl:n}))},[s,a,n]);return e.jsxs("button",{className:ce.btnStyle,type:"button",onClick:c,children:[e.jsx("svg",{className:ce.iconStyle,children:e.jsx("use",{xlinkHref:u+"#icon-plus"})}),e.jsx("span",{className:ce.btnStyleText,children:"Додати воду"})]})},Et=s=>{const a=new Date(Number(s));let t=a.getHours();const n=a.getMinutes(),c=t>=12?"PM":"AM";t>=12&&(t=t%12,t=t||12);const l=t.toString().padStart(2,"0"),m=n.toString().padStart(2,"0");return`${l}:${m} ${c}`},qt=s=>s>=1e3?{value:s/1e3,text:"л"}:{value:s,text:"мл"},Ot="_btnDelete_19mt5_1",Ut={btnDelete:Ot},Gt=({isLoading:s,handleDelete:a})=>e.jsx("button",{type:"button",className:Ut.btnDelete,onClick:()=>a(),disabled:s,children:"Видалити"}),zt="_modal_z4bq9_1",Jt="_closeBtn_z4bq9_16",Yt="_svg_z4bq9_35",Xt="_modalTextBox_z4bq9_40",Qt="_modalTitle_z4bq9_50",Zt="_modalText_z4bq9_40",Kt="_modalBtnBox_z4bq9_70",ea="_btnCancel_z4bq9_80",D={modal:zt,closeBtn:Jt,svg:Yt,modalTextBox:Xt,modalTitle:Qt,modalText:Zt,modalBtnBox:Kt,btnCancel:ea},sa=({id:s,onClose:a})=>{const t=R(),[n,c]=i.useState(!1),l=()=>{const _=setTimeout(()=>{a(),clearTimeout(_)},_e.DURATION)},m=()=>{c(()=>!0),t(De(s)).then(({error:_})=>{_?console.error("Помилка видалення запису:",_):l(),c(!1)})};return e.jsxs("div",{className:D.modal,children:[e.jsx("button",{type:"button","aria-label":"closeDeleteEntryModal",onClick:l,className:D.closeBtn,children:e.jsx("svg",{className:D.svg,children:e.jsx("use",{xlinkHref:u+"#icon-x"})})}),e.jsxs("div",{className:D.modalTextBox,children:[e.jsx("h2",{className:D.modalTitle,children:"Видалити запис"}),e.jsx("p",{className:D.modalText,children:"Ви дійсно хочете видалити запис ?"})]}),e.jsx("div",{className:D.modalBtnBox,children:n?e.jsx(Z,{height:80,width:80}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:l,className:D.btnCancel,children:"Відміна"}),e.jsx(Gt,{handleDelete:m,id:s})]})})]})},ta="_waterItemContent_1msly_1",aa="_waterInfo_1msly_12",na="_waterAmount_1msly_15",ra="_waterDate_1msly_22",oa="_iconWaterGlass_1msly_28",ca="_editButton_1msly_40",la="_deleteButton_1msly_41",ia="_containerButtons_1msly_53",da="_iconAction_1msly_59",B={waterItemContent:ta,waterInfo:aa,waterAmount:na,waterDate:ra,iconWaterGlass:oa,editButton:ca,deleteButton:la,containerButtons:ia,iconAction:da},ma=({water:s})=>{const a=Q(),t=i.useCallback(()=>{a()},[a]),n=i.useCallback(()=>{a(e.jsx(sa,{id:s.id,onClose:t}))},[a,t,s]),c=i.useCallback(()=>{a(e.jsx(le,{water:s,onClose:t,operationType:"edit"}))},[a,t,s]),l=qt(s.amount);return e.jsxs("div",{className:B.waterItemContent,children:[e.jsx("svg",{className:B.iconWaterGlass,width:"44",height:"45",children:e.jsx("use",{xlinkHref:u+"#icon-glass"})}),e.jsxs("div",{className:B.waterInfo,children:[e.jsx("p",{className:B.waterAmount,children:`${l.value} ${l.text}`}),e.jsx("p",{className:B.waterDate,children:Et(s.date)})]}),e.jsxs("div",{className:B.containerButtons,children:[e.jsx("button",{className:B.editButton,onClick:c,"aria-label":"Edit the entered amount of water",children:e.jsx("svg",{className:B.iconAction,width:"14",height:"14",children:e.jsx("use",{xlinkHref:u+"#icon-edit"})})}),e.jsx("button",{className:B.deleteButton,onClick:n,"aria-label":"Delete the entered amount of water",children:e.jsx("svg",{className:B.iconAction,width:"14",height:"14",children:e.jsx("use",{xlinkHref:u+"#icon-trash"})})})]})]})},ua="_waterList_nhslc_1",_a="_messageContainer_nhslc_12",xa="_noWater_nhslc_21",ha="_skeleton_nhslc_68",pa="_shimmer_nhslc_1",O={waterList:ua,messageContainer:_a,noWater:xa,skeleton:ha,shimmer:pa},ga=()=>{const s=w(He);return w(Ve)?e.jsx("div",{className:O.waterList,children:[1,2,3].map(t=>e.jsx("div",{className:O.skeleton},t))}):s.length?e.jsx("ul",{className:O.waterList,children:s.map(t=>e.jsx("li",{children:e.jsx(ma,{water:t})},t.id))}):e.jsx("div",{className:O.messageContainer,children:e.jsx("h2",{className:O.noWater,children:"Вода ще не додана"})})},ja="_info_1c4or_1",ba="_header_1c4or_13",fa="_title_1c4or_21",Na="_button_1c4or_36",Ta="_icon_1c4or_60",Ba="_iconBackground_1c4or_83",me={info:ja,header:ba,title:fa,button:Na,icon:Ta,iconBackground:Ba},wa=()=>e.jsxs("div",{className:me.info,children:[e.jsxs("div",{className:me.header,children:[e.jsx($t,{}),e.jsx(Vt,{})]}),e.jsx(ga,{})]}),va=({title:s,styles:a})=>e.jsx("span",{className:a,children:s}),Ca=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень"," Жовтень"," Листопад","Грудень"],ya="_btn_11ww4_1",Aa="_btnDisabled_11ww4_13",Wa="_svgSchedule_11ww4_17",Sa="_svgPie_11ww4_18",Da="_calendarTitle_11ww4_28",Ma="_month_11ww4_39",Pa="_monthInd_11ww4_46",ka="_monthYear_11ww4_69",La="_statisticBtn_11ww4_76",Ia="_svgArrowLeft_11ww4_86",$a="_svgArrowRight_11ww4_87",Ra="_isHidden_11ww4_98",p={btn:ya,btnDisabled:Aa,svgSchedule:Wa,svgPie:Sa,calendarTitle:Da,month:Ma,monthInd:Pa,monthYear:ka,statisticBtn:La,svgArrowLeft:Ia,svgArrowRight:$a,isHidden:Ra},Fa=()=>{const s=R(),{date:a}=G(),t=z(a),[n,c]=i.useState(new Date(t).getFullYear()),[l,m]=i.useState(new Date(t).getMonth()),_=w(Ee),j=Me().pathname.split("/").pop(),b=()=>{if(l===11){s(U(new Date(n+1,0,4).getTime())),m(0),c(n+1);return}s(U(new Date(n,l+1,4).getTime())),m(l+1)},d=()=>{if(l===0){s(U(new Date(n-1,11,4).getTime())),m(11),c(n-1);return}s(U(new Date(n,l-1,4).getTime())),m(l-1)},P=Ca[l],A=j==="schedule"?"Статистика":"Місяць",M=new Date(Date.now()).getFullYear(),F=new Date(Date.now()).getMonth(),W=new Date(M,F)<=new Date(n,l);return e.jsxs("div",{className:p.calendarTitle,children:[e.jsx(va,{title:A,styles:p.month}),e.jsxs("div",{className:p.monthInd,children:[e.jsx("button",{onClick:d,className:p.btn,disabled:_,children:e.jsx("svg",{className:p.svgArrowLeft,children:e.jsx("use",{xlinkHref:`${u}#icon-arrow`})})}),e.jsx("span",{className:p.monthYear,children:`${P}, ${n}`}),e.jsx("button",{onClick:b,className:`${p.btn} ${W?p.btnDisabled:""} `,disabled:_||W,children:e.jsx("svg",{className:p.svgArrowRight,children:e.jsx("use",{xlinkHref:`${u}#icon-arrow`})})}),e.jsx(ie,{to:"calendar",className:({isActive:T})=>$(p.statisticBtn,{[p.isHidden]:T}),children:e.jsx("svg",{className:p.svgSchedule,children:e.jsx("use",{xlinkHref:`${u}#icon-pie-chart`})})}),e.jsx(ie,{to:"schedule",className:({isActive:T})=>$(p.statisticBtn,{[p.isHidden]:T}),children:e.jsx("svg",{className:p.svgPie,children:e.jsx("use",{xlinkHref:`${u}#icon-pie-chart`})})})]})]})},Ha=()=>e.jsxs("div",{children:[e.jsx(Fa,{}),e.jsx(i.Suspense,{fallback:e.jsx(Fe,{}),children:e.jsx(Pe,{})})]}),Va="_waterDetailedInfo_1r75c_1",Ea={waterDetailedInfo:Va},qa=()=>e.jsxs("section",{className:Ea.waterDetailedInfo,children:[e.jsx(Mt,{}),e.jsx(wa,{}),e.jsx(Ha,{})]}),Oa="_waterPage_16oaj_1",Ua="_registerPageRight_16oaj_8",Ga={waterPage:Oa,registerPageRight:Ua},Za=()=>{const{date:s}=G(),a=z(s).getTime(),t=R(),[n,c]=i.useState(!0);return i.useEffect(()=>{if(n){const l=Date.now();t(ke()),t(Le(a)),t(U(a)),t(Ie(l)),c(!1)}},[n,a,t]),e.jsxs("div",{className:Ga.waterPage,children:[e.jsx(Cs,{}),e.jsx(qa,{})]})};export{Za as default};
