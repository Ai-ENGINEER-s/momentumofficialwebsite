'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const poles = [
  {
    id: 'cto',
    tag: 'Organisation',
    title: 'Chief Technology Officer',
    subtitle: 'Direction technologique',
    desc: "Le CTO définit la vision technologique de Momentum Core et supervise l’architecture globale des plateformes, des infrastructures cloud et des solutions d’intelligence artificielle.",
    details: "Stratégie technologique, architecture des systèmes et innovation.",
    image: '/momentum-core/president.png',
  },
  {
    id: 'engineers',
    tag: 'Organisation',
    title: 'Ingénieurs logiciels',
    subtitle: 'Développement des plateformes',
    desc: "Nos ingénieurs conçoivent et développent les solutions logicielles du groupe : ERP, plateformes SaaS et applications sur mesure adaptées aux besoins des entreprises et institutions.",
    details: "Développement web, systèmes distribués et plateformes SaaS.",
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
  },
  {
    id: 'data',
    tag: 'Organisation',
    title: 'Data Scientists',
    subtitle: 'Analyse avancée & Intelligence artificielle',
    desc: "Les data scientists développent des modèles d’analyse et d’intelligence artificielle afin d’exploiter les données et produire des insights stratégiques pour les organisations.",
    details: "Machine learning, analyse de données et IA décisionnelle.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
  {
    id: 'cloud',
    tag: 'Organisation',
    title: 'Experts Cloud',
    subtitle: 'Infrastructure & Déploiement',
    desc: "Les experts cloud assurent le déploiement, la sécurité et la scalabilité des infrastructures technologiques afin de garantir des systèmes robustes et performants.",
    details: "Cloud computing, DevOps et infrastructures sécurisées.",
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  }
];

export default function ExpertiseSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
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
            Notre <span className="text-momentum-red">Organisation</span>
          </h2>
        </div>

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
              
              {/* Texte */}
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

              {/* Image */}
              <div className="w-full md:w-1/2 bg-slate-50 flex items-center justify-center p-12">
                <motion.img 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  src={current.image} 
                  alt={current.title}
                  className="max-w-full max-h-[350px] object-contain rounded-xl shadow-lg"
                />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
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