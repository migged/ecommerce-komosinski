import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItemsDetail } from "../asyncmock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    getItemsDetail(params.id).then((items) => {
      setItems(items);
    });
  }, [params.id]);

  return (
    <>
      <ItemDetail items={items} />
    </>
  );
};

export default ItemDetailContainer;
