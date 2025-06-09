import { useState } from 'react'
import { apiUrl } from '@/admin/utils/apiUrl'

type UploadStatus = 'idle' | 'uploading' | 'error' | 'success'

export function useFileUpload() {
  const [status, setStatus] = useState<UploadStatus>('idle')
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')

  const uploadFiles = async (
    files: FileList,
    galleryId: string,
    onUploadSuccess?: (newKeys: string[]) => void,
  ): Promise<string[]> => {
    if (!files || files.length === 0) return []

    setStatus('uploading')
    setProgress(0)
    setError('')

    const uploadedKeys: string[] = []

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const key = `${galleryId}/${file.name.replace(/\s+/g, '_')}`
        await fetch(apiUrl(`upload/${key}`), {
          method: 'PUT',
          credentials: 'include',
          body: file,
          headers: { 'Content-Type': file.type },
        })
        uploadedKeys.push(key)
        setProgress(((i + 1) / files.length) * 100)
      }
      setStatus('success')
      if (onUploadSuccess) onUploadSuccess(uploadedKeys)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Upload failed'
      setError(message)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 3000)
    }
    return uploadedKeys
  }

  return { uploadFiles, status, progress, error }
}