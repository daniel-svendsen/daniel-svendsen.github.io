import React from 'react'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { Button } from '@/components/Button'
import { Download } from 'lucide-react'

interface GalleryHeaderProps {
  galleryId: string | undefined
  downloadUrl: string
}

export function GalleryHeader({
  galleryId,
  downloadUrl,
}: GalleryHeaderProps) {
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
    <Section bgColor="beige" roundedBottom="9xl">
      <SectionContent>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-textPrimary text-center font-poiret">
            {displayGalleryId}
          </h1>
          {getDownloadButton()}
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-textSecondary">
            Bilderna laddas ner som en zip-fil. På mobil hittar du den oftast i
            Filer eller Hämtade filer och trycker på zip-filen för att packa upp
            bilderna.
          </p>
        </div>
      </SectionContent>
    </Section>
  )
}
