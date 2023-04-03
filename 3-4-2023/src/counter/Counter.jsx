import { useState } from "react";
import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onHandleClick = () => {
    setCount(() => count + 1);
  };
  const onHandleClickDec = () => {
    setCount(() => count - 1);
  };
  return (
    <div className="Counter">
      <h1>{count}</h1>
      <button onClick={onHandleClick}>Incrementa</button>
      <button onClick={onHandleClickDec}>Decrementa</button>
    </div>
  );
};
export default Counter;
