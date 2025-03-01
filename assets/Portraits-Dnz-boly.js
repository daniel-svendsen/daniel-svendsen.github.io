import{r as a,j as t,f as n}from"./vendor-react-C9625H0z.js";import{u as c}from"./useImportedImages-DY4rfFMW.js";import{u as g}from"./useShuffleImages-DhezJl54.js";import"./vendor-Can_BZEW.js";function u(){const l=c(["portraits"]).portraits||[],i=g(l),[e,r]=a.useState(null);return a.useEffect(()=>{e?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")},[e]),t.jsxs(t.Fragment,{children:[t.jsxs(n,{children:[t.jsx("title",{children:"Porträttfotograf i Kungälv & Göteborg - Svendsén Photography"}),t.jsx("meta",{name:"description",content:"Boka en professionell porträttfotografering i Göteborg & Kungälv. Perfekt för företagsporträtt, CV-bilder och familjeporträtt. Läs mer: https://www.svendsenphotography.com/services"}),t.jsx("meta",{name:"keywords",content:"porträtt, fotograf kungälv, fotograf göteborg, porträttfotografering, Svendsén Photography"}),t.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Photograph",name:"Svendsén Photography - Porträtt",description:"Porträttfotograf i Kungälv & Göteborg",url:"https://www.svendsenphotography.com/portraits"})})]}),t.jsxs("main",{className:"p-6",children:[t.jsx("header",{children:t.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Porträttfotograf i Kungälv & Göteborg"})}),t.jsx("section",{"aria-label":"Porträttgalleri",className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:i.map((s,o)=>t.jsx("figure",{className:"relative",children:t.jsx("img",{src:s,alt:`Porträtt av fotograf i Kungälv och Göteborg ${o+1}`,className:"w-full h-full object-cover cursor-pointer",onClick:()=>r({src:s,alt:`Porträtt ${o+1}`}),loading:"lazy"})},o))}),e&&t.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",onClick:()=>r(null),"aria-modal":"true",role:"dialog","aria-label":"Förstorad bild",children:[t.jsx("button",{onClick:()=>r(null),className:"absolute top-4 right-4 text-white text-3xl focus:outline-none","aria-label":"Stäng",children:"×"}),t.jsx("img",{src:e.src,alt:e.alt,className:"max-w-full max-h-full"})]})]})]})}export{u as default};
