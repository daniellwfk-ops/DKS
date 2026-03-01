import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

function createSlug(name: string) {
    // Simple slugify: lowercase, remove accents, replace spaces with hyphens, remove special chars
    return name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        // add short random string to avoid collisions
        + "-" + Math.random().toString(36).substring(2, 6);
}

export async function POST(req: Request) {
    try {
        const session = await auth();
        const role = (session?.user as { role?: string })?.role;

        if (role !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }

        const data = await req.json();
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
                validity: Number(data.validity),
                contractMonths: Number(data.contractMonths),
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
