import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { u as useImportedImages } from "../chunks/chunk-Cu-dnbOt.js";
import { u as useShuffledImages } from "../chunks/chunk-Cna7cvy7.js";
function WeddingGallery() {
  const { weddings: weddingImages } = useImportedImages(["weddings"]);
  const shuffledWeddingImages = useShuffledImages(weddingImages || []);
  const [selectedWeddingImage, setSelectedWeddingImage] = useState(null);
  useEffect(() => {
    if (selectedWeddingImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedWeddingImage]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Wedding Photographer in Kungälv & Göteborg" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Book your wedding photography session in Gothenburg & Kungälv." })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "p-6", children: [
      /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-6", children: "Wedding Gallery" }) }),
      /* @__PURE__ */ jsx(
        "section",
        {
          "aria-label": "Wedding gallery",
          className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
          children: shuffledWeddingImages.map((src, index) => /* @__PURE__ */ jsx("figure", { className: "relative", children: /* @__PURE__ */ jsx(
            "img",
            {
              src,
              alt: `Wedding photo ${index + 1}`,
              className: "w-full h-full object-cover cursor-pointer",
              onClick: () => setSelectedWeddingImage({ src, alt: `Wedding photo ${index + 1}` }),
              loading: "lazy"
            }
          ) }, index))
        }
      ),
      selectedWeddingImage && /* @__PURE__ */ jsxs(
        "div",
        {
          className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",
          onClick: () => setSelectedWeddingImage(null),
          "aria-modal": "true",
          role: "dialog",
          "aria-label": "Enlarged wedding photo",
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setSelectedWeddingImage(null),
                className: "absolute top-4 right-4 text-white text-3xl focus:outline-none",
                "aria-label": "Close",
                children: "×"
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: selectedWeddingImage.src,
                alt: selectedWeddingImage.alt,
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
  return /* @__PURE__ */ jsx(WeddingGallery, {});
}
export {
  Page
};
