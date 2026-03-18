import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-24 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Colonne Texte */}
        <div className="flex-1 space-y-6 md:space-y-10 text-center lg:text-left z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-momentum-blue leading-[1.1] tracking-tighter">
            Le futur c'est <br />
            <span className="text-momentum-red">maintenant</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-momentum-gray max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Osons l'avenir avec Momentum : ensemble, redéfinissons les normes et
            créons un impact durable à travers l'innovation et l'excellence.
          </p>

          {/* Optionnel: Ajout d'un bouton pour équilibrer le visuel */}
          <div className="pt-4">
            <button className="bg-momentum-blue text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all mx-auto lg:mx-0">
              Découvrir la vision <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Colonne Visuelle */}
        <div className="flex-1 relative w-full flex justify-center items-center mt-12 lg:mt-0">
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none aspect-[4/5] lg:aspect-square">
            
            {/* Mockup Smartphone - Ajusté pour être fluide */}
            <div className="relative z-20 w-56 h-[450px] sm:w-64 sm:h-[520px] md:w-72 md:h-[580px] mx-auto lg:ml-0 drop-shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
                alt="Momentum App"
                fill
                priority
                className="object-cover rounded-[2.5rem] sm:rounded-[3rem] border-[6px] md:border-[8px] border-momentum-blue"
              />
            </div>

            {/* Vision Image Overlay - Caché sur mobile, visible dès md avec mise en page adaptée */}
            <div className="absolute -top-6 -right-4 lg:-right-8 xl:-right-12 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-[32px] lg:rounded-[48px] overflow-hidden hidden md:block border-[8px] lg:border-[12px] border-white shadow-2xl z-10 rotate-3 transition-transform hover:rotate-0 duration-700">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Vision Momentum"
                fill
                className="object-cover"
              />
            </div>

            {/* Décoration d'arrière-plan pour le relief (optionnel) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-momentum-blue/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>

      </div>
    </section>
  );
}