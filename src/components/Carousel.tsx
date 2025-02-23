import React, {useEffect, useRef, useState} from 'react';
import {useImportedImages} from '../hooks/useImportedImages';
import {shuffleArray} from '../utils/shuffle';

interface CarouselProps {
    interval?: number;
    pauseDuration?: number;
}

export default function Carousel({interval = 3000, pauseDuration = 5000}: CarouselProps) {
    const imagesData = useImportedImages(['carousel']);
    const images = imagesData.carousel || [];

    const [shuffledImages, setShuffledImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const hasInitialized = useRef(false);

    useEffect(() => {
        if (images.length > 0 && !hasInitialized.current) {
            setShuffledImages(shuffleArray(images));
            setCurrentIndex(0);
            hasInitialized.current = true;
        }
    }, [images]);

    useEffect(() => {
        if (shuffledImages.length === 0 || isPaused) return;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
        }, interval);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [shuffledImages, interval, isPaused]);

    const handleUserInteraction = (newIndex: number) => {
        setIsPaused(true);
        setCurrentIndex(newIndex);
        setTimeout(() => setIsPaused(false), pauseDuration);
    };

    if (shuffledImages.length === 0) return null;

    return (
        <section
            className="relative mx-auto overflow-hidden rounded-lg shadow-md"
            style={{width: '75vw', height: '75vh'}}
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
                        loading={"lazy"}
                        className="w-full h-full object-contain"
                    />
                </figure>
            ))}
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
