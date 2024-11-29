const fs = require('fs');
const path = require('path');

// Källa: var bilderna finns (ändra sökvägen om nödvändigt)
const sourceDir = path.join(__dirname, 'src/assets/carousel');
// Utdatakatalog: var JSON-filen ska sparas
const outputFile = path.join(__dirname, 'src/data/carouselImages.json');

// Hämta alla bilder från källkatalogen
const imageFiles = fs.readdirSync(sourceDir).filter((file) => /\.(jpg|png)$/i.test(file));

// Generera en lista med sökvägar för bilderna
const imagePaths = imageFiles.map((file) => `/assets/carousel/${file}`);

// Skriv ut till en JSON-fil
fs.writeFileSync(outputFile, JSON.stringify(imagePaths, null, 2), 'utf-8');

console.log(`Carousel image paths generated and saved to ${outputFile}`);
