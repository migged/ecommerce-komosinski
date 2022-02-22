import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const items = [
  {
    id: 1,
    tittle: 'NIKE SB DUNK LOW "FRAME SKATE HABIBI"',
    pictureUrl:
      "https://s3.amazonaws.com/static.evilraffle/assets/img/raffles/CT2550-600-a5fe-d1460fea6e00/CT2550-600-list.jpg",
    price: 19399,
    stock: 2,
  },
  {
    id: 2,
    tittle: 'NIKE SB DUNK LOW PRO "CHICAGO"',
    pictureUrl:
      "https://s3.amazonaws.com/static.evilraffle/assets/img/raffles/BQ6817-600-9195-e47f25c77939/BQ6817-600-list.jpg",
    price: 19399,
    stock: 8,
  },
  {
    id: 3,
    tittle: 'NIKE SB DUNK LOW "ACG TERRA"',
    pictureUrl:
      "https://s3.amazonaws.com/static.evilraffle/assets/img/raffles/BQ6817-008-a7ee-df23fc4c902c/BQ6817-008-list.jpg",
    price: 19399,
    stock: 14,
  },
  {
    id: 4,
    tittle: 'NIKE SB X STRANGELOVE SKATEBOARDS"',
    pictureUrl:
      "https://s3.amazonaws.com/static.evilraffle/assets/img/raffles/CT2552-800-b921-22e0dc1a8b70/CT2552-800-list.jpg",
    price: 19399,
    stock: 5,
  },
];

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 3000);
  });
};

const ItemlistContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((items) => {
      console.log(items);
      setItems(items);
    });
  }, []);

  return (
    <>
      return (
      <ItemList items={items} />
      );
    </>
  );
};

export default ItemlistContainer;
