import{_ as L}from"./BGNbLqHe.js";import{k as C,r as k,o,c as p,a as n,l as i,w as u,d as c,m as d,n as y,F as v,i as x,q as w,v as b,t as g,j as _}from"./D-vYqwGC.js";const B={class:"flex flex-col gap-10"},$={__name:"NavBar",setup(N){const j=C(),s=k(null),f=k([{name:"usługi",to:"/#services"},{name:"o mnie",to:"/#about"},{name:"proces",to:"/#process"},{name:"aktualności",to:"/#news"},{name:"realizacje",to:"/realizacje",condition:!0},{name:"wyceń projekt",to:"/kontakt",condition:!0}]),m=r=>{if(r){s.value.classList.remove("inactive"),s.value.classList.add("active");return}s.value.classList.add("inactive"),s.value.classList.remove("active")},a=r=>j.name===r;return(r,t)=>{const l=L;return o(),p(v,null,[n("div",{class:y(["desktop-nav flex justify-between items-center",{"justify-end":a("index"),"flex-wrap":a("kontakt")}])},[a("index")?d("",!0):(o(),i(l,{key:0,to:"/",class:"px-5 py-6 color-primary font-primary nav-bar-item"},{default:u(()=>t[3]||(t[3]=[c("powrót")])),_:1})),n("div",{class:y(["flex items-center nav-bar gap-3",{"w-full":!a("kontakt"),"flex-wrap":a("kontakt"),"justify-end":!a("kontakt"),"justify-between":a("kontakt")}])},[(o(!0),p(v,null,x(_(f),e=>w((o(),i(l,{key:e.name,to:e.to,class:"px-5 py-6 color-primary font-primary nav-bar-item"},{default:u(()=>[c(g(e.name),1)]),_:2},1032,["to"])),[[b,e.condition?!a(e.name):!0]])),128))],2)],2),n("button",{class:"mobile-nav",onClick:t[0]||(t[0]=e=>m(!0))},t[4]||(t[4]=[n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[n("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"})],-1)])),n("div",{class:"mobile-nav-content inactive p-10 flex flex-col gap-10",ref_key:"mobileMenu",ref:s},[n("button",{class:"block self-end font-primary",onClick:t[1]||(t[1]=e=>m(!1))}," Zamknij "),n("div",B,[a("index")?d("",!0):(o(),i(l,{key:0,to:"/",class:"color-primary font-primary nav-bar-item"},{default:u(()=>t[5]||(t[5]=[c("powrót")])),_:1})),(o(!0),p(v,null,x(_(f),e=>w((o(),i(l,{onClick:t[2]||(t[2]=z=>m(!1)),key:e.name,to:e.to,class:"color-primary font-primary nav-bar-item"},{default:u(()=>[c(g(e.name),1)]),_:2},1032,["to"])),[[b,e.condition?!a(e.name):!0]])),128))])],512)],64)}}};export{$ as _};