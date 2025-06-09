import React, { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { Upload } from 'lucide-react'
import { useFileUpload } from '@/admin/hooks/useFileUpload'

const inputClasses =
  'block w-full rounded-md border border-borderColor bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2'

type CreateGalleryFormProps = {
  galleries: string[]
  onUploadSuccess: () => void
}

export function CreateGalleryForm({
  galleries,
  onUploadSuccess,
}: CreateGalleryFormProps) {
  const [galleryName, setGalleryName] = useState('')
  const [files, setFiles] = useState<FileList | null>(null)
  const [formError, setFormError] = useState('')
  const { uploadFiles, status, error: uploadError } = useFileUpload()
  const formRef = React.useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormError('')
    if (!files || files.length === 0 || !galleryName) {
      setFormError('Välj ett gallerinamn och minst en fil.')
      return
    }
    await uploadFiles(files, galleryName, onUploadSuccess)
  }

  useEffect(() => {
    if (status === 'success') {
      setGalleryName('')
      setFiles(null)
      formRef.current?.reset()
    }
  }, [status])

  const isUploading = status === 'uploading'

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto grid grid-cols-1 gap-6 bg-white p-8 rounded-2xl shadow-lg"
    >
      <div>
        <label
          htmlFor="galleryName"
          className="block text-sm font-medium mb-1.5 text-textPrimary"
        >
          Välj befintligt eller skriv nytt gallerinamn
        </label>
        <input
          id="galleryName"
          type="text"
          list="gallery-list"
          value={galleryName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGalleryName(e.target.value.trim().replace(/\s+/g, '-'))
          }
          placeholder="t.ex. Andersson-Brollop-2025"
          required
          className={inputClasses}
          disabled={isUploading}
        />
        <datalist id="gallery-list">
          {galleries.map((g) => (
            <option key={g} value={g.replace(/\/$/, '')} />
          ))}
        </datalist>
      </div>
      <div>
        <label
          htmlFor="files"
          className="block text-sm font-medium mb-1.5 text-textPrimary"
        >
          Välj bilder
        </label>
        <input
          id="files"
          type="file"
          multiple
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFiles(e.target.files)
          }
          required
          disabled={isUploading}
          className={`${inputClasses} file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-textPrimary hover:file:bg-secondary/80`}
        />
      </div>
      <Button
        type="submit"
        size="lg"
        subVariant="rounded"
        disabled={isUploading}
      >
        <Upload className="mr-2 h-5 w-5" />
        {isUploading ? 'Laddar upp...' : 'Ladda upp'}
      </Button>
      {formError && (
        <p className="text-center text-sm mt-2 text-destructive">{formError}</p>
      )}
      {uploadError && (
        <p className="text-center text-sm mt-2 text-destructive">
          {uploadError}
        </p>
      )}
      {status === 'success' && (
        <p className="text-center text-sm mt-2 text-success">
          Uppladdning klar!
        </p>
      )}
    </form>
  )
}