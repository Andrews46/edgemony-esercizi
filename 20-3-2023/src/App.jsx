import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Content from "./components/content";
import SingleItem from "./components/singleItem";

import "./App.scss";

function App() {
  const [listCocktail, setListCocktail] = useState([]);
  const [category, setCategory] = useState("");
  const [contextItem, setContextItem] = useState({
    isVisible: false,
    payload: {},
  });
  useEffect(() => {
    GET("/search.php?f=b").then(({ drinks }) => {
      setListCocktail(() => drinks);
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      {contextItem.isVisible ? (
        <SingleItem
          data={listCocktail.payload}
          setContextItem={setContextItem}
        />
      ) : (
        <>
          <Hero data={listCocktail} setCategory={setCategory} />
          <Content
            data={listCocktail}
            category={category}
            setContextItem={setContextItem}
          />
        </>
      )}
    </div>
  );
}

export default App;
