"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Globe, Scale, AlertCircle } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="mb-16 border-b border-slate-200 pb-10">
          <div className="flex items-center gap-2 text-momentum-red font-black text-xs uppercase tracking-[0.3em] mb-4">
            <div className="w-8 h-[2px] bg-momentum-red"></div> CADRE LÉGAL
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-momentum-blue tracking-tight">
            Conditions <span className="text-momentum-red">Générales</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-black text-momentum-blue mb-6">1. Acceptation des termes</h2>
              <p className="text-slate-500 leading-relaxed italic border-l-4 border-momentum-red pl-6">
                "En accédant aux services de Momentum Group Holdings, vous acceptez d'être lié par les présentes conditions d'utilisation et par toutes les lois et réglementations applicables."
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-black text-momentum-blue mb-6">2. Propriété Intellectuelle</h2>
              <p className="text-slate-500 leading-relaxed">
                Les algorithmes développés par Momentum Core, les supports pédagogiques de Momentum Academy et les infrastructures de Momentum Energy sont la propriété exclusive du groupe. Toute reproduction sans accord écrit est strictement interdite.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-momentum-blue p-8 rounded-3xl text-white shadow-xl shadow-momentum-blue/20">
              <AlertCircle className="mb-4 text-momentum-red" size={32} />
              <h3 className="font-black text-xl mb-2">Note Importante</h3>
              <p className="text-sm opacity-80 leading-relaxed">Ces conditions ont été mises à jour pour inclure les régulations spécifiques au secteur de l'énergie en RDC.</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}