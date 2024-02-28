import "../Btn/btn.css";

const Btn = ({ style, onClick, value, children, className }) => {
  return (
    <button style={style} onClick={onClick} value={value} className={className}>
      {children}
    </button>
  );
};

export default Btn;
