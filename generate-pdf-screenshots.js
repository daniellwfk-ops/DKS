/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('Iniciando o navegador para capturar os slides...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Define a resolução da tela em Full HD (16:9). 
  // deviceScaleFactor: 2 tira screenshots em 4K para garantir que o texto fique bem nítido no PDF.
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
  
  const filePath = `file://${path.resolve('public/daianipauli.html')}`;
  console.log(`Abrindo apresentação...`);
  await page.goto(filePath, { waitUntil: 'networkidle0' });
  
  // Descobre quantos slides existem na apresentação
  const slideCount = await page.evaluate(() => document.querySelectorAll('.slide').length);
  console.log(`Encontrados ${slideCount} slides.`);

  const imagePaths = [];

  for (let i = 0; i < slideCount; i++) {
    console.log(`Capturando slide ${i + 1} de ${slideCount}... (Aguardando animações)`);
    
    // Navega para o slide usando a função nativa da sua apresentação
    await page.evaluate((index) => {
      goToSlide(index);
    }, i);

    // Aguarda 4.5 segundos para garantir que TODAS as animações (textos, mapas mentais, topics) 
    // terminem de carregar antes de bater a "foto"
    await new Promise(r => setTimeout(r, 4500));
    
    const imgPath = path.resolve(`temp_slide_${i}.png`);
    await page.screenshot({ path: imgPath });
    imagePaths.push(imgPath);
  }

  console.log('Montando o PDF final com alta qualidade...');
  
  // Cria um HTML temporário colocando as imagens capturadas perfeitamente uma em cada página
  let htmlContent = `<html><head><style>
    @page { margin: 0; size: 1920px 1080px; }
    body { margin: 0; padding: 0; background: #050505; }
    img { width: 1920px; height: 1080px; display: block; page-break-after: always; }
  </style></head><body>`;
  
  for (const imgPath of imagePaths) {
    htmlContent += `<img src="file://${imgPath}" />`;
  }
  htmlContent += `</body></html>`;
  
  await page.setContent(htmlContent);
  
  // Imprime esse HTML das imagens em um único PDF
  await page.pdf({
    path: 'DaianiPauli_Apresentacao_Final.pdf',
    width: '1920px',
    height: '1080px',
    printBackground: true,
    pageRanges: `1-${slideCount}`, // Impede páginas em branco no final
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  
  await browser.close();
  
  // Limpa os arquivos de imagem temporários
  for (const imgPath of imagePaths) {
    if (fs.existsSync(imgPath)) {
      fs.unlinkSync(imgPath);
    }
  }
  
  console.log('✅ PDF perfeito gerado: DaianiPauli_Apresentacao_Final.pdf');
})();
