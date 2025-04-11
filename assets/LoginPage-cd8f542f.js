import{b as I,u as S,f as E,r as F,j as s,l as L}from"./index-46aa298b.js";import{A as $}from"./AdvantagesSection-6c438d3f.js";import{c as e,G as P,a as p,F as y,b as k}from"./RegisterPage.module-b82d36ec.js";import{c as B,a as h,u as C,L as q,o as A}from"./Loader-0e9b20b5.js";import{s as x}from"./Logo-4d19f637.js";import{u as R}from"./useTranslation-fe4673b0.js";const T=()=>{var l,n,c,m,d,g;const{t:r}=R(),u=I(),i=S(E),[t,j]=F.useState(!1),w=B({email:h().required(r("emailRequired")).email(r("enterValidEmail")),password:h().required(r("passwordRequired")).min(7,r("passwordTooShort")).matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,r("passwordMatches"))}),N=()=>{j(!t)},{register:o,handleSubmit:b,formState:{errors:a}}=C({resolver:A(w)}),f=v=>{u(L(v))};return s.jsx("div",{className:e.registerComponent,children:s.jsxs("form",{onSubmit:b(f),children:[s.jsx("h2",{className:e.registerTitle,children:r("logInTitle")}),s.jsxs("div",{className:e.registerForm,children:[s.jsxs("label",{className:e.registerLabel,children:[r("email"),s.jsx("input",{className:(l=a.email)!=null&&l.message?`${e.registerInputError}`:`${e.registerInput}`,...o("email"),placeholder:r("placeholderEmail")}),(n=a.email)!=null&&n.message?s.jsx("p",{className:e.registerErrorMessage,children:(c=a.email)==null?void 0:c.message}):""]}),s.jsxs("label",{className:e.registerLabel,children:[s.jsx("span",{children:"Пароль"}),s.jsxs("span",{className:e.registerPassword,children:[s.jsx("input",{type:t?"text":"password",className:(m=a.password)!=null&&m.message?`${e.registerInputError}`:`${e.registerInput}`,...o("password"),placeholder:"Введіть свій пароль"}),s.jsx("button",{className:e.passwordIconBtn,type:"button",onClick:N,children:t===!1?s.jsx("svg",{className:e.passwordIcon,children:s.jsx("use",{xlinkHref:x+"#icon-eye-off"})}):s.jsx("svg",{className:e.passwordIcon,children:s.jsx("use",{xlinkHref:x+"#icon-eye"})})})]}),(d=a.password)!=null&&d.message?s.jsx("p",{className:e.registerErrorMessage,children:(g=a.password)==null?void 0:g.message}):""]})]}),i?s.jsx("div",{className:e.registerButtonsContainer,children:s.jsx(q,{height:44,width:44,label:"Увійти"})}):s.jsxs("div",{className:e.registerButtonsContainer,children:[s.jsx("button",{disabled:i&&!0,className:e.registerBtn,type:"submit",children:"Увійти"}),s.jsx(P,{})]})]})})},D=()=>s.jsxs("div",{className:p.registerPage,children:[s.jsxs(y,{children:[s.jsx(T,{}),s.jsx(k,{link:"/register",text:"Немає облікового запису?",linkName:"Зареєструватися"})]}),s.jsx("div",{className:p.registerPageRight,children:s.jsx($,{})})]});export{D as default};
