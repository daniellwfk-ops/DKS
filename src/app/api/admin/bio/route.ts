import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { promises as fs } from "fs";
import path from "path";

const jsonFilePath = path.join(process.cwd(), "public", "bio-data.json");

export async function GET() {
    try {
        const session = await auth();
        const role = (session?.user as { role?: string })?.role;

        if (role !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }

        try {
            const data = await fs.readFile(jsonFilePath, "utf-8");
            return NextResponse.json(JSON.parse(data));
        } catch (readError: any) {
            if (readError.code === "ENOENT") {
                return NextResponse.json({
                    brandName: "DKS Marketing",
                    logoUrl: "",
                    badgeText: "MÉTODO EXCLUSIVO ROMA",
                    tagline: "Assessoria que faz restaurantes e deliveries\nbaterem recordes de faturamento.",
                    cta: { label: "Falar com Especialista", url: "https://app.leadster.com.br/capture/GgOLgXHkEDtqvhx7" },
                    links: [
                        { label: "Conhecer Metodologia ROMA", url: "/metodologia" },
                        { label: "Nosso Site", url: "/" },
                        { label: "Instagram Oficial", url: "https://www.instagram.com/dksmarketing/" }
                    ]
                });
            }
            throw readError;
        }
    } catch (error) {
        console.error("[BIO_GET_ERROR]", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await auth();
        const role = (session?.user as { role?: string })?.role;

        if (role !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
        }

        const body = await req.json();

        if (!body.brandName) {
            return NextResponse.json({ error: "O nome da marca é obrigatório." }, { status: 400 });
        }

        const dataToSave = {
            brandName: body.brandName,
            logoUrl: body.logoUrl || "",
            badgeText: body.badgeText || "",
            tagline: body.tagline || "",
            cta: {
                label: body.cta?.label || "",
                url: body.cta?.url || ""
            },
            links: Array.isArray(body.links) ? body.links.map((link: any) => ({
                label: link.label || "",
                url: link.url || ""
            })).filter((link: any) => link.label !== "") : []
        };

        await fs.writeFile(jsonFilePath, JSON.stringify(dataToSave, null, 2), "utf-8");

        return NextResponse.json({ success: true, data: dataToSave });
    } catch (error) {
        console.error("[BIO_POST_ERROR]", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
