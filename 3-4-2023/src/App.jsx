import { contextCounter, ContextGlobal } from "./utils/counter";
import { useReducer } from "react";

import { stateGlobal } from "./utils/reduce";
import Counter from "./counter";
import Count from "./count";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(stateGlobal, contextCounter);
  return (
    <div className="App">
      <ContextGlobal.Provider value={{ state, dispatch }}>
        <Count />
        <Counter />
      </ContextGlobal.Provider>
    </div>
  );
}

export default App;
