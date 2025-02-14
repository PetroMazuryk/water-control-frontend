import{r as i,M as ke,j as e,b as R,g as I,k as We,m as Se,n as Q,i as De,A as _e,o as Me,u as T,p as je,q as Pe,t as be,v as $e,w as Le,f as fe,x as Ie,y as Ne,z as Re,B as Fe,C as He,D as Ve,E as Ee,F as Ue,G as qe,H as Oe,N as pe,I as X,O as ze,J as Ge,K as Je,P as Ye}from"./index-9f80e5c3.js";import{p as Z}from"./parseDate-629c4fe8.js";import{s as _,u as F,L as Xe}from"./sprite-d153c013.js";import{$ as Qe,c as ve,a as Te,d as te,u as Be,o as we,C as U,L as Ze}from"./Loader-cb5c60d2.js";import{L as Ke}from"./LangSwitch-79f6b9b7.js";const K=()=>i.useContext(ke),q=({width:t,height:s})=>e.jsx(Qe,{visible:!0,height:s,width:t,ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#9be1a0","#f0eff4","#ffffffea","#87d28d","#323f47"]}),es="_WaterForm_1jleh_1",ss="_FormHeader_1jleh_13",ts="_AmountOfWater_1jleh_25",as="_TapAddWaterWrapper_1jleh_36",ns="_TapAddWater_1jleh_36",os="_TapAddWaterValue_1jleh_88",rs="_RecordingTimeLabel_1jleh_104",cs="_RecordingTime_1jleh_104",ls="_WaterValueLabel_1jleh_136",is="_WaterValue_1jleh_136",ds="_SaveBtn_1jleh_177",j={WaterForm:es,FormHeader:ss,AmountOfWater:ts,TapAddWaterWrapper:as,TapAddWater:ns,TapAddWaterValue:os,RecordingTimeLabel:rs,RecordingTime:cs,WaterValueLabel:ls,WaterValue:is,SaveBtn:ds,Error:"_Error_1jleh_213"},ms=({operationType:t="add",editTime:s,waterPortion:a,waterID:o,handleClose:c})=>{const[r,m]=i.useState(a),u=R(),[A,h]=i.useState(!1),N=new Date(s),p=N.getFullYear(),d=String(N.getMonth()+1).padStart(2,"0"),x=String(N.getDate()).padStart(2,"0"),v=t==="add"?new Date:N,B=String(v.getHours()).padStart(2,"0"),y=String(v.getMinutes()).padStart(2,"0"),[M,ae]=i.useState(B),[H,O]=i.useState(y),z=ve().shape({recordingTime:Te().required("recordTimeRequired").matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,"invalidTimeFormat"),waterValue:te().required("waterValueRequired").min(50,"waterValueGreater").max(5e3,"waterValueLess")}),{control:l,handleSubmit:w,setValue:g,formState:{errors:L}}=Be({resolver:we(z),defaultValues:{recordingTime:`${M}:${H}`,waterValue:r.toString()}}),ne=C=>{const ee=new Date(`${p}-${d}-${x}T${M}:${H}:00`).getTime().toString(),ce={amount:C.waterValue,date:ee},ye={amount:C.waterValue,date:ee};switch(h(!0),t){case"add":u(Se(ce)).then(({error:le})=>{le?h(!1):(h(!1),c())});break;case"edit":u(We({id:o,formData:ye})).then(({error:le})=>{le?h(!1):(h(!1),c())});break;default:h(!1);break}},oe=C=>{switch(C){case"add":return e.jsx("p",{className:j.FormHeader,children:"Оберіть значення:"});case"edit":return e.jsx("p",{className:j.FormHeader,children:"Виправити дані:"});default:return e.jsx("p",{className:j.FormHeader,children:"Оберіть значення:"})}},k=C=>{m(C),g("waterValue",C.toString())},D=r===50,re=r===5e3;return e.jsxs("form",{className:j.WaterForm,onSubmit:w(ne),children:[oe(t),e.jsx("p",{className:j.AmountOfWater,children:"Кількість води:"}),e.jsxs("div",{className:j.TapAddWaterWrapper,children:[e.jsx("button",{type:"button",className:j.TapAddWater,onClick:()=>k(Math.max(r-50,0)),disabled:D,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:_+"#icon-minus"})})}),e.jsxs("p",{className:j.TapAddWaterValue,children:[r," ","ml"]}),e.jsx("button",{type:"button",className:j.TapAddWater,onClick:()=>k(r+50),disabled:re,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:_+"#icon-plus"})})})]}),e.jsxs("label",{className:j.RecordingTimeLabel,children:["Час запису:",e.jsx(U,{name:"recordingTime",control:l,render:({field:C})=>e.jsx("input",{...C,type:"text",className:I(j.RecordingTime),placeholder:"HH:MM",onChange:G=>{const[ee,ce]=G.target.value.split(":");ae(ee),O(ce),C.onChange(G)}})}),L.recordingTime&&e.jsx("p",{className:j.Error,children:L.recordingTime.message})]}),e.jsxs("label",{className:j.WaterValueLabel,children:["Введіть обєм води:",e.jsx(U,{name:"waterValue",control:l,render:({field:C})=>e.jsx("input",{...C,type:"number",value:r||"",onChange:G=>k(Number(G.target.value)),className:j.WaterValue})}),L.waterValue&&e.jsx("p",{className:j.Error,children:L.waterValue.message})]}),e.jsx("button",{type:"submit",className:j.SaveBtn,disabled:A,children:A?e.jsx(q,{height:44,width:44}):"Зберегти"})]})},us={DURATION:15},xs="_WaterModal_198kh_1",_s="_WaterModalCloseBtn_198kh_22",ge={WaterModal:xs,WaterModalCloseBtn:_s},he=({operationType:t,onClose:s,water:a={},timestampFromUrl:o=""})=>{const c=()=>{const p=setTimeout(()=>{s(),clearTimeout(p)},us.DURATION)},r=p=>{switch(p){case"add":return"Додавання води";case"edit":return"Редагувати кількість води";default:return"Додавання води"}},m=Number(o),u=Number(a.date),A=p=>{switch(p){case"add":return m;case"edit":return u}},h=p=>{switch(p){case"add":return 50;case"edit":return a.amount;default:return 50}},N=p=>{switch(p){case"add":return null;case"edit":return a.id;default:return null}};return e.jsxs("div",{className:ge.WaterModal,children:[e.jsx("h1",{children:r(t)}),e.jsx(ms,{operationType:t,editTime:A(t),waterPortion:h(t),waterID:N(t),handleClose:c}),e.jsx("button",{type:"button",onClick:c,"aria-label":"closeWaterModal",className:ge.WaterModalCloseBtn,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${_}#icon-x`})})})]})},hs="_btnAdd_zsldf_1",ps="_btnText_zsldf_14",gs="_plus_zsldf_15",ie={btnAdd:hs,btnText:ps,plus:gs},js=()=>{const{t}=F(),s=K(),{date:a}=Q(),o=Z(a),c=i.useCallback(()=>{s()},[s]),r=i.useCallback(()=>{s(e.jsx(he,{onClose:c,operationType:"add",timestampFromUrl:o}))},[s,c,o]);return e.jsxs("button",{type:"button",className:ie.btnAdd,onClick:r,children:[e.jsx("svg",{className:ie.plus,children:e.jsx("use",{xlinkHref:`${_}#icon-plus`})}),e.jsx("h2",{className:ie.btnText,children:t("addWater")})]})},bs="_modal_10779_1",fs="_closeBtn_10779_16",Ns="_svg_10779_35",vs="_modalTextBox_10779_40",Ts="_modalTitle_10779_50",Bs="_modalText_10779_40",ws="_modalBtnBox_10779_70",Cs="_userCountItem_10779_80",As="_like_10779_94",ys="_likeActive_10779_105",ks="_loaderWrapper_10779_110",Ws="_btnCancel_10779_156",W={modal:bs,closeBtn:fs,svg:Ns,modalTextBox:vs,modalTitle:Ts,modalText:Bs,modalBtnBox:ws,userCountItem:Cs,like:As,likeActive:ys,loaderWrapper:ks,btnCancel:Ws},Ss=({onClose:t,currentAccess:s})=>{const a=R(),[o,c]=i.useState({}),[r,m]=i.useState([]),[u,A]=i.useState(s),h="admin2006@gmail.com";i.useEffect(()=>{async function d(){try{const x=await De();m(x.data.users),A(!u)}catch(x){console.log(x.message)}}d()},[]);const N=()=>{const d=setTimeout(()=>{t(),clearTimeout(d)},_e.DURATION)},p=async(d,x)=>{try{c(B=>({...B,[d]:!0}));const v=await a(Me({id:d,access:!x}));v.error?console.error("Помилка оновлення доступу:",v.error):m(B=>B.map(y=>y.id===d?{...y,access:!x}:y))}catch(v){console.error("Щось пішло не так:",v)}finally{c(v=>({...v,[d]:!1}))}};return e.jsxs("div",{className:W.modal,children:[e.jsx("button",{type:"button","aria-label":"closeDeleteEntryModal",onClick:N,className:W.closeBtn,children:e.jsx("svg",{className:W.svg,children:e.jsx("use",{xlinkHref:_+"#icon-x"})})}),e.jsxs("div",{className:W.modalTextBox,children:[e.jsx("h2",{className:W.modalTitle,children:"Список усіх користувачів"}),r.length>0?e.jsx("ul",{className:W.userCountList,children:r.filter(d=>d.email!==h).map(d=>e.jsxs("li",{className:W.userCountItem,children:[e.jsx("p",{children:d.email}),e.jsx("div",{className:W.loaderWrapper,children:o[d.id]?e.jsx(q,{height:30,width:30}):e.jsx("button",{children:e.jsx("svg",{onClick:()=>p(d.id,d.access),className:`${W.like} ${d.access?W.likeActive:""}`,children:e.jsx("use",{href:`${_}#icon-heart`})})})})]},d.id))}):e.jsx("p",{children:"Користувачі не знайдені."})]})]})},Ds="_btnAdd_a3w66_1",Ms="_btnText_a3w66_15",Ps="_plus_a3w66_16",de={btnAdd:Ds,btnText:Ms,plus:Ps},$s=()=>{const{t}=F(),s=K(),a=i.useCallback(()=>{s(e.jsx(Ss,{onClose:()=>s(null)}))},[s]);return e.jsxs("button",{type:"button",className:de.btnAdd,onClick:a,children:[e.jsx("svg",{className:de.plus,children:e.jsx("use",{xlinkHref:`${_}#icon-admin`})}),e.jsx("h2",{className:de.btnText,children:t("adminBtn")})]})},Ls=["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"],Is=t=>{const s=new Date;return{isToday:s.getFullYear()===t.getFullYear()&&s.getMonth()===t.getMonth()&&s.getDate()===t.getDate(),day:t.getDate(),month:Ls[t.getMonth()]}},Rs="_selectedDate_14sit_1",Fs={selectedDate:Rs},Ce=({className:t})=>{const{t:s}=F(),{date:a}=Q(),{isToday:o,day:c,month:r}=Is(Z(a)),m=o?s("today"):`${c} ${r}`;return e.jsx("p",{className:I(Fs.selectedDate,t),children:m})},Hs="_progressBarContainer_v5cic_1",Vs="_progressBarTitle_v5cic_14",Es="_progressBar_v5cic_1",Us="_progressBarFill_v5cic_29",qs="_belowAim_v5cic_38",Os="_aboveAim_v5cic_44",zs="_belowAimRate_v5cic_50",Gs="_aboveAimRate_v5cic_54",Js="_ball_v5cic_58",Ys="_percentNumber_v5cic_69",Xs="_percentContainer_v5cic_79",Qs="_percent_v5cic_69",b={progressBarContainer:Hs,progressBarTitle:Vs,progressBar:Es,progressBarFill:Us,belowAim:qs,aboveAim:Os,belowAimRate:zs,aboveAimRate:Gs,ball:Js,percentNumber:Ys,percentContainer:Xs,percent:Qs},Zs=()=>{const t=T(je),a=(r=>!r||r.length===0?0:r.reduce((m,u)=>{const A=u.percentage||0;return m+A},0))(t),o=a<100,c=Math.min(Math.max(a,0),100);return e.jsxs("div",{className:b.progressBarContainer,children:[e.jsx("h3",{className:b.progressBarTitle,children:e.jsx(Ce,{})}),e.jsx("div",{className:b.progressBar,children:e.jsxs("div",{className:I(b.progressBarFill,{[b.belowAim]:o,[b.aboveAim]:!o}),style:{width:`${c}%`},children:[e.jsx("p",{className:I(b.percentNumber,{[b.belowAimRate]:o,[b.aboveAimRate]:!o}),children:a>=100?"Норма":`${a.toFixed(0)}%`}),e.jsx("div",{className:I(b.ball,{[b.belowAim]:a<100,[b.aboveAim]:a>=100})})]})}),e.jsxs("div",{className:b.percentContainer,children:[e.jsx("p",{className:b.percent,children:"0%"}),e.jsx("p",{className:b.percent,children:"50%"}),e.jsx("p",{className:b.percent,children:"100%"})]})]})},Ks="_waterContainer_szgl7_1",et="_normaContainer_szgl7_16",st="_normaL_szgl7_28",tt="_normaText_szgl7_35",at="_waterTitle_szgl7_53",J={waterContainer:Ks,normaContainer:et,normaL:st,normaText:tt,waterTitle:at},nt=()=>{const{t}=F(),s=T(Pe),a=T(be),o="admin2006@gmail.com",c=s<1?`${s*1e3} ${t("ml")}`:`${s} ${t("l")}`;return e.jsxs("div",{className:J.waterContainer,children:[e.jsx(Xe,{className:J.waterTitle}),s===0?"":e.jsxs("div",{className:J.normaContainer,children:[e.jsx("h2",{className:J.normaL,children:c}),e.jsx("p",{className:J.normaText,children:t("dailyNorm")})]}),s===0?"":e.jsx(Zs,{}),s===0?"":e.jsx(js,{}),a===o&&e.jsx($s,{})]})},ot="_btnLogout_1xwlm_1",rt={btnLogout:ot},ct=({handleClose:t})=>{const s=R(),a=$e(),o=()=>{s(Le()).then(({error:c})=>{c||(a("/"),t())})};return e.jsx("button",{type:"button",onClick:o,className:rt.btnLogout,children:"Вийти"})},lt="_modal_1spmq_1",it="_closeBtn_1spmq_16",dt="_svg_1spmq_35",mt="_modalTextBox_1spmq_40",ut="_modalTitle_1spmq_50",xt="_modalText_1spmq_40",_t="_modalBtnBox_1spmq_70",ht="_btnCancel_1spmq_80",P={modal:lt,closeBtn:it,svg:dt,modalTextBox:mt,modalTitle:ut,modalText:xt,modalBtnBox:_t,btnCancel:ht},pt=({onClose:t})=>{const s=T(fe),a=()=>{const o=setTimeout(()=>{t(),clearTimeout(o)},_e.DURATION)};return e.jsxs("div",{className:P.modal,children:[e.jsx("button",{type:"button","aria-label":"closeLogOutModal",onClick:a,className:P.closeBtn,children:e.jsx("svg",{className:P.svg,children:e.jsx("use",{xlinkHref:`${_}#icon-x`})})}),e.jsxs("div",{className:P.modalTextBox,children:[e.jsx("h2",{className:P.modalTitle,children:"Вийти"}),e.jsx("p",{className:P.modalText,children:"Ви дійсно хочете вийти?"})]}),e.jsx("div",{className:P.modalBtnBox,children:s?e.jsx(q,{height:80,width:80}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:a,className:P.btnCancel,children:"Скасувати"}),e.jsx(ct,{handleClose:a})]})})]})},Ae="data:image/png;base64,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",gt="_userAvatar_1fnxk_1",jt="_loader_1fnxk_20",bt="_uploadContainer_1fnxk_28",ft="_icon_1fnxk_36",Nt="_ordinaryText_1fnxk_49",vt="_hideBtn_1fnxk_72",Tt="_userSettingForm_1fnxk_76",Bt="_boldText_1fnxk_95",wt="_genderContainer_1fnxk_101",Ct="_radioContainer_1fnxk_106",At="_radioInput_1fnxk_116",yt="_userPreferences_1fnxk_141",kt="_formNameEmail_1fnxk_147",Wt="_formWeightTime_1fnxk_152",St="_formula_1fnxk_165",Dt="_inputBox_1fnxk_169",Mt="_formulaDescription_1fnxk_193",Pt="_formulaExpression_1fnxk_207",$t="_temporarySymbol_1fnxk_221",Lt="_formulaDescriptionText_1fnxk_231",It="_submitBtn_1fnxk_235",Rt="_loaderWrapper_1fnxk_259",Ft="_boldTextBtn_1fnxk_266",Ht="_consumeWater_1fnxk_273",Vt="_userNorma_1fnxk_280",Et="_langButton_1fnxk_288",Ut="_errorMessage_1fnxk_298",n={userAvatar:gt,loader:jt,uploadContainer:bt,icon:ft,ordinaryText:Nt,hideBtn:vt,userSettingForm:Tt,boldText:Bt,genderContainer:wt,radioContainer:Ct,radioInput:At,userPreferences:yt,formNameEmail:kt,formWeightTime:Wt,formula:St,inputBox:Dt,formulaDescription:Mt,formulaExpression:Pt,temporarySymbol:$t,formulaDescriptionText:Lt,submitBtn:It,loaderWrapper:Rt,boldTextBtn:Ft,consumeWater:Ht,userNorma:Vt,langButton:Et,errorMessage:Ut},qt=({handleClose:t})=>{const s=R(),a=T(Ie),o=T(Ne),[c,r]=i.useState(0),m=T(fe),u=T(Re),A=ve({name:Te().min(2,"Назва має містити не менше 2 символів").max(60,"Максимальна кількість символів імені 60").required("Імя обовязково"),weight:te().min(0).max(300,"Вага значення менше 300").typeError("Має бути числом"),dailyActiveTime:te().min(0).max(12,"Час активного спорту").typeError("Має бути числом"),dailyWaterConsumption:te().min(0).max(8,"Добове споживання води максимум 8 л").typeError("Має бути числом")}),{control:h,register:N,handleSubmit:p,watch:d,formState:{errors:x}}=Be({resolver:we(A),defaultValues:{email:a.email,gender:a.gender,name:a.name,weight:a.weight,dailyActiveTime:a.dailyActiveTime,dailyWaterConsumption:a.dailyWaterConsumption},mode:"onChange"}),v=d("weight"),B=d("gender"),y=d("dailyActiveTime");i.useEffect(()=>{let l;const w=parseInt(v||0),g=parseInt(y||0);B==="woman"?l=w*.03+g*.4:l=w*.04+g*.6,r(Math.min(parseFloat(l),8).toFixed(2))},[y,B,v]);const M=l=>{const{photo:w,...g}=a;/\s$/.test(l.name)&&(l.name=l.name.trim());const ne=Object.keys(g).sort().reduce((k,D)=>(k[D]=g[D],k),{}),oe=Object.keys(l).sort().reduce((k,D)=>(k[D]=l[D],k),{});if(JSON.stringify(ne)!==JSON.stringify(oe)){const{email:k,...D}=l;s(Fe(D)).then(({error:re})=>{re||t()})}else t()},ae=l=>{const w=new FormData,g=l.target.files[0];g&&(w.append("avatar",g),s(He(w)))},H=l=>w=>{let g=w.target.value;(g===""||/^(\d+(\.\d{0,3})?|\.\d{1,3})$/.test(g))&&l.onChange(g)},O=l=>()=>{l.value===0&&l.onChange("")},z=l=>()=>{l.value===""?l.onChange(0):l.value.startsWith(".")&&l.onChange("0"+l.value)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:n.userAvatar,children:[u?e.jsx("div",{className:n.loader,children:e.jsx(q,{})}):e.jsx("img",{src:o||`${Ae}`,alt:"User photo"}),e.jsxs("label",{children:[e.jsxs("div",{className:n.uploadContainer,children:[e.jsx("svg",{className:n.icon,children:e.jsx("use",{xlinkHref:`${_}#icon-upload`})}),e.jsx("span",{className:n.ordinaryText,children:"Завантажити фото"})]}),e.jsx("input",{className:n.hideBtn,type:"file",accept:"image/*",onChange:ae}),x.avatar&&e.jsx("p",{children:x.avatar.message})]})]}),e.jsxs("form",{onSubmit:p(M),className:n.userSettingForm,children:[e.jsx("div",{className:n.genderContainer,children:e.jsxs("label",{className:n.genderIdentity,children:[e.jsx("span",{className:n.boldText,children:"Ваша стать"}),e.jsxs("div",{className:n.radioContainer,children:[e.jsx("input",{type:"radio",id:"woman",className:n.radioInput,...N("gender"),value:"woman",checked:B==="woman"}),e.jsx("label",{htmlFor:"woman",className:n.ordinaryText,children:"Жіноче"}),e.jsx("input",{type:"radio",id:"man",className:n.radioInput,...N("gender"),value:"man",checked:B==="man"}),e.jsx("label",{htmlFor:"man",className:n.ordinaryText,children:"Чоловіче"})]}),x.gender&&e.jsx("p",{className:n.errorMessage,children:x.gender.message})]})}),e.jsxs("div",{className:n.userPreferences,children:[e.jsxs("div",{className:n.formNameEmail,children:[e.jsxs("label",{children:[e.jsx("span",{className:n.boldText,children:"Ваше ім'я"}),e.jsx(U,{render:({field:l})=>e.jsx("input",{...l,className:n.inputBox,placeholder:"Користувач",onChange:w=>{let g=w.target.value;/^\s|\s{2}$/.test(g)||l.onChange(g)}}),name:"name",control:h}),x.name&&e.jsx("p",{className:n.errorMessage,children:x.name.message})]}),e.jsxs("label",{children:[e.jsx("span",{className:n.boldText,children:"Пошта"}),e.jsx("input",{disabled:!0,...N("email"),className:n.inputBox,placeholder:"placeholderEmail"})]}),e.jsxs("div",{className:n.formula,children:[e.jsx("p",{className:n.boldText,children:"Моя щоденна норма"}),e.jsxs("div",{className:n.formulaDescription,children:[e.jsxs("p",{className:n.ordinaryText,children:[e.jsx("span",{children:"Для жінок: "}),e.jsx("span",{className:n.formulaExpression,children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{className:n.ordinaryText,children:[e.jsx("span",{children:"Для чоловіків: "}),e.jsx("span",{className:n.formulaExpression,children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsxs("p",{className:n.ordinaryText,children:[e.jsx("span",{className:n.formulaExpression,children:"* "}),e.jsx("span",{className:n.formulaDescriptionText,children:"* V - об'єм водної норми в літрах на день, М - ваша вага, Т - час активних занять спортом або іншої активної діяльності (у разі відсутності встановіть 0)"})]}),e.jsxs("p",{className:n.ordinaryText,children:[e.jsx("span",{className:n.temporarySymbol,children:"! "}),"Активний час (години)"]})]})]}),e.jsxs("div",{className:n.formWeightTime,children:[e.jsxs("label",{children:[e.jsx("span",{className:n.ordinaryText,children:"Ваша вага (кг):"}),e.jsx(U,{name:"weight",control:h,render:({field:l})=>e.jsx("input",{...l,className:n.inputBox,onChange:H(l),onFocus:O(l),onBlur:z(l)})}),x.weight&&e.jsx("p",{className:n.errorMessage,children:x.weight.message})]}),e.jsxs("label",{children:[e.jsx("span",{className:n.ordinaryText,children:"Час активних занять спортом:"}),e.jsx(U,{name:"dailyActiveTime",control:h,render:({field:l})=>e.jsx("input",{...l,className:n.inputBox,onChange:H(l),onFocus:O(l),onBlur:z(l)})}),x.dailyActiveTime&&e.jsx("p",{className:n.errorMessage,children:x.dailyActiveTime.message})]}),e.jsxs("div",{className:n.consumeWater,children:[e.jsxs("p",{className:n.ordinaryText,children:["Потрібна кількість води в літрах на день:  ",e.jsxs("span",{className:n.userNorma,children:[isNaN(c)?0:c," L"]})]}),e.jsxs("label",{children:[e.jsx("span",{className:n.boldText,children:"Запишіть, скільки води ви вип'єте:"}),e.jsx(U,{name:"dailyWaterConsumption",control:h,render:({field:l})=>e.jsx("input",{...l,className:n.inputBox,onChange:H(l),onFocus:O(l),onBlur:z(l)})}),x.dailyWaterConsumption&&e.jsx("p",{className:n.errorMessage,children:x.dailyWaterConsumption.message})]})]})]})]}),e.jsxs("button",{disabled:m,type:"submit",className:`${n.submitBtn} ${n.boldTextBtn}`,children:["Зберегти",m&&e.jsx("div",{className:n.loaderWrapper,children:e.jsx(q,{height:56,width:56})})]})]})]})},Ot="_modalSettingContainer_1md4x_1",zt="_modalHeader_1md4x_14",Gt="_closeBtn_1md4x_29",Jt="_icon_1md4x_44",se={modalSettingContainer:Ot,modalHeader:zt,closeBtn:Gt,icon:Jt},Yt=({onClose:t})=>e.jsxs("div",{className:se.modalSettingContainer,children:[e.jsxs("div",{className:se.modalHeader,children:[e.jsx("h2",{children:"Налаштування"}),e.jsx(Ke,{}),e.jsx("button",{type:"button","aria-label":"closeSettingModal",className:se.closeBtn,onClick:t,children:e.jsx("svg",{className:se.icon,children:e.jsx("use",{xlinkHref:_+"#icon-x"})})})]}),e.jsx(qt,{handleClose:t})]}),Xt="_userBarPopup_1ap7q_1",Qt="_userBarPopupList_1ap7q_16",Zt="_userBarPopupListItem_1ap7q_23",Kt="_userBarPopupIcon_1ap7q_40",V={userBarPopup:Xt,userBarPopupList:Qt,userBarPopupListItem:Zt,userBarPopupIcon:Kt},ea=()=>{const{t}=F(),s=K(),a=i.useCallback(()=>{s()},[s]),o=i.useCallback(()=>{s(e.jsx(Yt,{onClose:a}))},[s,a]),c=i.useCallback(()=>{s(e.jsx(pt,{onClose:a}))},[s,a]);return e.jsx("div",{className:V.userBarPopup,children:e.jsxs("ul",{className:V.userBarPopupList,children:[e.jsxs("li",{className:V.userBarPopupListItem,onClick:o,children:[e.jsx("svg",{className:V.userBarPopupIcon,children:e.jsx("use",{xlinkHref:`${_}#icon-settings`})}),t("settingLink")]}),e.jsxs("li",{className:V.userBarPopupListItem,onClick:c,children:[e.jsx("svg",{className:V.userBarPopupIcon,children:e.jsx("use",{xlinkHref:`${_}#icon-log-out`})}),t("logout")]})]})})},sa="_userBarWrapper_1k17p_1",ta="_userBar_1k17p_1",aa="_userBarText_1k17p_24",na="_userBarAvatar_1k17p_32",oa="_userBarIcon_1k17p_44",ra="_rotate_1k17p_56",E={userBarWrapper:sa,userBar:ta,userBarText:aa,userBarAvatar:na,userBarIcon:oa,rotate:ra},ca=({name:t})=>{const[s,a]=i.useState(!1),o=T(Ne),c=i.useRef(null),r=u=>{c.current&&!c.current.contains(u.target)&&u.target.name!=="openPopover"&&a(!1)};i.useEffect(()=>(s?document.addEventListener("mousedown",r):document.removeEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}),[s]);const m=()=>{a(u=>!u)};return e.jsxs("div",{className:E.userBarWrapper,children:[e.jsxs("button",{className:E.userBar,type:"button",name:"openPopover",onClick:m,"aria-label":"openCloseUserPanel",children:[e.jsx("div",{className:E.userBarText,children:t}),e.jsx("div",{className:E.userBarAvatar,style:{backgroundImage:`url(${o||Ae})`}}),e.jsx("svg",{className:`${E.userBarIcon} ${s?E.rotate:""}`,children:e.jsx("use",{xlinkHref:`${_}#icon-chevron-down`})})]}),s&&e.jsx("div",{ref:c,children:e.jsx(ea,{})})]})},la="_userPanel_iff7o_1",ia="_userPanelTitle_iff7o_7",da="_userPanelTitleName_iff7o_18",me={userPanel:la,userPanelTitle:ia,userPanelTitleName:da},ma=()=>{const{t}=F(),s=T(Ve),a=T(be),o=a?a.split("@")[0]:null,c=s==="User"?o:s;return e.jsxs("div",{className:me.userPanel,children:[e.jsxs("h1",{className:me.userPanelTitle,children:[t("hello"),e.jsx("span",{className:me.userPanelTitleName,children:c})]}),e.jsx(ca,{name:s})]})},ua="_btnStyle_445u2_1",xa="_iconStyle_445u2_15",_a="_btnStyleText_445u2_31",ue={btnStyle:ua,iconStyle:xa,btnStyleText:_a},ha=()=>{const{t}=F(),s=K(),a=i.useCallback(()=>{s()},[s]),{date:o}=Q(),c=Z(o).getTime(),r=i.useCallback(()=>{s(e.jsx(he,{onClose:a,operationType:"add",timestampFromUrl:c}))},[s,a,c]);return e.jsxs("button",{className:ue.btnStyle,type:"button",onClick:r,children:[e.jsx("svg",{className:ue.iconStyle,children:e.jsx("use",{xlinkHref:`${_}#icon-plus`})}),e.jsxs("span",{className:ue.btnStyleText,children:[" ",t("addWater")]})]})},pa=t=>{const s=new Date(Number(t));let a=s.getHours();const o=s.getMinutes(),c=a>=12?"PM":"AM";a>=12&&(a=a%12,a=a||12);const r=a.toString().padStart(2,"0"),m=o.toString().padStart(2,"0");return`${r}:${m} ${c}`},ga=t=>t>=1e3?{value:t/1e3,text:"л"}:{value:t,text:"мл"},ja="_btnDelete_19mt5_1",ba={btnDelete:ja},fa=({isLoading:t,handleDelete:s})=>e.jsx("button",{type:"button",className:ba.btnDelete,onClick:()=>s(),disabled:t,children:"Видалити"}),Na="_modal_z4bq9_1",va="_closeBtn_z4bq9_16",Ta="_svg_z4bq9_35",Ba="_modalTextBox_z4bq9_40",wa="_modalTitle_z4bq9_50",Ca="_modalText_z4bq9_40",Aa="_modalBtnBox_z4bq9_70",ya="_btnCancel_z4bq9_80",$={modal:Na,closeBtn:va,svg:Ta,modalTextBox:Ba,modalTitle:wa,modalText:Ca,modalBtnBox:Aa,btnCancel:ya},ka=({id:t,onClose:s})=>{const a=R(),[o,c]=i.useState(!1),r=()=>{const u=setTimeout(()=>{s(),clearTimeout(u)},_e.DURATION)},m=()=>{c(()=>!0),a(Ee(t)).then(({error:u})=>{u?console.error("Помилка видалення запису:",u):r(),c(!1)})};return e.jsxs("div",{className:$.modal,children:[e.jsx("button",{type:"button","aria-label":"closeDeleteEntryModal",onClick:r,className:$.closeBtn,children:e.jsx("svg",{className:$.svg,children:e.jsx("use",{xlinkHref:_+"#icon-x"})})}),e.jsxs("div",{className:$.modalTextBox,children:[e.jsx("h2",{className:$.modalTitle,children:"Видалити запис"}),e.jsx("p",{className:$.modalText,children:"Ви дійсно хочете видалити запис ?"})]}),e.jsx("div",{className:$.modalBtnBox,children:o?e.jsx(q,{height:80,width:80}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:r,className:$.btnCancel,children:"Відміна"}),e.jsx(fa,{handleDelete:m,id:t})]})})]})},Wa="_waterItemContent_1msly_1",Sa="_waterInfo_1msly_12",Da="_waterAmount_1msly_15",Ma="_waterDate_1msly_22",Pa="_iconWaterGlass_1msly_28",$a="_editButton_1msly_40",La="_deleteButton_1msly_41",Ia="_containerButtons_1msly_53",Ra="_iconAction_1msly_59",S={waterItemContent:Wa,waterInfo:Sa,waterAmount:Da,waterDate:Ma,iconWaterGlass:Pa,editButton:$a,deleteButton:La,containerButtons:Ia,iconAction:Ra},Fa=({water:t})=>{const s=K(),a=i.useCallback(()=>{s()},[s]),o=i.useCallback(()=>{s(e.jsx(ka,{id:t.id,onClose:a}))},[s,a,t]),c=i.useCallback(()=>{s(e.jsx(he,{water:t,onClose:a,operationType:"edit"}))},[s,a,t]),r=ga(t.amount);return e.jsxs("div",{className:S.waterItemContent,children:[e.jsx("svg",{className:S.iconWaterGlass,width:"44",height:"45",children:e.jsx("use",{xlinkHref:_+"#icon-glass"})}),e.jsxs("div",{className:S.waterInfo,children:[e.jsx("p",{className:S.waterAmount,children:`${r.value} ${r.text}`}),e.jsx("p",{className:S.waterDate,children:pa(t.date)})]}),e.jsxs("div",{className:S.containerButtons,children:[e.jsx("button",{className:S.editButton,onClick:c,"aria-label":"Edit the entered amount of water",children:e.jsx("svg",{className:S.iconAction,width:"14",height:"14",children:e.jsx("use",{xlinkHref:_+"#icon-edit"})})}),e.jsx("button",{className:S.deleteButton,onClick:o,"aria-label":"Delete the entered amount of water",children:e.jsx("svg",{className:S.iconAction,width:"14",height:"14",children:e.jsx("use",{xlinkHref:_+"#icon-trash"})})})]})]})},Ha="_waterList_nhslc_1",Va="_messageContainer_nhslc_12",Ea="_noWater_nhslc_21",Ua="_skeleton_nhslc_68",qa="_shimmer_nhslc_1",Y={waterList:Ha,messageContainer:Va,noWater:Ea,skeleton:Ua,shimmer:qa},Oa=()=>{const t=T(je);return T(Ue)?e.jsx("div",{className:Y.waterList,children:[1,2,3].map(a=>e.jsx("div",{className:Y.skeleton},a))}):t.length?e.jsx("ul",{className:Y.waterList,children:t.map(a=>e.jsx("li",{children:e.jsx(Fa,{water:a})},a.id))}):e.jsx("div",{className:Y.messageContainer,children:e.jsx("h2",{className:Y.noWater,children:"Вода ще не додана"})})},za="_info_iy33z_1",Ga="_dailyFont_iy33z_7",Ja="_header_iy33z_20",Ya="_title_iy33z_28",Xa="_button_iy33z_43",Qa="_icon_iy33z_67",Za="_iconBackground_iy33z_90",xe={info:za,dailyFont:Ga,header:Ja,title:Ya,button:Xa,icon:Qa,iconBackground:Za},Ka=()=>e.jsxs("div",{className:xe.info,children:[e.jsxs("div",{className:xe.header,children:[e.jsx(Ce,{className:xe.dailyFont}),e.jsx(ha,{})]}),e.jsx(Oa,{})]}),en=({title:t,styles:s})=>e.jsx("span",{className:s,children:t}),sn=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень"," Жовтень"," Листопад","Грудень"],tn="_btn_11ww4_1",an="_btnDisabled_11ww4_13",nn="_svgSchedule_11ww4_17",on="_svgPie_11ww4_18",rn="_calendarTitle_11ww4_28",cn="_month_11ww4_39",ln="_monthInd_11ww4_46",dn="_monthYear_11ww4_69",mn="_statisticBtn_11ww4_76",un="_svgArrowLeft_11ww4_86",xn="_svgArrowRight_11ww4_87",_n="_isHidden_11ww4_98",f={btn:tn,btnDisabled:an,svgSchedule:nn,svgPie:on,calendarTitle:rn,month:cn,monthInd:ln,monthYear:dn,statisticBtn:mn,svgArrowLeft:un,svgArrowRight:xn,isHidden:_n},hn=()=>{const t=R(),{date:s}=Q(),a=Z(s),[o,c]=i.useState(new Date(a).getFullYear()),[r,m]=i.useState(new Date(a).getMonth()),u=T(qe),h=Oe().pathname.split("/").pop(),N=()=>{if(r===11){t(X(new Date(o+1,0,4).getTime())),m(0),c(o+1);return}t(X(new Date(o,r+1,4).getTime())),m(r+1)},p=()=>{if(r===0){t(X(new Date(o-1,11,4).getTime())),m(11),c(o-1);return}t(X(new Date(o,r-1,4).getTime())),m(r-1)},d=sn[r],x=h==="schedule"?"Статистика":"Місяць",v=new Date(Date.now()).getFullYear(),B=new Date(Date.now()).getMonth(),y=new Date(v,B)<=new Date(o,r);return e.jsxs("div",{className:f.calendarTitle,children:[e.jsx(en,{title:x,styles:f.month}),e.jsxs("div",{className:f.monthInd,children:[e.jsx("button",{onClick:p,className:f.btn,disabled:u,children:e.jsx("svg",{className:f.svgArrowLeft,children:e.jsx("use",{xlinkHref:`${_}#icon-arrow`})})}),e.jsx("span",{className:f.monthYear,children:`${d}, ${o}`}),e.jsx("button",{onClick:N,className:`${f.btn} ${y?f.btnDisabled:""} `,disabled:u||y,children:e.jsx("svg",{className:f.svgArrowRight,children:e.jsx("use",{xlinkHref:`${_}#icon-arrow`})})}),e.jsx(pe,{to:"calendar",className:({isActive:M})=>I(f.statisticBtn,{[f.isHidden]:M}),children:e.jsx("svg",{className:f.svgSchedule,children:e.jsx("use",{xlinkHref:`${_}#icon-pie-chart`})})}),e.jsx(pe,{to:"schedule",className:({isActive:M})=>I(f.statisticBtn,{[f.isHidden]:M}),children:e.jsx("svg",{className:f.svgPie,children:e.jsx("use",{xlinkHref:`${_}#icon-pie-chart`})})})]})]})},pn=()=>e.jsxs("div",{children:[e.jsx(hn,{}),e.jsx(i.Suspense,{fallback:e.jsx(Ze,{}),children:e.jsx(ze,{})})]}),gn="_waterDetailedInfo_199e5_1",jn={waterDetailedInfo:gn},bn=()=>e.jsxs("section",{className:jn.waterDetailedInfo,children:[e.jsx(ma,{}),e.jsx(Ka,{}),e.jsx(pn,{})]}),fn="_waterPage_16oaj_1",Nn="_registerPageRight_16oaj_8",vn={waterPage:fn,registerPageRight:Nn},yn=()=>{const{date:t}=Q(),s=R(),a=Z(t).getTime(),[o,c]=i.useState(!0);return i.useEffect(()=>{if(o){const r=Date.now();s(Ge()),s(Je(a)),s(X(a)),s(Ye(r)),c(!1)}},[o,a,s]),e.jsxs("div",{className:vn.waterPage,children:[e.jsx(nt,{}),e.jsx(bn,{})]})};export{yn as default};
