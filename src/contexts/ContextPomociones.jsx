import { useState, useEffect, createContext } from "react";

export const PromocionesContext = createContext();

const apiUrl = "/promociones.json";
//Función que ejecuta el llamado a la api y lo almacena en un estyado global para proveerlo donde se necesite
const PromocionesProvider = ({ children }) => {
  const [promociones, setPromociones] = useState([]);
  const getApiData = async () => {
    try {
      const respuesta = await fetch(apiUrl);
      const data = await respuesta.json();
      setPromociones(data);
    } catch (error) {
      <p>hola</p>;
    }
  };

  //Efecto secundario que se ejetuca al montar el componente donde sea llamado
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <PromocionesContext.Provider value={{ promociones, setPromociones }}>
      {children}
    </PromocionesContext.Provider>
  );
};

export default PromocionesProvider;
