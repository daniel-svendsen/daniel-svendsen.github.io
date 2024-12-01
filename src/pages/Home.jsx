// src/pages/Home.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { homeCards } from '../data/cards';
import Carousel from '../components/Carousel'; // Ingen import av carouselImages behövs längre

export default function Home() {
    const navigate = useNavigate();

    return (
        <main className="p-6">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-4">Välkommen till Svendsén Photography!</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Här får du hjälp att föreviga ögonblick som betyder något. Jag är en fotograf från Kungälv och Göteborg med fokus på bröllop, porträtt och företagsfotografering.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Oavsett om det gäller bröllopsbilder, professionella porträtt eller att fånga vardagens små stunder, arbetar jag för att skapa bilder som speglar känsla och autenticitet.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Hör gärna av dig för att prata om dina idéer eller behov. Tillsammans skapar vi något unikt.
                </p>
            </header>

            {/* Kortlayout */}
            <section
                aria-label="Tjänster"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
                {homeCards.map((card, index) => (
                    <Card
                        key={index}
                        {...card}
                        onClick={() => navigate('/services')}
                    />
                ))}
            </section>

            {/* Karusell */}
            <section aria-label="Bildkarusell">
                <Carousel />
            </section>
        </main>
    );
}
