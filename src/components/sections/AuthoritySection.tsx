import React from 'react';

const METRICS = [
    {
        number: "+100",
        label: "Negócios Impactados",
        description: "Restaurantes e deliveries escalados em todo o Brasil."
    },
    {
        number: "R$ 50M+",
        label: "Faturamento Gerado",
        description: "Em vendas documentadas e mensuradas para nossos clientes."
    },
    {
        number: "100%",
        label: "Especialização Food",
        description: "Não atendemos outros nichos. Somos obcecados por gastronomia."
    }
];

export default function AuthoritySection() {
    return (
        <section className="w-full bg-[#000000] py-[120px] relative z-10">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Header content and Map Visual Split */}
                <div className="flex flex-col lg:flex-row items-center gap-[80px]">

                    {/* Left Text & Metrics */}
                    <div className="lg:w-1/2 flex flex-col items-start text-left">
                        <div className="bg-[#22C55E]/10 text-[#22C55E] px-[16px] py-[8px] rounded-full text-[14px] font-[600] mb-[32px] inline-flex items-center tracking-[0.5px] border border-[#22C55E]/20">
                            Presença Nacional
                        </div>

                        <h2 className="text-[36px] md:text-[52px] font-[700] leading-[1.1] text-white tracking-[-1px] mb-[32px]">
                            O Brasil inteiro já provou do nosso sucesso
                        </h2>

                        <p className="text-[#CFCFCF] text-[18px] mb-[64px] leading-[1.6] max-w-[500px]">
                            Temos um histórico real de restaurantes que saíram do anonimato para se tornarem os líderes de vendas em suas regiões através do Método ROMA.
                        </p>

                        {/* Metrics List */}
                        <div className="flex flex-col gap-[40px] w-full">
                            {METRICS.map((metric, index) => (
                                <div key={index} className="flex gap-[24px] items-start">
                                    <div className="text-[48px] font-[800] text-[#F2B705] leading-none shrink-0 w-[160px]">
                                        {metric.number}
                                    </div>
                                    <div>
                                        <h4 className="text-[20px] font-[700] text-white mb-[8px]">{metric.label}</h4>
                                        <p className="text-[#CFCFCF] text-[16px] leading-[1.5] max-w-[280px]">{metric.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual (Abstract Map / Network) */}
                    <div className="lg:w-1/2 w-full relative h-[600px] rounded-[32px] bg-[#0A0A0C] border border-white/5 overflow-hidden flex items-center justify-center">

                        {/* Background Map Placeholder / Abstract Grid */}
                        <div className="absolute inset-0 z-0 opacity-20" style={{
                            backgroundSize: '30px 30px',
                            backgroundImage: 'radial-gradient(circle at center, #F2B705 1px, transparent 1px)'
                        }}></div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#22C55E]/20 blur-[100px] rounded-full z-0"></div>

                        {/* Glowing Pins (simulating map points) */}
                        <div className="absolute top-[30%] left-[25%] animate-pulse">
                            <div className="w-4 h-4 rounded-full bg-[#22C55E] shadow-[0_0_20px_#22C55E]"></div>
                        </div>
                        <div className="absolute top-[45%] left-[60%] animate-pulse" style={{ animationDelay: '0.5s' }}>
                            <div className="w-5 h-5 rounded-full bg-[#F2B705] shadow-[0_0_30px_#F2B705]"></div>
                        </div>
                        <div className="absolute top-[70%] left-[40%] animate-pulse" style={{ animationDelay: '1s' }}>
                            <div className="w-3 h-3 rounded-full bg-[#22C55E] shadow-[0_0_15px_#22C55E]"></div>
                        </div>
                        <div className="absolute top-[20%] left-[70%] animate-pulse" style={{ animationDelay: '1.5s' }}>
                            <div className="w-4 h-4 rounded-full bg-[#F2B705] shadow-[0_0_20px_#F2B705]"></div>
                        </div>
                        <div className="absolute top-[60%] left-[80%] animate-pulse" style={{ animationDelay: '2s' }}>
                            <div className="w-4 h-4 rounded-full bg-[#22C55E] shadow-[0_0_20px_#22C55E]"></div>
                        </div>

                        <div className="relative z-10 text-center px-6">
                            <h3 className="text-white text-[28px] font-[800] leading-[1.2]">
                                De dezenas de marcas<br />
                                <span className="text-[#F2B705]">Até centenas de filiais</span>
                            </h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
