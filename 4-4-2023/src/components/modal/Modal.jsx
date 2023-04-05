import { useContext } from "react";
import { Context } from "../../store";

import styles from "./index.module.scss";

const Modal = () => {
  const { state, dispatch } = useContext(Context);
  const closeModal = () => {
    dispatch({ type: "MODAL_FALSE" });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CREATE_NEW_TASK", paylod: state.todos });
    dispatch({ type: "MODAL_FALSE" });
  };
  const inputUsername = (e) => {
    dispatch({ type: "INPUT_USERNAME", paylod: e.target.value });
  };
  const inputContent = (e) => {
    dispatch({ type: "INPUT_CONTENT", paylod: e.target.value });
  };
  const inputImage = (e) => {
    dispatch({ type: "INPUT_IMAGE", paylod: e.target.value });
  };
  return (
    <div className={styles.Modal}>
      <div onClick={closeModal} className={styles.overlay}></div>
      <form onSubmit={onHandleSubmit} className={styles.formModal}>
        <input
          onChange={inputUsername}
          value={state.todos.username}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={inputContent}
          value={state.todos.todo}
          type="text"
          placeholder="Content"
        />
        <input
          onChange={inputImage}
          value={state.todos.image}
          type="text"
          placeholder="Image"
        />
        <input className={styles.inputSubmit} type="submit" />
      </form>
    </div>
  );
};

export default Modal;
