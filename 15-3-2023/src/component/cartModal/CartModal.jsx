import "./index.css";
import { GiShoppingCart } from "react-icons/gi";
const CartModal = ({ productData, setModalCart, cartList }) => {
  console.log(cartList);
  const onHandleCloseModal = () =>
    setModalCart(() => ({
      visible: false,
      productData,
    }));

  return (
    <div className="CartModal">
      <div className="Cart_Modal_content" onClick={onHandleCloseModal}>
        {cartList.map((product, index) => (
          <div className="Cart_Modal_text" key={index}>
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} />
            <p>
              <em>Descr:</em> {product.description}
            </p>
            <p>
              <em>Price:</em> {product.price}$
            </p>
          </div>
        ))}
      </div>
      <p className="cartmodal">
        <GiShoppingCart className="cartmodal" />
      </p>
    </div>
  );
};
export default CartModal;
