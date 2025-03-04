import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { u as useImportedImages } from "./chunk-Cu-dnbOt.js";
import { u as useShuffledImages } from "./chunk-Cna7cvy7.js";
function Carousel({
  interval = 3e3,
  pauseDuration = 5e3
}) {
  const imagesData = useImportedImages(["carousel"]);
  const images = imagesData.carousel || [];
  const shuffledImages = useShuffledImages(images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  useEffect(() => {
    if (shuffledImages.length === 0 || isPaused) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
    }, interval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [shuffledImages, interval, isPaused]);
  const handleUserInteraction = (newIndex) => {
    setIsPaused(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsPaused(false), pauseDuration);
  };
  if (shuffledImages.length === 0) return null;
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative mx-auto overflow-hidden rounded-lg shadow-md",
      style: { width: "75vw", height: "75vh" },
      "aria-label": "Bildkarusell",
      children: [
        shuffledImages.map((image, index) => /* @__PURE__ */ jsx(
          "figure",
          {
            className: `absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`,
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: image,
                alt: `Bild ${index + 1} av ${shuffledImages.length}`,
                loading: "lazy",
                className: "w-full h-full object-contain"
              }
            )
          },
          index
        )),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleUserInteraction(
              (currentIndex - 1 + shuffledImages.length) % shuffledImages.length
            ),
            className: "absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-75 focus:outline-none",
            "aria-label": "Föregående bild",
            children: "‹"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleUserInteraction((currentIndex + 1) % shuffledImages.length),
            className: "absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-75 focus:outline-none",
            "aria-label": "Nästa bild",
            children: "›"
          }
        )
      ]
    }
  );
}
export {
  Carousel as default
};
