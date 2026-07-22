import caseKungalvImage from '@/assets/cases/Kersti&Jakob/sceniskbildpåparunderenek.jpg'
import caseStenungsundImage from '@/assets/cases/Rebecka&Aron/paretihogvass.jpg'
import timelineImage from '@/assets/cases/Rebecka&Aron/detaljbildparethollerihander.jpg'
import kungalvServiceImage from '@/assets/cases/brollopkungalvbilder/DSC03136.jpg'
import weddingPortfolioImage from '@/assets/carousel/DSC09588.jpg'
import faqImage from '@/assets/pictures/family.jpg'
import servicesImage from '@/assets/pictures/company.jpg'
import contactImage from '@/assets/pictures/portrait2.jpg'
import homeImage from '@/assets/pictures/portrait.jpg'
import webservicesImage from '@/assets/webdev-optimized.jpg'
import guidesImage from '@/assets/weddings/DSC09186.jpg'
import portraitsImage from '@/assets/portraits/portraits-3.jpg'
import familyPhotographyImage from '@/assets/familyphoto/familjefotografering-eventladan-kungalv.jpg'
import familyCaseEventladanImage from '@/assets/cases/EventladanPortraitsandFamily/familjefotografering-eventladan-romelanda.jpg'
import plannerImage from '@/assets/weddings/DSC09579.jpg'
import walkGuideImage from '@/assets/cases/Kersti&Jakob/parpåpromenad.jpg'
import weddingsImage from '@/assets/weddings/DSC09134.jpg'
import { PUBLIC_ROUTE_PATHS } from '@/config/publicRoutes'
import { toAbsoluteUrl } from '@/utils/utils'

type PublicRouteKey = keyof typeof PUBLIC_ROUTE_PATHS

interface PageOgImageSource {
  src: string
  alt: string
}

export type PageOgImage = PageOgImageSource

const PAGE_OG_IMAGE_SOURCES = {
  home: {
    src: homeImage,
    alt: 'Porträttfotografering av Svendsén Photography',
  },
  services: {
    src: servicesImage,
    alt: 'Företagsfotografering som exempel på en av fototjänsterna',
  },
  familyPhotography: {
    src: familyPhotographyImage,
    alt: 'Familjefotografering på Eventladan i Romelanda nära Kungälv',
  },
  familyCaseEventladan: {
    src: familyCaseEventladanImage,
    alt: 'Familj fotograferad på Eventladan i Romelanda nära Kungälv',
  },
  portraits: {
    src: portraitsImage,
    alt: 'Naturligt porträtt fotograferat utomhus',
  },
  weddings: {
    src: weddingsImage,
    alt: 'Bröllopspar fotograferat av Svendsén Photography',
  },
  contact: {
    src: contactImage,
    alt: 'Porträtt som exempel inför bokning av fotografering',
  },
  faq: {
    src: faqImage,
    alt: 'Familjefotografering utomhus',
  },
  webservices: {
    src: webservicesImage,
    alt: 'Exempel på webbdesign och webbutveckling',
  },
  guides: {
    src: guidesImage,
    alt: 'Bröllopsbild som introduktion till fotograferingsguiderna',
  },
  weddingPhotoPlanner: {
    src: plannerImage,
    alt: 'Bröllopsdetaljer att planera i bildchecklistan',
  },
  weddingWalkGuide: {
    src: walkGuideImage,
    alt: 'Bröllopspar på promenad',
  },
  weddingTimelineGuide: {
    src: timelineImage,
    alt: 'Brudpar som håller varandra i handen under bröllopsdagen',
  },
  weddingPhotographerKungalv: {
    src: kungalvServiceImage,
    alt: 'Bröllopsfotografering i Kungälv',
  },
  weddingCases: {
    src: weddingPortfolioImage,
    alt: 'Urval från fotograferade bröllop',
  },
  weddingCaseKungalv: {
    src: caseKungalvImage,
    alt: 'Kersti och Jakob på promenad i Kungälv',
  },
  weddingCaseStenungsund: {
    src: caseStenungsundImage,
    alt: 'Rebecka och Aron vid vassen i Stenungsund',
  },
  privacy: {
    src: '/LOGO.png',
    alt: 'Svendsén Photography logotyp',
  },
} satisfies Record<PublicRouteKey, PageOgImageSource>

export function getPageOgImage(page: PublicRouteKey): PageOgImage {
  const image = PAGE_OG_IMAGE_SOURCES[page]
  const absoluteSrc = toAbsoluteUrl(image.src)

  if (!absoluteSrc) {
    throw new Error(`Missing OG image for public route: ${page}`)
  }

  return {
    src: absoluteSrc,
    alt: image.alt,
  }
}
