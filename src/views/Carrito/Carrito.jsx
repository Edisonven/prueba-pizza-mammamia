import { useContext } from "react";
import { CarritoDetailsContext } from "../../contexts/ContextCarritoDetails";
import { ApiContext } from "../../contexts/ContextApi";
import "../../views/Carrito/carrito.css";
import Btn from "../../components/Btn/Btn";
import { PromocionesContext } from "../../contexts/ContextPomociones";
import TotalCarritoValue from "../../components/TotalCarritoValue/TotalCarritoValue";

const Carrito = () => {
  //Estado global que almacena las pizzas seleccionadas y el total del valor del carrito
  const {
    pizzasSeleccionadas,
    setPizzasSeleccionadas,
    totalCarritoValue,
    filteredPizzasList,
  } = useContext(CarritoDetailsContext);

  const { disminuirValorPizza, incrementarValorPizza } = useContext(ApiContext);
  const {
    promoSeleccionada,
    setPromoSeleccionada,
    incrementarCantidadPromo,
    filteredPromoList,
    disminuirValorPromo,
  } = useContext(PromocionesContext);

  //Función que disminuye la cantidad de elementos seleccionados en el carrito
  const decrementPizza = (pizza) => {
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

  const decrementPromo = (promo) => {
    const promoIndex = promoSeleccionada.findIndex((p) => p.id === promo.id);
    //Evalúa si econtro el índice buscado por su id
    if (promoIndex !== -1) {
      //si se cumple la condición crea una copia del array promos seleccionadas
      const updatedPromo = [...promoSeleccionada];
      //Si la propiedad del objeto cuyo índice encontrado es igual a 1 ejecuta la lógica siguiente
      if (promoSeleccionada[promoIndex].cantidad === 1) {
        // Elimina el objeto del arreglo cuando la cantidad es 0
        updatedPromo.splice(promoIndex, 1);
      } else {
        //si la cantidad supera el 1 va disminuyendo dicha cantidad de productos en 1
        updatedPromo[promoIndex] = {
          ...promoSeleccionada[promoIndex],
          cantidad: promoSeleccionada[promoIndex].cantidad - 1,
        };
      }

      // Actualiza el estado con el arreglo actualizado
      setPromoSeleccionada(updatedPromo);
    }
  };
  return (
    <section className="carrito__container">
      <h4 className="carrito__title">Detalles del pedido</h4>
      {
        pizzasSeleccionadas.length > 0
          ? pizzasSeleccionadas.map((pizza) => (
              <div key={pizza.id} className="carrito__details__container">
                <div className="carrito__details">
                  <img
                    className="carrito__details__img"
                    src={pizza.img}
                    alt=""
                  />
                  <p className="carrito__details__paragraph">
                    {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
                  </p>
                </div>

                <div className="carrito__price__container">
                  <p className="carrito__price__value">
                    {parseInt(pizza.price * pizza.cantidad).toLocaleString(
                      "es-CL",
                      {
                        style: "currency",
                        currency: "CLP",
                      }
                    )}
                  </p>
                  <Btn
                    onClick={() => {
                      decrementPizza(pizza);
                      disminuirValorPizza(pizza);
                    }}
                    className="carrito__btn btn"
                  >
                    -
                  </Btn>
                  <p className="carrito__cantidad">{pizza.cantidad}</p>
                  <Btn
                    onClick={() => {
                      filteredPizzasList(pizza);
                      incrementarValorPizza(pizza);
                    }}
                    className="carrito__btn btn"
                  >
                    +
                  </Btn>
                </div>
              </div>
            ))
          : null // No se muestra ninguna advertencia aquí, ya que la advertencia se mostrará después del segundo mapeo
      }
      {
        promoSeleccionada.length > 0
          ? promoSeleccionada.map((promo) => (
              <div key={promo.id} className="carrito__details__container">
                <div className="carrito__details">
                  <img
                    className="carrito__details__img"
                    src={promo.image}
                    alt=""
                  />
                  <p className="carrito__details__paragraph">
                    {promo.title.charAt(0).toUpperCase() + promo.title.slice(1)}
                  </p>
                </div>

                <div className="carrito__price__container">
                  <p className="carrito__price__value">
                    {parseInt(promo.value * promo.cantidad).toLocaleString(
                      "es-CL",
                      {
                        style: "currency",
                        currency: "CLP",
                      }
                    )}
                  </p>
                  <Btn
                    onClick={() => {
                      disminuirValorPromo(promo);
                      decrementPromo(promo);
                    }}
                    className="carrito__btn btn"
                  >
                    -
                  </Btn>
                  <p className="carrito__cantidad">{promo.cantidad}</p>
                  <Btn
                    onClick={() => {
                      incrementarCantidadPromo(promo);
                      filteredPromoList(promo);
                    }}
                    className="carrito__btn btn"
                  >
                    +
                  </Btn>
                </div>
              </div>
            ))
          : null // No se muestra ninguna advertencia aquí, ya que la advertencia se mostrará después del primer mapeo
      }
      {/* Advertencia de carrito vacío */}
      {pizzasSeleccionadas.length === 0 && promoSeleccionada.length === 0 && (
        <h3 className="carrito__pedido__title">
          Aún no tienes nada en el carrito, Selecciona algo para comprar
        </h3>
      )}
      <div className="carrito__total__container">
        <div className="carrito__total__section">
          <h1>Total </h1>
          <h1>
            {/*componente que muestra el total añadido al carrito y formatea el valor a peso chileno*/}
            <TotalCarritoValue />
          </h1>
        </div>
        <button className="carrito__btn__total btn" variant="success">
          Ir a pagar
        </button>
      </div>
    </section>
  );
};

export default Carrito;
