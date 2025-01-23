import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Votre Panier</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Votre panier est vide.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          <table className="table-auto w-full text-left bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-yellow-400 text-white">
              <tr>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Nom</th>
                <th className="px-4 py-2">Quantité</th>
                <th className="px-4 py-2">Prix</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2 flex items-center">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    {(item.price * item.quantity).toLocaleString()} FCFA
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Vider le panier
            </button>
            <p className="text-xl font-bold">
              Total :{' '}
              <span className="text-yellow-600">
                {totalPrice.toLocaleString()} FCFA
              </span>
            </p>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => alert('Redirection vers le paiement...')}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            >
              Valider la commande
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
