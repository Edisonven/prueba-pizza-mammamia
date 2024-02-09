import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo__section">
        <img className="navbar__img" src="/logo.png" alt="" />
        <Link to="/" className="link__home">
          <h4 className="navbar__title">Mamma mía!</h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
