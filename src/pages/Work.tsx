import React from 'react'
import { motion } from 'framer-motion'
import portraitImage from '@/assets/bild1.jpg'
import cvContent from '../data/cvContent'
import { getTimelineEvents } from '../data/timeLineEvents'
import getTabsData from '../data/tabsData'
import SectionWrapper from '../components/SectionWrapper'
import CVTabs from '../components/CvTabs'
import WorkPDF from '../components/WorkPDF'
import PdfDownloadButton from '../components/PdfDownloadButton'

const Work = () => {
  const content = cvContent
  const timelineEvents = getTimelineEvents(content)
  const tabsData = getTabsData(content, timelineEvents)

  const sections = [
    {
      id: 'profile',
      component: (
        <SectionWrapper className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center">
            <img
              src={portraitImage}
              alt="Daniel Svendsén"
              className="rounded-full w-34 h-36 sm:w-40 sm:h-44 shadow-2xl border-4 border-blue-600"
            />
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-gray-900 text-center">
              {content.profile.name}
            </h1>
            <p className="mt-2 max-w-prose text-center text-gray-700 text-lg">
              {content.profile.description}
            </p>
          </div>
        </SectionWrapper>
      ),
    },
    {
      id: 'tabs',
      component: (
        <SectionWrapper className="bg-white rounded-xl shadow-lg p-8">
          <CVTabs tabsData={tabsData} />
        </SectionWrapper>
      ),
    },
    {
      id: 'pdf-download',
      component: (
        <SectionWrapper className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mt-4">
            <PdfDownloadButton
              document={<WorkPDF />}
              fileName="Daniel_Svendsen_CV.pdf"
            >
              {({ loading }) => (
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                  {loading ? 'Genererar PDF...' : 'Download as PDF'}
                </button>
              )}
            </PdfDownloadButton>
          </div>
        </SectionWrapper>
      ),
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br justify-start from-gray-50 via-blue-200 to-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {sections.map((section) => (
          // Byt <div> till <motion.div> och använd framer-motion
          <motion.div
            key={section.id}
            // Första läge (innan man scrollat ner)
            initial={{ opacity: 0, y: 20 }}
            // Hur det ska se ut när sektionen kommer in i viewport
            whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
            // Talar om hur stor del av sektionen som måste synas
            viewport={{ once: false, amount: 0.05 }}
            // Vilken typ av animering
            transition={{ type: 'spring', stiffness: 300 }}
            // Allmän styling
            className="mb-10"
          >
            {section.component}
          </motion.div>
        ))}
      </div>
    </main>
  )
}

export default Work