/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const imgPath = '/Users/danielsoares/.gemini/antigravity/brain/388884eb-2239-4b10-808d-a96639d28cfc/media__1772332565154.jpg';
const htmlPath = '/Users/danielsoares/Documents/DKS/public/apresentacao2.html';

const bitmap = fs.readFileSync(imgPath);
const base64 = Buffer.from(bitmap).toString('base64');
const base64Img = `data:image/jpeg;base64,${base64}`;

let html = fs.readFileSync(htmlPath, 'utf8');

const regex = /style="overflow:hidden; background-image: linear-gradient\(rgba\(10,10,12,0\.85\), rgba\(10,10,12,0\.95\)\), url.*?no-repeat;"/g;
const replacement = `style="overflow:hidden; background: linear-gradient(rgba(10,10,12,0.85), rgba(10,10,12,0.95)), url('${base64Img}') center/cover no-repeat;"`;

html = html.replace(regex, replacement);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('done');
