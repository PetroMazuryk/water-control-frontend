import{b as v,u as F,f as I,r as L,j as s,l as S}from"./index-8be1cd7c.js";import{A as $}from"./AdvantagesSection-cf9e558b.js";import{c as e,a as g,F as P,b as y}from"./RegisterPage.module-3e566e14.js";import{c as E,a as p,u as k,s as x,L as C,o as A}from"./Loader-e9184dcd.js";import"./Logo-d7be1a0d.js";const B=()=>{var o,n,l,c,m,d;const h=v(),t=F(I),[a,u]=L.useState(!1),j=E({email:p().required("Потрібна електронна адреса").email("Недійсна адреса електронної пошти"),password:p().required("Потрібен пароль").min(7,"Пароль має містити принаймні 7 символів").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Пароль повинен містити принаймні одну літеру та одну цифру")}),N=()=>{u(!a)},{register:i,handleSubmit:b,formState:{errors:r}}=k({resolver:A(j)}),w=f=>{h(S(f))};return s.jsx("div",{className:e.registerComponent,children:s.jsxs("form",{onSubmit:b(w),children:[s.jsx("h2",{className:e.registerTitle,children:"Вхід"}),s.jsxs("div",{className:e.registerForm,children:[s.jsxs("label",{className:e.registerLabel,children:["Електронна пошта",s.jsx("input",{className:(o=r.email)!=null&&o.message?`${e.registerInputError}`:`${e.registerInput}`,...i("email"),placeholder:"Введіть свою пошту"}),(n=r.email)!=null&&n.message?s.jsx("p",{className:e.registerErrorMessage,children:(l=r.email)==null?void 0:l.message}):""]}),s.jsxs("label",{className:e.registerLabel,children:[s.jsx("span",{children:"Пароль"}),s.jsxs("span",{className:e.registerPassword,children:[s.jsx("input",{type:a?"text":"password",className:(c=r.password)!=null&&c.message?`${e.registerInputError}`:`${e.registerInput}`,...i("password"),placeholder:"Введіть свій пароль"}),s.jsx("button",{className:e.passwordIconBtn,type:"button",onClick:N,children:a===!1?s.jsx("svg",{className:e.passwordIcon,children:s.jsx("use",{xlinkHref:x+"#icon-eye-off"})}):s.jsx("svg",{className:e.passwordIcon,children:s.jsx("use",{xlinkHref:x+"#icon-eye"})})})]}),(m=r.password)!=null&&m.message?s.jsx("p",{className:e.registerErrorMessage,children:(d=r.password)==null?void 0:d.message}):""]})]}),t?s.jsx("div",{className:e.registerButtonsContainer,children:s.jsx(C,{height:44,width:44,label:"Увійти"})}):s.jsx("div",{className:e.registerButtonsContainer,children:s.jsx("button",{disabled:t&&!0,className:e.registerBtn,type:"submit",children:"Увійти"})})]})})},V=()=>s.jsxs("div",{className:g.registerPage,children:[s.jsxs(P,{children:[s.jsx(B,{}),s.jsx(y,{link:"/register",text:"Немає облікового запису?",linkName:"Зареєструватися"})]}),s.jsx("div",{className:g.registerPageRight,children:s.jsx($,{})})]});export{V as default};
