import { Landmark, Building, Users, Cpu } from "lucide-react";


const Marche = () => {
      const markets = [
    { title: "Banques", icon: <Landmark size={26}/> },
    { title: "Grandes entreprises", icon: <Building size={26}/> },
    { title: "PME", icon: <Users size={26}/> },
    { title: "Administrations publiques", icon: <Cpu size={26}/> },
  ];
    return (

          <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-semibold text-momentum-blue mb-16">
            Marché cible
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {markets.map((m,i)=>(
              <div key={i} className="bg-white border rounded-xl p-8 flex flex-col items-center gap-4">
                <div className="text-momentum-blue">{m.icon}</div>
                <p className="font-medium text-slate-700">{m.title}</p>
              </div>
            ))}

          </div>

        </div>
      </section>
    )}



export default Marche