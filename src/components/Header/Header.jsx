import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src="/images/logo.png" alt="logo-rayo" className="logo-img" />
        <h1 className="logo-title">HAMBURGUESAS CON LA CHISPA JUSTA</h1>
      </Link>

      <Nav />
    </header>
  );
};
