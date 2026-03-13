import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* COLONNE GAUCHE : TEXTE (Couleurs Momentum) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-momentum-blue tracking-tight mb-8">
              Momentum Core
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6 leading-tight">
              Propulsez votre institution dans l'ère de l'IA.
            </h2>

            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Division technologique de Momentum Group dédiée à la transformation
              digitale des entreprises et institutions en Afrique grâce aux
              logiciels, aux plateformes SaaS et à l’intelligence artificielle.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-momentum-blue text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:brightness-110 transition-all"
            >
              En savoir plus
            </motion.button>
          </motion.div>

          {/* COLONNE DROITE : PHOTO DU PRÉSIDENT FONDATEUR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Cercles décoratifs (Style Google mais couleurs Momentum) */}
            <div className="absolute w-[110%] h-[110%] border border-dashed border-momentum-blue/20 rounded-full opacity-50 animate-[spin_100s_linear_infinite]" />
            
            {/* Petites puces colorées inspirées de l'image source */}
            <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-momentum-blue animate-pulse" />
            <div className="absolute bottom-20 left-0 w-3 h-3 rounded-full bg-slate-300" />

            {/* Conteneur Image avec Next/Image */}
            <div className="relative z-10 w-full max-w-[420px] aspect-[4/5] bg-white p-3 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/momentum-core/president.png" // Chemin vers l'image du fondateur
                  alt="Président Fondateur de Momentum Core"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Badge Identité */}
              <div className="absolute -bottom-6 -left-6 bg-white py-4 px-6 rounded-2xl shadow-xl border-l-4 border-momentum-blue">
                <p className="font-bold text-slate-900 leading-none mb-1">M . Patient TSHILOMBO</p>
                <p className="text-momentum-blue text-sm font-medium">Président Fondateur</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;