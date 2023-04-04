import { useContext } from "react";
import { Context } from "../../store";

import styles from "./index.module.scss";

const Modal = () => {
  const { state, dispatch } = useContext(Context);
  const closeModal = () => {
    dispatch({ type: "MODAL_FALSE" });
  };
  return (
    <div className={styles.Modal}>
      <div className={styles.overlay}>
        <button onClick={closeModal}>X</button>
      </div>
    </div>
  );
};

export default Modal;
