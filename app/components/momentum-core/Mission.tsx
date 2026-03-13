"use client";

import { motion } from "framer-motion";

const StepsSection = () => {

  const steps = [
    {
      number: "01",
      title: "Analyse & Vision",
      description:
        "Nous auditons vos processus actuels afin de définir une feuille de route technologique adaptée à vos objectifs de croissance en RDC.",
    },
    {
      number: "02",
      title: "Développement & IA",
      description:
        "Nos ingénieurs conçoivent des solutions SaaS, ERP et des systèmes d’intelligence artificielle pour automatiser et optimiser vos opérations.",
    },
    {
      number: "03",
      title: "Impact & Support",
      description:
        "Nous assurons le déploiement cloud, la maintenance continue et l’évolution des solutions afin de garantir votre souveraineté digitale.",
    },
  ];

  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-momentum-blue mb-6 tracking-tight">
            Accélérez votre transformation digitale
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Trois étapes stratégiques pour accompagner les entreprises et
            institutions dans leur transformation technologique.
          </p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="bg-momentum-blue text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-momentum-red transition-all"
          >
            Commencer maintenant
          </motion.button>
        </motion.div>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-10 relative">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all"
            >

              {/* Numéro */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-momentum-blue/10 text-momentum-blue font-semibold mb-6">
                {step.number}
              </div>

              {/* Titre */}
              <h3 className="text-xl font-semibold text-momentum-blue mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StepsSection;