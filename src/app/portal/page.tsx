import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function PortalPage() {
    const session = await auth();
    if (!session?.user?.email) redirect("/login");

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
    });

    const firstName = user?.name?.split(" ")[0] ?? "Cliente";

    return (
        <div>
            {/* Header */}
            <div className="mb-10">
                <h1
                    className="text-3xl font-black text-white mb-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    Olá, {firstName} 👋
                </h1>
                <p className="text-[#666]">
                    Bem-vindo ao seu portal DKS. Aqui você acompanha tudo em tempo real.
                </p>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {[
                    {
                        label: "Status do Contrato",
                        value: "Ativo",
                        sub: "Renovação em 6 meses",
                        color: "#00CC00",
                        icon: "✅",
                    },
                    {
                        label: "Próxima Reunião",
                        value: "A confirmar",
                        sub: "Seu consultor entrará em contato",
                        color: "#D4AF37",
                        icon: "📅",
                    },
                    {
                        label: "Relatório do Mês",
                        value: "Disponível",
                        sub: "Fevereiro 2026",
                        color: "#D4AF37",
                        icon: "📊",
                    },
                ].map((card) => (
                    <div
                        key={card.label}
                        className="bg-[#050505] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">{card.icon}</span>
                            <p className="text-[#888] text-xs font-bold uppercase tracking-widest">{card.label}</p>
                        </div>
                        <p
                            className="text-2xl font-black mb-1"
                            style={{ color: card.color, fontFamily: "var(--font-montserrat)" }}
                        >
                            {card.value}
                        </p>
                        <p className="text-[#555] text-xs">{card.sub}</p>
                    </div>
                ))}
            </div>

            {/* Info banner */}
            <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#050500] px-6 py-6"
                style={{ background: "linear-gradient(135deg, #060500 0%, #020200 100%)" }}
            >
                <p className="text-white font-bold mb-2">📬 Precisa de algo?</p>
                <p className="text-[#888] text-sm leading-relaxed">
                    Seu consultor DKS está disponível via WhatsApp de Seg–Sex, 9h às 18h.
                    Para urgências, use o canal de suporte.
                </p>
            </div>

            {/* Account info */}
            <div className="mt-8 bg-[#050505] border border-white/5 rounded-2xl p-6">
                <h2 className="text-white font-black mb-4 text-sm uppercase tracking-widest">Seus Dados</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-[#555] text-xs mb-1">Nome</p>
                        <p className="text-white">{user?.name ?? "—"}</p>
                    </div>
                    <div>
                        <p className="text-[#555] text-xs mb-1">E-mail</p>
                        <p className="text-white">{user?.email ?? "—"}</p>
                    </div>
                    <div>
                        <p className="text-[#555] text-xs mb-1">Restaurante</p>
                        <p className="text-white">{user?.restaurant ?? "—"}</p>
                    </div>
                    <div>
                        <p className="text-[#555] text-xs mb-1">Telefone</p>
                        <p className="text-white">{user?.phone ?? "—"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
