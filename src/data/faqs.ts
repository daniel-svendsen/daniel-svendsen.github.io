import { PRICING } from '@/config/pricing'

export interface FaqItem {
  question: string
  answer: string
}

export const generalFaqs: FaqItem[] = [
  {
    question: 'Fotograferar du utanför Kungälv?',
    answer: 'Ja, men reseersättning kan tillkomma.',
  },
  {
    question: 'Hur lång tid tar en vanlig fotosession?',
    answer:
      'En vanlig fotosession tar ofta mellan 30 minuter och 2 timmar beroende på vilken typ av fotografering det gäller och vilket upplägg vi kommer fram till.',
  },
]

export const portraitFaqs: FaqItem[] = [
  {
    question: 'Vad ingår i en porträttfotografering?',
    answer: `Porträtt Bas är ${PRICING.portrait.baseDuration} och innehåller ${PRICING.portrait.baseImages}.`,
  },
  {
    question: 'Hur lång tid tar en porträttfotografering?',
    answer:
      'Grundpaketet är 30 minuter, men upplägget kan anpassas om du behöver mer tid eller ett annat tempo.',
  },
  {
    question: 'Hur många bilder får jag?',
    answer: `${PRICING.portrait.baseImages} ingår i Porträtt Bas. Extra bilder kan köpas till för ${PRICING.portrait.extraImage}.`,
  },
  {
    question: 'Kan vi fotografera på en plats jag själv väljer?',
    answer:
      'Ja. Jag fotograferar främst utomhus, men det går också bra att fotografera hos kund eller på annan plats som passar syftet med bilderna.',
  },
  {
    question: 'Kan jag skicka referensbilder om jag vill ha en viss stil?',
    answer:
      'Ja, absolut. Min bildstil är den du ser på hemsidan, men du får gärna skicka referensbilder om du vill ha en annan känsla eller riktning.',
  },
]

export const familyFaqs: FaqItem[] = [
  {
    question: 'Vad kostar en familjefotografering?',
    answer: `Familjefotografering kostar från ${PRICING.portrait.familyPrice}. Fotograferingen är ${PRICING.portrait.familyDuration} och ${PRICING.portrait.familyImages} ingår.`,
  },
  {
    question: 'Var kan fotograferingen ske?',
    answer:
      'Jag fotograferar främst utomhus, men det går också bra hemma hos er eller på en annan plats som passar familjen och bildstilen.',
  },
  {
    question: 'Fotograferar du barn och syskon?',
    answer:
      'Ja. Vi anpassar tempot efter barnen och kan variera mellan hela familjen, syskonbilder och enskilda barnporträtt.',
  },
  {
    question: 'Erbjuder du gravid- eller nyföddfotografering?',
    answer:
      'Jag erbjuder gravidfotografering utomhus eller på plats. Jag erbjuder däremot inte nyföddfotografering som en särskild tjänst.',
  },
]

export const weddingFaqs: FaqItem[] = [
  {
    question: 'Vad brukar bröllopsfotografering kosta?',
    answer: `Priset beror framför allt på hur många timmar som ska fotograferas, om ni vill ha en kort vigsel, halvdag eller heldag, hur många bilder som ingår och hur mycket planering som behövs. Mina bröllopspaket börjar från ${PRICING.wedding.shortPrice} för ${PRICING.wedding.shortDuration} och ${PRICING.wedding.shortImages}.`,
  },
  {
    question: 'Vad ingår i kort vigsel-paketet?',
    answer: `Kort vigsel är ${PRICING.wedding.shortDuration} och innehåller ${PRICING.wedding.shortImages}. Det passar bra för mindre bröllop, rådhusvigsel eller för er som vill fokusera på de viktigaste delarna av dagen.`,
  },
  {
    question: 'Kan vi anpassa ett paket efter vår dag?',
    answer:
      'Ja. De tre paketen på hemsidan fungerar som grund, men det går bra att ändra upplägg, lägga till tid eller justera innehållet efter era behov.',
  },
  {
    question: 'Hur många bilder får vi från vårt bröllop?',
    answer: `Det beror på vilket upplägg ni väljer. Kort vigsel innehåller ${PRICING.wedding.shortImages}, halvdag ${PRICING.wedding.halfDayImages} och heldag ${PRICING.wedding.fullDayImages}.`,
  },
  {
    question: 'Hur lång är leveranstiden för bröllopsbilder?',
    answer:
      'Leveranstiden är vanligtvis 1 till 2 veckor, beroende på hur mycket jag har att göra under perioden.',
  },
  {
    question: 'Hur långt i förväg bör vi boka?',
    answer:
      'Jag rekommenderar att ni hör av er minst 2 veckor i förväg, gärna tidigare om ni vill säkra datum och ha tid för planering.',
  },
]

export const kungalvWeddingFaqs: FaqItem[] = [
  {
    question: 'Fotograferar du bröllop i Kungälv?',
    answer:
      'Ja, jag fotograferar bröllop i Kungälv och närliggande områden. Upplägget kan anpassas efter allt från en kortare vigsel till en längre dag.',
  },
  {
    question: 'Kan vi bara boka bilder på oss som par?',
    answer:
      'Ja. För vissa par passar det bäst med ett mindre upplägg där fokus ligger på porträtt, en promenad, vigseln och några bilder med familjen.',
  },
  {
    question: 'Hur lång tid behövs för promenadbilder?',
    answer:
      'Ofta räcker 10 till 20 minuter för att få en lugn serie bilder, särskilt om platsen ligger nära vigseln eller festen.',
  },
]

export const weddingWalkFaqs: FaqItem[] = [
  {
    question: 'Måste promenadbilder tas på golden hour?',
    answer:
      'Nej, dagen behöver fungera praktiskt först. Men om det finns möjlighet är mjukt kvällsljus ofta väldigt fint för naturliga porträtt.',
  },
  {
    question: 'Vad ska paret göra under promenaden?',
    answer:
      'Det räcker långt att gå nära varandra, hålla handen, stanna upp ibland och försöka vara i stunden tillsammans.',
  },
  {
    question: 'Behöver platsen vara perfekt?',
    answer:
      'Nej. En enkel stig, havskant, skogsdunge eller lugn promenadsträcka kan fungera fint om ljuset och känslan passar.',
  },
]

export const weddingTimelineFaqs: FaqItem[] = [
  {
    question: 'Hur lång tid behövs för familjebilder?',
    answer:
      'Räkna ungefär 20 till 40 minuter beroende på hur många grupper och kombinationer ni vill fotografera.',
  },
  {
    question: 'Hur lång tid behövs för bilder på paret?',
    answer:
      'Ofta räcker 20 till 30 minuter, särskilt om platsen ligger nära och ni vill ha en naturlig serie bilder.',
  },
  {
    question: 'Måste man ha first look?',
    answer:
      'Nej. First look kan vara fint, men det viktigaste är att upplägget känns rätt för er och passar dagen.',
  },
]

export const weddingPlannerFaqs: FaqItem[] = [
  {
    question: 'Vad ska en checklista för bröllopsfotografering innehålla?',
    answer:
      'Börja med de bilder som är viktigast för er: familj, parbilder, detaljer, vigsel, mingel och personer som inte får missas. Resten kan anpassas efter tid och plats.',
  },
  {
    question: 'Behöver alla par planera en exakt bildlista?',
    answer:
      'Nej, listan behöver inte vara stel. Den är mest ett sätt att fånga era prioriteringar så att fotograferingen kan kännas lugnare på dagen.',
  },
  {
    question: 'Kan checklistan användas för kort vigsel, halvdag och heldag?',
    answer:
      'Ja. Vid en kort vigsel kan ni markera det allra viktigaste, medan halvdag eller heldag ger mer plats för förberedelser, mingel, middag och kvällsbilder.',
  },
  {
    question: 'Hur lång tid tar bröllopsfotografering?',
    answer:
      'Det beror på hur mycket av dagen ni vill dokumentera. En kort vigsel kan ofta fotograferas på några timmar, medan halvdag eller heldag ger mer tid för förberedelser, porträtt, mingel, middag och fest.',
  },
  {
    question: 'När under dagen ska man ta bröllopsbilder?',
    answer:
      'Familjebilder tas ofta direkt efter vigseln när alla är samlade. Parbilder kan tas före vigseln, efter gratulationerna eller under en kort promenad senare på dagen om ljuset och schemat passar.',
  },
]

export function createFaqJsonLd(faqs: readonly FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
