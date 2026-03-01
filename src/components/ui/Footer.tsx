import Link from "next/link";

const navLinks = [
    { label: "Início", href: "/" },
];

const socialLinks = [
    {
        label: "Instagram",
        href: "https://instagram.com/dksmarketing",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/5511999999999",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/company/dksmarketing",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#000] border-t border-white/5 pt-20 pb-10 overflow-hidden">
            {/* Gold glow top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[80px] bg-[#D4AF37]/4 blur-[50px] pointer-events-none rounded-full" />

            <div className="max-w-6xl mx-auto px-6">
                {/* Top CTA banner */}
                <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#050500] px-8 py-10 mb-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6"
                    style={{ background: "linear-gradient(135deg, #060500 0%, #020200 100%)" }}>
                    <div>
                        <p className="text-white font-black text-2xl md:text-3xl mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                            Pronto para escalar seu restaurante?
                        </p>
                        <p className="text-[#888] text-sm">Fale com um especialista e descubra o que está travando seu faturamento.</p>
                    </div>
                    <a
                        href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-block bg-[#00CC00] text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded hover:bg-[#00B300] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,204,0,0.25)]"
                    >
                        Agendar Diagnóstico Gratuito →
                    </a>
                </div>

                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <a href="/" className="inline-block font-black text-4xl tracking-tighter text-white mb-4">
                            DKS<span className="text-[#D4AF37]">.</span>
                        </a>
                        <p className="text-[#666] text-sm leading-relaxed mb-6 max-w-xs">
                            Assessoria de marketing especializada em restaurantes. Método estruturado para atrair, reter e escalar faturamento.
                        </p>
                        {/* Social */}
                        <div className="flex gap-3">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-white/8 flex items-center justify-center text-[#666] hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Navegação</h4>
                        <ul className="space-y-3">
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="text-[#666] text-sm hover:text-[#D4AF37] transition-colors duration-200"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Contato</h4>
                        <ul className="space-y-3 text-sm text-[#666]">
                            <li className="flex items-start gap-2">
                                <span className="text-[#D4AF37] mt-0.5">✉</span>
                                <a href="mailto:contato@dksmarketing.com.br" className="hover:text-[#D4AF37] transition-colors">
                                    contato@dksmarketing.com.br
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#D4AF37] mt-0.5">📍</span>
                                <span>Brasil — Atendimento nacional</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#D4AF37] mt-0.5">⏰</span>
                                <span>Seg–Sex, 9h às 18h</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#444]">
                    <p>© {year} Agência DKS Marketing. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-[#D4AF37] transition-colors">Política de Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
