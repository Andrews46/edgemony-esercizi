import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Content from "./components/content";
import SingleItem from "./components/singleItem";
import Footer from "./components/footer";
import styles from "./App.module.scss";

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
    <div className={styles.App}>
      <NavBar />
      {contextItem.isVisible ? (
        <SingleItem
          data={contextItem.payload}
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
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
