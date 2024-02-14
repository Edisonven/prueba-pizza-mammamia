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
    setApiData(
      data.map((pizza) => {
        return { ...pizza, cantidad: 0 };
      })
    );
  };

  //Efecto secundario que se ejetuca al montar el componente donde sea llamado
  useEffect(() => {
    getApiData();
  }, []);

  const incrementarValorPizza = (pizza) => {
    const pizzaIndex = apiData.findIndex((p) => p.id === pizza.id);
    apiData[pizzaIndex].cantidad += 1;
  };
  const disminuirValorPizza = (pizza) => {
    const pizzaIndex = apiData.findIndex((p) => p.id === pizza.id);
    apiData[pizzaIndex].cantidad -= 1;
  };
  return (
    <ApiContext.Provider
      value={{
        apiData,
        setApiData,
        elementFoundById,
        setElementFoundById,
        incrementarValorPizza,
        disminuirValorPizza,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
