import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/Products/ItemListContainer";

import FlexWrapper from "./components/FlexWrapper/FlexWrapper";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer />

      <FlexWrapper>
        <ItemCount initial={1} stock={3} />
      </FlexWrapper>

      <Footer />
    </div>
  );
}

export default App;
