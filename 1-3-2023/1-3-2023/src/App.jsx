import { useState } from "react";
import Header from "./component/Header/Header";
import Gallery from "./component/Gallery";
import ListProducts from "./component/listProducts/ListProducts";
import Modal from "./component/Modal";
import Footer from "./component/Footer/Footer";
import "./App.css";

const App = () => {
  const { isModalOpen, setModalOpen } = useState(true);
  return (
    <div className="title">
      <Header />
      <Gallery />
      <ListProducts />
      <Footer title="Footer della prima applicazione React" />
      {isModalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
    </div>
  );
};

export default App;
