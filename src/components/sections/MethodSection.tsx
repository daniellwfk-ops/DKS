import React from 'react';

const ROMA_PILLARS = [
    {
        letter: "R",
        title: "Receita Estruturada",
        description: "Criamos cardápios inteligentes focados em margem de lucro, ancoragem de preço e engenharia de vendas."
    },
    {
        letter: "O",
        title: "Organização e Otimização de Canais",
        description: "Reestruturação completa de iFood, Google Meu Negócio e Cardápio Digital para máxima taxa de conversão."
    },
    {
        letter: "M",
        title: "Máquina de Aquisição",
        description: "Tráfego pago avançado no Meta e Google Ads focado exclusivamente em atrair novos clientes todos os dias."
    },
    {
        letter: "A",
        title: "Ativação e Autoridade",
        description: "Estratégias de CRM e remarketing para fazer o mesmo cliente comprar mais vezes, aumentando seu LTV mensal."
    }
];

export default function MethodSection() {
    return (
        <section className="w-full bg-[#0A0A0C] py-[120px] relative z-10 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-[80px]">
                    <h2 className="text-[36px] md:text-[52px] font-[700] leading-[1.1] text-white tracking-[-1px] max-w-[800px] mx-auto uppercase">
                        O <span className="text-[#F2B705]">MÉTODO ROMA</span>
                    </h2>
                    <p className="text-[#CFCFCF] text-[18px] mt-[24px] max-w-[600px] mx-auto leading-[1.6]">
                        As 4 alavancas absolutas que determinam o crescimento do faturamento do seu restaurante. Organizadas e aplicadas por especialistas.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ROMA_PILLARS.map((pillar, index) => (
                        <div
                            key={index}
                            className="group bg-[#000000] border border-white/10 rounded-[24px] p-[40px] flex flex-col items-start transition-all duration-300 hover:border-[#F2B705]/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(242,183,5,0.1)] relative overflow-hidden"
                        >
                            {/* Subtle accent glow */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F2B705]/10 rounded-full blur-[40px] group-hover:bg-[#F2B705]/20 transition-colors"></div>

                            {/* Huge Letter Icon */}
                            <div className="w-[80px] h-[80px] rounded-[16px] bg-[#F2B705]/10 border border-[#F2B705]/20 flex items-center justify-center mb-[32px] group-hover:bg-[#F2B705] transition-colors duration-300">
                                <span className="text-[#F2B705] group-hover:text-[#000000] font-[800] text-[40px] leading-none transition-colors duration-300">
                                    {pillar.letter}
                                </span>
                            </div>

                            <h3 className="text-[22px] font-[700] text-white leading-[1.3] mb-[16px]">
                                {pillar.title}
                            </h3>

                            <p className="text-[#CFCFCF] text-[16px] leading-[1.6]">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
