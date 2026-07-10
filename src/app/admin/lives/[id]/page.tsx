"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { io } from "socket.io-client";
import {
    LiveClient, ContentItem, LogEntry, StreamStatus,
    fetchLiveClient, fetchLiveContent, fetchLiveLogs,
    startLiveStream, stopLiveStream,
    uploadLiveContent, deleteLiveContent, updateLiveContentDuration,
    updateLiveClient,
    formatUptime, getStatusLabel, getLiveContentUrl, LIVE_API,
} from "@/lib/live-api";

let socket: ReturnType<typeof io> | null = null;
function getSocket() {
    if (!socket) socket = io(LIVE_API, { transports: ["websocket", "polling"] });
    return socket;
}

// ─── Log Terminal ─────────────────────────────────────────────────────────────
function LogTerminal({ logs }: { logs: LogEntry[] }) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => { if (ref.current) ref.current.scrollTop = 0; }, [logs.length]);

    const levelColor: Record<string, string> = {
        info: "#60a5fa", warn: "#fbbf24", error: "#f87171", ffmpeg: "#555",
    };

    return (
        <div
            ref={ref}
            className="bg-[#030303] border border-white/5 rounded-2xl p-5 font-mono text-xs leading-relaxed overflow-y-auto"
            style={{ maxHeight: 320, minHeight: 160 }}
        >
            {logs.length === 0 ? (
                <p className="text-[#444] text-center py-8">Nenhum log ainda. Inicie a stream para ver os logs.</p>
            ) : (
                logs.map((log, i) => {
                    const time = new Date(log.timestamp || log.created_at || "").toLocaleTimeString("pt-BR");
                    return (
                        <div key={i} className="mb-1">
                            <span className="text-[#333] mr-2">[{time}]</span>
                            <span style={{ color: levelColor[log.level] || "#aaa" }}>{log.message}</span>
                        </div>
                    );
                })
            )}
        </div>
    );
}

// ─── Content Card ─────────────────────────────────────────────────────────────
function ContentCard({ item, clientId, index, onDelete, onDurationChange }: {
    item: ContentItem; clientId: string; index: number;
    onDelete: (id: string) => void; onDurationChange: (id: string, d: number) => void;
}) {
    const [duration, setDuration] = useState(item.duration_seconds || 10);
    const isImage = item.file_type === "image";
    const previewUrl = getLiveContentUrl(clientId, item.filename);

    return (
        <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 hover:border-white/10 transition-colors">
            <span className="w-6 h-6 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-[10px] font-black flex-shrink-0">
                {index + 1}
            </span>

            <div className="w-10 h-14 rounded-lg overflow-hidden bg-[#111] flex-shrink-0">
                {isImage ? (
                    <img src={previewUrl} alt={item.original_name} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#D4AF37] text-xl">🎬</div>
                )}
            </div>

            <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-medium truncate mb-1">{item.original_name}</p>
                {isImage && (
                    <div className="flex items-center gap-2">
                        <span className="text-[#555] text-xs">Duração:</span>
                        <input
                            type="number" min={1} max={300} value={duration}
                            onChange={e => setDuration(Number(e.target.value))}
                            onBlur={() => onDurationChange(item.id, duration)}
                            className="w-14 bg-[#111] border border-white/10 rounded-lg px-2 py-0.5 text-white text-xs outline-none focus:border-[#D4AF37]/50"
                        />
                        <span className="text-[#555] text-xs">seg</span>
                    </div>
                )}
            </div>

            <button
                onClick={() => onDelete(item.id)}
                className="text-[#444] hover:text-red-400 transition-colors flex-shrink-0 text-sm px-2"
                title="Remover"
            >
                🗑️
            </button>
        </div>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function LiveClientPage() {
    const params = useParams();
    const router = useRouter();
    const pathname = usePathname();
    const clientId = params.id as string;
    
    const basePath = pathname.startsWith("/portal") ? "/portal/lives" : "/admin/lives";

    const [client, setClient] = useState<LiveClient | null>(null);
    const [content, setContent] = useState<ContentItem[]>([]);
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [streaming, setStreaming] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const [tab, setTab] = useState<"content" | "logs" | "settings">("content");
    const [status, setStatus] = useState<StreamStatus>("offline");
    const [saving, setSaving] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [editForm, setEditForm] = useState({ name: "", instagram_handle: "", rtmp_url: "", stream_key: "" });

    const load = useCallback(async () => {
        try {
            const [c, cont, lg] = await Promise.all([
                fetchLiveClient(clientId),
                fetchLiveContent(clientId),
                fetchLiveLogs(clientId),
            ]);
            setClient(c);
            setStatus(c.status);
            setContent(cont);
            setLogs(lg.reverse());
            setEditForm({ name: c.name, instagram_handle: c.instagram_handle || "", rtmp_url: c.rtmp_url, stream_key: "" });
        } catch {
            router.push(basePath);
        } finally {
            setLoading(false);
        }
    }, [clientId, router]);

    useEffect(() => { load(); }, [load]);

    // Real-time status + logs
    useEffect(() => {
        const ws = getSocket();
        ws.emit("join:client", clientId);

        ws.on("stream:status", ({ clientId: cid, status: s }: { clientId: string; status: StreamStatus }) => {
            if (cid === clientId) setStatus(s);
        });

        ws.on("stream:log", (log: LogEntry) => {
            setLogs(prev => [log, ...prev].slice(0, 200));
        });

        return () => {
            ws.off("stream:status");
            ws.off("stream:log");
            ws.emit("leave:client", clientId);
        };
    }, [clientId]);

    const handleToggle = async () => {
        setStreaming(true);
        try {
            if (status === "online") await stopLiveStream(clientId);
            else await startLiveStream(clientId);
        } catch (err: unknown) {
            alert(err instanceof Error ? err.message : "Erro");
        } finally {
            setStreaming(false);
        }
    };

    const handleUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        setUploading(true);
        try {
            const newItems = await uploadLiveContent(clientId, files);
            setContent(prev => [...prev, ...newItems]);
        } catch (err: unknown) {
            alert(err instanceof Error ? err.message : "Erro no upload");
        } finally {
            setUploading(false);
        }
    };

    const handleDeleteContent = async (itemId: string) => {
        if (!confirm("Remover este arquivo?")) return;
        try {
            await deleteLiveContent(clientId, itemId);
            setContent(prev => prev.filter(i => i.id !== itemId));
        } catch (err: unknown) {
            alert(err instanceof Error ? err.message : "Erro");
        }
    };

    const handleSaveSettings = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            await updateLiveClient(clientId, {
                name: editForm.name,
                instagram_handle: editForm.instagram_handle,
                rtmp_url: editForm.rtmp_url,
                ...(editForm.stream_key && { stream_key: editForm.stream_key }),
            });
            alert("Configurações salvas!");
            load();
        } catch (err: unknown) {
            alert(err instanceof Error ? err.message : "Erro");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="w-8 h-8 border-2 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin" />
            </div>
        );
    }

    if (!client) return null;

    const isLive = status === "online";
    const isLoadingStatus = status === "starting" || status === "restarting";

    const tabCls = (t: string) =>
        `px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-200 ${tab === t
            ? "bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]"
            : "text-[#555] hover:text-[#888]"
        }`;

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
            
            {/* Esquerda: Controles */}
            <div>
                {/* Back */}
                <Link href={basePath} className="inline-flex items-center gap-2 text-[#555] hover:text-[#888] text-sm mb-6 transition-colors">
                    ← Voltar às Lives
                </Link>

            {/* Header */}
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div>
                    <h1 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                        {client.name}
                    </h1>
                    {client.instagram_handle && (
                        <p className="text-[#555] text-sm">@{client.instagram_handle}</p>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    <span style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                        letterSpacing: "0.05em", textTransform: "uppercase",
                        background: isLive ? "rgba(212,175,55,0.12)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${isLive ? "rgba(212,175,55,0.4)" : "rgba(255,255,255,0.1)"}`,
                        color: isLive ? "#D4AF37" : "#555",
                    }}>
                        {isLive && <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#D4AF37", animation: "pulse 1.5s infinite" }} />}
                        {getStatusLabel(status)}
                    </span>

                    <button
                        onClick={handleToggle}
                        disabled={streaming || isLoadingStatus}
                        className={`font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all disabled:opacity-50 ${isLive
                            ? "bg-red-500/15 border border-red-500/30 text-red-400 hover:bg-red-500/25"
                            : "bg-[#D4AF37] text-black hover:bg-[#C9A42E]"
                            }`}
                    >
                        {isLoadingStatus ? "Aguarde..." : isLive ? "⏹ Parar Live" : "▶ Iniciar Live"}
                    </button>
                </div>
            </div>

            {/* Uptime bar */}
            {isLive && (
                <div className="bg-[#D4AF37]/08 border border-[#D4AF37]/20 rounded-2xl px-5 py-3 mb-6 text-sm text-[#D4AF37] font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    Transmitindo há {formatUptime(client.uptime)} · {client.restart_count} reinicializações automáticas
                </div>
            )}

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-white/5 pb-3">
                <button className={tabCls("content")} onClick={() => setTab("content")}>
                    📁 Conteúdo ({content.length})
                </button>
                <button className={tabCls("logs")} onClick={() => setTab("logs")}>
                    📋 Logs
                </button>
                <button className={tabCls("settings")} onClick={() => setTab("settings")}>
                    ⚙️ Config
                </button>
            </div>

            {/* Tab: Content */}
            {tab === "content" && (
                <div>
                    {/* Dropzone */}
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={e => { e.preventDefault(); setDragOver(false); handleUpload(e.dataTransfer.files); }}
                        className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-200 mb-5 ${dragOver ? "border-[#D4AF37]/60 bg-[#D4AF37]/05" : "border-white/10 hover:border-[#D4AF37]/40 hover:bg-white/[0.02]"}`}
                    >
                        <input ref={fileInputRef} type="file" multiple accept="image/*,video/*" style={{ display: "none" }}
                            onChange={e => handleUpload(e.target.files)} />
                        <div className="text-3xl mb-3">📤</div>
                        <p className="text-white font-bold text-sm mb-1">{uploading ? "Enviando..." : "Arraste imagens/vídeos aqui"}</p>
                        <p className="text-[#555] text-xs">JPG, PNG, MP4, MOV — até 500MB</p>
                    </div>

                    {content.length === 0 ? (
                        <p className="text-center text-[#555] text-sm py-8">Nenhum conteúdo ainda. Faça upload acima.</p>
                    ) : (
                        <div className="space-y-2">
                            <p className="text-[#555] text-xs mb-3">Ordem de exibição na live:</p>
                            {content.map((item, i) => (
                                <ContentCard
                                    key={item.id} item={item} clientId={clientId} index={i}
                                    onDelete={handleDeleteContent}
                                    onDurationChange={(id, d) => updateLiveContentDuration(clientId, id, d)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Tab: Logs */}
            {tab === "logs" && (
                <div>
                    <p className="text-[#555] text-xs mb-3">Logs em tempo real do processo FFmpeg:</p>
                    <LogTerminal logs={logs} />
                </div>
            )}

            {/* Tab: Settings */}
            {tab === "settings" && (
                <form onSubmit={handleSaveSettings} className="space-y-4 max-w-lg">
                    {[
                        { label: "Nome do Cliente", key: "name", type: "text", placeholder: "Nome do restaurante", required: true },
                        { label: "@ do Instagram", key: "instagram_handle", type: "text", placeholder: "handle.do.cliente", required: false },
                        { label: "URL RTMP", key: "rtmp_url", type: "text", placeholder: "rtmps://...", required: true },
                        { label: "Nova Chave de Stream", key: "stream_key", type: "password", placeholder: "Deixe em branco para manter a atual", required: false },
                    ].map(field => (
                        <div key={field.key}>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[#888] mb-2">{field.label}</label>
                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                required={field.required}
                                value={editForm[field.key as keyof typeof editForm]}
                                onChange={e => setEditForm(p => ({ ...p, [field.key]: e.target.value }))}
                                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#333] focus:outline-none focus:border-[#D4AF37]/60 transition-colors text-sm"
                            />
                        </div>
                    ))}

                    <button type="submit" disabled={saving}
                        className="bg-[#D4AF37] text-black font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-[#C9A42E] transition-all disabled:opacity-50 mt-2">
                        {saving ? "Salvando..." : "Salvar Configurações"}
                    </button>
                </form>
            )}
            </div>

            {/* Direita: Preview (Simulador Instagram) */}
            <div className="w-full max-w-[360px] mx-auto lg:sticky lg:top-8 mt-10 lg:mt-0">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-white font-black text-sm uppercase tracking-widest text-[#888]">Preview</h2>
                    <span className="text-xs text-[#555]">Simulação do celular</span>
                </div>
                
                <div className="w-[360px] h-[640px] bg-[#050505] rounded-[32px] border-[10px] border-[#1a1a1a] overflow-hidden relative shadow-2xl">
                    {content.length > 0 ? (
                        content[0].file_type === 'image' ? (
                            <img src={getLiveContentUrl(clientId, content[0].filename)} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                            <video src={getLiveContentUrl(clientId, content[0].filename)} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                        )
                    ) : (
                        <div className="flex flex-col items-center justify-center w-full h-full text-[#333]">
                            <div className="text-4xl mb-2">📱</div>
                            <p className="text-xs font-bold uppercase tracking-widest">Sem vídeo</p>
                        </div>
                    )}

                    {/* Overlay falso do Instagram */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/50 via-transparent to-black/60">
                        {/* Top bar */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-[2px]">
                                    <div className="w-full h-full bg-black rounded-full border border-white/20"></div>
                                </div>
                                <span className="text-white font-bold text-sm drop-shadow-md">
                                    {client.instagram_handle || 'seu_instagram'}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded drop-shadow-md">Ao Vivo</span>
                                <span className="bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 drop-shadow-md">
                                    👁️ 1.2k
                                </span>
                            </div>
                        </div>

                        {/* Bottom bar */}
                        <div className="absolute bottom-4 left-4 right-4 space-y-3">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                                    <span className="text-white text-xs font-bold drop-shadow">joao.silva</span>
                                    <span className="text-white/80 text-xs drop-shadow">Muito bom!! 👏</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                                    <span className="text-white text-xs font-bold drop-shadow">maria_eduarda</span>
                                    <span className="text-white/80 text-xs drop-shadow">Como faço para comprar?</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 border border-white/30 rounded-full px-4 py-2 text-white/50 text-xs backdrop-blur-sm bg-black/20">
                                    Adicione um comentário...
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-sm backdrop-blur-sm">❤️</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
