import "./index.css";
// import ImageProducts from "../ImageProducts";

const CardProduct = ({ productData, setSingleProductModel }) => {
  // const onGetStock = () => alert(`${productData.stock}prodotti disponibili`);

  const onImageClick = () => {
    setSingleProductModel(() => productData);
  };
  return (
    <div className="CardProduct">
      <img
        onClick={onImageClick}
        src={`https://image.tmdb.org/t/p/w500` + productData.backdrop_path}
        alt="Apple"
      />
      <div className="CardProduct__text-content">
        <h4>{productData.name}</h4>
        <p className="desc">{productData.overview}</p>
        <p>{productData.vote_average} </p>
        <hr />
      </div>
    </div>
  );
};

export default CardProduct;
