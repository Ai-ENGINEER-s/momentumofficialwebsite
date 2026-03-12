import { Check, MessageSquare, ShoppingCart } from 'lucide-react';

export function CommunicationSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">Communiquez avec vos partenaires stratégiques</h2>
          <p className="text-lg text-gray-600">
            Réservez le meilleur accueil à vos clients en présentant vos solutions 360 Core, 
            vos innovations technologiques et vos programmes de formation.
          </p>
        </div>
        
        <div className="flex-1 bg-orange-50 p-12 rounded-[40px] flex justify-center">
          <div className="bg-white p-4 rounded-3xl shadow-2xl max-w-[300px] border border-gray-100">
             <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">M</div>
               <div>
                 <p className="text-sm font-bold text-gray-900">Boutique de pulls</p>
                 <div className="flex gap-1 text-yellow-400"><Check size={12}/><Check size={12}/><Check size={12}/></div>
               </div>
             </div>
             <img src="/api-preview.png" className="rounded-xl mb-4" alt="Core Preview" />
             <button className="w-full flex items-center justify-center gap-2 border border-blue-200 text-blue-600 py-2 rounded-full text-sm font-medium hover:bg-blue-50">
                <ShoppingCart size={16} /> Commander en ligne
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}