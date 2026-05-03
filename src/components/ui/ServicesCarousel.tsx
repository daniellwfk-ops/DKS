"use client";

import React, { useRef, useState } from 'react';

const services = [
    {
        title: "Tráfego pago",
        image: "/images/service-mockup-1.webp",
        points: [
            "Campanhas de alta conversão",
            "Análise de dados avançada",
            "Metas semanais de faturamento"
        ]
    },
    {
        title: "Otimização de Delivery",
        image: "/images/service-mockup-2.webp",
        points: [
            "Análise de cardápios no iFood",
            "Estratégias de rankeamento",
            "Melhoria na taxa de conversão"
        ]
    },
    {
        title: "Acompanhamento e Análises",
        image: "/images/service-mockup-3.webp",
        points: [
            "Reuniões mensais de acompanhamento",
            "Suporte via Grupo de WhatsApp",
            "Relatórios de performance"
        ]
    },
    {
        title: "CRM",
        image: "/images/service-mockup-4.webp",
        points: [
            "Disparo de mensagens via WhatsApp",
            "Reativação de clientes inativos",
            "Fidelização e LTV"
        ]
    },
    {
        title: "Google Meu Negócio & TripAdvisor",
        image: "/images/service-mockup-5.webp",
        points: [
            "Otimização e SEO local",
            "Gestão de avaliações",
            "Aumento de visibilidade no salão"
        ]
    },
    {
        title: "Assessoria de Conteúdo",
        image: "/images/service-mockup-6.webp",
        points: [
            "Estratégia editorial para Insta/TikTok",
            "Roteiros para vídeos virais",
            "Posicionamento de marca"
        ]
    }
];

// Duplicate the services array for a seamless infinite loop
const allServices = [...services, ...services];

export default function ServicesCarousel() {
    const [paused, setPaused] = useState(false);

    return (
        <>
            <style>{`
                @keyframes scroll-carousel {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .carousel-track {
                    display: flex;
                    gap: 1.5rem;
                    animation: scroll-carousel 35s linear infinite;
                    width: max-content;
                }
                .carousel-track.paused {
                    animation-play-state: paused;
                }
                .carousel-wrapper {
                    overflow: hidden;
                    position: relative;
                    width: 100%;
                }
                .carousel-fade-left {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 80px;
                    background: linear-gradient(to right, #000000, transparent);
                    z-index: 10;
                    pointer-events: none;
                }
                .carousel-fade-right {
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 80px;
                    background: linear-gradient(to left, #000000, transparent);
                    z-index: 10;
                    pointer-events: none;
                }
            `}</style>

            <div
                className="carousel-wrapper pb-8 px-0"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Fade edges */}
                <div className="carousel-fade-left" />
                <div className="carousel-fade-right" />

                {/* Scrolling track */}
                <div className={`carousel-track${paused ? ' paused' : ''}`}>
                    {allServices.map((service, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-[280px] md:w-[320px] bg-[#050505] border border-white/5 rounded-2xl flex flex-col items-center p-8 transition-all hover:-translate-y-2 duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)] hover:border-[#D4AF37]/40 relative overflow-hidden group/card select-none"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                            {/* Image container with glow */}
                            <div className="w-full relative flex items-center justify-center mb-8 h-[180px]">
                                <div className="absolute inset-0 bg-[#D4AF37]/5 blur-[30px] rounded-full group-hover/card:bg-[#D4AF37]/20 transition-colors duration-500"></div>

                                <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl rounded-xl group-hover/card:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        width={320}
                                        height={180}
                                        loading="lazy"
                                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/card:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="w-full relative z-10">
                                    <h3 className="text-white text-xl font-bold mb-6 leading-tight border-b border-white/5 pb-4 group-hover/card:text-[#D4AF37] transition-colors duration-300">{service.title}</h3>
                                    <ul className="space-y-4">
                                        {service.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-3">
                                                <i className="ph-bold ph-check text-[#D4AF37] mt-[3px] text-sm flex-shrink-0"></i>
                                                <span className="text-[#A1A1AA] text-[14px] leading-snug font-medium group-hover/card:text-[#CFCFCF] transition-colors">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
