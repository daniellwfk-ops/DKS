/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to a standard 16:9 presentation size
  await page.setViewport({ width: 1920, height: 1080 });
  
  const filePath = `file://${path.resolve('public/daianipauli.html')}`;
  console.log(`Abrindo: ${filePath}`);
  
  await page.goto(filePath, { waitUntil: 'networkidle0' });
  
  // Injeta CSS para forçar todos os slides a ficarem visíveis e um abaixo do outro para a impressão
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.innerHTML = `
        /* Força a remoção de animações e transições */
        * {
            transition: none !important;
            animation: none !important;
        }
        
        /* Permite que o deck tenha altura automática e scroll */
        html, body, #deck {
            height: auto !important;
            overflow: visible !important;
            position: relative !important;
            width: 1920px !important;
        }

        /* Cada slide se torna um bloco relativo com altura fixa de 1080px */
        .slide {
            position: relative !important;
            opacity: 1 !important;
            transform: none !important;
            height: 1080px !important;
            width: 1920px !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
            pointer-events: none !important;
        }
        
        /* Garante que elementos animados fiquem visíveis */
        .a, .topic-item, .mindmap-card {
            opacity: 1 !important;
            transform: none !important;
        }
        
        /* Garante que as linhas do mapa mental fiquem visíveis */
        .branch-center, .branch-h-left, .branch-v-left, .branch-h-right, .branch-v-right {
             transform: scale(1) !important;
        }
        .branch-v-left::after, .branch-v-right::after {
             opacity: 1 !important;
        }
        
        /* Esconde barra de progresso e controles */
        #nav, #progress {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
  });

  // Aguarda um pequeno intervalo para garantir que os estilos foram aplicados
  await new Promise(r => setTimeout(r, 1000));

  // Gera o PDF no formato 16:9
  await page.pdf({
    path: 'Apresentacao_DaianiPauli_Completa.pdf',
    width: '1920px',
    height: '1080px',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  
  await browser.close();
  console.log('✅ PDF completo gerado com sucesso! Arquivo: Apresentacao_DaianiPauli_Completa.pdf');
})();
