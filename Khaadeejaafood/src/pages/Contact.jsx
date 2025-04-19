import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="bg-cover bg-center ml-16 lg:ml-20 min-h-screen"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D')` }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="max-w-7xl mx-auto py-16 px-8 text-white">
          {/* Titre */}
          <h1 className="text-5xl font-bold text-center mb-12 text-yellow-500 pt-16">
            Contactez-nous
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Section Informations */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-yellow-400">Nos informations</h2>
              <p className="text-lg">
                Vous avez une question, une réservation ou une suggestion ? Nous sommes là pour vous ! Contactez-nous par téléphone, email, ou venez nous rendre visite.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-yellow-500 text-xl" />
                  <p className="text-lg">+221 77 584 87 83</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-yellow-500 text-xl" />
                  <p className="text-lg">khaadeejafood@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                  <p className="text-lg">123 Rue de la Gastronomie, Dakar, Senegal</p>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex gap-6 mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-3xl text-yellow-500 hover:text-yellow-400" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-3xl text-yellow-500 hover:text-yellow-400" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-3xl text-yellow-500 hover:text-yellow-400" />
                </a>
              </div>
            </div>

            {/* Section Formulaire */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border rounded focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    placeholder="Entrez votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border rounded focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    placeholder="Entrez votre email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full p-3 border rounded focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    placeholder="Votre message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-400 transition"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
