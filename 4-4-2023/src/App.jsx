import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import Modal from "./components/modal";
import TasksList from "./components/tasksList";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const showModal = () => {
    dispatch({ type: "MODAL_TRUE" });
  };
  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <TasksList />
        <button onClick={showModal} className={styles.addTodo}>
          {"+"}
        </button>
        {state.isModalVisibile && <Modal />}
      </Context.Provider>
    </div>
  );
}

export default App;
