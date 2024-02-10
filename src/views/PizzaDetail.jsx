import { useContext } from "react";
import { ApiContext } from "../contexts/ContextApi";
import Button from "react-bootstrap/Button";
import { CarritoContext } from "../contexts/ContextCarrito";
import { CarritoDetailsContext } from "../contexts/ContextCarritoDetails";

const PizzaDetail = () => {
  const { elementFoundById } = useContext(ApiContext);
  const { setTotalCarritoValue } = useContext(CarritoContext);
  const { filteredPizzasList } = useContext(CarritoDetailsContext);
  const handleChangeCarrito = () => {
    const priceValueFound = elementFoundById.price;
    setTotalCarritoValue((priceValue) => priceValue + priceValueFound);
  };
  return (
    <div className="home__card__container">
      {elementFoundById ? (
        <div key={elementFoundById.id} className="home__card__body">
          <img className="home__card__img" src={elementFoundById.img} alt="" />
          <h3 className="home__card__title">
            {elementFoundById.name.charAt(0).toUpperCase() +
              elementFoundById.name.slice(1)}
          </h3>
          <p className="home__card__description">{elementFoundById.desc}</p>
          <div className="home__card__ingredients__container">
            <h5 className="home__card__ingredients__title">Ingredientes:</h5>
            {elementFoundById.ingredients.map((ingredient, index) => {
              return (
                <ul key={index} className="home__card__ingredients">
                  <li className="home__card__ingredient">
                    <img
                      className="home__card__ingredient__icono"
                      src="/pizza_icono.png"
                      alt=""
                    />
                    {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                  </li>
                </ul>
              );
            })}
          </div>
          <hr className="home__Card__line" />
          <h1 className="home__card__price">$ {elementFoundById.price}</h1>
          <div className="home__card__details">
            <div className="home__card__cart">
              <Button
                onClick={() => {
                  handleChangeCarrito(elementFoundById.price);
                  filteredPizzasList(elementFoundById);
                }}
                className="home__card__btn "
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
