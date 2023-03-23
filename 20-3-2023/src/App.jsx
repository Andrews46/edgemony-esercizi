import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Content from "./components/content";
import SingleItem from "./components/singleItem";
import Prenotazione from "./components/prenotazione";
import Popup from "./components/popup";
import Footer from "./components/footer";
import styles from "./App.module.scss";

function App() {
  const [listCocktail, setListCocktail] = useState([]);
  const [category, setCategory] = useState("");
  const [visualPrenotazione, setVisualPrenotazione] = useState(false);
  const [visualPopup, setVisualPopup] = useState(false);
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
      <NavBar setVisualPrenotazione={setVisualPrenotazione} />
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
          {visualPrenotazione && (
            <Prenotazione
              setVisualPrenotazione={setVisualPrenotazione}
              setVisualPopup={setVisualPopup}
            />
          )}
          {visualPopup && <Popup setVisualPopup={setVisualPopup} />}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
