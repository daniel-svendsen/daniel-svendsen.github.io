import weddingImage from '../assets/pictures/wedding.jpg';
import portraitImage from '../assets/pictures/portrait.jpg';
import familyImage from '../assets/pictures/family.jpg';
import companyImage from '../assets/pictures/company.jpg';

export const homeCards = [
    {
        image: weddingImage,
        title: 'Bröllop',
        description: `Ert bröllop är en tid av glädje och kärlek, och mitt mål är att fånga varje vackra ögonblick. Innan den stora dagen vill jag gärna ha en dialog med er för att förstå era drömmar och önskemål. Er vision för er bröllopsdag är det som kommer att forma min fotografering och säkerställa att ni är helt nöjda med resultaten.`,
    },
    {
        image: portraitImage,
        title: 'Porträtt',
        description: `Porträtt är en fantastisk möjlighet att visa upp din unika personlighet eller det du brinner för. Oavsett om du behöver en professionell porträttbild för ditt CV, önskar visa upp din passion på sociala medier eller skapa en minnesvärd bild för väggen, så är jag här för att fånga just det du söker.`,
    },
    {
        image: familyImage,
        title: 'Familjefoto',
        description: `Familjen är viktig och att bevara ögonblicken med era nära och kära är något jag värdesätter. Jag tar gärna familjefoton eller bilder på era barn eller barnbarn. Om ni har en speciell plats i åtanke där ni vill fotograferas, låt mig veta så skapar vi magiska minnen där.`,
    },
    {
        image: companyImage,
        title: 'Företag',
        description: `För företagare kan en stark visuell närvaro göra skillnad. Jag erbjuder tjänster för produktfotografering och porträtt för att förstärka ert varumärke. Kontakta mig och berätta mer om vad ni behöver, så kan vi skapa något unikt för ert företag.`,
    },
];

export const serviceCards = [
    {
        title: 'Porträtt/Familjefoto',
        image: portraitImage,
        description: `Ca 30 minuter fotografering\nInklusive 4st bilder som ni väljer ut.\n150kr/redigerad bild utöver.`,
        price: 'FRÅN 1200KR',
        buttonText: 'Boka nu',
        buttonLink: '/contact',
        imageLink: '/portraits',
    },
    {
        title: 'Bröllop',
        image: weddingImage,
        description: `Grundpris för 3 timmar på plats samt 50st bilder som ni väljer.\nKontakta mig om ni vill ha fler/mindre timmar eller andra önskemål.`,
        price: 'FRÅN 8000KR',
        buttonText: 'Boka nu',
        buttonLink: '/contact',
        imageLink: '/weddings',
    },
    {
        title: 'Företag/Hobby',
        image: companyImage,
        description: `Jag kan erbjuda:\n- Porträtt på plats\n- Porträtt studiomiljö\n- Produktfoton\n- Hobbybilder (bilar, verksamhet m.m)`,
        price: 'Kontakta mig för individuell prissättning',
        buttonText: 'Kontakta mig',
        buttonLink: '/contact',
    },
];
