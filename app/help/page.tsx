"use client";

import { useState } from "react";

const CentreAidePage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center px-4">
      
      {/* Header */}
      <div className="text-center mt-16 mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold text-momentum-blue mb-4 tracking-tight">
          Centre d'Aide
        </h1>
        <p className="text-gray-600 text-lg">
          Une question ? Un besoin spécifique ? Notre équipe est là pour vous accompagner.
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        
        <h2 className="text-xl font-semibold text-momentum-blue mb-6">
          Contactez-nous
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Nom */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-momentum-blue focus:border-transparent transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-momentum-blue focus:border-transparent transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-momentum-blue focus:border-transparent transition resize-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-momentum-blue text-white py-3 rounded-lg font-medium hover:bg-momentum-red transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Envoyer le message
          </button>
        </form>
      </div>

      {/* Footer spacing */}
      <div className="h-16" />
    </div>
  );
};

export default CentreAidePage;