import { useState, useEffect } from 'react';

// Custom hook for dynamically importing images
export function useImportedImages() {
    const imageModules = import.meta.glob('../assets/carousel/*.{jpg,jpeg,png}');
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const loadImages = async () => {
            const paths = Object.keys(imageModules);
            const imageUrls = await Promise.all(
                paths.map(async (path) => {
                    const mod = await imageModules[path]() as { default: string };
                    return mod.default;
                })
            );
            setImages(imageUrls);
        };
        loadImages();
    }, []);

    return images;
}
