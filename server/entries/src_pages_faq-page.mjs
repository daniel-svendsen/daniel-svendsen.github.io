import { jsxs, jsx } from "react/jsx-runtime";
import * as Accordion from "@radix-ui/react-accordion";
import { Helmet } from "react-helmet-async";
function FAQ() {
  return /* @__PURE__ */ jsxs("main", { className: "max-w-4xl mx-auto p-6", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Vanliga frågor - Svendsén Photography" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Har du frågor om fotografering, priser och bokning? Här hittar du svar på vanliga frågor om våra tjänster i Göteborg och Kungälv. Läs mer på: https://www.svendsenphotography.com/faq"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "keywords",
          content: "fotograf FAQ, fotografering frågor, bröllopsfotograf pris, hur bokar man en fotograf, fotograf göteborg kungälv"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Vanliga frågor - Svendsén Photography" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Svaren på de vanligaste frågorna om fotografering, priser och bokning i Göteborg & Kungälv."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.svendsenphotography.com/faq" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Vad ingår i utefotograferingen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I utefotograferingen ingår 4st högupplösta bilder. Därefter kostar det 150kr/bild och då kontaktar ni mig om ni vill ha fler."
            }
          },
          {
            "@type": "Question",
            "name": "Hur lång tid tar en vanlig fotosession?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "En session tar vanligtvis mellan 0.5-2 timmar beroende på era önskemål."
            }
          },
          {
            "@type": "Question",
            "name": "Fotograferar du utanför Kungälv?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, men reseersättning kan tillkomma."
            }
          },
          {
            "@type": "Question",
            "name": "Vad ingår i bröllopspaketet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I det enklaste bröllopspaketet ingår ca 4 timmar på plats och 50st bilder som ni väljer ut."
            }
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxs("header", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Vanliga frågor" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Har du frågor? Här hittar du svaren." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: /* @__PURE__ */ jsxs(Accordion.Root, { type: "single", collapsible: true, children: [
      /* @__PURE__ */ jsxs(Accordion.Item, { value: "item-1", children: [
        /* @__PURE__ */ jsx(Accordion.Trigger, { className: "text-left text-lg font-medium py-2 w-full", children: "Vad ingår i utefotograferingen?" }),
        /* @__PURE__ */ jsx(Accordion.Content, { className: "text-gray-700 py-2", children: "I utefotograferingen ingår 4st högupplösta bilder. Därefter kostar det 150kr/bild och då kontaktar ni mig om ni vill ha fler." })
      ] }),
      /* @__PURE__ */ jsxs(Accordion.Item, { value: "item-2", children: [
        /* @__PURE__ */ jsx(Accordion.Trigger, { className: "text-left text-lg font-medium py-2 w-full", children: "Hur lång tid tar en vanlig fotosession?" }),
        /* @__PURE__ */ jsx(Accordion.Content, { className: "text-gray-700 py-2", children: "En session tar vanligtvis mellan 0.5-2 timmar beroende på era önskemål." })
      ] }),
      /* @__PURE__ */ jsxs(Accordion.Item, { value: "item-3", children: [
        /* @__PURE__ */ jsx(Accordion.Trigger, { className: "text-left text-lg font-medium py-2 w-full", children: "Fotograferar du utanför Kungälv?" }),
        /* @__PURE__ */ jsx(Accordion.Content, { className: "text-gray-700 py-2", children: "Ja, men reseersättning kan tillkomma." })
      ] }),
      /* @__PURE__ */ jsxs(Accordion.Item, { value: "item-4", children: [
        /* @__PURE__ */ jsx(Accordion.Trigger, { className: "text-left text-lg font-medium py-2 w-full", children: "Vad ingår i bröllopspaketet?" }),
        /* @__PURE__ */ jsx(Accordion.Content, { className: "text-gray-700 py-2", children: "I det enklaste bröllopspaketet ingår ca 4 timmar på plats och 50st bilder som ni väljer ut." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center mt-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: "Har du fler frågor?" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/contact",
          className: "inline-block mt-3 px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700",
          children: "Kontakta mig"
        }
      )
    ] })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsx(FAQ, {});
}
export {
  Page
};
