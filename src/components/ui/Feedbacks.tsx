"use client";

import { useRef, useEffect, useState } from "react";

const testimonials = [
    {
        name: "Daniel Rodrigues",
        role: "Proprietário",
        stars: 5,
        text: "Em 3 meses com a DKS, o faturamento do restaurante saltou mais de 60%. As redes sociais nunca foram tão ativas e nosso iFood chegou ao top 5 da região. Resultado concreto, sem enrolação.",
        initial: "D",
        color: "#D4AF37",
    },
    {
        name: "Rafael Tanaka",
        role: "CEO",
        stars: 5,
        text: "A equipe entende de verdade o mercado de restaurantes. Não é agência genérica — eles sabem o que move cliente pra dentro do restaurante e pro delivery. Recomendo 100%.",
        initial: "R",
        color: "#D4AF37",
    },
    {
        name: "Camila Souza",
        role: "Proprietária",
        stars: 5,
        text: "Minha loja estava estagnada por meses. Com a DKS, em 45 dias já senti diferença nas vendas. O Método ROMA é real — cada etapa faz sentido e os resultados aparecem rápido.",
        initial: "C",
        color: "#00CC00",
    },
    {
        name: "Bruno Almeida",
        role: "Dono",
        stars: 5,
        text: "Triplicamos o número de avaliações no Google em 2 meses. Isso sozinho já trouxe muito mais confiança pro restaurante online. A DKS sabe exatamente onde apertar o botão certo.",
        initial: "B",
        color: "#D4AF37",
    },
    {
        name: "Patricia Mendes",
        role: "Sócia",
        stars: 5,
        text: "Crescemos 38% no delivery e preenchemos mais mesas durante a semana — algo que nunca conseguíamos antes. O suporte é excelente e a comunicação sempre clara e direta.",
        initial: "P",
        color: "#00CC00",
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <span key={i} className="text-[#D4AF37] text-base">★</span>
            ))}
        </div>
    );
}

export default function Feedbacks() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Duplicate cards for seamless marquee
    const doubled = [...testimonials, ...testimonials];

    return (
        <section className="relative py-14 md:py-24 overflow-hidden bg-[#030303]">
            <style>{`
                @keyframes marquee-left {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .testimonials-track {
                    animation: marquee-left 24s linear infinite;
                    will-change: transform;
                }
                @media (max-width: 768px) {
                    .testimonials-track {
                        animation-duration: 14s;
                    }
                }
                .testimonials-track:hover,
                .testimonials-track.paused {
                    animation-play-state: paused;
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .section-header { animation: fadeUp 0.7s ease forwards; }
            `}</style>

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.05)_0%,transparent_60%)] pointer-events-none" />

            {/* Section header */}
            <div className="section-header text-center mb-14 px-5">
                <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                    💬 Depoimentos
                </span>
                <h2
                    className="text-4xl md:text-5xl font-black text-white mb-4"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    O que nossos clientes<br />
                    <span className="text-[#D4AF37]">dizem da DKS</span>
                </h2>
                <p className="text-[#A1A1AA] text-lg max-w-xl mx-auto">
                    Resultados reais, palavras reais. Restaurantes que escolheram crescer com método.
                </p>
            </div>

            {/* Left / right fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #030303, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #030303, transparent)" }} />

            {/* Scrolling track */}
            <div className="overflow-hidden">
                <div
                    ref={trackRef}
                    className={`testimonials-track flex gap-5 w-max${isPaused ? " paused" : ""}`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {doubled.map((t, i) => (
                        <div
                            key={i}
                            className="w-[320px] flex-shrink-0 bg-[#080808] border border-white/5 rounded-2xl p-7 hover:border-[#D4AF37]/30 transition duration-300 group cursor-default"
                            style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
                        >
                            {/* Quote mark */}
                            <div
                                className="text-5xl font-black leading-none mb-4"
                                style={{ color: t.color, opacity: 0.25, fontFamily: "Georgia, serif" }}
                            >
                                "
                            </div>

                            {/* Stars */}
                            <StarRating count={t.stars} />

                            {/* Quote text */}
                            <p className="text-[#C0C0C0] text-sm leading-relaxed mt-4 mb-6">
                                "{t.text}"
                            </p>

                            {/* Bottom bar */}
                            <div
                                className="h-px w-full mb-5 rounded"
                                style={{ background: `linear-gradient(to right, ${t.color}40, transparent)` }}
                            />

                            {/* Author */}
                            <div className="flex items-center justify-between gap-2">
                                {/* Left: avatar + name */}
                                <div className="flex items-center gap-2.5 min-w-0">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                                        style={{ background: `${t.color}20`, color: t.color, border: `1.5px solid ${t.color}40` }}
                                    >
                                        {t.initial}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-white font-bold text-sm truncate">{t.name}</p>
                                        <p className="text-[#666] text-xs">{t.role}</p>
                                    </div>
                                </div>
                                {/* Verified badge */}
                                <span className="flex-shrink-0 text-[10px] text-[#00CC00] border border-[#00CC00]/30 bg-[#00CC00]/5 rounded-full px-2 py-0.5 font-bold">
                                    ✓ Verificado
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-14 text-center px-5">
                <p className="text-[#555] text-sm mb-5">
                    Junte-se a mais de <span className="text-[#D4AF37] font-bold">100 restaurantes</span> que já escolheram crescer com a DKS
                </p>
                <a
                    href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00CC00] text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded transition duration-300 hover:bg-[#00B300] hover:scale-105 shadow-[0_0_25px_rgba(0,204,0,0.25)]"
                >
                    Quero Resultados Como Esses
                </a>
            </div>
        </section>
    );
}
