import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { LinkButton } from '@/components/Button'
import { serviceCards } from '../data/cards'
import {
  Award,
  Camera,
  CheckCircle,
  Edit3,
  Heart,
  MessageCircle,
  Send,
  Smile,
  Sparkles,
} from 'lucide-react'
import { SITE_CONFIG, toAbsoluteUrl } from '@/utils/utils'

const pageHeroImage =
  serviceCards.length > 0
    ? serviceCards[0].image
    : '/images/default-photo-hero.jpg'

const quickLinks = [
  {
    title: 'Porträtt',
    description:
      'För dig som vill ha personliga bilder till CV, LinkedIn, sociala medier eller eget varumärke.',
    to: '/portraits',
    buttonText: 'Se porträtt',
  },
  {
    title: 'Bröllop',
    description:
      'För er som vill dokumentera dagen med naturliga, känslosamma och tidlösa bilder.',
    to: '/weddings',
    buttonText: 'Se bröllop',
  },
  {
    title: 'Kontakt',
    description:
      'Är du osäker på vilken fotografering som passar bäst? Hör av dig så hjälper jag dig vidare.',
    to: '/contact',
    buttonText: 'Kontakta mig',
  },
]

export default function Services() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)
  const photographyPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Photographer',
    name: 'Fotograf i Göteborg och Kungälv - Svendsen Photography',
    description:
      'Professionell fotograf i Göteborg och Kungälv för bröllop, porträtt och företag med en personlig och naturlig bildstil.',
    image: pageHeroImage,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kungälv',
      addressRegion: 'Västra Götaland',
      addressCountry: 'SE',
    },
    priceRange: 'Kontakta för prisinformation',
    url: 'https://www.svendsenphotography.com/services',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Kungälv' },
      { '@type': 'AdministrativeArea', name: 'Göteborg' },
    ],
  }

  const whyChooseMeList = [
    {
      icon: <Sparkles className="mb-3 h-8 w-8 text-primary" />,
      title: 'Personlig & Unik Stil',
      description:
        'Jag strävar efter att fånga genuina ögonblick och känslor, med en ljus och naturlig bildstil som berättar er unika historia.',
    },
    {
      icon: <Heart className="mb-3 h-8 w-8 text-primary" />,
      title: 'Engagemang & Passion',
      description:
        'Fotografering är min stora passion. Jag lägger ner själ och hjärta i varje uppdrag för att ni ska bli mer än nöjda med era bilder.',
    },
    {
      icon: <Award className="mb-3 h-8 w-8 text-primary" />,
      title: 'Hög Kvalitet & Professionalism',
      description:
        'Ni kan förvänta er ett professionellt bemötande från första kontakt till levererade bilder av hög teknisk och konstnärlig kvalitet.',
    },
    {
      icon: <Smile className="mb-3 h-8 w-8 text-primary" />,
      title: 'Avslappnad & Rolig Upplevelse',
      description:
        'Målet är att ni ska känna er bekväma och ha roligt framför kameran. Då skapas de mest naturliga och minnesvärda bilderna.',
    },
  ]

  const photoProcessSteps = [
    {
      icon: <MessageCircle className="mb-4 h-10 w-10 text-primary" />,
      title: '1. Konsultation',
      description:
        'Vi startar med ett samtal där vi diskuterar era önskemål, idéer och visioner för fotograferingen.',
    },
    {
      icon: <Camera className="mb-4 h-10 w-10 text-primary" />,
      title: '2. Bokning & Planering',
      description:
        'När ni känner er trygga bokar vi datum och planerar detaljerna kring plats, tid och upplägg.',
    },
    {
      icon: <Edit3 className="mb-4 h-10 w-10 text-primary" />,
      title: '3. Fotograferingen',
      description:
        'Dags för fotografering. Vi möts upp och skapar naturliga bilder i en avslappnad och kreativ atmosfär.',
    },
    {
      icon: <Send className="mb-4 h-10 w-10 text-primary" />,
      title: '4. Urval, Redigering & Leverans',
      description:
        'Efter fotograferingen gör jag ett noggrant urval och redigerar bilderna med omsorg innan leverans.',
    },
  ]

  return (
    <HelmetProvider>
      <SEO
        title="Fotograf i Göteborg & Kungälv | Bröllop, porträtt och företag | Svendsen Photography"
        description="Svendsen Photography erbjuder professionell fotografering i Göteborg och Kungälv inom bröllop, porträtt och företag. Utforska tjänsterna och hitta rätt fotografering för dig."
        url="https://www.svendsenphotography.com/services"
        jsonLd={photographyPageJsonLd}
        image={absoluteLogoUrl}
      />
      <div className="bg-background pt-16 text-textPrimary md:pt-20">
        <Section
          bgColor="beige"
          roundedBottom="10xl"
          className="pb-16 pt-12 text-center md:pb-24 md:pt-20"
        >
          <SectionContent>
            <h1 className="mb-6 font-poiret text-4xl font-bold tracking-wider text-textPrimary dark:text-white md:text-5xl lg:text-6xl">
              Fotograf i Göteborg och Kungälv
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground dark:text-gray-300 md:text-xl">
              Jag erbjuder professionell fotografering i Göteborg och Kungälv
              för bröllop, porträtt och företag. Här hittar du tjänster för dig
              som vill ha naturliga bilder, en personlig upplevelse och ett
              resultat som håller över tid.
            </p>
            <LinkButton
              to="/contact"
              variant="default"
              size="lg"
              subVariant="rounded"
              className="px-8 font-semibold"
            >
              Boka din fotografering
            </LinkButton>
          </SectionContent>
        </Section>

        <Section
          bgColor="offWhite"
          roundedTop="9xl"
          roundedBottom="9xl"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Hitta rätt fotografering för dig">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {quickLinks.map((item) => (
                <InfoCard
                  key={item.title}
                  centered
                  className="dark:bg-gray-800"
                >
                  <h3 className="mb-3 text-xl font-semibold text-textPrimary">
                    {item.title}
                  </h3>
                  <p className="mb-5 leading-relaxed text-textSecondary dark:text-gray-300">
                    {item.description}
                  </p>
                  <LinkButton
                    to={item.to}
                    variant="outline"
                    size="md"
                    subVariant="rounded"
                    className="font-semibold"
                  >
                    {item.buttonText}
                  </LinkButton>
                </InfoCard>
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section
          bgColor="offWhite"
          roundedTop="9xl"
          roundedBottom="9xl"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Mer än bara bilder - en personlig upplevelse">
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseMeList.map((item) => (
                <div
                  key={item.title}
                  className="flex h-full flex-col items-center rounded-xl bg-secondary p-6 text-center dark:bg-gray-800"
                >
                  {item.icon}
                  <h3 className="mb-2 text-xl font-semibold text-textPrimary dark:text-white">
                    {item.title}
                  </h3>
                  <p className="flex-grow text-sm text-textSecondary dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section
          bgColor="beige"
          roundedTop="9xl"
          roundedBottom="9xl"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Upptäck mina fototjänster">
            <div className="mt-8 space-y-16 md:space-y-20">
              {serviceCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`grid grid-cols-1 items-center gap-8 py-8 md:grid-cols-2 lg:gap-12 ${index > 0 ? 'border-t border-gray-200 pt-12 dark:border-gray-700 md:pt-16' : ''}`}
                >
                  <div
                    className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="aspect-[4/3] max-h-[450px] w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div
                    className={`prose prose-lg max-w-none text-textSecondary dark:text-gray-300 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                  >
                    <h3 className="mb-4 font-poiret text-3xl font-semibold text-textPrimary dark:text-white">
                      {card.title}
                    </h3>
                    <p className="whitespace-pre-line">{card.description}</p>
                    {card.price && (
                      <p className="mt-4 text-xl font-bold text-primary">
                        {card.price}
                      </p>
                    )}
                    {card.title === 'Bröllopsfotografering & Bröllopsfilm' && (
                      <ul className="mt-4 space-y-2">
                        {[
                          'Konsultationsmöte före bröllopet',
                          'Fotografering enligt överenskommet paket',
                          'Högupplösta, noggrant redigerade bilder',
                          'Personligt webbgalleri för visning och delning',
                        ].map((item) => (
                          <li key={item} className="flex items-start">
                            <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <LinkButton
                      to={card.buttonLink || '/contact'}
                      variant="outline"
                      size="md"
                      subVariant="rounded"
                      className="mt-6 font-semibold"
                    >
                      {card.buttonText || 'Läs mer & boka'}
                    </LinkButton>
                  </div>
                </div>
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section
          bgColor="offWhite"
          roundedTop="9xl"
          roundedBottom="9xl"
          className="py-12 md:py-20 lg:py-24"
        >
          <SectionContent heading="Från första kontakt till färdiga bilder">
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {photoProcessSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex h-full flex-col items-center rounded-xl bg-secondary p-6 text-center dark:bg-gray-800"
                >
                  {step.icon}
                  <h3 className="mb-2 mt-2 text-lg font-semibold text-textPrimary dark:text-white">
                    {step.title}
                  </h3>
                  <p className="flex-grow text-sm text-textSecondary dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section
          bgColor="beige"
          roundedTop="10xl"
          className="py-16 text-center md:py-24 lg:py-28"
        >
          <SectionContent>
            <CTASection
              title="Låt oss berätta din historia genom bilder"
              description="Varje bild har en historia att berätta. Jag ser fram emot att höra din och hjälpa dig att skapa minnen som varar över tid."
              actions={[{ to: '/contact', label: 'Kontakta mig idag' }]}
            />
          </SectionContent>
        </Section>
      </div>
    </HelmetProvider>
  )
}
