import { useContext } from "react";
import { ApiContext } from "../contexts/ContextApi";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { apiData, elementFoundById, setElementFoundById } =
    useContext(ApiContext);

  const navigate = useNavigate();

  const navigateToDetail = (id) => {
    const idValueFound = [...apiData].find(
      (pizza) => pizza.id === id.target.value
    );
    setElementFoundById(idValueFound);
    navigate(`/pizzadetail/${elementFoundById}`);
  };

  return (
    <div className="home__container">
      <h4 className="home__title">Echa un vistazo a nuestras pizzas</h4>
      <div className="home__card__container">
        {apiData.map((pizza) => (
          <div key={pizza.id} className="home__card__body">
            <img className="home__card__img" src={pizza.img} alt="" />
            <h3 className="home__card__title">
              {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
            </h3>
            <div className="home__card__ingredients__container">
              <h5 className="home__card__ingredients__title">Ingredientes:</h5>
              {pizza.ingredients.map((ingredient, index) => {
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
            <h1 className="home__card__price">$ {pizza.price}</h1>
            <div className="home__card__details">
              <Button
                onClick={(id) => navigateToDetail(id)}
                className="home__card__btn home__card__btn__viewmore"
                variant="danger"
                value={pizza.id}
              >
                Ver más
              </Button>

              <div className="home__card__cart">
                <Button className="home__card__btn " variant="success">
                  Añadir <img src="/cart.svg" alt="" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
