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
  {
    slug: 'brollop-pernmyrs-gard-kungalv',
    title: 'Hannes & Helena',
    location: 'Pernmyrs Gård, Kungälv',
    heroLabel: 'Promenad, borgerlig vigsel och middag i ladan',
    intro:
      'Hannes och Helena hörde av sig en till två månader före bröllopet och önskade en kortare dokumentation av minglet, den borgerliga vigseln och en stund under middagen. Innan gästerna kom tog vi en promenad på gården och skapade en lugn stund för porträtt av bara dem.',
    focus:
      'Porträtten togs längs gårdens ängar och promenadstigar innan resten av dagen började. Därefter kunde jag följa minglet och vigseln på ängen utan att paret behövde lämna gästerna för en längre fotografering.',
    experience:
      'Ett enkelt och personligt upplägg som fångade både paret, platsen och stämningen. Hannes och Helena var avslappnade framför kameran och mycket tacksamma för bilderna efteråt.',
    tags: ['Kortare upplägg', 'Borgerlig vigsel', 'Mingel och middag'],
    imageHint: 'bilder från Pernmyrs Gård i Kungälv',
  },
]

export const caseStudyBySlug = caseStudies.reduce<Record<string, CaseStudySummary>>(
  (acc, caseStudy) => {
    acc[caseStudy.slug] = caseStudy
    return acc
  },
  {},
)
