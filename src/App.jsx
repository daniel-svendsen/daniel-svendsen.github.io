import { useState, useEffect } from "react";
import ScrollImage from "./components/ScrollImage.jsx";

function App() {
    const [fixedIndex, setFixedIndex] = useState(-1);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const imageHeight = window.innerHeight / 2; // Anta att varje bild tar halva fönstret
        const newFixedIndex = Math.floor(scrollY / imageHeight);
        setFixedIndex(newFixedIndex);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="App">
            <ScrollImage src="./assets/images/image1.jpg" index={0} fixedIndex={fixedIndex} />
            <ScrollImage src="/assets/images/image2.jpg" index={1} fixedIndex={fixedIndex} />
            <ScrollImage src="assets/images/image3.jpg" index={2} fixedIndex={fixedIndex} />
            {/* Lägg till fler bilder här */}
        </div>
    );
}

export default App;
