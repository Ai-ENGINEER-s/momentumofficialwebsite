"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings2, Info } from 'lucide-react';

export default function CookiesPage() {
  return (
    <main className="bg-[#FCFCFD] min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
          <div className="bg-momentum-blue p-12 text-white text-center">
            <Cookie size={48} className="mx-auto mb-6 text-momentum-red" />
            <h1 className="text-4xl font-black mb-4">Politique des Cookies</h1>
            <p className="opacity-70 max-w-xl mx-auto">Nous optimisons votre expérience digitale grâce à une utilisation ciblée et respectueuse des témoins de connexion.</p>
          </div>

          <div className="p-12 space-y-12">
            <section className="flex gap-6 items-start">
              <div className="p-4 bg-red-50 text-momentum-red rounded-2xl">
                <Settings2 size={24} />
              </div>
              <div>
                <h2 className="text-xl font-black text-momentum-blue mb-3">Cookies Techniques (Essentiels)</h2>
                <p className="text-slate-500 leading-relaxed">Indispensables au bon fonctionnement de la navigation et à la sécurité de vos formulaires de contact.</p>
              </div>
            </section>

            <section className="flex gap-6 items-start">
              <div className="p-4 bg-blue-50 text-momentum-blue rounded-2xl">
                <Info size={24} />
              </div>
              <div>
                <h2 className="text-xl font-black text-momentum-blue mb-3">Mesure d'Audience</h2>
                <p className="text-slate-500 leading-relaxed">Nous permettent d'analyser le trafic vers nos pôles d'expertise pour améliorer la pertinence de nos contenus.</p>
              </div>
            </section>

          
          </div>
        </div>
      </div>
    </main>
  );
}