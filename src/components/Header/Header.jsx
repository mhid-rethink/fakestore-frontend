import "./style.css";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="container">
        <div>logo</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>

        <div>carrinho</div>
        <div>login</div>
        <div>risco</div>
        <div>menu</div>
      </header>
    </>
  );
};

export default Header;
