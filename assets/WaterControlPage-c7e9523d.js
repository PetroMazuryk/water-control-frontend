import{r as m,M as ke,j as e,b as E,g as F,k as Se,m as De,n as Z,i as Me,A as _e,o as Pe,u as B,p as je,q as $e,t as be,v as Le,w as Ie,f as fe,x as Re,y as Ne,z as Fe,B as Ee,C as He,D as Ve,E as qe,F as Ue,G as Oe,H as ze,I as Ge,N as pe,J as Q,O as Je,K as Ye,P as Xe,Q as Qe}from"./index-5ae9bf74.js";import{p as K}from"./parseDate-629c4fe8.js";import{s as _,L as Ze}from"./sprite-16cdb9d5.js";import{$ as Ke,c as ve,a as Te,d as ae,u as Be,o as we,C as U,L as es}from"./Loader-66bb3fb5.js";import{u as j}from"./useTranslation-d4fb708d.js";import{L as ss}from"./LangSwitch-d7373ccd.js";const ee=()=>m.useContext(ke),O=({width:t,height:s})=>e.jsx(Ke,{visible:!0,height:s,width:t,ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#9be1a0","#f0eff4","#ffffffea","#87d28d","#323f47"]}),ts="_WaterForm_1jleh_1",as="_FormHeader_1jleh_13",ns="_AmountOfWater_1jleh_25",os="_TapAddWaterWrapper_1jleh_36",rs="_TapAddWater_1jleh_36",cs="_TapAddWaterValue_1jleh_88",ls="_RecordingTimeLabel_1jleh_104",is="_RecordingTime_1jleh_104",ds="_WaterValueLabel_1jleh_136",ms="_WaterValue_1jleh_136",us="_SaveBtn_1jleh_177",T={WaterForm:ts,FormHeader:as,AmountOfWater:ns,TapAddWaterWrapper:os,TapAddWater:rs,TapAddWaterValue:cs,RecordingTimeLabel:ls,RecordingTime:is,WaterValueLabel:ds,WaterValue:ms,SaveBtn:us,Error:"_Error_1jleh_213"},xs=({operationType:t="add",editTime:s,waterPortion:a,waterID:n,handleClose:o})=>{const{t:c}=j(),[i,x]=m.useState(a),h=E(),[D,p]=m.useState(!1),v=new Date(s),d=v.getFullYear(),f=String(v.getMonth()+1).padStart(2,"0"),u=String(v.getDate()).padStart(2,"0"),W=t==="add"?new Date:v,w=String(W.getHours()).padStart(2,"0"),I=String(W.getMinutes()).padStart(2,"0"),[P,ne]=m.useState(w),[H,z]=m.useState(I),G=ve().shape({recordingTime:Te().required("recordTimeRequired").matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,"invalidTimeFormat"),waterValue:ae().required("waterValueRequired").min(50,"waterValueGreater").max(5e3,"waterValueLess")}),{control:l,handleSubmit:C,setValue:g,formState:{errors:R}}=Be({resolver:we(G),defaultValues:{recordingTime:`${P}:${H}`,waterValue:i.toString()}}),oe=A=>{const se=new Date(`${d}-${f}-${u}T${P}:${H}:00`).getTime().toString(),ce={amount:A.waterValue,date:se},We={amount:A.waterValue,date:se};switch(p(!0),t){case"add":h(De(ce)).then(({error:le})=>{le?p(!1):(p(!1),o())});break;case"edit":h(Se({id:n,formData:We})).then(({error:le})=>{le?p(!1):(p(!1),o())});break;default:p(!1);break}},re=A=>e.jsx("p",{className:T.FormHeader,children:c(A==="edit"?"correctData":"chooseValue")}),y=A=>{x(A),g("waterValue",A.toString())},M=i===50,Ae=i===5e3;return e.jsxs("form",{className:T.WaterForm,onSubmit:C(oe),children:[re(t),e.jsx("p",{className:T.AmountOfWater,children:c("waterAmount")}),e.jsxs("div",{className:T.TapAddWaterWrapper,children:[e.jsx("button",{type:"button",className:T.TapAddWater,onClick:()=>y(Math.max(i-50,0)),disabled:M,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:_+"#icon-minus"})})}),e.jsxs("p",{className:T.TapAddWaterValue,children:[i," ","ml"]}),e.jsx("button",{type:"button",className:T.TapAddWater,onClick:()=>y(i+50),disabled:Ae,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:_+"#icon-plus"})})})]}),e.jsxs("label",{className:T.RecordingTimeLabel,children:[c("recordTime"),e.jsx(U,{name:"recordingTime",control:l,render:({field:A})=>e.jsx("input",{...A,type:"text",className:F(T.RecordingTime),placeholder:"HH:MM",onChange:J=>{const[se,ce]=J.target.value.split(":");ne(se),z(ce),A.onChange(J)}})}),R.recordingTime&&e.jsx("p",{className:T.Error,children:R.recordingTime.message})]}),e.jsxs("label",{className:T.WaterValueLabel,children:[c("enterWaterValue"),e.jsx(U,{name:"waterValue",control:l,render:({field:A})=>e.jsx("input",{...A,type:"number",value:i||"",onChange:J=>y(Number(J.target.value)),className:T.WaterValue})}),R.waterValue&&e.jsx("p",{className:T.Error,children:R.waterValue.message})]}),e.jsx("button",{type:"submit",className:T.SaveBtn,disabled:D,children:D?e.jsx(O,{height:44,width:44}):c("save")})]})},_s={DURATION:15},hs="_WaterModal_198kh_1",ps="_WaterModalCloseBtn_198kh_22",ge={WaterModal:hs,WaterModalCloseBtn:ps},he=({operationType:t,onClose:s,water:a={},timestampFromUrl:n=""})=>{const{t:o}=j(),c=()=>{const d=setTimeout(()=>{s(),clearTimeout(d)},_s.DURATION)},i=d=>({add:o("addWaterTitle"),edit:o("editWaterAmount")})[d]||o("addWaterTitle"),x=Number(n),h=Number(a.date),D=d=>{switch(d){case"add":return x;case"edit":return h}},p=d=>{switch(d){case"add":return 50;case"edit":return a.amount;default:return 50}},v=d=>{switch(d){case"add":return null;case"edit":return a.id;default:return null}};return e.jsxs("div",{className:ge.WaterModal,children:[e.jsx("h1",{children:i(t)}),e.jsx(xs,{operationType:t,editTime:D(t),waterPortion:p(t),waterID:v(t),handleClose:c}),e.jsx("button",{type:"button",onClick:c,"aria-label":"closeWaterModal",className:ge.WaterModalCloseBtn,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${_}#icon-x`})})})]})},gs="_btnAdd_zsldf_1",js="_btnText_zsldf_14",bs="_plus_zsldf_15",ie={btnAdd:gs,btnText:js,plus:bs},fs=()=>{const{t}=j(),s=ee(),{date:a}=Z(),n=K(a),o=m.useCallback(()=>{s()},[s]),c=m.useCallback(()=>{s(e.jsx(he,{onClose:o,operationType:"add",timestampFromUrl:n}))},[s,o,n]);return e.jsxs("button",{type:"button",className:ie.btnAdd,onClick:c,children:[e.jsx("svg",{className:ie.plus,children:e.jsx("use",{xlinkHref:`${_}#icon-plus`})}),e.jsx("h2",{className:ie.btnText,children:t("addWater")})]})},Ns="_modal_10779_1",vs="_closeBtn_10779_16",Ts="_svg_10779_35",Bs="_modalTextBox_10779_40",ws="_modalTitle_10779_50",Cs="_modalText_10779_40",ys="_modalBtnBox_10779_70",As="_userCountItem_10779_80",Ws="_like_10779_94",ks="_likeActive_10779_105",Ss="_loaderWrapper_10779_110",Ds="_btnCancel_10779_156",k={modal:Ns,closeBtn:vs,svg:Ts,modalTextBox:Bs,modalTitle:ws,modalText:Cs,modalBtnBox:ys,userCountItem:As,like:Ws,likeActive:ks,loaderWrapper:Ss,btnCancel:Ds},Ms=({onClose:t,currentAccess:s})=>{const a=E(),[n,o]=m.useState({}),[c,i]=m.useState([]),[x,h]=m.useState(s),D="admin2006@gmail.com";m.useEffect(()=>{async function d(){try{const f=await Me();i(f.data.users),h(!x)}catch(f){console.log(f.message)}}d()},[]);const p=()=>{const d=setTimeout(()=>{t(),clearTimeout(d)},_e.DURATION)},v=async(d,f)=>{try{o(W=>({...W,[d]:!0}));const u=await a(Pe({id:d,access:!f}));u.error?console.error("Помилка оновлення доступу:",u.error):i(W=>W.map(w=>w.id===d?{...w,access:!f}:w))}catch(u){console.error("Щось пішло не так:",u)}finally{o(u=>({...u,[d]:!1}))}};return e.jsxs("div",{className:k.modal,children:[e.jsx("button",{type:"button","aria-label":"closeDeleteEntryModal",onClick:p,className:k.closeBtn,children:e.jsx("svg",{className:k.svg,children:e.jsx("use",{xlinkHref:_+"#icon-x"})})}),e.jsxs("div",{className:k.modalTextBox,children:[e.jsx("h2",{className:k.modalTitle,children:"Список усіх користувачів"}),c.length>0?e.jsx("ul",{className:k.userCountList,children:c.filter(d=>d.email!==D).map(d=>e.jsxs("li",{className:k.userCountItem,children:[e.jsx("p",{children:d.email}),e.jsx("div",{className:k.loaderWrapper,children:n[d.id]?e.jsx(O,{height:30,width:30}):e.jsx("button",{children:e.jsx("svg",{onClick:()=>v(d.id,d.access),className:`${k.like} ${d.access?k.likeActive:""}`,children:e.jsx("use",{href:`${_}#icon-heart`})})})})]},d.id))}):e.jsx("p",{children:"Користувачі не знайдені."})]})]})},Ps="_btnAdd_a3w66_1",$s="_btnText_a3w66_15",Ls="_plus_a3w66_16",de={btnAdd:Ps,btnText:$s,plus:Ls},Is=()=>{const{t}=j(),s=ee(),a=m.useCallback(()=>{s(e.jsx(Ms,{onClose:()=>s(null)}))},[s]);return e.jsxs("button",{type:"button",className:de.btnAdd,onClick:a,children:[e.jsx("svg",{className:de.plus,children:e.jsx("use",{xlinkHref:`${_}#icon-admin`})}),e.jsx("h2",{className:de.btnText,children:t("adminBtn")})]})},Rs=["januaryDay","februaryDay","marchDay","aprilDay","mayDay","juneDay","julyDay","augustDay","septemberDay","octoberDay","novemberDay","decemberDay"],Fs=(t,s)=>{const a=new Date;return{isToday:a.getFullYear()===t.getFullYear()&&a.getMonth()===t.getMonth()&&a.getDate()===t.getDate(),day:t.getDate(),month:s(Rs[t.getMonth()])}},Es="_selectedDate_14sit_1",Hs={selectedDate:Es},Ce=({className:t})=>{const{t:s}=j(),{date:a}=Z(),{isToday:n,day:o,month:c}=Fs(K(a),s),i=n?s("today"):`${o} ${c}`;return e.jsx("p",{className:F(Hs.selectedDate,t),children:i})},Vs="_progressBarContainer_v5cic_1",qs="_progressBarTitle_v5cic_14",Us="_progressBar_v5cic_1",Os="_progressBarFill_v5cic_29",zs="_belowAim_v5cic_38",Gs="_aboveAim_v5cic_44",Js="_belowAimRate_v5cic_50",Ys="_aboveAimRate_v5cic_54",Xs="_ball_v5cic_58",Qs="_percentNumber_v5cic_69",Zs="_percentContainer_v5cic_79",Ks="_percent_v5cic_69",b={progressBarContainer:Vs,progressBarTitle:qs,progressBar:Us,progressBarFill:Os,belowAim:zs,aboveAim:Gs,belowAimRate:Js,aboveAimRate:Ys,ball:Xs,percentNumber:Qs,percentContainer:Zs,percent:Ks},et=()=>{const t=B(je),a=(c=>!c||c.length===0?0:c.reduce((i,x)=>{const h=x.percentage||0;return i+h},0))(t),n=a<100,o=Math.min(Math.max(a,0),100);return e.jsxs("div",{className:b.progressBarContainer,children:[e.jsx("h3",{className:b.progressBarTitle,children:e.jsx(Ce,{})}),e.jsx("div",{className:b.progressBar,children:e.jsxs("div",{className:F(b.progressBarFill,{[b.belowAim]:n,[b.aboveAim]:!n}),style:{width:`${o}%`},children:[e.jsx("p",{className:F(b.percentNumber,{[b.belowAimRate]:n,[b.aboveAimRate]:!n}),children:a>=100?"Норма":`${a.toFixed(0)}%`}),e.jsx("div",{className:F(b.ball,{[b.belowAim]:a<100,[b.aboveAim]:a>=100})})]})}),e.jsxs("div",{className:b.percentContainer,children:[e.jsx("p",{className:b.percent,children:"0%"}),e.jsx("p",{className:b.percent,children:"50%"}),e.jsx("p",{className:b.percent,children:"100%"})]})]})},st="_waterContainer_szgl7_1",tt="_normaContainer_szgl7_16",at="_normaL_szgl7_28",nt="_normaText_szgl7_35",ot="_waterTitle_szgl7_53",Y={waterContainer:st,normaContainer:tt,normaL:at,normaText:nt,waterTitle:ot},rt=()=>{const{t}=j(),s=B($e),a=B(be),n="admin2006@gmail.com",o=s<1?`${s*1e3} ${t("ml")}`:`${s} ${t("l")}`;return e.jsxs("div",{className:Y.waterContainer,children:[e.jsx(Ze,{className:Y.waterTitle}),s===0?"":e.jsxs("div",{className:Y.normaContainer,children:[e.jsx("h2",{className:Y.normaL,children:o}),e.jsx("p",{className:Y.normaText,children:t("dailyNorm")})]}),s===0?"":e.jsx(et,{}),s===0?"":e.jsx(fs,{}),a===n&&e.jsx(Is,{})]})},ct="_btnLogout_1xwlm_1",lt={btnLogout:ct},it=({handleClose:t})=>{const{t:s}=j(),a=E(),n=Le(),o=()=>{a(Ie()).then(({error:c})=>{c||(n("/"),t())})};return e.jsx("button",{type:"button",onClick:o,className:lt.btnLogout,children:s("logout")})},dt="_modal_1spmq_1",mt="_closeBtn_1spmq_16",ut="_svg_1spmq_35",xt="_modalTextBox_1spmq_40",_t="_modalTitle_1spmq_50",ht="_modalText_1spmq_40",pt="_modalBtnBox_1spmq_70",gt="_btnCancel_1spmq_80",$={modal:dt,closeBtn:mt,svg:ut,modalTextBox:xt,modalTitle:_t,modalText:ht,modalBtnBox:pt,btnCancel:gt},jt=({onClose:t})=>{const{t:s}=j(),a=B(fe),n=()=>{const o=setTimeout(()=>{t(),clearTimeout(o)},_e.DURATION)};return e.jsxs("div",{className:$.modal,children:[e.jsx("button",{type:"button","aria-label":"closeLogOutModal",onClick:n,className:$.closeBtn,children:e.jsx("svg",{className:$.svg,children:e.jsx("use",{xlinkHref:`${_}#icon-x`})})}),e.jsxs("div",{className:$.modalTextBox,children:[e.jsx("h2",{className:$.modalTitle,children:s("logout")}),e.jsx("p",{className:$.modalText,children:s("confirmLogout")})]}),e.jsx("div",{className:$.modalBtnBox,children:a?e.jsx(O,{height:80,width:80}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:n,className:$.btnCancel,children:s("cancelOut")}),e.jsx(it,{handleClose:n})]})})]})},ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEVVYIDn7O3///9MWHvt8vJTXn9PW3ykq7lJVXnq7+9DUHWepbTz9PZfaYd7gppFUnaPlqnb3eOEjaBpco61ucWDiqC+wczQ09rn6OxueJHHytN0fZassr/g5efV29+Vna2U7++XAAAFvElEQVRogcWb67aqOgxGi6UVuQgsEBVv7/+Wp4C6Fdrkq9Zx8mePvQYySZqmSZuKlbfkdd9m1bYphJGi2VZZ29e5/3uEJ7XdFXIQrZQYRSk9/qHYtZ58D/ShM9jkyXwX8wWJwXeH8Oi826pS26Cvoku1bVHdMXRdSZ77oOuqDobujinIvdPTYxcE3arUOrqUmJ+0X6N7kXiDR3ii+q/Q9ekz8AQ/0mNOofNMe43xXLTOKG8n0Pvmc5Ufijf7T9Brf++ywNPMG50fy+/Bg5RHl9Ed6L38apRfRUuH0e3oVgYw9kNUYp/jVnSWhAMPktxQdBVomP9JWWHoKuXfpfS0Sg8rtwYGJ7Wwl2iWrGSSFqcqW5/b9rzOqlORJqxvWPReoDmyTJusj+I3ifqsSaWv3nP0jRxnlYjsGsebaCabOL5mzEJTzoPLDN2Svm2C8mXJfdAvTMifz7F39J4ky+Ya27mTxNeGtPostryhc9Jb5C5yaPzUPNpRbCVzJ/pIGUzuGPAIJ9n66EJnlIvpE0A2bPLzy7UdvSenlbpi6Cvp5unehs4b6kfJmfSwfxKvKVdVTW5B02tGccHIUXShXiOSbImuyVAsM1Bpo/aN9HJdL9AnMhyk2EgPsqF9Rp/m6J5eojWstFGbTnCSfoa2149P8tYHvSXZSryj6dgt9M0HfWPU7t7QtNJCrn3QGb1+PtSe/um4RdoLveaW7u4FfWSSDI+5xWst1PEfuuZyorBokdZPdMXl+4HRunqgIzapC4wWOr+jWzbvDo0uuzuaDgE/0Xo7oQ98Ch8aLcRhRHd8nRMcPVjcoHd8PRscrXcDOi/YB39g8CI36Bp4MDxa1gbNLFo/QptSRCBDjSeFI/oM1Of6z6ALfm7pnQfZsAFtVLESdLEzPQbm4A/ZXPlq3xRBAvAyr/RoVJuPj8bPRM+jvRKFEQ04muxFyz+VeKO5PGVAtwL4wA/Q/ISVmWDThB+hdSW2/Nz6CVptBVlf/hJ9FMDi8RM0Av4VGpL/Ee0fUoB5jYmufNHAjDVjDYy2KrxWD7N+AKuhAQOTy9fikL3N5AJCilBJ75Mq9MghlQkpyLAMuxCozTcXzMdMIEUSKWNy2NMuDTaxzPIBLJpi2GpDle6B44sR3SKpwiDo7hWSl03oHkmQxifBdPiKgccECUgLBwEtHqNHZENaiCTDg6SQj1/At43JMFQCiCEtBdDxGQ3eYwmAFD6DyD3AFuhZ6Fj4gH6GZONQtXVXpAaL3OlpfrTBOS3uRS462MYzGLWRouMuU2mPbGhMwixgMfyi54bGAX1elVRI28DRZJADunl1F32itMbN/dy8wi0uSrfJ45tHKvjcsstx7/hzo+nDk9l7cnh7FkH72LvCN6UDo182pVcnMP6FQb9uxa/Q1CIMOu1fj13AsB8E/X7ssuqwmREEPTtsAtUOgZ4fsXEHi3chMjSozhpkcbCIRVMiS4rBlGN5nLqqAbRqiOUDTMssh8hIu1VK5UjQrqz16JxpGBi+V7b0eg0sIPaGASacqrLZc1lKm7DnetY2iaGR0f2bsuhcLUAv7CjTpOau5hCiaSAR7QaqueJoLdxwd0vMKrceYyupsgveJXFZFw441Qi0ulrGSuuK7nqC4VT7kyWWa7nd84O8gGdiqQTd9GVc7W1yqqTpvcF3uJzBF320iwa/1x6opGg/Ao/w6B2eLho6l22Nt8cUS8QZc2snfK2e44e0NT7aC6XOuM42Hv50OKyZc7S5kp5u7YYPDre0tgNtfK34zLus8D+ZWDu17e3KfRCVJ9nEZ492ZSPByEYcCGdXfCB7G61dBHdDfh6G7L6IQN2ACKC4U2UG/b3i5E0j5rbLV4pTKvPob1ydu1zFXy/60Or8rS7kUlXubfYNcp0MvMXml6Zg74Tv7qGqQwr7oUc6h4997iz6XZY0eHep6XtV0xc98fM8flhgs4nNfz95y3/5olpPgi07CgAAAABJRU5ErkJggg==",bt="_userAvatar_1fnxk_1",ft="_loader_1fnxk_20",Nt="_uploadContainer_1fnxk_28",vt="_icon_1fnxk_36",Tt="_ordinaryText_1fnxk_49",Bt="_hideBtn_1fnxk_72",wt="_userSettingForm_1fnxk_76",Ct="_boldText_1fnxk_95",yt="_genderContainer_1fnxk_101",At="_radioContainer_1fnxk_106",Wt="_radioInput_1fnxk_116",kt="_userPreferences_1fnxk_141",St="_formNameEmail_1fnxk_147",Dt="_formWeightTime_1fnxk_152",Mt="_formula_1fnxk_165",Pt="_inputBox_1fnxk_169",$t="_formulaDescription_1fnxk_193",Lt="_formulaExpression_1fnxk_207",It="_temporarySymbol_1fnxk_221",Rt="_formulaDescriptionText_1fnxk_231",Ft="_submitBtn_1fnxk_235",Et="_loaderWrapper_1fnxk_259",Ht="_boldTextBtn_1fnxk_266",Vt="_consumeWater_1fnxk_273",qt="_userNorma_1fnxk_280",Ut="_langButton_1fnxk_288",Ot="_errorMessage_1fnxk_298",r={userAvatar:bt,loader:ft,uploadContainer:Nt,icon:vt,ordinaryText:Tt,hideBtn:Bt,userSettingForm:wt,boldText:Ct,genderContainer:yt,radioContainer:At,radioInput:Wt,userPreferences:kt,formNameEmail:St,formWeightTime:Dt,formula:Mt,inputBox:Pt,formulaDescription:$t,formulaExpression:Lt,temporarySymbol:It,formulaDescriptionText:Rt,submitBtn:Ft,loaderWrapper:Et,boldTextBtn:Ht,consumeWater:Vt,userNorma:qt,langButton:Ut,errorMessage:Ot},zt=({handleClose:t})=>{const{t:s}=j(),a=E(),n=B(Re),o=B(Ne),[c,i]=m.useState(0),x=B(fe),h=B(Fe),D=ve({name:Te().required(s("nameRequired")).min(2,s("nameMinCharacters")).max(40,s("nameMaxCharacters")),weight:ae().min(0).max(250,s("weightValueLess")).typeError(s("hasToBeNumber")),dailyActiveTime:ae().min(0).max(12,s("activeSportTime")).typeError(s("hasToBeNumber")),dailyWaterConsumption:ae().min(0).max(8,"Добове споживання води максимум 8 л").typeError(s("hasToBeNumber"))}),{control:p,register:v,handleSubmit:d,watch:f,formState:{errors:u}}=Be({resolver:we(D),defaultValues:{email:n.email,gender:n.gender,name:n.name,weight:n.weight,dailyActiveTime:n.dailyActiveTime,dailyWaterConsumption:n.dailyWaterConsumption},mode:"onChange"}),W=f("weight"),w=f("gender"),I=f("dailyActiveTime");m.useEffect(()=>{let l;const C=parseInt(W||0),g=parseInt(I||0);w==="woman"?l=C*.03+g*.4:l=C*.04+g*.6,i(Math.min(parseFloat(l),8).toFixed(2))},[I,w,W]);const P=l=>{const{photo:C,...g}=n;/\s$/.test(l.name)&&(l.name=l.name.trim());const oe=Object.keys(g).sort().reduce((y,M)=>(y[M]=g[M],y),{}),re=Object.keys(l).sort().reduce((y,M)=>(y[M]=l[M],y),{});if(JSON.stringify(oe)!==JSON.stringify(re)){const y={...l};delete y.email,a(Ee(y)).then(({error:M})=>{M||t()})}else t()},ne=l=>{const C=new FormData,g=l.target.files[0];g&&(C.append("avatar",g),a(He(C)))},H=l=>C=>{let g=C.target.value;(g===""||/^(\d+(\.\d{0,3})?|\.\d{1,3})$/.test(g))&&l.onChange(g)},z=l=>()=>{l.value===0&&l.onChange("")},G=l=>()=>{l.value===""?l.onChange(0):l.value.startsWith(".")&&l.onChange("0"+l.value)};return console.log(s("nameRequired")),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:r.userAvatar,children:[h?e.jsx("div",{className:r.loader,children:e.jsx(O,{})}):e.jsx("img",{src:o||`${ye}`,alt:"User photo"}),e.jsxs("label",{children:[e.jsxs("div",{className:r.uploadContainer,children:[e.jsx("svg",{className:r.icon,children:e.jsx("use",{xlinkHref:`${_}#icon-upload`})}),e.jsx("span",{className:r.ordinaryText,children:s("uploadPhoto")})]}),e.jsx("input",{className:r.hideBtn,type:"file",accept:"image/*",onChange:ne}),u.avatar&&e.jsx("p",{children:u.avatar.message})]})]}),e.jsxs("form",{onSubmit:d(P),className:r.userSettingForm,children:[e.jsx("div",{className:r.genderContainer,children:e.jsxs("label",{className:r.genderIdentity,children:[e.jsx("span",{className:r.boldText,children:s("genderIdentity")}),e.jsxs("div",{className:r.radioContainer,children:[e.jsx("input",{type:"radio",id:"woman",className:r.radioInput,...v("gender"),value:"woman",checked:w==="woman"}),e.jsx("label",{htmlFor:"woman",className:r.ordinaryText,children:s("woman")}),e.jsx("input",{type:"radio",id:"man",className:r.radioInput,...v("gender"),value:"man",checked:w==="man"}),e.jsx("label",{htmlFor:"man",className:r.ordinaryText,children:s("man")})]}),u.gender&&e.jsx("p",{className:r.errorMessage,children:u.gender.message})]})}),e.jsxs("div",{className:r.userPreferences,children:[e.jsxs("div",{className:r.formNameEmail,children:[e.jsxs("label",{children:[e.jsx("span",{className:r.boldText,children:s("yourName")}),e.jsx(U,{render:({field:l})=>e.jsx("input",{...l,className:r.inputBox,placeholder:"Користувач",onChange:C=>{let g=C.target.value;/^\s|\s{2}$/.test(g)||l.onChange(g)}}),name:"name",control:p}),u.name&&e.jsx("p",{className:r.errorMessage,children:u.name.message})]}),e.jsxs("label",{children:[e.jsx("span",{className:r.boldText,children:s("email")}),e.jsx("input",{disabled:!0,...v("email"),className:r.inputBox,placeholder:"placeholderEmail"})]}),e.jsxs("div",{className:r.formula,children:[e.jsx("p",{className:r.boldText,children:s("dailyNorm")}),e.jsxs("div",{className:r.formulaDescription,children:[e.jsxs("p",{className:r.ordinaryText,children:[e.jsxs("span",{children:[s("forWomen")," "]}),e.jsx("span",{className:r.formulaExpression,children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{className:r.ordinaryText,children:[e.jsxs("span",{children:[s("forMen")," "]}),e.jsx("span",{className:r.formulaExpression,children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsxs("p",{className:r.ordinaryText,children:[e.jsx("span",{className:r.formulaExpression,children:"* "}),e.jsx("span",{className:r.formulaDescriptionText,children:s("formulaExplanation")})]}),e.jsxs("p",{className:r.ordinaryText,children:[e.jsx("span",{className:r.temporarySymbol,children:"! "}),s("activeTime")]})]})]}),e.jsxs("div",{className:r.formWeightTime,children:[e.jsxs("label",{children:[e.jsx("span",{className:r.ordinaryText,children:s("yourWeight")}),e.jsx(U,{name:"weight",control:p,render:({field:l})=>e.jsx("input",{...l,className:r.inputBox,onChange:H(l),onFocus:z(l),onBlur:G(l)})}),u.weight&&e.jsx("p",{className:r.errorMessage,children:u.weight.message})]}),e.jsxs("label",{children:[e.jsx("span",{className:r.ordinaryText,children:s("activeSportsTime")}),e.jsx(U,{name:"dailyActiveTime",control:p,render:({field:l})=>e.jsx("input",{...l,className:r.inputBox,onChange:H(l),onFocus:z(l),onBlur:G(l)})}),u.dailyActiveTime&&e.jsx("p",{className:r.errorMessage,children:u.dailyActiveTime.message})]}),e.jsxs("div",{className:r.consumeWater,children:[e.jsxs("p",{className:r.ordinaryText,children:[s("requiredWaterAmount")," ",e.jsxs("span",{className:r.userNorma,children:[isNaN(c)?0:c," L"]})]}),e.jsxs("label",{children:[e.jsx("span",{className:r.boldText,children:s("recordWaterIntake")}),e.jsx(U,{name:"dailyWaterConsumption",control:p,render:({field:l})=>e.jsx("input",{...l,className:r.inputBox,onChange:H(l),onFocus:z(l),onBlur:G(l)})}),u.dailyWaterConsumption&&e.jsx("p",{className:r.errorMessage,children:u.dailyWaterConsumption.message})]})]})]})]}),e.jsxs("button",{disabled:x,type:"submit",className:`${r.submitBtn} ${r.boldTextBtn}`,children:[s("save"),x&&e.jsx("div",{className:r.loaderWrapper,children:e.jsx(O,{height:56,width:56})})]})]})]})},Gt="_modalSettingContainer_1md4x_1",Jt="_modalHeader_1md4x_14",Yt="_closeBtn_1md4x_29",Xt="_icon_1md4x_44",te={modalSettingContainer:Gt,modalHeader:Jt,closeBtn:Yt,icon:Xt},Qt=({onClose:t})=>{const{t:s}=j();return e.jsxs("div",{className:te.modalSettingContainer,children:[e.jsxs("div",{className:te.modalHeader,children:[e.jsx("h2",{children:s("settings")}),e.jsx(ss,{}),e.jsx("button",{type:"button","aria-label":"closeSettingModal",className:te.closeBtn,onClick:t,children:e.jsx("svg",{className:te.icon,children:e.jsx("use",{xlinkHref:`${_}#icon-x`})})})]}),e.jsx(zt,{handleClose:t})]})},Zt="_userBarPopup_1ap7q_1",Kt="_userBarPopupList_1ap7q_16",ea="_userBarPopupListItem_1ap7q_23",sa="_userBarPopupIcon_1ap7q_40",V={userBarPopup:Zt,userBarPopupList:Kt,userBarPopupListItem:ea,userBarPopupIcon:sa},ta=()=>{const{t}=j(),s=ee(),a=m.useCallback(()=>{s()},[s]),n=m.useCallback(()=>{s(e.jsx(Qt,{onClose:a}))},[s,a]),o=m.useCallback(()=>{s(e.jsx(jt,{onClose:a}))},[s,a]);return e.jsx("div",{className:V.userBarPopup,children:e.jsxs("ul",{className:V.userBarPopupList,children:[e.jsxs("li",{className:V.userBarPopupListItem,onClick:n,children:[e.jsx("svg",{className:V.userBarPopupIcon,children:e.jsx("use",{xlinkHref:`${_}#icon-settings`})}),t("settingLink")]}),e.jsxs("li",{className:V.userBarPopupListItem,onClick:o,children:[e.jsx("svg",{className:V.userBarPopupIcon,children:e.jsx("use",{xlinkHref:`${_}#icon-log-out`})}),t("logout")]})]})})},aa="_userBarWrapper_1k17p_1",na="_userBar_1k17p_1",oa="_userBarText_1k17p_24",ra="_userBarAvatar_1k17p_32",ca="_userBarIcon_1k17p_44",la="_rotate_1k17p_56",q={userBarWrapper:aa,userBar:na,userBarText:oa,userBarAvatar:ra,userBarIcon:ca,rotate:la},ia=({name:t})=>{const[s,a]=m.useState(!1),n=B(Ne),o=m.useRef(null),c=x=>{o.current&&!o.current.contains(x.target)&&x.target.name!=="openPopover"&&a(!1)};m.useEffect(()=>(s?document.addEventListener("mousedown",c):document.removeEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}),[s]);const i=()=>{a(x=>!x)};return e.jsxs("div",{className:q.userBarWrapper,children:[e.jsxs("button",{className:q.userBar,type:"button",name:"openPopover",onClick:i,"aria-label":"openCloseUserPanel",children:[e.jsx("div",{className:q.userBarText,children:t}),e.jsx("div",{className:q.userBarAvatar,style:{backgroundImage:`url(${n||ye})`}}),e.jsx("svg",{className:`${q.userBarIcon} ${s?q.rotate:""}`,children:e.jsx("use",{xlinkHref:`${_}#icon-chevron-down`})})]}),s&&e.jsx("div",{ref:o,children:e.jsx(ta,{})})]})},da="_userPanel_iff7o_1",ma="_userPanelTitle_iff7o_7",ua="_userPanelTitleName_iff7o_18",me={userPanel:da,userPanelTitle:ma,userPanelTitleName:ua},xa=()=>{const{t}=j(),s=B(Ve),a=B(be),n=a?a.split("@")[0]:null,o=s==="User"?n:s;return e.jsxs("div",{className:me.userPanel,children:[e.jsxs("h1",{className:me.userPanelTitle,children:[t("hello"),e.jsx("span",{className:me.userPanelTitleName,children:o})]}),e.jsx(ia,{name:s})]})},_a="_btnStyle_445u2_1",ha="_iconStyle_445u2_15",pa="_btnStyleText_445u2_31",ue={btnStyle:_a,iconStyle:ha,btnStyleText:pa},ga=()=>{const{t}=j(),s=ee(),a=m.useCallback(()=>{s()},[s]),{date:n}=Z(),o=K(n).getTime(),c=m.useCallback(()=>{s(e.jsx(he,{onClose:a,operationType:"add",timestampFromUrl:o}))},[s,a,o]);return e.jsxs("button",{className:ue.btnStyle,type:"button",onClick:c,children:[e.jsx("svg",{className:ue.iconStyle,children:e.jsx("use",{xlinkHref:`${_}#icon-plus`})}),e.jsxs("span",{className:ue.btnStyleText,children:[" ",t("addWater")]})]})},ja=t=>{const s=new Date(Number(t)),a=s.getHours(),n=s.getMinutes();if(qe.language.startsWith("en")){const c=a>=12?"PM":"AM";return`${(a%12||12).toString().padStart(2,"0")}:${n.toString().padStart(2,"0")} ${c}`}else return`${a.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`},ba=t=>t>=1e3?{value:t/1e3,text:"л"}:{value:t,text:"мл"},fa="_btnDelete_19mt5_1",Na={btnDelete:fa},va=({isLoading:t,handleDelete:s})=>{const{t:a}=j();return e.jsx("button",{type:"button",className:Na.btnDelete,onClick:()=>s(),disabled:t,children:a("delete")})},Ta="_modal_z4bq9_1",Ba="_closeBtn_z4bq9_16",wa="_svg_z4bq9_35",Ca="_modalTextBox_z4bq9_40",ya="_modalTitle_z4bq9_50",Aa="_modalText_z4bq9_40",Wa="_modalBtnBox_z4bq9_70",ka="_btnCancel_z4bq9_80",L={modal:Ta,closeBtn:Ba,svg:wa,modalTextBox:Ca,modalTitle:ya,modalText:Aa,modalBtnBox:Wa,btnCancel:ka},Sa=({id:t,onClose:s})=>{const{t:a}=j(),n=E(),[o,c]=m.useState(!1),i=()=>{const h=setTimeout(()=>{s(),clearTimeout(h)},_e.DURATION)},x=()=>{c(()=>!0),n(Ue(t)).then(({error:h})=>{h?console.error("Помилка видалення запису:",h):i(),c(!1)})};return e.jsxs("div",{className:L.modal,children:[e.jsx("button",{type:"button","aria-label":"closeDeleteEntryModal",onClick:i,className:L.closeBtn,children:e.jsx("svg",{className:L.svg,children:e.jsx("use",{xlinkHref:_+"#icon-x"})})}),e.jsxs("div",{className:L.modalTextBox,children:[e.jsx("h2",{className:L.modalTitle,children:a("deleteEntry")}),e.jsx("p",{className:L.modalText,children:a("confirmDeleteEntry")})]}),e.jsx("div",{className:L.modalBtnBox,children:o?e.jsx(O,{height:80,width:80}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:i,className:L.btnCancel,children:a("cancel")}),e.jsx(va,{handleDelete:x,id:t})]})})]})},Da="_waterItemContent_1lnpx_1",Ma="_iconWaterGlass_1lnpx_13",Pa="_waterInfo_1lnpx_25",$a="_waterAmount_1lnpx_29",La="_waterDate_1lnpx_36",Ia="_containerButtons_1lnpx_42",Ra="_editButton_1lnpx_48",Fa="_deleteButton_1lnpx_49",Ea="_iconAction_1lnpx_56",S={waterItemContent:Da,iconWaterGlass:Ma,waterInfo:Pa,waterAmount:$a,waterDate:La,containerButtons:Ia,editButton:Ra,deleteButton:Fa,iconAction:Ea},Ha=({water:t})=>{const s=ee(),a=m.useCallback(()=>{s()},[s]),n=m.useCallback(()=>{s(e.jsx(Sa,{id:t.id,onClose:a}))},[s,a,t]),o=m.useCallback(()=>{s(e.jsx(he,{water:t,onClose:a,operationType:"edit"}))},[s,a,t]),c=ba(t.amount);return e.jsxs("div",{className:S.waterItemContent,children:[e.jsx("svg",{className:S.iconWaterGlass,width:"44",height:"45",children:e.jsx("use",{xlinkHref:_+"#icon-glass"})}),e.jsxs("div",{className:S.waterInfo,children:[e.jsx("p",{className:S.waterAmount,children:`${c.value} ${c.text}`}),e.jsx("p",{className:S.waterDate,children:ja(t.date)})]}),e.jsxs("div",{className:S.containerButtons,children:[e.jsx("button",{className:S.editButton,onClick:o,"aria-label":"Edit the entered amount of water",children:e.jsx("svg",{className:S.iconAction,width:"14",height:"14",children:e.jsx("use",{href:`${_}#icon-edit`})})}),e.jsx("button",{className:S.deleteButton,onClick:n,"aria-label":"Delete the entered amount of water",children:e.jsx("svg",{className:S.iconAction,width:"14",height:"14",children:e.jsx("use",{xlinkHref:`${_}#icon-trash`})})})]})]})},Va="_waterList_nhslc_1",qa="_messageContainer_nhslc_12",Ua="_noWater_nhslc_21",Oa="_skeleton_nhslc_68",za="_shimmer_nhslc_1",X={waterList:Va,messageContainer:qa,noWater:Ua,skeleton:Oa,shimmer:za},Ga=()=>{const{t}=j(),s=B(je);return B(Oe)?e.jsx("div",{className:X.waterList,children:[1,2,3].map(n=>e.jsx("div",{className:X.skeleton},n))}):s.length?e.jsx("ul",{className:X.waterList,children:s.map(n=>e.jsx("li",{children:e.jsx(Ha,{water:n})},n.id))}):e.jsx("div",{className:X.messageContainer,children:e.jsx("h2",{className:X.noWater,children:t("noWaterMessage")})})},Ja="_info_iy33z_1",Ya="_dailyFont_iy33z_7",Xa="_header_iy33z_20",Qa="_title_iy33z_28",Za="_button_iy33z_43",Ka="_icon_iy33z_67",en="_iconBackground_iy33z_90",xe={info:Ja,dailyFont:Ya,header:Xa,title:Qa,button:Za,icon:Ka,iconBackground:en},sn=()=>e.jsxs("div",{className:xe.info,children:[e.jsxs("div",{className:xe.header,children:[e.jsx(Ce,{className:xe.dailyFont}),e.jsx(ga,{})]}),e.jsx(Ga,{})]}),tn=({title:t,styles:s})=>e.jsx("span",{className:s,children:t}),an=["january","february","march","april","may","june","july","august","september","october","november","december"],nn="_btn_11ww4_1",on="_btnDisabled_11ww4_13",rn="_svgSchedule_11ww4_17",cn="_svgPie_11ww4_18",ln="_calendarTitle_11ww4_28",dn="_month_11ww4_39",mn="_monthInd_11ww4_46",un="_monthYear_11ww4_69",xn="_statisticBtn_11ww4_76",_n="_svgArrowLeft_11ww4_86",hn="_svgArrowRight_11ww4_87",pn="_isHidden_11ww4_98",N={btn:nn,btnDisabled:on,svgSchedule:rn,svgPie:cn,calendarTitle:ln,month:dn,monthInd:mn,monthYear:un,statisticBtn:xn,svgArrowLeft:_n,svgArrowRight:hn,isHidden:pn},gn=()=>{const{t}=j(),s=E(),{date:a}=Z(),n=K(a),[o,c]=m.useState(new Date(n).getFullYear()),[i,x]=m.useState(new Date(n).getMonth()),h=B(ze),p=Ge().pathname.split("/").pop(),v=()=>{if(i===11){s(Q(new Date(o+1,0,4).getTime())),x(0),c(o+1);return}s(Q(new Date(o,i+1,4).getTime())),x(i+1)},d=()=>{if(i===0){s(Q(new Date(o-1,11,4).getTime())),x(11),c(o-1);return}s(Q(new Date(o,i-1,4).getTime())),x(i-1)},f=t(an[i]),u=t(p==="schedule"?"statistics":"month"),W=new Date(Date.now()).getFullYear(),w=new Date(Date.now()).getMonth(),I=new Date(W,w)<=new Date(o,i);return e.jsxs("div",{className:N.calendarTitle,children:[e.jsx(tn,{title:u,styles:N.month}),e.jsxs("div",{className:N.monthInd,children:[e.jsx("button",{onClick:d,className:N.btn,disabled:h,children:e.jsx("svg",{className:N.svgArrowLeft,children:e.jsx("use",{xlinkHref:`${_}#icon-arrow`})})}),e.jsx("span",{className:N.monthYear,children:`${f}, ${o}`}),e.jsx("button",{onClick:v,className:`${N.btn} ${I?N.btnDisabled:""} `,disabled:h||I,children:e.jsx("svg",{className:N.svgArrowRight,children:e.jsx("use",{xlinkHref:`${_}#icon-arrow`})})}),e.jsx(pe,{to:"calendar",className:({isActive:P})=>F(N.statisticBtn,{[N.isHidden]:P}),children:e.jsx("svg",{className:N.svgSchedule,children:e.jsx("use",{xlinkHref:`${_}#icon-pie-chart`})})}),e.jsx(pe,{to:"schedule",className:({isActive:P})=>F(N.statisticBtn,{[N.isHidden]:P}),children:e.jsx("svg",{className:N.svgPie,children:e.jsx("use",{xlinkHref:`${_}#icon-pie-chart`})})})]})]})},jn=()=>e.jsxs("div",{children:[e.jsx(gn,{}),e.jsx(m.Suspense,{fallback:e.jsx(es,{}),children:e.jsx(Je,{})})]}),bn="_waterDetailedInfo_199e5_1",fn={waterDetailedInfo:bn},Nn=()=>e.jsxs("section",{className:fn.waterDetailedInfo,children:[e.jsx(xa,{}),e.jsx(sn,{}),e.jsx(jn,{})]}),vn="_waterPage_16oaj_1",Tn="_registerPageRight_16oaj_8",Bn={waterPage:vn,registerPageRight:Tn},Sn=()=>{const{date:t}=Z(),s=E(),a=K(t).getTime(),[n,o]=m.useState(!0);return m.useEffect(()=>{if(n){const c=Date.now();s(Ye()),s(Xe(a)),s(Q(a)),s(Qe(c)),o(!1)}},[n,a,s]),e.jsxs("div",{className:Bn.waterPage,children:[e.jsx(rt,{}),e.jsx(Nn,{})]})};export{Sn as default};
