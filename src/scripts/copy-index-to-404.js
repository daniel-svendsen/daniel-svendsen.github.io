// // src/scripts/copy-index-to-404.js
// import {copyFileSync, existsSync} from 'fs';
// import {resolve} from 'path';
//
// const projectRoot = resolve();
// const srcPath = resolve(projectRoot, 'dist', 'index.html');
// const destPath = resolve(projectRoot, 'dist', '404.html');
//
// if (!existsSync(srcPath)) {
//     console.error(`Filen "${srcPath}" finns inte. Kontrollera att byggningen har skett korrekt.`);
//     process.exit(1);
// }
//
// copyFileSync(srcPath, destPath);
// console.log(`404.html skapades från index.html.`);
