webpackJsonp([7243222379581],{54:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var r=a(20),i=o(r),s=a(27),l=o(s),d=a(26),u=o(d),c=a(67),f=o(c),p=a(66),m=o(p),h=a(1),y=o(h),g=a(2),b=o(g),v=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},_=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},E=void 0,S=[],j=function(e,t){n().observe(e),S.push([e,t])},N=null,O=function(){if(null!==N)return N;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return N=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},M=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",o=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+i+s+t+a+r+n+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},L=function(e){var t=e.style,a=e.onLoad,o=(0,f.default)(e,["style","onLoad"]);return y.default.createElement("img",(0,m.default)({},o,{onLoad:a,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};L.propTypes={style:b.default.object,onLoad:b.default.func};var R=function(e){function t(a){(0,i.default)(this,t);var o=(0,l.default)(this,e.call(this,a)),n=!0,r=!0,s=!1,d=_(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!1,s=!0),"undefined"==typeof window&&(n=!1,r=!1),o.state={isVisible:n,imgLoaded:r,IOSupported:s},o.handleRef=o.handleRef.bind(o),o}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&j(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,o=t.alt,n=t.className,r=t.outerWrapperClassName,i=t.style,s=void 0===i?{}:i,l=t.imgStyle,d=void 0===l?{}:l,u=t.placeholderStyle,c=void 0===u?{}:u,f=t.sizes,p=t.resolutions,h=t.backgroundColor,g=t.Tag,b=void 0;b="boolean"==typeof h?"lightgray":h;var w=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d,c),_=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(f){var E=f;return E.srcWebp&&E.srcSetWebp&&O()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),y.default.createElement(g,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},y.default.createElement(g,{className:(n?n:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},y.default.createElement(g,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&y.default.createElement(L,{alt:o,title:a,src:E.base64,style:w}),E.tracedSVG&&y.default.createElement(L,{alt:o,title:a,src:E.tracedSVG,style:w}),b&&y.default.createElement(g,{title:a,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(L,{alt:o,title:a,srcSet:E.srcSet,src:E.src,sizes:E.sizes,style:_,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,m.default)({alt:o,title:a},E))}})))}if(p){var S=p,j=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},s);return"inherit"===s.display&&delete j.display,S.srcWebp&&S.srcSetWebp&&O()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),y.default.createElement(g,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},y.default.createElement(g,{className:(n?n:"")+" gatsby-image-wrapper",style:j,ref:this.handleRef},S.base64&&y.default.createElement(L,{alt:o,title:a,src:S.base64,style:w}),S.tracedSVG&&y.default.createElement(L,{alt:o,title:a,src:S.tracedSVG,style:w}),b&&y.default.createElement(g,{title:a,style:{backgroundColor:b,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&y.default.createElement(L,{alt:o,title:a,width:S.width,height:S.height,srcSet:S.srcSet,src:S.src,style:_,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,m.default)({alt:o,title:a,width:S.width,height:S.height},S))}})))}return null},t}(y.default.Component);R.defaultProps={fadeIn:!0,alt:"",Tag:"div"},R.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=R},47:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.postFragment=void 0;var s=a(1),l=o(s),d=a(2),u=o(d),c=a(15),f=o(c),p=a(57),m=o(p),h=a(54),y=o(h);a(58);var g=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data,t={title:e.node.frontmatter.title,slug:e.node.fields.slug,description:e.node.frontmatter.description,featuredImage:e.node.frontmatter.featuredImage,date:e.node.frontmatter.date,category:e.node.frontmatter.category,categorySlug:e.node.fields.categorySlug};return l.default.createElement("div",{className:"post"},l.default.createElement(f.default,{to:t.slug},l.default.createElement("h2",{className:"post__title"},l.default.createElement("span",{className:"post__title-link"},t.title))),l.default.createElement("div",{className:"post__meta"},l.default.createElement("time",{className:"post__meta-time",dateTime:(0,m.default)(t.date).format("MMMM D, YYYY")},(0,m.default)(t.date).format("MMMM YYYY")),l.default.createElement("span",{className:"post__meta-divider"}),l.default.createElement("span",{className:"post__meta-category",key:t.categorySlug},t.category)),t.featuredImage&&l.default.createElement(f.default,{to:t.slug},l.default.createElement("div",{className:"post__img"},l.default.createElement(y.default,{sizes:t.featuredImage.childImageSharp.sizes,fadeIn:!1}))),l.default.createElement("div",{className:"post__description"},l.default.createElement("p",null,t.description)),l.default.createElement(f.default,{className:"post__readmore",to:t.slug},"→ Weiterlesen"))},t}(l.default.Component);g.propTypes={data:u.default.object.isRequired},t.default=g;t.postFragment="** extracted graphql fragment **"},58:function(e,t){},235:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(1),l=o(s),d=a(2),u=o(d),c=a(47),f=o(c),p=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=[],t=this.props.pathContext.tag,a=this.props.data.allMarkdownRemark.edges;return a.forEach(function(t){e.push(l.default.createElement(f.default,{data:t,key:t.node.fields.slug}))}),l.default.createElement("div",{className:"content"},l.default.createElement("div",{className:"content__inner"},l.default.createElement("div",{className:"page"},l.default.createElement("h1",{className:"page__title"},"Artikel mit dem Tag «",t,"»"),l.default.createElement("div",{className:"page__body"},e))))},t}(l.default.Component);p.propTypes={data:u.default.shape({allMarkdownRemark:u.default.shape({edges:u.default.array.isRequired})}),pathContext:u.default.shape({tag:u.default.string.isRequired})},t.default=p,e.exports=t.default},244:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=a(1),l=o(s),d=a(2),u=o(d),c=a(23),f=o(c),p=a(24),m=o(p),h=a(25),y=o(h),g=a(235),b=o(g);a(83);var v=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pathContext.tag;return l.default.createElement("div",{className:"layout"},l.default.createElement("div",{className:"layout__inner"},l.default.createElement(f.default,{title:"Artikel mit dem Tag «"+t+"» - "+e}),l.default.createElement(m.default,this.props),l.default.createElement(b.default,this.props),l.default.createElement(y.default,this.props)))},t}(l.default.Component);v.propTypes={data:u.default.shape({site:u.default.shape({siteMetadata:u.default.shape({title:u.default.string.isRequired})})}),pathContext:u.default.shape({tag:u.default.string.isRequired})},t.default=v;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-template-js-ac5e581be143bc3405c6.js.map