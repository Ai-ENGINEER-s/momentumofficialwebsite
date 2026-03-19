"use client";
import HeroSection from '../components/service/HeroSection';
import NosDomaines from '../components/service/NosDomaines';
import NosEngagements from '../components/service/Engagement';
import FooterService from '../components/service/FooterService';
// Système de couleurs et constantes pour l'harmonie

export default function ServicesPage() {
  return (
    <main className="bg-[#FCFCFD] text-slate-900 font-sans">
      
    <HeroSection />

      {/* SECTION 2: NOS VALEURS (IMPACT) - L'HARMONIE PAR LA GRILLE */}
     {/* <NosValeurs /> */}

      {/* SECTION 3: LES DIRECTIONS (LISTE HARMONISÉE) */}
<NosDomaines />
      {/* SECTION 4: LES PÔLES SECONDAIRES (GRILLE HARMONISÉE) */}
    <NosEngagements />

      {/* FOOTER CTA HARMONIEUX */}
       {/* Footer section implemented successfully */}
    <FooterService />
   
    </main>
  );
}


