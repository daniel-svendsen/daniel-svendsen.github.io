import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { h as homeCards, C as Card } from "../chunks/chunk-BpHRGLke.js";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useRef, useEffect, lazy, Suspense } from "react";
import Typewriter from "typewriter-effect";
import { u as useImportedImages } from "../chunks/chunk-Cu-dnbOt.js";
import "lucide-react";
function usePopImages({ allImages }) {
  const [popImages, setPopImages] = useState([]);
  const recentImages = useRef(/* @__PURE__ */ new Set());
  useEffect(() => {
    if (allImages.length === 0) return;
    const interval = setInterval(() => {
      let randomImage;
      let attempts = 0;
      do {
        randomImage = allImages[Math.floor(Math.random() * allImages.length)];
        attempts++;
        if (attempts > 10) break;
      } while (randomImage && recentImages.current.has(randomImage) && allImages.length > 5);
      if (!randomImage) return;
      recentImages.current.add(randomImage);
      if (recentImages.current.size > 5) {
        const firstItem = [...recentImages.current][0];
        recentImages.current.delete(firstItem);
      }
      const randomSize = Math.random() * (30 - 25) + 25;
      const sizeInPixels = `${randomSize}vw`;
      const marginX = randomSize / 2;
      const marginY = randomSize / 2;
      const randomX = Math.random() * (100 - marginX * 2) + marginX;
      const randomY = Math.random() * (100 - marginY * 2) + marginY;
      const newImage = {
        src: randomImage,
        id: Date.now(),
        x: randomX,
        y: randomY,
        size: sizeInPixels
      };
      setPopImages((prev) => [...prev, newImage]);
      setTimeout(() => {
        setPopImages((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 1e4);
    }, 2e3);
    return () => clearInterval(interval);
  }, [allImages]);
  return popImages;
}
function HeroSection(props) {
  const navigate = useNavigate();
  const imagesData = useImportedImages(["herosection"]);
  const [allImages, setAllImages] = useState([]);
  const hasLoadedImages = useRef(false);
  useEffect(() => {
    if (!hasLoadedImages.current && imagesData.herosection) {
      setAllImages([...imagesData.herosection]);
      hasLoadedImages.current = true;
    }
  }, [imagesData]);
  const popImages = usePopImages({ allImages });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Svendsén Photography - Professionell Fotograf i Göteborg & Kungälv" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Välkommen till Svendsén Photography! Jag specialiserar mig på bröllopsfotografering, porträtt, bil och företagsbilder i Göteborg och Kungälv."
        }
      ),
      allImages.length > 0 && /* @__PURE__ */ jsx("link", { rel: "preload", as: "image", href: allImages[0] })
    ] }),
    /* @__PURE__ */ jsxs(
      "section",
      {
        className: "relative flex items-center justify-center overflow-hidden bg-gray-100",
        style: { height: "calc(100vh - 6rem)" },
        "aria-labelledby": "hero-section",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center text-gray-800 bg-white bg-opacity-75 p-8 rounded-md z-10", children: [
            /* @__PURE__ */ jsxs("h1", { id: "hero-section", className: "text-4xl sm:text-5xl font-bold mb-4", children: [
              "Svendsén Photography",
              /* @__PURE__ */ jsx(
                Typewriter,
                {
                  options: {
                    strings: ["Bröllop", "Porträtt", "Företagsfoto"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 30
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => navigate("/contact"),
                className: "px-6 py-3 bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-700 transition",
                children: "Kontakta mig idag"
              }
            )
          ] }),
          popImages.map((image) => /* @__PURE__ */ jsx(
            "img",
            {
              src: image.src,
              loading: "lazy",
              alt: "Inspirerande foto",
              className: "absolute object-cover rounded-full shadow-lg animate-pop",
              style: {
                top: `${image.y}%`,
                left: `${image.x}%`,
                width: image.size,
                height: image.size,
                transform: "translate(-50%, -50%)"
              }
            },
            image.id
          ))
        ]
      }
    )
  ] });
}
const SectionWrapper = ({ title, children, className = "" }) => /* @__PURE__ */ jsxs("section", { className: `p-6 ${className}`, "aria-label": title, children: [
  title && /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-center mb-6", children: title }),
  children
] });
const Carousel = lazy(() => import("../chunks/chunk-CGNe7xmB.js"));
function Home() {
  const navigate = useNavigate();
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const carouselRef = useRef(null);
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!isCarouselVisible) setIsCarouselVisible(true);
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isCarouselVisible]);
  useEffect(() => {
    import("../chunks/chunk-CyyXawn2.js");
  }, []);
  const handleNavigate = () => {
    navigate("/services");
  };
  return /* @__PURE__ */ jsxs(HelmetProvider, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Fotograf i Kungälv & Göteborg - Svendsén Photography" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Svendsén Photography erbjuder professionell fotografering inom bröllop, porträtt, bilfotografering och företag i Kungälv och Göteborg. Läs mer: https://www.svendsenphotography.com"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "keywords",
          content: "fotograf kungälv, fotograf göteborg, bröllopsfotograf, porträttfotograf, bilfotograf, företagsfotograf"
        }
      ),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Svendsén Photography",
        "description": "Fotograf i Kungälv & Göteborg",
        "image": "https://www.svendsenphotography.com/logo.jpg",
        "url": "https://www.svendsenphotography.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kungälv",
          "addressCountry": "SE"
        }
      }) })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "p-6", children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsxs("header", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-4", children: "Välkommen till Svendsén Photography!" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 leading-relaxed mb-4", children: "Jag är en fotograf baserad i Kungälv och Göteborg, specialiserad på bröllops-, porträtt- och företagsfotografering." })
      ] }),
      /* @__PURE__ */ jsx(SectionWrapper, { title: "Tjänster", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6", children: homeCards.map((card, index) => /* @__PURE__ */ jsx(Card, { ...card, onClick: handleNavigate }, index)) }) }),
      /* @__PURE__ */ jsx(SectionWrapper, { title: "Galleri", className: "bg-gray-100", children: /* @__PURE__ */ jsx("div", { ref: carouselRef, children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "h-48 bg-gray-200" }), children: isCarouselVisible && /* @__PURE__ */ jsx(Carousel, {}) }) }) })
    ] })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsx(Home, {});
}
export {
  Page
};
