import React, { useState, useEffect } from "react";
import Card from "./Card";

import getItems from "../../services/mockAPI";

function ItemListContainer() {
  let [data, setData] = useState([]);

  useEffect(() => {
    getItems().then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  // * ciclos de vida
  // * promesas
  // * estado
  // * props
  // * map
  // * key

  return (
    <div>
      <div className="main container">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
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
