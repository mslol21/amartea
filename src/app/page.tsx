"use client";

import Image from "next/image";
import { 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MapPin, 
  Mail,
  ChevronDown,
  Star,
  ShieldCheck,
  Zap,
  Users,
  Heart,
  Music,
  Brain,
  Salad,
  Activity,
  ClipboardList
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { glossaryData } from "./glossario/data";
import Script from "next/script";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function LandingPage() {
  const whatsappNumber = "551147485277";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, vim pelo site e quero agendar uma avaliação")}`;

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: "Funciona mesmo?",
      a: "Sim! Utilizamos abordagens baseadas em evidências científicas, como a Análise do Comportamento Aplicada (ABA), que é o padrão ouro para o tratamento do TEA e atrasos de desenvolvimento."
    },
    {
      q: "Meu filho realmente precisa?",
      a: "A intervenção precoce é fundamental. Quanto antes identificarmos e trabalharmos os atrasos, maior é o potencial de plasticidade cerebral e melhores são os resultados a longo prazo."
    },
    {
      q: "É muito caro?",
      a: "Oferecemos diferentes planos e pacotes terapêuticos. Acreditamos que o investimento no desenvolvimento do seu filho hoje evita custos emocionais e financeiros muito maiores no futuro."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-28 bg-gradient-to-br from-[var(--color-soft-beige-light)] via-background to-soft-mint overflow-hidden">
        <div className="absolute inset-0 bg-brand-pattern opacity-[0.03] mix-blend-multiply"></div>
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur shadow-sm border border-primary/10 text-primary-dark font-medium mb-6">
              <ShieldCheck size={18} />
              <span>Clínica Especializada em Desenvolvimento Infantil</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-text-main mb-6 leading-[1.1] tracking-tight">
              Desenvolvimento Infantil <span className="text-primary">Especializado</span> & Multidisciplinar
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed max-w-2xl">
              Clínica de referência em reabilitação para <strong>TEA, TDAH, TOD, TAG e TPAC</strong>. 
              Somos especialistas no <strong>Método ABA</strong> e também oferecemos uma estrutura completa para <strong>atendimentos terapêuticos e clínicos convencionais</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-5 rounded-full font-heading text-lg font-bold shadow-xl shadow-whatsapp/20 transition-all hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <MessageCircle size={24} />
                Falar com especialista no WhatsApp
              </a>
              <div className="flex flex-col text-sm text-text-muted">
                <span className="flex items-center gap-1"><Zap size={14} className="text-secondary" /> Resposta rápida</span>
                <span className="flex items-center gap-1"><Users size={14} className="text-primary" /> Atendimento humanizado</span>
                <span className="flex items-center gap-1"><Star size={14} className="text-mustard" /> Primeira orientação</span>
              </div>
            </div>
          </div>
          <div 
            className="relative lg:block hidden"
          >
            <div className="relative z-20 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-surface">
              <Image 
                src="/clinica.jpeg" 
                alt="Clínica Multidisciplinar Amar-TEA" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
          </div>
        </div>
      </section>

      {/* 2. BLOCO DE IDENTIFICAÇÃO (DOR) */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-brand-pattern opacity-[0.02] mix-blend-multiply pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-text-main">Você tem percebido isso no seu filho?</h2>
              <p className="text-lg text-text-muted">Sinais que podem indicar a necessidade de um acompanhamento especializado.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Não responde quando é chamado",
                "Fala pouco ou não fala",
                "Evita contato visual",
                "Tem crises ou irritação constante",
                "A escola já sinalizou preocupação",
                "Dificuldade em interagir com outras crianças"
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-5 p-6 rounded-[2rem] bg-surface border border-secondary/10 shadow-xl shadow-secondary/5 hover:-translate-y-1 hover:shadow-secondary/10 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg font-medium text-text-main">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl font-bold text-secondary mb-8">"Quanto antes agir, melhores são os resultados."</p>
              <a href={whatsappUrl} className="inline-flex items-center gap-2 text-primary-dark font-bold hover:underline decoration-2 underline-offset-4">
                Quero conversar sobre meu filho <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 ESPECIALIDADES FOCO */}
      <section className="section-padding bg-soft-blue/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-text-main">Áreas de Especialidade</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Nossa equipe está preparada para oferecer o suporte específico que cada diagnóstico exige.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { id: 'tea', label: 'TEA', full: 'Autismo', color: 'bg-primary' },
              { id: 'tdah', label: 'TDAH', full: 'Atenção e Foco', color: 'bg-secondary' },
              { id: 'tod', label: 'TOD', full: 'Comportamento', color: 'bg-accent' },
              { id: 'tag', label: 'TAG', full: 'Ansiedade', color: 'bg-mustard' },
              { id: 'tpac', label: 'TPAC', full: 'Processamento Auditivo Central', color: 'bg-primary-light' }
            ].map((item) => (
              <Link 
                key={item.id} 
                href={`/glossario/${item.id}`}
                className="group relative overflow-hidden p-8 rounded-3xl bg-surface border border-primary/5 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-center"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.color} mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl`}>
                  {item.label[0]}
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors text-text-main">{item.label}</h3>
                <p className="text-xs text-text-muted font-medium uppercase tracking-wider">{item.full}</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver detalhes <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AUTORIDADE */}
      <section id="sobre" className="section-padding bg-soft-yellow/40">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-8 text-text-main">Especialistas em desenvolvimento infantil</h2>
              <p className="text-base text-text-muted mb-6 leading-relaxed">
                Somos uma clínica multidisciplinar focada no desenvolvimento integral de crianças. Nossa equipe é composta por profissionais apaixonados e altamente qualificados.
              </p>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Criamos planos personalizados para cada paciente, respeitando o tempo e as particularidades de cada criança, sempre envolvendo a família em todas as etapas do processo.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-surface rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">+500</div>
                  <div className="text-sm text-text-muted font-medium">Famílias atendidas</div>
                </div>
                <div className="p-4 bg-surface rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                  <div className="text-sm text-text-muted font-medium">Plano individualizado</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4]">
                  <Image src="/salasensorial.jpeg" alt="Equipe Amar-TEA" width={400} height={530} className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-square bg-secondary p-8 flex items-center justify-center text-white text-center">
                   <p className="font-heading font-bold text-xl">Ambiente acolhedor e lúdico</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-square">
                  <Image src="/salahabilidadessocial.jpeg" alt="Ambiente Real" width={400} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4]">
                   <Image src="/salafisioterapia.jpeg" alt="Cuidado" width={400} height={530} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVO: EQUIPE MULTIDISCIPLINAR */}
      <section className="py-20 bg-soft-mint/20 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary-dark font-bold text-sm mb-6 uppercase tracking-widest">
                Time de Especialistas
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-text-main">Por que o olhar <span className="text-primary">Multidisciplinar</span> é vital?</h2>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Nenhum transtorno do neurodesenvolvimento acontece de forma isolada. Uma criança com TEA pode ter seletividade alimentar (Nutrição) e questões sensoriais (T.O).
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-surface rounded-3xl border border-primary/5 shadow-sm">
                  <h4 className="font-bold text-xl mb-2 flex items-center gap-2 text-text-main">
                    <Users className="text-primary" size={20} /> Discussão de Caso Semanal
                  </h4>
                  <p className="text-text-muted">Toda a equipe se reúne para alinhar a evolução do paciente e ajustar metas em tempo real.</p>
                </div>
                <div className="p-6 bg-surface rounded-3xl border border-primary/5 shadow-sm">
                  <h4 className="font-bold text-xl mb-2 flex items-center gap-2 text-text-main">
                    <Heart className="text-secondary" size={20} /> Acolhimento Familiar
                  </h4>
                  <p className="text-text-muted">Não tratamos apenas a criança. Oferecemos suporte psicológico e treinamento para os pais.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="h-48 bg-soft-blue rounded-3xl overflow-hidden">
                     <Image src="/salapsicologia.jpeg" alt="Terapia" width={300} height={200} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="h-64 bg-primary rounded-3xl flex items-center justify-center p-8 text-white text-center shadow-lg">
                    <p className="font-bold text-xl">Integração Total entre Áreas</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-64 bg-secondary rounded-3xl flex items-center justify-center p-8 text-white text-center shadow-lg">
                     <p className="font-bold text-xl">Evolução Monitorada</p>
                  </div>
                  <div className="h-48 bg-soft-lavender rounded-3xl overflow-hidden">
                     <Image src="/salapsicopedagogia.jpeg" alt="Equipe" width={300} height={200} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-surface shadow-xl p-4 rounded-2xl animate-bounce">
                <span className="text-2xl">🧠</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-surface shadow-xl p-4 rounded-2xl animate-bounce delay-700">
                <span className="text-2xl">🗣️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUÇÃO (SERVIÇOS) */}
      <section id="especialidades" className="section-padding bg-background">
        <div className="container-custom text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-text-main">Nossos Serviços Especializados</h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Oferecemos excelência em intervenção pelo <strong>Método ABA</strong> para neurodesenvolvimento, além de realizarmos todos os <strong>atendimentos terapêuticos convencionais</strong> para pacientes de diversas necessidades e idades.
          </p>
        </div>
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Fonoaudiologia",
              desc: "Especializada em comunicação social, linguagem pragmática e processamento auditivo (TPAC), essenciais para crianças no espectro.",
              icon: <MessageCircle className="text-primary" size={32} />,
              color: "bg-primary/10"
            },
            {
              title: "Psicologia ABA/TCC",
              desc: "Intervenções baseadas em ABA para comportamento e TCC para regulação emocional, ansiedade (TAG) e rigidez cognitiva.",
              icon: <Brain className="text-secondary" size={32} />,
              color: "bg-secondary/10"
            },
            {
              title: "Terapia Ocupacional",
              desc: "Foco em Integração Sensorial, autonomia nas AVDs e seletividade alimentar, tratando a base do neurodesenvolvimento.",
              icon: <Zap className="text-accent" size={32} />,
              color: "bg-accent/10"
            },
            {
              title: "Psicopedagogia",
              desc: "Estratégias personalizadas para dificuldades de aprendizagem decorrentes do TDAH e outros transtornos escolares.",
              icon: <Star className="text-primary" size={32} />,
              color: "bg-primary/10"
            },
            {
              title: "Psicomotricidade",
              desc: "Desenvolvimento do esquema corporal e planejamento motor, fundamentais para a coordenação e consciência de si.",
              icon: <Activity className="text-secondary" size={32} />,
              color: "bg-secondary/10"
            },
            {
              title: "Nutrição Seletiva",
              desc: "Abordagem especializada para a seletividade alimentar severa, comum no autismo, com foco em expansão de cardápio.",
              icon: <Salad className="text-accent" size={32} />,
              color: "bg-accent/10"
            },
            {
              title: "Fisioterapia",
              desc: "Trabalho de tônus muscular, equilíbrio e coordenação motora global para o desenvolvimento físico pleno.",
              icon: <ShieldCheck className="text-primary" size={32} />,
              color: "bg-primary/10"
            },
            {
              title: "Musicoterapia",
              desc: "Uso de estímulos sonoros para abrir canais de comunicação e expressão onde a fala pode ser um desafio.",
              icon: <Music className="text-secondary" size={32} />,
              color: "bg-secondary/10"
            },
            {
              title: "Atendimento Psicológico Convencional",
              desc: "Acolhimento emocional e psicoterapia tradicional para o autoconhecimento, regulação emocional e suporte às famílias.",
              icon: <Heart className="text-mustard" size={32} />,
              color: "bg-mustard/10"
            },
            {
              title: "Avaliação Neuropsicológica",
              desc: "Investigação detalhada das funções cognitivas, atenção, memória e comportamento para diagnósticos e acompanhamentos precisos.",
              icon: <ClipboardList className="text-accent" size={32} />,
              color: "bg-accent/10"
            }
          ].map((service, i) => (
            <div 
              key={i}
              className="p-8 card-premium group flex flex-col h-full"
            >
              <div className={`mb-6 p-4 rounded-2xl w-fit ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-main">{service.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NOVO: METODOLOGIAS */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-[var(--color-soft-beige-light)] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface/30 skew-x-12 translate-x-1/2 z-0" />
        <div className="absolute inset-0 bg-brand-pattern opacity-[0.03] mix-blend-multiply z-0"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 italic tracking-tight text-text-main">Ciência e <span className="text-primary">Evolução</span></h2>
              <p className="text-lg text-text-muted mb-10 leading-relaxed">
                Nossas intervenções seguem os protocolos internacionais mais rigorosos, garantindo que cada minuto de terapia seja focado no potencial do seu filho.
              </p>
              <div className="space-y-6">
                {[
                  { title: "ABA (Análise do Comportamento Aplicada)", desc: "Abordagem científica focada no ensino de novas habilidades e redução de comportamentos que interferem no aprendizado." },
                  { title: "TCC (Terapia Cognitivo-Comportamental)", desc: "Focada na regulação emocional e desenvolvimento de estratégias para lidar com ansiedade e desafios sociais." },
                  { title: "Integração Sensorial", desc: "Trabalho especializado para ajudar a criança a processar e organizar as informações do ambiente através dos sentidos." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface shadow-sm flex items-center justify-center border border-primary/10 group-hover:bg-primary/5 transition-colors">
                      <CheckCircle2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-text-main">{item.title}</h4>
                      <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 transform hover:scale-[1.02] transition-transform duration-500">
                <Image src="/hero2.png" alt="Equipe Técnica" width={600} height={450} className="w-full h-auto opacity-90" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-3xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Brain size={28} />
                  </div>
                  <div>
                    <div className="text-text-main font-bold">Base Científica</div>
                    <div className="text-text-muted text-xs font-medium">Protocolos Individuais</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONVÊNIOS E FIDELIDADE */}
      <section className="py-12 bg-soft-mint/30 border-y border-primary/10">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Convênios */}
            <div className="flex-1 flex flex-col xl:flex-row items-center justify-center lg:justify-start gap-6 w-full">
              <div className="flex items-center gap-3 shrink-0">
                <ShieldCheck className="text-primary" size={28} />
                <span className="text-lg font-bold text-text-main">Convênios aceitos:</span>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {["Via Saúde", "Via Net", "São Miguel Saúde", "Sagrada Família"].map((convenio) => (
                  <div
                    key={convenio}
                    className="px-5 py-2.5 bg-surface rounded-2xl shadow-sm border border-primary/10 font-bold text-primary-dark text-sm hover:shadow-md transition-all text-center whitespace-nowrap"
                  >
                    {convenio}
                  </div>
                ))}
                <div className="px-5 py-2.5 bg-surface/50 rounded-2xl shadow-sm border border-dashed border-primary/20 font-medium text-text-muted text-sm text-center whitespace-nowrap">
                  + Consulte outros
                </div>
              </div>
            </div>

            {/* Cartão Fidelidade */}
            <div className="w-full lg:w-[400px] xl:w-[450px] shrink-0 bg-gradient-to-br from-primary to-accent p-6 rounded-3xl shadow-lg text-white flex items-center gap-5 transform hover:-translate-y-1 transition-all">
              <div className="bg-white/20 p-4 rounded-2xl shrink-0">
                <Star size={32} className="text-mustard drop-shadow-md" fill="currentColor" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">
                  Cartão Fidelidade Amar-TEA
                </h4>
                <p className="text-sm text-white/90 leading-snug">
                  Descontos exclusivos em <strong>todas as especialidades</strong> para pacientes da clínica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVO: Entendendo as Siglas (Glossário) */}
      <section id="glossario" className="section-padding bg-soft-blue/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-text-main">Entendendo as Siglas</h2>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              O universo do neurodesenvolvimento tem muitos termos técnicos. 
              Preparamos um guia rápido e didático para ajudar você a compreender as principais siglas:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {glossaryData.map((item, i) => (
              <div key={item.id}>
                <Link 
                  href={`/glossario/${item.id}`} 
                  className="block p-6 md:p-8 card-premium group h-full"
                >
                  <div className="text-2xl md:text-3xl font-bold mb-2 font-heading" style={{ color: item.color }}>
                    {item.abbr}
                  </div>
                  <h4 className="text-lg font-bold text-text-main mb-4 leading-tight transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Saiba mais <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVO: A JORNADA DE REABILITAÇÃO */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-soft-mint/40 p-8 rounded-[3rem] aspect-square flex flex-col justify-center items-center text-center shadow-sm">
                  <div className="text-4xl font-bold text-primary mb-2">01</div>
                  <div className="font-bold text-lg text-text-main">Triagem Inicial</div>
                  <p className="text-xs text-text-muted mt-2">Identificação das principais demandas da família e da criança.</p>
                </div>
                <div className="bg-soft-blue/40 p-8 rounded-[3rem] aspect-square flex flex-col justify-center items-center text-center mt-8 shadow-sm">
                  <div className="text-4xl font-bold text-secondary mb-2">02</div>
                  <div className="font-bold text-lg text-text-main">Avaliação Multi</div>
                  <p className="text-xs text-text-muted mt-2">Diversos olhares técnicos para um diagnóstico preciso.</p>
                </div>
                <div className="bg-soft-lavender/40 p-8 rounded-[3rem] aspect-square flex flex-col justify-center items-center text-center -mt-8 shadow-sm">
                  <div className="text-4xl font-bold text-accent mb-2">03</div>
                  <div className="font-bold text-lg text-text-main">Plano Terapêutico</div>
                  <p className="text-xs text-text-muted mt-2">Criação do PEI (Plano de Ensino Individualizado).</p>
                </div>
                <div className="bg-soft-yellow/40 p-8 rounded-[3rem] aspect-square flex flex-col justify-center items-center text-center shadow-sm">
                  <div className="text-4xl font-bold text-mustard mb-2">04</div>
                  <div className="font-bold text-lg text-text-main">Intervenção</div>
                  <p className="text-xs text-text-muted mt-2">Início das terapias com foco total em resultados.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-text-main">A Jornada do Seu Filho na Amar-TEA</h2>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Entendemos que cada criança é única. Por isso, nossa reabilitação não é um pacote fechado, mas um processo vivo e dinâmico.
              </p>
              <ul className="space-y-6">
                {[
                  { t: "Olhar Multidisciplinar", d: "As especialistas (Fono, Psico, TO) discutem cada caso semanalmente." },
                  { t: "Treinamento de Pais", d: "Ensinamos a família a como dar continuidade ao tratamento em casa." },
                  { t: "Mediação Escolar", d: "Alinhamos estratégias com a escola para garantir a inclusão real." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 mt-1 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 text-text-main">{item.t}</h4>
                      <p className="text-text-muted">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NOVO: ESPAÇOS DA CLÍNICA (GALERIA) */}
      <section id="espacos" className="section-padding bg-soft-mint/20 overflow-hidden">
        <div className="container-custom text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-text-main mb-6">Nossos Espaços</h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Conheça os ambientes da Amar-TEA, projetados com carinho para oferecer o máximo de conforto, segurança e acolhimento para o seu filho.
          </p>
        </div>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {
              [
                { src: "/clinica.jpeg", alt: "Nossa Clínica" },
                { src: "/salasensorial.jpeg", alt: "Integração Sensorial" },
                { src: "/salafisioterapia.jpeg", alt: "Fisioterapia" },
                { src: "/salafono.jpeg", alt: "Fonoaudiologia" },
                { src: "/salapsicologia.jpeg", alt: "Psicologia" },
                { src: "/salapsicopedagogia.jpeg", alt: "Psicopedagogia" },
                { src: "/salahabilidadessocial.jpeg", alt: "Habilidades Sociais" },
                { src: "/salanutricao.jpeg", alt: "Nutrição" },
              ].map((img, i) => (
                <div key={i} className="relative rounded-[2rem] overflow-hidden shadow-sm border border-primary/5 group aspect-square">
                  <Image src={img.src} alt={img.alt} width={400} height={400} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <span className="text-white font-bold text-sm md:text-base drop-shadow-lg">{img.alt}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* 5. PROVA SOCIAL */}
      <section id="depoimentos" className="section-padding bg-soft-blue/20 overflow-hidden">
        <div className="container-custom text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-text-main">O que os pais dizem</h2>
        </div>
        <div className="container-custom grid md:grid-cols-3 gap-8">
          {[
            {
              text: "A evolução do meu filho na fala em apenas 3 meses foi inacreditável. A equipe da Amar-TEA tem um carinho que nunca vi antes.",
              author: "Mariana, mãe do Lucas (4 anos)",
              avatar: "M"
            },
            {
              text: "Enfim um lugar onde nos sentimos acolhidos. As orientações para os pais mudaram nossa dinâmica em casa. Hoje o Pedro é outra criança.",
              author: "Carlos, pai do Pedro (6 anos)",
              avatar: "C"
            },
            {
              text: "O diagnóstico de autismo foi um susto, mas a Amar-TEA nos mostrou o caminho. Hoje vejo meu filho conquistando autonomia a cada dia.",
              author: "Ana, mãe do Gabriel (5 anos)",
              avatar: "A"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="p-10 card-premium relative"
            >
              <div className="flex gap-1 text-mustard mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-lg text-text-main italic mb-8">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">{item.avatar}</div>
                <span className="font-bold text-text-main">{item.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. COMO FUNCIONA (REPROJETADO) */}
      <section id="como-funciona" className="section-padding bg-soft-lavender/20">
        <div className="container-custom text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-text-main">O Processo de Acolhimento</h2>
          <p className="text-lg text-text-muted">Como iniciamos a transformação na vida da sua família.</p>
        </div>
        <div className="container-custom grid md:grid-cols-4 gap-8">
          {[
            { n: "1", title: "Primeiro Contato", desc: "Nossa equipe de recepção acolhe sua demanda via WhatsApp ou telefone." },
            { n: "2", title: "Entrevista Inicial", desc: "Conversa com a coordenação clínica para entender o histórico da criança." },
            { n: "3", title: "Avaliação Global", desc: "Sessões específicas com as especialidades necessárias para o caso." },
            { n: "4", title: "Entrega de Laudo", desc: "Reunião de devolutiva com o plano terapêutico detalhado e metas." }
          ].map((step, i) => (
            <div key={i} className="relative group">
              <div className="w-20 h-20 rounded-3xl bg-surface text-primary text-3xl font-bold flex items-center justify-center mx-auto mb-8 shadow-sm border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {step.n}
              </div>
              <h4 className="text-xl font-bold mb-4 text-text-main">{step.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              {i < 3 && <div className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] w-full h-[1px] border-t border-dashed border-primary/30 -z-0" />}
            </div>
          ))}
        </div>
      </section>

      {/* 7. QUEBRA DE OBJEÇÃO (FAQ) */}
      <section className="section-padding bg-soft-yellow/30">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-text-main">Ainda com dúvidas?</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="card-premium overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left font-bold text-lg text-text-main hover:bg-background/50 transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-8 pb-8 text-text-muted leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA INTERMEDIÁRIO */}
      <section className="py-24 bg-gradient-to-r from-soft-mint/40 via-background to-soft-blue/30 border-y border-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-pattern opacity-5 mix-blend-multiply"></div>
        <div className="container-custom text-center relative z-10">
          <div>
             <h2 className="text-2xl md:text-4xl font-bold text-text-main mb-10 leading-tight max-w-3xl mx-auto">Não deixe para depois. O tempo é o melhor aliado do seu filho.</h2>
             <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex bg-primary text-white px-10 py-5 rounded-full font-heading text-xl font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105"
              >
                Agendar avaliação agora
              </a>
          </div>
        </div>
      </section>

      {/* 9. LOCALIZAÇÃO */}
      <section id="localizacao" className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-accent-bg/50 p-8 md:p-16 rounded-[3rem] border border-primary/5">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-text-main">Onde estamos</h2>
              <p className="text-xl text-text-muted mb-8">Atendemos Suzano e toda a região do Alto Tietê com facilidade de acesso.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" />
                  <div>
                    <strong className="block text-text-main">Endereço</strong>
                    <p className="text-text-muted">Rua Antônio Renzi Primo, 121 - Vila Costa<br/>Suzano - SP</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-primary" />
                  <div>
                    <strong className="block text-text-main">WhatsApp</strong>
                    <p className="text-text-muted">(11) 4748-5277</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[300px] md:h-[400px] shadow-inner bg-gray-200 border-4 border-surface">
               <iframe 
                src="https://maps.google.com/maps?q=Rua+Ant%C3%B4nio+Renzi+Primo,+121+-+Vila+Costa,+Suzano+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="section-padding bg-gradient-to-b from-background to-soft-mint/40 text-center">
        <div className="container-custom max-w-4xl">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-8 leading-tight">
              Quanto antes começar, melhor será o desenvolvimento do seu filho
            </h2>
            <p className="text-xl text-text-muted mb-12">
              Não perca a janela de oportunidade do desenvolvimento infantil. Nossa equipe está pronta para acolher sua família hoje mesmo.
            </p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-whatsapp hover:bg-whatsapp-hover text-white px-10 py-6 rounded-full font-heading text-2xl font-bold shadow-2xl shadow-whatsapp/30 transition-all hover:scale-110 flex items-center gap-4 mx-auto w-fit"
            >
              <MessageCircle size={32} />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Script id="tracking-scripts" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
          function trackWhatsAppClick() {
            if (typeof fbq !== 'undefined') fbq('track', 'Contact');
            if (typeof gtag !== 'undefined') gtag('event', 'conversion', {'send_to': 'AW-CONVERSION_ID'});
          }
          document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
            link.addEventListener('click', trackWhatsAppClick);
          });
        `
      }} />
    </div>
  );
}
