/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

// UNUSED EXPORTS: CrossSell

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const css_tag_t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),n=new Map;class s{constructor(t,n){if(this._$cssResult$=!0,n!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=n.get(this.cssText);return css_tag_t&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t=>new s("string"==typeof t?t:t+"",e),r=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s(o,e)},i=(e,n)=>{css_tag_t?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n)}))},S=css_tag_t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var reactive_element_s,reactive_element_e;const reactive_element_r={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},h=(t,i)=>i!==t&&(i==i||t==t),reactive_element_o={attribute:!0,type:String,converter:reactive_element_r,reflect:!1,hasChanged:h};class reactive_element_n extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e))})),t}static createProperty(t,i=reactive_element_o){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||reactive_element_o}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S(i))}else void 0!==i&&s.push(S(i));return s}static _$Eh(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$Em)&&void 0!==i?i:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$Em)||void 0===i||i.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$Eg(t,i,s=reactive_element_o){var e,h;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const o=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:reactive_element_r.toAttribute)(i,s.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,i){var s,e,h;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:reactive_element_r.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$ET()}catch(t){throw i=!1,this._$ET(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Em)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,i)=>this._$Eg(i,this[i],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}reactive_element_n.finalized=!0,reactive_element_n.elementProperties=new Map,reactive_element_n.elementStyles=[],reactive_element_n.shadowRootOptions={mode:"open"},null===(reactive_element_s=globalThis.reactiveElementPolyfillSupport)||void 0===reactive_element_s||reactive_element_s.call(globalThis,{ReactiveElement:reactive_element_n}),(null!==(reactive_element_e=globalThis.reactiveElementVersions)&&void 0!==reactive_element_e?reactive_element_e:globalThis.reactiveElementVersions=[]).push("1.0.0");
//# sourceMappingURL=reactive-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lit_html_t,lit_html_i;const lit_html_s=globalThis.trustedTypes,lit_html_e=lit_html_s?lit_html_s.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_o=`lit$${(Math.random()+"").slice(9)}$`,lit_html_n="?"+lit_html_o,l=`<${lit_html_n}>`,lit_html_h=document,lit_html_r=(t="")=>lit_html_h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,v=t=>{var i;return u(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,g=/'/g,m=/"/g,$=/^(?:script|style|textarea)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=p(1),b=p(2),T=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),w=new WeakMap,A=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new lit_html_S(i.insertBefore(lit_html_r(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l},C=lit_html_h.createTreeWalker(lit_html_h,129,null,!1),P=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<s;i++){const s=t[i];let e,u,v=-1,p=0;for(;p<s.length&&(d.lastIndex=p,u=d.exec(s),null!==u);)p=d.lastIndex,d===c?"!--"===u[1]?d=a:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:c,v=-1):void 0===u[1]?v=-2:(v=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?m:g):d===m||d===g?d=_:d===a||d===f?d=c:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+l:v>=0?(n.push(e),s.slice(0,v)+"$lit$"+s.slice(v)+lit_html_o+y):s+lit_html_o+(-2===v?(n.push(void 0),i):y)}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==lit_html_e?lit_html_e.createHTML(u):u,n]};class V{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,v=this.parts,[c,a]=P(t,i);if(this.el=V.createElement(c,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(l=C.nextNode())&&v.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(lit_html_o)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(lit_html_o),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?H:"@"===i[1]?I:M})}else v.push({type:6,index:h})}for(const i of t)l.removeAttribute(i)}if($.test(l.tagName)){const t=l.textContent.split(lit_html_o),i=t.length-1;if(i>0){l.textContent=lit_html_s?lit_html_s.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],lit_html_r()),C.nextNode(),v.push({type:2,index:++h});l.append(t[i],lit_html_r())}}}else if(8===l.nodeType)if(l.data===lit_html_n)v.push({type:2,index:h});else{let t=-1;for(;-1!==(t=l.data.indexOf(lit_html_o,t+1));)v.push({type:7,index:h}),t+=lit_html_o.length-1}h++}}static createElement(t,i){const s=lit_html_h.createElement("template");return s.innerHTML=t,s}}function E(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=d(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=r:s._$Cu=r),void 0!==r&&(i=E(t,r._$AS(t,i.values),r,e)),i}class N{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:lit_html_h).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new lit_html_S(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r]}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class lit_html_S{constructor(t,i,s,e){var o;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=E(this,t,i),d(t)?t===x||null==t||""===t?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):v(t)?this.M(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==x&&d(this._$AH)?this._$AA.nextSibling.data=t:this.S(lit_html_h.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new N(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t}}_$AC(t){let i=w.get(t.strings);return void 0===i&&w.set(t.strings,i=new V(t)),i}M(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new lit_html_S(this.A(lit_html_r()),this.A(lit_html_r()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class M{constructor(t,i,s,e,o){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=E(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=E(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===x?t=x:t!==x&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.k(t)}k(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class k extends M{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===x?void 0:t}}class H extends M{constructor(){super(...arguments),this.type=4}k(t){t&&t!==x?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class I extends M{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=E(this,t,i,0))&&void 0!==s?s:x)===T)return;const e=this._$AH,o=t===x&&e!==x||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==x&&(e===x||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const R={P:"$lit$",V:lit_html_o,L:lit_html_n,I:1,N:P,R:N,D:v,j:E,H:lit_html_S,O:M,F:H,B:I,W:k,Z:L};null===(lit_html_t=globalThis.litHtmlPolyfillSupport)||void 0===lit_html_t||lit_html_t.call(globalThis,V,lit_html_S),(null!==(lit_html_i=globalThis.litHtmlVersions)&&void 0!==lit_html_i?lit_html_i:globalThis.litHtmlVersions=[]).push("2.0.0");
//# sourceMappingURL=lit-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lit_element_l,lit_element_o,lit_element_r;const lit_element_s=(/* unused pure expression or super */ null && (t));class lit_element_n extends reactive_element_n{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=A(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}lit_element_n.finalized=!0,lit_element_n._$litElement$=!0,null===(lit_element_l=globalThis.litElementHydrateSupport)||void 0===lit_element_l||lit_element_l.call(globalThis,{LitElement:lit_element_n}),null===(lit_element_o=globalThis.litElementPolyfillSupport)||void 0===lit_element_o||lit_element_o.call(globalThis,{LitElement:lit_element_n});const lit_element_h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(lit_element_r=globalThis.litElementVersions)&&void 0!==lit_element_r?lit_element_r:globalThis.litElementVersions=[]).push("3.0.0");
//# sourceMappingURL=lit-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit/index.js

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@shopify/theme-currency/currency.js
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

const moneyFormat = '${{amount}}';

/**
 * Format money values based on your shop currency settings
 * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
 * or 3.00 dollars
 * @param  {String} format - shop money_format setting
 * @return {String} value - formatted value
 */
function formatMoney(cents, format) {
  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }
  let value = '';
  const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  const formatString = format || moneyFormat;

  function formatWithDelimiters(
    number,
    precision = 2,
    thousands = ',',
    decimal = '.'
  ) {
    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);

    const parts = number.split('.');
    const dollarsAmount = parts[0].replace(
      /(\d)(?=(\d\d\d)+(?!\d))/g,
      `$1${thousands}`
    );
    const centsAmount = parts[1] ? decimal + parts[1] : '';

    return dollarsAmount + centsAmount;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
}

;// CONCATENATED MODULE: ./src/javascripts/webcomponents/cross-sells.js
/* eslint-disable indent */



class CrossSell extends lit_element_n {
  static get styles() {
    return r`
      :host {
        display: block;
        padding-bottom: 24px;
        display: flex;
        flex-direction: columns;
        width: 100%;
      }

      .featured-image {
        width: 100%;
        height: auto;
      }

      .info {
        width: calc(80% - 16px);
        display: flex;
      }

      .product-info {
        width: calc(100% - 16px);
        padding-right: 16px;
      }

      .title {
        padding: 0 0 8px 0;
      }

      .title a {
        color: var(--color-primary);
        text-decoration: none;
      }

      .price {
        padding: 0 0 8px 0;
      }

      .image {
        width: 20%;
        padding-right: 16px;
      }

      @media only screen and (max-width: 989px) {
        .info {
          width: calc(80% - 16px);
          display: block;
        }

        .image {
          width: 40%;
        }
      }

      .btn {
        border: 0 none;
        padding: 6px 15px;
        border-radius: 0;
        background: var(--button-background-color);
        color: var(--button-text-color);
        font-family: var(--button-font-family);
        font-weight: var(--button-font-weight);
        font-style: var(--button-font-style);
        font-size: var(--button-font-size);
        text-transform: var(--buttons-transform);
        letter-spacing: var(--buttons-letter-spacing);
        margin: 0;
        line-height: 1.5;
        min-width: 120px;
        min-height: 36px;
      }

      .btn:hover:not([disabled]) {
        background: var(--button-background-hover-color);
        color: var(--button-text-color);
        cursor: pointer;
      }

      .btn.secondary {
        background: transparent;
        color: var(--button-background-color);
        box-shadow: inset 0 0 0 1px var(--button-background-color);
        transition: all 0.2s ease-in-out;
        font-family: var(--button-font-family);
        font-weight: var(--button-font-weight);
        font-style: var(--button-font-style);
        font-size: var(--button-font-size);
        text-transform: var(--buttons-transform);
        letter-spacing: var(--buttons-letter-spacing);

        &:hover:not([disabled]),
        &:active:not([disabled]),
        &:focus:not([disabled]) {
          box-shadow: inset 0 0 0 1px var(--button-background-hover-color);
          background: transparent;
          color: var(--button-background-hover-color);
        }

        &:hover[disabled],
        &:active[disabled],
        &:focus[disabled] {
          color: var(--button-background-color);
          background: transparent;
          cursor: default;
        }
      }

      .btn.unavailable {
        font-size: calc(var(--button-font-size) - 0.25rem);
      }

      .btn.disabled {
        opacity: .65
      }

      .btn.disabled {
        pointer-events: none
      }

      .lds-dual-ring {
        display: inline-block;
        margin: -15px -30px;
      }

      .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 20px;
        height: 20px;
        margin: 6px;
        border-radius: 50%;
        border: 3px solid #000;
        border-color: var(--button-text-color) transparent var(--button-text-color) transparent;
        animation: lds-dual-ring 1.2s linear infinite;
      }

      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      .sr-only {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }

      .options {
        padding-bottom: 16px;
      }

      select {
        appearance: none;
        background-color: transparent;
        border: none;
        padding: 6px 1em 6px 6px;
        margin: 0;
        width: 100%;
        font-family: inherit;
        font-size: 0.85rem;
        cursor: inherit;
        line-height: inherit;
        outline: none;
        border: 1px solid var(--border-color);
      }

      .not-available {
        font-weight: bold;
        text-align: center;
        padding: 2px 6px;
        margin-bottom: 8px;
        opacity: 0.6;
        border: 1px solid var(--border-color);
        width: 100%;
      }

      .select-wrapper {
        position: relative;
        margin-bottom: 8px;
      }

      .select-wrapper button {
        text-align: left;
        border: 1px solid var(--color-primary);
        padding: 8px 35px 8px 10px;
        position: relative;
        white-space: nowrap;
        background: none;
        min-width: 100%;
        font-size: calc(var(--body-font-size) - 2px);
        z-index: 1;
      }

      .select-wrapper button span {
        display: block;
        overflow: hidden;
        width: 100%;
        color: var(--color-primary);
      }

      .select-wrapper button:after {
        content: "";
        border-style: solid;
        border-width: 0 1px 1px 0;
        border-color: var(--color-primary);
        display: inline-block;
        padding: 3px;
        position: absolute;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        right: 15px;
        top: 10px;
      }

      ul {
        display: none;
        flex-direction: column;
        text-align: left;
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% - 1px);
        bottom: auto;
        list-style: none;
        margin: 0;
        padding: 0;
        color: var(--color-primary);
        background-color: transparent;
        border: 1px solid var(--border-color);
        z-index: 3;
        max-height: 40vh;
        overflow-x: auto;
        white-space: nowrap;
        background-color: var(--cross-sell-bg);
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        z-index: 0;
        pointer-events: none;
      }

      @supports (-webkit-touch-callout: none) {
        ul {
          top: top: calc(100% - 2px);
          width: 100%;
        }
      }

      ul.open {
        display: flex;
        opacity: 1;
        z-index: 3;
        pointer-events: all;
      }

      ul:focus {
        outline: var(--color-primary-light) auto 0;
        box-shadow: 0 5px 30px rgba(0, 0, 0, .2);
      }

      ul li {
        font-size: calc(var(--body-font-size) - 2px);
        padding: 10px 10px 12px 10px;
        margin: 0;
        font-family: inherit;
        font-weight: inherit;
        font-weight: inherit;
        cursor: pointer;
      }

      ul li:hover,
      ul li.selected {
        background-color: var(--border-color-subtle);
      }
    `;
  }

  static properties = {
    button: { type: String },
    variant: { type: String },
    optionSelects: { type: Array },
    selectButtonLabels: { type: Array },
    currentVariant: { type: Array },
    featuredImage: { type: String },
    allOptionsChosen: { type: Boolean },
    focusedIndex: { type: Number }
  };

  constructor() {
    super();
    this.productData = JSON.parse(this.getAttribute('product'));
    this.moneyFormat = this.getAttribute('money-format');
    this.focusedIndex = 0;
    this.currentVariant = this._firstAvailableVariant();
    this.featuredImage = this.productData.featured_image;
    this.optionSelects = [];
    this.button = this._getButton();
    this.selectButtonLabels = [...this.productData.options];
    this.allOptionsChosen = !this.productData.options.some((r) =>
      this.selectButtonLabels.includes(r)
    );
    this.cartCount = document.querySelector('.cart-item-count-header--quantity');
  }

  _firstAvailableVariant() {
    const available = this.productData.variants.find((variant) => {
      return variant.available;
    });

    if(available) {
      return available;
    }

    // Return the first variant if none are available.
    return this.productData.variants[0];
  }

  // Return an image URL with size parameter.
  _imageAtSize(url, size) {
    let filename = url.replace(/^.*(\\|\/|:)/, '');
    let parts = filename.split('.');
    let withSize = `${parts[0]}_${size}.${parts[1]}`;
    let fullUrl = `${url.replace(filename, '')}${withSize}`;
    return fullUrl;
  }

  _productHasVariants() {
    return this.productData.variants[0].public_title !== null;
  }

  // Disable atc button and display loading animation.
  _disableButton() {
    this.button = y`
      <button
        type="button"
        class="btn disabled"
        disabled
        aria-label="Loading..."
      >
        <div class="lds-dual-ring"></div>
        <span class="sr-only">Loading...</span>
      </button>
    `;
  }

  _enableButton() {
    this.button = this._getButton(true);
  }

  _addedButton() {
    this.button = y`
      <button
        type="button"
        class="btn disabled"
        disabled
        aria-label="Added to cart"
      >
        Added
      </button>
    `;
  }

  // Return the appropriate button.
  _getButton(showAdd = false) {
    // Options are shown but current variant is sold out.
    if (!this.currentVariant.available && this.optionSelects.length > 0) {
      return y`
        <button
          type="button"
          @click=${() => this._handleButtonClick()}
          class="btn disabled unavailable"
          disabled
          aria-label="Sold out"
        >
          Sold out
        </button>
      `;
    }

    // If there is a variant, allow a selection.
    if (
      (this._productHasVariants() && !showAdd && !this.allOptionsChosen) ||
      !this.currentVariant.available
    ) {
      return y`
        <button
          type="button"
          @click=${() => this._handleButtonClick('options')}
          class="btn secondary action-options"
          aria-label="Choose a variant"
        >
          Choose
        </button>
      `;
    }

    // If we have a variant selected, show 'Add to cart'.
    return y`
      <button
        type="button"
        @click=${() => this._handleButtonClick()}
        class="btn action-add"
        aria-label="Add to cart"
      >
        Add
      </button>
    `;
  }

  // Build out a set of options for the <select>s.
  _getOptions() {
    let optionsDeDupe = [];

    // Create array of objects for options.
    for (const [optionIndex, option] of Object.entries(
      this.productData.options
    )) {
      optionsDeDupe[optionIndex] = {
        label: '',
        options: []
      };

      // Deduplicate variant labels for this option.
      let theseOptions = [];
      for (const [variantIndex, variant] of Object.entries(
        this.productData.variants
      )) {
        theseOptions.push(variant[`option${parseInt(optionIndex) + 1}`]);
      }

      let uniqueOptions = [...new Set(theseOptions)];
      optionsDeDupe[optionIndex].label = option;
      optionsDeDupe[optionIndex].options = uniqueOptions;
    }

    this.optionSelects = optionsDeDupe;
  }

  // Add 1 of current variant to cart.
  async _addToCart() {
    let formData = {
      items: [
        {
          id: this.currentVariant.id,
          quantity: 1
        }
      ]
    };

    try {
      const fetchResult = await window.fetch('/cart/add.js', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const responseJson = await fetchResult.json();

      if (!fetchResult.ok) {
        console.error('Unable to add to cart: ', responseJson);
      } else {
        this._updateCart();
        return responseJson;
      }
    } catch (e) {
      console.error('Unable to add to cart: ', e);
    }
  }

  async _updateCart() {
    const cart = await (await fetch('/cart.js')).json();
    const cart_action = document.querySelector('.cross-sells-wrapper').getAttribute('data-cart-action');

    if (cart_action == "drawer" || cart_action == "persistent") {
      window.wetheme.cartDrawer.updateCartDrawer(cart);
    } else {
      // Update cart count.
      if (this.cartCount) {
        this.cartCount.textContent = cart.item_count;
      }
    }
  }

  async _handleButtonClick(action = 'add') {
    if (action == 'options') {
      // Render variant options in a pseudo-select.
      this._getOptions();
      this.button = this._getButton();
      await this.updateComplete;
      this.renderRoot.querySelector(`#option-0`).focus();
    } else {
      // Loading animation & disable button.
      this._disableButton();

      let json = await this._addToCart();

      this._addedButton();
      setTimeout(() => this._enableButton(), 2000);
    }
  }

  _toggleDropdown(index) {
    const thisBtn = this.renderRoot.querySelector(`#option-${index}`);
    const thisUl = this.renderRoot.querySelector(`#ul-${index}`);
    thisUl.classList.toggle('open');

    if (this.renderRoot.activeElement === thisBtn) {
      thisUl.focus();
    }
  }

  _closeDropdown(index) {
    const thisUl = this.renderRoot.querySelector(`#ul-${index}`);
    thisUl.blur();
  }

  async _handleOptionClick(value, index) {
    // Replace text & value of button.
    this.selectButtonLabels[index] = value;

    // Reactive properties in render() don't trigger an update if
    // they're nested in a .map.
    await this.update();

    const selects = this.renderRoot.querySelectorAll('.select-button');
    const lis = this.renderRoot.querySelectorAll(`#ul-${index} li`);

    lis.forEach((item) => {
      item.classList.remove('selected');
    });

    // Focus the button to trigger blur on any opened <ul>.
    selects[index].focus();

    // Only select a new variant if ALL options have been chosen.
    this.allOptionsChosen = !this.productData.options.some((r) =>
      this.selectButtonLabels.includes(r)
    );
    if (!this.allOptionsChosen) return;

    // Style selected <li>.
    let selectedLi = Array.from(lis).find((e) => {
      return e.getAttribute('key') === value;
    });
    selectedLi.classList.add('selected');

    // Find product variable based on current option choices.
    let vals = [];

    for (const [index, selectButton] of Object.entries(selects)) {
      vals.push(selectButton.value);
    }

    const title = vals.join(' / ');
    const variant = this.productData.variants.find((obj) => obj.title == title);

    if (variant) {
      this.currentVariant = variant;

      if (this.currentVariant.featured_image) {
        this.featuredImage = this.currentVariant.featured_image.src;
      }
    } else {
      // No matching variant found in the product JSON.
      // Fake the unavailable status to trigger disabling atc button.
      this.currentVariant = {
        available: false
      };

      this.featuredImage = this.productData.featured_image;
    }

    this.button = this._getButton(this.currentVariant.available);
  }

  async _moveFocusedIndex(e) {
    const ul = e.path[0];
    const lis = ul.querySelectorAll('li');
    let focusedIndex = this.focusedIndex;

    switch (e.key) {
      case 'ArrowDown':
        focusedIndex++;
        if (focusedIndex >= 0 && focusedIndex < lis.length) {
          this.focusedIndex = focusedIndex;
        }
        break;
      case 'ArrowUp':
        focusedIndex--;
        if (focusedIndex >= 0) {
          this.focusedIndex = focusedIndex;
        }
        break;
      case 'Enter':
      case 'Space':
        // Select this option.
        var focusedOption = this.optionSelects[ul.dataset.index].options[
          this.focusedIndex
        ];
        this._handleOptionClick(focusedOption, ul.dataset.index);
        this._closeDropdown(ul.dataset.index);
        break;
      case 'Escape':
        // Close the dropdown
        this._closeDropdown(ul.dataset.index);
        break;
      default:
        break;
    }
  }

  render() {
    if (this.productData.available === false) {
      if (window.Shopify.designMode) {
        return y`
          <div class="not-available">
            ${this.productData.title} is not available.
          </div>
        `;
      }

      return;
    }

    const optionsList = (option, index) => {
      const focusedOption = this.optionSelects[index].options[
        this.focusedIndex
      ];
      let isSelected = '';

      // For keyboard navigation, highlight an <li>.
      if (focusedOption === option) {
        isSelected = 'selected';
      }

      let sanitizedId = focusedOption.replace(' ', '');
      sanitizedId = encodeURIComponent(sanitizedId).toLowerCase();

      return y`
        <li
          id="li-${sanitizedId}"
          @click=${() => this._handleOptionClick(option, index)}
          key="${option}"
          class="${isSelected}"
          aria-label="${option}"
        >
          ${option}
        </li>
      `;
    };

    return y`
      <div class="image">
        <img
          class="featured-image"
          loading="lazy"
          srcset="
            ${this._imageAtSize(this.featuredImage, '200x')} 200w,
            ${this._imageAtSize(this.featuredImage, '400x')} 400w,
            ${this._imageAtSize(this.featuredImage, '550x')} 550w
          "
          sizes="(min-width: 1200px) 500px, (min-width: 750px) 400px, 100vw"
          src="${this.featuredImage}"
          alt="${this.currentVariant.title}"
        />
      </div>
      <div class="info">
        <div class="product-info">
          <div class="title">
            <a
              href="/products/${this.productData.handle}"
              target="_blank"
              title="Opens ${this.productData.title} in a new tab"
              >${this.productData.title}</a
            >
          </div>
          <div class="price">
            <span class="money">
              ${this.currentVariant.available
                ? formatMoney(
                    this.currentVariant.price,
                    this.moneyFormat
                  )
                : y`
                    <span>Sold out</span>
                  `}
            </span>
          </div>
          <div class="options">
            ${this.optionSelects.map((item, index) => {
              const focusedOption = this.optionSelects[index].options[
                this.focusedIndex
              ];
              let sanitizedId = focusedOption.replace(' ', '');
              sanitizedId = encodeURIComponent(sanitizedId).toLowerCase();

              return y`
                <div class="select-wrapper">
                  <button
                    class="alt-focus select-button"
                    id="option-${index}"
                    value="${this.selectButtonLabels[index]}"
                    type="button"
                    readonly="true"
                    tabindex="0"
                    aria-haspopup="listbox"
                    aria-label="${item.label}"
                    @click=${() => this._toggleDropdown(index)}
                  >
                    <span>${this.selectButtonLabels[index]}</span>
                  </button>
                  <ul
                    role="listbox"
                    tabindex="0"
                    id="ul-${index}"
                    data-index="${index}"
                    @blur=${() => this._toggleDropdown(index)}
                    @keydown="${this._moveFocusedIndex}"
                    aria-activedescendant="li-${sanitizedId}"
                  >
                    ${item.options.map((option) => optionsList(option, index))}
                  </ul>
                </div>
              `;
            })}
          </div>
        </div>
        <div class="buttons">
          ${this.button}
        </div>
      </div>
    `;
  }
}

customElements.define('cross-sell', CrossSell);

/******/ })()
;