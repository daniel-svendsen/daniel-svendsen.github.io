var Ne=Object.defineProperty;var Ve=(e,r,n)=>r in e?Ne(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;var $=(e,r,n)=>Ve(e,typeof r!="symbol"?r+"":r,n);function ze(e,r){for(var n=0;n<r.length;n++){const o=r[n];if(typeof o!="string"&&!Array.isArray(o)){for(const u in o)if(u!=="default"&&!(u in e)){const s=Object.getOwnPropertyDescriptor(o,u);s&&Object.defineProperty(e,u,s.get?s:{enumerable:!0,get:()=>o[u]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function Y(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var X={exports:{}},L={},ee={exports:{}},d={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge;function Ke(){if(ge)return d;ge=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;function S(t){return t===null||typeof t!="object"?null:(t=h&&t[h]||t["@@iterator"],typeof t=="function"?t:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,M={};function A(t,a,y){this.props=t,this.context=a,this.refs=M,this.updater=y||E}A.prototype.isReactComponent={},A.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")},A.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H(){}H.prototype=A.prototype;function q(t,a,y){this.props=t,this.context=a,this.refs=M,this.updater=y||E}var W=q.prototype=new H;W.constructor=q,x(W,A.prototype),W.isPureReactComponent=!0;var de=Array.isArray,ye=Object.prototype.hasOwnProperty,G={current:null},me={key:!0,ref:!0,__self:!0,__source:!0};function he(t,a,y){var v,m={},g=null,b=null;if(a!=null)for(v in a.ref!==void 0&&(b=a.ref),a.key!==void 0&&(g=""+a.key),a)ye.call(a,v)&&!me.hasOwnProperty(v)&&(m[v]=a[v]);var _=arguments.length-2;if(_===1)m.children=y;else if(1<_){for(var T=Array(_),w=0;w<_;w++)T[w]=arguments[w+2];m.children=T}if(t&&t.defaultProps)for(v in _=t.defaultProps,_)m[v]===void 0&&(m[v]=_[v]);return{$$typeof:e,type:t,key:g,ref:b,props:m,_owner:G.current}}function qe(t,a){return{$$typeof:e,type:t.type,key:a,ref:t.ref,props:t.props,_owner:t._owner}}function Z(t){return typeof t=="object"&&t!==null&&t.$$typeof===e}function Le(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(y){return a[y]})}var ve=/\/+/g;function Q(t,a){return typeof t=="object"&&t!==null&&t.key!=null?Le(""+t.key):a.toString(36)}function V(t,a,y,v,m){var g=typeof t;(g==="undefined"||g==="boolean")&&(t=null);var b=!1;if(t===null)b=!0;else switch(g){case"string":case"number":b=!0;break;case"object":switch(t.$$typeof){case e:case r:b=!0}}if(b)return b=t,m=m(b),t=v===""?"."+Q(b,0):v,de(m)?(y="",t!=null&&(y=t.replace(ve,"$&/")+"/"),V(m,a,y,"",function(w){return w})):m!=null&&(Z(m)&&(m=qe(m,y+(!m.key||b&&b.key===m.key?"":(""+m.key).replace(ve,"$&/")+"/")+t)),a.push(m)),1;if(b=0,v=v===""?".":v+":",de(t))for(var _=0;_<t.length;_++){g=t[_];var T=v+Q(g,_);b+=V(g,a,y,T,m)}else if(T=S(t),typeof T=="function")for(t=T.call(t),_=0;!(g=t.next()).done;)g=g.value,T=v+Q(g,_++),b+=V(g,a,y,T,m);else if(g==="object")throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return b}function z(t,a,y){if(t==null)return t;var v=[],m=0;return V(t,v,"","",function(g){return a.call(y,g,m++)}),v}function Fe(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(y){(t._status===0||t._status===-1)&&(t._status=1,t._result=y)},function(y){(t._status===0||t._status===-1)&&(t._status=2,t._result=y)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var O={current:null},K={transition:null},Ue={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:K,ReactCurrentOwner:G};function Te(){throw Error("act(...) is not supported in production builds of React.")}return d.Children={map:z,forEach:function(t,a,y){z(t,function(){a.apply(this,arguments)},y)},count:function(t){var a=0;return z(t,function(){a++}),a},toArray:function(t){return z(t,function(a){return a})||[]},only:function(t){if(!Z(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},d.Component=A,d.Fragment=n,d.Profiler=u,d.PureComponent=q,d.StrictMode=o,d.Suspense=i,d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ue,d.act=Te,d.cloneElement=function(t,a,y){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var v=x({},t.props),m=t.key,g=t.ref,b=t._owner;if(a!=null){if(a.ref!==void 0&&(g=a.ref,b=G.current),a.key!==void 0&&(m=""+a.key),t.type&&t.type.defaultProps)var _=t.type.defaultProps;for(T in a)ye.call(a,T)&&!me.hasOwnProperty(T)&&(v[T]=a[T]===void 0&&_!==void 0?_[T]:a[T])}var T=arguments.length-2;if(T===1)v.children=y;else if(1<T){_=Array(T);for(var w=0;w<T;w++)_[w]=arguments[w+2];v.children=_}return{$$typeof:e,type:t.type,key:m,ref:g,props:v,_owner:b}},d.createContext=function(t){return t={$$typeof:l,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s,_context:t},t.Consumer=t},d.createElement=he,d.createFactory=function(t){var a=he.bind(null,t);return a.type=t,a},d.createRef=function(){return{current:null}},d.forwardRef=function(t){return{$$typeof:c,render:t}},d.isValidElement=Z,d.lazy=function(t){return{$$typeof:p,_payload:{_status:-1,_result:t},_init:Fe}},d.memo=function(t,a){return{$$typeof:f,type:t,compare:a===void 0?null:a}},d.startTransition=function(t){var a=K.transition;K.transition={};try{t()}finally{K.transition=a}},d.unstable_act=Te,d.useCallback=function(t,a){return O.current.useCallback(t,a)},d.useContext=function(t){return O.current.useContext(t)},d.useDebugValue=function(){},d.useDeferredValue=function(t){return O.current.useDeferredValue(t)},d.useEffect=function(t,a){return O.current.useEffect(t,a)},d.useId=function(){return O.current.useId()},d.useImperativeHandle=function(t,a,y){return O.current.useImperativeHandle(t,a,y)},d.useInsertionEffect=function(t,a){return O.current.useInsertionEffect(t,a)},d.useLayoutEffect=function(t,a){return O.current.useLayoutEffect(t,a)},d.useMemo=function(t,a){return O.current.useMemo(t,a)},d.useReducer=function(t,a,y){return O.current.useReducer(t,a,y)},d.useRef=function(t){return O.current.useRef(t)},d.useState=function(t){return O.current.useState(t)},d.useSyncExternalStore=function(t,a,y){return O.current.useSyncExternalStore(t,a,y)},d.useTransition=function(){return O.current.useTransition()},d.version="18.3.1",d}var _e;function ke(){return _e||(_e=1,ee.exports=Ke()),ee.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function Be(){if(Ee)return L;Ee=1;var e=ke(),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,u=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(c,i,f){var p,h={},S=null,E=null;f!==void 0&&(S=""+f),i.key!==void 0&&(S=""+i.key),i.ref!==void 0&&(E=i.ref);for(p in i)o.call(i,p)&&!s.hasOwnProperty(p)&&(h[p]=i[p]);if(c&&c.defaultProps)for(p in i=c.defaultProps,i)h[p]===void 0&&(h[p]=i[p]);return{$$typeof:r,type:c,key:S,ref:E,props:h,_owner:u.current}}return L.Fragment=n,L.jsx=l,L.jsxs=l,L}var be;function Je(){return be||(be=1,X.exports=Be()),X.exports}var bt=Je(),N=ke();const k=Y(N),St=ze({__proto__:null,default:k},[N]);var te,Se;function Ye(){if(Se)return te;Se=1;var e=typeof Element<"u",r=typeof Map=="function",n=typeof Set=="function",o=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function u(s,l){if(s===l)return!0;if(s&&l&&typeof s=="object"&&typeof l=="object"){if(s.constructor!==l.constructor)return!1;var c,i,f;if(Array.isArray(s)){if(c=s.length,c!=l.length)return!1;for(i=c;i--!==0;)if(!u(s[i],l[i]))return!1;return!0}var p;if(r&&s instanceof Map&&l instanceof Map){if(s.size!==l.size)return!1;for(p=s.entries();!(i=p.next()).done;)if(!l.has(i.value[0]))return!1;for(p=s.entries();!(i=p.next()).done;)if(!u(i.value[1],l.get(i.value[0])))return!1;return!0}if(n&&s instanceof Set&&l instanceof Set){if(s.size!==l.size)return!1;for(p=s.entries();!(i=p.next()).done;)if(!l.has(i.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(s)&&ArrayBuffer.isView(l)){if(c=s.length,c!=l.length)return!1;for(i=c;i--!==0;)if(s[i]!==l[i])return!1;return!0}if(s.constructor===RegExp)return s.source===l.source&&s.flags===l.flags;if(s.valueOf!==Object.prototype.valueOf&&typeof s.valueOf=="function"&&typeof l.valueOf=="function")return s.valueOf()===l.valueOf();if(s.toString!==Object.prototype.toString&&typeof s.toString=="function"&&typeof l.toString=="function")return s.toString()===l.toString();if(f=Object.keys(s),c=f.length,c!==Object.keys(l).length)return!1;for(i=c;i--!==0;)if(!Object.prototype.hasOwnProperty.call(l,f[i]))return!1;if(e&&s instanceof Element)return!1;for(i=c;i--!==0;)if(!((f[i]==="_owner"||f[i]==="__v"||f[i]==="__o")&&s.$$typeof)&&!u(s[f[i]],l[f[i]]))return!1;return!0}return s!==s&&l!==l}return te=function(l,c){try{return u(l,c)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}},te}var We=Ye();const Ge=Y(We);var re,Oe;function Ze(){if(Oe)return re;Oe=1;var e=function(r,n,o,u,s,l,c,i){if(!r){var f;if(n===void 0)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[o,u,s,l,c,i],h=0;f=new Error(n.replace(/%s/g,function(){return p[h++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}};return re=e,re}var Qe=Ze();const Ce=Y(Qe);var ne,Ae;function Xe(){return Ae||(Ae=1,ne=function(r,n,o,u){var s=o?o.call(u,r,n):void 0;if(s!==void 0)return!!s;if(r===n)return!0;if(typeof r!="object"||!r||typeof n!="object"||!n)return!1;var l=Object.keys(r),c=Object.keys(n);if(l.length!==c.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(n),f=0;f<l.length;f++){var p=l[f];if(!i(p))return!1;var h=r[p],S=n[p];if(s=o?o.call(u,h,S,p):void 0,s===!1||s===void 0&&h!==S)return!1}return!0}),ne}var et=Xe();const tt=Y(et);var Pe=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Pe||{}),oe={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},we=Object.values(Pe),pe={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},rt=Object.entries(pe).reduce((e,[r,n])=>(e[n]=r,e),{}),R="data-rh",j={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},D=(e,r)=>{for(let n=e.length-1;n>=0;n-=1){const o=e[n];if(Object.prototype.hasOwnProperty.call(o,r))return o[r]}return null},nt=e=>{let r=D(e,"title");const n=D(e,j.TITLE_TEMPLATE);if(Array.isArray(r)&&(r=r.join("")),n&&r)return n.replace(/%s/g,()=>r);const o=D(e,j.DEFAULT_TITLE);return r||o||void 0},ot=e=>D(e,j.ON_CHANGE_CLIENT_STATE)||(()=>{}),se=(e,r)=>r.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,o)=>({...n,...o}),{}),st=(e,r)=>r.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,o)=>{if(!n.length){const u=Object.keys(o);for(let s=0;s<u.length;s+=1){const c=u[s].toLowerCase();if(e.indexOf(c)!==-1&&o[c])return n.concat(o)}}return n},[]),it=e=>console&&typeof console.warn=="function"&&console.warn(e),F=(e,r,n)=>{const o={};return n.filter(u=>Array.isArray(u[e])?!0:(typeof u[e]<"u"&&it(`Helmet: ${e} should be of type "Array". Instead found type "${typeof u[e]}"`),!1)).map(u=>u[e]).reverse().reduce((u,s)=>{const l={};s.filter(i=>{let f;const p=Object.keys(i);for(let S=0;S<p.length;S+=1){const E=p[S],x=E.toLowerCase();r.indexOf(x)!==-1&&!(f==="rel"&&i[f].toLowerCase()==="canonical")&&!(x==="rel"&&i[x].toLowerCase()==="stylesheet")&&(f=x),r.indexOf(E)!==-1&&(E==="innerHTML"||E==="cssText"||E==="itemprop")&&(f=E)}if(!f||!i[f])return!1;const h=i[f].toLowerCase();return o[f]||(o[f]={}),l[f]||(l[f]={}),o[f][h]?!1:(l[f][h]=!0,!0)}).reverse().forEach(i=>u.push(i));const c=Object.keys(l);for(let i=0;i<c.length;i+=1){const f=c[i],p={...o[f],...l[f]};o[f]=p}return u},[]).reverse()},at=(e,r)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][r])return!0}return!1},ut=e=>({baseTag:st(["href"],e),bodyAttributes:se("bodyAttributes",e),defer:D(e,j.DEFER),encode:D(e,j.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:se("htmlAttributes",e),linkTags:F("link",["rel","href"],e),metaTags:F("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:F("noscript",["innerHTML"],e),onChangeClientState:ot(e),scriptTags:F("script",["src","innerHTML"],e),styleTags:F("style",["cssText"],e),title:nt(e),titleAttributes:se("titleAttributes",e),prioritizeSeoTags:at(e,j.PRIORITIZE_SEO_TAGS)}),Ie=e=>Array.isArray(e)?e.join(""):e,lt=(e,r)=>{const n=Object.keys(e);for(let o=0;o<n.length;o+=1)if(r[n[o]]&&r[n[o]].includes(e[n[o]]))return!0;return!1},ie=(e,r)=>Array.isArray(e)?e.reduce((n,o)=>(lt(o,r)?n.priority.push(o):n.default.push(o),n),{priority:[],default:[]}):{default:e,priority:[]},Re=(e,r)=>({...e,[r]:void 0}),ct=["noscript","script","style"],ue=(e,r=!0)=>r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),je=e=>Object.keys(e).reduce((r,n)=>{const o=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return r?`${r} ${o}`:o},""),ft=(e,r,n,o)=>{const u=je(n),s=Ie(r);return u?`<${e} ${R}="true" ${u}>${ue(s,o)}</${e}>`:`<${e} ${R}="true">${ue(s,o)}</${e}>`},pt=(e,r,n=!0)=>r.reduce((o,u)=>{const s=u,l=Object.keys(s).filter(f=>!(f==="innerHTML"||f==="cssText")).reduce((f,p)=>{const h=typeof s[p]>"u"?p:`${p}="${ue(s[p],n)}"`;return f?`${f} ${h}`:h},""),c=s.innerHTML||s.cssText||"",i=ct.indexOf(e)===-1;return`${o}<${e} ${R}="true" ${l}${i?"/>":`>${c}</${e}>`}`},""),De=(e,r={})=>Object.keys(e).reduce((n,o)=>{const u=pe[o];return n[u||o]=e[o],n},r),dt=(e,r,n)=>{const o={key:r,[R]:!0},u=De(n,o);return[k.createElement("title",u,r)]},J=(e,r)=>r.map((n,o)=>{const u={key:o,[R]:!0};return Object.keys(n).forEach(s=>{const c=pe[s]||s;if(c==="innerHTML"||c==="cssText"){const i=n.innerHTML||n.cssText;u.dangerouslySetInnerHTML={__html:i}}else u[c]=n[s]}),k.createElement(e,u)}),C=(e,r,n=!0)=>{switch(e){case"title":return{toComponent:()=>dt(e,r.title,r.titleAttributes),toString:()=>ft(e,r.title,r.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>De(r),toString:()=>je(r)};default:return{toComponent:()=>J(e,r),toString:()=>pt(e,r,n)}}},yt=({metaTags:e,linkTags:r,scriptTags:n,encode:o})=>{const u=ie(e,oe.meta),s=ie(r,oe.link),l=ie(n,oe.script);return{priorityMethods:{toComponent:()=>[...J("meta",u.priority),...J("link",s.priority),...J("script",l.priority)],toString:()=>`${C("meta",u.priority,o)} ${C("link",s.priority,o)} ${C("script",l.priority,o)}`},metaTags:u.default,linkTags:s.default,scriptTags:l.default}},mt=e=>{const{baseTag:r,bodyAttributes:n,encode:o=!0,htmlAttributes:u,noscriptTags:s,styleTags:l,title:c="",titleAttributes:i,prioritizeSeoTags:f}=e;let{linkTags:p,metaTags:h,scriptTags:S}=e,E={toComponent:()=>{},toString:()=>""};return f&&({priorityMethods:E,linkTags:p,metaTags:h,scriptTags:S}=yt(e)),{priority:E,base:C("base",r,o),bodyAttributes:C("bodyAttributes",n,o),htmlAttributes:C("htmlAttributes",u,o),link:C("link",p,o),meta:C("meta",h,o),noscript:C("noscript",s,o),script:C("script",S,o),style:C("style",l,o),title:C("title",{title:c,titleAttributes:i},o)}},le=mt,B=[],Me=!!(typeof window<"u"&&window.document&&window.document.createElement),ce=class{constructor(e,r){$(this,"instances",[]);$(this,"canUseDOM",Me);$(this,"context");$(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?B:this.instances,add:e=>{(this.canUseDOM?B:this.instances).push(e)},remove:e=>{const r=(this.canUseDOM?B:this.instances).indexOf(e);(this.canUseDOM?B:this.instances).splice(r,1)}}});this.context=e,this.canUseDOM=r||!1,r||(e.helmet=le({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},ht={},He=k.createContext(ht),P,vt=(P=class extends N.Component{constructor(n){super(n);$(this,"helmetData");this.helmetData=new ce(this.props.context||{},P.canUseDOM)}render(){return k.createElement(He.Provider,{value:this.helmetData.value},this.props.children)}},$(P,"canUseDOM",Me),P),I=(e,r)=>{const n=document.head||document.querySelector("head"),o=n.querySelectorAll(`${e}[${R}]`),u=[].slice.call(o),s=[];let l;return r&&r.length&&r.forEach(c=>{const i=document.createElement(e);for(const f in c)if(Object.prototype.hasOwnProperty.call(c,f))if(f==="innerHTML")i.innerHTML=c.innerHTML;else if(f==="cssText")i.styleSheet?i.styleSheet.cssText=c.cssText:i.appendChild(document.createTextNode(c.cssText));else{const p=f,h=typeof c[p]>"u"?"":c[p];i.setAttribute(f,h)}i.setAttribute(R,"true"),u.some((f,p)=>(l=p,i.isEqualNode(f)))?u.splice(l,1):s.push(i)}),u.forEach(c=>{var i;return(i=c.parentNode)==null?void 0:i.removeChild(c)}),s.forEach(c=>n.appendChild(c)),{oldTags:u,newTags:s}},fe=(e,r)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const o=n.getAttribute(R),u=o?o.split(","):[],s=[...u],l=Object.keys(r);for(const c of l){const i=r[c]||"";n.getAttribute(c)!==i&&n.setAttribute(c,i),u.indexOf(c)===-1&&u.push(c);const f=s.indexOf(c);f!==-1&&s.splice(f,1)}for(let c=s.length-1;c>=0;c-=1)n.removeAttribute(s[c]);u.length===s.length?n.removeAttribute(R):n.getAttribute(R)!==l.join(",")&&n.setAttribute(R,l.join(","))},Tt=(e,r)=>{typeof e<"u"&&document.title!==e&&(document.title=Ie(e)),fe("title",r)},xe=(e,r)=>{const{baseTag:n,bodyAttributes:o,htmlAttributes:u,linkTags:s,metaTags:l,noscriptTags:c,onChangeClientState:i,scriptTags:f,styleTags:p,title:h,titleAttributes:S}=e;fe("body",o),fe("html",u),Tt(h,S);const E={baseTag:I("base",n),linkTags:I("link",s),metaTags:I("meta",l),noscriptTags:I("noscript",c),scriptTags:I("script",f),styleTags:I("style",p)},x={},M={};Object.keys(E).forEach(A=>{const{newTags:H,oldTags:q}=E[A];H.length&&(x[A]=H),q.length&&(M[A]=E[A].oldTags)}),r&&r(),i(e,x,M)},U=null,gt=e=>{U&&cancelAnimationFrame(U),e.defer?U=requestAnimationFrame(()=>{xe(e,()=>{U=null})}):(xe(e),U=null)},_t=gt,$e=class extends N.Component{constructor(){super(...arguments);$(this,"rendered",!1)}shouldComponentUpdate(r){return!tt(r,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:r}=this.props.context;r.remove(this),this.emitChange()}emitChange(){const{helmetInstances:r,setHelmet:n}=this.props.context;let o=null;const u=ut(r.get().map(s=>{const l={...s.props};return delete l.context,l}));vt.canUseDOM?_t(u):le&&(o=le(u)),n(o)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:r}=this.props.context;r.add(this),this.emitChange()}render(){return this.init(),null}},ae,Ot=(ae=class extends N.Component{shouldComponentUpdate(e){return!Ge(Re(this.props,"helmetData"),Re(e,"helmetData"))}mapNestedChildrenToProps(e,r){if(!r)return null;switch(e.type){case"script":case"noscript":return{innerHTML:r};case"style":return{cssText:r};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,r,n,o){return{...r,[e.type]:[...r[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,o)}]}}mapObjectTypeChildren(e,r,n,o){switch(e.type){case"title":return{...r,[e.type]:o,titleAttributes:{...n}};case"body":return{...r,bodyAttributes:{...n}};case"html":return{...r,htmlAttributes:{...n}};default:return{...r,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,r){let n={...r};return Object.keys(e).forEach(o=>{n={...n,[o]:e[o]}}),n}warnOnInvalidChildren(e,r){return Ce(we.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${we.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Ce(!r||typeof r=="string"||Array.isArray(r)&&!r.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,r){let n={};return k.Children.forEach(e,o=>{if(!o||!o.props)return;const{children:u,...s}=o.props,l=Object.keys(s).reduce((i,f)=>(i[rt[f]||f]=s[f],i),{});let{type:c}=o;switch(typeof c=="symbol"?c=c.toString():this.warnOnInvalidChildren(o,u),c){case"Symbol(react.fragment)":r=this.mapChildrenToProps(u,r);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(o,n,l,u);break;default:r=this.mapObjectTypeChildren(o,r,l,u);break}}),this.mapArrayTypeChildrenToProps(n,r)}render(){const{children:e,...r}=this.props;let n={...r},{helmetData:o}=r;if(e&&(n=this.mapChildrenToProps(e,n)),o&&!(o instanceof ce)){const u=o;o=new ce(u.context,!0),delete n.helmetData}return o?k.createElement($e,{...n,context:o.value}):k.createElement(He.Consumer,null,u=>k.createElement($e,{...n,context:u}))}},$(ae,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),ae);export{Ot as H,k as R,St as a,ke as b,vt as c,Y as g,bt as j,N as r};
