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
  Heart
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
  const whatsappNumber = "5511940331432";
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
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary-bg via-background to-secondary-bg overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div {...fadeIn} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur shadow-sm border border-primary/10 text-primary-dark font-medium mb-6">
              <ShieldCheck size={18} />
              <span>Clínica Especializada em Desenvolvimento Infantil</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-6 leading-[1.1]">
              Seu filho não está falando ou tem dificuldade para se comunicar?
            </h1>
            <p className="text-xl text-text-muted mb-10 leading-relaxed">
              Avaliação especializada em desenvolvimento infantil com plano personalizado para ajudar seu filho a evoluir com segurança.
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
                <span className="flex items-center gap-1"><Star size={14} className="text-yellow-500" /> Primeira orientação</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:block hidden"
          >
            <div className="relative z-20 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/hero2.png" 
                alt="Desenvolvimento Infantil Amar-TEA" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
          </motion.div>
        </div>
      </section>

      {/* 2. BLOCO DE IDENTIFICAÇÃO (DOR) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Você tem percebido isso no seu filho?</h2>
              <p className="text-xl text-text-muted">Sinais que podem indicar a necessidade de um acompanhamento especializado.</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Não responde quando é chamado",
                "Fala pouco ou não fala",
                "Evita contato visual",
                "Tem crises ou irritação constante",
                "A escola já sinalizou preocupação",
                "Dificuldade em interagir com outras crianças"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-secondary-bg/30 border border-secondary/10"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg font-medium text-text-main">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeIn} className="text-center">
              <p className="text-2xl font-bold text-secondary mb-8">"Quanto antes agir, melhores são os resultados."</p>
              <a href={whatsappUrl} className="inline-flex items-center gap-2 text-primary-dark font-bold text-lg hover:underline decoration-2 underline-offset-4">
                Quero conversar sobre meu filho <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. AUTORIDADE */}
      <section id="sobre" className="section-padding bg-primary-bg/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Especialistas em desenvolvimento infantil</h2>
              <p className="text-lg text-text-muted mb-6 leading-relaxed">
                Somos uma clínica multidisciplinar focada no desenvolvimento integral de crianças. Nossa equipe é composta por profissionais apaixonados e altamente qualificados.
              </p>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Criamos planos personalizados para cada paciente, respeitando o tempo e as particularidades de cada criança, sempre envolvendo a família em todas as etapas do processo.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">+500</div>
                  <div className="text-sm text-text-muted font-medium">Famílias atendidas</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                  <div className="text-sm text-text-muted font-medium">Plano individualizado</div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4]">
                  <Image src="/about.png" alt="Equipe Amar-TEA" width={400} height={530} className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-square bg-secondary p-8 flex items-center justify-center text-white text-center">
                   <p className="font-heading font-bold text-xl">Ambiente acolhedor e lúdico</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-square">
                  <Image src="/insta2.png" alt="Ambiente Real" width={400} height={400} className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4]">
                   <Image src="/insta5.png" alt="Cuidado" width={400} height={530} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SOLUÇÃO (SERVIÇOS) */}
      <section id="especialidades" className="section-padding bg-white">
        <div className="container-custom text-center mb-16">
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold mb-6">Nossos Serviços Especializados</motion.h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Oferecemos uma abordagem multidisciplinar completa para apoiar o desenvolvimento do seu filho em todas as áreas.
          </p>
        </div>
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Fonoaudiologia",
              desc: "Especializada em linguagem, fala, mastigação e deglutição, ajudando a criança a se comunicar com clareza e segurança.",
              icon: <MessageCircle className="text-primary" size={32} />
            },
            {
              title: "Psicologia Infantil",
              desc: "Apoio emocional e comportamental para lidar com ansiedade, medos, regulação emocional e desenvolvimento social.",
              icon: <Users className="text-secondary" size={32} />
            },
            {
              title: "Terapia Ocupacional",
              desc: "Foco na autonomia das Atividades de Vida Diária (AVDs), integração sensorial e coordenação motora fina.",
              icon: <Zap className="text-accent" size={32} />
            },
            {
              title: "Intervenção ABA",
              desc: "Análise do Comportamento Aplicada, padrão ouro para o tratamento do autismo, focada em habilidades sociais e redução de comportamentos desafiadores.",
              icon: <ShieldCheck className="text-primary" size={32} />
            },
            {
              title: "Psicopedagogia",
              desc: "Intervenção focada nos processos de aprendizagem, dificuldades escolares e estratégias de estudo personalizadas.",
              icon: <Star className="text-secondary" size={32} />
            },
            {
              title: "Apoio à Família",
              desc: "Orientação parental constante para que o tratamento continue de forma eficaz e harmoniosa dentro de casa.",
              icon: <Heart className="text-primary" size={32} />
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-background border border-gray-100 hover:border-primary/20 transition-all hover:shadow-xl group"
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NOVO: Entendendo as Siglas (Glossário) */}
      <section id="glossario" className="section-padding bg-background/50">
        <div className="container-custom">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Entendendo as Siglas</h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              O universo do neurodesenvolvimento tem muitos termos técnicos. 
              Preparamos um guia rápido e didático para ajudar você a compreender as principais siglas:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {glossaryData.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link 
                  href={`/glossario/${item.id}`} 
                  className="block p-6 md:p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all group h-full"
                >
                  <div className="text-2xl md:text-3xl font-bold mb-2 font-heading" style={{ color: item.color }}>
                    {item.abbr}
                  </div>
                  <h4 className="text-lg font-bold text-text-main mb-4 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Saiba mais <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROVA SOCIAL */}
      <section id="depoimentos" className="section-padding bg-secondary-bg/20 overflow-hidden">
        <div className="container-custom text-center mb-16">
          <motion.h2 {...fadeIn} className="text-3xl md:text-5xl font-bold">O que os pais dizem</motion.h2>
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
            <motion.div 
              key={i}
              {...fadeIn}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm relative"
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-lg text-text-main italic mb-8">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">{item.avatar}</div>
                <span className="font-bold text-text-main">{item.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section id="como-funciona" className="section-padding bg-white">
        <div className="container-custom text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Como começar</h2>
          <p className="text-xl text-text-muted">Um processo simples para transformar o futuro do seu filho.</p>
        </div>
        <div className="container-custom grid md:grid-cols-4 gap-8">
          {[
            { n: "1", title: "Clique no botão WhatsApp", desc: "Inicie uma conversa rápida com nossa equipe." },
            { n: "2", title: "Fale com nossa equipe", desc: "Tire suas dúvidas e receba uma primeira orientação." },
            { n: "3", title: "Agende avaliação", desc: "Escolha o melhor horário para uma análise detalhada." },
            { n: "4", title: "Inicie acompanhamento", desc: "Começamos o plano de desenvolvimento do seu filho." }
          ].map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20 relative z-10">
                {step.n}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-text-muted">{step.desc}</p>
              {i < 3 && <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-full h-[2px] bg-primary/20 -z-0" />}
            </div>
          ))}
        </div>
      </section>

      {/* 7. QUEBRA DE OBJEÇÃO (FAQ) */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Ainda com dúvidas?</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left font-bold text-lg text-text-main"
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
      <section className="py-20 bg-primary-dark">
        <div className="container-custom text-center">
          <motion.div {...fadeIn}>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Não deixe para depois. O tempo é o melhor aliado do seu filho.</h2>
             <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex bg-white text-primary-dark px-10 py-5 rounded-full font-heading text-xl font-bold shadow-2xl transition-all hover:scale-105"
              >
                Agendar avaliação agora
              </a>
          </motion.div>
        </div>
      </section>

      {/* 9. LOCALIZAÇÃO */}
      <section id="localizacao" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-accent-bg/30 p-8 md:p-16 rounded-[3rem]">
            <div>
              <h2 className="text-3xl font-bold mb-6">Onde estamos</h2>
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
                    <p className="text-text-muted">(11) 94033-1432</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[300px] md:h-[400px] shadow-inner bg-gray-200">
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
      <section className="section-padding bg-gradient-to-b from-white to-primary-bg text-center">
        <div className="container-custom max-w-4xl">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-6xl font-bold text-text-main mb-8 leading-tight">
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
          </motion.div>
        </div>
      </section>

      {/* Meta Pixel and Structure Placeholder */}
      <Script id="tracking-scripts" strategy="afterInteractive">
        {`
          // Exemplo de rastreamento de evento de conversão
          function trackWhatsAppClick() {
            if (typeof fbq !== 'undefined') {
              fbq('track', 'Contact');
            }
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', {'send_to': 'AW-CONVERSION_ID'});
            }
          }
          document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
            link.addEventListener('click', trackWhatsAppClick);
          });
        `}
      </Script>
    </div>
  );
}
