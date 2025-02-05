// src/pages/Work.jsx
import React from 'react';
import { Tab } from '@headlessui/react';
import TabPanel from '../components/TabPanel';
import Timeline from '../components/Timeline';
import { generatePDF } from '../utils/generatePDF';
import portraitImage from '../assets/portraits/bild1.jpg';

const CV = () => {
    const content = {
        profile: {
            name: "Daniel Svendsén",
            description:
                "En engagerad och mångsidig person med erfarenhet av både ledarskap och tekniskt arbete som gärna ser helheten.",
        },
        skills: {
            title: "Profil & Kompetenser",
            content: [
                "Jag är en engagerad och driven snart examinerad fullstackutvecklare med en kombination av teknisk kompetens och ledarskapserfarenhet. " +
                "Efter 16 års arbete inom lager och arbetsledning valde jag att förverkliga min vilja att utbilda mig till system- och fullstackutvecklare. " +
                "Jag brinner för att skapa nytt och lösningar från grunden och att bidra till starka och samarbetsvilliga team och ser gärna helheten i allt.",
                { name: "Operativsystem", details: "Windows, WSL" },
                { name: "Programspråk", details: "Java, Javascript, Typescript, HTML/CSS" },
                { name: "Verktyg", details: "Springboot, JUnit, Intellij, Docker, Jenkins, \nBash, Git, Maven, Gradle, Vue, Vite, React, VSCode" },
                { name: "Databaser", details: "SQL, MySQL, MongoDB, SQL Server, SQLite" },
                { name: "Arbetsmetoder", details: "Agila metoder, Scrum, Kanban" },
            ],
        },
        experience: {
            title: "Erfarenheter",
            content: {
                education: [
                    { year: "2023 – pågående", details: "Java Enterprise Utvecklare, Yrgo, Göteborgs Stad, 400 YH-poäng" },
                    { year: "2016", details: "Programmering 1, Betyg B" },
                    { year: "2003 – 2006", details: "Gymnasium, Estetisk inriktning Tv-Produktion, 2500 poäng" },
                ],
                work: [
                    {
                        year: "2024 – pågående",
                        details:
                            "Hjulverkstan - Opensource projekt för Rädda barnen via Alten där jag praktiserade.\nAnvänder: Java, Javascript, Typescript, Springboot, React",
                        link: {
                            text: "GitHub",
                            href: "https://github.com/Hjulverkstan/hjulverkstan",
                        },
                    },
                    { year: "2008 – pågående", details: "ICA - Lagermedarbetare, olika roller inklusive arbetsledare" },
                    { year: "2007", details: "Svensk Bevakningstjänst - Väktare och civilväktare" },
                ],
            },
        },
        languages: {
            title: "Språk & Övrigt",
            content: [
                { name: "Svenska", level: "Flytande tal & skrift" },
                { name: "Engelska", level: "Flytande tal & skrift" },
            ],
        },
        hobbies: {
            title: "Fritidsintressen",
            content:
                "Fotografering med egen firma, laga mat, brygga öl, baka surdegsbröd, fiska, och utflykter i naturen med familjen.",
        },
        contact: {
            title: "Kontakt",
            content: [
                { type: "Adress", details: "Briljantvägen 55, 44260 Kode" },
                { type: "E-post", details: "Daniel-Svendsen@hotmail.se" },
                { type: "Telefon", details: "0707714306" },
            ],
        },
    };

    const extractYear = (dateString) => {
        const match = dateString.match(/\d{4}/);
        return match ? parseInt(match[0], 10) : 0;
    };

    const timelineEvents = [
        ...content.experience.content.education.map(item => ({
            title: "Utbildning",
            date: item.year,
            description: item.details,
        })),
        ...content.experience.content.work.map(item => ({
            title: "Arbetslivserfarenhet",
            date: item.year,
            description: item.details,
            link: item.link,
        })),
    ].sort((a, b) => extractYear(b.date) - extractYear(a.date));

    const tabs = ['Profil & Kompetenser', 'Erfarenheter', 'Språk & Övrigt', 'Fritidsintressen', 'Kontakt'];

    return (
        <main className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-50 p-4 sm:p-6">
            {/* Profilsektion */}
            <section className="flex flex-col items-center space-y-4 mb-8">
                <img
                    src={portraitImage}
                    alt="Daniel Svendsén"
                    className="rounded-full w-24 h-24 sm:w-32 sm:h-32 shadow-xl object-cover object-center"
                />
                <h1 className="text-2xl sm:text-4xl font-bold text-indigo-800 text-center">
                    {content.profile.name}
                </h1>
                <p className="max-w-xs sm:max-w-2xl text-center text-indigo-700 text-sm sm:text-base">
                    {content.profile.description}
                </p>
            </section>

            {/* Flikar */}
            <section className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8">
                <Tab.Group>
                    <Tab.List className="flex flex-wrap justify-center space-x-2 sm:space-x-4 border-b-2 border-indigo-200 pb-2 mb-4">
                        {tabs.map((tab) => (
                            <Tab
                                key={tab}
                                className={({ selected }) =>
                                    `px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-colors duration-300 focus:outline-none ${
                                        selected
                                            ? 'border-b-2 border-indigo-600 text-indigo-600'
                                            : 'text-gray-600 hover:text-indigo-600'
                                    }`
                                }
                            >
                                {tab}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <TabPanel title={content.skills.title}>
                                {content.skills.content.map((item, index) => {
                                    if (typeof item === 'string') {
                                        return item === '' ? <br key={index} /> : <p key={index} className="mb-2 text-xs sm:text-sm">{item}</p>;
                                    } else {
                                        return (
                                            <div key={index} className="mb-1 text-xs sm:text-sm">
                                                <strong>{item.name}:</strong> {item.details}
                                            </div>
                                        );
                                    }
                                })}
                            </TabPanel>
                        </Tab.Panel>
                        <Tab.Panel>
                            <TabPanel title={content.experience.title}>
                                <section className="mt-4">
                                    <Timeline events={timelineEvents} />
                                </section>
                            </TabPanel>
                        </Tab.Panel>
                        <Tab.Panel>
                            <TabPanel title={content.languages.title}>
                                <ul className="space-y-1 text-xs sm:text-sm">
                                    {content.languages.content.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.name}:</strong> {item.level}
                                        </li>
                                    ))}
                                </ul>
                            </TabPanel>
                        </Tab.Panel>
                        <Tab.Panel>
                            <TabPanel title={content.hobbies.title}>
                                <p className="text-xs sm:text-sm">{content.hobbies.content}</p>
                            </TabPanel>
                        </Tab.Panel>
                        <Tab.Panel>
                            <TabPanel title={content.contact.title}>
                                <ul className="space-y-1 text-xs sm:text-sm">
                                    {content.contact.content.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.type}:</strong> {item.details}
                                        </li>
                                    ))}
                                </ul>
                            </TabPanel>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </section>

            {/* PDF-knapp */}
            <div className="text-center">
                <button
                    onClick={() => generatePDF(content)}
                    className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full shadow-xl hover:from-blue-500 hover:to-indigo-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 text-xs sm:text-sm"
                >
                    Ladda ner CV som PDF
                </button>
            </div>
        </main>
    );
};

export default CV;
