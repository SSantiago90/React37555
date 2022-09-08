import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/Products/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
