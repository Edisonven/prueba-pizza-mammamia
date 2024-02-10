import { useContext } from "react";
import { CarritoDetailsContext } from "../contexts/ContextCarritoDetails";
import { CarritoContext } from "../contexts/ContextCarrito";

const Carrito = () => {
  const { pizzasSeleccionadas } = useContext(CarritoDetailsContext);

  return (
    <div className="carrito__container">
      <h4 className="carrito__title">Detalles del pedido</h4>
      {pizzasSeleccionadas?.map((pizza) => (
        <div className="carrito__details__container">
          <div className="carrito__details">
            <img className="carrito__details__img" src={pizza.img} alt="" />
            <h5 className="carrito__details__paragraph">{pizza.name}</h5>
          </div>
          <div className="carrito__price__container">
            <p className="carrito__price__value">$: </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrito;
