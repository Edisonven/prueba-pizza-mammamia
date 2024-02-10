import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ApiProvider from "./contexts/ContextApi.jsx";
import { BrowserRouter } from "react-router-dom";
import CarritoProvider from "./contexts/ContextCarrito.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
