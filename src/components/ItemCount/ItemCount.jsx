import React, { useState } from "react";
import Button from "../Button/Button";
import "./itemcount.css";

// onAddToCart
function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    console.log("ok");
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <Button color={"firebrick"} onClick={handleSubstract}>
          -
        </Button>
        <span>{count}</span>
        <Button color="darkgreen" onClick={handleAdd}>
          +
        </Button>
      </div>
      <div className="itemcount_btns">
        <Button
          color="purple"
          onClick={() => {
            onAddToCart(count);
          }}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
