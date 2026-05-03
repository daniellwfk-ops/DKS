"use client";

import React, { useState, useEffect, useRef } from 'react';

// Tipos base para o estado dos slides
type DiagnosticState = {
    [slideId: string]: {
        textFields: { [key: string]: string };
        checkboxes: { [key: string]: boolean };
    }
};

const INITIAL_STATE: DiagnosticState = {
    s1: { textFields: { clientName: '' }, checkboxes: {} },
    s2: { textFields: { gmnObs: '' }, checkboxes: { c1: false, c2: false, c3: false, c4: false, c5: false, c6: false, c7: false, c8: false, c9: false, c10: false } },
    s3: { textFields: { avaliacaoNota: '', avaliacaoTotal: '', avaliacaoPlano: '' }, checkboxes: { c1: false, c2: false, c3: false, c4: false } },
    s4: { textFields: { faqSugestoes: '' }, checkboxes: { c1: false, c2: false, c3: false, c4: false } },
    s5: { textFields: { conteudoPlano: '' }, checkboxes: { c1: false, c2: false, c3: false, c4: false, c5: false } },
    s6: { textFields: { rankingPalavras: '', rankingArp: '', rankingAtrp: '', rankingSolv: '', rankingAnalise: '' }, checkboxes: {} },
    s7: { textFields: { instaObs: '' }, checkboxes: { c1: false, c2: false, c3: false, c4: false, c5: false, c6: false, c7: false, c8: false } },
    s8: { textFields: { metaAdsVerba: '', metaAdsPlano: '' }, checkboxes: { c1: false, c2: false, c3: false, c4: false, c5: false, c6: false, c7: false } },
    s9: { textFields: { googleAdsPlano: '' }, checkboxes: { c1: false, c2: false, c3: false, c4: false, c5: false } },
    s10: { textFields: { planoImediato: '', plano30: '', plano90: '' }, checkboxes: {} },
};

const TOTAL_SLIDES = 10;

const DiagnosticContext = React.createContext<{
    state: DiagnosticState;
    handleTextChange: (slideId: string, fieldId: string, value: string) => void;
    handleCheckboxChange: (slideId: string, checkboxId: string) => void;
} | null>(null);

const CheckboxItem = ({ slideId, id, label }: { slideId: string, id: string, label: string }) => {
    const ctx = React.useContext(DiagnosticContext);
    if (!ctx) return null;
    const { state, handleCheckboxChange } = ctx;
    return (
        <label className="flex items-start gap-4 cursor-pointer group mb-3" onClick={() => handleCheckboxChange(slideId, id)}>
            <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-colors ${state[slideId].checkboxes[id] ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-zinc-600 bg-zinc-900 group-hover:border-[#D4AF37]'}`}>
                {state[slideId].checkboxes[id] && (
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
            <span className={`text-lg transition-colors ${state[slideId].checkboxes[id] ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-300'}`}>{label}</span>
        </label>
    );
};

const EditableText = ({ slideId, id, placeholder, multiline = false, className = "" }: { slideId: string, id: string, placeholder: string, multiline?: boolean, className?: string }) => {
    const ctx = React.useContext(DiagnosticContext);
    if (!ctx) return null;
    const { state, handleTextChange } = ctx;
    const value = state[slideId].textFields[id] || '';
    if (multiline) {
        return (
            <textarea
                value={value}
                onChange={(e) => handleTextChange(slideId, id, e.target.value)}
                placeholder={placeholder}
                className={`w-full bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] resize-none transition-colors ${className}`}
                rows={5}
            />
        );
    }
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => handleTextChange(slideId, id, e.target.value)}
            placeholder={placeholder}
            className={`bg-transparent border-b border-zinc-700 pb-1 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-colors w-full ${className}`}
        />
    );
};

export default function DiagnosticoPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [state, setState] = useState<DiagnosticState>(INITIAL_STATE);
    const containerRef = useRef<HTMLDivElement>(null);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Don't navigate if user is typing in an input or textarea
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

    // Handlers for state updates
    const handleTextChange = (slideId: string, fieldId: string, value: string) => {
        setState(prev => ({
            ...prev,
            [slideId]: {
                ...prev[slideId],
                textFields: { ...prev[slideId].textFields, [fieldId]: value }
            }
        }));
    };

    const handleCheckboxChange = (slideId: string, checkboxId: string) => {
        setState(prev => ({
            ...prev,
            [slideId]: {
                ...prev[slideId],
                checkboxes: { ...prev[slideId].checkboxes, [checkboxId]: !prev[slideId].checkboxes[checkboxId] }
            }
        }));
    };

    const handlePrint = () => {
        window.print();
    };

    // UI Components are moved to context

    return (
        <DiagnosticContext.Provider value={{ state, handleTextChange, handleCheckboxChange }}>
        <div className="min-h-screen bg-[#030303] text-white font-sans overflow-hidden print:overflow-visible print:bg-black" ref={containerRef}>

            {/* Estilos Globais de Impressão (PDF) */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media print {
          html, body { background: #030303 !important; color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .slide-container { display: block !important; opacity: 1 !important; position: static !important; transform: none !important; margin: 0 !important; width: 100vw !important; height: 100vh !important; page-break-after: always; break-after: page; }
          textarea { resize: none !important; overflow: hidden !important; }
        }
      `}} />

            {/* Navegação Top/Bottom (Não Imprime) */}
            <div className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 no-print">
                <div className="text-[#D4AF37] font-bold tracking-widest text-sm">DKS MARKETING</div>
                <button onClick={handlePrint} className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded text-sm transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                    Exportar Diagnóstico
                </button>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-6 flex justify-between items-center z-50 no-print pointer-events-none">
                <div className="text-zinc-500 font-mono text-sm pointer-events-auto">
                    {String(currentSlide + 1).padStart(2, '0')} / {TOTAL_SLIDES}
                </div>
                <div className="flex gap-4 pointer-events-auto">
                    <button onClick={() => setCurrentSlide(p => Math.max(p - 1, 0))} disabled={currentSlide === 0} className={`w-10 h-10 rounded-full flex items-center justify-center border ${currentSlide === 0 ? 'border-zinc-800 text-zinc-700' : 'border-zinc-600 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]'} transition-colors`}>←</button>
                    <button onClick={() => setCurrentSlide(p => Math.min(p + 1, TOTAL_SLIDES - 1))} disabled={currentSlide === TOTAL_SLIDES - 1} className={`w-10 h-10 rounded-full flex items-center justify-center border ${currentSlide === TOTAL_SLIDES - 1 ? 'border-zinc-800 text-zinc-700' : 'border-zinc-600 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]'} transition-colors`}>→</button>
                </div>
            </div>

            {/* Renderização condicional dos Slides */}
            <div className="w-full h-screen relative print:block">

                {/* --- SLIDE 1 --- */}
                <div className={`slide-container absolute inset-0 flex flex-col items-center justify-center p-12 transition-all duration-500 ${currentSlide === 0 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none invisible'}`}>
                    <div className="w-full max-w-4xl text-center">
                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">Diagnóstico<br /><span className="text-[#D4AF37]">Digital DKS</span></h1>
                        <div className="max-w-2xl mx-auto space-y-8">
                            <EditableText slideId="s1" id="clientName" placeholder="[Nome do Cliente / Restaurante]" className="text-2xl text-center border-b-2 font-medium" />
                            <div className="text-zinc-500 uppercase tracking-widest font-medium">
                                {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SLIDE 2 --- */}
                <div className={`slide-container absolute inset-0 flex flex-col items-start justify-center p-12 transition-all duration-500 ${currentSlide === 1 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none invisible'}`}>
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">MÓDULO 01</h2>
                            <h1 className="text-5xl font-black">Google Meu Negócio</h1>
                            <p className="text-zinc-400 mt-4 text-xl">A principal porta de entrada orgânica do seu restaurante na cidade.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-sm">1</span>
                                    Auditoria de Perfil
                                </h3>
                                <div className="space-y-1">
                                    <CheckboxItem slideId="s2" id="c1" label="Nome otimizado com palavras-chave" />
                                    <CheckboxItem slideId="s2" id="c2" label="Categoria principal correta" />
                                    <CheckboxItem slideId="s2" id="c3" label="Categorias secundárias completas" />
                                    <CheckboxItem slideId="s2" id="c4" label="Descrição própria com palavras-chave" />
                                    <CheckboxItem slideId="s2" id="c5" label="Fotos recentes do proprietário" />
                                    <CheckboxItem slideId="s2" id="c6" label="Atualizações do proprietário ativas" />
                                    <CheckboxItem slideId="s2" id="c7" label="Menu cadastrado corretamente" />
                                    <CheckboxItem slideId="s2" id="c8" label="Produtos com descrição estratégica" />
                                    <CheckboxItem slideId="s2" id="c9" label="Perguntas e Respostas estratégicas" />
                                    <CheckboxItem slideId="s2" id="c10" label="Avaliações respondidas" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-sm">2</span>
                                    Observações e Diagnóstico
                                </h3>
                                <EditableText slideId="s2" id="gmnObs" placeholder="Insira aqui as observações detalhadas sobre o estado atual do perfil..." multiline={true} className="h-64" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SLIDE 3 --- */}
                <div className={`slide-container absolute inset-0 flex flex-col items-start justify-center p-12 transition-all duration-500 ${currentSlide === 2 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none invisible'}`}>
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">MÓDULO 02</h2>
                            <h1 className="text-5xl font-black">Avaliações e Prova Social</h1>
                            <p className="text-zinc-400 mt-4 text-xl">O que os clientes estão falando sobre a experiência quando saem da sua porta.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 lg:col-span-1 flex flex-col justify-center">
                                <div className="mb-6">
                                    <div className="text-sm text-zinc-500 uppercase tracking-widest mb-2">Nota Atual</div>
                                    <EditableText slideId="s3" id="avaliacaoNota" placeholder="Ex: 4.8" className="text-6xl font-black text-[#D4AF37] border-b-0" />
                                </div>
                                <div className="mb-6">
                                    <div className="text-sm text-zinc-500 uppercase tracking-widest mb-2">Total de Avaliações</div>
                                    <EditableText slideId="s3" id="avaliacaoTotal" placeholder="150" className="text-3xl font-bold border-b-0" />
                                </div>
                                <div className="pt-6 border-t border-zinc-800">
                                    <div className="text-sm text-zinc-500 uppercase tracking-widest mb-2">Meta Ideal</div>
                                    <div className="text-2xl font-bold text-green-500">4.5+</div>
                                </div>
                            </div>

                            <div className="lg:col-span-1">
                                <h3 className="text-2xl font-bold mb-6 text-white border-b border-zinc-800 pb-4">Checklist de Gestão</h3>
                                <div className="space-y-4 mt-8">
                                    <CheckboxItem slideId="s3" id="c1" label="Responde avaliações positivas" />
                                    <CheckboxItem slideId="s3" id="c2" label="Responde avaliações negativas de forma estratégica" />
                                    <CheckboxItem slideId="s3" id="c3" label="Incentiva clientes a avaliar no presencial" />
                                    <CheckboxItem slideId="s3" id="c4" label="Possui placa/QR Code para avaliação na mesa" />
                                </div>
                            </div>

                            <div className="lg:col-span-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-6 text-white border-b border-zinc-800 pb-4">Plano de Ação</h3>
                                <EditableText slideId="s3" id="avaliacaoPlano" placeholder="O que o restaurante precisa fazer para melhorar a captação e resposta de avaliações..." multiline={true} className="flex-grow mt-2" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SLIDE 4 --- */}
                <div className={`slide-container absolute inset-0 flex flex-col items-start justify-center p-12 transition-all duration-500 ${currentSlide === 3 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none invisible'}`}>
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">MÓDULO 03</h2>
                            <h1 className="text-5xl font-black">Perguntas & Respostas (FAQ)</h1>
                            <p className="text-zinc-400 mt-4 text-xl">Como o seu restaurante responde às dúvidas antes mesmo do cliente perguntar no Google.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-sm">1</span>
                                    Análise do FAQ Atual
                                </h3>
                                <div className="space-y-4">
                                    <CheckboxItem slideId="s4" id="c1" label="Possui perguntas frequentes cadastradas" />
                                    <CheckboxItem slideId="s4" id="c2" label="Perguntas criadas pelo próprio proprietário" />
                                    <CheckboxItem slideId="s4" id="c3" label="Respostas formatadas com palavras-chave locais" />
                                    <CheckboxItem slideId="s4" id="c4" label="Aborda temas críticos: horário, pet friendly, kids, delivery, estacionamento" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-sm">2</span>
                                    Sugestões de Perguntas Estratégicas
                                </h3>
                                <EditableText slideId="s4" id="faqSugestoes" placeholder="1. Vocês têm espaço kids com monitor?\n2. O restaurante é pet friendly?\n3. Tem estacionamento no local ou convênio?\n4. Até que horas o delivery funciona?" multiline={true} className="h-64" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SLIDE 5 --- */}
                <div className={`slide-container absolute inset-0 flex flex-col items-start justify-center p-12 transition-all duration-500 ${currentSlide === 4 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none invisible'}`}>
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">MÓDULO 04</h2>
                            <h1 className="text-5xl font-black">Conteúdo e Atualizações</h1>
                            <p className="text-zinc-400 mt-4 text-xl">A frequência e qualidade visual mostram para o algoritmo que o restaurante está vivo.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-sm">1</span>
                                    Auditoria de Conteúdo
                                </h3>
                                <div className="space-y-4">
                                    <CheckboxItem slideId="s5" id="c1" label="Posta fotos de pratos/ambiente semanalmente" />
                                    <CheckboxItem slideId="s5" id="c2" label="Aba 'Atualizações' mantida ativa (Ofertas/Eventos)" />
                                    <CheckboxItem slideId="s5" id="c3" label="Utiliza fotos com estética profissional e bem iluminadas" />
                                    <CheckboxItem slideId="s5" id="c4" label="Utiliza vídeos curtos (tour do ambiente/pratos saindo)" />
                                    <CheckboxItem slideId="s5" id="c5" label="Produtos em destaque atualizados na aba 'Menu'" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-sm">2</span>
                                    Plano de Conteúdo Recomendado
                                </h3>
                                <EditableText slideId="s5" id="conteudoPlano" placeholder="Sessão de fotos mensal focada no cardápio noturno e drinks. Atualizar aba de ofertas toda quinta-feira com promoção de happy hour..." multiline={true} className="h-64" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SLIDE 6 --- */}
                <div className={`slide-container absolute inset-0 flex flex-col items-start justify-center p-12 transition-all duration-500 ${currentSlide === 5 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none invisible'}`}>
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">MÓDULO 05</h2>
                            <h1 className="text-5xl font-black">Posicionamento no Ranking</h1>
                            <p className="text-zinc-400 mt-4 text-xl">Como a concorrência se comporta e onde a marca se encontra nas buscas de mapa.</p>
                        </div>

                        <div className="mb-8">
                            <div className="text-sm text-zinc-500 uppercase tracking-widest mb-2 font-bold">Palavras-Chave Monitoradas</div>
                            <EditableText slideId="s6" id="rankingPalavras" placeholder="Ex: 'pizzaria perto de mim', 'restaurante italiano', 'pizza de fermentação natural'" className="text-2xl text-[#D4AF37] w-full border-b border-zinc-700 pb-2 bg-transparent focus:outline-none focus:border-[#D4AF37]" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                                <div className="text-xs text-zinc-500 uppercase tracking-widest mb-2" title="Average Rank Position">ARP (Posição Média)</div>
                                <EditableText slideId="s6" id="rankingArp" placeholder="3.4" className="text-4xl font-bold bg-transparent border-none w-full focus:outline-none" />
                            </div>
                            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                                <div className="text-xs text-zinc-500 uppercase tracking-widest mb-2" title="Average Top Rank Position">ATRP (Posição Top Média)</div>
                                <EditableText slideId="s6" id="rankingAtrp" placeholder="1.2" className="text-4xl font-bold bg-transparent border-none w-full focus:outline-none" />
                            </div>
                            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                                <div className="text-xs text-zinc-500 uppercase tracking-widest mb-2" title="Share of Local Voice">SoLV (Voz Local)</div>
                                <EditableText slideId="s6" id="rankingSolv" placeholder="18%" className="text-4xl font-bold bg-transparent border-none w-full focus:outline-none" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4">Análise Estratégica Competitiva</h3>
                            <EditableText slideId="s6" id="rankingAnalise" placeholder="Nas bordas do bairro o concorrente X está roubando clientes buscando por 'jantar de casal'. Precisamos forçar check-ins de clientes nessas áreas específicas para expandir o raio verde do grid de SEO." multiline={true} className="h-40" />
                        </div>
                    </div>
                </div>

                {/* --- SLIDE 7 --- */}
                <div className={`slide-container absolute inset-0 flex flex-col items-start justify-center p-12 transition-all duration-500 ${currentSlide === 6 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none invisible'}`}>
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">MÓDULO 06</h2>
                            <h1 className="text-5xl font-black">Visão Instagram</h1>
                            <p className="text-zinc-400 mt-4 text-xl">A vitrine emocional da sua marca onde os clientes decidem se você merece o desejo de consumo deles.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-sm">1</span>
                                    Checklist de Estrutura
                                </h3>
                                <div className="space-y-2">
                                    <CheckboxItem slideId="s7" id="c1" label="Nome do perfil otimizado para a cidade" />
                                    <CheckboxItem slideId="s7" id="c2" label="Bio estratégica (proposta clara e chamada de ação)" />
                                    <CheckboxItem slideId="s7" id="c3" label="Link da bio estruturado (Cardápio, Reservas, Ifood)" />
                                    <CheckboxItem slideId="s7" id="c4" label="Botões de ação configurados (Contato/Endereço)" />
                                    <CheckboxItem slideId="s7" id="c5" label="Destaques estratégicos (Menu, Ambiente, Depoimentos)" />
                                    <CheckboxItem slideId="s7" id="c6" label="Feed fixado com informações primordiais" />
                                    <CheckboxItem slideId="s7" id="c7" label="Legendas focadas em gerar vontade + CTA" />
                                    <CheckboxItem slideId="s7" id="c8" label="Reels compartilhados com páginas locais/creators" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-sm">2</span>
                                    Observações da Vitrine
                                </h3>
                                <EditableText slideId="s7" id="instaObs" placeholder="Perfil atualmente parece um catálogo frio, falta mostrar pessoas consumindo, ambiente lotado e a preparação do produto. Bio não deixa claro em que bairro fica ou o diferencial principal..." multiline={true} className="h-[28rem]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SLIDE 8 --- */}
                <div className={`slide-container absolute inset-0 flex flex-col items-start justify-center p-12 transition-all duration-500 ${currentSlide === 7 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none invisible'}`}>
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">MÓDULO 07</h2>
                            <h1 className="text-5xl font-black">Máquina: Meta Ads</h1>
                            <p className="text-zinc-400 mt-4 text-xl">Como você está atacando no Instagram/Facebook quem tem fome ou deseja confraternizar hoje.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-sm">1</span>
                                    Estratégia de Campanhas
                                </h3>
                                <div className="space-y-3 mb-8">
                                    <CheckboxItem slideId="s8" id="c1" label="Estratégia de funil sendo aplicada" />
                                    <CheckboxItem slideId="s8" id="c2" label="Campanhas separadas por objetivo (WhatsApp, Ifood, Engajamento)" />
                                    <CheckboxItem slideId="s8" id="c3" label="Campanha ativa para público Frio (Local/Raio)" />
                                    <CheckboxItem slideId="s8" id="c4" label="Campanha ativa para público Morno (Interagiram)" />
                                    <CheckboxItem slideId="s8" id="c5" label="Remarketing agressivo" />
                                    <CheckboxItem slideId="s8" id="c6" label="Rotação e variedade de criativos" />
                                    <CheckboxItem slideId="s8" id="c7" label="Métricas (CPM, CTR, CPA) acompanhadas e ajustadas" />
                                </div>
                                <div className="bg-zinc-900/40 p-5 rounded-lg border border-zinc-800 flex items-center gap-4">
                                    <div className="text-sm font-bold uppercase text-zinc-500 w-32 shrink-0">Investimento Mensal Atual</div>
                                    <EditableText slideId="s8" id="metaAdsVerba" placeholder="R$ 1.200" className="text-2xl text-[#D4AF37] border-none !w-auto focus:outline-none" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-sm">2</span>
                                    Plano de Melhoria de Tráfego
                                </h3>
                                <EditableText slideId="s8" id="metaAdsPlano" placeholder="Campanhas rodando num único conjunto. Precisamos segmentar as campanhas de almoço (focadas em raio de 2km do ponto físico) das campanhas do jantar/delivery (raio maior de 6km para motoboys). Aumentar a verba para horários nobres..." multiline={true} className="flex-grow h-full min-h-[16rem]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SLIDE 9 --- */}
                <div className={`slide-container absolute inset-0 flex flex-col items-start justify-center p-12 transition-all duration-500 ${currentSlide === 8 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none invisible'}`}>
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">MÓDULO 08</h2>
                            <h1 className="text-5xl font-black">Rede de Pesquisa: Google Ads</h1>
                            <p className="text-zinc-400 mt-4 text-xl">Capturando a intenção pura: quem pesquisa &quot;onde comer agora&quot; tem cartão na mão.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-sm">1</span>
                                    Avaliação Técnica
                                </h3>
                                <div className="space-y-4">
                                    <CheckboxItem slideId="s9" id="c1" label="Campanha de Pesquisa local estruturada e ativa" />
                                    <CheckboxItem slideId="s9" id="c2" label="Palavras-chave de fundo de funil isoladas" />
                                    <CheckboxItem slideId="s9" id="c3" label="Extensões (Sitelink, Chamada, Local, Frase) configuradas" />
                                    <CheckboxItem slideId="s9" id="c4" label="Acompanhamento de conversões instaladas no site/link" />
                                    <CheckboxItem slideId="s9" id="c5" label="Remarketing ativado na rede display/youtube" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center text-sm">2</span>
                                    Plano Estratégico do Google
                                </h3>
                                <EditableText slideId="s9" id="googleAdsPlano" placeholder="Restaurante está 100% dependente do iFood. Ligar campanha com lance agressivo +25% de conversão na frase exata 'Temakeria aberta agora' entre 19h e 23h..." multiline={true} className="flex-grow h-full min-h-[20rem]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SLIDE 10 --- */}
                <div className={`slide-container absolute inset-0 flex flex-col items-start justify-center p-12 transition-all duration-500 ${currentSlide === 9 ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0 pointer-events-none invisible'}`}>
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">ETAPA FINAL</h2>
                            <h1 className="text-5xl font-black">Plano de Ação</h1>
                            <p className="text-zinc-400 mt-4 text-xl">O que precisa ser feito para blindar o salão e escalar o delivery.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
                            <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-2xl p-8 flex flex-col">
                                <h3 className="text-2xl font-bold mb-6 text-[#D4AF37] flex items-center gap-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    Prioridades Imediatas
                                </h3>
                                <EditableText slideId="s10" id="planoImediato" placeholder="1. Arrumar link da Bio do Instagram\n2. Responder todas as avaliações no Google Meu Negócio\n3. Ligar campanha de remarketing para iFood\n..." multiline={true} className="flex-grow h-full min-h-[24rem]" />
                            </div>

                            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col">
                                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                    <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    Ações 30 dias
                                </h3>
                                <EditableText slideId="s10" id="plano30" placeholder="1. Padronizar todas as fotos do cardápio...\n2. Iniciar criação de CRM presencial via QR Code...\n3. Refazer estratégia de conteúdos Reels..." multiline={true} className="flex-grow h-full min-h-[24rem]" />
                            </div>

                            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col">
                                <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                    <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                    Ações 90 dias
                                </h3>
                                <EditableText slideId="s10" id="plano90" placeholder="1. Estruturação avançada de Tráfego Pago Frio e Morno...\n2. Automação de WhatsApp para aniversariantes...\n3. Dobrar captura de avaliações 5 estrelas mensalmente..." multiline={true} className="flex-grow h-full min-h-[24rem]" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </DiagnosticContext.Provider>
    );
}
