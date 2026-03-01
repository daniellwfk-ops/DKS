/**
 * Script para criar a conta de administrador.
 * Execute após instalar dependências e rodar prisma migrate:
 *   npx ts-node --compiler-options '{"module":"CommonJS"}' prisma/seed.ts
 *
 * Ou usando tsx:
 *   npx tsx prisma/seed.ts
 */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    const ADMIN_EMAIL = "daniel@dksmarketing.com.br"; // ← mude aqui
    const ADMIN_PASSWORD = "dks@admin2024";             // ← mude aqui
    const ADMIN_NAME = "Daniel Soares";

    const existing = await prisma.user.findUnique({ where: { email: ADMIN_EMAIL } });

    if (existing) {
        console.log(`✅ Admin já existe: ${ADMIN_EMAIL}`);
        return;
    }

    const hashed = await bcrypt.hash(ADMIN_PASSWORD, 12);

    await prisma.user.create({
        data: {
            name: ADMIN_NAME,
            email: ADMIN_EMAIL,
            password: hashed,
            role: "ADMIN",
        },
    });

    console.log(`🚀 Admin criado com sucesso!`);
    console.log(`   E-mail: ${ADMIN_EMAIL}`);
    console.log(`   Senha:  ${ADMIN_PASSWORD}`);
    console.log(`   ⚠️  ALTERE a senha após o primeiro login!`);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
