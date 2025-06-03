import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { type CvSkill, type LocalizedContent } from '../../types/CvTypes'
import { type Language } from '../../context/LanguageContext'
import { styles } from './pdfStyles'
import { pdfSectionTitles, translatePdf } from './pdfUtils'

interface PdfSkillsProps {
  skills: CvSkill[]
  lang: Language
}

export const PdfSkills: React.FC<PdfSkillsProps> = ({ skills, lang }) => {
  const t = (localized: LocalizedContent | string | undefined) =>
    translatePdf(localized, lang)

  const experiencedKey = t({ en: 'Experienced', sv: 'Erfarenhet' })
  const methodologiesKey = t({ en: 'Methodologies', sv: 'Metoder' })
  const familiarKey = t({ en: 'Familiar', sv: 'Kännedom' })

  const experiencedSkills = (skills || []).filter(
    (skill) =>
      t(skill.category).startsWith(experiencedKey) &&
      !t(skill.category).includes(methodologiesKey),
  )
  const familiarSkills = (skills || []).filter((skill) =>
    t(skill.category).startsWith(familiarKey),
  )

  const renderSkillList = (skillItems: CvSkill[]) => (
    <View style={styles.listItemContainer}>
      {skillItems.map((skill) => (
        <View key={skill.id || t(skill.tool)} style={styles.listItem}>
          <Text style={styles.text}>{t(skill.tool)}</Text>
        </View>
      ))}
    </View>
  )

  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.sectionTitle}>
        {t(pdfSectionTitles.technicalSkills)}
      </Text>
      {experiencedSkills.length > 0 && (
        <View>
          <Text style={styles.subHeading}>
            {t(pdfSectionTitles.experiencedIn)}
          </Text>
          {renderSkillList(experiencedSkills)}
        </View>
      )}
      {familiarSkills.length > 0 && (
        <View style={{ marginTop: experiencedSkills.length > 0 ? 4 : 0 }}>
          <Text style={styles.subHeading}>
            {t(pdfSectionTitles.familiarWith)}
          </Text>
          {renderSkillList(familiarSkills)}
        </View>
      )}
    </View>
  )
}