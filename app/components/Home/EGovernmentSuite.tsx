"use client";

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const govModules = [
  {
    id: 1,
    title: "Optimum Core : Ministère des Affaires Intérieures",
    description: "Ce que nous utilisons le plus, c'est la gestion centralisée des identités nationales. Du suivi de l'état civil à la sécurisation des documents administratifs, Optimum Core garantit une traçabilité totale et une efficacité accrue pour les services publics.",
    entity: "Administration Centrale - Momentum e-Gov",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Delta Core : Ministère de la Défense",
    description: "Delta Core nous permet de gérer la logistique des troupes et les infrastructures de défense en temps réel. C'est un outil indispensable pour la sécurité nationale et la coordination des flux migratoires avec la DGM.",
    entity: "Sécurité & Défense - Momentum e-Gov",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop"
  }
];

export function EGovernmentSuite() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextModule = () => {
    setActiveIndex((prev) => (prev + 1) % govModules.length);
  };

  const prevModule = () => {
    setActiveIndex((prev) => (prev - 1 + govModules.length) % govModules.length);
  };

  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 bg-[#f0f4f8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-center font-black text-momentum-blue mb-12 md:mb-20 tracking-tighter"
        >
          L'impact de Momentum <span className="text-momentum-red">e-Gov</span>
        </motion.h2>

        {/* Card Container Principal */}
        <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200/50 flex flex-col lg:flex-row min-h-[500px] md:min-h-[600px] relative">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row w-full"
            >
              {/* Côté Gauche: Contenu (Citation) */}
              <div className="flex-1 p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center relative bg-white z-10">
                <Quote className="absolute top-10 left-10 text-slate-50 w-20 h-20 -z-10" />
                
                <blockquote className="space-y-8">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-800 leading-relaxed font-medium italic">
                    "{govModules[activeIndex].description}"
                  </p>
                  
                  <footer className="pt-6 border-t border-slate-100">
                    <cite className="not-italic">
                      <span className="block text-momentum-blue font-bold text-lg md:text-xl mb-1 uppercase tracking-tight">
                        {govModules[activeIndex].title}
                      </span>
                      <span className="text-momentum-red font-semibold text-sm uppercase tracking-widest opacity-80">
                        {govModules[activeIndex].entity}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>

              {/* Côté Droit: Image */}
              <div className="flex-1 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
                <Image 
                  src={govModules[activeIndex].image} 
                  alt="Success Story Momentum" 
                  fill
                  priority
                  className="object-cover"
                />
                {/* Overlay pour mobile pour lisser la transition texte/image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 lg:hidden" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contrôles de Pagination Style Premium */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={prevModule}
              className="bg-white p-4 rounded-full shadow-lg border border-slate-100 hover:bg-momentum-blue hover:text-white transition-all group"
              aria-label="Précédent"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="bg-white px-8 py-3 rounded-full shadow-inner border border-slate-100 text-xs font-black text-momentum-blue tracking-[0.3em]">
              {activeIndex + 1} / {govModules.length}
            </div>

            <button 
              onClick={nextModule}
              className="bg-white p-4 rounded-full shadow-lg border border-slate-100 hover:bg-momentum-blue hover:text-white transition-all group"
              aria-label="Suivant"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}