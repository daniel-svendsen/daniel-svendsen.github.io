import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import portraitImage from '../assets/portraits/bild1.jpg';

export const generatePDF = (content) => {
    const doc = new jsPDF();
    const margin = 10;
    const maxLineWidth = doc.internal.pageSize.width - 2 * margin;
    const pageHeight = doc.internal.pageSize.height;
    let yOffset = margin + 20;
    let pageNumber = 1;

    // Lägg till sidfot
    const addFooter = () => {
        const footerText = `Sida ${pageNumber}`;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'italic');
        doc.text(footerText, doc.internal.pageSize.width / 2, pageHeight - 10, { align: 'center' });
    };

    // Lägg till sidhuvud
    const addHeader = () => {
        const headerText = 'Daniel Svendsén - CV';
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(headerText, margin, 10);
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, 12, doc.internal.pageSize.width - margin, 12); // Horisontell linje
        yOffset = 20; // Startpunkt för innehåll
    };

    // Placera bild högst upp till höger
    const addImageAtTopRight = () => {
        const imgWidth = 40;
        const imgHeight = 40;
        const imgX = doc.internal.pageSize.width - margin - imgWidth;
        const imgY = margin;
        doc.addImage(portraitImage, 'JPEG', imgX, imgY, imgWidth, imgHeight);
    };

    // Kontrollera sidbrytning
    const ensureSpaceForSection = (estimatedHeight) => {
        if (yOffset + estimatedHeight > pageHeight - margin) {
            addFooter();
            doc.addPage();
            pageNumber++;
            addHeader();
            addImageAtTopRight(); // Lägg till bilden på nya sidan
        }
    };

    // Lägg till rubrik
    const addTitle = (title) => {
        ensureSpaceForSection(30); // Utrymme för rubrik
        yOffset += 10; // Extra mellanrum innan rubrik
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text(title, margin, yOffset);
        yOffset += 12;
    };

    // Lägg till textstycken
    const addParagraph = (text) => {
        const paragraphs = text.split('\n'); // Dela upp text vid '\n' till flera stycken
        paragraphs.forEach((paragraph) => {
            const lines = doc.splitTextToSize(paragraph, maxLineWidth);
            ensureSpaceForSection(lines.length * 10 + 10);
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            lines.forEach((line) => {
                doc.text(line, margin, yOffset);
                yOffset += 8;
            });
            yOffset += 10; // Extra mellanrum efter varje stycke
        });
    };


    // Lägg till tabell
    const addTable = (columns, data) => {
        ensureSpaceForSection(50);
        autoTable(doc, {
            startY: yOffset,
            head: [columns],
            body: data,
            margin: { left: margin },
            styles: { fontSize: 10 },
        });
        yOffset = doc.lastAutoTable.finalY + 10;
    };

    // Starta innehåll
    addHeader();
    addImageAtTopRight();

    // Lägg till "Profil & Kompetenser" utan att repetera text från bilden
    addTitle(content.skills.title);
    content.skills.content.forEach((item) => {
        if (typeof item === 'string') {
            addParagraph(item);
        } else {
            doc.setFont('helvetica', 'bold');
            doc.text(`${item.name}:`, margin, yOffset);
            doc.setFont('helvetica', 'normal');
            doc.text(item.details, margin + 40, yOffset);
            yOffset += 10;
        }
    });

    // Flytta erfarenheter till nästa sida
    addFooter();
    doc.addPage();
    pageNumber++;
    addHeader();

    addTitle(content.experience.title);
    addParagraph('Här är en sammanställning av min utbildning och arbetslivserfarenhet:');
    addTable(['År', 'Detaljer'], content.experience.content.education.map((item) => [item.year, item.details]));
    addTable(['År', 'Detaljer'], content.experience.content.work.map((item) => [item.year, item.details]));

    addTitle(content.languages.title);
    content.languages.content.forEach((item) => {
        doc.setFont('helvetica', 'bold');
        doc.text(`${item.name}:`, margin, yOffset);
        doc.setFont('helvetica', 'normal');
        doc.text(item.level, margin + 40, yOffset);
        yOffset += 10;
    });

    addTitle(content.hobbies.title);
    addParagraph(content.hobbies.content);

    addTitle(content.contact.title);
    content.contact.content.forEach((item) => {
        doc.setFont('helvetica', 'bold');
        doc.text(`${item.type}:`, margin, yOffset);
        doc.setFont('helvetica', 'normal');
        doc.text(item.details, margin + 40, yOffset);
        yOffset += 10;
    });

    addFooter(); // Sidfot på sista sidan
    doc.save('CV_Daniel_Svendsen.pdf');
};
