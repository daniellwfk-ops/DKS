import React from 'react';

export default function FinalCTASection() {
    return (
        <section className="w-full bg-[#0A0A0C] pt-[120px] pb-[160px] relative z-10 font-sans border-t border-white/5 text-center overflow-hidden">

            {/* Dynamic Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] max-w-[800px] h-[300px] bg-[#F2B705]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-[#22C55E]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[800px] mx-auto px-6 relative z-10 flex flex-col items-center">

                <h2 className="text-[40px] md:text-[64px] font-[800] leading-[1.1] text-white tracking-[-2px] mb-[24px]">
                    Seu restaurante pode ser o próximo a <span className="text-[#F2B705]">bater recorde de faturamento.</span>
                </h2>

                <p className="text-[#CFCFCF] text-[18px] md:text-[22px] max-w-[600px] leading-[1.6] mb-[56px]">
                    Agende um diagnóstico estratégico gratuito da sua operação com um dos nossos engenheiros de growth. Descubra exatamente quanto dinheiro você está deixando na mesa hoje.
                </p>

                <a
                    href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-[16px] bg-[#22C55E] text-white font-[800] uppercase tracking-[1.5px] text-[16px] md:text-[18px] px-[48px] py-[24px] rounded-[16px] hover:bg-[#16a34a] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,197,94,0.4)] relative overflow-hidden w-full sm:w-auto"
                >
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

                    <span className="relative z-10">AGENDAR DIAGNÓSTICO GRATUITO</span>

                    <div className="relative z-10 w-[32px] h-[32px] rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#16a34a] transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </a>

                {/* Security / Trust Markers below CTA */}
                <div className="mt-[32px] flex items-center gap-[12px] opacity-80">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span className="text-[#A1A1AA] text-[14px]">Suas informações estão 100% seguras. Reunião sem compromisso.</span>
                </div>

            </div>
        </section>
    );
}
