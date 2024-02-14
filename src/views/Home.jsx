import Pizzas from "./Pizzas";

const Home = () => {
  return (
    <div className="home__container">
      <h1 className="home__title">Echa un vistazo a nuestras pizzas</h1>
      <Pizzas />
    </div>
  );
};

export default Home;
