import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, ShieldCheck, Globe, Users2, Building2 } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      title: "Souveraineté Numérique",
      desc: "Garantir que les données et les infrastructures critiques de la nation restent sous contrôle national.",
      icon: <ShieldCheck className="w-8 h-8 text-momentum-red" />,
    },
    {
      title: "Innovation Inclusive",
      desc: "Développer des technologies qui ne laissent personne de côté, des centres urbains aux zones rurales.",
      icon: <Globe className="w-8 h-8 text-momentum-red" />,
    },
    {
      title: "Excellence Panafricaine",
      desc: "Porter l'expertise congolaise au-delà des frontières avec des standards de qualité internationaux.",
      icon: <Target className="w-8 h-8 text-momentum-red" />,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-slate-50 py-20 lg:py-32 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-black text-momentum-blue leading-[1.1] mb-8">
              L'architecte de la <br />
              <span className="text-momentum-red">renaissance numérique</span> <br />
              en RD Congo.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium">
              Momentum Group Holdings est une structure stratégique dédiée à l'accélération technologique, 
              à la modernisation de l'État et à l'autonomisation des citoyens par le savoir.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div className="space-y-12">
            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-momentum-blue p-3 rounded-2xl text-white">
                  <Eye size={28} />
                </div>
                <h2 className="text-3xl font-black text-momentum-blue uppercase tracking-tight">Notre Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed pl-2 border-l-4 border-momentum-red">
                Devenir le moteur technologique de l'Afrique Centrale d'ici 2030, en transformant chaque défi 
                sociétal en une opportunité numérique durable. Nous voyons une RDC connectée, 
                autosuffisante en énergie et leader en Intelligence Artificielle.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-momentum-blue p-3 rounded-2xl text-white">
                  <Target size={28} />
                </div>
                <h2 className="text-3xl font-black text-momentum-blue uppercase tracking-tight">Notre Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed pl-2 border-l-4 border-momentum-red">
                Concevoir, déployer et maintenir les infrastructures numériques et énergétiques critiques. 
                À travers nos différentes directions, nous digitalisons l'administration publique et 
                formons la main-d'œuvre de demain.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-momentum-blue aspect-square rounded-[3rem] p-10 flex flex-col justify-end text-white relative overflow-hidden group">
              <Building2 className="absolute top-10 right-10 opacity-20 group-hover:scale-125 transition-transform duration-500" size={80} />
              <div className="text-4xl font-black">12+</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-80">Années d'expertise</div>
            </div>
            <div className="bg-slate-100 aspect-square rounded-[3rem] p-10 flex flex-col justify-end text-momentum-blue relative overflow-hidden group">
              <Users2 className="absolute top-10 right-10 opacity-20 group-hover:scale-125 transition-transform duration-500" size={80} />
              <div className="text-4xl font-black">250+</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-80">Experts Nationaux</div>
            </div>
          </div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section className="bg-momentum-blue py-24 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 italic">Nos Valeurs Fondamentales</h2>
            <div className="h-2 w-24 bg-momentum-red mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 hover:bg-white hover:text-momentum-blue transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="opacity-80 group-hover:opacity-100 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black text-momentum-blue mb-8">
            Participez à la construction de l'avenir.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/careers" 
              className="bg-momentum-red text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-momentum-red/20 hover:scale-105 transition-transform"
            >
              Rejoindre l'équipe
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-momentum-blue text-momentum-blue px-10 py-4 rounded-full font-bold hover:bg-momentum-blue hover:text-white transition-all"
            >
              Devenir partenaire
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}