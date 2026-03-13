import Link from 'next/link';
import { ArrowRight, Shield, Zap, GraduationCap } from 'lucide-react';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative bg-slate-50 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-momentum-red font-bold uppercase tracking-widest text-sm">République Démocratique du Congo</span>
            <h1 className="text-5xl lg:text-7xl font-black text-momentum-blue mt-4 leading-tight">
              Bâtir l'avenir <br /> <span className="text-momentum-red">numérique</span> de la nation.
            </h1>
            <p className="text-xl text-gray-600 mt-6 max-w-xl leading-relaxed">
              Momentum Group Holdings accompagne l'État et les entreprises dans la transformation digitale stratégique et l'innovation technologique.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/services" className="bg-momentum-blue text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all">
                Découvrir nos solutions
              </Link>
              <Link href="/contact" className="border-2 border-momentum-blue text-momentum-blue px-8 py-4 rounded-full font-bold hover:bg-momentum-blue hover:text-white transition-all">
                Nous contacter
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-momentum-blue/20 to-transparent" />
             {/* Remplacez par une image réelle avec <Image /> */}
             <Image
              src="/sections-images/momentum-academy.png"
              alt="Digital Transformation"
              fill
              
             />
          </div>
        </div>
      </section>

      {/* Services Express */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Gouvernance Digitale", icon: <Shield />, desc: "Sécurisation et modernisation des infrastructures étatiques." },
            { title: "Énergie Durable", icon: <Zap />, desc: "Solutions solaires et hydroélectriques pour les zones rurales." },
            { title: "Formation Elite", icon: <GraduationCap />, desc: "Bootcamps intensifs en IA et Data Science via l'Academy." },
          ].map((item, i) => (
            <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow bg-white group">
              <div className="text-momentum-red mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold text-momentum-blue mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}