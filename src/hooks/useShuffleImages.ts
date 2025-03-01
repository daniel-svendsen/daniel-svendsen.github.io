import {useEffect, useRef, useState} from "react";
import {shuffleArray} from "../utils/shuffle";

export function useShuffledImages(images: string[]) {
    const [shuffled, setShuffled] = useState<string[]>([]);
    const hasInitialized = useRef(false);

    useEffect(() => {
        if (!hasInitialized.current && images?.length > 0) {
            setShuffled(shuffleArray(images));
            hasInitialized.current = true;
        }
    }, [images]);

    return shuffled;
}
