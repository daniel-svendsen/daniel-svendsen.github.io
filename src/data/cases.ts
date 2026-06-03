export interface CaseStudySummary {
  slug: string
  title: string
  location: string
  heroLabel: string
  intro: string
  focus: string
  experience: string
  tags: string[]
  imageHint: string
}

export const caseStudies: CaseStudySummary[] = [
  {
    slug: 'brollop-kungalv',
    title: 'Kersti & Jakob',
    location: 'Kungälv',
    heroLabel: 'Promenad, vitsippor och vigsel',
    intro:
      'Kersti och Jakob ville ha ett enkelt och nära upplägg med fokus på en promenad i vårmiljö, vigseln och några bilder tillsammans med familjen. Promenaden gav plats för bilder som kändes naturliga, stillsamma och personliga.',
    focus:
      'Den lugna promenaden blev en fin ram för porträtten. Jag kunde arbeta följsamt runt paret, hitta olika vinklar och låta platsen bli en naturlig del av bilderna.',
    experience:
      'Upplägget passade bra för ett par som ville ha fina bröllopsbilder utan att känna sig för uppställda framför kameran.',
    tags: ['Promenadporträtt', 'Vitsippor', 'Vigsel och familj'],
    imageHint: 'bilder från en vårpromenad nära Kungälv',
  },
  {
    slug: 'brollop-stenungsund',
    title: 'Rebecka & Aron',
    location: 'Stenungsund',
    heroLabel: 'Heldag på Villa Vanahem',
    intro:
      'Rebecka och Aron hade ett heldagsupplägg i Stenungsund med first look, porträtt, vigsel, mingel, middag och fest. Under dagen fanns också en kortare stund där paret fick kliva undan och landa i några lugna bilder tillsammans.',
    focus:
      'Bilderna vid vassen och minglet från kvällen gav två fina sidor av dagen: det stilla mellan paret och den levande stämningen bland gästerna.',
    experience:
      'Ett heldagsupplägg gör det möjligt att fånga både de planerade delarna och de små ögonblicken som händer när dagen får röra sig naturligt.',
    tags: ['Heldag', 'First look', 'Mingel och fest'],
    imageHint: 'bilder från Villa Vanahem och kvällen i Stenungsund',
  },
]

export const caseStudyBySlug = caseStudies.reduce<Record<string, CaseStudySummary>>(
  (acc, caseStudy) => {
    acc[caseStudy.slug] = caseStudy
    return acc
  },
  {},
)
