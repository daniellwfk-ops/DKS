import React from 'react';

export default function BenefitsSection() {
    return (
        <section className="w-full bg-[#0B0B0B] py-[100px] relative z-10 font-sans">

            <div className="max-w-[1200px] mx-auto px-6">

                {/* 3 Column Grid for Benefits (Reference 4) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">

                    {/* Card 1: Aumentar Faturamento */}
                    <div className="relative h-[450px] lg:h-[600px] rounded-[16px] overflow-hidden group">
                        {/* Background Image Placeholder (Dashboard/Metrics) */}
                        <div className="absolute inset-0 bg-[#111] bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>

                        {/* Strong Red/Black Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-red-900/60 to-black/80"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-[32px] text-center z-10">
                            {/* Small brand logo top */}
                            <div className="mb-[auto] flex items-center justify-center gap-2 mt-4">
                                <div className="w-[32px] h-[32px] bg-[#E50914] rounded-full flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><path d="M4 4h16v16H4z" /><path d="M4 12h16" /></svg>
                                </div>
                                <span className="text-white font-[800] text-[16px] tracking-tight">DKS<br /><span className="text-[10px] font-normal leading-none block">Métricas</span></span>
                            </div>

                            <h3 className="text-white font-[900] text-[32px] lg:text-[40px] leading-[1] tracking-[-1px] uppercase text-shadow-lg mb-[auto]">
                                Aumentar Seu<br />Faturamento
                            </h3>
                        </div>
                    </div>

                    {/* Card 2: Fortalecimento de Marca */}
                    <div className="relative h-[450px] lg:h-[600px] rounded-[16px] overflow-hidden group">
                        {/* Background Image Placeholder (Restaurant Interior) */}
                        <div className="absolute inset-0 bg-[#111] bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-red-900/60 to-black/80"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center p-[32px] text-center z-10">
                            <div className="mb-[auto] flex items-center justify-center gap-2 mt-4">
                                <div className="w-[32px] h-[32px] bg-[#E50914] rounded-full flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><path d="M4 4h16v16H4z" /><path d="M4 12h16" /></svg>
                                </div>
                                <span className="text-white font-[800] text-[16px] tracking-tight">DKS<br /><span className="text-[10px] font-normal leading-none block">Marketing</span></span>
                            </div>

                            <h3 className="text-white font-[900] text-[32px] lg:text-[40px] leading-[1] tracking-[-1px] uppercase text-shadow-lg mb-[auto]">
                                Fortalecimento<br />de Marca
                            </h3>
                        </div>
                    </div>

                    {/* Card 3: Conquistar Clientes */}
                    <div className="relative h-[450px] lg:h-[600px] rounded-[16px] overflow-hidden group">
                        {/* Background Image Placeholder (People eating) */}
                        <div className="absolute inset-0 bg-[#111] bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-red-900/60 to-black/80"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center p-[32px] text-center z-10">
                            <div className="mb-[auto] flex items-center justify-center gap-2 mt-4">
                                <div className="w-[32px] h-[32px] bg-[#E50914] rounded-full flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"><path d="M4 4h16v16H4z" /><path d="M4 12h16" /></svg>
                                </div>
                                <span className="text-white font-[800] text-[16px] tracking-tight">DKS<br /><span className="text-[10px] font-normal leading-none block">Máquina</span></span>
                            </div>

                            <h3 className="text-white font-[900] text-[32px] lg:text-[40px] leading-[1] tracking-[-1px] uppercase text-shadow-lg mb-[auto]">
                                Conquistar<br />Clientes Fiéis
                            </h3>
                        </div>
                    </div>

                </div>

                {/* Transition / Method CTA (Bottom of Reference 4) */}
                <div className="mt-[80px] text-center flex flex-col items-center">
                    <a
                        href="#"
                        className="group relative inline-flex items-center justify-center bg-[#32CD32] text-white font-[800] uppercase tracking-[0.5px] text-[16px] px-[40px] py-[18px] rounded-[8px] hover:bg-[#2eaa2e] transition-all duration-300 w-full sm:w-auto shadow-[0_0_30px_rgba(50,205,50,0.2)] hover:shadow-[0_0_50px_rgba(50,205,50,0.4)] overflow-hidden mb-[64px]"
                    >
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"></div>
                        <span className="relative z-10">QUERO AUMENTAR MEU FATURAMENTO!</span>
                    </a>

                    <h2 className="text-[36px] md:text-[48px] font-[800] text-white leading-[1.2] tracking-[-1px] mb-[16px]">
                        Método MC - Melhoria Contínua
                    </h2>
                    <p className="text-[#A1A1AA] text-[18px]">
                        Inicie o projeto com uma estratégia personalizada para seu Restaurante / Delivery e veja seus resultados crescerem.
                    </p>
                </div>

            </div>

        </section>
    );
}
