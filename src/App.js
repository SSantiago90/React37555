import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/cartContext";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";
import { exportDataToFirestore } from "./services/firestore";
function App() {
  return (
    <CartContextProvider>
      <button onClick={exportDataToFirestore}>export</button>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Hola Coder" />}
          />

          <Route path="/categoria/:cat" element={<ItemListContainer />}></Route>

          <Route path="/alquiler/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout/:orderid" element={<Checkout />} />
          <Route path="*" element={<h1>404: Te perdiste. 🤔</h1>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
