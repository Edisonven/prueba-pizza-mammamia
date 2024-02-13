import { useContext } from "react";
import { ApiContext } from "../contexts/ContextApi";
import Button from "react-bootstrap/Button";
import { CarritoDetailsContext } from "../contexts/ContextCarritoDetails";

const PizzaDetail = () => {
  //Estado global llamado para mapear los resultados de la vista detalle
  const { elementFoundById } = useContext(ApiContext);

  //Función global llamada para ser ejecutada en botón de vista de detalles
  const { filteredPizzasList } = useContext(CarritoDetailsContext);

  return (
    <div className="home__card__container__details">
      {elementFoundById ? (
        <div key={elementFoundById.id} className="home__card__body__details">
          <img
            className=" home__card__img__details"
            src={elementFoundById.img}
            alt=""
          />
          <div className="home__card__info__container__details">
            <h3 className="home__card__title__details">
              {elementFoundById.name.charAt(0).toUpperCase() +
                elementFoundById.name.slice(1)}
            </h3>
            <p className=" home__card__description__details">
              {elementFoundById.desc}
            </p>
            <div className="home__card__ingredients__container__details">
              <h5 className="home__card__ingredients__title__details">
                Ingredientes:
              </h5>
              {elementFoundById.ingredients.map((ingredient, index) => {
                return (
                  <ul key={index} className="home__card__ingredients__details">
                    <li className="home__card__ingredient__details">
                      <img
                        className="home__card__ingredient__icono__details"
                        src="/pizza_icono.png"
                        alt=""
                      />
                      {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                    </li>
                  </ul>
                );
              })}
            </div>
            <hr className="home__Card__line__details" />
            <div className="home__card__details__details">
              <h1 className="home__card__price__details">
                Precio:{" "}
                {elementFoundById.price.toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </h1>
              <Button
                onClick={() => {
                  filteredPizzasList(elementFoundById);
                }}
                className="home__card__btn__details"
                variant="success"
                value={elementFoundById.price}
              >
                Añadir <img src="/cart.svg" alt="" />
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PizzaDetail;
