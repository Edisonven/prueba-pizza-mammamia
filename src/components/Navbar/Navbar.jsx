import { useContext, useState, useEffect } from "react";
import { CarritoDetailsContext } from "../../contexts/ContextCarritoDetails";
import NavbarHambur from "../../components/NavbarHambur/NavbarHambur.jsx";
import "../../components/Navbar/navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  //Clase para los links que están activos
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "");
  //Contexto donde se maneja el estado global que actualiza el total a pagar del carrito
  const { totalCarritoValue } = useContext(CarritoDetailsContext);

  //Estado que maneja el valor del click al presionar el menu hamburguesa
  const [clicked, setClicked] = useState(false);

  //Estado que maneja si la ventana es mayor a 576px para no activar la función que abre el menu hamburguesa
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  //Función que evalúa el valor del estado para invertir su valor actual
  const toggleIcon = () => {
    if (isMobile) {
      setClicked(!clicked);
    }
  };

  // Actualizar el estado de isMobile cuando cambie el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar__container">
      <div className="navbar__logo__section">
        <img className="navbar__img" src="/logo3.png" alt="" />
        <Link to="/home" className="navbar__link">
          <h3 className="navbar__title">Mammamía!</h3>
        </Link>
      </div>
      <div
        className={`navbar__links__container ${clicked ? "active" : ""}`}
        onClick={toggleIcon}
      >
        <NavLink
          to="/home"
          className={`navbar__carrito__section navbar__link ${setActiveClass}`}
        >
          Menu
        </NavLink>
        <NavLink to="/locales" className="navbar__carrito__section navbar__link">
          Locales
        </NavLink>
        <NavLink
          to="/promociones"
          className="navbar__carrito__section navbar__link"
        >
          Promociones
        </NavLink>
        <NavLink
          to="/carrito"
          className="navbar__carrito__section navbar__link"
        >
          Comprar
          <img className="navbar__carrito__img" src="/cart.svg" alt="" />
          <span className="navbar__carrito__value">
            {/*Estado que muestra el total añadido al carrito y formatea el valor a peso chileno*/}
            {totalCarritoValue.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </span>
        </NavLink>
      </div>
      <div>
        <NavbarHambur clicked={clicked} toggleIcon={toggleIcon} />
      </div>
    </nav>
  );
};

export default Navbar;
