import{c as t,j as e,m as y,L as d}from"./index-BtvwidyD.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=t("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);function w({image:a,imageLink:i,title:r,description:v,price:n,buttonText:o,buttonLink:s,onClick:x,icon:l,reverse:c=!1}){return e.jsxs(y.article,{onClick:x,className:`
        flex flex-col lg:flex-row
        ${c?"lg:flex-row-reverse":""}
        border border-gray-300 rounded-lg bg-transparent
      `,whileHover:{scale:1.01},whileTap:{scale:.98},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.1},transition:{type:"spring",stiffness:300},children:[a&&e.jsx("figure",{className:`
            w-full lg:w-1/3
            h-[50vh] overflow-hidden rounded-lg
            ${c?"lg:ml-4":"lg:mr-4"}
            mb-4 lg:mb-0
          `,children:i?e.jsx(d,{to:i,"aria-label":`View gallery for ${r}`,children:e.jsx("img",{src:a,alt:r,className:"w-full h-full object-cover transition-transform duration-500 cursor-pointer",loading:"lazy"})}):e.jsx("img",{src:a,alt:r,className:"w-full h-full object-cover transition-transform duration-500",loading:"lazy"})}),e.jsxs("div",{className:`\r
          flex flex-col items-center justify-center p-4\r
          w-full lg:w-2/3 text-center\r
        `,children:[l&&e.jsx(l,{size:24,className:"text-gray-500 mb-2"}),e.jsx("h2",{className:"text-lg font-poiret font-bold tracking-wider mb-2",children:r}),e.jsx("p",{className:"text-sm text-gray-600 whitespace-pre-line font-poiret",children:v}),n&&e.jsx("p",{className:"text-lg font-bold mt-2",children:n}),o&&s&&e.jsx(d,{to:s,className:"mt-4 px-6 py-2 bg-gray-500 text-white rounded-md shadow transition",children:o})]})]})}const k="/assets/wedding-Se-qk-Wt.jpg",h="/assets/portrait-BuLiEXZv.jpg",b="/assets/company-BrR4d-y-.jpg",u="/assets/webdev-Bfv3hU6p.png",F=[{image:k,title:"Bröllopsfotografering & Bröllopsfilm",description:`Ert bröllop är en unik och kärleksfull dag, och jag hjälper er att fånga alla magiska ögonblick. 
                  Jag erbjuder både bröllopsfotografering och film för att skapa tidlösa minnen av er stora dag.`,buttonText:"Läs mer",buttonLink:"/services",icon:m},{image:h,title:"Porträtt & Familjefoto",description:"Oavsett om du behöver en professionell bild för ditt CV, sociala medier eller ett vackert familjeporträtt, hjälper jag dig att fånga naturliga och personliga bilder – utomhus eller på plats med bakgrund.",buttonText:"Läs mer",buttonLink:"/services",icon:f},{image:b,title:"Företag, Event & Verksamhetsfoto",description:`Fånga ditt företags unika karaktär med professionella bilder och filmklipp. Perfekt för konferenser, mässor, personalporträtt och marknadsföring. Har du en hobbyverksamhet eller är bilentusiast? 
                  Jag hjälper dig att skapa unika bilder för reklam och sociala medier.`,buttonText:"Läs mer",buttonLink:"/services",icon:g},{image:u,title:"Hemsidesutveckling & SEO",description:"Behöver du en modern och snabb hemsida? Jag bygger responsiva webbplatser för företag, fotografer och kreatörer, med fokus på SEO och användarvänlighet.",buttonText:"Läs mer",buttonLink:"/services",icon:p}],L=[{title:"Porträtt & Familjefoto",image:h,description:`• 30 minuters fotografering  
                  • 5 redigerade bilder ingår  
                  • Extra bilder kan köpas till för 150 kr/st  
                  • Passar för CV, LinkedIn, sociala medier, familjeporträtt och generationsbilder`,price:"Från 1200 KR",buttonText:"Kontakt",buttonLink:"/contact",icon:f},{title:"Bröllopsfotografering & Bröllopsfilm",image:k,description:`Välj mellan tre olika paket beroende på hur mycket av bröllopsdagen du vill dokumentera:  
                  
                  • Litet paket – 3 timmar fotografering, 50 redigerade bilder → 7500 kr  
                  • Mellanpaket – 6 timmar fotografering, 100 redigerade bilder → 12 000 kr  
                  • Heldag – 10 timmar fotografering, 200 redigerade bilder + kort bröllopsfilm → 18 000 kr  
                  
                  Filmalternativ:  
                  • Cinematisk bröllopsfilm (3-5 min highlight reel) → 5000 kr vid fotopaket / 8000 kr enskilt  
                  
                  Extra timmar utöver paketen → 2000 kr/timme`,price:"Från 7500 KR",buttonText:"Kontakt",buttonLink:"/contact",icon:m},{title:"Företagsfoto, Event & Verksamhetsfoto",image:b,description:`• Företagsporträtt (1-5 personer) → Från 2500 kr, fler personer enligt offert  
                  • Eventfotografering – 3 timmar → 4500 kr | Heldag → 12 000 kr  
                  • Produkt- & marknadsföringsbilder → Från 350 kr/bild  
                  • Filmning för reklam & presentationer → Offert vid förfrågan`,price:"Från 2500 KR",buttonText:"Kontakt",buttonLink:"/contact",icon:g},{title:"Hemsidesutveckling & SEO",image:u,description:`• Enkel landningssida → Från 4500 kr  
                  • Företagswebbplats (flersidig) → Från 8500 kr  
                  • SEO-optimering & support → Från 2000 kr/månad`,price:"Från 4500 KR",buttonText:"Kontakt",buttonLink:"/contact",icon:p}];export{w as C,F as h,L as s};
