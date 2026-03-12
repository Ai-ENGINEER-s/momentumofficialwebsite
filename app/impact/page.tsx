export default function ImpactPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
      <h1 className="text-5xl font-black text-momentum-blue mb-16 underline decoration-momentum-red decoration-8 underline-offset-8">
        Notre Impact Social
      </h1>
      
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-10">
          <div className="border-l-4 border-momentum-red pl-8">
            <h2 className="text-3xl font-bold text-momentum-blue mb-4">Inclusion Numérique</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous nous engageons à réduire la fracture numérique en RD Congo en déployant des infrastructures dans les zones les plus reculées.
            </p>
          </div>
          <div className="border-l-4 border-momentum-red pl-8">
            <h2 className="text-3xl font-bold text-momentum-blue mb-4">Empowerment Féminin</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre programme "Women in Tech" finance chaque année 50 bourses complètes pour des femmes souhaitant se reconvertir dans la tech.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 h-fit">
          <div className="bg-momentum-blue p-8 rounded-3xl text-white text-center">
            <div className="text-4xl font-black mb-2">500+</div>
            <div className="text-sm font-bold opacity-80 uppercase">Diplômés</div>
          </div>
          <div className="bg-momentum-red p-8 rounded-3xl text-white text-center">
            <div className="text-4xl font-black mb-2">15</div>
            <div className="text-sm font-bold opacity-80 uppercase">Provinces</div>
          </div>
        </div>
      </div>
    </div>
  );
}