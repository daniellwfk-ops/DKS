"use client";

import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Dores', href: '#dores' },
        { name: 'Por que DKS', href: '#comparacao' },
        { name: 'Processo', href: '#processo' },
        { name: 'Método ROMA', href: '#metodo' },
        { name: 'Sobre a Agência', href: '#sobre' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4 border-b border-[#2B2B2B] shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6 md:py-8'}`}>
            <div className="container mx-auto px-5 flex justify-between items-center">

                {/* Logo */}
                <a href="#inicio" onClick={(e) => scrollToSection(e, '#inicio')} className="font-heading font-black text-3xl md:text-4xl tracking-tighter text-white hover:opacity-80 transition-opacity">
                    DKS<span className="text-[#D6A848]">.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center gap-10">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="relative font-sub text-[0.95rem] font-medium text-[#B3B3B3] hover:text-white transition-colors group tracking-wide"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D6A848] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7" target="_blank" rel="noopener noreferrer" className="bg-[#D6A848] text-black hover:bg-[#E8B95A] font-sub font-bold text-sm px-8 py-3 rounded uppercase tracking-wider transition-all duration-300 transform shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        FALAR COM ESPECIALISTA
                    </a>
                </nav>

                {/* Mobile Menu Toggle (Minimal) */}
                <a href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7" target="_blank" rel="noopener noreferrer" className="xl:hidden bg-[#D6A848] text-black font-sub font-bold text-xs px-5 py-2.5 rounded uppercase tracking-wider">
                    CONTATO
                </a>
            </div>
        </header>
    );
}
