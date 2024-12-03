import { existsSync, copyFileSync } from 'fs';
import { resolve } from 'path';

// Få projektroten dynamiskt
const projectRoot = resolve();

// Definiera käll- och destinationsfiler i rätt katalog
const srcPath = resolve(projectRoot, 'docs', 'index.html'); // Korrekt sökväg till index.html
const destPath = resolve(projectRoot, 'docs', '404.html'); // Korrekt sökväg till 404.html

// Kontrollera om källfilen existerar
if (!existsSync(srcPath)) {
    console.error(`Filen "${srcPath}" finns inte. Kontrollera att byggningen har skett korrekt.`);
    process.exit(1);
}

// Kopiera filen
copyFileSync(srcPath, destPath);
console.log(`404.html skapades från index.html.`);
