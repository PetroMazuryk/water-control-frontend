import{r as i,m as F,n as H,j as c,o as M}from"./index-89b4e562.js";const G=(e,s,t,o)=>{var n,f,h,_;const r=[t,{code:s,...o||{}}];if((f=(n=e==null?void 0:e.services)==null?void 0:n.logger)!=null&&f.forward)return e.services.logger.forward(r,"warn","react-i18next::",!0);m(r[0])&&(r[0]=`react-i18next:: ${r[0]}`),(_=(h=e==null?void 0:e.services)==null?void 0:h.logger)!=null&&_.warn?e.services.logger.warn(...r):console!=null&&console.warn&&console.warn(...r)},A={},y=(e,s,t,o)=>{m(t)&&A[t]||(m(t)&&(A[t]=new Date),G(e,s,t,o))},U=(e,s)=>()=>{if(e.isInitialized)s();else{const t=()=>{setTimeout(()=>{e.off("initialized",t)},0),s()};e.on("initialized",t)}},j=(e,s,t)=>{e.loadNamespaces(s,U(e,t))},z=(e,s,t,o)=>{if(m(t)&&(t=[t]),e.options.preload&&e.options.preload.indexOf(s)>-1)return j(e,t,o);t.forEach(r=>{e.options.ns.indexOf(r)<0&&e.options.ns.push(r)}),e.loadLanguages(s,U(e,o))},q=(e,s,t={})=>!s.languages||!s.languages.length?(y(s,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:s.languages}),!0):s.hasLoadedNamespace(e,{lng:t.lng,precheck:(o,r)=>{var n;if(((n=t.bindI18n)==null?void 0:n.indexOf("languageChanging"))>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!r(o.isLanguageChangingTo,e))return!1}}),m=e=>typeof e=="string",D=e=>typeof e=="object"&&e!==null,J=i.createContext();class W{constructor(){this.usedNamespaces={}}addUsedNamespaces(s){s.forEach(t=>{this.usedNamespaces[t]||(this.usedNamespaces[t]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const X=(e,s)=>{const t=i.useRef();return i.useEffect(()=>{t.current=s?t.current:e},[e,s]),t.current},P=(e,s,t,o)=>e.getFixedT(s,t,o),Y=(e,s,t,o)=>i.useCallback(P(e,s,t,o),[e,s,t,o]),B=(e,s={})=>{var I,R,O,$;const{i18n:t}=s,{i18n:o,defaultNS:r}=i.useContext(J)||{},n=t||o||H();if(n&&!n.reportNamespaces&&(n.reportNamespaces=new W),!n){y(n,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const u=(d,g)=>m(g)?g:D(g)&&m(g.defaultValue)?g.defaultValue:Array.isArray(d)?d[d.length-1]:d,l=[u,{},!1];return l.t=u,l.i18n={},l.ready=!1,l}(I=n.options.react)!=null&&I.wait&&y(n,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const f={...F(),...n.options.react,...s},{useSuspense:h,keyPrefix:_}=f;let a=e||r||((R=n.options)==null?void 0:R.defaultNS);a=m(a)?[a]:a||["translation"],($=(O=n.reportNamespaces).addUsedNamespaces)==null||$.call(O,a);const C=(n.isInitialized||n.initializedStoreOnce)&&a.every(u=>q(u,n,f)),k=Y(n,s.lng||null,f.nsMode==="fallback"?a:a[0],_),L=()=>k,w=()=>P(n,s.lng||null,f.nsMode==="fallback"?a:a[0],_),[b,N]=i.useState(L);let T=a.join();s.lng&&(T=`${s.lng}${T}`);const E=X(T),x=i.useRef(!0);i.useEffect(()=>{const{bindI18n:u,bindI18nStore:l}=f;x.current=!0,!C&&!h&&(s.lng?z(n,s.lng,a,()=>{x.current&&N(w)}):j(n,a,()=>{x.current&&N(w)})),C&&E&&E!==T&&x.current&&N(w);const d=()=>{x.current&&N(w)};return u&&(n==null||n.on(u,d)),l&&(n==null||n.store.on(l,d)),()=>{x.current=!1,n&&(u==null||u.split(" ").forEach(g=>n.off(g,d))),l&&n&&l.split(" ").forEach(g=>n.store.off(g,d))}},[n,T]),i.useEffect(()=>{x.current&&C&&N(L)},[n,_,C]);const v=[b,n,C];if(v.t=b,v.i18n=n,v.ready=C,C||!C&&!h)return v;throw new Promise(u=>{s.lng?z(n,s.lng,a,()=>u()):j(n,a,()=>u())})},K="/water-control-frontend/assets/photo-1-28c478ce.jpg",Q="/water-control-frontend/assets/photo-2-1eb5ee3b.jpg",Z="/water-control-frontend/assets/photo-3-f5acce10.jpg",V="_userCountComponent_rgynx_1",ee="_userCountList_rgynx_11",te="_userCountItem_rgynx_17",se="_userCountText_rgynx_40",ne="_userCountTextColor_rgynx_47",S={userCountComponent:V,userCountList:ee,userCountItem:te,userCountText:se,userCountTextColor:ne},oe=[{id:1,photo:K,alt:"user 1"},{id:2,photo:Q,alt:"user 2"},{id:3,photo:Z,alt:"user 3"}],ae=()=>{const[e,s]=i.useState();return i.useEffect(()=>{async function t(){try{const o=await M();s(o.data.count)}catch(o){console.log(o.message)}}t()},[]),c.jsxs("div",{className:S.userCountComponent,children:[c.jsx("ul",{className:S.userCountList,children:oe.map(t=>c.jsx("li",{className:S.userCountItem,children:c.jsx("img",{src:t.photo,alt:t.alt})},t.id))}),c.jsxs("p",{className:S.userCountText,children:["Наші",c.jsxs("span",{className:S.userCountTextColor,children:[e," щасливі"]})," ","клієнти"]})]})},re="_advantagesSection_xl573_1",ue="_userCount_xl573_15",ce="_advantagesList_xl573_21",ie="_advantagesHabit_xl573_34",le="_advantagesStatistics_xl573_35",de="_advantagesSetting_xl573_36",ge="_userCountComponent_xl573_131",fe="_userCountList_xl573_141",Ce="_userCountItem_xl573_147",xe="_userCountText_xl573_170",me="_userCountTextColor_xl573_177",p={advantagesSection:re,userCount:ue,advantagesList:ce,advantagesHabit:ie,advantagesStatistics:le,advantagesSetting:de,userCountComponent:ge,userCountList:fe,userCountItem:Ce,userCountText:xe,userCountTextColor:me},pe=()=>{const{t:e}=B();return c.jsxs("div",{className:p.advantagesSection,children:[c.jsx("div",{className:p.userCount,children:c.jsx(ae,{})}),c.jsxs("ul",{className:p.advantagesList,children:[c.jsx("li",{className:p.advantagesHabit,children:e("habitDrive")}),c.jsx("li",{className:p.advantagesStatistics,children:e("viewStats")}),c.jsx("li",{className:p.advantagesSetting,children:e("personalRate")})]})]})};export{pe as A,B as u};
