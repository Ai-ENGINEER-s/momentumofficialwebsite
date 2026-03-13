import { motion } from "framer-motion"
import { Building, Database, Landmark } from "lucide-react";

const Produits = () => {

  const products = [
    {
      title: "Momentum 360 CORE",
      desc: "ERP moderne conçu pour les PME africaines afin de centraliser la gestion financière, RH et opérationnelle.",
      icon: <Building size={28} />,
    },
    {
      title: "Momentum GovFlow",
      desc: "Plateforme de digitalisation administrative permettant d’automatiser les processus publics et institutionnels.",
      icon: <Landmark size={28} />,
    },
    {
      title: "Momentum DataLab",
      desc: "Solution d’analyse de données et d’intelligence artificielle pour aider les entreprises à prendre des décisions stratégiques.",
      icon: <Database size={28} />,
    },
  ];
    return(
     <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-momentum-blue text-center mb-20">
            Nos plateformes technologiques
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {products.map((p,i)=>(
              <motion.div
                key={i}
                whileHover={{y:-6}}
                className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition"
              >

                <div className="mb-5 text-momentum-blue">
                  {p.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-momentum-blue">
                  {p.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {p.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>
    )}


    export default Produits;