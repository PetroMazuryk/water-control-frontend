import{r as i,M as Te,j as e,b as V,g as H,i as we,k as Ce,m as Y,u as f,n as he,o as Ae,p as ye,f as _e,A as pe,q as We,t as ge,v as ke,w as Se,x as De,y as Me,z as Pe,B as Le,C as Ie,N as me,D as G,O as $e,E as Re,F as Fe,G as He}from"./index-97cabe18.js";import{p as X}from"./parseDate-629c4fe8.js";import{L as Ve}from"./Logo-40f2d412.js";import{$ as Ee,c as je,a as be,d as K,u as fe,o as Ne,s as m,C as F,L as qe}from"./Loader-da348f5b.js";import{s as Oe,a as Ue,b as ze}from"./selectors-798b382f.js";const ee=()=>i.useContext(Te),J=({width:s,height:a})=>e.jsx(Ee,{visible:!0,height:a,width:s,ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#9be1a0","#f0eff4","#ffffffea","#87d28d","#323f47"]}),Ge="_WaterForm_1jleh_1",Je="_FormHeader_1jleh_13",Ye="_AmountOfWater_1jleh_25",Xe="_TapAddWaterWrapper_1jleh_36",Qe="_TapAddWater_1jleh_36",Ze="_TapAddWaterValue_1jleh_88",Ke="_RecordingTimeLabel_1jleh_104",es="_RecordingTime_1jleh_104",ss="_WaterValueLabel_1jleh_136",ts="_WaterValue_1jleh_136",as="_SaveBtn_1jleh_177",_={WaterForm:Ge,FormHeader:Je,AmountOfWater:Ye,TapAddWaterWrapper:Xe,TapAddWater:Qe,TapAddWaterValue:Ze,RecordingTimeLabel:Ke,RecordingTime:es,WaterValueLabel:ss,WaterValue:ts,SaveBtn:as,Error:"_Error_1jleh_213"},ns=({operationType:s="add",editTime:a,waterPortion:t,waterID:o,handleClose:c})=>{const[l,u]=i.useState(t),d=V(),[S,g]=i.useState(!1),N=new Date(a),j=N.getFullYear(),D=String(N.getMonth()+1).padStart(2,"0"),h=String(N.getDate()).padStart(2,"0"),M=s==="add"?new Date:N,A=String(M.getHours()).padStart(2,"0"),P=String(M.getMinutes()).padStart(2,"0"),[y,se]=i.useState(A),[I,E]=i.useState(P),q=je().shape({recordingTime:be().required("recordTimeRequired").matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,"invalidTimeFormat"),waterValue:K().required("waterValueRequired").min(50,"waterValueGreater").max(5e3,"waterValueLess")}),{control:r,handleSubmit:v,setValue:x,formState:{errors:L}}=fe({resolver:Ne(q),defaultValues:{recordingTime:`${y}:${I}`,waterValue:l.toString()}}),te=B=>{const Q=new Date(`${j}-${D}-${h}T${y}:${I}:00`).getTime().toString(),oe={amount:B.waterValue,date:Q},Be={amount:B.waterValue,date:Q};switch(g(!0),s){case"add":d(Ce(oe)).then(({error:re})=>{re?g(!1):(g(!1),c())});break;case"edit":d(we({id:o,formData:Be})).then(({error:re})=>{re?g(!1):(g(!1),c())});break;default:g(!1);break}},ae=B=>{switch(B){case"add":return e.jsx("p",{className:_.FormHeader,children:"Оберіть значення:"});case"edit":return e.jsx("p",{className:_.FormHeader,children:"Виправити дані:"});default:return e.jsx("p",{className:_.FormHeader,children:"Оберіть значення:"})}},T=B=>{u(B),x("waterValue",B.toString())},C=l===50,ne=l===5e3;return e.jsxs("form",{className:_.WaterForm,onSubmit:v(te),children:[ae(s),e.jsx("p",{className:_.AmountOfWater,children:"Кількість води:"}),e.jsxs("div",{className:_.TapAddWaterWrapper,children:[e.jsx("button",{type:"button",className:_.TapAddWater,onClick:()=>T(Math.max(l-50,0)),disabled:C,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:m+"#icon-minus"})})}),e.jsxs("p",{className:_.TapAddWaterValue,children:[l," ","ml"]}),e.jsx("button",{type:"button",className:_.TapAddWater,onClick:()=>T(l+50),disabled:ne,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:m+"#icon-plus"})})})]}),e.jsxs("label",{className:_.RecordingTimeLabel,children:["Час запису:",e.jsx(F,{name:"recordingTime",control:r,render:({field:B})=>e.jsx("input",{...B,type:"text",className:H(_.RecordingTime),placeholder:"HH:MM",onChange:O=>{const[Q,oe]=O.target.value.split(":");se(Q),E(oe),B.onChange(O)}})}),L.recordingTime&&e.jsx("p",{className:_.Error,children:L.recordingTime.message})]}),e.jsxs("label",{className:_.WaterValueLabel,children:["Введіть обєм води:",e.jsx(F,{name:"waterValue",control:r,render:({field:B})=>e.jsx("input",{...B,type:"number",value:l||"",onChange:O=>T(Number(O.target.value)),className:_.WaterValue})}),L.waterValue&&e.jsx("p",{className:_.Error,children:L.waterValue.message})]}),e.jsx("button",{type:"submit",className:_.SaveBtn,disabled:S,children:S?e.jsx(J,{height:44,width:44}):"Зберегти"})]})},os={DURATION:15},rs="_WaterModal_198kh_1",cs="_WaterModalCloseBtn_198kh_22",ue={WaterModal:rs,WaterModalCloseBtn:cs},de=({operationType:s,onClose:a,water:t={},timestampFromUrl:o=""})=>{const c=()=>{const j=setTimeout(()=>{a(),clearTimeout(j)},os.DURATION)},l=j=>{switch(j){case"add":return"Додавання води";case"edit":return"Редагувати кількість води";default:return"Додавання води"}},u=Number(o),d=Number(t.date),S=j=>{switch(j){case"add":return u;case"edit":return d}},g=j=>{switch(j){case"add":return 50;case"edit":return t.amount;default:return 50}},N=j=>{switch(j){case"add":return null;case"edit":return t.id;default:return null}};return e.jsxs("div",{className:ue.WaterModal,children:[e.jsx("h1",{children:l(s)}),e.jsx(ns,{operationType:s,editTime:S(s),waterPortion:g(s),waterID:N(s),handleClose:c}),e.jsx("button",{type:"button",onClick:c,"aria-label":"closeWaterModal",className:ue.WaterModalCloseBtn,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${m}#icon-x`})})})]})},ls="_btnAdd_1xtnj_1",is="_btnText_1xtnj_14",ds="_plus_1xtnj_15",ce={btnAdd:ls,btnText:is,plus:ds},ms=()=>{const s=ee(),{date:a}=Y(),t=X(a),o=i.useCallback(()=>{s()},[s]),c=i.useCallback(()=>{s(e.jsx(de,{onClose:o,operationType:"add",timestampFromUrl:t}))},[s,o,t]);return e.jsxs("button",{type:"button",className:ce.btnAdd,onClick:c,children:[e.jsx("svg",{className:ce.plus,children:e.jsx("use",{xlinkHref:m+"#icon-plus"})}),e.jsx("h2",{className:ce.btnText,children:"Додати воду"})]})},us="_progressBarContainer_1c2ym_1",xs="_progressBarTitle_1c2ym_14",hs="_progressBar_1c2ym_1",_s="_progressBarFill_1c2ym_29",ps="_belowAim_1c2ym_38",gs="_aboveAim_1c2ym_44",js="_belowAimRate_1c2ym_50",bs="_aboveAimRate_1c2ym_54",fs="_ball_1c2ym_58",Ns="_percentNumber_1c2ym_69",vs="_percentContainer_1c2ym_79",Bs="_percent_1c2ym_69",p={progressBarContainer:us,progressBarTitle:xs,progressBar:hs,progressBarFill:_s,belowAim:ps,aboveAim:gs,belowAimRate:js,aboveAimRate:bs,ball:fs,percentNumber:Ns,percentContainer:vs,percent:Bs},Ts=()=>{const s=f(l=>l.water.todayAmount.value),a=f(he),t=Math.round(s/(a*1e3)*100),o=t>=100?100:t,c=s<a*1e3;return e.jsxs("div",{className:p.progressBarContainer,children:[e.jsx("h2",{className:p.progressBarTitle,children:"Сьогодні"}),e.jsx("div",{className:p.progressBar,children:e.jsxs("div",{className:H(p.progressBarFill,{[p.belowAim]:c,[p.aboveAim]:!c}),style:{width:`${o}%`},children:[e.jsx("p",{className:H(p.percentNumber,{[p.belowAimRate]:c,[p.aboveAimRate]:!c}),children:c?`${o.toFixed(0)}%`:"норма"}),e.jsx("div",{className:H(p.ball,{[p.belowAim]:c,[p.aboveAim]:!c})})]})}),e.jsxs("div",{className:p.percentContainer,children:[e.jsx("p",{className:p.percent,children:"0%"}),e.jsx("p",{className:p.percent,children:"50%"}),e.jsx("p",{className:p.percent,children:"100%"})]})]})},ws="_waterContainer_szgl7_1",Cs="_normaContainer_szgl7_16",As="_normaL_szgl7_28",ys="_normaText_szgl7_35",Ws="_waterTitle_szgl7_53",U={waterContainer:ws,normaContainer:Cs,normaL:As,normaText:ys,waterTitle:Ws},ks=()=>{const s=f(he),a=s<1?`${s*1e3} мл`:`${s} л`;return e.jsxs("div",{className:U.waterContainer,children:[e.jsx(Ve,{className:U.waterTitle}),s===0?"":e.jsxs("div",{className:U.normaContainer,children:[e.jsx("h2",{className:U.normaL,children:a}),e.jsx("p",{className:U.normaText,children:"Моя щоденна норма"})]}),s===0?"":e.jsx(Ts,{}),s===0?e.jsx("div",{children:" BtnUserSet"}):e.jsx(ms,{})]})},Ss="_btnLogout_1xwlm_1",Ds={btnLogout:Ss},Ms=({handleClose:s})=>{const a=V(),t=Ae(),o=()=>{a(ye()).then(({error:c})=>{c||(t("/"),s())})};return e.jsx("button",{type:"button",onClick:o,className:Ds.btnLogout,children:"Вийти"})},Ps="_modal_1spmq_1",Ls="_closeBtn_1spmq_16",Is="_svg_1spmq_35",$s="_modalTextBox_1spmq_40",Rs="_modalTitle_1spmq_50",Fs="_modalText_1spmq_40",Hs="_modalBtnBox_1spmq_70",Vs="_btnCancel_1spmq_80",W={modal:Ps,closeBtn:Ls,svg:Is,modalTextBox:$s,modalTitle:Rs,modalText:Fs,modalBtnBox:Hs,btnCancel:Vs},Es=({onClose:s})=>{const a=f(_e),t=()=>{const o=setTimeout(()=>{s(),clearTimeout(o)},pe.DURATION)};return e.jsxs("div",{className:W.modal,children:[e.jsx("button",{type:"button","aria-label":"closeLogOutModal",onClick:t,className:W.closeBtn,children:e.jsx("svg",{className:W.svg,children:e.jsx("use",{xlinkHref:`${m}#icon-x`})})}),e.jsxs("div",{className:W.modalTextBox,children:[e.jsx("h2",{className:W.modalTitle,children:"Вийти"}),e.jsx("p",{className:W.modalText,children:"Ви дійсно хочете вийти?"})]}),e.jsx("div",{className:W.modalBtnBox,children:a?e.jsx(J,{height:80,width:80}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:t,className:W.btnCancel,children:"Скасувати"}),e.jsx(Ms,{handleClose:t})]})})]})},ve="data:image/png;base64,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",qs="_userAvatar_1fnxk_1",Os="_loader_1fnxk_20",Us="_uploadContainer_1fnxk_28",zs="_icon_1fnxk_36",Gs="_ordinaryText_1fnxk_49",Js="_hideBtn_1fnxk_72",Ys="_userSettingForm_1fnxk_76",Xs="_boldText_1fnxk_95",Qs="_genderContainer_1fnxk_101",Zs="_radioContainer_1fnxk_106",Ks="_radioInput_1fnxk_116",et="_userPreferences_1fnxk_141",st="_formNameEmail_1fnxk_147",tt="_formWeightTime_1fnxk_152",at="_formula_1fnxk_165",nt="_inputBox_1fnxk_169",ot="_formulaDescription_1fnxk_193",rt="_formulaExpression_1fnxk_207",ct="_temporarySymbol_1fnxk_221",lt="_formulaDescriptionText_1fnxk_231",it="_submitBtn_1fnxk_235",dt="_loaderWrapper_1fnxk_259",mt="_boldTextBtn_1fnxk_266",ut="_consumeWater_1fnxk_273",xt="_userNorma_1fnxk_280",ht="_langButton_1fnxk_288",_t="_errorMessage_1fnxk_298",n={userAvatar:qs,loader:Os,uploadContainer:Us,icon:zs,ordinaryText:Gs,hideBtn:Js,userSettingForm:Ys,boldText:Xs,genderContainer:Qs,radioContainer:Zs,radioInput:Ks,userPreferences:et,formNameEmail:st,formWeightTime:tt,formula:at,inputBox:nt,formulaDescription:ot,formulaExpression:rt,temporarySymbol:ct,formulaDescriptionText:lt,submitBtn:it,loaderWrapper:dt,boldTextBtn:mt,consumeWater:ut,userNorma:xt,langButton:ht,errorMessage:_t},pt=({handleClose:s})=>{const a=V(),t=f(We),o=f(ge),[c,l]=i.useState(0),u=f(_e),d=f(ke),S=je({name:be().min(2,"Назва має містити не менше 2 символів").max(60,"Максимальна кількість символів імені 60").required("Імя обовязково"),weight:K().min(0).max(300,"Вага значення менше 300").typeError("Має бути числом"),dailyActiveTime:K().min(0).max(12,"Час активного спорту").typeError("Має бути числом"),dailyWaterConsumption:K().min(0).max(8,"Добове споживання води максимум 8 л").typeError("Має бути числом")}),{control:g,register:N,handleSubmit:j,watch:D,formState:{errors:h}}=fe({resolver:Ne(S),defaultValues:{email:t.email,gender:t.gender,name:t.name,weight:t.weight,dailyActiveTime:t.dailyActiveTime,dailyWaterConsumption:t.dailyWaterConsumption},mode:"onChange"}),M=D("weight"),A=D("gender"),P=D("dailyActiveTime");i.useEffect(()=>{let r;const v=parseInt(M||0),x=parseInt(P||0);A==="woman"?r=v*.03+x*.4:r=v*.04+x*.6,l(Math.min(parseFloat(r),8).toFixed(2))},[P,A,M]);const y=r=>{const{photo:v,...x}=t;/\s$/.test(r.name)&&(r.name=r.name.trim());const te=Object.keys(x).sort().reduce((T,C)=>(T[C]=x[C],T),{}),ae=Object.keys(r).sort().reduce((T,C)=>(T[C]=r[C],T),{});if(JSON.stringify(te)!==JSON.stringify(ae)){const{email:T,...C}=r;a(Se(C)).then(({error:ne})=>{ne||s()})}else s()},se=r=>{const v=new FormData,x=r.target.files[0];x&&(v.append("avatar",x),a(De(v)))},I=r=>v=>{let x=v.target.value;(x===""||/^(\d+(\.\d{0,3})?|\.\d{1,3})$/.test(x))&&r.onChange(x)},E=r=>()=>{r.value===0&&r.onChange("")},q=r=>()=>{r.value===""?r.onChange(0):r.value.startsWith(".")&&r.onChange("0"+r.value)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:n.userAvatar,children:[d?e.jsx("div",{className:n.loader,children:e.jsx(J,{})}):e.jsx("img",{src:o||`${ve}`,alt:"User photo"}),e.jsxs("label",{children:[e.jsxs("div",{className:n.uploadContainer,children:[e.jsx("svg",{className:n.icon,children:e.jsx("use",{xlinkHref:`${m}#icon-upload`})}),e.jsx("span",{className:n.ordinaryText,children:"Завантажити фото"})]}),e.jsx("input",{className:n.hideBtn,type:"file",accept:"image/*",onChange:se}),h.avatar&&e.jsx("p",{children:h.avatar.message})]})]}),e.jsxs("form",{onSubmit:j(y),className:n.userSettingForm,children:[e.jsx("div",{className:n.genderContainer,children:e.jsxs("label",{className:n.genderIdentity,children:[e.jsx("span",{className:n.boldText,children:"Ваша стать"}),e.jsxs("div",{className:n.radioContainer,children:[e.jsx("input",{type:"radio",id:"woman",className:n.radioInput,...N("gender"),value:"woman",checked:A==="woman"}),e.jsx("label",{htmlFor:"woman",className:n.ordinaryText,children:"Жіноче"}),e.jsx("input",{type:"radio",id:"man",className:n.radioInput,...N("gender"),value:"man",checked:A==="man"}),e.jsx("label",{htmlFor:"man",className:n.ordinaryText,children:"Чоловіче"})]}),h.gender&&e.jsx("p",{className:n.errorMessage,children:h.gender.message})]})}),e.jsxs("div",{className:n.userPreferences,children:[e.jsxs("div",{className:n.formNameEmail,children:[e.jsxs("label",{children:[e.jsx("span",{className:n.boldText,children:"Ваше ім'я"}),e.jsx(F,{render:({field:r})=>e.jsx("input",{...r,className:n.inputBox,placeholder:"Користувач",onChange:v=>{let x=v.target.value;/^\s|\s{2}$/.test(x)||r.onChange(x)}}),name:"name",control:g}),h.name&&e.jsx("p",{className:n.errorMessage,children:h.name.message})]}),e.jsxs("label",{children:[e.jsx("span",{className:n.boldText,children:"Пошта"}),e.jsx("input",{disabled:!0,...N("email"),className:n.inputBox,placeholder:"placeholderEmail"})]}),e.jsxs("div",{className:n.formula,children:[e.jsx("p",{className:n.boldText,children:"Моя щоденна норма"}),e.jsxs("div",{className:n.formulaDescription,children:[e.jsxs("p",{className:n.ordinaryText,children:[e.jsx("span",{children:"Для жінок: "}),e.jsx("span",{className:n.formulaExpression,children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{className:n.ordinaryText,children:[e.jsx("span",{children:"Для чоловіків: "}),e.jsx("span",{className:n.formulaExpression,children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsxs("p",{className:n.ordinaryText,children:[e.jsx("span",{className:n.formulaExpression,children:"* "}),e.jsx("span",{className:n.formulaDescriptionText,children:"* V - об'єм водної норми в літрах на день, М - ваша вага, Т - час активних занять спортом або іншої активної діяльності (у разі відсутності встановіть 0)"})]}),e.jsxs("p",{className:n.ordinaryText,children:[e.jsx("span",{className:n.temporarySymbol,children:"! "}),"Активний час (години)"]})]})]}),e.jsxs("div",{className:n.formWeightTime,children:[e.jsxs("label",{children:[e.jsx("span",{className:n.ordinaryText,children:"Ваша вага (кг):"}),e.jsx(F,{name:"weight",control:g,render:({field:r})=>e.jsx("input",{...r,className:n.inputBox,onChange:I(r),onFocus:E(r),onBlur:q(r)})}),h.weight&&e.jsx("p",{className:n.errorMessage,children:h.weight.message})]}),e.jsxs("label",{children:[e.jsx("span",{className:n.ordinaryText,children:"Час активних занять спортом:"}),e.jsx(F,{name:"dailyActiveTime",control:g,render:({field:r})=>e.jsx("input",{...r,className:n.inputBox,onChange:I(r),onFocus:E(r),onBlur:q(r)})}),h.dailyActiveTime&&e.jsx("p",{className:n.errorMessage,children:h.dailyActiveTime.message})]}),e.jsxs("div",{className:n.consumeWater,children:[e.jsxs("p",{className:n.ordinaryText,children:["Потрібна кількість води в літрах на день:  ",e.jsxs("span",{className:n.userNorma,children:[isNaN(c)?0:c," L"]})]}),e.jsxs("label",{children:[e.jsx("span",{className:n.boldText,children:"Запишіть, скільки води ви вип'єте:"}),e.jsx(F,{name:"dailyWaterConsumption",control:g,render:({field:r})=>e.jsx("input",{...r,className:n.inputBox,onChange:I(r),onFocus:E(r),onBlur:q(r)})}),h.dailyWaterConsumption&&e.jsx("p",{className:n.errorMessage,children:h.dailyWaterConsumption.message})]})]})]})]}),e.jsxs("button",{disabled:u,type:"submit",className:`${n.submitBtn} ${n.boldTextBtn}`,children:["Зберегти",u&&e.jsx("div",{className:n.loaderWrapper,children:e.jsx(J,{height:56,width:56})})]})]})]})},gt="_modalSettingContainer_1md4x_1",jt="_modalHeader_1md4x_14",bt="_closeBtn_1md4x_29",ft="_icon_1md4x_44",Z={modalSettingContainer:gt,modalHeader:jt,closeBtn:bt,icon:ft},Nt=({onClose:s})=>e.jsxs("div",{className:Z.modalSettingContainer,children:[e.jsxs("div",{className:Z.modalHeader,children:[e.jsx("h2",{children:"Налаштування"}),e.jsx("button",{type:"button","aria-label":"closeSettingModal",className:Z.closeBtn,onClick:s,children:e.jsx("svg",{className:Z.icon,children:e.jsx("use",{xlinkHref:m+"#icon-x"})})})]}),e.jsx(pt,{handleClose:s})]}),vt="_userBarPopup_1ap7q_1",Bt="_userBarPopupList_1ap7q_16",Tt="_userBarPopupListItem_1ap7q_23",wt="_userBarPopupIcon_1ap7q_40",$={userBarPopup:vt,userBarPopupList:Bt,userBarPopupListItem:Tt,userBarPopupIcon:wt},Ct=()=>{const s=ee(),a=i.useCallback(()=>{s()},[s]),t=i.useCallback(()=>{s(e.jsx(Nt,{onClose:a}))},[s,a]),o=i.useCallback(()=>{s(e.jsx(Es,{onClose:a}))},[s,a]);return e.jsx("div",{className:$.userBarPopup,children:e.jsxs("ul",{className:$.userBarPopupList,children:[e.jsxs("li",{className:$.userBarPopupListItem,onClick:t,children:[e.jsx("svg",{className:$.userBarPopupIcon,children:e.jsx("use",{xlinkHref:`${m}#icon-settings`})}),"Профіль"]}),e.jsxs("li",{className:$.userBarPopupListItem,onClick:o,children:[e.jsx("svg",{className:$.userBarPopupIcon,children:e.jsx("use",{xlinkHref:`${m}#icon-log-out`})}),"Вийти"]})]})})},At="_userBarWrapper_1k17p_1",yt="_userBar_1k17p_1",Wt="_userBarText_1k17p_24",kt="_userBarAvatar_1k17p_32",St="_userBarIcon_1k17p_44",Dt="_rotate_1k17p_56",R={userBarWrapper:At,userBar:yt,userBarText:Wt,userBarAvatar:kt,userBarIcon:St,rotate:Dt},Mt=({name:s})=>{const[a,t]=i.useState(!1),o=f(ge),c=i.useRef(null),l=d=>{c.current&&!c.current.contains(d.target)&&d.target.name!=="openPopover"&&t(!1)};i.useEffect(()=>(a?document.addEventListener("mousedown",l):document.removeEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}),[a]);const u=()=>{t(d=>!d)};return e.jsxs("div",{className:R.userBarWrapper,children:[e.jsxs("button",{className:R.userBar,type:"button",name:"openPopover",onClick:u,"aria-label":"openCloseUserPanel",children:[e.jsx("div",{className:R.userBarText,children:s}),e.jsx("div",{className:R.userBarAvatar,style:{backgroundImage:`url(${o||ve})`}}),e.jsx("svg",{className:`${R.userBarIcon} ${a?R.rotate:""}`,children:e.jsx("use",{xlinkHref:`${m}#icon-chevron-down`})})]}),a&&e.jsx("div",{ref:c,children:e.jsx(Ct,{})})]})},Pt="_userPanel_iff7o_1",Lt="_userPanelTitle_iff7o_7",It="_userPanelTitleName_iff7o_18",le={userPanel:Pt,userPanelTitle:Lt,userPanelTitleName:It},$t=()=>{const s=f(Me),a=f(Pe),t=a?a.split("@")[0]:null,o=s==="User"?t:s;return e.jsxs("div",{className:le.userPanel,children:[e.jsxs("h1",{className:le.userPanelTitle,children:["Привіт,",e.jsx("span",{className:le.userPanelTitleName,children:o})]}),e.jsx(Mt,{name:s})]})},Rt=["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"],Ft=s=>{const a=new Date;return{isToday:a.getFullYear()===s.getFullYear()&&a.getMonth()===s.getMonth()&&a.getDate()===s.getDate(),day:s.getDate(),month:Rt[s.getMonth()]}},Ht="_selectedDate_1knrw_1",Vt={selectedDate:Ht},Et=()=>{const{date:s}=Y(),{isToday:a,day:t,month:o}=Ft(X(s)),c=a?"Сьогодні":`${t} ${o}`;return e.jsx("h3",{className:Vt.selectedDate,children:c})},qt="_btnStyle_445u2_1",Ot="_iconStyle_445u2_15",Ut="_btnStyleText_445u2_31",ie={btnStyle:qt,iconStyle:Ot,btnStyleText:Ut},zt=()=>{const s=ee(),a=i.useCallback(()=>{s()},[s]),{date:t}=Y(),o=X(t).getTime(),c=i.useCallback(()=>{s(e.jsx(de,{onClose:a,operationType:"add",timestampFromUrl:o}))},[s,a,o]);return e.jsxs("button",{className:ie.btnStyle,type:"button",onClick:c,children:[e.jsx("svg",{className:ie.iconStyle,children:e.jsx("use",{xlinkHref:m+"#icon-plus"})}),e.jsx("span",{className:ie.btnStyleText,children:"Додати воду"})]})},Gt=s=>{const a=new Date(Number(s));let t=a.getHours();const o=a.getMinutes(),c=t>=12?"PM":"AM";t>=12&&(t=t%12,t=t||12);const l=t.toString().padStart(2,"0"),u=o.toString().padStart(2,"0");return`${l}:${u} ${c}`},Jt=s=>s>=1e3?{value:s/1e3,text:"л"}:{value:s,text:"мл"},Yt="_btnDelete_19mt5_1",Xt={btnDelete:Yt},Qt=({isLoading:s,handleDelete:a})=>e.jsx("button",{type:"button",className:Xt.btnDelete,onClick:()=>a(),disabled:s,children:"Видалити"}),Zt="_modal_z4bq9_1",Kt="_closeBtn_z4bq9_16",ea="_svg_z4bq9_35",sa="_modalTextBox_z4bq9_40",ta="_modalTitle_z4bq9_50",aa="_modalText_z4bq9_40",na="_modalBtnBox_z4bq9_70",oa="_btnCancel_z4bq9_80",k={modal:Zt,closeBtn:Kt,svg:ea,modalTextBox:sa,modalTitle:ta,modalText:aa,modalBtnBox:na,btnCancel:oa},ra=({id:s,onClose:a})=>{const t=V(),[o,c]=i.useState(!1),l=()=>{const d=setTimeout(()=>{a(),clearTimeout(d)},pe.DURATION)},u=()=>{c(()=>!0),t(Le(s)).then(({error:d})=>{d?console.error("Помилка видалення запису:",d):l(),c(!1)})};return e.jsxs("div",{className:k.modal,children:[e.jsx("button",{type:"button","aria-label":"closeDeleteEntryModal",onClick:l,className:k.closeBtn,children:e.jsx("svg",{className:k.svg,children:e.jsx("use",{xlinkHref:m+"#icon-x"})})}),e.jsxs("div",{className:k.modalTextBox,children:[e.jsx("h2",{className:k.modalTitle,children:"Видалити запис"}),e.jsx("p",{className:k.modalText,children:"Ви дійсно хочете видалити запис ?"})]}),e.jsx("div",{className:k.modalBtnBox,children:o?e.jsx(J,{height:80,width:80}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:l,className:k.btnCancel,children:"Відміна"}),e.jsx(Qt,{handleDelete:u,id:s})]})})]})},ca="_waterItemContent_1msly_1",la="_waterInfo_1msly_12",ia="_waterAmount_1msly_15",da="_waterDate_1msly_22",ma="_iconWaterGlass_1msly_28",ua="_editButton_1msly_40",xa="_deleteButton_1msly_41",ha="_containerButtons_1msly_53",_a="_iconAction_1msly_59",w={waterItemContent:ca,waterInfo:la,waterAmount:ia,waterDate:da,iconWaterGlass:ma,editButton:ua,deleteButton:xa,containerButtons:ha,iconAction:_a},pa=({water:s})=>{const a=ee(),t=i.useCallback(()=>{a()},[a]),o=i.useCallback(()=>{a(e.jsx(ra,{id:s.id,onClose:t}))},[a,t,s]),c=i.useCallback(()=>{a(e.jsx(de,{water:s,onClose:t,operationType:"edit"}))},[a,t,s]),l=Jt(s.amount);return e.jsxs("div",{className:w.waterItemContent,children:[e.jsx("svg",{className:w.iconWaterGlass,width:"44",height:"45",children:e.jsx("use",{xlinkHref:m+"#icon-glass"})}),e.jsxs("div",{className:w.waterInfo,children:[e.jsx("p",{className:w.waterAmount,children:`${l.value} ${l.text}`}),e.jsx("p",{className:w.waterDate,children:Gt(s.date)})]}),e.jsxs("div",{className:w.containerButtons,children:[e.jsx("button",{className:w.editButton,onClick:c,"aria-label":"Edit the entered amount of water",children:e.jsx("svg",{className:w.iconAction,width:"14",height:"14",children:e.jsx("use",{xlinkHref:m+"#icon-edit"})})}),e.jsx("button",{className:w.deleteButton,onClick:o,"aria-label":"Delete the entered amount of water",children:e.jsx("svg",{className:w.iconAction,width:"14",height:"14",children:e.jsx("use",{xlinkHref:m+"#icon-trash"})})})]})]})},ga="_waterList_nhslc_1",ja="_messageContainer_nhslc_12",ba="_noWater_nhslc_21",fa="_skeleton_nhslc_68",Na="_shimmer_nhslc_1",z={waterList:ga,messageContainer:ja,noWater:ba,skeleton:fa,shimmer:Na},va=()=>{const s=f(Oe);return f(Ue)?e.jsx("div",{className:z.waterList,children:[1,2,3].map(t=>e.jsx("div",{className:z.skeleton},t))}):s.length?e.jsx("ul",{className:z.waterList,children:s.map(t=>e.jsx("li",{children:e.jsx(pa,{water:t})},t.id))}):e.jsx("div",{className:z.messageContainer,children:e.jsx("h2",{className:z.noWater,children:"Вода ще не додана"})})},Ba="_info_1c4or_1",Ta="_header_1c4or_13",wa="_title_1c4or_21",Ca="_button_1c4or_36",Aa="_icon_1c4or_60",ya="_iconBackground_1c4or_83",xe={info:Ba,header:Ta,title:wa,button:Ca,icon:Aa,iconBackground:ya},Wa=()=>e.jsxs("div",{className:xe.info,children:[e.jsxs("div",{className:xe.header,children:[e.jsx(Et,{}),e.jsx(zt,{})]}),e.jsx(va,{})]}),ka=({title:s,styles:a})=>e.jsx("span",{className:a,children:s}),Sa=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень"," Жовтень"," Листопад","Грудень"],Da="_btn_11ww4_1",Ma="_btnDisabled_11ww4_13",Pa="_svgSchedule_11ww4_17",La="_svgPie_11ww4_18",Ia="_calendarTitle_11ww4_28",$a="_month_11ww4_39",Ra="_monthInd_11ww4_46",Fa="_monthYear_11ww4_69",Ha="_statisticBtn_11ww4_76",Va="_svgArrowLeft_11ww4_86",Ea="_svgArrowRight_11ww4_87",qa="_isHidden_11ww4_98",b={btn:Da,btnDisabled:Ma,svgSchedule:Pa,svgPie:La,calendarTitle:Ia,month:$a,monthInd:Ra,monthYear:Fa,statisticBtn:Ha,svgArrowLeft:Va,svgArrowRight:Ea,isHidden:qa},Oa=()=>{const s=V(),{date:a}=Y(),t=X(a),[o,c]=i.useState(new Date(t).getFullYear()),[l,u]=i.useState(new Date(t).getMonth()),d=f(ze),g=Ie().pathname.split("/").pop(),N=()=>{if(l===11){s(G(new Date(o+1,0,4).getTime())),u(0),c(o+1);return}s(G(new Date(o,l+1,4).getTime())),u(l+1)},j=()=>{if(l===0){s(G(new Date(o-1,11,4).getTime())),u(11),c(o-1);return}s(G(new Date(o,l-1,4).getTime())),u(l-1)},D=Sa[l],h=g==="schedule"?"Статистика":"Місяць",M=new Date(Date.now()).getFullYear(),A=new Date(Date.now()).getMonth(),P=new Date(M,A)<=new Date(o,l);return e.jsxs("div",{className:b.calendarTitle,children:[e.jsx(ka,{title:h,styles:b.month}),e.jsxs("div",{className:b.monthInd,children:[e.jsx("button",{onClick:j,className:b.btn,disabled:d,children:e.jsx("svg",{className:b.svgArrowLeft,children:e.jsx("use",{xlinkHref:`${m}#icon-arrow`})})}),e.jsx("span",{className:b.monthYear,children:`${D}, ${o}`}),e.jsx("button",{onClick:N,className:`${b.btn} ${P?b.btnDisabled:""} `,disabled:d||P,children:e.jsx("svg",{className:b.svgArrowRight,children:e.jsx("use",{xlinkHref:`${m}#icon-arrow`})})}),e.jsx(me,{to:"calendar",className:({isActive:y})=>H(b.statisticBtn,{[b.isHidden]:y}),children:e.jsx("svg",{className:b.svgSchedule,children:e.jsx("use",{xlinkHref:`${m}#icon-pie-chart`})})}),e.jsx(me,{to:"schedule",className:({isActive:y})=>H(b.statisticBtn,{[b.isHidden]:y}),children:e.jsx("svg",{className:b.svgPie,children:e.jsx("use",{xlinkHref:`${m}#icon-pie-chart`})})})]})]})},Ua=()=>e.jsxs("div",{children:[e.jsx(Oa,{}),e.jsx(i.Suspense,{fallback:e.jsx(qe,{}),children:e.jsx($e,{})})]}),za="_waterDetailedInfo_199e5_1",Ga={waterDetailedInfo:za},Ja=()=>e.jsxs("section",{className:Ga.waterDetailedInfo,children:[e.jsx($t,{}),e.jsx(Wa,{}),e.jsx(Ua,{})]}),Ya="_waterPage_16oaj_1",Xa="_registerPageRight_16oaj_8",Qa={waterPage:Ya,registerPageRight:Xa},an=()=>{const{date:s}=Y(),a=X(s).getTime(),t=V(),[o,c]=i.useState(!0);return i.useEffect(()=>{if(o){const l=Date.now();t(Re()),t(Fe(a)),t(G(a)),t(He(l)),c(!1)}},[o,a,t]),e.jsxs("div",{className:Qa.waterPage,children:[e.jsx(ks,{}),e.jsx(Ja,{})]})};export{an as default};
