// src/components/WorkPDF.tsx

import React from 'react'
import {
  Document,
  Font,
  Image,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import workColors from '../config/workColors'
import portraitImage from '../assets/bild1.jpg'
import { iconMap } from '../assets/icons/iconMap' // Säkerställ att denna returnerar en korrekt ikon-mappning

const iconSize = 14

// Registrera fonten
Font.register({
  family: 'Open Sans',
  src: 'https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf',
})

// Styling för PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Open Sans',
    backgroundColor: workColors.background,
  },
  section: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  profileImage: {
    width: 70,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: workColors.highlight,
    marginBottom: 8,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    color: workColors.primaryText,
    borderBottom: '1 solid #ddd',
    paddingBottom: 3,
  },
  text: {
    fontSize: 11,
    color: workColors.secondaryText,
    marginBottom: 4,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  icon: {
    width: iconSize,
    height: iconSize,
    marginRight: 4,
  },
})

// Utökad typdefinition för PDF-data
type CvData = {
  profile: { name: string; description: string }
  intro?: { title: string; description: string }
  skills: any[]
  experience: any[]
  projects: any[]
  contact: any[]
  languages: any[]
  personalProjectsTitle: string
}

// Underkomponenten som bygger PDF-dokumentet
const WorkPDFDocument = ({ cvData }: { cvData: CvData }) => {
  const workExp = cvData.experience.filter((exp) => exp.type === 'work')
  const educationExp = cvData.experience.filter(
    (exp) => exp.type === 'education',
  )
  const softSkills = cvData.skills.filter((s) => s.category === 'Soft Skills')
  const workMethodologies = cvData.skills.filter(
    (s) => s.category === 'Work Methodologies',
  )
  const otherSkills = cvData.skills.filter(
    (s) => !['Soft Skills', 'Work Methodologies'].includes(s.category),
  )

  const getImageUrl = (iconName: string) => {
    return window.location.origin + iconMap[iconName]
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Profilbild + Header */}
        <View style={styles.section} wrap={false}>
          <Image src={portraitImage} style={styles.profileImage} />
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              textAlign: 'center',
              color: workColors.primaryText,
            }}
          >
            {cvData.profile.name}
          </Text>
          <Text style={{ fontSize: 12, textAlign: 'center', marginBottom: 5 }}>
            {cvData.profile.description}
          </Text>
          {/* Klickbar LinkedIn-länk */}
          <Link
            style={{
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 5,
              color: workColors.highlight,
            }}
            src="https://www.linkedin.com/in/daniel-svendsen-02423a1b4/"
          >
            LinkedIn
          </Link>
        </View>

        {/* Profile & Skills */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Profile & Skills</Text>
          {cvData.intro && (
            <Text style={styles.text}>{cvData.intro.description}</Text>
          )}
          <View style={styles.listContainer}>
            {otherSkills.map((skill) => (
              <View key={skill.tool} style={styles.listItem}>
                {iconMap[skill.tool] && (
                  <Image
                    src={getImageUrl(skill.tool)}
                    style={{ width: 14, height: 14, marginRight: 4 }}
                  />
                )}
                <Text style={styles.text}>{skill.tool}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Soft Skills */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Soft Skills</Text>
          <Text style={styles.text}>
            {softSkills.map((s) => s.tool).join(', ')}
          </Text>
        </View>

        {/* Work Methodologies */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Work Methodologies</Text>
          <Text style={styles.text}>
            {workMethodologies.map((s) => s.tool).join(', ')}
          </Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {workExp.map((exp, index) => (
            <View key={index} style={{ marginBottom: 8 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: workColors.highlight,
                }}
              >
                {exp.year}
              </Text>
              <Text style={styles.text}>{exp.details}</Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Education</Text>
          {educationExp.map((edu, index) => (
            <View key={index} style={{ marginBottom: 8 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: workColors.highlight,
                }}
              >
                {edu.year}
              </Text>
              <Text style={styles.text}>{edu.details}</Text>
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {cvData.projects.map((project, index) => (
            <View key={index} style={{ marginBottom: 8 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: workColors.highlight,
                }}
              >
                {project.name}
              </Text>
              <Text style={styles.text}>{project.details}</Text>
              {project.link_href && (
                <Link
                  style={{ fontSize: 11, color: workColors.highlight }}
                  src={project.link_href}
                >
                  {project.link_href}
                </Link>
              )}
            </View>
          ))}
        </View>

        {/* Contact */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Contact</Text>
          {cvData.contact
            .filter((ct) => ct.type !== 'LinkedIn')
            .map((ct, index) => (
              <Text key={index} style={styles.text}>
                {ct.type}: {ct.details}
              </Text>
            ))}
          <Link
            style={[styles.text, { marginTop: 4 }]}
            src="https://www.svendsenphotography.com/work"
          >
            Website: www.svendsenphotography.com/work
          </Link>
        </View>
      </Page>
    </Document>
  )
}

// **Huvudkomponenten som hämtar data och genererar PDF**
const WorkPDF = ({ cvData }: { cvData: CvData | null }) => {
  if (!cvData) {
    return <Text>Loading...</Text>
  }
  return <WorkPDFDocument cvData={cvData} />
}

export default WorkPDF
