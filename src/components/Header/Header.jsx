import "./style.css";

import { BsCart, BsPerson } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";

import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">GREENMIND</div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>

        <div className="navButtonsContainer">
          <a href="" target="_self" className="navButton">
            <BsCart />
          </a>
          <a href="" target="_self" className="navButton">
            <BsPerson />
          </a>
          <div>|</div>
          <a href="" target="_self" className="navButton">
            <BiMenuAltRight />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
