import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [data, setData] = useState({});

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  // 2. Return "temprano"

  useEffect(() => {
    getSingleItem(id)
      .then((respuestaDatos) => setData(respuestaDatos))
      .catch((errormsg) => {
        setError(errormsg.message);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return (
      <>
        {error ? (
          <div>
            <h2 style={{ color: "#aa0033" }}>Error obteniendo los datos</h2>
            <p>{error}</p>
          </div>
        ) : (
          <h3>Cargando . . .</h3>
        )}
      </>
    );
  }

  return (
    <div>
      <ItemDetail item={data} />
    </div>
  );
}

export default ItemDetailContainer;
