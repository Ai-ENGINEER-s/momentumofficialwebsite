export default function ServicesPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
      <h1 className="text-5xl font-black text-momentum-blue mb-12">Nos Services Stratégiques</h1>
      <div className="space-y-24">
        <section id="digitalisation" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3"><h2 className="text-3xl font-black text-momentum-red uppercase">01. Digitalisation</h2></div>
            <div className="md:w-2/3">
              <p className="text-xl text-gray-600 mb-6 font-medium">Automatisation des processus administratifs et souveraineté numérique.</p>
              <ul className="grid sm:grid-cols-2 gap-4 text-gray-500">
                <li>• Migration Cloud Souverain</li>
                <li>• Portails Citoyens</li>
                <li>• Archivage Numérique</li>
                <li>• Cybersécurité</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Répéter pour Transformation, Solutions, Formation avec les mêmes structures */}
      </div>
    </div>
  );
}