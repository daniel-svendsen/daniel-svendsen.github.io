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
import { CvData } from '../types/CvTypes'

Font.register({
  family: 'Open Sans',
  src: 'https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf',
})
Font.register({
  family: 'Open Sans Bold',
  src: 'https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN7rgOUuhs.ttf',
})

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 0,
    fontFamily: 'Open Sans',
    backgroundColor: workColors.background,
    fontSize: 10,
    color: workColors.secondaryText,
    lineHeight: 1.4,
  },
  bodyPadding: {
    paddingHorizontal: 35,
  },
  headerSection: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 35,
    paddingTop: 20,
    paddingBottom: 15,
    marginBottom: 15,
  },
  section: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  profileImage: {
    width: 65,
    height: 75,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: workColors.highlight,
    marginBottom: 12,
    alignSelf: 'center',
    objectFit: 'cover',
  },
  headerName: {
    fontSize: 18,
    fontFamily: 'Open Sans Bold',
    textAlign: 'center',
    color: workColors.primaryText,
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 10,
    textAlign: 'center',
    color: workColors.primaryText,
    marginBottom: 4,
  },
  headerLink: {
    fontSize: 9,
    textAlign: 'center',
    color: workColors.primaryText,
    textDecoration: 'none',
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: 'Open Sans Bold',
    marginBottom: 8,
    color: workColors.primaryText,
    borderBottomWidth: 2,
    borderBottomColor: workColors.highlight,
    paddingBottom: 4,
  },
  subHeading: {
    fontSize: 11,
    fontFamily: 'Open Sans Bold',
    color: workColors.primaryText,
    marginTop: 8,
    marginBottom: 4,
  },
  text: {
    fontSize: 9,
    marginBottom: 4,
  },
  boldPrimaryText: {
    fontSize: 10,
    fontFamily: 'Open Sans Bold',
    color: workColors.primaryText,
    marginBottom: 2,
  },
  listItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
    marginBottom: 4,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 5,
    maxWidth: '45%',
  },
  projectLink: {
    fontSize: 9,
    color: workColors.primaryText,
    textDecoration: 'none',
    marginTop: 2,
    wordBreak: 'break-all',
  },
  contactText: {
    fontSize: 9.5,
    marginBottom: 3,
  },
  contactLabel: {
    fontFamily: 'Open Sans Bold',
    color: workColors.primaryText,
  },
  detailList: {
    marginLeft: 10,
    marginTop: 2,
  },
  detailItem: {
    fontSize: 9.5,
    marginBottom: 2,
  },
})

const WorkPDFDocument = ({ cvData }: { cvData: CvData }) => {
  const experiencedSkills = (cvData.skills || []).filter(
    (skill) =>
      skill.category.startsWith('Experienced') &&
      !skill.category.includes('Methodologies'),
  )
  const familiarSkills = (cvData.skills || []).filter((skill) =>
    skill.category.startsWith('Familiar'),
  )

  const workExp = (cvData.experience || []).filter(
    (exp) => exp.type === 'work' || exp.type === 'Internship/Opensource',
  )
  const educationExp = (cvData.experience || []).filter(
    (exp) => exp.type === 'education',
  )
  const otherContacts = (cvData.contact || []).filter(
    (ct) => ct.type !== 'LinkedIn' && ct.type !== 'Website',
  )

  const renderSkillList = (skills: any[]) => (
    <View style={styles.listItemContainer}>
      {skills.map((skill) => (
        <View key={skill.id || skill.tool} style={styles.listItem}>
          <Text style={styles.text}>{skill.tool}</Text>
        </View>
      ))}
    </View>
  )

  const renderDetails = (details: string) => {
    const lines = details
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
                {item}
              </Text>
            ))}
          </View>
        )}
      </View>
    )
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerSection}>
          {portraitImage && (
            <Image src={portraitImage} style={styles.profileImage} />
          )}
          <Text style={styles.headerName}>
            {cvData.profile?.title || 'Name Missing'}
          </Text>
          <Text style={styles.headerTitle}>
            {cvData.profile?.description || 'Title Missing'}
          </Text>
          <Link
            style={styles.headerLink}
            src="https://www.linkedin.com/in/daniel-svendsen-02423a1b4/"
          >
            LinkedIn Profile
          </Link>
        </View>

        <View style={styles.bodyPadding}>
          {cvData.intro && (
            <View style={styles.section} wrap={false}>
              <Text style={styles.sectionTitle}>
                {cvData.intro.title || 'Profile'}
              </Text>
              <Text style={styles.text}>{cvData.intro.description}</Text>
            </View>
          )}

          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            {experiencedSkills.length > 0 && (
              <View>
                <Text style={styles.subHeading}>Experienced In</Text>
                {renderSkillList(experiencedSkills)}
              </View>
            )}
            {familiarSkills.length > 0 && (
              <View style={{ marginTop: experiencedSkills.length > 0 ? 4 : 0 }}>
                <Text style={styles.subHeading}>Familiar With</Text>
                {renderSkillList(familiarSkills)}
              </View>
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {workExp.map((exp, index) => (
              <View
                key={exp.id}
                style={{
                  marginBottom: index === workExp.length - 1 ? 2 : 10,
                }}
                wrap={false}
              >
                <Text style={styles.boldPrimaryText}>{exp.year} </Text>
                {renderDetails(exp.details)}
                {exp.links && exp.links.length > 0 && (
                  <View style={{ marginTop: 2 }}>
                    {exp.links.map((link, linkIdx) => (
                      <Link
                        key={linkIdx}
                        style={styles.projectLink}
                        src={link.href}
                      >
                        {`${link.text}: ${link.href}`}
                      </Link>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>

          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Education</Text>
            {educationExp.map((edu, index) => (
              <View
                key={edu.id || index}
                style={{ marginBottom: 8 }}
                wrap={false}
              >
                <Text style={styles.boldPrimaryText}>
                  {edu.year_text || edu.year}
                </Text>
                <Text style={styles.text}>{edu.details}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {(cvData.projects || []).map((project, index) => (
              <View
                key={project.id || index}
                style={{ marginBottom: 10 }}
                wrap={false}
              >
                <Text style={styles.boldPrimaryText}>{project.name}</Text>
                <Text style={styles.text}>{project.details}</Text>
                {project.link_href && (
                  <Link style={styles.projectLink} src={project.link_href}>
                    {project.link_href}
                  </Link>
                )}
              </View>
            ))}
          </View>

          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>Contact</Text>
            {otherContacts.map((ct, index) => (
              <Text key={ct.id || index} style={styles.contactText}>
                <Text style={styles.contactLabel}>{ct.type}: </Text>
                {ct.details}
              </Text>
            ))}
            <Link
              style={[styles.contactText, styles.projectLink, { marginTop: 4 }]}
              src="https://www.svendsenphotography.com/work"
            >
              Website: www.svendsenphotography.com/work
            </Link>
          </View>
        </View>
      </Page>
    </Document>
  )
}

const WorkPDF = ({ cvData }: { cvData: CvData | null }) => {
  if (!cvData) {
    return <Text>Loading PDF data...</Text>
  }
  const dataWithEnsuredArrays = {
    ...cvData,
    skills: Array.isArray(cvData.skills) ? cvData.skills : [],
    experience: Array.isArray(cvData.experience) ? cvData.experience : [],
    projects: Array.isArray(cvData.projects) ? cvData.projects : [],
    contact: Array.isArray(cvData.contact) ? cvData.contact : [],
  }
  return <WorkPDFDocument cvData={dataWithEnsuredArrays} />
}

export default WorkPDF