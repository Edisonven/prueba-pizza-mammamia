import { createContext, useState } from "react";

export const CarritoDetailsContext = createContext();

const CarritoDetailsPovider = ({ children }) => {
  const [pizzasSeleccionadas, setPizzasSeleccionadas] = useState([]);

  const filteredPizzasList = (pizza) => {
    const pizzaYaSeleccionada = pizzasSeleccionadas.filter(
      (p) => p.id === pizza.id
    );
    if (pizzaYaSeleccionada.length === 0) {
      setPizzasSeleccionadas([...pizzasSeleccionadas, pizza]);
    }
  };

  return (
    <CarritoDetailsContext.Provider
      value={{
        pizzasSeleccionadas,
        setPizzasSeleccionadas,
        filteredPizzasList,
      }}
    >
      {children}
    </CarritoDetailsContext.Provider>
  );
};

export default CarritoDetailsPovider;
