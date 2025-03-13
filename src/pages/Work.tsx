// src/pages/Work.tsx
import React from 'react'
import { motion } from 'framer-motion'
import portraitImage from '@/assets/bild1.jpg'
import cvContent from '../data/cvContent'
import { getTimelineEvents } from '../data/timeLineEvents'
import getTabsData from '../data/tabsData'
import SectionWrapper from '../components/SectionWrapper'
import CVTabs from '../components/CvTabs'
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
              className="rounded-full w-34 h-36 sm:w-40 sm:h-44 shadow-2xl border-4 border-highlight"
            />
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-textPrimary text-center">
              {content.profile.name}
            </h1>
            <p className="mt-2 max-w-prose text-center text-textSecondary text-lg">
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
    // {
    //   id: 'pdfpreview',
    //   component: (
    //     <SectionWrapper>
    //       <div className="w-full h-[500px] mb-4 border border-borderColor rounded">
    //         <PDFViewer style={{ width: '100%', height: '100%' }}>
    //           <WorkPDF />
    //         </PDFViewer>
    //       </div>
    //     </SectionWrapper>
    //   ),
    // },
    {
      id: 'pdf-download',
      component: (
        <SectionWrapper className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mt-4">
            <PdfDownloadButton />
          </div>
        </SectionWrapper>
      ),
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
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
