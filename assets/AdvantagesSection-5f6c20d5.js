import{r as a,j as t,i as c}from"./index-c2e9779e.js";const i="/water-control-frontend/assets/photo-1-28c478ce.jpg",C="/water-control-frontend/assets/photo-2-1eb5ee3b.jpg",l="/water-control-frontend/assets/photo-3-f5acce10.jpg",_="_userCountComponent_rgynx_1",x="_userCountList_rgynx_11",d="_userCountItem_rgynx_17",g="_userCountText_rgynx_40",m="_userCountTextColor_rgynx_47",n={userCountComponent:_,userCountList:x,userCountItem:d,userCountText:g,userCountTextColor:m},p=[{id:1,photo:i,alt:"user 1"},{id:2,photo:C,alt:"user 2"},{id:3,photo:l,alt:"user 3"}],v=()=>{const[u,r]=a.useState();return a.useEffect(()=>{async function e(){try{const o=await c();r(o.data.count)}catch(o){console.log(o.message)}}e()}),t.jsxs("div",{className:n.userCountComponent,children:[t.jsx("ul",{className:n.userCountList,children:p.map(e=>t.jsx("li",{className:n.userCountItem,children:t.jsx("img",{src:e.photo,alt:e.alt})},e.id))}),t.jsxs("p",{className:n.userCountText,children:["Наші",t.jsxs("span",{className:n.userCountTextColor,children:[u," щасливі"]})," ","клієнти"]})]})},h="_advantagesSection_xl573_1",j="_userCount_xl573_15",T="_advantagesList_xl573_21",S="_advantagesHabit_xl573_34",L="_advantagesStatistics_xl573_35",N="_advantagesSetting_xl573_36",f="_userCountComponent_xl573_131",y="_userCountList_xl573_141",I="_userCountItem_xl573_147",b="_userCountText_xl573_170",$="_userCountTextColor_xl573_177",s={advantagesSection:h,userCount:j,advantagesList:T,advantagesHabit:S,advantagesStatistics:L,advantagesSetting:N,userCountComponent:f,userCountList:y,userCountItem:I,userCountText:b,userCountTextColor:$},H=()=>t.jsxs("div",{className:s.advantagesSection,children:[t.jsx("div",{className:s.userCount,children:t.jsx(v,{})}),t.jsxs("ul",{className:s.advantagesList,children:[t.jsx("li",{className:s.advantagesHabit,children:"Вироблення звички"}),t.jsx("li",{className:s.advantagesStatistics,children:"Статистики"}),t.jsx("li",{className:s.advantagesSetting,children:"Налаштування особистої норми"})]})]});export{H as A};
