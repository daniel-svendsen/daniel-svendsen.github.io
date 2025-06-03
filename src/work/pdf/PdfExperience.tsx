import React from 'react'
import { Link, Text, View } from '@react-pdf/renderer'
import { type CvExperience, type LocalizedContent } from '../../types/CvTypes'
import { type Language } from '../../context/LanguageContext'
import { styles } from './pdfStyles'
import { pdfSectionTitles, translatePdf } from './pdfUtils'

interface PdfExperienceProps {
  experiences: CvExperience[]
  lang: Language
}

export const PdfExperience: React.FC<PdfExperienceProps> = ({
  experiences,
  lang,
}) => {
  const t = (localized: LocalizedContent | string | undefined) =>
    translatePdf(localized, lang)

  const renderDetails = (details: LocalizedContent | string) => {
    const translatedDetails = t(details)
    const lines = translatedDetails
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
    const header = lines[0]
    const listItems = lines.slice(1)

    return (
      <View>
        <Text style={styles.text}>{header}</Text>
        {listItems.length > 0 && (
          <View style={styles.detailList}>
            {listItems.map((item, idx) => (
              <Text key={idx} style={styles.detailItem}>
                {item.startsWith('- ') ? item : `- ${item}`}
              </Text>
            ))}
          </View>
        )}
      </View>
    )
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        {t(pdfSectionTitles.workExperience)}
      </Text>
      {experiences.map((exp, index) => (
        <View
          key={exp.id}
          style={{
            marginBottom: index === experiences.length - 1 ? 2 : 10,
          }}
          wrap={false}
        >
          <Text style={styles.boldPrimaryText}>{exp.year} </Text>
          {renderDetails(exp.details)}
          {exp.links && exp.links.length > 0 && (
            <View style={{ marginTop: 2 }}>
              {exp.links.map((link, linkIdx) => (
                <Link key={linkIdx} style={styles.projectLink} src={link.href}>
                  {`${t(link.text)}: ${link.href}`}
                </Link>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  )
}