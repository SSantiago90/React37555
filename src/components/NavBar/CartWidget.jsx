import React, { useContext } from "react";
import { cartCtx } from "../../context/cartContext";

function CartWidget() {
  const { getTotalItemsInCart } = useContext(cartCtx);

  return (
    <div>
      <span>X</span>
      <span>{getTotalItemsInCart()}</span>
    </div>
  );
}

export default CartWidget;
