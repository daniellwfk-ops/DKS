"use client";

import { useState } from "react";

const faqs = [
    {
        q: "Já contratei agência antes e não funcionou. Por que a DKS seria diferente?",
        a: "Essa é a objeção mais comum que recebemos — e a mais legítima. A maioria das agências aplica uma fórmula genérica que funciona para lojas de roupa, salões de beleza e restaurantes do mesmo jeito. O problema é que restaurante tem uma lógica própria: ticket médio, recorrência, horário de pico, ranking de delivery, reputação local. A DKS atua exclusivamente com o mercado gastronômico. Nosso método é construído em cima do que realmente move cliente para dentro do seu restaurante — não de tendências de social media.",
    },
    {
        q: "Quanto tempo leva para começar a ver resultado?",
        a: "Os primeiros sinais aparecem entre 30 e 60 dias: crescimento de avaliações, aumento de seguidores qualificados e melhora no ranking do delivery. Resultado financeiro consistente — aumento real de faturamento — começa a se consolidar entre o 2º e o 3º mês. Não prometemos milagre da semana 1, mas garantimos evolução mensurável. Você acompanha tudo com números reais.",
    },
    {
        q: "Isso é caro para o momento do meu restaurante agora.",
        a: "Entendemos. Mas pense assim: deixar o restaurante estagnado tem um custo muito maior do que investir em crescimento. Cada mês com mesas vazias e delivery parado é receita que não voltará. A DKS foi criada para que o retorno sobre o investimento seja visível — não para ser mais uma despesa no final do mês. Nós adequamos a estratégia à realidade do seu negócio.",
    },
    {
        q: "Preciso entender de marketing para trabalhar com vocês?",
        a: "Não. Você entende do seu restaurante — a gente cuida do resto. Desenvolvemos a estratégia, orientamos a execução e gerenciamos o iFood, as campanhas de tráfego pago e o CRM. Você recebe relatórios simples e diretos, sem precisar aprender a usar nenhuma ferramenta. Nossa comunicação é feita para donos de restaurante, não para analistas de marketing.",
    },
    {
        q: "E se meu restaurante ainda não tiver muitos seguidores ou avaliações?",
        a: "Esse é exatamente o ponto de partida de muitos dos nossos clientes. Você não precisa de uma base grande para começar — você precisa de uma estratégia certa. Trabalhamos a construção de autoridade desde o zero: criamos reputação, atraímos os primeiros engajamentos qualificados e montamos uma base sólida que cresce com consistência.",
    },
    {
        q: "Vocês atendem qualquer tipo de restaurante?",
        a: "Trabalhamos com restaurantes, hamburguerias, pizzarias, sushis, lanchonetes e qualquer estabelecimento do setor gastronômico que queira crescer com método. O que analisamos antes de fechar parceria é se o seu negócio tem potencial real de crescimento — e na grande maioria dos casos, tem.",
    },
    {
        q: "Como funciona o acompanhamento depois que eu contratar?",
        a: "Você tem um gestor dedicado ao seu restaurante, reuniões periódicas para análise de performance e acesso a um painel com os principais indicadores. Não sumimos depois de fechar contrato — estamos com você na execução, no ajuste de estratégia e na comemoração dos resultados.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="relative py-14 md:py-24 px-4 sm:px-5 bg-[#030303] overflow-hidden">
            <style>{`
                @keyframes faqOpen {
                    from { opacity:0; transform:translateY(-6px); }
                    to   { opacity:1; transform:translateY(0); }
                }
                .faq-answer { animation: faqOpen 0.25s ease forwards; }
            `}</style>

            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.04)_0%,transparent_60%)] pointer-events-none" />

            {/* Header */}
            <div className="text-center mb-14 max-w-2xl mx-auto">
                <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                    ❓ Dúvidas frequentes
                </span>
                <h2
                    className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    Ainda com dúvidas?<br />
                    <span className="text-[#D4AF37]">A gente responde.</span>
                </h2>
                <p className="text-[#A1A1AA] text-lg">
                    As perguntas mais comuns de donos de restaurante antes de darem o próximo passo.
                </p>
            </div>

            {/* Accordion */}
            <div className="max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, i) => {
                    const isOpen = open === i;
                    return (
                        <div
                            key={i}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                ? "border-[#D4AF37]/40 bg-[#080800]"
                                : "border-white/5 bg-[#050505] hover:border-white/10"
                                }`}
                        >
                            {/* Question row */}
                            <button
                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                onClick={() => setOpen(isOpen ? null : i)}
                            >
                                <span
                                    className={`font-bold text-sm md:text-base leading-snug transition-colors duration-300 ${isOpen ? "text-[#D4AF37]" : "text-white"
                                        }`}
                                >
                                    {faq.q}
                                </span>

                                {/* +/- icon */}
                                <span
                                    className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen
                                        ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] rotate-45"
                                        : "border-white/20 text-[#666]"
                                        }`}
                                >
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </button>

                            {/* Answer */}
                            {isOpen && (
                                <div className="faq-answer px-6 pb-6">
                                    <div className="h-px bg-[#D4AF37]/20 mb-4 rounded" />
                                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-14">
                <p className="text-[#555] text-sm mb-5">
                    Não encontrou o que procurava?{" "}
                    <span className="text-[#D4AF37]">Fale direto com a equipe.</span>
                </p>
                <a
                    href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00CC00] text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded hover:bg-[#00B300] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,204,0,0.25)]"
                >
                    Falar com um especialista agora
                </a>
            </div>
        </section>
    );
}
