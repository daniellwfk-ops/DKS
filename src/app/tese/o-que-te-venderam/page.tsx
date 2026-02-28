import React from 'react';
import SubpageHero from '@/components/ui/SubpageHero';
import SubpageCTA from '@/components/ui/SubpageCTA';

export default function OQueTeVenderam() {
    return (
        <main className="min-h-screen bg-[#000000] text-white font-sans overflow-hidden">

            <SubpageHero
                label="Nossa Tese • Parte 2"
                title="O Que Te Venderam"
                description="Agências genéricas prometeram rios de dinheiro em troca de posts bonitinhos. O resultado? Mais seguidores, e caixa vazio."
            />

            {/* Copy Container */}
            <section className="w-full bg-[#000000] py-[80px] relative z-10 font-sans">
                <div className="max-w-[720px] mx-auto px-6 text-[#CFCFCF] text-[18px] leading-[1.8] space-y-[32px]">

                    <p>
                        O mercado de marketing digital para gastronomia está doente. Você contrata uma agência, paga um fixo mensal e, na primeira reunião, eles te entregam um "cronograma" de quatro posts por semana.
                    </p>

                    <p>
                        "Vamos postar um Reels engajado", "Vamos fazer uma foto profissional do seu burger". Mas quando você pergunta: <strong><span className="text-white">"Quantos pedidos a mais isso vai botar na minha operação essa semana?"</span></strong>, eles emudecem.
                    </p>

                    <div className="bg-[#E50914]/10 border-l-[4px] border-[#E50914] p-[24px] my-[40px] rounded-r-[8px]">
                        <p className="text-white font-[600] m-0">
                            Curtidas não pagam folha de pagamento. Engajamento não enche a câmara fria de insumo. Marketing que não traz dinheiro para dentro do balcão é apenas custo, não investimento.
                        </p>
                    </div>

                    <h3 className="text-[28px] font-[800] text-white tracking-[-0.5px] mt-[48px] mb-[24px]">
                        A indústria da panfletagem digital
                    </h3>

                    <p>
                        A maioria das agências não entende nada de gastronomia. O cara que atende a sua conta é o mesmo cara que atende a barbearia da esquina e o consultório do dentista. Eles não sabem o que é CMV, não sabem o que é markup de bebida, não sabem a diferença da janela tática de almoço para o jantar.
                    </p>

                    <p>
                        Eles operam baseados em esperança. "Vamos patrocinar esse post e 'esperar' que as pessoas comprem".
                    </p>

                    <h3 className="text-[28px] font-[800] text-white tracking-[-0.5px] mt-[48px] mb-[24px]">
                        O marketing que o iFood faz nas suas costas
                    </h3>

                    <p>
                        Ao mesmo tempo, as grandes plataformas que dominam o mercado sabem exatamente o que fazer. O iFood investe pesado em tráfego pago para capturar o "SEU" cliente. Eles retêm os dados de contato do cliente, cobram taxas pesadas de você e, se você parar de dar grandes descontos ou comprar campanhas lá dentro, seu restaurante simplesmente desaparece do radar.
                    </p>

                    <p>
                        O dono do restaurante que delega sua presença digital para uma agência de social media genérica e as vendas para o iFood, está criando uma empresa com um prazo de validade.
                    </p>

                    <p>
                        Chegou a hora de parar de terceirizar o destino do seu caixa.
                    </p>

                </div>
            </section>

            <SubpageCTA headline="Chega de agências amadoras. Construa sua própria máquina de vendas!" />

        </main>
    );
}
