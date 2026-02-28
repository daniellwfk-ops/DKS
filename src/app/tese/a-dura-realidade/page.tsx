import React from 'react';
import SubpageHero from '@/components/ui/SubpageHero';
import SubpageCTA from '@/components/ui/SubpageCTA';

export default function ADuraRealidade() {
    return (
        <main className="min-h-screen bg-[#000000] text-white font-sans overflow-hidden">

            <SubpageHero
                label="Nossa Tese • Parte 1"
                title="A Dura Realidade"
                description="Faturar não é lucrar. E a corrida dos aplicativos está destruindo as suas margens."
            />

            {/* Copy Container */}
            <section className="w-full bg-[#000000] py-[80px] relative z-10 font-sans">
                <div className="max-w-[720px] mx-auto px-6 text-[#CFCFCF] text-[18px] leading-[1.8] space-y-[32px]">

                    <p>
                        Se você é dono de um restaurante ou delivery, você sabe: a conta não está fechando como antigamente. Os custos dos insumos sobem, o aluguel sobe, as taxas dos aplicativos de delivery chegam a níveis confiscatórios (batendo easily 27%), e o seu cliente está cada vez mais infiel.
                    </p>

                    <h3 className="text-[28px] font-[800] text-white tracking-[-0.5px] mt-[48px] mb-[24px]">
                        O mito do "restaurante cheio"
                    </h3>

                    <p>
                        É lindo ter a casa cheia num sábado à noite. Mas qual é a sua margem real? Quando você desconta o CMV (Custo da Mercadoria Vendida), embalagens, motoboys, impostos, folha de pagamento e as extorsivas taxas das plataformas... <strong>sobrou o quê no seu bolso?</strong>
                    </p>

                    <div className="bg-[#E50914]/10 border-l-[4px] border-[#E50914] p-[24px] my-[40px] rounded-r-[8px]">
                        <p className="text-white font-[600] m-0">
                            Muitos donos de restaurantes hoje são apenas funcionários mal pagos do iFood. Trabalham 14 horas por dia para alimentar o caixa de um aplicativo.
                        </p>
                    </div>

                    <h3 className="text-[28px] font-[800] text-white tracking-[-0.5px] mt-[48px] mb-[24px]">
                        Você não precisa de mais pedidos, você precisa de Margem.
                    </h3>

                    <p>
                        A maioria tenta resolver esse problema da pior forma possível: dando desconto. Participam de campanhas agressivas dos apps, correm atrás de influenciadores para permutas que trazem clientes caça-promoção, e contratam agências de marketing que prometem "bombar" o Instagram.
                    </p>

                    <p>
                        Mas nada disso resolve a raiz do problema: <strong>falta um funil de vendas previsível, que não dependa de terceiros, focado em pratos com alta margem de contribuição.</strong>
                    </p>

                    <p>
                        Para virar o jogo, você precisa parar de competir por preço no marketplace e começar a competir por valor na sua própria máquina de vendas. É exatamente por isso que criamos a nossa metodologia.
                    </p>

                </div>
            </section>

            <SubpageCTA headline="Cansado de trabalhar apenas para pagar as contas?" />

        </main>
    );
}
