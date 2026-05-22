"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "551147485277";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, vim pelo site e quero agendar uma avaliação")}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
