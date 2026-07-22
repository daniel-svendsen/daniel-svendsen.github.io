export const PUBLIC_ROUTE_PATHS = {
  home: '/',
  services: '/services',
  businessPhotography: '/foretagsfotografering',
  productPhotography: '/produktfotografering',
  productCaseForPros: '/produktfotografering/for-pros',
  familyPhotography: '/familjefotografering',
  familyCaseEventladan: '/familjefotografering/eventladan-romelanda',
  portraits: '/portraits',
  weddings: '/weddings',
  contact: '/contact',
  faq: '/faq',
  webservices: '/webservices',
  guides: '/guider',
  weddingPhotoPlanner: '/guider/brollopsplanerare',
  weddingWalkGuide: '/guider/brollopsbilder-promenad',
  weddingTimelineGuide: '/guider/brollopstidslinje',
  weddingPhotographerKungalv: '/brollopsfotograf-kungalv',
  weddingCases: '/brollop',
  weddingCaseKungalv: '/brollop/kungalv',
  weddingCaseStenungsund: '/brollop/stenungsund',
  privacy: '/privacy',
} as const

export const PUBLIC_ROUTER_PATHS = Object.values(PUBLIC_ROUTE_PATHS)

export const INDEXABLE_PUBLIC_ROUTES = PUBLIC_ROUTER_PATHS.map((route) =>
  route === '/' ? route : `${route}/`,
)
