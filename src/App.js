import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  let title = "Hola Comision 37555";
  return (
    <div className="App">
      <header className="App-header">
        <img src="/assets/logos_coderhouse.png" alt="logo" />
        <h1>{title}</h1>
      </header>
      <Footer />
      <Footer />
    </div>
  );
}

export default App;
