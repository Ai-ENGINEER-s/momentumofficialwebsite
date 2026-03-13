

const NosValeurs = () => {
    return (
        <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0 border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
            {[
              { l: "I", n: "Intégrité", d: "Transparence totale" },
              { l: "M", n: "Mission", d: "Impact durable" },
              { l: "P", n: "Pédagogie", d: "Partage du savoir" },
              { l: "A", n: "Agilité", d: "Adaptation rapide" },
              { l: "C", n: "Créativité", d: "Solutions nouvelles" },
              { l: "T", n: "Transparence", d: "Responsabilité" },
            ].map((v, i) => (
              <div key={i} className="p-8 border-r border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <span className="text-3xl font-black text-momentum-red">{v.l}</span>
                <h3 className="text-sm font-bold text-momentum-blue mt-2">{v.n}</h3>
                <p className="text-[11px] text-slate-400 leading-tight mt-1">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
            )
            }



            export default NosValeurs;