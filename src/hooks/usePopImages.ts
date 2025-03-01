import {useEffect, useRef, useState} from "react";

export interface PopImage {
    src: string;
    id: number;
    x: number;
    y: number;
    size: string;
}

type UsePopImagesOptions = {
    allImages: string[];
};

export function usePopImages({allImages}: UsePopImagesOptions) {
    const [popImages, setPopImages] = useState<PopImage[]>([]);
    const recentImages = useRef<Set<string>>(new Set());

    useEffect(() => {
        if (allImages.length === 0) return;

        const interval = setInterval(() => {
            let randomImage: string | undefined;
            let attempts = 0;

            do {
                randomImage = allImages[Math.floor(Math.random() * allImages.length)];
                attempts++;
                if (attempts > 10) break;
            } while (randomImage && recentImages.current.has(randomImage) && allImages.length > 5);

            if (!randomImage) return;

            recentImages.current.add(randomImage);
            if (recentImages.current.size > 5) {
                const firstItem = [...recentImages.current][0];
                recentImages.current.delete(firstItem);
            }

            const randomSize = Math.random() * (30 - 25) + 25; // % between 25 and 30
            const sizeInPixels = `${randomSize}vw`;
            const marginX = randomSize / 2;
            const marginY = randomSize / 2;
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
            }, 10000);
        }, 2000);

        return () => clearInterval(interval);
    }, [allImages]);

    return popImages;
}
