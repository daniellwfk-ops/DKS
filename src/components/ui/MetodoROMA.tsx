"use client";

import React from "react";

const phases = [
    {
        letter: "R",
        title: "Resultado",
        desc: "Definimos metas reais de faturamento antes de qualquer ação. Tudo começa com um objetivo claro e mensurável.",
        position: "tl" as const,
    },
    {
        letter: "O",
        title: "Otimização",
        desc: "Otimizamos o que já existe antes de escalar: cardápio, perfis, campanhas e precificação.",
        position: "tr" as const,
    },
    {
        letter: "M",
        title: "Método",
        desc: "Processos consistentes e repetíveis. Cada semana tem ações definidas, responsáveis e resultados esperados.",
        position: "bl" as const,
    },
    {
        letter: "A",
        title: "Autoridade",
        desc: "Transformamos seu restaurante em referência. Quando você é autoridade, custa menos captar clientes.",
        position: "br" as const,
    },
];

// Animated SVG icons per pillar
function IconResultado() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <style>{`
        @keyframes bar1 { 0%,100%{height:8px;y:24px} 50%{height:16px;y:16px} }
        @keyframes bar2 { 0%,100%{height:18px;y:14px} 50%{height:28px;y:4px} }
        @keyframes bar3 { 0%,100%{height:12px;y:20px} 50%{height:22px;y:10px} }
        @keyframes trendLine { 0%{stroke-dashoffset:60} 100%{stroke-dashoffset:0} }
      `}</style>
            <rect x="3" width="6" rx="2" fill="#D4AF37" style={{ animation: "bar1 2s ease-in-out infinite", height: 8, y: 24 }} />
            <rect x="15" width="6" rx="2" fill="#D4AF37" style={{ animation: "bar2 2s ease-in-out infinite 0.3s", height: 18, y: 14 }} />
            <rect x="27" width="6" rx="2" fill="#D4AF37" style={{ animation: "bar3 2s ease-in-out infinite 0.6s", height: 12, y: 20 }} />
            <polyline
                points="6,20 18,10 30,14"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="60"
                style={{ animation: "trendLine 2s linear infinite" }}
            />
        </svg>
    );
}

function IconOtimizacao() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <style>{`
        @keyframes gearSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes gearSpinRev { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
      `}</style>
            <g style={{ transformOrigin: "12px 12px", animation: "gearSpin 4s linear infinite" }}>
                <circle cx="12" cy="12" r="5" stroke="#D4AF37" strokeWidth="2" fill="none" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
                    <rect key={i} x="11" y="3" width="2" height="4" rx="1" fill="#D4AF37"
                        style={{ transformOrigin: "12px 12px", transform: `rotate(${a}deg)` }} />
                ))}
            </g>
            <g style={{ transformOrigin: "24px 24px", animation: "gearSpinRev 3s linear infinite" }}>
                <circle cx="24" cy="24" r="4" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
                {[0, 60, 120, 180, 240, 300].map((a, i) => (
                    <rect key={i} x="23" y="16" width="2" height="4" rx="1" fill="#D4AF37"
                        style={{ transformOrigin: "24px 24px", transform: `rotate(${a}deg)` }} />
                ))}
            </g>
        </svg>
    );
}

function IconMetodo() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <style>{`
        @keyframes checkAppear { 0%{opacity:0;transform:scale(0)} 60%{transform:scale(1.2)} 100%{opacity:1;transform:scale(1)} }
        @keyframes lineAppear { from{stroke-dashoffset:20} to{stroke-dashoffset:0} }
      `}</style>
            {[0, 1, 2].map(i => (
                <g key={i} style={{ animation: `checkAppear 0.5s ease forwards`, animationDelay: `${i * 0.6}s`, opacity: 0 }}>
                    <circle cx="8" cy={9 + i * 10} r="3.5" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
                    <polyline
                        points={`6.5,${9 + i * 10} 7.5,${10.2 + i * 10} 9.5,${7.8 + i * 10}`}
                        stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
                    />
                    <line x1="15" y1={9 + i * 10} x2="32" y2={9 + i * 10}
                        stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="20"
                        style={{ animation: `lineAppear 0.4s ease forwards`, animationDelay: `${i * 0.6 + 0.2}s` }}
                    />
                </g>
            ))}
            <style>{`
        @keyframes checkAppear { 0%{opacity:0;transform:scale(0)} 60%{transform:scale(1.2)} 100%{opacity:1;transform:scale(1)} }
      `}</style>
        </svg>
    );
}

function IconAutoridade() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <style>{`
        @keyframes starPulse { 0%,100%{filter:drop-shadow(0 0 2px #D4AF37)} 50%{filter:drop-shadow(0 0 10px #D4AF37)} }
        @keyframes crownRise { from{transform:translateY(4px);opacity:0} to{transform:translateY(0);opacity:1} }
        @keyframes rayPulse { 0%,100%{opacity:0.2} 50%{opacity:1} }
      `}</style>
            {/* Rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
                <line key={i}
                    x1="18" y1="18"
                    x2={18 + Math.cos(a * Math.PI / 180) * 14}
                    y2={18 + Math.sin(a * Math.PI / 180) * 14}
                    stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" opacity="0.3"
                    style={{ animation: `rayPulse 2s ease-in-out infinite`, animationDelay: `${i * 0.25}s` }}
                />
            ))}
            {/* Star / Crown */}
            <polygon
                points="18,6 21,14 30,14 23,20 25.5,29 18,24 10.5,29 13,20 6,14 15,14"
                fill="#D4AF37"
                style={{ animation: "starPulse 2s ease-in-out infinite, crownRise 0.6s ease forwards" }}
            />
        </svg>
    );
}

const icons: Record<string, React.ReactNode> = {
    R: <IconResultado />,
    O: <IconOtimizacao />,
    M: <IconMetodo />,
    A: <IconAutoridade />,
};

export default function MetodoROMA() {
    return (
        <section
            id="metodo"
            className="relative py-14 md:py-24 px-4 sm:px-5 overflow-hidden bg-[#030303]"
        >
            <style>{`
        @keyframes cardIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes letterGlow { 0%,100%{text-shadow:0 0 6px rgba(212,175,55,0.4)} 50%{text-shadow:0 0 20px rgba(212,175,55,0.9)} }
        @keyframes connectorPulse { 0%,100%{opacity:0.15} 50%{opacity:0.5} }
        .roma-card { animation: cardIn 0.6s ease forwards; opacity:0; will-change: transform, opacity; }
        .roma-card:nth-child(1) { animation-delay:0.1s }
        .roma-card:nth-child(2) { animation-delay:0.25s }
        .roma-card:nth-child(3) { animation-delay:0.4s }
        .roma-card:nth-child(4) { animation-delay:0.55s }
        @keyframes notifCycle {
          0%   { transform: translateY(-24px) scale(0.95); opacity: 0; }
          5%   { transform: translateY(0) scale(1);       opacity: 1; }
          17%  { transform: translateY(0) scale(1);       opacity: 1; }
          22%  { transform: translateY(16px) scale(0.95); opacity: 0; }
          100% { transform: translateY(-24px) scale(0.95); opacity: 0; }
        }
        @keyframes pingGreen { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(2);opacity:0.2} }
        @keyframes soundWave { 0%,100%{transform:scaleY(0.4)} 50%{transform:scaleY(1)} }
      `}</style>

            {/* Background ambient */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,175,55,0.06)_0%,transparent_70%)]" />

            {/* Title */}
            <div className="relative text-center mb-16">
                <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                    Nossa Metodologia
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Método <span style={{ color: "#D4AF37", animation: "letterGlow 3s ease-in-out infinite" }}>ROMA</span>
                </h2>
                <p className="text-[#A1A1AA] text-lg max-w-xl mx-auto">
                    Essa é a metodologia exclusiva que utilizamos para transformar restaurantes em líderes de faturamento.
                </p>
            </div>

            {/* Main layout */}
            <div className="relative max-w-5xl mx-auto">

                {/* Desktop grid: 2 cols left | center | 2 cols right */}
                <div className="hidden md:grid grid-cols-[1fr_220px_1fr] gap-6 items-center">

                    {/* LEFT CARDS */}
                    <div className="flex flex-col gap-6">
                        {phases.filter(p => p.position === "tl" || p.position === "bl").map((phase) => (
                            <div
                                key={phase.letter}
                                className="roma-card bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition duration-300 hover:-translate-y-1 group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <p className="text-white font-black text-lg uppercase tracking-wide mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                                            {phase.title}
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 ml-3 shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                                        <span className="text-black font-black text-lg">{phase.letter}</span>
                                    </div>
                                </div>
                                <div className="mb-4">{icons[phase.letter]}</div>
                                <p className="text-[#A1A1AA] text-sm leading-relaxed">{phase.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* CENTER - Cascading Sale Notifications */}
                    <div className="flex flex-col items-center justify-center relative">
                        {/* Horizontal connector line */}
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px"
                            style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)" }} />

                        {/* Notification stack */}
                        <div className="relative z-10 w-[210px] h-[280px] flex items-center justify-center">
                            {[
                                { emoji: "🛵", label: "Nova venda aprovada!", value: "R$ 87,90", sub: "Hambúrguer + Batata Frita", accent: "#00CC00" },
                                { emoji: "⭐", label: "Nova avaliação 5★", value: "+1 Google", sub: '"Melhor da cidade!"', accent: "#D4AF37" },
                                { emoji: "📦", label: "Pedido #3.841", value: "R$ 124,50", sub: "2 Pizzas + Refrigerante", accent: "#00CC00" },
                                { emoji: "💰", label: "Meta diária batida!", value: "R$ 1.890", sub: "120% da sua meta hoje", accent: "#D4AF37" },
                                { emoji: "📈", label: "iFood: Ranking #3", value: "+2 pos.", sub: "Você subiu hoje!", accent: "#00CC00" },
                            ].map((n, i) => (
                                <div
                                    key={i}
                                    className="absolute inset-x-0 bg-[#0d0d0d] border rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                                    style={{
                                        borderColor: n.accent === "#00CC00" ? "rgba(0,204,0,0.3)" : "rgba(212,175,55,0.3)",
                                        opacity: 0,
                                        animation: `notifCycle 10s ease ${i * 2}s infinite`,
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Icon */}
                                        <div className="relative flex-shrink-0">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                                                style={{ background: n.accent === "#00CC00" ? "rgba(0,204,0,0.1)" : "rgba(212,175,55,0.1)" }}>
                                                {n.emoji}
                                            </div>
                                            {/* Ping dot */}
                                            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full flex items-center justify-center"
                                                style={{ background: n.accent }}>
                                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                            </span>
                                        </div>
                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-white font-bold text-xs leading-tight">{n.label}</p>
                                            <p className="font-black text-sm" style={{ color: n.accent }}>{n.value}</p>
                                            <p className="text-[#666] text-[10px] truncate mt-0.5">{n.sub}</p>
                                        </div>
                                    </div>
                                    {/* Sound wave bars */}
                                    <div className="flex items-end gap-[2px] mt-2.5 justify-end h-3">
                                        {[0.4, 1, 0.6, 0.9, 0.5, 0.8, 0.3].map((h, j) => (
                                            <div key={j} className="w-[3px] rounded-full"
                                                style={{
                                                    background: n.accent,
                                                    height: `${h * 100}%`,
                                                    opacity: 0.6,
                                                    animation: `soundWave 0.8s ease-in-out ${j * 0.1}s infinite`,
                                                }} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT CARDS */}
                    <div className="flex flex-col gap-6">
                        {phases.filter(p => p.position === "tr" || p.position === "br").map((phase) => (
                            <div
                                key={phase.letter}
                                className="roma-card bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition duration-300 hover:-translate-y-1 group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <p className="text-white font-black text-lg uppercase tracking-wide mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                                            {phase.title}
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 ml-3 shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                                        <span className="text-black font-black text-lg">{phase.letter}</span>
                                    </div>
                                </div>
                                <div className="mb-4">{icons[phase.letter]}</div>
                                <p className="text-[#A1A1AA] text-sm leading-relaxed">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile: vertical stack with center above */}
                <div className="md:hidden flex flex-col items-center gap-6">
                    {/* Center MOBILE - notification stack */}
                    <div className="flex items-center justify-center relative">
                        <div className="relative w-[260px] h-[90px]">
                            {[
                                { emoji: "🛵", label: "Nova venda aprovada!", value: "R$ 87,90", accent: "#00CC00" },
                                { emoji: "⭐", label: "Nova avaliação 5★", value: "+1 Google", accent: "#D4AF37" },
                                { emoji: "📦", label: "Pedido #3.841", value: "R$ 124,50", accent: "#00CC00" },
                                { emoji: "💰", label: "Meta diária batida!", value: "R$ 1.890", accent: "#D4AF37" },
                                { emoji: "📈", label: "iFood: Ranking #3", value: "+2 posições", accent: "#00CC00" },
                            ].map((n, i) => (
                                <div
                                    key={i}
                                    className="absolute inset-x-0 bg-[#0d0d0d] border rounded-2xl px-3 py-2.5 shadow-lg"
                                    style={{
                                        borderColor: n.accent === "#00CC00" ? "rgba(0,204,0,0.3)" : "rgba(212,175,55,0.3)",
                                        opacity: 0,
                                        animation: `notifCycle 10s ease ${i * 2}s infinite`,
                                    }}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                                            style={{ background: n.accent === "#00CC00" ? "rgba(0,204,0,0.1)" : "rgba(212,175,55,0.1)" }}>
                                            {n.emoji}
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-[11px]">{n.label}</p>
                                            <p className="font-black text-sm" style={{ color: n.accent }}>{n.value}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile cards */}
                    {phases.map((phase) => (
                        <div
                            key={phase.letter}
                            className="roma-card w-full bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <p className="text-white font-black text-lg uppercase" style={{ fontFamily: "var(--font-montserrat)" }}>
                                    {phase.title}
                                </p>
                                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 ml-3 shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                                    <span className="text-black font-black text-lg">{phase.letter}</span>
                                </div>
                            </div>
                            <div className="mb-4">{icons[phase.letter]}</div>
                            <p className="text-[#A1A1AA] text-sm leading-relaxed">{phase.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
                <a
                    href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00CC00] text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded hover:bg-[#00B300] transition duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,204,0,0.25)]"
                >
                    Aplicar o Método ROMA no Meu Restaurante
                </a>
            </div>
        </section>
    );
}
