import { Briefcase, Camera, Code, Users } from 'lucide-react'

import weddingImage from '../assets/pictures/wedding.jpg?responsive'
import portraitImage from '../assets/pictures/portrait.jpg?responsive'
import familyImage from '../assets/familyphoto/familjefotografering-eventladan-kungalv.jpg?responsive'
import companyImage from '../assets/pictures/company.jpg?responsive'
import webdevImage from '../assets/webdev-optimized.jpg?responsive'
import { PRICING } from '@/config/pricing'

export const homeCards = [
  {
    image: weddingImage,
    title: 'Bröllopsfoto',
    description:
      'Fånga er dag med tidlösa bilder och ett lugnt upplägg. Film kan läggas till vid behov.',
    buttonText: 'Läs mer',
    buttonLink: '/weddings/',
    icon: Camera,
  },
  {
    image: portraitImage,
    title: 'Porträtt & Familj',
    description:
      'Personliga porträtt för CV, sociala medier eller vackra familjebilder, utomhus eller på plats.',
    buttonText: 'Se alternativen',
    buttonLink: '/services/',
    icon: Users,
  },
  {
    image: companyImage,
    title: 'Företag, Event & Hobby',
    description:
      'Professionella bilder för företag, event, verksamheter och andra personliga sammanhang.',
    buttonText: 'Läs mer',
    buttonLink: '/services/',
    icon: Briefcase,
  },
  {
    image: webdevImage,
    title: 'Hemsidor & SEO',
    description:
      'Moderna, snabba och SEO-optimerade hemsidor för företag och kreatörer. Även helhetspaket.',
    buttonText: 'Läs mer',
    buttonLink: '/webservices/',
    icon: Code,
  },
]

export const serviceCards = [
  {
    title: 'Porträttfotografering',
    image: portraitImage,
    description: `30 minuters fotografering
5 redigerade bilder ingår
Extra bilder kan köpas till för ${PRICING.portrait.extraImage}
Passar för CV, LinkedIn, sociala medier och personligt varumärke`,
    price: PRICING.portrait.baseFrom,
    buttonText: 'Se porträttfotografering',
    buttonLink: '/portraits/',
    icon: Users,
  },
  {
    title: 'Familjefotografering',
    image: familyImage,
    description: `${PRICING.portrait.familyDuration} fotografering
${PRICING.portrait.familyImages} ingår
Extra bilder kan köpas till för ${PRICING.portrait.extraImage}
Passar för familjer, barn, syskon och gravidporträtt utomhus eller på plats`,
    price: PRICING.portrait.familyFrom,
    buttonText: 'Se familjefotografering',
    buttonLink: '/familjefotografering/',
    icon: Users,
  },
  {
    title: 'Bröllopsfotografering',
    image: weddingImage,
    description: `Välj mellan tre olika paket beroende på hur mycket av bröllopsdagen du vill dokumentera
Kort vigsel - ${PRICING.wedding.shortDuration} fotografering, ${PRICING.wedding.shortImages} -> ${PRICING.wedding.shortPrice}
Halvdag - ${PRICING.wedding.halfDayDuration} fotografering, ${PRICING.wedding.halfDayImages} -> ${PRICING.wedding.halfDayPrice}
Heldag - ${PRICING.wedding.fullDayDuration} fotografering, ${PRICING.wedding.fullDayImages} -> ${PRICING.wedding.fullDayPrice}
Filmalternativ
Highlightfilm (3-5 min) -> ${PRICING.wedding.highlightFilmWithPhoto} vid fotopaket / ${PRICING.wedding.highlightFilmStandalone} enskilt
Extra timmar utöver paketen -> ${PRICING.wedding.extraHour}`,
    price: PRICING.wedding.shortFrom,
    buttonText: 'Se bröllopspaket',
    buttonLink: '/weddings/',
    icon: Camera,
  },
  {
    title: 'Företagsfoto, Event & Verksamhetsfoto',
    image: companyImage,
    description: `Företagsporträtt -> från ${PRICING.business.portraitFrom} ${PRICING.business.taxNote}, fler personer enligt offert
Eventfotografering -> från ${PRICING.business.eventFrom} ${PRICING.business.taxNote} | heldag från ${PRICING.business.eventFullDayFrom} ${PRICING.business.taxNote}
Verksamhets- och hobbyfoto för miljöer, föreningar och personliga projekt -> från ${PRICING.business.activityHourlyFrom} ${PRICING.business.taxNote}
Bilfotografering i Kungälv erbjuds i mindre skala -> offert efter upplägg
Produktfotografering -> startpaket från ${PRICING.business.productStartFrom} ${PRICING.business.taxNote}, extra bilder från ${PRICING.business.productExtraImageFrom}
Filmning för reklam och presentationer -> offert vid förfrågan`,
    price: `Från ${PRICING.business.portraitFrom}`,
    buttonText: 'Be om offert',
    buttonLink: '/contact/',
    icon: Briefcase,
  },
  {
    title: 'Hemsidesutveckling & SEO',
    image: webdevImage,
    description: `Enkel landningssida -> från ${PRICING.web.landingPageFrom}
Företagswebbplats (flersidig) -> från ${PRICING.web.websiteFrom}
SEO-optimering och support -> från ${PRICING.web.seoSupportFrom}
Helhetspaket med fotografering och hemsida -> offert vid förfrågan`,
    price: `Från ${PRICING.web.landingPageFrom}`,
    buttonText: 'Se webbtjänster',
    buttonLink: '/webservices/',
    icon: Code,
  },
]
