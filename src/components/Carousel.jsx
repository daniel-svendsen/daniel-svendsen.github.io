// src/components/Carousel.jsx

import React, { useState, useEffect } from 'react';

// Funktion för att blanda en array slumpmässigt
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function Carousel({ interval = 3000, pauseDuration = 5000 }) {
    const [images, setImages] = useState([]);
    const [shuffledImages, setShuffledImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Dynamiskt importera alla bilder i carousel-mappen
    useEffect(() => {
        const importImages = async () => {
            const images = import.meta.glob('../assets/carousel/*.{jpg,jpeg,png}');
            const imagePromises = [];
            for (const path in images) {
                imagePromises.push(images[path]().then((mod) => mod.default));
            }
            const imageUrls = await Promise.all(imagePromises);
            setImages(imageUrls);
            setShuffledImages(shuffleArray(imageUrls));
        };
        importImages();
    }, []);

    // Automatisk bildväxling
    useEffect(() => {
        if (shuffledImages.length > 0 && !isPaused) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
            }, interval);
            return () => clearInterval(timer); // Rensa timern vid unmount
        }
    }, [shuffledImages, interval, isPaused]);

    const handleUserInteraction = (newIndex) => {
        setIsPaused(true);
        setCurrentIndex(newIndex);
        setTimeout(() => setIsPaused(false), pauseDuration);
    };

    if (shuffledImages.length === 0) return null; // Visa inget om inga bilder finns

    return (
        <section
            className="relative mx-auto overflow-hidden rounded-lg shadow-md"
            style={{ width: '75vw', height: '75vh' }}
            aria-label="Bildkarusell"
        >
            {shuffledImages.map((image, index) => (
                <figure
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                        src={image}
                        alt={`Bild ${index + 1} av ${shuffledImages.length}`}
                        className="w-full h-full object-contain"
                    />
                </figure>
            ))}

            {/* Navigeringsknappar */}
            <button
                onClick={() =>
                    handleUserInteraction((currentIndex - 1 + shuffledImages.length) % shuffledImages.length)
                }
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-75 focus:outline-none"
                aria-label="Föregående bild"
            >
                &#8249;
            </button>
            <button
                onClick={() => handleUserInteraction((currentIndex + 1) % shuffledImages.length)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-75 focus:outline-none"
                aria-label="Nästa bild"
            >
                &#8250;
            </button>
        </section>
    );
}
