import { Globe, Rocket, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const NosEngagements = () => {
  const engagements = [
    { 
      t: "Momentum Earth", 
      d: "Agriculture intelligente et fermes modernes pour une souveraineté alimentaire durable.", 
      i: <Globe size={32} /> 
    },
    { 
      t: "Momentum Nexus", 
      d: "Incubateur stratégique et financement de startups à fort impact technologique.", 
      i: <Rocket size={32} /> 
    },
    { 
      t: "Momentum MEvent", 
      d: "Organisation de sommets technologiques et marketing d'influence B2B.", 
      i: <BarChart3 size={32} /> 
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-slate-50 overflow-hidden">
      {/* Header avec ligne décorative */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-momentum-blue tracking-tight">
          Engagement & <span className="text-momentum-red">Expansion</span>
        </h2>
        <div className="w-20 h-1.5 bg-momentum-red mx-auto mt-6 rounded-full" />
      </div>

      {/* Grille Responsive */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {engagements.map((item, i) => (
          <div 
            key={i} 
            className="group relative bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-momentum-blue/5 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            {/* Icône décorative en arrière-plan (Watermark) */}
            <div className="absolute -right-4 -bottom-4 text-slate-50 group-hover:text-momentum-red/5 transition-colors duration-500 scale-[2.5] pointer-events-none">
              {item.i}
            </div>

            {/* Contenu */}
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 text-momentum-red mb-8 group-hover:bg-momentum-red group-hover:text-white transition-colors duration-500">
                {item.i}
              </div>
              
              <h4 className="text-xl md:text-2xl font-black text-momentum-blue mb-4 uppercase tracking-tight">
                {item.t}
              </h4>
              
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                {item.d}
              </p>
            </div>

            {/* Bordure subtile au survol */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-momentum-red/10 rounded-[2.5rem] transition-all pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Stats ou Tagline en bas pour combler le vide sur desktop */}
      <div className="mt-16 text-center px-6">
        <p className="text-slate-400 font-medium text-xs md:text-sm uppercase tracking-[0.2em]">
          Bâtir l'écosystème de demain, un projet à la fois.
        </p>
      </div>
    </section>
  );
};

export default NosEngagements;