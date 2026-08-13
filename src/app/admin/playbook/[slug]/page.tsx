import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getGuiaBySlug, getGuiaSlugs } from "@/lib/guias";

export function generateStaticParams() {
    return getGuiaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const guia = getGuiaBySlug(slug);
    return { title: guia ? `${guia.title} | Playbook DKS` : "Playbook DKS" };
}

export default async function GuiaPage({ params }: { params: Promise<{ slug: string }> }) {
    const session = await auth();
    if (!session?.user?.email) redirect("/login");
    if ((session.user as { role?: string }).role !== "ADMIN") redirect("/portal");

    const { slug } = await params;
    const guia = getGuiaBySlug(slug);
    if (!guia) notFound();

    return (
        <div className="max-w-3xl">
            <Link
                href="/admin/playbook"
                className="text-[#555] hover:text-[#D4AF37] text-sm transition-colors"
            >
                ← Playbook
            </Link>

            <div className="mt-6 mb-10 pb-8 border-b border-white/10">
                <p className="text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-3">
                    {guia.categoria}
                </p>
                <h1
                    className="text-3xl font-black text-white leading-tight mb-3"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    {guia.title}
                </h1>
                {guia.tempoLeitura && (
                    <p className="text-[#555] text-sm">{guia.tempoLeitura}</p>
                )}
            </div>

            <article className="
                [&>h2]:text-2xl [&>h2]:font-black [&>h2]:mt-12 [&>h2]:mb-5 [&>h2]:text-white
                [&>h3]:text-lg [&>h3]:font-black [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-white
                [&>p]:text-[#A1A1AA] [&>p]:leading-relaxed [&>p]:mb-5
                [&>ul]:list-none [&>ul]:mb-6 [&>ul]:space-y-2 [&>ul]:pl-0
                [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li]:text-[#A1A1AA]
                [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-2.5 [&>ul>li::before]:w-1.5 [&>ul>li::before]:h-1.5 [&>ul>li::before]:bg-[#D4AF37] [&>ul>li::before]:rounded-full
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:text-[#A1A1AA] [&>ol>li]:mb-2 [&>ol>li::marker]:text-[#D4AF37] [&>ol>li::marker]:font-bold
                [&>blockquote]:border-l-4 [&>blockquote]:border-[#D4AF37] [&>blockquote]:pl-5 [&>blockquote]:italic [&>blockquote]:text-[#CFCFCF] [&>blockquote]:bg-white/5 [&>blockquote]:py-3 [&>blockquote]:pr-5 [&>blockquote]:rounded-r-xl [&>blockquote]:my-8
                [&>blockquote>p]:mb-0
                [&_a]:text-[#D4AF37] [&_a]:font-bold [&_a]:underline-offset-4 hover:[&_a]:underline
                [&_strong]:text-white [&_strong]:font-bold
                [&_code]:text-[#D4AF37] [&_code]:text-sm
                [&_table]:w-full [&_table]:mb-6 [&_table]:text-sm [&_table]:border-collapse
                [&_th]:text-left [&_th]:text-white [&_th]:font-bold [&_th]:py-2 [&_th]:px-3 [&_th]:border-b [&_th]:border-white/10
                [&_td]:text-[#A1A1AA] [&_td]:py-2 [&_td]:px-3 [&_td]:border-b [&_td]:border-white/5
            ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{guia.content}</ReactMarkdown>
            </article>
        </div>
    );
}
