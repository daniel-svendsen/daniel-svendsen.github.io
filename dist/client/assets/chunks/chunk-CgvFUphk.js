import{r as s,j as h}from"./chunk-aQJg_Uus.js";import"./chunk-vLvU2Ybl.js";/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(this,arguments)}var O;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(O||(O={}));function p(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function P(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function T(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var S;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(S||(S={}));function ie(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function se(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?T(e):e;return{pathname:r?r.startsWith("/")?r:oe(r,t):t,search:ce(n),hash:ue(a)}}function oe(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function y(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function le(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function M(e,t){let r=le(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function K(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=T(e):(a=C({},e),p(!a.pathname||!a.pathname.includes("?"),y("?","pathname","search",a)),p(!a.pathname||!a.pathname.includes("#"),y("#","pathname","hash",a)),p(!a.search||!a.search.includes("#"),y("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,u;if(o==null)u=r;else{let d=t.length-1;if(!n&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),d-=1;a.pathname=g.join("/")}u=d>=0?t[d]:"/"}let c=se(a,u),l=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(l||f)&&(c.pathname+="/"),c}const W=e=>e.join("/").replace(/\/\/+/g,"/"),ce=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ue=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,V=["post","put","patch","delete"];new Set(V);const fe=["get",...V];new Set(fe);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}const A=s.createContext(null),v=s.createContext(null),J=s.createContext(null),k=s.createContext({outlet:null,matches:[],isDataRoute:!1});function de(e,t){let{relative:r}=t===void 0?{}:t;L()||p(!1);let{basename:n,navigator:a}=s.useContext(v),{hash:i,pathname:o,search:u}=$(e,{relative:r}),c=o;return n!=="/"&&(c=o==="/"?n:W([n,o])),a.createHref({pathname:c,search:u,hash:i})}function L(){return s.useContext(J)!=null}function E(){return L()||p(!1),s.useContext(J).location}function _(e){s.useContext(v).static||s.useLayoutEffect(e)}function he(){let{isDataRoute:e}=s.useContext(k);return e?be():pe()}function pe(){L()||p(!1);let e=s.useContext(A),{basename:t,future:r,navigator:n}=s.useContext(v),{matches:a}=s.useContext(k),{pathname:i}=E(),o=JSON.stringify(M(a,r.v7_relativeSplatPath)),u=s.useRef(!1);return _(()=>{u.current=!0}),s.useCallback(function(l,f){if(f===void 0&&(f={}),!u.current)return;if(typeof l=="number"){n.go(l);return}let d=K(l,JSON.parse(o),i,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:W([t,d.pathname])),(f.replace?n.replace:n.push)(d,f.state,f)},[t,n,o,i,e])}function $(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=s.useContext(v),{matches:a}=s.useContext(k),{pathname:i}=E(),o=JSON.stringify(M(a,n.v7_relativeSplatPath));return s.useMemo(()=>K(e,JSON.parse(o),i,r==="path"),[e,o,i,r])}var z=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(z||{}),q=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(q||{});function ge(e){let t=s.useContext(A);return t||p(!1),t}function me(e){let t=s.useContext(k);return t||p(!1),t}function ve(e){let t=me(),r=t.matches[t.matches.length-1];return r.route.id||p(!1),r.route.id}function be(){let{router:e}=ge(z.UseNavigateStable),t=ve(q.UseNavigateStable),r=s.useRef(!1);return _(()=>{r.current=!0}),s.useCallback(function(a,i){i===void 0&&(i={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,w({fromRouteId:t},i)))},[e,t])}new Promise(()=>{});/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}function ke(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function xe(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ye(e,t){return e.button===0&&(!t||t==="_self")&&!xe(e)}const Ce=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],we="6";try{window.__reactRouterVersion=we}catch{}const je=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Le=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,F=s.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:i,replace:o,state:u,target:c,to:l,preventScrollReset:f,viewTransition:d}=t,g=ke(t,Ce),{basename:te}=s.useContext(v),R,N=!1;if(typeof l=="string"&&Le.test(l)&&(R=l,je))try{let m=new URL(window.location.href),b=l.startsWith("//")?new URL(m.protocol+l):new URL(l),U=ie(b.pathname,te);b.origin===m.origin&&U!=null?l=U+b.search+b.hash:N=!0}catch{}let re=de(l,{relative:a}),ne=Ee(l,{replace:o,state:u,target:c,preventScrollReset:f,relative:a,viewTransition:d});function ae(m){n&&n(m),m.defaultPrevented||ne(m)}return s.createElement("a",j({},g,{href:R||re,onClick:N||i?n:ae,ref:r,target:c}))});var B;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(B||(B={}));var I;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(I||(I={}));function Ee(e,t){let{target:r,replace:n,state:a,preventScrollReset:i,relative:o,viewTransition:u}=t===void 0?{}:t,c=he(),l=E(),f=$(e,{relative:o});return s.useCallback(d=>{if(ye(d,r)){d.preventDefault();let g=n!==void 0?n:P(l)===P(f);c(e,{replace:g,state:a,preventScrollReset:i,relative:o,viewTransition:u})}},[l,c,f,n,a,r,e,i,o,u])}function Se({image:e,imageLink:t,title:r,description:n,price:a,buttonText:i,buttonLink:o,onClick:u,icon:c}){return h.jsxs("article",{className:"flex flex-col border rounded-lg shadow-md p-4 h-full",onClick:u,children:[e&&h.jsx("figure",{className:"w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg mb-4",children:t?h.jsx(F,{to:t,"aria-label":`View gallery for ${r}`,children:h.jsx("img",{src:e,alt:r,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer",loading:"lazy"})}):h.jsx("img",{src:e,alt:r,className:"w-full h-full object-cover transition-transform duration-500 hover:scale-110",loading:"lazy"})}),h.jsxs("div",{className:"flex-grow flex flex-col",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[c&&h.jsx(c,{size:24,className:"text-gray-500"}),h.jsx("h2",{className:"text-lg font-bold",children:r})]}),h.jsx("p",{className:"text-sm text-gray-600 mt-2 whitespace-pre-line flex-grow",children:n}),a&&h.jsx("p",{className:"text-lg font-bold mt-6",children:a})]}),i&&o&&h.jsx(F,{to:o,className:"mt-4 px-6 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-700 transition",children:i})]})}/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),X=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ne={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:i,iconNode:o,...u},c)=>s.createElement("svg",{ref:c,...Ne,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:X("lucide",a),...u},[...o.map(([l,f])=>s.createElement(l,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(e,t)=>{const r=s.forwardRef(({className:n,...a},i)=>s.createElement(Ue,{ref:i,iconNode:t,className:X(`lucide-${Re(e)}`,n),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=x("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=x("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=x("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=x("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),D="/assets/assets/static/wedding.Se-qk-Wt.jpg",H="/assets/assets/static/portrait.BuLiEXZv.jpg",ee="/assets/assets/static/company.BrR4d-y-.jpg",Fe=[{image:D,title:"Bröllopsfotografering & Bröllopsfilm",description:`Ert bröllop är en unik och kärleksfull dag, och jag hjälper er att fånga alla magiska ögonblick. 
                  Jag erbjuder både bröllopsfotografering och film för att skapa tidlösa minnen av er stora dag.`,buttonText:"Läs mer",buttonLink:"/services",icon:G},{image:H,title:"Porträtt & Familjefoto",description:`Oavsett om du behöver en professionell bild för ditt CV, sociala medier eller ett vackert familjeporträtt, 
                  hjälper jag dig att fånga naturliga och personliga bilder – utomhus eller på plats med bakgrund.`,buttonText:"Läs mer",buttonLink:"/services",icon:Y},{image:ee,title:"Företag, Event & Verksamhetsfoto",description:`Fånga ditt företags unika karaktär med professionella bilder och filmklipp. Perfekt för konferenser, 
                  mässor, personalporträtt och marknadsföring. Har du en hobbyverksamhet eller är bilentusiast? 
                  Jag hjälper dig att skapa unika bilder för reklam och sociala medier.`,buttonText:"Läs mer",buttonLink:"/services",icon:Z},{title:"Hemsidesutveckling & SEO",description:`Behöver du en modern och snabb hemsida? Jag bygger responsiva webbplatser för företag, fotografer och kreatörer, 
                  med fokus på SEO och användarvänlighet.`,buttonText:"Läs mer",buttonLink:"/services",icon:Q}],Be=[{title:"Porträtt & Familjefoto",image:H,description:`• 30 minuters fotografering  
                  • 5 redigerade bilder ingår  
                  • Extra bilder kan köpas till för 150 kr/st  
                  • Passar för CV, LinkedIn, sociala medier, familjeporträtt och generationsbilder`,price:"Från 1200 KR",buttonText:"Kontakt",buttonLink:"/contact",icon:Y},{title:"Bröllopsfotografering & Bröllopsfilm",image:D,description:`Välj mellan tre olika paket beroende på hur mycket av bröllopsdagen du vill dokumentera:  
                  
                  • Litet paket – 3 timmar fotografering, 50 redigerade bilder → 7500 kr  
                  • Mellanpaket – 6 timmar fotografering, 100 redigerade bilder → 12 000 kr  
                  • Heldag – 10 timmar fotografering, 200 redigerade bilder + kort bröllopsfilm → 18 000 kr  
                  
                  Filmalternativ:  
                  • Cinematisk bröllopsfilm (3-5 min highlight reel) → 5000 kr vid fotopaket / 8000 kr enskilt  
                  
                  Extra timmar utöver paketen → 2000 kr/timme`,price:"Från 7500 KR",buttonText:"Kontakt",buttonLink:"/contact",icon:G},{title:"Företagsfoto, Event & Verksamhetsfoto",image:ee,description:`• Företagsporträtt (1-5 personer) → Från 2500 kr, fler personer enligt offert  
                  • Eventfotografering – 3 timmar → 4500 kr | Heldag → 12 000 kr  
                  • Produkt- & marknadsföringsbilder → Från 350 kr/bild  
                  • Filmning för reklam & presentationer → Offert vid förfrågan`,price:"Från 2500 KR",buttonText:"Kontakt",buttonLink:"/contact",icon:Z},{title:"Hemsidesutveckling & SEO",description:`• Enkel landningssida → Från 4500 kr  
                  • Företagswebbplats (flersidig) → Från 8500 kr  
                  • SEO-optimering & support → Från 2000 kr/månad`,price:"Från 4500 KR",buttonText:"Kontakt",buttonLink:"/contact",icon:Q}];export{Se as C,Fe as h,Be as s,he as u};
