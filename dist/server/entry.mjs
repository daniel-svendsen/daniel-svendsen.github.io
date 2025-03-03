import { setGlobalContext_buildEntry } from "vike/__internal";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {
    ["baseAssets"]: {
      type: "standard",
      definedAtData: { "filePathToShowToUser": "/src/pages/+config.js", "fileExportPathToShowToUser": ["default", "baseAssets"] },
      valueSerialized: {
        type: "js-serialized",
        value: "/assets/"
      }
    },
    ["baseServer"]: {
      type: "standard",
      definedAtData: { "filePathToShowToUser": "/src/pages/+config.js", "fileExportPathToShowToUser": ["default", "baseServer"] },
      valueSerialized: {
        type: "js-serialized",
        value: "/"
      }
    },
    ["redirects"]: {
      type: "cumulative",
      definedAtData: [{ "filePathToShowToUser": "/src/pages/+config.js", "fileExportPathToShowToUser": ["default", "redirects"] }],
      valueSerialized: [{
        type: "js-serialized",
        value: {}
      }]
    },
    ["trailingSlash"]: {
      type: "standard",
      definedAtData: { "filePathToShowToUser": "/src/pages/+config.js", "fileExportPathToShowToUser": ["default", "trailingSlash"] },
      valueSerialized: {
        type: "js-serialized",
        value: false
      }
    },
    ["disableUrlNormalization"]: {
      type: "standard",
      definedAtData: { "filePathToShowToUser": "/src/pages/+config.js", "fileExportPathToShowToUser": ["default", "disableUrlNormalization"] },
      valueSerialized: {
        type: "js-serialized",
        value: false
      }
    }
  }
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/src/pages/contact.page.tsx": () => import("./entries/src_pages_contact-page.mjs"), "/src/pages/faq.page.tsx": () => import("./entries/src_pages_faq-page.mjs"), "/src/pages/index.page.tsx": () => import("./entries/src_pages_index-page.mjs"), "/src/pages/portraits.page.tsx": () => import("./entries/src_pages_portraits-page.mjs"), "/src/pages/services.page.tsx": () => import("./entries/src_pages_services-page.mjs"), "/src/pages/weddings.page.tsx": () => import("./entries/src_pages_weddings-page.mjs") });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const virtualFileExports = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-ByOrDy_U.js": {
    "file": "assets/chunks/chunk-ByOrDy_U.js",
    "name": "useImportedImages",
    "imports": [
      "_chunk-oEOffVxx.js",
      "_chunk-aQJg_Uus.js"
    ],
    "dynamicImports": [
      "src/assets/portraits/bild1.jpg",
      "src/assets/portraits/portraits-10.jpg",
      "src/assets/portraits/portraits-11.jpg",
      "src/assets/portraits/portraits-12.jpg",
      "src/assets/portraits/portraits-13.jpg",
      "src/assets/portraits/portraits-14.jpg",
      "src/assets/portraits/portraits-15.jpg",
      "src/assets/portraits/portraits-17.jpg",
      "src/assets/portraits/portraits-18.jpg",
      "src/assets/portraits/portraits-2.jpg",
      "src/assets/portraits/portraits-20.jpg",
      "src/assets/portraits/portraits-22.jpg",
      "src/assets/portraits/portraits-23.jpg",
      "src/assets/portraits/portraits-24.jpg",
      "src/assets/portraits/portraits-3.jpg",
      "src/assets/portraits/portraits-4.jpg",
      "src/assets/portraits/portraits-5.jpg",
      "src/assets/portraits/portraits-8.jpg",
      "src/assets/portraits/portraits-9.jpg",
      "src/assets/portraits/portraits.jpg",
      "src/assets/weddings/portraits-10.jpg",
      "src/assets/weddings/portraits-11.jpg",
      "src/assets/weddings/portraits-12.jpg",
      "src/assets/weddings/portraits-13.jpg",
      "src/assets/weddings/portraits-14.jpg",
      "src/assets/weddings/portraits-15.jpg",
      "src/assets/weddings/portraits-16.jpg",
      "src/assets/weddings/portraits-17.jpg",
      "src/assets/weddings/portraits-18.jpg",
      "src/assets/weddings/portraits-19.jpg",
      "src/assets/weddings/portraits-2.jpg",
      "src/assets/weddings/portraits-20.jpg",
      "src/assets/weddings/portraits-21.jpg",
      "src/assets/weddings/portraits-22.jpg",
      "src/assets/weddings/portraits-23.jpg",
      "src/assets/weddings/portraits-24.jpg",
      "src/assets/weddings/portraits-25.jpg",
      "src/assets/weddings/portraits-3.jpg",
      "src/assets/weddings/portraits-4.jpg",
      "src/assets/weddings/portraits-5.jpg",
      "src/assets/weddings/portraits-6.jpg",
      "src/assets/weddings/portraits-7.jpg",
      "src/assets/weddings/portraits-8.jpg",
      "src/assets/weddings/portraits-9.jpg",
      "src/assets/weddings/portraits.jpg",
      "src/assets/companyhobby/car1.jpg",
      "src/assets/companyhobby/car2.jpg",
      "src/assets/carousel/carousel-10.jpg",
      "src/assets/carousel/carousel-11.jpg",
      "src/assets/carousel/carousel-12.jpg",
      "src/assets/carousel/carousel-13.jpg",
      "src/assets/carousel/carousel-14.jpg",
      "src/assets/carousel/carousel-15.jpg",
      "src/assets/carousel/carousel-16.jpg",
      "src/assets/carousel/carousel-17.jpg",
      "src/assets/carousel/carousel-18.jpg",
      "src/assets/carousel/carousel-19.jpg",
      "src/assets/carousel/carousel-2.jpg",
      "src/assets/carousel/carousel-20.jpg",
      "src/assets/carousel/carousel-21.jpg",
      "src/assets/carousel/carousel-22.jpg",
      "src/assets/carousel/carousel-3.jpg",
      "src/assets/carousel/carousel-4.jpg",
      "src/assets/carousel/carousel-5.jpg",
      "src/assets/carousel/carousel-6.jpg",
      "src/assets/carousel/carousel-7.jpg",
      "src/assets/carousel/carousel-8.jpg",
      "src/assets/carousel/carousel-9.jpg",
      "src/assets/carousel/carousel.jpg",
      "src/assets/herosection/car1.jpg",
      "src/assets/herosection/car2.jpg",
      "src/assets/herosection/company.jpg",
      "src/assets/herosection/portrait.jpg",
      "src/assets/herosection/portrait2.jpg",
      "src/assets/herosection/portraits-13.jpg",
      "src/assets/herosection/portraits-14.jpg",
      "src/assets/herosection/portraits-20.jpg",
      "src/assets/herosection/portraits-23.jpg",
      "src/assets/herosection/portraits-3.jpg",
      "src/assets/herosection/portraits-9.jpg",
      "src/assets/herosection/portraits.jpg",
      "src/assets/herosection/wedding.jpg"
    ]
  },
  "_chunk-Cf-wfC7g.js": {
    "file": "assets/chunks/chunk-Cf-wfC7g.js",
    "name": "useShuffleImages",
    "imports": [
      "_chunk-aQJg_Uus.js"
    ]
  },
  "_chunk-CgvFUphk.js": {
    "file": "assets/chunks/chunk-CgvFUphk.js",
    "name": "cards",
    "imports": [
      "_chunk-aQJg_Uus.js",
      "_chunk-vLvU2Ybl.js"
    ],
    "assets": [
      "assets/static/wedding.Se-qk-Wt.jpg",
      "assets/static/portrait.BuLiEXZv.jpg",
      "assets/static/company.BrR4d-y-.jpg"
    ]
  },
  "_chunk-D4ZF7owE.js": {
    "file": "assets/chunks/chunk-D4ZF7owE.js",
    "name": "getCurrentUrl"
  },
  "_chunk-aQJg_Uus.js": {
    "file": "assets/chunks/chunk-aQJg_Uus.js",
    "name": "index.esm"
  },
  "_chunk-oEOffVxx.js": {
    "file": "assets/chunks/chunk-oEOffVxx.js",
    "name": "preload-helper"
  },
  "_chunk-vLvU2Ybl.js": {
    "file": "assets/chunks/chunk-vLvU2Ybl.js",
    "name": "index",
    "imports": [
      "_chunk-aQJg_Uus.js"
    ]
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.4kfZKjgQ.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-D4ZF7owE.js",
      "_chunk-oEOffVxx.js"
    ],
    "dynamicImports": [
      "src/pages/contact.page.tsx",
      "src/pages/faq.page.tsx",
      "src/pages/index.page.tsx",
      "src/pages/portraits.page.tsx",
      "src/pages/services.page.tsx",
      "src/pages/weddings.page.tsx"
    ]
  },
  "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js": {
    "file": "assets/entries/entry-server-routing.BU-IMNFY.js",
    "name": "entries/entry-server-routing",
    "src": "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-D4ZF7owE.js",
      "_chunk-oEOffVxx.js"
    ],
    "dynamicImports": [
      "src/pages/contact.page.tsx",
      "src/pages/faq.page.tsx",
      "src/pages/index.page.tsx",
      "src/pages/portraits.page.tsx",
      "src/pages/services.page.tsx",
      "src/pages/weddings.page.tsx"
    ]
  },
  "src/assets/carousel/carousel-10.jpg": {
    "file": "assets/chunks/chunk-D6Cd6Fsd.js",
    "name": "carousel-10",
    "src": "src/assets/carousel/carousel-10.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-10.BSbjuGPt.jpg"
    ]
  },
  "src/assets/carousel/carousel-11.jpg": {
    "file": "assets/chunks/chunk-N91o6Gr5.js",
    "name": "carousel-11",
    "src": "src/assets/carousel/carousel-11.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-11.C1agDzQG.jpg"
    ]
  },
  "src/assets/carousel/carousel-12.jpg": {
    "file": "assets/chunks/chunk-BldwN4Uv.js",
    "name": "carousel-12",
    "src": "src/assets/carousel/carousel-12.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-12.Dz7mL52a.jpg"
    ]
  },
  "src/assets/carousel/carousel-13.jpg": {
    "file": "assets/chunks/chunk-D2Pp0fwq.js",
    "name": "carousel-13",
    "src": "src/assets/carousel/carousel-13.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-13.COjdJeG_.jpg"
    ]
  },
  "src/assets/carousel/carousel-14.jpg": {
    "file": "assets/chunks/chunk-DBFkXgTY.js",
    "name": "carousel-14",
    "src": "src/assets/carousel/carousel-14.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-14.CIYM5DI5.jpg"
    ]
  },
  "src/assets/carousel/carousel-15.jpg": {
    "file": "assets/chunks/chunk-FoVvmhsA.js",
    "name": "carousel-15",
    "src": "src/assets/carousel/carousel-15.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-15.DnSwHuKQ.jpg"
    ]
  },
  "src/assets/carousel/carousel-16.jpg": {
    "file": "assets/chunks/chunk-zhhWB_sR.js",
    "name": "carousel-16",
    "src": "src/assets/carousel/carousel-16.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-16.ibejATqo.jpg"
    ]
  },
  "src/assets/carousel/carousel-17.jpg": {
    "file": "assets/chunks/chunk-H0TAdrAI.js",
    "name": "carousel-17",
    "src": "src/assets/carousel/carousel-17.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-17.CwJz74oG.jpg"
    ]
  },
  "src/assets/carousel/carousel-18.jpg": {
    "file": "assets/chunks/chunk-BD7a3VcZ.js",
    "name": "carousel-18",
    "src": "src/assets/carousel/carousel-18.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-18.Ccmeuz0l.jpg"
    ]
  },
  "src/assets/carousel/carousel-19.jpg": {
    "file": "assets/chunks/chunk-BJqNz_hq.js",
    "name": "carousel-19",
    "src": "src/assets/carousel/carousel-19.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-19.B8wJ9HEL.jpg"
    ]
  },
  "src/assets/carousel/carousel-2.jpg": {
    "file": "assets/chunks/chunk-CVV7_p_n.js",
    "name": "carousel-2",
    "src": "src/assets/carousel/carousel-2.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-2.D7p770AE.jpg"
    ]
  },
  "src/assets/carousel/carousel-20.jpg": {
    "file": "assets/chunks/chunk-B0AVqcds.js",
    "name": "carousel-20",
    "src": "src/assets/carousel/carousel-20.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-20.CASnwSJk.jpg"
    ]
  },
  "src/assets/carousel/carousel-21.jpg": {
    "file": "assets/chunks/chunk-B3CuKWua.js",
    "name": "carousel-21",
    "src": "src/assets/carousel/carousel-21.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-21.pUqQCXDM.jpg"
    ]
  },
  "src/assets/carousel/carousel-22.jpg": {
    "file": "assets/chunks/chunk-Brpo9i59.js",
    "name": "carousel-22",
    "src": "src/assets/carousel/carousel-22.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-22.Pm26LCv9.jpg"
    ]
  },
  "src/assets/carousel/carousel-3.jpg": {
    "file": "assets/chunks/chunk-Buv9n4ux.js",
    "name": "carousel-3",
    "src": "src/assets/carousel/carousel-3.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-3.Bv4ZpjpR.jpg"
    ]
  },
  "src/assets/carousel/carousel-4.jpg": {
    "file": "assets/chunks/chunk-CCJjeETr.js",
    "name": "carousel-4",
    "src": "src/assets/carousel/carousel-4.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-4.DKbviY5Q.jpg"
    ]
  },
  "src/assets/carousel/carousel-5.jpg": {
    "file": "assets/chunks/chunk-CrPOVByO.js",
    "name": "carousel-5",
    "src": "src/assets/carousel/carousel-5.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-5.CyC1cvR5.jpg"
    ]
  },
  "src/assets/carousel/carousel-6.jpg": {
    "file": "assets/chunks/chunk-DY1HlD7M.js",
    "name": "carousel-6",
    "src": "src/assets/carousel/carousel-6.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-6.RV4Csl5j.jpg"
    ]
  },
  "src/assets/carousel/carousel-7.jpg": {
    "file": "assets/chunks/chunk-D1OjeY4G.js",
    "name": "carousel-7",
    "src": "src/assets/carousel/carousel-7.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-7.C4BjcSVK.jpg"
    ]
  },
  "src/assets/carousel/carousel-8.jpg": {
    "file": "assets/chunks/chunk-hkeApfdT.js",
    "name": "carousel-8",
    "src": "src/assets/carousel/carousel-8.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-8.BBEpMeZy.jpg"
    ]
  },
  "src/assets/carousel/carousel-9.jpg": {
    "file": "assets/chunks/chunk-CRkdbu1i.js",
    "name": "carousel-9",
    "src": "src/assets/carousel/carousel-9.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel-9.Cs7J45do.jpg"
    ]
  },
  "src/assets/carousel/carousel.jpg": {
    "file": "assets/chunks/chunk-DNu9gNFg.js",
    "name": "carousel",
    "src": "src/assets/carousel/carousel.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/carousel.Du1MIy6y.jpg"
    ]
  },
  "src/assets/companyhobby/car1.jpg": {
    "file": "assets/chunks/chunk-DVz9bAEh.js",
    "name": "car1",
    "src": "src/assets/companyhobby/car1.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/car1.Vn71Ayor.jpg"
    ]
  },
  "src/assets/companyhobby/car2.jpg": {
    "file": "assets/chunks/chunk-CJhSMHzj.js",
    "name": "car2",
    "src": "src/assets/companyhobby/car2.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/car2.pFVgKNM8.jpg"
    ]
  },
  "src/assets/herosection/car1.jpg": {
    "file": "assets/chunks/chunk-CsazY41C.js",
    "name": "car1",
    "src": "src/assets/herosection/car1.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/car1.Vn71Ayor.jpg"
    ]
  },
  "src/assets/herosection/car2.jpg": {
    "file": "assets/chunks/chunk-BoYt0lZ0.js",
    "name": "car2",
    "src": "src/assets/herosection/car2.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/car2.pFVgKNM8.jpg"
    ]
  },
  "src/assets/herosection/company.jpg": {
    "file": "assets/chunks/chunk-DmO4xsxq.js",
    "name": "company",
    "src": "src/assets/herosection/company.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/company.BrR4d-y-.jpg"
    ]
  },
  "src/assets/herosection/portrait.jpg": {
    "file": "assets/chunks/chunk-kPJvTIOi.js",
    "name": "portrait",
    "src": "src/assets/herosection/portrait.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portrait.BuLiEXZv.jpg"
    ]
  },
  "src/assets/herosection/portrait2.jpg": {
    "file": "assets/chunks/chunk-CXHm_y2k.js",
    "name": "portrait2",
    "src": "src/assets/herosection/portrait2.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portrait2.HhCvq4Df.jpg"
    ]
  },
  "src/assets/herosection/portraits-13.jpg": {
    "file": "assets/chunks/chunk-Dbcnt6PW.js",
    "name": "portraits-13",
    "src": "src/assets/herosection/portraits-13.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-13.B7n2AnxQ.jpg"
    ]
  },
  "src/assets/herosection/portraits-14.jpg": {
    "file": "assets/chunks/chunk-CMrUdBqU.js",
    "name": "portraits-14",
    "src": "src/assets/herosection/portraits-14.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-14.B96gEwtz.jpg"
    ]
  },
  "src/assets/herosection/portraits-20.jpg": {
    "file": "assets/chunks/chunk-DT6b-YVf.js",
    "name": "portraits-20",
    "src": "src/assets/herosection/portraits-20.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-20.B8uck7QR.jpg"
    ]
  },
  "src/assets/herosection/portraits-23.jpg": {
    "file": "assets/chunks/chunk-De6IUMpQ.js",
    "name": "portraits-23",
    "src": "src/assets/herosection/portraits-23.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-23.D5gsYzOF.jpg"
    ]
  },
  "src/assets/herosection/portraits-3.jpg": {
    "file": "assets/chunks/chunk-C5M79y0v.js",
    "name": "portraits-3",
    "src": "src/assets/herosection/portraits-3.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-3.DwrelSPv.jpg"
    ]
  },
  "src/assets/herosection/portraits-9.jpg": {
    "file": "assets/chunks/chunk-bLTZ7hTs.js",
    "name": "portraits-9",
    "src": "src/assets/herosection/portraits-9.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-9.DI5V6D7u.jpg"
    ]
  },
  "src/assets/herosection/portraits.jpg": {
    "file": "assets/chunks/chunk-B4RSChkB.js",
    "name": "portraits",
    "src": "src/assets/herosection/portraits.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits.BOoBiz44.jpg"
    ]
  },
  "src/assets/herosection/wedding.jpg": {
    "file": "assets/chunks/chunk-BnG_nFul.js",
    "name": "wedding",
    "src": "src/assets/herosection/wedding.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/wedding.Se-qk-Wt.jpg"
    ]
  },
  "src/assets/pictures/company.jpg": {
    "file": "assets/static/company.BrR4d-y-.jpg",
    "src": "src/assets/herosection/company.jpg"
  },
  "src/assets/pictures/portrait.jpg": {
    "file": "assets/static/portrait.BuLiEXZv.jpg",
    "src": "src/assets/herosection/portrait.jpg"
  },
  "src/assets/pictures/wedding.jpg": {
    "file": "assets/static/wedding.Se-qk-Wt.jpg",
    "src": "src/assets/herosection/wedding.jpg"
  },
  "src/assets/portraits/bild1.jpg": {
    "file": "assets/chunks/chunk-CGD8cBkH.js",
    "name": "bild1",
    "src": "src/assets/portraits/bild1.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/bild1.DKU3Qzei.jpg"
    ]
  },
  "src/assets/portraits/portraits-10.jpg": {
    "file": "assets/chunks/chunk-DX1nIolx.js",
    "name": "portraits-10",
    "src": "src/assets/portraits/portraits-10.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-10.CwucjhBt.jpg"
    ]
  },
  "src/assets/portraits/portraits-11.jpg": {
    "file": "assets/chunks/chunk-ChWg6grD.js",
    "name": "portraits-11",
    "src": "src/assets/portraits/portraits-11.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-11.BbGORITQ.jpg"
    ]
  },
  "src/assets/portraits/portraits-12.jpg": {
    "file": "assets/chunks/chunk-3nnd20YE.js",
    "name": "portraits-12",
    "src": "src/assets/portraits/portraits-12.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-12.C_7OxPK2.jpg"
    ]
  },
  "src/assets/portraits/portraits-13.jpg": {
    "file": "assets/chunks/chunk-C42bOEoi.js",
    "name": "portraits-13",
    "src": "src/assets/portraits/portraits-13.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-13.B7n2AnxQ.jpg"
    ]
  },
  "src/assets/portraits/portraits-14.jpg": {
    "file": "assets/chunks/chunk-D-gl0L03.js",
    "name": "portraits-14",
    "src": "src/assets/portraits/portraits-14.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-14.TRT9fxuE.jpg"
    ]
  },
  "src/assets/portraits/portraits-15.jpg": {
    "file": "assets/chunks/chunk-CNve79ca.js",
    "name": "portraits-15",
    "src": "src/assets/portraits/portraits-15.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-15.BB6_jXTD.jpg"
    ]
  },
  "src/assets/portraits/portraits-17.jpg": {
    "file": "assets/chunks/chunk-tZnrwiLd.js",
    "name": "portraits-17",
    "src": "src/assets/portraits/portraits-17.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-17.DDarTRKn.jpg"
    ]
  },
  "src/assets/portraits/portraits-18.jpg": {
    "file": "assets/chunks/chunk-B_Up5Cok.js",
    "name": "portraits-18",
    "src": "src/assets/portraits/portraits-18.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-18.-K7hQyaF.jpg"
    ]
  },
  "src/assets/portraits/portraits-2.jpg": {
    "file": "assets/chunks/chunk-DDMHhB4J.js",
    "name": "portraits-2",
    "src": "src/assets/portraits/portraits-2.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-2.7aUK2uup.jpg"
    ]
  },
  "src/assets/portraits/portraits-20.jpg": {
    "file": "assets/chunks/chunk-BD6fIb6L.js",
    "name": "portraits-20",
    "src": "src/assets/portraits/portraits-20.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-20.BKHB8c7w.jpg"
    ]
  },
  "src/assets/portraits/portraits-22.jpg": {
    "file": "assets/chunks/chunk-Ds--RbwH.js",
    "name": "portraits-22",
    "src": "src/assets/portraits/portraits-22.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-22.Dh19qEab.jpg"
    ]
  },
  "src/assets/portraits/portraits-23.jpg": {
    "file": "assets/chunks/chunk-KHmMkxSR.js",
    "name": "portraits-23",
    "src": "src/assets/portraits/portraits-23.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-23.DQvVke6K.jpg"
    ]
  },
  "src/assets/portraits/portraits-24.jpg": {
    "file": "assets/chunks/chunk-p4L0ZvOI.js",
    "name": "portraits-24",
    "src": "src/assets/portraits/portraits-24.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-24.CK3dyEMP.jpg"
    ]
  },
  "src/assets/portraits/portraits-3.jpg": {
    "file": "assets/chunks/chunk-_6u6bp5M.js",
    "name": "portraits-3",
    "src": "src/assets/portraits/portraits-3.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-3.C7PH4z57.jpg"
    ]
  },
  "src/assets/portraits/portraits-4.jpg": {
    "file": "assets/chunks/chunk-CyJcsR7A.js",
    "name": "portraits-4",
    "src": "src/assets/portraits/portraits-4.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-4.v9OCf8ys.jpg"
    ]
  },
  "src/assets/portraits/portraits-5.jpg": {
    "file": "assets/chunks/chunk-CZhKME0W.js",
    "name": "portraits-5",
    "src": "src/assets/portraits/portraits-5.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-5.CJiLr9vz.jpg"
    ]
  },
  "src/assets/portraits/portraits-8.jpg": {
    "file": "assets/chunks/chunk--GGbk1D6.js",
    "name": "portraits-8",
    "src": "src/assets/portraits/portraits-8.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-8.AvJa7giv.jpg"
    ]
  },
  "src/assets/portraits/portraits-9.jpg": {
    "file": "assets/chunks/chunk-D1GljHy-.js",
    "name": "portraits-9",
    "src": "src/assets/portraits/portraits-9.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-9.DI5V6D7u.jpg"
    ]
  },
  "src/assets/portraits/portraits.jpg": {
    "file": "assets/chunks/chunk-CMUrmgC3.js",
    "name": "portraits",
    "src": "src/assets/portraits/portraits.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits.Ao5Psc8j.jpg"
    ]
  },
  "src/assets/weddings/portraits-10.jpg": {
    "file": "assets/chunks/chunk-DsxeEBHw.js",
    "name": "portraits-10",
    "src": "src/assets/weddings/portraits-10.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-10.D4aAFEhD.jpg"
    ]
  },
  "src/assets/weddings/portraits-11.jpg": {
    "file": "assets/chunks/chunk-BQRzslMA.js",
    "name": "portraits-11",
    "src": "src/assets/weddings/portraits-11.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-11.Dmck9Bf-.jpg"
    ]
  },
  "src/assets/weddings/portraits-12.jpg": {
    "file": "assets/chunks/chunk-BMN9gdIP.js",
    "name": "portraits-12",
    "src": "src/assets/weddings/portraits-12.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-12.DGZr0I3i.jpg"
    ]
  },
  "src/assets/weddings/portraits-13.jpg": {
    "file": "assets/chunks/chunk-C_f9yR1f.js",
    "name": "portraits-13",
    "src": "src/assets/weddings/portraits-13.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-13.B8kcH7ej.jpg"
    ]
  },
  "src/assets/weddings/portraits-14.jpg": {
    "file": "assets/chunks/chunk-DxbvsUWh.js",
    "name": "portraits-14",
    "src": "src/assets/weddings/portraits-14.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-14.B96gEwtz.jpg"
    ]
  },
  "src/assets/weddings/portraits-15.jpg": {
    "file": "assets/chunks/chunk-Ch0YlUfv.js",
    "name": "portraits-15",
    "src": "src/assets/weddings/portraits-15.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-15.Cl-f_jmF.jpg"
    ]
  },
  "src/assets/weddings/portraits-16.jpg": {
    "file": "assets/chunks/chunk-BTQUx4uT.js",
    "name": "portraits-16",
    "src": "src/assets/weddings/portraits-16.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-16.D6ZQHruS.jpg"
    ]
  },
  "src/assets/weddings/portraits-17.jpg": {
    "file": "assets/chunks/chunk-Cz2uTs6y.js",
    "name": "portraits-17",
    "src": "src/assets/weddings/portraits-17.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-17.Bw_b5NWy.jpg"
    ]
  },
  "src/assets/weddings/portraits-18.jpg": {
    "file": "assets/chunks/chunk-CESyRsE7.js",
    "name": "portraits-18",
    "src": "src/assets/weddings/portraits-18.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-18.DG4sHJqv.jpg"
    ]
  },
  "src/assets/weddings/portraits-19.jpg": {
    "file": "assets/chunks/chunk-OiC2ste3.js",
    "name": "portraits-19",
    "src": "src/assets/weddings/portraits-19.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-19.CGPb3F4h.jpg"
    ]
  },
  "src/assets/weddings/portraits-2.jpg": {
    "file": "assets/chunks/chunk-Co8MieZt.js",
    "name": "portraits-2",
    "src": "src/assets/weddings/portraits-2.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-2.DHJYPzp2.jpg"
    ]
  },
  "src/assets/weddings/portraits-20.jpg": {
    "file": "assets/chunks/chunk-JfqwG1vc.js",
    "name": "portraits-20",
    "src": "src/assets/weddings/portraits-20.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-20.B8uck7QR.jpg"
    ]
  },
  "src/assets/weddings/portraits-21.jpg": {
    "file": "assets/chunks/chunk-C-Wfr8Da.js",
    "name": "portraits-21",
    "src": "src/assets/weddings/portraits-21.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-21.DuKfd0-d.jpg"
    ]
  },
  "src/assets/weddings/portraits-22.jpg": {
    "file": "assets/chunks/chunk-CNjKeCDp.js",
    "name": "portraits-22",
    "src": "src/assets/weddings/portraits-22.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-22.ucNYmH7a.jpg"
    ]
  },
  "src/assets/weddings/portraits-23.jpg": {
    "file": "assets/chunks/chunk-B9yB3aNb.js",
    "name": "portraits-23",
    "src": "src/assets/weddings/portraits-23.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-23.D5gsYzOF.jpg"
    ]
  },
  "src/assets/weddings/portraits-24.jpg": {
    "file": "assets/chunks/chunk-DJ-q5PHX.js",
    "name": "portraits-24",
    "src": "src/assets/weddings/portraits-24.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-24.NXjXLdB2.jpg"
    ]
  },
  "src/assets/weddings/portraits-25.jpg": {
    "file": "assets/chunks/chunk-D1LiE3iB.js",
    "name": "portraits-25",
    "src": "src/assets/weddings/portraits-25.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-25.D0yZ-mpB.jpg"
    ]
  },
  "src/assets/weddings/portraits-3.jpg": {
    "file": "assets/chunks/chunk-DtgCRmhY.js",
    "name": "portraits-3",
    "src": "src/assets/weddings/portraits-3.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-3.DwrelSPv.jpg"
    ]
  },
  "src/assets/weddings/portraits-4.jpg": {
    "file": "assets/chunks/chunk-CF0XVez9.js",
    "name": "portraits-4",
    "src": "src/assets/weddings/portraits-4.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-4.hUBwP8iZ.jpg"
    ]
  },
  "src/assets/weddings/portraits-5.jpg": {
    "file": "assets/chunks/chunk-C8O3D-xl.js",
    "name": "portraits-5",
    "src": "src/assets/weddings/portraits-5.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-5.BxC8bek0.jpg"
    ]
  },
  "src/assets/weddings/portraits-6.jpg": {
    "file": "assets/chunks/chunk-CzaYFGUw.js",
    "name": "portraits-6",
    "src": "src/assets/weddings/portraits-6.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-6.D6Sj6_T_.jpg"
    ]
  },
  "src/assets/weddings/portraits-7.jpg": {
    "file": "assets/chunks/chunk-C54htyqo.js",
    "name": "portraits-7",
    "src": "src/assets/weddings/portraits-7.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-7.DjKfyiNH.jpg"
    ]
  },
  "src/assets/weddings/portraits-8.jpg": {
    "file": "assets/chunks/chunk-ClL-Dyds.js",
    "name": "portraits-8",
    "src": "src/assets/weddings/portraits-8.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-8.DE7a0yjB.jpg"
    ]
  },
  "src/assets/weddings/portraits-9.jpg": {
    "file": "assets/chunks/chunk-B-gqU2Vo.js",
    "name": "portraits-9",
    "src": "src/assets/weddings/portraits-9.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits-9.CnQZwU9-.jpg"
    ]
  },
  "src/assets/weddings/portraits.jpg": {
    "file": "assets/chunks/chunk-BOL45O3i.js",
    "name": "portraits",
    "src": "src/assets/weddings/portraits.jpg",
    "isDynamicEntry": true,
    "assets": [
      "assets/static/portraits.BOoBiz44.jpg"
    ]
  },
  "src/components/Carousel.tsx": {
    "file": "assets/chunks/chunk-W15AKQ6_.js",
    "name": "Carousel",
    "src": "src/components/Carousel.tsx",
    "isDynamicEntry": true,
    "imports": [
      "_chunk-aQJg_Uus.js",
      "_chunk-ByOrDy_U.js",
      "_chunk-Cf-wfC7g.js",
      "_chunk-oEOffVxx.js"
    ]
  },
  "src/pages/Services.tsx": {
    "file": "assets/chunks/chunk-DbogQ7eZ.js",
    "name": "Services",
    "src": "src/pages/Services.tsx",
    "isDynamicEntry": true,
    "imports": [
      "_chunk-aQJg_Uus.js",
      "_chunk-CgvFUphk.js",
      "_chunk-vLvU2Ybl.js"
    ]
  },
  "src/pages/contact.page.tsx": {
    "file": "assets/entries/src_pages_contact.page.OBiJjzIc.js",
    "name": "entries/src/pages/contact.page",
    "src": "src/pages/contact.page.tsx",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-aQJg_Uus.js"
    ]
  },
  "src/pages/faq.page.tsx": {
    "file": "assets/entries/src_pages_faq.page.Dy-Dxf9H.js",
    "name": "entries/src/pages/faq.page",
    "src": "src/pages/faq.page.tsx",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-aQJg_Uus.js",
      "_chunk-vLvU2Ybl.js"
    ]
  },
  "src/pages/index.page.tsx": {
    "file": "assets/entries/src_pages_index.page.C_K99vz-.js",
    "name": "entries/src/pages/index.page",
    "src": "src/pages/index.page.tsx",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-aQJg_Uus.js",
      "_chunk-oEOffVxx.js",
      "_chunk-CgvFUphk.js",
      "_chunk-ByOrDy_U.js",
      "_chunk-vLvU2Ybl.js"
    ],
    "dynamicImports": [
      "src/components/Carousel.tsx",
      "src/pages/Services.tsx"
    ]
  },
  "src/pages/portraits.page.tsx": {
    "file": "assets/entries/src_pages_portraits.page.B5D7HrbF.js",
    "name": "entries/src/pages/portraits.page",
    "src": "src/pages/portraits.page.tsx",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-aQJg_Uus.js",
      "_chunk-ByOrDy_U.js",
      "_chunk-Cf-wfC7g.js",
      "_chunk-oEOffVxx.js"
    ]
  },
  "src/pages/services.page.tsx": {
    "file": "assets/entries/src_pages_services.page.CfuFsjYh.js",
    "name": "entries/src/pages/services.page",
    "src": "src/pages/services.page.tsx",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-aQJg_Uus.js",
      "src/pages/Services.tsx",
      "_chunk-CgvFUphk.js",
      "_chunk-vLvU2Ybl.js"
    ]
  },
  "src/pages/weddings.page.tsx": {
    "file": "assets/entries/src_pages_weddings.page.DACu8MCO.js",
    "name": "entries/src/pages/weddings.page",
    "src": "src/pages/weddings.page.tsx",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-aQJg_Uus.js",
      "_chunk-ByOrDy_U.js",
      "_chunk-Cf-wfC7g.js",
      "_chunk-oEOffVxx.js"
    ]
  }
};
  const buildInfo = {
    "versionAtBuildTime": "0.4.224",
    "usesClientRouter": false,
    "viteConfigRuntime": {
      "_baseViteOriginal": "/",
      "vitePluginServerEntry": {}
    }
  };
  setGlobalContext_buildEntry({
    virtualFileExports,
    assetsManifest,
    buildInfo
  });
}
