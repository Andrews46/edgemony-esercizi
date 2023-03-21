import "./index.scss";

const SingleItem = ({ data, setContextItem }) => {
  const onHandleClick = () =>
    setContextItem((prev) => ({
      ...prev,
      isVisible: false,
    }));
  console.log(data);

  return (
    <div className="SingleItem">
      <div className="SingleItem_test">
        <h2>Ingredienti</h2>
        <ul>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <li>{data.strIngredient4}</li>
        </ul>
        <h2>Istruzioni</h2>
        <ul>
          <li>{data.strInstructionsIT}</li>
        </ul>
        <button onClick={onHandleClick}>X</button>
      </div>
      <div className="SingleItem_image">
        <img
          className="SingleItem_image-random"
          src={data.strDrinkThumb}
          alt={data.strDrink}
        />
      </div>
      <div>
        <button>Indietro</button>
        <button>Avanti</button>
      </div>
    </div>
  );
};
export default SingleItem;
