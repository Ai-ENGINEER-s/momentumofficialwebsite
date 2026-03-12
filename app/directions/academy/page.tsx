import { BookOpen, Users, Terminal, Award } from 'lucide-react';
import Link from 'next/link';

export default function AcademyPage() {
  return (
    <div className="py-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-black text-momentum-blue mb-6">Formez-vous aux métiers du futur.</h1>
          <p className="text-xl text-gray-600">Des bootcamps intensifs à Kinshasa pour devenir expert en Data Science, IA et Cybersécurité.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Data Science & IA", duration: "12 semaines", level: "Avancé" },
            { title: "Fullstack Dev", duration: "16 semaines", level: "Débutant" },
            { title: "Cloud Architect", duration: "10 semaines", level: "Intermédiaire" },
          ].map((course, i) => (
            <div key={i} className="bg-white border-2 border-slate-100 p-8 rounded-3xl hover:border-momentum-red transition-all group">
              <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-momentum-red/10 transition-colors">
                <Terminal className="text-momentum-blue group-hover:text-momentum-red" />
              </div>
              <h3 className="text-2xl font-bold text-momentum-blue mb-2">{course.title}</h3>
              <div className="flex gap-4 text-sm font-semibold text-gray-400 mb-6 uppercase tracking-widest">
                <span>{course.duration}</span>
                <span>•</span>
                <span>{course.level}</span>
              </div>
              <Link href="/contact" className="text-momentum-red font-bold flex items-center gap-2 hover:gap-4 transition-all">
                S'inscrire à la cohorte <Award size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}