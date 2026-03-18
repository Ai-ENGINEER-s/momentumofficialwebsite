"use client";

import { Check, ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CommunicationSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Texte - Centré sur mobile, aligné gauche sur desktop */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-momentum-blue leading-[1.15] tracking-tight"
          >
            Communiquez avec vos <br className="hidden md:block" />
            <span className="text-momentum-red">partenaires stratégiques</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Réservez le meilleur accueil à vos clients en présentant vos solutions <strong className="text-momentum-blue">360 Core</strong>, 
            vos innovations technologiques et vos programmes de formation d'excellence.
          </motion.p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            {["Impact Direct", "Innovation IA", "Support 24/7"].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold text-momentum-blue uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Container Visuel - Fond coloré avec Mockup flottant */}
        <div className="flex-1 w-full relative group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-8 sm:p-12 md:p-16 rounded-[2.5rem] md:rounded-[4rem] flex justify-center items-center relative"
          >
            {/* Carte Mockup */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-5 md:p-6 rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] w-full max-w-[320px] border border-white relative z-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-momentum-blue rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-momentum-blue/20">
                  M
                </div>
                <div>
                  <p className="text-sm md:text-base font-bold text-gray-900">Momentum Core</p>
                  <div className="flex gap-0.5 text-yellow-400">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Preview Image Placeholder */}
              <div className="aspect-video bg-slate-100 rounded-2xl mb-5 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-momentum-blue/10 to-transparent" />
                <div className="flex items-center justify-center h-full">
                   <div className="w-12 h-1 bg-slate-200 rounded-full" />
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3.5 rounded-xl text-sm font-bold hover:bg-momentum-red transition-all duration-300 shadow-lg shadow-slate-900/10">
                <ShoppingCart size={18} /> Accéder aux solutions
              </button>
            </motion.div>

            {/* Éléments de décoration flottants (Cachés sur très petit mobile) */}
            <div className="absolute top-10 right-10 w-12 h-12 bg-white rounded-full shadow-lg hidden sm:flex items-center justify-center text-green-500 animate-bounce">
              <Check size={24} strokeWidth={3} />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}