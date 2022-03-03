import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd, quantity) => {
    const newObj = {
      ...productToAdd,
      quantity,
    };

    if (isInCart(productToAdd.id)) {
      console.log("ya esta en la lista");

      const cartDuplicate = cart.map((p) => {
        if (p.id === productToAdd.id) {
          p.quantity = p.quantity + quantity;
        } else {
        }

        return p;
      });
      console.table(cartDuplicate);

      setCart(cartDuplicate);
    } else {
      setCart([...cart, newObj]);
      console.table(cart);
    }
  };

  const removeItem = (id) => {
    //logica
  };

  const clear = () => {};

  const isInCart = (id) => {
    return cart.some((p) => p.id === id);
  };

  return (
    <Context.Provider
      value={{
        addItem,
        removeItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
