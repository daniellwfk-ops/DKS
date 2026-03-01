import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: "Post não encontrado" };

    return {
        title: `${post.title} | Blog DKS Marketing`,
        description: post.summary,
        keywords: `marketing restaurante, ${post.category.toLowerCase()}, DKS Marketing, ${post.title.toLowerCase()}`,
        openGraph: {
            title: post.title,
            description: post.summary,
            type: "article",
            publishedTime: post.date,
        },
    };
}

const categoryColors: Record<string, string> = {
    Estratégia: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    iFood: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    "Tráfego Pago": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    CRM: "bg-green-500/10 text-green-400 border-green-500/20",
    "SEO Local": "bg-teal-500/10 text-teal-400 border-teal-500/20",
    Conteúdo: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    Gestão: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Metodologia: "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20",
};

function bold(text: string) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
}

function formatDate(dateStr: string) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

function renderContent(content: string): React.ReactNode[] {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i].trim();

        if (!line) { i++; continue; }

        if (line.startsWith("## ")) {
            elements.push(
                <h2 key={i} className="text-2xl font-black text-white mt-10 mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {line.slice(3)}
                </h2>
            );
            i++;
        } else if (line.startsWith("### ")) {
            elements.push(
                <h3 key={i} className="text-lg font-bold text-[#D4AF37] mt-8 mb-3">
                    {line.slice(4)}
                </h3>
            );
            i++;
        } else if (line.startsWith("- ")) {
            const items: string[] = [];
            while (i < lines.length && lines[i].trim().startsWith("- ")) {
                items.push(lines[i].trim().slice(2));
                i++;
            }
            elements.push(
                <ul key={`ul-${i}`} className="space-y-3 my-5">
                    {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[#CFCFCF] text-[15px] leading-relaxed">
                            <i className="ph-bold ph-check text-[#D4AF37] mt-1 flex-shrink-0 text-sm" />
                            <span dangerouslySetInnerHTML={{ __html: bold(item) }} />
                        </li>
                    ))}
                </ul>
            );
        } else if (line.startsWith("> ")) {
            elements.push(
                <blockquote key={i} className="border-l-4 border-[#D4AF37] pl-6 py-3 my-6 bg-[#D4AF37]/5 rounded-r-xl">
                    <p className="text-[#CFCFCF] italic text-[15px] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: bold(line.slice(2)) }} />
                </blockquote>
            );
            i++;
        } else if (/^\d+\./.test(line)) {
            const numbered: string[] = [];
            while (i < lines.length && /^\d+\./.test(lines[i].trim())) {
                numbered.push(lines[i].trim().replace(/^\d+\.\s*/, ""));
                i++;
            }
            elements.push(
                <ol key={`ol-${i}`} className="space-y-3 my-5">
                    {numbered.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[#CFCFCF] text-[15px] leading-relaxed">
                            <span className="text-[#D4AF37] font-black text-sm mt-0.5 flex-shrink-0 w-5">{j + 1}.</span>
                            <span dangerouslySetInnerHTML={{ __html: bold(item) }} />
                        </li>
                    ))}
                </ol>
            );
        } else {
            elements.push(
                <p key={i} className="text-[#CFCFCF] text-[15px] md:text-base leading-relaxed my-4"
                    dangerouslySetInnerHTML={{ __html: bold(line) }} />
            );
            i++;
        }
    }

    return elements;
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const related = getRelatedPosts(post!.slug, post!.category);

    return (
        <main className="bg-[#000000] text-white" style={{ fontFamily: "var(--font-sora)" }}>
            {/* Cover Image */}
            <div className="w-full h-64 md:h-[420px] relative overflow-hidden border-b border-white/5">
                <img
                    src={post!.image}
                    alt={post!.title}
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Meta and Title */}
            <section className="relative py-12 px-5 border-b border-white/5 overflow-hidden -mt-2">
                <div className="relative max-w-3xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-[#888] text-sm hover:text-[#D4AF37] transition-colors mb-8 group"
                    >
                        <i className="ph-bold ph-arrow-left group-hover:-translate-x-1 transition-transform" />
                        Voltar ao Blog
                    </Link>

                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span
                            className={`text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[post!.category] ?? "bg-white/5 text-white/60 border-white/10"
                                }`}
                        >
                            {post!.category}
                        </span>
                        <span className="text-[#555] text-xs">{formatDate(post!.date)}</span>
                        <span className="text-[#555] text-xs">· {post!.readTime} de leitura</span>
                    </div>

                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        {post!.title}
                    </h1>
                    <p className="text-[#A1A1AA] text-lg leading-relaxed">{post!.summary}</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-5">
                <div className="max-w-3xl mx-auto">
                    <div className="prose-custom">{renderContent(post.content)}</div>
                </div>
            </section>

            {/* CTA Box */}
            <section className="px-5 pb-16">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-2xl p-8 md:p-10 text-center">
                        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">
                            ✦ Precisa de ajuda?
                        </p>
                        <h2
                            className="text-2xl md:text-3xl font-black text-white mb-4"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            Quer aplicar isso no seu restaurante?
                        </h2>
                        <p className="text-[#A1A1AA] text-sm mb-8 max-w-md mx-auto">
                            Nossa equipe implementa tudo por você, com método estruturado e resultado acompanhado
                            semanalmente.
                        </p>
                        <a
                            href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#00CC00] text-white font-black text-sm uppercase tracking-widest px-10 py-4 rounded hover:bg-[#00B300] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,204,0,0.25)]"
                        >
                            Falar com Especialista
                        </a>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {related.length > 0 && (
                <section className="py-16 px-5 border-t border-white/5 bg-[#030303]">
                    <div className="max-w-5xl mx-auto">
                        <h2
                            className="text-2xl font-black text-white mb-8"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            Artigos relacionados
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {related.map((rpost) => (
                                <Link key={rpost.slug} href={`/blog/${rpost.slug}`} className="group">
                                    <article className="bg-[#050505] border border-white/5 rounded-2xl p-6 hover:border-[#D4AF37]/30 transition-all hover:-translate-y-1 duration-300">
                                        <span
                                            className={`text-xs font-bold px-2 py-0.5 rounded-full border mb-3 inline-block ${categoryColors[rpost.category] ?? "bg-white/5 text-white/60 border-white/10"
                                                }`}
                                        >
                                            {rpost.category}
                                        </span>
                                        <h3
                                            className="text-sm font-black text-white group-hover:text-[#D4AF37] transition-colors leading-snug mb-2"
                                            style={{ fontFamily: "var(--font-montserrat)" }}
                                        >
                                            {rpost.title}
                                        </h3>
                                        <p className="text-[#888] text-xs leading-relaxed line-clamp-2">
                                            {rpost.summary}
                                        </p>
                                    </article>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-[#D4AF37] font-bold text-sm hover:opacity-80 transition-opacity"
                            >
                                Ver todos os artigos <i className="ph-bold ph-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
