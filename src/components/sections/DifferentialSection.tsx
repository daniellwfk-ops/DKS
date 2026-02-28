import React from 'react';

export default function DifferentialSection() {
    return (
        <section className="w-full bg-[#000000] py-[120px] relative z-10 font-sans">

            {/* Background ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[400px] bg-[#F2B705]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1000px] mx-auto px-6 relative z-10">

                <div className="bg-[#0A0A0C] border border-white/10 rounded-[32px] p-[40px] md:p-[80px] text-center overflow-hidden relative">

                    {/* Decorative Corner accents */}
                    <div className="absolute top-0 left-0 w-[80px] h-[80px] border-t-2 border-l-2 border-[#F2B705]/30 rounded-tl-[32px]"></div>
                    <div className="absolute bottom-0 right-0 w-[80px] h-[80px] border-b-2 border-r-2 border-[#F2B705]/30 rounded-br-[32px]"></div>

                    <p className="text-[#F2B705] font-[700] text-[16px] tracking-[2px] uppercase mb-[24px]">O Nosso Diferencial</p>

                    <h2 className="text-[32px] md:text-[48px] font-[800] leading-[1.2] text-white tracking-[-1px] mb-[40px]">
                        Nós não vendemos tráfego.<br />
                        Nós vendemos uma <span className="text-[#F2B705] relative inline-block">
                            máquina de lucro
                            <span className="absolute bottom-1 left-0 w-full h-[8px] bg-[#F2B705]/30 -z-10 twist-underline"></span>
                        </span> validada.
                    </h2>

                    <div className="max-w-[700px] mx-auto space-y-[24px] text-[#CFCFCF] text-[18px] leading-[1.7]">
                        <p>
                            Agências comuns focam no meio do caminho: impressões, cliques, e curtidas. Nós olhamos exclusivamente para o final da linha: o saldo na conta bancária do seu restaurante ao final do mês.
                        </p>
                        <p>
                            Se a campanha não gera pedidos reais, com margem de lucro saudável, ela é desligada imediatamente. A DKS só cresce quando o seu restaurante bate recordes de faturamento. Nosso alinhamento é matematicamente garantido.
                        </p>
                    </div>

                    {/* Verification Badge */}
                    <div className="mt-[56px] inline-flex items-center gap-[16px] bg-[#000000] border border-[#F2B705]/20 px-[32px] py-[16px] rounded-full">
                        <div className="w-[12px] h-[12px] rounded-full bg-[#22C55E] shadow-[0_0_15px_#22C55E] animate-pulse"></div>
                        <span className="text-white font-[600] tracking-[0.5px]">Metodologia Validada em +100 Operações Food</span>
                    </div>

                </div>

            </div>
        </section>
    );
}
