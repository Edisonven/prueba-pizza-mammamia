import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const apiUrl = "/pizzas.json";
//Función que ejecuta el llamado a la api y lo almacena en un estyado global para proveerlo donde se necesite
const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [elementFoundById, setElementFoundById] = useState("");
  const getApiData = async () => {
    const respuesta = await fetch(apiUrl);
    const data = await respuesta.json();
    setApiData(data);
  };

  //Efecto secundario que se ejetuca al montar el componente donde sea llamado
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <ApiContext.Provider
      value={{ apiData, setApiData, elementFoundById, setElementFoundById }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
