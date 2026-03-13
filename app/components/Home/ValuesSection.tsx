"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Intégrité",
    desc: "Agir avec honnêteté et responsabilité dans chacune de nos décisions.",
  },
  {
    number: "02",
    title: "Mission",
    desc: "Créer des solutions technologiques qui génèrent un impact durable.",
  },
  {
    number: "03",
    title: "Pédagogie",
    desc: "Partager le savoir et accompagner les organisations dans leur évolution.",
  },
];

const faq = [
  {
    question: "Comment accompagnez-vous les entreprises dans leur transformation ?",
    answer:
      "Nous analysons vos besoins, concevons des solutions adaptées et déployons des plateformes numériques performantes.",
  },
  {
    question: "Vos solutions sont-elles adaptées aux PME ?",
    answer:
      "Oui. Nos solutions sont modulaires et conçues pour s’adapter aussi bien aux startups qu’aux grandes entreprises.",
  },
  {
    question: "Proposez-vous un accompagnement sur la durée ?",
    answer:
      "Oui. Nous assurons maintenance, évolution et support afin de garantir la performance continue de vos systèmes.",
  },
];

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-momentum-blue mb-6 tracking-tight">
            Nos valeurs fondamentales
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Des principes solides qui guident chacune de nos décisions et
            façonnent notre manière d’accompagner les organisations.
          </p>
        </div>

        {/* VALEURS */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-5">

                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-momentum-blue/10 text-momentum-blue font-bold">
                  {step.number}
                </div>

                <h3 className="text-lg font-semibold text-momentum-blue">
                  {step.title}
                </h3>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">

          <h3 className="text-3xl font-semibold text-momentum-blue text-center mb-12">
            Questions fréquentes
          </h3>

          <div className="space-y-4">

            {faq.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className={`bg-white border rounded-2xl transition-all ${
                    isOpen
                      ? "border-momentum-blue shadow-md"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                  >
                    <span className="font-medium text-slate-900 pr-6">
                      {item.question}
                    </span>

                    <div className="text-momentum-blue">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}