(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{1568:function(e,a,t){"use strict";t.d(a,{Z:function(){return u}});var r=t(5893),n=t(5675),i=t.n(n),s=t(1664),o=t.n(s);var l=e=>{let{author:a}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"about-author",children:(0,r.jsxs)("div",{className:"media",children:[(0,r.jsx)("div",{className:"thumbnail",children:a.picture?(0,r.jsx)(o(),{href:"#",children:(0,r.jsx)(i(),{src:a.picture,alt:a.name,height:105,width:105})}):""}),(0,r.jsxs)("div",{className:"media-body",children:[(0,r.jsxs)("div",{className:"author-info",children:[(0,r.jsx)("h5",{className:"title",children:(0,r.jsx)(o(),{href:"/authors/".concat(a.slug),className:"hover-flip-item-wrapper",children:(0,r.jsx)("span",{className:"hover-flip-item",children:(0,r.jsx)("span",{"data-text":a.name,children:a.name})})})}),(0,r.jsx)("span",{className:"b3 subtitle",children:a.designation})]}),(0,r.jsx)("div",{className:"content",children:(0,r.jsxs)("ul",{className:"social-share-transparent size-md",children:[a.facebook?(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:a.facebook,children:(0,r.jsx)("i",{className:"fab fa-facebook-f"})})}):"",a.twitter?(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:a.twitter,children:(0,r.jsx)("i",{className:"fab fa-twitter"})})}):"",a.instagram?(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:a.instagram,children:(0,r.jsx)("i",{className:"fab fa-instagram"})})}):"",a.linkedIn?(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:a.linkedIn,children:(0,r.jsx)("i",{className:"fas fa-link"})})}):""]})})]})]})})})},c=t(1358),p=t.n(c);var u=e=>{let{authors:a,pageCount:t=1,currentPage:n=1}=e;const i=e=>{let{selected:a}=e;const t=a+1;window.location.href="/authors/page/".concat(t)};return(0,r.jsxs)(r.Fragment,{children:[a.map(((e,a)=>(0,r.jsx)(l,{author:e},"author-".concat(a)))),(()=>{if(t>1)return(0,r.jsx)(p(),{previousLabel:(0,r.jsx)("i",{className:"fas fa-arrow-left"}),nextLabel:(0,r.jsx)("i",{className:"fas fa-arrow-right"}),pageCount:t,onPageChange:i,containerClassName:"pagination",previousLinkClassName:"prev",nextLinkClassName:"next",disabledClassName:"disabled",activeClassName:"current",forcePage:n-1})})()]})}},7304:function(e,a,t){"use strict";var r=t(5893),n=t(9314),i=(t(4578),t(217)),s=(t(9264),t(8075));a.Z=e=>{let{dataPost:a,categories:t}=e;return(0,r.jsxs)("div",{className:"sidebar-inner",children:[(0,r.jsx)(n.Z,{categories:t}),(0,r.jsx)(i.Z,{postData:a}),(0,r.jsx)(s.Z,{})]})}},1358:function(e,a,t){var r;r=e=>(()=>{var a={703:(e,a,t)=>{"use strict";var r=t(414);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,i,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return t.PropTypes=t,t}},697:(e,a,t)=>{e.exports=t(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:a=>{"use strict";a.exports=e}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return a[e](i,i.exports,r),i.exports}r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{default:()=>x});var e=r(98),a=r.n(e),t=r(697),i=r.n(t);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}var o=function(e){var t=e.pageClassName,r=e.pageLinkClassName,n=e.page,i=e.selected,o=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,f=e.rel,h=e.ariaLabel||"Page "+n+(d?" "+d:""),b=null;return i&&(b="page",h=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+o:o,void 0!==r?void 0!==l&&(r=r+" "+l):r=l),a().createElement("li",{className:t},a().createElement("a",s({rel:f,role:u?void 0:"button",className:r,href:u,tabIndex:i?"-1":"0","aria-label":h,"aria-current":b,onKeyPress:p},c(p)),g(n)))};o.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};const l=o;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var p=function(e){var t=e.breakLabel,r=e.breakAriaLabel,n=e.breakClassName,i=e.breakLinkClassName,s=e.breakHandler,o=e.getEventListener,l=n||"break";return a().createElement("li",{className:l},a().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":r,onKeyPress:s},o(s)),t))};p.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};const u=p;function d(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:a}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}function h(e,a){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},h(e,a)}function b(e,a){if(a&&("object"===g(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function C(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var y=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&h(e,a)}(o,e);var t,r,n,i,s=(n=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=m(n);if(i){var t=m(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return b(this,e)});function o(e){var t,r;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o),C(v(t=s.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;t.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})})),C(v(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;t.handleClick(e,null,a<r-1?a+1:void 0,{isNext:!0})})),C(v(t),"handlePageSelected",(function(e,a){if(t.state.selected===e)return t.callActiveCallback(e),void t.handleClick(a,null,void 0,{isActive:!0});t.handleClick(a,null,e)})),C(v(t),"handlePageChange",(function(e){t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),C(v(t),"getEventListener",(function(e){return C({},t.props.eventListener,e)})),C(v(t),"handleClick",(function(e,a,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.isPrevious,s=void 0!==i&&i,o=n.isNext,l=void 0!==o&&o,c=n.isBreak,p=void 0!==c&&c,u=n.isActive,d=void 0!==u&&u;e.preventDefault?e.preventDefault():e.returnValue=!1;var g=t.state.selected,f=t.props.onClick,h=r;if(f){var b=f({index:a,selected:g,nextSelectedPage:r,event:e,isPrevious:s,isNext:l,isBreak:p,isActive:d});if(!1===b)return;Number.isInteger(b)&&(h=b)}void 0!==h&&t.handlePageChange(h)})),C(v(t),"handleBreakClick",(function(e,a){var r=t.state.selected;t.handleClick(a,e,r<e?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})})),C(v(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),C(v(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),C(v(t),"getElementPageRel",(function(e){var a=t.state.selected,r=t.props,n=r.nextPageRel,i=r.prevPageRel,s=r.selectedPageRel;return a-1===e?i:a===e?s:a+1===e?n:void 0})),C(v(t),"pagination",(function(){var e=[],r=t.props,n=r.pageRangeDisplayed,i=r.pageCount,s=r.marginPagesDisplayed,o=r.breakLabel,l=r.breakClassName,c=r.breakLinkClassName,p=r.breakAriaLabels,d=t.state.selected;if(i<=n)for(var g=0;g<i;g++)e.push(t.getPageElement(g));else{var f=n/2,h=n-f;d>i-n/2?f=n-(h=i-d):d<n/2&&(h=n-(f=d));var b,v,m=function(e){return t.getPageElement(e)},C=[];for(b=0;b<i;b++){var y=b+1;if(y<=s)C.push({type:"page",index:b,display:m(b)});else if(y>i-s)C.push({type:"page",index:b,display:m(b)});else if(b>=d-f&&b<=d+(0===d&&n>1?h-1:h))C.push({type:"page",index:b,display:m(b)});else if(o&&C.length>0&&C[C.length-1].display!==v&&(n>0||s>0)){var x=b<d?p.backward:p.forward;v=a().createElement(u,{key:b,breakAriaLabel:x,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,b),getEventListener:t.getEventListener}),C.push({type:"break",index:b,display:v})}}C.forEach((function(a,t){var r=a;"break"===a.type&&C[t-1]&&"page"===C[t-1].type&&C[t+1]&&"page"===C[t+1].type&&C[t+1].index-C[t-1].index<=2&&(r={type:"page",index:a.index,display:m(a.index)}),e.push(r.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:r},t}return t=o,(r=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext,n=e.pageCount,i=e.forcePage;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(n)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(n,"). Did you forget a Math.ceil()?")),void 0!==a&&a>n-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(n-1,").")),void 0!==i&&i>n-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(n-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount,n=a.hrefAllControls;if(t)return n||e>=0&&e<r?t(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var t=this.state.selected,r=this.props,n=r.pageClassName,i=r.pageLinkClassName,s=r.activeClassName,o=r.activeLinkClassName,c=r.extraAriaContext,p=r.pageLabelBuilder;return a().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:n,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,r=t.disabledClassName,n=t.disabledLinkClassName,i=t.pageCount,s=t.className,o=t.containerClassName,l=t.previousLabel,c=t.previousClassName,p=t.previousLinkClassName,u=t.previousAriaLabel,g=t.prevRel,h=t.nextLabel,b=t.nextClassName,v=t.nextLinkClassName,m=t.nextAriaLabel,C=t.nextRel,y=this.state.selected,x=0===y,P=y===i-1,k="".concat(d(c)).concat(x?" ".concat(d(r)):""),N="".concat(d(b)).concat(P?" ".concat(d(r)):""),L="".concat(d(p)).concat(x?" ".concat(d(n)):""),j="".concat(d(v)).concat(P?" ".concat(d(n)):""),w=x?"true":"false",O=P?"true":"false";return a().createElement("ul",{className:s||o,role:"navigation","aria-label":"Pagination"},a().createElement("li",{className:k},a().createElement("a",f({className:L,href:this.getElementHref(y-1),tabIndex:x?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":w,"aria-label":u,rel:g},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),a().createElement("li",{className:N},a().createElement("a",f({className:j,href:this.getElementHref(y+1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":O,"aria-label":m,rel:C},this.getEventListener(this.handleNextPage)),h)))}}])&&function(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(e.Component);C(y,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),C(y,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const x=y})(),n})(),e.exports=r(t(7294))}}]);