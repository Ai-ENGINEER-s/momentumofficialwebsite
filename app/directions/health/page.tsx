import { HeartPulse, ShieldCheck, Microscope } from 'lucide-react';

export default function HealthPage() {
  return (
    <div className="py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h1 className="text-4xl font-black text-momentum-blue mb-4 uppercase">Momentum Health</h1>
        <h2 className="text-2xl text-momentum-red font-medium mb-12 italic">La technologie au service de la vie.</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-sm border border-gray-50 rounded-2xl">
            <HeartPulse className="mb-4 text-momentum-red" />
            <h3 className="font-bold text-xl mb-2">Télémédecine</h3>
            <p className="text-gray-500">Connecter les patients des provinces aux meilleurs spécialistes de Kinshasa.</p>
          </div>
          <div className="bg-white p-8 shadow-sm border border-gray-50 rounded-2xl">
            <ShieldCheck className="mb-4 text-momentum-red" />
            <h3 className="font-bold text-xl mb-2">Gestion Hospitalière</h3>
            <p className="text-gray-500">Digitalisation complète du parcours patient et de la chaîne d'approvisionnement.</p>
          </div>
          <div className="bg-white p-8 shadow-sm border border-gray-50 rounded-2xl">
            <Microscope className="mb-4 text-momentum-red" />
            <h3 className="font-bold text-xl mb-2">Data Sanitaire</h3>
            <p className="text-gray-500">Analyse prédictive pour anticiper et stopper les épidémies locales.</p>
          </div>
        </div>
      </div>
    </div>
  );
}