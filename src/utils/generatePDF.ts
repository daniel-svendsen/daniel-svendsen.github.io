// src/utils/generatePDF.ts
import portraitImage from '../assets/portraits/bild1.jpg';
import { jsPDF } from "jspdf";

/**
 * Ritar en enkel tabell med två kolumner på PDF-dokumentet.
 */
function renderTable(
    doc: jsPDF,
    options: {
        startY: number;
        head: string[][];
        body: any[][];
        margin: { left: number };
        styles: { fontSize: number };
    }
): number {
    const { startY, head, body, margin, styles } = options;
    const pageWidth = doc.internal.pageSize.width;
    const availableWidth = pageWidth - margin.left * 2;
    const col1Width = 30;
    const col2Width = availableWidth - col1Width;
    let y = startY;

    doc.setFontSize(styles.fontSize);
    const header = head[0];

    // Header
    doc.setTextColor(255, 255, 255);
    doc.setFillColor(75, 101, 132);
    doc.rect(margin.left, y - 6, availableWidth, 8, 'F'); // Modern header bakgrund
    doc.text(header[0], margin.left + 2, y);
    doc.text(header[1], margin.left + col1Width + 2, y);
    y += 6;

    // Body
    for (let i = 0; i < body.length; i++) {
        const row = body[i];
        doc.setTextColor(50, 50, 50);
        doc.text(String(row[0]), margin.left, y + 3); // Placera text högre upp
        const text2 = String(row[1]);
        const textLines = doc.splitTextToSize(text2, col2Width);
        doc.text(textLines, margin.left + col1Width, y + 3); // Placera text högre upp

        // Dynamisk höjd för rader
        const rowHeight = textLines.length * 6;
        y += rowHeight + 2; // Ge extra utrymme för linjen

        // Rita linje under hela raden
        doc.setDrawColor(200, 200, 200);
        doc.line(margin.left, y, margin.left + availableWidth, y); // Linje under raden
    }
    return y;
}

export const generatePDF = (content: any) => {
    const doc = new jsPDF();
    const margin = 10;
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    // Bakgrundsfärg
    doc.setFillColor(245, 245, 245);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Toppsektion
    doc.setFillColor(75, 101, 132);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text("Daniel Svendsén - CV", margin, 25);

    // Bild med modern stil
    const addStyledImage = () => {
        const imgWidth = 50;
        const imgHeight = 50;
        const imgX = pageWidth - margin - imgWidth - 5;
        const imgY = 15;

        doc.setFillColor(255, 255, 255);
        doc.roundedRect(imgX - 2, imgY - 2, imgWidth + 4, imgHeight + 4, 4, 4, 'F');
        doc.addImage(portraitImage, 'JPEG', imgX, imgY, imgWidth, imgHeight);
    };
    addStyledImage();

    let yOffset = 50;

    const addSection = (title: string, text: string) => {
        const imgOffset = 70; // Justera höjd där bilden är placerad
        if (yOffset < imgOffset) {
            yOffset = imgOffset; // Hoppa över bildens område
        }

        doc.setFontSize(14);
        doc.setTextColor(75, 101, 132);
        doc.text(title, margin, yOffset);
        yOffset += 6;
        doc.setFontSize(12);
        doc.setTextColor(50, 50, 50);
        const maxTextWidth = pageWidth - margin * 2 - 50;
        const lines = doc.splitTextToSize(text, maxTextWidth);
        doc.text(lines, margin, yOffset);
        yOffset += lines.length * 6 + 10;
    };

    // **Profilsektion**
    addSection(content.profile.name, content.profile.description);

    // **Skills**
    const skillsText = content.skills.content
        .map((item: any) => typeof item === 'string' ? item : `${item.name}: ${item.details}`)
        .join('\n');
    addSection(content.skills.title, skillsText);

    doc.addPage();
    yOffset = margin + 10;

    // **Utbildning**
    yOffset = renderTable(doc, {
        startY: yOffset,
        head: [['År', 'Utbildning']],
        body: content.experience.content.education.map((item: any) => [item.year, item.details]),
        margin: { left: margin },
        styles: { fontSize: 10 },
    }) + 10;

    // **Arbetslivserfarenhet**
    yOffset = renderTable(doc, {
        startY: yOffset,
        head: [['År', 'Arbetslivserfarenhet']],
        body: content.experience.content.work.map((item: any) => [item.year, item.details]),
        margin: { left: margin },
        styles: { fontSize: 10 },
    }) + 10;

    // **Språk & Övrigt**
    const languagesText = content.languages.content
        .map((item: any) => `${item.name}: ${item.level}`)
        .join('\n');
    addSection(content.languages.title, languagesText);

    // **Fritidsintressen**
    addSection(content.hobbies.title, content.hobbies.content);

    // **Kontakt**
    const contactText = content.contact.content
        .map((item: any) => `${item.type}: ${item.details}`)
        .join('\n');
    addSection(content.contact.title, contactText);

    const addFooter = () => {
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, pageHeight - 15, pageWidth - margin, pageHeight - 15);
        const pageStr = "Sida " + doc.getNumberOfPages();
        doc.text(pageStr, pageWidth / 2, pageHeight - 7, { align: 'center' });
    };
    addFooter();

    doc.save("CV_Daniel_Svendsen.pdf");
};
