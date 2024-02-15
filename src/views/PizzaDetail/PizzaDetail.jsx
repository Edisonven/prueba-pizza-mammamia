import { useContext } from "react";
import { ApiContext } from "../../contexts/ContextApi";
import { CarritoDetailsContext } from "../../contexts/ContextCarritoDetails";
import "../../views/PizzaDetail/pizzadetail.css";

const PizzaDetail = () => {
  //Estado global llamado para mapear los resultados de la vista detalle
  const { elementFoundById, incrementarValorPizza } = useContext(ApiContext);

  //Función global llamada para ser ejecutada en botón de vista de detalles
  const { filteredPizzasList } = useContext(CarritoDetailsContext);

  return (
    <section className="pizzas__card__container__details">
      {elementFoundById ? (
        <div key={elementFoundById.id} className="pizzas__card__body__details">
          <img
            className=" pizzas__card__img__details"
            src={elementFoundById.img}
            alt=""
          />
          <div className="pizzas__card__info__container__details">
            <h3 className="pizzas__card__title__details">
              {elementFoundById.name.charAt(0).toUpperCase() +
                elementFoundById.name.slice(1)}
            </h3>
            <p className=" pizzas__card__description__details">
              {elementFoundById.desc}
            </p>
            <div className="pizzas__card__ingredients__container__details">
              <h5 className="pizzas__card__ingredients__title__details">
                Ingredientes:
              </h5>
              {elementFoundById.ingredients.map((ingredient, index) => {
                return (
                  <ul
                    key={index}
                    className="pizzas__card__ingredients__details"
                  >
                    <li className="pizzas__card__ingredient__details">
                      <img
                        className="pizzas__card__ingredient__icono__details"
                        src="/pizza_icono.png"
                        alt=""
                      />
                      {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                    </li>
                  </ul>
                );
              })}
            </div>
            <hr className="pizzas__Card__line__details" />
            <div className="pizzas__card__details__details">
              <h3 className="pizzas__card__price__details">
                Precio:{" "}
                {elementFoundById.price.toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </h3>
              <button
                style={{
                  backgroundColor: elementFoundById.cantidad ? "#88001b" : "",
                  color: elementFoundById.cantidad ? "#ffffffde" : "",
                }}
                onClick={() => {
                  incrementarValorPizza(elementFoundById);
                  filteredPizzasList(elementFoundById);
                }}
                className="pizzas__card__btn__details btn"
                variant="success"
                value={elementFoundById.price}
              >
                {elementFoundById.cantidad >= 1 ? (
                  <p className="pizzas__card__cart__paragraph">
                    !En el carrito!
                  </p>
                ) : (
                  <div className="pizzas__card__cart__detail">
                    <p className="pizzas__card__cart__paragraph pizzas__card__cart__paragraph__details">
                      Añadir
                    </p>
                    <span class="material-symbols-outlined">shopping_cart</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default PizzaDetail;
