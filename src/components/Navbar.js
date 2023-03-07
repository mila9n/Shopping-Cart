import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import React from "react";
import { NavbarStyle } from "./style/navbar.styled";
import { useSelector } from "react-redux";

const Navbar = () => {
  const item = useSelector((state) => state.cart.item);
  return (
    <NavbarStyle>
      <nav>
        <Link to="/">shop</Link>
        <Link to="/cart" className="cart">
          <ShoppingCart size={32} />
          {item > 0 && <span className="totalitem">{item}</span>}
        </Link>
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
