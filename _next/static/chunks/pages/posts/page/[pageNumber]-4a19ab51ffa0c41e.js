(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[952],{7735:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/page/[pageNumber]",function(){return t(962)}])},1871:function(e,a,t){"use strict";var r=t(5893),n=t(1664),s=t.n(n),i=t(5675),o=t.n(i),l=t(1358),c=t.n(l),p=t(981);a.Z=e=>{let{dataPost:a,postStart:t,show:n,bgColor:i,contentListLink:l="",contentListLinkText:u="",pageCount:d=1,currentPage:g=1}=e;a||(a=[]);const f=e=>{let{selected:a}=e;const t=a+1;window.location.href="/posts/page/".concat(t)};return(0,r.jsxs)(r.Fragment,{children:[a.map((e=>{return(0,r.jsxs)("div",{className:"content-block post-list-view axil-control mt--30 ".concat(i||""," ").concat(!0===e.sticky?"sticky":""," ").concat("quote"===e.postFormat?"format-quote":""),children:[e.coverImage?(0,r.jsxs)("div",{className:"post-thumbnail",children:[(0,r.jsx)(s(),{href:"/posts/".concat(e.slug),children:(0,r.jsx)(o(),{src:e.coverImage,alt:e.title,height:250,width:295,priority:!0})}),!0===e.playBtn?(0,r.jsx)(s(),{href:"/posts/".concat(data.slug),className:"video-popup size-medium position-top-center icon-color-secondary",children:(0,r.jsx)("span",{className:"play-icon"})}):""]}):"",(0,r.jsxs)("div",{className:"post-content",children:[(0,r.jsx)("div",{className:"post-cat",children:(0,r.jsx)("div",{className:"post-cat-list",children:(t=e.categories,(0,r.jsx)("div",{className:"post-cat",children:t.map(((e,a)=>(0,r.jsx)(s(),{href:"/categories/".concat((0,p.lV)(e.slug)),className:"hover-flip-item-wrapper",children:(0,r.jsx)("span",{className:"hover-flip-item",children:(0,r.jsx)("span",{"data-text":e.name,children:e.name})})},"category-".concat(a))))}))})}),"quote"===e.postFormat?(0,r.jsx)("blockquote",{children:(0,r.jsx)("h4",{className:"title",children:(0,r.jsx)(s(),{href:"/posts/".concat(e.slug),children:e.title})})}):(0,r.jsx)("h4",{className:"title",children:(0,r.jsx)(s(),{href:"/posts/".concat(e.slug),children:e.title})}),(0,r.jsxs)("div",{className:"post-meta-wrapper",children:[(0,r.jsx)("div",{className:"post-meta",children:(0,r.jsxs)("div",{className:"content",children:[(a=e.authors,(0,r.jsx)("h6",{className:"post-author-name",children:a.map(((e,t)=>(0,r.jsx)(s(),{href:"/authors/".concat(e.slug),className:"hover-flip-item-wrapper",children:(0,r.jsx)("span",{className:"hover-flip-item",children:(0,r.jsxs)("span",{"data-text":e.name,children:[e.name,t!==a.length-1&&(0,r.jsx)("span",{children:"\xa0\u0e41\u0e25\u0e30\xa0"})]})})},"post-layout-two-featured-post-author-".concat(t))))})),(0,r.jsxs)("ul",{className:"post-meta-list",children:[(0,r.jsx)("li",{children:e.date}),(0,r.jsx)("li",{children:e.read_time})]})]})}),(0,r.jsx)("ul",{className:"social-share-transparent justify-content-end"})]})]})]},e.slug);var a,t})),""!==l?(0,r.jsx)("div",{className:"mt-4 text-sm-end",children:(0,r.jsx)(s(),{href:l,className:"see-all-topics",children:u})}):d>1?(0,r.jsx)(c(),{previousLabel:(0,r.jsx)("i",{className:"fas fa-arrow-left"}),nextLabel:(0,r.jsx)("i",{className:"fas fa-arrow-right"}),pageCount:d,onPageChange:f,containerClassName:"pagination",previousLinkClassName:"prev",nextLinkClassName:"next",disabledClassName:"disabled",activeClassName:"current",forcePage:g-1}):void 0]})}},8299:function(e,a,t){"use strict";var r=t(5893),n=t(2087),s=(t(1644),t(6918)),i=(t(1741),t(6351));a.Z=e=>{let{dataPost:a,categories:t}=e;return(0,r.jsxs)("div",{className:"sidebar-inner",children:[(0,r.jsx)(n.Z,{categories:t}),(0,r.jsx)(s.Z,{postData:a}),(0,r.jsx)(i.Z,{})]})}},1644:function(e,a,t){"use strict";t(5893),t(5675)},1741:function(e,a,t){"use strict";t(5893)},962:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSG:function(){return c},default:function(){return p}});var r=t(5893),n=t(4077),s=t(2568),i=t(8299),o=t(7725),l=t(1871),c=!0;function p(e){let{posts:a,categories:t,popularPosts:c,tags:p,trendingAuthors:u,pageCount:d,currentPage:g}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{title:"All Podcasts"}),(0,r.jsx)(s.Z,{postData:[],pClass:"header-light header-sticky header-with-shadow"}),(0,r.jsx)("div",{className:"axil-post-list-area axil-section-gap bg-color-white",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-8 col-xl-8",children:a&&a.data?(0,r.jsx)(l.Z,{dataPost:a.data,pageCount:d,currentPage:g}):""}),(0,r.jsx)("div",{className:"col-lg-4 col-xl-4 mt_md--40 mt_sm--40",children:c&&t?(0,r.jsx)(i.Z,{dataPost:c,categories:t}):""})]})})}),t&&p&&u?(0,r.jsx)(o.Z,{categories:t,tags:p,authors:u}):""]})}},1358:function(e,a,t){var r;r=e=>(()=>{var a={703:(e,a,t)=>{"use strict";var r=t(414);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,s,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:n};return t.PropTypes=t,t}},697:(e,a,t)=>{e.exports=t(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:a=>{"use strict";a.exports=e}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var s=t[e]={exports:{}};return a[e](s,s.exports,r),s.exports}r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{default:()=>y});var e=r(98),a=r.n(e),t=r(697),s=r.n(t);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}var o=function(e){var t=e.pageClassName,r=e.pageLinkClassName,n=e.page,s=e.selected,o=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,f=e.rel,h=e.ariaLabel||"Page "+n+(d?" "+d:""),m=null;return s&&(m="page",h=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+o:o,void 0!==r?void 0!==l&&(r=r+" "+l):r=l),a().createElement("li",{className:t},a().createElement("a",i({rel:f,role:u?void 0:"button",className:r,href:u,tabIndex:s?"-1":"0","aria-label":h,"aria-current":m,onKeyPress:p},c(p)),g(n)))};o.propTypes={pageSelectedHandler:s().func.isRequired,selected:s().bool.isRequired,pageClassName:s().string,pageLinkClassName:s().string,activeClassName:s().string,activeLinkClassName:s().string,extraAriaContext:s().string,href:s().string,ariaLabel:s().string,page:s().number.isRequired,getEventListener:s().func.isRequired,pageLabelBuilder:s().func.isRequired,rel:s().string};const l=o;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var p=function(e){var t=e.breakLabel,r=e.breakAriaLabel,n=e.breakClassName,s=e.breakLinkClassName,i=e.breakHandler,o=e.getEventListener,l=n||"break";return a().createElement("li",{className:l},a().createElement("a",c({className:s,role:"button",tabIndex:"0","aria-label":r,onKeyPress:i},o(i)),t))};p.propTypes={breakLabel:s().oneOfType([s().string,s().node]),breakAriaLabel:s().string,breakClassName:s().string,breakLinkClassName:s().string,breakHandler:s().func.isRequired,getEventListener:s().func.isRequired};const u=p;function d(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}function h(e,a){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},h(e,a)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var x=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&h(e,a)}(o,e);var t,r,n,s,i=(n=o,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=v(n);if(s){var t=v(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return function(e,a){if(a&&("object"===g(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,e)});function o(e){var t,r;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o),b(m(t=i.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;t.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})})),b(m(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;t.handleClick(e,null,a<r-1?a+1:void 0,{isNext:!0})})),b(m(t),"handlePageSelected",(function(e,a){if(t.state.selected===e)return t.callActiveCallback(e),void t.handleClick(a,null,void 0,{isActive:!0});t.handleClick(a,null,e)})),b(m(t),"handlePageChange",(function(e){t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),b(m(t),"getEventListener",(function(e){return b({},t.props.eventListener,e)})),b(m(t),"handleClick",(function(e,a,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=n.isPrevious,i=void 0!==s&&s,o=n.isNext,l=void 0!==o&&o,c=n.isBreak,p=void 0!==c&&c,u=n.isActive,d=void 0!==u&&u;e.preventDefault?e.preventDefault():e.returnValue=!1;var g=t.state.selected,f=t.props.onClick,h=r;if(f){var m=f({index:a,selected:g,nextSelectedPage:r,event:e,isPrevious:i,isNext:l,isBreak:p,isActive:d});if(!1===m)return;Number.isInteger(m)&&(h=m)}void 0!==h&&t.handlePageChange(h)})),b(m(t),"handleBreakClick",(function(e,a){var r=t.state.selected;t.handleClick(a,e,r<e?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})})),b(m(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),b(m(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),b(m(t),"getElementPageRel",(function(e){var a=t.state.selected,r=t.props,n=r.nextPageRel,s=r.prevPageRel,i=r.selectedPageRel;return a-1===e?s:a===e?i:a+1===e?n:void 0})),b(m(t),"pagination",(function(){var e=[],r=t.props,n=r.pageRangeDisplayed,s=r.pageCount,i=r.marginPagesDisplayed,o=r.breakLabel,l=r.breakClassName,c=r.breakLinkClassName,p=r.breakAriaLabels,d=t.state.selected;if(s<=n)for(var g=0;g<s;g++)e.push(t.getPageElement(g));else{var f=n/2,h=n-f;d>s-n/2?f=n-(h=s-d):d<n/2&&(h=n-(f=d));var m,v,b=function(e){return t.getPageElement(e)},x=[];for(m=0;m<s;m++){var y=m+1;if(y<=i)x.push({type:"page",index:m,display:b(m)});else if(y>s-i)x.push({type:"page",index:m,display:b(m)});else if(m>=d-f&&m<=d+(0===d&&n>1?h-1:h))x.push({type:"page",index:m,display:b(m)});else if(o&&x.length>0&&x[x.length-1].display!==v&&(n>0||i>0)){var C=m<d?p.backward:p.forward;v=a().createElement(u,{key:m,breakAriaLabel:C,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,m),getEventListener:t.getEventListener}),x.push({type:"break",index:m,display:v})}}x.forEach((function(a,t){var r=a;"break"===a.type&&x[t-1]&&"page"===x[t-1].type&&x[t+1]&&"page"===x[t+1].type&&x[t+1].index-x[t-1].index<=2&&(r={type:"page",index:a.index,display:b(a.index)}),e.push(r.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:r},t}return t=o,(r=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,s=e.forcePage;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==a&&a>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(n-1,").")),void 0!==s&&s>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(s," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount,n=a.hrefAllControls;if(t)return n||e>=0&&e<r?t(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var t=this.state.selected,r=this.props,n=r.pageClassName,s=r.pageLinkClassName,i=r.activeClassName,o=r.activeLinkClassName,c=r.extraAriaContext,p=r.pageLabelBuilder;return a().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:s,activeClassName:i,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,r=t.disabledClassName,n=t.disabledLinkClassName,s=t.pageCount,i=t.className,o=t.containerClassName,l=t.previousLabel,c=t.previousClassName,p=t.previousLinkClassName,u=t.previousAriaLabel,g=t.prevRel,h=t.nextLabel,m=t.nextClassName,v=t.nextLinkClassName,b=t.nextAriaLabel,x=t.nextRel,y=this.state.selected,C=0===y,P=y===s-1,N="".concat(d(c)).concat(C?" ".concat(d(r)):""),k="".concat(d(m)).concat(P?" ".concat(d(r)):""),L="".concat(d(p)).concat(C?" ".concat(d(n)):""),j="".concat(d(v)).concat(P?" ".concat(d(n)):""),w=C?"true":"false",E=P?"true":"false";return a().createElement("ul",{className:i||o,role:"navigation","aria-label":"Pagination"},a().createElement("li",{className:N},a().createElement("a",f({className:L,href:this.getElementHref(y-1),tabIndex:C?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":w,"aria-label":u,rel:g},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),a().createElement("li",{className:k},a().createElement("a",f({className:j,href:this.getElementHref(y+1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":E,"aria-label":b,rel:x},this.getEventListener(this.handleNextPage)),h)))}}])&&function(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(e.Component);b(x,"propTypes",{pageCount:s().number.isRequired,pageRangeDisplayed:s().number,marginPagesDisplayed:s().number,previousLabel:s().node,previousAriaLabel:s().string,prevPageRel:s().string,prevRel:s().string,nextLabel:s().node,nextAriaLabel:s().string,nextPageRel:s().string,nextRel:s().string,breakLabel:s().oneOfType([s().string,s().node]),breakAriaLabels:s().shape({forward:s().string,backward:s().string}),hrefBuilder:s().func,hrefAllControls:s().bool,onPageChange:s().func,onPageActive:s().func,onClick:s().func,initialPage:s().number,forcePage:s().number,disableInitialCallback:s().bool,containerClassName:s().string,className:s().string,pageClassName:s().string,pageLinkClassName:s().string,pageLabelBuilder:s().func,activeClassName:s().string,activeLinkClassName:s().string,previousClassName:s().string,nextClassName:s().string,previousLinkClassName:s().string,nextLinkClassName:s().string,disabledClassName:s().string,disabledLinkClassName:s().string,breakClassName:s().string,breakLinkClassName:s().string,extraAriaContext:s().string,ariaLabelBuilder:s().func,eventListener:s().string,renderOnZeroPageCount:s().func,selectedPageRel:s().string}),b(x,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const y=x})(),n})(),e.exports=r(t(7294))}},function(e){e.O(0,[710,414,888,774,179],(function(){return a=7735,e(e.s=a);var a}));var a=e.O();_N_E=a}]);