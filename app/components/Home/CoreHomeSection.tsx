"use client";

import { Monitor, Code2, Database, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CoreHomeSection() {
  const capabilities = [
    {
      icon: Monitor,
      title: "Transformation numérique",
      description: "Modernisation des processus et adoption d’outils digitaux pour améliorer la performance globale.",
    },
    {
      icon: Code2,
      title: "Logiciels sur mesure",
      description: "Développement d'applications web modernes et de plateformes métiers adaptées à vos besoins.",
    },
    {
      icon: Database,
      title: "Cloud & Big Data",
      description: "Solutions cloud modernes pour stocker, analyser et exploiter vos données stratégiques.",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE CENTRÉ */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
        
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-momentum-blue tracking-tighter leading-[1.1] max-w-4xl"
          >
            Ingénierie digitale. <br />
            <span className="text-slate-300">Croissance durable.</span>
          </motion.h2>
        </div>

        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {capabilities.map((cap, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 md:p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:border-momentum-blue/20 hover:shadow-2xl hover:shadow-momentum-blue/5 transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Icône avec effet de cercle au survol */}
              <div className="relative w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-slate-50 text-momentum-blue group-hover:bg-momentum-blue group-hover:text-white transition-all duration-500 shadow-inner">
                <cap.icon className="w-7 h-7 relative z-10" strokeWidth={1.5} />
                <div className="absolute inset-0 rounded-2xl bg-momentum-blue scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-momentum-blue mb-4 tracking-tight uppercase">
                {cap.title}
              </h4>
              
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                {cap.description}
              </p>

              {/* Petit indicateur de lien discret */}
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-momentum-red" />
              </div>
              
              {/* Overlay subtile pour la profondeur */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}

        </div>

        {/* Footer de section optionnel */}
       

      </div>
    </section>
  );
}