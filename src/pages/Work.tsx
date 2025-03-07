import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { PDFDownloadLink } from '@react-pdf/renderer'
import portraitImage from '@/assets/portraits/bild1.jpg'
import cvContent from '../data/cvContent'
import { getTimelineEvents } from '../data/timeLineEvents'
import getTabsData from '../data/tabsData'
import SectionWrapper from '../components/SectionWrapper'
import CVTabs from '../components/CvTabs'
import WorkPDF from '../components/WorkPDF'

const Work = () => {
  const content = cvContent
  const timelineEvents = useMemo(() => getTimelineEvents(content), [content])
  const tabsData = useMemo(
    () => getTabsData(content, timelineEvents),
    [content, timelineEvents],
  )

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {[
          {
            id: 'profile',
            component: (
              <SectionWrapper className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col items-center">
                  <img
                    src={portraitImage}
                    alt="Daniel Svendsén"
                    className="rounded-full w-36 h-36 sm:w-44 sm:h-44 shadow-2xl border-4 border-indigo-300"
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
          // {
          //   id: 'pdf-preview',
          //   component: (
          //     <SectionWrapper className="bg-white rounded-xl shadow-lg p-8">
          //       <h2 className="text-center text-lg font-semibold mb-4">
          //         Förhandsvisa CV som PDF
          //       </h2>
          //       <PDFViewer width="100%" height={500}>
          //         <WorkPDF />
          //       </PDFViewer>
          //     </SectionWrapper>
          //   ),
          // },
          {
            id: 'pdf-download',
            component: (
              <SectionWrapper className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="mt-4">
                  <PDFDownloadLink
                    document={<WorkPDF />}
                    fileName="Daniel_Svendsen_CV.pdf"
                  >
                    {({ loading }) => (
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
                        {loading ? 'Genererar PDF...' : 'Ladda ner CV'}
                      </button>
                    )}
                  </PDFDownloadLink>
                </div>
              </SectionWrapper>
            ),
          },
        ].map((section) => (
          <motion.div
            key={section.id}
            className="mb-10"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1 }}
            whileInView={{
              scale: 1.05,
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
            }}
            exit={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ amount: 0.5 }}
          >
            {section.component}
          </motion.div>
        ))}
      </div>
    </main>
  )
}

export default Work