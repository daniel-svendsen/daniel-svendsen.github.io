import React from 'react'
import { pdf } from '@react-pdf/renderer'
import WorkPDF from './WorkPDF'
import { saveAs } from 'file-saver'
import { CvData } from '../types/CvTypes'
import { Button } from '@/components/Button'

interface PdfDownloadButtonProps {
  cvData: CvData | null
}

const PdfDownloadButton: React.FC<PdfDownloadButtonProps> = ({ cvData }) => {
  const handleDownload = async () => {
    if (!cvData) return
    const blob = await pdf(<WorkPDF cvData={cvData} />).toBlob()
    saveAs(blob, 'DanielSvendsénCV.pdf')

    const data = { message: 'Daniel-Svendséns CV har laddats ner!' }
    // fetch('https://formspree.io/f/xvgowldv', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log('E-post skickad!')
    //     } else {
    //       console.error('Misslyckades att skicka e-post:', response.statusText)
    //     }
    //   })
    //   .catch((error) => console.error('Ett fel uppstod:', error))
  }

  return (
    <Button
      onClick={handleDownload}
      variant="default"
      size="md"
      subVariant="rounded"
      disabled={!cvData}
    >
      Download as PDF
    </Button>
  )
}

export default PdfDownloadButton