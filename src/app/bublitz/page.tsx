"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_SLIDES = 9;

export default function BublitzPresentationPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
                return;
            }

            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                setCurrentSlide(prev => Math.min(prev + 1, TOTAL_SLIDES - 1));
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                setCurrentSlide(prev => Math.max(prev - 1, 0));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handlePrint = () => {
        window.print();
    };

    const containerVariant = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
    };

    return (
        <div className="min-h-screen bg-[#030303] text-white font-sans overflow-hidden print:overflow-visible print:bg-black" ref={containerRef}>
            
            {/* Print Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media print {
          html, body { background: #030303 !important; color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .slide-container { display: flex !important; opacity: 1 !important; position: static !important; transform: none !important; margin: 0 !important; width: 100vw !important; height: 100vh !important; page-break-after: always; break-after: page; }
        }
      `}} />

            {/* Top Navigation (No Print) */}
            <div className="fixed top-0 left-0 right-0 p-6 flex justify-end items-center z-50 no-print">
                <button onClick={handlePrint} className="bg-zinc-800/80 backdrop-blur-md hover:bg-zinc-700 text-white px-4 py-2 rounded text-sm transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                    Exportar PDF
                </button>
            </div>

            {/* Bottom Navigation (No Print) */}
            <div className="fixed bottom-0 left-0 right-0 p-6 flex justify-between items-center z-50 no-print pointer-events-none">
                <div className="text-zinc-500 font-mono text-sm pointer-events-auto">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(TOTAL_SLIDES).padStart(2, '0')}
                </div>
                <div className="flex gap-4 pointer-events-auto">
                    <button onClick={() => setCurrentSlide(p => Math.max(p - 1, 0))} disabled={currentSlide === 0} className={`w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-md ${currentSlide === 0 ? 'border-zinc-800/50 text-zinc-700' : 'border-zinc-600/50 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]'} transition-colors`}>←</button>
                    <button onClick={() => setCurrentSlide(p => Math.min(p + 1, TOTAL_SLIDES - 1))} disabled={currentSlide === TOTAL_SLIDES - 1} className={`w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-md ${currentSlide === TOTAL_SLIDES - 1 ? 'border-zinc-800/50 text-zinc-700' : 'border-zinc-600/50 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]'} transition-colors`}>→</button>
                </div>
            </div>

            <div className="w-full h-screen relative print:block">
                {/* Ambient Background for Glassmorphism */}
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none no-print" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none no-print" />
                
                <AnimatePresence mode="wait">
                    
                    {/* SLIDE 01 — CAPA */}
                    {currentSlide === 0 && (
                        <motion.div key="s1" initial="hidden" animate="show" exit="hidden" variants={containerVariant} className="slide-container absolute inset-0 flex flex-col items-center justify-center p-12">
                            <div className="w-full max-w-4xl text-center">
                                <motion.div variants={itemVariant} className="text-[#D4AF37] font-bold tracking-widest text-sm mb-6">DKS MARKETING</motion.div>
                                <motion.h1 variants={itemVariant} className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase">Reunião de<br /><span className="text-white/40">Alinhamento</span></motion.h1>
                                <motion.div variants={itemVariant} className="max-w-2xl mx-auto mt-8 border-t border-zinc-800 pt-8">
                                    <h2 className="text-3xl font-medium text-white mb-2">Bublitz</h2>
                                    <div className="text-zinc-500 tracking-widest uppercase text-sm mt-4">
                                        06 de maio de 2026 | Blumenau, SC
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {/* SLIDE 02 — AGENDA */}
                    {currentSlide === 1 && (
                        <motion.div key="s2" initial="hidden" animate="show" exit="hidden" variants={containerVariant} className="slide-container absolute inset-0 flex flex-col items-start justify-center p-12">
                            <div className="w-full max-w-5xl mx-auto">
                                <motion.div variants={itemVariant} className="mb-16">
                                    <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">AGENDA</h2>
                                    <h1 className="text-5xl font-black">O que vamos abordar hoje</h1>
                                </motion.div>
                                <div className="space-y-6">
                                    {[
                                        { num: "01", title: "Diagnóstico", desc: "Entender o momento atual da Bublitz" },
                                        { num: "02", title: "Alinhamento", desc: "Primeiros passos e estruturação do primeiro mês" },
                                        { num: "03", title: "Conteúdo", desc: "Tipos de arte e recomendações visuais" },
                                        { num: "04", title: "Ofertas", desc: "O que podemos desenvolver juntos" }
                                    ].map((item, i) => (
                                        <motion.div key={i} variants={itemVariant} className="flex items-center gap-8 bg-zinc-900/30 backdrop-blur-md p-6 rounded-2xl border border-zinc-800/50">
                                            <div className="text-4xl font-black text-zinc-800">{item.num}</div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                                <p className="text-zinc-400 mt-1">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* SLIDE 03 — DIAGNOSTICO */}
                    {currentSlide === 2 && (
                        <motion.div key="s3" initial="hidden" animate="show" exit="hidden" variants={containerVariant} className="slide-container absolute inset-0 flex flex-col items-start justify-center p-12">
                            <div className="w-full max-w-6xl mx-auto">
                                <motion.div variants={itemVariant} className="mb-12">
                                    <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">01 / DIAGNÓSTICO</h2>
                                    <h1 className="text-5xl font-black">Qual é o momento atual de vocês?</h1>
                                </motion.div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                    <div className="space-y-6">
                                        {[
                                            "Hoje vocês estão em ascensão, estabilidade ou declínio?",
                                            "Como foi o faturamento dos últimos 3 meses? Qual a média geral?",
                                            "Quais são os dias e horários de maior movimento da casa?",
                                            "Quais são os dias e horários de maior ociosidade?",
                                            "Onde a marca quer chegar? Quais são as metas para os próximos 6 a 12 meses?"
                                        ].map((pergunta, i) => (
                                            <motion.div key={i} variants={itemVariant} className="bg-zinc-900/40 backdrop-blur-md p-6 rounded-xl border border-zinc-800/50 flex gap-4">
                                                <div className="text-[#D4AF37] mt-1">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                </div>
                                                <p className="text-xl text-white">{pergunta}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <motion.div variants={itemVariant} className="bg-[#D4AF37]/5 backdrop-blur-md border border-[#D4AF37]/20 p-8 rounded-3xl flex flex-col justify-center">
                                        <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-6">
                                            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Nota para apresentação:</h3>
                                        <p className="text-zinc-300 text-lg leading-relaxed">
                                            Faça todas as perguntas antes de falar qualquer coisa sobre o que a DKS vai entregar. 
                                            <strong className="text-white block mt-2">Deixe eles falarem. As respostas definem o que priorizar.</strong>
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* SLIDE 04 — PRIMEIRO MES */}
                    {currentSlide === 3 && (
                        <motion.div key="s4" initial="hidden" animate="show" exit="hidden" variants={containerVariant} className="slide-container absolute inset-0 flex flex-col items-start justify-center p-12">
                            <div className="w-full max-w-5xl mx-auto">
                                <motion.div variants={itemVariant} className="mb-12">
                                    <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">02 / ALINHAMENTO</h2>
                                    <h1 className="text-5xl font-black">Como vai funcionar o primeiro mês</h1>
                                </motion.div>

                                <div className="space-y-8">
                                    <motion.div variants={itemVariant} className="text-2xl text-zinc-300 leading-relaxed font-light">
                                        Esse primeiro mês é de estruturação. Quanto mais a gente entender como a Bublitz funciona - <strong className="text-white font-medium">operação, público, horários e sazonalidade</strong> - melhor a gente consegue trabalhar e gerar resultado real.
                                    </motion.div>
                                    
                                    <motion.div variants={itemVariant} className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-8 rounded-2xl text-xl text-white">
                                        Não vamos chegar mudando tudo de uma vez. Vamos mapear, entender e construir junto.
                                    </motion.div>

                                    <motion.div variants={itemVariant} className="mt-12 flex items-center gap-6 border-l-4 border-[#D4AF37] pl-8 py-2">
                                        <div>
                                            <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-1">Próximo Marco</div>
                                            <div className="text-2xl text-[#D4AF37] font-medium">Primeira reunião de acompanhamento: <span className="text-white font-bold">semana do dia 06 de junho</span>.</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* SLIDE 05 — TIPOS DE CONTEUDO */}
                    {currentSlide === 4 && (
                        <motion.div key="s5" initial="hidden" animate="show" exit="hidden" variants={containerVariant} className="slide-container absolute inset-0 flex flex-col items-start justify-center p-12">
                            <div className="w-full max-w-7xl mx-auto">
                                <motion.div variants={itemVariant} className="mb-10">
                                    <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">03 / CONTEÚDO</h2>
                                    <h1 className="text-5xl font-black">Recomendações de conteúdo</h1>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { title: "Apresentação geral da marca", desc: "Um post único mostrando tudo que a Bublitz oferece. Café da manhã, almoço, padaria, mercado.", obj: "apresentar a marca para quem ainda não conhece." },
                                        { title: "Arte por refeição", desc: "Um post dedicado para cada momento do dia com preço e horário em destaque (Café, almoço, jantar, padaria).", obj: "educar o cliente sobre quando ir." },
                                        { title: "Destaque de produto específico", desc: "Foto em closeup de um item do cardápio com nome e preço.", obj: "gerar desejo e aumentar ticket médio." },
                                        { title: "Promocional por dia e horário", desc: "Produto ou oferta exclusiva para dias e horários de menor movimento.", obj: "dar motivo para o cliente ir em dias mais fracos." },
                                        { title: "História e posicionamento", desc: "Conteúdo sobre os mais de 40 anos da Bublitz em Blumenau.", obj: "construir autoridade e conexão emocional." },
                                        { title: "Espaço para eventos", desc: "Post mostrando o espaço disponível para reservas.", obj: "ativar uma fonte de receita subutilizada." }
                                    ].map((arte, i) => (
                                        <motion.div key={i} variants={itemVariant} className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800/50 p-6 rounded-2xl flex flex-col">
                                            <div className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-2">Arte {i + 1}</div>
                                            <h3 className="text-xl font-bold text-white mb-3">{arte.title}</h3>
                                            <p className="text-zinc-400 text-sm mb-4 flex-grow">{arte.desc}</p>
                                            <div className="bg-[#D4AF37]/10 backdrop-blur-sm text-[#D4AF37] p-3 rounded-lg text-sm border border-[#D4AF37]/20">
                                                <span className="font-bold">Objetivo:</span> {arte.obj}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* SLIDE 06 — CONTEUDO EM VIDEO */}
                    {currentSlide === 5 && (
                        <motion.div key="s6" initial="hidden" animate="show" exit="hidden" variants={containerVariant} className="slide-container absolute inset-0 flex flex-col items-start justify-center p-12">
                            <div className="w-full max-w-6xl mx-auto">
                                <motion.div variants={itemVariant} className="mb-12">
                                    <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">03 / CONTEÚDO</h2>
                                    <h1 className="text-5xl font-black">Vídeos que geram resultado</h1>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                    {[
                                        { title: "Experiência do cliente", desc: "Mostra um cliente real aproveitando o produto. Funciona muito bem para engajamento e prova social." },
                                        { title: "Público frio", desc: "Vídeo para quem ainda não conhece a Bublitz. Apresenta a marca, o ambiente e o que encontra por aqui." },
                                        { title: "Bastidor e produção", desc: "Mostrar o pão saindo do forno, o preparo do buffet, a vitrine sendo montada. Humaniza a marca e gera conexão." }
                                    ].map((video, i) => (
                                        <motion.div key={i} variants={itemVariant} className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 p-8 rounded-3xl">
                                            <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-black text-xl mb-6">
                                                {i + 1}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-4">{video.title}</h3>
                                            <p className="text-zinc-400 leading-relaxed">{video.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div variants={itemVariant} className="bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/30 p-6 rounded-2xl flex items-center gap-4">
                                    <svg className="w-8 h-8 text-[#D4AF37] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                    <div className="text-[#D4AF37] text-lg">
                                        <strong className="font-bold">Sugestão:</strong> Parceria com produtor de vídeo local para elevar a qualidade do conteúdo.
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {/* SLIDE 07 — REFERENCIAS VISUAIS */}
                    {currentSlide === 6 && (
                        <motion.div key="s-ref" initial="hidden" animate="show" exit="hidden" variants={containerVariant} className="slide-container absolute inset-0 flex flex-col items-start justify-center p-12 pt-24 md:pt-12">
                            <div className="w-full max-w-7xl mx-auto">
                                <motion.div variants={itemVariant} className="mb-8">
                                    <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-2">03 / CONTEÚDO</h2>
                                    <h1 className="text-4xl md:text-5xl font-black">Referências Visuais</h1>
                                    <p className="text-zinc-400 text-lg md:text-xl mt-4 max-w-3xl">Padrão visual focado no produto, gerando desejo imediato com informações claras.</p>
                                </motion.div>

                                <motion.div variants={itemVariant} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <div key={item} className="shrink-0 w-[260px] h-[360px] md:w-[300px] md:h-[420px] bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-zinc-800/50 overflow-hidden relative snap-center group">
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 bg-zinc-900">
                                                <svg className="w-12 h-12 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                <span className="text-sm font-medium opacity-50">/ref{item}.jpg</span>
                                            </div>
                                            <img src={`/ref${item}.jpg`} alt={`Referência ${item}`} className="w-full h-full object-cover relative z-10" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 pointer-events-none" />
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {/* SLIDE 08 — OFERTAS */}
                    {currentSlide === 7 && (
                        <motion.div key="s7" initial="hidden" animate="show" exit="hidden" variants={containerVariant} className="slide-container absolute inset-0 flex flex-col items-start justify-center p-12">
                            <div className="w-full max-w-6xl mx-auto">
                                <motion.div variants={itemVariant} className="mb-12">
                                    <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">04 / OFERTAS</h2>
                                    <h1 className="text-5xl font-black">O que podemos desenvolver juntos</h1>
                                </motion.div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                                    <div className="space-y-6">
                                        {[
                                            { title: "Quarta X", desc: "Oferta exclusiva toda quarta para movimentar o dia mais fraco da semana." },
                                            { title: "Promoção de aniversário", desc: "Benefício para aniversariantes do mês, gera recorrência e fidelização." },
                                            { title: "Domingo especial", desc: "Café da manhã ou almoço diferenciado aos domingos para justificar a visita." },
                                            { title: "Espaço para eventos", desc: "Reserva do espaço para café da manhã corporativo, almoços e confraternizações." },
                                            { title: "Prato executivo", desc: "Opção com preço mais apelativo para atrair cliente novo no almoço." }
                                        ].map((oferta, i) => (
                                            <motion.div key={i} variants={itemVariant} className="border-b border-zinc-800 pb-6">
                                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                                    {oferta.title}
                                                </h3>
                                                <p className="text-zinc-400 pl-5">{oferta.desc}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    
                                    <motion.div variants={itemVariant} className="h-full flex items-center">
                                        <div className="bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/30 p-10 rounded-3xl w-full">
                                            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-6">
                                                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">Pergunta importante:</h3>
                                            <p className="text-white text-xl leading-relaxed">
                                                Já tiveram alguma experiência com promoção ou oferta específica? 
                                                <br /><br />
                                                <span className="text-zinc-400">O que funcionou e o que não funcionou?</span>
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* SLIDE 09 — ENCERRAMENTO */}
                    {currentSlide === 8 && (
                        <motion.div key="s9" initial="hidden" animate="show" exit="hidden" variants={containerVariant} className="slide-container absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                            <div className="w-full max-w-4xl">
                                <motion.div variants={itemVariant} className="text-[#D4AF37] font-bold tracking-widest text-sm mb-6">VAMOS JUNTOS</motion.div>
                                <motion.h1 variants={itemVariant} className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">Obrigado pela<br /><span className="text-[#D4AF37]">confiança</span></motion.h1>
                                
                                <motion.p variants={itemVariant} className="text-2xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-16">
                                    Esse é o início de uma parceria construída com estratégia, dados e muito foco em <strong className="text-white">resultado</strong>.
                                </motion.p>
                                
                                <motion.div variants={itemVariant} className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-8 rounded-2xl inline-block text-left">
                                    <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold mb-4">Qualquer dúvida fora da reunião:</div>
                                    <div className="space-y-2 text-lg">
                                        <div className="text-white font-bold">Daniel Soares</div>
                                        <div className="text-[#D4AF37]">@odanielssoares</div>
                                        <div className="text-zinc-400">dksmarketing.com.br</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                    
                </AnimatePresence>
            </div>
        </div>
    );
}
