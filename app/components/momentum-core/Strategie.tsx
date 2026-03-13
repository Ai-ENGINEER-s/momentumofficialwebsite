
const Strategie = () => {
  const strategy = [
    {
      title: "Conférences technologiques",
      desc: "Participation et organisation d'événements pour promouvoir l'innovation digitale.",
    },
    {
      title: "Partenariats institutionnels",
      desc: "Collaboration avec institutions publiques et acteurs stratégiques.",
    },
    {
      title: "Vente B2B directe",
      desc: "Approche personnalisée pour répondre aux besoins des entreprises.",
    },
  ];

return (
     <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-semibold text-center text-momentum-blue mb-16">
            Stratégie de développement
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {strategy.map((s,i)=>(
              <div key={i} className="border border-slate-200 rounded-xl p-8">
                <h3 className="font-semibold text-lg text-momentum-blue mb-3">
                  {s.title}
                </h3>
                <p className="text-slate-600">
                  {s.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
)}


export default Strategie;