!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleVideo=e():t.SimpleVideo=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n(1).toString();var o=function(){function t(e){var n=e.data,i=(e.config,e.api);!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=i,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"cdx-simple-video",videoHolder:"cdx-simple-video__picture",caption:"cdx-simple-video__caption"},this.nodes={wrapper:null,videoHolder:null,video:null,caption:null},this.data={url:n.url||"",caption:n.caption||"",controls:void 0!==n.controls&&n.controls,withBorder:void 0!==n.withBorder&&n.withBorder,withBackground:void 0!==n.withBackground&&n.withBackground,stretched:void 0!==n.stretched&&n.stretched},this.settings=[{name:"withBorder",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'},{name:"stretched",icon:'<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>'},{name:"withBackground",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>'},{name:"controls",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.54 5.54L13.77 7.3 12 5.54 10.23 7.3 8.46 5.54 12 2zm2.92 10l-1.76-1.77L18.46 12l-1.76-1.77 1.76-1.77L22 12zm-10 2.92l1.77-1.76L12 18.46l1.77-1.76 1.77 1.76L12 22zm-2.92-10l1.76 1.77L5.54 12l1.76 1.77-1.76 1.77L2 12z"/><circle cx="12" cy="12" r="3"/><path fill="none" d="M0 0h24v24H0z"/></svg>'}]}var e,n,o;return e=t,o=[{key:"sanitize",get:function(){return{url:{},withBorder:{},withBackground:{},stretched:{},controls:{},caption:{br:!0}}}},{key:"pasteConfig",get:function(){return{patterns:{video:/https?:\/\/\S+\.(mp4|webm)$/i},tags:["video"],files:{mimeTypes:["video/*"]}}}}],(n=[{key:"render",value:function(){var t=this,e=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),n=this._make("div",this.CSS.loading),i=this._make("div",this.CSS.videoHolder),r=this._make("video"),o=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:"true",innerHTML:this.data.caption||""});return e.appendChild(n),this.data.url&&(r.src=this.data.url,r.controls=this.data.controls),r.onloadstart=function(){e.classList.remove(t.CSS.loading),i.appendChild(r),e.appendChild(i),e.appendChild(o),n.remove(),t._acceptTuneView()},r.onerror=function(t){console.log("Failed to load the video",t)},this.nodes.videoHolder=i,this.nodes.wrapper=e,this.nodes.video=r,this.nodes.caption=o,e}},{key:"save",value:function(t){var e=t.querySelector("video"),n=t.querySelector("."+this.CSS.input);return e?Object.assign(this.data,{url:e.src,caption:n.innerHTML}):this.data}},{key:"onDropHandler",value:function(t){return new Promise((function(e,n){e({url:URL.createObjectURL(t),caption:t.name})}))}},{key:"onPaste",value:function(t){var e=this;switch(t.type){case"tag":var n=t.detail.data;this.data={url:n.src};break;case"pattern":var i=t.detail.data;this.data={url:i};break;case"file":var r=t.detail.file;this.onDropHandler(r).then((function(t){e.data=t}))}}},{key:"renderSettings",value:function(){var t=this,e=document.createElement("div");return this.settings.forEach((function(n){var i=document.createElement("div");i.classList.add(t.CSS.settingsButton),i.innerHTML=n.icon,i.addEventListener("click",(function(){t._toggleTune(n.name),i.classList.toggle(t.CSS.settingsButtonActive)})),i.classList.toggle(t.CSS.settingsButtonActive,t.data[n.name]),e.appendChild(i)})),e}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(t);for(var a in Array.isArray(n)?(e=o.classList).add.apply(e,i(n)):n&&o.classList.add(n),r)o[a]=r[a];return o}},{key:"_toggleTune",value:function(t){this.data[t]=!this.data[t],this._acceptTuneView()}},{key:"_acceptTuneView",value:function(){var t=this;this.settings.forEach((function(e){t.nodes.videoHolder.classList.toggle(t.CSS.videoHolder+"--"+e.name.replace(/([A-Z])/g,(function(t){return"-".concat(t[0].toLowerCase())})),!!t.data[e.name]),"stretched"===e.name&&t.api.blocks.stretchBlock(t.blockIndex,!!t.data.stretched)}))}},{key:"data",get:function(){return this._data},set:function(t){this._data=Object.assign({},this.data,t),this.nodes.video&&(this.nodes.video.src=this.data.url,this.nodes.video.controls=this.data.controls),this.nodes.caption&&(this.nodes.caption.innerHTML=this.data.caption)}}])&&r(e.prototype,n),o&&r(e,o),t}();t.exports=o},function(t,e,n){var i=n(2);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-simple-video {}\n\n\n.cdx-simple-video .cdx-loader {\n  min-height: 200px;\n}\n\n.cdx-simple-video .cdx-input {\n  margin-top: 10px;\n}\n\n.cdx-simple-video video {\n  max-width: 100%;\n  vertical-align: bottom;\n}\n\n.cdx-simple-video__caption[contentEditable=true][data-placeholder]:empty::before {\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n }\n\n.cdx-simple-video__caption[contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-simple-video__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n\n.cdx-simple-video__picture--with-background {\n  background: #eff2f5;\n  padding: 10px;\n}\n\n.cdx-simple-video__picture--with-background video {\n  display: block;\n  max-width: 60%;\n  margin: 0 auto;\n}\n\n.cdx-simple-video__picture--with-border {\n  border: 1px solid #e8e8eb;\n  padding: 1px;\n}\n\n.cdx-simple-video__picture--stretched video {\n  max-width: none;\n  width: 100%;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[n].concat(o).concat([r]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var i,r,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),s=function(t){return document.querySelector(t)},c=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=s.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,d=0,u=[],p=n(5);function f(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(y(i.parts[a],e))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(y(i.parts[a],e));o[i.id]={id:i.id,refs:1,parts:s}}}}function h(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}function v(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function g(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(e,t.attrs),v(t,e),e}function b(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function y(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var a=d++;n=l||(l=g(e)),i=S.bind(null,n,a,!1),r=S.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),v(t,e),e}(e),i=k.bind(null,n,e),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),i=L.bind(null,n),r=function(){m(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return f(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var a=n[r];(s=o[a.id]).refs--,i.push(s)}t&&f(h(t,e),e);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function S(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function L(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function k(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=p(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,o=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}}])}));