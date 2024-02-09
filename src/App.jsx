import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
