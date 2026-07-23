export const CONTACT_SERVICE_OPTIONS = [
  {
    id: 'wedding-photography',
    label: 'Bröllopsfotografering',
    asksForLocation: true,
    messagePlaceholder:
      'Berätta vilka delar av bröllopsdagen ni vill fånga, ungefärliga tider och om ni är intresserade av film som tillägg.',
  },
  {
    id: 'family-photography',
    label: 'Familjefotografering',
    asksForLocation: true,
    messagePlaceholder:
      'Berätta hur många som ska fotograferas, om barn eller hund ska vara med och vilken känsla ni önskar.',
  },
  {
    id: 'portrait-photography',
    label: 'Porträttfotografering',
    asksForLocation: true,
    messagePlaceholder:
      'Berätta hur många som ska fotograferas, hur bilderna ska användas och vilken typ av porträtt du önskar.',
  },
  {
    id: 'business-photography',
    label: 'Företagsfotografering',
    asksForLocation: true,
    messagePlaceholder:
      'Ange ungefärligt antal personer och om ni behöver personalporträtt, gruppbilder, verksamhetsbilder eller en återkommande bildbank.',
  },
  {
    id: 'event-photography',
    label: 'Eventfotografering',
    asksForLocation: true,
    messagePlaceholder:
      'Berätta vilken typ av event det gäller, ungefärligt antal gäster, tider och vilka delar eller ögonblick som är viktigast att dokumentera.',
  },
  {
    id: 'product-photography',
    label: 'Produktfotografering',
    asksForLocation: true,
    messagePlaceholder:
      'Ange ungefärligt antal produkter och färdiga bilder eller vyer, önskad bildtyp och om produkterna lämnas, skickas eller fotograferas på plats.',
  },
  {
    id: 'vehicle-photography',
    label: 'Bilfotografering',
    asksForLocation: true,
    messagePlaceholder:
      'Berätta hur många fordon det gäller, önskad bildtyp och om du har en plats i åtanke.',
  },
  {
    id: 'web-development',
    label: 'Webbutveckling / hemsida',
    asksForLocation: false,
    messagePlaceholder:
      'Berätta om det gäller en ny eller befintlig webbplats, vad den ska hjälpa besökaren med och vilka sidor eller funktioner du behöver.',
  },
  {
    id: 'other',
    label: 'Annat',
    asksForLocation: false,
    messagePlaceholder: 'Berätta lite om vad du behöver hjälp med.',
  },
] as const

export type ContactServiceId = (typeof CONTACT_SERVICE_OPTIONS)[number]['id']

export const getContactServiceOption = (serviceId: ContactServiceId) =>
  CONTACT_SERVICE_OPTIONS.find((service) => service.id === serviceId)

export const getContactServiceSubmissionValue = (
  serviceId: ContactServiceId,
) => getContactServiceOption(serviceId)?.label ?? ''
