import React from 'react';
import SubpageHero from '@/components/ui/SubpageHero';
import SubpageCTA from '@/components/ui/SubpageCTA';

export default function AAlforriaGastronomica() {
    return (
        <main className="min-h-screen bg-[#000000] text-white font-sans overflow-hidden">

            <SubpageHero
                label="Nossa Tese • Parte 3"
                title="A Alforria Gastronômica"
                description="O que separa os grandes conglomerados dos restaurantes de bairro que fecham em 2 anos? Previsibilidade."
            />

            {/* Copy Container */}
            <section className="w-full bg-[#000000] py-[80px] relative z-10 font-sans">
                <div className="max-w-[720px] mx-auto px-6 text-[#CFCFCF] text-[18px] leading-[1.8] space-y-[32px]">

                    <p>
                        Existe um momento exato na vida de todo restaurante em que o dono percebe: "Se eu não trabalhar 14h hoje, a operação afunda". É a escravidão moderna, e ela tem cheiro de chapa quente e nota fiscal impressa.
                    </p>

                    <p>
                        A grande mentira que contam é que o sucesso de um restaurante está na receita do chef. A receita do chef atrai a primeira mordida. Mas o que atrai a segunda, a terceira, a centésima mordida é a <strong>Engenharia de Vendas</strong>. Se o seu modelo de atração depende estritamente da porta aberta ou do cupom de R$ 10 do iFood, você não tem um negócio, você tem um hobby caro.
                    </p>

                    <div className="bg-[#E50914]/10 border-l-[4px] border-[#E50914] p-[24px] my-[40px] rounded-r-[8px]">
                        <p className="text-white font-[600] m-0">
                            Liberdade no mercado de Food Service não se encontra trabalhando duro na panela, e sim trabalhando inteligente nos dados.
                        </p>
                    </div>

                    <h3 className="text-[28px] font-[800] text-white tracking-[-0.5px] mt-[48px] mb-[24px]">
                        O que significa ter Alforria?
                    </h3>

                    <ul className="space-y-[16px] mb-[40px]">
                        <li className="flex items-start gap-[12px]">
                            <div className="text-[#22C55E] text-[24px] shrink-0">✔</div>
                            <p className="m-0 pt-[2px]"><strong>Previsibilidade de Faturamento:</strong> Você sabe exatamente quanto vai vender hoje porque injeta R$ X de tráfego numa máquina validada.</p>
                        </li>
                        <li className="flex items-start gap-[12px]">
                            <div className="text-[#22C55E] text-[24px] shrink-0">✔</div>
                            <p className="m-0 pt-[2px]"><strong>Independência de Marketplace:</strong> iFood não é seu sócio. Ele é só uma das suas dezenas de torneiras de captação.</p>
                        </li>
                        <li className="flex items-start gap-[12px]">
                            <div className="text-[#22C55E] text-[24px] shrink-0">✔</div>
                            <p className="m-0 pt-[2px]"><strong>Margens Gordas:</strong> Cardápio arquitetado para induzir a venda do produto mais barato de produzir, disfarçado pelo maior valor agregado para o cliente.</p>
                        </li>
                    </ul>

                    <h3 className="text-[28px] font-[800] text-white tracking-[-0.5px] mt-[48px] mb-[24px]">
                        É pra isso que o Método ROMA existe
                    </h3>

                    <p>
                        Não nascemos para fazer artes nas redes sociais (isso é consequência). Nascemos para estruturar uma ponte previsível entre a capacidade instalada da sua cozinha e a boca faminta de clientes que pagam caro pelo seu produto na sua cidade.
                    </p>

                    <p>
                        É sobre aplicar no seu Delivery os mesmos funis agressivos que grandes startups de base tecnológica constroem no Vale do Silício.
                    </p>

                </div>
            </section>

            <SubpageCTA headline="Construa agora uma Máquina de Vendas independente." />

        </main>
    );
}
