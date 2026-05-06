"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "5511940331432";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, vim pelo site e quero agendar uma avaliação")}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo Amar-TEA" width={60} height={60} className="w-auto h-12 md:h-16" />
        </Link>
        
        {/* Navigation - Hidden on mobile for landing page clean feel */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#sobre" className="font-heading font-medium text-text-main hover:text-primary transition-colors">Sobre</Link>
          <Link href="/#especialidades" className="font-heading font-medium text-text-main hover:text-primary transition-colors">Serviços</Link>
          <Link href="/#como-funciona" className="font-heading font-medium text-text-main hover:text-primary transition-colors">Como Funciona</Link>
        </nav>

        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-heading font-bold text-sm md:text-base shadow-lg transition-all active:scale-95"
        >
          Agendar Avaliação
        </a>
      </div>
    </header>
  );
}
