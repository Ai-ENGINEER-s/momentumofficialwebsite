import { Globe, Rocket, BarChart3 } from "lucide-react"

const NosEngagements = () => {
    return (
          <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center mb-16">
          <h2 className="text-3xl font-black text-momentum-blue">Engagement & Expansion</h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-8">
          {[
            { t: "Momentum Earth", d: "Agriculture intelligente et fermes modernes.", i: <Globe /> },
            { t: "Momentum Nexus", d: "Incubateur et financement de startups.", i: <Rocket /> },
            { t: "Momentum MEvent", d: "Marketing et sommets technologiques.", i: <BarChart3 /> },
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 hover:border-momentum-red/20 transition-all">
              <div className="text-momentum-red mb-6">{item.i}</div>
              <h4 className="text-xl font-black text-momentum-blue mb-3">{item.t}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
    )


}


export default NosEngagements;