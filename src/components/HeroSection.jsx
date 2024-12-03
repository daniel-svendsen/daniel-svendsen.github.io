// src/components/HeroSection.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
    const navigate = useNavigate();
    const [popImages, setPopImages] = useState([]);
    const [allImages, setAllImages] = useState([]);

    // Dynamiskt importera bilder från mappar
    useEffect(() => {
        const importImages = async () => {
            const portraitImages = import.meta.glob('../assets/portraits/*.{jpg,jpeg,png}');
            const weddingImages = import.meta.glob('../assets/weddings/*.{jpg,jpeg,png}');

            const loadImages = async (imageFiles) => {
                const imagePromises = Object.values(imageFiles).map((importFn) =>
                    importFn().then((mod) => mod.default)
                );
                return Promise.all(imagePromises);
            };

            const portraits = await loadImages(portraitImages);
            const weddings = await loadImages(weddingImages);

            setAllImages([...portraits, ...weddings]); // Kombinera alla bilder
        };

        importImages();
    }, []);

    // Lägg till bilder slumpmässigt
    useEffect(() => {
        if (allImages.length === 0) return;

        const interval = setInterval(() => {
            const randomImage = allImages[Math.floor(Math.random() * allImages.length)];
            const randomX = Math.random() * 90; // Slumpmässig horisontell position
            const randomY = Math.random() * 70; // Slumpmässig vertikal position

            // Beräkna slumpmässig storlek mellan 5% och 15% av skärmens bredd
            const randomSize = Math.random() * (15 - 5) + 5; // Slumpmässig storlek i procent
            const sizeInPixels = `${randomSize}vw`; // Basera storleken på bredden av fönstret

            const newImage = {
                src: randomImage,
                id: Date.now(),
                x: randomX,
                y: randomY,
                size: sizeInPixels,
            };

            setPopImages((prev) => [...prev, newImage]);

            // Ta bort bilden efter 3 sekunder
            setTimeout(() => {
                setPopImages((prev) => prev.filter((img) => img.id !== newImage.id));
            }, 3000); // Ta bort efter 3 sekunder
        }, 1500); // Ny bild var 1.5 sekund

        return () => clearInterval(interval);
    }, [allImages]);

    return (
        <>
            <Helmet>
                <title>Svendsén Photography - Professionell Fotograf i Göteborg & Kungälv</title>
                <meta
                    name="description"
                    content="Välkommen till Svendsén Photography! Vi specialiserar oss på bröllopsfotografering, porträtt och företagsbilder i Göteborg och Kungälv."
                />
                <meta
                    name="keywords"
                    content="fotograf, bröllop, porträtt, företagsfotografering, Göteborg, Kungälv, professionell fotograf"
                />
                <meta property="og:title" content="Svendsén Photography - Professionell Fotograf i Göteborg & Kungälv" />
                <meta
                    property="og:description"
                    content="Fånga dina oförglömliga ögonblick med Svendsén Photography. Specialiserad på bröllop, porträtt och företagsfotografering."
                />
                <meta
                    property="og:image"
                    content="https://www.svendsenphotography.com/assets/socialshare/socialshare.png"
                />
                <meta property="og:url" content="https://www.svendsenphotography.com" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <section
                className="relative flex items-center justify-center overflow-hidden bg-gray-100"
                style={{
                    height: 'calc(100vh - 6rem)', // Dynamisk höjd för att ta hänsyn till navbar
                }}
                aria-labelledby="hero-section"
            >
                <div className="text-center text-gray-800 bg-white bg-opacity-75 p-8 rounded-md z-10">
                    {/* Typningseffekt för text */}
                    <h1 id="hero-section" className="text-4xl sm:text-5xl font-bold mb-4">
                        <Typewriter
                            options={{
                                strings: ['Svendsén Photography', 'Bröllop', 'Porträtt', 'Företagsfoto'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </h1>
                    <p className="text-lg sm:text-xl mb-6">
                        Fånga dina oförglömliga ögonblick med professionella bilder.
                        Specialiserad på bröllop, porträtt och företagsfotografering.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-6 py-3 bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-700 transition"
                    >
                        Kontakta mig idag
                    </button>
                </div>

                {/* Bilder som poppar upp */}
                {popImages.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
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
