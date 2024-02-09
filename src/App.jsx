import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Header />
      <Home />
    </div>
  );
}

export default App;
