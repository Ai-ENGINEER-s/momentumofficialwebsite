import { Leaf, Droplets, Map } from 'lucide-react';

export default function EarthPage() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
      <div className="flex flex-col items-center text-center mb-16">
        <Leaf className="text-green-600 w-16 h-16 mb-4" />
        <h1 className="text-5xl font-black text-momentum-blue uppercase">Momentum Earth</h1>
        <p className="text-gray-600 mt-4 max-w-2xl text-lg italic">
          Optimiser les ressources naturelles de la RDC grâce à l'AgriTech et au monitoring environnemental.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative group overflow-hidden rounded-3xl h-80 bg-slate-100 flex items-center justify-center">
           <div className="text-center p-6">
              <Map className="mx-auto mb-4 text-momentum-blue" />
              <h3 className="text-2xl font-bold mb-2">Cartographie IA</h3>
              <p className="text-gray-500">Analyse par drone et satellite pour optimiser les rendements agricoles.</p>
           </div>
        </div>
        <div className="relative group overflow-hidden rounded-3xl h-80 bg-slate-100 flex items-center justify-center">
           <div className="text-center p-6">
              <Droplets className="mx-auto mb-4 text-momentum-blue" />
              <h3 className="text-2xl font-bold mb-2">Gestion de l'eau</h3>
              <p className="text-gray-500">Systèmes d'irrigation intelligents connectés en temps réel.</p>
           </div>
        </div>
      </div>
    </main>
  );
}