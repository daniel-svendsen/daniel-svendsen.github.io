import React from 'react'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { Button } from '@/components/Button'
import { Download, LoaderCircle } from 'lucide-react'

type DownloadStatus = 'idle' | 'downloading' | 'zipping' | 'error' | 'success'

interface GalleryHeaderProps {
  galleryId: string | undefined
  downloadStatus: DownloadStatus
  downloadMessage: string
  onDownloadAll: () => void
}

export function GalleryHeader({
  galleryId,
  downloadStatus,
  downloadMessage,
  onDownloadAll,
}: GalleryHeaderProps) {
  const displayGalleryId = galleryId
    ? galleryId.charAt(0).toUpperCase() + galleryId.slice(1)
    : ''

  const isDownloading =
    downloadStatus === 'downloading' || downloadStatus === 'zipping'

  const getDownloadButton = () => {
    if (isDownloading) {
      return (
        <Button subVariant="rounded" size="lg" disabled>
          <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
          Arbetar...
        </Button>
      )
    }
    return (
      <Button onClick={onDownloadAll} subVariant="rounded" size="lg">
        <Download className="mr-2 h-5 w-5" />
        Ladda ner alla
      </Button>
    )
  }

  return (
    <Section bgColor="beige" roundedBottom="9xl">
      <SectionContent>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-textPrimary text-center font-poiret">
            {displayGalleryId}
          </h1>
          {getDownloadButton()}
        </div>
        <div className="text-center mt-4 min-h-[20px]">
          {downloadStatus !== 'idle' && (
            <p
              className={`text-sm mt-2 ${
                downloadStatus === 'error'
                  ? 'text-destructive'
                  : 'text-textSecondary'
              }`}
            >
              {downloadMessage}
            </p>
          )}
        </div>
      </SectionContent>
    </Section>
  )
}