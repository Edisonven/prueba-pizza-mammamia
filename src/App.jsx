import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import PizzaDetail from "./views/PizzaDetail";
function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pizzadetail/:id" element={<PizzaDetail />} />
      </Routes>
    </div>
  );
}

export default App;
