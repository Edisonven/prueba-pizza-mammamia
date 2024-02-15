import { useState, useEffect, createContext } from "react";

export const LocalesContext = createContext();

const apiUrl = "/locales.json";
//Función que ejecuta el llamado a la api y lo almacena en un estyado global para proveerlo donde se necesite
const LocalesProvider = ({ children }) => {
  const [localesData, setLocalesData] = useState([]);
  const getApiData = async () => {
    try {
      const respuesta = await fetch(apiUrl);
      if (!respuesta.ok) {
        throw new Error("Error al obtener los datos de la API");
      }
      const data = await respuesta.json();
      setLocalesData(data);
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    }
  };

  //Efecto secundario que se ejetuca al montar el componente donde sea llamado
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <LocalesContext.Provider value={{ localesData, setLocalesData }}>
      {children}
    </LocalesContext.Provider>
  );
};

export default LocalesProvider;
