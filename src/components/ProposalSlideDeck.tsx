"use client";

import { useState, useEffect, useCallback } from "react";

interface SelectedService {
    id: string;
    label: string;
    price: number;
}

interface ProposalData {
    clientName: string;
    restaurantName: string | null;
    services: SelectedService[];
    total: number;
    validity: number;
    contractMonths: number;
    observations: string | null;
}

export default function ProposalSlideDeck({
    proposal,
}: {
    proposal?: ProposalData;
}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [, setDirection] = useState(0);

    // Determine if it's a generic institutional presentation
    const isInstitutional = !proposal;
    const totalSlides = isInstitutional ? 6 : 6 + (proposal?.services?.length || 0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => {
            if (prev < totalSlides - 1) {
                setDirection(1);
                return prev + 1;
            }
            return prev;
        });
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => {
            if (prev > 0) {
                setDirection(-1);
                return prev - 1;
            }
            return prev;
        });
    }, []);

    // Keyboard navigation
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                prevSlide();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    // Define Slides
    const slides = [];

    // ============================
    // Slide 1: Hero (Capa)
    // ============================
    slides.push(
        <div key="hero" className="flex flex-col items-center justify-center h-full text-center px-4 w-full">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none" />
            <span className="text-[#D4AF37] font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-4 sm:mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                {isInstitutional ? "Apresentação Corporativa" : "Apresentação Estratégica"}
            </span>
            <h1
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-4 sm:mb-6 animate-fade-in-up"
                style={{ fontFamily: "var(--font-montserrat)", animationDelay: "0.2s", animationFillMode: "both" }}
            >
                Você no <span className="text-[#D4AF37]">Controle</span>
            </h1>
            <p className="text-[#888] text-sm md:text-xl font-medium max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                {isInstitutional ? (
                    "Conheça a agência de marketing especialista em acelerar vendas para restaurantes e deliveries."
                ) : (
                    <>
                        Aceleração de Vendas para <strong className="text-white">{proposal?.clientName}</strong>
                        {proposal?.restaurantName && ` — ${proposal.restaurantName}`}
                    </>
                )}
            </p>

            <button
                onClick={nextSlide}
                className="mt-12 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors animate-bounce"
                style={{ animationDelay: "1s" }}
            >
                <span className="text-white">↓</span>
            </button>
        </div>
    );

    // ============================
    // Slide 2: O Problema do Mercado
    // ============================
    slides.push(
        <div key="problem" className="flex flex-col justify-center h-full max-w-5xl mx-auto px-4 w-full">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.05)_0%,transparent_50%)] pointer-events-none" />
            <span className="text-red-500 font-bold text-xs uppercase tracking-[0.2em] mb-4 block animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                A Realidade do Mercado
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-12 animate-fade-in-up" style={{ fontFamily: "var(--font-montserrat)", animationDelay: "0.2s" }}>
                O que te impede de <span className="text-red-500">crescer.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                <div className="bg-[#050505] border border-white/5 rounded-2xl p-8">
                    <div className="text-red-500 text-3xl mb-4">🗓</div>
                    <h3 className="text-white font-bold mb-2">Faturamento de Gangorra</h3>
                    <p className="text-[#888] text-sm">Finais de semana lotados, mas de segunda a quinta o salão e o delivery ficam vazios.</p>
                </div>
                <div className="bg-[#050505] border border-white/5 rounded-2xl p-8">
                    <div className="text-red-500 text-3xl mb-4">📱</div>
                    <h3 className="text-white font-bold mb-2">Dependência de Plataformas</h3>
                    <p className="text-[#888] text-sm">iFood e OTAs cobrando 15% a 27% de comissão e roubando o contato dos seus clientes.</p>
                </div>
                <div className="bg-[#050505] border border-white/5 rounded-2xl p-8">
                    <div className="text-red-500 text-3xl mb-4">🤷‍♂️</div>
                    <h3 className="text-white font-bold mb-2">Marketing Genérico</h3>
                    <p className="text-[#888] text-sm">Agências que fazem posts bonitinhos, mas não entendem de fome, sazonalidade e margem.</p>
                </div>
            </div>
        </div>
    );

    // ============================
    // Slide 3: A Solução DKS
    // ============================
    slides.push(
        <div key="solution" className="flex flex-col justify-center h-full max-w-5xl mx-auto px-4 w-full text-center">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] mb-4 animate-fade-in-up block" style={{ animationDelay: "0.1s" }}>
                O Posicionamento DKS
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-6 mx-auto max-w-3xl animate-fade-in-up" style={{ fontFamily: "var(--font-montserrat)", animationDelay: "0.2s" }}>
                A agência especialista em <span className="text-[#D4AF37]">Restaurantes</span>
            </h2>
            <p className="text-[#888] text-sm md:text-lg max-w-2xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                Nós só fazemos marketing para o mercado gastronômico. Nós entendemos o que faz o cliente sair de casa e como transformar desejo em pedidos reais.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                {[
                    { icon: "🎯", title: "Foco no Lucro", desc: "Métricas de vaidade (likes) não pagam as contas." },
                    { icon: "🤝", title: "Parceria Real", desc: "Acompanhamento diário das vendas e gargalos." },
                    { icon: "🧠", title: "Especialização", desc: "Processos criados exclusivamente para delivery e salão." },
                    { icon: "📈", title: "Previsibilidade", desc: "Método testado em mais de 100 restaurantes no Brasil." }
                ].map((item, i) => (
                    <div key={i} className="bg-[#080808] border border-white/5 rounded-2xl p-6 flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-3xl mb-4">{item.icon}</div>
                        <h3 className="text-white font-bold mb-2">{item.title}</h3>
                        <p className="text-[#666] text-xs">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    // ============================
    // Slide 4: O Método ROMA
    // ============================
    slides.push(
        <div key="method" className="flex flex-col justify-center h-full max-w-5xl mx-auto px-4 w-full">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] mb-4 block text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Como Entregamos Resultados
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-12 text-center animate-fade-in-up" style={{ fontFamily: "var(--font-montserrat)", animationDelay: "0.2s" }}>
                Método <span className="text-[#D4AF37]">R.O.M.A.</span>
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                {[
                    { l: "R", title: "Resultado", desc: "Definição clara de metas de faturamento, ticket médio e fluxo, antes de qualquer clique." },
                    { l: "O", title: "Otimização", desc: "Ajuste fino da base: engenharia de cardápio, fotos no iFood e Google Meu Negócio." },
                    { l: "M", title: "Método", desc: "Tráfego pago contínuo, CRM, reativação de clientes e calendários com previsibilidade." },
                    { l: "A", title: "Autoridade", desc: "Posicionamento premium que te permite cobrar mais sem perder os clientes bons." }
                ].map((phase, i) => (
                    <div key={i} className="bg-[#050505] border border-[#D4AF37]/20 rounded-2xl p-6 relative overflow-hidden group hover:bg-white/5 transition-colors">
                        <span className="absolute -right-4 -bottom-8 text-9xl font-black text-[#D4AF37]/5 z-0 transition-transform group-hover:scale-110" style={{ fontFamily: "var(--font-montserrat)" }}>
                            {phase.l}
                        </span>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-[#D4AF37]">{i + 1}.</span> {phase.title}
                            </h3>
                            <p className="text-[#888] text-sm leading-relaxed">{phase.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    // ============================
    // Slide 5: Prova Social
    // ============================
    slides.push(
        <div key="proof" className="flex flex-col justify-center h-full max-w-5xl mx-auto px-4 w-full text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05)_0%,transparent_50%)] pointer-events-none" />
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] mb-4 animate-fade-in-up block" style={{ animationDelay: "0.1s" }}>
                Prova Social
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-4 animate-fade-in-up" style={{ fontFamily: "var(--font-montserrat)", animationDelay: "0.2s" }}>
                O que o Método <span className="text-[#D4AF37]">Gera na Prática</span>
            </h2>
            <p className="text-[#888] mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                Média real extraída dos +100 restaurantes atendidos após 6 meses de DKS.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                {[
                    { metric: "+67%", desc: "de aumento médio no faturamento" },
                    { metric: "+45%", desc: "na frequência de retorno" },
                    { metric: "3x", desc: "mais visitas no Google/iFood" },
                    { metric: "-30%", desc: "de redução no CAC" }
                ].map((r, i) => (
                    <div key={i} className="bg-[#050505] border border-white/10 rounded-2xl p-6 text-center shadow-lg">
                        <p className="text-4xl md:text-5xl font-black text-[#D4AF37] mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>{r.metric}</p>
                        <p className="text-[#888] text-xs font-medium">{r.desc}</p>
                    </div>
                ))}
            </div>

            <div className="inline-block bg-[#050505] border border-[#D4AF37]/30 px-6 py-4 rounded-full animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
                <p className="text-white text-sm font-bold tracking-widest uppercase">
                    Mais de <span className="text-[#D4AF37]">R$ 27 Milhões</span> gerados em delivery e reservas.
                </p>
            </div>
        </div>
    );

    // ============================
    // Slide 6 to N: Scope (Services) - Dynamically Generated OR Static Scope
    // ============================
    if (!isInstitutional && proposal?.services) {
        proposal.services.forEach((svc, index) => {
            slides.push(
                <div key={`svc-${index}`} className="flex flex-col justify-center h-full max-w-5xl mx-auto px-4 w-full text-center">
                    <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] mb-4 block animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                        Escopo de Atuação — {index + 1} / {proposal.services.length}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-8 animate-fade-in-up" style={{ fontFamily: "var(--font-montserrat)", animationDelay: "0.2s", animationFillMode: "both" }}>
                        {svc.label}
                    </h2>

                    <div className="max-w-3xl mx-auto w-full bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-14 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[80px] rounded-full pointer-events-none" />

                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10 text-left">
                            <div>
                                <h3 className="text-white font-bold text-xl mb-3">O que contem:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-[#aaa] text-sm"><span className="text-[#D4AF37]">✓</span> Planejamento e Estratégia</li>
                                    <li className="flex items-start gap-2 text-[#aaa] text-sm"><span className="text-[#D4AF37]">✓</span> Execução Completa</li>
                                    <li className="flex items-start gap-2 text-[#aaa] text-sm"><span className="text-[#D4AF37]">✓</span> Acompanhamento Semanal</li>
                                    <li className="flex items-start gap-2 text-[#aaa] text-sm"><span className="text-[#D4AF37]">✓</span> Gestão da Conta</li>
                                </ul>
                            </div>
                            <div className="md:border-l border-white/10 md:pl-8 text-center md:text-left">
                                <span className="text-[#555] text-[10px] font-bold uppercase tracking-widest mb-2 block">Alocação (Mensal)</span>
                                <span className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "var(--font-montserrat)" }}>
                                    <span className="text-xl text-[#888]">R$</span> {svc.price.toLocaleString("pt-BR")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    // ============================
    // Final Slide: Investment & CTA OR Meeting Booking
    // ============================
    if (isInstitutional) {
        slides.push(
            <div key="cta" className="flex flex-col justify-center h-full max-w-4xl mx-auto px-4 w-full text-center">
                <div className="bg-[#050500] border border-[#D4AF37]/30 rounded-[2rem] p-8 md:p-14 relative overflow-hidden mx-auto w-full animate-fade-in-up shadow-[0_0_80px_rgba(212,175,55,0.05)]" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                    <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        Próximo Passo
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                        Vamos crescer juntos?
                    </h2>
                    <p className="text-[#888] text-sm md:text-base max-w-xl mx-auto mb-12">
                        Agende um diagnóstico gratuito do seu restaurante. Nossa equipe analisará seus gargalos e mostrará exatamente como o Método ROMA pode ser aplicado no seu negócio.
                    </p>

                    <a
                        href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto bg-[#D4AF37] text-black font-black text-sm md:text-base uppercase tracking-widest px-12 py-5 rounded-2xl hover:bg-[#C9A42E] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.3)]"
                    >
                        Agendar Diagnóstico Gratuito
                    </a>
                </div>
            </div>
        );
    } else {
        slides.push(
            <div key="investment" className="flex flex-col justify-center h-full max-w-4xl mx-auto px-4 w-full text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-4 animate-fade-in-up" style={{ fontFamily: "var(--font-montserrat)", animationDelay: "0.1s", animationFillMode: "both" }}>
                    O Custo Real de Não Agir
                </h2>
                <p className="text-[#888] text-sm md:text-base max-w-xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                    Enquanto você decide, seus concorrentes cruzaram a rua e estão captando o cliente que deveria estar no seu salão.
                </p>

                <div className="bg-[#050500] border border-[#D4AF37]/30 rounded-[2rem] p-8 md:p-14 relative overflow-hidden mx-auto w-full animate-fade-in-up shadow-[0_0_80px_rgba(212,175,55,0.05)]" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                    <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        Projeto Completo — Ticket Mensal
                    </p>
                    <div className="flex items-end justify-center w-full gap-3 mb-4 font-black" style={{ fontFamily: "var(--font-montserrat)" }}>
                        <span className="text-2xl md:text-4xl text-[#888] pb-1 md:pb-3">R$</span>
                        <span className="text-6xl md:text-8xl text-white tracking-tighter leading-none shrink-0" style={{ letterSpacing: "-0.04em" }}>
                            {proposal!.total.toLocaleString("pt-BR")}
                        </span>
                        <span className="text-xl md:text-2xl text-[#888] mb-1 md:mb-3">/mês</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 text-[#555] mt-8 mb-12 text-xs md:text-sm">
                        <span className="bg-white/5 px-4 py-2 rounded-full border border-white/5">🗓 Contrato de {proposal!.contractMonths} meses</span>
                        <span className="bg-white/5 px-4 py-2 rounded-full border border-white/5">⏱ Válido por {proposal!.validity} dias corridos</span>
                        {proposal!.observations && <span className="bg-white/5 px-4 py-2 rounded-full border border-[#D4AF37]/20 text-[#D4AF37] block w-full mt-2">ℹ️ {proposal!.observations}</span>}
                    </div>

                    <a
                        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Acabei%20de%20ver%20a%20apresenta%C3%A7%C3%A3o%20e%20quero%20assumir%20o%20controle%20do%20meu%20restaurante."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto bg-[#D4AF37] text-black font-black text-sm md:text-base uppercase tracking-widest px-12 py-5 rounded-2xl hover:bg-[#C9A42E] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.3)]"
                    >
                        Aprovar Proposta e Assumir o Controle
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-[#000] text-white overflow-hidden" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
            {/* Header */}
            <header className="absolute top-0 w-full z-50 px-6 sm:px-10 pt-10 pb-6 flex items-center justify-between pointer-events-none">
                <div className="font-black text-xl md:text-2xl tracking-tighter text-white">
                    DKS<span className="text-[#D4AF37]">.</span>
                </div>
                <div className="bg-white/5 backdrop-blur-md text-[#888] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-white/10 shadow-sm">
                    {isInstitutional ? "Apresentação Corporativa" : "Planejamento Oficial"}
                </div>
            </header>

            {/* Slide Container Area */}
            <main className="relative w-full h-full pt-4 pb-24 md:pt-8 md:pb-28 overflow-y-auto overflow-x-hidden md:overflow-hidden">
                {/* CSS for custom entrance animation based on direction */}
                <style dangerouslySetInnerHTML={{
                    __html: `
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px) scale(0.98); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}} />

                {/* Render current slide */}
                <div
                    key={currentSlide} // Force re-mount to re-trigger animations
                    className="w-full h-full flex items-center justify-center min-h-[600px] pb-10"
                >
                    {slides[currentSlide]}
                </div>
            </main>

            {/* Navigation Footer */}
            <footer className="absolute bottom-0 w-full z-50 bg-black/60 backdrop-blur-2xl border-t border-white/5 px-6 py-4 sm:py-6 flex items-center justify-between">
                <div className="text-[#666] font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase w-1/3">
                    Slide <span className="text-white">{currentSlide + 1}</span> <span className="text-[#444]">/ {totalSlides}</span>
                </div>

                {/* Progres bar visual */}
                <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-[#88691C] to-[#D4AF37] transition-all duration-500 ease-out"
                        style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                    />
                </div>

                <div className="flex items-center gap-2 sm:gap-4 w-1/3 justify-end">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all disabled:opacity-20 disabled:hover:bg-transparent"
                        aria-label="Slide anterior"
                    >
                        <span className="text-white text-lg">←</span>
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === totalSlides - 1}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all disabled:opacity-20 disabled:hidden"
                        aria-label="Próximo slide"
                    >
                        <span className="text-[#D4AF37] text-lg">→</span>
                    </button>
                </div>
            </footer>
        </div>
    );
}
