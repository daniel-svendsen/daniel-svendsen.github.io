import React, { useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import { LinkButton } from '@/components/Button'
import { ResponsiveImage } from '@/components/ResponsiveImage'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { useShuffledImages } from '@/hooks/useShuffleImages'
import { type ResponsiveImageAsset } from '@/utils/responsiveImages'

const allHeroImageUrls = Object.values(
  import.meta.glob('../assets/herosection/*.{jpg,jpeg,png}', {
    eager: true,
    import: 'default',
    query: '?responsive-small',
  }),
) as ResponsiveImageAsset[]

export default function HeroSection() {
  const imagePool = useMemo(() => {
    return allHeroImageUrls.length > 0 ? allHeroImageUrls : []
  }, [])

  const shuffledImages = useShuffledImages(imagePool)

  const heroImage = shuffledImages[0] ?? imagePool[0]
  const supportingImage = shuffledImages[1] ?? imagePool[1] ?? heroImage
  const detailImage = shuffledImages[2] ?? imagePool[2] ?? supportingImage

  if (!heroImage || !supportingImage || !detailImage) {
    return null
  }

  return (
    <Section
      bgColor="offWhite"
      className="min-h-screen overflow-hidden bg-[#f5f5f2] pt-24 text-textPrimary md:pt-28"
      aria-labelledby="hero-heading"
    >
      <SectionContent className="grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-12 md:grid-cols-[0.92fr_1.08fr] md:gap-14 lg:gap-20">
        <motion.div
          className="order-1 max-w-2xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-textSecondary">
            Fotograf i Kungälv, Göteborg & Stenungsund
          </p>
          <h1
            id="hero-heading"
            className="mb-6 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-tight text-textPrimary sm:text-6xl lg:text-7xl"
          >
            Svendsén
            <span className="block font-poiret font-bold tracking-[0.06em]">
              Photography
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-8 text-textPrimary/72 sm:text-xl">
            Stillsamma, naturliga bilder för bröllop, porträtt, familj och
            företag. Skapat med lugn närvaro, tydlig riktning och känsla för det
            som faktiskt betyder något.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton
              to="/services/"
              variant="default"
              size="lg"
              subVariant="rounded"
              className="px-7"
            >
              Se tjänster
            </LinkButton>
            <LinkButton
              to="/contact/"
              variant="link"
              size="lg"
              className="gap-2 px-0 text-textPrimary no-underline hover:text-textPrimary/70"
            >
              Kontakta mig
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LinkButton>
          </div>
        </motion.div>

        <motion.div
          className="order-2"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-[0.72fr_1fr] items-end gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="overflow-hidden rounded-[1.35rem] bg-white shadow-[0_28px_70px_-52px_rgba(31,41,55,0.65)]">
                <ResponsiveImage
                  image={supportingImage}
                  alt="Naturligt porträtt med mjukt ljus"
                  sizes="(min-width: 768px) 23vw, 40vw"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <div className="rounded-[1.35rem] border border-black/6 bg-white/78 p-5 shadow-[0_24px_60px_-52px_rgba(31,41,55,0.35)] backdrop-blur">
                <p className="text-sm font-medium leading-6 text-textPrimary/70">
                  Bröllop, porträtt, familj, företag och event med
                  personlig känsla.
                </p>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_36px_90px_-54px_rgba(31,41,55,0.7)]">
                <ResponsiveImage
                  image={heroImage}
                  alt="Stämningsfull fotografering i naturligt ljus"
                  sizes="(min-width: 768px) 30vw, 58vw"
                  className="aspect-[5/6] h-full w-full object-cover"
                />
              </div>
              <div className="ml-auto hidden w-3/4 overflow-hidden rounded-[1.25rem] bg-white shadow-[0_24px_60px_-48px_rgba(31,41,55,0.55)] sm:block">
                <ResponsiveImage
                  image={detailImage}
                  alt="Detaljbild från fotografering"
                  sizes="(min-width: 768px) 30vw, 0px"
                  className="aspect-[16/10] h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </SectionContent>
    </Section>
  )
}
