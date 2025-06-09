import { useState } from 'react'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { imageUrl } from '@/admin/utils/apiUrl'

type DownloadStatus = 'idle' | 'downloading' | 'zipping' | 'error' | 'success'

export function useImageDownloader() {
  const [status, setStatus] = useState<DownloadStatus>('idle')
  const [message, setMessage] = useState('')
  const [progress, setProgress] = useState(0)

  const downloadAndZip = async (imageKeys: string[], zipName: string) => {
    if (imageKeys.length === 0) return
    setStatus('downloading')
    setMessage('')
    setProgress(0)

    const zip = new JSZip()
    try {
      for (let i = 0; i < imageKeys.length; i++) {
        const key = imageKeys[i]
        const fileName = key.split('/').pop() || 'unknown-file'
        setMessage(
          `Laddar ner bild ${i + 1} av ${imageKeys.length}: ${fileName}`,
        )
        setProgress(((i + 1) / imageKeys.length) * 100)

        const response = await fetch(imageUrl(key))
        if (!response.ok) throw new Error(`Kunde inte ladda ner ${fileName}`)
        const blob = await response.blob()
        zip.file(fileName, blob)
      }

      setStatus('zipping')
      setMessage('Skapar zip-fil...')
      const zipBlob = await zip.generateAsync({ type: 'blob' })
      saveAs(zipBlob, `${zipName}.zip`)
      setStatus('success')
      setMessage('Nedladdning klar!')
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Ett okänt fel inträffade.'
      setMessage(errorMessage)
      setStatus('error')
    } finally {
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }
  }

  return { status, message, progress, downloadAndZip }
}