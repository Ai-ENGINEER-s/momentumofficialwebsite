import { Rocket, Target, Handshake } from 'lucide-react';

export default function NexusPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="bg-momentum-red/10 text-momentum-red px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Innovation Ouverte</span>
          <h1 className="text-5xl font-black text-momentum-blue mt-6 mb-8 uppercase">Nexus Hub</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            L'accélérateur de Momentum. Nous connectons les startups locales aux capitaux et aux besoins technologiques du gouvernement.
          </p>
          <div className="mt-12 space-y-6">
            <div className="flex gap-4 items-start">
              <Rocket className="shrink-0 text-momentum-red" />
              <p className="font-medium text-gray-700">Incubation de solutions Fintech et GovTech.</p>
            </div>
            <div className="flex gap-4 items-start">
              <Target className="shrink-0 text-momentum-red" />
              <p className="font-medium text-gray-700">Accès aux marchés publics pour les innovateurs congolais.</p>
            </div>
          </div>
        </div>
        <div className="bg-momentum-blue rounded-[3rem] p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Prêt à scaler ?</h2>
          <p className="mb-8 opacity-80">Rejoignez notre prochain programme d'accélération et bénéficiez de l'expertise Momentum.</p>
          <button className="bg-white text-momentum-blue px-8 py-4 rounded-xl font-bold">Postuler au Hub</button>
        </div>
      </div>
    </div>
  );
}