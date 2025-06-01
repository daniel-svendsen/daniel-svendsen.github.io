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

const Work: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('profile')
  const { data: cvData, isLoading, error: hookError } = usePreloadedData()

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Daniel Svendsén - CV & Arbetslivserfarenhet',
    description:
      'Utforska Daniel Svendséns professionella bakgrund, tekniska färdigheter och projekt.',
    url: 'https://www.svendsenphotography.com/work',
  }

  const renderTabContent = () => {
    if (!cvData) return <div>Innehåll ej tillgängligt</div>

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
      projects: <Projects projects={cvData.projects} />,
      contact: <ContactTab contacts={cvData.contact} />,
    }
    return tabComponents[activeTab] || <div>Innehåll ej tillgängligt</div>
  }

  return isLoading ? (
    <div className="text-center p-10">Laddar innehåll...</div>
  ) : hookError || !cvData ? (
    <div className="text-red-600 text-center mt-4">
      Fel: {hookError || 'Kunde inte ladda CV-data.'}
    </div>
  ) : (
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