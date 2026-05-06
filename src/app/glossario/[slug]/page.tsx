"use client";

import { useParams, useRouter } from "next/navigation";
import { glossaryData } from "../data";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Brain, Puzzle, Info, Star, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const iconMap: { [key: string]: any } = {
  tea: Puzzle,
  tdah: Brain,
  tod: MessageSquare,
  tpac: Info,
  tag: Star,
  toc: Star,
  tdl: MessageSquare,
  tps: Heart
};

export default function GlossaryDetailPage() {
  const params = useParams();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    const slug = params.slug as string;
    const found = glossaryData.find((d) => d.id === slug);
    if (found) {
      setItem(found);
    }
  }, [params.slug]);

  if (!item) {
    return (
      <div className="container" style={{ padding: "10rem 2rem", textAlign: "center" }}>
        <h2 style={{ color: "var(--primary)" }}>Carregando informações...</h2>
      </div>
    );
  }

  const IconComponent = iconMap[item.id] || Info;

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Header Spacer */}
      <div className="h-24 md:h-32"></div>

      <section className="py-8">
        <div className="container-custom">
          <Link 
            href="/#glossario" 
            className="inline-flex items-center gap-2 mb-12 text-lg font-medium text-primary-dark hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} /> Voltar para o glossário
          </Link>

          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-black/5 border border-black/5 relative overflow-hidden">
            {/* Decoration Background */}
            <div 
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
              style={{ background: item.color }}
            ></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
                <div className="space-y-4">
                  <div 
                    className="inline-block px-6 py-2.5 rounded-full font-bold text-xl font-heading tracking-wider"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    {item.abbr}
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-text-main leading-tight max-w-2xl">
                    {item.title}
                  </h1>
                </div>
                <div 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] flex items-center justify-center rotate-6 shadow-xl shrink-0"
                  style={{ backgroundColor: "var(--primary-bg)", color: item.color, boxShadow: `0 15px 30px ${item.color}20` }}
                >
                  <IconComponent size={60} strokeWidth={1.5} className="md:w-16 md:h-16" />
                </div>
              </div>

              <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-4xl leading-relaxed">
                {item.description}
              </p>

              <hr className="border-gray-100 mb-12" />

              <div className="prose prose-lg max-w-none text-text-main">
                {item.content.split('\n').map((line: string, i: number) => {
                  if (line.trim().startsWith('###')) {
                    return (
                      <h3 key={i} className="text-2xl md:text-3xl font-bold mt-12 mb-6 font-heading" style={{ color: item.color }}>
                        {line.replace('###', '')}
                      </h3>
                    );
                  }
                  if (line.trim().startsWith('-')) {
                    return (
                      <li key={i} className="list-none relative pl-8 mb-4 text-lg md:text-xl">
                        <span className="absolute left-0 font-bold" style={{ color: item.color }}>•</span>
                        {line.replace('-', '').trim()}
                      </li>
                    );
                  }
                  if (line.trim().startsWith('1.') || line.trim().startsWith('2.') || line.trim().startsWith('3.')) {
                    return (
                      <div key={i} className="mb-8 p-6 md:p-8 bg-background rounded-2xl border-l-4" style={{ borderColor: item.color }}>
                        <strong className="text-xl md:text-2xl block mb-2">{line.split(':')[0]}</strong>
                        <span className="text-lg md:text-xl text-text-muted leading-relaxed">{line.split(':')[1]}</span>
                      </div>
                    );
                  }
                  if (line.trim() === "") return null;
                  return <p key={i} className="mb-6 text-lg md:text-xl leading-relaxed">{line}</p>;
                })}
              </div>

              <div className="mt-16 p-8 md:p-12 bg-primary-bg/50 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-sm border border-primary/10">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shrink-0 shadow-md">
                  <Heart size={40} />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 text-primary-dark font-heading">Precisa de mais informações?</h4>
                  <p className="text-lg text-text-muted">Nossa equipe de especialistas está à disposição para oferecer o suporte e as orientações necessárias para o desenvolvimento da sua família.</p>
                </div>
                <a 
                  href="/#agendamento" 
                  className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-bold text-xl shadow-lg transition-all active:scale-95 whitespace-nowrap"
                >
                  Falar com Especialista
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
