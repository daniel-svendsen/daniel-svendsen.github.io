import React, { useRef } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import portraitImage from '@/assets/portraits/bild1.jpg'
import cvContent from '../data/cvContent'
import { getTimelineEvents } from '../data/timeLineEvents'
import getTabsData from '../data/tabsData'
import SectionWrapper from '../components/SectionWrapper'
import CVTabs from '../components/CvTabs'
import WorkPDF from '../components/WorkPDF'
import { useInView } from '../hooks/useInView'

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
              className="rounded-full w-34 h-36 sm:w-40 sm:h-44 shadow-2xl border-4 border-green-600"
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
    //   id: 'pdfpreview',
    //   component: (
    //     <SectionWrapper>
    //       <div className="w-full h-[500px] mb-4 border border-gray-300 rounded">
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
            <PDFDownloadLink
              document={<WorkPDF />}
              fileName="Daniel_Svendsen_CV.pdf"
            >
              {({ loading }) => (
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
                  {loading ? 'Genererar PDF...' : 'Ladda ner CV'}
                </button>
              )}
            </PDFDownloadLink>
          </div>
        </SectionWrapper>
      ),
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-green-100 to-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {sections.map((section) => {
          if (section.id === 'tabs') {
            return (
              <div key={section.id} className="mb-10">
                {section.component}
              </div>
            )
          }

          const ref = useRef(null)
          const { isInView, delayedOutOfView } = useInView(ref, 0.5, 500)

          return (
            <div
              key={section.id}
              ref={ref}
              className={`mb-10 transform transition-transform duration-500 ease-out ${
                isInView
                  ? 'scale-105 shadow-xl'
                  : delayedOutOfView
                    ? 'scale-100'
                    : ''
              }`}
            >
              {section.component}
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Work