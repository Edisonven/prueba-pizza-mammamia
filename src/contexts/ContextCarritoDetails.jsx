import { createContext, useState, useEffect } from "react";

export const CarritoDetailsContext = createContext();

const CarritoDetailsPovider = ({ children }) => {
  const [pizzasSeleccionadas, setPizzasSeleccionadas] = useState([]);
  const [totalCarritoValue, setTotalCarritoValue] = useState(0);

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

  // Esta función calcula el total del carrito sumando los precios de todas las pizzas seleccionadas
  const calculateTotal = () => {
    return pizzasSeleccionadas.reduce(
      (total, pizza) => total + pizza.price * pizza.cantidad,
      0
    );
  };

  // Actualiza el total del carrito cuando se cambia el estado de pizzasSeleccionadas
  useEffect(() => {
    setTotalCarritoValue(calculateTotal());
  }, [pizzasSeleccionadas]);

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
