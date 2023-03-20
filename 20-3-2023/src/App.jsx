import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Content from "./components/content";

import "./App.scss";

function App() {
  const [listCocktail, setListCocktail] = useState([]);

  useEffect(() => {
    GET("/search.php?f=b").then(({ drinks }) => {
      setListCocktail(() => drinks);
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Content data={listCocktail} />
    </div>
  );
}

export default App;
