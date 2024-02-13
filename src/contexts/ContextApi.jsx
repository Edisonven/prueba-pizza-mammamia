import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const apiUrl = "/pizzas.json";

const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [elementFoundById, setElementFoundById] = useState("");
  const getApiData = async () => {
    const respuesta = await fetch(apiUrl);
    const data = await respuesta.json();
    setApiData(data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <ApiContext.Provider value={{ apiData, setApiData, elementFoundById, setElementFoundById }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
