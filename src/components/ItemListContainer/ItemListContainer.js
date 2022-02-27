import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { getItems } from "../asyncmock";
import { useParams } from "react-router-dom";

const ItemlistContainer = () => {
  const [items, setItems] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    getItems(params.type).then((items) => {
      setItems(items);
    });
  }, [params.type]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemlistContainer;
