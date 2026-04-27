import { prisma } from '@/lib/prisma';
import ProspectClient from './components/ProspectClient';
import { LeadStatus } from './types';

export const metadata = {
  title: 'DKS Prospect | Mini-CRM',
};

export const dynamic = 'force-dynamic';

export default async function ProspectPage() {
  const dbLeads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' },
  });

  // Converte a data Date para string para passar pro Client Component
  const formattedLeads = dbLeads.map((lead) => ({
    ...lead,
    endereco: lead.endereco ?? '',
    bairro: lead.bairro ?? '',
    telefone: lead.telefone ?? '',
    instagram: lead.instagram ?? '',
    rating: lead.rating ?? 0,
    totalReviews: lead.totalReviews ?? 0,
    nicho: lead.nicho ?? '',
    cidade: lead.cidade ?? '',
    status: lead.status as LeadStatus,
    createdAt: lead.createdAt.toISOString(),
    updatedAt: lead.updatedAt.toISOString(),
  }));

  return <ProspectClient initialLeads={formattedLeads} />;
}
