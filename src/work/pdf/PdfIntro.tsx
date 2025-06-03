import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { type CvContent, type LocalizedContent } from '../../types/CvTypes'
import { type Language } from '../../context/LanguageContext'
import { styles } from './pdfStyles'
import { pdfSectionTitles, translatePdf } from './pdfUtils'

interface PdfIntroProps {
  intro: CvContent
  lang: Language
}

export const PdfIntro: React.FC<PdfIntroProps> = ({ intro, lang }) => {
  const t = (localized: LocalizedContent | string | undefined) =>
    translatePdf(localized, lang)

  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.sectionTitle}>
        {t(intro.title) || t(pdfSectionTitles.profileIntro)}
      </Text>
      <Text style={styles.text}>{t(intro.description)}</Text>
    </View>
  )
}