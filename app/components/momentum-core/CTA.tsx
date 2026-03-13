import { ArrowRight } from "lucide-react"

const CTA = () => {
    return (  <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-semibold text-momentum-blue mb-6">
            Construisons la transformation digitale
          </h2>

          <p className="text-slate-600 mb-10">
            Contactez Momentum Core pour développer des solutions technologiques
            adaptées à votre organisation.
          </p>

          <button className="bg-momentum-blue text-white px-10 py-4 rounded-xl font-semibold flex items-center gap-3 mx-auto hover:bg-momentum-red transition">
            Démarrer un projet
            <ArrowRight size={20}/>
          </button>

        </div>
      </section>)
}

export default CTA