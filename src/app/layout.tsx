import type { Metadata } from "next";
import { Sora, Montserrat } from "next/font/google";
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
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
