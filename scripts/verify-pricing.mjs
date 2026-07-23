import assert from 'node:assert/strict'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { createServer } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const server = await createServer({
  appType: 'custom',
  configFile: false,
  logLevel: 'error',
  root,
  optimizeDeps: {
    noDiscovery: true,
  },
  resolve: {
    alias: {
      '@': path.join(root, 'src'),
    },
  },
  server: {
    middlewareMode: true,
  },
})

try {
  const pricingModule = await server.ssrLoadModule('/src/config/pricing.ts')
  const estimateModule = await server.ssrLoadModule(
    '/src/utils/priceEstimate.ts',
  )
  const { PRICE_AMOUNTS, PRICE_ESTIMATOR, PRICING } = pricingModule
  const {
    calculatePriceEstimate,
    createPriceEstimateSearchParams,
    defaultPriceEstimateSelection,
    formatPrice,
    formatPriceEstimateForSubmission,
    getContactUrlForEstimate,
    getServicesUrlForEstimate,
    parsePriceEstimateSelection,
  } = estimateModule

  assert.deepEqual(
    {
      portrait: PRICING.portrait,
      wedding: PRICING.wedding,
      business: PRICING.business,
      web: PRICING.web,
      estimator: PRICING.estimator,
      campaigns: PRICING.campaigns,
    },
    {
      portrait: {
        basePrice: '2 290 kr',
        baseFrom: 'Från 2 290 kr',
        baseDuration: '30 minuter',
        baseImages: '5 redigerade bilder',
        familyPrice: '3 290 kr',
        familyFrom: 'Från 3 290 kr',
        familyDuration: '45 till 60 minuter',
        familyImages: '10 redigerade bilder',
        extraImage: '250 kr/st',
      },
      wedding: {
        shortPrice: '9 500 kr',
        shortFrom: 'Från 9 500 kr',
        shortDuration: '2 timmar',
        shortImages: 'ca 75 redigerade bilder',
        halfDayPrice: '17 900 kr',
        halfDayDuration: '5 timmar',
        halfDayImages: 'ca 250 redigerade bilder',
        fullDayPrice: '28 900 kr',
        fullDayDuration: '10 timmar',
        fullDayImages: 'ca 500 redigerade bilder',
        extraHour: '2 500 kr/timme',
        highlightFilmWithPhoto: '5 000 kr',
        highlightFilmStandalone: '8 000 kr',
      },
      business: {
        portraitFrom: '2 500 kr',
        eventFrom: '5 500 kr',
        eventFullDayFrom: '14 900 kr',
        activityHourlyFrom: '2 200 kr/h',
        productStartFrom: '3 500 kr',
        productIncludedImages: 10,
        productExtraImageFrom: '250 kr/st',
        taxNote: 'Moms tillkommer inte.',
      },
      web: {
        landingPageFrom: '4 500 kr',
        websiteFrom: '8 500 kr',
        seoSupportFrom: '2 000 kr/månad',
      },
      estimator: {
        familyLargeGroupSupplement: '750 kr',
        businessActivityMinimum: '4 400 kr',
        travelPerRoundTripMil: '20 kr',
        priorityDeliveryRate: '25 %',
        priorityDeliveryMinimum: '750 kr',
      },
      campaigns: {
        portraitIntro: {
          enabled: false,
          label: 'Introduktionserbjudande',
          originalPrice: '2 290 kr',
          campaignPrice: '1 990 kr',
          validUntil: '',
        },
        weddingSeason: {
          enabled: false,
          label: 'Säsongserbjudande',
          originalPrice: '9 500 kr',
          campaignPrice: '8 900 kr',
          validUntil: '',
        },
      },
    },
  )

  assert.equal(PRICE_ESTIMATOR.portrait.base, PRICE_AMOUNTS.portrait.base)
  assert.equal(PRICE_ESTIMATOR.family.base, PRICE_AMOUNTS.portrait.family)
  assert.equal(PRICE_ESTIMATOR.wedding.short, PRICE_AMOUNTS.wedding.short)
  assert.equal(
    PRICE_ESTIMATOR.businessPortraits.firstPerson,
    PRICE_AMOUNTS.business.portrait,
  )
  assert.equal(PRICE_ESTIMATOR.product.base, PRICE_AMOUNTS.product.base)
  assert.equal(PRICE_ESTIMATOR.vehicle.base, PRICE_AMOUNTS.vehicle.base)
  assert.equal(
    PRICE_ESTIMATOR.travel.perRoundTripMil,
    PRICE_AMOUNTS.travel.perRoundTripMil,
  )

  const selection = (overrides) => ({
    ...defaultPriceEstimateSelection(),
    ...overrides,
  })
  const estimate = (overrides) => calculatePriceEstimate(selection(overrides))

  assert.deepEqual(estimate({ service: 'portrait' }), {
    total: 2290,
    lines: [{ label: 'Porträttpaket', amount: 2290 }],
    quoteReasons: [],
  })
  assert.equal(
    estimate({
      service: 'portrait',
      extraSessionBlocks: 2,
      extraImages: 3,
    }).total,
    5040,
  )

  assert.deepEqual(estimate({ service: 'family' }), {
    total: 3290,
    lines: [{ label: 'Familjepaket', amount: 3290 }],
    quoteReasons: [],
  })
  assert.equal(
    estimate({
      service: 'family',
      extraSessionBlocks: 1,
      extraImages: 2,
      largeGroup: true,
    }).total,
    5540,
  )

  for (const [weddingPackage, label, total] of [
    ['short', 'Bröllopspaket 2 timmar', 9500],
    ['half-day', 'Bröllopspaket 5 timmar', 17900],
    ['full-day', 'Bröllopspaket 10 timmar', 28900],
  ]) {
    const result = estimate({
      service: 'wedding',
      weddingPackage,
    })
    assert.equal(result.total, total)
    assert.equal(result.lines[0].label, label)
  }
  assert.equal(
    estimate({
      service: 'wedding',
      extraWeddingHours: 2,
      highlightFilm: true,
    }).total,
    19500,
  )

  assert.equal(
    estimate({
      service: 'business-portraits',
      businessPeople: 7,
      businessGroupImages: 2,
    }).total,
    11300,
  )
  assert.deepEqual(
    estimate({
      service: 'business-portraits',
      businessPeople: 11,
    }).quoteReasons,
    ['Fler än 10 företagsporträtt prissätts i offert.'],
  )

  assert.equal(
    estimate({
      service: 'business-activity',
      activityHours: 1,
    }).total,
    4400,
  )
  assert.equal(
    estimate({
      service: 'business-activity',
      activityHours: 3.2,
    }).total,
    8800,
  )

  assert.equal(estimate({ service: 'product' }).total, 3500)
  assert.equal(
    estimate({
      service: 'product',
      productImages: 15,
      productSetups: 2,
    }).total,
    6250,
  )
  assert.deepEqual(
    estimate({
      service: 'product',
      productNeedsQuote: true,
    }).quoteReasons,
    ['Foto på plats eller produkter över 70 × 70 × 70 cm prissätts i offert.'],
  )

  assert.equal(estimate({ service: 'vehicle' }).total, 2990)
  assert.equal(
    estimate({
      service: 'vehicle',
      vehicleImages: 15,
    }).total,
    4240,
  )
  assert.deepEqual(
    estimate({
      service: 'vehicle',
      vehicleCount: 2,
    }).quoteReasons,
    ['Fler än ett fordon prissätts i offert.'],
  )

  assert.equal(
    estimate({
      service: 'portrait',
      priorityDelivery: true,
    }).total,
    3040,
  )
  assert.equal(
    estimate({
      service: 'wedding',
      priorityDelivery: true,
    }).total,
    11880,
  )
  assert.equal(
    estimate({
      service: 'portrait',
      roundTripMiles: 7.3,
    }).total,
    2440,
  )
  assert.deepEqual(
    estimate({
      service: 'portrait',
      overnight: true,
    }).quoteReasons,
    [
      'Eventuell övernattning tillkommer till faktisk kostnad efter godkännande.',
    ],
  )

  const querySelection = selection({
    service: 'wedding',
    weddingPackage: 'half-day',
    extraWeddingHours: 2,
    highlightFilm: true,
    roundTripMiles: 8,
    priorityDelivery: true,
  })
  const params = createPriceEstimateSearchParams(querySelection)
  assert.deepEqual(parsePriceEstimateSelection(params), querySelection)
  assert.equal(
    params.toString(),
    'service=wedding&extra-session-blocks=0&extra-images=0&large-group=0&package=half-day&extra-wedding-hours=2&highlight-film=1&business-people=1&business-group-images=0&activity-hours=2&product-images=10&product-setups=0&product-needs-quote=0&vehicle-count=1&vehicle-images=10&round-trip-miles=8&overnight=0&priority-delivery=1',
  )
  assert.equal(
    getContactUrlForEstimate(querySelection),
    `/contact/?${params.toString()}`,
  )
  assert.equal(
    getServicesUrlForEstimate(querySelection),
    `/services/?${params.toString()}#prisindikator`,
  )

  const submittedEstimate = calculatePriceEstimate(querySelection)
  assert.equal(
    formatPriceEstimateForSubmission(querySelection, submittedEstimate),
    [
      'Tjänst: Bröllop',
      `Bröllopspaket 5 timmar: ${formatPrice(17900)}`,
      `Extra bröllopstimmar (2 st): ${formatPrice(5000)}`,
      `Highlightfilm som tillägg: ${formatPrice(5000)}`,
      `Önskemål om prioriterad leverans: ${formatPrice(6980)}`,
      `Resa utanför Kungälv (8 mil tur och retur): ${formatPrice(160)}`,
      `Ungefärlig prisindikation: ${formatPrice(35040)}`,
      'Moms tillkommer inte.',
      'Behöver bekräftas i offert:',
      '- Prioriterad leverans måste bekräftas före bokning.',
      'Prisindikationen är inte en bindande offert.',
    ].join('\n'),
  )

  console.log('Pricing verification passed.')
} finally {
  await server.close()
}
