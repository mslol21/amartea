"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, Users, Heart, Star, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function WorkWithUs() {
  const email = "contato@clinicamartea.com.br"; // Exemplo, o usuário não forneceu um específico

  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-primary-bg to-white min-h-screen">
      <div className="container-custom">
        <div 
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-dark font-bold mb-6">
            <Briefcase size={20} />
            <span>Faça parte da nossa equipe</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-8">
            Transforme vidas com a gente na Amar-TEA
          </h1>
          <p className="text-xl text-text-muted leading-relaxed">
            Buscamos profissionais apaixonados pelo desenvolvimento infantil e que desejam atuar em um ambiente acolhedor, ético e focado na evolução real de cada criança.
          </p>
        </div>

          {/* Por que trabalhar aqui */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Cultura de Acolhimento",
              desc: "Valorizamos o bem-estar da nossa equipe tanto quanto o de nossas famílias.",
              icon: <Heart className="text-primary" size={32} />
            },
            {
              title: "Abordagem Multidisciplinar",
              desc: "Troca constante de experiências entre fonoaudiólogos, psicólogos e terapeutas.",
              icon: <Users className="text-secondary" size={32} />
            },
            {
              title: "Crescimento Profissional",
              desc: "Incentivo a cursos, especializações e atualização científica constante.",
              icon: <Star className="text-accent" size={32} />
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="p-8 rounded-[2.5rem] bg-white shadow-xl shadow-primary/5 border border-primary/5 text-center"
            >
              <div className="mb-6 p-4 bg-primary-bg rounded-2xl w-fit mx-auto">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Vagas e Envio de Currículo */}
        <div className="bg-primary-dark rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Como se candidatar?</h2>
              <p className="text-xl text-primary-bg mb-10">
                Mesmo que não tenhamos uma vaga aberta para sua especialidade no momento, adoraríamos conhecer seu perfil para futuras oportunidades.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" />
                  <span>Fonoaudiologia (Especialista em TEA)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" />
                  <span>Psicologia (Abordagem ABA ou TCC)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" />
                  <span>Terapia Ocupacional</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" />
                  <span>Recepcionista e Apoio Administrativo</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 text-text-main shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Envie seu currículo</h3>
              <p className="text-text-muted mb-8">
                Encaminhe seu currículo atualizado e o link do seu portfólio ou LinkedIn para o e-mail abaixo:
              </p>
              
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-6 rounded-2xl bg-primary-bg border border-primary/10 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block text-sm text-text-muted font-bold uppercase tracking-wider">E-mail para contato</span>
                  <span className="text-lg font-bold text-primary">{email}</span>
                </div>
              </a>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-sm text-text-muted">
                  * Informe no assunto do e-mail sua área de atuação (Ex: "Vaga - Fonoaudiologia").
                </p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>

        <div className="mt-20 text-center">
          <Link href="/" className="text-primary font-bold hover:underline flex items-center gap-2 justify-center">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
