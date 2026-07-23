import { PRICE_ESTIMATOR, PRICING } from '@/config/pricing'

export type EstimateService =
  | 'portrait'
  | 'family'
  | 'wedding'
  | 'business-portraits'
  | 'business-activity'
  | 'product'
  | 'vehicle'

export type WeddingPackage = 'short' | 'half-day' | 'full-day'

export interface PriceEstimateSelection {
  service: EstimateService
  extraSessionBlocks: number
  extraImages: number
  largeGroup: boolean
  weddingPackage: WeddingPackage
  extraWeddingHours: number
  highlightFilm: boolean
  businessPeople: number
  businessGroupImages: number
  activityHours: number
  productImages: number
  productSetups: number
  productNeedsQuote: boolean
  vehicleCount: number
  vehicleImages: number
  roundTripMiles: number
  overnight: boolean
  priorityDelivery: boolean
}

export interface PriceEstimate {
  total: number
  lines: Array<{ label: string; amount: number }>
  quoteReasons: string[]
}

export const ESTIMATE_SERVICE_LABELS: Record<EstimateService, string> = {
  portrait: 'Porträttfotografering',
  family: 'Familjefotografering',
  wedding: 'Bröllopsfotografering',
  'business-portraits': 'Företagsfotografering',
  'business-activity': 'Företagsfotografering',
  product: 'Produktfotografering',
  vehicle: 'Bilfotografering',
}

export const ESTIMATE_SERVICE_TITLES: Record<EstimateService, string> = {
  portrait: 'Porträtt',
  family: 'Familj',
  wedding: 'Bröllop',
  'business-portraits': 'Företagsporträtt',
  'business-activity': 'Verksamhetsfoto',
  product: 'Produktfoto',
  vehicle: 'Bilfoto',
}

export const defaultPriceEstimateSelection = (): PriceEstimateSelection => ({
  service: 'portrait',
  extraSessionBlocks: 0,
  extraImages: 0,
  largeGroup: false,
  weddingPackage: 'short',
  extraWeddingHours: 0,
  highlightFilm: false,
  businessPeople: 1,
  businessGroupImages: 0,
  activityHours: 2,
  productImages: PRICE_ESTIMATOR.product.includedImages,
  productSetups: 0,
  productNeedsQuote: false,
  vehicleCount: 1,
  vehicleImages: PRICE_ESTIMATOR.vehicle.includedImages,
  roundTripMiles: 0,
  overnight: false,
  priorityDelivery: false,
})

const asSafeNumber = (
  value: string | null,
  fallback: number,
  minimum = 0,
  maximum = 999,
) => {
  const parsed = Number(value)

  if (!Number.isFinite(parsed)) {
    return fallback
  }

  return Math.min(maximum, Math.max(minimum, parsed))
}

const asBoolean = (value: string | null) => value === '1'

const isEstimateService = (value: string | null): value is EstimateService =>
  value !== null && value in ESTIMATE_SERVICE_LABELS

const isWeddingPackage = (value: string | null): value is WeddingPackage =>
  value === 'short' || value === 'half-day' || value === 'full-day'

export const parsePriceEstimateSelection = (
  params: URLSearchParams,
): PriceEstimateSelection | null => {
  const service = params.get('service')

  if (!isEstimateService(service)) {
    return null
  }

  const defaults = defaultPriceEstimateSelection()
  const weddingPackage = params.get('package')

  return {
    ...defaults,
    service,
    extraSessionBlocks: asSafeNumber(
      params.get('extra-session-blocks'),
      defaults.extraSessionBlocks,
      0,
      4,
    ),
    extraImages: asSafeNumber(
      params.get('extra-images'),
      defaults.extraImages,
      0,
      100,
    ),
    largeGroup: asBoolean(params.get('large-group')),
    weddingPackage: isWeddingPackage(weddingPackage)
      ? weddingPackage
      : defaults.weddingPackage,
    extraWeddingHours: asSafeNumber(
      params.get('extra-wedding-hours'),
      defaults.extraWeddingHours,
      0,
      12,
    ),
    highlightFilm: asBoolean(params.get('highlight-film')),
    businessPeople: asSafeNumber(
      params.get('business-people'),
      defaults.businessPeople,
      1,
      50,
    ),
    businessGroupImages: asSafeNumber(
      params.get('business-group-images'),
      defaults.businessGroupImages,
      0,
      10,
    ),
    activityHours: asSafeNumber(
      params.get('activity-hours'),
      defaults.activityHours,
      1,
      24,
    ),
    productImages: asSafeNumber(
      params.get('product-images'),
      defaults.productImages,
      1,
      500,
    ),
    productSetups: asSafeNumber(
      params.get('product-setups'),
      defaults.productSetups,
      0,
      20,
    ),
    productNeedsQuote: asBoolean(params.get('product-needs-quote')),
    vehicleCount: asSafeNumber(
      params.get('vehicle-count'),
      defaults.vehicleCount,
      1,
      20,
    ),
    vehicleImages: asSafeNumber(
      params.get('vehicle-images'),
      defaults.vehicleImages,
      1,
      100,
    ),
    roundTripMiles: asSafeNumber(
      params.get('round-trip-miles'),
      defaults.roundTripMiles,
      0,
      500,
    ),
    overnight: asBoolean(params.get('overnight')),
    priorityDelivery: asBoolean(params.get('priority-delivery')),
  }
}

export const createPriceEstimateSearchParams = (
  selection: PriceEstimateSelection,
) => {
  const params = new URLSearchParams({ service: selection.service })

  params.set('extra-session-blocks', String(selection.extraSessionBlocks))
  params.set('extra-images', String(selection.extraImages))
  params.set('large-group', selection.largeGroup ? '1' : '0')
  params.set('package', selection.weddingPackage)
  params.set('extra-wedding-hours', String(selection.extraWeddingHours))
  params.set('highlight-film', selection.highlightFilm ? '1' : '0')
  params.set('business-people', String(selection.businessPeople))
  params.set('business-group-images', String(selection.businessGroupImages))
  params.set('activity-hours', String(selection.activityHours))
  params.set('product-images', String(selection.productImages))
  params.set('product-setups', String(selection.productSetups))
  params.set('product-needs-quote', selection.productNeedsQuote ? '1' : '0')
  params.set('vehicle-count', String(selection.vehicleCount))
  params.set('vehicle-images', String(selection.vehicleImages))
  params.set('round-trip-miles', String(selection.roundTripMiles))
  params.set('overnight', selection.overnight ? '1' : '0')
  params.set('priority-delivery', selection.priorityDelivery ? '1' : '0')

  return params
}

const rounded = (amount: number, increment: number) =>
  Math.round(amount / increment) * increment

export const calculatePriceEstimate = (
  selection: PriceEstimateSelection,
): PriceEstimate => {
  const lines: PriceEstimate['lines'] = []
  const quoteReasons: string[] = []
  let serviceSubtotal = 0

  const addLine = (label: string, amount: number) => {
    if (amount <= 0) return
    lines.push({ label, amount })
    serviceSubtotal += amount
  }

  switch (selection.service) {
    case 'portrait':
      addLine('Porträttpaket', PRICE_ESTIMATOR.portrait.base)
      addLine(
        `Extra fotografering (${selection.extraSessionBlocks * 30} min)`,
        selection.extraSessionBlocks *
          PRICE_ESTIMATOR.portrait.extraThirtyMinutes,
      )
      addLine(
        `Extra bilder (${selection.extraImages} st)`,
        selection.extraImages * PRICE_ESTIMATOR.portrait.extraImage,
      )
      break
    case 'family':
      addLine('Familjepaket', PRICE_ESTIMATOR.family.base)
      addLine(
        `Extra fotografering (${selection.extraSessionBlocks * 30} min)`,
        selection.extraSessionBlocks *
          PRICE_ESTIMATOR.family.extraThirtyMinutes,
      )
      addLine(
        `Extra bilder (${selection.extraImages} st)`,
        selection.extraImages * PRICE_ESTIMATOR.family.extraImage,
      )
      if (selection.largeGroup) {
        addLine(
          'Större grupp, fler än 8 personer',
          PRICE_ESTIMATOR.family.largeGroupSupplement,
        )
      }
      break
    case 'wedding': {
      const packages = {
        short: [
          `Bröllopspaket ${PRICING.wedding.shortDuration}`,
          PRICE_ESTIMATOR.wedding.short,
        ],
        'half-day': [
          `Bröllopspaket ${PRICING.wedding.halfDayDuration}`,
          PRICE_ESTIMATOR.wedding.halfDay,
        ],
        'full-day': [
          `Bröllopspaket ${PRICING.wedding.fullDayDuration}`,
          PRICE_ESTIMATOR.wedding.fullDay,
        ],
      } as const
      const [label, amount] = packages[selection.weddingPackage]
      addLine(label, amount)
      addLine(
        `Extra bröllopstimmar (${selection.extraWeddingHours} st)`,
        selection.extraWeddingHours * PRICE_ESTIMATOR.wedding.extraHour,
      )
      if (selection.highlightFilm) {
        addLine(
          'Highlightfilm som tillägg',
          PRICE_ESTIMATOR.wedding.highlightFilm,
        )
      }
      break
    }
    case 'business-portraits': {
      const billedPeople = Math.min(
        selection.businessPeople,
        PRICE_ESTIMATOR.businessPortraits.quoteAbovePeople,
      )
      const peopleTwoToFive = Math.min(Math.max(billedPeople - 1, 0), 4)
      const peopleSixToTen = Math.max(billedPeople - 5, 0)

      addLine(
        'Företagsporträtt, första personen',
        PRICE_ESTIMATOR.businessPortraits.firstPerson,
      )
      addLine(
        `Person 2–5 (${peopleTwoToFive} st)`,
        peopleTwoToFive *
          PRICE_ESTIMATOR.businessPortraits.personTwoToFive,
      )
      addLine(
        `Person 6–10 (${peopleSixToTen} st)`,
        peopleSixToTen *
          PRICE_ESTIMATOR.businessPortraits.personSixToTen,
      )
      addLine(
        `Extra gruppbilder (${selection.businessGroupImages} st)`,
        selection.businessGroupImages *
          PRICE_ESTIMATOR.businessPortraits.groupImage,
      )

      if (
        selection.businessPeople >
        PRICE_ESTIMATOR.businessPortraits.quoteAbovePeople
      ) {
        quoteReasons.push('Fler än 10 företagsporträtt prissätts i offert.')
      }
      break
    }
    case 'business-activity': {
      const billedHours = Math.max(
        PRICE_ESTIMATOR.businessActivity.minimumHours,
        Math.ceil(selection.activityHours),
      )
      addLine(
        `Verksamhetsfoto (${billedHours} timmar)`,
        billedHours * PRICE_ESTIMATOR.businessActivity.hourly,
      )
      break
    }
    case 'product': {
      addLine(
        `Produktfoto, upp till ${PRICE_ESTIMATOR.product.includedImages} bilder`,
        PRICE_ESTIMATOR.product.base,
      )
      const extraImages = Math.max(
        selection.productImages - PRICE_ESTIMATOR.product.includedImages,
        0,
      )
      addLine(
        `Extra produktbilder (${extraImages} st)`,
        extraImages * PRICE_ESTIMATOR.product.extraImage,
      )
      addLine(
        `Extra uppställningar (${selection.productSetups} st)`,
        selection.productSetups * PRICE_ESTIMATOR.product.extraSetup,
      )
      if (selection.productNeedsQuote) {
        quoteReasons.push(
          'Foto på plats eller produkter över 70 × 70 × 70 cm prissätts i offert.',
        )
      }
      break
    }
    case 'vehicle': {
      addLine(
        `Bilfoto, ett fordon och ${PRICE_ESTIMATOR.vehicle.includedImages} bilder`,
        PRICE_ESTIMATOR.vehicle.base,
      )
      const extraImages = Math.max(
        selection.vehicleImages - PRICE_ESTIMATOR.vehicle.includedImages,
        0,
      )
      addLine(
        `Extra bilbilder (${extraImages} st)`,
        extraImages * PRICE_ESTIMATOR.vehicle.extraImage,
      )
      if (selection.vehicleCount > 1) {
        quoteReasons.push('Fler än ett fordon prissätts i offert.')
      }
      break
    }
  }

  if (selection.priorityDelivery) {
    const surcharge = Math.max(
      PRICE_ESTIMATOR.priorityDelivery.minimum,
      rounded(
        serviceSubtotal * PRICE_ESTIMATOR.priorityDelivery.rate,
        PRICE_ESTIMATOR.travel.roundTo,
      ),
    )
    addLine('Önskemål om prioriterad leverans', surcharge)
    quoteReasons.push('Prioriterad leverans måste bekräftas före bokning.')
  }

  if (selection.roundTripMiles > 0) {
    const travelAmount = rounded(
      selection.roundTripMiles * PRICE_ESTIMATOR.travel.perRoundTripMil,
      PRICE_ESTIMATOR.travel.roundTo,
    )
    lines.push({
      label: `Resa utanför Kungälv (${selection.roundTripMiles} mil tur och retur)`,
      amount: travelAmount,
    })
  }

  if (selection.overnight) {
    quoteReasons.push(
      'Eventuell övernattning tillkommer till faktisk kostnad efter godkännande.',
    )
  }

  return {
    total: lines.reduce((sum, line) => sum + line.amount, 0),
    lines,
    quoteReasons,
  }
}

export const formatPrice = (amount: number) =>
  `${new Intl.NumberFormat('sv-SE').format(amount)} kr`

export const formatPriceEstimateForSubmission = (
  selection: PriceEstimateSelection,
  estimate: PriceEstimate,
) => {
  const rows = [
    `Tjänst: ${ESTIMATE_SERVICE_TITLES[selection.service]}`,
    ...estimate.lines.map(
      (line) => `${line.label}: ${formatPrice(line.amount)}`,
    ),
    `Ungefärlig prisindikation: ${formatPrice(estimate.total)}`,
    PRICING.business.taxNote,
  ]

  if (estimate.quoteReasons.length > 0) {
    rows.push('Behöver bekräftas i offert:')
    rows.push(...estimate.quoteReasons.map((reason) => `- ${reason}`))
  }

  rows.push('Prisindikationen är inte en bindande offert.')

  return rows.join('\n')
}

export const getContactUrlForEstimate = (
  selection: PriceEstimateSelection,
) => `/contact/?${createPriceEstimateSearchParams(selection).toString()}`

export const getServicesUrlForEstimate = (
  selection: PriceEstimateSelection,
) => `/services/?${createPriceEstimateSearchParams(selection).toString()}#prisindikator`
