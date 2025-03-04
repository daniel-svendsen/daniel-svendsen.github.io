import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { s as serviceCards, C as Card } from "./chunk-BpHRGLke.js";
import { Helmet } from "react-helmet-async";
import "react-router-dom";
import "lucide-react";
function Services() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Fototjänster i Kungälv & Göteborg - Svendsén Photography" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Upptäck professionella fototjänster hos Svendsén Photography. Vi erbjuder bröllopsfotografering, porträtt, företagsfoto, bilfotografering och eventfoto i Kungälv och Göteborg. Läs mer: https://www.svendsenphotography.com/services"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "keywords",
          content: "fotograf kungälv, fotograf göteborg, bröllopsfotograf, porträttfotograf, bilfotograf, företagsfotograf, eventfotograf, verksamhetsfoto"
        }
      ),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Svendsén Photography",
        "description": "Fotograf i Kungälv & Göteborg - Specialiserad på bröllop, porträtt, företag och event.",
        "image": "https://www.svendsenphotography.com/logo.jpg",
        "url": "https://www.svendsenphotography.com/services",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kungälv",
          "addressCountry": "SE"
        },
        "serviceType": [
          "Bröllopsfotografering",
          "Porträttfotografering",
          "Företagsfotografering",
          "Eventfotografering",
          "Bilfotografering",
          "Hemsidesutveckling"
        ],
        "areaServed": {
          "@type": "City",
          "name": ["Kungälv", "Göteborg"]
        }
      }) })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "p-6", children: [
      /* @__PURE__ */ jsxs("header", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-6", children: "Professionella fotograferingstjänster" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 mb-8", children: "Boka en fotografering idag och skapa minnen som varar livet ut." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contact",
            className: "px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700",
            children: "Boka fotografering"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("section", { "aria-label": "Mina tjänster", className: "grid grid-cols-1 md:grid-cols-4 gap-8 mt-12", children: serviceCards.map((service, index) => /* @__PURE__ */ jsx(Card, { ...service }, index)) })
    ] })
  ] });
}
export {
  Services as default
};
