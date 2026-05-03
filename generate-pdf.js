const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Resolve o caminho do arquivo HTML
  const filePath = `file://${path.resolve('public/daianipauli.html')}`;
  console.log(`Abrindo: ${filePath}`);
  
  // Abre o arquivo e aguarda carregar
  await page.goto(filePath, { waitUntil: 'networkidle0' });
  
  // Gera o PDF
  await page.pdf({
    path: 'Apresentacao_DaianiPauli.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  
  await browser.close();
  console.log('✅ PDF gerado com sucesso! Arquivo salvo como: Apresentacao_DaianiPauli.pdf');
})();
