import React, { lazy, useEffect, useRef, useState } from 'react'
import {
  fetchCvContact,
  fetchCvContent,
  fetchCvExperience,
  fetchCvLanguages,
  fetchCvProjects,
  fetchCvSkills,
} from '../api/cvApi'
import {
  type CvContact,
  type CvContent as CvContentType,
  type CvData,
  type CvExperience,
  type CvLanguage,
  type CvProject,
  type CvSkill,
} from '../types/CvTypes'
import ProfileSkills from '@/components/worktabs/ProfileSkills'
import Experience from '@/components/worktabs/Experience'
import LanguageMisc from '@/components/worktabs/LanguageMisc'
import WorkHeader from '@/layout/WorkHeader'
import WorkNav from '@/layout/WorkNav'
import WorkFooter from '@/layout/WorkFooter'
import Hobbies from '@/components/worktabs/Hobbies'
import Projects from '@/components/worktabs/Projects'
import ContactTab from '@/components/worktabs/Contact'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { HelmetProvider } from 'react-helmet-async'
import SEO from '@/components/SEO'
import PageLayout from '@/layout/PageLayout'

const Carousel = lazy(() => import('../components/Carousel'))

const Work: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('profile')
  const [cvContentData, setCvContentData] = useState<CvContentType[]>([])
  const [cvSkills, setCvSkills] = useState<CvSkill[]>([])
  const [cvExperience, setCvExperience] = useState<CvExperience[]>([])
  const [cvProjects, setCvProjects] = useState<CvProject[]>([])
  const [cvContact, setCvContactData] = useState<CvContact[]>([])
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
        setCvContactData(contact)
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
    if (currentCarouselRef && activeTab === 'projects') {
      observer.observe(currentCarouselRef)
    }
    return () => {
      if (currentCarouselRef) {
        observer.unobserve(currentCarouselRef)
      }
      clearTimeout(timeoutId)
    }
  }, [activeTab, carouselRef])

  const profileItemForHeader = React.useMemo(
    () => cvContentData.find((item) => item.section === 'profile'),
    [cvContentData],
  )
  const introItemForPdf = React.useMemo(
    () => cvContentData.find((item) => item.section === 'intro'),
    [cvContentData],
  )

  if (error) {
    return <div className="text-red-600 text-center mt-4">Fel: {error}</div>
  }

  const cvDataForPdf: CvData | null =
    profileItemForHeader ||
    introItemForPdf ||
    cvSkills.length > 0 ||
    cvExperience.length > 0 ||
    cvProjects.length > 0 ||
    cvContact.length > 0 ||
    cvLanguages.length > 0
      ? {
          profile: profileItemForHeader || {
            id: 0,
            section: 'profile',
            title: '',
            description: '',
          },
          intro: introItemForPdf,
          skills: cvSkills,
          experience: cvExperience,
          projects: cvProjects,
          contact: cvContact,
          languages: cvLanguages,
          personalProjectsTitle: 'Personal Projects',
        }
      : null

  let tabContentElement
  switch (activeTab) {
    case 'profile':
      tabContentElement = (
        <ProfileSkills
          profile={profileItemForHeader}
          intro={introItemForPdf}
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
      tabContentElement = (
        <Hobbies
          cvContent={cvContentData.filter((item) => item.section === 'hobbies')}
        />
      )
      break
    case 'projects':
      tabContentElement = <Projects projects={cvProjects} />
      break
    case 'contact':
      tabContentElement = <ContactTab contacts={cvContact} />
      break
    default:
      tabContentElement = <div>Innehåll ej tillgängligt</div>
  }

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Daniel Svendsén - CV & Arbetslivserfarenhet',
    description:
      'Utforska Daniel Svendséns professionella bakgrund, tekniska färdigheter och projekt.',
    url: 'https://www.svendsenphotography.com/work',
  }

  return (
    <HelmetProvider>
      <SEO
        title="CV & Erfarenhet - Daniel Svendsén"
        description="Daniel Svendséns CV och portfolio - tekniska färdigheter, arbetslivserfarenhet och projekt."
        url="https://www.svendsenphotography.com/work"
        jsonLd={pageJsonLd}
      />
      <PageLayout
        header={
          <WorkHeader
            title={profileItemForHeader?.title || 'Daniel Svendsén'}
            description={
              profileItemForHeader?.description || 'Systemutvecklare'
            }
          />
        }
        nav={<WorkNav activeTab={activeTab} onTabChange={setActiveTab} />}
        main={
          <main className="pb-12">
            <Section
              shape="organicSquircle"
              bgColor="offWhite"
              className="my-8 md:my-12 w-full lg:mx-auto max-w-none lg:max-w-7xl xl:max-w-screen-2xl"
            >
              <SectionContent>
                {error && (
                  <div className="text-red-500 p-4">
                    Kunde inte ladda CV-data: {error}
                  </div>
                )}
                {!error &&
                (cvContentData.length > 0 ||
                  cvSkills.length > 0 ||
                  cvExperience.length > 0 ||
                  cvProjects.length > 0 ||
                  cvContact.length > 0 ||
                  cvLanguages.length > 0 ||
                  activeTab === 'projects') ? (
                  tabContentElement
                ) : (
                  <div className="text-center p-10">Laddar innehåll...</div>
                )}
              </SectionContent>
            </Section>
          </main>
        }
        footer={<WorkFooter cvData={cvDataForPdf} />}
      />
    </HelmetProvider>
  )
}

export default Work