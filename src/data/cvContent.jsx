// src/data/cvContent.jsx
const cvContent = {
    profile: {
        name: "Daniel Svendsén",
        description:
            "En engagerad och mångsidig person med erfarenhet av både ledarskap och tekniskt arbete som gärna ser helheten.",
    },
    skills: {
        title: "Profil & Kompetenser",
        content: [
            "Jag är en engagerad och driven snart examinerad fullstackutvecklare med en kombination av teknisk kompetens och ledarskapserfarenhet. Efter 16 års arbete inom lager och arbetsledning valde jag att förverkliga min vilja att utbilda mig till system- och fullstackutvecklare. Jag brinner för att skapa nytt och lösningar från grunden och att bidra till starka och samarbetsvilliga team och ser gärna helheten i allt.",
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
                        "Hjulverkstan - Opensource projekt för Rädda barnen via Alten där jag praktiserar just nu.\nAnvänder: Java, Javascript, Typescript, Springboot, React",
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

export default cvContent;
