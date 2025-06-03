import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { type CvExperience, type LocalizedContent } from '../../types/CvTypes'
import { type Language } from '../../context/LanguageContext'
import { styles } from './pdfStyles'
import { pdfSectionTitles, translatePdf } from './pdfUtils'

interface PdfEducationProps {
  educations: CvExperience[]
  lang: Language
}

export const PdfEducation: React.FC<PdfEducationProps> = ({
  educations,
  lang,
}) => {
  const t = (localized: LocalizedContent | string | undefined) =>
    translatePdf(localized, lang)

  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.sectionTitle}>{t(pdfSectionTitles.education)}</Text>
      {educations.map((edu) => (
        <View key={edu.id} style={{ marginBottom: 8 }} wrap={false}>
          <Text style={styles.boldPrimaryText}>{edu.year}</Text>
          <Text style={styles.text}>{t(edu.details)}</Text>
        </View>
      ))}
    </View>
  )
}