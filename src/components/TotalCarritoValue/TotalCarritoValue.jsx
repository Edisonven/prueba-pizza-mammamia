import { useContext, useEffect, useState } from "react";
import { CarritoDetailsContext } from "../../contexts/ContextCarritoDetails";
import { PromocionesContext } from "../../contexts/ContextPomociones";

const TotalCarritoValue = () => {
  const [totalCarrito, setTotalCarrito] = useState(0);
  const { pizzasSeleccionadas } = useContext(CarritoDetailsContext);
  const { promoSeleccionada } = useContext(PromocionesContext);

  // Esta función calcula el total del carrito sumando los precios de todas las pizzas seleccionadas
  const calculateTotal = () => {
    const pizza = pizzasSeleccionadas.reduce(
      (total, pizza) => total + pizza.price * pizza.cantidad,
      0
    );

    const promo = promoSeleccionada.reduce(
      (total, promo) => total + promo.value * promo.cantidad,
      0
    );
    return pizza + promo;
  };

  // Actualiza el total del carrito cuando se cambia el estado de pizzasSeleccionadas
  useEffect(() => {
    setTotalCarrito(calculateTotal());
  }, [pizzasSeleccionadas, promoSeleccionada]);

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
