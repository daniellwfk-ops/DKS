import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { rateLimit } from "@/lib/rate-limit";
import { RegisterSchema } from "@/lib/schemas";

export async function POST(req: Request) {
    const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
    const { success } = rateLimit(`register:${ip}`, 5);

    if (!success) {
        return NextResponse.json(
            { error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
            { status: 429 }
        );
    }

    try {
        const body = await req.json();
        const parsed = RegisterSchema.safeParse(body);

        if (!parsed.success) {
            const message = parsed.error.issues[0]?.message ?? "Dados inválidos.";
            return NextResponse.json({ error: message }, { status: 422 });
        }

        const { name, email, password, restaurant, phone } = parsed.data;

        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
            return NextResponse.json(
                { error: "Este e-mail já está cadastrado." },
                { status: 409 }
            );
        }

        const hashed = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashed,
                restaurant: restaurant || null,
                phone: phone || null,
                role: "CLIENT",
            },
        });

        return NextResponse.json(
            { message: "Cadastro realizado com sucesso!", id: user.id },
            { status: 201 }
        );
    } catch (err) {
        console.error("[REGISTER]", err);
        return NextResponse.json(
            { error: "Erro interno. Tente novamente." },
            { status: 500 }
        );
    }
}
