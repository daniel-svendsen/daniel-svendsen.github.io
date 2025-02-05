// src/utils/generatePDF.jsx
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import portraitImage from '../assets/portraits/bild1.jpg';

export const generatePDF = (content) => {
    const doc = new jsPDF();
    const margin = 10;
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    // === Bakgrundsfärg för hela sidan ===
    doc.setFillColor(240, 248, 255); // AliceBlue
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // === Header ===
    const headerHeight = 20;
    doc.setFillColor(75, 101, 132); // Mörkblå ton
    doc.rect(0, 0, pageWidth, headerHeight, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text("Daniel Svendsén - CV", margin, 15);

    // === Styled Bild ===
    const addStyledImage = () => {
        const imgWidth = 40;
        const imgHeight = 40;
        const imgX = pageWidth - margin - imgWidth;
        const imgY = margin; // Placeras högst upp med lite marginal

        // Drop shadow
        doc.setFillColor(0, 0, 0);
        doc.rect(imgX + 2, imgY + 2, imgWidth, imgHeight, 'F');

        // Rundad ram
        doc.setLineWidth(1);
        doc.setDrawColor(200, 200, 200);
        doc.roundedRect(imgX - 1, imgY - 1, imgWidth + 2, imgHeight + 2, 4, 4, 'S');

        // Lägg in bilden
        doc.addImage(portraitImage, 'JPEG', imgX, imgY, imgWidth, imgHeight);
    };
    addStyledImage();

    // === Starta innehållet strax under header/bild ===
    // Vi ökar yOffset så att texten inte överlappar bilden.
    let yOffset = headerHeight + 20;

    // === Funktion för att lägga till sektioner med justerad maxbredd ===
    const addSection = (title, text) => {
        // Rubrik
        doc.setFontSize(14);
        doc.setTextColor(75, 101, 132);
        doc.text(title, margin, yOffset);
        yOffset += 6;
        // Brödtext
        doc.setFontSize(12);
        doc.setTextColor(50, 50, 50);
        // Vi reserverar extra utrymme (t.ex. 50 enheter) för att undvika att texten går under bilden.
        const maxTextWidth = pageWidth - margin * 2 - 50;
        const lines = doc.splitTextToSize(text, maxTextWidth);
        doc.text(lines, margin, yOffset);
        yOffset += lines.length * 6 + 6;
    };

    // === Innehåll för första sidan ===

    // Profilsektion
    addSection(content.profile.name, content.profile.description);

    // Skills – sammanfoga innehållet med radbrytningar
    const skillsText = content.skills.content
        .map(item => typeof item === 'string' ? item : `${item.name}: ${item.details}`)
        .join('\n');
    addSection(content.skills.title, skillsText);

    // --- Sidbrytning ---
    doc.addPage();
    // Eventuellt, om du vill ha header och/eller en bakgrund även på den nya sidan kan du repetera liknande kod här.
    // Vi återställer yOffset för den nya sidan:
    yOffset = margin + 10;

    // === Innehåll för andra sidan ===

    // Utbildning och arbetslivserfarenhet via tabeller
    autoTable(doc, {
        startY: yOffset,
        head: [['År', 'Utbildning']],
        body: content.experience.content.education.map(item => [item.year, item.details]),
        margin: { left: margin },
        styles: { fontSize: 10 },
    });
    yOffset = doc.lastAutoTable.finalY + 10;

    autoTable(doc, {
        startY: yOffset,
        head: [['År', 'Arbetslivserfarenhet']],
        body: content.experience.content.work.map(item => [item.year, item.details]),
        margin: { left: margin },
        styles: { fontSize: 10 },
    });
    yOffset = doc.lastAutoTable.finalY + 10;

    // Språk & Övrigt
    const languagesText = content.languages.content
        .map(item => `${item.name}: ${item.level}`)
        .join('\n');
    addSection(content.languages.title, languagesText);

    // Fritidsintressen
    addSection(content.hobbies.title, content.hobbies.content);

    // Kontakt
    const contactText = content.contact.content
        .map(item => `${item.type}: ${item.details}`)
        .join('\n');
    addSection(content.contact.title, contactText);

    // === Footer ===
    const addFooter = () => {
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, pageHeight - 15, pageWidth - margin, pageHeight - 15);
        const pageStr = "Sida " + doc.internal.getNumberOfPages();
        doc.text(pageStr, pageWidth / 2, pageHeight - 7, { align: 'center' });
    };
    addFooter();

    // Spara PDF:en
    doc.save("CV_Daniel_Svendsen.pdf");
};
