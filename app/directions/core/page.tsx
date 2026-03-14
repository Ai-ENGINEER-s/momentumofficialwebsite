"use client";


import Hero from "@/app/components/momentum-core/Hero";
import Mission from "@/app/components/momentum-core/Mission";
import Produits from "@/app/components/momentum-core/Produits";
import Marche from "@/app/components/momentum-core/Marche";
import Strategie from "@/app/components/momentum-core/Strategie";
import Organisation from "@/app/components/momentum-core/Organisation";
import FooterService from "@/app/components/service/FooterService";


export default function MomentumCorePage() {

  return (
    <main className="bg-white">

      {/* HERO */}
    
    <Hero />

      {/* MISSION */}
    <Mission />

   
      {/* PRODUITS */}
 <Produits /> 

      {/* MARCHE */}
    
<Marche />
      {/* STRATEGIE */}
 <Strategie />

      {/* ORGANISATION */}
     <Organisation />

<FooterService />
  

    </main>
  );
}