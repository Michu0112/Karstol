import{p as w,r as u,h as F,e as R,_ as M,f as C,u as N,c as v,b as x,a as o,F as b,i as $,j as g,w as T,g as V,o as z,d as W}from"./CBqFtL8_.js";import{_ as Z}from"./C5C6P-u0.js";import{_ as G}from"./D_sAGrT9.js";import{_ as H}from"./C10aZpQx.js";import"./DlAUqK2U.js";const K=w("/woods/jesion.png"),U=w("/woods/dab.png"),B=w("/woods/buk.png"),q=w("/woods/sosna.png");/*!
  * PhotoSwipe Lightbox 5.4.4 - https://photoswipe.com
  * (c) 2024 Dmytro Semenov
  */function m(n,t,i){const e=document.createElement(t);return n&&(e.className=n),i&&i.appendChild(e),e}function X(n,t,i){let e=`translate3d(${n}px,0px,0)`;return i!==void 0&&(e+=` scale3d(${i},${i},1)`),e}function I(n,t,i){n.style.width=typeof t=="number"?`${t}px`:t,n.style.height=typeof i=="number"?`${i}px`:i}const h={IDLE:"idle",LOADING:"loading",LOADED:"loaded",ERROR:"error"};function Y(n){return"button"in n&&n.button===1||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey}function f(n,t,i=document){let e=[];if(n instanceof Element)e=[n];else if(n instanceof NodeList||Array.isArray(n))e=Array.from(n);else{const s=typeof n=="string"?n:t;s&&(e=Array.from(i.querySelectorAll(s)))}return e}function J(n){return typeof n=="function"&&n.prototype&&n.prototype.goTo}function D(){return!!(navigator.vendor&&navigator.vendor.match(/apple/i))}class Q{constructor(t,i){this.type=t,this.defaultPrevented=!1,i&&Object.assign(this,i)}preventDefault(){this.defaultPrevented=!0}}class tt{constructor(){this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}addFilter(t,i,e=100){var s,a,l;this._filters[t]||(this._filters[t]=[]),(s=this._filters[t])===null||s===void 0||s.push({fn:i,priority:e}),(a=this._filters[t])===null||a===void 0||a.sort((p,d)=>p.priority-d.priority),(l=this.pswp)===null||l===void 0||l.addFilter(t,i,e)}removeFilter(t,i){this._filters[t]&&(this._filters[t]=this._filters[t].filter(e=>e.fn!==i)),this.pswp&&this.pswp.removeFilter(t,i)}applyFilters(t,...i){var e;return(e=this._filters[t])===null||e===void 0||e.forEach(s=>{i[0]=s.fn.apply(this,i)}),i[0]}on(t,i){var e,s;this._listeners[t]||(this._listeners[t]=[]),(e=this._listeners[t])===null||e===void 0||e.push(i),(s=this.pswp)===null||s===void 0||s.on(t,i)}off(t,i){var e;this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter(s=>i!==s)),(e=this.pswp)===null||e===void 0||e.off(t,i)}dispatch(t,i){var e;if(this.pswp)return this.pswp.dispatch(t,i);const s=new Q(t,i);return(e=this._listeners[t])===null||e===void 0||e.forEach(a=>{a.call(this,s)}),s}}class et{constructor(t,i){if(this.element=m("pswp__img pswp__img--placeholder",t?"img":"div",i),t){const e=this.element;e.decoding="async",e.alt="",e.src=t,e.setAttribute("role","presentation")}this.element.setAttribute("aria-hidden","true")}setDisplayedSize(t,i){this.element&&(this.element.tagName==="IMG"?(I(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=X(0,0,t/250)):I(this.element,t,i))}destroy(){var t;(t=this.element)!==null&&t!==void 0&&t.parentNode&&this.element.remove(),this.element=null}}class it{constructor(t,i,e){this.instance=i,this.data=t,this.index=e,this.element=void 0,this.placeholder=void 0,this.slide=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.isDecoding=!1,this.state=h.IDLE,this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout(()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0)},1e3)}load(t,i){if(this.slide&&this.usePlaceholder())if(this.placeholder){const e=this.placeholder.element;e&&!e.parentElement&&this.slide.container.prepend(e)}else{const e=this.instance.applyFilters("placeholderSrc",this.data.msrc&&this.slide.isFirstSlide?this.data.msrc:!1,this);this.placeholder=new et(e,this.slide.container)}this.element&&!i||this.instance.dispatch("contentLoad",{content:this,isLazy:t}).defaultPrevented||(this.isImageContent()?(this.element=m("pswp__img","img"),this.displayedImageWidth&&this.loadImage(t)):(this.element=m("pswp__content","div"),this.element.innerHTML=this.data.html||""),i&&this.slide&&this.slide.updateContentSize(!0))}loadImage(t){var i,e;if(!this.isImageContent()||!this.element||this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented)return;const s=this.element;this.updateSrcsetSizes(),this.data.srcset&&(s.srcset=this.data.srcset),s.src=(i=this.data.src)!==null&&i!==void 0?i:"",s.alt=(e=this.data.alt)!==null&&e!==void 0?e:"",this.state=h.LOADING,s.complete?this.onLoaded():(s.onload=()=>{this.onLoaded()},s.onerror=()=>{this.onError()})}setSlide(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}onLoaded(){this.state=h.LOADED,this.slide&&this.element&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),(this.state===h.LOADED||this.state===h.ERROR)&&this.removePlaceholder())}onError(){this.state=h.ERROR,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}isLoading(){return this.instance.applyFilters("isContentLoading",this.state===h.LOADING,this)}isError(){return this.state===h.ERROR}isImageContent(){return this.type==="image"}setDisplayedSize(t,i){if(this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,i),!this.instance.dispatch("contentResize",{content:this,width:t,height:i}).defaultPrevented&&(I(this.element,t,i),this.isImageContent()&&!this.isError()))){const e=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=i,e?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:i,content:this})}}isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==h.ERROR,this)}updateSrcsetSizes(){if(!this.isImageContent()||!this.element||!this.data.srcset)return;const t=this.element,i=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||i>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=i+"px",t.dataset.largestUsedSize=String(i))}usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}destroy(){this.hasSlide=!1,this.slide=void 0,!this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented&&(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=void 0))}displayError(){if(this.slide){var t,i;let e=m("pswp__error-msg","div");e.innerText=(t=(i=this.instance.options)===null||i===void 0?void 0:i.errorMsg)!==null&&t!==void 0?t:"",e=this.instance.applyFilters("contentErrorElement",e,this),this.element=m("pswp__content pswp__error-msg-container","div"),this.element.appendChild(e),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}append(){if(this.isAttached||!this.element)return;if(this.isAttached=!0,this.state===h.ERROR){this.displayError();return}if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;const t="decode"in this.element;this.isImageContent()?t&&this.slide&&(!this.slide.isActive||D())?(this.isDecoding=!0,this.element.decode().catch(()=>{}).finally(()=>{this.isDecoding=!1,this.appendImage()})):this.appendImage():this.slide&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}activate(){this.instance.dispatch("contentActivate",{content:this}).defaultPrevented||!this.slide||(this.isImageContent()&&this.isDecoding&&!D()?this.appendImage():this.isError()&&this.load(!1,!0),this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","false"))}deactivate(){this.instance.dispatch("contentDeactivate",{content:this}),this.slide&&this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","true")}remove(){this.isAttached=!1,!this.instance.dispatch("contentRemove",{content:this}).defaultPrevented&&(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}appendImage(){this.isAttached&&(this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),(this.state===h.LOADED||this.state===h.ERROR)&&this.removePlaceholder()))}}function st(n,t){if(n.getViewportSizeFn){const i=n.getViewportSizeFn(n,t);if(i)return i}return{x:document.documentElement.clientWidth,y:window.innerHeight}}function y(n,t,i,e,s){let a=0;if(t.paddingFn)a=t.paddingFn(i,e,s)[n];else if(t.padding)a=t.padding[n];else{const l="padding"+n[0].toUpperCase()+n.slice(1);t[l]&&(a=t[l])}return Number(a)||0}function nt(n,t,i,e){return{x:t.x-y("left",n,t,i,e)-y("right",n,t,i,e),y:t.y-y("top",n,t,i,e)-y("bottom",n,t,i,e)}}const P=4e3;class at{constructor(t,i,e,s){this.pswp=s,this.options=t,this.itemData=i,this.index=e,this.panAreaSize=null,this.elementSize=null,this.fit=1,this.fill=1,this.vFill=1,this.initial=1,this.secondary=1,this.max=1,this.min=1}update(t,i,e){const s={x:t,y:i};this.elementSize=s,this.panAreaSize=e;const a=e.x/s.x,l=e.y/s.y;this.fit=Math.min(1,a<l?a:l),this.fill=Math.min(1,a>l?a:l),this.vFill=Math.min(1,l),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}_parseZoomLevelOption(t){const i=t+"ZoomLevel",e=this.options[i];if(e)return typeof e=="function"?e(this):e==="fill"?this.fill:e==="fit"?this.fit:Number(e)}_getSecondary(){let t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,this.fit*3),this.elementSize&&t*this.elementSize.x>P&&(t=P/this.elementSize.x),t)}_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}_getMax(){return this._parseZoomLevelOption("max")||Math.max(1,this.fit*4)}}function L(n,t,i){const e=t.createContentFromData(n,i);let s;const{options:a}=t;if(a){s=new at(a,n,-1);let l;t.pswp?l=t.pswp.viewportSize:l=st(a,t);const p=nt(a,l,n,i);s.update(e.width,e.height,p)}return e.lazyLoad(),s&&e.setDisplayedSize(Math.ceil(e.width*s.initial),Math.ceil(e.height*s.initial)),e}function lt(n,t){const i=t.getItemData(n);if(!t.dispatch("lazyLoadSlide",{index:n,itemData:i}).defaultPrevented)return L(i,t,n)}class rt extends tt{getNumItems(){var t;let i=0;const e=(t=this.options)===null||t===void 0?void 0:t.dataSource;e&&"length"in e?i=e.length:e&&"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),e.items&&(i=e.items.length));const s=this.dispatch("numItems",{dataSource:e,numItems:i});return this.applyFilters("numItems",s.numItems,e)}createContentFromData(t,i){return new it(t,this,i)}getItemData(t){var i;const e=(i=this.options)===null||i===void 0?void 0:i.dataSource;let s={};Array.isArray(e)?s=e[t]:e&&"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),s=e.items[t]);let a=s;a instanceof Element&&(a=this._domElementToItemData(a));const l=this.dispatch("itemData",{itemData:a||{},index:t});return this.applyFilters("itemData",l.itemData,t)}_getGalleryDOMElements(t){var i,e;return(i=this.options)!==null&&i!==void 0&&i.children||(e=this.options)!==null&&e!==void 0&&e.childSelector?f(this.options.children,this.options.childSelector,t)||[]:[t]}_domElementToItemData(t){const i={element:t},e=t.tagName==="A"?t:t.querySelector("a");if(e){i.src=e.dataset.pswpSrc||e.href,e.dataset.pswpSrcset&&(i.srcset=e.dataset.pswpSrcset),i.width=e.dataset.pswpWidth?parseInt(e.dataset.pswpWidth,10):0,i.height=e.dataset.pswpHeight?parseInt(e.dataset.pswpHeight,10):0,i.w=i.width,i.h=i.height,e.dataset.pswpType&&(i.type=e.dataset.pswpType);const a=t.querySelector("img");if(a){var s;i.msrc=a.currentSrc||a.src,i.alt=(s=a.getAttribute("alt"))!==null&&s!==void 0?s:""}(e.dataset.pswpCropped||e.dataset.cropped)&&(i.thumbCropped=!0)}return this.applyFilters("domItemData",i,t,e)}lazyLoadData(t,i){return L(t,this,i)}}class ot extends rt{constructor(t){super(),this.options=t||{},this._uid=0,this.shouldOpen=!1,this._preloadedContent=void 0,this.onThumbnailsClick=this.onThumbnailsClick.bind(this)}init(){f(this.options.gallery,this.options.gallerySelector).forEach(t=>{t.addEventListener("click",this.onThumbnailsClick,!1)})}onThumbnailsClick(t){if(Y(t)||window.pswp)return;let i={x:t.clientX,y:t.clientY};!i.x&&!i.y&&(i=null);let e=this.getClickedIndex(t);e=this.applyFilters("clickedIndex",e,t,this);const s={gallery:t.currentTarget};e>=0&&(t.preventDefault(),this.loadAndOpen(e,s,i))}getClickedIndex(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);const i=t.target,s=f(this.options.children,this.options.childSelector,t.currentTarget).findIndex(a=>a===i||a.contains(i));return s!==-1?s:this.options.children||this.options.childSelector?-1:0}loadAndOpen(t,i,e){if(window.pswp||!this.options)return!1;if(!i&&this.options.gallery&&this.options.children){const s=f(this.options.gallery);s[0]&&(i={gallery:s[0]})}return this.options.index=t,this.options.initialPointerPos=e,this.shouldOpen=!0,this.preload(t,i),!0}preload(t,i){const{options:e}=this;i&&(e.dataSource=i);const s=[],a=typeof e.pswpModule;if(J(e.pswpModule))s.push(Promise.resolve(e.pswpModule));else{if(a==="string")throw new Error("pswpModule as string is no longer supported");if(a==="function")s.push(e.pswpModule());else throw new Error("pswpModule is not valid")}typeof e.openPromise=="function"&&s.push(e.openPromise()),e.preloadFirstSlide!==!1&&t>=0&&(this._preloadedContent=lt(t,this));const l=++this._uid;Promise.all(s).then(p=>{if(this.shouldOpen){const d=p[0];this._openPhotoswipe(d,l)}})}_openPhotoswipe(t,i){if(i!==this._uid&&this.shouldOpen||(this.shouldOpen=!1,window.pswp))return;const e=typeof t=="object"?new t.default(this.options):new t(this.options);this.pswp=e,window.pswp=e,Object.keys(this._listeners).forEach(s=>{var a;(a=this._listeners[s])===null||a===void 0||a.forEach(l=>{e.on(s,l)})}),Object.keys(this._filters).forEach(s=>{var a;(a=this._filters[s])===null||a===void 0||a.forEach(l=>{e.addFilter(s,l.fn,l.priority)})}),this._preloadedContent&&(e.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=void 0),e.on("destroy",()=>{this.pswp=void 0,delete window.pswp}),e.init()}destroy(){var t;(t=this.pswp)===null||t===void 0||t.destroy(),this.shouldOpen=!1,this._listeners={},f(this.options.gallery,this.options.gallerySelector).forEach(i=>{i.removeEventListener("click",this.onThumbnailsClick,!1)})}}const ht={class:"realizations"},dt={class:"realizations-section"},pt={id:"gallery",class:"realizations-items gap-10 md:gap-20 mt-10 md:mt-20"},ct=["href","data-pswp-width","data-pswp-height"],mt=["src"],ft={class:"realizations-estimation flex flex-col gap-20 items-center"},ut={class:"realizations-materials"},gt={class:"flex flex-col items-center mt-20 gap-16"},zt={__name:"index",setup(n){const t=u([]),i=u(null),e=u(null),s=u([]),a=F(()=>["20220614_192500.jpg","20220615_153345.jpg","20220714_203149.jpg","20230223_190506.jpg","20230223_190510.jpg","20230223_190520.jpg","20230223_190544.jpg","20230523_180519.jpg","20230619_180531.jpg","20231130_192408.jpg","20231130_192413.jpg","20231130_194153.jpg","20231204_200245.jpg","20240701_153355.jpg","20240701_153406.jpg","20240701_153432.jpg","20240712_202623.jpg","20240712_202653.jpg"]),l=async d=>new Promise(r=>{const c=new Image;c.src=d,c.onload=()=>{r({width:c.width,height:c.height})}}),p=async()=>{s.value=await Promise.all(a.value.map(d=>l("/images/showOffImages/"+d)))};return R(async()=>{e.value=new ot({gallery:"#gallery",children:"a.gallery-item",preload:[2,3],bgClickAction:"close",pswpModule:()=>M(()=>import("./GXRgw7eJ.js"),[],import.meta.url)}),e.value.init(),t.value.forEach(d=>{d&&C().$observeElement(d,"in-view")}),C().$observeElement(i.value,"in-view"),await p()}),N({title:"Realizacje",meta:[{name:"description",content:"Zobacz nasze realizacje schodów na zamówienie w galerii Karstol. Oferujemy różnorodne projekty dopasowane do wizji klientów oraz szczegółowe informacje o rodzajach drewna używanych w naszej pracowni. Skontaktuj się z nami, aby uzyskać wycenę lub więcej informacji."},{name:"keywords",content:"realizacje schodów drewnianych Pomorze, projekty schodów na zamówienie, schody na beton przykłady realizacji, schody wiszące realizacje Karstol, galeria schodów drewnianych Pomorze, schody na wymiar przykłady, stolarz Brodnica Górna realizacje"}]}),(d,r)=>{const c=Z,k=G,A=H;return z(),v(b,null,[x(c),o("div",ht,[r[7]||(r[7]=o("h2",{class:"text-3xl md:text-5xl font-primary text-center font-medium mt-16"}," Realizacje ",-1)),o("div",dt,[r[0]||(r[0]=o("h3",{class:"sub-header text-xl md:text-3xl font-primary mt-12 md:mt-24 text-center"}," Różnorodne i dopasowane do wizji klientów ",-1)),o("div",pt,[(z(!0),v(b,null,$(g(a),(E,_)=>{var S,j;return z(),v("a",{href:"/images/showOffImages/"+E,ref_for:!0,ref:O=>g(t)[_]=O,class:"opacity-0 translate-y-10 gallery-item","data-pswp-width":(S=g(s)[_])==null?void 0:S.width,"data-pswp-height":(j=g(s)[_])==null?void 0:j.height},[o("img",{src:"/images/showOffImages/minimized/"+E,lazy:"true",alt:"Image of stairs",width:"100%",height:"100%"},null,8,mt)],8,ct)}),256))])]),o("div",ft,[r[2]||(r[2]=o("h3",{class:"text-3xl font-primary font-medium text-center"}," Podobają Ci się realizacje ? ",-1)),x(k,{to:"/kontakt",class:"btn"},{default:T(()=>r[1]||(r[1]=[W("poproś o wycenę")])),_:1})]),o("div",ut,[r[6]||(r[6]=o("h3",{class:"headline font-primary font-semibold"}," Poznaj rodzaje drewna, jakich używam w mojej pracowni na codzień ",-1)),o("div",gt,[r[4]||(r[4]=o("p",{class:"text-3xl font-medium font-primary"},"Rodzaje drewna",-1)),r[5]||(r[5]=o("div",{class:"flex flex-col items-center gap-5"},[o("p",{class:"text-base sm:text-lg font-primary font-medium text-center sm:text-left"}," Pracuję na sprawdzonych gatunkach drewna "),o("p",{class:"text-sm sm:text-base font-primary leading-7"}," *poniższe zdjęcia pokazujące strukturę drzewa są orientacyjne ")],-1)),o("div",{class:"flex items-center gap-10 md:gap-20 flex-col md:flex-row opacity-0 translate-y-10",ref_key:"materials",ref:i},r[3]||(r[3]=[V('<div class="flex flex-col items-center gap-10"><img src="'+K+'" width="70%"><p class="text-3xl font-primary font-medium">jesion</p></div><div class="flex flex-col items-center gap-10"><img src="'+U+'" width="70%"><p class="text-3xl font-primary font-medium">dąb</p></div><div class="flex flex-col items-center gap-10"><img src="'+B+'" width="70%"><p class="text-3xl font-primary font-medium">buk</p></div><div class="flex flex-col items-center gap-10"><img src="'+q+'" width="70%"><p class="text-3xl font-primary font-medium">sosna</p></div>',4)]),512)])])]),x(A)],64)}}};export{zt as default};