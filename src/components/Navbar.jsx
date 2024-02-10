import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../contexts/ContextCarrito";

const Navbar = () => {
  const { carrito } = useContext(CarritoContext);
  return (
    <div className="navbar__container">
      <div className="navbar__logo__section">
        <img className="navbar__img" src="/logo.png" alt="" />
        <Link to="/" className="link__home">
          <h4 className="navbar__title">Mamma mía!</h4>
        </Link>
      </div>
      <div className="navbar__carrito__section">
        <Link to="/carrito" className="link__home">
          <img src="/cart.svg" alt="" />
        </Link>
        <span className="navbar__carrito__value">$: {carrito}</span>
      </div>
    </div>
  );
};

export default Navbar;
