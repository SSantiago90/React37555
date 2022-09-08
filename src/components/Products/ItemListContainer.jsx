import React from "react";
import Card from "./Card";

function ItemListContainer() {
  return (
    <div>
      <h1>{/* mostramos el greeting recibido por PROPS */}</h1>  
      <div className="main container">
        <Card
          price={100}
          title="Producto 1"
          detail="Lorem ipsum" 
          img="https://http2.mlstatic.com/D_Q_NP_2X_615211-MLA51428564462_092022-AB.webp"
        />
        <Card
          price={500}
          title="Otro Producto"
          detail="Lorem ipsum"
          img="https://http2.mlstatic.com/D_Q_NP_2X_979339-MLA51390537629_092022-AB.webp"
        />
        <Card
          price={1000}
          title="Otro Producto más!"
          detail="Lorem ipsum"
          img="https://http2.mlstatic.com/D_Q_NP_2X_809249-MLA51428561901_092022-AB.webp"
        />
      </div>
    </div> 
  );
}

export default ItemListContainer;
