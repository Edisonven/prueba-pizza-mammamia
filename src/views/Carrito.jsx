import { useContext } from "react";
import { CarritoDetailsContext } from "../contexts/ContextCarritoDetails";
import { ApiContext } from "../contexts/ContextApi";

const Carrito = () => {
  //Estado global que almacena las pizzas seleccionadas y el total del valor del carrito
  const {
    pizzasSeleccionadas,
    setPizzasSeleccionadas,
    totalCarritoValue,
    filteredPizzasList,
  } = useContext(CarritoDetailsContext);

  const { disminuirValorPizza } = useContext(ApiContext);

  //Función que disminuye la cantidad de elementos seleccionados en el carrito
  const decrement = (pizza) => {
    const pizzaIndex = pizzasSeleccionadas.findIndex((p) => p.id === pizza.id);
    //Evalúa si econtro el índice buscado por su id
    if (pizzaIndex !== -1) {
      //si se cumple la condición crea una copia del array pizzas seleccionadas
      const updatedPizzas = [...pizzasSeleccionadas];
      //Si la propiedad del objeto cuyo índice encontrado es igual a 1 ejecuta la lógica siguiente
      if (pizzasSeleccionadas[pizzaIndex].cantidad === 1) {
        // Elimina el objeto del arreglo cuando la cantidad es 0
        updatedPizzas.splice(pizzaIndex, 1);
      } else {
        //si la cantidad supera el 1 va disminuyendo dicha cantidad de productos en 1
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
            <button
              onClick={() => {
                decrement(pizza);
                disminuirValorPizza(pizza);
              }}
              className="carrito__btn "
              variant="danger"
            >
              -
            </button>
            <p className="carrito__cantidad">{pizza.cantidad}</p>
            <button
              //Se llama a la función con el objeto asignado como parámetro
              onClick={() => filteredPizzasList(pizza)}
              className="carrito__btn "
              variant="primary"
            >
              +
            </button>
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
        <button className="carrito__btn__total " variant="success">
          Ir a pagar
        </button>
      </div>
    </div>
  );
};

export default Carrito;
