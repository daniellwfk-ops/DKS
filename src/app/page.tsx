import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0C0F] text-white font-sans overflow-hidden" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(212,175,55,0.15), transparent 45%)'
        }}
      />

      <section className="relative z-10 w-full min-h-[90vh] flex items-center py-[120px]">
        {/* Container */}
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column (60%) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left w-full z-10">

              {/* Badge */}
              <div className="bg-[#D4AF37]/12 text-[#D4AF37] px-[16px] py-[8px] rounded-full text-[14px] font-medium mb-[32px] inline-flex items-center tracking-[0.5px]">
                Especialistas em crescimento para restaurantes
              </div>

              {/* H1 Headline */}
              <h1 className="text-[40px] md:text-[52px] lg:text-[72px] font-[800] leading-[1.05] tracking-[-2px] text-white">
                Assessoria que faz <span className="text-[#D4AF37]">Restaurantes e Deliveries</span> baterem recordes de faturamento todos os meses.
              </h1>

              {/* H2 Subheadline */}
              <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-[400] leading-[1.5] text-[#E0E0E0] mt-[32px] max-w-[700px]">
                Usando a nossa metodologia já ajudamos <span className="text-[#D4AF37]">mais de 100 negócios gastronômicos</span> a saírem do vermelho e virarem referência em suas cidades.
              </h2>

              {/* CTA Button */}
              <div className="mt-[56px] flex w-full justify-center relative">
                {/* Orange Glow Behind Button */}
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[280px] h-[90px] bg-[#FF9900]/60 blur-[50px] rounded-full -z-10 animate-pulse"></div>

                <a
                  href="#"
                  className="group relative bg-[#00FF00] text-black px-[40px] py-[22px] rounded-[16px] font-[700] text-[18px] sm:text-[20px] flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:bg-[#10E810] shadow-[0_0_30px_rgba(0,255,0,0.3)] overflow-hidden"
                >
                  <span className="relative z-10">Quero aumentar meu faturamento</span>
                  <i className="ph-bold ph-arrow-up-right text-2xl relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>

                  {/* Sweep light effect on hover */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[sweep_0.8s_ease-in-out]"></div>
                </a>
              </div>
            </div>

            {/* Right Column (40%) - Visual Image and Integrations */}
            <div className="lg:col-span-5 relative mt-16 lg:mt-0 w-full max-w-md mx-auto lg:max-w-none flex justify-center lg:justify-end">

              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#D4AF37]/15 to-transparent rounded-full blur-[80px] -z-10"></div>

              {/* Main Image Container (Static) */}
              <div className="relative w-full sm:w-[90%] lg:w-full rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#ffffff15] bg-[#0C0C0F] z-10 transition-transform duration-700 hover:scale-[1.02]">
                <img
                  src="/images/dks-hero-person.png"
                  alt="DKS Marketing"
                  className="w-full h-auto object-cover relative z-0"
                  style={{ filter: 'contrast(1.1) brightness(0.95)' }}
                />
                {/* Overlay subtle gradient to fade out bottom */}
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#0C0C0F] via-[#0C0C0F]/80 to-transparent pointer-events-none z-10"></div>
              </div>

              {/* Floating App Integrations */}

              {/* iFood */}
              <div className="absolute top-[5%] -left-8 lg:-left-12 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-[float_5s_ease-in-out_infinite] z-20 transition-transform hover:scale-110 cursor-default">
                <div className="w-8 h-8 rounded-full bg-[#EA1D2C] flex items-center justify-center font-black text-[12px] text-white tracking-tighter shadow-inner">iF</div>
                <span className="text-white font-semibold text-sm">iFood</span>
              </div>

              {/* Anota Aí */}
              <div className="absolute top-[25%] -right-6 lg:-right-14 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-[float_4s_ease-in-out_infinite_animation-delay-1s] z-20 transition-transform hover:scale-110 cursor-default">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7B32F3] to-[#5C25B6] flex items-center justify-center font-bold text-[10px] text-white shadow-inner">AA</div>
                <span className="text-white font-semibold text-sm">Anota Aí</span>
              </div>

              {/* Cardápio Web */}
              <div className="absolute top-[45%] -left-10 lg:-left-16 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-[float_6s_ease-in-out_infinite_animation-delay-2s] z-20 transition-transform hover:scale-110 cursor-default">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#E65000] flex items-center justify-center font-bold text-[10px] text-white shadow-inner">CW</div>
                <span className="text-white font-semibold text-sm whitespace-nowrap">Cardápio Web</span>
              </div>

              {/* 99Food */}
              <div className="absolute bottom-[35%] -right-8 lg:-right-16 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_animation-delay-3s] z-20 transition-transform hover:scale-110 cursor-default">
                <div className="w-8 h-8 rounded-full bg-[#FFCC00] flex items-center justify-center font-black text-[12px] text-black shadow-inner">99</div>
                <span className="text-white font-semibold text-sm">99Food</span>
              </div>

              {/* Keeta */}
              <div className="absolute bottom-[10%] -left-4 lg:-left-8 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-[float_4.5s_ease-in-out_infinite_animation-delay-1s] z-20 transition-transform hover:scale-110 cursor-default">
                <div className="w-8 h-8 rounded-full bg-[#E5004D] flex items-center justify-center font-bold text-[12px] text-white shadow-inner">K</div>
                <span className="text-white font-semibold text-sm">Keeta</span>
              </div>

              {/* Saipos */}
              <div className="absolute -bottom-4 right-8 lg:right-12 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-[float_5.5s_ease-in-out_infinite_animation-delay-2s] z-20 transition-transform hover:scale-110 cursor-default">
                <div className="w-8 h-8 rounded-full bg-[#00A3FF] flex items-center justify-center font-bold text-[12px] text-white shadow-inner">S</div>
                <span className="text-white font-semibold text-sm">Saipos</span>
              </div>

              {/* Multipedidos */}
              <div className="absolute -top-4 right-16 lg:right-24 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-[float_6.5s_ease-in-out_infinite_animation-delay-3s] z-20 transition-transform hover:scale-110 cursor-default">
                <div className="w-8 h-8 rounded-full bg-[#00C48C] flex items-center justify-center font-bold text-[12px] text-white shadow-inner">M</div>
                <span className="text-white font-semibold text-sm">Multipedidos</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: LOGO CAROUSEL (SOCIAL PROOF) 
          ========================================= */}
      <section className="relative w-full py-[60px] bg-[#0A0A0C] border-y border-white/5 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 mb-[40px] text-center md:text-left">
          <h2 className="text-[24px] md:text-[32px] font-[800] leading-[1.2] text-white tracking-tight">
            <span className="text-[#D4AF37]">Agência 100% nichada em gastronomia.</span><br className="hidden md:block" />
            Estratégias validadas. Resultados comprovados.
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex w-[200%] overflow-hidden">
          {/* Gradient Masks for fading edges */}
          <div className="absolute inset-y-0 left-0 w-[100px] sm:w-[200px] bg-gradient-to-r from-[#0A0A0C] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-[100px] sm:w-[200px] bg-gradient-to-l from-[#0A0A0C] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Content - Repeated twice for seamless loop */}
          <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-[40px] px-[20px] items-center">
                {/* Client Logos (Mockups) */}
                {[
                  "The Crush Burger", "Fuego Restaurante", "The Family's",
                  "Kempero Brasileiro", "Japa Haus", "Pão e Ponto",
                  "Fratelli's", "Princeso", "My Burger", "Marie",
                  "My Beer", "Steak Grill Burger"
                ].map((name, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[160px] h-[80px] bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:bg-white/[0.08] transition-all duration-300">
                    <span className="text-[#CFCFCF] font-bold text-sm text-center px-4 leading-tight">{name}</span>
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
