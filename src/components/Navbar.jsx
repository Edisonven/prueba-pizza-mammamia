import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoDetailsContext } from "../contexts/ContextCarritoDetails";

const Navbar = () => {
  const { totalCarritoValue } = useContext(CarritoDetailsContext);
  return (
    <div className="navbar__container">
      <div className="navbar__logo__section">
        <img className="navbar__img" src="/logo3.png" alt="" />
        <Link to="/" className="link__home">
          <h4 className="navbar__title">Mamma mía!</h4>
        </Link>
      </div>
      <div>
        <Link to="/carrito" className="navbar__carrito__section link__home">
          <img className="navbar__carrito__img" src="/cart.svg" alt="" />
          <span className="navbar__carrito__value">
            {totalCarritoValue.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
