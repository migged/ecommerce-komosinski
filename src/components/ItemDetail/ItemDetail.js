import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ items }) => {
  const [cart, setCart] = useState(0);

  console.log(cart);

  const OnAdd = (a) => {
    console.log(a);
    setCart(a);
  };

  return (
    <div className="boxDetail">
      <div className="item">{items.tittle}</div>

      <img src={items.pictureUrl} alt="pic" className="boxImage"></img>
      <div className="grid">
        <div className="center">${items.price}.00</div>
      </div>
      <div className="description center">{items.description}</div>

      {cart <= 0 ? (
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
