"use client";

import Image from "next/image";
import { 
  Brain, 
  Puzzle, 
  MessageSquare, 
  HeartHandshake, 
  Heart, 
  Star, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail,
  MessageCircle,
  Quote
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "5511940331432";
  const whatsappMessage = "Olá! Gostaria de agendar uma avaliação na Clínica Amar-TEA.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main>
      {/* Header */}
      <header className={`header ${scrolled ? "shadow-md" : ""}`} style={{ boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none' }}>
        <div className="container header-container">
          <div className="logo" style={{ color: 'var(--primary-dark)', display: 'flex', alignItems: 'center' }}>
            <Image src="/logo.png" alt="Logo Amar-TEA" width={80} height={80} style={{ objectFit: 'contain' }} />
          </div>
          <nav className="nav-links">
            <a href="#sobre" className="nav-link">Sobre</a>
            <a href="#especialidades" className="nav-link">Especialidades</a>
            <a href="#para-quem" className="nav-link">Para Quem É</a>
            <a href="#como-funciona" className="nav-link">Como Funciona</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'none' }}>
            Agendar
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
            Agendar <span className="hide-mobile">Avaliação</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Desenvolvimento e Cuidado Terapêutico Individualizado</h1>
            <p>
              A Clínica Amar-TEA oferece um espaço acolhedor e multidisciplinar dedicado 
              ao desenvolvimento pleno e qualidade de vida da sua família.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={24} />
              Agendar pelo WhatsApp
            </a>
          </div>
          <div className="hero-image-wrapper" style={{ boxShadow: 'none', background: 'transparent' }}>
            <Image 
              src="/hero.jpg" 
              alt="Logo Amar-TEA completa" 
              width={600} 
              height={400} 
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Sobre a Clínica */}
      <section id="sobre" className="section about">
        <div className="container about-grid">
          <div className="about-image">
            <Image 
              src="/about.png" 
              alt="Ambiente da Clínica Amar-TEA" 
              width={600} 
              height={500} 
            />
          </div>
          <div className="about-content">
            <h2>Quem Somos</h2>
            <p>
              A Clínica Amar-TEA nasceu do desejo de transformar o cuidado terapêutico em uma 
              experiência verdadeiramente humana e integrada. Nossa missão é promover o 
              desenvolvimento e a qualidade de vida através de um olhar empático e multidisciplinar.
            </p>
            <p>
              Acreditamos que cada indivíduo é único, e por isso, nosso diferencial está no 
              atendimento personalizado, onde a família é parte fundamental do processo.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Star size={24} />
                </div>
                <div className="feature-text">
                  <h4>Atendimento Humanizado</h4>
                  <p>Cuidado que respeita o tempo e a individualidade.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Heart size={24} />
                </div>
                <div className="feature-text">
                  <h4>Equipe Multidisciplinar</h4>
                  <p>Profissionais integrados para resultados mais efetivos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços / Especialidades */}
      <section id="especialidades" className="section services">
        <div className="container">
          <h2 className="section-title">Nossas Especialidades</h2>
          <p className="section-subtitle">
            Oferecemos um portfólio completo de terapias para apoiar o 
            desenvolvimento cognitivo, motor, social e emocional.
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Brain size={32} />
              </div>
              <h3>Psicologia</h3>
              <p>Apoio emocional e comportamental para lidar com desafios, desenvolvendo habilidades sociais e regulação emocional.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>Agendar</a>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Puzzle size={32} />
              </div>
              <h3>Terapia Ocupacional</h3>
              <p>Foco na autonomia e independência nas atividades diárias, trabalhando aspectos motores, sensoriais e cognitivos.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>Agendar</a>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <MessageSquare size={32} />
              </div>
              <h3>Fonoaudiologia</h3>
              <p>Avaliação e intervenção em distúrbios da comunicação, linguagem, fala e motricidade orofacial.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>Agendar</a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <HeartHandshake size={32} />
              </div>
              <h3>Intervenção ABA</h3>
              <p>Abordagem baseada em evidências para o desenvolvimento de habilidades sociais, comunicativas e acadêmicas.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>Agendar</a>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section id="para-quem" className="section target-audience">
        <div className="container audience-grid">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Para quem é a Amar-TEA?</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
              Nosso espaço foi cuidadosamente planejado para acolher e desenvolver:
            </p>
            <div className="audience-list">
              <div className="audience-item">
                <Heart className="audience-icon" size={28} />
                <h4>Crianças com Transtorno do Espectro Autista (TEA)</h4>
              </div>
              <div className="audience-item">
                <Heart className="audience-icon" size={28} />
                <h4>Crianças com atraso no desenvolvimento</h4>
              </div>
              <div className="audience-item">
                <Heart className="audience-icon" size={28} />
                <h4>Crianças com dificuldades de comunicação e aprendizado</h4>
              </div>
              <div className="audience-item">
                <Heart className="audience-icon" size={28} />
                <h4>Famílias que buscam apoio, orientação e acolhimento</h4>
              </div>
            </div>
          </div>
          <div className="about-image">
            <Image 
              src="/for_whom.png" 
              alt="Mãe e criança" 
              width={600} 
              height={500} 
            />
          </div>
        </div>
      </section>

      {/* Entendendo as Siglas */}
      <section id="glossario" className="section glossary">
        <div className="container">
          <h2 className="section-title">Entendendo as Siglas</h2>
          <p className="section-subtitle">
            O universo do neurodesenvolvimento tem muitos termos técnicos. 
            Preparamos um guia rápido e didático para ajudar você a compreender as principais siglas:
          </p>
          <div className="glossary-grid">
            <div className="glossary-card">
              <div className="glossary-abbr">TEA</div>
              <h4 className="glossary-title">Transtorno do Espectro Autista</h4>
            </div>
            <div className="glossary-card">
              <div className="glossary-abbr">TDAH</div>
              <h4 className="glossary-title">Transtorno do Déficit de Atenção com Hiperatividade</h4>
            </div>
            <div className="glossary-card">
              <div className="glossary-abbr">TOD</div>
              <h4 className="glossary-title">Transtorno Opositor Desafiador</h4>
            </div>
            <div className="glossary-card">
              <div className="glossary-abbr">TPAC</div>
              <h4 className="glossary-title">Transtorno do Processamento Auditivo Central</h4>
            </div>
            <div className="glossary-card">
              <div className="glossary-abbr">TAG</div>
              <h4 className="glossary-title">Transtorno de Ansiedade Generalizada</h4>
            </div>
            <div className="glossary-card">
              <div className="glossary-abbr">TOC</div>
              <h4 className="glossary-title">Transtorno Obsessivo Compulsivo</h4>
            </div>
            <div className="glossary-card">
              <div className="glossary-abbr">TDL</div>
              <h4 className="glossary-title">Transtorno do Desenvolvimento de Linguagem</h4>
            </div>
            <div className="glossary-card">
              <div className="glossary-abbr">TPS</div>
              <h4 className="glossary-title">Transtorno do Processamento Sensorial</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="section steps">
        <div className="container">
          <h2 className="section-title">Como Funciona</h2>
          <p className="section-subtitle">Um processo simples e transparente para iniciar o cuidado terapêutico.</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h4>Contato Inicial</h4>
              <p>Fale conosco pelo WhatsApp e tire suas primeiras dúvidas com nossa equipe.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h4>Avaliação Inicial</h4>
              <p>Uma escuta atenta para compreender as necessidades e histórico familiar.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h4>Plano Personalizado</h4>
              <p>Desenvolvemos um Projeto Terapêutico Singular focado em objetivos claros.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h4>Acompanhamento</h4>
              <p>Sessões contínuas, reavaliações e feedback constante com a família.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">O Que Dizem as Famílias</h2>
          <p className="section-subtitle">Histórias de evolução e cuidado na Clínica Amar-TEA.</p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <Quote className="quote-icon" size={48} />
              <p className="testimonial-text">
                "Desde que começamos o acompanhamento na Amar-TEA, meu filho teve uma evolução incrível na fala. A equipe é muito acolhedora e nos sentimos em casa."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">M</div>
                <div className="author-info">
                  <h4>Mariana S.</h4>
                  <p>Mãe de paciente da Fonoaudiologia</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <Quote className="quote-icon" size={48} />
              <p className="testimonial-text">
                "Encontramos na clínica não só excelentes profissionais, mas uma rede de apoio. As terapias integradas fizeram toda a diferença no desenvolvimento do João."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">C</div>
                <div className="author-info">
                  <h4>Carlos M.</h4>
                  <p>Pai de paciente do programa ABA</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <Quote className="quote-icon" size={48} />
              <p className="testimonial-text">
                "O cuidado e o olhar humano da equipe nos deram segurança. A Terapia Ocupacional ajudou muito na autonomia da minha filha em casa e na escola."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div className="author-info">
                  <h4>Ana L.</h4>
                  <p>Mãe de paciente da T.O.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Pronto para iniciar essa jornada?</h2>
          <p>
            Nossa equipe está preparada para acolher você e sua família. 
            Agende uma avaliação e conheça de perto o nosso trabalho.
          </p>
          <a href="#agendamento" className="btn btn-whatsapp" style={{ padding: '1rem 2rem', fontSize: '1.25rem', backgroundColor: 'white', color: 'var(--primary-dark)' }}>
            Preencher Formulário de Avaliação
          </a>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section id="agendamento" className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="container">
          <h2 className="section-title">Formulário de Pré-Agendamento</h2>
          <p className="section-subtitle">
            Preencha os dados abaixo para que nossa equipe conheça melhor o seu caso antes do nosso contato.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            width: '100%', 
            maxWidth: '800px',
            margin: '0 auto', 
            overflow: 'hidden', 
            borderRadius: '1.5rem', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            backgroundColor: 'white'
          }}>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdPJq-W46vo9nEelDrgCe6n4paKrXLd1eWj2wZVEKhtbgiQ4A/viewform?embedded=true" 
              width="100%" 
              height="850" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
            >
              Carregando…
            </iframe>
          </div>
        </div>
      </section>

      {/* Localização e Footer */}
      <section className="section location">
        <div className="container">
          <div className="location-wrapper">
            <div className="location-info">
              <h3>Onde Estamos</h3>
              <div className="contact-item">
                <MapPin className="icon" size={24} />
                <div>
                  <strong>Endereço</strong>
                  <p>Rua Antônio Renzi Primo, 121 - Vila Costa<br/>Suzano - SP</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="icon" size={24} />
                <div>
                  <strong>Telefone / WhatsApp</strong>
                  <p>(11) 94033-1432</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="icon" size={24} />
                <div>
                  <strong>E-mail</strong>
                  <p>Contato@Amartea.Com.Br</p>
                </div>
              </div>
            </div>
            <div className="map-container">
              <iframe 
                src="https://maps.google.com/maps?q=Rua+Ant%C3%B4nio+Renzi+Primo,+121+-+Vila+Costa,+Suzano+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="logo" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                <Image src="/logo.png" alt="Logo Amar-TEA" width={80} height={80} style={{ objectFit: 'contain' }} />
              </div>
              <p>Clínica multidisciplinar com foco terapêutico e desenvolvimento, oferecendo um cuidado humano e integrado.</p>
            </div>
            <div className="footer-links">
              <h4>Navegação</h4>
              <ul>
                <li><a href="#sobre">Sobre a Clínica</a></li>
                <li><a href="#especialidades">Especialidades</a></li>
                <li><a href="#para-quem">Para Quem É</a></li>
                <li><a href="#como-funciona">Como Funciona</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Redes Sociais</h4>
              <ul>
                <li>
                  <a href="https://instagram.com/clinicamartea" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Instagram (@Clinicamartea)
                  </a>
                </li>
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MessageCircle size={20} /> WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Clínica Amar-TEA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Fix Button */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Falar no WhatsApp">
        <MessageCircle size={32} />
      </a>
    </main>
  );
}
