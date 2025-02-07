import {generatePDF} from "@/utils/generatePDF.js";
import React from "react";

interface PdfDownloadButtonProps {
    content: any;
}

const PdfDownloadButton = ({content}: PdfDownloadButtonProps) => {
    const handleDownload = () => {
        const data = {
            pdf: 'CV_Daniel_Svendsen.pdf',
            timestamp: new Date().toISOString(),
        };

        fetch('https://formspree.io/f/xvgowldv', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('E-post skickad!');
                } else {
                    console.error('Misslyckades att skicka e-post:', response.statusText);
                }
            })
            .catch((error) => console.error('Ett fel uppstod:', error));

        generatePDF(content);
    };

    return (
        <button
            onClick={handleDownload}
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full shadow-xl hover:from-blue-500 hover:to-indigo-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 text-xs sm:text-sm"
        >
            Ladda ner CV som PDF
        </button>
    );
};

export default PdfDownloadButton;
