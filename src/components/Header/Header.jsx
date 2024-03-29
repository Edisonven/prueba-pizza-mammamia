import "../../components/Header/header.css";
const Header = () => {
  return (
    <header className="header__container">
      <img className="header__img" src="logo_header.jpg" alt="" />
      <div className="header__title__section">
        <h3 className="header__title">¡Pizzería Mamma mia!</h3>
        <p className="header__paragraph">
          ¡Las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </header>
  );
};

export default Header;
