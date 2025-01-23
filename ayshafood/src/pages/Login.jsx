import React, { useState } from "react";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D')`,
      }}
    >
      <div className="bg-white/90 shadow-2xl rounded-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-yellow-500 mb-6">
          {isSignUp ? "Créer un compte" : "Bienvenue"}
        </h1>
        <form>
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Votre nom"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="votre@email.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="••••••••"
              required
            />
          </div>
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="••••••••"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
          >
            {isSignUp ? "S'inscrire" : "Se connecter"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          {isSignUp ? "Déjà un compte ?" : "Pas encore de compte ?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-yellow-500 hover:underline"
          >
            {isSignUp ? "Se connecter" : "Créer un compte"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
