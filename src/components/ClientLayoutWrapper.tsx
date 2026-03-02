"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

// Pages that should NOT have the full layout (header, footer, banner, leadster)
const CLEAN_LAYOUT_ROUTES = ["/apresentacao", "/podcast", "/apresentacao2", "/apresentacao3"];

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isClean = CLEAN_LAYOUT_ROUTES.some(route => pathname === route || pathname.startsWith(route + "/"));

    if (isClean) {
        return <>{children}</>;
    }

    return (
        <>
            {/* Animated Marquee Banner */}
            <div className="fixed top-0 left-0 bg-[#D4AF37] text-black font-bold text-xs md:text-[13px] tracking-[0.2em] py-1.5 md:py-2 overflow-hidden flex items-center w-full z-50">
                <div className="animate-marquee">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="mx-6 md:mx-10 select-none whitespace-nowrap">
                            EXCLUSIVO PARA RESTAURANTES QUE QUEIRAM AUMENTAR O FATURAMENTO
                        </span>
                    ))}
                </div>
            </div>

            <Header />
            <main className="flex-grow pt-[28px] md:pt-[34px]">
                {children}
            </main>
            <Footer />

            {/* Leadster Widget */}
            <Script id="leadster" strategy="afterInteractive">
                {`(function(a,b,c,d){try{var e=b.head||b.getElementsByTagName("head")[0];var f=b.createElement("script");f.setAttribute("src",c);f.setAttribute("charset","UTF-8");f.defer=true;a.neuroleadId=d;e.appendChild(f)}catch(g){}})(window,document,"https://cdn.leadster.com.br/neurolead/neurolead.min.js","GADidxopEUrEBKvUxDNDepcO2")`}
            </Script>
        </>
    );
}
