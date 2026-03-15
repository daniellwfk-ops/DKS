import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { randomBytes } from "crypto";
import { rateLimit } from "@/lib/rate-limit";
import { ProposalSchema } from "@/lib/schemas";

function createSlug(name: string) {
    const base = name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
    return `${base}-${randomBytes(4).toString("hex")}`;
}

export async function POST(req: Request) {
    const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
    const { success } = rateLimit(`proposals:${ip}`, 20);

    if (!success) {
        return NextResponse.json(
            { error: "Too many requests." },
            { status: 429 }
        );
    }

    try {
        const session = await auth();
        const role = (session?.user as { role?: string })?.role;

        if (role !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }

        const body = await req.json();
        const parsed = ProposalSchema.safeParse(body);

        if (!parsed.success) {
            const message = parsed.error.issues[0]?.message ?? "Dados inválidos.";
            return NextResponse.json({ error: message }, { status: 422 });
        }

        const data = parsed.data;
        const slug = createSlug(data.clientName);

        const proposal = await prisma.proposal.create({
            data: {
                slug,
                clientName: data.clientName,
                restaurantName: data.restaurantName || null,
                email: data.email || null,
                phone: data.phone || null,
                services: JSON.stringify(data.services),
                total: data.total,
                validity: data.validity,
                contractMonths: data.contractMonths,
                observations: data.observations || null,
            },
        });

        return NextResponse.json({ success: true, slug: proposal.slug });
    } catch (error) {
        console.error("[PROPOSAL_CREATE]", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
