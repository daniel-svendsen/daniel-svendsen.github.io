import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Helmet} from "react-helmet-async";
import Typewriter from 'typewriter-effect';
import {useImportedImages} from '../hooks/useImportedImages';

// Define the structure of an image
interface PopImage {
    src: string;
    id: number;
    x: number;
    y: number;
    size: string;
}

export default function HeroSection() {
    const navigate = useNavigate();
    const imagesData = useImportedImages(['herosection']);

    const [allImages, setAllImages] = useState<string[]>([]);
    const [popImages, setPopImages] = useState<PopImage[]>([]);
    const hasLoadedImages = useRef(false);

    useEffect(() => {
        if (!hasLoadedImages.current && imagesData.herosection) {
            const loadedImages = [...(imagesData.herosection || [])];
            setAllImages(loadedImages);
            hasLoadedImages.current = true;
        }
    }, [imagesData]);

    useEffect(() => {
        if (allImages.length === 0) return;

        const recentImages = new Set<string>();

        const interval = setInterval(() => {
            let randomImage;

            let attempts = 0;
            do {
                randomImage = allImages[Math.floor(Math.random() * allImages.length)];
                attempts++;
                if (attempts > 10) break;
            } while (recentImages.has(randomImage) && allImages.length > 5);

            recentImages.add(randomImage);
            if (recentImages.size > 5) {
                recentImages.delete([...recentImages][0]);
            }

            // Random size
            const randomSize = Math.random() * (30 - 25) + 25; // Random size in percentage
            const sizeInPixels = `${randomSize}vw`;

            // Limit X and Y to prevent images from overflowing
            const marginX = randomSize / 2;
            const marginY = randomSize / 2;

            const randomX = Math.random() * (100 - marginX * 2) + marginX;
            const randomY = Math.random() * (100 - marginY * 2) + marginY;

            const newImage: PopImage = {
                src: randomImage,
                id: Date.now(),
                x: randomX,
                y: randomY,
                size: sizeInPixels,
            };

            setPopImages((prev) => [...prev, newImage]);

            setTimeout(() => {
                setPopImages((prev) => prev.filter((img) => img.id !== newImage.id));
            }, 10000); // Remove after 10 seconds
        }, 2000);

        return () => clearInterval(interval);
    }, [allImages]);

    return (
        <>
            <Helmet>
                <title>Svendsén Photography - Professionell Fotograf i Göteborg & Kungälv</title>
                <meta
                    name="description"
                    content="Välkommen till Svendsén Photography! Jag specialiserar mig på bröllopsfotografering, porträtt, bil och företagsbilder i Göteborg och Kungälv."
                />
                {allImages.length > 0 && <link rel="preload" as="image" href={allImages[0]}/>}
            </Helmet>

            <section
                className="relative flex items-center justify-center overflow-hidden bg-gray-100"
                style={{height: 'calc(100vh - 6rem)'}}
                aria-labelledby="hero-section"
            >
                <div className="text-center text-gray-800 bg-white bg-opacity-75 p-8 rounded-md z-10">
                    {/* Typing effect for text */}
                    <h1 id="hero-section" className="text-4xl sm:text-5xl font-bold mb-4">
                        Svendsén Photography
                        <Typewriter
                            options={{
                                strings: ['Bröllop', 'Porträtt', 'Företagsfoto'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 30,
                            }}
                        />
                    </h1>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-6 py-3 bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-700 transition"
                    >
                        Kontakta mig idag
                    </button>
                </div>

                {popImages.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        loading="lazy"
                        alt="Inspirerande foto"
                        className="absolute object-cover rounded-full shadow-lg animate-pop"
                        style={{
                            top: `${image.y}%`,
                            left: `${image.x}%`,
                            width: image.size,
                            height: image.size,
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                ))}
            </section>
        </>
    );
}
