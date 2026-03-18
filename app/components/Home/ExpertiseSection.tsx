'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const poles = [
  {
    id: 'core',
    tag: 'Digitalisation',
    title: 'Momentum Core',
    subtitle: 'Technologies & Transformation Digitale',
    desc: "Momentum Core est le bras technologique dédié à la transformation digitale des institutions. Nous développons des écosystèmes logiciels souverains, des plateformes SaaS et des solutions d'IA sur mesure.",
    details: "Expertise en ERP, Digitalisation Gov et Data Lab.",
    image: '/sections-images/M_C.png',
  },
  {
    id: 'energy',
    tag: 'Énergie',
    title: 'Momentum Energy',
    subtitle: 'Solutions Énergétiques Durables',
    desc: "Répondre au défi de l'électrification en RDC par le déploiement de micro-grids solaires et de solutions hybrides. Une infrastructure moderne pour le développement économique.",
    details: "Solaire, Stockage industriel et Électrification rurale.",
    image: '/sections-images/M_E.png',
  },
  {
    id: 'academy',
    tag: 'Éducation',
    title: 'Momentum Academy',
    subtitle: 'Formation & Excellence Numérique',
    desc: "Forger la prochaine génération de leaders technologiques. Nous formons les talents aux métiers critiques : IA, Cybersécurité et Data Science.",
    details: "Bootcamps certifiants et formations sur mesure.",
    image: '/sections-images/M_A.png',
  },
  {
    id: 'health',
    tag: 'Santé',
    title: 'Momentum Health',
    subtitle: 'Innovation dans la santé (HealthTech)',
    desc: "Développement de solutions numériques pour les hôpitaux. Digitalisation hospitalière et Health OS pour un accès universel aux soins.",
    details: "Gestion clinique, Télémédecine et Suivi patient.",
    image: '/sections-images/M_Ee.png',
  }
];

export default  function ExpertiseSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 pour droite, -1 pour gauche

  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % poles.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + poles.length) % poles.length);
  };

  const current = poles[index];

  return (
    <section className="py-12 md:py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-momentum-blue tracking-tight leading-tight">
            Nos Domaines <span className="text-momentum-red">d’Expertise</span>
          </h2>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-100 relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div 
              key={current.id}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="flex flex-col lg:flex-row min-h-[550px] lg:min-h-[600px]"
            >
              
              {/* Partie Texte */}
              <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-20 flex flex-col justify-center order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-slate-50">
                <div className="space-y-6">
                  <span className="inline-block text-momentum-red font-black text-xs uppercase tracking-[0.25em] bg-red-50 px-4 py-1.5 rounded-full">
                    {current.tag}
                  </span>
                  
                  <h3 className="text-3xl lg:text-5xl font-bold text-momentum-blue leading-[1.1]">
                    {current.title}
                  </h3>
                  
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium italic">
                    "{current.desc}"
                  </p>
                  
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row lg:flex-col gap-4">
                    <div>
                      <p className="text-xs font-black text-momentum-blue uppercase tracking-widest mb-1">
                        Focus Stratégique
                      </p>
                      <p className="text-sm text-slate-500 font-bold uppercase">
                        {current.subtitle}
                      </p>
                    </div>
                    <div className="sm:border-l lg:border-l-0 lg:border-t sm:pl-4 lg:pl-0 lg:pt-4 border-slate-100">
                      <p className="text-xs font-black text-momentum-blue uppercase tracking-widest mb-1">
                        Expertise cardinale
                      </p>
                      <p className="text-sm text-slate-400">
                        {current.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partie Image - En haut sur mobile pour le contexte visuel */}
              <div className="w-full lg:w-1/2 bg-slate-50/50 flex items-center justify-center p-10 md:p-16 order-1 lg:order-2">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="relative w-full aspect-square max-w-[300px] md:max-w-[400px]"
                >
                  <img 
                    src={current.image} 
                    alt={current.title}
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                  />
                </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Style "Contrôle de vol" */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center bg-white border border-slate-200 p-2 rounded-full shadow-lg gap-2">
            <button 
              onClick={prevStep}
              className="p-3 hover:bg-momentum-blue hover:text-white rounded-full transition-all text-momentum-blue active:scale-90"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2 px-4">
              {poles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-momentum-red' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextStep}
              className="p-3 hover:bg-momentum-blue hover:text-white rounded-full transition-all text-momentum-blue active:scale-90"
              aria-label="Suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}