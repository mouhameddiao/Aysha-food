import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUtensils, FaShoppingCart, FaInfoCircle, FaEnvelope, FaSignInAlt, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bouton pour ouvrir/fermer la Sidebar (visible uniquement sur les petits écrans) */}
      <button
        className="fixed top-4 left-4 z-50 text-yellow-600 text-2xl lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-white shadow-lg w-25 hover:w-20 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center p-4 border-b border-gray-200">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Rrr4k6XYaBAbZfNZVJR3eizZw3ZNXafsDg&s"
            alt="logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Liens de navigation */}
        <ul className="p-2 space-y-4">
          <li>
            <Link
              to="/"
              className="flex items-center justify-center p-3 text-yellow-600 hover:bg-yellow-100 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <FaHome className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="flex items-center justify-center p-3 text-yellow-600 hover:bg-yellow-100 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <FaUtensils className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center justify-center p-3 text-yellow-600 hover:bg-yellow-100 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <FaShoppingCart className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center justify-center p-3 text-yellow-600 hover:bg-yellow-100 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <FaInfoCircle className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center justify-center p-3 text-yellow-600 hover:bg-yellow-100 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <FaEnvelope className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="flex items-center justify-center p-3 text-yellow-600 hover:bg-yellow-100 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <FaSignInAlt className="text-2xl" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay pour les petits écrans */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Contenu principal décalé */}
      <div className="ml-16 lg:ml-20 p-6 transition-all duration-300 ease-in-out">
        {/* Le contenu de la page sera ici */}
      </div>
    </>
  );
};

export default Sidebar;