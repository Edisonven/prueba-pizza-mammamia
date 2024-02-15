import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ApiProvider from "./contexts/ContextApi.jsx";
import { BrowserRouter } from "react-router-dom";
import CarritoDetailsPovider from "./contexts/ContextCarritoDetails.jsx";
import LocalesProvider from "./contexts/ContextLocales.jsx";
import PromocionesProvider from "./contexts/ContextPomociones.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <LocalesProvider>
          <CarritoDetailsPovider>
            <PromocionesProvider>
              <App />
            </PromocionesProvider>
          </CarritoDetailsPovider>
        </LocalesProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
