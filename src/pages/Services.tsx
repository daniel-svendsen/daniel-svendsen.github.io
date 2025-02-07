// src/pages/Services.tsx
import React from 'react';
import Card from '../components/Card';
import { serviceCards } from '../data/cards';
import { Helmet } from 'react-helmet';

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Prislista - Svendsén Photography</title>
                <meta name="description" content="Utforska vår prislista för bröllop, porträtt och företagsfotografering. Kontakta oss för mer information!" />
                <meta name="keywords" content="prislista, bröllop, porträtt, företagsfotografering, Svendsén Photography, fotografering, bilfotograf kungälv, bilfotograf" />
                <meta property="og:title" content="Prislista - Svendsén Photography" />
                <meta property="og:description" content="Utforska våra priser för bröllopsfotografering, porträtt och företagsbilder." />
                <meta property="og:image" content="https://www.svendsenphotography.com/assets/socialshare/socialshare.png" />
                <meta property="og:url" content="https://www.svendsenphotography.com/services" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <main className="p-6">
                <header>
                    <h1 className="text-center text-3xl font-bold mb-12">Tjänster som jag kan erbjuda</h1>
                </header>
                <section aria-label="Våra tjänster" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {serviceCards.map((service, index) => (
                        <Card key={index} {...service} />
                    ))}
                </section>
            </main>
        </>
    );
}
