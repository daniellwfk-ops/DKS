import type { Metadata } from "next";
import { Sora, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2J9Q6RC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>

        {/* Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N2J9Q6RC');
          `}
        </Script>


      </body>
    </html>
  );
}
