import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./views/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import PizzaDetail from "./views/PizzaDetail/PizzaDetail.jsx";
import Carrito from "./views/Carrito/Carrito.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Locales from "./views/Unicaciones/Locales.jsx";
function App() {
  return (
    <div className="app__container">
      <Navbar />
      <div className="aplication__container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzadetail/:id" element={<PizzaDetail />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/Locales" element={<Locales />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
