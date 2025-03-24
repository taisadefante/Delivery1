import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS
import "./NavBar.css";

export default function NavBar({ setShowCart, selectedProducts }) {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
      <div className="inner-content">
        <h1 className="logo">
          <Link to="/">
            <span>Delivery</span>
          </Link>
        </h1>

        <nav className={`${show ? "show" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Cardápio</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/location">Localização</Link>
            </li>
          </ul>
        </nav>

        <div className="navs-icon-container">
          <button className="cart" onClick={() => setShowCart(true)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            {selectedProducts.length > 0 && (
              <div className="products-count">{selectedProducts.length}</div>
            )}
          </button>

          <button className="menu-btn" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
}
