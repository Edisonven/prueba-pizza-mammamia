import { useContext } from "react";
import "../../views/Promociones/promociones.css";
import { PromocionesContext } from "../../contexts/ContextPomociones";

const Promociones = () => {
  const { promociones } = useContext(PromocionesContext);
  return (
    <section className="promociones__container">
      <h1 className="promociones__title">Nuestras promociones</h1>
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
              <p className="promociones__paragraph">{promocion.desc4}</p>
            </div>
            <div>
              <h3 className="promociones__value">Precio: ${promocion.value}</h3>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Promociones;
