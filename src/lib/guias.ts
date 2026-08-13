import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const guiasDirectory = path.join(process.cwd(), '_guias');

export type Guia = {
    slug: string;
    title: string;
    excerpt: string;
    categoria: string;
    ordem: number;
    tempoLeitura: string;
    content: string;
};

export function getGuiaSlugs(): string[] {
    if (!fs.existsSync(guiasDirectory)) return [];
    return fs
        .readdirSync(guiasDirectory)
        .filter((file) => file.endsWith('.md'))
        .map((file) => file.replace(/\.md$/, ''));
}

export function getGuiaBySlug(slug: string): Guia | null {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(guiasDirectory, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) return null;

    const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));

    return {
        slug: realSlug,
        title: data.title ?? realSlug,
        excerpt: data.excerpt ?? '',
        categoria: data.categoria ?? 'Geral',
        ordem: typeof data.ordem === 'number' ? data.ordem : 999,
        tempoLeitura: data.tempoLeitura ?? '',
        content,
    };
}

export function getAllGuias(): Guia[] {
    return getGuiaSlugs()
        .map(getGuiaBySlug)
        .filter((g): g is Guia => g !== null)
        .sort((a, b) => a.ordem - b.ordem);
}

export function getGuiasPorCategoria(): Record<string, Guia[]> {
    return getAllGuias().reduce<Record<string, Guia[]>>((acc, guia) => {
        (acc[guia.categoria] ??= []).push(guia);
        return acc;
    }, {});
}
