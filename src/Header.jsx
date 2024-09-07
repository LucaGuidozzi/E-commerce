import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./Cart/CartWidget";
import { useState } from "react";

function Header({ onProdottiFiltered }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onProdottiFiltered(value);
  };

  return (
    <div className="nav-container">
      {" "}
      <nav>
        <ul className="ul-container">
          <li>
            <Link to="/Products">Luca's Shop</Link>
          </li>

          <li>
            <input
              className="barra-ricerca"
              type="text"
              placeholder="Cerca un prodotto..."
              value={searchTerm}
              onChange={handleInputChange}
            />
          </li>
          <li>
            {" "}
            <Link to="/CartInfo">
              {" "}
              <CartWidget />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
