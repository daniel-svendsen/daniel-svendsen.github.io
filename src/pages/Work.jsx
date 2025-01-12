import React from 'react';
import { Tab } from '@headlessui/react';
import portraitImage from '../assets/portraits/bild1.jpg';

export default function CV() {
    return (
        <main className="p-6">
            <section className="flex flex-col items-center">
                <img
                    src={portraitImage}
                    alt="Daniel Svendsén"
                    className="rounded-full w-32 h-32 mb-4"
                />
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Daniel Svendsén</h1>
                    <p className="text-gray-600">
                        En engagerad och mångsidig person med erfarenhet av både ledarskap och tekniskt arbete.
                    </p>
                </div>
            </section>
            <section className="mt-8">
                <Tab.Group>
                    <Tab.List className="flex flex-wrap justify-center space-x-2">
                        {['Profil & Kompetenser', 'Erfarenheter', 'Språk & Övrigt', 'Fritidsintressen', 'Kontakt'].map(tab => (
                            <Tab key={tab} className={({ selected }) =>
                                `px-4 py-2 rounded-lg ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`
                            }>
                                {tab}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-4">
                        {/* Profil & Kompetenser */}
                        <Tab.Panel>
                            <h2 className="text-xl font-semibold">Profil & Kompetenser</h2>
                            <p>
                                Jag har erfarenhet av att arbeta i olika team och är en engagerad och mångsidig person som strävar efter att utvecklas och bidra på olika områden.
                                Jag kan erbjuda en kombination av tekniska färdigheter, arbetslivserfarenhet och många intressen.
                                Jag har också visat ledarskapsförmåga i min roll som arbetsledare på ICA.
                                Jag vill utvecklas både som människa och inom jobbet.
                            </p>
                            <ul className="mt-4">
                                <li><strong>Operativsystem:</strong> Windows, WSL</li>
                                <li><strong>Programspråk:</strong> Java, Javascript, Typescript, HTML/CSS</li>
                                <li><strong>Verktyg:</strong> JUnit, Intellij, Docker, Jenkins, Bash, Git, Maven, Gradle, Vue, Vite, React, VSCode</li>
                                <li><strong>Databaser:</strong> SQL, MySQL, MongoDB, SQL Server, SQLite</li>
                                <li><strong>Arbetsmetoder:</strong> Agila metoder, Scrum, Kanban</li>
                            </ul>
                        </Tab.Panel>

                        {/* Erfarenheter */}
                        <Tab.Panel>
                            <h2 className="text-xl font-semibold">Erfarenheter</h2>
                            <h3 className="mt-2 font-semibold">Utbildning</h3>
                            <ul>
                                <li><strong>2023 – pågående:</strong> Java Enterprise Utvecklare, Yrgo, Göteborgs Stad, 400 YH-poäng</li>
                                <li><strong>2016:</strong> Programmering 1, Betyg B</li>
                                <li><strong>2003 – 2006:</strong> Gymnasium, Estetisk inriktning Tv-Produktion, 2500 poäng</li>
                            </ul>
                            <h3 className="mt-4 font-semibold">Arbetslivserfarenhet</h3>
                            <ul>
                                <li><strong>2024 – pågående:</strong> Hjulverkstan - Opensource projekt för Rädda barnen via Alten där jag praktiserade.</li>
                                <li>Hjulverkstan är ett projekt för att hjälpa de anställda att genomföra/hålla koll på uthyrningar och lagningar etc för olika "shops".</li>
                                <a href="https://github.com/Hjulverkstan/hjulverkstan" className="text-blue-500 hover:text-blue-700 underline font-medium mt-2 inline-block">Till projektet</a>
                                <li><strong>2008 – pågående:</strong> ICA - Lagermedarbetare, olika roller inklusive arbetsledare</li>
                                <li><strong>2007:</strong> Svensk Bevakningstjänst - Väktare och civilväktare</li>
                            </ul>
                        </Tab.Panel>

                        {/* Språk & Övrigt */}
                        <Tab.Panel>
                            <h2 className="text-xl font-semibold">Språk & Övrigt</h2>
                            <h3 className="mt-2 font-semibold">Språkkunskaper</h3>
                            <ul>
                                <li>Svenska: Flytande</li>
                                <li>Engelska: Flytande</li>
                            </ul>
                            <h3 className="mt-4 font-semibold">Övrigt</h3>
                            <ul>
                                <li>Truckupplärare i ca 2 år</li>
                                <li>Vice ordförande i samfällighetsförening</li>
                                <li>Körkort B</li>
                                <li>Militär tjänstgöring: Insatssoldat (2006 – 2007)</li>
                            </ul>
                        </Tab.Panel>

                        {/* Fritidsintressen */}
                        <Tab.Panel>
                            <h2 className="text-xl font-semibold">Fritidsintressen</h2>
                            <p>
                                Fotografering med egen firma, laga mat, brygga öl, baka surdegsbröd, fiska, och utflykter i naturen med familjen.
                            </p>
                        </Tab.Panel>

                        {/* Kontakt */}
                        <Tab.Panel>
                            <h2 className="text-xl font-semibold">Kontakt</h2>
                            <ul>
                                <li><strong>Adress:</strong> Briljantvägen 55, 44260 Kode</li>
                                <li><strong>E-post:</strong> Daniel-Svendsen@hotmail.se</li>
                                <li><strong>Telefon:</strong> 0707714306</li>
                            </ul>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </section>
        </main>
    );
}
