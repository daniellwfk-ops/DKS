export default function Footer() {
    return (
        <footer className="bg-[#030610] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[100px] bg-[#E50914]/5 blur-[80px] pointer-events-none rounded-full"></div>

            <div className="container mx-auto px-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-1 lg:col-span-2">
                        <a href="#inicio" className="font-heading font-black text-4xl tracking-tighter text-white mb-6 block">
                            DKS<span className="text-[#E50914]">.</span>
                        </a>
                        <p className="text-gray-400 font-body text-lg max-w-md mb-8">
                            Assessoria brutalmente prática para restaurantes e deliveries. Método provado para atrair, reter e lucrar mais dinheiro todos os dias.
                        </p>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="w-12 h-12 rounded-full bg-[#0A0D18] border border-white/10 flex items-center justify-center text-white hover:bg-[#E50914] hover:border-[#E50914] transition-all transform hover:-translate-y-1">
                                <i className="ph-fill ph-instagram-logo text-2xl"></i>
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-[#0A0D18] border border-white/10 flex items-center justify-center text-white hover:bg-[#E50914] hover:border-[#E50914] transition-all transform hover:-translate-y-1">
                                <i className="ph-fill ph-facebook-logo text-2xl"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-sub font-bold text-white uppercase tracking-wider mb-8">Nossa Tese</h4>
                        <ul className="space-y-4">
                            <li><a href="#dor" className="text-gray-400 hover:text-white transition-colors font-medium">A Dura Realidade</a></li>
                            <li><a href="#crenca" className="text-gray-400 hover:text-white transition-colors font-medium">O que te venderam</a></li>
                            <li><a href="#big-idea" className="text-gray-400 hover:text-white transition-colors font-medium">A Alforria Gastronômica</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-sub font-bold text-white uppercase tracking-wider mb-8">Consultoria</h4>
                        <ul className="space-y-4">
                            <li><a href="#solucao" className="text-gray-400 hover:text-white transition-colors font-medium">O Sistema DKS</a></li>
                            <li><a href="#credibilidade" className="text-gray-400 hover:text-white transition-colors font-medium">Nossa Especialização</a></li>
                            <li><a href="#oferta" className="text-gray-400 hover:text-white transition-colors font-medium">As Fases do Projeto</a></li>

                            {/* Compact CTA S9 */}
                            <li className="pt-2">
                                <a href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1DB954] text-black font-bold uppercase tracking-widest text-xs px-4 py-2 rounded hover:bg-[#1ed760] transition-colors">
                                    AGENDAR DIAGNÓSTICO →
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Agência DKS Marketing. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
