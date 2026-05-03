"use client";

import { useEffect, useRef, useState } from "react";

const pains = [
    {
        icon: "📉",
        title: "Faturamento parado ou caindo",
        desc: "O mês acaba, a conta não fecha, e você não sabe de onde vem o próximo cliente.",
        color: "#D4AF37",
    },
    {
        icon: "📱",
        title: "Redes sociais sem resultado",
        desc: "Você posta, tenta criar conteúdo, mas o engajamento é quase zero — e ninguém aparece no restaurante.",
        color: "#D4AF37",
    },
    {
        icon: "🍽️",
        title: "Mesas vazias na semana",
        desc: "No fim de semana até vai. Mas de segunda a quinta os salões ficam praticamente vazios.",
        color: "#D4AF37",
    },
    {
        icon: "📦",
        title: "Delivery sem volume",
        desc: "Seu restaurante está no iFood, mas os pedidos são poucos e o ranking não sobe.",
        color: "#D4AF37",
    },
    {
        icon: "🔄",
        title: "Clientes que não voltam",
        desc: "As pessoas vêm uma vez e somem. Sem fidelização, você precisa conquistar clientes novos toda semana.",
        color: "#D4AF37",
    },
    {
        icon: "😰",
        title: "Dependência de boca a boca",
        desc: "Seu restaurante sobrevive de indicação. Mas e quando o fluxo seca? Você não tem controle nenhum.",
        color: "#D4AF37",
    },
];

export default function DorDoLead() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-14 md:py-24 px-4 sm:px-5 bg-[#000] overflow-hidden">
            <style>{`
                @keyframes painCardIn {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .pain-card { opacity: 0; will-change: transform, opacity; }
                .pain-card.visible { animation: painCardIn 0.5s ease forwards; }
                @keyframes pulse-red { 0%,100%{ box-shadow: 0 0 0 0 rgba(220,38,38,0); } 50%{ box-shadow: 0 0 0 8px rgba(220,38,38,0); } }
                @keyframes glitch {
                    0%,100%{ transform: translate(0); }
                    20%{ transform: translate(-2px, 1px); }
                    40%{ transform: translate(2px, -1px); }
                    60%{ transform: translate(-1px, 2px); }
                    80%{ transform: translate(1px, -1px); }
                }
            `}</style>

            {/* Red ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(220,38,38,0.07)_0%,transparent_65%)] pointer-events-none" />

            {/* Title */}
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="inline-block bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                    ⚠️ Você se identifica?
                </span>
                <h2
                    className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    Se o seu restaurante está{" "}
                    <span className="text-red-500">assim</span>
                    {", você não está sozinho."}
                </h2>
                <p className="text-[#A1A1AA] text-lg">
                    A maioria dos donos de restaurante enfrenta os mesmos problemas — e fica preso nesse ciclo sem saber por onde começar.
                </p>
            </div>

            {/* Pain grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {pains.map((pain, i) => (
                    <div
                        key={i}
                        className={`pain-card relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/40 hover:bg-white/[0.07] transition duration-300 group shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${visible ? " visible" : ""}`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        {/* Top red line */}
                        <div
                            className="absolute top-0 left-6 right-6 h-px rounded"
                            style={{
                                background: "linear-gradient(to right, transparent, rgba(220,38,38,0.5), transparent)",
                                transform: visible ? "scaleX(1)" : "scaleX(0)",
                                transition: `transform 0.6s ease ${i * 0.1 + 0.3}s`,
                            }}
                        />

                        {/* Icon */}
                        <div className="text-3xl mb-4 group-hover:animate-[glitch_0.3s_ease]">
                            {pain.icon}
                        </div>

                        {/* Content */}
                        <h3 className="text-white font-black text-base mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                            {pain.title}
                        </h3>
                        <p className="text-[#888] text-sm leading-relaxed">
                            {pain.desc}
                        </p>

                        {/* Bottom dot indicator */}
                        <div className="mt-5 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 opacity-60 animate-pulse" />
                            <span className="text-red-500/60 text-[10px] font-bold uppercase tracking-wider">Realidade de muitos restaurantes</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bridge text */}
            <div className="mt-16 text-center max-w-xl mx-auto">
                <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl px-8 py-6">
                    <p className="text-white font-bold text-lg mb-2">
                        Existe uma saída para isso.
                    </p>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">
                        Não é sorte. Não é milagre. É método — e é exatamente o que a DKS aplica para transformar restaurantes estagnados em máquinas de faturamento.
                    </p>
                </div>
            </div>
            {/* CTA */}
            <div className="mt-8 text-center">
                <a
                    href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00CC00] text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded hover:bg-[#00B300] transition duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,204,0,0.25)]"
                >
                    Quero contratar a DKS Marketing
                </a>
            </div>
        </section>
    );
}
