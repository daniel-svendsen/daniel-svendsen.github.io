// src/components/Work.tsx

import React, { useEffect, useState } from 'react'
import { pdf } from '@react-pdf/renderer'
import {
  CvContact,
  CvContent,
  CvExperience,
  CvLanguage,
  CvProject,
  CvSkill,
  fetchCvContact,
  fetchCvContent,
  fetchCvExperience,
  fetchCvLanguages,
  fetchCvProjects,
  fetchCvSkills,
} from '../api'
import Timeline, { TimelineEvent } from '@/components/TimeLine'
import SectionWrapper from '@/components/SectionWrapper'
import ToolIcon from '@/components/ToolIcons'
import profileImg from '../assets/bild1.jpg'
import WorkPDF from '@/components/WorkPDF'

const Work: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('profile')

  // Backend-data
  const [cvContent, setCvContent] = useState<CvContent[]>([])
  const [cvSkills, setCvSkills] = useState<CvSkill[]>([])
  const [cvExperience, setCvExperience] = useState<CvExperience[]>([])
  const [cvProjects, setCvProjects] = useState<CvProject[]>([])
  const [cvContact, setCvContact] = useState<CvContact[]>([])
  const [cvLanguages, setCvLanguages] = useState<CvLanguage[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([
      fetchCvContent(),
      fetchCvSkills(),
      fetchCvExperience(),
      fetchCvProjects(),
      fetchCvContact(),
      fetchCvLanguages(),
    ])
      .then(([content, skills, experience, projects, contact, languages]) => {
        setCvContent(content)
        setCvSkills(skills)
        setCvExperience(experience)
        setCvProjects(projects)
        setCvContact(contact)
        setCvLanguages(languages)
      })
      .catch((err: Error) => setError(err.message))
  }, [])

  if (error) {
    return <div className="text-red-600 text-center mt-4">Fel: {error}</div>
  }

  // Hämta profildata från databasen (section "profile")
  const profileItem = cvContent.find((item) => item.section === 'profile')

  // Hämta introduktionstexten (section "introduction")
  const introItem = cvContent.find((item) => item.section === 'intro')

  // Filtrera skills: dela upp i "övriga" (visa endast skill.tool),
  // samt de som tillhör Soft Skills och Work Methodologies.
  const otherSkills = cvSkills.filter(
    (skill) => !['Soft Skills', 'Work Methodologies'].includes(skill.category),
  )
  const softSkills = cvSkills.filter(
    (skill) => skill.category === 'Soft Skills',
  )
  const workMethodologies = cvSkills.filter(
    (skill) => skill.category === 'Work Methodologies',
  )

  // Hjälpfunktion för att extrahera år (de fyra första siffrorna) från en årtext
  const extractYear = (yearText: string) => {
    const match = yearText.match(/\d{4}/)
    return match ? parseInt(match[0]) : 0
  }

  // Sortera erfarenheter så att den senaste visas först
  const sortedExperiences = [...cvExperience].sort(
    (a, b) => extractYear(b.year) - extractYear(a.year),
  )

  // Mappa CvExperience -> TimelineEvent för TimeLine-komponenten med typ med stor bokstav
  const experienceEvents: TimelineEvent[] = sortedExperiences.map((exp) => ({
    title: exp.type.charAt(0).toUpperCase() + exp.type.slice(1),
    date: exp.year,
    description: exp.details,
    link: exp.linkHref
      ? { text: exp.linkText || 'Link', href: exp.linkHref }
      : undefined,
  }))

  // Implementera nedladdning av PDF genom att rendera WorkPDF-komponenten
  const handleDownloadPdf = async () => {
    try {
      const [content, skills, experience, projects, contact, languages] =
        await Promise.all([
          fetchCvContent(),
          fetchCvSkills(),
          fetchCvExperience(),
          fetchCvProjects(),
          fetchCvContact(),
          fetchCvLanguages(),
        ])

      // Strukturera datan enligt WorkPDFs förväntningar
      const profile = content.find((item) => item.section === 'profile') || {
        title: 'Daniel Svendsén',
        description: 'No profile description found.',
      }
      const intro = content.find((item) => item.section === 'intro')
      const personalProjectsTitle = 'Personal Projects'

      const cvData = {
        profile,
        intro,
        skills,
        experience,
        projects,
        contact,
        languages,
        personalProjectsTitle,
      }

      // Generera PDF med rätt data
      const blob = await pdf(<WorkPDF cvData={cvData} />).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'cv.pdf'
      a.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('PDF nedladdning misslyckades', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gradient-from via-gradient-via to-gradient-to text-textPrimary">
      {/* HEADER med profilbild och data hämtat från databasen */}
      <header className="pt-20 sm:pt-20 shadow p-6 flex flex-col items-center mb-6">
        <img
          src={profileImg}
          alt="Profile"
          className="w-20 h-24 sm:w-32 sm:h-32 rounded-full mb-4 object-cover"
        />
        <div className="text-center px-2">
          <h1 className="text-2xl sm:text-3xl font-bold">
            {profileItem?.title}
          </h1>
          <p className="mt-2 max-w-xl text-textSecondary">
            {profileItem?.description}
          </p>
        </div>
      </header>

      {/* NAV-FLIKAR */}
      <nav className="bg-white shadow mb-4">
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 p-2">
          {[
            { id: 'profile', label: 'Profile & Skills' },
            { id: 'experience', label: 'Experiences' },
            { id: 'language', label: 'Language & Miscellaneous' },
            { id: 'hobbies', label: 'Hobbies' },
            { id: 'projects', label: 'Personal Projects' },
            { id: 'contact', label: 'Contact' },
          ].map((tab) => (
            <li key={tab.id}>
              <button
                className={`px-3 py-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'border-b-2 border-highlight text-highlight'
                    : 'text-textPrimary'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* INNEHÅLL PER FLIK */}
      <main className="max-w-5xl mx-auto px-2 sm:px-4 pb-12 space-y-8">
        {/* === Profile & Skills === */}
        {activeTab === 'profile' && (
          <SectionWrapper title="Profile & Skills">
            {introItem && (
              <p className="text-textSecondary bg-white p-3 rounded shadow mb-4">
                {introItem.description}
              </p>
            )}

            {/* Skills: visa endast verktygsnamn för de övriga posterna */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {otherSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center bg-white p-3 rounded shadow"
                >
                  <ToolIcon toolName={skill.tool} className="mr-2 w-5 h-5" />
                  <p className="font-medium">{skill.tool}</p>
                </div>
              ))}
            </div>

            {/* Visa Soft Skills och Work Methodologies i en gemensam grid */}
            {(softSkills.length > 0 || workMethodologies.length > 0) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {softSkills.length > 0 && (
                  <div className="bg-white p-3 rounded shadow">
                    <h4 className="text-lg font-semibold">Soft Skills</h4>
                    <p className="text-textSecondary">{softSkills[0].tool}</p>
                  </div>
                )}
                {workMethodologies.length > 0 && (
                  <div className="bg-white p-3 rounded shadow">
                    <h4 className="text-lg font-semibold">
                      Work Methodologies
                    </h4>
                    <p className="text-textSecondary">
                      {workMethodologies[0].tool}
                    </p>
                  </div>
                )}
              </div>
            )}
          </SectionWrapper>
        )}

        {/* === Experiences === */}
        {activeTab === 'experience' && (
          <SectionWrapper title="Experiences">
            <Timeline events={experienceEvents} />
          </SectionWrapper>
        )}

        {/* === Language & Miscellaneous === */}
        {activeTab === 'language' && (
          <SectionWrapper title="Language & Miscellaneous">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cvLanguages.map((lang) => (
                <li
                  key={lang.id}
                  className="p-3 bg-white rounded shadow flex flex-col"
                >
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-textSecondary text-sm">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </SectionWrapper>
        )}

        {/* === Hobbies === */}
        {activeTab === 'hobbies' && (
          <SectionWrapper title="Hobbies">
            {cvContent
              .filter((item) => item.section === 'hobbies')
              .map((item) => (
                <div key={item.id} className="mb-4 bg-white p-4 rounded shadow">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-textSecondary">{item.description}</p>
                </div>
              ))}
          </SectionWrapper>
        )}

        {/* === Personal Projects === */}
        {activeTab === 'projects' && (
          <SectionWrapper title="Personal Projects">
            {cvProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-4 mb-4 rounded shadow"
              >
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="mt-1 text-textSecondary">{project.details}</p>
              </div>
            ))}
          </SectionWrapper>
        )}

        {/* === Contact === */}
        {activeTab === 'contact' && (
          <SectionWrapper title="Contact">
            {cvContact.map((contact) => (
              <div
                key={contact.id}
                className="bg-white p-4 mb-4 rounded shadow"
              >
                <p className="text-textPrimary">
                  <span className="font-semibold">{contact.type}:</span>{' '}
                  {contact.details}
                </p>
                {contact.linkHref && (
                  <a
                    href={contact.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-highlight underline"
                  >
                    Link
                  </a>
                )}
              </div>
            ))}
          </SectionWrapper>
        )}
      </main>

      {/* SEKTION FÖR ATT LADDA NER PDF */}
      <footer className="bg-white shadow p-4 text-center">
        <button
          onClick={handleDownloadPdf}
          className="px-4 py-2 bg-highlight text-white rounded hover:bg-blue-700 transition"
        >
          Download CV as PDF
        </button>
      </footer>
    </div>
  )
}

export default Work
