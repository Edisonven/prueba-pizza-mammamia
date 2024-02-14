import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../contexts/ContextApi";
import { useNavigate } from "react-router-dom";
import { CarritoDetailsContext } from "../contexts/ContextCarritoDetails";

const Pizzas = () => {
  //Estado global que almacena la petición a la api, y cada objeto de la api encontrado dinamicamente por su id
  const {
    apiData,
    incrementarValorPizza,
    elementFoundById,
    setElementFoundById,
  } = useContext(ApiContext);

  //Estado que guarda el id del objeto enocntrado dinamicamente
  const [selectedId, setSelectedId] = useState("");

  //Función que encuentra el objeto por su id y lo almacena
  const { filteredPizzasList } = useContext(CarritoDetailsContext);

  //Hook que redirige programáticamente
  const navigate = useNavigate();

  //Función que encuentra el objeto cuyo id sea igual al id del mismo y redirige hacia el detalle de la pizza al presionar el botón
  const navigateToDetail = (id) => {
    const idValueFound = [...apiData].find((pizza) => pizza.id === id);
    //setea el objeto encontrado
    setElementFoundById(idValueFound);
    //setea el id del objeto encontrado
    setSelectedId(idValueFound.id);
  };

  //Efecto secundario que se ejecuta cada vez que su dependecia cambia
  useEffect(() => {
    //condicional que evalua que el contenido de selectedId y elementFoundById.id sea distinto de indefinido para recién redirigir a la ruta definida
    if (selectedId && elementFoundById.id !== undefined) {
      navigate(`/pizzadetail/${elementFoundById.id}`);
    }
    //Dependecia que cuando cambia ejecuta el bloque del hook useEffect
  }, [elementFoundById]);

  //Efecto secundario destinado a vaciar el estado cada vez que se monta el componente (Cambio de vistas y recarga de la página)
  useEffect(() => {
    setElementFoundById("");
  }, []);

  return (
    <div className="home__container">
      <div className="home__card__container">
        {apiData?.map((pizza) => (
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
            <h1 className="home__card__price">
              {pizza.price.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}
            </h1>
            <div className="home__card__details">
              <button
                //Función llamada con el id del objeto almacenado como parámetro para encontrar el objeto seleccionado
                onClick={() => navigateToDetail(pizza.id)}
                className="home__card__btn home__card__btn__viewmore btn"
                variant="danger"
                value={pizza.id}
              >
                Ver Detalle
              </button>

              <div className="home__card__cart">
                <button
                  //Función llamada con el objeto almacenado como parámetro para encontrar el mismo  objeto seleccionado
                  onClick={() => {
                    filteredPizzasList(pizza);
                    incrementarValorPizza(pizza);
                  }}
                  className="home__card__btn btn"
                  variant="success"
                  value={pizza.cantidad}
                >
                  {pizza.cantidad >= 1 ? (
                    <p className="home__card__cart__paragraph">
                      Pizza Añadida!!
                    </p>
                  ) : (
                    <div className="home__card__cart__detail">
                      <p className="home__card__cart__paragraph">Añadir</p>
                      <img src="/cart.svg" alt="" />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizzas;
