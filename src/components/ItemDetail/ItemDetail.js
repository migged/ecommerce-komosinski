import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { useNotificationServices } from "../../services/notification/NotificationServices";

const ItemDetail = ({ items }) => {
  const [quantity, setQuantity] = useState(0);

  const { tittle, price, id } = items;

  const { addItem } = useContext(CartContext);

  const setNotification = useNotificationServices();

  const OnAdd = (a) => {
    setQuantity(a);

    const productToAdd = {
      tittle,
      price,
      quantity,
      id,
    };

    addItem(productToAdd, quantity);
    setNotification("error", `se agrego ${tittle} al carrito`);
  };

  return (
    <div className="boxDetail">
      <div className="item">{items.tittle}</div>

      <img src={items.pictureUrl} alt="pic" className="boxImage"></img>
      <div className="grid">
        <div className="center">${items.price}.00</div>
      </div>
      <div className="description center">{items.description}</div>
      {quantity <= 10 ? (
        <ItemCount stock={items.stock} onAdd={OnAdd} />
      ) : (
        <Link to={`/cart/`} className="count cartButtonCart">
          ir al carrito
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
