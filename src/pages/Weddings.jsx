// src/pages/Weddings.jsx

import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

// Funktion för att blanda en array slumpmässigt
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function Weddings() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    // Dynamiskt importera alla bilder i weddings-mappen
    useEffect(() => {
        const importImages = async () => {
            const images = import.meta.glob('../assets/weddings/*.{jpg,jpeg,png}');
            const imagePromises = [];
            for (const path in images) {
                imagePromises.push(images[path]().then((mod) => mod.default));
            }
            const imageUrls = await Promise.all(imagePromises);
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
                <title>Bröllopsgalleri - Svendsén Photography</title>
                <meta
                    name="description"
                    content="Utforska vårt bröllopsgalleri och se magiska ögonblick från bröllopsfotograferingar. Kontakta oss för att boka din bröllopsfotograf."
                />
                <meta
                    name="keywords"
                    content="bröllop, bröllopsgalleri, bröllopsfotografering, Svendsén Photography, bröllopsfotograf, Göteborg, Kungälv"
                />
                <meta property="og:title" content="Bröllopsgalleri - Svendsén Photography" />
                <meta
                    property="og:description"
                    content="Se våra fantastiska bröllopsbilder i vårt galleri och boka din bröllopsfotografering idag."
                />
                <meta
                    property="og:image"
                    content="https://www.svendsenphotography.com/assets/socialshare/socialshare.png"
                />
                <meta property="og:url" content="https://www.svendsenphotography.com/weddings" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <main className="p-6">
                <header>
                    <h1 className="text-3xl font-bold mb-6">Bröllopsgalleri</h1>
                </header>
                <section
                    aria-label="Bröllopsgalleri"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {images.map((src, index) => (
                        <figure key={index} className="relative">
                            <img
                                src={src}
                                alt={`Bröllop ${index + 1}`}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => setSelectedImage({ src, alt: `Bröllop ${index + 1}` })}
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
