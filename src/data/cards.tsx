import weddingImage from '../assets/pictures/wedding.jpg';
import portraitImage from '../assets/pictures/portrait.jpg';
import companyImage from '../assets/pictures/company.jpg';

export const homeCards = [
    {
        image: weddingImage,
        title: 'Bröllopsfotografering & Bröllopsfilm',
        description: `Ert bröllop är en unik och kärleksfull dag, och jag hjälper er att fånga alla magiska ögonblick. 
                      Jag erbjuder både bröllopsfoto och film för att skapa tidlösa minnen av er stora dag.`,
        buttonText: 'Läs mer',
        buttonLink: '/services',
    },
    {
        image: portraitImage,
        title: 'Porträtt & Familjefoto',
        description: `Oavsett om du behöver en professionell bild för ditt CV, sociala medier eller ett vackert familjeporträtt, hjälper jag dig att fånga naturliga och personliga bilder – utomhus eller på plats hos dig med bakgrund.`,
        buttonText: 'Läs mer',
        buttonLink: '/services',
    },
    {
        image: companyImage,
        title: 'Företag, Event & Verksamhetsfoto',
        description: `Fånga ditt företags unika karaktär med professionella bilder och filmklipp. 
                      Perfekt för konferenser, mässor, personalporträtt och marknadsföring. 
                      Har du en hobbyverksamhet eller är bilentusiast? Jag hjälper dig att skapa unika bilder för reklam och sociala medier.`,
        buttonText: 'Läs mer',
        buttonLink: '/services',
    },
    {
        // image: Lägg till en passande bild för webbutveckling
        title: 'Hemsidesutveckling & SEO',
        description: `Behöver du en modern och snabb hemsida? Jag bygger responsiva webbplatser för företag, fotografer och kreatörer 
                      med fokus på SEO och användarvänlighet.`,
        buttonText: 'Läs mer',
        buttonLink: '/services',
    },
];


export const serviceCards = [
    {
        title: 'Porträtt & Familjefoto',
        image: portraitImage,
        description: `📷 30 minuters fotografering, 5 redigerade bilder ingår  
                      ➕ Extra bilder: 150 kr/st  
                      🎭 Perfekt för CV, LinkedIn, sociala medier, familjeporträtt och generationsbilder`,
        price: 'Från 1200 KR',
        buttonText: 'Kontakt',
        buttonLink: '/contact',
    },
    {
        title: 'Bröllopsfotografering & Bröllopsfilm',
        image: weddingImage,
        description: `📍 Välj mellan tre paket:  
                      🥂 Litet Paket – 3 timmar fotografering, 50 redigerade bilder → 7500 kr  
                      💍 Mellanpaket – 6 timmar fotografering, 100 redigerade bilder → 12 000 kr  
                      🎊 Heldag – 10 timmar fotografering, 200 redigerade bilder + kort bröllopsfilm → 18 000 kr  
                      🎥 Film – Cinematisk bröllopsfilm (3-5 min highlight reel) → 5000 kr vid fotopaket / 8000 kr enskilt  
                      ⏳ Extra timmar → 2000 kr/timme`,
        price: 'Från 7500 KR',
        buttonText: 'Kontakt',
        buttonLink: '/contact',
    },
    {
        title: 'Företagsfoto, Event & Verksamhetsfoto',
        image: companyImage,
        description: `🏢 Företagsporträtt – 1-5 personer → Från 2500 kr, fler personer på offert  
                      🎤 Eventfotografering – 3 timmar → 4500 kr | Heldag → 12 000 kr  
                      📸 Produkt- & Marknadsföringsbilder → Från 350 kr/bild  
                      🎬 Filmning för reklam & presentationer → Offert vid förfrågan`,
        price: 'Från 2500 KR',
        buttonText: 'Kontakt',
        buttonLink: '/contact',
    },
    {
        title: 'Hemsidesutveckling & SEO',
        description: `💻 Enkel landningssida → Från 4500 kr  
                      🌍 Företagswebbplats (flersidig) → Från 8500 kr  
                      🔍 SEO-optimering & support → Från 2000 kr/månad`,
        price: 'Från 4500 KR',
        buttonText: 'Kontakt',
        buttonLink: '/contact',
    }
];


