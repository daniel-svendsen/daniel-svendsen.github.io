import React, { useState } from 'react'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { Button, LinkButton } from '@/components/Button'
import { ArrowLeft, ClipboardCopy, Pencil, Trash2, Upload } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { apiUrl } from '@/admin/utils/apiUrl'

interface AdminHeaderProps {
  galleryId: string | undefined
  likedImageKeys: string[]
  onSelectFiles: () => void
  isUploading: boolean
  uploadProgress: number
  actionError?: string
  onClearGallery: () => void
}

export function AdminHeader({
  galleryId,
  likedImageKeys,
  onSelectFiles,
  isUploading,
  uploadProgress,
  actionError,
  onClearGallery,
}: AdminHeaderProps) {
  const navigate = useNavigate()
  const [copyStatus, setCopyStatus] = useState('')

  const handleCopyLikes = () => {
    if (likedImageKeys.length === 0) {
      setCopyStatus('Inga bilder är gillade.')
      setTimeout(() => setCopyStatus(''), 3000)
      return
    }
    const likedFileNames = likedImageKeys.map((key) => key.split('/').pop())
    navigator.clipboard.writeText(likedFileNames.join(', '))
    setCopyStatus(`Kopierade ${likedFileNames.length} filnamn!`)
    setTimeout(() => setCopyStatus(''), 3000)
  }

  const handleRenameGallery = async () => {
    if (!galleryId) return
    const newGalleryName = prompt('Ange det nya gallerinamnet:', galleryId)
    if (!newGalleryName || newGalleryName.trim() === '') {
      alert('Namnet får inte vara tomt.')
      return
    }
    const sanitizedNewName = newGalleryName.trim().replace(/\s+/g, '-')
    if (sanitizedNewName === galleryId) {
      alert('Avbrutet. Det nya namnet är samma som det gamla.')
      return
    }
    try {
      const response = await fetch(apiUrl('rename-gallery'), {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oldGalleryName: galleryId,
          newGalleryName: sanitizedNewName,
        }),
      })
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          errorData.error || 'Misslyckades med att byta namn på galleriet.',
        )
      }
      alert(`Galleriet har bytt namn till "${sanitizedNewName}"`)
      navigate(`/admin/gallery/${sanitizedNewName}`)
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Ett okänt fel uppstod.'
      alert(`Ett fel uppstod vid namnbytet: ${message}`)
    }
  }

  return (
    <Section bgColor="beige" roundedBottom="9xl">
      <SectionContent>
        <h1 className="text-2xl sm:text-3xl font-bold text-textPrimary font-poiret text-center">
          Hantera: {galleryId}
        </h1>
        <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-4">
          <LinkButton variant="secondary" subVariant="rounded" to="/admin">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">
              Tillbaka till alla gallerier
            </span>
            <span className="sm:hidden">Tillbaka</span>
          </LinkButton>
          <div className="flex-shrink-0 flex items-center justify-center gap-2 flex-wrap">
            <Button
              onClick={handleRenameGallery}
              subVariant="rounded"
              size="md"
              variant="outline"
            >
              <Pencil className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Byt namn</span>
            </Button>
            <Button
              onClick={onSelectFiles}
              disabled={isUploading}
              subVariant="rounded"
              size="md"
            >
              <Upload className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">
                {isUploading ? 'Laddar...' : 'Lägg till'}
              </span>
            </Button>
            <Button
              onClick={handleCopyLikes}
              disabled={likedImageKeys.length === 0}
              subVariant="rounded"
              size="md"
            >
              <ClipboardCopy className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">
                Kopiera {likedImageKeys.length}
              </span>
            </Button>
            <Button
              onClick={onClearGallery}
              subVariant="rounded"
              size="md"
              variant="destructive"
            >
              <Trash2 className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Töm Galleri</span>
            </Button>
          </div>
        </div>
        {isUploading && (
          <div className="mt-4">
            <div className="w-full bg-secondary rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        )}
        {copyStatus && (
          <p className="text-center text-sm text-success mt-2">{copyStatus}</p>
        )}
        {actionError && (
          <p className="text-center text-sm text-destructive mt-2">
            {actionError}
          </p>
        )}
      </SectionContent>
    </Section>
  )
}