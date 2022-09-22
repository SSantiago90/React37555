const data = [
  {
    id: 1,
    title: "Casa Pinamar",
    price: 9800,
    stock: 6,
    category: "alquileres",
    detail:
      "Hermosa casa en Barrio Golf Pinamar. Perfecta para unas cómodas vacaciones en familia",
    img: "/assets/alquileres/1.png",
  },
  {
    id: 2, 
    title: "Casa 6 Ambientes",
    price: 2500,
    detail:
      "Alquiler de casa de 6 ambientes, 4 dormitorios, pileta, galería, parrilla, Cañuelas Golf Club.",
    img: "/assets/alquileres/2.png",
    stock: 3,
    category: "temporal",
  },
  {
    id: 3,
    title: "Casa 6 Ambientes",
    price: 2500,
    detail:
      "Hermosa casa ubicada sobre un gran lote interno de 900m2, en una de las zonas mas lindas del barrio",
    img: "/assets/alquileres/3.png",
    stock: 7,
    category: "ventas",
  },
  {
    id: 6,
    title: "Casa Pinamar",
    price: 9800,
    stock: 6,
    category: "alquileres",
    detail:
      "Hermosa casa en Barrio Golf Pinamar. Perfecta para unas cómodas vacaciones en familia",
    img: "/assets/alquileres/1.png",
  },
  {
    id: 5,
    title: "Casa 6 Ambientes",
    price: 2500,
    detail:
      "Alquiler de casa de 6 ambientes, 4 dormitorios, pileta, galería, parrilla, Cañuelas Golf Club.",
    img: "/assets/alquileres/2.png",
    stock: 3,
    category: "temporal",
  },
  {
    id: 4,
    title: "Casa 6 Ambientes",
    price: 2500,
    detail:
      "Hermosa casa ubicada sobre un gran lote interno de 900m2, en una de las zonas mas lindas del barrio",
    img: "/assets/alquileres/3.png",
    stock: 7,
    category: "ventas",
  },
];

export default function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
}


export function getItemsByCategory(cat) {
  return new Promise((resolve, reject) => {

    let itemFind = data.filter((item) => {
      return item.category === cat;
    });
    setTimeout( () => {
      console.log("Encontramos:",itemFind)
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 1500)

  });

}

export function getSingleItem(idItem) {
  return new Promise((resolve, reject) => {

    let itemFind = data.find((item) => {
      return item.id === parseInt(idItem);
    });
    setTimeout( () => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 1500)

  });
}
