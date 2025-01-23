import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUtensils, FaShoppingCart, FaInfoCircle, FaEnvelope, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg py-4 px-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Rrr4k6XYaBAbZfNZVJR3eizZw3ZNXafsDg&s"
          alt="logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Hamburger menu for small screens */}
      <button
        className="text-yellow-500 text-2xl lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Nav Links */}
      <ul
        className={`flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-center transition-transform duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden lg:flex'
        }`}
      >
        <li>
          <Link to="/" className="text-yellow-500 flex items-center gap-2">
            <FaHome /> Accueil
          </Link>
        </li>
        <li>
          <Link to="/menu" className="text-yellow-500 flex items-center gap-2">
            <FaUtensils /> Menu
          </Link>
        </li>
        <li>
          <Link to="/cart" className="text-yellow-500 flex items-center gap-2">
            <FaShoppingCart /> Panier
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-yellow-500 flex items-center gap-2">
            <FaInfoCircle /> À propos
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-yellow-500 flex items-center gap-2">
            <FaEnvelope /> Contact
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-yellow-500 flex items-center gap-2">
            <FaSignInAlt /> Connexion
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
