import "./index.css";
import { GiShoppingCart } from "react-icons/gi";
const CartModal = ({ productData, setModalCart }) => {
  const onHandleClickModal = () =>
    setModalCart(() => ({
      isVisible: false,
      productData,
    }));

  return (
    <div className="CartModal">
      <div className="Cart_Modal_content">
        <div className="Cart_Modal_text">
          <h1>{productData.title}</h1>
          <p>{productData.description}</p>
        </div>
        <div className="Cart_Modal_text_info">
          <span>{productData.price}</span>
          <span>{productData.category}</span>
        </div>
      </div>
      <p className="cartmodal">
        <GiShoppingCart onClick={onHandleClickModal} className="cartmodal" />
      </p>
    </div>
  );
};
export default CartModal;
