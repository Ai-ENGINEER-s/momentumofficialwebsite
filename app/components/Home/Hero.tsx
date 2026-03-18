import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        <div className="flex-1 space-y-10 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-momentum-blue leading-[1.1] tracking-tighter">
            Le futur c'est <br />
            <span className="text-momentum-red">maintenant</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-momentum-gray max-w-xl leading-relaxed">
            Osons l'avenir avec Momentum : ensemble, redéfinissons les normes et
            créons un impact durable à travers l'innovation et l'excellence.
          </p>
          
       
        </div>

        <div className="flex-1 relative flex justify-center items-center">
          <div className="relative w-full max-w-[550px] aspect-square">
            
            {/* Mockup Smartphone */}
            <div className="relative z-20 w-72 h-[580px] mx-auto md:ml-0 drop-shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
                alt="Momentum App"
                fill
                className="object-cover rounded-[3rem] border-[8px] border-momentum-blue"
              />
            </div>

            {/* Vision Image Overlay */}
            <div className="absolute -top-4 -right-4 lg:-right-10 w-72 h-72 lg:w-96 lg:h-96 rounded-[48px] overflow-hidden hidden md:block border-[12px] border-white shadow-2xl z-10 rotate-3 transition-transform hover:rotate-0 duration-700">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Vision Momentum"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}