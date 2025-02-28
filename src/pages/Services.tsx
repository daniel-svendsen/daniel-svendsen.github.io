// src/pages/Services.tsx
import React from 'react';
import Card from '../components/Card';
import {serviceCards} from '../data/cards';
import {Helmet} from "react-helmet-async";

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Fototjänster i Kungälv & Göteborg - Svendsén Photography</title>
                <meta name="description"
                      content="Upptäck professionella fototjänster hos Svendsén Photography. Vi erbjuder bröllopsfotografering, porträtt, företagsfoto, bilfotografering och eventfoto i Kungälv och Göteborg. Läs mer: https://www.svendsenphotography.com/services"/>
                <meta name="keywords"
                      content="fotograf kungälv, fotograf göteborg, bröllopsfotograf, porträttfotograf, bilfotograf, företagsfotograf, eventfotograf, verksamhetsfoto"/>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "Svendsén Photography",
                        "description": "Fotograf i Kungälv & Göteborg - Specialiserad på bröllop, porträtt, företag och event.",
                        "image": "https://www.svendsenphotography.com/logo.jpg",
                        "url": "https://www.svendsenphotography.com/services",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Kungälv",
                            "addressCountry": "SE"
                        },
                        "serviceType": [
                            "Bröllopsfotografering",
                            "Porträttfotografering",
                            "Företagsfotografering",
                            "Eventfotografering",
                            "Bilfotografering",
                            "Hemsidesutveckling"
                        ],
                        "areaServed": {
                            "@type": "City",
                            "name": ["Kungälv", "Göteborg"]
                        }
                    })}
                </script>
            </Helmet>
            <main className="p-6">
                <header className="text-center">
                    <h1 className="text-4xl font-bold mb-6">Professionella fotograferingstjänster</h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Boka en fotografering idag och skapa minnen som varar livet ut.
                    </p>
                    <a href="/contact"
                       className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">
                        Boka fotografering
                    </a>
                </header>
                <section aria-label="Mina tjänster" className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                    {serviceCards.map((service, index) => (
                        <Card key={index} {...service} />
                    ))}
                </section>
            </main>
        </>
    );
}
