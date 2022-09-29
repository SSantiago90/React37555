import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//4 . Importamos y renderizamos nuestro Provider
import CartContextProvider from "./context/cartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Hola Coder" />}
          />

          <Route path="/categoria/:cat" element={<ItemListContainer />}></Route>

          <Route path="/alquiler/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404: Te perdiste</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
