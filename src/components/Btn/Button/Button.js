const Button = ({ text, size, type, onClick }) => {
  const btnType = ["brand", "brandSub", "disabled", "txt"].includes(type)
    ? type
    : "default";
  return (
    <button
      className={["btn", `btn_${btnType} ${size}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
