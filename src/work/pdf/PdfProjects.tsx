import React from 'react'
import { Link, Text, View } from '@react-pdf/renderer'
import { type CvProject, type LocalizedContent } from '../../types/CvTypes'
import { type Language } from '../../context/LanguageContext'
import { styles } from './pdfStyles'
import { translatePdf } from './pdfUtils'

interface PdfProjectsProps {
  projects: CvProject[]
  sectionTitle: LocalizedContent
  lang: Language
}

export const PdfProjects: React.FC<PdfProjectsProps> = ({
  projects,
  sectionTitle,
  lang,
}) => {
  const t = (localized: LocalizedContent | string | undefined) =>
    translatePdf(localized, lang)

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{t(sectionTitle)}</Text>
      {(projects || []).map((project) => (
        <View key={project.id} style={{ marginBottom: 10 }} wrap={false}>
          <Text style={styles.boldPrimaryText}>{t(project.name)}</Text>
          <Text style={styles.text}>{t(project.details)}</Text>
          {project.link_href && (
            <Link style={styles.projectLink} src={project.link_href}>
              {project.link_href}
            </Link>
          )}
        </View>
      ))}
    </View>
  )
}