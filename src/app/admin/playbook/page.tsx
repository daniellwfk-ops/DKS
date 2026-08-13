import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getGuiasPorCategoria } from "@/lib/guias";

export const metadata = {
    title: "Playbook Comercial | DKS Admin",
};

export default async function PlaybookPage() {
    const session = await auth();
    if (!session?.user?.email) redirect("/login");
    if ((session.user as { role?: string }).role !== "ADMIN") redirect("/portal");

    const categorias = getGuiasPorCategoria();
    const nomes = Object.keys(categorias);

    return (
        <div>
            <div className="mb-10">
                <h1
                    className="text-3xl font-black text-white mb-1"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    Playbook Comercial
                </h1>
                <p className="text-[#666]">
                    Guias de prospecção e social selling do time DKS.
                </p>
            </div>

            {nomes.length === 0 ? (
                <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#050500] px-6 py-8">
                    <p className="text-white font-bold mb-2">Nenhum guia publicado ainda</p>
                    <p className="text-[#888] text-sm leading-relaxed">
                        Adicione arquivos <code className="text-[#D4AF37]">.md</code> na pasta{" "}
                        <code className="text-[#D4AF37]">_guias/</code> do projeto. Cada arquivo vira
                        um guia aqui automaticamente.
                    </p>
                </div>
            ) : (
                <div className="space-y-10">
                    {nomes.map((categoria) => (
                        <section key={categoria}>
                            <h2 className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-4">
                                {categoria}
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {categorias[categoria].map((guia) => (
                                    <Link
                                        key={guia.slug}
                                        href={`/admin/playbook/${guia.slug}`}
                                        className="block bg-[#050505] border border-white/5 rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-colors"
                                    >
                                        <h3 className="text-white font-bold mb-2 leading-snug">
                                            {guia.title}
                                        </h3>
                                        {guia.excerpt && (
                                            <p className="text-[#888] text-sm leading-relaxed mb-3">
                                                {guia.excerpt}
                                            </p>
                                        )}
                                        {guia.tempoLeitura && (
                                            <p className="text-[#555] text-xs">{guia.tempoLeitura}</p>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            )}
        </div>
    );
}
