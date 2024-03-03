import { useContext, useEffect, useState } from "react";
import { CarritoDetailsContext } from "../../contexts/ContextCarritoDetails";

const TotalCarritoValue = () => {
  const [totalCarrito, setTotalCarrito] = useState(0);
  const { pizzasSeleccionadas } = useContext(CarritoDetailsContext);
  // Esta función calcula el total del carrito sumando los precios de todas las pizzas seleccionadas
  const calculateTotal = () => {
    return pizzasSeleccionadas.reduce(
      (total, pizza) => total + pizza.price * pizza.cantidad,
      0
    );
  };

  // Actualiza el total del carrito cuando se cambia el estado de pizzasSeleccionadas
  useEffect(() => {
    setTotalCarrito(calculateTotal());
  }, [pizzasSeleccionadas]);

  return (
    <span>
      {totalCarrito.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
      })}
    </span>
  );
};

export default TotalCarritoValue;
