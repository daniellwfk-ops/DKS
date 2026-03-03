import { getPostBySlug, getAllPosts } from '@/lib/api';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export async function generateStaticParams() {
    const posts = getAllPosts(['slug']);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'coverImage',
    ]);

    return (
        <main className="min-h-screen bg-[#000000] text-white pt-24 md:pt-32 pb-20">
            {/* Hero Image / Banner */}
            <div className="max-w-4xl mx-auto px-6 mb-12">
                <Link href="/blog" className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors mb-8 inline-block">
                    ← Voltar para o Blog
                </Link>

                {post.coverImage && (
                    <div
                        className="w-full h-[400px] md:h-[500px] rounded-3xl mb-12 bg-cover bg-center border border-white/10 shadow-2xl relative overflow-hidden"
                        style={{ backgroundImage: `url(${post.coverImage})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/40 to-transparent"></div>
                    </div>
                )}

                <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: "var(--font-montserrat)" }}>{post.title as string}</h1>
                <div className="flex items-center gap-4 text-[#888] text-sm mb-10 pb-10 border-b border-white/10">
                    <span>Por <strong className="text-white">{post.author as string}</strong></span>
                    <span>•</span>
                    <span>{post.date as string}</span>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6">
                {/* Markdown Content Wrapper */}
                <article className="
          [&>h2]:text-2xl [&>h2]:font-black [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:text-white 
          [&>h3]:text-xl [&>h3]:font-black [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-white 
          [&>p]:text-[#A1A1AA] [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg
          [&>ul]:list-none [&>ul]:mb-8 [&>ul]:space-y-3 [&>ul]:pl-0
          [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li]:text-[#A1A1AA] [&>ul>li]:text-lg
          [&>ul>li::before]:content-[''] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:top-2.5 [&>ul>li::before]:w-2 [&>ul>li::before]:h-2 [&>ul>li::before]:bg-[#D4AF37] [&>ul>li::before]:rounded-full
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol]:text-[#A1A1AA] [&>ol]:text-lg [&>ol>li]:mb-3 [&>ol>li::marker]:text-[#D4AF37] [&>ol>li::marker]:font-bold
          [&>blockquote]:border-l-4 [&>blockquote]:border-[#D4AF37] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-[#CFCFCF] [&>blockquote]:bg-white/5 [&>blockquote]:py-4 [&>blockquote]:pr-6 [&>blockquote]:rounded-r-xl [&>blockquote]:my-10
          [&>blockquote>p]:mb-0 [&>blockquote>p]:text-xl
          [&_a]:text-[#D4AF37] [&_a]:font-bold [&_a]:underline-offset-4 hover:[&_a]:underline hover:[&_a]:text-[#FFC000]
          [&_strong]:text-white [&_strong]:font-bold
        ">
                    <ReactMarkdown>{post.content as string}</ReactMarkdown>
                </article>

                {/* Floating CTA / Footer CTA within the article */}
                <div className="mt-20 p-8 rounded-2xl border border-[#D4AF37]/20 bg-[#0A0A0C] text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none"></div>

                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                        Pronto para dominar a sua região?
                    </h3>
                    <p className="text-[#888] mb-8 text-lg">
                        Pare de torcer para o cliente entrar pela porta ou abrir o app. Atraia as mesas certas e decole nos rankings do iFood com a DKS.
                    </p>
                    <a
                        href="https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#00CC00] text-white font-black text-sm uppercase tracking-widest px-8 md:px-12 py-5 rounded hover:bg-[#00B300] transition-colors shadow-[0_0_30px_rgba(0,204,0,0.25)] hover:-translate-y-1 relative z-10"
                    >
                        Quero Contratar a DKS →
                    </a>
                </div>
            </div>
        </main>
    );
}
