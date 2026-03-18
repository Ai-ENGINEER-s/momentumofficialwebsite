"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const FooterService = () => {
  const router = useRouter();

  const handleCTAClick = () => {
    router.push("/contact");
  };

  return (
    <section className="relative py-16 md:py-28 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      
      {/* Glow d'arrière-plan - Adapté pour ne pas déborder sur mobile */}
      <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] -translate-x-1/2 -translate-y-1/2 bg-momentum-blue/10 blur-[80px] md:blur-[140px] rounded-full -z-10 animate-pulse" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Titre - Ajustement fluide de la taille */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-momentum-blue leading-[1.1] tracking-tight mb-6 md:mb-8"
        >
          Construisons ensemble <br className="hidden sm:block" />
          <span className="text-momentum-red inline-block mt-2">
            la transformation technologique
          </span>
        </motion.h2>

        {/* Texte de description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed mb-10 md:mb-14 px-2"
        >
          Nous accompagnons les organisations qui veulent créer un impact durable 
          grâce à la technologie, à l’innovation et à l’expertise stratégique.
        </motion.p>

        {/* Groupe de Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6"
        >
          {/* CTA Principal */}
          <motion.button
            onClick={handleCTAClick}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-momentum-blue text-white px-8 md:px-10 py-4 rounded-2xl font-bold shadow-xl shadow-momentum-blue/20 hover:bg-slate-900 transition-all duration-300 group"
          >
            Démarrer un projet
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Optionnel: Bouton secondaire si besoin plus tard */}
          {/* <button className="text-momentum-blue font-bold hover:underline transition-all">
            Nous appeler
          </button> 
          */}
        </motion.div>

      </div>

      {/* Décoration subtile en bas de section */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
};

export default FooterService;