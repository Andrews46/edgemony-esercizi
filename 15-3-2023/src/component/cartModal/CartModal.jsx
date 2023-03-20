import "./index.css";
import { GiShoppingCart } from "react-icons/gi";
import { RiCloseCircleLine } from "react-icons/ri";
const CartModal = ({ productData, setModalCart, cartList, setCartList }) => {
  const onHandleCloseModal = () =>
    setModalCart(() => ({
      visible: false,
      productData,
    }));

  const onHandleClick = (cartProduct) => {
    const filterList = cartList.filter(
      (product) => product.id !== cartProduct.id
    );
    setCartList(() => filterList);
    localStorage.setItem("cartList", JSON.stringify(filterList));
  };

  return (
    <div className="CartModal">
      <div className="Cart_Modal_content" onClick={onHandleCloseModal}>
        {cartList.map((product, index) => (
          <div className="Cart_Modal_text" key={index}>
            <h3 className="Cart_Modal_title">{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} />
            <p>
              <em>Descr:</em> {product.description}
            </p>
            <p>
              <em>Price:</em> {product.price}$
            </p>
            <p className="delete_cart" onClick={() => onHandleClick(product)}>
              <RiCloseCircleLine />
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
