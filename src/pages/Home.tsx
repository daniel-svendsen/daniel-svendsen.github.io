import {useNavigate} from 'react-router-dom';
import Card from '../components/Card';
import {homeCards} from '../data/cards';
import {Helmet, HelmetProvider} from "react-helmet-async";
import React, {lazy, Suspense, useEffect, useRef, useState} from 'react';
import HeroSection from '../components/HeroSection';
import SectionWrapper from '../components/SectionWrapper';

const Carousel = lazy(() => import('../components/Carousel'));

export default function Home() {
    const navigate = useNavigate();
    const [isCarouselVisible, setIsCarouselVisible] = useState(false);
    const carouselRef = useRef(null);

    useEffect(() => {
        let timeout;
        const handleScroll = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (!isCarouselVisible) setIsCarouselVisible(true);
            }, 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isCarouselVisible]);

    useEffect(() => {
        import('../pages/Services');
    }, []);

    const handleNavigate = () => {
        navigate('/services');
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>Fotograf Kungälv & Göteborg - Bröllop, Porträtt & Företag</title>
                <meta name="description"
                      content="Letar du efter en professionell fotograf i Kungälv eller Göteborg? Svendsén Photography erbjuder bröllopsfotografering, porträtt och företags/hobbybilder."/>
            </Helmet>
            <main className="p-6">
                <HeroSection/>
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-4">Välkommen till Svendsén Photography!</h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Jag är en fotograf baserad i Kungälv och Göteborg, specialiserad på bröllops-, porträtt- och
                        företagsfotografering.
                    </p>
                </header>
                <SectionWrapper title="Tjänster">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {homeCards.map((card, index) => (
                            <Card key={index} {...card} onClick={handleNavigate}/>
                        ))}
                    </div>
                </SectionWrapper>
                <SectionWrapper title="Galleri" className="bg-gray-100">
                    <div ref={carouselRef}>
                        <Suspense fallback={<div className="h-48 bg-gray-200"/>}>
                            {isCarouselVisible && <Carousel/>}
                        </Suspense>
                    </div>
                </SectionWrapper>
            </main>
        </HelmetProvider>
    );
}
