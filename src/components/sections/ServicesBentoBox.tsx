import React from 'react';

export default function ServicesBentoBox() {
    return (
        <section className="w-full bg-[#0B0B0B] py-[100px] relative z-10 font-sans">

            <div className="max-w-[1200px] mx-auto px-6">

                {/* Bento Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">

                    {/* 1. Tráfego Pago (Top Left, spans 7 cols) */}
                    <div className="md:col-span-7 bg-[#111111] rounded-[16px] border border-[#2B2B2B] overflow-hidden flex flex-col group hover:border-[#E50914] transition-colors duration-300">
                        {/* Image/Mockup Header */}
                        <div className="h-[250px] relative bg-gradient-to-t from-black via-red-900/40 to-black p-6 flex flex-col items-center justify-end overflow-hidden">
                            {/* Meta Floating Icon */}
                            <div className="absolute top-[20px] right-[20px] w-[56px] h-[56px] bg-blue-600 rounded-[12px] flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] rotate-[15deg] animate-float z-20">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3.5c0-1-.89-1.5-2-1.5s-2 .5-2 1.5V17H7v-6h2v1.5c.5-.75 1.5-1.5 3-1.5 2 0 3 1.25 3 3.5V17z" /></svg>
                            </div>
                            {/* Mockup Base */}
                            <div className="w-[85%] h-[180px] bg-[#1A1A1A] rounded-t-[8px] border-t border-l border-r border-[#333] shadow-2xl translate-y-[20px] relative z-10 p-4">
                                <div className="w-full h-4 border-b border-[#333] mb-2 flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div><div className="w-2 h-2 rounded-full bg-yellow-500"></div><div className="w-2 h-2 rounded-full bg-green-500"></div>
                                </div>
                                <div className="space-y-2 mt-4">
                                    <div className="w-full h-8 bg-[#2A2A2A] rounded"></div>
                                    <div className="w-[80%] h-8 bg-[#2A2A2A] rounded"></div>
                                    <div className="w-[90%] h-8 bg-[#2A2A2A] rounded"></div>
                                </div>
                            </div>
                            {/* Red Floor Glow */}
                            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-[#E50914] to-transparent mix-blend-screen opacity-50 z-0"></div>
                        </div>
                        {/* Copy Footer */}
                        <div className="p-[32px] bg-[#111111] z-30 relative">
                            <h3 className="text-white font-[800] text-[28px] leading-[1.2] mb-[16px]">Tráfego Pago focado em Performance</h3>
                            <p className="text-[#A1A1AA] text-[16px] leading-[1.6]">Anúncios que não geram vendas são apenas despesa. Criamos e otimizamos campanhas no Meta Ads e Google Ads com foco total em resultados: mais pedidos, reservas e clientes recorrentes.</p>
                        </div>
                    </div>

                    <div className="md:col-span-5 flex flex-col gap-[24px]">
                        {/* 2. Google Meu Negócio (Top Right, spans 5 cols, half height) */}
                        <div className="flex-1 bg-[#111111] rounded-[16px] border border-[#2B2B2B] p-[32px] group hover:border-[#E50914] transition-colors duration-300">
                            <div className="w-[48px] h-[48px] bg-blue-500 rounded-[8px] flex items-center justify-center mb-[24px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" /></svg>
                            </div>
                            <h3 className="text-white font-[800] text-[22px] leading-[1.2] mb-[12px]">Google Meu Negócio</h3>
                            <p className="text-[#A1A1AA] text-[15px] leading-[1.6]">Otimizamos seu perfil no Google para dominar as buscas locais, aumentar sua visibilidade e transformar pesquisas em clientes.</p>
                        </div>

                        {/* 3. Gestão de iFood (Middle Right, spans 5 cols, half height) */}
                        <div className="flex-1 bg-[#111111] rounded-[16px] border border-[#2B2B2B] p-[32px] group hover:border-[#E50914] transition-colors duration-300">
                            <div className="font-[900] text-[24px] italic text-[#E50914] mb-[24px]">iFood</div>
                            <h3 className="text-white font-[800] text-[22px] leading-[1.2] mb-[12px]">Gestão de iFood</h3>
                            <p className="text-[#A1A1AA] text-[15px] leading-[1.6]">Estar no iFood não basta — é preciso se destacar. Gerenciamos seu cardápio, fotos e posicionamento para você vender mais e construir autoridade.</p>
                        </div>
                    </div>

                    {/* 4. Recuperação WhatsApp (Bottom Left, spans 5 cols) */}
                    <div className="md:col-span-5 bg-gradient-to-br from-[#E50914] via-red-900 to-[#111] rounded-[16px] border border-[#2B2B2B] overflow-hidden flex flex-col group">
                        <div className="p-[32px] flex-1 flex flex-col justify-center relative z-10">
                            {/* Huge WhatsApp Icon */}
                            <div className="absolute top-1/2 left-[-20px] -translate-y-1/2 w-[250px] opacity-20 pointer-events-none">
                                <svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            </div>

                            <div className="w-[56px] h-[56px] bg-[#25D366] rounded-[12px] flex items-center justify-center mb-[24px] shadow-[0_0_30px_rgba(37,211,102,0.4)]">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2z" /></svg>
                            </div>
                            <h3 className="text-white font-[800] text-[28px] leading-[1.2] mb-[16px]">Recuperação de vendas por WhatsApp</h3>
                            <p className="text-[#FFD1D1] text-[16px] leading-[1.6]">Cliente que pediu uma vez pode pedir de novo — se você souber como abordá-lo. Criamos estratégias de remarketing para reativar clientes inativos.</p>
                        </div>
                    </div>

                    {/* 5. Engenharia de Cardápio Digital (Bottom Right, spans 7 cols) */}
                    <div className="md:col-span-7 bg-[#111111] rounded-[16px] border border-[#2B2B2B] overflow-hidden flex flex-col group hover:border-[#E50914] transition-colors duration-300">
                        <div className="h-[250px] relative bg-gradient-to-t from-[#222] to-[#111] flex items-end justify-center overflow-hidden p-[32px] pb-0">
                            {/* Macbook Mockup */}
                            <div className="w-[80%] h-[200px] bg-[#000] rounded-t-[16px] border-[4px] border-[#333] border-b-0 relative z-10 shadow-2xl flex items-center justify-center overflow-hidden">
                                <div className="absolute text-[#E50914] font-[900] text-[40px] italic">CARDÁPIO<br />DIGITAL</div>
                            </div>
                        </div>
                        <div className="p-[32px] bg-[#111111] z-20 relative">
                            <h3 className="text-white font-[800] text-[28px] leading-[1.2] mb-[16px]">Engenharia de Cardápio Digital</h3>
                            <p className="text-[#A1A1AA] text-[16px] leading-[1.6]">Seu cardápio online pode ser o vilão das suas vendas. Reestruturamos fotos, descrições, precificação e ordem dos produtos para guiar o cliente às escolhas mais lucrativas.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}
