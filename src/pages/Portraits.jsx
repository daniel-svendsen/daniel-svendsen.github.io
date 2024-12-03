// src/pages/Portraits.jsx

import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

export default function Portraits() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    // Funktion för att blanda en array slumpmässigt
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Dynamiskt importera alla bilder i portraits-mappen
    useEffect(() => {
        const importImages = async () => {
            const images = import.meta.glob('../assets/portraits/*.{jpg,jpeg,png}');
            const imagePromises = [];
            for (const path in images) {
                imagePromises.push(images[path]().then((mod) => mod.default));
            }
            const imageUrls = await Promise.all(imagePromises);
            // Sortera bilderna efter filnamn om ordningen är viktig
            // imageUrls.sort();
            setImages(shuffleArray(imageUrls)); // Blanda bilderna
        };
        importImages();
    }, []);

    // Förhindra bakgrundsrullning när lightboxen är öppen
    useEffect(() => {
        if (selectedImage) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [selectedImage]);

    // Hantera stängning av lightbox med Escape-tangenten
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };
        if (selectedImage) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImage]);

    return (
        <>
            <Helmet>
                <title>Porträttgalleri - Svendsén Photography</title>
                <meta
                    name="description"
                    content="Utforska vårt porträttgalleri och se de vackra ögonblick vi fångar. Kontakta oss för att boka en porträttfotografering idag."
                />
                <meta
                    name="keywords"
                    content="porträtt, galleri, porträttfotografering, Svendsén Photography, fotografering, Göteborg, Kungälv"
                />
                <meta property="og:title" content="Porträttgalleri - Svendsén Photography" />
                <meta
                    property="og:description"
                    content="Se våra fantastiska porträtt i vårt galleri och boka en porträttfotografering idag."
                />
                <meta
                    property="og:image"
                    content="https://www.svendsenphotography.com/assets/socialshare/socialshare.png"
                />
                <meta property="og:url" content="https://www.svendsenphotography.com/portraits" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <main className="p-6">
                <header>
                    <h1 className="text-3xl font-bold mb-6">Porträttgalleri</h1>
                </header>
                <section
                    aria-label="Porträttgalleri"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {images.map((src, index) => (
                        <figure key={index} className="relative">
                            <img
                                src={src}
                                alt={`Porträtt ${index + 1}`}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => setSelectedImage({ src, alt: `Porträtt ${index + 1}` })}
                                loading="lazy"
                            />
                        </figure>
                    ))}
                </section>

                {/* Lightbox */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                        aria-modal="true"
                        role="dialog"
                        aria-label="Förstorad bild"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
                            aria-label="Stäng"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full"
                        />
                    </div>
                )}
            </main>
        </>
    );
}
