"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-[30px] md:top-[34px] left-0 w-full z-[100] transition-all duration-300 ${scrolled || !isHome
                ? "bg-black/95 backdrop-blur-md py-3 border-b border-[#2B2B2B] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                : "bg-transparent py-5 md:py-7"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-heading font-black text-2xl sm:text-3xl md:text-4xl tracking-tighter text-white hover:opacity-80 transition-opacity"
                >
                    DKS<span className="text-[#D4AF37]">.</span>
                </Link>

                {/* Right side Nav & CTA */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <Link href="/blog" className="hidden sm:block text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors">
                        Blog
                    </Link>

                    {/* CTA — visible on all screen sizes */}
                    <a
                        href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#00CC00] text-white hover:bg-[#00B300] font-bold text-[10px] sm:text-xs px-3 sm:px-5 py-2 rounded uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,204,0,0.4)] hover:shadow-[0_0_30px_rgba(0,204,0,0.6)] hover:-translate-y-0.5 whitespace-nowrap"
                    >
                        QUERO CONTRATAR A DKS
                    </a>
                </div>
            </div>
        </header>
    );
}
