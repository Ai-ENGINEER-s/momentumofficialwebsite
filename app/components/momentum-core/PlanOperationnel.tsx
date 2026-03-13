
const PlanOperationnel = () => {

      const operations = [
    "Analyse des besoins",
    "Développement logiciel",
    "Déploiement cloud",
    "Maintenance et évolution",
  ];
    return (
   <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-semibold text-momentum-blue mb-16">
            Plan opérationnel
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {operations.map((op,i)=>(
              <div key={i} className="border border-slate-200 rounded-xl p-6">
                <div className="text-momentum-blue font-semibold text-lg mb-2">
                  {`0${i+1}`}
                </div>
                <p className="text-slate-600">{op}</p>
              </div>
            ))}

          </div>

        </div>
      </section>
    )

}



export default PlanOperationnel;