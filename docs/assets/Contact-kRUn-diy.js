import{r as c,j as e,f as p}from"./vendor-react-DiB7mnrm.js";import"./vendor-CSv6OCWD.js";function x(){const[i,d]=c.useState(""),[n,s]=c.useState(null),m=["Utefotografering","Studiofoto","Bröllop","Företagsporträtt","Produktfotografering","Hobby","Annat"],f=async t=>{t.preventDefault();const o=t.currentTarget,u=new FormData(o),l={};u.forEach((r,a)=>{l[a]=r});try{const r=await fetch("https://formspree.io/f/xvgowldv",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(l)});if(r.ok)s("success"),o&&o.reset();else{const a=await r.json();console.error("Formspree error:",a),s("error")}}catch(r){console.error("Formspree network error:",r),s("error")}};return e.jsxs("main",{className:"p-6 max-w-4xl mx-auto",children:[e.jsxs(p,{children:[e.jsx("title",{children:"Kontakta Svendsén Photography - Fotograf i Göteborg & Kungälv"}),e.jsx("meta",{name:"description",content:"Kontakta Svendsén Photography för bröllop, porträtt, företagsfotografering, bilfotografering och mer i Göteborg och Kungälv."}),e.jsx("meta",{name:"keywords",content:"kontakt, fotograf göteborg, fotograf kungälv, bröllopsfotograf, porträttfotograf, bilfotograf, bilfotografering"}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"ContactPage",name:"Kontakta Svendsén Photography",description:"Boka en fotografering i Kungälv & Göteborg",url:"https://www.svendsenphotography.com/contact"})})]}),e.jsx("header",{children:e.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Kontakta mig gärna via e-post!"})}),e.jsxs("form",{onSubmit:f,className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium mb-1",children:"Ditt namn *"}),e.jsx("input",{id:"name",name:"name",type:"text",required:!0,placeholder:"Ditt namn",className:"block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium mb-1",children:"E-postadress *"}),e.jsx("input",{id:"email",name:"email",type:"email",required:!0,placeholder:"Din e-postadress",className:"block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("fieldset",{className:"md:col-span-2",children:[e.jsx("legend",{className:"block text-sm font-medium mb-2",children:"Vilken tjänst är du intresserad av? *"}),e.jsx("div",{className:"space-y-2",children:m.map(t=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"radio",id:t,name:"service",value:t,checked:i===t,onChange:()=>d(t),className:"form-radio h-4 w-4 text-blue-600"}),e.jsx("label",{htmlFor:t,className:"ml-2 text-sm text-gray-700",children:t})]},t))})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium mb-2",children:"Meddelande *"}),e.jsx("textarea",{id:"message",name:"message",rows:4,required:!0,placeholder:"Ditt meddelande här",className:"block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"})]}),e.jsx("div",{className:"md:col-span-2",children:e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Skicka"})})]}),n==="success"&&e.jsx("p",{className:"mt-4 text-green-600",children:"Tack! Ditt meddelande har skickats."}),n==="error"&&e.jsx("p",{className:"mt-4 text-red-600",children:"Ett fel uppstod. Försök igen senare."})]})}export{x as default};
