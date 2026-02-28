import React from 'react';

export default function PainPointsSection() {
    return (
        <section className="w-full bg-[#0B0B0B] py-[100px] font-sans relative z-10">

            <div className="max-w-[1200px] mx-auto px-6">

                {/* Section Headline */}
                <div className="text-center mb-[80px]">
                    <h2 className="text-[32px] md:text-[40px] font-[800] text-white leading-[1.3] tracking-[-1px] max-w-[800px] mx-auto">
                        Você tem um restaurante ou delivery e se identifica com pelo menos uma dessas dores?
                    </h2>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">

                    {/* Card 1 */}
                    <div className="bg-[#111111] border border-[#2B2B2B] rounded-[12px] p-[32px] relative overflow-hidden group hover:border-[#E50914]/50 transition-colors duration-300">
                        {/* Top Red Glow Line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[4px] bg-[#E50914] shadow-[0_0_20px_#E50914] rounded-b-full"></div>

                        {/* Icon Circle */}
                        <div className="w-[56px] h-[56px] bg-[#E50914] rounded-full flex items-center justify-center mb-[24px] shadow-[0_0_15px_rgba(229,9,20,0.4)]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="23" y2="12"></line><line x1="23" y1="8" x2="19" y2="12"></line></svg>
                        </div>

                        <h3 className="text-white font-[700] text-[20px] mb-[16px] leading-[1.3]">
                            Dificuldade para atrair novos clientes.
                        </h3>

                        <p className="text-[#A1A1AA] text-[15px] leading-[1.6]">
                            Seu restaurante tem qualidade, mas as mesas continuam vazias. Você investe em produtos e atendimento de primeira, mas os clientes simplesmente não aparecem. O problema não é o seu negócio — é que as pessoas ainda não sabem que você existe.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#111111] border border-[#2B2B2B] rounded-[12px] p-[32px] relative overflow-hidden group hover:border-[#E50914]/50 transition-colors duration-300">
                        {/* Top Red Glow Line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[4px] bg-[#E50914] shadow-[0_0_20px_#E50914] rounded-b-full"></div>

                        <div className="w-[56px] h-[56px] bg-[#E50914] rounded-full flex items-center justify-center mb-[24px] shadow-[0_0_15px_rgba(229,9,20,0.4)]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path><line x1="3" y1="3" x2="21" y2="21"></line></svg>
                        </div>

                        <h3 className="text-white font-[700] text-[20px] mb-[16px] leading-[1.3]">
                            Custo alto com marketing que não traz resultados.
                        </h3>

                        <p className="text-[#A1A1AA] text-[15px] leading-[1.6]">
                            Você já gastou com panfletos, impulsionamentos e até agências que prometeram resultados milagrosos. No fim, pouco ou nenhum retorno. O caixa sangra e você não sabe se o problema é o marketing ou o seu negócio.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#111111] border border-[#2B2B2B] rounded-[12px] p-[32px] relative overflow-hidden group hover:border-[#E50914]/50 transition-colors duration-300 md:col-start-1 lg:col-start-3">
                        {/* Top Red Glow Line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[4px] bg-[#E50914] shadow-[0_0_20px_#E50914] rounded-b-full"></div>

                        <div className="w-[56px] h-[56px] bg-[#E50914] rounded-full flex items-center justify-center mb-[24px] shadow-[0_0_15px_rgba(229,9,20,0.4)]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle><line x1="3" y1="3" x2="21" y2="21"></line></svg>
                        </div>

                        <h3 className="text-white font-[700] text-[20px] mb-[16px] leading-[1.3]">
                            Baixa visibilidade no mundo digital.
                        </h3>

                        <p className="text-[#A1A1AA] text-[15px] leading-[1.6]">
                            Quando alguém busca "restaurante perto de mim", aparecem todos os concorrentes — menos você. Suas redes têm poucos seguidores e suas postagens não geram engajamento. Enquanto isso, lugares com menos qualidade dominam e faturam mais.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#111111] border border-[#2B2B2B] rounded-[12px] p-[32px] relative overflow-hidden group hover:border-[#E50914]/50 transition-colors duration-300">
                        {/* Top Red Glow Line */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[4px] bg-[#E50914] shadow-[0_0_20px_#E50914] rounded-b-full"></div>

                        <div className="w-[56px] h-[56px] bg-[#E50914] rounded-full flex items-center justify-center mb-[24px] shadow-[0_0_15px_rgba(229,9,20,0.4)]">
                            <span className="text-white font-[800] italic text-[18px]">iFood</span>
                        </div>

                        <h3 className="text-white font-[700] text-[20px] mb-[16px] leading-[1.3]">
                            Dependência total de plataformas de delivery.
                        </h3>

                        <p className="text-[#A1A1AA] text-[15px] leading-[1.6]">
                            Você trabalha de sol a sol, os pedidos chegam, mas no fim do mês o lucro desaparece nas taxas de 20%, 27% ou mais. Você virou refém: sem os apps não tem movimento, mas com eles mal sobra margem. E o pior: não retém clientes.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}
