import "./index.css";

const Card = ({ productData, setModalContext }) => {
  const onHandleClick = () =>
    setModalContext(() => ({
      isVisible: true,
      productData,
    }));
  return (
    <div className="Card" onClick={onHandleClick}>
      <img
        className="Card__image"
        src={productData.thumbnail}
        alt={productData.title}
      />
      <div className="Card__text">
        <h3 className="Card__text--title">{productData.title}</h3>
        <p className="Card__text--desc"></p>
        <p className="Card__text--cat">{productData.category}</p>
        <p className="Card__text--price">$ {productData.price}</p>
      </div>
    </div>
  );
};

export default Card;
