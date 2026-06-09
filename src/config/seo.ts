export const SITE_URL = 'https://www.svendsenphotography.com'

export const BUSINESS = {
  id: `${SITE_URL}/#business`,
  name: 'Svendsén Photography',
  ownerName: 'Daniel Svendsén',
  email: 'daniel@svendsenphotography.com',
  logoUrl: `${SITE_URL}/LOGO.png`,
  serviceAreas: ['Kungälv', 'Stenungsund', 'Göteborg'],
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
