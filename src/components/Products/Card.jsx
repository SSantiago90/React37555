import React from "react";
import Button from "../Button/Button";
import "./card.css";
import { Link } from "react-router-dom";

function Card(props) {
  let { price, offer, title, img, detail, id } = props;

  const urlDetalle = `/alquiler/${id}`;
  let classPrice = `priceTag ${offer && "offerTag"}`;

  return (
    <div className="card">
      <div onClick={props.onClickImagen} className="card-img">
        <img src={img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>{detail}</p>
        <h4 className={classPrice}>$ {price}</h4>
      </div>

      <Link to={urlDetalle}>
        <Button>Ver más</Button>
      </Link>
    </div>
  );
}

export default Card;
