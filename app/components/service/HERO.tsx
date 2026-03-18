"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20">
      {/* Éléments de design en arrière-plan (Subtils) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* CÔTÉ GAUCHE : TEXTE STRATÉGIQUE */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-[3px] bg-momentum-red"></span>
            <span className="text-momentum-blue font-black uppercase tracking-[0.4em] text-[10px]">
              Impact Global & Innovation
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light text-slate-900 leading-[1.1] mb-8 tracking-tight"
          >
            Bâtir l'avenir de la RDC par <br />
            <span className="font-bold text-momentum-blue">l'excellence multisectorielle.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <p className="text-slate-500 text-lg max-w-md leading-relaxed border-l-2 border-momentum-red/20 pl-6">
              Solutions innovantes en <span className="text-slate-900 font-semibold">Technologie</span>, 
              <span className="text-slate-900 font-semibold"> Énergie</span> et 
              <span className="text-slate-900 font-semibold"> Santé</span>.
            </p>
            
         
          </motion.div>
        </div>

        {/* CÔTÉ DROIT : GRILLE D'IMAGES (LA VRAIE FORCE VISUELLE) */}
        <div className="relative h-[600px] hidden lg:block">
          {/* Image Principale (ex: Momentum Core / Camion) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-0 right-0 w-[80%] h-[400px] rounded-[2rem] overflow-hidden shadow-2xl z-20"
          >
            <Image 
              src="/sections-images/momentum-core-car.png" 
              alt="Momentum Core" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>

          {/* Image Secondaire (ex: Momentum Health / Hôpital) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute bottom-10 left-0 w-[60%] h-[300px] rounded-[2rem] border-[12px] border-white overflow-hidden shadow-2xl z-30"
          >
            <Image 
              src="/sections-images/se.png" 
              alt="Momentum Health" 
              fill 
              className="object-cover"
            />
          </motion.div>

          {/* Badge de Statistique / Confiance */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute top-1/2 left-1/4 -translate-x-1/2 z-40 bg-white p-6 rounded-2xl shadow-xl border border-slate-100"
          >
            <p className="text-momentum-red font-black text-3xl">100%</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Engagement Digital</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;