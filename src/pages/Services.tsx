// src/pages/Services.tsx
import React from 'react';
import Card from '../components/Card';
import {serviceCards} from '../data/cards';
import {Helmet} from "react-helmet-async";

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Fototjänster & Prislista - Svendsén Photography</title>
                <meta name="description"
                      content="Utforska vår prislista och tjänster inom bröllop, porträtt, företagsfotografering och bilfotografering i Kungälv och Göteborg."/>
                <meta name="keywords"
                      content="fototjänster, prislista, fotograf göteborg, fotograf kungälv, bröllop, porträtt, företagsfotograf, bilfotograf"/>
                <meta property="og:title" content="Fototjänster & Prislista - Svendsén Photography"/>
                <meta property="og:description"
                      content="Se våra priser och tjänster för bröllopsfotografering, porträtt, företagsfotografering och bilfotografering i Kungälv & Göteborg."/>
                <meta property="og:image"
                      content="https://www.svendsenphotography.com/assets/socialshare/socialshare.png"/>
                <meta property="og:url" content="https://www.svendsenphotography.com/services"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Fototjänster - Svendsén Photography",
                        "description": "Professionell fotografering i Kungälv & Göteborg. Vi erbjuder bröllop, porträtt, företags- och bilfotografering.",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Svendsén Photography"
                        },
                        "serviceType": "Photography"
                    })}
                </script>
            </Helmet>
            <main className="p-6">
                <header>
                    <h1 className="text-center text-3xl font-bold mb-12">Tjänster som jag kan erbjuda</h1>
                </header>
                <section aria-label="Mina tjänster" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {serviceCards.map((service, index) => (
                        <Card key={index} {...service} />
                    ))}
                </section>
            </main>
        </>
    );
}
