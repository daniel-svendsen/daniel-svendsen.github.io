const formatPublicPrice = (amount: number) =>
  `${new Intl.NumberFormat('sv-SE')
    .format(amount)
    .replace(/[\u00a0\u202f]/g, ' ')} kr`

const formatPercentage = (rate: number) => `${rate * 100} %`

export const PRICE_AMOUNTS = {
  portrait: {
    base: 2290,
    family: 3290,
    extraImage: 250,
    extraThirtyMinutes: 1000,
    familyLargeGroupSupplement: 750,
  },
  wedding: {
    short: 9500,
    halfDay: 17900,
    fullDay: 28900,
    extraHour: 2500,
    highlightFilmWithPhoto: 5000,
    highlightFilmStandalone: 8000,
  },
  business: {
    portrait: 2500,
    event: 5500,
    eventFullDay: 14900,
    activityHourly: 2200,
    portraitPersonTwoToFive: 1250,
    portraitPersonSixToTen: 900,
    portraitGroupImage: 1000,
  },
  product: {
    base: 3500,
    extraImage: 250,
    extraSetup: 750,
  },
  vehicle: {
    base: 2990,
    extraImage: 250,
  },
  web: {
    landingPage: 4500,
    website: 8500,
    seoSupportMonthly: 2000,
  },
  travel: {
    perRoundTripMil: 20,
  },
  priorityDelivery: {
    rate: 0.25,
    minimum: 750,
  },
  campaigns: {
    portraitIntro: 1990,
    weddingSeason: 8900,
  },
} as const

export const PRICING_DETAILS = {
  portrait: {
    baseDuration: '30 minuter',
    baseImages: '5 redigerade bilder',
    familyDuration: '45 till 60 minuter',
    familyImages: '10 redigerade bilder',
  },
  wedding: {
    shortDuration: '2 timmar',
    shortImages: 'ca 75 redigerade bilder',
    halfDayDuration: '5 timmar',
    halfDayImages: 'ca 250 redigerade bilder',
    fullDayDuration: '10 timmar',
    fullDayImages: 'ca 500 redigerade bilder',
  },
  business: {
    productIncludedImages: 10,
    activityMinimumHours: 2,
    portraitQuoteAbovePeople: 10,
  },
  vehicle: {
    includedImages: 10,
  },
} as const

export const PRICING = {
  portrait: {
    basePrice: formatPublicPrice(PRICE_AMOUNTS.portrait.base),
    baseFrom: `Från ${formatPublicPrice(PRICE_AMOUNTS.portrait.base)}`,
    baseDuration: PRICING_DETAILS.portrait.baseDuration,
    baseImages: PRICING_DETAILS.portrait.baseImages,
    familyPrice: formatPublicPrice(PRICE_AMOUNTS.portrait.family),
    familyFrom: `Från ${formatPublicPrice(PRICE_AMOUNTS.portrait.family)}`,
    familyDuration: PRICING_DETAILS.portrait.familyDuration,
    familyImages: PRICING_DETAILS.portrait.familyImages,
    extraImage: `${formatPublicPrice(PRICE_AMOUNTS.portrait.extraImage)}/st`,
  },
  wedding: {
    shortPrice: formatPublicPrice(PRICE_AMOUNTS.wedding.short),
    shortFrom: `Från ${formatPublicPrice(PRICE_AMOUNTS.wedding.short)}`,
    shortDuration: PRICING_DETAILS.wedding.shortDuration,
    shortImages: PRICING_DETAILS.wedding.shortImages,
    halfDayPrice: formatPublicPrice(PRICE_AMOUNTS.wedding.halfDay),
    halfDayDuration: PRICING_DETAILS.wedding.halfDayDuration,
    halfDayImages: PRICING_DETAILS.wedding.halfDayImages,
    fullDayPrice: formatPublicPrice(PRICE_AMOUNTS.wedding.fullDay),
    fullDayDuration: PRICING_DETAILS.wedding.fullDayDuration,
    fullDayImages: PRICING_DETAILS.wedding.fullDayImages,
    extraHour: `${formatPublicPrice(PRICE_AMOUNTS.wedding.extraHour)}/timme`,
    highlightFilmWithPhoto: formatPublicPrice(
      PRICE_AMOUNTS.wedding.highlightFilmWithPhoto,
    ),
    highlightFilmStandalone: formatPublicPrice(
      PRICE_AMOUNTS.wedding.highlightFilmStandalone,
    ),
  },
  business: {
    portraitFrom: formatPublicPrice(PRICE_AMOUNTS.business.portrait),
    eventFrom: formatPublicPrice(PRICE_AMOUNTS.business.event),
    eventFullDayFrom: formatPublicPrice(PRICE_AMOUNTS.business.eventFullDay),
    activityHourlyFrom: `${formatPublicPrice(
      PRICE_AMOUNTS.business.activityHourly,
    )}/h`,
    productStartFrom: formatPublicPrice(PRICE_AMOUNTS.product.base),
    productIncludedImages: PRICING_DETAILS.business.productIncludedImages,
    productExtraImageFrom: `${formatPublicPrice(
      PRICE_AMOUNTS.product.extraImage,
    )}/st`,
    taxNote: 'Moms tillkommer inte.',
  },
  web: {
    landingPageFrom: formatPublicPrice(PRICE_AMOUNTS.web.landingPage),
    websiteFrom: formatPublicPrice(PRICE_AMOUNTS.web.website),
    seoSupportFrom: `${formatPublicPrice(
      PRICE_AMOUNTS.web.seoSupportMonthly,
    )}/månad`,
  },
  estimator: {
    familyLargeGroupSupplement: formatPublicPrice(
      PRICE_AMOUNTS.portrait.familyLargeGroupSupplement,
    ),
    businessActivityMinimum: formatPublicPrice(
      PRICE_AMOUNTS.business.activityHourly *
        PRICING_DETAILS.business.activityMinimumHours,
    ),
    travelPerRoundTripMil: formatPublicPrice(
      PRICE_AMOUNTS.travel.perRoundTripMil,
    ),
    priorityDeliveryRate: formatPercentage(
      PRICE_AMOUNTS.priorityDelivery.rate,
    ),
    priorityDeliveryMinimum: formatPublicPrice(
      PRICE_AMOUNTS.priorityDelivery.minimum,
    ),
  },
  campaigns: {
    portraitIntro: {
      enabled: false,
      label: 'Introduktionserbjudande',
      originalPrice: formatPublicPrice(PRICE_AMOUNTS.portrait.base),
      campaignPrice: formatPublicPrice(
        PRICE_AMOUNTS.campaigns.portraitIntro,
      ),
      validUntil: '',
    },
    weddingSeason: {
      enabled: false,
      label: 'Säsongserbjudande',
      originalPrice: formatPublicPrice(PRICE_AMOUNTS.wedding.short),
      campaignPrice: formatPublicPrice(
        PRICE_AMOUNTS.campaigns.weddingSeason,
      ),
      validUntil: '',
    },
  },
} as const

export const PRICE_ESTIMATOR = {
  portrait: {
    base: PRICE_AMOUNTS.portrait.base,
    extraImage: PRICE_AMOUNTS.portrait.extraImage,
    extraThirtyMinutes: PRICE_AMOUNTS.portrait.extraThirtyMinutes,
  },
  family: {
    base: PRICE_AMOUNTS.portrait.family,
    extraImage: PRICE_AMOUNTS.portrait.extraImage,
    extraThirtyMinutes: PRICE_AMOUNTS.portrait.extraThirtyMinutes,
    largeGroupSupplement: PRICE_AMOUNTS.portrait.familyLargeGroupSupplement,
  },
  wedding: {
    short: PRICE_AMOUNTS.wedding.short,
    halfDay: PRICE_AMOUNTS.wedding.halfDay,
    fullDay: PRICE_AMOUNTS.wedding.fullDay,
    extraHour: PRICE_AMOUNTS.wedding.extraHour,
    highlightFilm: PRICE_AMOUNTS.wedding.highlightFilmWithPhoto,
  },
  businessPortraits: {
    firstPerson: PRICE_AMOUNTS.business.portrait,
    personTwoToFive: PRICE_AMOUNTS.business.portraitPersonTwoToFive,
    personSixToTen: PRICE_AMOUNTS.business.portraitPersonSixToTen,
    groupImage: PRICE_AMOUNTS.business.portraitGroupImage,
    quoteAbovePeople: PRICING_DETAILS.business.portraitQuoteAbovePeople,
  },
  businessActivity: {
    hourly: PRICE_AMOUNTS.business.activityHourly,
    minimumHours: PRICING_DETAILS.business.activityMinimumHours,
  },
  product: {
    base: PRICE_AMOUNTS.product.base,
    includedImages: PRICING_DETAILS.business.productIncludedImages,
    extraImage: PRICE_AMOUNTS.product.extraImage,
    extraSetup: PRICE_AMOUNTS.product.extraSetup,
  },
  vehicle: {
    base: PRICE_AMOUNTS.vehicle.base,
    includedImages: PRICING_DETAILS.vehicle.includedImages,
    extraImage: PRICE_AMOUNTS.vehicle.extraImage,
  },
  travel: {
    perRoundTripMil: PRICE_AMOUNTS.travel.perRoundTripMil,
    roundTo: 10,
  },
  priorityDelivery: {
    rate: PRICE_AMOUNTS.priorityDelivery.rate,
    minimum: PRICE_AMOUNTS.priorityDelivery.minimum,
  },
} as const
