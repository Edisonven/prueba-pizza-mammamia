import "../../components/NavbarHambur/navbarhambur.css";
const NavbarHambur = ({ clicked, toggleIcon }) => {
  return (
    <div
      className={`nav-icon3 active ${clicked ? "open" : ""}`}
      onClick={toggleIcon}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default NavbarHambur;
