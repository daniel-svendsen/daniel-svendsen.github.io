import { useState, useRef, useEffect } from "react";
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
function useShuffledImages(images) {
  const [shuffled, setShuffled] = useState([]);
  const hasInitialized = useRef(false);
  useEffect(() => {
    if (!hasInitialized.current && (images == null ? void 0 : images.length) > 0) {
      setShuffled(shuffleArray(images));
      hasInitialized.current = true;
    }
  }, [images]);
  return shuffled;
}
export {
  useShuffledImages as u
};
