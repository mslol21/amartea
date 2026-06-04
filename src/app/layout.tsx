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
  title: "Clínica Amar-TEA | Especialistas em Desenvolvimento Infantil e Método ABA",
  description: "Clínica multidisciplinar em Suzano focada no desenvolvimento infantil. Especialistas em Método ABA, TEA, TDAH, Psicologia, Fonoaudiologia e Terapia Ocupacional.",
  keywords: [
    "clínica infantil suzano", "psicologia infantil", "terapia ocupacional suzano", 
    "fonoaudiologia infantil", "TEA suzano", "autismo", "TDAH", "método ABA", 
    "desenvolvimento infantil", "Amar-TEA", "clínica multidisciplinar"
  ],
  authors: [{ name: "Clínica Amar-TEA" }],
  creator: "Clínica Amar-TEA",
  publisher: "Clínica Amar-TEA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.amartea.com.br",
  },
  openGraph: {
    title: "Clínica Amar-TEA | Desenvolvimento e Cuidado Terapêutico",
    description: "Clínica multidisciplinar de referência em reabilitação para TEA, TDAH, TOD e aplicação do Método ABA. Atendimento humanizado e especializado.",
    url: "https://www.amartea.com.br",
    siteName: "Clínica Amar-TEA",
    images: [
      {
        url: "/clinica.jpeg",
        width: 1200,
        height: 630,
        alt: "Clínica Amar-TEA - Fachada e recepção",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Amar-TEA | Desenvolvimento Infantil",
    description: "Especialistas em desenvolvimento infantil, Método ABA e reabilitação multidisciplinar.",
    images: ["/clinica.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  verification: {
    // Se o cliente precisar adicionar meta tag de verificação do google search console no futuro
    // google: "id-verificacao-aqui",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased font-body relative">
        <div className="fixed inset-0 w-full h-full bg-brand-pattern opacity-[0.10] mix-blend-multiply pointer-events-none z-0"></div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
