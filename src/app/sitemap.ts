import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/api';

const SITE_URL = 'https://dksmarketing.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
    // Static pages
    const staticPages = [
        '',
        '/sobre',
        '/servicos',
        '/metodologia',
        '/blog',
        '/consultoria',
        '/diagnostico',
        '/proposta',
        '/portal',
        '/admin' // depending on whether you want to crawl this or not
        // remove /login and /cadastro for SEO if needed
    ].map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Blog Posts
    const posts = getAllPosts(['slug', 'date']);

    const postPages = posts.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...postPages];
}
