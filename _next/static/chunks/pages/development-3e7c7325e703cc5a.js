(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57],{6518:function(s,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/development",function(){return a(6450)}])},9862:function(s,e,a){"use strict";a(5893),a(5675),a(1664)},8084:function(s,e,a){"use strict";var t=a(5893),l=a(1664),c=a.n(l),i=a(5675),n=a.n(i),r=a(1734),o=a(9752);e.Z=s=>{let{categories:e,showListLink:a}=s;return(0,t.jsx)("div",{className:"axil-categories-list axil-section-gap bg-color-grey",children:(0,t.jsxs)("div",{className:"container",children:[a?(0,t.jsx)(r.f,{title:"Trending Topics",btnText:"See All Topics",btnUrl:"/categories"}):"",(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsx)("div",{className:"list-categories d-flex flex-wrap",children:e.map(((s,e)=>(0,t.jsx)("div",{className:"single-cat",children:(0,t.jsx)("div",{className:"inner",children:(0,t.jsxs)(c(),{href:"/categories/".concat((0,o.lV)(s.slug)),children:[(0,t.jsx)("div",{className:"thumbnail",children:(0,t.jsx)(n(),{src:s.image,alt:s.name,height:180,width:180})}),(0,t.jsx)("div",{className:"content",children:(0,t.jsx)("h5",{className:"title",children:s.name})})]})})},e)))})})})]})})}},6828:function(s,e,a){"use strict";var t=a(5893),l=(a(9862),a(7304)),c=a(8678);e.Z=s=>{let{postData:e,popularPosts:a,categories:i,adBanner:n,contentListLink:r="",contentListLinkText:o=""}=s;return(0,t.jsx)("div",{className:"axil-post-list-area post-listview-visible-color axil-section-gap bg-color-white",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-lg-8 col-xl-8",children:[!0===n?(0,t.jsx)("ins",{className:"adsbygoogle",style:{display:"block",marginBottom:"1rem"},"data-ad-client":"ca-pub-5063470115459401","data-ad-slot":"6814432190","data-ad-format":"auto","data-full-width-responsive":"true"}):"",(0,t.jsx)(c.Z,{dataPost:e,contentListLink:r,contentListLinkText:o})]}),(0,t.jsx)("div",{className:"col-lg-4 col-xl-4 mt_md--40 mt_sm--40",children:(0,t.jsx)(l.Z,{dataPost:a,categories:i})})]})})})}},8678:function(s,e,a){"use strict";var t=a(5893),l=a(1664),c=a.n(l),i=a(5675),n=a.n(i),r=a(1358),o=a.n(r),d=a(9752);e.Z=s=>{let{dataPost:e,postStart:a,show:l,bgColor:i,contentListLink:r="",contentListLinkText:h="",pageCount:m=1,currentPage:x=1}=s;e||(e=[]);const p=s=>{let{selected:e}=s;const a=e+1;window.location.href="/posts/page/".concat(a)};return(0,t.jsxs)(t.Fragment,{children:[e.map((s=>{return(0,t.jsxs)("div",{className:"content-block post-list-view axil-control mt--30 ".concat(i||""," ").concat(!0===s.sticky?"sticky":""," ").concat("quote"===s.postFormat?"format-quote":""),children:[s.coverImage?(0,t.jsxs)("div",{className:"post-thumbnail",children:[(0,t.jsx)(c(),{href:"/posts/".concat(s.slug),children:(0,t.jsx)(n(),{src:s.coverImage,alt:s.title,height:250,width:295,priority:!0})}),!0===s.playBtn?(0,t.jsx)(c(),{href:"/posts/".concat(data.slug),className:"video-popup size-medium position-top-center icon-color-secondary",children:(0,t.jsx)("span",{className:"play-icon"})}):""]}):"",(0,t.jsxs)("div",{className:"post-content",children:[(0,t.jsx)("div",{className:"post-cat",children:(0,t.jsx)("div",{className:"post-cat-list",children:(a=s.categories,(0,t.jsx)("div",{className:"post-cat",children:a.map(((s,e)=>(0,t.jsx)(c(),{href:"/categories/".concat((0,d.lV)(s.slug)),className:"hover-flip-item-wrapper",children:(0,t.jsx)("span",{className:"hover-flip-item",children:(0,t.jsx)("span",{"data-text":s.name,children:s.name})})},"category-".concat(e))))}))})}),"quote"===s.postFormat?(0,t.jsx)("blockquote",{children:(0,t.jsx)("h4",{className:"title",children:(0,t.jsx)(c(),{href:"/posts/".concat(s.slug),children:s.title})})}):(0,t.jsx)("h4",{className:"title",children:(0,t.jsx)(c(),{href:"/posts/".concat(s.slug),children:s.title})}),(0,t.jsxs)("div",{className:"post-meta-wrapper",children:[(0,t.jsx)("div",{className:"post-meta",children:(0,t.jsxs)("div",{className:"content",children:[(e=s.authors,(0,t.jsx)("h6",{className:"post-author-name",children:e.map(((s,a)=>(0,t.jsx)(c(),{href:"/authors/".concat(s.slug),className:"hover-flip-item-wrapper",children:(0,t.jsx)("span",{className:"hover-flip-item",children:(0,t.jsxs)("span",{"data-text":s.name,children:[s.name,a!==e.length-1&&(0,t.jsx)("span",{children:"\xa0\u0e41\u0e25\u0e30\xa0"})]})})},"post-layout-two-featured-post-author-".concat(a))))})),(0,t.jsxs)("ul",{className:"post-meta-list",children:[(0,t.jsx)("li",{children:s.date}),(0,t.jsx)("li",{children:s.read_time})]})]})}),(0,t.jsx)("ul",{className:"social-share-transparent justify-content-end"})]})]})]},s.slug);var e,a})),""!==r?(0,t.jsx)("div",{className:"mt-4 text-sm-end",children:(0,t.jsx)(c(),{href:r,className:"see-all-topics",children:h})}):m>1?(0,t.jsx)(o(),{previousLabel:(0,t.jsx)("i",{className:"fas fa-arrow-left"}),nextLabel:(0,t.jsx)("i",{className:"fas fa-arrow-right"}),pageCount:m,onPageChange:p,containerClassName:"pagination",previousLinkClassName:"prev",nextLinkClassName:"next",disabledClassName:"disabled",activeClassName:"current",forcePage:x-1}):void 0]})}},7304:function(s,e,a){"use strict";var t=a(5893),l=a(9314),c=(a(4578),a(217)),i=(a(9264),a(8075));e.Z=s=>{let{dataPost:e,categories:a}=s;return(0,t.jsxs)("div",{className:"sidebar-inner",children:[(0,t.jsx)(l.Z,{categories:a}),(0,t.jsx)(c.Z,{postData:e}),(0,t.jsx)(i.Z,{})]})}},1734:function(s,e,a){"use strict";a.d(e,{G:function(){return i},f:function(){return n}});var t=a(5893),l=a(1664),c=a.n(l);const i=s=>{let{title:e}=s;return(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsx)("div",{className:"section-title",children:(0,t.jsx)("h2",{className:"title",children:e})})})})},n=s=>{let{title:e,btnText:a,btnUrl:l}=s;return(0,t.jsxs)("div",{className:"row align-items-center mb--30",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-8 col-sm-8 col-12",children:(0,t.jsx)("div",{className:"section-title",children:(0,t.jsx)("h2",{className:"title",children:e})})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-4 col-sm-4 col-12",children:(0,t.jsx)("div",{className:"see-all-topics text-start text-sm-end mt_mobile--20",children:(0,t.jsx)(c(),{href:l||"#",className:"axil-link-button",children:a})})})]})}},6450:function(s,e,a){"use strict";a.r(e),a.d(e,{__N_SSG:function(){return A},default:function(){return k}});var t=a(5893),l=a(7294),c=a(6072),i=a(9701),n=a(1664),r=a.n(n),o=a(5675),d=a.n(o),h=a(6066),m=a(9752);var x=s=>{let{postData:e}=s;const a=e.filter((s=>!0===s.hero));function l(s){const{className:e,onClick:a}=s;return(0,t.jsx)("button",{className:"slide-arrow next-arrow ".concat(e),onClick:a,children:(0,t.jsx)("i",{className:"fal fa-arrow-right"})})}function c(s){const{className:e,onClick:a}=s;return(0,t.jsx)("button",{className:"slide-arrow prev-arrow ".concat(e),onClick:a,children:(0,t.jsx)("i",{className:"fal fa-arrow-left"})})}const i={dots:!1,infinite:!1,speed:800,fade:!0,slidesToShow:1,slidesToScroll:1,nextArrow:(0,t.jsx)(l,{}),prevArrow:(0,t.jsx)(c,{})};function n(s){return(0,t.jsx)("h6",{className:"post-author-name",children:s.map(((e,a)=>(0,t.jsx)(r(),{href:"/authors/".concat(e.slug),className:"hover-flip-item-wrapper",children:(0,t.jsxs)("span",{className:"hover-flip-item",children:[(0,t.jsx)("span",{"data-text":e.name,children:e.name}),a!==s.length-1&&(0,t.jsx)("span",{children:"\xa0\u0e41\u0e25\u0e30\xa0"})]})},"author-".concat(a))))})}return(0,t.jsx)("div",{className:"slider-area bg-color-grey",children:(0,t.jsx)("div",{className:"axil-slide slider-style-1",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsx)(h.Z,{...i,className:"slider-activation axil-slick-arrow",children:a.slice(0,3).map((s=>{return(0,t.jsxs)("div",{className:"content-block",children:[s.coverImage?(0,t.jsx)("div",{className:"post-thumbnail",children:(0,t.jsx)(r(),{href:"/posts/".concat(s.slug),children:(0,t.jsx)("div",{style:{backgroundImage:"url(".concat(s.coverImage,")"),backgroundSize:"cover",backgroundPosition:"center",width:"100%",paddingBottom:"50%",cursor:"pointer"},alt:s.title,role:"img","aria-label":s.title})})}):"",(0,t.jsxs)("div",{className:"post-content",children:[(a=s.categories,(0,t.jsx)("div",{className:"post-cat",children:a.map(((s,e)=>(0,t.jsx)("div",{className:"post-cat-list",children:(0,t.jsx)(r(),{href:"/categories/".concat((0,m.lV)(s.slug)),className:"hover-flip-item-wrapper",children:(0,t.jsx)("span",{className:"hover-flip-item",children:(0,t.jsx)("span",{"data-text":s.name,children:s.name})})})},"category-".concat(e))))})),(0,t.jsx)("h2",{className:"title",children:(0,t.jsx)(r(),{href:"/posts/".concat(s.slug),children:s.title})}),(0,t.jsxs)("div",{className:"post-meta-wrapper with-button",children:[(0,t.jsxs)("div",{className:"post-meta",children:[(e=s.authors,(0,t.jsx)(t.Fragment,{children:e.map(((s,e)=>(0,t.jsx)("div",{className:"post-author-avatar border-rounded",children:(0,t.jsx)(d(),{src:s.picture,alt:s.name,height:50,width:50,placeholder:"blur",blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII="})},"author-picture-".concat(e))))})),(0,t.jsxs)("div",{className:"content",children:[n(s.authors),(0,t.jsxs)("ul",{className:"post-meta-list",children:[(0,t.jsx)("li",{children:s.date}),(0,t.jsx)("li",{children:"200K Views"})]})]})]}),(0,t.jsx)("div",{className:"read-more-button cerchio",children:(0,t.jsx)(r(),{href:"/posts/".concat(s.slug),className:"axil-button button-rounded hover-flip-item-wrapper",children:(0,t.jsx)("span",{className:"hover-flip-item",children:(0,t.jsx)("span",{"data-text":"Read Post",children:"Read Post"})})})})]})]})]},s.slug);var e,a}))})})})})})})},p=a(1734);var u=s=>{let{postData:e,itemShow:a}=s;const l=e.filter((s=>!0===s.featured));function c(s){return(0,t.jsx)("h6",{className:"post-author-name",children:s.map(((e,a)=>(0,t.jsx)(r(),{href:"/authors/".concat(e.slug),className:"hover-flip-item-wrapper",children:(0,t.jsx)("span",{className:"hover-flip-item",children:(0,t.jsxs)("span",{"data-text":e.name,children:[e.name,a!==s.length-1&&(0,t.jsx)("span",{children:"\xa0\u0e41\u0e25\u0e30\xa0"})]})})},"post-layout-one-featured-post-author-${index}")))})}return(0,t.jsx)(t.Fragment,{children:l.slice(0,a).map((s=>{return(0,t.jsx)("div",{className:"col-lg-6 col-xl-6 col-md-12 col-12 mt--30",children:(0,t.jsxs)("div",{className:"content-block content-direction-column post-horizontal thumb-border-rounded",children:[(0,t.jsxs)("div",{className:"post-content",children:[(a=s.categories,(0,t.jsx)("div",{className:"post-cat",children:a.map(((s,e)=>(0,t.jsx)("div",{className:"post-cat-list",children:(0,t.jsx)(r(),{href:"/categories/".concat((0,m.lV)(s.slug)),className:"hover-flip-item-wrapper",children:(0,t.jsx)("span",{className:"hover-flip-item",children:(0,t.jsx)("span",{"data-text":s.name,children:s.name})})})},"category-".concat(e))))})),(0,t.jsx)("h4",{className:"title",children:(0,t.jsx)(r(),{href:"/posts/".concat(s.slug),children:s.title})}),(0,t.jsxs)("div",{className:"post-meta",children:[(e=s.authors,(0,t.jsx)(t.Fragment,{children:e.map(((s,e)=>(0,t.jsx)("div",{className:"post-author-avatar border-rounded",children:(0,t.jsx)(d(),{src:s.picture,alt:s.name,height:50,width:50,placeholder:"blur",blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII="})},"author-picture-".concat(e))))})),(0,t.jsxs)("div",{className:"content",children:[c(s.authors),(0,t.jsxs)("ul",{className:"post-meta-list",children:[(0,t.jsx)("li",{children:s.date}),(0,t.jsx)("li",{children:s.post_views})]})]})]})]}),s.coverImage?(0,t.jsx)("div",{className:"post-thumbnail",children:(0,t.jsx)(r(),{href:"/posts/".concat(s.slug),children:(0,t.jsx)("div",{style:{backgroundImage:"url(".concat(s.coverImage,")")},alt:s.title,role:"img","aria-label":s.title})})}):""]})},s.slug);var e,a}))})};var j=s=>{let{postData:e}=s;const a=(0,l.useRef)("");return(0,m.Rw)(a),(0,t.jsx)("div",{className:"axil-featured-post axil-section-gap bg-color-grey",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(p.G,{title:"More Featured Posts."}),(0,t.jsx)("div",{className:"row",ref:a,children:(0,t.jsx)(u,{postData:e,itemShow:"2"})})]})})},g=a(9686),v=a(8924);a(9862);var N=s=>{let{postData:e,adBanner:a,headingTitle:c}=s;const i=e[0].category.slug,n=e[0].posts||[],[o,m]=(0,l.useState)(i),[x,u]=(0,l.useState)(n);function j(s){const{className:e,onClick:a}=s;return(0,t.jsx)("button",{className:"slide-arrow next-arrow ".concat(e),onClick:a,children:(0,t.jsx)("i",{className:"fal fa-arrow-right"})})}function N(s){const{className:e,onClick:a}=s;return(0,t.jsx)("button",{className:"slide-arrow prev-arrow ".concat(e),onClick:a,children:(0,t.jsx)("i",{className:"fal fa-arrow-left"})})}const f={dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,nextArrow:(0,t.jsx)(j,{}),prevArrow:(0,t.jsx)(N,{}),responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]};return(0,t.jsx)("div",{className:"axil-tab-area axil-section-gap bg-color-white",children:(0,t.jsx)("div",{className:"wrapper",children:(0,t.jsxs)("div",{className:"container",children:[!0===a?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("ins",{className:"adsbygoogle",style:{display:"block",marginBottom:"1rem"},"data-ad-client":"ca-pub-5063470115459401","data-ad-slot":"7876194430","data-ad-format":"auto","data-full-width-responsive":"true"})}):"",(0,t.jsx)(p.G,{title:c||"Innovation & Tech"}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-12",children:(0,t.jsxs)(g.Z.Container,{id:"axilTab",defaultActiveKey:o,children:[(0,t.jsx)(v.Z,{className:"axil-tab-button nav nav-tabs mt--20",children:e.map((s=>{let{category:a}=s;return(0,t.jsx)(v.Z.Item,{children:(0,t.jsx)(v.Z.Link,{onClick:()=>(s=>{m(s);const a=e.filter((e=>e.category.slug===s));u(a[0].posts)})(a.slug),eventKey:a.slug,children:a.name})},a.id)}))}),(0,t.jsx)(g.Z.Content,{children:(0,t.jsx)(g.Z.Pane,{eventKey:o,className:"single-tab-content",children:(0,t.jsx)(h.Z,{...f,className:"modern-post-activation slick-layout-wrapper axil-slick-arrow arrow-between-side",children:x.map((s=>(0,t.jsx)("div",{className:"slick-single-layout",children:(0,t.jsxs)("div",{className:"content-block modern-post-style text-center content-block-column",children:[(0,t.jsxs)("div",{className:"post-content",children:[(0,t.jsx)("div",{className:"post-cat"}),(0,t.jsx)("h4",{className:"title",children:(0,t.jsx)(r(),{href:"/posts/".concat(s.slug),children:s.title})})]}),s.coverImage?(0,t.jsxs)("div",{className:"post-thumbnail",children:[(0,t.jsx)("div",{className:"round-shape",children:(0,t.jsx)(d(),{src:"/images/icons/shape-01.webp",alt:"Round Shape",height:77,width:390,priority:!0})}),(0,t.jsx)(r(),{href:"/posts/".concat(s.slug),children:(0,t.jsx)(d(),{src:s.coverImage,alt:s.title,height:260,width:390,priority:!0})})]}):""]})},s.slug)))})})})]})})})]})})})},f=a(6828),w=a(8084),b=a(6771),A=!0;function k(s){let{heroPosts:e,featuredPosts:a,postsByHilightedCategories:n,categories:r,posts:o,popularPosts:d,tags:h,trendingAuthors:m}=s;return(0,l.useEffect)((()=>{}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Z,{pageTitle:"Tech Monday"}),(0,t.jsx)(i.Z,{postData:e}),(0,t.jsx)(x,{postData:e}),(0,t.jsx)(j,{postData:a}),(0,t.jsx)(N,{postData:n,adBanner:!0}),(0,t.jsx)(w.Z,{categories:r}),(0,t.jsx)(f.Z,{postData:o.data,categories:r,popularPosts:d,adBanner:!1,contentListLink:"/posts",contentListLinkText:"\u0e14\u0e39\u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"}),(0,t.jsx)(b.Z,{categories:r,tags:h,authors:m})]})}}},function(s){s.O(0,[286,110,686,283,774,888,179],(function(){return e=6518,s(s.s=e);var e}));var e=s.O();_N_E=e}]);