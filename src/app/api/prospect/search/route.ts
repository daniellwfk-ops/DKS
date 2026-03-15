import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Lead, LeadStatus } from '@/app/prospect/types';

const SearchSchema = z.object({
  nicho: z.string().min(2).max(100),
  cidade: z.string().min(2).max(100),
  max: z.number().int().min(5).max(40).default(20),
});

// ─── Apify response shape ─────────────────────────────────────────────────────

type SocialMedia = {
  platform?: string;
  url?: string;
};

type ApifyItem = {
  title?: string;
  categoryName?: string;
  address?: string;
  neighborhood?: string;
  city?: string;
  phone?: string;
  website?: string;
  totalScore?: number;
  reviewsCount?: number;
  socialMedia?: SocialMedia[];
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function extractInstagram(item: ApifyItem): string {
  // 1. Check socialMedia array (most reliable source)
  if (Array.isArray(item.socialMedia)) {
    for (const sm of item.socialMedia) {
      const url = sm.url ?? '';
      if (url.includes('instagram.com')) {
        const match = url.match(/instagram\.com\/([A-Za-z0-9_.]+)/);
        if (match?.[1] && match[1] !== 'p') return match[1];
      }
    }
  }
  // 2. Fallback: website URL is an Instagram link
  if (item.website?.includes('instagram.com')) {
    const match = item.website.match(/instagram\.com\/([A-Za-z0-9_.]+)/);
    if (match?.[1] && match[1] !== 'p') return match[1];
  }
  return '';
}

function normalizePhone(raw?: string): string {
  if (!raw) return '';
  const digits = raw.replace(/\D/g, '');
  // Strip Brazil country code +55 if present
  if (digits.startsWith('55') && digits.length >= 12) return digits.slice(2);
  return digits;
}

function mapToLead(item: ApifyItem, index: number): Lead {
  return {
    id: `apify-${Date.now()}-${index}`,
    nome: item.title ?? 'Sem nome',
    nicho: item.categoryName ?? 'Restaurante',
    endereco: item.address ?? '',
    bairro: item.neighborhood ?? '',
    cidade: item.city ?? '',
    telefone: normalizePhone(item.phone),
    instagram: extractInstagram(item),
    rating: item.totalScore ?? 0,
    totalReviews: item.reviewsCount ?? 0,
    status: 'capturados' as LeadStatus,
    createdAt: new Date().toISOString().split('T')[0],
  };
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: 'Body inválido.' }, { status: 400 });
  }

  const parsed = SearchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Dados inválidos.', details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { nicho, cidade, max } = parsed.data;
  const token = process.env.APIFY_API_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'APIFY_API_TOKEN não configurado no servidor.' },
      { status: 500 }
    );
  }

  const searchQuery = `${nicho} ${cidade}`;

  try {
    // compass/google-maps-scraper — run synchronously and return dataset items directly
    const apifyRes = await fetch(
      `https://api.apify.com/v2/acts/compass~google-maps-scraper/run-sync-get-dataset-items?token=${token}&timeout=120`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          searchStringsArray: [searchQuery],
          maxCrawledPlaces: max,
          language: 'pt',
          countryCode: 'br',
        }),
        // Node fetch signal for hard abort
        signal: AbortSignal.timeout(130_000),
      }
    );

    if (!apifyRes.ok) {
      const text = await apifyRes.text();
      console.error('[prospect/search] Apify error:', apifyRes.status, text);
      return NextResponse.json(
        { error: `Apify retornou ${apifyRes.status}. Verifique o token ou tente novamente.` },
        { status: 502 }
      );
    }

    const items: ApifyItem[] = await apifyRes.json();
    const leads = items.map(mapToLead);

    return NextResponse.json({ leads, total: leads.length });
  } catch (err) {
    console.error('[prospect/search] Fetch error:', err);
    const message =
      err instanceof Error && err.name === 'TimeoutError'
        ? 'A busca demorou muito. Reduza a quantidade ou tente novamente.'
        : 'Falha ao conectar com a API Apify.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
