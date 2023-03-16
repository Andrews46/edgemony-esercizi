import { GiShoppingCart } from "react-icons/gi";
import "./index.css";

const ProductDetail = ({ productData, setModalContext, setCartList }) => {
  const onHandleClose = () =>
    setModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));
  const onHandleAddCart = () => {
    setCartList((prev) => [...prev, productData]);
  };
  return (
    <div className="ProductDetail">
      <div className="ProductDetail_content">
        <div className="ProductDetail_text">
          <h1>{productData.title}</h1>
          <p>{productData.description}</p>
        </div>
        <div className="ProductDetail_text_info">
          <span>{productData.price}</span>
          <span>{productData.category}</span>
        </div>
        <div className="ProductDetail_gallery">
          {productData.images.map((image) => (
            <img src={image} alt={image} key={image}></img>
          ))}
        </div>

        <button onClick={onHandleAddCart} className="ProductDetail--cart">
          <GiShoppingCart />
        </button>
        <button onClick={onHandleClose} className="ProductDetail_close">
          X
        </button>
      </div>
    </div>
  );
};
export default ProductDetail;
