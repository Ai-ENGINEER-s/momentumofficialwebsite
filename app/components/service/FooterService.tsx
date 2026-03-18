"use client";

import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

const FooterService = () => {

const handleCTAClick = () => {
  // Logique pour démarrer un projet (ex: redirection vers un formulaire de contact)
  window.location.href = "/contact";
}


  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

      {/* Glow subtil arrière-plan */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-momentum-blue/10 blur-[140px] rounded-full -z-10"/>

      <div className="max-w-[1000px] mx-auto px-6 text-center">

      

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold text-momentum-blue leading-tight tracking-tight mb-8"
        >
          Construisons ensemble  
          <span className="block text-momentum-red">
            la transformation technologique
          </span>
        </motion.h2>

        {/* Texte */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-slate-600 text-lg leading-relaxed mb-14"
        >
          Nous accompagnons les organisations qui veulent créer un impact durable 
          grâce à la technologie, à l’innovation et à l’expertise stratégique.
        </motion.p>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
        >

          {/* CTA principal */}
          {/* <motion.button
          onClick={handleCTAClick}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 bg-momentum-blue text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:bg-momentum-red transition-all"
          >
            Démarrer un projet
            <ArrowRight size={20}/>
          </motion.button> */}

    

        </motion.div>

      </div>
    </section>
  );
};

export default FooterService;