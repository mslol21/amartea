"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Camera, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const whatsappNumber = "551147485277";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, vim pelo site e quero agendar uma avaliação")}`;

  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-surface p-2 rounded-xl shadow-sm">
              <Image src="/logo.png" alt="Logo Amar-TEA" width={100} height={100} className="w-auto h-16" />
            </Link>
            <p className="text-white/70 max-w-sm leading-relaxed">
              Clínica multidisciplinar com foco terapêutico e desenvolvimento infantil, oferecendo um cuidado humano, integrado e baseado em evidências.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-heading font-bold">Navegação</h4>
            <ul className="space-y-4">
              <li><Link href="/#sobre" className="text-white/60 hover:text-white transition-colors">Sobre a Clínica</Link></li>
              <li><Link href="/#especialidades" className="text-white/60 hover:text-white transition-colors">Serviços & Especialidades</Link></li>
              <li><Link href="/#glossario" className="text-white/60 hover:text-white transition-colors">Glossário de Siglas</Link></li>
              <li><Link href="/#depoimentos" className="text-white/60 hover:text-white transition-colors">Depoimentos</Link></li>
              <li><Link href="/#como-funciona" className="text-white/60 hover:text-white transition-colors">Como Funciona</Link></li>
              <li><Link href="/#localizacao" className="text-white/60 hover:text-white transition-colors">Onde Estamos</Link></li>
              <li><Link href="/trabalhe-conosco" className="text-white/60 hover:text-white transition-colors">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-heading font-bold">Contato & Redes</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://instagram.com/clinicamartea" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                  <Camera size={20} className="text-secondary-light" />
                  @clinicamartea
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                  <MessageCircle size={20} className="text-whatsapp" />
                  (11) 4748-5277
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={20} className="text-primary-light mt-1" />
                <span>Rua Antônio Renzi Primo, 121 - Vila Costa, Suzano - SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Clínica Amar-TEA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
