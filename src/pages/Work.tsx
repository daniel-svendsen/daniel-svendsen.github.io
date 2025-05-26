import React, { useEffect, useRef, useState } from 'react'
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
  CvContent as CvContentType,
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
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'

const Work: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('profile')
  const [cvContentData, setCvContentData] = useState<CvContentType[]>([])
  const [cvSkills, setCvSkills] = useState<CvSkill[]>([])
  const [cvExperience, setCvExperience] = useState<CvExperience[]>([])
  const [cvProjects, setCvProjects] = useState<CvProject[]>([])
  const [cvContact, setCvContact] = useState<CvContact[]>([])
  const [cvLanguages, setCvLanguages] = useState<CvLanguage[]>([])
  const [error, setError] = useState<string | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isCarouselVisible, setIsCarouselVisible] = useState(false)

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
        setCvContentData(content)
        setCvSkills(skills)
        setCvExperience(experience)
        setCvProjects(projects)
        setCvContact(contact)
        setCvLanguages(languages)
      })
      .catch((err: Error) => setError(err.message))
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            setIsCarouselVisible(true)
            if (entry.target) {
              observer.unobserve(entry.target)
            }
          }, 200)
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      },
    )
    const currentCarouselRef = carouselRef.current
    if (currentCarouselRef) {
      observer.observe(currentCarouselRef)
    }
    return () => {
      if (currentCarouselRef) {
        observer.unobserve(currentCarouselRef)
      }
      clearTimeout(timeoutId)
    }
  }, [carouselRef.current])

  if (error) {
    return <div className="text-red-600 text-center mt-4">Fel: {error}</div>
  }

  const profileItem = cvContentData.find((item) => item.section === 'profile')
  const introItem = cvContentData.find((item) => item.section === 'intro')
  const hobbiesData = cvContentData.filter((item) => item.section === 'hobbies')

  const cvDataForPdf = {
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

  let tabContentElement
  switch (activeTab) {
    case 'profile':
      tabContentElement = (
        <ProfileSkills
          profile={profileItem}
          intro={introItem}
          skills={cvSkills}
        />
      )
      break
    case 'experience':
      tabContentElement = <Experience experiences={cvExperience} />
      break
    case 'language':
      tabContentElement = <LanguageMisc languages={cvLanguages} />
      break
    case 'hobbies':
      tabContentElement = <Hobbies hobbies={hobbiesData} />
      break
    case 'projects':
      tabContentElement = (
        <Projects
          projects={cvProjects}
          carouselRef={carouselRef}
          isCarouselVisible={isCarouselVisible}
        />
      )
      break
    case 'contact':
      tabContentElement = <Contact contacts={cvContact} />
      break
    default:
      tabContentElement = <div>Content not available</div>
  }

  return (
    <PageLayout
      header={
        <WorkHeader
          title={profileItem?.title || 'Daniel Svendsén'}
          description={profileItem?.description || 'Systemutvecklare'}
        />
      }
      nav={<WorkNav activeTab={activeTab} onTabChange={setActiveTab} />}
      main={
        <Section
          roundedBottom="10xl"
          bgColor="beige"
          className="mx-2 sm:mx-4 lg:mx-auto max-w-none lg:max-w-7xl xl:max-w-screen-2xl"
        >
          <SectionContent>{tabContentElement}</SectionContent>
        </Section>
      }
      footer={<WorkFooter cvData={cvDataForPdf} />}
    />
  )
}

export default Work