import "../Btn/btn.css";

const Btn = ({ style, onClick, value, children }) => {
  return (
    <button
      className="pizzas__card__btn btn"
      style={style}
      onClick={onClick}
      value={value}
    >
      {children}
    </button>
  );
};

export default Btn;
