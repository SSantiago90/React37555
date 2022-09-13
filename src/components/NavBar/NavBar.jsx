import React from "react";
import "./navbar.css";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <a href="/">
          <li>Inicio</li>
        </a>
        <li>
          <a href="/category/B">Categoría B</a>
        </li>
        <li>
          <a href="/category/B">Categoría C</a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
