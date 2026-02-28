import React from 'react';

interface SubpageHeroProps {
    label: string;
    title: string;
    description: string;
}

export default function SubpageHero({ label, title, description }: SubpageHeroProps) {
    return (
        <section className="w-full bg-[#000000] pt-[160px] pb-[80px] relative z-10 font-sans border-b border-white/5">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F2B705]/5 blur-[120px] pointer-events-none rounded-full" />

            <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
                <div className="inline-block bg-[#F2B705]/10 text-[#F2B705] px-[16px] py-[8px] rounded-full text-[14px] font-[600] mb-[32px] tracking-[1px] uppercase border border-[#F2B705]/20">
                    {label}
                </div>

                <h1 className="text-[40px] md:text-[56px] font-[800] text-white leading-[1.1] tracking-[-1.5px] mb-[24px]">
                    {title}
                </h1>

                <p className="text-[#CFCFCF] text-[18px] md:text-[20px] leading-[1.6]">
                    {description}
                </p>
            </div>
        </section>
    );
}
