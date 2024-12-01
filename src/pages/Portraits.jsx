// src/pages/Portraits.jsx

import React, { useState, useEffect } from 'react';

export default function Portraits() {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

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
            imageUrls.sort();
            setImages(imageUrls);
        };
        importImages();
    }, []);

    // Uppdatera sidtiteln
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
    );
}
