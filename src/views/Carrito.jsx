import { useContext } from "react";
import { CarritoDetailsContext } from "../contexts/ContextCarritoDetails";
import Button from "react-bootstrap/Button";

const Carrito = () => {
  //Estado global que almacena las pizzas seleccionadas y el total del valor del carrito
  const {
    pizzasSeleccionadas,
    setPizzasSeleccionadas,
    totalCarritoValue,
    filteredPizzasList,
  } = useContext(CarritoDetailsContext);

  //Función que disminuye la cantidad de elementos seleccionados en el carrito
  const decrement = (pizza) => {
    const pizzaIndex = pizzasSeleccionadas.findIndex((p) => p.id === pizza.id);

    if (pizzaIndex !== -1) {
      const updatedPizzas = [...pizzasSeleccionadas];

      if (pizzasSeleccionadas[pizzaIndex].cantidad === 1) {
        updatedPizzas.splice(pizzaIndex, 1);
      } else {
        updatedPizzas[pizzaIndex] = {
          ...pizzasSeleccionadas[pizzaIndex],
          cantidad: pizzasSeleccionadas[pizzaIndex].cantidad - 1,
        };
      }

      // Actualiza el estado con el arreglo actualizado
      setPizzasSeleccionadas(updatedPizzas);
    }
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
            <p className="carrito__cantidad">{pizza.cantidad}</p>
            <Button
              //Se llama a la función con el objeto asignado como parámetro
              onClick={() => filteredPizzasList(pizza)}
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
            {/*Estado que muestra el total añadido al carrito y formatea el valor a peso chileno*/}
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
