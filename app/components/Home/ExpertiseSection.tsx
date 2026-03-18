'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
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

export function ExpertiseSection() {
  const [index, setIndex] = useState(0);

  // Auto-slide toutes les 6 secondes
  useEffect(() => {
    const timer = setInterval(() => 
      {
      nextStep();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => setIndex((prev) => (prev + 1) % poles.length);
  const prevStep = () => setIndex((prev) => (prev - 1 + poles.length) % poles.length);

  const current = poles[index];

  return (
    <section className="py-24 bg-[#F8F9FA] font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-12">
<h2 className="text-[32px] md:text-[40px] font-bold text-momentum-blue tracking-tight leading-tight">
  Nos Domaines <span className="text-momentum-red">d’Expertise</span>
</h2>
        </div>

        {/* Unique Card Container */}
        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-200 relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col md:flex-row min-h-[500px]"
            >
              
              {/* Partie Gauche : Texte */}
              <div className="w-full md:w-1/2 p-10 lg:p-20 flex flex-col justify-center border-r border-slate-50">
                <div className="max-w-md space-y-6">
                  <span className="text-momentum-red font-bold text-sm uppercase tracking-[0.2em]">
                    {current.tag}
                  </span>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-momentum-blue leading-tight">
                    {current.title}
                  </h3>
                  
                  <p className="text-momentum-gray text-lg leading-relaxed italic">
                    "{current.desc}"
                  </p>
                  
                  <div className="pt-4">
                    <p className="text-sm font-bold text-momentum-blue">
                      {current.subtitle}
                    </p>
                    <p className="text-sm text-momentum-gray">
                      {current.details}
                    </p>
                  </div>
                </div>
              </div>

              {/* Partie Droite : Image */}
              <div className="w-full md:w-1/2 bg-slate-50 flex items-center justify-center p-12">
                <motion.img 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  src={current.image} 
                  alt={current.title}
                  className="max-w-full max-h-[350px] object-contain drop-shadow-2xl"
                />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls style Google */}
        <div className="mt-8 flex justify-center items-center">
          <div className="bg-white border border-slate-200 px-5 py-2 rounded-full shadow-sm flex items-center gap-8">
            <span className="text-sm font-medium text-momentum-gray">
              {index + 1} / {poles.length}
            </span>
            <div className="flex gap-4 border-l border-slate-100 pl-6">
               <button 
                 onClick={prevStep}
                 className="p-1.5 hover:bg-slate-100 rounded-full transition-colors text-momentum-blue active:scale-90"
                >
                 <ChevronLeft className="w-5 h-5" />
               </button>
               <button 
                 onClick={nextStep}
                 className="p-1.5 hover:bg-slate-100 rounded-full transition-colors text-momentum-blue active:scale-90"
                >
                 <ChevronRight className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}