// pages/Portraits.jsx

import React, { useState, useEffect } from 'react';
import portraitImages from '../data/portraitsImages.json'; // Importera bildvägarna

export default function Portraits() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Uppdatera sidtiteln utan Helmet
    useEffect(() => {
        document.title = 'Svendsén Photography - Porträttgalleri';
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
        <main className="p-6">
            <header>
                <h1 className="text-3xl font-bold mb-6">Porträttgalleri</h1>
            </header>
            <section
                aria-label="Porträttgalleri"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
                {portraitImages.map((src, index) => (
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
    );
}
