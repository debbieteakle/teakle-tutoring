/*! For license information please see component---src-pages-index-js-a4690d2d4af759ddd99e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0jh0":function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},"1eu9":function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var n=r(a("uDP2")),i=r(a("j8BX")),o=r(a("v06X")),s=r(a("XEEL")),l=r(a("0jh0")),c=r(a("q1tI")),d=r(a("17x9")),u=r(a("MVkf")),f=a("doIQ"),m=a("AjcD"),p=a("nKes"),g=a("KuKR"),h=function(e){function t(t){var a;a=e.call(this,t)||this,(0,l.default)((0,o.default)(a),"cleanUpListeners",void 0),(0,l.default)((0,o.default)(a),"intersectionListener",(function(){var e=(0,m.inImageCache)(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.imageRef=(0,m.activatePictureRef)(a.imageRef,a.props,a.selfRef),a.setState((function(e){return{isVisible:!0,imageState:e.imageState+1}}),(function(){a.setState((function(t){return{imgLoaded:e,imgCached:!!a.imageRef.currentSrc,imageState:t.imageState+1}}))}))}));var r=!0,n=!1,s=t.fadeIn,c=(0,m.inImageCache)(t);!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var d=!(t.critical&&!s),f=(0,p.fixClassName)(t),g=f[0],h=f[1];return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:s,hasNoScript:d,seenBefore:c,imageState:0,currentClassNames:g,addedClassName:h},a.backgroundStyles=(0,p.presetBackgroundStyles)((0,u.default)(t.className)),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)(a)),a.handleRef=a.handleRef.bind((0,o.default)(a)),a.imageRef=(0,m.createPictureRef)((0,i.default)({},t,{isVisible:r}),a.handleImageLoaded),a.bgImage=(0,m.initialBgImage)(t),a.selfRef=null,a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.backgroundStyles=(0,p.presetBackgroundStyles)((0,u.default)(this.props.className)),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:(0,m.inImageCache)(this.props)}),this.props.critical&&(0,m.imageReferenceCompleted)(this.imageRef)&&this.handleImageLoaded();var e=(0,p.fixClassName)(this.props),t=e[0],a=e[1];this.setState({currentClassNames:t,addedClassName:a})},a.componentDidUpdate=function(e){var t=this;if((0,m.imagePropsChanged)(this.props,e)){var a=(0,m.inImageCache)(this.props),r=(0,p.fixClassName)(this.props),n=r[0],o=r[1];this.setState({isVisible:a||this.props.critical,imgLoaded:a,currentClassNames:n,addedClassName:o},(function(){t.bgImage=(0,m.getCurrentFromData)({data:t.imageRef,propName:"currentSrc",returnArray:!0})||(0,m.getCurrentFromData)({data:t.imageRef,propName:"src",returnArray:!0}),t.imageRef=(0,m.createPictureRef)((0,i.default)({},t.props,{isVisible:t.state.isVisible}),t.handleImageLoaded)}))}},a.componentWillUnmount=function(){this.imageRef&&(Array.isArray(this.imageRef)?this.imageRef.forEach((function(e){return e.onload=null})):this.imageRef.onload=null),this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){this.selfRef=e,this.state.IOSupported&&e&&(this.cleanUpListeners=(0,g.listenToIntersections)(e,this.intersectionListener))},a.handleImageLoaded=function(){(0,m.activateCacheForImage)(this.props),this.setState((function(e){return{imgLoaded:!0,imageState:e.imageState+1}})),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e,t,a=(0,p.fixOpacity)((0,f.convertProps)(this.props),this.props.preserveStackingContext),r=a.className,o=a.style,s=void 0===o?{}:o,l=a.fluid,d=a.fixed,u=a.backgroundColor,g=a.durationFadeIn,h=a.Tag,y=a.children,v=a.classId,b=void 0===v?r?"":Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7)+"_depr":v,E=(0,n.default)(a,["className","style","fluid","fixed","backgroundColor","durationFadeIn","Tag","children","classId"]),w=(0,f.stripRemainingProps)(E),S="boolean"==typeof u?"lightgray":void 0!==u?u:"",x=!0===this.state.fadeIn&&!this.state.imgCached||"soft"===this.props.fadeIn,N=this.state.imgLoaded?g+"ms":"0.25s",C=(0,i.default)({position:"relative"},s);if(this.props.preserveStackingContext||(C.opacity=.99),l)e=l,t=Array.isArray(l)?l[0]:l;else{if(!d)return null;e=d,C.width=e.width,C.height=e.height,C.display="inline-block","inherit"===s.display&&delete C.display,t=Array.isArray(d)?d[0]:d}var A=(0,m.switchImageSettings)({image:e,bgImage:this.bgImage,imageRef:this.imageRef,state:this.state});this.bgImage=A.nextImageArray||A.nextImage||this.bgImage;var I=(0,p.createPseudoStyles)((0,i.default)({classId:b,className:this.state.currentClassNames,transitionDelay:N,bgColor:S,backgroundStyles:this.backgroundStyles,style:s,fadeIn:x},A)),k=(0,p.createNoScriptStyles)({image:e,bgColor:S,classId:b,className:this.state.currentClassNames,backgroundStyles:this.backgroundStyles,style:s}),O=""+(l&&"fluid")+(d&&"fixed")+"-"+JSON.stringify(t.srcSet);return c.default.createElement(h,(0,i.default)({className:""+(this.state.currentClassNames||"")+(b&&" gatsby-background-image-"+b)+" gatsby-image-wrapper",style:(0,i.default)({},C,{},this.backgroundStyles),ref:this.handleRef,key:O},w),c.default.createElement("style",{dangerouslySetInnerHTML:{__html:I}}),this.state.hasNoScript&&c.default.createElement("noscript",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:k}})),y)},t}(c.default.Component);h.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,Tag:"div",preserveStackingContext:!1};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});h.propTypes={resolutions:d.default.oneOfType([y,d.default.arrayOf(d.default.oneOfType([y,d.default.string]))]),sizes:d.default.oneOfType([v,d.default.arrayOf(d.default.oneOfType([v,d.default.string]))]),fixed:d.default.oneOfType([y,d.default.arrayOf(d.default.oneOfType([y,d.default.string]))]),fluid:d.default.oneOfType([v,d.default.arrayOf(d.default.oneOfType([v,d.default.string]))]),fadeIn:d.default.oneOfType([d.default.string,d.default.bool]),durationFadeIn:d.default.number,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.oneOfType([d.default.object,d.default.array]),backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,classId:d.default.string,preserveStackingContext:d.default.bool};var b=h;t.default=b},"4fRq":function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var r=new Uint8Array(16);e.exports=function(){return a(r),r}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}},AjcD:function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.imageLoaded=t.imageReferenceCompleted=t.createDummyImageArray=t.initialBgImage=t.imageArrayPropsChanged=t.imagePropsChanged=t.getUrlString=t.getCurrentFromData=t.switchImageSettings=t.activateMultiplePictureRefs=t.activatePictureRef=t.createMultiplePictureRefs=t.createPictureRef=t.hasPictureElement=t.resetImageCache=t.activateCacheForMultipleImages=t.activateCacheForImage=t.allInImageCache=t.inImageCache=void 0;var n=r(a("j8BX")),i=a("doIQ"),o=Object.create({}),s=function(e){var t=(0,i.convertProps)(e);if((0,i.hasImageArray)(t))return l(e);var a=t.fluid?t.fluid.src:t.fixed?t.fixed.src:null;return o[a]||!1};t.inImageCache=s;var l=function(e){var t=(0,i.convertProps)(e);return(t.fluid||t.fixed).every((function(e){return t.fluid?s({fluid:e}):s({fixed:e})}))};t.allInImageCache=l;var c=function(e,t){var a=(0,i.convertProps)(e);if((0,i.hasImageArray)(a))return d(e);var r=a.fluid?a.fluid.src:a.fixed?a.fixed.src:null;r&&(o[r]=!0)};t.activateCacheForImage=c;var d=function(e){var t=(0,i.convertProps)(e);(t.fluid||t.fixed).forEach((function(e){t.fluid?c({fluid:e}):c({fixed:e})}))};t.activateCacheForMultipleImages=d;t.resetImageCache=function(){for(var e in o)delete o[e]};var u=function(){return"undefined"!=typeof HTMLPictureElement||"undefined"==typeof window};t.hasPictureElement=u;var f=function(e,t){var a=(0,i.convertProps)(e);if("undefined"!=typeof window&&(void 0!==a.fluid||void 0!==a.fixed)){if((0,i.hasImageArray)(a))return m(e,t);var r=new Image;return r.onload=function(){return t()},r.complete||"function"!=typeof a.onLoad||r.addEventListener("load",a.onLoad),"function"==typeof a.onError&&r.addEventListener("error",a.onError),a.crossOrigin&&(r.crossOrigin=a.crossOrigin),a.critical||a.isVisible?p(r,a):r}return null};t.createPictureRef=f;var m=function(e,t){var a=(0,i.convertProps)(e);return(a.fluid||a.fixed).map((function(e){return a.fluid?f((0,n.default)({},a,{fluid:e}),t):f((0,n.default)({},a,{fixed:e}),t)}))};t.createMultiplePictureRefs=m;var p=function(e,t,a){void 0===a&&(a=null);var r=(0,i.convertProps)(t);if("undefined"!=typeof window&&(void 0!==r.fluid||void 0!==r.fixed)){if((0,i.hasImageArray)(r))return g(e,t,a);var n=r.fluid?r.fluid:r.fixed;if(u()){var o=document.createElement("picture");if(a&&(o.width=e.width=a.offsetWidth,o.height=e.height=a.offsetHeight),n.srcSetWebp){var s=document.createElement("source");s.type="image/webp",s.srcset=n.srcSetWebp,s.sizes=n.sizes,o.appendChild(s)}o.appendChild(e),o}else a&&(e.width=a.offsetWidth,e.height=a.offsetHeight),e;return e.srcset=n.srcSet?n.srcSet:"",e.src=n.src?n.src:"",e}return null};t.activatePictureRef=p;var g=function(e,t,a){var r=(0,i.convertProps)(t);return e.map((function(e,t){return r.fluid?p(e,(0,n.default)({},r,{fluid:r.fluid[t]}),a):p(e,(0,n.default)({},r,{fixed:r.fixed[t]}),a)}))};t.activateMultiplePictureRefs=g;t.switchImageSettings=function(e){var t,a,r=e.image,n=e.bgImage,o=e.imageRef,s=e.state,l=h({data:o,propName:"currentSrc"}),c=Array.isArray(r),d=Array.isArray(n)?(0,i.filteredJoin)(n):n,u=!1;if(c){t=h({data:r,propName:"tracedSVG",returnArray:c}),t=(0,i.combineArray)(h({data:r,propName:"base64",returnArray:c}),t),t=(0,i.combineArray)(h({data:r,propName:"CSS_STRING",addUrl:!1,returnArray:c}),t),s.imgLoaded&&s.isVisible&&(l?(t=(0,i.combineArray)(h({data:o,propName:"currentSrc",returnArray:c}),t),u=!0):(t=(0,i.combineArray)(h({data:o,propName:"src",returnArray:c}),t),u=!0)),t=(0,i.combineArray)(t,n);var f=b(r.length);a=t=(0,i.combineArray)(t,f),t=(0,i.filteredJoin)(t)}else t="",r.tracedSVG&&(t=h({data:r,propName:"tracedSVG"})),r.base64&&!r.tracedSVG&&(t=h({data:r,propName:"base64"})),s.imgLoaded&&s.isVisible&&(t=l,u=!0);var m=s.imageState%2;!c&&""===t&&s.imgLoaded&&s.isVisible&&o&&!o.currentSrc&&(t=h({data:o,propName:"src",checkLoaded:!1}),u=!0),t||(t=d);var p={lastImage:d,nextImage:t,afterOpacity:m,finalImage:u};return a&&(p.nextImageArray=a),p};var h=function(e){var t=e.data,a=e.propName,r=e.addUrl,n=void 0===r||r,o=e.returnArray,s=void 0!==o&&o,l=e.checkLoaded,c=void 0===l||l;if(!t||!a)return"";var d="tracedSVG"===a;if(Array.isArray(t)){var u=t.map((function(e){return"currentSrc"===a||"src"===a?c?E(e)&&e[a]||"":e[a]:"CSS_STRING"===a&&(0,i.isString)(e)?e:e[a]||""}));return y({imageString:u,tracedSVG:d,addUrl:n,returnArray:s})}return"currentSrc"!==a&&"src"!==a||!(a in t)?a in t?y({imageString:t[a],tracedSVG:d,addUrl:n}):"":y({imageString:c?E(t)&&t[a]||"":t[a],addUrl:n})};t.getCurrentFromData=h;var y=function(e){var t=e.imageString,a=e.tracedSVG,r=void 0!==a&&a,n=e.addUrl,o=void 0===n||n,s=e.returnArray,l=void 0!==s&&s,c=e.hasImageUrls,d=void 0!==c&&c;if(Array.isArray(t)){var u=t.map((function(e){if(e){var t=-1!==e.indexOf("base64"),a=d||"http"===e.substr(0,4),n=e&&r?'"'+e+'"':e&&!t&&!r&&a?"'"+e+"'":e;return o&&e?"url("+n+")":n}return e}));return l?u:(0,i.filteredJoin)(u)}var f=-1!==t.indexOf("base64"),m=d||"http"===t.substr(0,4),p=t&&r?'"'+t+'"':t&&!f&&!r&&m?"'"+t+"'":t;return t?o?"url("+p+")":p:""};t.getUrlString=y;t.imagePropsChanged=function(e,t){return e.fluid&&!t.fluid||e.fixed&&!t.fixed||v(e,t)||e.fluid&&t.fluid&&e.fluid.src!==t.fluid.src||e.fixed&&t.fixed&&e.fixed.src!==t.fixed.src};var v=function(e,t){var a=Array.isArray(e.fluid),r=Array.isArray(t.fluid),n=Array.isArray(e.fixed),i=Array.isArray(t.fixed);return!!(a&&!r||n&&!i||!a&&r||!n&&i)||(a&&r?e.fluid.length!==t.fluid.length||e.fluid.some((function(e,a){return e.src!==t.fluid[a].src})):n&&i?e.fixed.length!==t.fixed.length||e.fixed.some((function(e,a){return e.src!==t.fixed[a].src})):void 0)};t.imageArrayPropsChanged=v;t.initialBgImage=function(e,t){void 0===t&&(t=!0);var a=(0,i.convertProps)(e),r=a.fluid||a.fixed;if(!r)return"";var n,o=(0,i.hasImageArray)(a);if(o){if(n=h({data:r,propName:"tracedSVG",returnArray:o}),n=(0,i.combineArray)(h({data:r,propName:"base64",returnArray:o}),n),n=(0,i.combineArray)(h({data:r,propName:"CSS_STRING",addUrl:!1,returnArray:o}),n),t){var s=b(r.length);n=(0,i.combineArray)(n,s)}}else n="",r.tracedSVG&&(n=h({data:r,propName:"tracedSVG"})),r.base64&&!r.tracedSVG&&(n=h({data:r,propName:"base64"}));return n};var b=function(e){var t=y({imageString:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="});return Array(e).fill(t)};t.createDummyImageArray=b;t.imageReferenceCompleted=function(e){return!!e&&(Array.isArray(e)?e.every((function(e){return E(e)})):E(e))};var E=function(e){return!!e&&(e.complete&&0!==e.naturalWidth&&0!==e.naturalHeight)};t.imageLoaded=E},I2ZF:function(e,t){for(var a=[],r=0;r<256;++r)a[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,n=a;return[n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]]].join("")}},I59i:function(e,t,a){var r=a("UfPM");function n(e,t){var a=new r(e,t);return function(e){return a.convert(e)}}n.BIN="01",n.OCT="01234567",n.DEC="0123456789",n.HEX="0123456789abcdef",e.exports=n},IFaA:function(e,t,a){"use strict";e.exports={abbr:"abbr",accept:"accept",acceptCharset:"accept-charset",accessKey:"accesskey",action:"action",allowFullScreen:"allowfullscreen",allowTransparency:"allowtransparency",alt:"alt",async:"async",autoComplete:"autocomplete",autoFocus:"autofocus",autoPlay:"autoplay",cellPadding:"cellpadding",cellSpacing:"cellspacing",challenge:"challenge",charset:"charset",checked:"checked",cite:"cite",class:"class",className:"class",cols:"cols",colSpan:"colspan",command:"command",content:"content",contentEditable:"contenteditable",contextMenu:"contextmenu",controls:"controls",coords:"coords",crossOrigin:"crossorigin",data:"data",dateTime:"datetime",default:"default",defer:"defer",dir:"dir",disabled:"disabled",download:"download",draggable:"draggable",dropzone:"dropzone",encType:"enctype",for:"for",form:"form",formAction:"formaction",formEncType:"formenctype",formMethod:"formmethod",formNoValidate:"formnovalidate",formTarget:"formtarget",frameBorder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hrefLang:"hreflang",htmlFor:"for",httpEquiv:"http-equiv",icon:"icon",id:"id",inputMode:"inputmode",isMap:"ismap",itemId:"itemid",itemProp:"itemprop",itemRef:"itemref",itemScope:"itemscope",itemType:"itemtype",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",manifest:"manifest",max:"max",maxLength:"maxlength",media:"media",mediaGroup:"mediagroup",method:"method",min:"min",minLength:"minlength",multiple:"multiple",muted:"muted",name:"name",noValidate:"novalidate",open:"open",optimum:"optimum",pattern:"pattern",ping:"ping",placeholder:"placeholder",poster:"poster",preload:"preload",radioGroup:"radiogroup",readOnly:"readonly",rel:"rel",required:"required",role:"role",rows:"rows",rowSpan:"rowspan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",sortable:"sortable",span:"span",spellCheck:"spellcheck",src:"src",srcDoc:"srcdoc",srcSet:"srcset",start:"start",step:"step",style:"style",tabIndex:"tabindex",target:"target",title:"title",translate:"translate",type:"type",typeMustMatch:"typemustmatch",useMap:"usemap",value:"value",width:"width",wmode:"wmode",wrap:"wrap"}},KuKR:function(e,t,a){"use strict";var r;t.__esModule=!0,t.listenToIntersections=t.getIO=t.callbackIO=void 0;var n=new WeakMap,i=function(e){e.forEach((function(e){if(n.has(e.target)){var t=n.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),n.delete(e.target),t())}}))};t.callbackIO=i;var o=function(){return void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(i,{rootMargin:"200px"})),r};t.getIO=o;t.listenToIntersections=function(e,t){var a=o();return a?(a.observe(e),n.set(e,t),function(){a.unobserve(e),n.delete(e)}):function(){}}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("q1tI"),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(n),o=function(){return(o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};function l(e){return function(t){return r.createElement(c,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,o({key:a},t.attr),e(t.child))}))}(e.child))}}function c(e){var t=function(t){var a,n=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var i=e.attr,l=e.title,c=s(e,["attr","title"]);return r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:a,style:o({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},MVkf:function(e,t,a){"use strict";a("RUBk"),t.__esModule=!0,t.default=t.getBackgroundStylesForSingleClass=t.getStyleRules=t.rulesForCssText=t.getStyle=void 0;var r=a("doIQ"),n=function(e){for(var t="undefined"!=typeof window?window.document.styleSheets:[],a=0;a<t.length;a++){var r=void 0;try{r=void 0!==t[a].rules?t[a].rules:void 0!==t[a].cssRules?t[a].cssRules:""}catch(o){}if(r){var n=Array.prototype.slice.call(r).reduce((function(t,a){return a.selectorText===e&&""===t?a:t}),"");if(n){var i=n.cssText?n.cssText:n.style.cssText;return-1===i.indexOf(n.selectorText)?n.selectorText+"{"+i+"}":i}}}};t.getStyle=n;var i=function(e){if("undefined"!=typeof document&&e){var t=document.implementation.createHTMLDocument(""),a=document.createElement("style");return a.textContent=e,t.body.appendChild(a),a.sheet.cssRules}return{}};t.rulesForCssText=i;var o=function(e){var t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name||e[0].style.constructor.toString()){case"CSS2Properties":case"[object MSStyleCSSProperties]":Object.values(e[0].style).forEach((function(a){t[(0,r.toCamelCase)(a)]=e[0].style[a]}));break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t};t.getStyleRules=o;var s=function(e){if((0,r.isString)(e)){var t=n("."+e),a=i(t);if(a.length>0&&void 0!==a[0].style)return Object.keys(o(a)).filter((function(e){return 0===e.indexOf("background")&&""!==a[0].style[e]})).reduce((function(e,t){return e[t]=a[0].style[t],e}),{})}return{}};t.getBackgroundStylesForSingleClass=s;var l=function(e){if("undefined"!=typeof window){var t=(0,r.stringToArray)(e);if(t instanceof Array){var a=[];return t.forEach((function(e){return a.push(s(e))})),Object.assign.apply(Object,a)}return s(e)}return{}};t.default=l},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("TJpk"),o=(a("+oJU"),a("Wbzz")),s=a("9eSz"),l=a.n(s),c=a("1eu9"),d=a.n(c),u=a("ZXdF"),f=function(){var e=Object(o.useStaticQuery)("3655105458");return n.a.createElement("header",{className:"bg-gray-800\ttext-white"},n.a.createElement(d.a,{className:"flex flex-wrap",fluid:e.background.childImageSharp.fluid},n.a.createElement("div",{className:"header-profile text-center mt-5 mx-auto mb-0"},n.a.createElement(l.a,{className:"profile",fluid:e.profile.childImageSharp.fluid})),n.a.createElement("div",{className:"header-title text-center mt-5 mx-auto mb-0"},n.a.createElement("h1",{className:"text-4xl"},"Mathew Teakle"),n.a.createElement("h2",{className:"text-2xl"},"Sydney HSC English Tutor"),n.a.createElement("p",{className:"text-lg p-6"},"Available Sunday - Friday  |  Online or In Person"),n.a.createElement(o.Link,{to:"/contact"},n.a.createElement(u.a,{name:"Enquire Now"})))))},m=function(){return n.a.createElement("section",{className:"text-center bg-orange-400"},n.a.createElement("p",{className:"leading-loose tracking-wide m-0"},"Accepting New Enrolments Now…"))},p=function(){return n.a.createElement("section",{className:"text-center text-white bg-gray-800 p-4"},n.a.createElement("p",null,"Qualified English teacher"),n.a.createElement("p",null,"Tutoring since 1998"),n.a.createElement("p",null,"Bachelor of Arts/Bachelor of Education UNSW"))},g=a("ma3e"),h=function(){return n.a.createElement("section",{className:"pt-4"},n.a.createElement("h2",{className:"text-center text-2xl"},"HSC Student Testimonials"),n.a.createElement("div",{className:"flex flex-wrap justify-center"},n.a.createElement("article",{className:"testimonial p-8 bg-gray-200"},n.a.createElement("span",{className:"testimonial-icon bg-gray-200"},n.a.createElement(g.e,null)),n.a.createElement("div",{className:"testimonial-description"},"Learning English from you has both boosted my confidence and my understanding of English. Before, I was unsure of what I was doing or how to make sense of the new English syllabus, but after I learnt from you, I had a whole different perspective on how to attack texts and create more cohesive essays. You later gave me tools to analyse not only text for exams, but how these can be applied to the real world and the implications it has. And for that I am very thankful."),n.a.createElement("p",{className:"italic font-bold mr-4 text-sm leading-tight"},"Venkat"),n.a.createElement("p",{className:"text-sm"},"St Francis Xavier’s College, Hamilton, HSC 2019")),n.a.createElement("article",{className:"testimonial p-8 bg-gray-200"},n.a.createElement("span",{className:"testimonial-icon bg-gray-200"},n.a.createElement(g.e,null)),n.a.createElement("div",{className:"testimonial-description"},"Mat was my tutor for years 11 and 12 and it was one of the best decisions I made. He helped improve my English skills so much. His wealth of knowledge made me really appreciate the nature of this subject. I ended up with a Band 5 overall and English was my top mark which I couldn’t be happier about. I definitely recommend Mat to anyone who needs an extra boost with their English!"),n.a.createElement("p",{className:"italic font-bold mr-4 text-sm leading-tight"},"Stella"),n.a.createElement("p",{className:"text-sm"},"Tamworth, HSC 2019")),n.a.createElement("article",{className:"testimonial p-8 bg-gray-200"},n.a.createElement("span",{className:"testimonial-icon bg-gray-200"},n.a.createElement(g.e,null)),n.a.createElement("div",{className:"testimonial-description"},"… thank you for your help with English. I really appreciate the effort you put in and I’ll be sure to recommend you to other students if that’s okay with you!"),n.a.createElement("p",{className:"italic font-bold mr-4 text-sm leading-tight"},"Annie"),n.a.createElement("p",{className:"text-sm"},"Tara Anglican School for Girls, HSC 2018")),n.a.createElement("article",{className:"testimonial p-8 bg-gray-200"},n.a.createElement("span",{className:"testimonial-icon bg-gray-200"},n.a.createElement(g.e,null)),n.a.createElement("div",{className:"testimonial-description"},"Hi Mat! First of all I'd like to thank myself for choosing you as my English tutor for three years. My decision was an excellent one and without it, I would have chosen a lesser tutor. I'd also like to thank my parents for having me in the first place so I could grow up to choose a great tutor and get a band 6 for English Advanced. I'm now studying Economics and my confidence in writing and speaking is indeed a valuable asset! Oh and I should also say thanks to Mat!"),n.a.createElement("p",{className:"italic font-bold mr-4 text-sm leading-tight"},"Kevin"),n.a.createElement("p",{className:"text-sm"},"Sydney, HSC 2017"))),n.a.createElement("div",{className:"call-to-action"},n.a.createElement(o.Link,{to:"/testimonials"},n.a.createElement(u.a,{name:"Read All Testimonials"}))))},y=function(){return n.a.createElement("section",{className:"about-section bg-gray-200",id:"about"},n.a.createElement("div",{className:"flex flex-wrap justify-center"},n.a.createElement("div",{className:"w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 p-8 mx-4"},n.a.createElement("h2",{className:"text-2xl"},"About Mathew"),n.a.createElement("p",null,"B.A. B.Ed. University of New South Wales"),n.a.createElement("p",null,"Mathew has been tutoring English since 1998 and despite it being a part time gig for much of that time, demand for his services increased so much that he is now tutoring full-time. He has four kids and is married to Debbie who works in the tech industry. (Hence this awesome website!) In his spare time Mat enjoys playing golf, going to the gym, reading, writing short stories – he occasionally appears in feature films, on TV or in print advertisements. He also enjoys editing copy written by his well-meaning wife… (how did I do?)")),n.a.createElement("div",{className:"w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 p-8 mx-4"},n.a.createElement("h2",{className:"text-2xl"},"Main Teaching Areas"),n.a.createElement("ul",{className:"pt-8 ml-10 text-lg leading-loose"},n.a.createElement("li",{className:"list-disc"},"Essay Writing"),n.a.createElement("li",{className:"list-disc"},"Creative Writing"),n.a.createElement("li",{className:"list-disc"},"Textual Analysis"),n.a.createElement("li",{className:"list-disc"},"Film"),n.a.createElement("li",{className:"list-disc"},"Adult Education")))))},v=function(){return n.a.createElement("section",{className:"pt-4"},n.a.createElement("h2",{className:"text-center text-2xl"},"FAQs"),n.a.createElement("div",{className:"flex flex-wrap justify-center m-2"},n.a.createElement("article",{className:"faq p-8 bg-gray-200"},n.a.createElement("h3",{className:"font-bold"},"How do I pay?"),n.a.createElement("div",{className:"faq-icon bg-gray-200"},n.a.createElement(g.c,null)),n.a.createElement("p",null,"I'll send an invoice via email with a link, so you can pay securely online via credit card or direct debit transfer.")),n.a.createElement("article",{className:"faq p-8 bg-gray-200"},n.a.createElement("h3",{className:"font-bold"},"What do I need for online tutoring?"),n.a.createElement("div",{className:"faq-icon bg-gray-200"},n.a.createElement(g.d,null)),n.a.createElement("p",null,"A Skype account with a microphone and webcam. You'll also need a Google account with access to Google Docs.")),n.a.createElement("article",{className:"faq p-8 bg-gray-200"},n.a.createElement("div",{className:"faq-icon bg-gray-200"},n.a.createElement(g.a,null)),n.a.createElement("h3",{className:"font-bold"},"What if I can't attend my lesson?"),n.a.createElement("p",null,"No problem, these things happen. Let me know which lesson you can't attend and we'll reschedule it. I don't make my students pay for lessons they don't have. ")),n.a.createElement("article",{className:"faq p-8 bg-gray-200"},n.a.createElement("div",{className:"faq-icon bg-gray-200"},n.a.createElement(g.f,null)),n.a.createElement("h3",{className:"font-bold"},"Do you tutor in person?"),n.a.createElement("p",null,"Yes! My home office is a five minute walk from a train station. We have an air conditioned office, with a nice view of the backyard and you can use our WiFi and charge your phone. During lessons we might get an unannounced visit from our dog (Bear) and it's very likely one of the kids will be playing in the backyard as well. ")),n.a.createElement("article",{className:"faq p-8 bg-gray-200"},n.a.createElement("div",{className:"faq-icon bg-gray-200"},n.a.createElement(g.b,null)),n.a.createElement("h3",{className:"font-bold"},"Do I pay week by week or by school term?"),n.a.createElement("p",null,"It's up to you. I offer a casual rate and a discounted rate if you pay for the whole term (10 lessons). Get in touch to learn more.")),n.a.createElement("article",{className:"faq p-8 bg-gray-200"},n.a.createElement("div",{className:"faq-icon bg-gray-200"},n.a.createElement(g.g,null)),n.a.createElement("h3",{className:"font-bold"},"Are you a qualified teacher?"),n.a.createElement("p",null,"I have a Bachelor of Arts/Bachelor of Education (English Literature) from the University of New South Wales."))),n.a.createElement("div",{className:"align-middle"},n.a.createElement("p",{className:"text-center"},"Have more questions?"),n.a.createElement("p",{className:"text-center"},n.a.createElement(o.Link,{to:"/contact"},n.a.createElement(u.a,{name:"Enquire Now"})))))},b=a("Bl7J");t.default=function(){return n.a.createElement(b.a,null,n.a.createElement(i.Helmet,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"Mathew Teakle Tutoring | Online HSC English Tuition, Sydney"),n.a.createElement("link",{rel:"canonical",href:"https://teakle.com.au"}),n.a.createElement("meta",{name:"keywords",content:"Find a Tutor, English Tutor, English Teacher,  Private Tutor English, Online Teacher English, Private English Teacher, HSC English Tutor,  High School English, High School Literacy Tutor, Essays, Creative Writing"}),n.a.createElement("meta",{name:"description",content:"Mathew Teakle is a qualified English teacher with 20 years of tutoring experience.  He provides private English tuition online to students all over NSW. Pay week by week or by term. Contact Mathew to discuss your English tutoring needs."}),n.a.createElement("meta",{name:"google-site-verification",content:"pIfTVRhYnx_exObArZVnORzf_3KokccntYBpdYTqUzo"})),n.a.createElement("main",{className:"flex-grow",role:"main"},n.a.createElement(f,null),n.a.createElement(m,null),n.a.createElement(p,null),n.a.createElement(h,null),n.a.createElement(y,null),n.a.createElement(v,null)))}},Ros5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};for(var a in e)e.hasOwnProperty(a)&&s(a)&&(t[a]=e[a]);return t};var r,n=a("IFaA"),i=(r=n)&&r.__esModule?r:{default:r};var o={onCopy:!0,onCut:!0,onPaste:!0,onLoad:!0,onError:!0,onWheel:!0,onScroll:!0,onCompositionEnd:!0,onCompositionStart:!0,onCompositionUpdate:!0,onKeyDown:!0,onKeyPress:!0,onKeyUp:!0,onFocus:!0,onBlur:!0,onChange:!0,onInput:!0,onSubmit:!0,onClick:!0,onContextMenu:!0,onDoubleClick:!0,onDrag:!0,onDragEnd:!0,onDragEnter:!0,onDragExit:!0,onDragLeave:!0,onDragOver:!0,onDragStart:!0,onDrop:!0,onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOut:!0,onMouseOver:!0,onMouseUp:!0,onSelect:!0,onTouchCancel:!0,onTouchEnd:!0,onTouchMove:!0,onTouchStart:!0,onAnimationStart:!0,onAnimationEnd:!0,onAnimationIteration:!0,onTransitionEnd:!0};function s(e){return o[e]||i.default[e]||/^(data|aria)-/.test(e)}},UfPM:function(e,t,a){"use strict";function r(e,t){if(!(e&&t&&e.length&&t.length))throw new Error("Bad alphabet");this.srcAlphabet=e,this.dstAlphabet=t}r.prototype.convert=function(e){var t,a,r,n={},i=this.srcAlphabet.length,o=this.dstAlphabet.length,s=e.length,l="string"==typeof e?"":[];if(!this.isValid(e))throw new Error('Number "'+e+'" contains of non-alphabetic digits ('+this.srcAlphabet+")");if(this.srcAlphabet===this.dstAlphabet)return e;for(t=0;t<s;t++)n[t]=this.srcAlphabet.indexOf(e[t]);do{for(a=0,r=0,t=0;t<s;t++)(a=a*i+n[t])>=o?(n[r++]=parseInt(a/o,10),a%=o):r>0&&(n[r++]=0);s=r,l=this.dstAlphabet.slice(a,a+1).concat(l)}while(0!==r);return l},r.prototype.isValid=function(e){for(var t=0;t<e.length;++t)if(-1===this.srcAlphabet.indexOf(e[t]))return!1;return!0},e.exports=r},ZXdF:function(e,t,a){"use strict";var r=a("9Hrx"),n=a("q1tI"),i=a.n(n),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("button",{className:"text-white font-bold py-2 px-4 rounded bg-blue-400 hover:bg-blue-600 my-4"},this.props.name)},t}(i.a.Component);t.a=o},doIQ:function(e,t,a){"use strict";a("RUBk");var r=a("5NKs");t.__esModule=!0,t.combineArray=t.filteredJoin=t.hashString=t.stringToArray=t.toKebabCase=t.toCamelCase=t.hasImageArray=t.convertProps=t.stripRemainingProps=t.isString=void 0;var n=r(a("j8BX")),i=r(a("Ros5")),o=function(e){return"[object String]"===Object.prototype.toString.call(e)};t.isString=o;t.stripRemainingProps=function(e){return(0,i.default)(e)};t.convertProps=function(e){var t=(0,n.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t};t.hasImageArray=function(e){return e.fluid&&Array.isArray(e.fluid)||e.fixed&&Array.isArray(e.fixed)};t.toCamelCase=function(e){return o(e)&&e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()})).replace(/\s|\W+/g,"")};t.toKebabCase=function(e){return o(e)&&e.replace(/\s|\W+/g,"").replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()}))};t.stringToArray=function(e,t){return void 0===t&&(t=" "),e instanceof Array?e:!!o(e)&&(e.includes(t)?e.split(t):[e])};t.hashString=function(e){return o(e)&&[].reduce.call(e,(function(e,t){return 0|(e=(e<<5)-e+t.charCodeAt(0))}),0)};t.filteredJoin=function(e){return e.filter((function(e){return""!==e})).join()};t.combineArray=function(e,t){return e.map((function(e,a){return e||t[a]}))}},"gv3/":function(e,t,a){var r,n=a("I59i"),i=a("xk4V"),o="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";function s(e,t){return t(e.toLowerCase().replace(/-/g,""))}e.exports=function(){function e(e){var t=e||o,a=n(n.HEX,t),r=n(t,n.HEX),l=function(){return s(i(),a)};return{new:l,generate:l,uuid:i,fromUUID:function(e){return s(e,a)},toUUID:function(e){return function(e,t){for(var a,r=t(e),n="",i=0,o=32-r.length;i<o;++i)n+="0";return[(a=(n+r).match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/))[1],a[2],a[3],a[4],a[5]].join("-")}(e,r)},alphabet:t}}return e.constants={flickrBase58:o,cookieBase90:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~"},e.uuid=i,e.generate=function(){return r||(r=n(n.HEX,o)),s(i(),r)},e}()},nKes:function(e,t,a){"use strict";a("RUBk");var r=a("5NKs");t.__esModule=!0,t.createNoScriptStyles=t.createPseudoStyles=t.presetBackgroundStyles=t.fixOpacity=t.setTransitionStyles=t.kebabifyBackgroundStyles=t.escapeClassNames=t.fixClassName=t.createPseudoElement=t.resetComponentClassCache=t.activateCacheForComponentClass=t.inComponentClassCache=void 0;var n=r(a("j8BX")),i=r(a("uDP2")),o=r(a("gv3/")),s=a("doIQ"),l=a("AjcD"),c=Object.create({}),d=function(e){return c[e]||!1};t.inComponentClassCache=d;var u=function(e){e&&(c[e]=!0)};t.activateCacheForComponentClass=u;t.resetComponentClassCache=function(){for(var e in c)delete c[e]};var f=function(e,t,a){void 0===t&&(t=""),void 0===a&&(a=":before");var r=m(e),n=(0,s.stringToArray)(r),i="";return n instanceof Array&&n.length>0&&""!==n[0]&&(i="."+n.join(".")+a),""!==t&&(i+=(i&&",\n")+".gatsby-background-image-"+t+a),i};t.createPseudoElement=f;t.fixClassName=function(e){var t=e.className,a=e.addedClassName,r=void 0===a?"":a,n=(0,i.default)(e,["className","addedClassName"]),l=(0,s.convertProps)(n),c=d(t),f=l.fluid?Array.isArray(l.fluid)?l.fluid[0]:l.fluid:Array.isArray(l.fixed)?l.fixed[0]:l.fixed,m=r||o.default.generate(),p=" gbi-"+(0,s.hashString)(f&&f.srcSet||t)+"-"+m,g=c?p:"",h=(""+(t||"")+(g||"")).trim();return c||u(t),[h,g]};var m=function(e){if(e){var t="undefined"!=typeof window&&window._gbiSpecialChars?window._gbiSpecialChars:"undefined"!=typeof __GBI_SPECIAL_CHARS__?__GBI_SPECIAL_CHARS__:":/",a=new RegExp("["+t+"]","g");return e.replace(a,"\\$&")}return e};t.escapeClassNames=m;var p=function(e){return(0,s.isString)(e)?e:e instanceof Object?Object.keys(e).filter((function(t){return 0===t.indexOf("background")&&""!==e[t]})).reduce((function(t,a){return""+t+(0,s.toKebabCase)(a)+": "+e[a]+";\n"}),""):""};t.kebabifyBackgroundStyles=p;var g=function(e,t){return void 0===e&&(e="0.25s"),void 0===t&&(t=!0),t?"transition: opacity 0.5s ease "+e+";":"transition: none;"};t.setTransitionStyles=g;t.fixOpacity=function(e){var t=(0,n.default)({},e);if(!t.preserveStackingContext)try{t.style&&t.style.opacity&&(isNaN(t.style.opacity)||t.style.opacity>.99)&&(t.style.opacity=.99)}catch(a){}return t};t.presetBackgroundStyles=function(e){return(0,n.default)({},{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},{},e)};t.createPseudoStyles=function(e){var t=e.classId,a=e.className,r=e.transitionDelay,i=e.lastImage,o=e.nextImage,s=e.afterOpacity,l=e.bgColor,c=e.fadeIn,d=e.backgroundStyles,u=e.style,m=e.finalImage,h=f(a,t),y=f(a,t,":after");return"\n          "+h+",\n          "+y+" {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            "+(l&&"background-color: "+l+";")+"\n            "+g(r,c)+"\n            "+p((0,n.default)({},d,{},u))+"\n          }\n          "+h+" {\n            z-index: -100;\n            "+(s&&o?"background-image: "+o+";":"")+"\n            "+(!s&&i?"background-image: "+i+";":"")+"\n            opacity: "+s+"; \n          }\n          "+y+" {\n            z-index: -101;\n            "+(!s&&o?"background-image: "+o+";":"")+"\n            "+(s&&i?"background-image: "+i+";":"")+"\n            "+(m?"opacity: "+Number(!s)+";":"")+"\n          }\n        "};t.createNoScriptStyles=function(e){var t=e.classId,a=e.className,r=e.image;if(r){var n=Array.isArray(r),i=(0,l.getCurrentFromData)({data:r,propName:"src",checkLoaded:!1,addUrl:!1,returnArray:n}),o=(0,l.getUrlString)({imageString:i,hasImageUrls:!0,returnArray:n}),c="";if(n){var d=(0,l.getCurrentFromData)({data:r,propName:"CSS_STRING",addUrl:!1,returnArray:n});c=(0,s.filteredJoin)((0,s.combineArray)(o,d))}return"\n          "+f(a,t)+" {\n            opacity: 1;\n            background-image: "+(c||o)+";\n          }"}return""}},xk4V:function(e,t,a){var r=a("4fRq"),n=a("I2ZF");e.exports=function(e,t,a){var i=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var s=0;s<16;++s)t[i+s]=o[s];return t||n(o)}}}]);
//# sourceMappingURL=component---src-pages-index-js-a4690d2d4af759ddd99e.js.map