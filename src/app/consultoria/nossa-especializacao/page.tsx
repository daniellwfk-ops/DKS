import React from 'react';
import SubpageHero from '@/components/ui/SubpageHero';
import SubpageCTA from '@/components/ui/SubpageCTA';

export default function NossaEspecializacao() {
    return (
        <main className="min-h-screen bg-[#000000] text-white font-sans overflow-hidden">

            <SubpageHero
                label="Consultoria • Parte 2"
                title="Nossa Especialização"
                description="Nós não atendemos dentistas. Nós não atendemos imobiliárias. Nós somos obcecados pela engenharia de vendas gastronômica."
            />

            {/* Copy Container */}
            <section className="w-full bg-[#000000] py-[80px] relative z-10 font-sans">
                <div className="max-w-[720px] mx-auto px-6 text-[#CFCFCF] text-[18px] leading-[1.8] space-y-[32px]">

                    <p>
                        O erro capital da ampla maioria dos donos de restaurante é entregar a vida financeira da sua operação na mão de um estagiário de agência ou do "sobrinho que sabe fazer tráfego".
                    </p>

                    <p>
                        Vender um loteamento de R$ 500.000 é fundamentalmente diferente de vender uma pizza de R$ 80 numa noite de chuva de sexta-feira. <strong>O gatilho de compra é outro. A temperatura do público é outra. O funil é extremamente curto.</strong>
                    </p>

                    <h3 className="text-[28px] font-[800] text-white tracking-[-0.5px] mt-[48px] mb-[24px]">
                        O Idioma do Food Service
                    </h3>

                    <p>
                        Quando falamos com um dono de restaurante, não perdemos tempo explicando que não dá para calcular o ROI de venda direta igual e-commerce. Nós já começamos a conversa falando sobre Ticket Médio do iFood, sobre Custo de Aquisição no Salão versus Delivery, e margem de contribuição.
                    </p>

                    <ul className="space-y-[16px] my-[40px]">
                        <li className="flex items-start gap-[12px]">
                            <div className="text-[#F2B705] font-bold text-[24px] shrink-0">1.</div>
                            <p className="m-0 pt-[2px]">Nós sabemos que a sua margem no iFood é esmagada pelas taxas, e construímos inteligência para puxar o cliente para o seu Cardápio Próprio.</p>
                        </li>
                        <li className="flex items-start gap-[12px]">
                            <div className="text-[#F2B705] font-bold text-[24px] shrink-0">2.</div>
                            <p className="m-0 pt-[2px]">Nós entendemos profundamente o mapa de calor de um raio de entrega de 5km e como saturar essa região com tráfego pago nos horários de pico térmico (11h e 19h).</p>
                        </li>
                        <li className="flex items-start gap-[12px]">
                            <div className="text-[#F2B705] font-bold text-[24px] shrink-0">3.</div>
                            <p className="m-0 pt-[2px]">Sabemos como ancorar o preço do combo mais rentável usando psicologia de consumo visual (fotos e text copywriting).</p>
                        </li>
                    </ul>

                    <div className="bg-[#E50914]/10 border-l-[4px] border-[#E50914] p-[24px] my-[40px] rounded-r-[8px]">
                        <p className="text-white font-[600] m-0">
                            Cobraremos caro? Sim. Mas muito mais caro custa a agência de R$ 1.500/mês que nunca te entregou R$ 10 de lucro auditável, só métricas de vaidade.
                        </p>
                    </div>

                    <h3 className="text-[28px] font-[800] text-white tracking-[-0.5px] mt-[48px] mb-[24px]">
                        Foco Laser na Gastronomia
                    </h3>

                    <p>
                        No Brasil, faturar mais de R$ 200.000/mês em um restaurante já te coloca nos 5% do topo da pirâmide. O Método ROMA foi desenhado, testado e lapidado centenas de vezes exclusivamente para te fazer chegar, ultrapassar e estabilizar acima da marca dos múltiplos seis dígitos mensais na sua praça. Sem magia, apenas 100% de dedicação ao seu modelo de negócio.
                    </p>

                </div>
            </section>

            <SubpageCTA headline="Pronto para trabalhar com a maior inteligência food do Brasil?" />

        </main>
    );
}
