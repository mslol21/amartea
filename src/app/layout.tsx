import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
