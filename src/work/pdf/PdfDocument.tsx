import React from 'react'
import { Document, Page, View } from '@react-pdf/renderer'
import { type CvData, LocalizedContent } from '../../types/CvTypes'
import { type Language } from '../../context/LanguageContext'
import { styles } from './pdfStyles'
import { registerPdfFonts, translatePdf } from './pdfUtils'
import { PdfHeader } from './PdfHeader'
import { PdfIntro } from './PdfIntro'
import { PdfSkills } from './PdfSkills'
import { PdfExperience } from './PdfExperience'
import { PdfEducation } from './PdfEducation'
import { PdfProjects } from './PdfProjects'
import { PdfContact } from './PdfContact'

interface PdfDocumentProps {
  cvData: CvData
  lang: Language
}

export const PdfDocument: React.FC<PdfDocumentProps> = ({ cvData, lang }) => {
  registerPdfFonts()
  const t = (localized: LocalizedContent | string | undefined) =>
    translatePdf(localized, lang)

  const workKey = t({ en: 'Work', sv: 'Arbete' })
  const internshipKey = t({
    en: 'Internship/Opensource',
    sv: 'Praktik/Öppen Källkod',
  })
  const educationKey = t({ en: 'Education', sv: 'Utbildning' })
  const linkedInTypeKey = t({ en: 'LinkedIn', sv: 'LinkedIn' })
  const websiteTypeKey = t({ en: 'Website', sv: 'Webbplats' })

  const workExp = (cvData.experience || []).filter(
    (exp) => t(exp.type) === workKey || t(exp.type) === internshipKey,
  )
  const educationExp = (cvData.experience || []).filter(
    (exp) => t(exp.type) === educationKey,
  )
  const otherContacts = (cvData.contact || []).filter(
    (ct) => t(ct.type) !== linkedInTypeKey && t(ct.type) !== websiteTypeKey,
  )

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PdfHeader profile={cvData.profile} lang={lang} />
        <View style={styles.bodyPadding}>
          {cvData.intro && <PdfIntro intro={cvData.intro} lang={lang} />}
          <PdfSkills skills={cvData.skills} lang={lang} />
          <PdfExperience experiences={workExp} lang={lang} />
          <PdfEducation educations={educationExp} lang={lang} />
          <PdfProjects
            projects={cvData.projects}
            sectionTitle={cvData.personalProjectsTitle}
            lang={lang}
          />
          <PdfContact contacts={otherContacts} lang={lang} />
        </View>
      </Page>
    </Document>
  )
}