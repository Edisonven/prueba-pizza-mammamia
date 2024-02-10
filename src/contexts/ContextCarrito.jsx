import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [totalCarritoValue, setTotalCarritoValue] = useState(0);

  return (
    <CarritoContext.Provider
      value={{ totalCarritoValue, setTotalCarritoValue }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
