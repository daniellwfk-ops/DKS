import React from 'react';
import ServicesCarousel from '@/components/ui/ServicesCarousel';

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
          SECTION 3: COMPARISON TABLE (GENERIC VS DKS)
          ========================================= */}
      <section className="relative w-full py-[100px] bg-[#0A0A0C] overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 w-full">

          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-[800] leading-[1.2] text-white tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Por que a <span className="text-[#D4AF37]">DKS</span> é diferente?
            </h2>
            <p className="text-[#A1A1AA] mt-4 text-[16px] md:text-[18px]">Veja o que nos separa de agências que não entendem o seu negócio.</p>
          </div>

          <div className="w-full bg-[#111114] border border-[#222226] rounded-2xl overflow-hidden shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1A1A20] border-b border-[#333333]">
              <div className="p-6 md:p-8 text-center md:border-r border-[#333333]/50 flex items-center justify-center">
                <span className="text-[#A1A1AA] font-bold text-sm tracking-widest uppercase">AGÊNCIA GENÉRICA</span>
              </div>
              <div className="p-6 md:p-8 text-center flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#D4AF37]/5"></div>
                <span className="text-[#D4AF37] font-[900] text-lg tracking-widest uppercase relative z-10 flex items-center gap-2">
                  AGÊNCIA DKS <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                </span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#222226]">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 transition-colors hover:bg-white/[0.02]">
                <div className="p-6 md:p-8 text-center md:border-r border-[#222226] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-x text-[#EF4444] text-2xl"></i>
                  <p className="text-[#888888] text-sm md:text-base font-medium">Faz post bonitinho sem estratégia</p>
                </div>
                <div className="p-6 md:p-8 text-center bg-[#D4AF37]/[0.02] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-check text-[#10B981] text-2xl"></i>
                  <p className="text-white text-sm md:text-base font-bold">Cria campanhas de vendas com metas e métricas</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 transition-colors hover:bg-white/[0.02]">
                <div className="p-6 md:p-8 text-center md:border-r border-[#222226] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-x text-[#EF4444] text-2xl"></i>
                  <p className="text-[#888888] text-sm md:text-base font-medium">Não entende o comportamento de cliente do delivery</p>
                </div>
                <div className="p-6 md:p-8 text-center bg-[#D4AF37]/[0.02] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-check text-[#10B981] text-2xl"></i>
                  <p className="text-white text-sm md:text-base font-bold">Atua com base em dados reais do iFood, Meta ADS e Google ADS</p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 transition-colors hover:bg-white/[0.02]">
                <div className="p-6 md:p-8 text-center md:border-r border-[#222226] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-x text-[#EF4444] text-2xl"></i>
                  <p className="text-[#888888] text-sm md:text-base font-medium">Não acompanha o faturamento</p>
                </div>
                <div className="p-6 md:p-8 text-center bg-[#D4AF37]/[0.02] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-check text-[#10B981] text-2xl"></i>
                  <p className="text-white text-sm md:text-base font-bold">Monitoramos vendas, ticket médio e ROAS semanalmente</p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 transition-colors hover:bg-white/[0.02]">
                <div className="p-6 md:p-8 text-center md:border-r border-[#222226] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-x text-[#EF4444] text-2xl"></i>
                  <p className="text-[#888888] text-sm md:text-base font-medium">Não tem método</p>
                </div>
                <div className="p-6 md:p-8 text-center bg-[#D4AF37]/[0.02] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-check text-[#10B981] text-2xl"></i>
                  <p className="text-white text-sm md:text-base font-bold">Aplicamos método único focado em performance: resultado, otimização e autoridade</p>
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 transition-colors hover:bg-white/[0.02]">
                <div className="p-6 md:p-8 text-center md:border-r border-[#222226] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-x text-[#EF4444] text-2xl"></i>
                  <p className="text-[#888888] text-sm md:text-base font-medium">Usa linguagem genérica</p>
                </div>
                <div className="p-6 md:p-8 text-center bg-[#D4AF37]/[0.02] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-check text-[#10B981] text-2xl"></i>
                  <p className="text-white text-sm md:text-base font-bold">Comunicação feita para o cliente de delivery, salão e iFood</p>
                </div>
              </div>

              {/* Row 6 */}
              <div className="grid grid-cols-1 md:grid-cols-2 transition-colors hover:bg-white/[0.02]">
                <div className="p-6 md:p-8 text-center md:border-r border-[#222226] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-x text-[#EF4444] text-2xl"></i>
                  <p className="text-[#888888] text-sm md:text-base font-medium">Atua em vários nichos</p>
                </div>
                <div className="p-6 md:p-8 text-center bg-[#D4AF37]/[0.02] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-check text-[#10B981] text-2xl"></i>
                  <p className="text-white text-sm md:text-base font-bold">100% focada em restaurantes, bares e deliverys</p>
                </div>
              </div>

              {/* Row 7 */}
              <div className="grid grid-cols-1 md:grid-cols-2 transition-colors hover:bg-white/[0.02]">
                <div className="p-6 md:p-8 text-center md:border-r border-[#222226] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-x text-[#EF4444] text-2xl"></i>
                  <p className="text-[#888888] text-sm md:text-base font-medium">Posta "por postar"</p>
                </div>
                <div className="p-6 md:p-8 text-center bg-[#D4AF37]/[0.02] flex flex-col items-center justify-center gap-3">
                  <i className="ph-bold ph-check text-[#10B981] text-2xl"></i>
                  <p className="text-white text-sm md:text-base font-bold">Toda publicação tem objetivo: vender, lotar e atrair</p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom CTA for Comparison */}
          <div className="mt-12 flex justify-center">
            <a
              href="#"
              className="group relative bg-[#00CC00] text-white px-[40px] py-[20px] rounded-[16px] font-[800] text-[16px] md:text-[18px] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#00B300] shadow-[0px_0px_40px_rgba(0,204,0,0.4)] overflow-hidden text-center"
            >
              <span className="relative z-10 uppercase tracking-wide">Quero a DKS no meu negócio</span>
              {/* Sweep light effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[sweep_0.8s_ease-in-out]"></div>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 4: DELIVERABLES CAROUSEL
          ========================================= */}
      <section className="relative w-full py-[100px] bg-[#040814] overflow-hidden border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 w-full text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-[800] leading-[1.2] text-white tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Como a <span className="text-[#D4AF37]">DKS</span> pode aumentar<br className="hidden md:block" />
            <span className="text-[#00AEEF]">seu faturamento</span>
          </h2>
          <p className="text-[#CFCFCF] mt-6 text-[16px] md:text-[20px] font-medium">
            Conheça todos os serviços que oferecemos para que seu<br className="hidden md:block" />
            <span className="text-white italic">restaurante venda mais.</span>
          </p>
        </div>

        <ServicesCarousel />
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
