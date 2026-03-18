"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Mail, Phone, MapPin, Send, 
  CheckCircle2, Instagram, Facebook, Linkedin
} from 'lucide-react';

// Composant icône X (Twitter)
const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
  </svg>
);

export default function ContactPage() {
  const [activePole, setActivePole] = useState("Momentum Core");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const poles = [
    "Momentum Core", "Momentum Energy", "Momentum Academy", 
    "Momentum Health", "Momentum Earth", "Momentum Nexus", "Momentum MEvent"
  ];

  const socialLinks = [
    { icon: <XIcon size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Optionnel : Retour au formulaire après 5 secondes
    setTimeout(() => setIsSubmitted(false), 5000); 
  };

  return (
    <main className="bg-[#FCFCFD] min-h-screen font-sans">
      
      {/* HEADER SECTION - TEXTE CENTRÉ */}
      <section className="bg-white border-b border-slate-100 pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-momentum-red"></div>
            <span className="text-momentum-red font-black uppercase tracking-[0.3em] text-xs">Contact Institutionnel</span>
            <div className="w-12 h-[2px] bg-momentum-red"></div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black text-momentum-blue leading-tight mb-6 max-w-4xl mx-auto">
            Bâtissons l'avenir <span className="text-momentum-red">ensemble.</span>
          </h1>
          
          <p className="text-lg text-slate-500 leading-relaxed mx-auto max-w-2xl">
            Une question sur nos solutions ou une opportunité de partenariat ? 
            Nos directions stratégiques vous répondent sous 24h.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* CÔTÉ GAUCHE : INFOS & RÉSEAUX */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h3 className="text-sm font-black text-momentum-blue uppercase tracking-widest mb-8 border-b border-slate-200 pb-2">Siège Social</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-momentum-red h-fit">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-momentum-blue">Kinshasa, RDC</p>
                      <p className="text-sm text-slate-500">Boulevard du 30 Juin, Gombe</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-momentum-red h-fit">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-momentum-blue">Email Général</p>
                      <p className="text-sm text-slate-500">contact@mgh-drc.com</p>
                    </div>
                  </div>

                  {/* NUMÉRO DE L'ENTREPRISE RÉTABLI */}
                  <div className="flex gap-4">
                    <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-xl text-momentum-red h-fit">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-momentum-blue">Téléphone</p>
                      <p className="text-sm text-slate-500">+243(0)802122222</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RÉSEAUX SOCIAUX */}
              <div>
                <h3 className="text-sm font-black text-momentum-blue uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">Suivre Momentum</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-full text-slate-500 hover:text-momentum-red hover:border-momentum-red transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CÔTÉ DROIT : FORMULAIRE & SUCCÈS */}
            <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative min-h-[600px] flex items-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8 w-full"
                  >
                    <div className="space-y-4">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Direction concernée</label>
                      <div className="flex flex-wrap gap-2">
                        {poles.map((pole) => (
                          <button
                            key={pole} type="button" onClick={() => setActivePole(pole)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                              activePole === pole ? 'bg-momentum-blue text-white' : 'bg-slate-50 text-slate-500 border-slate-100'
                            }`}
                          >
                            {pole}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-momentum-blue uppercase text-[10px]">Nom complet</label>
                        <input required type="text" className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-momentum-red outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-momentum-blue uppercase text-[10px]">Email</label>
                        <input required type="email" className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-momentum-red outline-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-momentum-blue uppercase text-[10px]">Votre Message</label>
                      <textarea required rows={5} className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-momentum-red outline-none resize-none"></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-momentum-blue text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-momentum-red transition-all shadow-lg"
                    >
                      Envoyer ma demande <Send size={18} />
                    </motion.button>
                  </motion.form>
                ) : (
                  /* MESSAGE DE SUCCÈS SANS LIEN DE RETOUR MANUEL */
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="text-center w-full space-y-6 py-12"
                  >
                    <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={56} />
                    </div>
                    <h2 className="text-4xl font-black text-momentum-blue">Demande transmise !</h2>
                    <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
                      Votre message a été envoyé avec succès à la direction **{activePole}**. Nos équipes prendront contact avec vous sous peu.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}