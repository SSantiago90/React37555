import React, { useState, useEffect } from "react";

function ItemCount(props) {
  const count = "usamos-el-hook-de-state";

  function handleAdd() {
    // solo sumar si la cantidad del contador no supera el stock
    /* setCount(count + 1); */
  }

  function handleSubstract() {
    // solo restar si la cantidad no baja de 0
    /* setCount(count - 1) */
  }

  function onAddToCart() {}

  return (
    <div>
      <div>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </div>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
