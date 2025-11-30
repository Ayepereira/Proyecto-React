import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/category/hamburguesas">Hamburguesas</Link>
        </li>

        <li>
          <Link to="/category/helados">Helados</Link>
        </li>

        <li className="cart-container">
          <Link to="/carrito" className="cart-link">
            Carrito
            {getTotalItems() > 0 && (
              <span className="in-cart">{getTotalItems()}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
