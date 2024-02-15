import { useContext } from "react";
import { LocalesContext } from "../../contexts/ContextLocales";
import "../../views/Unicaciones/locales.css";

const Locales = () => {
  const { localesData } = useContext(LocalesContext);

  return (
    <div className="locales__container">
      <h2 className="locales__title">Nuestros locales</h2>
      {localesData?.map((local) => (
        <div key={local.id} className="local__container">
          <div className="local__city__container">
            <img className="local__img" src="/location.png" alt="" />
            <h3>{local.city}</h3>
          </div>
          <p className="local__paragraph local__paragraph__direccion">
            {local.adress}
          </p>
          <p className="local__paragraph local__paragraph__number">
            Número: <span className="local__number">{local.number}</span>{" "}
          </p>
          <p className="local__paragraph local__paragraph__desc">
            {local.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Locales;
