import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-white font-sans overflow-hidden" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Background Gradient removed as requested */}

      <section className="relative w-full min-h-[90vh] flex items-center pt-[100px] lg:pt-0 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/dks-hero-fullbg.jpg"
            alt="DKS Marketing Background"
            className="w-full h-full object-cover object-center lg:object-[80%_center]"
            style={{ filter: 'contrast(1.05)' }}
          />
          {/* Overlay to ensure text readability on mobile where the image might clash */}
          <div className="absolute inset-0 bg-black/70 lg:bg-transparent pointer-events-none"></div>
          {/* Subtle gradient starting from left to make sure the text POPS against the dark left side of the bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent w-full lg:w-[65%] pointer-events-none"></div>
          {/* Gradient to smooth out the bottom edge into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>

        {/* Container */}
        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
          <div className="flex flex-col items-start text-left w-full lg:w-[50%] xl:w-[45%] lg:pr-8">

            {/* Badge */}
            <div className="bg-[#D4AF37]/12 text-[#D4AF37] px-[16px] py-[8px] rounded-full text-[12px] md:text-[14px] font-medium mb-[24px] inline-flex items-center tracking-[0.5px]">
              Especialistas em crescimento para restaurantes
            </div>

            {/* H1 Headline */}
            <h1 className="text-[26px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-[800] leading-[1.1] tracking-[-1px] text-white max-w-[550px]" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Assessoria que faz <span className="text-[#FFC000]">Restaurantes e Deliveries</span> baterem recordes de faturamento todos os meses.
            </h1>

            {/* H2 Subheadline */}
            <h2 className="text-[14px] md:text-[16px] lg:text-[18px] font-[300] leading-[1.4] text-[#E0E0E0] mt-[20px] max-w-[420px]">
              Usando a nossa metodologia já ajudamos <span className="text-[#FFC000]">mais de 100 negócios gastronômicos</span> a saírem do vermelho e virarem referência em suas cidades.
            </h2>

            {/* CTA Button */}
            <div className="mt-[40px] flex w-full relative max-w-[340px]">
              {/* Orange Glow Behind Button */}
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[240px] h-[70px] bg-[#FF9900]/60 blur-[40px] rounded-full -z-10 animate-pulse"></div>

              <a
                href="#"
                className="group relative bg-[#00CC00] text-white px-[30px] py-[20px] rounded-[16px] font-[800] text-[16px] md:text-[18px] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#00B300] shadow-[0px_0px_40px_rgba(0,204,0,0.5)] overflow-hidden w-full text-center"
              >
                <span className="relative z-10 uppercase tracking-wide">Saiba Mais</span>
                {/* Sweep light effect on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[sweep_0.8s_ease-in-out]"></div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: LOGO CAROUSEL (SOCIAL PROOF) 
          ========================================= */}
      <section className="relative w-full py-[60px] md:py-[80px] bg-[#000000] border-y border-[#333333] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 mb-[40px] text-center">
          <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-[500] leading-[1.2] text-white tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
            As marcas que <span className="text-[#FFC000] font-[700]">mais crescem no Brasil</span> escolhem a DKS.
          </h2>
        </div>

        {/* Seamless Marquee Wrapper */}
        <div className="relative flex w-[200%] overflow-hidden">
          {/* Gradient Masks for fading edges */}
          <div className="absolute inset-y-0 left-0 w-[50px] md:w-[150px] bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-[50px] md:w-[150px] bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Content - Repeated twice for seamless loop */}
          <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-[40px] px-[20px] items-center">
                {/* Client Logos (Mockups based on the image provided earlier) */}
                {[
                  "BABBO GIOVANNI", "OSSO", "Camarada Camarão",
                  "SPOLETO", "O JARDIM", "COZINHA GRECCO",
                  "Domino's Pizza", "Santa Fé", "BULLGUER", "LET'S POKE"
                ].map((name, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[160px] md:w-[200px] h-[80px] bg-white/[0.03] border border-[#333333] rounded-xl flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:bg-white/[0.08] transition-all duration-300">
                    <span className="text-[#CFCFCF] font-bold text-xs md:text-sm text-center px-4 leading-tight whitespace-normal">{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: ABOUT US (QUEM É A AGÊNCIA DKS?)
          ========================================= */}
      <section className="relative w-full py-[120px] bg-[#0C0C0F] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">

            {/* Left Column: Mobile Mockups */}
            <div className="relative w-full flex justify-center items-center min-h-[500px] lg:min-h-[600px] perspective-1000">

              {/* Decorative Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#D4AF37]/10 rounded-full blur-[100px] -z-10"></div>

              {/* Phone 1 (Back/Left) - Instagram Profile */}
              <div className="absolute left-[10%] sm:left-[20%] lg:left-[10%] top-[40px] w-[240px] sm:w-[280px] aspect-[9/19] rounded-[40px] border-[8px] border-[#1A1A20] bg-[#000000] shadow-[-20px_20px_40px_rgba(0,0,0,0.8)] overflow-hidden transform rotate-[-8deg] translate-z-[-50px] transition-transform duration-700 hover:rotate-[-5deg] hover:translate-y-[-10px]">
                {/* Top Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[25px] bg-[#1A1A20] rounded-b-[15px] z-20"></div>
                {/* Simulated Screen Content - IG Profile */}
                <div className="w-full h-full pt-[40px] px-4 flex flex-col items-center relative z-10">
                  <div className="flex justify-between w-full mb-4">
                    <i className="ph-bold ph-caret-left text-white"></i>
                    <span className="text-white font-semibold text-xs">daniellwfk_ops</span>
                    <i className="ph-bold ph-dots-three text-white"></i>
                  </div>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-1 mb-3">
                    <div className="w-full h-full rounded-full bg-black border-[2px] border-black overflow-hidden flex items-center justify-center">
                      <span className="text-[#D4AF37] font-black text-xl">DKS</span>
                    </div>
                  </div>
                  <div className="flex gap-6 text-white text-center mb-4">
                    <div><span className="block font-bold">142</span><span className="text-[10px] text-gray-400">posts</span></div>
                    <div><span className="block font-bold">10k</span><span className="text-[10px] text-gray-400">followers</span></div>
                    <div><span className="block font-bold">256</span><span className="text-[10px] text-gray-400">following</span></div>
                  </div>
                  <div className="w-full text-left text-white text-xs space-y-1 mb-4">
                    <p className="font-bold">Agência DKS Marketing</p>
                    <p className="text-gray-300">Acelerando restaurantes em todo o Brasil. 🚀</p>
                    <p className="text-[#D4AF37] font-medium">Link na bio 👇</p>
                  </div>
                  <div className="grid grid-cols-3 gap-1 w-full flex-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="bg-white/10 aspect-square"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone 2 (Front/Right) - Landing Page */}
              <div className="absolute right-[10%] sm:right-[20%] lg:right-[10%] bottom-[20px] w-[260px] sm:w-[300px] aspect-[9/19] rounded-[40px] border-[8px] border-[#2A2A35] bg-[#0C0C0F] shadow-[30px_30px_50px_rgba(0,0,0,0.9)] overflow-hidden transform rotate-[5deg] translate-z-[50px] transition-transform duration-700 hover:rotate-[2deg] hover:translate-y-[-10px] z-20">
                {/* Top Notch Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-[20px] bg-black rounded-full z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
                {/* Browser Bar */}
                <div className="w-full h-[60px] bg-[#1A1A20] flex items-end pb-2 px-4 justify-between border-b border-white/5">
                  <span className="text-[10px] text-[#A1A1AA]">AA</span>
                  <div className="w-[60%] h-[24px] bg-black rounded-md flex items-center justify-center">
                    <span className="text-[10px] text-[#CFCFCF]"><i className="ph-fill ph-lock-key mr-1"></i>dksmarketing.com.br</span>
                  </div>
                  <i className="ph-bold ph-arrows-clockwise text-[12px] text-[#A1A1AA]"></i>
                </div>
                {/* Simulated Screen Content - LP */}
                <div className="w-full h-[calc(100%-60px)] px-4 pt-6 flex flex-col items-center bg-[#0C0C0F] relative">
                  <div className="w-full flex justify-between items-center mb-6">
                    <span className="text-[#D4AF37] font-black tracking-tighter text-lg leading-none">DKS<br /><span className="text-[6px] tracking-[4px] text-white">AGÊNCIA</span></span>
                    <i className="ph-bold ph-list text-white text-xl"></i>
                  </div>
                  <div className="bg-[#D4AF37]/10 text-[#D4AF37] text-[8px] py-1 px-3 rounded-full mb-4">Especialistas em gastronomia</div>
                  <h1 className="text-white font-bold text-lg leading-tight text-center mb-3">Assessoria que faz Restaurantes baterem recordes.</h1>
                  <p className="text-gray-400 text-[10px] text-center mb-6">Ajudamos mais de 100 negócios a saírem do vermelho.</p>
                  <div className="w-full py-3 rounded-lg bg-[#D4AF37] text-black text-center font-bold text-xs shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    QUERO AUMENTAR MEU FATURAMENTO
                  </div>

                  {/* Miniature Image placeholder */}
                  <div className="w-full aspect-[4/3] rounded-t-[100px] bg-gradient-to-t from-white/10 to-transparent mt-8 border border-white/10 p-2">
                    <div className="w-full h-full bg-black/50 rounded-t-[90px] backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col items-start w-full relative z-10 mt-10 lg:mt-0">
              <span className="text-[#D4AF37] font-black tracking-tighter text-4xl lg:text-5xl leading-none mb-6">
                DKS<br />
                <span className="text-sm lg:text-base tracking-[8px] text-white font-normal uppercase mt-1 block">Agência</span>
              </span>

              <h2 className="text-[32px] md:text-[40px] font-[800] leading-[1.1] text-[#D4AF37] mb-8">
                Quem é a Agência DKS?
              </h2>

              <div className="space-y-6 text-[16px] md:text-[18px] text-[#CFCFCF] font-[400] leading-[1.6]">
                <p>
                  A DKS é uma agência de marketing digital especializada em transformar restaurantes e deliveries em negócios altamente lucrativos. Com foco exclusivo no nicho gastronômico, aplicamos o <span className="font-bold text-white">Método ROMA</span> — nossa metodologia própria que une tráfego pago, gestão de iFood, Google, cardápio digital e construção de autoridade para gerar crescimento real todos os dias.
                </p>
                <p>
                  Já ajudamos centenas de marcas em todo o Brasil a lotarem suas mesas e escalarem o faturamento com consistência. Nossa missão é simples: posicionar o seu restaurante entre os mais desejados da cidade, com estratégia, execução e zero achismo.
                </p>
                <p className="text-white font-semibold italic border-l-2 border-[#D4AF37] pl-4">
                  Se você quer crescer de verdade, a DKS é o time certo pra te levar até lá.
                </p>
              </div>

              <div className="mt-10">
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 bg-[#D4AF37] text-black px-[32px] py-[20px] rounded-[12px] font-[800] text-[16px] transition-all duration-300 hover:bg-[#F2CA41] hover:-translate-y-1 shadow-[0_10px_30px_rgba(212,175,55,0.3)] uppercase tracking-wide"
                >
                  Fale com um especialista
                  <i className="ph-fill ph-whatsapp-logo text-2xl group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inline styles for custom animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .translate-z-\\[-50px\\] {
          transform: translateZ(-50px) rotate(-8deg);
        }
        .translate-z-\\[50px\\] {
          transform: translateZ(50px) rotate(5deg);
        }
        .hover\\:translate-y-\\[-10px\\]:hover {
          transform: translateY(-10px) translateZ(50px) rotate(2deg);
        }
      `}} />
    </main>
  );
}
