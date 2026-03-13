"use client";

import Image from "next/image";
import { Monitor, Code2, Database, ArrowUpRight } from "lucide-react";

export default function CoreHomeSection() {
  const capabilities = [
    {
      icon: Monitor,
      title: "Transformation numérique",
      description: "Modernisation des processus et adoption d’outils digitaux pour améliorer la performance.",
    },
    {
      icon: Code2,
      title: "Logiciels sur mesure",
      description: "Développement d'applications web modernes et de plateformes métiers adaptées.",
    },
    {
      icon: Database,
      title: "Cloud & Big Data",
      description: "Solutions cloud modernes pour stocker, analyser et exploiter les données stratégiques.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE CENTRÉ */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
         
          <h2 className="text-4xl md:text-6xl font-bold text-momentum-blue tracking-tight max-w-3xl">
            Ingénierie digitale. <br />
            <span className="text-gray-400">Croissance durable.</span>
          </h2>
        </div>

        {/* GRILLE PRINCIPALE */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* CAPABILITIES CENTRÉES - 3 colonnes égales */}
          {capabilities.map((cap, i) => (
            <div key={i} className="col-span-12 md:col-span-4 p-8 rounded-3xl border border-gray-100 hover:border-momentum-blue/20 hover:bg-gray-50/50 transition-all flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-gray-50 text-momentum-blue">
                <cap.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-momentum-blue mb-3">{cap.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{cap.description}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}