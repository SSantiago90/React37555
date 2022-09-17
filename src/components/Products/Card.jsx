import React from "react";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./card.css";

function Card(props) {
  let { price, title, img, detail, stock } = props;
  
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>{detail}</p>
        <h4>$ {price}</h4>
      </div>

      <Button>
        Ver más
      </Button>
      <ItemCount initial={1} stock={stock} />

    </div>
  );
}

export default Card;
