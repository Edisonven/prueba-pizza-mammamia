import { createContext, useState } from "react";

export const CarritoDetailsContext = createContext();

const CarritoDetailsPovider = ({ children }) => {
  const [pizzasSeleccionadas, setPizzasSeleccionadas] = useState([]);

  //Función creada para ser utilizada en las vistas de home y detalle para añadir un elemento al carrito
  const filteredPizzasList = (pizza) => {
    // Usa el setter de estado previo para asegurar que estás trabajando con el valor más reciente
    setPizzasSeleccionadas((prevPizzasSeleccionadas) => {
      const pizzaYaSeleccionada = prevPizzasSeleccionadas.find(
        (p) => p.id === pizza.id
      );
      if (pizzaYaSeleccionada) {
        return prevPizzasSeleccionadas.map((p) =>
          p.id === pizza.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prevPizzasSeleccionadas, { ...pizza, cantidad: 1 }];
      }
    });
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
