import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoDetailsContext } from "../contexts/ContextCarritoDetails";

const Navbar = () => {
  //Contexto donde se maneja el estado global que actualiza el total a pagar del carrito
  const { totalCarritoValue } = useContext(CarritoDetailsContext);

  return (
    <div className="navbar__container">
      <div className="navbar__logo__section">
        <img className="navbar__img" src="/logo3.png" alt="" />
        <Link to="/" className="link__home">
          <h3 className="navbar__title">Mamma mía!</h3>
        </Link>
      </div>
      <div>
        <Link to="/carrito" className="navbar__carrito__section link__home">
          Comprar
          <img className="navbar__carrito__img" src="/cart.svg" alt="" />
          <span className="navbar__carrito__value">
            {/*Estado que muestra el total añadido al carrito y formatea el valor a peso chileno*/}
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
