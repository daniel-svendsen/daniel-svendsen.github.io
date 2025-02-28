import {useEffect, useState} from 'react';

// Fördefinierade mappar och deras imports
const availableFolders = {
    portraits: import.meta.glob('../assets/portraits/*.{jpg,jpeg,png}'),
    weddings: import.meta.glob('../assets/weddings/*.{jpg,jpeg,png}'),
    companyhobby: import.meta.glob('../assets/companyhobby/*.{jpg,jpeg,png}'),
    carousel: import.meta.glob('../assets/carousel/*.{jpg,jpeg,png}'),
    herosection: import.meta.glob('../assets/herosection/*.{jpg,jpeg,png}'),
};

export function useImportedImages(folders: string[]) {
    const [images, setImages] = useState<Record<string, string[]>>({});

    useEffect(() => {
        const loadImages = async () => {
            const newImages: Record<string, string[]> = {};

            for (const folder of folders) {
                if (availableFolders[folder]) {
                    const modules = availableFolders[folder];
                    const paths = Object.keys(modules);
                    newImages[folder] = await Promise.all(
                        paths.map(async (path) => {
                            const mod = await modules[path]() as { default: string };
                            return mod.default;
                        })
                    );
                } else {
                    console.warn(`Folder '${folder}' is not recognized.`);
                }
            }

            setImages(newImages);
        };

        loadImages();
    }, [folders]);

    return images;
}
