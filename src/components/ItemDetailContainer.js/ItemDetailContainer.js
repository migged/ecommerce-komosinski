import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItemsDetail } from "../asyncmock";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemsDetail().then((items) => {
      setItems(items);
    });
  }, []);

  return (
    <>
      <ItemDetail items={items} />
    </>
  );
};

export default ItemDetailContainer;
