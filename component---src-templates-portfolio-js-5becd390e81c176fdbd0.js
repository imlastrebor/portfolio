(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{234:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(238),o=a(242),s=a(235);function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n/* @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700&display=swap'); */\n/* @import url('https://fonts.googleapis.com/css?family=B612:400,700&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Archivo:600,700&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Muli:700,900&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:700&display=swap'); */\nbody, html{\n  font-family: \"B612\", sans-serif;\n  margin: 0 !important;\n  padding: 0 !important;\n  /* overflow:hidden; */\n  height:100%;\n  -webkit-overflow-scrolling: touch;\n}\nbody{\n  background-color:#000709;\n  &::after {\n    animation: ","  8s steps(10) infinite;\n    background: url(",');\n    content: "";\n    height: 300%;\n    left: -50%;\n    opacity: .1;\n    position: fixed;\n    top: -100%;\n    width: 300%;\n    z-index: -2;\n}\n}\n']);return l=function(){return e},e}var d=Object(s.c)(["0%,100%{transform:translate(0,0)}10%{transform:translate(-5%,-10%)}20%{transform:translate(-15%,5%)}30%{transform:translate(7%,-25%)}40%{transform:translate(-5%,25%)}50%{transform:translate(-15%,10%)}60%{transform:translate(15%,0%)}70%{transform:translate(0%,15%)}80%{transform:translate(3%,35%)}90%{transform:translate(-10%,10%)}"]),c=Object(s.a)(l(),d,function(e){return e.imgUrl}),u=s.b.div.withConfig({displayName:"layout_scroll__LayoutWrapper",componentId:"t8epe4-0"})(["max-width:960px;margin:0 auto;padding-top:100px;height:100%;"]),f=function(e){var t=e.children,a=i.data;return n.a.createElement("div",null,n.a.createElement(c,{imgUrl:a.wordpressWpMedia.source_url}),n.a.createElement(o.a,null),n.a.createElement(u,null,t))},p=a(259),m=a.n(p);a.d(t,"portfolioQuery",function(){return I});var g=s.b.div.withConfig({displayName:"portfolio__PortfolioWrapper",componentId:"sc-96spiz-0"})(["max-width:90%;max-height:90vh;margin:auto;margin-top:-20px;overflow-y:scroll;"]),h=s.b.div.withConfig({displayName:"portfolio__PortfolioInner",componentId:"sc-96spiz-1"})(["margin:auto;padding-bottom:50px;"]),b=s.b.h1.withConfig({displayName:"portfolio__WorkTitle",componentId:"sc-96spiz-2"})(["color:#fff;"]),y=s.b.img.withConfig({displayName:"portfolio__FeaturedImage",componentId:"sc-96spiz-3"})(["max-width:300px;margin:16px 0;margin:auto;display:block;"]),v=s.b.div.withConfig({displayName:"portfolio__PortfolioText",componentId:"sc-96spiz-4"})(["color:#fff;"]),w=s.b.div.withConfig({displayName:"portfolio__GalleryItem",componentId:"sc-96spiz-5"})(["max-width:300px;margin:auto;"]),S=s.b.div.withConfig({displayName:"portfolio__GalleryTitle",componentId:"sc-96spiz-6"})(["color:#fff;text-align:center;"]),E=s.b.div.withConfig({displayName:"portfolio__GalleryCaption",componentId:"sc-96spiz-7"})(["color:#fff;text-align:center;"]),I=(s.b.img.withConfig({displayName:"portfolio__GalleryImg",componentId:"sc-96spiz-8"})(["max-width:300px;margin:auto;display:block;"]),t.default=function(e){var t=e.pageContext;e.data;return n.a.createElement(f,null,n.a.createElement(g,null,n.a.createElement(h,null,n.a.createElement(b,null,t.title),n.a.createElement(y,{src:t.featured_media.source_url}),n.a.createElement(v,{dangerouslySetInnerHTML:{__html:t.content}}),t.acf.portfolio_gallery.map(function(e){return n.a.createElement(w,{key:e.id},n.a.createElement(S,{dangerouslySetInnerHTML:{__html:e.title}}),n.a.createElement(m.a,{fluid:e.localFile.childImageSharp.fluid}),console.log(e.localFile.childImageSharp.fluid),n.a.createElement(E,{dangerouslySetInnerHTML:{__html:e.caption}}))}),n.a.createElement("div",null))))},"758876181")},236:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),i=a(70),o=a.n(i);a.d(t,"a",function(){return o.a});a(237),a(9).default.enqueue;var s=n.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,o=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,o&&i(o),!o&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,r=e.render,i=e.children;return n.a.createElement(s.Consumer,null,function(e){return n.a.createElement(l,{data:t,query:a,render:r||i,staticQueryData:e})})}},237:function(e,t,a){var r;e.exports=(r=a(240))&&r.default||r},238:function(e){e.exports={data:{wordpressWpMedia:{source_url:"http://localhost:8888/robertsalmi.fi/wp-content/uploads/2019/09/grungeDark.jpg",title:"grungeDark"}}}},239:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{items:[{title:"Home",object_slug:"home",object_id:8},{title:"About",object_slug:"about",object_id:10}]}}]}}}},240:function(e,t,a){"use strict";a.r(t);a(22);var r=a(0),n=a.n(r),i=a(98);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},241:function(e){e.exports={data:{allWordpressSiteMetadata:{edges:[{node:{name:"Robert Salmi",description:""}}]}}}},242:function(e,t,a){"use strict";var r=a(239),n=a(0),i=a.n(n),o=a(236),s=a(235),l=(a(40),a(241)),d=s.b.div.withConfig({displayName:"SiteInfo__SiteInfoWrapper",componentId:"sc-15964tp-0"})(["flex-grow:1;color:white;margin:auto 0;"]),c=Object(s.b)(o.a).withConfig({displayName:"SiteInfo__SiteTitle",componentId:"sc-15964tp-1"})(["font-weight:bold;color:white;text-decoration:none;font-size:1.5em;"]),u=function(){return i.a.createElement(o.b,{query:"1730324527",render:function(e){return i.a.createElement(d,null,i.a.createElement(c,{to:"/"},e.allWordpressSiteMetadata.edges[0].node.name),i.a.createElement("div",null,e.allWordpressSiteMetadata.edges[0].node.description))},data:l})},f=s.b.div.withConfig({displayName:"MainMenu__MainMenuWrapper",componentId:"sc-3u0erf-0"})(["z-index:5;display:flex;position:fixed;top:0;width:100%;background-color:transparent;padding:10px 0;"]),p=Object(s.b)(o.a).withConfig({displayName:"MainMenu__MenuItem",componentId:"sc-3u0erf-1"})(["color:white;padding:10px;display:block;"]),m=s.b.div.withConfig({displayName:"MainMenu__MainMenuInner",componentId:"sc-3u0erf-2"})(["max-width:960px;margin:0 auto;display:flex;width:90%;height:100%;"]);t.a=function(){return i.a.createElement(o.b,{query:"2443971660",render:function(e){return i.a.createElement(f,null,i.a.createElement(m,null,i.a.createElement(u,null),e.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(function(e){return i.a.createElement(p,{to:"/"+e.object_slug,key:e.title},e.title)})))},data:r})}},244:function(e,t,a){var r=a(1),n=a(7),i=a(33),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},259:function(e,t,a){"use strict";a(23),a(24),a(13),a(75),a(149),a(260);var r=a(16);t.__esModule=!0,t.default=void 0;var n,i=r(a(77)),o=r(a(76)),s=r(a(150)),l=r(a(151)),d=r(a(0)),c=r(a(54)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),m=function(e){var t=u(e),a=f(t);return p[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function w(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),[].concat(t,a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var _=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)}).join("")+"<img "+d+o+s+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(C,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},C=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var M=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=_(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,I=e.loading,_=e.draggable,M=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:M?1:0,transition:z?"opacity "+b+"ms":"none"},s),R="boolean"==typeof h?"lightgray":h,N={transitionDelay:b+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&N,{},s,{},f),j={title:t,alt:this.state.isVisible?"":a,style:k,className:p};if(m){var W=m,V=W[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),R&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&N)}),V.base64&&d.default.createElement(L,{src:V.base64,spreadProps:j,imageVariants:W,generateSources:E}),V.tracedSVG&&d.default.createElement(L,{src:V.tracedSVG,spreadProps:j,imageVariants:W,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(W),d.default.createElement(C,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:I,draggable:_})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:I},V,{imageVariants:W}))}}))}if(g){var T=g,q=T[0],P=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete P.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},R&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:R,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},z&&N)}),q.base64&&d.default.createElement(L,{src:q.base64,spreadProps:j,imageVariants:T,generateSources:E}),q.tracedSVG&&d.default.createElement(L,{src:q.tracedSVG,spreadProps:j,imageVariants:T,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(T),d.default.createElement(C,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:I,draggable:_})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:I},q,{imageVariants:T}))}}))}return null},t}(d.default.Component);M.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),O=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});M.propTypes={resolutions:z,sizes:O,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([O,c.default.arrayOf(O)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var R=M;t.default=R},260:function(e,t,a){"use strict";a(244)("fixed",function(e){return function(){return e(this,"tt","","")}})}}]);
//# sourceMappingURL=component---src-templates-portfolio-js-5becd390e81c176fdbd0.js.map