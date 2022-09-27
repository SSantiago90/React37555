import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

import getItems, { getItemsByCategory } from "../../services/mockAPI";

function ItemListContainer() {
  let [data, setData] = useState([]);

  const { cat } = useParams();
  console.log(cat);

  useEffect(() => {
    if (cat === undefined) {
      getItems().then((respuestaDatos) => setData(respuestaDatos));
    } else {
      getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos));
    }
  }, [cat]);

  return (
    <div>
      <div className="main container">
        {data.map((item) => {
          return (
            <Card
              onClickImagen={() => {
                console.log("click card");
              }}
              key={item.id}
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
    </div>
  );
}

export default ItemListContainer;
