"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CadastroPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        restaurant: "",
        phone: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        if (form.password !== form.confirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }

        setLoading(true);

        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                password: form.password,
                restaurant: form.restaurant,
                phone: form.phone,
            }),
        });

        const data = await res.json();
        setLoading(false);

        if (!res.ok) {
            setError(data.error ?? "Erro ao cadastrar.");
            return;
        }

        router.push("/login?cadastro=ok");
    }

    return (
        <div
            className="min-h-screen bg-[#000] flex items-center justify-center px-4 py-12"
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
                    <p className="text-[#666] text-sm mt-2">Crie sua conta de cliente</p>
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
                        Criar Conta
                    </h1>
                    <p className="text-[#666] text-sm mb-8">
                        Preencha seus dados para acessar o portal de clientes DKS.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {[
                            { label: "Nome completo", name: "name", type: "text", placeholder: "Seu nome" },
                            { label: "E-mail", name: "email", type: "email", placeholder: "seu@email.com" },
                            { label: "Nome do restaurante", name: "restaurant", type: "text", placeholder: "Restaurante do João (opcional)" },
                            { label: "Telefone / WhatsApp", name: "phone", type: "tel", placeholder: "(11) 99999-9999 (opcional)" },
                            { label: "Senha", name: "password", type: "password", placeholder: "Mínimo 6 caracteres" },
                            { label: "Confirmar senha", name: "confirmPassword", type: "password", placeholder: "Repita a senha" },
                        ].map((field) => (
                            <div key={field.name}>
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#888] mb-2">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={form[field.name as keyof typeof form]}
                                    onChange={handleChange}
                                    required={!["restaurant", "phone"].includes(field.name)}
                                    placeholder={field.placeholder}
                                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#444] focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm"
                                />
                            </div>
                        ))}

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#D4AF37] text-black font-black text-sm uppercase tracking-widest py-4 rounded-xl hover:bg-[#C9A42E] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                        >
                            {loading ? "Criando conta..." : "Criar Conta"}
                        </button>
                    </form>

                    <p className="text-center text-[#555] text-sm mt-6">
                        Já tem conta?{" "}
                        <Link href="/login" className="text-[#D4AF37] hover:underline font-medium">
                            Entrar
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
