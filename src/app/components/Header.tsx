"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const whatsappNumber = "5511940331432";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, vim pelo site e quero agendar uma avaliação")}`;

  const navLinks = [
    { name: "Sobre", href: "/#sobre" },
    { name: "Serviços", href: "/#especialidades" },
    { name: "Glossário", href: "/#glossario" },
    { name: "Depoimentos", href: "/#depoimentos" },
    { name: "Como Funciona", href: "/#como-funciona" },
    { name: "Localização", href: "/#localizacao" },
    { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled || isMenuOpen ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}>
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo Amar-TEA" width={60} height={60} className="w-auto h-12 md:h-16" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="font-heading font-medium text-text-main hover:text-primary transition-colors text-sm xl:text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary-dark text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-heading font-bold text-xs md:text-base shadow-lg transition-all active:scale-95 whitespace-nowrap"
            >
              Agendar Avaliação
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-text-main hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-[999] bg-white transition-all duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="font-heading font-bold text-2xl text-text-main hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 bg-whatsapp text-white px-8 py-4 rounded-full font-heading font-bold text-xl shadow-xl flex items-center gap-2"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
