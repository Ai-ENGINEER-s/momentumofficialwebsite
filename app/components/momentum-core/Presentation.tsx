const Presentation = () => {
    return (
     <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-momentum-blue text-center mb-16">
            Présentation
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {label:"Entreprise", value:"Momentum Core"},
              {label:"Groupe", value:"Momentum Group Holdings"},
              {label:"Localisation", value:"Kinshasa"},
              {label:"Activité", value:"Développement logiciel & IA"},
            ].map((item,i)=>(
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <p className="text-sm text-slate-500 mb-2">{item.label}</p>
                <p className="font-semibold text-momentum-blue">{item.value}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
    )
}



export default Presentation