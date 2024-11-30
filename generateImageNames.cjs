const fs = require('fs');
const path = require('path');

// Definiera källkataloger för olika kategorier
const categories = {
    carousel: path.join(__dirname, 'src/assets/carousel'),
    portraits: path.join(__dirname, 'src/assets/portraits'),
    weddings: path.join(__dirname, 'src/assets/weddings'),
};

// Utdatakatalog: var JSON-filerna ska sparas
const outputDir = path.join(__dirname, 'src/data');

// Skapa JSON-filer för varje kategori
Object.entries(categories).forEach(([category, sourceDir]) => {
    if (!fs.existsSync(sourceDir)) {
        console.warn(`Källkatalog för kategori "${category}" finns inte: ${sourceDir}`);
        return;
    }

    const imageFiles = fs.readdirSync(sourceDir).filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
    const imagePaths = imageFiles.map((file) => `/assets/${category}/${file}`);

    // Skriv till en JSON-fil
    const outputFile = path.join(outputDir, `${category}Images.json`);
    fs.writeFileSync(outputFile, JSON.stringify(imagePaths, null, 2), 'utf-8');

    console.log(`Bildsökvägar för kategori "${category}" genererade och sparade till ${outputFile}`);
});
