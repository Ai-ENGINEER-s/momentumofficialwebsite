import { Sun, Wind, Battery, Zap } from 'lucide-react';

export default function EnergyPage() {
  const sectors = [
    { title: "Solaire Photovoltaïque", desc: "Déploiement de centrales solaires pour l'électrification rurale.", icon: <Sun className="text-yellow-500" /> },
    { title: "Hydroélectricité", desc: "Micro-centrales pour exploiter le potentiel hydrique local.", icon: <Zap className="text-blue-500" /> },
    { title: "Stockage & Réseaux", desc: "Solutions de batteries industrielles et smart-grids.", icon: <Battery className="text-green-500" /> },
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-slate-900 py-20 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h1 className="text-5xl font-black mb-6 italic">Momentum Energy</h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Propulser la transition énergétique de la RD Congo par des solutions renouvelables souveraines et durables.
          </p>
        </div>
      </header>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          {sectors.map((s, i) => (
            <div key={i} className="p-10 border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all bg-white">
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-2xl font-bold text-momentum-blue mb-4">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}