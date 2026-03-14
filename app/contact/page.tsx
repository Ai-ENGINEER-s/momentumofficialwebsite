
const Contact = () => {
  return (
    <div className="contact-page">
        <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
        <p className="text-lg mb-4">Nous sommes là pour vous aider. N'hésitez pas à nous contacter pour toute question ou demande de renseignements.</p>
        <div className="contact-info mb-8">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:contact@momentum.fr" className="text-blue-500 hover:underline">contact@momentum.fr</a></p>
            <p className="mb-2"><strong>Téléphone:</strong> +33 1 23 45 67 89</p>
        </div>
    </div>
  );
}

export default Contact;