import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { u as useImportedImages } from "../chunks/chunk-Cu-dnbOt.js";
import { u as useShuffledImages } from "../chunks/chunk-Cna7cvy7.js";
function Portraits() {
  const imagesData = useImportedImages(["portraits"]);
  const images = imagesData.portraits || [];
  const shuffledImages = useShuffledImages(images);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedImage]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Porträttfotograf i Kungälv & Göteborg - Svendsén Photography" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Boka en professionell porträttfotografering i Göteborg & Kungälv. Perfekt för företagsporträtt, CV-bilder och familjeporträtt. Läs mer: https://www.svendsenphotography.com/services"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "keywords",
          content: "porträtt, fotograf kungälv, fotograf göteborg, porträttfotografering, Svendsén Photography"
        }
      ),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Photograph",
        name: "Svendsén Photography - Porträtt",
        description: "Porträttfotograf i Kungälv & Göteborg",
        url: "https://www.svendsenphotography.com/portraits"
      }) })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "p-6", children: [
      /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-6", children: "Porträttfotograf i Kungälv & Göteborg" }) }),
      /* @__PURE__ */ jsx(
        "section",
        {
          "aria-label": "Porträttgalleri",
          className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
          children: shuffledImages.map((src, index) => /* @__PURE__ */ jsx("figure", { className: "relative", children: /* @__PURE__ */ jsx(
            "img",
            {
              src,
              alt: `Porträtt av fotograf i Kungälv och Göteborg ${index + 1}`,
              className: "w-full h-full object-cover cursor-pointer",
              onClick: () => setSelectedImage({ src, alt: `Porträtt ${index + 1}` }),
              loading: "lazy"
            }
          ) }, index))
        }
      ),
      selectedImage && /* @__PURE__ */ jsxs(
        "div",
        {
          className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",
          onClick: () => setSelectedImage(null),
          "aria-modal": "true",
          role: "dialog",
          "aria-label": "Förstorad bild",
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setSelectedImage(null),
                className: "absolute top-4 right-4 text-white text-3xl focus:outline-none",
                "aria-label": "Stäng",
                children: "×"
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: selectedImage.src,
                alt: selectedImage.alt,
                className: "max-w-full max-h-full"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsx(Portraits, {});
}
export {
  Page
};
