import Link from 'next/link';
import { getAllPosts } from '@/lib/api';

export default function BlogPage() {
    const posts = getAllPosts(['title', 'date', 'slug', 'author', 'excerpt', 'coverImage']);

    return (
        <main className="min-h-screen bg-[#000000] text-white pt-32 pb-20">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Conteúdos Estratégicos
                    <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-[#D4AF37]/20">Blog B2B</span>
                </h1>
                <p className="text-[#888] text-lg mb-12">Artigos, cases e táticas para dominar as vendas e escalar o seu restaurante.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug as string} href={`/blog/${post.slug}`} className="group block bg-[#0A0A0C] border border-white/5 rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1 shadow-2xl">
                            <div className="aspect-[16/9] w-full bg-cover bg-center" style={{ backgroundImage: `url(${post.coverImage})` }}>
                                <div className="w-full h-full bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
                            </div>
                            <div className="p-6">
                                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">{post.date as string}</span>
                                <h2 className="text-xl font-bold text-white mt-2 mb-3 leading-snug group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "var(--font-montserrat)" }}>{post.title as string}</h2>
                                <p className="text-[#888] text-sm leading-relaxed line-clamp-3">{post.excerpt as string}</p>
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="text-white text-xs font-bold group-hover:text-[#D4AF37] transition-colors">Ler artigo completo →</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
