"use client";

import { ChevronLeft, ChevronRight, Cpu, Zap, Shield, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const SECTIONS = [
  {
    title: "Momentum Core",
    tag: "TECHNOLOGIE",
    date: "Mars 2026",
    desc: "Leader de la transformation digitale en RDC et solutions d'IA.",
    img: "/sections-images/momentum-core-car.png",
    link: "/domaines/core"
  },
  {
    title: "Momentum Energy",
    tag: "ÉNERGIE",
    date: "Mars 2026",
    desc: "Développement de centrales solaires et solutions hybrides.",
    img: "/sections-images/momentum-energy.png",
    link: "/domaines/energy"
  },
  {
    title: "Momentum Academy",
    tag: "EDUCATION",
    date: "Mars 2026",
    desc: "Réduire le déficit de compétences numériques par des formations IA.",
    img: "/sections-images/momentum-academie.png",
    link: "/domaines/academy"
  },
  {
    title: "Momentum Health",
    tag: "HEALTH TECH",
    date: "Mars 2026",
    desc: "Modernisation des systèmes hospitaliers via Health OS.",
    img: "/sections-images/momentum-health-.png",
    link: "/domaines/health"
  }
];

const NosDomainesSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-light text-slate-800 leading-tight">
            Propulser le potentiel de ceux <br />
            <span className="font-bold">qui font avancer le monde</span>
          </h2>
          
          <div className="flex gap-4 mb-2">
            <button onClick={() => scroll("left")} className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 transition">
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button onClick={() => scroll("right")} className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 transition">
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SECTIONS.map((section, idx) => (
            <Link 
              href={section.link}
              key={idx} 
              className={`flex-none snap-center group relative overflow-hidden rounded-[2.5rem] transition-all duration-700 ease-in-out
                ${idx % 2 === 0 ? 'w-[300px] h-[450px] mt-10' : 'w-[350px] h-[520px]'}
              `}
            >
              {/* Image de fond avec Zoom au survol */}
              <Image 
                src={section.img} 
                alt={section.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay sombre progressif */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Contenu de la carte (Bas) */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4">
                  {section.tag}
                </div>
                
                <p className="text-white/70 text-xs mb-2">{section.date}</p>
                
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {section.title}
                </h3>
                
                <p className="text-white/0 group-hover:text-white/80 text-sm leading-relaxed transition-all duration-500 h-0 group-hover:h-16 overflow-hidden">
                  {section.desc}
                </p>

                <div className="mt-4 flex items-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  VOIR LE DOMAINE <ChevronRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosDomainesSlider;