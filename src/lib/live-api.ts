// URL do backend Live Manager (servidor separado com FFmpeg)
const LIVE_API = "https://negotiations-reviewing-gen-cycle.trycloudflare.com";

export { LIVE_API };

// ─── Types ────────────────────────────────────────────────────────────────────

export type StreamStatus = "online" | "offline" | "starting" | "restarting" | "error";

export interface LiveClient {
    id: string;
    name: string;
    instagram_handle: string;
    rtmp_url: string;
    stream_key: string;
    status: StreamStatus;
    is_streaming: boolean;
    uptime: number;
    restart_count: number;
    created_at: string;
}

export interface ContentItem {
    id: string;
    client_id: string;
    filename: string;
    original_name: string;
    file_type: "image" | "video";
    duration_seconds: number;
    sort_order: number;
}

export interface LogEntry {
    id?: number;
    clientId: string;
    level: "info" | "warn" | "error" | "ffmpeg";
    message: string;
    timestamp: string;
    created_at?: string;
}

// ─── Clients ──────────────────────────────────────────────────────────────────

export async function fetchLiveClients(): Promise<LiveClient[]> {
    const res = await fetch(`${LIVE_API}/api/clients`, { cache: "no-store" });
    if (!res.ok) throw new Error("Falha ao buscar clientes de live");
    const data = await res.json();
    return data.clients;
}

export async function fetchLiveClient(id: string): Promise<LiveClient> {
    const res = await fetch(`${LIVE_API}/api/clients/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Cliente não encontrado");
    return res.json();
}

export async function createLiveClient(data: {
    name: string;
    instagram_handle?: string;
    rtmp_url: string;
    stream_key: string;
}): Promise<LiveClient> {
    const res = await fetch(`${LIVE_API}/api/clients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Erro ao criar cliente");
    }
    return res.json();
}

export async function updateLiveClient(id: string, data: Partial<LiveClient>): Promise<LiveClient> {
    const res = await fetch(`${LIVE_API}/api/clients/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erro ao atualizar cliente");
    return res.json();
}

export async function deleteLiveClient(id: string): Promise<void> {
    const res = await fetch(`${LIVE_API}/api/clients/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Erro ao remover cliente");
}

// ─── Streams ──────────────────────────────────────────────────────────────────

export async function startLiveStream(clientId: string) {
    const res = await fetch(`${LIVE_API}/api/clients/${clientId}/start`, { method: "POST" });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Erro ao iniciar stream");
    }
    return res.json();
}

export async function stopLiveStream(clientId: string) {
    const res = await fetch(`${LIVE_API}/api/clients/${clientId}/stop`, { method: "POST" });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Erro ao parar stream");
    }
    return res.json();
}

// ─── Content ──────────────────────────────────────────────────────────────────

export async function fetchLiveContent(clientId: string): Promise<ContentItem[]> {
    const res = await fetch(`${LIVE_API}/api/clients/${clientId}/content`, { cache: "no-store" });
    if (!res.ok) throw new Error("Erro ao buscar conteúdo");
    const data = await res.json();
    return data.items;
}

export async function uploadLiveContent(clientId: string, files: FileList | File[]): Promise<ContentItem[]> {
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("files", file));
    const res = await fetch(`${LIVE_API}/api/clients/${clientId}/upload`, {
        method: "POST",
        body: formData,
    });
    if (!res.ok) throw new Error("Erro ao fazer upload");
    const data = await res.json();
    return data.items;
}

export async function deleteLiveContent(clientId: string, itemId: string): Promise<void> {
    const res = await fetch(`${LIVE_API}/api/clients/${clientId}/content/${itemId}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Erro ao remover item");
}

export async function updateLiveContentDuration(
    clientId: string,
    itemId: string,
    duration_seconds: number
): Promise<void> {
    await fetch(`${LIVE_API}/api/clients/${clientId}/content/${itemId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ duration_seconds }),
    });
}

// ─── Logs ─────────────────────────────────────────────────────────────────────

export async function fetchLiveLogs(clientId: string): Promise<LogEntry[]> {
    const res = await fetch(`${LIVE_API}/api/clients/${clientId}/logs`, { cache: "no-store" });
    if (!res.ok) throw new Error("Erro ao buscar logs");
    const data = await res.json();
    return data.logs;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function formatUptime(ms: number): string {
    if (!ms) return "--";
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    if (h > 0) return `${h}h ${m % 60}m`;
    if (m > 0) return `${m}m ${s % 60}s`;
    return `${s}s`;
}

export function getStatusLabel(status: StreamStatus): string {
    const labels: Record<StreamStatus, string> = {
        online: "Ao Vivo",
        offline: "Offline",
        starting: "Iniciando",
        restarting: "Reiniciando",
        error: "Erro",
    };
    return labels[status] || status;
}

export function getLiveContentUrl(clientId: string, filename: string): string {
    return `${LIVE_API}/uploads/${clientId}/${filename}`;
}
