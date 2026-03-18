"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
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

const WAVE_DELAYS = ["0s", "0.4s", "0.8s", "1.2s"];

const NosDomainesSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <style>{`
        @keyframes wave-float {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .wave-card {
          animation: wave-float 4s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .wave-card { animation: none !important; transform: none !important; }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header - Plus compact sur mobile */}
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.15]">
            Propulser le potentiel de ceux <br className="hidden sm:block" />
            <span className="font-bold text-momentum-blue">qui font avancer le monde</span>
          </h2>
        </div>

        {/* Slider Container - Padding gauche pour aligner la 1ère carte sur le container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-8 overflow-x-auto pb-12 pt-4 scrollbar-hide snap-x snap-mandatory touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SECTIONS.map((section, idx) => (
            <div
              key={idx}
              className="wave-card flex-none snap-center first:ml-[5%] last:mr-[5%] md:first:ml-0 md:last:mr-0"
              style={{
                animationDelay: WAVE_DELAYS[idx],
              }}
            >
              <Link 
                href={section.link}
                className={`group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] transition-all duration-700 ease-in-out block
                  /* Taille mobile : Toutes pareilles pour faciliter le swipe */
                  w-[75vw] h-[450px] 
                  /* Taille desktop : On garde l'effet de vague */
                  md:w-[320px] lg:w-[350px] 
                  ${idx % 2 === 0 ? 'md:h-[480px] md:mt-12' : 'md:h-[550px]'}
                `}
              >
                {/* Image de fond */}
                <Image 
                  src={section.img} 
                  alt={section.title}
                  fill
                  sizes="(max-width: 768px) 75vw, 350px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay sombre */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Contenu de la carte */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[9px] md:text-[10px] font-bold text-white uppercase tracking-widest mb-3 md:mb-4">
                    {section.tag}
                  </div>
                  
                  <p className="text-white/60 text-[10px] md:text-xs mb-1 md:mb-2">{section.date}</p>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    {section.title}
                  </h3>
                  
                  {/* Sur mobile, on affiche un bout de la description pour l'UX */}
                  <p className="text-white/80 text-sm leading-relaxed transition-all duration-500 
                    opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto md:group-hover:h-20 overflow-hidden">
                    {section.desc}
                  </p>

                  <div className="mt-4 flex items-center text-white text-[10px] md:text-xs font-bold opacity-0 md:group-hover:opacity-100 transition-opacity">
                    DÉCOUVRIR <ChevronRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosDomainesSlider;