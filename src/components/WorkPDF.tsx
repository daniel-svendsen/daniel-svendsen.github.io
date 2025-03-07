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
import cvContent from '../data/cvContent'
import portraitImage from '../assets/portraits/bild1.jpg'
// Ikon-mappning för verktyg & språk
import bashIcon from '../assets/icons/bash-original.png'
import dockerIcon from '../assets/icons/docker-original.png'
import gitIcon from '../assets/icons/git-original.png'
import gradleIcon from '../assets/icons/gradle-original.png'
import html5Icon from '../assets/icons/html5-original.png'
import intellijIcon from '../assets/icons/intellij-original.png'
import javaIcon from '../assets/icons/java-original.png'
import javascriptIcon from '../assets/icons/javascript-original.png'
import jenkinsIcon from '../assets/icons/jenkins-original.png'
import mongodbIcon from '../assets/icons/mongodb-original.png'
import mysqlIcon from '../assets/icons/mysql-original.png'
import reactIcon from '../assets/icons/react-original.png'
import springIcon from '../assets/icons/spring-original.png'
import sqliteIcon from '../assets/icons/sqlite-original.png'
import typescriptIcon from '../assets/icons/typescript-original.png'
import viteIcon from '../assets/icons/vite-original.png'

const iconSize = 12

Font.register({
  family: 'Open Sans',
  src: 'https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf',
})

// Ikon-mappning
const iconMap = {
  Java: javaIcon,
  JavaScript: javascriptIcon,
  TypeScript: typescriptIcon,
  'HTML/CSS': html5Icon,
  'Spring Boot': springIcon,
  IntelliJ: intellijIcon,
  Docker: dockerIcon,
  Jenkins: jenkinsIcon,
  Bash: bashIcon,
  Git: gitIcon,
  Gradle: gradleIcon,
  Vite: viteIcon,
  React: reactIcon,
  MySQL: mysqlIcon,
  MongoDB: mongodbIcon,
  SQLite: sqliteIcon,
}

// Anpassad styling
const styles = StyleSheet.create({
  page: { padding: 30, fontFamily: 'Open Sans', backgroundColor: '#f3f4f6' },
  section: {
    marginBottom: 8, // Mindre mellanrum för att undvika onödig plats
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#4f46e5',
    marginBottom: 8,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1f2937',
    borderBottom: '1 solid #ddd', // Liten linje för separation
    paddingBottom: 2,
  },
  text: { fontSize: 11, color: '#111827', marginBottom: 4 },
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
  educationItem: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
    marginBottom: 4,
  },
  educationYear: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#4f46e5',
    minWidth: 75,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  contactLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#374151',
    minWidth: 75,
  },
})

const WorkPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Profilbild + Header */}
      <View style={styles.section} wrap={false}>
        <Image src={portraitImage} style={styles.profileImage} />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#4f46e5',
            textAlign: 'center',
          }}
        >
          {cvContent.profile.name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            color: '#374151',
            marginBottom: 5,
          }}
        >
          {cvContent.profile.description}
        </Text>
        <Link
          src="https://www.linkedin.com/in/daniel-svendsen-02423a1b4/"
          style={{
            fontSize: 10,
            color: '#2563eb',
            textDecoration: 'underline',
            textAlign: 'center',
          }}
        >
          LinkedIn: Daniel Svendsén
        </Link>
      </View>

      {/* Profile & Skills */}
      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>Profile & Skills</Text>
        <Text style={styles.text}>{cvContent.skills.content[0]}</Text>{' '}
        {/* Första textblocket */}
      </View>

      {/* Languages */}
      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>Languages</Text>
        <View style={styles.listContainer}>
          {['Java', 'JavaScript', 'TypeScript', 'HTML/CSS'].map((lang) => (
            <View key={lang} style={styles.listItem}>
              <Image src={iconMap[lang]} style={styles.icon} />
              <Text style={styles.text}>{lang}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Tools */}
      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>Tools</Text>
        <View style={styles.listContainer}>
          {[
            'Spring Boot',
            'IntelliJ',
            'Docker',
            'Jenkins',
            'Bash',
            'Git',
            'Gradle',
            'Vite',
            'React',
          ].map((tool) => (
            <View key={tool} style={styles.listItem}>
              <Image src={iconMap[tool]} style={styles.icon} />
              <Text style={styles.text}>{tool}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Databases */}
      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>Databases</Text>
        <View style={styles.listContainer}>
          {['MySQL', 'MongoDB', 'SQLite'].map((db) => (
            <View key={db} style={styles.listItem}>
              <Image src={iconMap[db]} style={styles.icon} />
              <Text style={styles.text}>{db}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Soft Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Soft Skills</Text>
        <Text style={styles.text}>
          {
            cvContent.skills.content.find((s) => s.name === 'Soft Skills')
              ?.details
          }
        </Text>
      </View>

      {/* Work Methodologies */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Methodologies</Text>
        <Text style={styles.text}>
          {
            cvContent.skills.content.find(
              (s) => s.name === 'Work Methodologies',
            )?.details
          }
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section} break={true}>
        <Text style={styles.sectionTitle}>Experiences</Text>
      </View>
      {cvContent.experience.content.work.map((exp, index) => (
        <View key={index} style={styles.section} wrap={false}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#4f46e5' }}>
            {exp.year}
          </Text>
          <Text style={styles.text}>{exp.details}</Text>
        </View>
      ))}

      {/* Education */}
      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>Education</Text>
        {cvContent.experience.content.education.map((edu, index) => (
          <View key={index} style={styles.listItem}>
            <Text
              style={{ fontSize: 12, fontWeight: 'bold', color: '#4f46e5' }}
            >
              {edu.year}
            </Text>
            <Text style={styles.text}>{edu.details}</Text>
          </View>
        ))}
      </View>

      {/* Contact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        {cvContent.contact.content.map((contact, index) => (
          <Text key={index} style={styles.text}>
            {contact.type}: {contact.details}
          </Text>
        ))}
        <Link
          src="https://www.svendsenphotography.com/work"
          style={{
            fontSize: 10,
            color: '#2563eb',
            textDecoration: 'underline',
          }}
        >
          www.svendsenphotography.com/work
        </Link>
      </View>
    </Page>
  </Document>
)

export default WorkPDF