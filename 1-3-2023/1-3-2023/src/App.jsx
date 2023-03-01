import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { productsList } from "./Mocks/productsList";
import Control from "./component/Control";
import Gallery from "./component/Gallery";
import ListProducts from "./component/listProducts/ListProducts";
import "./App.css";

const App = () => {
  return (
    <div className="title">
      <Header />
      <Gallery />
      <Control listDataLength={productsList.length} />
      <ListProducts listData={productsList} />
      <Footer title="Footer della prima applicazione React" />
    </div>
  );
};

export default App;
