import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen bg-[#0B0B0B] flex items-center pt-[120px] pb-[80px] overflow-hidden font-sans">

            {/* Dynamic Background Glows */}
            {/* Top Left Red Glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#E50914]/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
            {/* Middle Right Blue Glow (from reference) */}
            <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            {/* Bottom Center Green Glow */}
            <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-[#32CD32]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">

                {/* Left Column: Copy & CTA */}
                <div className="flex flex-col items-start z-20">

                    {/* Logo Context (DKS Text format mimicking the logo style) */}
                    <div className="flex items-center gap-[16px] mb-[48px]">
                        <div className="w-[64px] h-[64px] rounded-full bg-[#E50914] flex items-center justify-center shadow-[0_0_30px_rgba(229,9,20,0.5)]">
                            {/* Abstract DKS Mark */}
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16v16H4z" />
                                <path d="M4 12h16" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-[800] text-[24px] leading-none tracking-tight">DKS</span>
                            <span className="text-white font-[500] text-[24px] leading-none tracking-tight">Marketing</span>
                        </div>
                    </div>

                    <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-[800] text-white leading-[1.1] tracking-[-2px] mb-[32px]">
                        Potencialize Seu Faturamento <br className="hidden md:block" />
                        e Faça Seu Restaurante / <br className="hidden md:block" />
                        Delivery Crescer no Mundo <br className="hidden md:block" />
                        Digital e Presencial!
                    </h1>

                    <p className="text-[#A1A1AA] text-[18px] md:text-[20px] max-w-[500px] leading-[1.6] mb-[48px]">
                        A solução mais completa e especializada em marketing gastronômico para alavancar suas vendas, conquistar novos clientes e fidelizar quem já compra de você.
                    </p>

                    <a
                        href="#"
                        className="group relative inline-flex items-center justify-center bg-[#32CD32] text-white font-[800] uppercase tracking-[0.5px] text-[16px] md:text-[18px] px-[40px] py-[20px] rounded-[8px] hover:bg-[#2eaa2e] transition-all duration-300 w-full sm:w-auto shadow-[0_0_40px_rgba(50,205,50,0.3)] hover:shadow-[0_0_60px_rgba(50,205,50,0.5)] overflow-hidden"
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"></div>
                        <span className="relative z-10">QUERO AUMENTAR MEU FATURAMENTO!</span>
                    </a>
                </div>

                {/* Right Column: User Image & Floating Elements */}
                <div className="relative h-[600px] lg:h-[800px] w-full flex items-center justify-center z-10 hidden md:flex mt-[80px] lg:mt-0">

                    {/* Main User Image Placeholder */}
                    <div className="relative z-20 w-[80%] h-full flex items-end justify-center">
                        {/* Using a placeholder for the user's image. In production, this should be an <img /> or next/image component */}
                        <div className="w-[400px] h-[600px] bg-gradient-to-t from-[#0B0B0B] to-transparent absolute bottom-0 z-30 pointer-events-none"></div>
                        <img
                            src="/daniel-soares-1.png"
                            alt="Daniel Soares"
                            className="w-full max-w-[500px] h-auto object-contain relative z-20 drop-shadow-2xl"
                        />
                    </div>

                    {/* Floating Icons (Based on Reference 1) */}

                    {/* Cardápio Web (Top Left) */}
                    <div className="absolute top-[15%] left-[5%] z-30 animate-float bg-gradient-to-br from-purple-500 to-purple-800 p-[16px] rounded-[24px] shadow-[0_0_40px_rgba(168,85,247,0.6)] rotate-[-10deg]">
                        <div className="text-white font-bold text-[24px] tracking-tighter">Cardápio<br />WEB</div>
                    </div>

                    {/* Saipos (Bottom Left) */}
                    <div className="absolute bottom-[20%] left-[10%] z-30 animate-float-delayed bg-gradient-to-br from-blue-700 to-blue-900 p-[16px] rounded-[24px] shadow-[0_0_40px_rgba(29,78,216,0.6)] rotate-[15deg] w-[120px] h-[120px] flex items-center justify-center flex-col">
                        <div className="w-[48px] h-[48px] rounded-full bg-orange-500 mb-2"></div>
                        <span className="text-white font-bold text-[16px]">Saipos</span>
                    </div>

                    {/* iFood (Center Right) */}
                    <div className="absolute top-[35%] right-[0%] z-30 animate-float bg-[#E50914] p-[16px] rounded-[24px] shadow-[0_0_50px_rgba(229,9,20,0.8)] rotate-[5deg] px-[24px]">
                        <span className="text-white font-[900] text-[32px] italic tracking-tighter">iFood</span>
                    </div>

                    {/* Abstract Blue floating icon (Center Left) */}
                    <div className="absolute top-[45%] left-[-5%] z-10 animate-float bg-gradient-to-br from-cyan-400 to-blue-600 p-[16px] rounded-[24px] shadow-[0_0_40px_rgba(6,182,212,0.6)] rotate-[-15deg] w-[100px] h-[100px] flex items-center justify-center">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>

                </div>

            </div>
        </section>
    );
}
