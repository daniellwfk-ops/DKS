import React from 'react';
import SubpageHero from '@/components/ui/SubpageHero';
import SubpageCTA from '@/components/ui/SubpageCTA';

export default function AsFasesDoProjeto() {
    return (
        <main className="min-h-screen bg-[#000000] text-white font-sans overflow-hidden">

            <SubpageHero
                label="Consultoria • Parte 3"
                title="As Fases do Projeto"
                description="Do diagnóstico à escala total. Veja como pegamos o seu restaurante pela mão e construímos previsibilidade térmica em menos de 30 dias."
            />

            {/* Copy Container */}
            <section className="w-full bg-[#000000] py-[80px] relative z-10 font-sans">
                <div className="max-w-[720px] mx-auto px-6 text-[#CFCFCF] text-[18px] leading-[1.8] space-y-[32px]">

                    <p>
                        Um processo previsível e auditável do início ao fim. Nada é feito no achismo. Tudo segue uma engenharia rigorosa validada em centenas de marcas no Brasil todo.
                    </p>

                    <h3 className="text-[28px] font-[800] text-white tracking-[-0.5px] mt-[48px] mb-[24px]">
                        O Roadmap da Alavancagem
                    </h3>

                    <div className="space-y-[40px] relative">

                        {/* Phase 1 */}
                        <div className="bg-[#0A0A0C] border border-white/10 p-[40px] rounded-[24px] relative">
                            <div className="absolute top-0 right-0 w-[40px] h-[40px] -mt-[20px] -mr-[20px] bg-[#F2B705] rounded-full flex items-center justify-center text-black font-[800] text-[16px]">1</div>
                            <h4 className="text-white font-[800] text-[24px] mb-[16px]">Semana 1: Raio-X & Estruração (Kick-Off)</h4>
                            <p className="mb-[16px]">Fase intensiva de diagnóstico. Olhamos debaixo do capô da sua operação.</p>
                            <ul className="list-disc pl-[24px] space-y-[8px] text-[16px] text-[#A1A1AA]">
                                <li>Revisão de CMV (descobrir onde você tá perdendo dinheiro)</li>
                                <li>Designação e ancoragem de Preço no iFood/Menu PRÓPRIO</li>
                                <li>Auditoria SEO do Google Meu Negócio.</li>
                                <li>Mapeamento concorrencial na sua praça/raio de 3-5KM.</li>
                            </ul>
                        </div>

                        {/* Phase 2 */}
                        <div className="bg-[#0A0A0C] border border-white/10 p-[40px] rounded-[24px] relative">
                            <div className="absolute top-0 right-0 w-[40px] h-[40px] -mt-[20px] -mr-[20px] bg-[#22C55E] rounded-full flex items-center justify-center text-white font-[800] text-[16px]">2</div>
                            <h4 className="text-white font-[800] text-[24px] mb-[16px]">Semanal 2 e 3: Ligando os Motores (Deploy)</h4>
                            <p className="mb-[16px]">A sua base vital está arrumada, hora de jogar as iscas corretas no oceano de clientes ao redor do restaurante.</p>
                            <ul className="list-disc pl-[24px] space-y-[8px] text-[16px] text-[#A1A1AA]">
                                <li>Lançamento das campanhas ativas no Meta Ads focadas em conversão (não em curtida).</li>
                                <li>Ativação Inteligente no Google Ads (Fundo de funil para quem procura lanche ou janta na sua rua).</li>
                                <li>Disparo de promoções ou iscas em canais diretos (como lista de WhatsApp, se você possuir).</li>
                                <li>Tagueamento e mensuração afiada para medir Custos vs Conversões diariamente.</li>
                            </ul>
                        </div>

                        {/* Phase 3 */}
                        <div className="bg-[#0A0A0C] border border-[rgba(242,183,5,0.4)] shadow-[0_0_40px_rgba(242,183,5,0.1)] p-[40px] rounded-[24px] relative">
                            <div className="absolute top-0 right-0 w-[40px] h-[40px] -mt-[20px] -mr-[20px] bg-[#F2B705] rounded-full flex items-center justify-center text-black font-[800] text-[16px]">3</div>
                            <h4 className="text-white font-[800] text-[24px] mb-[16px]">Semana 4 em diante: Otimização & Escala</h4>
                            <p className="mb-[16px]">Com dados na mão, a gente poda o que deu custo alto (CAC), e dobra a aposta onde a boca bateu mais e trouxe Margem de Contribuição pesada.</p>
                            <ul className="list-disc pl-[24px] space-y-[8px] text-[16px] text-[#A1A1AA]">
                                <li>Relatórios cirúrgicos: ROI por Plataforma.</li>
                                <li>Estratégias avançadas de LTV e CRM para puxar o cliente do iFood para o App Próprio e fidelizá-lo.</li>
                                <li>Quando a máquina estiver saudável (Custo X Retorno bom constantes), aumentamos a verba com segurança, rumo às metas de faturamento.</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </section>

            <SubpageCTA headline="Sua operação suporta o dobro de pedidos na próxima sexta-feira?" />

        </main>
    );
}
