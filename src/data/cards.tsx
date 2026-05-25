import { Briefcase, Camera, Code, Users } from 'lucide-react'

import weddingImage from '../assets/pictures/wedding.jpg?responsive'
import portraitImage from '../assets/pictures/portrait.jpg?responsive'
import companyImage from '../assets/pictures/company.jpg?responsive'
import webdevImage from '../assets/webdev-optimized.jpg?responsive'

export const homeCards = [
  {
    image: weddingImage,
    title: 'Bröllopsfoto & Film',
    description:
      'Fånga er kärleksdag med tidlösa bilder och film. Jag skapar minnen som varar livet ut.',
    buttonText: 'Läs mer',
    buttonLink: '/services/',
    icon: Camera,
  },
  {
    image: portraitImage,
    title: 'Porträtt & Familj',
    description:
      'Personliga porträtt för CV, sociala medier eller vackra familjebilder, utomhus eller på plats.',
    buttonText: 'Läs mer',
    buttonLink: '/services/',
    icon: Users,
  },
  {
    image: companyImage,
    title: 'Företag & Event',
    description:
      'Professionella bilder och film som lyfter ert varumärke, event eller hobbyverksamhet.',
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
    title: 'Porträtt & Familjefoto',
    image: portraitImage,
    description: `30 minuters fotografering
5 redigerade bilder ingår
Extra bilder kan köpas till för 150 kr/st
Passar för CV, LinkedIn, sociala medier, familjeporträtt och generationsbilder`,
    price: 'Från 1200 kr',
    buttonText: 'Kontakt',
    buttonLink: '/contact/',
    icon: Users,
  },
  {
    title: 'Bröllopsfotografering & Bröllopsfilm',
    image: weddingImage,
    description: `Välj mellan tre olika paket beroende på hur mycket av bröllopsdagen du vill dokumentera
Litet paket - 3 timmar fotografering, 50 redigerade bilder -> 7500 kr
Mellanpaket - 6 timmar fotografering, 100 redigerade bilder -> 12 000 kr
Heldag - 10 timmar fotografering, 200 redigerade bilder + kort bröllopsfilm -> 18 000 kr
Filmalternativ
Cinematisk bröllopsfilm (3-5 min highlight reel) -> 5000 kr vid fotopaket / 8000 kr enskilt
Extra timmar utöver paketen -> 2000 kr/timme`,
    price: 'Från 7500 kr',
    buttonText: 'Kontakt',
    buttonLink: '/contact/',
    icon: Camera,
  },
  {
    title: 'Företagsfoto, Event & Verksamhetsfoto',
    image: companyImage,
    description: `Företagsporträtt (1-5 personer) -> från 2500 kr, fler personer enligt offert
Eventfotografering - 3 timmar -> 4500 kr | heldag -> 12 000 kr
Produkt- och marknadsföringsbilder -> från 350 kr/bild
Filmning för reklam och presentationer -> offert vid förfrågan`,
    price: 'Från 2500 kr',
    buttonText: 'Kontakt',
    buttonLink: '/contact/',
    icon: Briefcase,
  },
  {
    title: 'Hemsidesutveckling & SEO',
    image: webdevImage,
    description: `Enkel landningssida -> från 4500 kr
Företagswebbplats (flersidig) -> från 8500 kr
SEO-optimering och support -> från 2000 kr/månad
Helhetspaket med fotografering och hemsida -> offert vid förfrågan`,
    price: 'Från 4500 kr',
    buttonText: 'Kontakt',
    buttonLink: '/contact/',
    icon: Code,
  },
]
