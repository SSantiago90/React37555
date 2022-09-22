import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Hola Coder" />} />

        <Route path="/categoria/:cat" element={
          <ItemListContainer/>
        }></Route> 

        <Route path="/alquiler/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404: Te perdiste</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

/* 
  <BrowserRouter>
  <Routes>
    <Route path="algo" element={componente"/>
*/

// 1. Instalar ReactRouterDom
// 2. Configurar nuestro Routing
// 3. Definimos nuestras rutas con cada componente a mostrar
// 4. Remplazar nuestras etiquetas <a> por <Link>

export default App;
