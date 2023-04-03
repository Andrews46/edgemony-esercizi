import { useContext } from "react";
import { ContextGlobal } from "../utils/counter";
import "./index.css";

const Count = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const onHandleClick = (e) => dispatch({ type: e.target.className });

  return (
    <div className="Count">
      <h1>{state.value}</h1>
      <button className="Incrementa" onClick={onHandleClick}>
        Incrementa
      </button>
      <button className="Decrementa" onClick={onHandleClick}>
        Decrementa
      </button>
    </div>
  );
};
export default Count;
