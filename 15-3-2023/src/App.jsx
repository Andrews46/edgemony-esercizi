import { useState } from "react";
import CardList from "./component/cardList";
import NavBar from "./component/navBar";
import Hero from "./component/hero";
import ProductDetail from "./component/productDetail";
import Footer from "./component/footer";
import MiniCardList from "./component/miniCardList";
import CartModal from "./component/cartModal";
import "./App.css";

function App() {
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );
  const [modalContext, setModalContext] = useState({
    productData: {},
    isVisible: false,
  });
  const [modalCart, setModalCart] = useState({
    productData: {},
    visible: false,
  });

  const [searchInputValue, setSearchInputValue] = useState("");

  const localStorageCartList =
    window !== "undefined" &&
    JSON.parse(localStorage.getItem("cartList") || "[]").length;

  return (
    <div className="App">
      <NavBar
        cartListLength={localStorageCartList || cartList.length}
        setModalCart={setModalCart}
        setSearchInputValue={setSearchInputValue}
      />

      <Hero />
      <MiniCardList searchInputValue={searchInputValue} />
      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        setModalContext={setModalContext}
      />
      <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
        setModalContext={setModalContext}
      />

      <Footer />
      {modalCart.visible && (
        <CartModal
          productData={modalCart.productData}
          setModalCart={setModalCart}
          cartList={cartList}
          setCartList={setCartList}
        />
      )}
      {modalContext.isVisible && (
        <ProductDetail
          productData={modalContext.productData}
          setCartList={setCartList}
          setModalContext={setModalContext}
        />
      )}
    </div>
  );
}

export default App;
