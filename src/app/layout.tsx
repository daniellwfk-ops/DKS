import type { Metadata } from "next";
import { Sora, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

// Configure Sora font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: 'swap',
});

// Configure Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DKS Marketing | Faturamento e Mesas Cheias",
  description: "Transformamos restaurantes em referências de faturamento e mesas cheias. Especialistas em marketing gastronômico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${montserrat.variable}`}>
      <head>
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body className="antialiased font-sans bg-black text-white min-h-screen flex flex-col">
        {/* Animated Marquee Banner */}
        <div className="fixed top-0 left-0 bg-[#D4AF37] text-black font-bold text-xs md:text-[13px] tracking-[0.2em] py-1.5 md:py-2 overflow-hidden flex items-center w-full z-50">
          <div className="animate-marquee">
            {/* We duplicate the text 10 times to ensure a seamless 50% translation loop */}
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
      </body>
    </html>
  );
}
