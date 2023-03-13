import { useState } from "react";
import Header from "./component/Header/Header";
import Gallery from "./component/Gallery";
import ListProducts from "./component/listProducts/ListProducts";
import ImageProducts from "./component/ImageProducts";
import Modal from "./component/Modal";
import Footer from "./component/Footer/Footer";
import "./App.css";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  const [isModalOpen, setModalOpen] = useState(true);
  const [singleProductModal, setSingleProductModal] = useState(null);
  return (
    <div className={`Main ${isDarkMode && "dark-mode"}`}>
      <Header />
      <Gallery />
      <ListProducts setSingleProductModal={setSingleProductModal} />
      <button
        className="toggle-mode"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      {isModalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
      {singleProductModal ? (
        <ImageProducts
          product={singleProductModal}
          setSingleProductModal={setSingleProductModal}
        />
      ) : null}
      <Footer title="Footer della prima applicazione React" />
    </div>
  );
};

export default App;
