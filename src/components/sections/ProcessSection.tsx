import React from 'react';

const STEPS = [
    {
        number: "01",
        title: "Diagnóstico",
        description: "Análise profunda dos seus números atuais, canais de venda e gargalos operacionais. Descobrimos exatamente onde o seu dinheiro está ficando na mesa."
    },
    {
        number: "02",
        title: "Implementação",
        description: "Reestruturação do seu iFood, Google Meu Negócio e Cardápio Digital. Aplicamos técnicas de engenharia de cardápio para aumentar seu ticket médio."
    },
    {
        number: "03",
        title: "Otimização",
        description: "Início das campanhas de tráfego pago (Meta e Google Ads). Ajustamos diariamente para garantir o menor custo de aquisição (CAC) possível."
    },
    {
        number: "04",
        title: "Escala",
        description: "Com o funil validado e a máquina de vendas rodando, injetamos mais verba com segurança para quebrar seus recordes de faturamento todos os meses."
    }
];

export default function ProcessSection() {
    return (
        <section className="w-full bg-[#0A0A0C] py-[120px] relative z-10 border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-[80px]">
                    <h2 className="text-[36px] md:text-[52px] font-[700] leading-[1.1] text-white tracking-[-1px] max-w-[800px] mx-auto">
                        Como funciona a <span className="text-[#F2B705]">nossa operação</span>
                    </h2>
                    <p className="text-[#CFCFCF] text-[18px] mt-[24px] max-w-[600px] mx-auto leading-[1.6]">
                        Um método 100% validado. Sem achismos, sem posts que não vendem. Foco exclusivo em escala matemática e crescimento real.
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#F2B705]/10 via-[#F2B705]/50 to-[#F2B705]/10 z-0"></div>

                    {STEPS.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">

                            {/* Number Badge */}
                            <div className="w-[96px] h-[96px] rounded-full bg-[#000000] border-2 border-[#F2B705] flex items-center justify-center mb-[32px] shadow-[0_0_30px_rgba(242,183,5,0.2)]">
                                <span className="text-[#F2B705] text-[32px] font-[800]">{step.number}</span>
                            </div>

                            <h3 className="text-[24px] font-[700] text-white mb-[16px]">{step.title}</h3>

                            <p className="text-[#CFCFCF] text-[16px] leading-[1.6]">
                                {step.description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
