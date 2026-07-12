import React, { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { Upload } from 'lucide-react'
import { useFileUpload } from '@/admin/hooks/useFileUpload'
import { UploadProgressPanel } from '@/admin/components/UploadProgressPanel'

const inputClasses =
  'block w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-textPrimary ring-offset-background transition placeholder:text-muted-foreground focus-visible:border-textPrimary/35 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-textPrimary/8 disabled:cursor-not-allowed disabled:opacity-55'

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
  const {
    uploadFiles,
    status,
    progressDetails,
    error: uploadError,
  } = useFileUpload()
  const formRef = React.useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormError('')
    if (!files || files.length === 0 || !galleryName) {
      setFormError('Välj ett gallerinamn och minst en fil.')
      return
    }
    const prefix = galleryName.endsWith('/') ? galleryName : `${galleryName}/`
    await uploadFiles(files, prefix, onUploadSuccess)
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
      className="mx-auto grid max-w-2xl grid-cols-1 gap-6 rounded-[1.5rem] border border-black/6 bg-white p-6 shadow-[0_24px_70px_-58px_rgba(31,41,55,0.5)] md:p-8"
    >
      <div>
        <label
          htmlFor="galleryName"
          className="mb-2 block text-sm font-semibold text-textPrimary"
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
          className="mb-2 block text-sm font-semibold text-textPrimary"
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
          className={`${inputClasses} file:mr-4 file:rounded-full file:border-0 file:bg-[#f1f1ee] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-textPrimary hover:file:bg-[#e8e8e3]`}
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
      {isUploading && <UploadProgressPanel progress={progressDetails} />}
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
