import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const leads = await prisma.lead.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(leads);
    } catch (error) {
        console.error('Erro ao buscar leads:', error);
        return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Suporte para salvar múltiplos leads de uma vez (array)
        // ou apenas um (objeto)
        if (Array.isArray(data)) {
            const createdLeads = await prisma.$transaction(
                data.map((lead) =>
                    prisma.lead.create({
                        data: {
                            nome: lead.nome,
                            endereco: lead.endereco,
                            bairro: lead.bairro,
                            telefone: lead.telefone,
                            instagram: lead.instagram,
                            rating: lead.rating,
                            totalReviews: lead.totalReviews,
                            nicho: lead.nicho,
                            cidade: lead.cidade,
                            status: lead.status || 'capturados',
                        },
                    })
                )
            );
            return NextResponse.json(createdLeads);
        } else {
            const lead = await prisma.lead.create({
                data: {
                    ...data,
                    status: data.status || 'capturados',
                },
            });
            return NextResponse.json(lead);
        }
    } catch (error) {
        console.error('Erro ao criar lead(s):', error);
        return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
    }
}
