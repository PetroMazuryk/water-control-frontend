import{b as k,u as B,f as C,r as w,j as s,g as i,h as q}from"./index-1ab78417.js";import{A}from"./AdvantagesSection-efebca4d.js";import{c as e,G as M,a as N,F as V,b as G}from"./RegisterPage.module-5c9a5da9.js";import{c as H,a as n,b as z,u as D,L as O,o as T}from"./Loader-ba32033e.js";import{s as b}from"./LangSwitch-1b53cbed.js";import"./useTranslation-1dbd745f.js";const W=()=>{var c,d,m,p,g,x,h,j,u;const f=k(),l=B(C),[a,P]=w.useState(!1),[t,y]=w.useState(!1),I=H({email:n().required("Потрібна електронна адреса").email("Недійсна адреса електронної пошти"),password:n().required("Потрібен пароль").min(7,"Пароль має містити принаймні 7 символів").matches(/^(?=.*[A-Za-z])(?=.*\d)/,"Пароль повинен містити принаймні одну літеру та одну цифру"),repeatPassword:n().oneOf([z("password")],"Паролі мають збігатися").required("Будь ласка, підтвердьте свій пароль")}),v=()=>P(!a),S=()=>y(!t),{register:o,handleSubmit:E,formState:{errors:r}}=D({resolver:T(I)}),F=$=>{const{email:L,password:R}=$;f(q({email:L,password:R}))};return s.jsx("div",{className:e.registerComponent,children:s.jsxs("form",{onSubmit:E(F),children:[s.jsx("h2",{className:e.registerTitle,children:"Реєстрація"}),s.jsxs("div",{className:e.registerForm,children:[s.jsxs("label",{className:e.registerLabel,children:["Електронна пошта",s.jsx("input",{className:i(e.registerInput,{[e.registerInputError]:(c=r.email)==null?void 0:c.message}),...o("email"),placeholder:"Введіть свою пошту"}),((d=r.email)==null?void 0:d.message)&&s.jsx("p",{className:e.registerErrorMessage,children:(m=r.email)==null?void 0:m.message})]}),s.jsxs("label",{className:e.registerLabel,children:[s.jsx("span",{children:"Пароль"}),s.jsxs("span",{className:e.registerPassword,children:[s.jsx("input",{type:a?"text":"password",className:i(e.registerInput,{[e.registerInputError]:(p=r.password)==null?void 0:p.message}),...o("password"),placeholder:"Введіть свій пароль"}),s.jsx("button",{className:e.passwordIconBtn,type:"button",onClick:v,children:s.jsx("svg",{className:e.passwordIcon,children:s.jsx("use",{xlinkHref:`${b}#${a?"icon-eye":"icon-eye-off"}`})})})]}),((g=r.password)==null?void 0:g.message)&&s.jsx("p",{className:e.registerErrorMessage,children:(x=r.password)==null?void 0:x.message})]}),s.jsxs("label",{className:e.registerLabel,children:[s.jsx("span",{children:"Повторіть пароль"}),s.jsxs("span",{className:e.registerPassword,children:[s.jsx("input",{type:t?"text":"password",className:i(e.registerInput,{[e.registerInputError]:(h=r.repeatPassword)==null?void 0:h.message}),...o("repeatPassword"),placeholder:"Повторіть пароль"}),s.jsx("button",{className:e.passwordIconBtn,type:"button",onClick:S,children:s.jsx("svg",{className:e.passwordIcon,children:s.jsx("use",{xlinkHref:`${b}#${t?"icon-eye":"icon-eye-off"}`})})})]}),((j=r.repeatPassword)==null?void 0:j.message)&&s.jsx("p",{className:e.registerErrorMessage,children:(u=r.repeatPassword)==null?void 0:u.message})]})]}),l?s.jsx("div",{className:e.registerButtonsContainer,children:s.jsx(O,{height:44,width:44,label:"Зареєструватися"})}):s.jsxs("div",{className:e.registerButtonsContainer,children:[s.jsx("button",{className:e.registerBtn,type:"submit",disabled:l,children:"Зареєструватися"}),s.jsx(M,{})]})]})})},Y=()=>s.jsxs("div",{className:N.registerPage,children:[s.jsxs(V,{children:[s.jsx(W,{}),s.jsx(G,{link:"/login",text:"Вже маєте обліковий запис?",linkName:"Увійти"})]}),s.jsx("div",{className:N.registerPageRight,children:s.jsx(A,{})})]});export{Y as default};
