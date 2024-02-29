import { useContext } from "react";
import "../../views/Promociones/promociones.css";
import { PromocionesContext } from "../../contexts/ContextPomociones";
import Btn from "../../components/Btn/Btn";

const Promociones = () => {
  const { promociones } = useContext(PromocionesContext);
  const { incrementarCantidadPromo, filteredPromoList } =
    useContext(PromocionesContext);

  return (
    <>
      <h1 className="promociones__title">Nuestras promociones</h1>
      <section className="promociones__container">
        {promociones?.map((promocion) => (
          <div key={promocion.id} className="promocion__container">
            <img className="promociones__img" src={promocion.image} alt="" />
            <div className="promociones__body">
              <div className="promociones__title__body">
                <h4 className="promociones__title__desc">{promocion.title}</h4>
                <h4 className="promociones__title__desc">{promocion.type}</h4>
              </div>
              <div>
                <p className="promociones__paragraph">{promocion.desc1}</p>
                <p className="promociones__paragraph">{promocion.desc2}</p>
                <p className="promociones__paragraph">{promocion.desc3}</p>
                <p className="promociones__paragraph promociones__paragraph__desc4">
                  {promocion.desc4}
                </p>
              </div>
              <div>
                <h3 className="promociones__value">
                  Precio:
                  {promocion.value.toLocaleString("es-CL", {
                    style: "currency",
                    currency: "CLP",
                  })}
                </h3>
              </div>
              <Btn
                style={{
                  backgroundColor: promocion.cantidad ? "#88001b" : "",
                  color: promocion.cantidad ? "#ffffffde" : "",
                }}
                //Función llamada con el objeto almacenado como parámetro para encontrar el mismo  objeto seleccionado
                onClick={() => {
                  incrementarCantidadPromo(promocion);
                  filteredPromoList(promocion);
                }}
                value={promocion.id}
                className="promocions__card__btn btn"
              >
                {promocion.cantidad >= 1 ? (
                  <p className="pizzas__card__cart__paragraph">
                    ¡En el carrito!
                  </p>
                ) : (
                  <div className="pizzas__card__cart__detail">
                    <p className="pizzas__card__cart__paragraph">Añadir</p>
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>
                  </div>
                )}
              </Btn>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Promociones;
