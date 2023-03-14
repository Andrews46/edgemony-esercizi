import { useState } from "react";

import "./index.css";

const Content = () => {
  const [todoList, setTodoList] = useState([
    "Prima lista",
    "seconda lista ecc",
    "aggiungi lista",
  ]);
  const [newList, setNewList] = useState("");

  const handleChange = (e) => {
    setNewList(e.target.value);
  };

  const handleAdd = () => {
    if (newList !== "") {
      setTodoList([...todoList, newList]);
      setNewList("");
    }
  };

  const removeList = () => {
    setTodoList([todoList].splice());
  };

  return (
    <div className="Content">
      <h1>Es List</h1>
      <ul>
        {todoList.map((item, index) => (
          <li onClick={removeList} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <input type="text" value={newList} onChange={handleChange} />
      <button onClick={handleAdd}>Add list</button>
    </div>
  );
};

export default Content;
