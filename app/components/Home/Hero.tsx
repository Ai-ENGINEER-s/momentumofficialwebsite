"use client";

import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default  function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 bg-white overflow-hidden">
      
      {/* Fond décoratif subtil */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* TEXTE CONTENT */}
        <div className="flex-1 space-y-8 md:space-y-10 text-center lg:text-left z-10">
          
        

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-momentum-blue leading-[1] tracking-tighter"
          >
            Le futur c'est <br />
            <span className="text-momentum-red inline-block mt-2">maintenant.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            Osons l'avenir avec <span className="text-momentum-blue font-bold">Momentum</span> : ensemble, redéfinissons les normes et créons un impact durable à travers l'innovation et l'excellence.
          </motion.p>
          
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button className="w-full sm:w-auto px-10 py-5 bg-momentum-blue text-white rounded-2xl font-black text-lg shadow-2xl shadow-momentum-blue/20 hover:bg-slate-900 transition-all group flex items-center justify-center gap-3">
              Démarrer l'aventure
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-momentum-blue border-2 border-slate-100 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              Voir nos solutions
            </button>
          </motion.div> */}
        </div>

        {/* VISUEL COMPOSITE */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
          <div className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-square">
            
            {/* Image Principale (Smartphone Style) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative z-20 w-[260px] h-[520px] md:w-[280px] md:h-[560px] mx-auto lg:ml-0 drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
            >
              <div className="absolute inset-0 rounded-[3rem] border-[10px] border-slate-900 overflow-hidden shadow-inner">
                <Image 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
                  alt="Momentum Interface"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Carte Flottante (Vision) - Cachée sur petit mobile, visible dès 'md' */}
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 12 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ delay: 0.6, duration: 1 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="absolute -top-6 -right-4 md:-right-12 w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden hidden sm:block border-[12px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.1)] z-30 transition-all duration-500"
            >
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Equipe Momentum"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Éléments de design abstraits (Cercles) */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-momentum-red/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-100 rounded-full -z-20 opacity-50" />
          </div>
        </div>

      </div>
    </section>
  );
}