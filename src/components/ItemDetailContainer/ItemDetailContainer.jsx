import React, { useState, useEffect } from "react";
import { getSingleItem } from "../../services/mockAPI";

function ItemDetailContainer() {
  let [data, setData] = useState({});

  useEffect(() => {
    getSingleItem(1).then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div>
      <div className="main container">
        {/* Card Detail
          <ItemDetail data={data}  
        */}
      </div>
    </div>
  );
}

export default ItemDetailContainer;
