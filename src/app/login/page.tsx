"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        const res = await signIn("credentials", { email, password, redirect: false });
        setLoading(false);

        if (res?.error) {
            setError("E-mail ou senha incorretos.");
            return;
        }

        const sessionRes = await fetch("/api/auth/session");
        const session = await sessionRes.json();
        const role = session?.user?.role;

        if (role === "ADMIN") router.push("/admin");
        else router.push("/portal");
    }

    return (
        <div
            className="min-h-screen bg-black flex overflow-hidden"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
            {/* ── Left Panel ─────────────────────────────────────── */}
            <div className="hidden lg:flex flex-col justify-between w-[52%] relative overflow-hidden p-12">

                {/* Background layers */}
                <div className="absolute inset-0 bg-[#000]" />
                <div className="absolute inset-0"
                    style={{ background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(212,175,55,0.12) 0%, transparent 70%)" }} />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }} />

                {/* Glowing orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />

                {/* Content */}
                <div className="relative z-10">
                    <Link href="/" className="font-black text-3xl tracking-tighter text-white inline-block">
                        DKS<span className="text-[#D4AF37]">.</span>
                    </Link>
                </div>

                <div className="relative z-10 max-w-sm">
                    <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-2 mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">Área Exclusiva</span>
                    </div>

                    <h1
                        className="text-5xl font-black text-white leading-[1.05] mb-6 tracking-tight"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        Seu painel<br />
                        <span className="text-[#D4AF37]">inteligente</span><br />
                        de marketing.
                    </h1>

                    <p className="text-[#555] text-base leading-relaxed mb-10">
                        Acesse relatórios, ferramentas exclusivas e acompanhe o crescimento do seu restaurante em tempo real.
                    </p>

                    {/* Social proof */}
                    <div className="flex flex-col gap-3">
                        {[
                            { icon: "📊", text: "Relatórios de performance em tempo real" },
                            { icon: "🎥", text: "Gerenciador de Lives do Instagram" },
                            { icon: "📋", text: "Propostas e ferramentas exclusivas" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-sm flex-shrink-0">
                                    {item.icon}
                                </div>
                                <span className="text-[#666] text-sm">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10">
                    <p className="text-[#333] text-xs">
                        © {new Date().getFullYear()} DKS Marketing. Todos os direitos reservados.
                    </p>
                </div>
            </div>

            {/* ── Right Panel ─────────────────────────────────────── */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 relative">

                {/* Mobile logo */}
                <div className="lg:hidden mb-10 text-center">
                    <Link href="/" className="font-black text-3xl tracking-tighter text-white inline-block">
                        DKS<span className="text-[#D4AF37]">.</span>
                    </Link>
                    <p className="text-[#555] text-xs mt-1">Área exclusiva para clientes</p>
                </div>

                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212,175,55,0.05) 0%, transparent 70%)" }} />

                {/* Separator line (desktop) */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px"
                    style={{ background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.15), transparent)" }} />

                {/* Form card */}
                <div className="w-full max-w-sm relative z-10">

                    <div className="mb-8">
                        <h2
                            className="text-2xl font-black text-white mb-1"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            Entrar na conta
                        </h2>
                        <p className="text-[#555] text-sm">
                            Insira suas credenciais de acesso abaixo.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Email */}
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-[#666] mb-2">
                                E-mail
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#444] group-focus-within:text-[#D4AF37] transition-colors">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="seu@email.com"
                                    className="w-full bg-[#0a0a0a] border border-white/8 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder:text-[#333] focus:outline-none focus:border-[#D4AF37]/50 focus:bg-[#0d0d00] transition-all text-sm"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-[#666] mb-2">
                                Senha
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#444] group-focus-within:text-[#D4AF37] transition-colors">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </div>
                                <input
                                    type={showPass ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="••••••••••"
                                    className="w-full bg-[#0a0a0a] border border-white/8 rounded-xl pl-11 pr-12 py-3.5 text-white placeholder:text-[#333] focus:outline-none focus:border-[#D4AF37]/50 focus:bg-[#0d0d00] transition-all text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#444] hover:text-[#888] transition-colors"
                                >
                                    {showPass ? (
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </svg>
                                    ) : (
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="flex items-center gap-3 bg-red-500/8 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                {error}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="relative w-full overflow-hidden font-black text-sm uppercase tracking-[0.15em] py-4 rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed group"
                            style={{ background: loading ? "#8a7020" : "#D4AF37", color: "#000" }}
                        >
                            {/* Shine effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {loading ? (
                                    <>
                                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                        </svg>
                                        Entrando...
                                    </>
                                ) : (
                                    <>
                                        Entrar
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </>
                                )}
                            </span>
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-white/5" />
                        <span className="text-[#333] text-xs">ou</span>
                        <div className="flex-1 h-px bg-white/5" />
                    </div>

                    <p className="text-center text-[#444] text-sm">
                        Não tem conta?{" "}
                        <Link href="/cadastro" className="text-[#D4AF37] hover:text-[#C9A42E] font-bold transition-colors">
                            Cadastre-se
                        </Link>
                    </p>

                    {/* Back to site */}
                    <div className="mt-8 text-center">
                        <Link href="/" className="inline-flex items-center gap-1.5 text-[#333] hover:text-[#555] text-xs transition-colors">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 5l-7 7 7 7" />
                            </svg>
                            Voltar ao site
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
