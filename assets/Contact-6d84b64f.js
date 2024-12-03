import{r,j as e}from"./index-5dbdbfcf.js";function o(){const[l,a]=r.useState(""),t=["Utefotografering","Studiofoto","Bröllop","Företagsporträtt","Produktfotografering","Annat"];return e.jsxs("main",{className:"p-6 max-w-4xl mx-auto",children:[e.jsx("header",{children:e.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Kontakta mig gärna via e-post!"})}),e.jsxs("form",{action:"https://formspree.io/f/xvgowldv",method:"POST",className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium mb-1",children:"Ditt namn *"}),e.jsx("input",{id:"name",name:"name",type:"text",required:!0,placeholder:"Ditt namn",className:"block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium mb-1",children:"E-postadress *"}),e.jsx("input",{id:"email",name:"_replyto",type:"email",required:!0,placeholder:"Din e-postadress",className:"block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"})]}),e.jsxs("fieldset",{className:"md:col-span-2",children:[e.jsx("legend",{className:"block text-sm font-medium mb-2",children:"Vilken tjänst är du intresserad av? *"}),e.jsx("div",{className:"space-y-2",children:t.map(s=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"radio",id:s,name:"service",value:s,checked:l===s,onChange:()=>a(s),className:"form-radio h-4 w-4 text-blue-600"}),e.jsx("label",{htmlFor:s,className:"ml-2 text-sm text-gray-700",children:s})]},s))})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium mb-2",children:"Meddelande *"}),e.jsx("textarea",{id:"message",name:"message",rows:4,required:!0,placeholder:"Ditt meddelande här",className:"block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"})]}),e.jsx("div",{className:"md:col-span-2",children:e.jsx("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Skicka"})})]})]})}export{o as default};
