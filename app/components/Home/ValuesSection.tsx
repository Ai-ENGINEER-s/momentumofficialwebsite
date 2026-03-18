"use client";

import { useState } from "react";
import { Plus, Minus, Shield, Target, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Intégrité",
    desc: "Agir avec honnêteté et responsabilité dans chacune de nos décisions pour bâtir une confiance durable.",
    icon: <Shield size={20} />,
  },
  {
    number: "02",
    title: "Mission",
    desc: "Créer des solutions technologiques qui génèrent un impact durable pour les institutions et les citoyens.",
    icon: <Target size={20} />,
  },
  {
    number: "03",
    title: "Pédagogie",
    desc: "Partager le savoir et accompagner les organisations dans leur évolution technologique continue.",
    icon: <GraduationCap size={20} />,
  },
];

const faq = [
  {
    question: "Comment accompagnez-vous les entreprises dans leur transformation ?",
    answer: "Nous analysons vos besoins, concevons des solutions adaptées et déployons des plateformes numériques performantes avec un suivi rigoureux.",
  },
  {
    question: "Vos solutions sont-elles adaptées aux PME ?",
    answer: "Absolument. Nos solutions sont modulaires et conçues pour s’adapter aussi bien aux structures agiles qu’aux grandes administrations publiques.",
  },
  {
    question: "Proposez-vous un accompagnement sur la durée ?",
    answer: "Oui. Nous assurons la maintenance, l'évolution technique et le support stratégique afin de garantir la pérennité de vos systèmes.",
  },
];

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-momentum-blue mb-6 tracking-tight"
          >
            Nos valeurs <span className="text-momentum-red">fondamentales</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto text-base md:text-xl leading-relaxed"
          >
            Des principes solides qui guident chacune de nos décisions et
            façonnent notre manière d’accompagner l’avenir numérique.
          </motion.p>
        </div>

        {/* VALEURS - Grid responsive 1 col (mob) / 3 col (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-24 md:mb-32">
          {values.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 transition-all hover:shadow-2xl hover:shadow-momentum-blue/5"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-momentum-red font-black group-hover:bg-momentum-red group-hover:text-white transition-colors duration-300">
                  {step.number}
                </div>
                <div className="text-slate-200 group-hover:text-momentum-red/20 transition-colors">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-momentum-blue mb-4 uppercase tracking-tight italic">
                {step.title}
              </h3>

              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FAQ - Largeur contrôlée */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-black text-momentum-blue tracking-tighter uppercase italic">
              Questions fréquentes
            </h3>
            <div className="w-12 h-1 bg-momentum-red mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faq.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className={`bg-white border-2 rounded-3xl transition-all duration-300 ${
                    isOpen
                      ? "border-momentum-blue shadow-xl shadow-momentum-blue/5"
                      : "border-slate-100 hover:border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-6 md:px-8 text-left group"
                  >
                    <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-momentum-blue' : 'text-slate-700'}`}>
                      {item.question}
                    </span>

                    <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-momentum-red' : 'text-momentum-blue'}`}>
                      {isOpen ? <Minus size={24} strokeWidth={3} /> : <Plus size={24} strokeWidth={3} />}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-8 md:px-8 text-slate-500 text-sm md:text-base leading-relaxed border-t border-slate-50 pt-4 mx-2">
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