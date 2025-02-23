const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/generatePDF-DxDfEXyr.js","assets/vendor-B0YXXune.js","assets/vendor-react-XAIsk3yf.js","assets/Home-DA3G-qte.js","assets/cards-C3XB5_-a.js","assets/useImportedImages-Cy8nWmpc.js","assets/Services-Dzf5IyGN.js","assets/Portraits-0jEATEZM.js","assets/shuffle-DP179wgg.js","assets/Weddings-QrtXQv8p.js","assets/Contact-l70Gl_9r.js","assets/FAQ-BjRxSvN7.js"])))=>i.map(i=>d[i]);
import{r as l,j as e,N as x,B as u,W as g,T as b,a as f,K as j,R as d,H as v,b as y,c as w,d as o,e as k}from"./vendor-react-XAIsk3yf.js";import{_ as c}from"./vendor-B0YXXune.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const S="/assets/LOGO-CWsKm9qJ.png",N=()=>{const[s,n]=l.useState(!1),t=[{to:"/",label:"Hem"},{to:"/services",label:"Tjänster"},{to:"/faq",label:"FAQ"},{to:"/contact",label:"Kontakt"},{to:"/portraits",label:"Porträtt"},{to:"/weddings",label:"Bröllop"}],a="text-gray-700 hover:text-gray-900 font-medium transition-colors";return e.jsxs("header",{className:"w-full bg-white shadow-md py-4 px-6",children:[e.jsxs("nav",{className:"flex justify-between items-center","aria-label":"Main navigation",children:[e.jsx("div",{className:"flex items-center space-x-4",children:e.jsxs("a",{href:"/",className:"flex items-center",children:[e.jsx("img",{src:S,alt:"Svendsén Photography logo",className:"w-10 h-10 object-cover rounded-full"}),e.jsx("span",{className:"text-lg font-bold text-gray-900 hover:text-gray-700 ml-2",children:"Svendsén Photography"})]})}),e.jsx("button",{className:"block md:hidden text-gray-700 focus:outline-none",onClick:()=>n(!s),"aria-label":"Open main menu","aria-expanded":s,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",className:"w-6 h-6","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})}),e.jsx("ul",{className:"hidden md:flex space-x-4",children:t.map(({to:i,label:r})=>e.jsx("li",{children:e.jsx(x,{to:i,className:({isActive:m})=>`${a} ${m?"text-blue-600":""}`,children:r})},i))})]}),s&&e.jsx("nav",{className:"mt-4 md:hidden","aria-label":"Mobile main navigation",children:e.jsx("ul",{className:"flex flex-col space-y-2",children:t.map(({to:i,label:r})=>e.jsx("li",{children:e.jsx(x,{to:i,className:a,onClick:()=>n(!1),children:r})},i))})})]})};function _(){const[s,n]=l.useState(!1);return l.useEffect(()=>{const t=()=>{window.scrollY>300?n(!0):n(!1)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),e.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg transition-opacity ${s?"opacity-100":"opacity-0"}`,"aria-label":"Till toppen",children:"⬆️"})}const h="/assets/bild1-DKU3Qzei.jpg",F=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),P={profile:{name:"Daniel Svendsén",description:"A dedicated and versatile individual with experience in both leadership and technical work, always striving to see the bigger picture."},skills:{title:"Profile & Skills",content:["Motivated and versatile full-stack/system developer with a strong background in leadership and technical problem-solving. Currently completing my Java Enterprise Developer program at Yrgo. Passionate about designing scalable applications, improving workflows, and collaborating in Agile teams. Skilled in both backend and frontend development, with experience in Java, TypeScript, Spring Boot, and React.",{name:"Operating Systems",details:"Windows, WSL"},{name:"Languages",details:"Java, JavaScript, TypeScript, HTML/CSS"},{name:"Tools",details:"Spring Boot, JUnit, IntelliJ, Docker, Jenkins, Bash, Git, Maven, Gradle, Vue, Vite, React, VSCode"},{name:"Databases",details:"SQL, MySQL, MongoDB, SQL Server, SQLite"},{name:"Soft Skills",details:"Leadership, Mentorship, Teamwork, Communication, Problem-Solving, Adaptability, Critical Thinking"},{name:"Work Methodologies",details:"Agile methodologies, Scrum, Kanban"}]},experience:{title:"Experience",content:{education:[{year:"2023 – Present",details:"Java Enterprise Developer, Yrgo, City of Gothenburg, 400 YH points"},{year:"2016",details:"Programming 1, Grade B"},{year:"2003 – 2006",details:"High School, Aesthetic Orientation TV Production, 2500 points"}],work:[{year:"2024 – Present",details:`Internship for 27 weeks total + freetime contributing
Developing an open-source platform for Save the Children via Alten as part of my internship. Main contributions:

- Full-stack development using Java, TypeScript, Spring Boot, and React.
- API integrations.
- Writing and optimizing backend logic using Spring Boot.
- Building and enhancing frontend components in React.
- Using GitHub for version control and code collaboration.
- Working with Agile methodologies in a team setting.`,link:{text:"GitHub",href:"https://github.com/Hjulverkstan/hjulverkstan"}},{year:"2008 – Present",details:`ICA - Warehouse worker, various roles including:
Team leader
Peer supporter
Teaching
Goods recipient`},{year:"2007",details:"Svensk Bevakningstjänst - Security guard and civilian guard"}]}},languages:{title:"Languages & Miscellaneous",content:[{name:"Swedish",level:"Fluent in speaking & writing"},{name:"English",level:"Fluent in speaking & writing"}]},hobbies:{title:"Hobbies",content:"Photography with my own business, cooking, brewing beer, baking sourdough bread, fishing, and going on nature trips with my family."},contact:{title:"Contact",content:[{type:"Address",details:"Briljantvägen 55, 44260 Kode"},{type:"Email",details:"Daniel-Svendsen@hotmail.se"},{type:"Phone",details:"0707714306"},{type:"LinkedIn",link:{text:"Daniel Svendsen",href:"https://www.linkedin.com/in/daniel-svendsen-02423a1b4/"}}]}},T=s=>{const n=t=>{const a=t.match(/\d{4}/);return a?parseInt(a[0],10):0};return[...s.experience.content.education.map(t=>({title:"Education",date:t.year,description:t.details})),...s.experience.content.work.map(t=>({title:"Working experience",date:t.year,description:t.details,link:t.link}))].sort((t,a)=>n(a.date)-n(t.date))};function E({events:s}){return e.jsx("div",{className:"relative border-l-4 border-gray-300 pl-12",children:s.map((n,t)=>e.jsxs("div",{className:"mb-8 relative transform transition duration-300 hover:scale-105",children:[e.jsx("div",{className:"absolute -left-8 top-0 w-8 h-8 bg-gray-800 rounded-full border-4 border-white shadow-lg"}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:n.title}),e.jsx("span",{className:"block text-sm text-gray-500",children:n.date}),e.jsxs("p",{className:"mt-2 text-gray-700",children:[n.description,n.link&&n.link.href&&e.jsxs("span",{children:[" ",e.jsx("a",{href:n.link.href,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline",children:n.link.text||n.link.href})]})]})]})]},t))})}const L=(s,n)=>[{label:"Profile & Skills",title:s.skills.title,content:e.jsx("div",{className:"text-xs sm:text-sm",children:s.skills.content.map((t,a)=>typeof t=="string"?e.jsx("p",{className:"mb-2",children:t},a):e.jsxs("p",{className:"mb-1",children:[e.jsxs("strong",{children:[t.name,":"]})," ",t.details]},a))})},{label:"Experiences",title:s.experience.title,content:e.jsx(E,{events:n})},{label:"Language & Miscellaneous",title:s.languages.title,content:e.jsx("ul",{className:"space-y-1 text-xs sm:text-sm",children:s.languages.content.map((t,a)=>e.jsxs("li",{children:[e.jsxs("strong",{children:[t.name,":"]})," ",t.level]},a))})},{label:"Hobbies",title:s.hobbies.title,content:e.jsx("p",{className:"text-xs sm:text-sm",children:s.hobbies.content})},{label:"Contact",title:s.contact.title,content:e.jsx("ul",{className:"space-y-1 text-xs sm:text-sm",children:s.contact.content.map((t,a)=>e.jsxs("li",{children:[e.jsxs("strong",{children:[t.type,":"]})," ",t.link?e.jsx("a",{href:t.link.href,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline",children:t.link.text}):t.details]},a))})}],p=({title:s,children:n,className:t=""})=>e.jsxs("section",{className:`p-6 ${t}`,"aria-label":s,children:[s&&e.jsx("h2",{className:"text-2xl font-semibold text-center mb-6",children:s}),n]}),D=({title:s,children:n})=>e.jsxs("div",{className:"whitespace-pre-line p-4 min-h-[50px]",children:[s&&e.jsx("h2",{className:"text-xl font-semibold mb-4",children:s}),e.jsx("div",{children:n})]}),O=({tabsData:s})=>e.jsxs(u,{children:[e.jsx(g,{className:"flex flex-wrap justify-center space-x-2 sm:space-x-4 border-b-2 border-indigo-200 pb-2 mb-4",children:s.map((n,t)=>e.jsx(b,{className:({selected:a})=>`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-300 focus:outline-none ${a?"border-b-2 border-indigo-600 text-indigo-600":"text-gray-600 hover:text-indigo-600"}`,children:n.label},t))}),e.jsx(f,{children:s.map((n,t)=>e.jsx(j,{children:e.jsx(D,{title:n.title,children:n.content})},t))})]}),M=({content:s})=>{const n=async()=>{const t={pdf:"CV_Daniel_Svendsen.pdf",timestamp:new Date().toISOString()};fetch("https://formspree.io/f/xvgowldv",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(i=>{i.ok?console.log("E-post skickad!"):console.error("Misslyckades att skicka e-post:",i.statusText)}).catch(i=>console.error("Ett fel uppstod:",i));const{generatePDF:a}=await c(async()=>{const{generatePDF:i}=await import("./generatePDF-DxDfEXyr.js");return{generatePDF:i}},__vite__mapDeps([0,1,2]));a(s)};return e.jsx("button",{onClick:n,className:"px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full shadow-xl hover:from-blue-500 hover:to-indigo-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 text-xs sm:text-sm",children:"Download as PDF"})},C=()=>{const s=P,n=l.useMemo(()=>T(s),[s]),t=l.useMemo(()=>L(s,n),[s,n]);return e.jsxs("main",{className:"min-h-screen bg-gradient-to-r from-indigo-50 to-blue-50 p-4 sm:p-6",children:[e.jsx(p,{className:"bg-gradient-to-r from-indigo-50 to-blue-50 border-0 shadow-none mb-8",children:e.jsxs("div",{className:"flex flex-col items-center space-y-4",children:[e.jsx("img",{src:h,alt:"Daniel Svendsén",className:"rounded-full w-24 h-24 sm:w-32 sm:h-32 shadow-xl object-cover object-center"}),e.jsx("h1",{className:"text-2xl sm:text-4xl font-bold text-indigo-800 text-center",children:s.profile.name}),e.jsx("p",{className:"max-w-xs sm:max-w-2xl text-center text-indigo-700 text-xs sm:text-base",children:s.profile.description})]})}),e.jsx(p,{children:e.jsx(O,{tabsData:t})}),e.jsx(p,{className:"text-center",children:e.jsx(M,{content:s})})]})},A=d.lazy(()=>c(()=>import("./Home-DA3G-qte.js"),__vite__mapDeps([3,1,2,4,5]))),I=d.lazy(()=>c(()=>import("./Services-Dzf5IyGN.js"),__vite__mapDeps([6,2,1,4]))),R=d.lazy(()=>c(()=>import("./Portraits-0jEATEZM.js"),__vite__mapDeps([7,2,1,8,5]))),B=d.lazy(()=>c(()=>import("./Weddings-QrtXQv8p.js"),__vite__mapDeps([9,2,1,8,5]))),V=d.lazy(()=>c(()=>import("./Contact-l70Gl_9r.js"),__vite__mapDeps([10,2,1]))),W=d.lazy(()=>c(()=>import("./FAQ-BjRxSvN7.js"),__vite__mapDeps([11,2,1])));function H(){return e.jsx(v,{children:e.jsxs(y,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:[e.jsx(N,{}),e.jsx(_,{}),e.jsx(l.Suspense,{fallback:e.jsx("div",{className:"h-screen flex justify-center items-center text-lg",children:"Laddar sidan..."}),children:e.jsxs(w,{children:[e.jsx(o,{path:"/",element:e.jsx(A,{})}),e.jsx(o,{path:"/services",element:e.jsx(I,{})}),e.jsx(o,{path:"/portraits",element:e.jsx(R,{})}),e.jsx(o,{path:"/weddings",element:e.jsx(B,{})}),e.jsx(o,{path:"/contact",element:e.jsx(V,{})}),e.jsx(o,{path:"/faq",element:e.jsx(W,{})}),e.jsx(o,{path:"/work",element:e.jsx(C,{})})]})})]})})}k.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(H,{})}));export{p as S,F as b,h as p};
