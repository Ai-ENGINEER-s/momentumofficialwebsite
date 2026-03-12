"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Intégrité",
    desc: "Agir avec honnêteté et respect dans toutes nos actions.",
  },
  {
    number: "02",
    title: "Mission",
    desc: "Orienter nos efforts vers des objectifs significatifs et durables.",
  },
  {
    number: "03",
    title: "Pédagogie",
    desc: "Transmettre des connaissances et accompagner la croissance personnelle.",
  },
];

const faq = [
  {
    question: "Comment accompagnez-vous les entreprises dans leur transformation ?",
    answer: "Nous analysons vos besoins, concevons des solutions adaptées et déployons des plateformes numériques performantes.",
  },
  {
    question: "Vos solutions sont-elles adaptées aux PME ?",
    answer: "Oui. Nous concevons des solutions modulaires adaptées aussi bien aux startups qu'aux grandes entreprises.",
  },
  {
    question: "Proposez-vous un accompagnement sur la durée ?",
    answer: "Oui. Nous assurons maintenance, évolution et support pour garantir la performance continue de vos systèmes.",
  },
];

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-momentum-blue mb-6 tracking-tight">
            Nos valeurs fondamentales
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Nos principes guident chacune de nos décisions et définissent notre accompagnement.
          </p>
        </div>

        {/* VALEURS / STEPS */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {steps.map((step, i) => (
            <div key={i} className="group p-8 rounded-3xl transition-colors hover:bg-slate-50">
              <div className="text-6xl font-black text-momentum-blue/10 group-hover:text-momentum-blue/20 transition-colors mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-momentum-blue mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ SECTION */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-momentum-blue text-center mb-12">
            Questions fréquentes
          </h3>

          <div className="space-y-4">
            {faq.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`border transition-all duration-300 rounded-3xl overflow-hidden ${
                    isOpen ? "border-momentum-blue bg-slate-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex justify-between items-center px-8 py-6 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-gray-900 leading-tight">
                      {item.question}
                    </span>
                    <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      {isOpen ? <Minus className="text-momentum-blue" size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  {/* Animation de hauteur fluide en CSS pur */}
                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}>
                    <div className="overflow-hidden">
                      <p className="px-8 pb-6 text-gray-600 leading-relaxed">
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