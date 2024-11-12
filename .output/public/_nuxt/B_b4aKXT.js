import{_ as Y}from"./CZ6HON9W.js";import{_ as Q}from"./D9nJEQwc.js";import{_ as X}from"./BNHPwYQs.js";import{p as k,h as T,e as ee,j as A,f as te,g as Z,i as ie,k as O,l as h,m as se,n as _,q as re,r as ne,s as x,v as U,o as I,c as M,x as oe,y as B,z as L,a as l,b as N,A as $,w as E,F as C,B as ae,d as P,C as le}from"./CcTUMf2S.js";import{_ as H}from"./DlAUqK2U.js";const W=k("/icon/ok-icon.png"),ce=k("/stairs.png"),de=k("/filler-field.png"),me=k("/profesjonalizm.jpg"),fe=k("/indywidualne-podejście.jpg"),ue=k("/precyzja.jpg"),pe=k("/proces.jpg");async function ge(e,t){return await ye(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function ye(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,s)=>{const i=new Image;i.onload=()=>{const r={width:i.width,height:i.height,ratio:i.width/i.height};t(r)},i.onerror=r=>s(r),i.src=e})}function D(e){return t=>t?e[t]||t:e.missingValue}function we({formatter:e,keyMap:t,joinWith:s="/",valueMap:i}={}){e||(e=(o,a)=>`${o}=${a}`),t&&typeof t!="function"&&(t=D(t));const r=i||{};return Object.keys(r).forEach(o=>{typeof r[o]!="function"&&(r[o]=D(r[o]))}),(o={})=>Object.entries(o).filter(([c,m])=>typeof m<"u").map(([c,m])=>{const f=r[c];return typeof f=="function"&&(m=f(o[c])),c=typeof t=="function"?t(c):c,e(c,m)}).join(s)}function v(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function he(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const s of e.split(" ")){const i=Number.parseInt(s.replace("x",""));i&&t.add(i)}return Array.from(t)}function xe(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ve(e){const t={};if(typeof e=="string")for(const s of e.split(/[\s,]+/).filter(i=>i)){const i=s.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function ze(e){const t={options:e},s=(r,o={})=>K(t,r,o),i=(r,o={},a={})=>s(r,{...a,modifiers:Z(o,a.modifiers||{})}).url;for(const r in e.presets)i[r]=(o,a,c)=>i(o,a,{...e.presets[r],...c});return i.options=e,i.getImage=s,i.getMeta=(r,o)=>_e(t,r,o),i.getSizes=(r,o)=>je(t,r,o),t.$img=i,i}async function _e(e,t,s){const i=K(e,t,{...s});return typeof i.getMeta=="function"?await i.getMeta():await ge(e,i.url)}function K(e,t,s){var f,u;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:r}=ke(e,s.provider||e.options.provider),o=be(e,s.preset);if(t=T(t)?t:ee(t),!i.supportsAlias){for(const n in e.options.alias)if(t.startsWith(n)){const p=e.options.alias[n];p&&(t=A(p,t.slice(n.length)))}}if(i.validateDomains&&T(t)){const n=te(t).host;if(!e.options.domains.find(p=>p===n))return{url:t}}const a=Z(s,o,r);a.modifiers={...a.modifiers};const c=a.modifiers.format;(f=a.modifiers)!=null&&f.width&&(a.modifiers.width=v(a.modifiers.width)),(u=a.modifiers)!=null&&u.height&&(a.modifiers.height=v(a.modifiers.height));const m=i.getImage(t,a,e);return m.format=m.format||c||"",m}function ke(e,t){const s=e.options.providers[t];if(!s)throw new Error("Unknown provider: "+t);return s}function be(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function je(e,t,s){var b,j,S,d,y;const i=v((b=s.modifiers)==null?void 0:b.width),r=v((j=s.modifiers)==null?void 0:j.height),o=ve(s.sizes),a=(S=s.densities)!=null&&S.trim()?he(s.densities.trim()):e.options.densities;xe(a);const c=i&&r?r/i:0,m=[],f=[];if(Object.keys(o).length>=1){for(const g in o){const w=F(g,String(o[g]),r,c,e);if(w!==void 0){m.push({size:w.size,screenMaxWidth:w.screenMaxWidth,media:`(max-width: ${w.screenMaxWidth}px)`});for(const q of a)f.push({width:w._cWidth*q,src:R(e,t,s,w,q)})}}Se(m)}else for(const g of a){const w=Object.keys(o)[0];let q=w?F(w,String(o[w]),r,c,e):void 0;q===void 0&&(q={size:"",screenMaxWidth:0,_cWidth:(d=s.modifiers)==null?void 0:d.width,_cHeight:(y=s.modifiers)==null?void 0:y.height}),f.push({width:g,src:R(e,t,s,q,g)})}qe(f);const u=f[f.length-1],n=m.length?m.map(g=>`${g.media?g.media+" ":""}${g.size}`).join(", "):void 0,p=n?"w":"x",z=f.map(g=>`${g.src} ${g.width}${p}`).join(", ");return{sizes:n,srcset:z,src:u==null?void 0:u.src}}function F(e,t,s,i,r){const o=r.options.screens&&r.options.screens[e]||Number.parseInt(e),a=t.endsWith("vw");if(!a&&/^\d+$/.test(t)&&(t=t+"px"),!a&&!t.endsWith("px"))return;let c=Number.parseInt(t);if(!o||!c)return;a&&(c=Math.round(c/100*o));const m=i?Math.round(c*i):s;return{size:t,screenMaxWidth:o,_cWidth:c,_cHeight:m}}function R(e,t,s,i,r){return e.$img(t,{...s.modifiers,width:i._cWidth?i._cWidth*r:void 0,height:i._cHeight?i._cHeight*r:void 0},s)}function Se(e){var s;e.sort((i,r)=>i.screenMaxWidth-r.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const r=e[i];r.media===t&&e.splice(i,1),t=r.media}for(let i=0;i<e.length;i++)e[i].media=((s=e[i+1])==null?void 0:s.media)||""}function qe(e){e.sort((s,i)=>s.width-i.width);let t=null;for(let s=e.length-1;s>=0;s--){const i=e[s];i.width===t&&e.splice(s,1),t=i.width}}const $e=we({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>O(e)+"_"+O(t)}),Ie=(e,{modifiers:t={},baseURL:s}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const r=$e(t)||"_";return s||(s=A(i.options.nuxt.baseURL,"/_ipx")),{url:A(s,r,ie(e))}},Ne=!0,We=!0,Ee=Object.freeze(Object.defineProperty({__proto__:null,getImage:Ie,supportsAlias:We,validateDomains:Ne},Symbol.toStringTag,{value:"Module"})),J={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};J.providers={ipxStatic:{provider:Ee,defaults:{}}};const V=()=>{const e=se(),t=h();return t.$img||t._img||(t._img=ze({...J,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))};function Pe(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const Ae={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},Me=e=>{const t=_(()=>({provider:e.provider,preset:e.preset})),s=_(()=>({width:v(e.width),height:v(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=V(),r=_(()=>({...e.modifiers,width:v(e.width),height:v(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:s,modifiers:r}},Le={...Ae,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1}},Te=["src"],G=re({__name:"NuxtImg",props:Le,emits:["load","error"],setup(e,{emit:t}){const s=e,i=ne(),r=t,o=!1,a=V(),c=Me(s),m=x(!1),f=x(),u=_(()=>a.getSizes(s.src,{...c.options.value,sizes:s.sizes,densities:s.densities,modifiers:{...c.modifiers.value,width:v(s.width),height:v(s.height)}})),n=_(()=>{const d={...c.attrs.value,"data-nuxt-img":""};return(!s.placeholder||m.value)&&(d.sizes=u.value.sizes,d.srcset=u.value.srcset),d}),p=_(()=>{let d=s.placeholder;if(d===""&&(d=!0),!d||m.value)return!1;if(typeof d=="string")return d;const y=Array.isArray(d)?d:typeof d=="number"?[d,d]:[10,10];return a(s.src,{...c.modifiers.value,width:y[0],height:y[1],quality:y[2]||50,blur:y[3]||3},c.options.value)}),z=_(()=>s.sizes?u.value.src:a(s.src,c.modifiers.value,c.options.value)),b=_(()=>p.value?p.value:z.value),S=h().isHydrating;return U(()=>{if(p.value){const d=new Image;z.value&&(d.src=z.value),s.sizes&&(d.sizes=u.value.sizes||"",d.srcset=u.value.srcset),d.onload=y=>{m.value=!0,r("load",y)},Pe("nuxt-image");return}f.value&&(f.value.complete&&S&&(f.value.getAttribute("data-error")?r("error",new Event("error")):r("load",new Event("load"))),f.value.onload=d=>{r("load",d)},f.value.onerror=d=>{r("error",d)})}),(d,y)=>(I(),M("img",oe({ref_key:"imgEl",ref:f,class:s.placeholder&&!m.value?s.placeholderClass:void 0},{...B(o)?{onerror:"this.setAttribute('data-error', 1)"}:{},...n.value,...B(i)},{src:b.value}),null,16,Te))}}),Oe={};function Be(e,t){const s=G;return I(),L(s,{src:"/icon/Instagram_icon.webp"})}const Ce=H(Oe,[["render",Be]]),De={};function Fe(e,t){const s=G;return I(),L(s,{src:"/icon/facebook_icon.png"})}const Re=H(De,[["render",Fe]]),Ze={style:{"background-image":"url('/homepage-bg.png')"},class:"h-svh bg-cover homepage_welcome flex flex-col"},Ue={class:"w-full lg:w-1/2 flex justify-center items-end sm:mb-20"},He={class:"homepage_cta mb-12 sm:mb-0"},Ke={class:"flex flex-col gap-16 sm:gap-0 sm:justify-between homepage_services_wrapper h-full flex-1 py-5"},Je={class:"content-section flex flex-col flex-1 justify-between lg:h-full py-20 gap-10 lg:gap-0"},Ve={id:"about",class:"mx-5 md:mx-10 my-10 md:my-20 pt-5"},Ge={class:"flex flex-col gap-10 md:gap-20 my-10 md:my-20"},Ye={id:"news",class:"w-full flex flex-col justify-center px-5 pt-5 md:px-10"},Qe={class:"flex items-center justify-evenly md:justify-between max-w-64 w-full mx-auto my-10 md:my-20"},Xe=["href"],nt={__name:"index",setup(e){const t=x(null),s=x(null),i=x(null),r=x(null),o=x(null),a=x(null),c=x(null),m=x(null),f=[{icon:Re,link:"https://www.facebook.com/profile.php?id=61566524663004"},{icon:Ce,link:"https://www.instagram.com/schody_karstol/"}];return U(()=>{h().$observeElement(t.value,"in-view"),h().$observeElement(s.value,"in-view"),h().$observeElement(i.value,"in-view"),h().$observeElement(r.value,"in-view"),h().$observeElement(o.value,"in-view"),h().$observeElement(a.value,"in-view"),h().$observeElement(c.value,"in-view"),h().$observeElement(m.value,"in-view")}),(u,n)=>{const p=Y,z=Q,b=X;return I(),M(C,null,[l("div",Ze,[N(p),n[3]||(n[3]=$('<div class="banner animated-left mt-20 lg:mt-0 font-primary flex-col w-3/4 pl-5 relative"><p class="banner_headline">KARSTOL</p><p class="banner_headline">TWÓJ STOLARZ</p><div class="absolute squares"><div class="square"></div><div class="square"></div><div class="square"></div></div></div>',1)),l("div",{class:"flex justify-end flex-grow mx-5 opacity-0 translate-y-10",ref_key:"welcome",ref:t},[l("div",Ue,[l("div",He,[n[1]||(n[1]=l("p",{class:"font-primary hidden sm:block font-medium text-xl md:text-justify"}," ______Zakład stolarski Karstol zrodził się z pasji do tworzenia w naturalnym materiale, jakim jest drewno. ",-1)),n[2]||(n[2]=l("span",{class:"font-primary font-medium mt-5 block text-justify leading-7"},"Jesteśmy małą rodzinną manufakturą działającą już od 2016r. Tworzącą głównie drewniane schody. Nasze realizacje wykonujemy na terenie całej Polski. Zapraszam do zapoznania się z naszymi realizacjami. ",-1)),N(z,{to:"/kontakt",class:"font-primary mt-8 md:mt-16 btn block"},{default:E(()=>n[0]||(n[0]=[P("kontakt")])),_:1})])])],512)]),l("div",{id:"services",class:"homepage_services py-20 sm:py-0 sm:h-screen flex items-center opacity-0 translate-y-10",ref_key:"services",ref:s},[l("div",Ke,[n[5]||(n[5]=$('<div class="font-primary flex flex-col gap-10 sm:gap-16"><h2 class="text-3xl md:text-5xl font-medium underscore w-fit"> Zakres usług </h2><p class="md:text-2xl leading-8 text-xl"> ______Projekty wykonywane są z dużą starannością oraz dbałością o detale. Zadowolenie klientów jest dla mnie motywatorem do pracy. <span class="block text-nowrap mt-3">W czym się specjalizuję :</span></p><ul class="services_list flex flex-col gap-7"><li class="flex items-center gap-2 sm:gap-5"><img src="'+W+'" class="ok-icon"> schody drewniane </li><li class="flex items-center gap-2 sm:gap-5"><img src="'+W+'" class="ok-icon"> schody na beton </li><li class="flex items-center gap-2 sm:gap-5"><img src="'+W+'" class="ok-icon"> zabudowy </li><li class="flex items-center gap-2 sm:gap-5"><img src="'+W+'" class="ok-icon"> schody kręte </li></ul></div>',1)),N(z,{to:"/realizacje",class:"btn"},{default:E(()=>n[4]||(n[4]=[P(" zobacz realizacje ")])),_:1})]),n[6]||(n[6]=l("div",{class:"decoration-section flex-1 flex items-center justify-center bg-contain h-full bg-right bg-no-repeat",style:{"background-image":"url('/logs-bg.png')"}},[l("img",{src:ce,class:"image"})],-1))],512),l("div",{class:"homepage_generations lg:h-screen bg-cover bg-no-repeat bg-center opacity-0 translate-y-10",style:{"background-image":"url('/generations.png')"},ref_key:"generations",ref:i},n[7]||(n[7]=[l("div",{class:"banner flex-col"},[l("p",null,"Firma"),l("p",null,"z tradycją"),l("p",null,"od pokoleń")],-1)]),512),l("div",{class:"homepage_beginning lg:h-screen bg-no-repeat bg-center flex items-center px-10 gap-10 md:gap-16 opacity-0 translate-y-10",ref_key:"beginning",ref:r},[l("div",Je,[n[9]||(n[9]=l("div",null,[l("h2",{class:"text-3xl md:text-5xl font-medium font-primary underscore w-fit"}," Jak zaczynaliśmy "),l("p",{class:"text-xl md:text-2xl mt-10 leading-8 font-primary"}," ______Firmę stolarską założył mój dziadek w latach 80- tych na Kaszubach. Powoli wchodził w rynek, dzięki swojej ogromnej pracowitości oraz zapałowi do pracy. Następnie nauczył fachu mojego ojca, który z kolei zaraził mnie pasją do pracy z drewnem jeszcze jako nastolatka. I tak, kończąc Zawodową Szkołę Stolarską uzyskałem tytuł czeladnika i przejąłem firmę, którą dalej prężnie rozwijam. ")],-1)),N(z,{to:"/kontakt",class:"btn"},{default:E(()=>n[8]||(n[8]=[P("kontakt")])),_:1})]),n[10]||(n[10]=l("div",{class:"decoration-section flex-1 h-full md:py-20 flex justify-center"},[l("img",{src:de,class:"h-auto"})],-1))],512),l("div",Ve,[n[14]||(n[14]=l("h2",{class:"font-primary text-3xl md:text-5xl font-medium underscore w-fit"}," Co mnie wyróżnia? ",-1)),l("div",Ge,[l("div",{class:"flex md:px-0 xl:px-32 gap-20 items-center flex-col-reverse md:flex-row opacity-0 translate-y-10",ref_key:"professional",ref:o},n[11]||(n[11]=[$('<div class="text-box"><h3 class="font-primary text-2xl font-medium mb-10"> Profesjonalizm </h3><p class="font-primary text-xl leading-8"> Jako właściciel firmy Karstol dbam o najwyższą jakość i precyzję w każdym detalu. Każde schody, które tworzę, są w pełni spersonalizowane i wykonane na indywidualne zamówienie, zgodnie z wymiarami i potrzebami klienta. Dzięki mojemu doświadczeniu i pasji do rzemiosła, oferuję produkty, które spełniają najwyższe standardy techniczne i estetyczne. Na każdym etapie – od pomiarów, przez projekt, aż po montaż – gwarantuję pełen profesjonalizm i zaangażowanie. </p></div><div class="hl-right highlight flex-1 w-4/5 sm:w-3/4 md:w-full"><img src="'+me+'"></div>',2)]),512),l("div",{class:"flex md:px-0 xl:px-32 gap-20 items-center flex-col md:flex-row opacity-0 translate-y-10",ref_key:"individual",ref:a},n[12]||(n[12]=[$('<div class="hl-left highlight flex-1 w-4/5 sm:w-3/4 md:w-full"><img src="'+fe+'"></div><div class="text-box"><h3 class="font-primary text-2xl font-medium mb-10"> Indywidualne podejście </h3><p class="font-primary text-xl leading-8"> Każdy projekt schodów jest dla mnie unikalny. W firmie Karstol przykładam dużą wagę do indywidualnych potrzeb klienta, tworząc rozwiązania idealnie dopasowane do specyfiki wnętrza oraz osobistych preferencji. Staram się, aby każdy etap współpracy – od pierwszej rozmowy po finalny montaż – odzwierciedlał Twoje oczekiwania, tworząc schody, które są nie tylko funkcjonalne, ale również wyjątkowe. </p></div>',2)]),512),l("div",{class:"flex md:px-0 xl:px-32 gap-20 items-center flex-col-reverse md:flex-row opacity-0 translate-y-10",ref_key:"precision",ref:c},n[13]||(n[13]=[$('<div class="text-box"><h3 class="font-primary text-2xl font-medium mb-10"> Precyzja wykonania </h3><p class="font-primary text-xl leading-8"> W firmie Karstol każdy detal ma znaczenie. Dbam o to, aby każdy element schodów był starannie wykonany, zgodnie z najwyższymi standardami. Precyzja to nie tylko kwestia estetyki, ale także trwałości i bezpieczeństwa. Dzięki mojemu zaangażowaniu i doświadczeniu mogę zagwarantować, że końcowy produkt spełni Twoje oczekiwania i będzie służył przez wiele lat. </p></div><div class="hl-right highlight flex-1 w-4/5 sm:w-3/4 md:w-full"><img src="'+ue+'"></div>',2)]),512)])]),l("div",{id:"process",class:"homepage_process mx-5 md:mx-10 my-16 md:my-32 pt-5 opacity-0 translate-y-10",ref_key:"process",ref:m},n[15]||(n[15]=[$('<h2 class="font-primary text-3xl md:text-5xl font-medium underscore w-fit"> Proces współpracy </h2><p class="font-primary text-xl mt-10 leading-8"> Stawiam na jasną i przejrzystą komunikację na każdym etapie realizacji. </p><div class="items-center steps md:mx-auto my-10 md:my-20 flex justify-center gap-10 xl:gap-20 flex-col lg:flex-row"><div class="highlight hl-left md:flex-1 lg:flex-initial w-4/5 md:w-3/4 lg:w-full md:px-0"><img src="'+pe+'"></div><ul class="list text-lg md:flex-1 lg:flex-initial"><li><span class="font-semibold text-2xl leading-8">01.</span> Rozpoczynamy od omówienia Twoich potrzeb i preferencji. Wspólnie ustalimy, jak powinny wyglądać Twoje schody. </li><li><span class="font-semibold text-2xl leading-8">02.</span> Dokonuję dokładnych pomiarów i przygotowuję projekt, który będzie dopasowany do Twojego wnętrza. </li><li><span class="font-semibold text-2xl leading-8">03.</span> Po zaakceptowaniu projektu przystępuję do produkcji schodów, dbając o najwyższą jakość wykonania. </li><li><span class="font-semibold text-2xl leading-8">04.</span> Zajmuję się montażem schodów, zapewniając terminowość i pełne zadowolenie z gotowego produktu. </li></ul></div>',3)]),512),l("div",Ye,[n[16]||(n[16]=l("h2",{class:"font-primary text-3xl md:text-5xl font-medium underscore w-fit"}," Zobacz co nowego! ",-1)),l("div",Qe,[(I(),M(C,null,ae(f,(j,S)=>l("a",{href:j.link,class:"flex flex-col items-center justify-center w-16 h-16 hover:scale-110 duration-150",key:S},[(I(),L(le(j.icon)))],8,Xe)),64))])]),N(b)],64)}}};export{nt as default};