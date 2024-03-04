import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const apiUrl = "/pizzas.json";
//Función que ejecuta el llamado a la api y lo almacena en un estyado global para proveerlo donde se necesite
const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [elementFoundById, setElementFoundById] = useState("");
  const getApiData = async () => {
    try {
      const respuesta = await fetch(apiUrl);
      if (!respuesta.ok) {
        throw new Error("Error al obtener los datos de la API");
      }
      const data = await respuesta.json();
      setApiData(
        data.map((pizza) => {
          return { ...pizza, cantidad: 0 };
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

  const incrementarValorPizza = (pizza) => {
    const pizzaIndex = apiData.findIndex((p) => p.id === pizza.id);
    const updatedPizza = {
      ...apiData[pizzaIndex],
      cantidad: apiData[pizzaIndex].cantidad + 1,
    };
    const newData = [
      ...apiData.slice(0, pizzaIndex),
      updatedPizza,
      ...apiData.slice(pizzaIndex + 1),
    ];
    setApiData(newData); // Actualiza el estado con la nueva data
  };

  const disminuirValorPizza = (pizza) => {
    const pizzaIndex = apiData.findIndex((p) => p.id === pizza.id);
    const updatedPizza = {
      ...apiData[pizzaIndex],
      cantidad: apiData[pizzaIndex].cantidad - 1,
    };
    const newData = [
      ...apiData.slice(0, pizzaIndex),
      updatedPizza,
      ...apiData.slice(pizzaIndex - 1),
    ];
    setApiData(newData); // Actualiza el es
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
