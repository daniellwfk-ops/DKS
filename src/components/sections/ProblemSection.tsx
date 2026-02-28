import React from 'react';

const GENERIC_ITEMS = [
    "Faz post bonitinho sem estratégia",
    "Não entende o contomportamento de cliente do delivery",
    "Não acompanha o faturamento",
    "Não tem método",
    "Usa linguagem genérica",
    "Atua em vários nichos",
    "Posta \"por postar\""
];

const DKS_ITEMS = [
    "Cria campanhas de vendas com metas e métricas",
    "Atua com base em dados reais do iFood, Meta ADS e Google ADS",
    "Monitoramos vendas, ticket médio e ROAS semanalmente",
    "Aplicamos o método ROMA: resultado, otimização e autoridade",
    "Comunicação feita para o cliente de delivery, salão e iFood",
    "100% focada em restaurantes, bares e deliverys",
    "Toda publicação tem objetivo: vender, lotar e atrair"
];

export default function ProblemSection() {
    return (
        <section className="w-full bg-[#000000] py-[120px] relative z-10">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-[80px]">
                    <h2 className="text-[36px] md:text-[48px] font-[700] leading-[1.2] text-white tracking-[-1px] max-w-[800px] mx-auto">
                        Por que a maioria dos restaurantes investem em marketing e <span className="text-[#F2B705]">continua faturando pouco?</span>
                    </h2>
                </div>

                {/* Comparison Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Card 1: Agência Genérica */}
                    <div className="bg-[#0A0A0C] border border-white/5 rounded-[24px] p-[40px] lg:p-[56px] shadow-2xl">
                        <div className="flex items-center gap-4 mb-[48px]">
                            <i className="ph-fill ph-warning text-[#F2B705] text-[32px]"></i>
                            <h3 className="text-[28px] font-[700] text-white">Agência genérica</h3>
                        </div>

                        <ul className="flex flex-col gap-6">
                            {GENERIC_ITEMS.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded bg-[#EF4444] flex items-center justify-center">
                                        <i className="ph-bold ph-x text-white text-[14px]"></i>
                                    </div>
                                    <span className="text-[#CFCFCF] text-[16px] md:text-[18px] leading-[1.5]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 2: Agência DKS */}
                    <div className="bg-[#F2B705] rounded-[24px] p-[40px] lg:p-[56px] shadow-[0_20px_60px_rgba(242,183,5,0.15)] transform transition-transform duration-500 hover:-translate-y-2 relative overflow-hidden">
                        {/* Subtle glow inside card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>

                        <div className="flex items-center gap-4 mb-[48px] relative z-10">
                            <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center shadow-lg">
                                <i className="ph-bold ph-check text-white text-[24px]"></i>
                            </div>
                            <h3 className="text-[28px] font-[800] text-[#000000]">Agência DKS</h3>
                        </div>

                        <ul className="flex flex-col gap-6 relative z-10">
                            {DKS_ITEMS.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <i className="ph-bold ph-check text-[#22C55E] text-[24px] mt-1 flex-shrink-0 drop-shadow-sm"></i>
                                    <span className="text-[#000000] font-[600] text-[16px] md:text-[18px] leading-[1.5]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
