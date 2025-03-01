import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Typewriter from "typewriter-effect";
import {useImportedImages} from "../hooks/useImportedImages";
import {PopImage, usePopImages} from "../hooks/usePopImages";

interface HeroSectionProps {
}

export default function HeroSection(props: HeroSectionProps) {
    const navigate = useNavigate();
    const imagesData = useImportedImages(["herosection"]);

    const [allImages, setAllImages] = useState<string[]>([]);
    const hasLoadedImages = useRef(false);

    useEffect(() => {
        if (!hasLoadedImages.current && imagesData.herosection) {
            setAllImages([...imagesData.herosection]);
            hasLoadedImages.current = true;
        }
    }, [imagesData]);

    const popImages: PopImage[] = usePopImages({allImages});

    return (
        <>
            <Helmet>
                <title>Svendsén Photography - Professionell Fotograf i Göteborg & Kungälv</title>
                <meta
                    name="description"
                    content="Välkommen till Svendsén Photography! Jag specialiserar mig på bröllopsfotografering, porträtt, bil och företagsbilder i Göteborg och Kungälv."
                />
                {allImages.length > 0 && (
                    <link rel="preload" as="image" href={allImages[0]}/>
                )}
            </Helmet>

            <section
                className="relative flex items-center justify-center overflow-hidden bg-gray-100"
                style={{height: "calc(100vh - 6rem)"}}
                aria-labelledby="hero-section"
            >
                <div className="text-center text-gray-800 bg-white bg-opacity-75 p-8 rounded-md z-10">
                    <h1 id="hero-section" className="text-4xl sm:text-5xl font-bold mb-4">
                        Svendsén Photography
                        <Typewriter
                            options={{
                                strings: ["Bröllop", "Porträtt", "Företagsfoto"],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 30,
                            }}
                        />
                    </h1>
                    <button
                        onClick={() => navigate("/contact")}
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
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                ))}
            </section>
        </>
    );
}
