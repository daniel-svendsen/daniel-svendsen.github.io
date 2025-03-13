import React from 'react'
import { pdf } from '@react-pdf/renderer'
import WorkPDF from '../components/WorkPDF'
import { saveAs } from 'file-saver'

const PdfDownloadButton = () => {
  const handleDownload = async () => {
    const doc = <WorkPDF />
    const blob = await pdf(doc).toBlob()
    saveAs(blob, 'Daniel-Svendsén-CV.pdf')

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
      className="bg-highlight text-white px-4 py-2 rounded-md shadow-md hover:bg-highlight/90 transition"
    >
      Download as PDF
    </button>
  )
}

export default PdfDownloadButton