import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminPage() {
    const session = await auth();
    if (!session?.user?.email) redirect("/login");
    const userRole = (session.user as { role?: string }).role;
    if (userRole !== "ADMIN") redirect("/portal");

    const clients = await prisma.user.findMany({
        where: { role: "CLIENT" },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div>
            {/* Header */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-2">
                    <h1
                        className="text-3xl font-black text-white"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        Painel Admin
                    </h1>
                    <span className="bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        ADM
                    </span>
                </div>
                <p className="text-[#666]">Gerencie clientes e ferramentas exclusivas da DKS.</p>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <Link
                    href="/admin/propostas"
                    className="group bg-[#060500] border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                    <div className="text-3xl mb-4">📋</div>
                    <h2 className="text-white font-black mb-1">Criar Proposta</h2>
                    <p className="text-[#888] text-sm">Monte propostas comerciais profissionais para enviar aos clientes.</p>
                    <span className="inline-block mt-4 text-[#D4AF37] text-xs font-bold">Abrir ferramenta →</span>
                </Link>

                <div className="bg-[#050505] border border-white/5 rounded-2xl p-6">
                    <div className="text-3xl mb-4">👥</div>
                    <h2 className="text-white font-black mb-1">Total de Clientes</h2>
                    <p className="text-4xl font-black text-[#D4AF37] mt-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                        {clients.length}
                    </p>
                    <p className="text-[#555] text-xs mt-1">clientes cadastrados</p>
                </div>

                <div className="bg-[#050505] border border-white/5 rounded-2xl p-6">
                    <div className="text-3xl mb-4">🔑</div>
                    <h2 className="text-white font-black mb-1">Acesso Admin</h2>
                    <p className="text-[#888] text-sm">Apenas você tem acesso a esta área. Gerencie com cuidado.</p>
                </div>
            </div>

            {/* Clients table */}
            <div className="bg-[#050505] border border-white/5 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                    <h2 className="text-white font-black text-sm uppercase tracking-widest">Clientes Cadastrados</h2>
                    <span className="text-[#555] text-xs">{clients.length} no total</span>
                </div>

                {clients.length === 0 ? (
                    <div className="px-6 py-12 text-center text-[#555] text-sm">
                        Nenhum cliente cadastrado ainda.
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="text-left px-6 py-3 text-[#555] text-xs font-bold uppercase tracking-widest">Nome</th>
                                    <th className="text-left px-6 py-3 text-[#555] text-xs font-bold uppercase tracking-widest">E-mail</th>
                                    <th className="text-left px-6 py-3 text-[#555] text-xs font-bold uppercase tracking-widest">Restaurante</th>
                                    <th className="text-left px-6 py-3 text-[#555] text-xs font-bold uppercase tracking-widest">Cadastro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map((client: { id: string; name: string | null; email: string; restaurant: string | null; phone: string | null; createdAt: Date }) => (
                                    <tr key={client.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                                        <td className="px-6 py-4 text-white text-sm font-medium">{client.name ?? "—"}</td>
                                        <td className="px-6 py-4 text-[#888] text-sm">{client.email}</td>
                                        <td className="px-6 py-4 text-[#888] text-sm">{client.restaurant ?? "—"}</td>
                                        <td className="px-6 py-4 text-[#555] text-xs">
                                            {new Date(client.createdAt).toLocaleDateString("pt-BR")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
