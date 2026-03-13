import { ArrowRight } from "lucide-react"

const FooterService = () => {
    return (
           <section className="py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-slate-50 text-momentum-blue text-[10px] font-black uppercase tracking-widest mb-8">
            Contactez le groupe
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-momentum-blue mb-10 leading-tight">
            Devenez partenaire de la transformation technologique en Afrique.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-momentum-blue text-white px-10 py-4 rounded-full font-bold hover:bg-momentum-red transition-all flex items-center gap-3">
              Démarrer un projet <ArrowRight size={18} />
            </button>
            <button className="text-slate-600 font-bold hover:text-momentum-blue transition-colors">
              Consulter nos rapports d'impact
            </button>
          </div>
        </div>
      </section>
    )
    }


    export default FooterService;