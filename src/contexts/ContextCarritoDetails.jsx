import { createContext, useState } from "react";

export const CarritoDetailsContext = createContext();

const CarritoDetailsPovider = ({ children }) => {
  const [pizzasSeleccionadas, setPizzasSeleccionadas] = useState([]);

  //Función creada para ser utilizada en las vistas de home y detalle para añadir un elemento al carrito
  const filteredPizzasList = (pizza) => {
    const pizzaYaSeleccionada = pizzasSeleccionadas.find(
      (p) => p.id === pizza.id
    );
    if (pizzaYaSeleccionada) {
      const nuevasPizzasSeleccionadas = pizzasSeleccionadas.map((p) =>
        p.id === pizza.id ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      setPizzasSeleccionadas(nuevasPizzasSeleccionadas);
    } else {
      setPizzasSeleccionadas([
        ...pizzasSeleccionadas,
        { ...pizza, cantidad: 1 },
      ]);
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
