import { useState, useEffect } from "react";
import "../App.css";

const ScrollImage = ({ src, index, fixedIndex }) => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        if (index <= fixedIndex) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    }, [fixedIndex, index]);

    return (
        <div className={`image-container ${isFixed ? "fixed" : ""}`}>
            <img src={src} alt={`Scroll Image ${index}`} />
        </div>
    );
};

export default ScrollImage;
