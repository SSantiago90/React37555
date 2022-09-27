import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ course }) {
  /* Crear un estado para guardar el valor del "count" del <ItemCount/> */
  let estadoCart = false;

  function handleAddToCart(count) {
    alert(`agregaste al carrito! ${count}`);
    /* Cambiamos el estado del ItemDetail */
  }

  return (
    <FlexWrapper rows={true}>
      <div className="main container">
        <h1>{course.title}</h1>
        <img src={course.img} alt={course.title} />
        <h3>$ {course.price}</h3>
      </div>

      {/* rendering condicional */}
      {estadoCart === false ? (
        <ItemCount stock={5} onAddToCart={handleAddToCart} />
      ) : (
        <button>Finalizar Compra</button>
      )}
    </FlexWrapper>
  );
}

export default ItemDetail;
