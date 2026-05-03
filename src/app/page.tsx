import React from 'react';
import ServicesCarousel from '@/components/ui/ServicesCarousel';
import MetodoROMA from '@/components/ui/MetodoROMA';
import ClientLogoCard from '@/components/ui/ClientLogoCard';
import Feedbacks from '@/components/ui/Feedbacks';
import DorDoLead from '@/components/ui/DorDoLead';
import VisionFuturo from '@/components/ui/VisionFuturo';
import FAQ from '@/components/ui/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "DKS Marketing | Venda Mais no seu Restaurante",
  description: "A assessoria de marketing que faz restaurantes e deliveries baterem recordes de faturamento todos os meses. Venha lotar suas mesas com a DKS.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-white font-sans overflow-hidden" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
      {/* Background Gradient removed as requested */}

      <section className="relative w-full min-h-[60vh] md:min-h-[90vh] flex items-end md:items-center pt-0 md:pt-0 pb-6 md:pb-0 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full z-0">
          <picture>
            {/* Mobile: nova foto B&W */}
            <source media="(max-width: 767px)" srcSet="/images/foto-dks-nova.webp" />
            {/* Desktop: foto de fundo original */}
            <img
              src="/images/dks-hero-fullbg.webp"
              alt="DKS Marketing Background"
              width={1920}
              height={1080}
              fetchPriority="high"
              className="w-full h-full object-cover object-[60%_top] md:object-[60%_center] lg:object-[80%_center]"
              style={{ filter: 'contrast(1.05)' }}
            />
          </picture>
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
            <div className="mt-[24px] md:mt-[40px] flex flex-col w-full relative max-w-[340px]">
              {/* Orange Glow Behind Button */}
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[240px] h-[70px] bg-[#FF9900]/60 blur-[40px] rounded-full -z-10 animate-pulse"></div>

              <a
                href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#00CC00] text-white px-[30px] py-[20px] rounded-[16px] font-[800] text-[16px] md:text-[18px] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#00B300] shadow-[0px_0px_40px_rgba(0,204,0,0.5)] overflow-hidden w-full text-center"
              >
                <span className="relative z-10 uppercase tracking-wide">Quero Contratar a DKS Marketing</span>
                {/* Sweep light effect on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[sweep_0.8s_ease-in-out]"></div>
              </a>

              {/* Social proof anchors */}
              <div className="flex flex-col gap-2 mt-4 items-center md:items-start">
                {[
                  "Venha aumentar o seu faturamento",
                  "+100 restaurantes atendidos",
                  "Resposta em até 24h",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-[#888] text-xs">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="6" fill="#00CC00" fillOpacity="0.15" />
                      <path d="M3.5 6l1.8 1.8L8.5 4.5" stroke="#00CC00" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: LOGO CAROUSEL (SOCIAL PROOF) 
          ========================================= */}
      <section className="relative w-full py-[24px] md:py-[80px] bg-[#000000] border-y border-[#333333] overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 mb-[20px] md:mb-[40px] text-center">
          <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-[500] leading-[1.2] text-white tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
            As marcas que <span className="text-[#FFC000] font-[700]">mais crescem no Brasil</span> escolhem a DKS.
          </h2>
        </div>

        {/* Seamless Marquee Wrapper */}
        <div className="relative flex w-[200%] overflow-hidden">
          {/* Gradient Masks for fading edges */}
          <div className="absolute inset-y-0 left-0 w-[50px] md:w-[150px] bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-[50px] md:w-[150px] bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Content - Mobile: 2 rows (opposing), Desktop: 1 row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-0 w-max">

            {/* Mobile View: 2 Rows */}
            <div className="md:hidden flex flex-col gap-6 w-max">
              {/* Row 1 */}
              <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused]">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-[24px] px-[12px] items-center">
                    {[
                      { name: "Japa Haus", image: "/images/japa-haus-logo.webp" },
                      { name: "Dora Marie", image: "/images/dora-marie-logo.webp" },
                      { name: "Fratelli's Pizzaria", image: "/images/Fratellis Pizzaria Logo.webp" },
                      { name: "Saporito", image: "/images/Saporito LOGO.webp" },
                      { name: "Tempero Brasileiro", image: "/images/Tempero Brasileiro logo.webp" },
                      { name: "Pão e Ponto", image: "/images/Pao e ponto logo.webp" },
                      { name: "Deco Pizzas", image: "/images/Deco Pizzas logo.webp" },
                      { name: "Padaria Bublitz", image: "/images/Bublitz logo.webp" },
                    ].map((client, idx) => (
                      <ClientLogoCard key={`r1-${idx}`} name={client.name} image={client.image} colorful={!!client.image} />
                    ))}
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex animate-[marquee-reverse_20s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused]">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-[24px] px-[12px] items-center">
                    {[
                      { name: "Steak Grill Burger", image: "/images/Steak Grill Burger logo.webp" },
                      { name: "My Beer", image: "/images/My beer logo.webp" },
                      { name: "Princeso Restaurante", image: "/images/PRINCESO RESTAURANTE.webp" },
                      { name: "Pizza&Cia", image: "/images/Pizza&Cia logo.webp" },
                      { name: "Dan Sushi", image: "/images/Dan Sushi logo.webp" },
                      { name: "The Familys Villa Germanica", image: "/images/The Familys Logo.webp" },
                      { name: "My Crush", image: "/images/My Crush Logo.webp" },
                      { name: "Chiquinho Sorvetes", image: "/images/Choquinho sorvetes logo 2.webp" },
                    ].map((client, idx) => (
                      <ClientLogoCard key={`r2-${idx}`} name={client.name} image={client.image} colorful={!!client.image} />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop View: 1 Continuous Row */}
            <div className="hidden md:flex animate-[marquee_40s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused] w-max">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-[32px] px-[16px] items-center">
                  {[
                    { name: "Japa Haus", image: "/images/japa-haus-logo.webp" },
                    { name: "Dora Marie", image: "/images/dora-marie-logo.webp" },
                    { name: "Fratelli's Pizzaria", image: "/images/Fratellis Pizzaria Logo.webp" },
                    { name: "Saporito", image: "/images/Saporito LOGO.webp" },
                    { name: "Tempero Brasileiro", image: "/images/Tempero Brasileiro logo.webp" },
                    { name: "Pão e Ponto", image: "/images/Pao e ponto logo.webp" },
                    { name: "Deco Pizzas", image: "/images/Deco Pizzas logo.webp" },
                    { name: "Steak Grill Burger", image: "/images/Steak Grill Burger logo.webp" },
                    { name: "My Beer", image: "/images/My beer logo.webp" },
                    { name: "Princeso Restaurante", image: "/images/PRINCESO RESTAURANTE.webp" },
                    { name: "Pizza&Cia", image: "/images/Pizza&Cia logo.webp" },
                    { name: "Dan Sushi", image: "/images/Dan Sushi logo.webp" },
                    { name: "The Familys Villa Germanica", image: "/images/The Familys Logo.webp" },
                    { name: "My Crush", image: "/images/My Crush Logo.webp" },
                    { name: "Chiquinho Sorvetes", image: "/images/Choquinho sorvetes logo 2.webp" },
                    { name: "Padaria Bublitz", image: "/images/Bublitz logo.webp" },
                  ].map((client, idx) => (
                    <ClientLogoCard key={`desktop-${idx}`} name={client.name} image={client.image} colorful={!!client.image} />
                  ))}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Dor do Lead Section */}
      <DorDoLead />

      {/* =========================================
          SECTION 3: COMPARISON TABLE (GENERIC VS DKS)
          ========================================= */}
      <section className="relative w-full py-[100px] bg-[#0A0A0C] overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-6 w-full">

          <div className="text-center mb-12">
            <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              💡 A raiz do problema
            </span>
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-[800] leading-[1.2] text-white tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Você já tentou resolver.<br />
              O problema é <span className="text-[#D4AF37]">com quem.</span>
            </h2>
            <p className="text-[#A1A1AA] mt-4 text-[16px] md:text-[18px] max-w-xl mx-auto">
              Agência genérica não entende de restaurante. Não sabe o que leva alguém a pedir delivery,
              lotar mesa ou deixar avaliação. Veja a diferença na prática.
            </p>
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
              href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#00CC00] text-white px-[40px] py-[20px] rounded-[16px] font-[800] text-[16px] md:text-[18px] flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#00B300] shadow-[0px_0px_40px_rgba(0,204,0,0.4)] overflow-hidden text-center"
            >
              <span className="relative z-10 uppercase tracking-wide">Quero a DKS no meu negócio</span>
              {/* Sweep light effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[sweep_0.8s_ease-in-out]"></div>
            </a>
          </div>

        </div>
      </section>

      {/* Método ROMA Section */}
      <MetodoROMA />

      {/* Vision of Future Section */}
      <VisionFuturo />

      {/* =========================================
          SECTION 4: DELIVERABLES CAROUSEL
          ========================================= */}
      <section className="relative w-full py-[100px] bg-[#000000] overflow-hidden border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 w-full text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-[800] leading-[1.2] text-white tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Como a DKS pode aumentar<br className="hidden md:block" />
            <span className="text-[#D4AF37]">seu faturamento</span>
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

      {/* Feedbacks Section */}
      <Feedbacks />

      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}
