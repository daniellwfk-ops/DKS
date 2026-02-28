"use client";

import React, { useRef } from 'react';

const services = [
    {
        title: "Tráfego pago",
        image: "/images/service-mockup-1.jpg",
        points: [
            "Campanhas de alta conversão",
            "Análise de dados avançada",
            "Metas semanais de faturamento"
        ]
    },
    {
        title: "Otimização de Delivery",
        image: "/images/service-mockup-2.jpg",
        points: [
            "Análise de cardápios no iFood",
            "Estratégias de rankeamento",
            "Melhoria na taxa de conversão"
        ]
    },
    {
        title: "Acompanhamento e Análises",
        image: "/images/service-mockup-3.jpg",
        points: [
            "Reuniões mensais de acompanhamento",
            "Suporte via Grupo de WhatsApp",
            "Relatórios de performance"
        ]
    },
    {
        title: "CRM",
        image: "/images/service-mockup-4.jpg",
        points: [
            "Disparo de mensagens via WhatsApp",
            "Reativação de clientes inativos",
            "Fidelização e LTV"
        ]
    },
    {
        title: "Google Meu Negócio & TripAdvisor",
        image: "/images/service-mockup-5.jpg",
        points: [
            "Otimização e SEO local",
            "Gestão de avaliações",
            "Aumento de visibilidade no salão"
        ]
    },
    {
        title: "Assessoria de Conteúdo",
        image: "/images/service-mockup-6.jpg",
        points: [
            "Estratégia editorial para Insta/TikTok",
            "Roteiros para vídeos virais",
            "Posicionamento de marca"
        ]
    }
];

export default function ServicesCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full max-w-[1200px] mx-auto group">
            {/* Navigation Arrows */}
            <button
                onClick={scrollLeft}
                className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-lg text-black hover:bg-gray-200 transition-colors opacity-0 group-hover:opacity-100 hidden md:flex"
            >
                <i className="ph-bold ph-arrow-left text-xl"></i>
            </button>

            <button
                onClick={scrollRight}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-lg text-black hover:bg-gray-200 transition-colors opacity-0 group-hover:opacity-100 hidden md:flex"
            >
                <i className="ph-bold ph-arrow-right text-xl"></i>
            </button>

            {/* Carousel Track */}
            <div
                ref={carouselRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar px-6 md:px-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-[280px] md:w-[340px] snap-start bg-[#0A0B10] border border-[#1A1C23] flex flex-col items-center p-8 transition-transform hover:-translate-y-2 duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] h-full relative"
                    >
                        {/* Image container with glow */}
                        <div className="w-full relative flex items-center justify-center mb-8 h-[160px]">
                            {/* Subtle background glow behind image placeholder */}
                            <div className="absolute inset-0 bg-[#00AEEF]/10 blur-[40px] rounded-full"></div>
                            {/* Simulating a graphic placeholder (Can be replaced with real images) */}
                            <div className="relative z-10 w-[80%] h-full bg-[#1A1C23] rounded-lg border border-[#2A2D35] flex items-center justify-center overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00AEEF]/5 to-transparent"></div>
                                <i className="ph-light ph-laptop text-[#4A4D57] text-5xl"></i>
                            </div>
                        </div>

                        <div className="w-full">
                            <h3 className="text-[#00AEEF] text-xl font-bold mb-6 leading-tight h-[48px]">{service.title}</h3>
                            <ul className="space-y-4">
                                {service.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-3">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#00AEEF] mt-[8px] flex-shrink-0"></div>
                                        <span className="text-[#A1A1AA] text-[14px] leading-snug">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
