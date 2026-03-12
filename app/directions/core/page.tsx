import { Code2, Cpu, Globe2, Sparkles } from 'lucide-react';

export default function CorePage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-momentum-blue py-20 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h1 className="text-4xl lg:text-6xl font-black mb-6">Momentum Core</h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            L'unité d'ingénierie d'excellence dédiée au développement d'infrastructures numériques souveraines et de solutions d'IA avancées.
          </p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="bg-momentum-red/10 p-3 rounded-xl text-momentum-red h-fit"><Cpu /></div>
            <div>
              <h3 className="text-xl font-bold text-momentum-blue">Intelligence Artificielle</h3>
              <p className="text-gray-600">Développement de modèles LLM adaptés aux contextes locaux et automatisation intelligente.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-momentum-red/10 p-3 rounded-xl text-momentum-red h-fit"><Code2 /></div>
            <div>
              <h3 className="text-xl font-bold text-momentum-blue">Génie Logiciel</h3>
              <p className="text-gray-600">Conception d'applications critiques, scalables et sécurisées pour le secteur public.</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 rounded-3xl p-10 border border-slate-200">
          <h2 className="text-2xl font-black text-momentum-blue mb-6">Projets Phares</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 font-medium text-gray-700">
              <Sparkles size={18} className="text-momentum-red" /> Système National d'Identité Numérique
            </li>
            <li className="flex items-center gap-3 font-medium text-gray-700">
              <Sparkles size={18} className="text-momentum-red" /> Plateforme de Gestion Fiscale Intégrée
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}