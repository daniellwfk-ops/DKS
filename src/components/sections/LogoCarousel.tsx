"use client";

import React from 'react';

const LOGOS = [
    "Burger King", "Domino's", "Outback", "Madero", "Coco Bambu", "Paris 6", "Pobre Juan", "KFC", "Subway", "Bacio di Latte",
    "Burger King", "Domino's", "Outback", "Madero", "Coco Bambu", "Paris 6", "Pobre Juan", "KFC", "Subway", "Bacio di Latte"
];

export default function LogoCarousel() {
    return (
        <section className="w-full bg-[#000000] py-[60px] overflow-hidden border-b border-white/5 relative z-10">

            {/* Title */}
            <div className="max-w-[1200px] mx-auto px-6 mb-[40px] text-center md:text-left">
                <h3 className="text-[#F2B705] font-[700] text-[20px] md:text-[24px]">
                    Agência 100% nichada em gastronomia. <span className="text-white font-[400]">Estratégias validadas. Resultados comprovados.</span>
                </h3>
            </div>

            {/* Marquee Wrapper */}
            <div className="relative flex overflow-x-hidden group mask-image-fade">
                <div className="flex animate-[marquee_40s_linear_infinite] items-center">
                    {LOGOS.map((logo, index) => (
                        <div
                            key={index}
                            className="flex-none mx-[40px] text-[#CFCFCF]/20 hover:text-[#CFCFCF] transition-colors duration-300 font-[800] text-[24px] uppercase tracking-widest whitespace-nowrap cursor-default"
                        >
                            {logo}
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .mask-image-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        `
            }} />
        </section>
    );
}
