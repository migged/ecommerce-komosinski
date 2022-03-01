import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock = 10, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onAddValidation = () => {
    if (count <= stock && count !== 0) {
      console.log("agregado al carrito");
      onAdd(count);
    } else {
      console.log("no hay stock suficiente");
    }
  };

  return (
    <div className="counter">
      <div className="count button">
        <button onClick={decrement}>-</button>

        <div>{count}</div>

        <button onClick={increment}>+</button>
      </div>

      <button className="count cartButton" onClick={onAddValidation}>
        Agregar al carrito
      </button>
      <div className="stock">Disponibles: {stock}</div>
    </div>
  );
};

export default ItemCount;
