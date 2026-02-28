import React from 'react';
import LogoCarousel from '@/components/sections/LogoCarousel';
import ProblemSection from '@/components/sections/ProblemSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-white font-sans overflow-hidden" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(242,183,5,0.08), transparent 45%)'
        }}
      />

      <section className="relative z-10 w-full min-h-[90vh] flex items-center py-[120px]">
        {/* Container */}
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column (60%) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left w-full z-10">

              {/* Badge */}
              <div className="bg-[#F2B705]/10 text-[#F2B705] px-[16px] py-[8px] rounded-full text-[14px] font-medium mb-[32px] inline-flex items-center tracking-[0.5px] border border-[#F2B705]/20">
                Especialistas em crescimento para restaurantes
              </div>

              {/* H1 Headline */}
              <h1 className="text-[40px] md:text-[52px] lg:text-[72px] font-[700] leading-[1.05] tracking-[-1.5px] text-white">
                Aplicamos o <span className="text-[#F2B705]">Método ROMA</span> para fazer restaurantes baterem recordes de faturamento
              </h1>

              {/* H2 Subheadline */}
              <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-[400] leading-[1.7] text-[#CFCFCF] mt-[32px] max-w-[700px]">
                Nossa assessoria organiza aquisição, retenção e engenharia de canais para gerar crescimento previsível e escalar sua margem de lucro.
              </h2>

              {/* CTA Buttons */}
              <div className="mt-[56px] flex flex-col sm:flex-row w-full justify-start gap-4">

                {/* Primary Button */}
                <a
                  href="#"
                  className="group relative bg-[#F2B705] text-[#000000] px-[40px] py-[22px] rounded-[16px] font-[700] text-[18px] flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9A404] shadow-[0_10px_30px_rgba(242,183,5,0.2)] overflow-hidden"
                >
                  <span className="relative z-10">Quero aplicar o Método ROMA</span>
                  <i className="ph-bold ph-arrow-up-right text-2xl relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                  {/* Sweep light effect on hover */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[sweep_0.8s_ease-in-out]"></div>
                </a>

                {/* Secondary Button */}
                <a
                  href="#"
                  className="group relative bg-transparent text-white px-[40px] py-[22px] rounded-[16px] font-[600] text-[18px] flex items-center justify-center gap-3 transition-all duration-300 border border-[#F2B705]/50 hover:border-[#F2B705] hover:bg-[#F2B705]/5"
                >
                  Entender como funciona
                </a>

              </div>
            </div>

            {/* Right Column (40%) - Visual Image and Integrations */}
            <div className="lg:col-span-5 relative mt-16 lg:mt-0 w-full max-w-md mx-auto lg:max-w-none flex justify-center lg:justify-end">

              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#F2B705]/10 to-transparent rounded-full blur-[80px] -z-10"></div>

              {/* Main Image Container (Static) */}
              <div className="relative w-full sm:w-[90%] lg:w-full rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#ffffff10] bg-[#000000] z-10 transition-transform duration-700 hover:scale-[1.02]">
                <img
                  src="/images/dks-hero-person.png"
                  alt="DKS Marketing"
                  className="w-full h-auto object-cover relative z-0"
                  style={{ filter: 'contrast(1.1) brightness(0.9)' }}
                />
                {/* Overlay subtle gradient to fade out bottom */}
                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent pointer-events-none z-10"></div>
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

      {/* 2. Logo Carousel Section */}
      <LogoCarousel />

      {/* 3. Problem / Comparison Section */}
      <ProblemSection />

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
      `}} />
    </main>
  );
}
