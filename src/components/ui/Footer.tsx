import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#05050A] border-t border-white/5 pt-[80px] pb-[40px] relative overflow-hidden font-sans">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[64px] mb-[64px]">

                    {/* Left Column: Nossa Tese */}
                    <div>
                        <h4 className="font-[700] text-[16px] text-white uppercase tracking-[1px] mb-[24px]">Nossa Tese</h4>
                        <ul className="space-y-[16px]">
                            <li>
                                <Link href="/tese/a-dura-realidade" className="text-[#CFCFCF] hover:text-white transition-colors text-[16px]">
                                    A Dura Realidade
                                </Link>
                            </li>
                            <li>
                                <Link href="/tese/o-que-te-venderam" className="text-[#CFCFCF] hover:text-white transition-colors text-[16px]">
                                    O que te venderam
                                </Link>
                            </li>
                            <li>
                                <Link href="/tese/a-alforria-gastronomica" className="text-[#CFCFCF] hover:text-white transition-colors text-[16px]">
                                    A Alforria Gastronômica
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Middle Column: Consultoria & CTA */}
                    <div>
                        <h4 className="font-[700] text-[16px] text-white uppercase tracking-[1px] mb-[24px]">Consultoria</h4>
                        <ul className="space-y-[16px] mb-[32px]">
                            <li>
                                <Link href="/consultoria/o-sistema-dks" className="text-[#CFCFCF] hover:text-white transition-colors text-[16px]">
                                    O Sistema DKS
                                </Link>
                            </li>
                            <li>
                                <Link href="/consultoria/nossa-especializacao" className="text-[#CFCFCF] hover:text-white transition-colors text-[16px]">
                                    Nossa Especialização
                                </Link>
                            </li>
                            <li>
                                <Link href="/consultoria/as-fases-do-projeto" className="text-[#CFCFCF] hover:text-white transition-colors text-[16px]">
                                    As Fases do Projeto
                                </Link>
                            </li>
                        </ul>

                        {/* Green Diagonal CTA Button */}
                        <a
                            href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-[12px] bg-[#22C55E] text-white font-[700] uppercase tracking-[1.5px] text-[13px] px-[24px] py-[16px] rounded-[8px] hover:bg-[#16a34a] transition-colors shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                        >
                            AGENDAR DIAGNÓSTICO
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>

                    {/* Right Column: Brand / Social (Optional adjustments for the new clean layout) */}
                    <div className="flex flex-col items-start lg:items-end">
                        <Link href="/" className="font-[900] text-[40px] tracking-[-2px] text-white mb-[16px] leading-none">
                            DKS<span className="text-[#F2B705]">.</span>
                        </Link>
                        <p className="text-[#8F8F8F] text-[14px] lg:text-right max-w-[250px] leading-[1.6]">
                            Assessoria de marketing focada exclusivamente em alavancar o faturamento de restaurantes e deliveries.
                        </p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-[32px] flex flex-col md:flex-row justify-between items-center gap-[16px]">
                    <p className="text-[#8F8F8F] text-[14px]">
                        &copy; {new Date().getFullYear()} DKS Marketing. CNPJ: 50.840.485/0001-92. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-[24px] text-[14px] text-[#8F8F8F]">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Termos</a>
                        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
