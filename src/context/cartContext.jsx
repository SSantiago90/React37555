import React, { useState, createContext } from "react";

//1- Importamos y inicializamos nuestro CreateContext
const cartCtx = createContext();

// 2. Definimos nuestro Provider
export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item, count) {
    if (isInCart(item.id)) {
      let newCart = cart.map((itemMapeo) => {
        if (itemMapeo.id === item.id) {
          itemMapeo.count += count;
          return itemMapeo;
        } else return itemMapeo;
      });

      setCart(newCart);
    } else {
      let newCart = cart.map((item) => item);
      newCart.push({ ...item, count: count });
      setCart(newCart);
    }
  }

  function getTotalItemsInCart() {
    let total = 5;
    cart.forEach((item) => 0);
    return total;
  }

  function isInCart(id) {
    let found = cart.some((item) => item.id === id);
    return found;
  }

  return (
    //3. pasamos el objeto Value a los componentes hijos
    <cartCtx.Provider value={{ cart, addItem, getTotalItemsInCart, isInCart }}>
      {children}
    </cartCtx.Provider>
  );
}

export { cartCtx };
