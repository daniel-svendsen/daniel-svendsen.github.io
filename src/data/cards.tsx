// src/data/cards.ts
import { Briefcase, Camera, Code, Users } from 'lucide-react'

import weddingImage from '../assets/pictures/wedding.jpg'
import portraitImage from '../assets/pictures/portrait.jpg'
import companyImage from '../assets/pictures/company.jpg'
// import webdevImage from '../assets/pictures/webdev.jpg';

export const homeCards = [
  {
    image: weddingImage,
    title: 'Bröllopsfotografering & Bröllopsfilm',
    description: `Ert bröllop är en unik och kärleksfull dag, och jag hjälper er att fånga alla magiska ögonblick. 
                  Jag erbjuder både bröllopsfotografering och film för att skapa tidlösa minnen av er stora dag.`,
    buttonText: 'Läs mer',
    buttonLink: '/services',
    icon: Camera,
  },
  {
    image: portraitImage,
    title: 'Porträtt & Familjefoto',
    description: `Oavsett om du behöver en professionell bild för ditt CV, sociala medier eller ett vackert familjeporträtt, 
                  hjälper jag dig att fånga naturliga och personliga bilder – utomhus eller på plats med bakgrund.`,
    buttonText: 'Läs mer',
    buttonLink: '/services',
    icon: Users,
  },
  {
    image: companyImage,
    title: 'Företag, Event & Verksamhetsfoto',
    description: `Fånga ditt företags unika karaktär med professionella bilder och filmklipp. Perfekt för konferenser, 
                  mässor, personalporträtt och marknadsföring. Har du en hobbyverksamhet eller är bilentusiast? 
                  Jag hjälper dig att skapa unika bilder för reklam och sociala medier.`,
    buttonText: 'Läs mer',
    buttonLink: '/services',
    icon: Briefcase,
  },
  {
    // image: webdevImage,
    title: 'Hemsidesutveckling & SEO',
    description: `Behöver du en modern och snabb hemsida? Jag bygger responsiva webbplatser för företag, fotografer och kreatörer, 
                  med fokus på SEO och användarvänlighet.`,
    buttonText: 'Läs mer',
    buttonLink: '/services',
    icon: Code,
  },
]

export const serviceCards = [
  {
    title: 'Porträtt & Familjefoto',
    image: portraitImage,
    description: `• 30 minuters fotografering  
                  • 5 redigerade bilder ingår  
                  • Extra bilder kan köpas till för 150 kr/st  
                  • Passar för CV, LinkedIn, sociala medier, familjeporträtt och generationsbilder`,
    price: 'Från 1200 KR',
    buttonText: 'Kontakt',
    buttonLink: '/contact',
    icon: Users,
  },
  {
    title: 'Bröllopsfotografering & Bröllopsfilm',
    image: weddingImage,
    description: `Välj mellan tre olika paket beroende på hur mycket av bröllopsdagen du vill dokumentera:  
                  
                  • Litet paket – 3 timmar fotografering, 50 redigerade bilder → 7500 kr  
                  • Mellanpaket – 6 timmar fotografering, 100 redigerade bilder → 12 000 kr  
                  • Heldag – 10 timmar fotografering, 200 redigerade bilder + kort bröllopsfilm → 18 000 kr  
                  
                  Filmalternativ:  
                  • Cinematisk bröllopsfilm (3-5 min highlight reel) → 5000 kr vid fotopaket / 8000 kr enskilt  
                  
                  Extra timmar utöver paketen → 2000 kr/timme`,
    price: 'Från 7500 KR',
    buttonText: 'Kontakt',
    buttonLink: '/contact',
    icon: Camera,
  },
  {
    title: 'Företagsfoto, Event & Verksamhetsfoto',
    image: companyImage,
    description: `• Företagsporträtt (1-5 personer) → Från 2500 kr, fler personer enligt offert  
                  • Eventfotografering – 3 timmar → 4500 kr | Heldag → 12 000 kr  
                  • Produkt- & marknadsföringsbilder → Från 350 kr/bild  
                  • Filmning för reklam & presentationer → Offert vid förfrågan`,
    price: 'Från 2500 KR',
    buttonText: 'Kontakt',
    buttonLink: '/contact',
    icon: Briefcase,
  },
  {
    title: 'Hemsidesutveckling & SEO',
    // image: webdevImage,
    description: `• Enkel landningssida → Från 4500 kr  
                  • Företagswebbplats (flersidig) → Från 8500 kr  
                  • SEO-optimering & support → Från 2000 kr/månad`,
    price: 'Från 4500 KR',
    buttonText: 'Kontakt',
    buttonLink: '/contact',
    icon: Code,
  },
]
