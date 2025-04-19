// src/components/CartTable.jsx
import React from "react";

const CartTable = ({ items, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    <table className="w-full bg-white shadow-md rounded-lg">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-4 text-left text-gray-700">Nom</th>
          <th className="p-4 text-gray-700">Prix</th>
          <th className="p-4 text-gray-700">Quantité</th>
          <th className="p-4 text-gray-700">Total</th>
          <th className="p-4 text-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="border-t">
            <td className="p-4">{item.name}</td>
            <td className="p-4">{item.price.toLocaleString()} FCFA</td>
            <td className="p-4 flex items-center justify-center">
              <button
                className="bg-gray-300 px-2 py-1 rounded-l hover:bg-gray-400"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button
                className="bg-gray-300 px-2 py-1 rounded-r hover:bg-gray-400"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
            </td>
            <td className="p-4">
              {(item.price * item.quantity).toLocaleString()} FCFA
            </td>
            <td className="p-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => removeItem(item.id)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
