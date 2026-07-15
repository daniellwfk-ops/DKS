"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface LinkItem {
    label: string;
    url: string;
}

interface BioData {
    brandName: string;
    logoUrl: string;
    badgeText: string;
    tagline: string;
    cta: {
        label: string;
        url: string;
    };
    links: LinkItem[];
}

export default function AdminBioPage() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const [brandName, setBrandName] = useState("DKS Marketing");
    const [logoUrl, setLogoUrl] = useState("");
    const [badgeText, setBadgeText] = useState("MÉTODO EXCLUSIVO ROMA");
    const [tagline, setTagline] = useState("Assessoria que faz restaurantes e deliveries baterem recordes de faturamento.");
    const [ctaLabel, setCtaLabel] = useState("Falar com Especialista");
    const [ctaUrl, setCtaUrl] = useState("https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7");
    const [links, setLinks] = useState<LinkItem[]>([]);

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetch("/api/admin/bio");
                if (res.ok) {
                    const data: BioData = await res.json();
                    setBrandName(data.brandName || "DKS Marketing");
                    setLogoUrl(data.logoUrl || "");
                    setBadgeText(data.badgeText || "MÉTODO EXCLUSIVO ROMA");
                    setTagline(data.tagline || "");
                    setCtaLabel(data.cta?.label || "Falar com Especialista");
                    setCtaUrl(data.cta?.url || "");
                    setLinks(data.links || []);
                }
            } catch (err) {
                console.error("Falha ao carregar dados da bio:", err);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    const handleAddLink = () => {
        setLinks([...links, { label: "", url: "" }]);
    };

    const handleRemoveLink = (index: number) => {
        setLinks(links.filter((_, i) => i !== index));
    };

    const handleLinkChange = (index: number, field: keyof LinkItem, value: string) => {
        const updated = [...links];
        updated[index][field] = value;
        setLinks(updated);
    };

    const moveLink = (index: number, direction: "up" | "down") => {
        if (direction === "up" && index === 0) return;
        if (direction === "down" && index === links.length - 1) return;
        const targetIndex = direction === "up" ? index - 1 : index + 1;
        const updated = [...links];
        const temp = updated[index];
        updated[index] = updated[targetIndex];
        updated[targetIndex] = temp;
        setLinks(updated);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setMessage(null);

        try {
            const res = await fetch("/api/admin/bio", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    brandName,
                    logoUrl,
                    badgeText,
                    tagline,
                    cta: { label: ctaLabel, url: ctaUrl },
                    links: links.filter(l => l.label.trim() !== "")
                })
            });

            if (res.ok) {
                setMessage({ type: "success", text: "Link na Bio atualizado com sucesso!" });
                // Limpa mensagem depois de 4 segundos
                setTimeout(() => setMessage(null), 4000);
            } else {
                const errData = await res.json();
                setMessage({ type: "error", text: errData.error || "Erro ao salvar alterações." });
            }
        } catch (err) {
            setMessage({ type: "error", text: "Erro na requisição. Tente novamente." });
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#D4AF37]"></div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Link href="/admin" className="text-[#888] hover:text-white transition-colors text-sm">Painel</Link>
                        <span className="text-[#555] text-sm">/</span>
                        <span className="text-[#D4AF37] text-sm font-medium">Link na Bio</span>
                    </div>
                    <h1 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-montserrat)" }}>
                        Gerenciador de Link na Bio
                    </h1>
                    <p className="text-[#666] text-sm mt-1">Customize os links, textos e identidade visual da página de Linktree da DKS.</p>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="/bio"
                        target="_blank"
                        className="bg-[#111] hover:bg-[#222] border border-[#D4AF37]/20 text-white font-bold text-xs px-4 py-2.5 rounded-xl uppercase tracking-wider transition-all duration-200"
                    >
                        🔗 Ver link ao vivo
                    </a>
                </div>
            </div>

            {message && (
                <div className={`mb-6 p-4 rounded-xl border text-sm font-medium transition-all ${
                    message.type === "success" 
                        ? "bg-green-500/10 border-green-500/30 text-green-400" 
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                }`}>
                    {message.type === "success" ? "✓ " : "✗ "} {message.text}
                </div>
            )}

            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Editor Column */}
                <form onSubmit={handleSave} className="lg:col-span-7 space-y-6">
                    {/* Dados Gerais Card */}
                    <div className="bg-[#050505] border border-white/5 rounded-2xl p-6 space-y-4">
                        <h2 className="text-lg font-black text-white mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                            Informações Gerais
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-[#555] mb-2">Nome da Marca</label>
                                <input
                                    type="text"
                                    value={brandName}
                                    onChange={(e) => setBrandName(e.target.value)}
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-[#555] mb-2">URL da Imagem Logo (Opcional)</label>
                                <input
                                    type="text"
                                    value={logoUrl}
                                    onChange={(e) => setLogoUrl(e.target.value)}
                                    placeholder="Ex.: /icon.png (deixe vazio para texto DKS.)"
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-[#555] mb-2">Texto do Badge Pill</label>
                                <input
                                    type="text"
                                    value={badgeText}
                                    onChange={(e) => setBadgeText(e.target.value)}
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                                    placeholder="Ex.: MÉTODO EXCLUSIVO ROMA"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-[#555] mb-2">Tagline (Linha de Apoio)</label>
                            <textarea
                                value={tagline}
                                onChange={(e) => setTagline(e.target.value)}
                                rows={3}
                                className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                                placeholder="Descreva brevemente sua assessoria de marketing..."
                            />
                        </div>
                    </div>

                    {/* Botão de Destaque CTA Card */}
                    <div className="bg-[#050505] border border-white/5 rounded-2xl p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-black text-white" style={{ fontFamily: "var(--font-montserrat)" }}>
                                Botão Principal (Destaque CTA)
                            </h2>
                            <span className="bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] text-[9px] font-black tracking-widest px-2 py-0.5 rounded-full uppercase">Verde Limão</span>
                        </div>
                        <p className="text-[#555] text-xs">Botão principal chamativo que fica no topo, perfeito para o seu WhatsApp ou formulário.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-[#555] mb-2">Texto do Botão</label>
                                <input
                                    type="text"
                                    value={ctaLabel}
                                    onChange={(e) => setCtaLabel(e.target.value)}
                                    placeholder="Ex.: Falar com Especialista"
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-[#555] mb-2">Link do Botão</label>
                                <input
                                    type="text"
                                    value={ctaUrl}
                                    onChange={(e) => setCtaUrl(e.target.value)}
                                    placeholder="Ex.: https://wa.me/..."
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Links Adicionais Card */}
                    <div className="bg-[#050505] border border-white/5 rounded-2xl p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-black text-white" style={{ fontFamily: "var(--font-montserrat)" }}>
                                Links Secundários
                            </h2>
                            <button
                                type="button"
                                onClick={handleAddLink}
                                className="bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] font-bold text-xs px-3 py-1.5 rounded-xl transition-all"
                            >
                                + Adicionar Link
                            </button>
                        </div>
                        <p className="text-[#555] text-xs">Adicione outros links relevantes (Site, Redes Sociais, Artigos, etc).</p>

                        {links.length === 0 ? (
                            <div className="text-center py-8 text-[#444] text-sm border border-dashed border-white/5 rounded-xl">
                                Nenhum link secundário cadastrado. Clique em "+ Adicionar Link".
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {links.map((link, idx) => (
                                    <div key={idx} className="flex gap-2 items-start bg-black/40 border border-white/5 p-4 rounded-xl relative group">
                                        <div className="flex-1 space-y-2">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#444] mb-1">Título do Link</label>
                                                    <input
                                                        type="text"
                                                        value={link.label}
                                                        onChange={(e) => handleLinkChange(idx, "label", e.target.value)}
                                                        placeholder="Ex.: Instagram"
                                                        className="w-full bg-black border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#444] mb-1">Link de Destino</label>
                                                    <input
                                                        type="text"
                                                        value={link.url}
                                                        onChange={(e) => handleLinkChange(idx, "url", e.target.value)}
                                                        placeholder="Ex.: https://..."
                                                        className="w-full bg-black border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1 justify-center h-full pt-4">
                                            <button
                                                type="button"
                                                onClick={() => moveLink(idx, "up")}
                                                disabled={idx === 0}
                                                className="text-white hover:text-[#D4AF37] disabled:opacity-20 text-xs px-1"
                                                title="Mover para Cima"
                                            >
                                                ▲
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => moveLink(idx, "down")}
                                                disabled={idx === links.length - 1}
                                                className="text-white hover:text-[#D4AF37] disabled:opacity-20 text-xs px-1"
                                                title="Mover para Baixo"
                                            >
                                                ▼
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveLink(idx)}
                                                className="text-[#888] hover:text-red-500 text-xs px-1 mt-1 transition-colors"
                                                title="Excluir Link"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Botão de Salvar */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={saving}
                            className="bg-[#D4AF37] hover:bg-[#C09E30] text-black font-black text-xs px-6 py-3.5 rounded-xl uppercase tracking-wider transition-all duration-300 w-full md:w-auto shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                        >
                            {saving ? "Salvando..." : "Salvar Configurações"}
                        </button>
                    </div>
                </form>

                {/* Preview Column */}
                <div className="lg:col-span-5 flex justify-center">
                    <div className="sticky top-6 w-full max-w-[340px]">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-[#555] mb-4 text-center">Visualização em Tempo Real (Mobile)</h2>

                        {/* Phone Simulator Frame */}
                        <div className="relative border-[8px] border-[#181818] rounded-[42px] overflow-hidden bg-[#080808] aspect-[9/18] w-full shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col">
                            {/* Notch */}
                            <div className="absolute top-0 inset-x-0 h-4 bg-[#181818] rounded-b-xl flex justify-center z-50">
                                <div className="w-16 h-3 bg-black rounded-full mt-0.5"></div>
                            </div>

                            {/* Phone screen container */}
                            <div className="flex-1 overflow-y-auto pt-8 pb-6 px-4 flex flex-col justify-between select-none relative" 
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23ccff00' stroke-opacity='0.03' stroke-width='1'%3E%3Cpath d='M15 25 h3 l5 3 v-6 l-5 3 h-3 z M90 20 h9 M90 20 v9 M90 29 l3-3'/%3E%3Cpath d='M20 70 l6-12 q-3-1-6 0 z'/%3E%3Ccircle cx='55' cy='42' r='5'/%3E%3Cpath d='M55 42 l2.5-2.5'/%3E%3C/g%3E%3C/svg%3E")`,
                                    backgroundAttachment: "local"
                                }}
                            >
                                <div className="flex flex-col items-center w-full">
                                    {/* Logo */}
                                    <div className="h-10 mb-4 flex items-center justify-center">
                                        {logoUrl ? (
                                            <img src={logoUrl} alt={brandName} className="max-h-full object-contain" />
                                        ) : (
                                            <div className="text-xl font-black tracking-tighter text-white">
                                                {brandName}
                                                <span className="text-[#ccff00] drop-shadow-[0_0_4px_rgba(204,255,0,0.5)]">.</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Badge */}
                                    {badgeText && (
                                        <div className="inline-flex items-center gap-1.5 bg-black/60 border border-[#ccff00]/30 rounded-full px-2.5 py-1 text-[8px] font-black tracking-widest text-[#ccff00] uppercase mb-4 shadow-sm">
                                            <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full animate-ping"></span>
                                            {badgeText}
                                        </div>
                                    )}

                                    {/* Tagline */}
                                    {tagline && (
                                        <p className="text-[11px] leading-relaxed text-[#a0a0a0] font-medium text-center mb-6 whitespace-pre-line max-w-[240px]">
                                            {tagline}
                                        </p>
                                    )}

                                    {/* Links List */}
                                    <div className="w-full space-y-4">
                                        {/* CTA Primary */}
                                        {ctaLabel && (
                                            <div className="relative rounded-xl border-2 border-[#ccff00] bg-[#ccff00] text-black text-[11px] font-extrabold py-3 text-center shadow-[2px_2px_0_#547000] cursor-pointer hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#547000] active:translate-y-[1px] active:shadow-[1px_1px_0_#547000] transition-all duration-150 overflow-hidden">
                                                {ctaLabel}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full" style={{ transform: 'skewX(-20deg)', left: '-100%', animation: 'shine-sweep 3s infinite' }}></div>
                                            </div>
                                        )}

                                        {/* Secondary Links */}
                                        {links.map((link, idx) => {
                                            if (!link.label) return null;
                                            return (
                                                <div key={idx} className="rounded-xl border-2 border-[#ccff00] bg-[#111] text-white text-[11px] font-extrabold py-3 text-center shadow-[2px_2px_0_#ccff00] cursor-pointer hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#ccff00] active:translate-y-[1px] active:shadow-[1px_1px_0_#ccff00] transition-all duration-150">
                                                    {link.label}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="text-[9px] text-white/30 font-medium text-center mt-6">
                                    &copy; {new Date().getFullYear()} {brandName}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
