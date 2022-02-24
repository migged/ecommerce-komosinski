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
      "A lo largo de la historia de Nike, varias siluetas se abrieron camino pasando de la cancha de básquet a los pies de los skaters. La conexión es muy simple— tanto los skaters como los jugadores de básquet buscan características similares: tracción óptima, comodidad adaptable y reducción del impacto al aterrizar.Este lanzamiento hace un guiño a la herencia compartida con un esquema de colores que se hizo famoso gracias a una estrella de alto vuelo que hizo su nombre en la Ciudad del Viento. Los tonos tradicionales de varsity red se combinan con toques neutros de blanco y negro para completar este colorway clásico.",
  },
  {
    id: 3,
    tittle: 'NIKE SB DUNK LOW "ACG TERRA"',
    pictureUrl:
      "https://s3.amazonaws.com/static.evilraffle/assets/img/raffles/BQ6817-008-a7ee-df23fc4c902c/BQ6817-008-list.jpg",
    price: 19399,
    stock: 14,
    description:
      "Basadas en el esquema de colores llamativos de la división de Nike “All Conditions Gear (ACG)”, esta nueva versión de las icónicas Nike SB Dunk Low está construida en suede premium. La parte superior en color negro se combina con un púrpura potente y un swoosh rojo brillante.Se suman detalles adicionales como el branding de Nike SB en la lengüeta y el wordmark “NIKE” en amarillo de alto contraste bordado en el talón. El diseño cierra con cordones también amarillos y una media suela blanca con las clásicas salpicaduras características de ACG en color negro.",
  },
  {
    id: 4,
    tittle: 'NIKE SB X STRANGELOVE SKATEBOARDS"',
    pictureUrl:
      "https://s3.amazonaws.com/static.evilraffle/assets/img/raffles/CT2552-800-b921-22e0dc1a8b70/CT2552-800-list.jpg",
    price: 19399,
    stock: 5,
    description:
      "Llega a Argentina una nueva iteración de la icónica Nike SB Dunk Low, esta vez en colaboración con 'Strangelove Skateboards', la marca de tablas de skate del reconocido artista Sean Cliver.Las zapatillas fueron lanzadas originalmente para la romántica fecha de San Valentín y su parte superior está construída con una combinación de terciopelo blanco y gamuza color rosado, sumando un Swoosh de terciopelo rojo. El clásico gráfico “Heart Skull” de Sean Cliver se encuentra bordado en la zona lateral del talón, mientras que una suela transparente revela un patrón de corazones en azul y rojo.StrangeLove Skateboards ha creado su propio estilo exclusivo combinando una creatividad caótica con lo más divertido del skateboarding. La original marca de California colabora con Nike SB para aportar su perspectiva singular a un modelo muy popular: las Dunk Low. Cubierto de terciopelo texturizado con revestimientos de ante, este diseño en tonos pastel está decorado con una combinación de rosas y toques de melón brillante y rojo. Las StrangeLove dejan huella, literalmente, con un dibujo de calavera en cada talón. En la suela, los sutiles estampados de corazones representan el amor, justo a tiempo para San Valentín.",
  },
];

export const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 200);
  });
};

export const getItemsDetail = (id) => {
  return new Promise((resolve) => {
    const prod = items.find((p) => p.id === parseInt(id));
    setTimeout(() => {
      resolve(prod);
    }, 200);
  });
};
