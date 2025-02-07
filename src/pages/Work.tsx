// src/pages/Work.tsx
import React, {useMemo} from 'react';
import portraitImage from '@/assets/portraits/bild1.jpg';
import cvContent from "../data/cvContent";
import {getTimelineEvents} from "../data/timeLineEvents";
import getTabsData from "../data/tabsData";
import SectionWrapper from "../components/SectionWrapper";
import CVTabs from "../components/CvTabs";
import PdfDownloadButton from "../components/PdfDownloadButton";

const Work = () => {
    const content = cvContent;
    const timelineEvents = useMemo(() => getTimelineEvents(content), [content]);
    const tabsData = useMemo(() => getTabsData(content, timelineEvents), [content, timelineEvents]);

    return (
        <main className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-50 p-4 sm:p-6">
            {/* Profile section */}
            <SectionWrapper className="bg-gradient-to-r from-indigo-50 to-blue-50 border-0 shadow-none mb-8">
                <div className="flex flex-col items-center space-y-4">
                    <img
                        src={portraitImage}
                        alt="Daniel Svendsén"
                        className="rounded-full w-24 h-24 sm:w-32 sm:h-32 shadow-xl object-cover object-center"
                    />
                    <h1 className="text-2xl sm:text-4xl font-bold text-indigo-800 text-center">
                        {content.profile.name}
                    </h1>
                    <p className="max-w-xs sm:max-w-2xl text-center text-indigo-700 text-xs sm:text-base">
                        {content.profile.description}
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <CVTabs tabsData={tabsData}/>
            </SectionWrapper>

            {/* PDF-button */}
            <SectionWrapper className="text-center">
                <PdfDownloadButton content={content}/>
            </SectionWrapper>
        </main>
    );
};

export default Work;
