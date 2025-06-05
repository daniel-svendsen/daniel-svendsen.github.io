import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
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

export default function Services() {
  const absoluteLogoUrl = toAbsoluteUrl(SITE_CONFIG.defaultOgImage)
  const photographyPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Photographer',
    name: 'Professionell Fotograf Kungälv & Göteborg - Svendsén Photography',
    description:
      'Passionerad och erfaren fotograf i Kungälv och Göteborg. Jag specialiserar mig på att fånga äkta ögonblick för bröllop, porträtt, familj och företag med en personlig och naturlig stil.',
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
      icon: <Sparkles className="h-8 w-8 text-primary mb-3" />,
      title: 'Personlig & Unik Stil',
      description:
        'Jag strävar efter att fånga genuina ögonblick och känslor, med en ljus och naturlig bildstil som berättar er unika historia.',
    },
    {
      icon: <Heart className="h-8 w-8 text-primary mb-3" />,
      title: 'Engagemang & Passion',
      description:
        'Fotografering är min stora passion. Jag lägger ner själ och hjärta i varje uppdrag för att ni ska bli mer än nöjda med era bilder.',
    },
    {
      icon: <Award className="h-8 w-8 text-primary mb-3" />,
      title: 'Hög Kvalitet & Professionalism',
      description:
        'Ni kan förvänta er ett professionellt bemötande från första kontakt till levererade bilder av högsta tekniska och konstnärliga kvalitet.',
    },
    {
      icon: <Smile className="h-8 w-8 text-primary mb-3" />,
      title: 'Avslappnad & Rolig Upplevelse',
      description:
        'Målet är att ni ska känna er bekväma och ha roligt framför kameran. Då skapas de mest naturliga och minnesvärda bilderna!',
    },
  ]

  const photoProcessSteps = [
    {
      icon: <MessageCircle className="h-10 w-10 text-primary mb-4" />,
      title: '1. Konsultation',
      description:
        'Vi startar med ett samtal (fysiskt eller digitalt) där vi diskuterar era önskemål, idéer och visioner för fotograferingen.',
    },
    {
      icon: <Camera className="h-10 w-10 text-primary mb-4" />,
      title: '2. Bokning & Planering',
      description:
        'När ni känner er trygga bokar vi datum. Vi planerar sedan detaljerna kring plats, tid och eventuella teman.',
    },
    {
      icon: <Edit3 className="h-10 w-10 text-primary mb-4" />,
      title: '3. Fotograferingen',
      description:
        'Dags för fotografering! Vi möts upp och skapar magi tillsammans i en avslappnad och kreativ atmosfär.',
    },
    {
      icon: <Send className="h-10 w-10 text-primary mb-4" />,
      title: '4. Urval, Redigering & Leverans',
      description:
        'Efter fotograferingen gör jag ett noggrant urval och redigerar bilderna med omsorg. Era färdiga bilder levereras via ett personligt webbgalleri.',
    },
  ]

  return (
    <HelmetProvider>
      <SEO
        title="Fotograf Kungälv & Göteborg | Bröllop, Porträtt, Företag | Svendsén Photography"
        description="Professionell och engagerad fotograf i Kungälv och Göteborg. Jag erbjuder personlig fotografering för bröllop, porträtt, familj och företag. Låt oss fånga dina minnen!"
        url="https://www.svendsenphotography.com/services"
        keywords="fotograf kungälv, fotograf göteborg, bröllopsfotograf, porträttfotograf, företagsfotograf, familjefotograf göteborg, eventfotograf, fototjänster, hemsida"
        jsonLd={photographyPageJsonLd}
        image={absoluteLogoUrl}
      />
      <div className="bg-background text-textPrimary pt-16 md:pt-20">
        <Section
          bgColor="beige"
          roundedBottom="10xl"
          className="pt-12 pb-16 md:pt-20 md:pb-24 text-center"
        >
          <SectionContent>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary dark:text-white mb-6 font-poiret tracking-wider">
              Fånga Livets Vackraste Ögonblick
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Som er fotograf i Kungälv och Göteborg hjälper jag er att föreviga
              de stunder som betyder mest – från bröllopsdagens magi till
              personliga porträtt, professionella företagsbilder eller en
              helhetslösning med webbutveckling.
            </p>
            <LinkButton
              to="/contact"
              variant="default"
              size="lg"
              subVariant="rounded"
              className="font-semibold px-8"
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
          <SectionContent heading="Mer Än Bara Bilder – En Personlig Upplevelse">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {whyChooseMeList.map((item) => (
                <div
                  key={item.title}
                  className="bg-secondary dark:bg-gray-800 p-6 rounded-xl flex flex-col items-center text-center h-full"
                >
                  {item.icon}
                  <h3 className="text-xl font-semibold text-textPrimary dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-textSecondary dark:text-gray-300 text-sm flex-grow">
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
          <SectionContent heading="Upptäck Mina Fototjänster">
            <div className="space-y-16 md:space-y-20 mt-8">
              {serviceCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center py-8 ${index > 0 ? 'border-t border-gray-200 dark:border-gray-700 pt-12 md:pt-16' : ''}`}
                >
                  <div
                    className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="rounded-2xl object-cover w-full h-auto max-h-[450px] aspect-[4/3]"
                    />
                  </div>
                  <div
                    className={`prose prose-lg text-textSecondary dark:text-gray-300 max-w-none ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                  >
                    <h3 className="text-3xl font-semibold text-textPrimary dark:text-white mb-4 font-poiret">
                      {card.title}
                    </h3>
                    <p className="whitespace-pre-line">{card.description}</p>
                    {card.price && (
                      <p className="text-xl font-bold text-primary mt-4">
                        {card.price}
                      </p>
                    )}
                    {card.title === 'Bröllop' && (
                      <ul className="mt-4 space-y-2">
                        {[
                          'Konsultationsmöte före bröllopet',
                          'Fotografering enligt överenskommet paket (t.ex. 4, 8, 12 timmar)',
                          'Högupplösta, noggrant redigerade bilder',
                          'Personligt webbgalleri för visning och delning',
                          'Reseersättning inom X mil ingår',
                        ].map((item) => (
                          <li key={item} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
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
                      {card.buttonText || 'Läs Mer & Boka'}
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
          <SectionContent heading="Från Första Kontakt till Färdiga Bilder">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {photoProcessSteps.map((step) => (
                <div
                  key={step.title}
                  className="bg-secondary dark:bg-gray-800 p-6 rounded-xl text-center flex flex-col items-center h-full"
                >
                  {step.icon}
                  <h3 className="text-lg font-semibold text-textPrimary dark:text-white mb-2 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-textSecondary dark:text-gray-300 text-sm flex-grow">
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
          className="py-16 md:py-24 lg:py-28 text-center"
        >
          <SectionContent>
            <h2 className="text-3xl md:text-4xl font-bold text-textPrimary dark:text-white mb-6 font-poiret tracking-wider">
              Låt Oss Berätta Din Historia Genom Bilder
            </h2>
            <p className="text-lg text-muted-foreground dark:text-gray-300 mb-10 max-w-xl mx-auto">
              Varje bild har en historia att berätta. Jag ser fram emot att höra
              din och hjälpa dig att skapa minnen som varar för evigt.
            </p>
            <LinkButton
              to="/contact"
              variant="default"
              size="lg"
              subVariant="rounded"
              className="font-semibold px-10"
            >
              Kontakta Mig Idag
            </LinkButton>
          </SectionContent>
        </Section>
      </div>
    </HelmetProvider>
  )
}