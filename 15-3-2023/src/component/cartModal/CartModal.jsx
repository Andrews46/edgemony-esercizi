import "./index.css";
import { GiShoppingCart } from "react-icons/gi";
const CartModal = ({ productData, setModalCart }) => {
  const onHandleCloseModal = () =>
    setModalCart(() => ({
      visible: false,
      productData,
    }));

  return (
    <div className="CartModal">
      <div className="Cart_Modal_content" onClick={onHandleCloseModal}>
        <div className="Cart_Modal_text">
          {/* {productData.title.map((title) => (
            <h1>{title}</h1>
          ))} */}
          <h1>{productData.title}</h1>
          <p>{productData.description}</p>
        </div>
        <div className="Cart_Modal_text_info">
          <span>{productData.price}</span>
          <span>{productData.category}</span>
        </div>
      </div>
      <p className="cartmodal">
        <GiShoppingCart className="cartmodal" />
      </p>
    </div>
  );
};
export default CartModal;
