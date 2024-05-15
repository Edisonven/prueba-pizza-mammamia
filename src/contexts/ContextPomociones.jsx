import { useState, useEffect, createContext } from "react";

export const PromocionesContext = createContext();

const apiUrl = "/promociones.json";
//Función que ejecuta el llamado a la api y lo almacena en un estado global para proveerlo donde se necesite
const PromocionesProvider = ({ children }) => {
  const [promociones, setPromociones] = useState([]);
  const [promoSeleccionada, setPromoSeleccionada] = useState([]);

  const getApiData = async () => {
    try {
      const respuesta = await fetch(apiUrl);
      if (!respuesta.ok) {
        throw new Error("Error al obtener los datos de la API");
      }
      const data = await respuesta.json();
      setPromociones(
        data.map((data) => {
          return { ...data, cantidad: 0 };
        })
      );
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    }
  };

  //Efecto secundario que se ejetuca al montar el componente donde sea llamado
  useEffect(() => {
    getApiData();
  }, []);

  const incrementarCantidadPromo = (promo) => {
    const promoIndex = promociones.findIndex((p) => p.id === promo.id);
    const updatePromo = {
      ...promociones[promoIndex],
      cantidad: promociones[promoIndex].cantidad + 1,
    };
    const newData = [
      ...promociones.slice(0, promoIndex),
      updatePromo,
      ...promociones.slice(promoIndex + 1),
    ];
    setPromociones(newData); // Actualiza el es
  };

  const disminuirValorPromo = (promo) => {
    const promoIndex = promociones.findIndex((p) => p.id === promo.id);
    if (promociones[promoIndex].cantidad > 0) {
      const updatedPromo = {
        ...promociones[promoIndex],
        cantidad: promociones[promoIndex].cantidad - 1, // Disminuye en 1
      };
      const newData = [
        ...promociones.slice(0, promoIndex), // Usa spread para crear una copia
        updatedPromo,
        ...promociones.slice(promoIndex + 1),
      ];
      setPromociones(newData);
    }
  };

  const filteredPromoList = (promo) => {
    const promoYaSeleccionada = promoSeleccionada.find(
      (p) => p.id === promo.id
    );
    if (promoYaSeleccionada) {
      const nuevaspromoSeleccionada = promoSeleccionada.map((p) =>
        p.id === promo.id ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      setPromoSeleccionada(nuevaspromoSeleccionada);
    } else {
      setPromoSeleccionada([...promoSeleccionada, { ...promo, cantidad: 1 }]);
    }
  };

  /*   const incrementarCantidadPromo = (promo) => {
    const promoIndex = promociones.findIndex((p) => p.id === promo.id);
    promociones[promoIndex].cantidad += 1;
  }; */

  return (
    <PromocionesContext.Provider
      value={{
        promociones,
        setPromociones,
        incrementarCantidadPromo,
        filteredPromoList,
        promoSeleccionada,
        setPromoSeleccionada,
        disminuirValorPromo,
      }}
    >
      {children}
    </PromocionesContext.Provider>
  );
};

export default PromocionesProvider;
