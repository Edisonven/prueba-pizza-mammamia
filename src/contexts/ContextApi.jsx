import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const apiUrl = "/src/assets/pizzas.json";

const ContextApi = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const getApiData = async () => {
    const respuesta = await fetch(apiUrl);
    const data = await respuesta.json();
    setApiData(data);
  };
  console.log(apiData);
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <ApiContext.Provider value={(apiData, setApiData)}>
      {children}
    </ApiContext.Provider>
  );
};

export default ContextApi;
