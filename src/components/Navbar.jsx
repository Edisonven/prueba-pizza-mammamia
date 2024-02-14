import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoDetailsContext } from "../contexts/ContextCarritoDetails";
import NavbarHambur from "../NavbarHambur";

const Navbar = () => {
  //Contexto donde se maneja el estado global que actualiza el total a pagar del carrito
  const { totalCarritoValue } = useContext(CarritoDetailsContext);
  const [clicked, setClicked] = useState(false);

  const toggleIcon = () => {
    setClicked(!clicked);
  };
  return (
    <div className="navbar__container">
      <div className="navbar__logo__section">
        <img className="navbar__img" src="/logo3.png" alt="" />
        <Link to="/" className="link__home">
          <h3 className="navbar__title">Mammamía!</h3>
        </Link>
      </div>
      <div
        className={`navbar__links__container ${clicked ? "active" : ""}`}
        onClick={toggleIcon}
      >
        <Link className="navbar__carrito__section link__home">Locales</Link>
        <Link className="navbar__carrito__section link__home">Menu</Link>
        <Link className="navbar__carrito__section link__home">Promociones</Link>
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
      <div>
        <NavbarHambur clicked={clicked} toggleIcon={toggleIcon} />
      </div>
    </div>
  );
};

export default Navbar;
