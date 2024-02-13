import { createContext, useState, useEffect } from "react";

export const CarritoDetailsContext = createContext();

const CarritoDetailsPovider = ({ children }) => {
  const [pizzasSeleccionadas, setPizzasSeleccionadas] = useState([]);
  const [totalCarritoValue, setTotalCarritoValue] = useState(0);

  //Función creada para ser utilizada donde sea requerida (función de actualización de estado anterior)
  const filteredPizzasList = (pizza) => {
    setPizzasSeleccionadas((prevPizzas) => {
      const pizzaYaSeleccionada = prevPizzas.find((p) => p.id === pizza.id);

      if (pizzaYaSeleccionada) {
        return prevPizzas.map((p) => {
          if (p.id === pizza.id) {
            return { ...p, cantidad: p.cantidad + 1 };
          }
          return p;
        });
      } else {
        return [...prevPizzas, { ...pizza, cantidad: 1 }];
      }
    });
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
