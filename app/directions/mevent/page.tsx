"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Megaphone, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: "Événements organisés", value: "50+" },
  { label: "Participants cumulés", value: "10k+" },
  { label: "Partenaires Médias", value: "25+" },
  { label: "Taux de satisfaction", value: "98%" },
];

const services = [
  {
    title: "Sommets Technologiques",
    desc: "Organisation de conférences et sommets de haut niveau sur l'IA, la Fintech et l'Énergie en Afrique.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Marketing Stratégique",
    desc: "Positionnement de marque et campagnes go-to-market pour les entreprises tech internationales.",
    icon: <Megaphone className="w-6 h-6" />,
  },
  {
    title: "Relations Publiques",
    desc: "Gestion de l'image institutionnelle et mise en relation avec les décideurs publics et privés.",
    icon: <Star className="w-6 h-6" />,
  },
];

export default function MEventPage() {
  return (
    <main className="bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-momentum-blue">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop" 
            alt="Event Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Connecter les leaders, <span className="text-momentum-red">propulser</span> l'innovation.
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              Nous créons des expériences mémorables et des stratégies marketing d'impact pour les acteurs majeurs de l'économie numérique.
            </p>
            <Link 
              href="/contact"
              className="inline-flex bg-white text-momentum-blue px-8 py-4 rounded-full font-black items-center gap-3 hover:bg-momentum-red hover:text-white transition-all shadow-lg"
            >
              Discuter de votre projet <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-black text-momentum-blue mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-momentum-blue mb-4">Notre Expertise Événementielle</h2>
            <p className="text-slate-500">Du concept à l'exécution, nous transformons vos ambitions en moments historiques.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="p-10 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-momentum-red mb-8">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-momentum-blue mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
                <Link 
                  href="/contact"
                  className="flex items-center text-sm font-bold text-momentum-red hover:underline"
                >
                  En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SECTION (IMAGE + TEXTE) */}
      <section className="py-24 bg-momentum-blue text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative bg-slate-50 z-10 rounded-[40px] overflow-hidden shadow-2xl">
                <Image 
                  src={'/sections-images/momentum-mevent.png'}
                  alt="Concert/Event" 
                  width={600} 
                  height={400} 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-momentum-red rounded-full -z-0 opacity-20 blur-3xl"></div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-black leading-tight">Pourquoi choisir Momentum MEvent ?</h2>
              <p className="text-lg text-slate-300">
                Nous ne nous contentons pas d'organiser des événements. Nous construisons des ponts entre les investisseurs et les opportunités technologiques en RDC.
              </p>
              <ul className="space-y-4">
                {["Réseau exclusif de décideurs", "Production technique de pointe", "Couverture média internationale", "Stratégie de contenu post-événement"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-momentum-red w-6 h-6" />
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto bg-white p-12 md:p-20 rounded-[48px] shadow-sm border border-slate-100">
            <h2 className="text-3xl md:text-5xl font-black text-momentum-blue mb-6">Prêt à marquer les esprits ?</h2>
            <p className="text-lg text-slate-500 mb-10 italic">
              "L'excellence n'est pas un acte, c'est une habitude." — Momentum MEvent met cette habitude au service de votre marque.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-block bg-momentum-blue text-white px-10 py-4 rounded-full font-black hover:bg-momentum-red transition-all shadow-md"
              >
                Nous contacter
              </Link>
              <Link 
                href="/contact"
                className="inline-block border-2 border-momentum-blue text-momentum-blue px-10 py-4 rounded-full font-black hover:bg-momentum-blue hover:text-white transition-all"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}