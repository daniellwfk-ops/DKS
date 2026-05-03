import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

// Configure Inter font (Body)
const sora = Inter({
  subsets: ["latin"],
  variable: "--font-sora",
  display: 'swap',
});

// Configure Outfit font (Headings)
const montserrat = Outfit({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dksmarketing.com.br"),
  title: "DKS Marketing | Agência de Marketing para Restaurantes",
  description: "Transformamos restaurantes em referências de faturamento e mesas cheias. Especialistas em marketing gastronômico com o Método ROMA.",
  keywords: [
    "marketing para restaurantes",
    "agência de marketing para gastronomia",
    "aumentar vendas no ifood",
    "marketing gastronômico",
    "dks marketing",
    "lotar mesas",
    "aumentar faturamento restaurante"
  ],
  openGraph: {
    title: "DKS Marketing | Faturamento e Mesas Cheias",
    description: "Transformamos restaurantes em referências de faturamento e mesas cheias.",
    url: "https://dksmarketing.com.br",
    siteName: "DKS Marketing",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/dks-hero-fullbg.jpg",
        width: 1200,
        height: 630,
        alt: "DKS Marketing - Especialistas em crescimento para restaurantes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DKS Marketing",
    description: "Transformamos restaurantes em referências.",
    images: ["/images/dks-hero-fullbg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "ProfessionalService",
               "name": "DKS Marketing",
               "url": "https://dksmarketing.com.br",
               "logo": "https://dksmarketing.com.br/icon.png",
               "image": "https://dksmarketing.com.br/images/dks-hero-fullbg.jpg",
               "description": "Agência de marketing especializada em restaurantes e deliveries. Ajudamos a aumentar seu faturamento e lotar suas mesas com o Método ROMA.",
               "address": {
                 "@type": "PostalAddress",
                 "addressCountry": "BR"
               },
               "sameAs": [
                 "https://www.instagram.com/dksmarketing/"
               ]
             })
          }}
        />
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
