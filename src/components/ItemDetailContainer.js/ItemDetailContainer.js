import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItemsDetail } from "../asyncmock";
import { useParams } from "react-router-dom";
import { useNotificationServices } from "../../services/notification/NotificationServices";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  const params = useParams();

  const setNotification = useNotificationServices();

  console.log(params);

  useEffect(() => {
    setNotification("success", "bienvenido");

    getItemsDetail(params.id).then((items) => {
      setItems(items);
    });
  }, [params.id]); //eslint-disable-line

  return (
    <>
      <ItemDetail items={items} />
    </>
  );
};

export default ItemDetailContainer;
