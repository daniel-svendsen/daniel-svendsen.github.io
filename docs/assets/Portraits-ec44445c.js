import{_ as t}from"./vendor-566abb48.js";import{r as i,j as r,H as n}from"./vendor-react-ce5b3d3a.js";import{s as c}from"./shuffle-46e5507f.js";function j(){const[l,g]=i.useState([]),[o,a]=i.useState(null);return i.useEffect(()=>{(async()=>{const s=Object.assign({"../assets/portraits/bild1.jpg":()=>t(()=>import("./index-bc781e19.js").then(_=>_.b),["assets/index-bc781e19.js","assets/vendor-react-ce5b3d3a.js","assets/vendor-566abb48.js","assets/index-b1b9fb7e.css"]),"../assets/portraits/portraits-10.jpg":()=>t(()=>import("./portraits-10-b23dab47.js"),[]),"../assets/portraits/portraits-11.jpg":()=>t(()=>import("./portraits-11-abb911b7.js"),[]),"../assets/portraits/portraits-12.jpg":()=>t(()=>import("./portraits-12-3387e1e1.js"),[]),"../assets/portraits/portraits-13.jpg":()=>t(()=>import("./portraits-13-61658cab.js"),[]),"../assets/portraits/portraits-14.jpg":()=>t(()=>import("./portraits-14-a496d4db.js"),[]),"../assets/portraits/portraits-15.jpg":()=>t(()=>import("./portraits-15-0ace8cfa.js"),[]),"../assets/portraits/portraits-16.jpg":()=>t(()=>import("./portraits-16-6d973b02.js"),[]),"../assets/portraits/portraits-17.jpg":()=>t(()=>import("./portraits-17-4d4cc9dc.js"),[]),"../assets/portraits/portraits-18.jpg":()=>t(()=>import("./portraits-18-edb00622.js"),[]),"../assets/portraits/portraits-19.jpg":()=>t(()=>import("./portraits-19-92c1de2f.js"),[]),"../assets/portraits/portraits-2.jpg":()=>t(()=>import("./portraits-2-6f1aeb79.js"),[]),"../assets/portraits/portraits-20.jpg":()=>t(()=>import("./portraits-20-92ff1342.js"),[]),"../assets/portraits/portraits-21.jpg":()=>t(()=>import("./portraits-21-9e7cb80f.js"),[]),"../assets/portraits/portraits-22.jpg":()=>t(()=>import("./portraits-22-2e55edbd.js"),[]),"../assets/portraits/portraits-23.jpg":()=>t(()=>import("./portraits-23-3342b5bd.js"),[]),"../assets/portraits/portraits-24.jpg":()=>t(()=>import("./portraits-24-ecee0043.js"),[]),"../assets/portraits/portraits-3.jpg":()=>t(()=>import("./portraits-3-fb8d33ab.js"),[]),"../assets/portraits/portraits-4.jpg":()=>t(()=>import("./portraits-4-2f357da5.js"),[]),"../assets/portraits/portraits-5.jpg":()=>t(()=>import("./portraits-5-dd770efc.js"),[]),"../assets/portraits/portraits-6.jpg":()=>t(()=>import("./portraits-6-7e7d139b.js"),[]),"../assets/portraits/portraits-7.jpg":()=>t(()=>import("./portraits-7-82b1d4dc.js"),[]),"../assets/portraits/portraits-8.jpg":()=>t(()=>import("./portraits-8-c2876fd0.js"),[]),"../assets/portraits/portraits-9.jpg":()=>t(()=>import("./portraits-9-65c28608.js"),[]),"../assets/portraits/portraits.jpg":()=>t(()=>import("./portraits-b01acdae.js"),[])}),p=[];for(const _ in s)p.push(s[_]().then(d=>d.default));const m=await Promise.all(p);g(c(m))})()},[]),i.useEffect(()=>{o?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")},[o]),r.jsxs(r.Fragment,{children:[r.jsxs(n,{children:[r.jsx("title",{children:"Porträttfotograf i Kungälv & Göteborg - Svendsén Photography"}),r.jsx("meta",{name:"description",content:"Utforska våra porträttbilder och boka din porträttfotograf i Kungälv och Göteborg. Professionell fotografering för alla tillfällen."}),r.jsx("meta",{name:"keywords",content:"porträtt, fotograf kungälv, fotograf göteborg, porträttfotografering, Svendsén Photography, bilfotograf kungälv, bilfotograf"})]}),r.jsxs("main",{className:"p-6",children:[r.jsx("header",{children:r.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Porträttfotograf i Kungälv & Göteborg"})}),r.jsx("section",{"aria-label":"Porträttgalleri",className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:l.map((e,s)=>r.jsx("figure",{className:"relative",children:r.jsx("img",{src:e,alt:`Porträtt av fotograf i Kungälv och Göteborg ${s+1}`,className:"w-full h-full object-cover cursor-pointer",onClick:()=>a({src:e,alt:`Porträtt ${s+1}`}),loading:"lazy"})},s))}),o&&r.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",onClick:()=>a(null),"aria-modal":"true",role:"dialog","aria-label":"Förstorad bild",children:[r.jsx("button",{onClick:()=>a(null),className:"absolute top-4 right-4 text-white text-3xl focus:outline-none","aria-label":"Stäng",children:"×"}),r.jsx("img",{src:o.src,alt:o.alt,className:"max-w-full max-h-full"})]})]})]})}export{j as default};
