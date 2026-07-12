import React from 'react'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { Button } from '@/components/Button'
import { Download } from 'lucide-react'

interface GalleryHeaderProps {
  galleryId: string | undefined
  downloadUrl: string
}

export function GalleryHeader({ galleryId, downloadUrl }: GalleryHeaderProps) {
  const displayGalleryId = galleryId
    ? galleryId.charAt(0).toUpperCase() + galleryId.slice(1)
    : ''

  const getDownloadButton = () => (
    <Button asChild subVariant="rounded" size="lg">
      <a href={downloadUrl}>
        <Download className="mr-2 h-5 w-5" />
        Ladda ner alla
      </a>
    </Button>
  )

  return (
    <Section
      bgColor="offWhite"
      rounded="none"
      className="bg-[#f5f5f2] pb-10 pt-24"
    >
      <SectionContent>
        <div className="rounded-[1.75rem] border border-black/6 bg-white p-6 text-center shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] md:p-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <h1 className="text-center text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl">
              {displayGalleryId}
            </h1>
            {getDownloadButton()}
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-textPrimary/64">
            Bilderna laddas ner som en zip-fil. På mobil hittar du den oftast i
            Filer eller Hämtade filer och trycker på zip-filen för att packa upp
            bilderna.
          </p>
        </div>
      </SectionContent>
    </Section>
  )
}
