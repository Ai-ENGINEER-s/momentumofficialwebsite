import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, ShieldCheck, Globe, Building2, Briefcase, Star, Handshake, ChevronRight } from 'lucide-react';

// --- COULEURS EXTRAITES DE VOTRE IMAGE ---
const COLORS = {
  blue: "#133D58", // Profond et institutionnel
  red: "#811625",  // Accent
  gray: "#5f6368", // Fond de section
  light: "#FFFFFF" // Pur
};

export default function AboutPage() {
const stats = [
    { 
      value: "100%", 
      label: "Souveraineté Numérique", 
      icon: <ShieldCheck className="w-6 h-6" style={{ color: COLORS.red }} />,
      detail: "Données locales"
    },
    { 
      value: "Agile", 
      label: "Déploiement Rapide", 
      icon: <Target className="w-6 h-6" style={{ color: COLORS.red }} />,
      detail: "Focus Résultats"
    },
    { 
   value: "Elite", 
      label: "Partenariat Stratégique",
      icon: <Building2 className="w-6 h-6" style={{ color: COLORS.red }} />,
      detail: "Vision 2030"
    },
  ];

  const values = [
    {
      title: "Souveraineté Numérique",
      desc: "Protéger et contrôler nos infrastructures critiques pour garantir l'indépendance de la nation.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Innovation Inclusive",
      desc: "Créer des technologies intelligentes qui bénéficient à tous les citoyens, sans exception.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Excellence Panafricaine",
      desc: "Définir les nouveaux standards de qualité internationaux avec une expertise locale.",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  return (
    <main className="min-h-screen selection:text-white" style={{ background: COLORS.light, color: COLORS.blue, '--selection-bg': COLORS.red } as React.CSSProperties}>
      
      {/* --- HERO SECTION (ÉPURÉE) --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]" style={{ background: `${COLORS.blue}10` }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full blur-[100px]" style={{ background: `${COLORS.red}10` }} />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-8xl font-medium tracking-tighter leading-[0.9] mb-10" style={{ color: COLORS.blue }}>
              L'architecte de la <br />
              <span style={{ color: COLORS.red }} className="font-lightitalic">renaissance</span> numérique.
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed max-w-2xl font-light opacity-90">
              Momentum Group Holdings est le partenaire stratégique dédié à l'accélération technologique, à la modernisation et à la souveraineté numérique de la RD Congo.
            </p>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION (LIGNES ÉPURÉES) --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 border border-slate-100 p-12 rounded-xl">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="bg-slate-50 p-4 rounded-full">{stat.icon}</div>
              <div>
                <div className="text-4xl font-bold tracking-tight" style={{ color: COLORS.blue }}>{stat.value}</div>
                <div className="text-sm font-medium uppercase tracking-wider opacity-70">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION VISION & MISSION (GRIS FONCÉ) --- */}
      <section className="py-32 text-white" style={{ background: COLORS.gray }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="border-l-4 p-8 pl-12" style={{ borderColor: COLORS.red }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg" style={{ background: COLORS.blue }}>
                  <Eye size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight uppercase">Notre Vision 2030</h2>
              </div>
              <p className="text-lg leading-relaxed font-light opacity-80">
                Devenir le moteur technologique de l'Afrique Centrale, transformant chaque défi en une opportunité durable. Nous œuvrons pour une RDC connectée, autosuffisante et leader.
              </p>
            </div>

            <div className="border-l-4 p-8 pl-12" style={{ borderColor: COLORS.blue }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg" style={{ background: COLORS.red }}>
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight uppercase">Notre Mission</h2>
              </div>
              <p className="text-lg leading-relaxed font-light opacity-80">
                Concevoir et maintenir les infrastructures critiques, digitaliser l'administration publique et former la main-d'œuvre de demain par la transmission du savoir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION VALEURS (ÉLÉGANTE ET MODULAIRE) --- */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tighter" style={{ color: COLORS.blue }}>Piliers Fondamentaux</h2>
          <div className="h-1 w-20 mx-auto mt-4" style={{ background: COLORS.red }}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-slate-100 border border-slate-100 overflow-hidden rounded-xl">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-12 hover:bg-slate-50 transition-colors duration-300">
              <div className="mb-8" style={{ color: COLORS.blue }}>
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight" style={{ color: COLORS.blue }}>{v.title}</h3>
              <p className="text-slate-600 leading-relaxed font-lightitalic opacity-90">
                "{v.desc}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA FINAL (ULTRA PRO) --- */}
      <section className="py-40 text-white" style={{ background: COLORS.blue }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ChevronRight size={60} className="mx-auto mb-10 opacity-30" />
          <h2 className="text-5xl lg:text-7xl font-medium tracking-tighter mb-10">
            Ensemble, construisons <br />l'avenir souverain.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue px-12 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all w-full sm:w-auto flex items-center gap-3 justify-center"
              style={{ color: COLORS.blue }}
            >
              <Handshake size={20}/>
              Devenir partenaire
            </Link>
            <Link 
              href="/directions" 
              className="font-bold text-lg flex items-center gap-2 group border-b-2 border-transparent hover:border-white transition-all"
            >
              Découvrir nos pôles d'expertise
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}