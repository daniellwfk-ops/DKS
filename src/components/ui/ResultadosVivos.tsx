"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2200, active = false) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start: number | null = null;
        const animate = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [active, target, duration]);
    return val;
}

// Revenue data points for the chart (relative Y values, 0=bottom, 100=top)
const chartPoints = [
    { x: 0, y: 18, label: "Jan", value: "R$12k" },
    { x: 16.6, y: 30, label: "Fev", value: "R$18k" },
    { x: 33.3, y: 24, label: "Mar", value: "R$15k" },
    { x: 50, y: 52, label: "Abr", value: "R$31k" },
    { x: 66.6, y: 68, label: "Mai", value: "R$43k" },
    { x: 83.3, y: 80, label: "Jun", value: "R$51k" },
    { x: 100, y: 94, label: "Jul", value: "R$62k" },
];

function LiveRevenueChart({ active }: { active: boolean }) {
    const [progress, setProgress] = useState(0);
    const [dotIndex, setDotIndex] = useState(-1);
    const [hoveredDot, setHoveredDot] = useState<number | null>(null);

    useEffect(() => {
        if (!active) return;
        let startTime: number | null = null;
        const duration = 2400;

        const animate = (ts: number) => {
            if (!startTime) startTime = ts;
            const p = Math.min((ts - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 2);
            setProgress(eased);
            // Reveal dots progressively
            const dotIdx = Math.floor(eased * chartPoints.length) - 1;
            setDotIndex(dotIdx);
            if (p < 1) requestAnimationFrame(animate);
            else setDotIndex(chartPoints.length - 1);
        };
        requestAnimationFrame(animate);
    }, [active]);

    const W = 340;
    const H = 180;
    const pad = { top: 20, right: 16, bottom: 32, left: 40 };
    const innerW = W - pad.left - pad.right;
    const innerH = H - pad.top - pad.bottom;

    const toX = (px: number) => pad.left + (px / 100) * innerW;
    const toY = (py: number) => pad.top + innerH - (py / 100) * innerH;

    // Build path
    const fullPath = chartPoints
        .map((p, i) => `${i === 0 ? "M" : "L"} ${toX(p.x)} ${toY(p.y)}`)
        .join(" ");

    const areaPath =
        `M ${toX(0)} ${toY(0)} ` +
        chartPoints.map((p) => `L ${toX(p.x)} ${toY(p.y)}`).join(" ") +
        ` L ${toX(100)} ${toY(0)} Z`;

    // Grid lines
    const gridLines = [0, 25, 50, 75, 100];

    return (
        <div className="relative bg-[#050505] border border-white/5 rounded-2xl p-5 w-full">
            {/* Live badge */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>Faturamento do Restaurante</p>
                    <p className="text-[#555] text-xs mt-0.5">Crescimento após DKS Marketing</p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#00CC00]/10 border border-[#00CC00]/30 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CC00] animate-pulse" />
                    <span className="text-[#00CC00] text-[10px] font-bold uppercase tracking-wider">Crescendo</span>
                </div>
            </div>

            <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
                <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                    <clipPath id="chartClip">
                        <rect
                            x={pad.left}
                            y={pad.top}
                            width={innerW * progress}
                            height={innerH + 10}
                        />
                    </clipPath>
                </defs>

                {/* Grid lines */}
                {gridLines.map((gl) => (
                    <line
                        key={gl}
                        x1={pad.left}
                        y1={toY(gl)}
                        x2={pad.left + innerW}
                        y2={toY(gl)}
                        stroke="#ffffff"
                        strokeOpacity="0.04"
                        strokeWidth="1"
                    />
                ))}

                {/* Y-axis labels */}
                {[0, 50, 100].map((gl) => (
                    <text
                        key={gl}
                        x={pad.left - 6}
                        y={toY(gl) + 4}
                        textAnchor="end"
                        fill="#555"
                        fontSize="8"
                    >
                        {gl === 0 ? "R$0" : gl === 50 ? "R$30k" : "R$60k+"}
                    </text>
                ))}

                {/* Area fill */}
                <path d={areaPath} fill="url(#areaGrad)" clipPath="url(#chartClip)" />

                {/* Line */}
                <path
                    d={fullPath}
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    clipPath="url(#chartClip)"
                />

                {/* Dots + labels */}
                {chartPoints.map((pt, i) => {
                    const cx = toX(pt.x);
                    const cy = toY(pt.y);
                    const visible = i <= dotIndex;
                    return (
                        <g key={i}>
                            {visible && (
                                <>
                                    <circle
                                        cx={cx}
                                        cy={cy}
                                        r={hoveredDot === i ? 6 : 4}
                                        fill="#D4AF37"
                                        stroke="#000"
                                        strokeWidth="2"
                                        style={{ transition: "r 0.2s ease", cursor: "pointer" }}
                                        onMouseEnter={() => setHoveredDot(i)}
                                        onMouseLeave={() => setHoveredDot(null)}
                                    />
                                    {hoveredDot === i && (
                                        <g>
                                            <rect
                                                x={cx - 22}
                                                y={cy - 28}
                                                width={44}
                                                height={20}
                                                rx={4}
                                                fill="#D4AF37"
                                            />
                                            <text
                                                x={cx}
                                                y={cy - 14}
                                                textAnchor="middle"
                                                fill="#000"
                                                fontSize="9"
                                                fontWeight="bold"
                                            >
                                                {pt.value}
                                            </text>
                                        </g>
                                    )}
                                </>
                            )}
                            {/* X-axis labels */}
                            <text
                                x={cx}
                                y={H - 4}
                                textAnchor="middle"
                                fill="#444"
                                fontSize="8"
                            >
                                {pt.label}
                            </text>
                        </g>
                    );
                })}

                {/* Animated cursor line at progress edge */}
                {progress > 0 && progress < 1 && (() => {
                    const lastFullIdx = Math.floor(progress * (chartPoints.length - 1));
                    const nextIdx = Math.min(lastFullIdx + 1, chartPoints.length - 1);
                    const localP =
                        progress * (chartPoints.length - 1) - lastFullIdx;
                    const curX = toX(
                        chartPoints[lastFullIdx].x +
                        (chartPoints[nextIdx].x - chartPoints[lastFullIdx].x) * localP
                    );
                    return (
                        <line
                            x1={curX}
                            y1={pad.top}
                            x2={curX}
                            y2={pad.top + innerH}
                            stroke="#D4AF37"
                            strokeOpacity="0.2"
                            strokeWidth="1"
                            strokeDasharray="3 3"
                        />
                    );
                })()}
            </svg>

            {/* Up badge */}
            <div className="mt-2 flex items-center gap-2">
                <span className="text-[#D4AF37] text-xs font-bold bg-[#D4AF37]/10 px-2 py-0.5 rounded">▲ +417% faturamento</span>
                <span className="text-[#555] text-xs">em 7 meses de parceria</span>
            </div>
        </div>
    );
}

const stats = [
    { icon: "💰", label: "Faturamento médio aumentado", value: 43, suffix: "%", prefix: "+" },
    { icon: "🏠", label: "Restaurantes atendidos", value: 100, suffix: "+", prefix: "" },
    { icon: "⭐", label: "Avaliações Google geradas", value: 12400, suffix: "+", prefix: "" },
    { icon: "📦", label: "Pedidos delivery/mês impactados", value: 8500, suffix: "+", prefix: "" },
];

export default function ResultadosVivos() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setActive(true); },
            { threshold: 0.25 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const c0 = useCountUp(43, 2000, active);
    const c1 = useCountUp(100, 1800, active);
    const c2 = useCountUp(12400, 2400, active);
    const c3 = useCountUp(8500, 2200, active);
    const counts = [c0, c1, c2, c3];

    return (
        <section ref={sectionRef} className="relative py-14 md:py-24 px-4 sm:px-5 overflow-hidden bg-[#000]">
            <style>{`
        @keyframes statIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .stat-card { animation: statIn 0.6s ease forwards; opacity:0; }
        .stat-card:nth-child(1){animation-delay:0.05s}
        .stat-card:nth-child(2){animation-delay:0.2s}
        .stat-card:nth-child(3){animation-delay:0.35s}
        .stat-card:nth-child(4){animation-delay:0.5s}
      `}</style>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,175,55,0.04)_0%,transparent_70%)]" />

            {/* Title */}
            <div className="relative text-center mb-14">
                <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                    📊 Resultados Reais
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                    O que entregamos<br />
                    <span className="text-[#D4AF37]">para restaurantes</span>
                </h2>
                <p className="text-[#A1A1AA] text-lg max-w-lg mx-auto">
                    Números reais de clientes reais. Calculados mês a mês, acompanhados de perto.
                </p>
            </div>

            {/* Content */}
            <div className="relative max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">

                {/* Left: stats grid */}
                <div className="grid grid-cols-2 gap-4 flex-1">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card bg-[#050505] border border-white/5 rounded-2xl p-5 hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col justify-between"
                        >
                            {/* Progress bar */}
                            <div className="h-[2px] w-full bg-white/5 rounded mb-4 overflow-hidden">
                                <div
                                    className="h-full bg-[#D4AF37] rounded"
                                    style={{
                                        transform: active ? "scaleX(1)" : "scaleX(0)",
                                        transformOrigin: "left",
                                        transition: `transform 2s ease ${i * 0.3 + 0.2}s`,
                                    }}
                                />
                            </div>
                            <p className="text-2xl mb-3">{stat.icon}</p>
                            <div className="flex items-end gap-0.5 mb-1">
                                <span className="text-3xl font-black text-white leading-none" style={{ fontFamily: "var(--font-montserrat)" }}>
                                    {stat.prefix}{counts[i].toLocaleString("pt-BR")}
                                </span>
                                <span className="text-[#D4AF37] text-xl font-black leading-none mb-0.5">{stat.suffix}</span>
                            </div>
                            <p className="text-[#888] text-xs leading-relaxed">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Right: live chart */}
                <div className="flex-1 flex flex-col justify-center">
                    <LiveRevenueChart active={active} />
                </div>
            </div>

            {/* Bottom line */}
            <div className="mt-12 flex items-center justify-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00CC00] animate-pulse" />
                <span className="text-[#555] text-sm">Dados atualizados com base na nossa carteira ativa de clientes</span>
            </div>
        </section>
    );
}
