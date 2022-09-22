import React from "react";
import "./navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <Link to="/">
          <h2>Alquiler Mio</h2>
        </Link>
        <li>
          <Link to="/categoria/alquileres">Alquileres</Link>
        </li>
        <li>
          <Link to="/categoria/temporal">Temporal</Link>
        </li>
        <li>
          <Link to="/categoria/ventas">Ventas</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
