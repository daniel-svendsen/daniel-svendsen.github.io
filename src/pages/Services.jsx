import React from 'react';
import Card from '../components/Card';
import weddingImage from '../assets/pictures/wedding.jpg';
import portraitImage from '../assets/pictures/portrait2.jpg';
import companyImage from '../assets/pictures/company.jpg';

export default function Services() {
    const services = [
        {
            title: 'Porträtt',
            image: portraitImage,
            description: `Ca 30 minuter fotografering\nInklusive 4st bilder som ni väljer ut.\n150kr/redigerad bild utöver.`,
            price: 'FRÅN 1200KR',
            buttonText: 'Boka nu',
            buttonLink: '/contact',
        },
        {
            title: 'Bröllop',
            image: weddingImage,
            description: `Grundpris för 3 timmar på plats samt 50st bilder som ni väljer.\nKontakta mig om ni vill ha fler/mindre timmar eller andra önskemål.`,
            price: 'FRÅN 8000KR',
            buttonText: 'Boka nu',
            buttonLink: '/contact',
        },
        {
            title: 'Företag',
            image: companyImage,
            description: `Kontakta mig om vad ni vill ha.\nJag erbjuder:\n- Porträtt på plats\n- Porträtt studiomiljö\n- Produktfoto m.m.`,
            price: 'KONTAKTA MIG',
            buttonText: 'Kontakta mig',
            buttonLink: '/contact',
        },
    ];

    return (
        <div className="p-6">
            <h1 className="text-center text-3xl font-bold mb-12">Prislista</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        image={service.image}
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        buttonText={service.buttonText}
                        buttonLink={service.buttonLink}
                    />
                ))}
            </div>
        </div>
    );
}
