import{r as t,j as e,f as d}from"./vendor-react-XAIsk3yf.js";import{s as g}from"./shuffle-DP179wgg.js";import{u as f}from"./useImportedImages-Cy8nWmpc.js";import"./vendor-B0YXXune.js";function b(){const o=f(["weddings"]),[n,c]=t.useState([]),[l,r]=t.useState(null),i=t.useRef(!1);return t.useEffect(()=>{var s;!i.current&&((s=o.weddings)==null?void 0:s.length)>0&&(c(g(o.weddings)),i.current=!0)},[o]),t.useEffect(()=>{l?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")},[l]),e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx("title",{children:"Bröllopsfotograf i Kungälv & Göteborg - Svendsén Photography"}),e.jsx("meta",{name:"description",content:"Erfaren bröllopsfotograf i Kungälv och Göteborg. Vi fångar era magiska ögonblick."}),e.jsx("meta",{name:"keywords",content:"bröllop, bröllopsfotograf kungälv, bröllopsfotograf göteborg, bröllopsbilder, Svendsén Photography"}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"WeddingEvent",name:"Svendsén Photography - Bröllopsfotograf",description:"Bröllopsfotograf i Kungälv & Göteborg",url:"https://www.svendsenphotography.com/weddings"})})]}),e.jsxs("main",{className:"p-6",children:[e.jsx("header",{children:e.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Bröllopsfotograf i Kungälv & Göteborg"})}),e.jsx("section",{"aria-label":"Bröllopsgalleri",className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:n.map((s,a)=>e.jsx("figure",{className:"relative",children:e.jsx("img",{src:s,alt:`Bröllopsfotograf Kungälv & Göteborg - Bild ${a+1}`,className:"w-full h-full object-cover cursor-pointer",onClick:()=>r({src:s,alt:`Bröllop ${a+1}`}),loading:"lazy"})},a))}),l&&e.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",onClick:()=>r(null),"aria-modal":"true",role:"dialog","aria-label":"Förstorad bild",children:[e.jsx("button",{onClick:()=>r(null),className:"absolute top-4 right-4 text-white text-3xl focus:outline-none","aria-label":"Stäng",children:"×"}),e.jsx("img",{src:l.src,alt:l.alt,className:"max-w-full max-h-full"})]})]})]})}export{b as default};
