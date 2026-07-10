"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { io } from "socket.io-client";
import {
    LiveClient, StreamStatus,
    fetchLiveClients, createLiveClient, deleteLiveClient,
    startLiveStream, stopLiveStream,
    formatUptime, getStatusLabel, LIVE_API,
} from "@/lib/live-api";

// ─── Singleton WebSocket ──────────────────────────────────────────────────────
let socket: ReturnType<typeof io> | null = null;

function getSocket() {
    if (!socket) {
        socket = io(LIVE_API, { transports: ["websocket", "polling"] });
    }
    return socket;
}

// ─── Status Badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: StreamStatus }) {
    const colors: Record<StreamStatus, { bg: string; border: string; text: string; dot: string }> = {
        online:     { bg: "rgba(212,175,55,0.12)",  border: "rgba(212,175,55,0.4)",  text: "#D4AF37", dot: "#D4AF37" },
        offline:    { bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.1)", text: "#555",    dot: "#333" },
        starting:   { bg: "rgba(234,179,8,0.12)",   border: "rgba(234,179,8,0.4)",   text: "#eab308", dot: "#eab308" },
        restarting: { bg: "rgba(249,115,22,0.12)",  border: "rgba(249,115,22,0.4)",  text: "#f97316", dot: "#f97316" },
        error:      { bg: "rgba(239,68,68,0.12)",   border: "rgba(239,68,68,0.4)",   text: "#ef4444", dot: "#ef4444" },
    };
    const c = colors[status] || colors.offline;
    return (
        <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
            letterSpacing: "0.05em", textTransform: "uppercase",
            background: c.bg, border: `1px solid ${c.border}`, color: c.text,
        }}>
            <span style={{
                width: 7, height: 7, borderRadius: "50%", background: c.dot, flexShrink: 0,
                ...(status === "online" && { animation: "pulse 1.5s ease-in-out infinite" }),
            }} />
            {getStatusLabel(status)}
        </span>
    );
}

// ─── Add Client Modal ─────────────────────────────────────────────────────────
function AddClientModal({ onClose, onCreated }: { onClose: () => void; onCreated: (c: LiveClient) => void }) {
    const [form, setForm] = useState({ name: "", instagram_handle: "", rtmp_url: "", stream_key: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const client = await createLiveClient(form);
            onCreated(client);
            onClose();
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Erro desconhecido");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div
            style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="bg-[#080800] border border-[#D4AF37]/20 rounded-2xl p-8 w-full max-w-lg">
                <h2 className="text-xl font-black text-white mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Novo Cliente de Live
                </h2>
                <p className="text-[#666] text-sm mb-6">Preencha com os dados do Instagram do cliente.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#888] mb-2">Nome do Cliente *</label>
                        <input className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#444] focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm"
                            placeholder="Ex: Restaurante El Patrón" value={form.name}
                            onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#888] mb-2">@ do Instagram</label>
                        <input className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#444] focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm"
                            placeholder="elpatron.oficial" value={form.instagram_handle}
                            onChange={e => setForm(p => ({ ...p, instagram_handle: e.target.value }))} />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#888] mb-2">URL do Stream (RTMP) *</label>
                        <input className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#444] focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm"
                            placeholder="rtmps://edgetee-upload-for2-2.xx.fbcdn.net:443/rtmp"
                            value={form.rtmp_url} onChange={e => setForm(p => ({ ...p, rtmp_url: e.target.value }))} required />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#888] mb-2">Chave do Stream *</label>
                        <input className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#444] focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm"
                            type="password" placeholder="18046334..." value={form.stream_key}
                            onChange={e => setForm(p => ({ ...p, stream_key: e.target.value }))} required />
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">{error}</div>
                    )}

                    <div className="flex gap-3 pt-2">
                        <button type="button" onClick={onClose}
                            className="flex-1 bg-white/5 border border-white/10 text-[#888] font-bold text-sm py-3 rounded-xl hover:text-white transition-colors">
                            Cancelar
                        </button>
                        <button type="submit" disabled={loading}
                            className="flex-1 bg-[#D4AF37] text-black font-black text-sm uppercase tracking-widest py-3 rounded-xl hover:bg-[#C9A42E] transition-all disabled:opacity-50">
                            {loading ? "Salvando..." : "Criar Cliente"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// ─── Client Card ──────────────────────────────────────────────────────────────
function ClientCard({ client, status, onToggle, onDelete }: {
    client: LiveClient;
    status: StreamStatus;
    onToggle: () => void;
    onDelete: () => void;
}) {
    const isLive = status === "online";
    const isLoading = status === "starting" || status === "restarting";

    return (
        <div className={`bg-[#050505] border rounded-2xl p-6 transition-all duration-300 ${isLive ? "border-[#D4AF37]/30" : "border-white/5 hover:border-white/10"}`}
            style={{ boxShadow: isLive ? "0 0 30px rgba(212,175,55,0.06)" : "none" }}>

            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${isLive ? "bg-[#D4AF37]/20" : "bg-white/5"}`}>
                        📺
                    </div>
                    <div>
                        <h3 className="text-white font-black text-sm">{client.name}</h3>
                        {client.instagram_handle && (
                            <p className="text-[#555] text-xs">@{client.instagram_handle}</p>
                        )}
                    </div>
                </div>
                <StatusBadge status={status} />
            </div>

            {isLive && (
                <div className="flex items-center gap-2 mb-4 text-xs text-[#888]">
                    <span className="text-[#D4AF37]">●</span>
                    <span>Transmitindo há <strong className="text-[#D4AF37]">{formatUptime(client.uptime)}</strong></span>
                </div>
            )}

            <div className="flex gap-2">
                <button
                    onClick={onToggle}
                    disabled={isLoading}
                    className={`flex-1 font-black text-xs uppercase tracking-widest py-2.5 rounded-xl transition-all duration-200 disabled:opacity-50 ${isLive
                        ? "bg-red-500/15 border border-red-500/30 text-red-400 hover:bg-red-500/25"
                        : "bg-[#D4AF37] text-black hover:bg-[#C9A42E]"
                        }`}
                >
                    {isLoading ? "Aguarde..." : isLive ? "⏹ Parar Live" : "▶ Iniciar Live"}
                </button>

                <Link href={`/admin/lives/${client.id}`}>
                    <button className="bg-white/5 border border-white/10 text-[#888] hover:text-white px-3 py-2.5 rounded-xl transition-colors text-sm" title="Gerenciar">
                        ⚙️
                    </button>
                </Link>

                <button
                    onClick={onDelete}
                    className="bg-white/5 border border-white/10 text-[#555] hover:text-red-400 px-3 py-2.5 rounded-xl transition-colors text-sm"
                    title="Remover"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function LivesPage() {
    const [clients, setClients] = useState<LiveClient[]>([]);
    const [statuses, setStatuses] = useState<Record<string, StreamStatus>>({});
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [backendOnline, setBackendOnline] = useState<boolean | null>(null);

    const load = useCallback(async () => {
        try {
            const data = await fetchLiveClients();
            setClients(data);
            setStatuses(Object.fromEntries(data.map(c => [c.id, c.status])));
            setBackendOnline(true);
        } catch {
            setBackendOnline(false);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
        const interval = setInterval(load, 30000);
        return () => clearInterval(interval);
    }, [load]);

    // Real-time status via WebSocket
    useEffect(() => {
        const ws = getSocket();
        const handler = ({ clientId, status }: { clientId: string; status: StreamStatus }) => {
            setStatuses(prev => ({ ...prev, [clientId]: status }));
        };
        ws.on("stream:status", handler);
        return () => { ws.off("stream:status", handler); };
    }, []);

    const handleToggle = async (client: LiveClient) => {
        const status = statuses[client.id] || client.status;
        try {
            if (status === "online") {
                await stopLiveStream(client.id);
            } else {
                await startLiveStream(client.id);
            }
        } catch (err: unknown) {
            alert(err instanceof Error ? err.message : "Erro na operação");
        }
    };

    const handleDelete = async (client: LiveClient) => {
        if (!confirm(`Remover "${client.name}"? Isso apagará todo o conteúdo.`)) return;
        try {
            await deleteLiveClient(client.id);
            setClients(prev => prev.filter(c => c.id !== client.id));
        } catch (err: unknown) {
            alert(err instanceof Error ? err.message : "Erro ao remover");
        }
    };

    const activeCount = Object.values(statuses).filter(s => s === "online").length;

    return (
        <div>
            {/* Header */}
            <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <h1 className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-montserrat)" }}>
                            Gerenciador de Lives
                        </h1>
                        <span className="bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full">
                            🎥 Instagram
                        </span>
                    </div>
                    <p className="text-[#666]">Transmita lives do Instagram para múltiplos clientes simultaneamente.</p>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-[#D4AF37] text-black font-black text-xs uppercase tracking-widest px-5 py-3 rounded-xl hover:bg-[#C9A42E] transition-all duration-200 flex items-center gap-2"
                >
                    + Novo Cliente
                </button>
            </div>

            {/* Backend offline warning */}
            {backendOnline === false && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-2xl px-6 py-4 mb-6 text-sm">
                    <strong>⚠️ Backend offline.</strong> O servidor de streaming (FFmpeg) não está acessível. Verifique se ele está rodando.
                </div>
            )}

            {/* Stats */}
            {clients.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-[#050505] border border-white/5 rounded-2xl p-5">
                        <p className="text-[#555] text-xs font-bold uppercase tracking-widest mb-2">Ao Vivo Agora</p>
                        <p className="text-4xl font-black text-[#D4AF37]" style={{ fontFamily: "var(--font-montserrat)" }}>{activeCount}</p>
                    </div>
                    <div className="bg-[#050505] border border-white/5 rounded-2xl p-5">
                        <p className="text-[#555] text-xs font-bold uppercase tracking-widest mb-2">Total de Clientes</p>
                        <p className="text-4xl font-black text-white" style={{ fontFamily: "var(--font-montserrat)" }}>{clients.length}</p>
                    </div>
                    <div className="bg-[#050505] border border-white/5 rounded-2xl p-5">
                        <p className="text-[#555] text-xs font-bold uppercase tracking-widest mb-2">Status Servidor</p>
                        <p className="text-sm font-bold mt-1 flex items-center gap-2">
                            <span style={{ width: 8, height: 8, borderRadius: "50%", background: backendOnline ? "#D4AF37" : "#ef4444", display: "inline-block" }} />
                            <span style={{ color: backendOnline ? "#D4AF37" : "#ef4444" }}>{backendOnline ? "Online" : "Offline"}</span>
                        </p>
                    </div>
                </div>
            )}

            {/* Loading */}
            {loading && (
                <div className="flex items-center justify-center h-48 text-[#555]">
                    <div className="w-8 h-8 border-2 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin" />
                </div>
            )}

            {/* Empty */}
            {!loading && clients.length === 0 && (
                <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
                    <div className="text-5xl">📺</div>
                    <h2 className="text-xl font-black text-white">Nenhum cliente ainda</h2>
                    <p className="text-[#666] text-sm max-w-xs">Adicione um cliente para começar a gerenciar as lives do Instagram.</p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-[#D4AF37] text-black font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-[#C9A42E] transition-all"
                    >
                        + Adicionar Primeiro Cliente
                    </button>
                </div>
            )}

            {/* Grid */}
            {!loading && clients.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {clients.map(client => (
                        <ClientCard
                            key={client.id}
                            client={client}
                            status={statuses[client.id] || client.status}
                            onToggle={() => handleToggle(client)}
                            onDelete={() => handleDelete(client)}
                        />
                    ))}
                </div>
            )}

            {showModal && (
                <AddClientModal
                    onClose={() => setShowModal(false)}
                    onCreated={client => setClients(prev => [client, ...prev])}
                />
            )}
        </div>
    );
}
