import Logo from "../Logo/Logo";
import CartWidget from "./CartWidget";

function Header() {
  let title = "Hola Coderhouse";

  return (
    <header className="App-header">
      <Logo />
      <CartWidget />
      <img src="/assets/logos_coderhouse.png" alt="logo" />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
