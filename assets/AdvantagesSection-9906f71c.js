import{r as i,m as P,n as F,j as c,o as G}from"./index-0d87642b.js";const q=(e,s,n,o)=>{var t,f,h,_;const a=[n,{code:s,...o||{}}];if((f=(t=e==null?void 0:e.services)==null?void 0:t.logger)!=null&&f.forward)return e.services.logger.forward(a,"warn","react-i18next::",!0);m(a[0])&&(a[0]=`react-i18next:: ${a[0]}`),(_=(h=e==null?void 0:e.services)==null?void 0:h.logger)!=null&&_.warn?e.services.logger.warn(...a):console!=null&&console.warn&&console.warn(...a)},$={},j=(e,s,n,o)=>{m(n)&&$[n]||(m(n)&&($[n]=new Date),q(e,s,n,o))},z=(e,s)=>()=>{if(e.isInitialized)s();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),s()};e.on("initialized",n)}},y=(e,s,n)=>{e.loadNamespaces(s,z(e,n))},A=(e,s,n,o)=>{if(m(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(s)>-1)return y(e,n,o);n.forEach(a=>{e.options.ns.indexOf(a)<0&&e.options.ns.push(a)}),e.loadLanguages(s,z(e,o))},D=(e,s,n={})=>!s.languages||!s.languages.length?(j(s,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:s.languages}),!0):s.hasLoadedNamespace(e,{lng:n.lng,precheck:(o,a)=>{var t;if(((t=n.bindI18n)==null?void 0:t.indexOf("languageChanging"))>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!a(o.isLanguageChangingTo,e))return!1}}),m=e=>typeof e=="string",J=e=>typeof e=="object"&&e!==null,W=i.createContext();class X{constructor(){this.usedNamespaces={}}addUsedNamespaces(s){s.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Y=(e,s)=>{const n=i.useRef();return i.useEffect(()=>{n.current=s?n.current:e},[e,s]),n.current},U=(e,s,n,o)=>e.getFixedT(s,n,o),B=(e,s,n,o)=>i.useCallback(U(e,s,n,o),[e,s,n,o]),H=(e,s={})=>{var I,R,k,O;const{i18n:n}=s,{i18n:o,defaultNS:a}=i.useContext(W)||{},t=n||o||F();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new X),!t){j(t,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const u=(d,g)=>m(g)?g:J(g)&&m(g.defaultValue)?g.defaultValue:Array.isArray(d)?d[d.length-1]:d,l=[u,{},!1];return l.t=u,l.i18n={},l.ready=!1,l}(I=t.options.react)!=null&&I.wait&&j(t,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const f={...P(),...t.options.react,...s},{useSuspense:h,keyPrefix:_}=f;let r=e||a||((R=t.options)==null?void 0:R.defaultNS);r=m(r)?[r]:r||["translation"],(O=(k=t.reportNamespaces).addUsedNamespaces)==null||O.call(k,r);const C=(t.isInitialized||t.initializedStoreOnce)&&r.every(u=>D(u,t,f)),M=B(t,s.lng||null,f.nsMode==="fallback"?r:r[0],_),L=()=>M,w=()=>U(t,s.lng||null,f.nsMode==="fallback"?r:r[0],_),[b,N]=i.useState(L);let T=r.join();s.lng&&(T=`${s.lng}${T}`);const E=Y(T),x=i.useRef(!0);i.useEffect(()=>{const{bindI18n:u,bindI18nStore:l}=f;x.current=!0,!C&&!h&&(s.lng?A(t,s.lng,r,()=>{x.current&&N(w)}):y(t,r,()=>{x.current&&N(w)})),C&&E&&E!==T&&x.current&&N(w);const d=()=>{x.current&&N(w)};return u&&(t==null||t.on(u,d)),l&&(t==null||t.store.on(l,d)),()=>{x.current=!1,t&&(u==null||u.split(" ").forEach(g=>t.off(g,d))),l&&t&&l.split(" ").forEach(g=>t.store.off(g,d))}},[t,T]),i.useEffect(()=>{x.current&&C&&N(L)},[t,_,C]);const v=[b,t,C];if(v.t=b,v.i18n=t,v.ready=C,C||!C&&!h)return v;throw new Promise(u=>{s.lng?A(t,s.lng,r,()=>u()):y(t,r,()=>u())})},K="/water-control-frontend/assets/photo-1-28c478ce.jpg",Q="/water-control-frontend/assets/photo-2-1eb5ee3b.jpg",Z="/water-control-frontend/assets/photo-3-f5acce10.jpg",V="_userCountComponent_1alk7_1",ee="_userCountList_1alk7_10",te="_userCountItem_1alk7_16",se="_userCountText_1alk7_39",ne="_userCountTextColor_1alk7_46",S={userCountComponent:V,userCountList:ee,userCountItem:te,userCountText:se,userCountTextColor:ne},oe=[{id:1,photo:K,alt:"user 1"},{id:2,photo:Q,alt:"user 2"},{id:3,photo:Z,alt:"user 3"}],ae=()=>{const{t:e}=H(),[s,n]=i.useState(),o=e("userCountText",{count:s,userCountTextColor:S.userCountTextColor});return i.useEffect(()=>{async function a(){try{const t=await G();n(t.data.count)}catch(t){console.log(t.message)}}a()},[]),c.jsxs("div",{className:S.userCountComponent,children:[c.jsx("ul",{className:S.userCountList,children:oe.map(a=>c.jsx("li",{className:S.userCountItem,children:c.jsx("img",{src:a.photo,alt:a.alt})},a.id))}),c.jsx("p",{className:S.userCountText,dangerouslySetInnerHTML:{__html:o}})]})},re="_advantagesSection_xl573_1",ue="_userCount_xl573_15",ce="_advantagesList_xl573_21",ie="_advantagesHabit_xl573_34",le="_advantagesStatistics_xl573_35",de="_advantagesSetting_xl573_36",ge="_userCountComponent_xl573_131",fe="_userCountList_xl573_141",Ce="_userCountItem_xl573_147",xe="_userCountText_xl573_170",me="_userCountTextColor_xl573_177",p={advantagesSection:re,userCount:ue,advantagesList:ce,advantagesHabit:ie,advantagesStatistics:le,advantagesSetting:de,userCountComponent:ge,userCountList:fe,userCountItem:Ce,userCountText:xe,userCountTextColor:me},pe=()=>{const{t:e}=H();return c.jsxs("div",{className:p.advantagesSection,children:[c.jsx("div",{className:p.userCount,children:c.jsx(ae,{})}),c.jsxs("ul",{className:p.advantagesList,children:[c.jsx("li",{className:p.advantagesHabit,children:e("habitDrive")}),c.jsx("li",{className:p.advantagesStatistics,children:e("viewStats")}),c.jsx("li",{className:p.advantagesSetting,children:e("personalRate")})]})]})};export{pe as A,H as u};
