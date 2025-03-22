// src/pages/Work.tsx
import React, { useEffect, useState } from 'react'
import {
  fetchCvContact,
  fetchCvContent,
  fetchCvExperience,
  fetchCvLanguages,
  fetchCvProjects,
  fetchCvSkills,
} from '../api/cvApi'
import {
  CvContact,
  CvContent,
  CvExperience,
  CvLanguage,
  CvProject,
  CvSkill,
} from '../types/CvTypes'
import ProfileSkills from '@/components/worktabs/ProfileSkills'
import Experience from '@/components/worktabs/Experience'
import LanguageMisc from '@/components/worktabs/LanguageMisc'
import PageLayout from '@/layout/PageLayout'
import WorkHeader from '@/layout/WorkHeader'
import WorkNav from '@/layout/WorkNav'
import WorkFooter from '@/layout/WorkFooter'
import Hobbies from '@/components/worktabs/Hobbies'
import Projects from '@/components/worktabs/Projects'
import Contact from '@/components/worktabs/Contact'

const Work: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('profile')
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

  const profileItem = cvContent.find((item) => item.section === 'profile')
  const introItem = cvContent.find((item) => item.section === 'intro')
  const hobbiesData = cvContent.filter((item) => item.section === 'hobbies')

  const otherSkills = cvSkills.filter(
    (skill) => !['Soft Skills', 'Work Methodologies'].includes(skill.category),
  )
  const softSkills = cvSkills.filter(
    (skill) => skill.category === 'Soft Skills',
  )
  const workMethodologies = cvSkills.filter(
    (skill) => skill.category === 'Work Methodologies',
  )

  // Strukturera data för PDF (används i WorkFooter)
  const cvData = {
    profile: profileItem || {
      id: 0,
      section: 'profile',
      title: '',
      description: '',
    },
    intro: introItem,
    skills: cvSkills,
    experience: cvExperience,
    projects: cvProjects,
    contact: cvContact,
    languages: cvLanguages,
    personalProjectsTitle: 'Personal Projects',
  }

  // Välj innehåll baserat på aktuell flik
  let tabContent
  switch (activeTab) {
    case 'profile':
      tabContent = (
        <ProfileSkills
          profile={profileItem}
          intro={introItem}
          otherSkills={otherSkills}
          softSkills={softSkills}
          workMethodologies={workMethodologies}
        />
      )
      break
    case 'experience':
      tabContent = <Experience experiences={cvExperience} />
      break
    case 'language':
      tabContent = <LanguageMisc languages={cvLanguages} />
      break
    case 'hobbies':
      tabContent = <Hobbies hobbies={hobbiesData} />
      break
    case 'projects':
      tabContent = <Projects projects={cvProjects} />
      break
    case 'contact':
      tabContent = <Contact contacts={cvContact} />
      break
    default:
      tabContent = <div>Content not available</div>
  }

  return (
    <PageLayout
      header={
        <WorkHeader
          title={profileItem?.title || ''}
          description={profileItem?.description || ''}
        />
      }
      nav={<WorkNav activeTab={activeTab} onTabChange={setActiveTab} />}
      main={
        <main className="max-w-5xl mx-auto px-2 sm:px-4 pb-12 space-y-8">
          {tabContent}
        </main>
      }
      footer={<WorkFooter cvData={cvData} />}
    />
  )
}

export default Work
