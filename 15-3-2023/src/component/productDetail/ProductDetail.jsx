import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";

import "./index.css";

const ImageModal = ({ imgUrl, imgAlt, setImagesVisible }) => {
  return (
    <img onClick={() => setImagesVisible(false)} src={imgUrl} alt={imgAlt} />
  );
};

const ProductDetail = ({ productData, setModalContext, setCartList }) => {
  const [imagesVisible, setImagesVisible] = useState(false);
  const [imagesCurrent, setImagesCurrent] = useState("");

  const onHandleClose = () =>
    setModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));
  const onHandleAddCart = () => {
    setCartList((prev) => [...prev, productData]);
  };

  const onHandleImageClick = (imgUrl) => {
    setImagesVisible(true);
    setImagesCurrent(() => imgUrl);
  };
  return (
    <div className="ProductDetail">
      {imagesVisible ? (
        <ImageModal
          imgUrl={imagesCurrent}
          imgAlt={imagesCurrent}
          setImagesVisible={setImagesVisible}
        />
      ) : (
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
              <img
                onClick={() => onHandleImageClick(image)}
                src={image}
                alt={image}
                key={image}
              ></img>
            ))}
          </div>

          <h4 className="title_add_cart">Aggiungi prodotto al carrello</h4>

          <button onClick={onHandleAddCart} className="ProductDetail--cart">
            <GiShoppingCart />
          </button>
        </div>
      )}
      <button onClick={onHandleClose} className="ProductDetail_close">
        X
      </button>
    </div>
  );
};
export default ProductDetail;
