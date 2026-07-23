import { SITE_URL } from './siteOrigin.js'

export { SITE_URL } from './siteOrigin.js'

export const BUSINESS = {
  id: `${SITE_URL}/#business`,
  name: 'Svendsén Photography',
  ownerName: 'Daniel Svendsén',
  email: 'daniel@svendsenphotography.com',
  phone: '+46707714306',
  phoneDisplay: '070-771 43 06',
  logoUrl: `${SITE_URL}/LOGO.png`,
  serviceAreas: ['Kungälv', 'Stenungsund', 'Göteborg'],
  openingHours: 'Måndag-fredag 09:00-17:00',
  sameAs: [
    'https://www.instagram.com/svendsen_photography/',
    'https://www.facebook.com/DSvendsenphotography',
  ],
} as const

export const businessReference = {
  '@type': 'LocalBusiness',
  '@id': BUSINESS.id,
  name: BUSINESS.name,
  url: `${SITE_URL}/`,
}

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': BUSINESS.id,
  name: BUSINESS.name,
  legalName: BUSINESS.name,
  description:
    'Fotograf för bröllop, porträtt, familj, företag och event i Kungälv, Stenungsund och Göteborg.',
  url: `${SITE_URL}/`,
  logo: BUSINESS.logoUrl,
  image: BUSINESS.logoUrl,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  founder: {
    '@type': 'Person',
    name: BUSINESS.ownerName,
  },
  areaServed: BUSINESS.serviceAreas.map((name) => ({
    '@type': 'AdministrativeArea',
    name,
  })),
  sameAs: BUSINESS.sameAs,
}
