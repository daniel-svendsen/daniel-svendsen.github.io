import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Users, Camera, Briefcase, Code } from "lucide-react";
function Card({
  image,
  imageLink,
  title,
  description,
  price,
  buttonText,
  buttonLink,
  onClick,
  icon: IconComponent
}) {
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: "flex flex-col border rounded-lg shadow-md p-4 h-full",
      onClick,
      children: [
        image && /* @__PURE__ */ jsx("figure", { className: "w-full h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg mb-4", children: imageLink ? /* @__PURE__ */ jsx(Link, { to: imageLink, "aria-label": `View gallery for ${title}`, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: image,
            alt: title,
            className: "w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer",
            loading: "lazy"
          }
        ) }) : /* @__PURE__ */ jsx(
          "img",
          {
            src: image,
            alt: title,
            className: "w-full h-full object-cover transition-transform duration-500 hover:scale-110",
            loading: "lazy"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-grow flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            IconComponent && /* @__PURE__ */ jsx(IconComponent, { size: 24, className: "text-gray-500" }),
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold", children: title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-2 whitespace-pre-line flex-grow", children: description }),
          price && /* @__PURE__ */ jsx("p", { className: "text-lg font-bold mt-6", children: price })
        ] }),
        buttonText && buttonLink && /* @__PURE__ */ jsx(
          Link,
          {
            to: buttonLink,
            className: "mt-4 px-6 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-700 transition",
            children: buttonText
          }
        )
      ]
    }
  );
}
const weddingImage = "/assets/assets/static/wedding.Se-qk-Wt.jpg";
const portraitImage = "/assets/assets/static/portrait.BuLiEXZv.jpg";
const companyImage = "/assets/assets/static/company.BrR4d-y-.jpg";
const homeCards = [
  {
    image: weddingImage,
    title: "Bröllopsfotografering & Bröllopsfilm",
    description: `Ert bröllop är en unik och kärleksfull dag, och jag hjälper er att fånga alla magiska ögonblick. 
                  Jag erbjuder både bröllopsfotografering och film för att skapa tidlösa minnen av er stora dag.`,
    buttonText: "Läs mer",
    buttonLink: "/services",
    icon: Camera
  },
  {
    image: portraitImage,
    title: "Porträtt & Familjefoto",
    description: `Oavsett om du behöver en professionell bild för ditt CV, sociala medier eller ett vackert familjeporträtt, 
                  hjälper jag dig att fånga naturliga och personliga bilder – utomhus eller på plats med bakgrund.`,
    buttonText: "Läs mer",
    buttonLink: "/services",
    icon: Users
  },
  {
    image: companyImage,
    title: "Företag, Event & Verksamhetsfoto",
    description: `Fånga ditt företags unika karaktär med professionella bilder och filmklipp. Perfekt för konferenser, 
                  mässor, personalporträtt och marknadsföring. Har du en hobbyverksamhet eller är bilentusiast? 
                  Jag hjälper dig att skapa unika bilder för reklam och sociala medier.`,
    buttonText: "Läs mer",
    buttonLink: "/services",
    icon: Briefcase
  },
  {
    // image: webdevImage,
    title: "Hemsidesutveckling & SEO",
    description: `Behöver du en modern och snabb hemsida? Jag bygger responsiva webbplatser för företag, fotografer och kreatörer, 
                  med fokus på SEO och användarvänlighet.`,
    buttonText: "Läs mer",
    buttonLink: "/services",
    icon: Code
  }
];
const serviceCards = [
  {
    title: "Porträtt & Familjefoto",
    image: portraitImage,
    description: `• 30 minuters fotografering  
                  • 5 redigerade bilder ingår  
                  • Extra bilder kan köpas till för 150 kr/st  
                  • Passar för CV, LinkedIn, sociala medier, familjeporträtt och generationsbilder`,
    price: "Från 1200 KR",
    buttonText: "Kontakt",
    buttonLink: "/contact",
    icon: Users
  },
  {
    title: "Bröllopsfotografering & Bröllopsfilm",
    image: weddingImage,
    description: `Välj mellan tre olika paket beroende på hur mycket av bröllopsdagen du vill dokumentera:  
                  
                  • Litet paket – 3 timmar fotografering, 50 redigerade bilder → 7500 kr  
                  • Mellanpaket – 6 timmar fotografering, 100 redigerade bilder → 12 000 kr  
                  • Heldag – 10 timmar fotografering, 200 redigerade bilder + kort bröllopsfilm → 18 000 kr  
                  
                  Filmalternativ:  
                  • Cinematisk bröllopsfilm (3-5 min highlight reel) → 5000 kr vid fotopaket / 8000 kr enskilt  
                  
                  Extra timmar utöver paketen → 2000 kr/timme`,
    price: "Från 7500 KR",
    buttonText: "Kontakt",
    buttonLink: "/contact",
    icon: Camera
  },
  {
    title: "Företagsfoto, Event & Verksamhetsfoto",
    image: companyImage,
    description: `• Företagsporträtt (1-5 personer) → Från 2500 kr, fler personer enligt offert  
                  • Eventfotografering – 3 timmar → 4500 kr | Heldag → 12 000 kr  
                  • Produkt- & marknadsföringsbilder → Från 350 kr/bild  
                  • Filmning för reklam & presentationer → Offert vid förfrågan`,
    price: "Från 2500 KR",
    buttonText: "Kontakt",
    buttonLink: "/contact",
    icon: Briefcase
  },
  {
    title: "Hemsidesutveckling & SEO",
    // image: webdevImage,
    description: `• Enkel landningssida → Från 4500 kr  
                  • Företagswebbplats (flersidig) → Från 8500 kr  
                  • SEO-optimering & support → Från 2000 kr/månad`,
    price: "Från 4500 KR",
    buttonText: "Kontakt",
    buttonLink: "/contact",
    icon: Code
  }
];
export {
  Card as C,
  homeCards as h,
  serviceCards as s
};
