import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAPI";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  let [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuestaDatos) => setData(respuestaDatos));
  }, [id]);

  return (
    <div>
      <ItemDetail course={data} />
    </div>
  );
}

export default ItemDetailContainer;
