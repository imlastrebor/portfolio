(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(197),i=n(201),l=n(194);function s(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n/* @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700&display=swap'); */\n@import url('https://fonts.googleapis.com/css?family=B612:400,700&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Archivo:600,700&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Muli:700,900&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:700&display=swap');\nbody, html{\n  font-family: \"B612\", sans-serif;\n  margin: 0 !important;\n  padding: 0 !important;\n  /* overflow:hidden; */\n  height:100%;\n}\nbody{\n  background-color:#000709;\n  &::after {\n    animation: ","  8s steps(10) infinite;\n    background: url(",');\n    content: "";\n    height: 300%;\n    left: -50%;\n    opacity: .1;\n    position: fixed;\n    top: -100%;\n    width: 300%;\n    z-index: -2;\n}\n}\n']);return s=function(){return e},e}var c=Object(l.c)(["0%,100%{transform:translate(0,0)}10%{transform:translate(-5%,-10%)}20%{transform:translate(-15%,5%)}30%{transform:translate(7%,-25%)}40%{transform:translate(-5%,25%)}50%{transform:translate(-15%,10%)}60%{transform:translate(15%,0%)}70%{transform:translate(0%,15%)}80%{transform:translate(3%,35%)}90%{transform:translate(-10%,10%)}"]),p=Object(l.a)(s(),c,function(e){return e.imgUrl}),d=l.b.div.withConfig({displayName:"layout_scroll__LayoutWrapper",componentId:"t8epe4-0"})(["max-width:960px;margin:0 auto;padding-top:100px;height:100%;"]),u=function(e){var t=e.children,n=r.data;return o.a.createElement("div",null,o.a.createElement(p,{imgUrl:n.wordpressWpMedia.source_url}),o.a.createElement(i.a,null),o.a.createElement(d,null,t))};n.d(t,"portfolioQuery",function(){return x});var m=l.b.div.withConfig({displayName:"portfolio__PortfolioWrapper",componentId:"sc-96spiz-0"})(["max-width:90%;max-height:90vh;margin:auto;margin-top:-20px;overflow-y:scroll;"]),f=l.b.div.withConfig({displayName:"portfolio__PortfolioInner",componentId:"sc-96spiz-1"})(["margin:auto;padding-bottom:50px;"]),g=l.b.h1.withConfig({displayName:"portfolio__WorkTitle",componentId:"sc-96spiz-2"})(["color:#fff;"]),h=l.b.img.withConfig({displayName:"portfolio__FeaturedImage",componentId:"sc-96spiz-3"})(["max-width:300px;margin:16px 0;margin:auto;display:block;"]),y=l.b.div.withConfig({displayName:"portfolio__PortfolioText",componentId:"sc-96spiz-4"})(["color:#fff;"]),_=l.b.div.withConfig({displayName:"portfolio__GalleryTitle",componentId:"sc-96spiz-5"})(["color:#fff;text-align:center;"]),b=l.b.div.withConfig({displayName:"portfolio__GalleryCaption",componentId:"sc-96spiz-6"})(["color:#fff;text-align:center;"]),w=l.b.img.withConfig({displayName:"portfolio__GalleryImg",componentId:"sc-96spiz-7"})(["max-width:300px;margin:auto;display:block;"]),x=(t.default=function(e){var t=e.pageContext;e.data;return o.a.createElement(u,null,o.a.createElement(m,null,o.a.createElement(f,null,o.a.createElement(g,null,t.title),o.a.createElement(h,{src:t.featured_media.source_url}),o.a.createElement(y,{dangerouslySetInnerHTML:{__html:t.content}}),t.acf.portfolio_gallery.map(function(e){return o.a.createElement("div",{key:e.id},o.a.createElement(_,{dangerouslySetInnerHTML:{__html:e.title}}),console.log(e.source_url),o.a.createElement(w,{src:e.source_url,alt:e.caption}),o.a.createElement(b,{dangerouslySetInnerHTML:{__html:e.caption}}))}))))},"758876181")},195:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(0),o=n.n(a),r=n(66),i=n.n(r);n.d(t,"a",function(){return i.a});n(196),n(9).default.enqueue;var l=o.a.createContext({});function s(e){var t=e.staticQueryData,n=e.data,a=e.query,r=e.render,i=n?n.data:t[a]&&t[a].data;return o.a.createElement(o.a.Fragment,null,i&&r(i),!i&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,n=e.query,a=e.render,r=e.children;return o.a.createElement(l.Consumer,null,function(e){return o.a.createElement(s,{data:t,query:n,render:a||r,staticQueryData:e})})}},196:function(e,t,n){var a;e.exports=(a=n(199))&&a.default||a},197:function(e){e.exports={data:{wordpressWpMedia:{source_url:"http://localhost:8888/robertsalmi.fi/wp-content/uploads/2019/09/grungeDark.jpg",title:"grungeDark"}}}},198:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{items:[{title:"Home",object_slug:"home",object_id:8},{title:"About",object_slug:"about",object_id:10}]}}]}}}},199:function(e,t,n){"use strict";n.r(t);n(22);var a=n(0),o=n.n(a),r=n(91);t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(r.a,Object.assign({location:t,pageResources:n},n.json)):null}},200:function(e){e.exports={data:{allWordpressSiteMetadata:{edges:[{node:{name:"Robert Salmi",description:""}}]}}}},201:function(e,t,n){"use strict";var a=n(198),o=n(0),r=n.n(o),i=n(195),l=n(194),s=(n(49),n(200)),c=l.b.div.withConfig({displayName:"SiteInfo__SiteInfoWrapper",componentId:"sc-15964tp-0"})(["flex-grow:1;color:white;margin:auto 0;"]),p=Object(l.b)(i.a).withConfig({displayName:"SiteInfo__SiteTitle",componentId:"sc-15964tp-1"})(["font-weight:bold;color:white;text-decoration:none;font-size:1.5em;"]),d=function(){return r.a.createElement(i.b,{query:"1730324527",render:function(e){return r.a.createElement(c,null,r.a.createElement(p,{to:"/"},e.allWordpressSiteMetadata.edges[0].node.name),r.a.createElement("div",null,e.allWordpressSiteMetadata.edges[0].node.description))},data:s})},u=l.b.div.withConfig({displayName:"MainMenu__MainMenuWrapper",componentId:"sc-3u0erf-0"})(["z-index:5;display:flex;position:fixed;top:0;width:100%;background-color:transparent;padding:10px 0;"]),m=Object(l.b)(i.a).withConfig({displayName:"MainMenu__MenuItem",componentId:"sc-3u0erf-1"})(["color:white;padding:10px;display:block;"]),f=l.b.div.withConfig({displayName:"MainMenu__MainMenuInner",componentId:"sc-3u0erf-2"})(["max-width:960px;margin:0 auto;display:flex;width:90%;height:100%;"]);t.a=function(){return r.a.createElement(i.b,{query:"2443971660",render:function(e){return r.a.createElement(u,null,r.a.createElement(f,null,r.a.createElement(d,null),e.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(function(e){return r.a.createElement(m,{to:"/"+e.object_slug,key:e.title},e.title)})))},data:a})}}}]);
//# sourceMappingURL=component---src-templates-portfolio-js-b3fb67be619294dae020.js.map