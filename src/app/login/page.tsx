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

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        setLoading(false);

        if (res?.error) {
            setError("E-mail ou senha incorretos.");
            return;
        }

        // Redirect based on role — fetch session to check
        const sessionRes = await fetch("/api/auth/session");
        const session = await sessionRes.json();
        const role = session?.user?.role;

        if (role === "ADMIN") {
            router.push("/admin");
        } else {
            router.push("/portal");
        }
    }

    return (
        <div
            className="min-h-screen bg-[#000] flex items-center justify-center px-4"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none" />

            <div className="w-full max-w-md relative">
                {/* Logo */}
                <div className="text-center mb-10">
                    <Link href="/" className="inline-block">
                        <span className="font-black text-4xl tracking-tighter text-white">
                            DKS<span className="text-[#D4AF37]">.</span>
                        </span>
                    </Link>
                    <p className="text-[#666] text-sm mt-2">Área exclusiva para clientes</p>
                </div>

                {/* Card */}
                <div
                    className="rounded-2xl border border-white/8 p-8 md:p-10"
                    style={{ background: "linear-gradient(135deg, #080808 0%, #030303 100%)" }}
                >
                    <h1
                        className="text-2xl font-black text-white mb-1"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        Entrar
                    </h1>
                    <p className="text-[#666] text-sm mb-8">
                        Acesse sua conta para ver relatórios e atualizações.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[#888] mb-2">
                                E-mail
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="seu@email.com"
                                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#444] focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[#888] mb-2">
                                Senha
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#444] focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#D4AF37] text-black font-black text-sm uppercase tracking-widest py-4 rounded-xl hover:bg-[#C9A42E] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Entrando..." : "Entrar"}
                        </button>
                    </form>

                    <p className="text-center text-[#555] text-sm mt-6">
                        Não tem conta?{" "}
                        <Link href="/cadastro" className="text-[#D4AF37] hover:underline font-medium">
                            Cadastre-se
                        </Link>
                    </p>
                </div>

                <p className="text-center text-[#333] text-xs mt-6">
                    © {new Date().getFullYear()} DKS Marketing. Todos os direitos reservados.
                </p>
            </div>
        </div>
    );
}
