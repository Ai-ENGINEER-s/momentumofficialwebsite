 const CentreAidePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center mt-12 mb-6 text-momentum-blue">Centre d'Aide</h1>
      <p className="text-center text-gray-600 mb-12">Bienvenue au Centre d'Aide de Momentum. Comment pouvons-nous vous aider aujourd'hui ?</p>
        <div className="flex-1 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4 text-momentum-blue">Contactez-nous</h2>
                <p className="text-gray-600 mb-6">Si vous avez des questions ou besoin d'assistance, n'hésitez pas à nous contacter.</p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                        <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-momentum-blue focus:border-momentum-blue" placeholder="Votre nom" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-momentum-blue focus:border-momentum-blue" placeholder="Votre email" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-momentum-blue focus:border-momentum-blue" placeholder="Votre message"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-momentum-blue text-white py-2 rounded-md hover:bg-momentum-red transition-colors">Envoyer</button>
                </form>
            </div>  


        </div>    </div>
  );
}


export default CentreAidePage;