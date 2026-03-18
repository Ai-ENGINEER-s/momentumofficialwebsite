// components/home/DirectionCard.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Props { 
  title: string; 
  desc: string; 
  href: string; 
  color: 'blue' | 'red' | 'orange' | 'green' | 'slate'; // Types stricts pour Tailwind
  tag: string; 
}

export default function DirectionCard({ title, desc, href, color, tag }: Props) {
  // Mapping des couleurs pour éviter les classes dynamiques non détectées
  const colorStyles = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    red: "bg-red-50 text-red-600 border-red-100",
    orange: "bg-orange-50 text-orange-600 border-orange-100",
    green: "bg-green-50 text-green-600 border-green-100",
    slate: "bg-slate-50 text-slate-600 border-slate-100",
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white border border-slate-100 p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-momentum-blue/5 transition-all duration-500 flex flex-col justify-between h-full min-h-[320px] md:min-h-[380px]"
    >
      {/* Glow décoratif discret au survol */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none" />

      <div className="relative z-10">
        <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 inline-block border ${colorStyles[color]}`}>
          {tag}
        </span>
        
        <h3 className="text-xl md:text-2xl font-black text-momentum-blue mb-4 group-hover:text-momentum-red transition-colors italic uppercase tracking-tighter leading-none">
          {title}
        </h3>
        
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 line-clamp-4 group-hover:text-slate-700 transition-colors">
          {desc}
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-slate-50 group-hover:border-slate-100 transition-colors">
        <Link 
          href={href} 
          className="flex items-center gap-2 font-bold text-momentum-blue text-sm md:text-base group-hover:text-momentum-red transition-all"
        >
          <span>DÉCOUVRIR LE DOMAINE</span>
          <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>

      {/* Décoration d'angle au survol */}
      <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-10 transition-opacity">
        <span className="text-6xl font-black select-none">/</span>
      </div>
    </motion.div>
  );
}