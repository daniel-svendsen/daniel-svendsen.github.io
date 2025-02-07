import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Typewriter from 'typewriter-effect';

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
    const [popImages, setPopImages] = useState<PopImage[]>([]);
    const [allImages, setAllImages] = useState<string[]>([]);

    // Dynamically import images from folders
    useEffect(() => {
        const importImages = async () => {
            // Type assertion to ensure correct type
            const portraitImages = import.meta.glob('../assets/portraits/*.{jpg,jpeg,png}') as Record<string, () => Promise<{ default: string }>>;
            const weddingImages = import.meta.glob('../assets/weddings/*.{jpg,jpeg,png}') as Record<string, () => Promise<{ default: string }>>;
            const companyHobbyImages = import.meta.glob('../assets/companyhobby/*.{jpg,jpeg,png}') as Record<string, () => Promise<{ default: string }>>;

            const loadImages = async (imageFiles: Record<string, () => Promise<{ default: string }>>): Promise<string[]> => {
                const imagePromises = Object.values(imageFiles).map((importFn) =>
                    importFn().then((mod) => mod.default)
                );
                return Promise.all(imagePromises);
            };

            const portraits = await loadImages(portraitImages);
            const weddings = await loadImages(weddingImages);
            const companyHobby = await loadImages(companyHobbyImages);

            setAllImages([...portraits, ...weddings, ...companyHobby]); // Combine all images
        };

        importImages();
    }, []);

    useEffect(() => {
        if (allImages.length === 0) return;

        const interval = setInterval(() => {
            const randomImage = allImages[Math.floor(Math.random() * allImages.length)];

            // Random size
            const randomSize = Math.random() * (30 - 15) + 15; // Random size in percentage
            const sizeInPixels = `${randomSize}vw`;

            // Limit X and Y to prevent images from overflowing
            const marginX = randomSize / 2;
            const marginY = randomSize / (window.innerWidth / window.innerHeight) / 2;

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
            }, 6000); // Remove after 6 seconds
        }, 1000);

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
            </Helmet>
            <section
                className="relative flex items-center justify-center overflow-hidden bg-gray-100"
                style={{ height: 'calc(100vh - 6rem)' }}
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
                                deleteSpeed: 50,
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

                {/* Floating images */}
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
