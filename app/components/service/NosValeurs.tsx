const NosValeurs = () => {
  const valeurs = [
    { l: "I", n: "Intégrité", d: "Transparence totale" },
    { l: "M", n: "Mission", d: "Impact durable" },
    { l: "P", n: "Pédagogie", d: "Partage du savoir" },
    { l: "A", n: "Agilité", d: "Adaptation rapide" },
    { l: "C", n: "Créativité", d: "Solutions nouvelles" },
    { l: "T", n: "Transparence", d: "Responsabilité" },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Container de la grille avec bordures optimisées */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-slate-100 rounded-3xl overflow-hidden shadow-sm">
          {valeurs.map((v, i) => (
            <div 
              key={i} 
              className="group p-6 sm:p-8 border-r border-b border-slate-100 hover:bg-slate-50 transition-all duration-300"
            >
              {/* Lettre géante en fond ou en accent */}
              <div className="relative">
                <span className="text-4xl sm:text-5xl font-black text-momentum-red/10 group-hover:text-momentum-red transition-colors duration-500">
                  {v.l}
                </span>
                
                {/* Contenu textuel */}
                <div className="mt-2 sm:mt-4">
                  <h3 className="text-sm sm:text-base font-bold text-momentum-blue uppercase tracking-wider">
                    {v.n}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-tight mt-1 font-medium italic">
                    {v.d}
                  </p>
                </div>
              </div>

              {/* Petite barre décorative au survol */}
              <div className="w-0 group-hover:w-8 h-1 bg-momentum-red mt-4 transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>

        {/* Note de bas de section optionnelle pour le mobile */}
        <p className="text-center text-slate-400 text-[10px] mt-6 md:hidden uppercase tracking-widest">
          L'ADN de Momentum — I.M.P.A.C.T
        </p>
      </div>
    </section>
  );
};

export default NosValeurs;