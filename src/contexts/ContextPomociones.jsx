import { useState, useEffect, createContext } from "react";

export const PromocionesContext = createContext();

const apiUrl = "/promociones.json";
//Función que ejecuta el llamado a la api y lo almacena en un estado global para proveerlo donde se necesite
const PromocionesProvider = ({ children }) => {
  const [promociones, setPromociones] = useState([]);
  const getApiData = async () => {
    try {
      const respuesta = await fetch(apiUrl);
      if (!respuesta.ok) {
        throw new Error("Error al obtener los datos de la API");
      }
      const data = await respuesta.json();
      setPromociones(
        data.map((data) => {
          return { ...data, cantidad: 0 };
        })
      );
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    }
  };

  //Efecto secundario que se ejetuca al montar el componente donde sea llamado
  useEffect(() => {
    getApiData();
  }, []);
  const incrementarCantidadPromo = (promo) => {
    const promoIndex = promociones.findIndex((p) => p.id === promo.id);
    promociones[promoIndex].cantidad += 1;
  };
  return (
    <PromocionesContext.Provider value={{ promociones, setPromociones,incrementarCantidadPromo }}>
      {children}
    </PromocionesContext.Provider>
  );
};

export default PromocionesProvider;
