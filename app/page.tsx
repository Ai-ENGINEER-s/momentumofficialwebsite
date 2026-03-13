import { HeroSection } from "./components/Home/Hero";
import { ExpertiseSection } from "./components/Home/ExpertiseSection"; // Utilisation de la section uniformisée
import { CommunicationSection } from "./components/Home/CommunicationSection";
import { EGovernmentSuite } from "./components/Home/EGovernmentSuite";
import CoreHomeSection from "./components/Home/CoreHomeSection";
import ValuesSection from "./components/Home/ValuesSection";
import NosEngagements from "./components/service/Engagement";
import NosDomaines from "./components/service/NosDomaines";
import FooterService from "./components/service/FooterService";
export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. Hero : Présentation d'entrée */}
      <HeroSection />
       <NosDomaines />
<CoreHomeSection />
      {/* 2. Expertise & Pôles : C'est ici qu'on uniformise les Directions */}
      {/* Cette section remplace votre ancien "Bento" pour garder le style Google */}
     
      {/* <ExpertiseSection /> */}

      {/* 3. Communication : Engagement client */}
      {/* <CommunicationSection /> */}
         <FooterService />
<ValuesSection />
      {/* 4. Succès : E-Government Suite */}
      {/* <EGovernmentSuite /> */}

   
    </div>
  );
}