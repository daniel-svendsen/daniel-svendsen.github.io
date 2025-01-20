import React from 'react';
import { Tab } from '@headlessui/react';
import TabPanel from '../components/TabPanel';
import { generatePDF } from '../utils/generatePDF';
import portraitImage from '../assets/portraits/bild1.jpg';

const CV = () => {
    const content = {
        profile: {
            name: "Daniel Svendsén",
            description:
                "En engagerad och mångsidig person med erfarenhet av både ledarskap och tekniskt arbete som gärna ser helheten."
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
                { name: "Arbetsmetoder", details: "Agila metoder, Scrum, Kanban" }
            ]
        },
        experience: {
            title: "Erfarenheter",
            content: {
                education: [
                    { year: "2023 – pågående", details: "Java Enterprise Utvecklare, Yrgo, Göteborgs Stad, 400 YH-poäng" },
                    { year: "2016", details: "Programmering 1, Betyg B" },
                    { year: "2003 – 2006", details: "Gymnasium, Estetisk inriktning Tv-Produktion, 2500 poäng" }
                ],
                work: [
                    { year: "2024 – pågående", details: "Hjulverkstan - Opensource projekt för Rädda barnen via Alten där jag praktiserade.\nAnvänder: Java, Javascript, Typescript, Springboot, React\nhttps://github.com/Hjulverkstan" },
                    { year: "2008 – pågående", details: "ICA - Lagermedarbetare, olika roller inklusive arbetsledare" },
                    { year: "2007", details: "Svensk Bevakningstjänst - Väktare och civilväktare" }
                ]
            }
        },
        languages: {
            title: "Språk & Övrigt",
            content: [
                { name: "Svenska", level: "Flytande tal & skrift" },
                { name: "Engelska", level: "Flytande tal & skrift" }
            ]
        },
        hobbies: {
            title: "Fritidsintressen",
            content: "Fotografering med egen firma, laga mat, brygga öl, baka surdegsbröd, fiska, och utflykter i naturen med familjen."
        },
        contact: {
            title: "Kontakt",
            content: [
                { type: "Adress", details: "Briljantvägen 55, 44260 Kode" },
                { type: "E-post", details: "Daniel-Svendsen@hotmail.se" },
                { type: "Telefon", details: "0707714306" }
            ]
        }
    };

    const tabs = ['Profil & Kompetenser', 'Erfarenheter', 'Språk & Övrigt', 'Fritidsintressen', 'Kontakt'];

    return (
        <main className="p-6">
            <section className="flex flex-col items-center space-x-4 sm:space-x-6">
                <img src={portraitImage} alt="Daniel Svendsén" className="rounded-full w-32 h-32 mb-4" />
                <h1 className="text-2xl font-bold">{content.profile.name}</h1>
                <p className="text-gray-600 whitespace-pre-line">{content.profile.description}</p>
            </section>
            <section className="mt-8">
                <Tab.Group>
                    <Tab.List className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4">
                        {tabs.map((tab, index) => (
                            <Tab
                                key={tab}
                                className={({ selected }) =>
                                    `px-6 py-3 rounded-lg text-center flex items-center justify-center min-h-[50px] ${
                                        selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                    } ${index === tabs.length - 1 ? 'col-span-2' : ''}`
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
                                        return item === "" ? <br key={index} /> : <p key={index} className="mb-4">{item}</p>;
                                    } else {
                                        return (
                                            <div key={index} className="mb-2">
                                                <strong>{item.name}:</strong> {item.details}
                                            </div>
                                        );
                                    }
                                })}
                            </TabPanel>
                        </Tab.Panel>
                        <Tab.Panel>
                            <TabPanel title={content.experience.title}>
                                <h3 className="text-lg font-semibold mb-2">Utbildning</h3>
                                <ul className="space-y-2">
                                    {content.experience.content.education.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.year}:</strong> {item.details}
                                        </li>
                                    ))}
                                </ul>
                                <h3 className="text-lg font-semibold mt-6 mb-2">Arbetslivserfarenhet</h3>
                                <ul className="space-y-2">
                                    {content.experience.content.work.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.year}:</strong> {item.details}
                                        </li>
                                    ))}
                                </ul>
                            </TabPanel>
                        </Tab.Panel>
                        <Tab.Panel>
                            <TabPanel title={content.languages.title}>
                                <ul className="space-y-2">
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
                                <p>{content.hobbies.content}</p>
                            </TabPanel>
                        </Tab.Panel>
                        <Tab.Panel>
                            <TabPanel title={content.contact.title}>
                                <ul className="space-y-2">
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
            <button onClick={() => generatePDF(content)} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Ladda ner CV som PDF
            </button>
        </main>
    );
};

export default CV;
