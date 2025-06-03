import React from 'react'
import { Link, Text, View } from '@react-pdf/renderer'
import { type CvContact, type LocalizedContent } from '../../types/CvTypes'
import { type Language } from '../../context/LanguageContext'
import { styles } from './pdfStyles'
import { pdfSectionTitles, translatePdf } from './pdfUtils'

interface PdfContactProps {
  contacts: CvContact[]
  lang: Language
}

export const PdfContact: React.FC<PdfContactProps> = ({ contacts, lang }) => {
  const t = (localized: LocalizedContent | string | undefined) =>
    translatePdf(localized, lang)

  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.sectionTitle}>{t(pdfSectionTitles.contact)}</Text>
      {contacts.map((ct) => (
        <Text key={ct.id} style={styles.contactText}>
          <Text style={styles.contactLabel}>{t(ct.type)}: </Text>
          {ct.details}
        </Text>
      ))}
      <Link
        style={[styles.contactText, styles.projectLink, { marginTop: 4 }]}
        src="https://www.svendsenphotography.com/work"
      >
        {t(pdfSectionTitles.websiteLinkText)}
      </Link>
    </View>
  )
}