import React from 'react'
import { pdf } from '@react-pdf/renderer'
import WorkPDF from './WorkPDF'
import { saveAs } from 'file-saver'
import { CvData } from '../../types/CvTypes'
import { Button } from '@/components/Button'
import { useLanguage } from '@/context/LanguageContext'

interface PdfDownloadButtonProps {
  cvData: CvData | null
}

const PdfDownloadButton: React.FC<PdfDownloadButtonProps> = ({ cvData }) => {
  const { language, t } = useLanguage()

  const handleDownload = async () => {
    if (!cvData) return
    const blob = await pdf(<WorkPDF cvData={cvData} lang={language} />).toBlob()
    const pdfFileName = t({
      en: 'DanielSvendsenCV.pdf',
      sv: 'DanielSvendsénCV.pdf',
    })
    saveAs(blob, pdfFileName)

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

  const downloadButtonText = t({
    en: 'Download as PDF',
    sv: 'Ladda ner som PDF',
  })

  return (
    <Button
      onClick={handleDownload}
      variant="default"
      size="md"
      subVariant="rounded"
      disabled={!cvData}
    >
      {downloadButtonText}
    </Button>
  )
}

export default PdfDownloadButton