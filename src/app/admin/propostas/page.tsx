"use client";

import { useState } from "react";

const SERVICES = [
    { id: "trafego", label: "Tráfego Pago (Meta + Google Ads)", defaultPrice: 1500 },
    { id: "delivery", label: "Otimização de Delivery (iFood)", defaultPrice: 800 },
    { id: "crm", label: "CRM — Gestão de Clientes", defaultPrice: 700 },
    { id: "gmb", label: "Google Meu Negócio & TripAdvisor", defaultPrice: 600 },
    { id: "conteudo", label: "Assessoria de Conteúdo (Instagram / TikTok)", defaultPrice: 900 },
    { id: "acompanhamento", label: "Acompanhamento e Análises Semanais", defaultPrice: 500 },
];

interface SelectedService {
    id: string;
    label: string;
    price: number;
}

export default function PropostasPage() {
    const [step, setStep] = useState<"form" | "preview" | "success">("form");

    // Form state
    const [clientName, setClientName] = useState("");
    const [clientRestaurant, setClientRestaurant] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [validity, setValidity] = useState("7");
    const [contractMonths, setContractMonths] = useState("6");
    const [observations, setObservations] = useState("");
    const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);

    // Result state
    const [isSaving, setIsSaving] = useState(false);
    const [generatedLink, setGeneratedLink] = useState("");

    function toggleService(svc: (typeof SERVICES)[number]) {
        setSelectedServices((prev) => {
            const exists = prev.find((s) => s.id === svc.id);
            if (exists) return prev.filter((s) => s.id !== svc.id);
            return [...prev, { id: svc.id, label: svc.label, price: svc.defaultPrice }];
        });
    }

    function updatePrice(id: string, price: number) {
        setSelectedServices((prev) =>
            prev.map((s) => (s.id === id ? { ...s, price } : s))
        );
    }

    const total = selectedServices.reduce((sum, s) => sum + s.price, 0);
    const today = new Date().toLocaleDateString("pt-BR");
    const proposalNumber = `DKS-${Date.now().toString().slice(-6)}`;

    async function handleSaveProposal() {
        setIsSaving(true);
        try {
            const res = await fetch("/api/proposals", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    clientName,
                    restaurantName: clientRestaurant,
                    email: clientEmail,
                    phone: clientPhone,
                    validity,
                    contractMonths,
                    observations,
                    services: selectedServices,
                    total
                }),
            });
            const data = await res.json();
            if (res.ok && data.slug) {
                setGeneratedLink(`${window.location.origin}/proposta/${data.slug}`);
                setStep("success");
            } else {
                alert("Erro ao salvar proposta: " + (data.error || "Desconhecido"));
            }
        } catch (e) {
            alert("Erro ao conectar com servidor.");
        } finally {
            setIsSaving(false);
        }
    }

    if (step === "success") {
        return (
            <div className="max-w-xl mx-auto text-center mt-20">
                <div className="w-20 h-20 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">🔗</span>
                </div>
                <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Proposta Gerada!
                </h2>
                <p className="text-[#888] mb-8">O link abaixo está pronto para ser enviado ao cliente. Esta página é pública e otimizada para celular.</p>

                <div className="bg-[#111] border border-white/10 rounded-xl p-4 flex items-center justify-between gap-4 mb-8">
                    <input
                        type="text"
                        readOnly
                        value={generatedLink}
                        className="bg-transparent text-[#D4AF37] font-medium w-full outline-none text-sm"
                    />
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(generatedLink);
                            alert("Link copiado!");
                        }}
                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors flex-shrink-0"
                    >
                        Copiar
                    </button>
                </div>

                <div className="flex gap-4 justify-center">
                    <a
                        href={generatedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#D4AF37] text-black font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-[#C9A42E] transition-all duration-300"
                    >
                        Abrir Apresentação ↗
                    </a>
                    <button
                        onClick={() => {
                            setStep("form");
                            setSelectedServices([]);
                            setClientName("");
                            setClientRestaurant("");
                        }}
                        className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300"
                    >
                        Nova Proposta
                    </button>
                </div>
            </div>
        );
    }

    if (step === "preview") {
        return (
            <div>
                {/* Toolbar */}
                <div className="flex items-center gap-4 mb-8 no-print">
                    <button
                        onClick={() => setStep("form")}
                        className="text-[#888] hover:text-white text-sm transition-colors"
                    >
                        ← Editar
                    </button>

                    <div className="ml-auto flex items-center gap-3">
                        <button
                            onClick={() => window.print()}
                            className="bg-white/10 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-white/20 transition-colors"
                        >
                            Imprimir PDF
                        </button>
                        <button
                            onClick={handleSaveProposal}
                            disabled={isSaving}
                            className="bg-[#D4AF37] text-black font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-[#C9A42E] transition-colors disabled:opacity-50"
                        >
                            {isSaving ? "Salvando..." : "Salvar e Gerar Link 🔗"}
                        </button>
                    </div>
                </div>

                {/* Proposal */}
                <div
                    id="proposta"
                    className="max-w-3xl mx-auto bg-white text-black rounded-2xl overflow-hidden shadow-2xl print:shadow-none print:rounded-none"
                    style={{ fontFamily: "Georgia, serif" }}
                >
                    {/* Header */}
                    <div style={{ background: "#000", padding: "40px 48px", color: "#fff" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <div>
                                <p style={{ fontFamily: "var(--font-montserrat), Arial", fontWeight: 900, fontSize: 32, letterSpacing: -1, color: "#fff", margin: 0 }}>
                                    DKS<span style={{ color: "#D4AF37" }}>.</span>
                                </p>
                                <p style={{ color: "#888", fontSize: 12, marginTop: 4, fontFamily: "Arial" }}>
                                    Especialistas em Marketing para Restaurantes
                                </p>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <p style={{ color: "#D4AF37", fontSize: 11, fontFamily: "Arial", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2 }}>
                                    Proposta Comercial
                                </p>
                                <p style={{ color: "#666", fontSize: 11, fontFamily: "Arial", marginTop: 4 }}>
                                    Nº {proposalNumber}
                                </p>
                                <p style={{ color: "#666", fontSize: 11, fontFamily: "Arial" }}>
                                    Data: {today}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Body */}
                    <div style={{ padding: "40px 48px" }}>
                        {/* Client */}
                        <div style={{ marginBottom: 32 }}>
                            <p style={{ fontFamily: "Arial", fontSize: 10, fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, color: "#D4AF37", marginBottom: 12 }}>
                                Para
                            </p>
                            <p style={{ fontSize: 22, fontWeight: "bold", fontFamily: "Arial", marginBottom: 4 }}>{clientName}</p>
                            {clientRestaurant && <p style={{ fontSize: 14, color: "#555", fontFamily: "Arial" }}>{clientRestaurant}</p>}
                            {clientEmail && <p style={{ fontSize: 13, color: "#555", fontFamily: "Arial" }}>{clientEmail}</p>}
                            {clientPhone && <p style={{ fontSize: 13, color: "#555", fontFamily: "Arial" }}>{clientPhone}</p>}
                        </div>

                        <hr style={{ borderColor: "#eee", marginBottom: 32 }} />

                        {/* Services */}
                        <div style={{ marginBottom: 32 }}>
                            <p style={{ fontFamily: "Arial", fontSize: 10, fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, color: "#D4AF37", marginBottom: 16 }}>
                                Serviços Incluídos
                            </p>
                            {selectedServices.map((svc, i) => (
                                <div
                                    key={svc.id}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "12px 0",
                                        borderBottom: i < selectedServices.length - 1 ? "1px solid #f0f0f0" : "none",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <span style={{ color: "#D4AF37", fontWeight: "bold", fontSize: 14 }}>✓</span>
                                        <span style={{ fontFamily: "Arial", fontSize: 14 }}>{svc.label}</span>
                                    </div>
                                    <span style={{ fontFamily: "Arial", fontSize: 14, fontWeight: "bold", color: "#222" }}>
                                        R$ {svc.price.toLocaleString("pt-BR")}/mês
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div style={{ background: "#000", borderRadius: 12, padding: "20px 24px", marginBottom: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <p style={{ color: "#D4AF37", fontSize: 10, fontFamily: "Arial", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>
                                    Investimento Total Mensal
                                </p>
                                <p style={{ color: "#8888", fontSize: 11, fontFamily: "Arial" }}>
                                    Contrato de {contractMonths} meses
                                </p>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <p style={{ color: "#D4AF37", fontSize: 28, fontWeight: "bold", fontFamily: "Arial" }}>
                                    R$ {total.toLocaleString("pt-BR")}
                                </p>
                                <p style={{ color: "#555", fontSize: 11, fontFamily: "Arial" }}>por mês</p>
                            </div>
                        </div>

                        {/* Terms */}
                        <div style={{ marginBottom: 32 }}>
                            <p style={{ fontFamily: "Arial", fontSize: 10, fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, color: "#D4AF37", marginBottom: 12 }}>
                                Condições
                            </p>
                            <ul style={{ fontFamily: "Arial", fontSize: 13, color: "#555", lineHeight: 1.8, paddingLeft: 16 }}>
                                <li>Validade desta proposta: {validity} dias corridos</li>
                                <li>Período de contrato: {contractMonths} meses</li>
                                <li>Pagamento: via PIX, boleto ou cartão no dia 5 de cada mês</li>
                                <li>Setup inicial incluso no primeiro mês</li>
                                <li>Relatórios mensais e reunião semanal de acompanhamento</li>
                            </ul>
                        </div>

                        {observations && (
                            <div style={{ marginBottom: 32 }}>
                                <p style={{ fontFamily: "Arial", fontSize: 10, fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, color: "#D4AF37", marginBottom: 12 }}>
                                    Observações
                                </p>
                                <p style={{ fontFamily: "Arial", fontSize: 13, color: "#555", lineHeight: 1.8 }}>{observations}</p>
                            </div>
                        )}

                        <hr style={{ borderColor: "#eee", marginBottom: 24 }} />

                        {/* Footer */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <p style={{ fontFamily: "Arial", fontSize: 12, fontWeight: "bold" }}>contato@dksmarketing.com.br</p>
                                <p style={{ fontFamily: "Arial", fontSize: 11, color: "#888" }}>dksmarketing.com.br</p>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <p style={{ fontFamily: "Arial", fontSize: 11, color: "#888" }}>
                                    DKS Marketing © {new Date().getFullYear()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
          @media print {
            body * { visibility: hidden; }
            #proposta, #proposta * { visibility: visible; }
            #proposta { position: fixed; left: 0; top: 0; width: 100%; }
            .no-print { display: none !important; }
          }
        `}</style>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-10">
                <h1
                    className="text-3xl font-black text-white mb-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    Criador de Propostas
                </h1>
                <p className="text-[#666]">Monte uma proposta comercial profissional para um cliente.</p>
            </div>

            <div className="max-w-2xl space-y-8">
                {/* Client info */}
                <section className="bg-[#050505] border border-white/5 rounded-2xl p-6">
                    <h2 className="text-white font-black text-sm uppercase tracking-widest mb-5">Dados do Cliente</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { label: "Nome do cliente", value: clientName, set: setClientName, placeholder: "João Silva" },
                            { label: "Nome do restaurante", value: clientRestaurant, set: setClientRestaurant, placeholder: "Restaurante do João" },
                            { label: "E-mail", value: clientEmail, set: setClientEmail, placeholder: "joao@email.com" },
                            { label: "Telefone / WhatsApp", value: clientPhone, set: setClientPhone, placeholder: "(11) 99999-9999" },
                        ].map((f) => (
                            <div key={f.label}>
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#666] mb-2">{f.label}</label>
                                <input
                                    type="text"
                                    value={f.value}
                                    onChange={(e) => f.set(e.target.value)}
                                    placeholder={f.placeholder}
                                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-[#333] focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services */}
                <section className="bg-[#050505] border border-white/5 rounded-2xl p-6">
                    <h2 className="text-white font-black text-sm uppercase tracking-widest mb-5">Serviços</h2>
                    <div className="space-y-3">
                        {SERVICES.map((svc) => {
                            const selected = selectedServices.find((s) => s.id === svc.id);
                            return (
                                <div
                                    key={svc.id}
                                    className={`flex items-center justify-between gap-4 p-4 rounded-xl border transition-all cursor-pointer ${selected
                                        ? "border-[#D4AF37]/40 bg-[#D4AF37]/5"
                                        : "border-white/5 hover:border-white/10"
                                        }`}
                                    onClick={() => toggleService(svc)}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded flex items-center justify-center border flex-shrink-0 transition-colors ${selected ? "bg-[#D4AF37] border-[#D4AF37]" : "border-white/20"}`}>
                                            {selected && <span className="text-black text-xs font-black">✓</span>}
                                        </div>
                                        <span className="text-white text-sm">{svc.label}</span>
                                    </div>
                                    {selected && (
                                        <input
                                            type="number"
                                            value={selected.price}
                                            onClick={(e) => e.stopPropagation()}
                                            onChange={(e) => updatePrice(svc.id, Number(e.target.value))}
                                            className="w-28 bg-[#111] border border-[#D4AF37]/30 rounded-lg px-3 py-1.5 text-[#D4AF37] text-sm font-bold focus:outline-none text-right"
                                            min={0}
                                        />
                                    )}
                                    {!selected && (
                                        <span className="text-[#555] text-xs">R$ {svc.defaultPrice.toLocaleString("pt-BR")}</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {selectedServices.length > 0 && (
                        <div className="mt-5 pt-5 border-t border-white/5 flex justify-between items-center">
                            <span className="text-[#888] text-sm">Total mensal</span>
                            <span className="text-[#D4AF37] text-2xl font-black" style={{ fontFamily: "var(--font-montserrat)" }}>
                                R$ {total.toLocaleString("pt-BR")}
                            </span>
                        </div>
                    )}
                </section>

                {/* Terms */}
                <section className="bg-[#050505] border border-white/5 rounded-2xl p-6">
                    <h2 className="text-white font-black text-sm uppercase tracking-widest mb-5">Condições</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[#666] mb-2">Validade da proposta (dias)</label>
                            <input type="number" value={validity} onChange={(e) => setValidity(e.target.value)} className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm" min={1} />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[#666] mb-2">Duração do contrato (meses)</label>
                            <input type="number" value={contractMonths} onChange={(e) => setContractMonths(e.target.value)} className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm" min={1} />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#666] mb-2">Observações (opcional)</label>
                        <textarea
                            value={observations}
                            onChange={(e) => setObservations(e.target.value)}
                            rows={3}
                            placeholder="Desconto especial, condições específicas..."
                            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#333] focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm resize-none"
                        />
                    </div>
                </section>

                {/* Generate */}
                <button
                    onClick={() => setStep("preview")}
                    disabled={!clientName || selectedServices.length === 0}
                    className="w-full bg-[#D4AF37] text-black font-black text-sm uppercase tracking-widest py-4 rounded-xl hover:bg-[#C9A42E] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    Gerar Proposta →
                </button>
            </div>
        </div>
    );
}
