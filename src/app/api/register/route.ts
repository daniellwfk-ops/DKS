import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, password, restaurant, phone } = body;

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "Nome, email e senha são obrigatórios." },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: "Senha precisa ter no mínimo 6 caracteres." },
                { status: 400 }
            );
        }

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
