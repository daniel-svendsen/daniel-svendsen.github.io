import React from 'react'

import { CTASection } from '@/components/CTASection'
import { InfoCard } from '@/components/InfoCard'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import SEO from '@/components/SEO'
import { caseStudyBySlug } from '@/data/cases'
import { getPageOgImage } from '@/config/pageSeo'
import {
  getImageSrc,
  type ResponsiveImageAsset,
} from '@/utils/responsiveImages'

const caseStudy = caseStudyBySlug['brollop-kungalv']

const caseImages = Object.entries(
  import.meta.glob(
    '../assets/cases/Kersti&Jakob/*.{jpg,jpeg,png}',
    {
      eager: true,
      import: 'default',
      query: '?responsive',
    },
  ),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, image]) => image as ResponsiveImageAsset)

const getImage = (index: number) => caseImages[index] ?? caseImages[0]

export default function CaseKungalv() {
  const ogImage = getPageOgImage('weddingCaseKungalv')

  return (
    <>
      <SEO
        title="Bröllop i Kungälv | Kersti & Jakob | Svendsén Photography"
        description="Bröllopsfotografering i Kungälv med promenadporträtt, vitsippor, vigsel och familjebilder i en lugn och personlig stil."
        url="https://www.svendsenphotography.com/brollop/kungalv/"
        image={ogImage.src}
        imageAlt={ogImage.alt}
        breadcrumbs={[
          { name: 'Hem', url: 'https://www.svendsenphotography.com/' },
          {
            name: 'Bröllop jag fotograferat',
            url: 'https://www.svendsenphotography.com/brollop/',
          },
          {
            name: 'Bröllop i Kungälv',
            url: 'https://www.svendsenphotography.com/brollop/kungalv/',
          },
        ]}
      />

      <main className="max-w-full overflow-hidden bg-[#f7f5f2] px-3 pb-8 pt-20 text-textPrimary sm:px-4 md:px-5 lg:px-6">
        <header className="mx-auto mb-8 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:mb-12 md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              {caseStudy?.location}
            </p>
            <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Kersti & Jakobs bröllop i Kungälv
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-textSecondary md:text-xl">
              {caseStudy?.intro}
            </p>
          </div>
        </header>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 lg:min-h-[34rem] lg:grid-cols-[1.2fr_0.8fr]">
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)] lg:h-full">
            <ResponsiveImage
              image={getImage(3)}
              alt="Bröllopspar på promenad i Kungälv"
              className="h-[24rem] w-full object-cover sm:h-[30rem] lg:h-full"
              sizes="(min-width: 1024px) 740px, 100vw"
            />
          </figure>
          <div className="grid grid-cols-1 gap-4 lg:grid-rows-2">
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
              <ResponsiveImage
                image={getImage(0)}
                alt="Detalj från bröllopet i Kungälv"
                className="h-[18rem] w-full object-cover lg:h-full"
                sizes="(min-width: 1024px) 360px, 100vw"
              />
            </figure>
            <figure className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]">
              <ResponsiveImage
                image={getImage(2)}
                alt="Vigsel och familjefoto från Kungälv"
                className="h-[18rem] w-full object-cover lg:h-full"
                sizes="(min-width: 1024px) 360px, 100vw"
              />
            </figure>
          </div>
        </section>

        <section className="mx-auto mb-14 max-w-6xl rounded-[2.25rem] bg-custom-beige px-5 py-8 shadow-[0_18px_45px_-34px_rgba(31,41,55,0.16)] md:px-8 md:py-10 lg:rounded-[3rem]">
          <div className="mb-8 max-w-3xl">
            <h2 className="mb-4 text-3xl font-semibold text-textPrimary">
              En promenad med plats för lugn
            </h2>
            <p className="text-base leading-relaxed text-textSecondary">
              När ett par vill ha bilder som känns avslappnade kan en promenad
              vara ett väldigt fint sätt att skapa rörelse utan att det blir
              stelt. Här fick platsen, ljuset och den stilla vårkänslan hjälpa
              till att forma bilderna.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <InfoCard
              title="Bildkänslan"
              description={caseStudy?.focus}
              className="bg-white p-6"
            />
            <InfoCard
              title="Upplevelsen"
              description={caseStudy?.experience}
              className="bg-white p-6"
            />
            <InfoCard
              title="Vigsel och familj"
              description="Efter promenaden dokumenterades vigseln och några bilder tillsammans med familjen som en del av samma nära berättelse."
              className="bg-white p-6"
            />
          </div>
        </section>

        <section className="mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseImages.slice(1).map((image, index) => (
            <figure
              key={getImageSrc(image)}
              className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_45px_-30px_rgba(31,41,55,0.22)]"
            >
              <ResponsiveImage
                image={image}
                alt={`Bröllopsbild från Kungälv ${index + 2}`}
                className="h-[20rem] w-full object-cover"
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                loading="lazy"
              />
            </figure>
          ))}
        </section>

        <CTASection
          className="rounded-[2.25rem] bg-white/82 lg:rounded-[3rem]"
          title="Planerar ni bröllop i Kungälv?"
          description="På den lokala tjänstesidan ser ni hur ni går vidare med en förfrågan. Paket och priser finns på den regionala bröllopssidan."
          actions={[
            {
              to: '/brollopsfotograf-kungalv/',
              label: 'Bröllopsfotografering i Kungälv',
            },
            {
              to: '/brollop/',
              label: 'Fler verkliga bröllop',
              variant: 'outline',
            },
            {
              to: '/contact/',
              label: 'Skicka förfrågan',
              variant: 'outline',
            },
          ]}
        />
      </main>
    </>
  )
}
