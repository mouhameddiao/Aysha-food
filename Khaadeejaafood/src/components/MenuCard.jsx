// src/components/MenuCard.jsx
import React from "react";

const MenuCard = ({ dish, onAddToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-bold mt-4">{dish.name}</h3>
      <p>{dish.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="font-semibold">{dish.price.toLocaleString()} FCFA</span>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          onClick={onAddToCart}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
