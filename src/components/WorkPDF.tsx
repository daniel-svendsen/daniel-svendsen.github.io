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
import {
  type CvData,
  type CvSkill,
  type LocalizedContent,
} from '../types/CvTypes'
import { Language } from '@/components/context/LanguageContext'

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
    fontSize: 9,
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

const translatePdf = (
  localized: LocalizedContent | string | undefined,
  lang: Language,
): string => {
  if (!localized) return ''
  if (typeof localized === 'string') return localized
  return localized[lang] || localized.en
}

const pdfSectionTitles: Record<string, LocalizedContent> = {
  profileIntro: { en: 'Profile', sv: 'Profil' },
  technicalSkills: { en: 'Technical Skills', sv: 'Tekniska Färdigheter' },
  experiencedIn: { en: 'Experienced In', sv: 'Erfarenhet Av' },
  familiarWith: { en: 'Familiar With', sv: 'Kännedom Om' },
  workExperience: { en: 'Work Experience', sv: 'Arbetslivserfarenhet' },
  education: { en: 'Education', sv: 'Utbildning' },
  // personalProjects: { en: 'Projects', sv: 'Projekt' }, // Använder cvData.personalProjectsTitle
  contact: { en: 'Contact', sv: 'Kontakt' },
  linkedInName: { en: 'LinkedIn Profile', sv: 'LinkedIn-profil' },
  websiteLinkText: {
    en: 'Website: www.svendsenphotography.com/work',
    sv: 'Webbplats: www.svendsenphotography.com/work',
  },
}

const WorkPDFDocument = ({
  cvData,
  lang,
}: {
  cvData: CvData
  lang: Language
}) => {
  const t = (localized: LocalizedContent | string | undefined) =>
    translatePdf(localized, lang)

  const experiencedKey = t({ en: 'Experienced', sv: 'Erfarenhet' })
  const methodologiesKey = t({ en: 'Methodologies', sv: 'Metoder' })
  const familiarKey = t({ en: 'Familiar', sv: 'Kännedom' })
  const workKey = t({ en: 'Work', sv: 'Arbete' })
  const internshipKey = t({
    en: 'Internship/Opensource',
    sv: 'Praktik/Öppen Källkod',
  })
  const educationKey = t({ en: 'Education', sv: 'Utbildning' })
  const linkedInTypeKey = t({ en: 'LinkedIn', sv: 'LinkedIn' })
  const websiteTypeKey = t({ en: 'Website', sv: 'Webbplats' })

  const experiencedSkills = (cvData.skills || []).filter(
    (skill) =>
      t(skill.category).startsWith(experiencedKey) &&
      !t(skill.category).includes(methodologiesKey),
  )
  const familiarSkills = (cvData.skills || []).filter((skill) =>
    t(skill.category).startsWith(familiarKey),
  )

  const workExp = (cvData.experience || []).filter(
    (exp) => t(exp.type) === workKey || t(exp.type) === internshipKey,
  )
  const educationExp = (cvData.experience || []).filter(
    (exp) => t(exp.type) === educationKey,
  )
  const otherContacts = (cvData.contact || []).filter(
    (ct) => t(ct.type) !== linkedInTypeKey && t(ct.type) !== websiteTypeKey,
  )

  const renderSkillList = (skills: CvSkill[]) => (
    <View style={styles.listItemContainer}>
      {skills.map((skill) => (
        <View key={skill.id || t(skill.tool)} style={styles.listItem}>
          <Text style={styles.text}>{t(skill.tool)}</Text>
        </View>
      ))}
    </View>
  )

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
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerSection}>
          {portraitImage && (
            <Image src={portraitImage} style={styles.profileImage} />
          )}
          <Text style={styles.headerName}>{t(cvData.profile?.title)}</Text>
          <Text style={styles.headerTitle}>
            {t(cvData.profile?.description)}
          </Text>
          <Link
            style={styles.headerLink}
            src="https://www.linkedin.com/in/daniel-svendsen-02423a1b4/"
          >
            {t(pdfSectionTitles.linkedInName)}
          </Link>
        </View>

        <View style={styles.bodyPadding}>
          {cvData.intro && (
            <View style={styles.section} wrap={false}>
              <Text style={styles.sectionTitle}>
                {t(cvData.intro.title) || t(pdfSectionTitles.profileIntro)}
              </Text>
              <Text style={styles.text}>{t(cvData.intro.description)}</Text>
            </View>
          )}

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

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t(pdfSectionTitles.workExperience)}
            </Text>
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
                        {`${t(link.text)}: ${link.href}`}
                      </Link>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>

          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>
              {t(pdfSectionTitles.education)}
            </Text>
            {educationExp.map((edu, index) => (
              <View key={edu.id} style={{ marginBottom: 8 }} wrap={false}>
                <Text style={styles.boldPrimaryText}>{edu.year}</Text>
                <Text style={styles.text}>{t(edu.details)}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t(cvData.personalProjectsTitle)}
            </Text>
            {(cvData.projects || []).map((project, index) => (
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

          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>
              {t(pdfSectionTitles.contact)}
            </Text>
            {otherContacts.map((ct, index) => (
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
        </View>
      </Page>
    </Document>
  )
}

const WorkPDF = ({
  cvData,
  lang,
}: {
  cvData: CvData | null
  lang: Language
}) => {
  if (!cvData) {
    const loadingText =
      lang === 'sv' ? 'Laddar PDF-data...' : 'Loading PDF data...'
    return <Text>{loadingText}</Text>
  }

  const dataWithEnsuredArrays: CvData = {
    ...cvData,
    profile: cvData.profile || {
      title: { en: '', sv: '' },
      description: { en: '', sv: '' },
      id: 0,
      section: '',
    },
    intro: cvData.intro,
    skills: Array.isArray(cvData.skills) ? cvData.skills : [],
    experience: Array.isArray(cvData.experience) ? cvData.experience : [],
    projects: Array.isArray(cvData.projects) ? cvData.projects : [],
    contact: Array.isArray(cvData.contact) ? cvData.contact : [],
    languages: Array.isArray(cvData.languages) ? cvData.languages : [],
    hobbies: Array.isArray(cvData.hobbies) ? cvData.hobbies : [],
    personalProjectsTitle: cvData.personalProjectsTitle || {
      en: 'Personal Projects',
      sv: 'Personliga Projekt',
    },
  }
  return <WorkPDFDocument cvData={dataWithEnsuredArrays} lang={lang} />
}

export default WorkPDF