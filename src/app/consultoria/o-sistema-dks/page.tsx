import React from 'react';
import SubpageHero from '@/components/ui/SubpageHero';
import SubpageCTA from '@/components/ui/SubpageCTA';

export default function OSistemaDKS() {
    return (
        <main className="min-h-screen bg-[#000000] text-white font-sans overflow-hidden">

            <SubpageHero
                label="Consultoria • Parte 1"
                title="O Sistema DKS"
                description="A união perfeita entre Growth Hacking corporativo e hospitalidade raiz. Entenda o motor que dobra o faturamento dos nossos clientes."
            />

            {/* Copy Container */}
            <section className="w-full bg-[#000000] py-[80px] relative z-10 font-sans">
                <div className="max-w-[720px] mx-auto px-6 text-[#CFCFCF] text-[18px] leading-[1.8] space-y-[32px]">

                    <p>
                        O mercado ensinou que para vender mais, você precisa de "branding". Nós somos engenheiros de growth. Nós ensinamos que para vender mais, você precisa de <strong>matemática</strong>.
                    </p>

                    <p>
                        O <strong>Sistema DKS</strong> não é um cursinho online, não é um pacote de posts e não é uma promessa vazia. É uma infraestrutura de vendas completa instalada dentro da sua operação, baseada em 4 pilares: O Método ROMA.
                    </p>

                    <h3 className="text-[28px] font-[800] text-white tracking-[-0.5px] mt-[48px] mb-[24px]">
                        Como funciona a operação na prática?
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[40px]">
                        <div className="bg-[#0A0A0C] border border-white/10 p-[32px] rounded-[16px]">
                            <h4 className="text-[#F2B705] font-[700] text-[20px] mb-[12px]">1. Diagnóstico de Margem</h4>
                            <p className="text-[15px] leading-[1.6]">Se o seu prato que mais vende é o que dá menor margem de lucro, você está pedalando para trás. O sistema começa reestruturando as contas.</p>
                        </div>

                        <div className="bg-[#0A0A0C] border border-white/10 p-[32px] rounded-[16px]">
                            <h4 className="text-[#F2B705] font-[700] text-[20px] mb-[12px]">2. Engenharia de Cardápio</h4>
                            <p className="text-[15px] leading-[1.6]">Ancoragem de preços, upsell embutido, combos estratégicos e descrições neuro-otimizadas para o iFood e Cardápio Digital.</p>
                        </div>

                        <div className="bg-[#0A0A0C] border border-white/10 p-[32px] rounded-[16px]">
                            <h4 className="text-[#F2B705] font-[700] text-[20px] mb-[12px]">3. Captação Ativa</h4>
                            <p className="text-[15px] leading-[1.6]">Campanhas rasgando no Meta Ads e Google Ads, direcionadas no raio de entrega para clientes com alto poder aquisitivo.</p>
                        </div>

                        <div className="bg-[#0A0A0C] border border-white/10 p-[32px] rounded-[16px]">
                            <h4 className="text-[#F2B705] font-[700] text-[20px] mb-[12px]">4. Retenção & LTV</h4>
                            <p className="text-[15px] leading-[1.6]">Recuperação de carrinho do WhatsApp, fluxos de automação e CRM para garantir que o cliente volte a comprar na semana seguinte.</p>
                        </div>
                    </div>

                    <div className="bg-[#E50914]/10 border-l-[4px] border-[#E50914] p-[24px] mt-[40px] rounded-r-[8px]">
                        <p className="text-white font-[600] m-0">
                            Nossa equipe absorve a execução técnica pesada de Tráfego e Dados, enquanto você foca na operação, liderança e qualidade do seu produto. Esse é o acordo.
                        </p>
                    </div>

                </div>
            </section>

            <SubpageCTA headline="Quer implementar o Sistema DKS no seu restaurante hoje mesmo?" />

        </main>
    );
}
