import{v as D,b as N,u as i,q as f,n as j,j as t,g as h,K as v,W as y,G as w,X as F,Y as L}from"./index-69e16f7f.js";import{p as C}from"./parseDate-629c4fe8.js";const S="_day_1fbih_1",T="_date_1fbih_15",W="_percFilled_1fbih_30",E="_perc_1fbih_30",I="_active_1fbih_50",r={day:S,date:T,percFilled:W,perc:E,active:I},R=s=>{const e=new Date,a=new Date(Number(s));return e.setHours(23),e.setMinutes(59),e.setSeconds(59),e.setMilliseconds(999),e.getTime()<a.getTime()},Y=(s,e)=>{const a=new Date(Number(s)),n=new Date(Number(e));return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()&&a.getDate()===n.getDate()},$=({calendarDate:s,amount:e})=>{const a=D(),n=N(),c=i(f),{date:m}=j(),_=C(m),g=u=>{a(`/water/${u}`),n(v(u))},p=new Date(Number(s)).getDate(),l=c>0?Math.round(e/(c*1e3)*100):e,d=R(s),b=Math.round(l)<100,x=Y(_,s),M=Math.round(l)>=100?"100%":`${l}%`;return t.jsxs("button",{className:h(r.day,{[r.disabled]:d}),disabled:d,onClick:()=>g(s),children:[t.jsx("div",{className:h(r.date,{[r.percFilled]:b,[r.active]:x}),children:p}),t.jsx("div",{className:r.perc,children:M})]})},k="_errorMessage_128uc_1",A="_container_128uc_7",q="_calendarList_128uc_12",o={errorMessage:k,container:A,calendarList:q},K=()=>{const s=i(y),e=i(w),a=i(F);return e?t.jsx(L,{}):a?t.jsx("div",{className:o.container,children:t.jsx("h2",{className:o.errorMessage,children:"Сталася помилка отримання даних води за місяць. Спробуйте пізніше."})}):t.jsx("div",{className:o.container,children:t.jsx("ul",{className:o.calendarList,children:s.map((n,c)=>t.jsx("li",{children:t.jsx($,{index:c,calendarDate:n.date,amount:n.amount})},c))})})};export{K as default};
