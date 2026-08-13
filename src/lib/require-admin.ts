import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function requireAdmin(): Promise<NextResponse | null> {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }
    if ((session.user as { role?: string }).role !== "ADMIN") {
        return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }
    return null;
}
