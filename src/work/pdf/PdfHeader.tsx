import React from 'react'
import { Image, Link, Text, View } from '@react-pdf/renderer'
import { type CvContent, type LocalizedContent } from '../../types/CvTypes'
import { type Language } from '../../context/LanguageContext'
import { styles } from './pdfStyles'
import { pdfSectionTitles, translatePdf } from './pdfUtils'
import portraitImage from '../../assets/bild1.jpg'

interface PdfHeaderProps {
  profile: CvContent
  lang: Language
}

export const PdfHeader: React.FC<PdfHeaderProps> = ({ profile, lang }) => {
  const t = (localized: LocalizedContent | string | undefined) =>
    translatePdf(localized, lang)

  return (
    <View style={styles.headerSection}>
      {portraitImage && (
        <Image src={portraitImage} style={styles.profileImage} />
      )}
      <Text style={styles.headerName}>{t(profile.title)}</Text>
      <Text style={styles.headerTitle}>{t(profile.description)}</Text>
      <Link
        style={styles.headerLink}
        src="https://www.linkedin.com/in/daniel-svendsen-02423a1b4/"
      >
        {t(pdfSectionTitles.linkedInName)}
      </Link>
    </View>
  )
}