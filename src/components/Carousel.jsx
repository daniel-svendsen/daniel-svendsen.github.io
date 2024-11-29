import React, { useEffect, useState } from 'react';

// Funktion för att blanda en array slumpmässigt
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function Carousel({ images, interval = 3000, pauseDuration = 5000 }) {
    const [shuffledImages, setShuffledImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Blanda bilderna när komponenten laddas
    useEffect(() => {
        setShuffledImages(shuffleArray(images));
    }, [images]);

    useEffect(() => {
        let timer;

        if (!isPaused) {
            timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
            }, interval);
        }

        return () => clearInterval(timer);
    }, [shuffledImages, interval, isPaused]);

    const handleUserInteraction = (newIndex) => {
        setIsPaused(true);
        setCurrentIndex(newIndex);

        setTimeout(() => {
            setIsPaused(false);
        }, pauseDuration);
    };

    const prevSlide = () => {
        handleUserInteraction((currentIndex - 1 + shuffledImages.length) % shuffledImages.length);
    };

    const nextSlide = () => {
        handleUserInteraction((currentIndex + 1) % shuffledImages.length);
    };

    return (
        <div className="relative mx-auto overflow-hidden rounded-lg shadow-md" style={{ width: '75vw', height: '75vh' }}>
            {/* Bilder */}
            {shuffledImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}

            {/* Navigeringsknappar */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-75 focus:outline-none"
            >
                &#8249; {/* Vänster pil */}
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-75 focus:outline-none"
            >
                &#8250; {/* Höger pil */}
            </button>
        </div>
    );
}