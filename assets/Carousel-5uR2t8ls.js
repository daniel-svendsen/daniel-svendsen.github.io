import{r as s,j as l}from"./vendor-react-C85UxOZX.js";import{u as m}from"./useImportedImages-dqN2_ykc.js";import{u as g}from"./useShuffleImages-Zgbje0dq.js";import"./vendor-B2-pVzLk.js";function v({interval:o=3e3,pauseDuration:d=5e3}){const h=m(["carousel"]).carousel||[],e=g(h),[r,u]=s.useState(0),[i,c]=s.useState(!1),t=s.useRef(null);s.useEffect(()=>{if(!(e.length===0||i))return t.current&&clearInterval(t.current),t.current=setInterval(()=>{u(a=>(a+1)%e.length)},o),()=>{t.current&&clearInterval(t.current)}},[e,o,i]);const f=a=>{c(!0),u(a),setTimeout(()=>c(!1),d)};return e.length===0?null:l.jsxs("section",{className:"relative mx-auto overflow-hidden rounded-lg shadow-md",style:{width:"75vw",height:"75vh"},"aria-label":"Bildkarusell",children:[e.map((a,n)=>l.jsx("figure",{className:`absolute inset-0 w-full h-full transition-opacity duration-1000 ${n===r?"opacity-100":"opacity-0"}`,children:l.jsx("img",{src:a,alt:`Bild ${n+1} av ${e.length}`,loading:"lazy",className:"w-full h-full object-contain"})},n)),l.jsx("button",{onClick:()=>f((r-1+e.length)%e.length),className:"absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-75 focus:outline-none","aria-label":"Föregående bild",children:"‹"}),l.jsx("button",{onClick:()=>f((r+1)%e.length),className:"absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-75 focus:outline-none","aria-label":"Nästa bild",children:"›"})]})}export{v as default};
