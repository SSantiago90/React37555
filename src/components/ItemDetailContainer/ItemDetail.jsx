import React, { useContext } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
// Importamos el hook y el CartContext
import { cartCtx } from "../../context/cartContext";

function ItemDetail({ item }) {
  // Conectarnos al context con useContext
  const { addItem } = useContext(cartCtx);

  function handleAddToCart(count) {
    addItem(item, count);
    /* Cambiamos el estado del ItemDetail */
  }

  return (
    <FlexWrapper rows={true}>
      <div className="main container">
        <h1>{item.title}</h1>
        <img src={item.img} alt={item.title} />
        <h3>$ {item.price}</h3>
      </div>
      <ItemCount stock={5} onAddToCart={handleAddToCart} />
    </FlexWrapper>
  );
}

export default ItemDetail;
