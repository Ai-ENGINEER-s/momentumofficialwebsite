"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Lock, Database, UserCheck, Bell } from 'lucide-react';

const sections = [
  { 
    id: "collecte", 
    title: "Collecte des Données", 
    icon: <Database className="text-momentum-red" />,
    content: "Nous collectons les données d'identification (nom, prénom, email) et les données professionnelles via nos formulaires. Ces informations sont essentielles pour l'établissement de partenariats avec Momentum Core ou Nexus." 
  },
  { 
    id: "securite", 
    title: "Sécurité & Chiffrement", 
    icon: <Lock className="text-momentum-red" />,
    content: "Toutes les données transitent via des protocoles TLS 1.3. L'accès est restreint aux seuls administrateurs habilités de Momentum Group Holdings, avec une double authentification obligatoire." 
  },
  { 
    id: "droits", 
    title: "Vos Droits (RGPD)", 
    icon: <UserCheck className="text-momentum-red" />,
    content: "Conformément aux lois internationales, vous disposez d'un droit d'accès, de rectification et d'effacement de vos données sur simple demande à dpo@mgh-drc.com." 
  }
];

export default function PrivacyPage() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* HEADER HOMOGÈNE */}
        <div className="mb-16 border-b border-slate-200 pb-10">
          <div className="flex items-center gap-2 text-momentum-red font-black text-xs uppercase tracking-[0.3em] mb-4">
            <div className="w-8 h-[2px] bg-momentum-red"></div> GOUVERNANCE & DATA
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-momentum-blue tracking-tight">
            Politique de <span className="text-momentum-red">Confidentialité</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* NAVIGATION LATERALE */}
          <aside className="lg:w-1/4 sticky top-32 h-fit space-y-4">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="block p-4 bg-white border border-slate-100 rounded-xl font-bold text-momentum-blue hover:border-momentum-red transition-all shadow-sm">
                {s.title}
              </a>
            ))}
          </aside>

          {/* CONTENU PRINCIPAL */}
          <div className="lg:w-3/4 space-y-8">
            {sections.map((section) => (
              <motion.section 
                id={section.id} key={section.id}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-50 rounded-lg">{section.icon}</div>
                  <h2 className="text-2xl font-black text-momentum-blue">{section.title}</h2>
                </div>
                <p className="text-slate-500 leading-[1.8] text-lg">{section.content}</p>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}