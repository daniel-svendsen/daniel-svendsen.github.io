import {useNavigate} from 'react-router-dom';
import Card from '../components/Card';
import {homeCards} from '../data/cards';
import Carousel from '../components/Carousel';
import {Helmet} from "react-helmet";
import React from 'react';
import HeroSection from "../components/HeroSection";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Fotograf Kungälv & Göteborg - Bröllop, Porträtt & Företag</title>
                <meta name="description"
                      content="Letar du efter en professionell fotograf i Kungälv eller Göteborg? Svendsén Photography erbjuder bröllopsfotografering, porträtt och företags/hobbybilder."/>
            </Helmet>
            <main className="p-6">
                <HeroSection/>
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-4">Welcome to Svendsén Photography!</h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Jag är en fotograf baserad i Kungälv och Göteborg, specialiserad på bröllops-, porträtt- och
                        företagsfotografering.
                    </p>
                </header>
                <section aria-label="Services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {homeCards.map((card, index) => (
                        <Card key={index} {...card} onClick={() => navigate('/services')}/>
                    ))}
                </section>
                <section aria-label="Image carousel">
                    <Carousel/>
                </section>
            </main>
        </>
    );
}
