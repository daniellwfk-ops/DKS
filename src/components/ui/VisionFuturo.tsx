"use client";

import { useEffect, useRef, useState } from "react";

const futures = [
    {
        icon: "🍽️",
        title: "Segunda-feira cheia",
        desc: "Seus salões lotados mesmo nos dias de semana. Sem depender do fim de semana para sobreviver.",
        delay: 0,
    },
    {
        icon: "🛵",
        title: "Delivery com ranking subindo",
        desc: "Seu restaurante no topo do iFood, recebendo pedidos constantes e com avaliações acima de 4,8.",
        delay: 0.1,
    },
    {
        icon: "🔁",
        title: "Clientes voltando toda semana",
        desc: "Uma base fiel que você reconhece pelo nome — e que indica seu restaurante para todo mundo.",
        delay: 0.2,
    },
    {
        icon: "🏆",
        title: "Meta batida antes do fim do mês",
        desc: "Você para de olhar o calendário com medo. A meta vira um piso, não um sonho.",
        delay: 0.3,
    },
    {
        icon: "📊",
        title: "Decisões com números reais",
        desc: "Você sabe exatamente de onde vêm seus clientes, o que funciona e onde investir o próximo real.",
        delay: 0.4,
    },
    {
        icon: "😌",
        title: "Menos estresse, mais controle",
        desc: "O restaurante cresce com sistema. Você para de apagar incêndio e começa a pensar no futuro.",
        delay: 0.5,
    },
];

export default function VisionFuturo() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} className="relative py-16 md:py-28 px-4 sm:px-5 bg-[#000] overflow-hidden">
            <style>{`
                @keyframes visionCardIn {
                    from { opacity:0; transform:translateY(28px) scale(0.97); }
                    to   { opacity:1; transform:translateY(0)   scale(1); }
                }
                .vision-card { opacity:0; }
                .vision-card.visible { animation: visionCardIn 0.55s ease forwards; }
                @keyframes goldPulse {
                    0%,100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); }
                    50%     { box-shadow: 0 0 30px 0 rgba(212,175,55,0.12); }
                }
                @keyframes shimmer {
                    0%   { background-position: -200% center; }
                    100% { background-position:  200% center; }
                }
                .shimmer-text {
                    background: linear-gradient(90deg, #D4AF37 0%, #fff8e1 40%, #D4AF37 60%, #B8943C 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: shimmer 3s linear infinite;
                }
                @keyframes floatIcon {
                    0%,100% { transform: translateY(0); }
                    50%     { transform: translateY(-5px); }
                }
                .float-icon { animation: floatIcon 3s ease-in-out infinite; }
            `}</style>

            {/* Gold radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(212,175,55,0.06)_0%,transparent_65%)] pointer-events-none" />

            {/* Top label */}
            <div className="text-center mb-16">
                <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                    ✨ Visão de futuro
                </span>

                <h2
                    className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    Imagine seu restaurante<br />
                    <span className="shimmer-text">assim.</span>
                </h2>

                <p className="text-[#A1A1AA] text-lg max-w-lg mx-auto">
                    Não é sorte. Não é acaso. É o que acontece quando marketing, método e restaurante se alinham.
                </p>
            </div>

            {/* Future cards grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                {futures.map((f, i) => (
                    <div
                        key={i}
                        className={`vision-card relative bg-[#050505] border border-[#D4AF37]/15 rounded-2xl p-7 group hover:border-[#D4AF37]/50 transition-all duration-500${visible ? " visible" : ""}`}
                        style={{
                            animationDelay: `${f.delay}s`,
                            animation: visible ? `visionCardIn 0.55s ease ${f.delay}s forwards, goldPulse 4s ease-in-out ${f.delay + 0.6}s infinite` : undefined,
                        }}
                    >
                        {/* Gold corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: "linear-gradient(135deg, transparent 50%, rgba(212,175,55,0.08) 100%)" }} />

                        {/* Icon */}
                        <div className={`text-4xl mb-5 float-icon`} style={{ animationDelay: `${i * 0.4}s` }}>
                            {f.icon}
                        </div>

                        {/* Check mark */}
                        <div className="flex items-start gap-3">
                            <span className="mt-0.5 text-[#D4AF37] text-lg font-black flex-shrink-0">✓</span>
                            <div>
                                <h3 className="text-white font-black text-base mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                                    {f.title}
                                </h3>
                                <p className="text-[#888] text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Central dream statement */}
            <div className="max-w-3xl mx-auto text-center">
                <div className="relative rounded-3xl p-6 sm:p-10 md:p-14 border border-[#D4AF37]/20 overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #0a0900 0%, #050500 100%)" }}>

                    {/* Glow behind */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.1),transparent_70%)] pointer-events-none" />

                    <p className="text-[#D4AF37]/50 text-5xl font-black mb-4" style={{ fontFamily: "Georgia, serif" }}>"</p>

                    <p className="text-white text-xl md:text-2xl font-bold leading-relaxed mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
                        Esse restaurante existe.<br />
                        <span className="text-[#D4AF37]">E pode ser o seu.</span>
                    </p>

                    <p className="text-[#888] text-base leading-relaxed max-w-lg mx-auto mb-10">
                        Mais de 100 donos de restaurante já trocaram o sufoco pela previsibilidade.
                        A diferença foi escolher um parceiro que genuinamente entende o seu negócio.
                    </p>

                    <a
                        href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#00CC00] text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded hover:bg-[#00B300] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,204,0,0.25)]"
                    >
                        Quero esse restaurante para mim
                    </a>
                </div>
            </div>
        </section>
    );
}
