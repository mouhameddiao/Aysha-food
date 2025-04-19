import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 ml-16 lg:ml-20 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Titre détaché */}
        <h1 className="text-5xl font-bold text-center mb-12 text-yellow-600 pt-16">
          À propos de nous
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Section Texte */}
          <div className="text-lg text-gray-700 leading-relaxed">
            <p className="mb-6 font-bold">
              Bienvenue dans notre univers où l'élégance rencontre le goût. Chez nous, chaque détail
              est pensé pour transformer un simple repas en une expérience sensorielle unique.
              Depuis notre création, nous avons mis un point d'honneur à marier des ingrédients de
              qualité exceptionnelle avec un savoir-faire culinaire irréprochable.
            </p>
            <p className="mb-6 font-bold">
              Nous croyons fermement que la nourriture est bien plus qu'un besoin : c'est une
              aventure, une communion d'émotions et une découverte constante de nouvelles saveurs.
              Chaque plat que nous servons est une histoire en soi, conçue avec passion et servie
              avec soin.
            </p>
            <p className="mb-6 font-bold">
              Nos espaces reflètent notre philosophie : chaleureux, accueillants, et baignés dans
              des tons dorés et lumineux, propices à des moments inoubliables. Que ce soit pour un
              dîner romantique, un déjeuner d'affaires ou une célébration familiale, nous avons à
              cœur de rendre votre moment magique.
            </p>
            <p className="font-bold">
              Merci de nous faire confiance et de partager cette aventure avec nous. Nous avons
              hâte de vous accueillir et de continuer à écrire ensemble l'histoire de notre passion
              pour la cuisine et l'hospitalité.
            </p>
          </div>

          {/* Section Images */}
          <div className="relative grid grid-cols-3 gap-4">
            {[
              { src: "https://media.istockphoto.com/id/1342495665/fr/photo/grande-table-festive-d%C3%A9cor%C3%A9e-de-bougies-symboles-de-no%C3%ABl.webp?a=1&b=1&s=612x612&w=0&k=20&c=0s9Tq6p8e0KIte6QiNvQbwyOymc537qjgeP-ZuNvAGQ=", description: "Table élégante" },
              { src: "https://media.istockphoto.com/id/1146261109/fr/photo/chef-finissant-la-salade-saine-sur-une-assiette-noire-avec-une-pincettes-presque-pr%C3%AAt-%C3%A0-le.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wkcv5Y9cgxRFTUSijxRwELYqbOz0LEvkiJ-xlTMo6kc=", description: "Cuisine créative" },
              { src: "https://media.istockphoto.com/id/1373022068/fr/photo/groupe-international-de-jeunes-amis-%C3%A9tudiants-prenant-leur-petit-d%C3%A9jeuner-au-caf%C3%A9.webp?a=1&b=1&s=612x612&w=0&k=20&c=EyfPCmPZl2r0Bd86w8_7dar5MP-u35hvqdyVDqAnemk=", description: "Ambiance chaleureuse" },
              { src: "https://media.istockphoto.com/id/1400584574/fr/photo/deux-amis-sembrassent-lors-dun-d%C3%AEner.webp?a=1&b=1&s=612x612&w=0&k=20&c=SQ5fNWH2WJYYjPvlx72IsKma9uzgCwIn68k_9V8M6pc=", description: "Moment convivial" },
              { src: "https://media.istockphoto.com/id/1355035363/fr/photo/personnel-de-cuisine-au-restaurant.webp?a=1&b=1&s=612x612&w=0&k=20&c=5QU6Z1aCR-Zfj6HbuT0LGMn1vpSipZuwSgjg4Umzf5w=", description: "Équipe passionnée" },
              { src: "https://media.istockphoto.com/id/1428412216/fr/photo/un-chef-masculin-versant-de-la-sauce-sur-le-repas.webp?a=1&b=1&s=612x612&w=0&k=20&c=qJLifX7OSL4bLzpHR8HTQBJ68FlhvQlt2Q-fE2dGYK0=", description: "Plat gastronomique" },
              { src: "https://media.istockphoto.com/id/839894108/fr/photo/barman-avec-verre-et-citron-zeste-pr%C3%A9paration-cocktail-au-bar.webp?a=1&b=1&s=612x612&w=0&k=20&c=EYQLKn70lJVljjIRN4E0N1lmNkWF9T0mskzLR_vi1Pw=", description: "Cocktail artisanal" },
              { src: "https://media.istockphoto.com/id/1179449390/fr/photo/3d-rendre-le-caf%C3%A9-de-restaurant-de-mod%C3%A8le-en-bois.webp?a=1&b=1&s=612x612&w=0&k=20&c=6PaqqdSFlLb9QBgqJOY24ru3At2RiEPq57PA5-i4Mog=", description: "Vue panoramique" },
              { src: "https://media.istockphoto.com/id/1392312429/fr/photo/femme-heureuse-assise-%C3%A0-table-%C3%A0-manger.webp?a=1&b=1&s=612x612&w=0&k=20&c=jndyPPCzwaI3dfjzAFeQmkCjKHe8Sq7ipXsip2-W8HQ=", description: "Célébration en famille" },
              { src: "https://media.istockphoto.com/id/2163721177/fr/photo/homme-noir-chef-et-feu-avec-po%C3%AAle-%C3%A0-frire-dans-la-cuisine-du-restaurant-pour-une-cuisine.webp?a=1&b=1&s=612x612&w=0&k=20&c=alsjtqoVn-eImncivxQ5EzhWinow5lvcnA6DrFLdnpI=", description: "Chef au travail" },
            ].map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.description}
                className={`w-full h-32 object-cover rounded-lg shadow-lg transform ${
                  index % 2 === 0 ? "rotate-3" : "-rotate-2"
                } ${index % 3 === 0 ? "translate-x-4" : "translate-y-3"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
