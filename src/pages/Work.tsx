import React, { useState } from 'react'
import { usePreloadedData } from '../hooks/usePreloadedData'
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
import { useLanguage } from '@/components/context/LanguageContext'

const Work: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('profile')
  const { data: cvData, isLoading, error: hookError } = usePreloadedData()
  const { t } = useLanguage()

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t({
      en: 'Daniel Svendsén - CV & Work Experience',
      sv: 'Daniel Svendsén - CV & Arbetslivserfarenhet',
    }),
    description: t({
      en: "Explore Daniel Svendsén's professional background, technical skills, and projects.",
      sv: 'Utforska Daniel Svendséns professionella bakgrund, tekniska färdigheter och projekt.',
    }),
    url: 'https://www.svendsenphotography.com/work',
  }

  const seoTitle = t({
    en: 'CV & Experience - Daniel Svendsén',
    sv: 'CV & Erfarenhet - Daniel Svendsén',
  })
  const seoDescription = t({
    en: "Daniel Svendsén's CV and portfolio - technical skills, work experience, and projects.",
    sv: 'Daniel Svendséns CV och portfolio - tekniska färdigheter, arbetslivserfarenhet och projekt.',
  })

  const renderTabContent = () => {
    if (!cvData)
      return (
        <div>
          {t({
            en: 'Content not available',
            sv: 'Innehåll ej tillgängligt',
          })}
        </div>
      )

    const tabComponents: { [key: string]: React.ReactNode } = {
      profile: (
        <ProfileSkills
          profile={cvData.profile}
          intro={cvData.intro}
          skills={cvData.skills}
        />
      ),
      experience: <Experience experiences={cvData.experience} />,
      language: <LanguageMisc languages={cvData.languages} />,
      hobbies: <Hobbies hobbies={cvData.hobbies} />,
      projects: (
        <Projects
          projects={cvData.projects}
          heading={cvData.personalProjectsTitle}
        />
      ),
      contact: <ContactTab contacts={cvData.contact} />,
    }
    return (
      tabComponents[activeTab] || (
        <div>
          {t({ en: 'Content not available', sv: 'Innehåll ej tillgängligt' })}
        </div>
      )
    )
  }

  return isLoading ? (
    <div className="text-center p-10">
      {t({
        en: 'Loading content...',
        sv: 'Laddar innehåll...',
      })}
    </div>
  ) : hookError || !cvData ? (
    <div className="text-red-600 text-center mt-4">
      {t({ en: 'Error: ', sv: 'Fel: ' })}
      {hookError ||
        t({
          en: 'Could not load CV data.',
          sv: 'Kunde inte ladda CV-data.',
        })}
    </div>
  ) : (
    <HelmetProvider>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url="https://www.svendsenphotography.com/work"
        jsonLd={pageJsonLd}
      />
      <PageLayout
        header={
          <WorkHeader
            title={cvData.profile.title}
            description={cvData.profile.description}
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
              <SectionContent>{renderTabContent()}</SectionContent>
            </Section>
          </main>
        }
        footer={<WorkFooter cvData={cvData} />}
      />
    </HelmetProvider>
  )
}

export default Work