import "./index.scss";

const Card = ({ data, setContextItem }) => {
  const onHandleClick = () => {
    setContextItem((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
    }));
  };

  return (
    <div onClick={onHandleClick} className="Card">
      <img
        className="Card_image"
        src={data.strDrinkThumb}
        alt={data.strDrink}
      />
      <div className="Card_text">
        <h3 className="Card_Title_Cocktail">{data.strDrink}</h3>
        <ul>
          <li className="card_ingrediente">Ingredienti</li>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <li>{data.strIngredient4}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
