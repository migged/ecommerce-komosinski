import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { getItems } from "../asyncmock";

const ItemlistContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((items) => {
      setItems(items);
    });
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemlistContainer;
