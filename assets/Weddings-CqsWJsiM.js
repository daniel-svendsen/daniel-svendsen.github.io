import{r as t,j as e,f as c}from"./vendor-react-BgLVoiJk.js";import{s as g}from"./shuffle-DP179wgg.js";import{u as f}from"./useImportedImages-D9bplh22.js";import"./vendor-B6Knkn3G.js";function b(){const r=f(["weddings"]),[i,d]=t.useState([]),[s,o]=t.useState(null),n=t.useRef(!1);return t.useEffect(()=>{var l;!n.current&&((l=r.weddings)==null?void 0:l.length)>0&&(d(g(r.weddings)),n.current=!0)},[r]),t.useEffect(()=>{s?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")},[s]),e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx("title",{children:"Bröllopsfotograf i Kungälv & Göteborg - Svendsén Photography"}),e.jsx("meta",{name:"description",content:"Fånga ditt bröllop med en erfaren fotograf i Göteborg & Kungälv. Vi erbjuder skräddarsydda bröllopspaket. Se exempel här: https://www.svendsenphotography.com/services/brollopsfotografering"}),e.jsx("meta",{name:"keywords",content:"bröllop, bröllopsfotograf kungälv, bröllopsfotograf göteborg, bröllopsbilder, Svendsén Photography"}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"WeddingEvent",name:"Svendsén Photography - Bröllopsfotograf",description:"Bröllopsfotograf i Kungälv & Göteborg",url:"https://www.svendsenphotography.com/weddings"})})]}),e.jsxs("main",{className:"p-6",children:[e.jsx("header",{children:e.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Bröllopsfotograf i Kungälv & Göteborg"})}),e.jsx("section",{"aria-label":"Bröllopsgalleri",className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:i.map((l,a)=>e.jsx("figure",{className:"relative",children:e.jsx("img",{src:l,alt:`Bröllopsfotograf Kungälv & Göteborg - Bild ${a+1}`,className:"w-full h-full object-cover cursor-pointer",onClick:()=>o({src:l,alt:`Bröllop ${a+1}`}),loading:"lazy"})},a))}),s&&e.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",onClick:()=>o(null),"aria-modal":"true",role:"dialog","aria-label":"Förstorad bild",children:[e.jsx("button",{onClick:()=>o(null),className:"absolute top-4 right-4 text-white text-3xl focus:outline-none","aria-label":"Stäng",children:"×"}),e.jsx("img",{src:s.src,alt:s.alt,className:"max-w-full max-h-full"})]})]})]})}export{b as default};
