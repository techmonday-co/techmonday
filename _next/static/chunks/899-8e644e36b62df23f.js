(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[899],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},7498:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return l},ACTION_REFRESH:function(){return n},ACTION_NAVIGATE:function(){return r},ACTION_RESTORE:function(){return o},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return a}});const n="refresh",r="navigate",o="restore",i="server-patch",s="prefetch",u="fast-refresh",a="server-action";var l;!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(l||(l={})),("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}});n(2866);function r(e,t,n,r){return!1}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});const r=n(8754),o=n(1757)._(n(7294)),i=r._(n(3935)),s=r._(n(9201)),u=n(3914),a=n(5494),l=n(869),c=(n(1905),n(1823)),f=r._(n(4545)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,n,r,o,i){const s=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===s)return;e["data-loaded-src"]=s;("decode"in e?e.decode():Promise.resolve()).catch((()=>{})).then((()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==n?void 0:n.current){const t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){const[t,n]=o.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}const m=(0,o.forwardRef)(((e,t)=>{let{src:n,srcSet:r,sizes:i,height:s,width:u,decoding:a,className:l,style:c,fetchPriority:f,placeholder:d,loading:m,unoptimized:g,fill:y,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:C,onLoad:_,onError:x,...E}=e;return o.default.createElement("img",{...E,...h(f),loading:m,width:u,height:s,decoding:a,"data-nimg":y?"fill":"1",className:l,style:c,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)((e=>{t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&p(e,d,b,v,w))}),[n,d,b,v,w,x,g,t]),onLoad:e=>{p(e.currentTarget,d,b,v,w)},onError:e=>{C(!0),"empty"!==d&&w(!0),x&&x(e)}})}));function g(e){let{isAppRouter:t,imgAttributes:n}=e;const r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&i.default.preload?(i.default.preload(n.src,r),null):o.default.createElement(s.default,null,o.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}const y=(0,o.forwardRef)(((e,t)=>{const n=!(0,o.useContext)(c.RouterContext),r=(0,o.useContext)(l.ImageConfigContext),i=(0,o.useMemo)((()=>{const e=d||r||a.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort(((e,t)=>e-t)),n=e.deviceSizes.sort(((e,t)=>e-t));return{...e,allSizes:t,deviceSizes:n}}),[r]),{onLoad:s,onLoadingComplete:p}=e,h=(0,o.useRef)(s);(0,o.useEffect)((()=>{h.current=s}),[s]);const y=(0,o.useRef)(p);(0,o.useEffect)((()=>{y.current=p}),[p]);const[b,v]=(0,o.useState)(!1),[w,C]=(0,o.useState)(!1),{props:_,meta:x}=(0,u.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:b,showAltText:w});return o.default.createElement(o.default.Fragment,null,o.default.createElement(m,{..._,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:h,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:C,ref:t}),x.priority?o.default.createElement(g,{isAppRouter:n,imgAttributes:_}):null)}));("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});const r=n(8754)._(n(7294)),o=n(4450),i=n(2227),s=n(4364),u=n(109),a=n(3607),l=n(1823),c=n(9031),f=n(920),d=n(30),p=n(7192),h=n(7498),m=new Set;function g(e,t,n,r,o,s){if(!s&&!(0,i.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){const o=t+"%"+n+"%"+("undefined"!==typeof r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}const u=s?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(u).catch((e=>{0}))}function y(e){return"string"===typeof e?e:(0,s.formatUrl)(e)}const b=r.default.forwardRef((function(e,t){let n;const{href:s,as:m,children:b,prefetch:v=null,passHref:w,replace:C,shallow:_,scroll:x,locale:E,onClick:S,onMouseEnter:P,onTouchStart:T,legacyBehavior:j=!1,...O}=e;n=b,!j||"string"!==typeof n&&"number"!==typeof n||(n=r.default.createElement("a",null,n));const R=r.default.useContext(l.RouterContext),z=r.default.useContext(c.AppRouterContext),I=null!=R?R:z,M=!R,k=!1!==v,N=null===v?h.PrefetchKind.AUTO:h.PrefetchKind.FULL;const{href:A,as:L}=r.default.useMemo((()=>{if(!R){const e=y(s);return{href:e,as:m?y(m):e}}const[e,t]=(0,o.resolveHref)(R,s,!0);return{href:e,as:m?(0,o.resolveHref)(R,m):t||e}}),[R,s,m]),$=r.default.useRef(A),U=r.default.useRef(L);let D;j&&(D=r.default.Children.only(n));const F=j?D&&"object"===typeof D&&D.ref:t,[V,B,q]=(0,f.useIntersection)({rootMargin:"200px"}),Z=r.default.useCallback((e=>{U.current===L&&$.current===A||(q(),U.current=L,$.current=A),V(e),F&&("function"===typeof F?F(e):"object"===typeof F&&(F.current=e))}),[L,F,A,q,V]);r.default.useEffect((()=>{I&&B&&k&&g(I,A,L,{locale:E},{kind:N},M)}),[L,A,B,E,k,null==R?void 0:R.locale,I,M,N]);const H={ref:Z,onClick(e){j||"function"!==typeof S||S(e),j&&D.props&&"function"===typeof D.props.onClick&&D.props.onClick(e),I&&(e.defaultPrevented||function(e,t,n,o,s,u,a,l,c,f){const{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){const t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,i.isLocalURL)(n)))return;e.preventDefault();const p=()=>{const e=null==a||a;"beforePopState"in t?t[s?"replace":"push"](n,o,{shallow:u,locale:l,scroll:e}):t[s?"replace":"push"](o||n,{forceOptimisticNavigation:!f,scroll:e})};c?r.default.startTransition(p):p()}(e,I,A,L,C,_,x,E,M,k))},onMouseEnter(e){j||"function"!==typeof P||P(e),j&&D.props&&"function"===typeof D.props.onMouseEnter&&D.props.onMouseEnter(e),I&&(!k&&M||g(I,A,L,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:N},M))},onTouchStart(e){j||"function"!==typeof T||T(e),j&&D.props&&"function"===typeof D.props.onTouchStart&&D.props.onTouchStart(e),I&&(!k&&M||g(I,A,L,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:N},M))}};if((0,u.isAbsoluteUrl)(L))H.href=L;else if(!j||w||"a"===D.type&&!("href"in D.props)){const e="undefined"!==typeof E?E:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,d.getDomainLocale)(L,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);H.href=t||(0,p.addBasePath)((0,a.addLocale)(L,e,null==R?void 0:R.defaultLocale))}return j?r.default.cloneElement(D,H):r.default.createElement("a",{...O,...H},n)}));("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});const r=n(7294),o=n(3436),i="function"===typeof IntersectionObserver,s=new Map,u=[];function a(e,t,n){const{id:r,observer:o,elements:i}=function(e){const t={root:e.root||null,margin:e.rootMargin||""},n=u.find((e=>e.root===t.root&&e.margin===t.margin));let r;if(n&&(r=s.get(n),r))return r;const o=new Map,i=new IntersectionObserver((e=>{e.forEach((e=>{const t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return r={id:t,observer:i,elements:o},u.push(t),s.set(t,r),r}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(r);const e=u.findIndex((e=>e.root===r.root&&e.margin===r.margin));e>-1&&u.splice(e,1)}}}function l(e){let{rootRef:t,rootMargin:n,disabled:s}=e;const u=s||!i,[l,c]=(0,r.useState)(!1),f=(0,r.useRef)(null),d=(0,r.useCallback)((e=>{f.current=e}),[]);(0,r.useEffect)((()=>{if(i){if(u||l)return;const e=f.current;if(e&&e.tagName){return a(e,(e=>e&&c(e)),{root:null==t?void 0:t.current,rootMargin:n})}}else if(!l){const e=(0,o.requestIdleCallback)((()=>c(!0)));return()=>(0,o.cancelIdleCallback)(e)}}),[u,n,t,l,f.current]);const p=(0,r.useCallback)((()=>{c(!1)}),[]);return[d,l,p]}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}});n(1905);const r=n(2393),o=n(5494);function i(e){return void 0!==e.default}new Map;function s(e){return"undefined"===typeof e?e:"number"===typeof e?Number.isFinite(e)?e:NaN:"string"===typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:s,loader:u}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};const{widths:a,kind:l}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){const e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){const e=.01*Math.min(...t);return{widths:o.filter((t=>t>=r[0]*e)),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map((e=>o.find((t=>t>=e))||o[o.length-1])))],kind:"x"}}(t,o,s),c=a.length-1;return{sizes:s||"w"!==l?s:"100vw",srcSet:a.map(((e,r)=>u({config:t,src:n,quality:i,width:e})+" "+("w"===l?e:r+1)+l)).join(", "),src:u({config:t,src:n,quality:i,width:a[c]})}}function a(e,t){let{src:n,sizes:a,unoptimized:l=!1,priority:c=!1,loading:f,className:d,quality:p,width:h,height:m,fill:g=!1,style:y,onLoad:b,onLoadingComplete:v,placeholder:w="empty",blurDataURL:C,fetchPriority:_,layout:x,objectFit:E,objectPosition:S,lazyBoundary:P,lazyRoot:T,...j}=e;const{imgConf:O,showAltText:R,blurComplete:z,defaultLoader:I}=t;let M,k=O||o.imageConfigDefault;if("allSizes"in k)M=k;else{const e=[...k.deviceSizes,...k.imageSizes].sort(((e,t)=>e-t)),t=k.deviceSizes.sort(((e,t)=>e-t));M={...k,allSizes:e,deviceSizes:t}}let N=j.loader||I;delete j.loader,delete j.srcSet;const A="__next_img_default"in N;if(A){if("custom"===M.loader)throw new Error('Image with src "'+n+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{const e=N;N=t=>{const{config:n,...r}=t;return e(r)}}if(x){"fill"===x&&(g=!0);const e={responsive:"100vw",fill:"100vw"},t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[x];t&&(y={...y,...t});const n=e[x];n&&!a&&(a=n)}let L,$,U="",D=s(h),F=s(m);if(function(e){return"object"===typeof e&&(i(e)||function(e){return void 0!==e.src}(e))}(n)){const e=i(n)?n.default:n;if(!e.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(L=e.blurWidth,$=e.blurHeight,C=C||e.blurDataURL,U=e.src,!g)if(D||F){if(D&&!F){const t=D/e.width;F=Math.round(e.height*t)}else if(!D&&F){const t=F/e.height;D=Math.round(e.width*t)}}else D=e.width,F=e.height}n="string"===typeof n?n:U;let V=!c&&("lazy"===f||"undefined"===typeof f);(!n||n.startsWith("data:")||n.startsWith("blob:"))&&(l=!0,V=!1),M.unoptimized&&(l=!0),A&&n.endsWith(".svg")&&!M.dangerouslyAllowSVG&&(l=!0),c&&(_="high");const B=s(p);const q=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:S}:{},R?{}:{color:"transparent"},y),Z=z||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:D,heightInt:F,blurWidth:L,blurHeight:$,blurDataURL:C||"",objectFit:q.objectFit})+'")':'url("'+w+'")';let H=Z?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Z}:{};const G=u({config:M,src:n,unoptimized:l,width:D,quality:B,sizes:a,loader:N});return{props:{...j,loading:V?"lazy":f,fetchPriority:_,width:D,height:F,decoding:"async",className:d,style:{...q,...H},sizes:G.sizes,srcSet:G.srcSet,src:G.src},meta:{unoptimized:l,priority:c,placeholder:w,fill:g}}}},2393:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:s}=e;const u=r?40*r:t,a=o?40*o:n,l=u&&a?"viewBox='0 0 "+u+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return a},default:function(){return l}});const r=n(8754),o=n(3914),i=n(1905),s=n(3271),u=r._(n(4545)),a=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");const{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(const[n,r]of Object.entries(t))void 0===r&&delete t[n];return{props:t}},l=s.Image},4545:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;const r=n},7663:function(e){!function(){var t={229:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,a=[],l=!1,c=-1;function f(){l&&u&&(l=!1,u.length?a=u.concat(a):c=-1,a.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=a.length;t;){for(u=a,a=[];++c<t;)u&&u[c].run();c=-1,t=a.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},s=!0;try{t[e](i,i.exports,r),s=!1}finally{s&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},9008:function(e,t,n){e.exports=n(9201)},5675:function(e,t,n){e.exports=n(645)},1664:function(e,t,n){e.exports=n(5170)},6110:function(){"use strict";class e extends Error{}class t extends e{constructor(){super("Zone is an abstract class")}}class n{get type(){throw new t}get name(){throw new t}get ianaName(){return this.name}get isUniversal(){throw new t}offsetName(e,n){throw new t}formatOffset(e,n){throw new t}offset(e){throw new t}equals(e){throw new t}get isValid(){throw new t}}let r={};const o={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};let i={};class s extends n{static create(e){return i[e]||(i[e]=new s(e)),i[e]}static resetCache(){i={},r={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(t){return!1}}constructor(e){super(),this.zoneName=e,this.valid=s.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:n}){return function(e,t,n,r=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(i.timeZone=r);const s={timeZoneName:t,...i},u=new Intl.DateTimeFormat(n,s).formatToParts(o).find((e=>"timezonename"===e.type.toLowerCase()));return u?u.value:null}(e,t,n,this.name)}formatOffset(e,t){return h(this.offset(e),t)}offset(e){const t=new Date(e);if(isNaN(t))return NaN;const n=(i=this.name,r[i]||(r[i]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),r[i]);var i;let[s,u,a,c,f,d,p]=n.formatToParts?function(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:e,value:t}=n[i],s=o[e];"era"===e?r[s]=t:l(s)||(r[s]=parseInt(t,10))}return r}(n,t):function(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,o,i,s,u,a,l,c]=r;return[s,o,i,u,a,l,c]}(n,t);"BC"===c&&(s=1-Math.abs(s));let h=+t;const m=h%1e3;return h-=m>=0?m:1e3+m,(function(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day));return+t}({year:s,month:u,day:a,hour:24===f?0:f,minute:d,second:p,millisecond:0})-h)/6e4}equals(e){return"iana"===e.type&&e.name===this.name}get isValid(){return this.valid}}let u=null;class a extends n{static get utcInstance(){return null===u&&(u=new a(0)),u}static instance(e){return 0===e?a.utcInstance:new a(e)}static parseSpecifier(e){if(e){const t=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new a(p(t[1],t[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return 0===this.fixed?"UTC":`UTC${h(this.fixed,"narrow")}`}get ianaName(){return 0===this.fixed?"Etc/UTC":`Etc/GMT${h(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,t){return h(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return"fixed"===e.type&&e.fixed===this.fixed}get isValid(){return!0}}function l(e){return"undefined"===typeof e}function c(e,t=2){let n;return n=e<0?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0"),n}function f(e){return l(e)||null===e||""===e?void 0:parseInt(e,10)}function d(e){if(!l(e)&&null!==e&&""!==e){const t=1e3*parseFloat("0."+e);return Math.floor(t)}}function p(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0;return 60*n+(n<0||Object.is(n,-0)?-r:r)}function h(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${c(n,2)}:${c(r,2)}`;case"narrow":return`${o}${n}${r>0?`:${r}`:""}`;case"techie":return`${o}${c(n,2)}${c(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}const m=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function g(...e){const t=e.reduce(((e,t)=>e+t.source),"");return RegExp(`^${t}$`)}function y(...e){return t=>e.reduce((([e,n,r],o)=>{const[i,s,u]=o(t,r);return[{...e,...i},s||n,u]}),[{},null,1]).slice(0,2)}function b(...e){return(t,n)=>{const r={};let o;for(o=0;o<e.length;o++)r[e[o]]=f(t[n+o]);return[r,null,n+o]}}const v=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,w=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,C=RegExp(`${w.source}${`(?:${v.source}?(?:\\[(${m.source})\\])?)?`}`),_=RegExp(`(?:T${C.source})?`),x=b("weekYear","weekNumber","weekDay"),E=b("year","ordinal"),S=RegExp(`${w.source} ?(?:${v.source}|(${m.source}))?`),P=RegExp(`(?: ${S.source})?`);function T(e,t,n){const r=e[t];return l(r)?n:f(r)}function j(e,t){return[{hours:T(e,t,0),minutes:T(e,t+1,0),seconds:T(e,t+2,0),milliseconds:d(e[t+3])},null,t+4]}function O(e,t){const n=!e[t]&&!e[t+1],r=p(e[t+1],e[t+2]);return[{},n?null:a.instance(r),t+3]}function R(e,t){return[{},e[t]?s.create(e[t]):null,t+1]}RegExp(`^T?${w.source}$`);g(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,_),g(/(\d{4})-?W(\d\d)(?:-?(\d))?/,_),g(/(\d{4})-?(\d{3})/,_),g(C),y((function(e,t){return[{year:T(e,t),month:T(e,t+1,1),day:T(e,t+2,1)},null,t+3]}),j,O,R),y(x,j,O,R),y(E,j,O,R),y(j,O,R);y(j);g(/(\d{4})-(\d\d)-(\d\d)/,P),g(S),y(j,O,R);const z={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},I=365.2425,M=30.436875,k=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"];k.slice(0).reverse();const N={arab:"[\u0660-\u0669]",arabext:"[\u06f0-\u06f9]",bali:"[\u1b50-\u1b59]",beng:"[\u09e6-\u09ef]",deva:"[\u0966-\u096f]",fullwide:"[\uff10-\uff19]",gujr:"[\u0ae6-\u0aef]",hanidec:"[\u3007|\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d]",khmr:"[\u17e0-\u17e9]",knda:"[\u0ce6-\u0cef]",laoo:"[\u0ed0-\u0ed9]",limb:"[\u1946-\u194f]",mlym:"[\u0d66-\u0d6f]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0b66-\u0b6f]",tamldec:"[\u0be6-\u0bef]",telu:"[\u0c66-\u0c6f]",thai:"[\u0e50-\u0e59]",tibt:"[\u0f20-\u0f29]",latn:"\\d"};N.hanidec.replace(/[\[|\]]/g,"").split("");const A=`[ ${String.fromCharCode(160)}]`;new RegExp(A,"g")}}]);