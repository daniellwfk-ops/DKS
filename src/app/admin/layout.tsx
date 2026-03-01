"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import AuthSessionProvider from "@/components/AuthSessionProvider";

const navItems = [
    { label: "Dashboard", href: "/admin", icon: "🏠" },
    { label: "Clientes", href: "/admin/clientes", icon: "👥" },
    { label: "Criador de Propostas", href: "/admin/propostas", icon: "📋" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <AuthSessionProvider>
            <AdminLayoutInner>{children}</AdminLayoutInner>
        </AuthSessionProvider>
    );
}

function AdminLayoutInner({ children }: { children: ReactNode }) {
    const { data: session } = useSession();
    const pathname = usePathname();
    const user = session?.user as { name?: string; email?: string } | undefined;

    return (
        <div
            className="min-h-screen bg-[#000] text-white flex"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
            {/* Sidebar */}
            <aside className="w-64 flex-shrink-0 border-r border-[#D4AF37]/10 bg-[#050500] flex flex-col min-h-screen fixed left-0 top-0 bottom-0 z-40">
                {/* Logo + Admin badge */}
                <div className="px-6 py-6 border-b border-[#D4AF37]/10">
                    <Link href="/" className="font-black text-2xl tracking-tighter text-white">
                        DKS<span className="text-[#D4AF37]">.</span>
                    </Link>
                    <div className="mt-2 inline-flex items-center gap-1.5 bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full">
                        <span>⭐</span> Admin
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex-1 px-3 py-4 space-y-1">
                    {navItems.map((item) => {
                        const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${active
                                    ? "bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/20"
                                    : "text-[#888] hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <span>{item.icon}</span>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* User + signout */}
                <div className="px-4 py-4 border-t border-[#D4AF37]/10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-black text-sm flex-shrink-0">
                            {user?.name?.[0]?.toUpperCase() ?? "A"}
                        </div>
                        <div className="min-w-0">
                            <p className="text-white text-sm font-medium truncate">{user?.name ?? "Admin"}</p>
                            <p className="text-[#555] text-xs truncate">{user?.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => signOut({ callbackUrl: "/login" })}
                        className="w-full text-left text-xs text-[#555] hover:text-red-400 transition-colors py-1 px-2"
                    >
                        ↩ Sair
                    </button>
                </div>
            </aside>

            {/* Main */}
            <main className="ml-64 flex-1 min-h-screen p-8">
                {children}
            </main>
        </div>
    );
}
