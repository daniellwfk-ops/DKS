import React from 'react';

interface SubpageCTAProps {
    headline?: string;
}

export default function SubpageCTA({
    headline = "Pronto para aplicar o Método ROMA e quebrar seus recordes de faturamento?"
}: SubpageCTAProps) {
    return (
        <section className="w-full bg-[#0A0A0C] py-[100px] relative z-10 font-sans border-t border-white/5 text-center">
            <div className="max-w-[700px] mx-auto px-6">
                <h2 className="text-[32px] md:text-[40px] font-[800] text-white leading-[1.2] tracking-[-1px] mb-[40px]">
                    {headline}
                </h2>

                <a
                    href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-[12px] bg-[#22C55E] text-white font-[800] uppercase tracking-[1px] text-[16px] px-[40px] py-[20px] rounded-[12px] hover:bg-[#16a34a] transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(34,197,94,0.3)] w-full sm:w-auto"
                >
                    AGENDAR DIAGNÓSTICO GRATUITO
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </section>
    );
}
