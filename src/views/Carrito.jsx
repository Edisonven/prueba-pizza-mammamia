import { useContext } from "react";
import { CarritoDetailsContext } from "../contexts/ContextCarritoDetails";
import Button from "react-bootstrap/Button";

const Carrito = () => {
  const { pizzasSeleccionadas, setPizzasSeleccionadas, totalCarritoValue } =
    useContext(CarritoDetailsContext);

  const decrement = (pizza) => {
    setPizzasSeleccionadas((prevPizzas) => {
      const pizzaIndex = prevPizzas.findIndex((p) => p.id === pizza.id);
  
      if (pizzaIndex !== -1) {
        const updatedPizzas = [...prevPizzas];
        if (prevPizzas[pizzaIndex].cantidad === 1) {
          updatedPizzas.splice(pizzaIndex, 1); // Elimina el objeto si la cantidad es 0
        } else {
          updatedPizzas[pizzaIndex] = { ...prevPizzas[pizzaIndex], cantidad: prevPizzas[pizzaIndex].cantidad - 1 };
        }
        return updatedPizzas;
      } else {
        return [...prevPizzas, { ...pizza, cantidad: 1 }];
      }
    });
  };
  const increment = (pizza) => {
    setPizzasSeleccionadas((prevPizzas) => {
      const pizzaYaSeleccionada = prevPizzas.find((p) => p.id === pizza.id);

      if (pizzaYaSeleccionada) {
        return prevPizzas.map((p) => {
          if (p.id === pizza.id) {
            return { ...p, cantidad: p.cantidad + 1 };
          }
          return p;
        });
      } else {
        return [...prevPizzas, { ...pizza, cantidad: 1 }];
      }
    });
  };

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
              {parseInt(pizza.price * pizza.cantidad).toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}
            </p>
            <Button
              onClick={() => decrement(pizza)}
              className="carrito__btn "
              variant="danger"
            >
              -
            </Button>
            <p>{pizza.cantidad}</p>
            <Button
              onClick={() => increment(pizza)}
              className="carrito__btn "
              variant="primary"
            >
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
