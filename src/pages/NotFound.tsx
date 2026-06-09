import React from 'react'

import { LinkButton } from '@/components/Button'
import SEO from '@/components/SEO'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { SITE_URL } from '@/config/seo'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Sidan hittades inte | Svendsén Photography"
        description="Sidan du söker finns inte eller har flyttats."
        url={`${SITE_URL}/404/`}
        noIndex
      />
      <main className="min-h-screen bg-[#f7f5f2] pt-20 text-textPrimary">
        <Section
          bgColor="beige"
          roundedTop="10xl"
          roundedBottom="10xl"
          className="mx-3 overflow-hidden sm:mx-4 md:mx-5 lg:mx-6"
        >
          <SectionContent className="py-20 text-center md:py-28">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-textSecondary">
              Fel 404
            </p>
            <h1 className="mb-5 text-4xl font-bold md:text-5xl">
              Sidan hittades inte
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-textSecondary">
              Länken kan vara gammal eller adressen felskriven. Du kan gå
              tillbaka till startsidan eller se mina fotograferingstjänster.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <LinkButton to="/" size="lg" subVariant="rounded">
                Till startsidan
              </LinkButton>
              <LinkButton
                to="/services/"
                variant="outline"
                size="lg"
                subVariant="rounded"
              >
                Se tjänster
              </LinkButton>
            </div>
          </SectionContent>
        </Section>
      </main>
    </>
  )
}
