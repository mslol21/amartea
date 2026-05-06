import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import FloatingElements from "./components/FloatingElements";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica Amar-TEA | Desenvolvimento e Cuidado Terapêutico",
  description: "Clínica multidisciplinar com foco terapêutico e desenvolvimento infantil. Especialidades em Psicologia, Terapia Ocupacional, Fonoaudiologia e muito mais. Agende uma avaliação.",
  keywords: ["clínica", "psicologia", "terapia ocupacional", "fonoaudiologia", "TEA", "desenvolvimento infantil", "Amar-TEA"],
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased font-body">
        <FloatingElements />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
