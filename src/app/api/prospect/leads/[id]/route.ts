import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const data = await request.json();
        const { id } = await params;

        // Supondo que estamos apenas atualizando o 'status' para mover no Kanban
        const lead = await prisma.lead.update({
            where: { id },
            data: { status: data.status },
        });

        return NextResponse.json(lead);
    } catch (error) {
        console.error('Erro ao atualizar lead:', error);
        return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.lead.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Erro ao deletar lead:', error);
        return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
    }
}
