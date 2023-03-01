import "./index.css";

const Button = ({ text, clickFunc, isDisabled = false }) => {
  return (
    <button
      className={`Button ${isDisabled ? "disabled" : null}`}
      onclick={clickFunc}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
