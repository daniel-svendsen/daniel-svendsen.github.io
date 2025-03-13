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
  const timelineEvents = getTimelineEvents(cvContent)
  const tabsData = getTabsData(cvContent, timelineEvents)

  const sections = [
    {
      id: 'profile',
      component: (
        <SectionWrapper className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col items-center">
            <img
              src={portraitImage}
              alt="Daniel Svendsén"
              className="rounded-full w-34 h-36 sm:w-40 sm:h-44 shadow-2xl border-4 border-highlight"
            />
            <h1 className="text-3xl sm:text-5xl font-extrabold text-textPrimary text-center">
              {cvContent.profile.name}
            </h1>
            <p className="max-w-prose text-center text-textSecondary text-lg">
              {cvContent.profile.description}
            </p>
          </div>
        </SectionWrapper>
      ),
    },
    {
      id: 'tabs',
      component: (
        <SectionWrapper className="mb-12 bg-white rounded-xl shadow-lg">
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
        <SectionWrapper className="mb-12 bg-white rounded-xl shadow-lg p-8 text-center">
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
            className="mb-5 md:mb-10 lg:mb-10"
          >
            {section.component}
          </motion.div>
        ))}
      </div>
    </main>
  )
}

export default Work