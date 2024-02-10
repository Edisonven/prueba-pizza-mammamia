import { createContext, useState } from "react";
export const CarritoDetailsContext = createContext();

const CarritoDetailsPovider = ({ children }) => {
  const [pizzasSeleccionadas, setPizzasSeleccionadas] = useState([]);
  const [totalCarritoValue, setTotalCarritoValue] = useState(0);

  const filteredPizzasList = (pizza) => {
    const pizzaYaSeleccionada = pizzasSeleccionadas.filter(
      (p) => p.id === pizza.id
    );
    if (pizzaYaSeleccionada.length === 0) {
      setPizzasSeleccionadas([...pizzasSeleccionadas, pizza]);
      const newTotalCarritoValue = totalCarritoValue + pizza.price;
      setTotalCarritoValue(newTotalCarritoValue);
    }
  };

  return (
    <CarritoDetailsContext.Provider
      value={{
        pizzasSeleccionadas,
        setPizzasSeleccionadas,
        filteredPizzasList,
        totalCarritoValue,
        setTotalCarritoValue,
      }}
    >
      {children}
    </CarritoDetailsContext.Provider>
  );
};

export default CarritoDetailsPovider;
