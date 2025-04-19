import React, { useContext, useState, useRef } from 'react';
import { CartContext } from '../context/CartContext';

const Menu = () => {
  const { addToCart: contextAddToCart } = useContext(CartContext) || {};
  const [localCart, setLocalCart] = useState([]);

  const addToCart = contextAddToCart || ((item) => {
    setLocalCart([...localCart, item]);
    alert(`${item.name} a été ajouté au panier.`);
  });

  const menuItems = {
    PLATS: [
      { id: 1, name: 'Poulet Rôti', description: 'Poulet mariné et rôti à la perfection.', price: 12000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AzTBfrtqGph-dEL_FGYbSteg3xC2oNSi_Q&s' },
      { id: 2, name: 'Tiebou Dieune', description: 'Riz au poisson avec légumes.', price: 7000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSBIkYA2w-LyCU4S09pnStm3yAaPYbVPBIeQ&s' },
      { id: 3, name: 'Lasagnes', description: 'Délicieuses lasagnes italiennes.', price: 8500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlsAh1jdLTyMcmRbiIshnRYT7e8bxcsPbsA&s' },
      { id: 4, name: 'Steak Frites', description: 'Steak juteux avec frites maison.', price: 9500, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Steak_frites.jpg/1200px-Steak_frites.jpg' },
      { id: 5, name:'Filet de bœuf Rossini', description: 'Filet de bœuf grillé, surmonté de foie gras poêlé et accompagné d’une sauce au truffe.', price: 10500, image: 'https://img.cuisineaz.com/660x660/2015/10/13/i8598-tournedos-rossini.jpeg' },
      { id: 6, name: 'Magret de canard à l’orange', description: 'Canard tendre servi avec une réduction d’orange et d’épices.', price: 8500, image: 'https://img.passeportsante.net/1200x675/2022-10-17/shutterstock-118604668.webp' },
      { id: 7, name: 'Homard Thermidor ', description: 'Homard poché, gratiné avec une sauce crémeuse au fromage.', price: 7500, image: 'https://chefcuisto.com/files/2024/05/homard-thermidor.jpg' },
      { id: 8, name: 'Risotto aux cèpes ', description: 'Risotto crémeux parfumé aux champignons sauvages.', price: 9500, image: 'https://www.restaurantalma.com/wp-content/uploads/2019/02/d3484a47c7b2080f967bce65aa8bbab3-840x525.jpe' },
      { id: 9, name: 'Bar en croûte de sel ', description: 'Bar entier cuit dans une croûte de sel, relevé d’un filet de citron.', price: 12500, image: 'https://i.notretemps.com/2000x1125/smart/2019/12/16/altbar-en-croucircte-de-sel.jpg' },
      { id: 10, name: 'Côte de veau aux morilles', description: 'Côte de veau nappée d’une sauce aux morilles et crème.', price: 12000, image: 'https://i0.wp.com/blog.12bouteilles.com/wp-content/uploads/2015/03/belle-cote-de-veau-aux-morilles-puree-maison-r-23111216612.jpg?resize=800%2C500&ssl=1' },
      { id: 11, name: 'Sole meunière ', description: 'Sole délicatement poêlée au beurre et citron.', price: 6750, image: 'https://lecheverny.fr/wp-content/uploads/2020/11/sole-meuniere.jpg' },
      { id: 12, name: 'Paëlla royale', description: 'Riz safrané garni de fruits de mer, poulet et légumes.', price: 11000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQ3ArMElkwpMXRZ50t7xnwetxifIAhyjUPw&s' },
      { id: 13, name: 'Ravioles aux truffes', description: ' Ravioles garnies de ricotta, servies avec une crème à la truffe.', price: 9000, image: 'https://truffeshenras.com/cdn/shop/articles/raviolis-truffe.webp?v=1714983538' },
      { id: 15, name: 'Tajine d’agneau aux abricots', description: 'Agneau mijoté avec des épices, abricots et amandes.', price: 8000, image: 'https://couteaux-et-tirebouchons.com/wp-content/uploads/2016/01/Tajine-dAgneau-Abricots-Amandes.jpg' },
      { id: 16, name: 'Bouillabaisse', description: ' Soupe provençale de poissons et fruits de mer, servie avec rouille.', price: 6700, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/25/1c/b7/bouillabaisse-part-2.jpg' },
     // Ajoutez d'autres plats ici...
    ],
    DESSERTS: [
      { id: 17, name: 'Crème Brûlée', description: 'Dessert français classique.', price: 4000, image: 'https://media-cdn.tripadvisor.com/media/photo-s/16/8a/e6/46/creme-brulee.jpg' },
      { id: 18, name: 'Tiramisu', description: 'Dessert italien au café.', price: 4500, image: 'https://www.capsulecafe.com/images/cache/image_md/images/cms/47/66169bc7a7583_tiramisu-cafe.png' },
      { id: 19, name: 'Cheesecake', description: 'Gâteau au fromage crémeux.', price: 5000, image: 'https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg' },
      { id: 20, name: 'Macarons', description: 'Petits gâteaux colorés.', price: 3000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGFddKW1j3MGzxx05lVr-IsQCL_B-pCf6tA&s' },
      { id: 21, name: 'Tarte Tatin', description: 'Pommes caramélisées sur une pâte feuilletée.', price: 5000, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc_WlTbBtS_i7R2LAv4GvtUydX4kstUG5x-JqJn0Hw53B9XhJRfJe_kMKYMwhrood2XVSo6QHJnMxqFYqlndDBsdRH_sHHewM6L_nwCMDdq1fFgHjhBEzRhD9JcetHm4xXi04hs7B_9Q4/s1600-rw/tarte-tatin.jpg' },
      { id: 22, name: 'Opéra', description: 'Gâteau aux couches de café et chocolat..', price: 2500, image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtKeze_p9HkKHXefpAlvDMU1EFw2ue2qc1lGb9V6-0nQMFVs33G4UuFgOR6A-rofI4e2GtaNVaKPAi0DWfLgWjGEHxB0jJkpcteA7p7UYmKh2h_-ihXJ3xbtCJf1o5klbQItR_VaBQWbv0/s1600/opera-chocolat-cafe.jpg' },
      { id: 23, name: 'Mille-feuille vanille', description: ' Feuilleté croustillant avec une crème légère.', price: 5500, image: 'https://fac.img.pmdstatic.net/fit/~1~fac~2018~07~30~a31fa99c-b47d-4833-9546-05ff95d3bba1.jpeg/750x562/quality/80/crop-from/center/cr/wqkgRGFuaWVsIE1FVFRPVURJL0NFRFVTIC8gRmVtbWUgQWN0dWVsbGU%3D/mille-feuille-a-la-vanille.jpeg' },
      { id: 24, name: 'Soufflé au Grand Marnier', description: ' Dessert aérien parfumé à l’orange.', price: 4000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNgvrPIso-QQcmrxwwu1XmGzcxhiR71TW1A&s' },
      { id: 25, name: 'Crème brûlée à la vanille ', description: 'Crème onctueuse avec une fine croûte caramélisée.', price: 6000, image: 'https://dxpulwm6xta2f.cloudfront.net/eyJidWNrZXQiOiJhZGMtZGV2LWltYWdlcy1yZWNpcGVzIiwia2V5IjoiY3JlbWVfYnJ1bGVlLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6ODB9LCJwbmciOnsicXVhbGl0eSI6ODB9LCJ3ZWJwIjp7InF1YWxpdHkiOjgwfX19' },
      { id: 26, name: 'Moelleux au chocolat ', description: 'Fondant au chocolat avec un cœur coulant.', price: 4300, image: 'https://www.rustica.fr/images/fondant-chocolat-l790-h526.jpg.webp' },
      { id: 27, name: 'Pavlova aux fruits rouges', description: 'Meringue croquante garnie de crème fouettée et fruits rouges.', price: 6600, image: 'https://creationhloua.com/wp-content/uploads/2023/05/image-45.png' },
      { id: 28, name: 'Île flottante ', description: 'Blancs en neige sur crème anglaise.', price: 3100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8PkqGsW2eUNLaIgGZwxG-WZNgqzp3GDXPg&s' },
      { id: 29, name: 'Tarte au citron meringuée', description: 'Pâte sablée garnie de crème au citron et meringue dorée.', price: 6550, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvKSsxEO3d8h4yHd6a6FOM_8BPuXbJYaPow&s' },
      { id: 30, name: 'Parfait glacé aux noisettes ', description: 'Dessert glacé aux éclats de noisettes', price: 4400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiYhy0pkuGtKn248Bz1y2eptzrALDQDxyQg&s' },
      { id: 31, name: 'Éclair au caramel beurre salé ', description: 'Pâte à choux garnie de crème caramel.', price: 4600, image: 'https://www.cuisineactuelle.fr/imgre/fit/~1~cac~2018~09~25~1affdeb3-d751-45d0-98d8-0a6205387849.jpeg/650x365/quality/80/crop-from/center/eclair-caramel-beurre-sale.jpeg' },
      { id: 32, name: 'Profiteroles au chocolat', description: 'Petits gâteaux colorés.', price: 5100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfoGu7j55puMrDpFJINpZOc9Nm1rSrKMWYQ&s' },
      
      // Ajoutez d'autres desserts ici...
    ],
  ACCOMPAGNEMENTS: [
      { id: 33, name: 'Alloco', description: 'Bananes plantains frites.', price: 2000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnjIxX01GUN_LtQOdw3FcceZ5aqFsaQBCeQ&s' },
      { id: 34, name: 'Salade César', description: 'Salade fraîche avec poulet grillé.', price: 3500, image: 'https://florette.fr/wp-content/uploads/2024/08/Salade-cesar-Florette.jpg' },
      { id: 35, name: 'Frites', description: 'Frites maison croustillantes.', price: 2500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBCRfMDf-3vjMmpcU_5bui-Exs2cK2Y16fg&s' },
      { id: 36, name: 'Légumes Grillés', description: 'Mélange de légumes grillés.', price: 3000, image: 'https://erableduquebec.ca/uploads/2018/09/19-604_PPAQ_recettes_1200x900_legumes_grille-600x450.jpg' },
      { id: 37, name: 'Gratin dauphinois ', description: 'Pommes de terre fondantes au lait et crème.', price: 4400, image: 'https://www.lepanyol.com/files/Images/recettes/gratin-dauphinois-au-four-a-bois.jpg' },
      { id: 38, name: 'Risotto au parmesan', description: 'Riz crémeux au fromage affiné.', price: 4000, image: 'https://static.750g.com/images/1200-630/c988ae55c12680511de2fee05cc9d3c8/risotto-alla-parmigiana.jpeg' },
      { id: 39, name: 'Purée de céleri-rave', description: 'Alternative légère et parfumée à la purée classique.', price: 6600, image: 'https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/968b9821-8d40-489a-9e2b-738067e3e003_vzDefVV.jpg' },
      { id: 40, name: 'Haricots verts aux amandes', description: ' Haricots croquants parsemés d’amandes grillées.', price: 5000, image: 'https://www.enviedebienmanger.fr/sites/default/files/haricots_verts_peeches_amandes_1746_0.png' },
      { id: 41, name: 'Ratatouille provençale', description: 'Mélange mijoté de légumes méditerranéens.', price: 4900, image: 'https://img.cuisineaz.com/660x660/2015/05/11/i113285-ratatouille-nicoise-facile.jpg' },
      { id: 42, name: 'Épinards à la crème', description: ' Feuilles tendres enrobées de crème fraîche.', price: 7000, image: 'https://fac.img.pmdstatic.net/fit/~1~fac~2018~07~30~ea36f200-24cd-49c5-88d7-de38d5a5821f.jpeg/750x562/quality/80/crop-from/center/cr/wqkgQmhvZmFjazIvVGhpbmtzdG9jayAvIEZlbW1lIEFjdHVlbGxl/recette-des-epinards-a-la-creme-version-vegan.jpeg' },
      { id: 43, name: 'Choux de Bruxelles au lard fumé ', description: 'Petits choux rôtis avec éclats de lard croustillants.', price: 6000, image: 'https://gateauetcuisinerachida.com/wp-content/uploads/2023/02/Recette-poele%CC%81e-choux-de-bruxelles-de%CC%81licieux-aux-lardons-.jpg' },
      { id: 44, name: 'Polenta crémeuse', description: ' Semoule de maïs cuite avec crème et parmesan.', price: 4600, image: 'https://montougo.ca/wp-content/uploads/2022/02/polenta-cremeuse-legumes-grilles-1500x1500-1644867553.jpg' },
      { id: 45, name: 'Riz basmati au citron', description: ' Riz parfumé et légèrement acidulé.', price: 3700, image: 'https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_488,q_auto,w_650/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/86177/P7150003_HR_RET_-_MCC.jpg' },
      { id: 46, name: 'Boulgour aux herbes', description: ' Grains légers agrémentés de menthe et persil.', price: 3000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEC2mlbGImljWKKKAV3ks0JcWbNfqcQIoAQ&s' },
      { id: 47, name: 'Tian de légumes', description: ' Légumes tranchés et gratinés au four.', price: 7000, image: 'https://www.jujube-en-cuisine.fr/wp-content/uploads/2012/07/tian-2-4579.jpg' },
      { id: 48, name: 'Asperges grillées', description: 'Asperges vertes rôties avec huile d’olive.', price: 5500, image: 'https://static.750g.com/images/1200-675/c34b6a26992fedf06cfca5e053ec4d65/asperges-vertes-grillees-huile-d-olive-au-citron-et-parmesan.jpg' },
      // Ajoutez d'autres accompagnements ici...
    ],
    BOISSONS: [
      { id: 49, name: 'Jus de Mangue', description: 'Boisson tropicale fraîche.', price: 1500, image: 'https://img.cuisineaz.com/660x660/2018/11/19/i144286-jus-de-mangue.jpeg' },
      { id: 50, name: 'Café', description: 'Expresso ou cappuccino.', price: 2000, image: 'https://cdn-s-www.ledauphine.com/images/2D239879-5350-4E09-8DE0-CDB39C250C69/NW_raw/tous-les-cafes-ont-pour-base-une-ou-deux-doses-d-expresso-photo-by-wenhao-ryan-on-unsplash-1646236309.jpg' },
      { id: 51, name: 'Thé Glacé', description: 'Thé glacé au citron.', price: 1800, image: 'https://www.thesdelapagode.com/guide-du-the/wp-content/uploads/2015/08/recette-th%C3%A9-glac%C3%A9-maison_2.jpg' },
      { id: 52, name: 'Cocktail', description: 'Cocktail sans alcool.', price: 3000, image: 'https://www.cocktailmag.fr/media/k2/items/cache/da89514e409822180ac867ab6712269d_M.jpg' },
      { id: 53, name: 'Vin blanc Chablis', description: ' Vin sec et minéral idéal avec les fruits de mer.', price: 2500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVFfRqpZ6t1UDDHj7Zou27KMbLOFTOSPn6Q&s' },
      { id: 54, name: 'Smoothie mangue-passion', description: 'Boisson fruitée et fraîche.', price: 3000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXCGNaaHn5ajiXOU7UrjchSOlcojWE5SJJA&s' },
      { id: 55, name: 'Limonade maison ', description: 'Mélange de citron frais, sucre et eau gazeuse.', price: 4400, image: 'https://www.notparisienne.fr/wp-content/uploads/2024/06/citronnade-maison.jpg' },
      { id: 56, name: 'Milkshake chocolat', description: ' Lait frappé au chocolat noir.', price: 2300, image: 'https://www.vitamix.com/content/dam/vitamix/migration/media/recipe/rcpchocolateshake/images/chocolatemilkshakemainjpg.jpg' },
      { id: 57, name: 'Cocktail Bellini', description: 'Prosecco et purée de pêche.', price: 1900, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwTbFxZ-ubebU1RyDo3AfxLaOOWrVIcfzcg&s' },
      { id: 58, name: 'Coca-Cola premium', description: 'Version artisanale et moins sucrée.', price: 2000, image: 'https://sf2.doctissimo.fr/wp-content/uploads/doctissimo/2024/06/1691399398030.jpeg' },
      { id: 59, name: 'Vin rosé de Provence', description: 'Léger et parfait pour l’été.', price: 1500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjs7zhtJv1p7S-5SuBEFLLC1Lbs9kCAkU2ew&s' },
      { id: 60, name: 'Chocolat chaud viennois', description: 'Chocolat onctueux avec crème chantilly.', price: 4000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsXGIoV4zxvIORHDOq5p0qZkwrHSqL3ikvw&s' },
      { id: 61, name: 'Infusion verveine-menthe', description: 'Boisson chaude apaisante.', price: 5000, image: 'https://images.mrcook.app/recipe-image/01941e83-c1d8-74d1-b468-765a80628bf8' },
      { id: 62, name: 'Spritz Aperol', description: 'Cocktail pétillant légèrement amer.', price: 3000, image: 'https://www.destinationcocktails.fr/wp-content/uploads/2022/12/cocktail-spritz-landscape.jpg' },
      { id: 63, name: 'Jus de cranberry ', description: 'Parfait pour accompagner un dessert.', price: 3900, image: 'https://www.mesinspirationsculinaires.com/wp-content/uploads/2021/10/recette-de-jus-de-canneberge-1.jpg' },
      { id: 64, name: 'Eau pétillante avec menthe fraîche ', description: 'Simple et rafraîchissant.', price: 1700, image: 'https://assets.afcdn.com/recipe/20180731/81627_w1024h1024c1cx2464cy1632cxt0cyt0cxb4928cyb3264.webp' },
     

      // Ajoutez d'autres boissons ici...
    ],
  };

  const scrollRef = useRef({});

  const scroll = (category, direction) => {
    const container = scrollRef.current[category];
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-yellow-50 ml-16 lg:ml-20 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center my-10 text-yellow-600">Notre Menu</h1>

      {Object.entries(menuItems).map(([category, items]) => (
        <section key={category} className="mb-16">
          <h2 className="text-3xl font-semibold text-center underline-offset-2 text-gray-800 mb-8 capitalize">{category}</h2>
          <div className="relative">
            <button
              onClick={() => scroll(category, 'left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-700 focus:outline-none"
            >
              &#8592;
            </button>
            <div
              ref={(el) => (scrollRef.current[category] = el)}
              className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-8"
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[250px] bg-white shadow-lg rounded-lg p-4 flex-shrink-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
                  <p className="text-gray-800 mt-2 text-sm">{item.description}</p>
                  <p className="text-gray-800 font-bold mt-4">{item.price} FCFA</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                  >
                    Ajouter au panier
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll(category, 'right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-700 focus:outline-none"
            >
              &#8594;
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Menu;
