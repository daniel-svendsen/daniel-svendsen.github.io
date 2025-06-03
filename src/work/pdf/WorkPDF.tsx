import React from 'react'
import { Text } from '@react-pdf/renderer'
import { type CvData, type LocalizedContent } from '../../types/CvTypes'
import { type Language } from '../../context/LanguageContext'
import { PdfDocument } from './PdfDocument'
import { registerPdfFonts } from './pdfUtils'

interface WorkPDFProps {
  cvData: CvData | null
  lang: Language
}

const WorkPDF: React.FC<WorkPDFProps> = ({ cvData, lang }) => {
  registerPdfFonts()

  if (!cvData) {
    const loadingText =
      lang === 'sv' ? 'Laddar PDF-data...' : 'Loading PDF data...'
    return <Text>{loadingText}</Text>
  }

  const defaultLocalizedContent = (
    textEn: string,
    textSv: string,
  ): LocalizedContent => ({ en: textEn, sv: textSv })

  const dataWithEnsuredArrays: CvData = {
    ...cvData,
    profile: cvData.profile || {
      title: defaultLocalizedContent('Name Missing', 'Namn Saknas'),
      description: defaultLocalizedContent(
        'Description Missing',
        'Beskrivning Saknas',
      ),
      id: 0,
      section: 'profile',
    },
    intro: cvData.intro,
    skills: Array.isArray(cvData.skills) ? cvData.skills : [],
    experience: Array.isArray(cvData.experience) ? cvData.experience : [],
    projects: Array.isArray(cvData.projects) ? cvData.projects : [],
    contact: Array.isArray(cvData.contact) ? cvData.contact : [],
    languages: Array.isArray(cvData.languages) ? cvData.languages : [],
    hobbies: Array.isArray(cvData.hobbies) ? cvData.hobbies : [],
    personalProjectsTitle:
      cvData.personalProjectsTitle ||
      defaultLocalizedContent('Personal Projects', 'Personliga Projekt'),
  }
  return <PdfDocument cvData={dataWithEnsuredArrays} lang={lang} />
}

export default WorkPDF