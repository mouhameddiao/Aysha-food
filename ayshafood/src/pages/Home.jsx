import React from "react";
import { useCart } from "../context/CartContext";
import MenuCard from "../components/MenuCard";

const Home = () => {
  const { addToCart } = useCart();

  const popularDishes = [
    {
      id: 1,
      name: "Poulet Rôti",
      description: "Délicieux poulet rôti servi avec une sauce maison.",
      image:
        "https://media.istockphoto.com/id/1164853113/photo/fried-chicken-leg-with-fried-potatoes-and-vegetables.webp?a=1&b=1&s=612x612&w=0&k=20&c=XXQ7RqjuRCpfwlhet06v4XGbRJ1DizxTnQLhh2vMpaw=",
      price: 8000,
    },
    {
      id: 2,
      name: "Tiebou Dieune",
      description: "Riz au poisson traditionnel du Sénégal, garni de légumes.",
      image:
        "https://senecuisine.com/wp-content/uploads/2020/09/thi%C3%A9bou-dieune-696x669.jpg",
      price: 6500,
    },
    {
      id: 3,
      name: "Couscous Royal",
      description: "Couscous servi avec des légumes et de la viande tendre.",
      image:
        "https://media.istockphoto.com/id/1194495400/photo/couscous-with-merguez-chicken-and-vegetable.jpg?s=612x612&w=0&k=20&c=8CE2MLvVVeJXOCicDj23QjZPqf1SnVx3ro85-7tdFCI=",
      price: 10000,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="text-center bg-cover bg-center relative h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Bienvenue Chez Aysha Food
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 drop-shadow-lg">
            Savourez nos plats exquis et laissez-vous séduire par notre service
            de qualité.
          </p>
          <button className="bg-yellow-500 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg font-semibold rounded hover:bg-yellow-600 transition duration-300 shadow-lg">
            Explorer le Menu
          </button>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-16 px-4 md:px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Nos Plats Populaires
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDishes.map((dish) => (
            <MenuCard
              key={dish.id}
              dish={dish}
              onAddToCart={() => addToCart(dish)}
            />
          ))}
        </div>
      </section>

      {/* Delivery and Reservation Section */}
      <section className="bg-yellow-50 py-16 px-4 md:px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Livraison & Réservation
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-800">
              Livraison Rapide
            </h3>
            <p className="text-gray-700 mt-4">
              Commandez en ligne et profitez de notre service de livraison
              rapide directement à votre porte.
            </p>
            <div className="mt-6">
              <img
                src="https://media.istockphoto.com/id/2161380877/fr/photo/courrier-%C3%A0-moto-dans-le-parc.webp?a=1&b=1&s=612x612&w=0&k=20&c=cdpZwwApm-KUb1TrOQV1z5Hwvt9PrXCJPvR_Zgu4g-0="
                alt="Livraison"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-800">
              Réservation Facile
            </h3>
            <p className="text-gray-700 mt-4">
              Réservez votre table en appelant notre service client et profitez
              d’une expérience culinaire inoubliable.
            </p>
            <div className="mt-6">
              <img
                src="https://plus.unsplash.com/premium_photo-1726711462433-9c0d83e0efa9?w=500&auto=format&fit=crop&q=60"
                alt="Réservation"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-6 lg:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Ce que disent nos clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="italic text-gray-600">
              "Une expérience incroyable. Les plats sont délicieux et le
              service est top !"
            </p>
            <p className="text-yellow-500 font-bold mt-4">- Mariama D.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="italic text-gray-600">
              "Le meilleur Tiebou Dieune que j’ai jamais goûté. Je recommande
              vivement !"
            </p>
            <p className="text-yellow-500 font-bold mt-4">- Amadou S.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="italic text-gray-600">
              "Ambiance chaleureuse et plats exquis. Une adresse incontournable."
            </p>
            <p className="text-yellow-500 font-bold mt-4">- Fatou B.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
