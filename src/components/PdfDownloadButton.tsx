// src/components/PdfDownloadButton.tsx
import React from 'react'
import { pdf } from '@react-pdf/renderer'
import WorkPDF from './WorkPDF'
import { saveAs } from 'file-saver'
import { CvData } from '../types/CvTypes'

interface PdfDownloadButtonProps {
  cvData: CvData | null
}

const PdfDownloadButton: React.FC<PdfDownloadButtonProps> = ({ cvData }) => {
  const handleDownload = async () => {
    if (!cvData) return
    const blob = await pdf(<WorkPDF cvData={cvData} />).toBlob()
    saveAs(blob, 'cv.pdf')

    const data = { message: 'Daniel-Svendséns CV har laddats ner!' }
    fetch('https://formspree.io/f/xvgowldv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log('E-post skickad!')
        } else {
          console.error('Misslyckades att skicka e-post:', response.statusText)
        }
      })
      .catch((error) => console.error('Ett fel uppstod:', error))
  }

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-highlight text-white rounded hover:bg-blue-700 transition"
    >
      Download CV as PDF
    </button>
  )
}

export default PdfDownloadButton
