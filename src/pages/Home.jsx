import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importera useNavigate
import Card from '../components/Card';
import cards from '../data/cards';
import Carousel from '../components/Carousel';

export default function Home() {
    const [carouselImages, setCarouselImages] = useState([]);
    const navigate = useNavigate(); // Använd React Router för att navigera

    // Dynamiskt hämta alla bilder från en mapp
    useEffect(() => {
        const images = import.meta.glob('../assets/*.{jpg,png}', { eager: true });

        // Justera sökvägarna för GitHub Pages utan repo-prefix
        const imagePaths = Object.keys(images).map((path) => `/assets/${path.split('/assets/')[1]}`);

        setCarouselImages(imagePaths);
    }, []);

    // Funktion för att navigera till Services
    const handleCardClick = () => {
        navigate('/services'); // Navigera till /services
    };

    return (
        <div className="p-6">
            <section className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-4">Välkommen till Svendsén Photography!</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Här får du hjälp att föreviga ögonblick som betyder något.
                </p>
            </section>

            {/* Kortlayout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="cursor-pointer" // Gör korten klickbara
                        onClick={handleCardClick} // Navigera när man klickar
                    >
                        <Card
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    </div>
                ))}
            </div>

            {/* Karusell */}
            {carouselImages.length > 0 && <Carousel images={carouselImages} />}
        </div>
    );
}
