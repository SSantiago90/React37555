import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { Momentum } from "@uiball/loaders";

import { getItems, getItemsByCategory } from "../../services/firestore";

function ItemListContainer() {
  const [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(true); 

  const { cat } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (cat === undefined) {
      getItems()
        .then((respuestaDatos) => setData(respuestaDatos))
        .finally(() => setIsLoading(false));
    } else {
      getItemsByCategory(cat)
        .then((respuestaDatosFiltrados) => setData(respuestaDatosFiltrados))
        .finally(() => setIsLoading(false));
    }
  }, [cat]);

  return (
    <div>
      {isLoading ? (
        <Momentum size={72} speed={1.1} color="purple" />
      ) : (
        <div className="main container">
          {data.map((item) => {
            return (
              <Card
                onClickImagen={() => {
                  console.log("click card");
                }}
                key={item.id}
                offer={item.offer}
                id={item.id}
                price={item.price}
                title={item.title}
                img={item.img}
                detail={item.detail}
                stock={item.stock}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
