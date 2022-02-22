const items = [
  {
    id: 1,
    tittle: 'NIKE SB DUNK LOW "FRAME SKATE HABIBI"',
    pictureUrl:
      "https://s3.amazonaws.com/static.evilraffle/assets/img/raffles/CT2550-600-a5fe-d1460fea6e00/CT2550-600-list.jpg",
    price: 19399,
    stock: 2,
    description:
      "Las Nike SB Dunk Low x Frame 'Habibi' rinden homenaje a Dubai con múltiples detalles inspirados por la ciudad. Cada parte del calzado, desde los colores, patrones y materiales utilizados, representan una pieza de lo que hace a Dubai y los Emiratos Árabes un lugar único y especial.Desde las industrias que ayudaron a construir los Emiratos Árabes hasta el futuro que Dubai está construyendo para sí mismo, la Nike SB 'Habibi' celebra el hogar de Frame tanto como su amor por el skateboarding. Los colores rojo, blanco, negro y verde hacen alusión a la bandera de los Emiratos Árabes y el bordado 'Habibi' en el interior de la lengüeta ('Mi Amor', en árabe) muestra el orgullo de Frame por su ciudad y el skate.",
  },
  {
    id: 2,
    tittle: 'NIKE SB DUNK LOW PRO "CHICAGO"',
    pictureUrl:
      "https://s3.amazonaws.com/static.evilraffle/assets/img/raffles/BQ6817-600-9195-e47f25c77939/BQ6817-600-list.jpg",
    price: 19399,
    stock: 8,
    description:
      "Creada para la cancha pero llevado a las calles, el ícono de los años 80 regresa para que hagas el bien luciendo bien.",
  },
  {
    id: 3,
    tittle: 'NIKE SB DUNK LOW "ACG TERRA"',
    pictureUrl:
      "https://s3.amazonaws.com/static.evilraffle/assets/img/raffles/BQ6817-008-a7ee-df23fc4c902c/BQ6817-008-list.jpg",
    price: 19399,
    stock: 14,
    description:
      "Creada para la cancha pero llevado a las calles, el ícono de los años 80 regresa para que hagas el bien luciendo bien.",
  },
  {
    id: 4,
    tittle: 'NIKE SB X STRANGELOVE SKATEBOARDS"',
    pictureUrl:
      "https://s3.amazonaws.com/static.evilraffle/assets/img/raffles/CT2552-800-b921-22e0dc1a8b70/CT2552-800-list.jpg",
    price: 19399,
    stock: 5,
    description:
      "Creada para la cancha pero llevado a las calles, el ícono de los años 80 regresa para que hagas el bien luciendo bien.",
  },
];

export const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 3000);
  });
};

export const getItemsDetail = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items[0]);
    }, 2000);
  });
};
