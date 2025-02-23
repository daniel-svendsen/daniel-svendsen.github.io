import React, {useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet-async";
import {shuffleArray} from '../utils/shuffle';
import {useImportedImages} from '../hooks/useImportedImages';

export default function Weddings() {
    const imagesData = useImportedImages(['weddings']);
    const [shuffledImages, setShuffledImages] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
    const hasInitialized = useRef(false);

    useEffect(() => {
        if (!hasInitialized.current && imagesData.weddings?.length > 0) {
            setShuffledImages(shuffleArray(imagesData.weddings));
            hasInitialized.current = true;
        }
    }, [imagesData]);

    useEffect(() => {
        if (selectedImage) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [selectedImage]);

    return (
        <>
            <Helmet>
                <title>Bröllopsfotograf i Kungälv & Göteborg - Svendsén Photography</title>
                <meta name="description"
                      content="Erfaren bröllopsfotograf i Kungälv och Göteborg. Vi fångar era magiska ögonblick."/>
                <meta name="keywords"
                      content="bröllop, bröllopsfotograf kungälv, bröllopsfotograf göteborg, bröllopsbilder, Svendsén Photography"/>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WeddingEvent",
                        "name": "Svendsén Photography - Bröllopsfotograf",
                        "description": "Bröllopsfotograf i Kungälv & Göteborg",
                        "url": "https://www.svendsenphotography.com/weddings"
                    })}
                </script>
            </Helmet>

            <main className="p-6">
                <header>
                    <h1 className="text-3xl font-bold mb-6">Bröllopsfotograf i Kungälv & Göteborg</h1>
                </header>
                <section aria-label="Bröllopsgalleri"
                         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {shuffledImages.map((src, index) => (
                        <figure key={index} className="relative">
                            <img
                                src={src}
                                alt={`Bröllopsfotograf Kungälv & Göteborg - Bild ${index + 1}`}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => setSelectedImage({src, alt: `Bröllop ${index + 1}`})}
                                loading="lazy"
                            />
                        </figure>
                    ))}
                </section>
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
                        <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-full"/>
                    </div>
                )}
            </main>
        </>
    );
}
