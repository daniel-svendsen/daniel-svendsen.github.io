import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [formStatus, setFormStatus] = useState(null);
  const services = [
    "Utefotografering",
    "Studiofoto",
    "Bröllop",
    "Företagsporträtt",
    "Produktfotografering",
    "Verksamhetsfoto",
    "Film",
    "Hobby",
    "Hemsida",
    "Annat"
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    try {
      const response = await fetch("https://formspree.io/f/xvgowldv", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setFormStatus("success");
        if (form) form.reset();
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Formspree network error:", error);
      setFormStatus("error");
    }
  };
  return /* @__PURE__ */ jsxs("main", { className: "p-6 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Kontakta Fotograf i Göteborg & Kungälv - Svendsén Photography" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Kontakta Svendsén Photography för bröllop, porträtt, företagsfoto och eventfotografering i Göteborg och Kungälv. Skicka din förfrågan idag!"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "keywords",
          content: "kontakt fotograf, fotograf göteborg kontakt, fotograf kungälv kontakt, boka fotograf, offert fotografering"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Kontakta Svendsén Photography" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Boka en fotografering i Göteborg & Kungälv. Skicka en förfrågan enkelt via vårt kontaktformulär."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.svendsenphotography.com/contact" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Kontakta Svendsén Photography",
        "description": "Boka en fotografering i Kungälv & Göteborg",
        "url": "https://www.svendsenphotography.com/contact"
      }) })
    ] }),
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-6", children: "Kontakta mig gärna via e-post!" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium mb-1", children: "Ditt namn *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "name",
            name: "name",
            type: "text",
            required: true,
            placeholder: "Ditt namn",
            className: "block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-1", children: "E-postadress *" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "email",
            name: "email",
            type: "email",
            required: true,
            placeholder: "Din e-postadress",
            className: "block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("fieldset", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx("legend", { className: "block text-sm font-medium mb-2", children: "Vilken tjänst är du intresserad av? *" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: services.map((service) => /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              id: service,
              name: "service",
              value: service,
              checked: selectedService === service,
              onChange: () => setSelectedService(service),
              className: "form-radio h-4 w-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: service, className: "ml-2 text-sm text-gray-700", children: service })
        ] }, service)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium mb-2", children: "Meddelande *" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "message",
            name: "message",
            rows: 4,
            required: true,
            placeholder: "Ditt meddelande här",
            className: "block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          children: "Skicka"
        }
      ) })
    ] }),
    formStatus === "success" && /* @__PURE__ */ jsx("p", { className: "mt-4 text-green-600", children: "Tack! Ditt meddelande har skickats." }),
    formStatus === "error" && /* @__PURE__ */ jsx("p", { className: "mt-4 text-red-600", children: "Ett fel uppstod. Försök igen senare." })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsx(Contact, {});
}
export {
  Page
};
