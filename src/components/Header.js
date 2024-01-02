import React from "react";
import "../styles/Header.css";

const Header = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          shop now
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i class="fas fa-shopping-cart"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};
export default Header;
