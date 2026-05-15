import { useState } from 'react'
import { apiUrl } from '@/admin/utils/apiUrl'

type UploadStatus = 'idle' | 'uploading' | 'error' | 'success'

const PREVIEW_MAX_SIZE = 1800
const PREVIEW_QUALITY = 0.82
const PREVIEW_MIN_ORIGINAL_BYTES = 1024 * 1024

const sanitizeFileName = (fileName: string) => fileName.replace(/\s+/g, '_')

const splitFileName = (fileName: string) => {
  const lastDotIndex = fileName.lastIndexOf('.')
  if (lastDotIndex <= 0) {
    return { baseName: fileName }
  }

  return { baseName: fileName.slice(0, lastDotIndex) }
}

const createWebpPreview = async (file: File): Promise<Blob> => {
  const bitmap = await createImageBitmap(file)

  try {
    const scale = Math.min(
      1,
      PREVIEW_MAX_SIZE / Math.max(bitmap.width, bitmap.height),
    )
    const width = Math.max(1, Math.round(bitmap.width * scale))
    const height = Math.max(1, Math.round(bitmap.height * scale))
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height

    const context = canvas.getContext('2d')
    if (!context) {
      throw new Error('Kunde inte skapa bild-preview.')
    }

    context.drawImage(bitmap, 0, 0, width, height)

    return await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Kunde inte skapa WebP-preview.'))
            return
          }
          resolve(blob)
        },
        'image/webp',
        PREVIEW_QUALITY,
      )
    })
  } finally {
    bitmap.close()
  }
}

const uploadObject = async (key: string, body: BodyInit, contentType: string) => {
  const response = await fetch(apiUrl(`upload/${key}`), {
    method: 'PUT',
    credentials: 'include',
    body,
    headers: { 'Content-Type': contentType },
  })

  if (!response.ok) {
    throw new Error(`Kunde inte ladda upp ${key.split('/').pop() || key}.`)
  }
}

const deleteObject = async (key: string) => {
  const response = await fetch(apiUrl(`image/${key}`), {
    method: 'DELETE',
    credentials: 'include',
  })

  if (!response.ok && response.status !== 404) {
    throw new Error(`Kunde inte rensa ${key.split('/').pop() || key}.`)
  }
}

export function useFileUpload() {
  const [status, setStatus] = useState<UploadStatus>('idle')
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')

  const uploadFiles = async (
    files: FileList,
    prefix: string,
    onUploadSuccess?: () => void,
  ): Promise<string[]> => {
    if (!files || files.length === 0) return []

    setStatus('uploading')
    setProgress(0)
    setError('')

    const uploadedKeys: string[] = []

    try {
      const fileEntries = Array.from(files).map((file) => ({
        file,
        shouldCreatePreview: file.size > PREVIEW_MIN_ORIGINAL_BYTES,
      }))
      const totalSteps = fileEntries.reduce(
        (steps, entry) => steps + (entry.shouldCreatePreview ? 2 : 1),
        0,
      )
      let completedSteps = 0

      for (const { file, shouldCreatePreview } of fileEntries) {
        const sanitizedName = sanitizeFileName(file.name)
        const { baseName } = splitFileName(sanitizedName)
        const previewKey = `${prefix}previews/${baseName}.webp`
        const originalKey = `${prefix}originals/${sanitizedName}`

        if (shouldCreatePreview) {
          const previewBlob = await createWebpPreview(file)
          await uploadObject(previewKey, previewBlob, 'image/webp')
          completedSteps += 1
          setProgress((completedSteps / totalSteps) * 100)
        } else {
          await deleteObject(previewKey)
        }

        await uploadObject(
          originalKey,
          file,
          file.type || 'application/octet-stream',
        )
        completedSteps += 1
        uploadedKeys.push(originalKey)
        setProgress((completedSteps / totalSteps) * 100)
      }
      setStatus('success')
      if (onUploadSuccess) onUploadSuccess()
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
