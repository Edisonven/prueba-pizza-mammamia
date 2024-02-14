import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ApiProvider from "./contexts/ContextApi.jsx";
import { BrowserRouter } from "react-router-dom";
import CarritoDetailsPovider from "./contexts/ContextCarritoDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <CarritoDetailsPovider>
          <App />
        </CarritoDetailsPovider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
