import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAPI";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  let [data, setData] = useState({});

  /* const params = useParams();
  const id = params.id; */

  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuestaDatos) => setData(respuestaDatos));
  }, [id]);

  return (
    <div>
      <div className="main container">
        <h1>{data.title}</h1>
        <img src={data.img} alt={data.title} />
        <h3>$ {data.price}</h3>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
