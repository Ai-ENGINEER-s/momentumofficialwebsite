"use client";

import Image from "next/image";
import { Monitor, Code2, Database, ArrowRight } from "lucide-react";

export default function CoreHomeSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* background visuals */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-momentum-blue/5 blur-[150px] rounded-full -z-10"/>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-momentum-red/5 blur-[180px] rounded-full -z-10"/>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* IMAGE */}
          <div className="relative h-[520px] rounded-[3rem] overflow-hidden group">

            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="Digital transformation"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-momentum-blue/80 via-momentum-blue/50 to-transparent"/>

          </div>

          {/* TEXTE */}
          <div className="max-w-xl">

            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-momentum-red"/>
              <span className="uppercase text-xs tracking-[0.3em] font-bold text-momentum-red">
                Momentum Core
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-momentum-blue leading-tight">
              Ingénierie digitale
              <br/>
              pour une croissance
              <span className="text-momentum-red"> durable</span>
            </h2>

            <p className="text-gray-500 text-lg mt-6 leading-relaxed">
              Momentum Core conçoit des plateformes numériques modernes qui
              permettent aux entreprises d'innover, d'automatiser leurs
              processus et de transformer leurs données en valeur stratégique.
            </p>

          </div>

        </div>

        {/* CAPABILITIES */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* CARD 1 */}
          <div className="group">

            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-momentum-blue/10 text-momentum-blue">
              <Monitor className="w-6 h-6"/>
            </div>

            <h3 className="text-xl font-bold text-momentum-blue mb-3 group-hover:text-momentum-red transition">
              Transformation numérique
            </h3>

            <p className="text-gray-500 leading-relaxed mb-4">
              Modernisation des processus et adoption d’outils digitaux pour
              améliorer la performance des organisations.
            </p>

            <button className="flex items-center gap-2 text-momentum-blue font-semibold">
              Explorer
              <ArrowRight className="w-4 h-4"/>
            </button>

          </div>

          {/* CARD 2 */}
          <div className="group">

            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-momentum-blue/10 text-momentum-blue">
              <Code2 className="w-6 h-6"/>
            </div>

            <h3 className="text-xl font-bold text-momentum-blue mb-3 group-hover:text-momentum-red transition">
              Logiciels sur mesure
            </h3>

            <p className="text-gray-500 leading-relaxed mb-4">
              Développement d'applications web modernes et de plateformes
              métiers adaptées à votre activité.
            </p>

            <button className="flex items-center gap-2 text-momentum-blue font-semibold">
              Découvrir
              <ArrowRight className="w-4 h-4"/>
            </button>

          </div>

          {/* CARD 3 */}
          <div className="group">

            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-momentum-blue/10 text-momentum-blue">
              <Database className="w-6 h-6"/>
            </div>

            <h3 className="text-xl font-bold text-momentum-blue mb-3 group-hover:text-momentum-red transition">
              Cloud & Big Data
            </h3>

            <p className="text-gray-500 leading-relaxed mb-4">
              Solutions cloud modernes pour stocker, analyser et exploiter les
              données stratégiques.
            </p>

            <button className="flex items-center gap-2 text-momentum-blue font-semibold">
              Explorer
              <ArrowRight className="w-4 h-4"/>
            </button>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-24 bg-momentum-blue text-white rounded-[3rem] p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">

          <div className="absolute right-0 top-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3"/>

          <div className="relative z-10">

            <h3 className="text-3xl font-bold mb-2">
              Lancez votre projet digital
            </h3>

            <p className="text-blue-100/80">
              Notre équipe vous accompagne dans la conception de vos
              plateformes technologiques.
            </p>

          </div>

          <button className="relative z-10 bg-white text-momentum-blue px-10 py-4 rounded-xl font-bold hover:bg-momentum-red hover:text-white transition">
            Démarrer un projet
          </button>

        </div>

      </div>
    </section>
  );
}