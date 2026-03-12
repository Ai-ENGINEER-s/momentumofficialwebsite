import { ChevronRight } from 'lucide-react';

const govModules = [
  {
    id: 1,
    title: "Optimum Core : Ministère des Affaires Intérieures",
    description: "Ce que nous utilisons le plus, c'est la gestion centralisée des identités nationales. Du suivi de l'état civil à la sécurisation des documents administratifs, Optimum Core garantit une traçabilité totale et une efficacité accrue pour les services publics.",
    entity: "Administration Centrale - Momentum e-Gov",
    image: "/images/gov-optimum.jpg" // Remplacez par votre image
  },
  {
    id: 2,
    title: "Delta Core : Ministère de la Défense",
    description: "Delta Core nous permet de gérer la logistique des troupes et les infrastructures de défense en temps réel. C'est un outil indispensable pour la sécurité nationale et la coordination des flux migratoires avec la DGM.",
    entity: "Sécurité & Défense - Momentum e-Gov",
    image: "/images/gov-delta.jpg"
  }
];

export function EGovernmentSuite() {
  return (
    <section className="py-20 px-6 bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-900 mb-12">
          Voici à quoi ressemble le succès
        </h2>

        {/* Card Container */}
        <div className="bg-white rounded-[40px] overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[500px]">
          
          {/* Left Side: Content */}
          <div className="flex-1 p-12 md:p-20 flex flex-col justify-center">
            <blockquote className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
                "{govModules[0].description}"
              </p>
              <footer className="text-gray-500">
                <cite className="not-italic font-normal text-sm">
                  {govModules[0].title}
                  <br />
                  <span className="opacity-75">{govModules[0].entity}</span>
                </cite>
              </footer>
            </blockquote>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 relative min-h-[400px]">
            <img 
              src={govModules[0].image} 
              alt="Success Story" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-600">
            1 / 2
          </div>
          <button className="bg-white p-2 rounded-full shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors group">
            <ChevronRight className="text-gray-400 group-hover:text-blue-600" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}