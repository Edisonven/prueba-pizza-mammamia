import { useContext, useState } from "react";
import { CarritoDetailsContext } from "../contexts/ContextCarritoDetails";
import Button from "react-bootstrap/Button";

const Carrito = () => {
  const { pizzasSeleccionadas, totalCarritoValue } = useContext(
    CarritoDetailsContext
  );

  return (
    <div className="carrito__container">
      <h4 className="carrito__title">Detalles del pedido</h4>
      {pizzasSeleccionadas?.map((pizza) => (
        <div key={pizza.id} className="carrito__details__container">
          <div className="carrito__details">
            <img className="carrito__details__img" src={pizza.img} alt="" />
            <p className="carrito__details__paragraph">
              {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
            </p>
          </div>

          <div className="carrito__price__container">
            <p className="carrito__price__value">
              {pizza.price.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}
            </p>
            <Button className="carrito__btn " variant="danger">
              -
            </Button>
            <p>{}</p>
            <Button className="carrito__btn " variant="primary">
              +
            </Button>
          </div>
        </div>
      ))}
      <div className="carrito__total__container">
        <div className="carrito__total__section">
          <h1>Total </h1>
          <h1>
            {totalCarritoValue.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </h1>
        </div>
        <Button className="carrito__btn__total " variant="success">
          Ir a pagar
        </Button>
      </div>
    </div>
  );
};

export default Carrito;
